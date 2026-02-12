import React from 'react';
import { motion, useInView } from 'framer-motion';

const achievements = [
  { year: '2006', title: 'Company Founded', icon: '🏢', branch: null },
  { year: '2010', title: 'ISO 9001 Certified', icon: '✓', branch: 'Quality' },
  { year: '2015', title: 'Major Brand Partnerships', icon: '🤝', branch: 'Growth' },
  { year: '2019', title: '5000+ Clients Served', icon: '👥', branch: 'Milestone' },
  { year: '2022', title: 'Fire Safety Excellence', icon: '🔥', branch: 'Award' },
  { year: '2025', title: 'Industry Leader', icon: '⭐', branch: 'Recognition' },
];

const AchievementTrail = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="mb-16 md:mb-24" data-aos="fade-up">
      <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 glow-text">Our Achievement Trail</h2>
      <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">Milestones since our founding in 2006</p>
      <div ref={ref} className="relative max-w-2xl mx-auto pl-4 md:pl-0">
        {/* Vertical line - left side */}
        <div className="absolute left-[22px] md:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-accent" />
        {achievements.map((item, i) => (
          <motion.div
            key={item.year}
            className="relative flex items-start gap-4 md:gap-6 mb-10 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
          >
            {/* Round medal on the line */}
            <div className="relative z-10 flex-shrink-0">
              <motion.div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-xl md:text-2xl shadow-lg border-4 border-white/30 ring-4 ring-primary/50"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: i * 0.12 }}
              >
                {item.icon}
              </motion.div>
            </div>
            {/* Content card */}
            <div className="flex-1 min-w-0">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-5 hover:border-accent/50 transition-all">
                {item.branch && (
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">{item.branch}</span>
                )}
                <h3 className="text-lg md:text-xl font-bold text-white mt-1">{item.title}</h3>
                <p className="text-white/80 text-sm mt-1">{item.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementTrail;
