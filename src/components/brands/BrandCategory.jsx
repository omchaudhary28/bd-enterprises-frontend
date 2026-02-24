import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { brandCatalog, categoryCatalog, productData } from '../../data/productData';

const BrandCategory = () => {
  const { brandName, categoryName } = useParams();
  const prefersReduced = useReducedMotion();

  const brand = brandCatalog.find((entry) => entry.slug === brandName);
  const category = categoryCatalog.find((entry) => entry.slug === categoryName);

  if (!brand || !category) {
    return <Navigate to="/brands" replace />;
  }

  const products = productData?.[brand.slug]?.[category.slug] || [];

  if (!products.length) {
    return <Navigate to={`/brands/${brand.slug}`} replace />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F9FA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(247,127,0,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_82%,rgba(214,40,40,0.15),transparent_32%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
          className="mb-10 md:mb-14"
        >
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E9ECEF]/80 md:text-sm">
            <Link to="/brands" className="rounded-full border border-[#E9ECEF]/20 bg-[#1C1C1C] px-3 py-1.5 transition-all duration-300 hover:border-[#FCBF49]/70 hover:text-[#FCBF49]">
              Brands
            </Link>
            <span>/</span>
            <Link to={`/brands/${brand.slug}`} className="rounded-full border border-[#E9ECEF]/20 bg-[#1C1C1C] px-3 py-1.5 transition-all duration-300 hover:border-[#FCBF49]/70 hover:text-[#FCBF49]">
              {brand.name}
            </Link>
            <span>/</span>
            <span className="rounded-full border border-[#F77F00]/60 bg-[#F77F00]/15 px-3 py-1.5 text-[#FCBF49]">{category.name}</span>
          </div>

          <div className="rounded-3xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-6 md:p-10">
            <h1 className="mb-3 text-4xl font-black tracking-tight text-[#F8F9FA] md:text-5xl">{brand.name} - {category.name}</h1>
            <p className="max-w-4xl text-sm leading-relaxed text-[#E9ECEF]/85 md:text-lg">
              Filtered products for {brand.name} under {category.name}. Each card includes product image, title, and category tag.
            </p>
          </div>
        </motion.section>

        <section>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.3, delay: prefersReduced ? 0 : index * 0.03 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-md bg-white/95 p-1.5 shadow-md">
                    <img src={product.brandLogo} alt={`${product.brand} logo`} className="h-6 w-auto object-contain md:h-7" loading="lazy" />
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-[#D62828] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white md:text-[11px]">
                    {product.category}
                  </span>
                </div>

                <div className="p-3 md:p-4">
                  <h2 className="mb-1 text-sm font-bold text-[#F8F9FA] md:text-base">{product.brand}</h2>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#FCBF49] md:text-sm">{product.category}</p>
                  <p className="text-xs leading-relaxed text-[#E9ECEF]/80 md:text-sm">{product.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandCategory;
