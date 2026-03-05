const brandImageFolders = {
  fuel: ['/images/Fuel Shoes/product-1.jpg'],
  polo: ['/images/Polo_shoes/product-1.jpg'],
  utex: ['/images/Utex_Helmets/product-1.jpg'],
  bata: ['/images/Bata_shoes/product-1.jpg'],
  'delta-plus': ['/images/Delta Plus Shoes/product-1.jpg'],
  'balaji-industries': ['/images/balaji_Fire_Safety/product-1.jpg'],
  'apex-clothing': ['/images/Apex_Clothing/product-1.jpg'],
  'xo-footwear': ['/images/XO_Footwear/product-1.jpg'],
  tornado: ['/images/Tornado_Equipment/product-1.jpg'],
  'ultra-kk-industries': ['/images/Ultra_KK_Industries/product-1.jpg'],
};

const brandCatalog = [
  {
    slug: 'fuel',
    name: 'Fuel',
    featuredImage: brandImageFolders.fuel[0],
    description:
      'Fuel products supplied by B. D. Enterprises for certified industrial safety shoe requirements.',
  },
  {
    slug: 'polo',
    name: 'Polo',
    featuredImage: brandImageFolders.polo[0],
    description:
      'Polo safety shoe supply for operational teams requiring durable daily-use industrial footwear.',
  },
  {
    slug: 'utex',
    name: 'Utex',
    featuredImage: brandImageFolders.utex[0],
    description:
      'Utex helmet supply integrated into B. D. Enterprises PPE deployment and safety compliance planning.',
  },
  {
    slug: 'bata',
    name: 'Bata',
    featuredImage: brandImageFolders.bata[0],
    description:
      'Bata industrial safety shoes sourced for impact, puncture, and slip-resistant site operations.',
  },
  {
    slug: 'delta-plus',
    name: 'Delta Plus',
    featuredImage: brandImageFolders['delta-plus'][0],
    description:
      'Delta Plus safety shoe range supplied through B. D. Enterprises for industrial use cases.',
  },
  {
    slug: 'balaji-industries',
    name: 'Balaji Industries',
    featuredImage: brandImageFolders['balaji-industries'][0],
    description:
      'Balaji fire safety equipment supply for core protection infrastructure and readiness programs.',
  },
  {
    slug: 'apex-clothing',
    name: 'Apex Clothing',
    featuredImage: brandImageFolders['apex-clothing'][0],
    description:
      'Apex safety wear sourced for industrial uniforms and compliant protective apparel deployment.',
  },
  {
    slug: 'xo-footwear',
    name: 'XO Footwear',
    featuredImage: brandImageFolders['xo-footwear'][0],
    description:
      'XO Footwear safety shoe supply for demanding floor conditions and industrial movement zones.',
  },
  {
    slug: 'tornado',
    name: 'Tornado',
    featuredImage: brandImageFolders.tornado[0],
    description:
      'Tornado safety equipment products supplied by B. D. Enterprises for emergency preparedness.',
  },
  {
    slug: 'ultra-kk-industries',
    name: 'Ultra KK Industries',
    featuredImage: brandImageFolders['ultra-kk-industries'][0],
    description:
      'Ultra KK safety equipment supply for industrial fire safety and protection readiness requirements.',
  },
];

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

const brandCategoryRule = {
  fuel: ['safety-shoes'],
  'delta-plus': ['safety-shoes'],
  bata: ['safety-shoes'],
  polo: ['safety-shoes'],
  'balaji-industries': ['fire-safety'],
  'apex-clothing': ['safety-wear'],
  'xo-footwear': ['safety-shoes'],
  tornado: ['safety-equipment'],
  'ultra-kk-industries': ['safety-equipment'],
  utex: ['safety-helmet'],
};

const categoryImageMap = {
  fuel: {
    'safety-shoes': '/images/Fuel Shoes/product-1.jpg',
  },
  'delta-plus': {
    'safety-shoes': '/images/Delta Plus Shoes/product-1.jpg',
  },
  bata: {
    'safety-shoes': '/images/Bata_shoes/product-1.jpg',
  },
  polo: {
    'safety-shoes': '/images/Polo_shoes/product-1.jpg',
  },
  utex: {
    'safety-helmet': '/images/Utex_Helmets/product-1.jpg',
  },
  'balaji-industries': {
    'fire-safety': '/images/balaji_Fire_Safety/product-1.jpg',
  },
  'apex-clothing': {
    'safety-wear': '/images/Apex_Clothing/product-1.jpg',
  },
  'xo-footwear': {
    'safety-shoes': '/images/XO_Footwear/product-1.jpg',
  },
  tornado: {
    'safety-equipment': '/images/Tornado_Equipment/product-1.jpg',
  },
  'ultra-kk-industries': {
    'safety-equipment': '/images/Ultra_KK_Industries/product-1.jpg',
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

const getAllowedCategorySlugsForBrand = (brandSlug) => brandCategoryRule[brandSlug] || [];

const buildProductsForCategory = (brand, categorySlug) => {
  const category = getCategoryMeta(categorySlug);
  const image = categoryImageMap?.[brand.slug]?.[categorySlug];
  if (!image) {
    return [];
  }

  return [
    {
      id: `${brand.slug}-${category.slug}-1`,
      title: `${brand.name} ${category.name}`,
      description: `${category.shortDescription} Supplied by ${brand.name} for industrial and commercial safety operations.`,
      image,
      category: category.name,
      brand: brand.name,
    },
  ];
};

const productData = brandCatalog.reduce((brandAccumulator, brand) => {
  const categoryMap = getAllowedCategorySlugsForBrand(brand.slug).reduce((categoryAccumulator, categorySlug) => {
    const products = buildProductsForCategory(brand, categorySlug);
    if (products.length) {
      categoryAccumulator[categorySlug] = products;
    }
    return categoryAccumulator;
  }, {});

  brandAccumulator[brand.slug] = categoryMap;
  return brandAccumulator;
}, {});

const getBrandCategories = (brandSlug) =>
  getAllowedCategorySlugsForBrand(brandSlug)
    .filter((categorySlug) => (productData?.[brandSlug]?.[categorySlug] || []).length > 0)
    .map((categorySlug) => getCategoryMeta(categorySlug));

const getFirstBrandProductImage = (brandSlug) => {
  const folderImages = brandImageFolders[brandSlug] || [];
  if (folderImages.length > 0) {
    return folderImages[0];
  }

  const categories = getBrandCategories(brandSlug);
  for (const category of categories) {
    const image = productData?.[brandSlug]?.[category.slug]?.[0]?.image;
    if (image) {
      return image;
    }
  }
  return null;
};

export { brandCatalog, productData, getBrandCategories, getFirstBrandProductImage, getCategoryMeta };
