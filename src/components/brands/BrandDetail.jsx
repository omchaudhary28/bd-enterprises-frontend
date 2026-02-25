import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { brandCatalog, getBrandCategories, productData } from '../../data/productData';

const BrandDetail = () => {
  const { brandName } = useParams();
  const prefersReduced = useReducedMotion();

  const brand = brandCatalog.find((entry) => entry.slug === brandName);

  if (!brand) {
    return <Navigate to="/brands" replace />;
  }

  const brandCategories = getBrandCategories(brand.slug);

  if (!brandCategories.length) {
    return <Navigate to="/brands" replace />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F9FA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,40,40,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_84%,rgba(247,127,0,0.13),transparent_30%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
          className="mb-10 md:mb-14"
        >
          <Link
            to="/brands"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E9ECEF]/20 bg-[#1C1C1C] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E9ECEF] transition-all duration-300 hover:border-[#FCBF49]/70 hover:text-[#FCBF49] md:text-sm"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Brands
          </Link>

          <div className="rounded-3xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-6 md:p-10">
            <span className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
              Brand Detail
            </span>
            <div className="mb-4 inline-flex rounded-xl bg-white/95 p-2 shadow-lg">
              <img src={brand.logo} alt={`${brand.name} logo`} className="h-10 w-auto object-contain md:h-12" loading="lazy" />
            </div>
            <h1 className="mb-3 text-4xl font-black tracking-tight text-[#F8F9FA] md:text-5xl">{brand.name}</h1>
            <p className="max-w-4xl text-sm leading-relaxed text-[#E9ECEF]/85 md:text-lg">{brand.description}</p>
          </div>
        </motion.section>

        <section>
          <h2 className="mb-6 text-2xl font-black text-[#F8F9FA] md:mb-8 md:text-3xl">Product Categories</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
            {brandCategories.map((category, index) => {
              const previewImage = productData[brand.slug]?.[category.slug]?.[0]?.image;
              return (
                <motion.article
                  key={category.slug}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: prefersReduced ? 0 : 0.3, delay: prefersReduced ? 0 : index * 0.03 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group overflow-hidden rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C]"
                >
                  <Link to={`/brands/${brand.slug}/${category.slug}`} className="block h-full">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                      <img
                        src={previewImage}
                        alt={`${brand.name} ${category.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" />
                      <div className="absolute left-3 top-3 rounded-md bg-white/95 p-1.5 shadow-md">
                        <img src={brand.logo} alt={`${brand.name} logo`} className="h-6 w-auto object-contain md:h-7" loading="lazy" />
                      </div>
                    </div>

                    <div className="p-3 md:p-4">
                      <h3 className="mb-1 text-sm font-bold text-[#F8F9FA] md:text-base">{category.name}</h3>
                      <p className="text-xs leading-relaxed text-[#E9ECEF]/80 md:text-sm">{category.shortDescription}</p>
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

export default BrandDetail;
