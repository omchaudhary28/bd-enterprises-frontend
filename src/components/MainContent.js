import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import HeroCarousel from './HeroCarousel';
import { brandCatalog, getFirstBrandProductImage } from '../data/productData';

const highlightCards = [
  {
    title: 'System Installation',
    description: 'Turnkey fire safety system setup from survey and engineering to commissioning and handover.',
  },
  {
    title: 'Maintenance Contracts',
    description: 'Periodic inspection, preventive maintenance, and emergency rectification for critical safety uptime.',
  },
  {
    title: 'Compliance Execution',
    description: 'Code-aligned documentation, audit preparation, and corrective closeout for statutory readiness.',
  },
  {
    title: 'Training and Consulting',
    description: 'On-site safety training, mock drills, SOP support, and technical consulting for risk reduction.',
  },
];

const trustStats = [
  { value: 'Since 2006', label: 'Operational Legacy' },
  { value: 'Multi-Sector', label: 'Execution Experience' },
  { value: 'End-to-End', label: 'Project Delivery' },
  { value: '24x7 Support', label: 'Service Response' },
];

const MainContent = () => {
  return (
    <div className="relative overflow-hidden bg-[#111111]">
      <section className="relative z-20 border-b border-[#E9ECEF]/10 bg-[#0F0F0F]/95">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#FCBF49]">B. D. Enterprises</p>
            <p className="text-xs text-[#E9ECEF]/78">Fire Safety and Industrial PPE Solutions</p>
          </div>
        </div>
      </section>

      <HeroCarousel />

      <section className="relative py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(247,127,0,0.16),transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_84%,rgba(214,40,40,0.12),transparent_30%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <span className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
              Direct Brand Access
            </span>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-[#F8F9FA] sm:text-4xl md:text-5xl">
              Supplier Product Access for Enterprise Procurement
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
              Explore product-ready brand collections and move directly to brand category pages for safety footwear, wearables, and fire safety equipment.
            </p>
          </AnimatedSection>

          <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:mb-20 md:gap-5">
            {brandCatalog.map((brand, index) => {
              const image = getFirstBrandProductImage(brand.slug) || brand.featuredImage;
              return (
                <motion.article
                  key={brand.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.03, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group overflow-hidden rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C]"
                >
                  <Link to={`/brands/${brand.slug}`} className="block h-full">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                      <img
                        src={image}
                        alt={brand.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-base font-bold text-[#F8F9FA]">{brand.name}</h3>
                      <p className="text-xs leading-relaxed text-[#E9ECEF]/80">{brand.description}</p>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <AnimatedSection animation="fade-up" className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <span className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
              B. D. Enterprises
            </span>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-[#F8F9FA] sm:text-4xl md:text-5xl">
              Industrial Fire and Safety Services with Execution Discipline
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
              We deliver installation, maintenance, compliance, inspection, training, and consulting services backed by practical field execution.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/services"
                className="btn-corporate inline-flex min-h-[50px] items-center justify-center rounded-full px-7 py-3 text-sm font-black uppercase tracking-wider"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#E9ECEF]/30 bg-[#1C1C1C] px-7 py-3 text-sm font-black uppercase tracking-wider text-[#F8F9FA] transition-all duration-300 hover:border-[#F77F00]/60 hover:text-[#FCBF49]"
              >
                Request Consultation
              </Link>
            </div>
          </AnimatedSection>

          <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mb-16 md:gap-5">
            {trustStats.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-4 text-center md:p-6"
              >
                <p className="text-sm font-black uppercase tracking-wider text-[#FCBF49] md:text-base">{item.value}</p>
                <p className="mt-1 text-xs font-semibold text-[#E9ECEF]/80 md:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {highlightCards.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F77F00]/55 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)] md:p-6"
              >
                <h3 className="mb-2 text-base font-bold text-[#F8F9FA] md:text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#E9ECEF]/80">{item.description}</p>
                <div className="mt-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-[#D62828] to-[#F77F00] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
