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

const productContentManifest = {
  Fuel_Shoes: {
    '8_-_2024-12-05T165622.978.jpg': {
      title: 'Fuel AeroKnit Steel Toe Safety Shoe',
      description:
        'This low-ankle industrial shoe is built for daily personnel movement in fire pump rooms and warehouse aisles where dropped tools are common. A steel toe cap and puncture-resistant insole absorb impact energy while the deep anti-slip outsole maintains grip on wet concrete and oily tiles. It is deployed in factories, logistics yards, and construction storage zones to reduce crush injuries, sole punctures, and slip-related fall incidents.',
    },
    '8_12_c7e8a479-7021-41d8-89b0-928541bff350.jpg': {
      title: 'Fuel LeatherMesh Utility Safety Shoe',
      description:
        'This steel-toe safety shoe is designed for maintenance crews that shift between mechanical workstations and fire protection utility corridors. The reinforced forefoot shell and anti-skid rubber outsole distribute load and improve traction during ladder access, hose handling, and panel inspection tasks. It is commonly used in manufacturing units and warehouses where impact and puncture hazards must be controlled without sacrificing mobility.',
    },
    'Screenshot 2026-02-25 201652.png': {
      title: 'Fuel Derby Pro Safety Shoe',
      description:
        'This derby-style safety shoe protects workers operating around pallet movement, pump skids, and steel racking. Its internal steel toe guard resists compression from falling components, and the textured anti-slip sole channels away water and light oil to stabilize footing. The model is suitable for construction stores and production floors where puncture risks from nails, shavings, and fasteners are frequent.',
    },
    'Screenshot 2026-02-25 202022.png': {
      title: 'Fuel Rugged Grip Safety Shoe',
      description:
        'This rugged safety shoe is intended for material handling teams working in uneven outdoor and indoor industrial zones. The steel toe section protects against front-end impact, while the multi-lug outsole creates higher friction on dusty concrete, ramped loading bays, and wet service pathways. It is used in factories, warehouses, and construction depots to lower the probability of toe crush and slip-induced strain injuries.',
    },
    'WhatsApp Image 2026-02-24 at 11.13.32 AM.jpeg': {
      title: 'Fuel SportShield Safety Shoe',
      description:
        'This sports-profile safety shoe supports technicians who require faster movement with certified toe protection in active plant operations. A steel reinforcement in the toe box and anti-slip tread work together to resist impact from hand tools and prevent skidding on smooth industrial flooring. The design is applied in assembly lines, service workshops, and warehouse dispatch areas where puncture and collision exposure is high.',
    },
    'WhatsApp Image 2026-02-24 at 11.13.45 AM.jpeg': {
      title: 'Fuel QuickLock Strap Safety Shoe',
      description:
        'This quick-closure safety shoe is engineered for operators who need secure fitment with reduced lace entanglement risk around moving equipment. Its steel toe cap blocks compression injuries, and the anti-slip outsole improves contact stability on wet loading docks, tiled utility rooms, and polished aisle surfaces. It is used in warehouses and light fabrication units to maintain foot protection during repetitive walking, lifting, and emergency response movement.',
    },
  },
  Delta_Plus_Shoes: {
    '71QkL6G3VoL.jpg': {
      title: 'Delta Plus Industrial Low Ankle Safety Shoe',
      description:
        'This low-ankle Delta Plus shoe is built for industrial operators handling heavy stock, hand tools, and mechanical components. The steel toe shell absorbs frontal impact while the anti-slip sole geometry improves traction over oily shop floors and wet warehouse passages. It is widely used in fabrication areas, logistics platforms, and construction support yards to minimize crush and puncture injuries.',
    },
    'delta-plus-jet3-s1p-anti-static-safety-shoes.jpg': {
      title: 'Delta Plus Jet3 S1P AntiStatic Safety Shoe',
      description:
        'This S1P-rated safety shoe is intended for electrical and electronics-adjacent work where static control and toe impact protection are both required. The steel toe and penetration-resistant midsole guard against dropped parts and sharp floor debris, while the anti-slip outsole keeps controlled footing on smooth factory surfaces. It is used in assembly plants, panel rooms, and warehouse operations to reduce injury probability during continuous shift activity.',
    },
    'delta-plus-phoenix-s3-safety-boots-front.jpg': {
      title: 'Delta Plus Phoenix S3 Safety Boot',
      description:
        'This high-ankle S3 boot is designed for tougher duty cycles in construction and heavy industrial maintenance. A steel toe barrier and reinforced sole construction protect against impact and puncture hazards, and the deep-tread anti-slip base improves grip on wet ramps, gravel, and concrete. The boot is deployed where workers transition between outdoor yards and indoor production zones that demand high foot stability.',
    },
    'delta-plus-saga-s3-brown-safety-boots(1).jpg': {
      title: 'Delta Plus Saga S3 Work Boot',
      description:
        'This S3 leather work boot provides steel toe protection for operators exposed to dropped fittings, equipment parts, and material stacks. Its anti-slip sole pattern and rigid base structure support safe walking over mixed terrain including warehouse floors, construction pathways, and loading areas. The model helps reduce toe compression trauma, sole punctures, and slip accidents during long-duration industrial shifts.',
    },
    'DMEU_Y2340724_11_std.lang.all.jpg': {
      title: 'Delta Plus High Traction Nubuck Safety Boot',
      description:
        'This high-cut nubuck safety boot is intended for teams operating in abrasive and debris-prone workplaces. The steel toe front and puncture-resistant footbed block impact and upward intrusion hazards, while the anti-slip outsole stabilizes movement across dusty concrete and metal grating. It is used in plant maintenance, construction staging areas, and warehouse transfer zones to improve overall foot injury prevention.',
    },
  },
  Bata_shoes: {
    '14436055BLACK.jpg': {
      title: 'Bata Industrial Classic Safety Shoe',
      description:
        'This Bata low-cut safety shoe is designed for routine industrial floor duty where toe impact is a primary risk. An internal steel toe cap shields the forefoot from falling tools, and the anti-slip outsole increases friction on polished, wet, or oil-affected surfaces. It is commonly issued in factories, warehouse aisles, and construction stores to reduce foot trauma and improve worker stability.',
    },
    '71HYBOnOeRL._AC_.jpg': {
      title: 'Bata Reinforced Derby Safety Shoe',
      description:
        'This reinforced derby model protects operators who handle dense components, crates, and steel fittings during daily shift work. The steel toe section resists compression loads while the broad anti-slip sole provides controlled footing during push, pull, and lift operations on hard industrial floors. It is used in manufacturing cells and logistics docks to reduce impact, puncture, and slip-related injuries.',
    },
    'Bata-PU-SD-Zappy-Derby-Safety-Shoes.jpg': {
      title: 'Bata PU SD Zappy Safety Shoe',
      description:
        'This PU sole safety shoe is engineered for industrial sites requiring both steel toe protection and slip-dissipative stability. Its steel forefoot shield mitigates injury from dropped hardware, and the anti-slip PU outsole maintains balance when traversing smooth workshop tiles and warehouse lanes. The shoe is suited for electrical maintenance, assembly, and storage operations where puncture and floor-slip exposure is persistent.',
    },
    'IMG_8123.png': {
      title: 'Bata SiteGrip Low Ankle Safety Shoe',
      description:
        'This low-ankle safety shoe is built for plant and warehouse personnel who spend extended hours on concrete floors. The steel toe cap protects against impact from hand tools and stacked materials, and the treaded outsole improves grip on damp utility corridors and loading areas. It supports safer movement in construction supply zones where puncture resistance and anti-slip behavior are mandatory.',
    },
    'PWR-310_311.png': {
      title: 'Bata PWR High Ankle Safety Boot',
      description:
        'This high-ankle safety boot is intended for heavy-duty tasks involving lifting, site transit, and equipment handling. A steel toe guard and puncture-resistant sole structure protect the foot against compression and sharp penetration, while the anti-slip outsole secures traction on uneven and contaminated floors. It is used in construction sites, fabrication units, and warehouse yards to lower severe foot injury risk.',
    },
  },
  Polo_shoes: {
    '41rjlFj5KIL._AC_.jpg': {
      title: 'Polo Stitched Upper Safety Shoe',
      description:
        'This stitched leather safety shoe is built for industrial workers operating around stored loads and mechanical assemblies. The steel toe front protects against impact from dropped objects, and the anti-slip sole pattern improves walking stability on wet and oily warehouse pathways. It is used in production blocks and construction stores where puncture control and reliable floor grip are critical.',
    },
    'indcare-polo-pvc-industrial-safety-shoes-818.jpg': {
      title: 'Polo PVC Industrial Safety Shoe',
      description:
        'This PVC-based safety shoe is designed for work areas exposed to moisture, chemical splash, and frequent floor cleaning cycles. A reinforced steel toe absorbs frontal impact while the anti-slip outsole maintains traction on smooth process-area flooring. It is deployed in utility rooms, warehouses, and maintenance zones to protect against puncture incidents and slip-driven falls.',
    },
    'polo-safety-shoes-tan-color-1000x1000.jpg': {
      title: 'Polo Tan Leather Safety Shoe',
      description:
        'This tan leather safety shoe supports supervisors and technicians who need durable protection with all-day wear comfort. The steel toe cap shields feet from falling fittings, and the anti-slip sole helps maintain contact on dusty concrete, ramps, and tiled industrial corridors. It is commonly used in warehouses, light construction teams, and plant support services to reduce foot-impact and penetration injuries.',
    },
    'safety-shoes-make-7satr-polo-1000x1000.jpg': {
      title: 'Polo Heavy Sole Safety Derby',
      description:
        'This heavy-sole derby safety shoe is configured for personnel moving between receiving bays, storage rows, and machine-side tasks. Its steel toe barrier resists compression events from dense materials, and the anti-slip outsole stabilizes gait during quick directional changes on hard industrial floors. The model improves operational safety in factories and warehouses where slips and punctures are recurring hazards.',
    },
    'WhatsApp Image 2026-02-24 at 11.13.33 AM.jpeg': {
      title: 'Polo Industrial Core Safety Shoe',
      description:
        'This core industrial safety shoe provides steel toe defense for teams handling cartons, hardware, and moderate-weight assemblies. The anti-slip outsole delivers dependable grip on wet loading platforms and smooth internal passages to prevent loss of footing. It is used across construction material depots and warehouse operations to reduce toe trauma, puncture injury, and evacuation-time slips.',
    },
  },
  Utex_Helmets: {
    '16834-106_image_0.jpg': {
      title: 'Utex White Vented Safety Helmet',
      description:
        'This white industrial helmet is intended to protect the head from falling tools and overhead material fragments on active worksites. The rigid shell and internal suspension spread impact force across the crown while preserving clearance between shell and skull for shock absorption. It is used by plant supervisors, electrical teams, and construction staff to reduce traumatic head injury during routine and emergency operations.',
    },
    '16834-127_image_0.jpg': {
      title: 'Utex Green Site Safety Helmet',
      description:
        'This green safety helmet is designed for continuous head protection in multi-trade industrial and construction zones. Its high-strength shell works with an adjustable suspension cradle to absorb impact energy and maintain secure fit through movement, bending, and climbing tasks. It improves worker safety by lowering the risk of head trauma from falling objects and incidental collisions.',
    },
    'IMG-20251203-WA0002.jpg': {
      title: 'Utex Ratchet Fit Safety Helmet with Chin Strap',
      description:
        'This helmet model includes a ratchet-adjustable headband and chin strap for stable retention during elevated or high-mobility work. The impact-resistant shell and suspension assembly dissipate shock from overhead strikes while keeping the helmet correctly positioned. It is deployed in construction, warehouses, and heavy industrial facilities where controlled head protection is mandatory.',
    },
  },
  balaji_Fire_Safety: {
    'Screenshot 2026-02-25 210859.png': {
      title: 'Balaji Hydrant Landing Valve with Handwheel',
      description:
        'This landing valve is a primary discharge control point in a wet riser and hydrant firefighting network. The handwheel-operated stem opens the internal seat to regulate high-pressure water flow from the vertical riser to the hose outlet coupling. It is installed on landing levels and industrial hydrant points so firefighters or trained facility staff can deliver controlled water streams rapidly during fire attack.',
    },
    'Screenshot 2026-02-25 210943.png': {
      title: 'Balaji Angle Pattern Hydrant Landing Valve',
      description:
        'This angle-pattern landing valve directs water from the hydrant riser into a connected fire hose for manual suppression operations. Its valve chamber and spindle mechanism modulate flow and pressure to support nozzle control and effective reach during firefighting. The unit is used in factories, commercial towers, and warehouses where fixed hydrant systems form the first response infrastructure.',
    },
    'Screenshot 2026-02-25 210959.png': {
      title: 'Balaji Hydrant Outlet Coupling Assembly',
      description:
        'This hydrant outlet assembly provides the instantaneous connection interface between a landing valve and a firefighting hose line. The threaded and capped outlet arrangement secures the port when idle and enables fast hose coupling when an emergency response starts. It supports reliable water delivery from hydrant systems and reduces setup time for in-house fire teams and responders.',
    },
    'Screenshot 2026-02-25 211016.png': {
      title: 'Balaji Spindle Operated Landing Valve',
      description:
        'This spindle-operated landing valve functions as a manual isolation and flow control device in hydrant distribution piping. Turning the top spindle lifts the seat assembly, allowing pressurized water to pass from the riser into branch hose lines for suppression duty. The valve is critical in industrial fire stations and staircase landings where dependable water command improves firefighting effectiveness and personnel safety.',
    },
    'Screenshot 2026-02-25 211053.png': {
      title: 'Balaji 63 mm Fire Hose with Couplings',
      description:
        'This 63 mm fire hose carries water from hydrant outlets to branch pipes during manual firefighting operations. Its reinforced flexible jacket withstands working pressure while the end couplings lock into landing valves and nozzles for continuous flow delivery. It is used by facility emergency teams in warehouses and plants to project water quickly toward Class A fire loads and protect escape routes.',
    },
    'Screenshot 2026-02-25 211134.png': {
      title: 'Balaji Golden Coated Branch Pipe Nozzle',
      description:
        'This branch pipe nozzle converts hydrant hose flow into a directed jet or controlled stream for fire knockdown. Internal bore geometry accelerates water velocity, improving throw distance and penetration on combustibles in storage and processing zones. It is operated by firefighters and trained response crews to apply water accurately while maintaining safer stand-off distance from heat and smoke.',
    },
    'Screenshot 2026-02-25 211154.png': {
      title: 'Balaji Double Door Hydrant Hose Cabinet',
      description:
        'This hydrant cabinet stores hoses, nozzles, and accessories in a protected, visible enclosure near fire points. The cabinet keeps critical equipment organized and immediately accessible so response teams can deploy water lines without delay. It is installed in industrial buildings and warehouses to maintain hydrant readiness and reduce critical response time during an emergency.',
    },
    'Screenshot 2026-02-25 211257.png': {
      title: 'Balaji Hose Reel Drum Assembly',
      description:
        'This hose reel drum provides semi-rigid first-aid water discharge for incipient fire control before full hose deployment. Water remains connected through the reel swivel, enabling rapid pull-and-spray action with minimal setup from hydrant-fed piping. It is commonly mounted in corridors, utility blocks, and plant sections to support quick intervention and improved life safety during early fire development.',
    },
  },
  Ultra_KK_Industries: {
    '414QzFhBtXL.jpg': {
      title: 'Ultra KK Portable ABC Dry Powder Extinguisher',
      description:
        'This portable ABC extinguisher is designed for quick suppression of Class A, B, and C fire scenarios in industrial work areas. Pressurized dry chemical powder is discharged through the nozzle to separate fuel from oxygen and interrupt the combustion chain reaction. It is used in warehouses, electrical rooms, and machinery zones to control early-stage fires and reduce escalation risk.',
    },
    '61xKJune7mL.jpg': {
      title: 'Ultra KK Hose Type ABC Fire Extinguisher',
      description:
        'This hose-equipped ABC extinguisher supports more controlled aiming for localized fire suppression on equipment, storage racks, and process points. The stored-pressure system expels dry powder that blankets fuel surfaces and inhibits free-radical reactions, effectively breaking the fire triangle. It is deployed in factories and commercial facilities as a first-response device to reduce downtime and protect personnel.',
    },
    'Industrial-fire-extinguishers-Made-with-PosterMyWall.jpg': {
      title: 'Ultra KK Cylinder Bank Clean Agent Suppression System',
      description:
        'This cylinder bank system is engineered for total flooding fire suppression in high-value enclosed spaces such as control rooms and electrical switchgear areas. On detection command, manifolded cylinders release extinguishing agent through a fixed piping network to rapidly lower combustion-supporting conditions and suppress flame propagation. The system provides fast, uniform coverage that protects critical assets while supporting safer evacuation and firefighting access.',
    },
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

const getProductContent = (folder, fileName, brand, category, index) => {
  const mapped = productContentManifest?.[folder]?.[fileName];
  if (mapped) {
    return mapped;
  }

  return {
    title: `${brand.name} ${category.name} Model ${index + 1}`,
    description: `${category.shortDescription} Supplied by ${brand.name} for industrial and commercial safety operations.`,
  };
};

const buildProductsForCategory = (brand, categorySlug) => {
  const category = getCategoryMeta(categorySlug);
  const folder = brandSupplyConfig?.[brand.slug]?.folder || '';
  const files = getBrandImageFiles(brand.slug);

  return files.map((fileName, index) => {
    const content = getProductContent(folder, fileName, brand, category, index);
    return {
      id: `${brand.slug}-${category.slug}-${index + 1}`,
      title: content.title,
      description: content.description,
      image: toImagePath(folder, fileName),
      category: category.name,
      brand: brand.name,
    };
  });
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
