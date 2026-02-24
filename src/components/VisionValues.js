import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const items = [
  {
    title: 'Vision',
    text: 'Deliver dependable fire and safety infrastructure that helps facilities operate with confidence and continuity.',
  },
  {
    title: 'Mission',
    text: 'Provide engineered safety systems, certified products, and execution support aligned with compliance goals.',
  },
  {
    title: 'Value',
    text: 'Safety, accountability, and technical rigor across every supply, service, and on-site implementation.',
  },
];

const VisionValues = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#1C1C1C] py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(247,127,0,0.16),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_86%,rgba(214,40,40,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-14"
        >
          <span className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
            Corporate Direction
          </span>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-[#F8F9FA] sm:text-4xl md:text-5xl">Vision, Mission, and Values</h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
            Our operating principles drive reliable project outcomes and measurable safety improvements for our partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : index * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-[#E9ECEF]/15 bg-[#111111] p-6"
            >
              <h3 className="mb-2 text-xl font-black text-[#FCBF49]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#E9ECEF]/82 md:text-base">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionValues;
