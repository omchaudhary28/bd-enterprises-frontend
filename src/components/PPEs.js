import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import AOS from 'aos';
const ppeCategories = [
  {
    title: 'Head Protection',
    subtitle: 'Helmets & Hard Hats',
    description: 'Shields from impact, falling objects, and overhead hazards. Essential for construction, manufacturing, and industrial workplaces.',
    imageUrl: '/images/ppe/head-protection.jpg',
    path: '/services/ppe/head-protection',
    icon: 'helmet',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Eye & Face Protection',
    subtitle: 'Goggles & Shields',
    description: 'Guard against chemical splashes, welding sparks, and flying debris. Critical for labs, welding, and chemical handling.',
    imageUrl: '/images/ppe/eye-face-protection.jpg',
    path: '/services/ppe/eye-face-protection',
    icon: 'goggles',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Hearing Protection',
    subtitle: 'Earplugs & Earmuffs',
    description: 'Prevents noise-induced hearing loss in loud industrial environments. ANSI/OSHA compliant protection.',
    imageUrl: '/images/ppe/hearing-protection.jpg',
    path: '/services/ppe/hearing-protection',
    icon: 'ear',
    color: 'from-green-400 to-teal-500',
  },
  {
    title: 'Respiratory Protection',
    subtitle: 'Masks & Respirators',
    description: 'Protects from dust, fumes, gases, and hazardous particles. NIOSH-certified for maximum safety.',
    imageUrl: '/images/ppe/respiratory-protection.jpg',
    path: '/services/ppe/respiratory-protection',
    icon: 'mask',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Hand Protection',
    subtitle: 'Gloves',
    description: 'Specialized gloves for chemical handling, thermal protection, and mechanical safety. Customized for different hazards.',
    imageUrl: '/images/ppe/hand-protection.jpg',
    path: '/services/ppe/hand-protection',
    icon: 'glove',
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Body Protection',
    subtitle: 'Coveralls & Vests',
    description: 'Full-body coverage from chemical exposure, thermal hazards, and contamination. Durable and compliant.',
    imageUrl: '/images/ppe/body-protection.jpg',
    path: '/services/ppe/body-protection',
    icon: 'vest',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    title: 'Foot Protection',
    subtitle: 'Safety Shoes & Boots',
    description: 'Steel-toed and protective footwear for impact and puncture resistance. ASTM certified for workplace safety.',
    imageUrl: '/images/ppe/foot-protection.jpg',
    path: '/services/ppe/foot-protection',
    icon: 'boot',
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'BASCA Cylinders',
    subtitle: 'Fire Suppressant Cylinders',
    description: 'Advanced fire suppression technology for specialized environments. Clean agent systems for sensitive equipment protection.',
    imageUrl: '/images/ppe/basca-cylinders.jpg',
    path: '/services/ppe/basca-cylinders',
    icon: 'cylinder',
    color: 'from-red-400 to-red-600',
  },
];

