import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { brandCatalog, productData } from '../../data/productData';

const Brands = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F9FA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(247,127,0,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_88%,rgba(214,40,40,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <span className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
            Supplier Partner Brands
          </span>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-[#F8F9FA] sm:text-5xl md:text-6xl">
            Brand Portfolio
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
            Explore supplier partner brands and browse products by category for structured industrial procurement.
          </p>
        </motion.section>

        <section>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
            {brandCatalog.map((brand, index) => {
              const previewImage =
                productData[brand.slug]?.['safety-shoes']?.[0]?.image ||
                productData[brand.slug]?.['safety-helmet']?.[0]?.image ||
                productData[brand.slug]?.['fire-safety']?.[0]?.image;

              return (
                <motion.article
                  key={brand.slug}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : index * 0.03 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group overflow-hidden rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C]"
                >
                  <Link to={`/brands/${brand.slug}`} className="block h-full">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                      <img
                        src={previewImage}
                        alt={brand.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" />
                      <div className="absolute left-3 top-3 rounded-lg bg-white/95 p-1.5 shadow-md">
                        <img src={brand.logo} alt={`${brand.name} logo`} className="h-7 w-auto object-contain md:h-8" loading="lazy" />
                      </div>
                    </div>

                    <div className="p-3 md:p-4">
                      <h2 className="mb-1 text-sm font-bold text-[#F8F9FA] md:text-base">{brand.name}</h2>
                      <p className="text-xs leading-relaxed text-[#E9ECEF]/80 md:text-sm">{brand.description}</p>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brands;
