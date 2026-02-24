import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import HeroCarousel from './HeroCarousel';

const highlightCards = [
  {
    title: 'Fire Suppression Engineering',
    description: 'Design and deployment of suppression systems for industrial and commercial facilities.',
  },
  {
    title: 'Detection and Alarm Systems',
    description: 'Addressable alarm panels, detection networks, and emergency notification integration.',
  },
  {
    title: 'Industrial PPE Supply',
    description: 'Category-based procurement of certified protective equipment for high-risk work zones.',
  },
  {
    title: 'Compliance and Audits',
    description: 'Inspection-ready documentation, verification, and remediation planning support.',
  },
];

const trustStats = [
  { value: 'Since 2006', label: 'Operational Legacy' },
  { value: 'ISO 9001:2015', label: 'Quality System' },
  { value: 'Multi-Sector', label: 'Deployment Expertise' },
  { value: 'End-to-End', label: 'Project Delivery' },
];

const MainContent = () => {
  return (
    <div className="relative overflow-hidden bg-[#111111]">
      <HeroCarousel />

      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(247,127,0,0.16),transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_84%,rgba(214,40,40,0.12),transparent_30%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <span className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
              B. D. Enterprises
            </span>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-[#F8F9FA] sm:text-4xl md:text-5xl">
              Industrial Fire and Safety Solutions with Precision Execution
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
              We provide structured fire protection systems, PPE supply, and compliance support for industrial operations where reliability is critical.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/services"
                className="btn-corporate inline-flex min-h-[50px] items-center justify-center rounded-full px-7 py-3 text-sm font-black uppercase tracking-wider"
              >
                Explore Services
              </Link>
              <Link
                to="/brands"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#E9ECEF]/30 bg-[#1C1C1C] px-7 py-3 text-sm font-black uppercase tracking-wider text-[#F8F9FA] transition-all duration-300 hover:border-[#F77F00]/60 hover:text-[#FCBF49]"
              >
                Browse Brands
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
