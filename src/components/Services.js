import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const serviceCatalog = [
  {
    title: 'Fire Extinguisher Systems',
    description: 'Portable and fixed suppression systems engineered for rapid first response.',
    category: 'Fire Safety Systems',
    image: '/images/fire%20extinguisher/co2-flooding-system-1000x1000.jpg',
    path: '/services/fire-extinguishers',
  },
  {
    title: 'Fire Alarm and Detection',
    description: 'Addressable alarm panels, sensors, and integrated emergency notifications.',
    category: 'Fire Safety Systems',
    image: '/images/Fire%20Alarm%20Systems/types-of-fire-alarm.png',
    path: '/services/fire-alarm-detection',
  },
  {
    title: 'Sprinkler Systems',
    description: 'Hydraulic sprinkler and suppression infrastructure for high-risk operations.',
    category: 'Fire Safety Systems',
    image: '/images/sprinkler%20system/Fire_sprinkler_roof_mount_side_view.jpg',
    path: '/services/sprinkler-systems',
  },
  {
    title: 'Emergency Lighting',
    description: 'Emergency egress lighting and illuminated exit guidance for facility safety.',
    category: 'Fire Safety Systems',
    image: '/images/emergency%20lights/76yvHsMjxoXFU4WTt3JUP94YBWVObAz48gti09nzlKzkXU0iZueHb4nEzuD-Q8MeywZXladWrqsgsRcsVSs2v3F2K7aqdqMe1cmlK-fDSrw.jpg',
    path: '/services/emergency-lighting',
  },
  {
    title: 'Fire Hydrant Systems',
    description: 'Hydrant network design, installation, testing, and periodic maintenance.',
    category: 'Fire Safety Systems',
    image: '/images/sprinkler%20system/high%20hazard%20sprinkler%20systems.jpg',
    path: '/services/fire-hydrant-systems',
  },
  {
    title: 'Smoke Detection Systems',
    description: 'Early warning smoke and heat detection for high-occupancy facilities.',
    category: 'Fire Safety Systems',
    image: '/images/Fire%20Alarm%20Systems/618cdfa3202b1d251c484e97_How%20Do%20Fire%20Alarms%20Work%20in%20Commercial%20Buildings.jpg',
    path: '/services/smoke-detection',
  },
  {
    title: 'Industrial PPE Solutions',
    description: 'Complete personal protective equipment portfolio for daily site operations.',
    category: 'PPE',
    image: '/images/ppes/Head-Protection.webp',
    path: '/services/ppe',
  },
  {
    title: 'Oxygen and SCBA Cylinders',
    description: 'Certified breathing air and oxygen cylinders with testing and refill support.',
    category: 'Industrial Support',
    image: '/images/ppes/ppes%20oxygen%20cylender/Self-contained_breathing_apparatus.jpg',
    path: '/services/oxygen-cylinders',
  },
  {
    title: 'Fabrication Services',
    description: 'Custom fire safety fabrication for mounts, cabinets, supports, and enclosures.',
    category: 'Industrial Support',
    image: '/images/complainces%20and%20audits/Industrial-buildings-2.jpg',
    path: '/services/fabrication',
  },
  {
    title: 'Fire Safety Training',
    description: 'Practical fire drill programs, equipment handling, and evacuation readiness.',
    category: 'Training and Compliance',
    image: '/images/fire%20safety%20training/Fire_drill_in_a_smoke_trailer,_Naples,_Italy_-_081007-N-4044H-271.jpg',
    path: '/services/fire-safety-training',
  },
  {
    title: 'Compliance Inspection',
    description: 'Audit-led fire safety compliance checks and remediation planning support.',
    category: 'Training and Compliance',
    image: '/images/complainces%20and%20audits/Guide%20to%20WHS%20Inspections-1.webp',
    path: '/services/compliance-inspection',
  },
];

const filterCategories = [
  'All Services',
  'Fire Safety Systems',
  'PPE',
  'Industrial Support',
  'Training and Compliance',
];

const supplyCategories = [
  'Safety Shoes',
  'Safety Gloves',
  'Safety Goggles',
  'Fire Safety Equipment',
  'Safety Wear',
  'Safety Helmets',
  'Road Safety Products',
  'Safety Masks',
];