const PPEs = () => {
  const prefersReduced = useReducedMotion();

  React.useEffect(() => {
    AOS.refresh();
  }, []);

  // Stagger animation variants for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.06,
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
      scale: prefersReduced ? 1 : 1.02,
      boxShadow: '0px 20px 60px rgba(0, 132, 255, 0.3)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: prefersReduced ? 1 : 1.08, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const categoryGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.04,
        delayChildren: 0,
      },
    },
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReduced ? 0 : 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="ppe-page relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-6"
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-accent"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs sm:text-sm font-semibold text-white/90">Complete PPE Solutions</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white glow-text"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          >
            Personal Protective Equipment
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl font-bold text-blue-200 dark:text-blue-300 max-w-2xl mx-auto mb-4"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            Comprehensive PPE for Every Workplace Hazard
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg text-white/80 dark:text-gray-300 max-w-3xl mx-auto"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            From head to toe protection, we provide certified, durable PPE solutions with expert guidance on proper usage, maintenance, and compliance.
          </motion.p>
        </motion.div>

        {/* Quick Category Images Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 mb-16 md:mb-20"
          variants={categoryGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ppeCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryItemVariants}
            >
              <Link
                to={category.path}
                className="group relative overflow-hidden rounded-xl transition-all duration-300 active:scale-95 md:hover:scale-110 flex h-40 sm:h-48"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-black/50 to-black/30 z-10"></div>
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white text-center px-3 py-4">
                  <div className="mb-2 group-hover:scale-125 transition-transform duration-300">
                  {category.icon === 'helmet' && (
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2C8 2 5 5 5 9v2h14V9c0-4-3-7-7-7z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {category.icon === 'goggles' && (
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12c2-4 6-6 10-6s8 2 10 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {category.icon === 'ear' && (
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v1a4 4 0 010 8v3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {category.icon === 'mask' && (
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12c2 5 10 7 10 7s8-2 10-7v5c0 1-1 2-2 2H4c-1 0-2-1-2-2v-5z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {category.icon === 'glove' && (
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9v6a4 4 0 008 0V7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {category.icon === 'vest' && (
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l4 4v14H8V6l4-4z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {category.icon === 'boot' && (
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 19h13v-2a4 4 0 00-4-4H8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {category.icon === 'cylinder' && (
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="6" y="3" width="12" height="18" rx="2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold leading-tight line-clamp-2">{category.title}</h3>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Main PPE Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text">Featured PPE Categories</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ppeCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link to={category.path} className="no-underline">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={cardHoverVariants}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-blue-500/20 to-accent/20">
                    <motion.img 
                      src={category.imageUrl} 
                      alt={category.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      variants={imageVariants}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    {/* Emoji & Icon */}
                    <div className="text-4xl md:text-5xl mb-3">{category.emoji}</div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {category.title}
                    </h3>
                    <p className="text-xs md:text-sm font-bold text-accent/90 mb-3 uppercase tracking-wider">
                      {category.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base text-white/75 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                      {category.description}
                    </p>

                    {/* CTA Button */}
                    <motion.button 
                      className="w-full py-3 px-4 rounded-full font-bold text-sm md:text-base bg-gradient-to-r from-accent to-orange-500 text-white hover:shadow-lg transition-all duration-300 active:scale-95 uppercase tracking-wider"
                      whileHover={prefersReduced ? {} : { scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose PPE Section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 glow-text">Why BD Enterprises PPE?</h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: '✓', title: 'Certified', desc: 'ANSI/OSHA approved' },
              { icon: '🛡️', title: 'Durable', desc: 'Premium quality materials' },
              { icon: '📋', title: 'Compliant', desc: 'Full safety standards' },
              { icon: '🚀', title: 'Expert Support', desc: '25+ years experience' }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl md:text-5xl mb-3">
                  {idx === 0 && (
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/></svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/></svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.63-3.54-3.63 4.71h15.31L13.96 12.29z" fill="currentColor"/></svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.40251532,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16751269 C3.34915502,0.9104153 2.40251532,1.02620725 1.77946707,1.4974994 C0.994623095,2.13788266 0.837654326,3.08622357 1.15159189,3.93456271 L3.03521743,10.3755556 C3.03521743,10.5326469 3.19218622,10.6899617 3.50612381,10.6899617 L16.6915026,11.4754487 C16.6915026,11.4754487 17.1624089,11.4754487 17.1624089,11.0042073 L17.1624089,12.6315722 C17.1624089,12.6315722 17.1624089,12.4744748 16.6915026,12.4744748 Z" fill="currentColor"/></svg>
                  )}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm md:text-base text-white/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-black text-white mb-4"
              initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Ready to Protect Your Team?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-6 max-w-2xl mx-auto"
              initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Get expert guidance on selecting the right PPE for your workplace.
            </motion.p>
            <Link to="/contact" className="no-underline">
              <motion.button
                className="inline-flex items-center justify-center min-h-[48px] px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 uppercase tracking-wider cursor-pointer"
                whileHover={prefersReduced ? {} : { scale: 1.05, boxShadow: '0px 20px 60px rgba(0, 200, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PPEs;
