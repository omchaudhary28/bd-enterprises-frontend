const brandCatalog = [
  {
    slug: 'fuel',
    name: 'Fuel',
    featuredImage: '/images/ppes/61eTR14wUVL._AC_UF894,1000_QL80_.jpg',
    description:
      'Fuel product lines are deployed by B. D. Enterprises for heavy-duty industrial footwear and field safety needs.',
  },
  {
    slug: 'polo',
    name: 'Polo',
    featuredImage: '/images/ppes/PN-521-Chrome-Orange.jpg',
    description:
      'Polo products support daily protective wear and reliable footwear programs across maintenance and plant operations.',
  },
  {
    slug: 'utex',
    name: 'Utex',
    featuredImage: '/images/ppes/Head-Protection.webp',
    description:
      'Utex equipment is supplied by B. D. Enterprises for helmet and industrial protection requirements in active risk zones.',
  },
  {
    slug: 'bata',
    name: 'Bata',
    featuredImage: '/images/ppes/61+kLABgpCL._AC_UF894,1000_QL80_.jpg',
    description:
      'Bata industrial footwear is delivered for certified impact, puncture, and slip-resistant protection on production floors.',
  },
  {
    slug: 'delta-plus',
    name: 'Delta Plus',
    featuredImage: '/images/ppes/Foot-Protection-1536x922.webp',
    description:
      'Delta Plus product supply is integrated into B. D. Enterprises service contracts for footwear and PPE standardization.',
  },
  {
    slug: 'balaji-industries',
    name: 'Balaji Industries',
    featuredImage: '/images/fire%20extinguisher/co2-flooding-system-1000x1000.jpg',
    description:
      'Balaji Industries products are used for scalable industrial safety deployments across multi-area facilities.',
  },
  {
    slug: 'apex-clothing',
    name: 'Apex Clothing',
    featuredImage: '/images/ppes/Skin-and-Body-Protection_2022.avif',
    description:
      'Apex Clothing supply supports uniform safety wear programs and high-visibility apparel across industrial teams.',
  },
  {
    slug: 'xo-footwear',
    name: 'XO Footwear',
    featuredImage: '/images/ppes/istockphoto-947254500-1024x1024.jpg',
    description:
      'XO Footwear products are sourced for long-wear industrial footwear requirements and high-mobility site operations.',
  },
  {
    slug: 'tornado',
    name: 'Tornado',
    featuredImage: '/images/fire%20extinguisher/automated-Fire-extinguisher.webp',
    description:
      'Tornado product lines are used in B. D. Enterprises fire safety equipment supply and on-site system support.',
  },
  {
    slug: 'ultra-kk-industries',
    name: 'Ultra KK Industries',
    featuredImage: '/images/fire%20extinguisher/CO2-Fire-suppression-system.jpg',
    description:
      'Ultra KK Industries products are deployed for industrial fire and safety equipment supply in large-scale requirements.',
  },
];

const categoryMetadata = {
  'safety-shoes': {
    name: 'Safety Shoes',
    shortDescription: 'Impact-resistant and anti-slip industrial safety footwear.',
  },
  'safety-gloves': {
    name: 'Safety Gloves',
    shortDescription: 'Protective gloves for mechanical, thermal, and chemical handling.',
  },
  'safety-goggles': {
    name: 'Safety Goggles',
    shortDescription: 'Eye and face protection products for active site operations.',
  },
  'fire-safety': {
    name: 'Fire Safety',
    shortDescription: 'Essential fire protection and emergency response equipment.',
  },
  'safety-wear': {
    name: 'Safety Wear',
    shortDescription: 'Industrial protective clothing and high-visibility workwear.',
  },
  'safety-helmet': {
    name: 'Safety Helmet',
    shortDescription: 'Head protection for construction, production, and logistics zones.',
  },
  'road-safety': {
    name: 'Road Safety',
    shortDescription: 'Road and traffic safety products for controlled movement areas.',
  },
  'safety-mask': {
    name: 'Safety Mask',
    shortDescription: 'Respiratory and airborne hazard protection solutions.',
  },
};

const allCategorySlugs = Object.keys(categoryMetadata);

const strictBrandCategoryMap = {
  fuel: ['safety-shoes'],
  'delta-plus': ['safety-shoes'],
  bata: ['safety-shoes'],
  'ultra-kk-industries': ['fire-safety', 'safety-helmet', 'safety-gloves', 'safety-goggles', 'safety-mask'],
  'balaji-industries': allCategorySlugs,
  'apex-clothing': allCategorySlugs,
  'xo-footwear': allCategorySlugs,
  tornado: allCategorySlugs,
};

const assetContext = require.context('../assets/products', true, /\.(png|jpe?g|webp|avif|svg)$/i);

const assetMap = assetContext.keys().reduce((accumulator, key) => {
  const matches = key.match(/^\.\/([^/]+)\/([^/]+)\/([^/]+)$/);

  if (!matches) {
    return accumulator;
  }

  const [, brandSlug, categorySlug, fileName] = matches;

  if (!accumulator[brandSlug]) {
    accumulator[brandSlug] = {};
  }

  if (!accumulator[brandSlug][categorySlug]) {
    accumulator[brandSlug][categorySlug] = [];
  }

  accumulator[brandSlug][categorySlug].push({
    src: assetContext(key),
    fileName,
  });

  return accumulator;
}, {});

const getAllowedCategorySlugsForBrand = (brandSlug) => strictBrandCategoryMap[brandSlug] || allCategorySlugs;

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

const buildProductsForCategory = (brand, categorySlug) => {
  const category = getCategoryMeta(categorySlug);
  const imageEntries = assetMap?.[brand.slug]?.[categorySlug] || [];
  const sortedEntries = [...imageEntries].sort((left, right) => {
    const leftMatch = String(left.fileName).match(/product-(\d+)/i);
    const rightMatch = String(right.fileName).match(/product-(\d+)/i);

    if (leftMatch && rightMatch) {
      return Number(leftMatch[1]) - Number(rightMatch[1]);
    }

    return String(left.fileName).localeCompare(String(right.fileName));
  });

  return sortedEntries.map((entry, index) => ({
    id: `${brand.slug}-${category.slug}-${index + 1}`,
    title: `${brand.name} ${category.name}`,
    description: `${category.shortDescription} Supplied by ${brand.name} for industrial and commercial safety operations.`,
    image: entry.src,
    category: category.name,
    brand: brand.name,
  }));
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
