const brandCatalog = [
  {
    slug: 'fuel',
    name: 'Fuel',
    featuredImage: '/images/fuel/safety-shoes/product-1.jpg',
    description:
      'Fuel product lines are deployed by B. D. Enterprises for heavy-duty industrial footwear and field safety needs.',
  },
  {
    slug: 'polo',
    name: 'Polo',
    featuredImage: '/images/polo/safety-shoes/product-1.jpg',
    description:
      'Polo products support daily protective wear and reliable footwear programs across maintenance and plant operations.',
  },
  {
    slug: 'utex',
    name: 'Utex',
    featuredImage: '/images/utex/safety-helmet/product-1.jpg',
    description:
      'Utex equipment is supplied by B. D. Enterprises for helmet and industrial protection requirements in active risk zones.',
  },
  {
    slug: 'bata',
    name: 'Bata',
    featuredImage: '/images/bata/safety-shoes/product-1.jpg',
    description:
      'Bata industrial footwear is delivered for certified impact, puncture, and slip-resistant protection on production floors.',
  },
  {
    slug: 'delta-plus',
    name: 'Delta Plus',
    featuredImage: '/images/delta-plus/safety-shoes/product-1.jpg',
    description:
      'Delta Plus product supply is integrated into B. D. Enterprises service contracts for footwear and PPE standardization.',
  },
  {
    slug: 'balaji-industries',
    name: 'Balaji Industries',
    featuredImage: '/images/balaji-industries/fire-safety/product-1.jpg',
    description:
      'Balaji Industries products are used for scalable industrial safety deployments across multi-area facilities.',
  },
  {
    slug: 'apex-clothing',
    name: 'Apex Clothing',
    featuredImage: '/images/apex-clothing/safety-wear/product-1.jpg',
    description:
      'Apex Clothing supply supports uniform safety wear programs and high-visibility apparel across industrial teams.',
  },
  {
    slug: 'xo-footwear',
    name: 'XO Footwear',
    featuredImage: '/images/xo-footwear/safety-shoes/product-1.jpg',
    description:
      'XO Footwear products are sourced for long-wear industrial footwear requirements and high-mobility site operations.',
  },
  {
    slug: 'tornado',
    name: 'Tornado',
    featuredImage: '/images/tornado/fire-safety/product-1.jpg',
    description:
      'Tornado product lines are used in B. D. Enterprises fire safety equipment supply and on-site system support.',
  },
  {
    slug: 'ultra-kk-industries',
    name: 'Ultra KK Industries',
    featuredImage: '/images/ultra-kk-industries/fire-safety/product-1.jpg',
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

const getAllowedCategorySlugsForBrand = () => allCategorySlugs;

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
  return [
    {
      id: `${brand.slug}-${category.slug}-1`,
      title: `${brand.name} ${category.name}`,
      description: `${category.shortDescription} Supplied by ${brand.name} for industrial and commercial safety operations.`,
      image: `/images/${brand.slug}/${category.slug}/product-1.jpg`,
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
