import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const ppeCategories = [
  {
    id: 'head-protection',
    title: 'Head Protection',
    subtitle: 'Helmets & Hard Hats',
    description: 'Shields from impact, falling objects, and overhead hazards. Essential for construction, manufacturing, and industrial workplaces.',
    imageUrl: '/images/ppes/Head-Protection.webp',
    path: '/services/ppe/head-protection',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 'eye-protection',
    title: 'Eye & Face Protection',
    subtitle: 'Goggles & Shields',
    description: 'Guard against chemical splashes, welding sparks, and flying debris. Critical for labs, welding, and chemical handling.',
    imageUrl: '/images/ppes/Face-and-Eye-Protection_2022.avif',
    path: '/services/ppe/eye-face-protection',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'hearing-protection',
    title: 'Hearing Protection',
    subtitle: 'Earplugs & Earmuffs',
    description: 'Prevents noise-induced hearing loss in loud industrial environments. ANSI/OSHA compliant protection.',
    imageUrl: '/images/ppes/Hearing-Protection-1536x922.webp',
    path: '/services/ppe/hearing-protection',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 'respiratory-protection',
    title: 'Respiratory Protection',
    subtitle: 'Masks & Respirators',
    description: 'Protects from dust, fumes, gases, and hazardous particles. NIOSH-certified for maximum safety.',
    imageUrl: '/images/ppes/Respiratory-Protection.webp',
    path: '/services/ppe/respiratory-protection',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'hand-protection',
    title: 'Hand Protection',
    subtitle: 'Gloves',
    description: 'Specialized gloves for chemical handling, thermal protection, and mechanical safety. Customized for different hazards.',
    imageUrl: '/images/ppes/Hand-Protection-1536x922.webp',
    path: '/services/ppe/hand-protection',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 'body-protection',
    title: 'Body Protection',
    subtitle: 'Coveralls & Vests',
    description: 'Full-body coverage from chemical exposure, thermal hazards, and contamination. Durable and compliant.',
    imageUrl: '/images/ppes/Skin-and-Body-Protection_2022.avif',
    path: '/services/ppe/body-protection',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    id: 'foot-protection',
    title: 'Foot Protection',
    subtitle: 'Safety Shoes & Boots',
    description: 'Steel-toed and protective footwear for impact and puncture resistance. ASTM certified for workplace safety.',
    imageUrl: '/images/ppes/Foot-Protection-1536x922.webp',
    path: '/services/ppe/foot-protection',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'basca-cylinders',
    title: 'BASCA Cylinders',
    subtitle: 'Fire Suppressant Cylinders',
    description: 'Advanced fire suppression technology for specialized environments. Clean agent systems for sensitive equipment protection.',
    imageUrl: '/images/ppes/istockphoto-2190518272-1024x1024.jpg',
    path: '/services/ppe/basca-cylinders',
    color: 'from-red-400 to-red-600',
  },
];

// Real images for each PPE category
const ppeImages = {
  'head-protection': [
    '/images/ppes/Head-Protection.webp',
    '/images/ppes/istockphoto-1388965773-1024x1024.jpg',
    '/images/ppes/istockphoto-1411572653-1024x1024.jpg',
  ],
  'eye-protection': [
    '/images/ppes/Face-and-Eye-Protection_2022.avif',
    '/images/ppes/ppes eye protection/ANTI-FOG-VENTILATED-SAFETY-GOGGLES-S-LS-312-CL-JORESTECH-H_6_1600x1600.webp',
    '/images/ppes/ppes eye protection/Double-Layer-Welding-Glasses-Adjustable-Welding-Safety-Eye-Protection-Welder-Goggles.avif',
  ],
  'hearing-protection': [
    '/images/ppes/Hearing-Protection-1536x922.webp',
    '/images/ppes/Hearing-Protection_2022.avif',
    '/images/ppes/istockphoto-1658925458-1024x1024.jpg',
  ],
  'respiratory-protection': [
    '/images/ppes/Respiratory-Protection.webp',
    '/images/ppes/Respiratory-Protection_2022.avif',
    '/images/ppes/ppes respiratory/maxresdefault.jpg',
  ],
  'hand-protection': [
    '/images/ppes/Hand-Protection-1536x922.webp',
    '/images/ppes/ppes hand gloves/1687877639-1.webp',
    '/images/ppes/istockphoto-1488252839-1024x1024.jpg',
  ],
  'body-protection': [
    '/images/ppes/Skin-and-Body-Protection_2022.avif',
    '/images/ppes/istockphoto-1490326028-1024x1024.jpg',
    '/images/ppes/Types-of-Personal-Protective-Equipment-PPE_2022.avif',
  ],
  'foot-protection': [
    '/images/ppes/Foot-Protection-1536x922.webp',
    '/images/ppes/PN-521-Chrome-Orange.jpg',
    '/images/ppes/61eTR14wUVL._AC_UF894,1000_QL80_.jpg',
  ],
  'basca-cylinders': [
    '/images/ppes/istockphoto-2190518272-1024x1024.jpg',
    '/images/ppes/ppes oxygen cylender/1_28e8d59aeceeb5e9b638a2ef5b3d2f3d.webp',
    '/images/ppes/istockphoto-947254500-1024x1024.jpg',
  ],
};

const PPEs = () => {
  const prefersReduced = useReducedMotion();
  const swiperRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

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

        {/* PPE Category Carousels */}
        {ppeCategories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 glow-text">{category.title}</h2>
              <p className="text-white/70 text-sm md:text-base max-w-3xl">{category.description}</p>
            </motion.div>

            {/* Carousel for this category */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAutoplay(false)}
              onMouseLeave={() => setIsAutoplay(true)}
            >
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={isAutoplay ? { delay: 4500, disableOnInteraction: false } : false}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={{ prevEl: `.swiper-button-prev-ppe-${category.id}`, nextEl: `.swiper-button-next-ppe-${category.id}` }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className="!pb-12"
              >
                {ppeImages[category.id]?.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex}>
                    <Link to={category.path} className="no-underline">
                      <motion.div
                        className="group/card relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 cursor-pointer flex flex-col h-64"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Image Container */}
                        <div className="relative w-full overflow-hidden bg-slate-900/50 flex-grow">
                          <img
                            src={image}
                            alt={`${category.title} - Item ${imageIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col justify-end">
                          <h3 className="text-lg md:text-xl font-black text-white group-hover/card:text-accent transition-colors duration-300">
                            {category.title}
                          </h3>
                          <p className="text-white/70 text-xs md:text-sm font-bold uppercase tracking-wider">
                            {category.subtitle}
                          </p>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </motion.div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <button className={`swiper-button-prev-ppe-${category.id} absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-accent/90 hover:bg-accent text-white transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className={`swiper-button-next-ppe-${category.id} absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-accent/90 hover:bg-accent text-white transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}

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
