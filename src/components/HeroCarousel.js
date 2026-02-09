import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Hero images (stored in public/images/Hero Images)
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
    alt: 'Firefighter wearing SCBA',
    priority: false,
  },
  {
    id: 3,
    src: '/images/Hero%20Images/fire-sprinkler-systems-help-to-extinguish-fire-in-rental-storage-units-920x533.jpg',
    alt: 'Industrial fire sprinkler system',
    priority: false,
  },
];

const slideDurationMs = 4500; // auto-slide interval (4.5s)

export default function HeroCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    if (isPaused) return undefined;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, slideDurationMs);

    return () => clearInterval(timerRef.current);
  }, [isPaused, shouldReduceMotion]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const variants = {
    enter: { opacity: 0, scale: 1.02 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

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
      className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-20" aria-hidden />

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0 z-10"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: 'easeInOut' }}
        >
          <motion.img
            src={slides[index].src}
            alt={slides[index].alt}
            className="w-full h-full object-cover will-change-transform"
            style={{ transformOrigin: 'center' }}
            loading={slides[index].priority ? 'eager' : 'lazy'}
            draggable={false}
            // subtle slow zoom
            animate={shouldReduceMotion ? {} : { scale: [1, 1.05] }}
            transition={{ duration: slideDurationMs / 1000, ease: 'easeInOut' }}
          />
          {/* parallax overlay subtle */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(2,6,23,0.15), rgba(2,6,23,0.35))' }}
            animate={shouldReduceMotion ? {} : { y: [-6, 0] }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />

          {/* Content slot for headline / CTA - preserve negative space */}
          <div className="absolute left-6 right-6 top-8 md:top-16 max-w-2xl z-30">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight">Protect. Secure. Succeed.</h2>
            <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-xl">Advanced fire safety systems, expert engineering, and compliance-first installations.</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicators */}
      <div className="absolute z-40 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60"
            style={{ opacity: i === index ? 1 : 0.5 }}
          />
        ))}
      </div>
    </div>
  );
}
