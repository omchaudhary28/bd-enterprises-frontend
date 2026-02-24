import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Brands', path: '/brands' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = useMemo(
    () => (path) => (path === '/' ? location.pathname === path : location.pathname.startsWith(path)),
    [location.pathname]
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#E9ECEF]/10 bg-[#1C1C1C]/95 text-[#F8F9FA] transition-all duration-300 ${
        isScrolled ? 'shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-md' : 'shadow-[0_4px_14px_rgba(0,0,0,0.35)]'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 md:px-6 md:py-4">
        <Link to="/" aria-label="B. D. Enterprises Home" className="flex flex-shrink-0 items-center gap-3">
          {logoError ? (
            <span className="text-lg font-black tracking-tight text-[#F8F9FA]">B. D. Enterprises</span>
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
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`group relative px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 xl:text-[13px] ${
                    isActive(link.path) ? 'text-[#FCBF49]' : 'text-[#F8F9FA]/90 hover:text-[#FCBF49]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#F77F00] transition-all duration-300 ${
                      isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <ThemeToggle />

          <Link
            to="/contact"
            className="btn-corporate hidden min-h-[44px] items-center justify-center rounded-full px-5 text-xs font-black uppercase tracking-wider md:inline-flex"
          >
            Book Consulting
          </Link>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#E9ECEF]/20 bg-[#111111] text-[#F8F9FA] transition-all duration-300 hover:border-[#F77F00]/60 hover:text-[#FCBF49] lg:hidden"
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
            className="border-t border-[#E9ECEF]/10 bg-[#111111]/95 px-4 py-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                      isActive(link.path)
                        ? 'border border-[#F77F00]/50 bg-[#F77F00]/15 text-[#FCBF49]'
                        : 'border border-[#E9ECEF]/10 bg-[#1C1C1C] text-[#F8F9FA]/90 hover:border-[#F77F00]/40 hover:text-[#FCBF49]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="pt-1">
                <Link
                  to="/contact"
                  className="btn-corporate inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-black uppercase tracking-wider"
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
