const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs/promises');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(process.cwd(), '.env'), quiet: true });

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

if (!PEXELS_API_KEY) {
  throw new Error('PEXELS_API_KEY is required in .env');
}

const BRANDS = [
  'fuel',
  'polo',
  'utex',
  'bata',
  'delta-plus',
  'balaji-industries',
  'apex-clothing',
  'xo-footwear',
  'tornado',
  'ultra-kk-industries',
];

const CATEGORIES = [
  'safety-shoes',
  'safety-gloves',
  'safety-goggles',
  'fire-safety',
  'safety-wear',
  'safety-helmet',
  'road-safety',
  'safety-mask',
];

const IMAGES_PER_CATEGORY = 8;
const SEARCH_PAGE_SIZE = 80;
const MAX_PAGES_PER_QUERY = 4;
const OUTPUT_BASE_DIR = path.resolve(process.cwd(), 'src', 'assets', 'products');
const TEMP_OUTPUT_BASE_DIR = path.resolve(process.cwd(), 'src', 'assets', 'products-temp');

const BLOCKLIST_TERMS = [
  'portrait',
  'selfie',
  'fashion',
  'smile',
  'wedding',
  'party',
  'lifestyle',
  'office worker',
  'family',
  'kid',
  'child',
  'casual',
  'vacation',
  'beach',
  'food',
  'restaurant',
  'travel',
  'model',
];

const PREFERRED_TERMS = [
  'safety',
  'industrial',
  'helmet',
  'shoes',
  'gloves',
  'goggles',
  'mask',
  'equipment',
  'protective',
  'fire',
  'worker',
  'construction',
  'ppe',
];

const client = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  timeout: 30000,
  headers: {
    Authorization: PEXELS_API_KEY,
  },
});

const toLabel = (value) =>
  value
    .split('-')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const withRetry = async (fn, attempts = 4) => {
  let lastError;
  for (let index = 0; index < attempts; index += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const status = error?.response?.status;
      const retryable = !status || status >= 500 || status === 429;
      if (!retryable || index === attempts - 1) {
        break;
      }
      await delay(700 * (index + 1));
    }
  }
  throw lastError;
};

const searchPhotos = async (query, orientation, page) => {
  const response = await withRetry(() =>
    client.get('/search', {
      params: {
        query,
        orientation,
        per_page: SEARCH_PAGE_SIZE,
        page,
      },
    })
  );

  const photos = Array.isArray(response?.data?.photos) ? response.data.photos : [];

  return photos.filter((photo) => {
    const width = Number(photo?.width || 0);
    const height = Number(photo?.height || 0);
    return width >= 900 && height >= 700 && width >= height;
  });
};

const normalizeText = (value) => String(value || '').toLowerCase();

const relevanceScore = (photo, categorySlug) => {
  const haystack = `${normalizeText(photo?.alt)} ${normalizeText(categorySlug)}`;

  const blocked = BLOCKLIST_TERMS.some((term) => haystack.includes(term));
  if (blocked) {
    return -1;
  }

  const preferredCount = PREFERRED_TERMS.reduce(
    (count, term) => (haystack.includes(term) ? count + 1 : count),
    0
  );

  return preferredCount;
};

const collectCandidates = async (brandSlug, categorySlug, globalUsedPhotoIds) => {
  const brandLabel = toLabel(brandSlug);
  const categoryLabel = toLabel(categorySlug);

  const queries = [
    `${brandLabel} ${categoryLabel} industrial safety product professional`,
    `${brandLabel} ${categoryLabel} industrial safety equipment professional`,
    `${brandLabel} ${categoryLabel} PPE industrial product professional`,
    `${categoryLabel} industrial safety product professional`,
  ];

  const orientations = ['landscape', 'square'];
  const uniquePhotos = new Map();

  for (const query of queries) {
    for (const orientation of orientations) {
      for (let page = 1; page <= MAX_PAGES_PER_QUERY; page += 1) {
        const photos = await searchPhotos(query, orientation, page);

        for (const photo of photos) {
          const photoId = String(photo.id);
          if (globalUsedPhotoIds.has(photoId)) {
            continue;
          }

          const score = relevanceScore(photo, categorySlug);
          if (score < 0) {
            continue;
          }

          if (!uniquePhotos.has(photoId)) {
            uniquePhotos.set(photoId, {
              photo,
              score,
            });
          }
        }

        if (uniquePhotos.size >= IMAGES_PER_CATEGORY * 4) {
          break;
        }

        await delay(110);
      }
    }
  }

  return Array.from(uniquePhotos.values())
    .sort((left, right) => right.score - left.score)
    .map((entry) => entry.photo);
};

