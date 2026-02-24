import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    src: '/images/Hero%20Images/DEC-ENG-media_215.jpg',
    alt: 'Industrial fire control room monitoring',
    headline: 'Fire Safety Infrastructure Built for Industrial Performance',
    subheadline:
      'Engineering, installation, and lifecycle support for fire protection systems in high-demand facilities.',
  },
  {
    id: 2,
    src: '/images/Hero%20Images/Carrying-appearance-of-the-standard-and-prototype-SCBA.png',
    alt: 'SCBA firefighting safety equipment',
    headline: 'Certified PPE and Breathing Support Solutions',
    subheadline:
      'Structured supply for protective equipment aligned with compliance and operational safety requirements.',
  },
  {
    id: 3,
    src: '/images/Hero%20Images/fire-sprinkler-systems-help-to-extinguish-fire-in-rental-storage-units-920x533.jpg',
    alt: 'Industrial sprinkler protection system',
    headline: 'Compliance-First Fire Protection for Modern Facilities',
    subheadline:
      'From detection to suppression and audits, we deliver execution-ready safety programs.',
  },
];

const AUTO_SLIDE_MS = 5200;

const HeroCarousel = () => {
  const prefersReduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (prefersReduced || isPaused) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_MS);

    return () => clearInterval(timer);
  }, [isPaused, prefersReduced]);

  const goToSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const diff = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) < 50) {
      return;
    }

    if (diff < 0) {
      goToSlide(activeIndex + 1);
      return;
    }

    goToSlide(activeIndex - 1);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Homepage hero carousel"
    >
      <div className="relative h-[520px] w-full sm:h-[560px] md:h-[620px] lg:h-[680px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[activeIndex].id}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
            transition={{ duration: prefersReduced ? 0 : 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={slides[activeIndex].src}
              alt={slides[activeIndex].alt}
              className="h-full w-full object-cover"
              loading={activeIndex === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/88 via-[#111111]/65 to-[#111111]/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(214,40,40,0.22),transparent_40%)]" />

            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 md:px-6">
              <div className="max-w-3xl">
                <motion.span
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: prefersReduced ? 0 : 0.1, duration: 0.35 }}
                  className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm"
                >
                  Industrial Safety and Fire Protection
                </motion.span>

                <motion.h1
                  key={`hero-title-${slides[activeIndex].id}`}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: prefersReduced ? 0 : 0.18, duration: 0.45, ease: 'easeOut' }}
                  className="mb-5 text-3xl font-black leading-tight text-[#F8F9FA] sm:text-4xl md:text-5xl lg:text-6xl"
                >
                  {slides[activeIndex].headline}
                </motion.h1>

                <motion.p
                  key={`hero-subtitle-${slides[activeIndex].id}`}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: prefersReduced ? 0 : 0.24, duration: 0.4, ease: 'easeOut' }}
                  className="mb-8 max-w-2xl text-base leading-relaxed text-[#E9ECEF]/90 sm:text-lg md:text-xl"
                >
                  {slides[activeIndex].subheadline}
                </motion.p>

                <motion.div
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: prefersReduced ? 0 : 0.3, duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-wrap gap-3"
                >
                  <Link
                    to="/contact"
                    className="btn-corporate inline-flex min-h-[50px] items-center justify-center rounded-full px-7 py-3 text-sm font-black uppercase tracking-wider"
                  >
                    Get Consultation
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#E9ECEF]/35 bg-[#1C1C1C]/85 px-7 py-3 text-sm font-black uppercase tracking-wider text-[#F8F9FA] transition-all duration-300 hover:border-[#F77F00]/65 hover:text-[#FCBF49]"
                  >
                    View Services
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E9ECEF]/30 bg-[#111111]/55 text-[#F8F9FA] backdrop-blur-sm transition-all duration-300 hover:border-[#F77F00]/65 hover:text-[#FCBF49] md:left-6"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E9ECEF]/30 bg-[#111111]/55 text-[#F8F9FA] backdrop-blur-sm transition-all duration-300 hover:border-[#F77F00]/65 hover:text-[#FCBF49] md:right-6"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#E9ECEF]/30 bg-[#111111]/55 px-3 py-2 backdrop-blur-sm">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-[#F77F00]' : 'w-2.5 bg-[#E9ECEF]/60 hover:bg-[#FCBF49]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