const supplierBrands = [
  {
    name: 'Fuel',
    description: 'Industrial safety footwear and protective wear supply partner for manufacturing and utility sites.',
    image: '/images/ppes/Foot-Protection-1536x922.webp',
  },
  {
    name: 'Polo',
    description: 'Workwear and durable PPE supplier for logistics, warehouse, and operations teams.',
    image: '/images/ppes/Hand-Protection-1536x922.webp',
  },
  {
    name: 'Utex',
    description: 'Specialized hand and respiratory protection partner supporting hazardous handling workflows.',
    image: '/images/ppes/Respiratory-Protection.webp',
  },
  {
    name: 'Bata',
    description: 'Trusted industrial safety shoes and on-site footwear compliance support provider.',
    image: '/images/ppes/PN-521-Chrome-Orange.jpg',
  },
  {
    name: 'Delta Plus',
    description: 'Comprehensive PPE range for head, eye, respiratory, and road safety deployment.',
    image: '/images/ppes/Head-Protection.webp',
  },
  {
    name: 'Balaji Industries',
    description: 'Fire safety and compliance equipment supply partner for factories and process plants.',
    image: '/images/sprinkler%20system/Fire_sprinkler_roof_mount_side_view.jpg',
  },
  {
    name: 'Apex Clothing',
    description: 'Industrial safety wear and high-visibility garment partner for site-wide deployment.',
    image: '/images/fire%20safety%20training/Fire_drill_in_a_smoke_trailer,_Naples,_Italy_-_081007-N-4044H-271.jpg',
  },
  {
    name: 'XO Footwear',
    description: 'Protective shoe supplier supporting impact-resistant and anti-slip workplace standards.',
    image: '/images/ppes/Foot-Protection-1536x922.webp',
  },
  {
    name: 'Tornado',
    description: 'Safety gear and industrial emergency response equipment supply partner for critical sites.',
    image: '/images/emergency%20lights/76yvHsMjxoXFU4WTt3JUP94YBWVObAz48gti09nzlKzkXU0iZueHb4nEzuD-Q8MeywZXladWrqsgsRcsVSs2v3F2K7aqdqMe1cmlK-fDSrw.jpg',
  },
  {
    name: 'Ultra KK Industries',
    description: 'Multi-category partner brand supporting full-spectrum industrial safety procurement.',
    image: '/images/ppes/ppes%20oxygen%20cylender/Self-contained_breathing_apparatus.jpg',
  },
];

const Services = () => {
  const prefersReduced = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState('All Services');

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All Services') {
      return serviceCatalog;
    }
    return serviceCatalog.filter((service) => service.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.16),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_80%,rgba(99,102,241,0.12),transparent_34%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.5, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/95 md:text-sm">
            Industrial Fire and Safety Portfolio
          </span>
          <h1 className="mb-5 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Professional Safety Products and Services
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            High-performance fire safety systems, PPE solutions, and compliance services built for modern industrial facilities.
          </p>
        </motion.section>

        <section className="mb-10 md:mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 md:px-5 md:text-sm ${
                  selectedCategory === category
                    ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-900/30'
                    : 'border border-white/25 bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : index * 0.03 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm"
              >
                <Link to={service.path} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/30">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-cyan-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900 md:text-[11px]">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-3 md:p-4">
                    <h2 className="mb-2 text-sm font-bold leading-tight text-white md:text-base">{service.title}</h2>
                    <p className="mb-3 text-xs leading-relaxed text-white/75 md:text-sm">{service.description}</p>
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-cyan-200 md:text-xs">
                      View Details
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mb-14 md:mb-20">
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.45, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 text-center md:mb-10"
          >
            <h2 className="mb-3 text-3xl font-black text-white md:text-4xl">Supplier Partner Brands</h2>
            <p className="mx-auto max-w-4xl text-sm leading-relaxed text-white/80 md:text-base">
              Every listed supplier brand supports the complete category set: {supplyCategories.join(', ')}.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
            {supplierBrands.map((brand, idx) => (
              <motion.article
                key={brand.name}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : idx * 0.03 }}
                viewport={{ once: true, amount: 0.18 }}
                className="group overflow-hidden rounded-2xl border border-white/25 bg-slate-900/30 backdrop-blur-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-amber-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900 md:text-[11px]">
                    Supplier Brand
                  </span>
                </div>

                <div className="p-3 md:p-4">
                  <h3 className="mb-1 text-sm font-bold text-white md:text-base">{brand.name}</h3>
                  <p className="mb-2 text-xs leading-relaxed text-white/80 md:text-sm">{brand.description}</p>
                  <p className="text-[11px] leading-relaxed text-cyan-100/90 md:text-xs">
                    Provides: {supplyCategories.join(', ')}.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/25 bg-white/10 p-8 text-center backdrop-blur-sm md:p-12"
        >
          <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">Need a Site-Specific Safety Plan?</h2>
          <p className="mx-auto mb-7 max-w-3xl text-sm leading-relaxed text-white/80 md:text-lg">
            Request a consultative assessment for product selection, installation priorities, and compliance planning.
          </p>
          <Link
            to="/contact"
            className="btn-corporate inline-flex min-h-[50px] items-center justify-center rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wider"
          >
            Request Assessment
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
