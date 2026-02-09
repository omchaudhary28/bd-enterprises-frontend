import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Services metadata (title, short description, optional bullets, link)
const SERVICES = [
  {
    title: 'Fire Extinguisher Systems',
    description: 'Inspection, servicing and strategic placement of portable and fixed extinguishers.',
    bullets: ['ABC-rated solutions', 'Refill & certification'],
    link: '/services/fire-extinguishers',
  },
  {
    title: 'Fire Alarm & Detection',
    description: 'Design, install and maintain alarm systems with fastest detection coverage.',
    bullets: ['Smoke & heat detectors', 'Monitoring options'],
    link: '/services/fire-alarms',
  },
  {
    title: 'Sprinkler Systems',
    description: 'Wet, dry and pre-action systems tailored to your facility needs.',
    bullets: ['Design & retrofit', 'Annual testing'],
    link: '/services/sprinkler-systems',
  },
  {
    title: 'Emergency Lighting & Exits',
    description: 'Ensure safe egress with code-compliant signage and emergency lights.',
    bullets: ['Battery backup tests', 'Exit signage'],
    link: '/services/emergency-lighting',
  },
  {
    title: 'Fire Safety Training',
    description: 'Hands-on and classroom training for staff and response teams.',
    bullets: ['Extinguisher training', 'Evacuation drills'],
    link: '/services/fire-safety-training',
  },
  {
    title: 'Compliance & Inspection',
    description: 'Comprehensive inspections to keep you compliant with local codes.',
    bullets: ['Reporting & remediation', 'Code expertise'],
    link: '/services/compliance-inspection',
  },
];

// Helper: build a slug from the title (used to derive image filename dynamically)
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Image candidate generator (tries a few extensions & paths)
const imageCandidatesFor = (title) => {
  const slug = slugify(title);
  const exts = ['avif', 'webp', 'jpg', 'jpeg', 'png'];
  const candidates = [];
  for (const ext of exts) {
    candidates.push(`/images/services/${slug}.${ext}`);
    candidates.push(`/images/${slug}.${ext}`);
  }
  // final safe local fallback (should exist in repo)
  candidates.push('/images/istockphoto-2190518272-1024x1024.jpg');
  return candidates;
};

const ServicesCarousel = () => {
  const base = SERVICES;

  // Triple the slides for seamless looping
  const slides = [...base, ...base, ...base];

  const centerIndex = base.length; // start in middle set

  const [visibleCount, setVisibleCount] = useState(1);
  const [index, setIndex] = useState(centerIndex);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef(null);
  const autoTimer = useRef(null);
  const dragStartX = useRef(0);

  // responsive visible items
  const updateVisible = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 1024) setVisibleCount(3); // desktop
    else if (w >= 768) setVisibleCount(2); // tablet
    else setVisibleCount(1); // mobile
  }, []);

  useEffect(() => {
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, [updateVisible]);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    autoTimer.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);
    return () => clearInterval(autoTimer.current);
  }, [isPaused]);

  // Loop handling: when index moves outside central block, jump back without animation
  useEffect(() => {
    const max = base.length * 2;
    const min = base.length - 1;
    if (index > max) {
      // reached far end, reset to equivalent in middle set
      setTimeout(() => {
        setIsAnimating(false);
        setIndex((idx) => idx - base.length);
      }, 300);
      setTimeout(() => setIsAnimating(true), 350);
    } else if (index < min) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex((idx) => idx + base.length);
      }, 300);
      setTimeout(() => setIsAnimating(true), 350);
    }
  }, [index, base.length]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setIndex((i) => i - 1);
      if (e.key === 'ArrowRight') setIndex((i) => i + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // drag end decide
  const onDragEnd = (event, info) => {
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    const threshold = (containerRef.current?.offsetWidth || 300) * 0.15;
    if (offset < -threshold || velocity < -400) setIndex((i) => i + 1);
    else if (offset > threshold || velocity > 400) setIndex((i) => i - 1);
  };

  // item width percent
  const itemPercent = 100 / visibleCount;

  // compute transform X (we want to center the visible window over slides[index])
  const xPercent = -index * itemPercent;

  // render slide card
  const SlideCard = ({ service, idx }) => {
    const candidates = imageCandidatesFor(service.title);

    // onError handler cycles through candidates stored in dataset
    const handleImgError = (e) => {
      const el = e.currentTarget;
      const attempt = Number(el.dataset.attempt || 0) + 1;
      el.dataset.attempt = attempt;
      if (attempt < candidates.length) el.src = candidates[attempt];
    };

    const alt = `${service.title}`;

    // image src = first candidate
    const src = candidates[0];

    return (
      <div
        role="group"
        aria-label={service.title}
        tabIndex={0}
        className="w-full px-2"
      >
        <motion.article
          whileHover={{ y: -6 }}
          className="bg-gradient-to-br from-sky-800 to-blue-900 text-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform-gpu"
          style={{ height: '100%' }}
        >
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <motion.img
              src={src}
              alt={alt}
              data-attempt={0}
              onError={handleImgError}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              whileHover={{ scale: 1.06 }}
            />
          </div>

          <div className="p-4 sm:p-5 md:p-6">
            <h3 className="text-lg font-bold mb-1">{service.title}</h3>
            <p className="text-sm text-white/90 mb-3">{service.description}</p>
            {service.bullets && (
              <ul className="text-xs mb-3 text-white/85 space-y-1">
                {service.bullets.slice(0, 3).map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            )}
            <div className="mt-2">
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold ring-1 ring-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    );
  };

  return (
    <section
      aria-label="Our Services carousel"
      className="relative py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <div className="hidden md:flex gap-2">
            <button
              aria-label="Previous"
              onClick={() => setIndex((i) => i - 1)}
              className="px-3 py-2 bg-slate-100 rounded-md text-slate-800"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() => setIndex((i) => i + 1)}
              className="px-3 py-2 bg-slate-100 rounded-md text-slate-800"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          tabIndex={0}
          className="overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
            animate={{ x: `${xPercent}%` }}
            transition={isAnimating ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
            className="flex items-stretch"
            style={{ width: `${(slides.length * itemPercent).toFixed(4)}%` }}
          >
            {slides.map((s, idx) => (
              <div key={`${s.title}-${idx}`} style={{ width: `${itemPercent}%` }}>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <SlideCard service={s} idx={idx} />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
