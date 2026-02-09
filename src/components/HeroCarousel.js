import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Hero images (stored in public/images/Hero Images)
// 3 hero slides with clear filenames for enterprise fire safety
const slides = [
  {
    id: 1,
    src: '/images/Hero%20Images/DEC-ENG-media_215.jpg',
    alt: 'Control room fire safety monitoring',
    priority: true,
  },
  {
    id: 2,
    src: '/images/Hero%20Images/Carrying-appearance-of-the-standard-and-prototype-SCBA.png',
    alt: 'Firefighter wearing SCBA protection equipment',
    priority: false,
  },
  {
    id: 3,
    src: '/images/Hero%20Images/fire-sprinkler-systems-help-to-extinguish-fire-in-rental-storage-units-920x533.jpg',
    alt: 'Industrial fire sprinkler system installation',
    priority: false,
  },
];

// Auto-slide interval: 4-5 seconds
const slideDurationMs = 4500; // 4.5 seconds

export default function HeroCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Auto-slide effect: advance slide every 4.5s, pause on hover (desktop)
  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    if (isPaused) return undefined;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, slideDurationMs);

    return () => clearInterval(timerRef.current);
  }, [isPaused, shouldReduceMotion]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // Hero animation variants: fade + subtle zoom (1 → 1.05)
  // Smooth ease-in-out transitions, respects prefers-reduced-motion
  const variants = {
    enter: { opacity: 0, scale: 1 },      // Start at neutral scale
    center: { opacity: 1, scale: 1 },     // Fully visible
    exit: { opacity: 0, scale: 1.05 },    // Subtle zoom on exit
  };

  // Pause on hover (desktop only)
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const dx = endX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) setIndex((i) => (i + 1) % slides.length);
      else setIndex((i) => (i - 1 + slides.length) % slides.length);
    }
  };

  const goTo = (i) => setIndex(i);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
    >
      {/* Dark gradient overlay (30–40%) for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/25 to-transparent pointer-events-none z-20" 
        aria-hidden="true"
      />

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0 z-10"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: shouldReduceMotion ? 0 : 0.8, 
            ease: 'easeInOut' 
          }}
        >
          {/* Hero image with lazy-loading for slides 2 & 3 */}
          <motion.img
            src={slides[index].src}
            alt={slides[index].alt}
            className="w-full h-full object-cover will-change-transform"
            style={{ transformOrigin: 'center' }}
            loading={slides[index].priority ? 'eager' : 'lazy'}
            draggable={false}
            // Subtle slow zoom: scale 1 → 1.05 over slide duration
            animate={shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.05] }}
            transition={{ 
              duration: slideDurationMs / 1000, 
              ease: 'easeInOut' 
            }}
          />

          {/* Light parallax effect on background - subtle motion */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: 'linear-gradient(180deg, rgba(2,6,23,0.15), rgba(2,6,23,0.35))',
              backdropFilter: 'blur(0px)'
            }}
            animate={shouldReduceMotion ? { y: 0 } : { y: [-8, 0] }}
            transition={{ 
              duration: 0.9, 
              ease: 'easeInOut' 
            }}
          />

          {/* Hero Content: headline + CTA with negative space */}
          <div className="absolute left-6 right-6 top-8 md:top-16 max-w-2xl z-30 flex flex-col gap-3">
            <motion.h2 
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 leading-tight drop-shadow-lg"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
            >
              Protect. Secure. Succeed.
            </motion.h2>
            <motion.p 
              className="text-white/85 text-sm sm:text-base md:text-lg max-w-xl drop-shadow-md"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
            >
              Advanced fire safety systems, expert engineering, and compliance-first installations trusted by enterprises.
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicators (mobile-only, no arrows on desktop) */}
      <div 
        className="absolute z-40 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 md:hidden"
        role="tablist"
        aria-label="Carousel slides"
      >
        {slides.map((s, i) => (
          <motion.button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
            className={`rounded-full transition-all duration-300 ${
              i === index 
                ? 'w-8 h-3 bg-white shadow-lg' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>
    </div>
  );
}
