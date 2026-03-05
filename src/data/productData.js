import brandImageManifest from './brandImageManifest';

const categoryMetadata = {
  'safety-shoes': {
    name: 'Safety Shoes',
    shortDescription: 'Certified industrial safety footwear for impact and slip resistance.',
  },
  'safety-helmet': {
    name: 'Safety Helmets',
    shortDescription: 'Industrial head protection for active operational and construction environments.',
  },
  'safety-wear': {
    name: 'Safety Wear',
    shortDescription: 'Protective industrial wear and safety apparel for field operations.',
  },
  'fire-safety': {
    name: 'Fire Safety Equipment',
    shortDescription: 'Core fire safety equipment for suppression readiness and emergency response.',
  },
  'safety-equipment': {
    name: 'Safety Equipment',
    shortDescription: 'Industrial safety equipment for prevention, preparedness, and response support.',
  },
};

const brandSupplyConfig = {
  fuel: {
    name: 'Fuel',
    description: 'Fuel products supplied by B. D. Enterprises for certified industrial safety shoe requirements.',
    folder: 'Fuel_Shoes',
    categories: ['safety-shoes'],
  },
  'delta-plus': {
    name: 'Delta Plus',
    description: 'Delta Plus safety shoe range supplied through B. D. Enterprises for industrial use cases.',
    folder: 'Delta_Plus_Shoes',
    categories: ['safety-shoes'],
  },
  bata: {
    name: 'Bata',
    description: 'Bata industrial safety shoes sourced for impact, puncture, and slip-resistant site operations.',
    folder: 'Bata_shoes',
    categories: ['safety-shoes'],
  },
  polo: {
    name: 'Polo',
    description: 'Polo safety shoe supply for operational teams requiring durable daily-use industrial footwear.',
    folder: 'Polo_shoes',
    categories: ['safety-shoes'],
  },
  utex: {
    name: 'Utex',
    description: 'Utex helmet supply integrated into B. D. Enterprises PPE deployment and safety compliance planning.',
    folder: 'Utex_Helmets',
    categories: ['safety-helmet'],
  },
  'ultra-kk-industries': {
    name: 'Ultra KK Industries',
    description: 'Ultra KK safety equipment supply for industrial fire safety and protection readiness requirements.',
    folder: 'Ultra_KK_Industries',
    categories: ['safety-equipment'],
  },
  'balaji-industries': {
    name: 'Balaji Industries',
    description: 'Balaji fire safety equipment supply for core protection infrastructure and readiness programs.',
    folder: 'balaji_Fire_Safety',
    categories: ['fire-safety'],
  },
  'apex-clothing': {
    name: 'Apex Clothing',
    description: 'Apex safety wear sourced for industrial uniforms and compliant protective apparel deployment.',
    folder: 'Apex_Clothing',
    categories: ['safety-wear'],
  },
  'xo-footwear': {
    name: 'XO Footwear',
    description: 'XO Footwear safety shoe supply for demanding floor conditions and industrial movement zones.',
    folder: 'XO_Footwear',
    categories: ['safety-shoes'],
  },
  tornado: {
    name: 'Tornado',
    description: 'Tornado safety equipment products supplied by B. D. Enterprises for emergency preparedness.',
    folder: 'Tornado_Equipment',
    categories: ['safety-equipment'],
  },
};

const getCategoryMeta = (categorySlug) => {
  const fallbackName = String(categorySlug)
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
  const metadata = categoryMetadata[categorySlug];
  return {
    slug: categorySlug,
    name: metadata?.name || fallbackName,
    shortDescription: metadata?.shortDescription || `${fallbackName} products for industrial safety operations.`,
  };
};

const toImagePath = (folder, fileName) => encodeURI(`/images/${folder}/${fileName}`);

const getBrandImageFiles = (brandSlug) => {
  const folder = brandSupplyConfig?.[brandSlug]?.folder;
  if (!folder) {
    return [];
  }

  const rawFiles = brandImageManifest?.[folder] || [];
  return Array.from(new Set(rawFiles.filter(Boolean)));
};

const getBrandImageList = (brandSlug) => {
  const folder = brandSupplyConfig?.[brandSlug]?.folder;
  if (!folder) {
    return [];
  }

  return getBrandImageFiles(brandSlug).map((fileName) => toImagePath(folder, fileName));
};

const brandCatalog = Object.entries(brandSupplyConfig)
  .map(([slug, config]) => {
    const images = getBrandImageList(slug);
    return {
      slug,
      name: config.name,
      description: config.description,
      featuredImage: images[0] || '',
      imageCount: images.length,
    };
  })
  .filter((brand) => brand.imageCount > 0)
  .map(({ imageCount, ...brand }) => brand);

const buildProductsForCategory = (brand, categorySlug) => {
  const category = getCategoryMeta(categorySlug);
  const folder = brandSupplyConfig?.[brand.slug]?.folder || '';
  const files = getBrandImageFiles(brand.slug);

  return files.map((fileName, index) => ({
    id: `${brand.slug}-${category.slug}-${index + 1}`,
    title: `${brand.name} ${category.name} Product ${index + 1}`,
    description: `${category.shortDescription} Supplied by ${brand.name} for industrial and commercial safety operations.`,
    image: toImagePath(folder, fileName),
    category: category.name,
    brand: brand.name,
  }));
};

const productData = brandCatalog.reduce((brandAccumulator, brand) => {
  const brandConfig = brandSupplyConfig[brand.slug];
  const categoryMap = (brandConfig?.categories || []).reduce((categoryAccumulator, categorySlug) => {
    const products = buildProductsForCategory(brand, categorySlug);
    if (products.length > 0) {
      categoryAccumulator[categorySlug] = products;
    }
    return categoryAccumulator;
  }, {});

  brandAccumulator[brand.slug] = categoryMap;
  return brandAccumulator;
}, {});

const getBrandCategories = (brandSlug) =>
  (brandSupplyConfig?.[brandSlug]?.categories || [])
    .filter((categorySlug) => (productData?.[brandSlug]?.[categorySlug] || []).length > 0)
    .map((categorySlug) => getCategoryMeta(categorySlug));

const getFirstBrandProductImage = (brandSlug) => getBrandImageList(brandSlug)[0] || null;

export { brandCatalog, productData, getBrandCategories, getFirstBrandProductImage, getCategoryMeta };