const optimizeAndSave = async (url, targetPath) => {
  const response = await withRetry(() =>
    axios.get(url, {
      responseType: 'arraybuffer',
      timeout: 45000,
    })
  );

  const inputBuffer = Buffer.from(response.data);

  await sharp(inputBuffer)
    .rotate()
    .resize({
      width: 1200,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 80,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: '4:2:0',
    })
    .toFile(targetPath);
};

const prepareCategoryDir = async (brandSlug, categorySlug, baseDir) => {
  const categoryDir = path.join(baseDir, brandSlug, categorySlug);
  await fs.rm(categoryDir, { recursive: true, force: true });
  await fs.mkdir(categoryDir, { recursive: true });
  return categoryDir;
};

const replaceCategoryDir = async (brandSlug, categorySlug) => {
  const liveDir = path.join(OUTPUT_BASE_DIR, brandSlug, categorySlug);
  const tempDir = path.join(TEMP_OUTPUT_BASE_DIR, brandSlug, categorySlug);
  const backupDir = `${liveDir}.bak`;

  await fs.rm(backupDir, { recursive: true, force: true });
  await fs.rename(liveDir, backupDir).catch(() => undefined);

  try {
    await fs.mkdir(path.dirname(liveDir), { recursive: true });
    await fs.rename(tempDir, liveDir);
    await fs.rm(backupDir, { recursive: true, force: true });
  } catch (error) {
    await fs.rm(liveDir, { recursive: true, force: true }).catch(() => undefined);
    await fs.rename(backupDir, liveDir).catch(() => undefined);
    throw error;
  }
};

const downloadCategory = async (brandSlug, categorySlug, globalUsedPhotoIds) => {
  const categoryDir = await prepareCategoryDir(brandSlug, categorySlug, TEMP_OUTPUT_BASE_DIR);
  const candidates = await collectCandidates(brandSlug, categorySlug, globalUsedPhotoIds);

  if (candidates.length < IMAGES_PER_CATEGORY) {
    throw new Error(`Insufficient images for ${brandSlug}/${categorySlug}`);
  }

  let savedCount = 0;

  for (const candidate of candidates) {
    if (savedCount >= IMAGES_PER_CATEGORY) {
      break;
    }

    const sourceUrl =
      candidate?.src?.large2x || candidate?.src?.large || candidate?.src?.original || candidate?.src?.medium;

    if (!sourceUrl) {
      continue;
    }

    const outputPath = path.join(categoryDir, `product-${savedCount + 1}.jpg`);

    try {
      await optimizeAndSave(sourceUrl, outputPath);
      savedCount += 1;
      globalUsedPhotoIds.add(String(candidate.id));
      await delay(90);
    } catch {
      await fs.rm(outputPath, { force: true });
    }
  }

  if (savedCount < IMAGES_PER_CATEGORY) {
    throw new Error(`Could not save required images for ${brandSlug}/${categorySlug}`);
  }

  await replaceCategoryDir(brandSlug, categorySlug);
};

const run = async () => {
  const globalUsedPhotoIds = new Set();
  await fs.rm(TEMP_OUTPUT_BASE_DIR, { recursive: true, force: true });

  for (const brandSlug of BRANDS) {
    for (const categorySlug of CATEGORIES) {
      await downloadCategory(brandSlug, categorySlug, globalUsedPhotoIds);
    }
  }

  await fs.rm(TEMP_OUTPUT_BASE_DIR, { recursive: true, force: true });
};

run();
