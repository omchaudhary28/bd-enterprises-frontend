import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const HeadProtection = () => {
  const prefersReduced = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0 : 0.5,
        ease: 'easeOut',
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' },
    hover: {
      scale: prefersReduced ? 1 : 1.03,
      boxShadow: '0px 20px 50px rgba(0, 132, 255, 0.25)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: prefersReduced ? 1 : 1.05, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const products = [
    {
      name: 'Industrial Hard Hats',
      image: '/images/ppes/Head-Protection.webp',
      summary: 'ANSI Z89.1 certified hard hats for maximum impact protection.',
      useCases: ['Construction sites', 'Manufacturing', 'Mining operations', 'Warehousing'],
      protection: 'Protects against impact from falling objects, low-hanging fixtures, and head collisions.',
      guidelines: 'Replace every 3-5 years; inspect monthly for cracks or damage; keep sweatband clean.',
      bdValue: 'We provide proper hard hat fitting, custom branding options, and replacement scheduling.',
    },
    {
      name: 'Safety Helmets',
      image: '/images/ppes/Head-Protection.webp',
      summary: 'Lightweight, comfortable helmets for work requiring extended wear.',
      useCases: ['Electrical work', 'Confined space work', 'Welding', 'High-altitude work'],
      protection: 'Guards against impacts, electrical hazards, and penetration from sharp objects.',
      guidelines: 'Inspect before each use; replace if dropped from height; maintain proper chin strap.',
      bdValue: 'Expert consulting on helmet selection for specific hazards; employee training included.',
    },
    {
      name: 'Bump Caps',
      image: '/images/ppes/Head-Protection.webp',
      summary: 'Lightweight protection for low-risk overhead hazards.',
      useCases: ['Warehouse operations', 'Food processing', 'Assembly lines', 'Cold storage'],
      protection: 'Reduces impact severity from minor bumps and light falling objects.',
      guidelines: 'Check for compatibility with other PPE; lightweight design reduces neck strain.',
      bdValue: 'Customized bump cap solutions for various work environments; comfort-focused recommendations.',
    },
  ];

  return (
    <div className="ppe-detail-page relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-slate-900 dark:to-slate-800 min-h-screen py-12 md:py-16">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Back Link */}
        <div className="mb-6 md:mb-8">
          <Link
            to="/ppe"
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 font-semibold text-sm md:text-base"
          >
            ← Back to PPEs
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div 
          className="mb-10 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div 
            className="text-5xl md:text-6xl mb-4"
            animate={prefersReduced ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🛡️
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white glow-text mb-4"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          >
            Head Protection
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            Helmets and Hard Hats for Maximum Safety
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          >
            Comprehensive head protection solutions designed to shield your workforce from impact, falling objects, and overhead hazards.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center text-white mb-8 glow-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Head Protection Products
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={cardHoverVariants}
                className="bg-white dark:bg-slate-800 rounded-lg md:rounded-xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center overflow-hidden">
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-gray-300 mb-4 leading-snug">
                  {product.summary}
                </p>

                <div className="mb-4 flex-grow">
                  <h4 className="font-bold text-sm text-accent dark:text-blue-400 mb-2">Real-Life Use Cases:</h4>
                  <ul className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 space-y-1">
                    {product.useCases.map((useCase, idx) => (
                      <li key={idx}>• {useCase}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-sm text-secondary dark:text-blue-300 mb-2">How It Protects:</h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 leading-snug">
                    {product.protection}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-sm text-secondary dark:text-blue-300 mb-2">Usage Guidelines:</h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 leading-snug">
                    {product.guidelines}
                  </p>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold text-xs sm:text-sm text-accent dark:text-blue-300 mb-1">BD Enterprises Value:</h4>
                  <p className="text-xs text-neutral-700 dark:text-gray-300">{product.bdValue}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Protection Standards */}
        <motion.div 
          className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 rounded-lg md:rounded-xl border-2 border-accent glow-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-6"
            initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Compliance & Standards
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { title: 'ANSI Z89.1 Certified', desc: 'Meets American National Standards Institute requirements for hard hat performance and durability.' },
              { title: 'OSHA Compliant', desc: 'All head protection meets OSHA 29 CFR 1910.95 requirements for workplace safety.' },
              { title: 'Impact Tested', desc: 'Rigorous impact testing ensures protection from high-velocity object strikes and falls.' }
            ].map((standard, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-bold text-primary dark:text-white mb-2">{standard.title}</h4>
                <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                  {standard.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Why Choose BD Enterprises */}
        <motion.div 
          className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-lg md:rounded-xl border-2 border-accent text-white glow-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-6"
            initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Why Choose BD Enterprises for Head Protection?
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              'Expert hazard assessment for your specific workplace',
              'Proper fitting and sizing for optimal comfort',
              'Training on correct usage and maintenance',
              'Compliance documentation and audits',
              'Emergency replacement availability',
              'Customized branding options available',
            ].map((point, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <span className="text-accent text-lg font-bold flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Ready to Protect Your Team?
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
            initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Let our experts help you select and implement the perfect head protection solution for your workplace.
          </motion.p>
          <Link to="/contact" className="no-underline">
            <motion.button
              className="inline-flex items-center justify-center min-h-[48px] bg-accent dark:bg-blue-500 text-primary dark:text-white px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-black rounded-xl sm:rounded-full shadow-2xl ring-2 ring-white/30 active:scale-95 transition-all duration-200 uppercase tracking-wider cursor-pointer"
              whileHover={prefersReduced ? {} : { scale: 1.05, boxShadow: '0px 20px 60px rgba(0, 150, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Head Protection
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeadProtection;
