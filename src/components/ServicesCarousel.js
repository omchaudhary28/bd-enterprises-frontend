import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    title: 'Fire Extinguisher Systems',
    description: 'Inspection, servicing and strategic placement of portable and fixed extinguishers.',
    link: '/services/fire-extinguishers',
    slug: 'fire-extinguisher-systems',
  },
  {
    title: 'Fire Alarm & Detection',
    description: 'Design, install and maintain alarm systems with fastest detection coverage.',
    link: '/services/fire-alarms',
    slug: 'fire-alarm-detection',
  },
  {
    title: 'Sprinkler Systems',
    description: 'Wet, dry and pre-action systems tailored to your facility needs.',
    link: '/services/sprinkler-systems',
    slug: 'sprinkler-systems',
  },
  {
    title: 'Emergency Lighting & Exits',
    description: 'Ensure safe egress with code-compliant signage and emergency lights.',
    link: '/services/emergency-lighting',
    slug: 'emergency-lighting-exits',
  },
  {
    title: 'Fire Safety Training',
    description: 'Hands-on and classroom training for staff and response teams.',
    link: '/services/fire-safety-training',
    slug: 'fire-safety-training',
  },
  {
    title: 'Compliance & Inspection',
    description: 'Comprehensive inspections to keep you compliant with local codes.',
    link: '/services/compliance-inspection',
    slug: 'compliance-inspection',
  },
];

// Map service index to actual image files available in `/public/images/`
const getImageForService = (index) => {
  const imageMaps = [
    '/images/fire extinguisher/automated-Fire-extinguisher.webp',
    '/images/Fire Alarm Systems/blobid1743092385467.webp',
    '/images/sprinkler system/Fire_sprinkler_roof_mount_side_view.jpg',
    '/images/emergency lights/76yvHsMjxoXFU4WTt3JUP94YBWVObAz48gti09nzlKzkXU0iZueHb4nEzuD-Q8MeywZXladWrqsgsRcsVSs2v3F2K7aqdqMe1cmlK-fDSrw.jpg',
    '/images/fire safety training/feuerloschubung_im_betrieb-cws_fire_safety.jpg',
    '/images/complainces and audits/fire-and-life-safety-safety-inspection-checklist-sipe.jpg',
  ];
  return imageMaps[index % imageMaps.length];
};

const ServicesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const w = window.innerWidth;
    if (w >= 1024) setVisibleCount(3);
    else setVisibleCount(2);
  }, []);

  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3);
      else setVisibleCount(2);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SERVICES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const slideNext = () => setCurrent((c) => (c + 1) % SERVICES.length);
  const slidePrev = () => setCurrent((c) => (c - 1 + SERVICES.length) % SERVICES.length);

  const ServiceCard = ({ service, index }) => {
    const imgSrc = getImageForService(index);
    return (
      <motion.div
        key={`card-${index}`}
        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
      >
        <motion.div
          className="relative bg-gradient-to-br from-[#1C1C1C] to-[#111111] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group"
          whileHover={{ y: -4 }}
        >
          {/* Image Container - 16:9 */}
          <div className="relative w-full bg-slate-700 overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <img
              src={imgSrc}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 flex-grow flex flex-col">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-sm text-white/90 mb-4 flex-grow">{service.description}</p>
            <Link
              to={service.link}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 rounded-lg text-sm font-semibold transition-colors duration-200 w-fit"
            >
              Learn More →
            </Link>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      aria-label="Our Services carousel"
      className="relative py-12 md:py-16 bg-gradient-to-br from-[#111111] via-[#1C1C1C] to-[#111111]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Our Services</h2>
            <p className="text-white/80 text-sm">Swipe or use navigation to explore</p>
          </div>
          <div className="flex gap-3">
            <button
              aria-label="Previous slide"
              onClick={slidePrev}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200"
            >
              &#8249;
            </button>
            <button
              aria-label="Next slide"
              onClick={slideNext}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200"
            >
              &#8250;
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="overflow-hidden rounded-xl"
          role="region"
          aria-live="polite"
        >
          <motion.div
            animate={{ x: `-${(current * (100 / visibleCount))}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex gap-6"
            style={{ width: '100%' }}
          >
            {SERVICES.map((service, idx) => (
              <ServiceCard key={idx} service={service} index={idx} />
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;

