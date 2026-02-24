import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import HeroCarousel from './HeroCarousel';

const highlights = [
  {
    title: 'Fire Suppression Engineering',
    description: 'System design, installation, and commissioning for commercial and industrial facilities.',
  },
  {
    title: 'Detection and Alert Infrastructure',
    description: 'Addressable fire alarm and smoke detection systems with high-reliability monitoring.',
  },
  {
    title: 'Certified PPE and Safety Gear',
    description: 'Workplace protection portfolio covering head-to-toe industrial safety requirements.',
  },
  {
    title: 'Compliance and Readiness Audits',
    description: 'Documentation-led inspections and remediation support for standards compliance.',
  },
];

const trustStats = [
  { value: 'Since 2006', label: 'Operational Expertise' },
  { value: 'ISO 9001:2015', label: 'Quality Framework' },
  { value: 'Pan-Industry', label: 'Multi-Sector Deployments' },
  { value: 'End-to-End', label: 'Design to Maintenance' },
];

const MainContent = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroCarousel />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(14,165,233,0.10),transparent_32%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <span className="mb-4 inline-flex rounded-full border border-cyan-200 bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-900 md:text-sm">
              B. D. Enterprises | Industrial Safety Partner
            </span>
            <h2 className="mb-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Enterprise-Grade Fire Safety, Delivered with Precision
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
              We deliver integrated fire protection, safety equipment, and compliance solutions for industrial and commercial operations where reliability is non-negotiable.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/services"
                className="btn-corporate inline-flex min-h-[50px] items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold uppercase tracking-wider text-slate-800 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50"
              >
                Talk to Expert
              </Link>
            </div>
          </AnimatedSection>

          <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mb-16 md:gap-5">
            {trustStats.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm md:p-6"
              >
                <p className="text-sm font-black uppercase tracking-wider text-cyan-700 md:text-base">{item.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-600 md:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.25 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg md:p-6"
              >
                <h3 className="mb-2 text-base font-bold text-slate-900 md:text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                <div className="mt-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
