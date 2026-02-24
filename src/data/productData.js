const brandCatalog = [
  {
    slug: 'fuel',
    name: 'Fuel',
    description:
      'Fuel delivers industrial-grade safety footwear, PPE, and critical safety essentials for high-demand work zones.',
  },
  {
    slug: 'polo',
    name: 'Polo',
    description:
      'Polo supports site teams with dependable workwear and protective products engineered for daily industrial use.',
  },
  {
    slug: 'utex',
    name: 'Utex',
    description:
      'Utex provides robust hand and respiratory safety solutions for fabrication, maintenance, and hazardous handling environments.',
  },
  {
    slug: 'bata',
    name: 'Bata',
    description:
      'Bata supplies certified safety shoes and occupational footwear for operations requiring consistent impact and slip protection.',
  },
  {
    slug: 'delta-plus',
    name: 'Delta Plus',
    description:
      'Delta Plus offers a broad industrial safety portfolio spanning PPE, workwear, and compliance-focused protective equipment.',
  },
  {
    slug: 'balaji-industries',
    name: 'Balaji Industries',
    description:
      'Balaji Industries supports multi-site procurement with practical and scalable safety product supply across major categories.',
  },
  {
    slug: 'apex-clothing',
    name: 'Apex Clothing',
    description:
      'Apex Clothing specializes in industrial safety wear, visibility apparel, and durable protective garments for field teams.',
  },
  {
    slug: 'xo-footwear',
    name: 'XO Footwear',
    description:
      'XO Footwear supplies heavy-duty safety shoes built for demanding factory floors and infrastructure projects.',
  },
  {
    slug: 'tornado',
    name: 'Tornado',
    description:
      'Tornado delivers protection products and fire safety support equipment aligned with enterprise operational standards.',
  },
  {
    slug: 'ultra-kk-industries',
    name: 'Ultra KK Industries',
    description:
      'Ultra KK Industries provides end-to-end industrial safety product availability for structured, high-volume deployments.',
  },
];

const categoryCatalog = [
  { slug: 'safety-shoes', name: 'Safety Shoes', shortDescription: 'Impact-resistant and anti-slip industrial safety footwear.' },
  { slug: 'safety-gloves', name: 'Safety Gloves', shortDescription: 'Protective gloves for mechanical, thermal, and chemical handling.' },
  { slug: 'safety-goggles', name: 'Safety Goggles', shortDescription: 'Eye and face protection products for active site operations.' },
  { slug: 'fire-safety', name: 'Fire Safety', shortDescription: 'Essential fire protection and emergency response equipment.' },
  { slug: 'safety-wear', name: 'Safety Wear', shortDescription: 'Industrial protective clothing and high-visibility workwear.' },
  { slug: 'safety-helmet', name: 'Safety Helmet', shortDescription: 'Head protection for construction, production, and logistics zones.' },
  { slug: 'road-safety', name: 'Road Safety', shortDescription: 'Road and traffic safety products for controlled movement areas.' },
  { slug: 'safety-mask', name: 'Safety Mask', shortDescription: 'Respiratory and airborne hazard protection solutions.' },
];

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

const buildProductsForCategory = (brand, category) => {
  const imageEntries = assetMap?.[brand.slug]?.[category.slug] || [];
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
  const categoryMap = categoryCatalog.reduce((categoryAccumulator, category) => {
    categoryAccumulator[category.slug] = buildProductsForCategory(brand, category);
    return categoryAccumulator;
  }, {});

  brandAccumulator[brand.slug] = categoryMap;
  return brandAccumulator;
}, {});

export { brandCatalog, categoryCatalog, productData };
