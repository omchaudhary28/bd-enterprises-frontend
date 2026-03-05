import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { brandCatalog, getFirstBrandProductImage } from '../data/productData';

const serviceCatalog = [
  {
    title: 'Fire Extinguisher Systems',
    description: 'Installation, refilling, hydro-testing, and lifecycle maintenance for portable and fixed suppression systems.',
    category: 'Fire Systems',
    image: '/images/fire-extinguisher/co2-flooding-system-1000x1000.jpg',
    path: '/services/fire-extinguishers',
  },
  {
    title: 'Fire Alarm & Detection',
    description: 'Addressable and conventional alarms with smoke and heat detection, panel integration, and monitoring.',
    category: 'Fire Systems',
    image: '/images/Fire-Alarm-Systems/types-of-fire-alarm.png',
    path: '/services/fire-alarm-detection',
  },
  {
    title: 'Fire Protection Sprinkler Systems',
    description: 'Wet pipe, dry pipe, and deluge sprinkler engineering for industrial and commercial occupancy risk profiles.',
    category: 'Fire Systems',
    image: '/images/sprinkler_system/Fire_sprinkler_roof_mount_side_view.jpg',
    path: '/services/sprinkler-systems',
  },
  {
    title: 'Fire Hydrant Systems',
    description: 'Hydrant ring main design, fire pump integration, landing valves, hose reels, and periodic readiness testing.',
    category: 'Fire Systems',
    image: '/images/fire_hydrant_system/Fire-Hydrant-4.jpg',
    path: '/services/fire-hydrant-systems',
  },
  {
    title: 'Emergency Lighting',
    description: 'Exit route illumination, backup autonomy planning, and compliance-first maintenance programs.',
    category: 'Life Safety',
    image: '/images/emergency-lights/76yvHsMjxoXFU4WTt3JUP94YBWVObAz48gti09nzlKzkXU0iZueHb4nEzuD-Q8MeywZXladWrqsgsRcsVSs2v3F2K7aqdqMe1cmlK-fDSrw.jpg',
    path: '/services/emergency-lighting',
  },
  {
    title: 'Water Modular Tank',
    description: 'Panel-built, corrosion-resistant fire water storage systems with scalable capacity and flexible installation.',
    category: 'Infrastructure',
    image: '/images/water_modular_tank/Process-Water-Tanks-002-min.jpg',
    path: '/services/water-modular-tank',
  },
  {
    title: 'Industrial PPE Solutions',
    description: 'Category-based PPE sourcing with documentation support and replacement planning for continuous protection.',
    category: 'PPE',
    image: '/images/ppes/Head-Protection.webp',
    path: '/services/ppe',
  },
  {
    title: 'Oxygen and SCBA Cylinders',
    description: 'SCBA and oxygen cylinder supply, periodic testing, pressure checks, and certified maintenance support.',
    category: 'PPE',
    image: '/images/ppes/ppes-oxygen-cylender/Self-contained_breathing_apparatus.jpg',
    path: '/services/oxygen-cylinders',
  },
  {
    title: 'Fabrication Services',
    description: 'Fabricated safety supports, enclosures, and custom assemblies aligned to site-specific operating demands.',
    category: 'Infrastructure',
    image: '/images/fabrication/WhatsApp%20Image%202026-02-25%20at%207.44.54%20PM.jpeg',
    path: '/services/fabrication',
  },
  {
    title: 'Fire Safety Training',
    description: 'Mock drill planning, practical extinguisher handling, emergency role allocation, and response competency training.',
    category: 'Compliance',
    image: '/images/fire-safety-training/Fire_drill_in_a_smoke_trailer,_Naples,_Italy_-_081007-N-4044H-271.jpg',
    path: '/services/fire-safety-training',
  },
  {
    title: 'Compliance Inspection',
    description: 'Technical inspections, gap audits, statutory checklists, and documented corrective action planning.',
    category: 'Compliance',
    image: '/images/complainces-and-audits/Guide%20to%20WHS%20Inspections-1.webp',
    path: '/services/compliance-inspection',
  },
];

const filterCategories = ['All Services', 'Fire Systems', 'Life Safety', 'PPE', 'Infrastructure', 'Compliance'];

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
    <div className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F9FA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(247,127,0,0.18),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_86%,rgba(214,40,40,0.13),transparent_32%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.45, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <span className="mb-5 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
            Installation, Maintenance, Compliance, Inspection
          </span>
          <h1 className="mb-5 text-4xl font-black tracking-tight text-[#F8F9FA] sm:text-5xl md:text-6xl">
            Professional Fire and Safety Service Portfolio
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
            B. D. Enterprises delivers complete fire protection setup, lifecycle maintenance, inspection readiness, compliance alignment, and safety training for industrial and commercial facilities.
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
                    ? 'bg-[#D62828] text-white shadow-[0_10px_22px_rgba(214,40,40,0.35)]'
                    : 'border border-[#E9ECEF]/25 bg-[#1C1C1C] text-[#F8F9FA] hover:border-[#F77F00]/60 hover:text-[#FCBF49]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : index * 0.03 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C]"
              >
                <Link to={service.path} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/82 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#F77F00] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#111111] md:text-[11px]">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-4">
                    <h2 className="mb-2 text-base font-bold leading-tight text-[#F8F9FA]">{service.title}</h2>
                    <p className="mb-3 text-sm leading-relaxed text-[#E9ECEF]/80">{service.description}</p>
                    <span className="inline-flex items-center text-[11px] font-black uppercase tracking-wider text-[#FCBF49] md:text-xs">
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
            transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 text-center md:mb-10"
          >
            <h2 className="mb-3 text-3xl font-black text-[#F8F9FA] md:text-4xl">Supplier Partner Brands</h2>
            <p className="mx-auto max-w-4xl text-sm leading-relaxed text-[#E9ECEF]/85 md:text-base">
              Product sourcing is aligned to project scope, hazard profile, compliance requirements, and long-term maintenance strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
            {brandCatalog.map((brand, idx) => {
              const previewImage = getFirstBrandProductImage(brand.slug) || brand.featuredImage;

              return (
                <motion.article
                  key={brand.slug}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : idx * 0.03 }}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/82 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-[#D62828] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white md:text-[11px]">
                        Product Supply
                      </span>
                    </div>

                    <div className="p-3 md:p-4">
                      <h3 className="mb-2 text-sm font-bold text-[#F8F9FA] md:text-base">{brand.name}</h3>
                      <p className="text-xs leading-relaxed text-[#E9ECEF]/80 md:text-sm">{brand.description}</p>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </section>

        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-3xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-8 text-center md:p-12"
        >
          <h2 className="mb-4 text-3xl font-black text-[#F8F9FA] md:text-4xl">Need a Site-Specific Safety Plan?</h2>
          <p className="mx-auto mb-7 max-w-3xl text-sm leading-relaxed text-[#E9ECEF]/85 md:text-lg">
            Request a technical assessment to align service scope, product specification, and compliance milestones for your facility.
          </p>
          <Link
            to="/contact"
            className="btn-corporate inline-flex min-h-[50px] items-center justify-center rounded-full px-8 py-3 text-sm font-black uppercase tracking-wider"
          >
            Request Assessment
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;


