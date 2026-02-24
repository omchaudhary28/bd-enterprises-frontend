import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const serviceGroups = [
  {
    title: 'Fire Systems',
    links: [
      { label: 'Fire Extinguisher Systems', path: '/services/fire-extinguishers' },
      { label: 'Fire Alarm and Detection', path: '/services/fire-alarm-detection' },
      { label: 'Sprinkler Systems', path: '/services/sprinkler-systems' },
      { label: 'Emergency Lighting', path: '/services/emergency-lighting' },
      { label: 'Fire Safety Training', path: '/services/fire-safety-training' },
      { label: 'Compliance Inspection', path: '/services/compliance-inspection' },
    ],
  },
  {
    title: 'PPE Solutions',
    links: [
      { label: 'Head Protection', path: '/services/ppe/head-protection' },
      { label: 'Eye and Face Protection', path: '/services/ppe/eye-face-protection' },
      { label: 'Respiratory Protection', path: '/services/ppe/respiratory-protection' },
      { label: 'Hand Protection', path: '/services/ppe/hand-protection' },
      { label: 'Foot Protection', path: '/services/ppe/foot-protection' },
      { label: 'Body Protection', path: '/services/ppe/body-protection' },
      { label: 'Hearing Protection', path: '/services/ppe/hearing-protection' },
    ],
  },
  {
    title: 'Industrial Support',
    links: [
      { label: 'Oxygen and SCBA Cylinders', path: '/services/oxygen-cylinders' },
      { label: 'Fabrication Services', path: '/services/fabrication' },
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const isActive = useMemo(
    () => (path) => (path === '/' ? location.pathname === path : location.pathname.startsWith(path)),
    [location.pathname]
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b border-cyan-300/20 bg-gradient-to-r from-primary via-primary to-secondary text-white transition-all duration-300 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 ${
        isScrolled ? 'shadow-2xl backdrop-blur-md' : 'shadow-lg'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 md:px-6 md:py-4">
        <Link to="/" aria-label="B. D. Enterprises Home" className="flex flex-shrink-0 items-center gap-3">
          {logoError ? (
            <span className="text-lg font-bold tracking-tight">B. D. Enterprises</span>
          ) : (
            <img
              src="/logo.png"
              alt="B. D. Enterprises"
              className="h-12 w-auto object-contain md:h-14"
              loading="eager"
              onError={() => setLogoError(true)}
            />
          )}
        </Link>

        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const isServicesLink = link.path === '/services';
              return (
                <li
                  key={link.path}
                  className="relative"
                  onMouseEnter={isServicesLink ? () => setIsServicesOpen(true) : undefined}
                  onMouseLeave={isServicesLink ? () => setIsServicesOpen(false) : undefined}
                >
                  <Link
                    to={link.path}
                    className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 xl:text-base ${
                      active
                        ? 'bg-white/20 text-white shadow-md shadow-cyan-900/30'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>

                  {isServicesLink && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                          transition={{ duration: prefersReduced ? 0 : 0.2, ease: 'easeOut' }}
                          className="absolute left-1/2 top-full z-50 mt-3 w-[920px] max-w-[92vw] -translate-x-1/2 overflow-hidden rounded-2xl border border-cyan-300/25 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="grid gap-5 md:grid-cols-3">
                            {serviceGroups.map((group) => (
                              <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-cyan-200">
                                  {group.title}
                                </h3>
                                <ul className="space-y-1.5">
                                  {group.links.map((item) => (
                                    <li key={item.path}>
                                      <Link
                                        to={item.path}
                                        className="block rounded-lg px-2.5 py-2 text-sm text-white/85 transition-all duration-200 hover:bg-cyan-400/15 hover:text-white"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <ThemeToggle />

          <Link
            to="/contact"
            className="btn-corporate hidden min-h-[42px] items-center justify-center rounded-full px-5 text-xs font-bold uppercase tracking-wider md:inline-flex"
          >
            Book Consulting
          </Link>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: prefersReduced ? 0 : 0.2, ease: 'easeOut' }}
            className="border-t border-cyan-300/20 bg-slate-950/95 px-4 py-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-cyan-400/20 text-white'
                        : 'bg-white/5 text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  aria-expanded={isMobileServicesOpen}
                >
                  Service Categories
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                      exit={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: prefersReduced ? 0 : 0.2, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 space-y-2 rounded-xl border border-white/10 bg-white/5 p-3">
                        {serviceGroups.map((group) => (
                          <div key={group.title}>
                            <h4 className="px-1 pb-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
                              {group.title}
                            </h4>
                            <div className="space-y-1">
                              {group.links.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="block rounded-md px-3 py-2 text-sm text-white/85 transition-all duration-200 hover:bg-cyan-400/15 hover:text-white"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li className="pt-1">
                <Link
                  to="/contact"
                  className="btn-corporate inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider"
                >
                  Contact Team
                </Link>
              </li>

              <li>
                <ThemeToggle variant="pill" />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
