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
const MAX_PAGES_PER_QUERY = 3;
const OUTPUT_BASE_DIR = path.resolve(process.cwd(), 'src', 'assets', 'products');

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
      const waitTime = 600 * (index + 1);
      await delay(waitTime);
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
    return width > 0 && height > 0 && width >= height;
  });
};

const collectCandidates = async (brandSlug, categorySlug) => {
  const brandLabel = toLabel(brandSlug);
  const categoryLabel = toLabel(categorySlug);

  const queries = [
    `${brandLabel} ${categoryLabel} industrial safety product professional`,
    `${brandLabel} ${categoryLabel} industrial safety equipment professional`,
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
          if (!uniquePhotos.has(photoId)) {
            uniquePhotos.set(photoId, photo);
          }
        }

        if (uniquePhotos.size >= IMAGES_PER_CATEGORY * 3) {
          return Array.from(uniquePhotos.values());
        }

        await delay(120);
      }
    }
  }

  return Array.from(uniquePhotos.values());
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

const prepareCategoryDir = async (brandSlug, categorySlug) => {
  const categoryDir = path.join(OUTPUT_BASE_DIR, brandSlug, categorySlug);

  await fs.rm(categoryDir, { recursive: true, force: true });
  await fs.mkdir(categoryDir, { recursive: true });

  return categoryDir;
};

const downloadCategory = async (brandSlug, categorySlug) => {
  const categoryDir = await prepareCategoryDir(brandSlug, categorySlug);
  const candidates = await collectCandidates(brandSlug, categorySlug);

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
      await delay(80);
    } catch {
      await fs.rm(outputPath, { force: true });
    }
  }

  if (savedCount < IMAGES_PER_CATEGORY) {
    throw new Error(`Could not save required images for ${brandSlug}/${categorySlug}`);
  }
};

const run = async () => {
  for (const brandSlug of BRANDS) {
    for (const categorySlug of CATEGORIES) {
      await downloadCategory(brandSlug, categorySlug);
    }
  }
};

run();
