import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const ppeCategories = [
  {
    id: 'head-protection',
    title: 'Head Protection',
    subtitle: 'Helmets and hard hats for impact control and top-side hazards.',
    image: '/images/ppes/Head-Protection.webp',
    path: '/services/ppe/head-protection',
  },
  {
    id: 'eye-face-protection',
    title: 'Eye and Face Protection',
    subtitle: 'Goggles and shield options for splash, particle, and thermal exposure.',
    image: '/images/ppes/Face-and-Eye-Protection_2022.avif',
    path: '/services/ppe/eye-face-protection',
  },
  {
    id: 'hearing-protection',
    title: 'Hearing Protection',
    subtitle: 'Protection solutions for high-noise industrial and process environments.',
    image: '/images/ppes/Hearing-Protection-1536x922.webp',
    path: '/services/ppe/hearing-protection',
  },
  {
    id: 'respiratory-protection',
    title: 'Respiratory Protection',
    subtitle: 'Masks and respirators for dust, fumes, and airborne hazard mitigation.',
    image: '/images/ppes/Respiratory-Protection.webp',
    path: '/services/ppe/respiratory-protection',
  },
  {
    id: 'hand-protection',
    title: 'Hand Protection',
    subtitle: 'Task-specific glove solutions for mechanical and chemical exposure.',
    image: '/images/ppes/Hand-Protection-1536x922.webp',
    path: '/services/ppe/hand-protection',
  },
  {
    id: 'body-protection',
    title: 'Body Protection',
    subtitle: 'Industrial wearables and protective garments for total coverage zones.',
    image: '/images/ppes/Skin-and-Body-Protection_2022.avif',
    path: '/services/ppe/body-protection',
  },
  {
    id: 'foot-protection',
    title: 'Foot Protection',
    subtitle: 'Safety shoes and boots for impact, puncture, and slip resistance.',
    image: '/images/ppes/Foot-Protection-1536x922.webp',
    path: '/services/ppe/foot-protection',
  },
  {
    id: 'oxygen-cylinders',
    title: 'Oxygen and SCBA Cylinders',
    subtitle: 'Breathing support cylinders with inspection and maintenance service.',
    image: '/images/ppes/ppes%20oxygen%20cylender/cylinder_final_red.webp',
    path: '/services/oxygen-cylinders',
  },
];

const PPEs = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F9FA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(247,127,0,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_84%,rgba(214,40,40,0.14),transparent_30%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <span className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
            Personal Protective Equipment
          </span>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-[#F8F9FA] sm:text-5xl md:text-6xl">
            PPE Supply and Protection Programs
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
            B. D. Enterprises provides project-aligned PPE sourcing, deployment planning, and replacement support to keep teams protected across varied operational risks.
          </p>
        </motion.section>

        <section className="mb-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5">
            {ppeCategories.map((category, index) => (
              <motion.article
                key={category.id}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : index * 0.03 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C]"
              >
                <Link to={category.path} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/84 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h2 className="mb-2 text-lg font-bold text-[#F8F9FA]">{category.title}</h2>
                    <p className="text-sm leading-relaxed text-[#E9ECEF]/80">{category.subtitle}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-8 text-center md:p-12"
        >
          <h2 className="mb-4 text-3xl font-black text-[#F8F9FA] md:text-4xl">Need PPE Mapping for Your Site?</h2>
          <p className="mx-auto mb-7 max-w-3xl text-sm leading-relaxed text-[#E9ECEF]/85 md:text-lg">
            Request a protection category assessment to align PPE issue plans, replacement cycles, and safety compliance requirements.
          </p>
          <Link
            to="/contact"
            className="btn-corporate inline-flex min-h-[50px] items-center justify-center rounded-full px-8 py-3 text-sm font-black uppercase tracking-wider"
          >
            Request PPE Consultation
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default PPEs;
