import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const slides = [
  {
    id: 1,
    src: '/images/Hero%20Images/DEC-ENG-media_215.jpg',
    alt: 'Control room fire safety monitoring',
    headline: 'Industrial Fire Protection That Performs Under Pressure',
    subheadline: 'Design, installation, and lifecycle support for enterprise-grade fire safety systems.',
  },
  {
    id: 2,
    src: '/images/Hero%20Images/Carrying-appearance-of-the-standard-and-prototype-SCBA.png',
    alt: 'Firefighter with SCBA equipment',
    headline: 'Certified PPE and Breathing Air Solutions',
    subheadline: 'Reliable safety equipment aligned with site risk profile, standards, and field operations.',
  },
  {
    id: 3,
    src: '/images/Hero%20Images/fire-sprinkler-systems-help-to-extinguish-fire-in-rental-storage-units-920x533.jpg',
    alt: 'Industrial sprinkler installation',
    headline: 'Code-Compliant Infrastructure, End-to-End',
    subheadline: 'From suppression and detection to audits and training, we deliver complete fire safety readiness.',
  },
];

const AUTO_SLIDE_MS = 5000;

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
    const normalized = (index + slides.length) % slides.length;
    setActiveIndex(normalized);
  };

  const nextSlide = () => goToSlide(activeIndex + 1);
  const prevSlide = () => goToSlide(activeIndex - 1);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < 48) {
      return;
    }
    if (delta < 0) {
      nextSlide();
      return;
    }
    prevSlide();
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

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-900/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.20),transparent_42%)]" />

            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 md:px-6">
              <div className="max-w-3xl">
                <motion.span
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: prefersReduced ? 0 : 0.1, duration: 0.4 }}
                  className="mb-4 inline-flex rounded-full border border-cyan-200/40 bg-cyan-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-100 md:text-sm"
                >
                  Industrial Safety and Fire Protection
                </motion.span>

                <motion.h1
                  key={`hero-title-${slides[activeIndex].id}`}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: prefersReduced ? 0 : 0.15, duration: 0.5, ease: 'easeOut' }}
                  className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                >
                  {slides[activeIndex].headline}
                </motion.h1>

                <motion.p
                  key={`hero-subtitle-${slides[activeIndex].id}`}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: prefersReduced ? 0 : 0.25, duration: 0.5, ease: 'easeOut' }}
                  className="mb-8 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg md:text-xl"
                >
                  {slides[activeIndex].subheadline}
                </motion.p>

                <motion.div
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: prefersReduced ? 0 : 0.3, duration: 0.45, ease: 'easeOut' }}
                  className="flex flex-wrap gap-3"
                >
                  <Link to="/services" className="btn-corporate inline-flex min-h-[50px] items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider">
                    Explore Services
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-cyan-200/70 hover:bg-white/20"
                  >
                    Request Consultation
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/45 md:left-6"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/45 md:right-6"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/30 bg-black/25 px-3 py-2 backdrop-blur-sm">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/85'
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
