import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'About', path: '/about', icon: 'about' },
  { label: 'Services', path: '/services', icon: 'services' },
  { label: 'Brands', path: '/brands', icon: 'brands' },
  { label: 'PPE', path: '/ppe', icon: 'ppe' },
  { label: 'Contact', path: '/contact', icon: 'contact' },
];

const iconMap = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-10.5z" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6M12 7h.01" />
    </svg>
  ),
  services: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="6" cy="6" r="1.25" fill="currentColor" />
      <circle cx="6" cy="12" r="1.25" fill="currentColor" />
      <circle cx="6" cy="18" r="1.25" fill="currentColor" />
    </svg>
  ),
  brands: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16v10H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5h8v2M8 17h8" />
    </svg>
  ),
  ppe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 11a7 7 0 0114 0v8H5v-8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V9a4 4 0 118 0v2" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v14H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
    </svg>
  ),
};

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const prefersReduced = useReducedMotion();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isActive = useMemo(
    () => (path) => {
      if (path === '/') {
        return location.pathname === path;
      }
      if (path === '/ppe') {
        return location.pathname.startsWith('/ppe') || location.pathname.startsWith('/services/ppe');
      }
      return location.pathname.startsWith(path);
    },
    [location.pathname]
  );

  const navContent = (
    <>
      <div className="flex items-center gap-3 border-b border-[#E9ECEF]/10 px-4 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D62828] via-[#F77F00] to-[#FCBF49] shadow-[0_10px_20px_rgba(214,40,40,0.35)]">
          <span className="text-sm font-black text-[#111111]">BD</span>
        </div>
        {!isCollapsed && (
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FCBF49]">B. D. Enterprises</p>
            <p className="text-xs text-[#E9ECEF]/75">Fire and Safety Services</p>
          </div>
        )}
      </div>

      <nav className="px-3 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`group flex min-h-[46px] items-center rounded-xl border px-3 py-2 transition-all duration-300 ${
                    active
                      ? 'border-[#F77F00]/60 bg-gradient-to-r from-[#D62828]/25 to-[#F77F00]/20 text-[#FCBF49] shadow-[0_10px_20px_rgba(214,40,40,0.2)]'
                      : 'border-[#E9ECEF]/10 bg-[#181818] text-[#E9ECEF]/85 hover:border-[#F77F00]/45 hover:bg-[#232323] hover:text-[#FCBF49]'
                  }`}
                >
                  <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#111111]/75">
                    {iconMap[item.icon]}
                  </span>
                  {!isCollapsed && (
                    <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto space-y-3 border-t border-[#E9ECEF]/10 p-3">
        {!isCollapsed && (
          <Link
            to="/contact"
            className="btn-corporate inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider"
          >
            Request Site Visit
          </Link>
        )}
        <ThemeToggle variant={isCollapsed ? 'icon' : 'pill'} className={isCollapsed ? 'mx-auto' : ''} />
      </div>
    </>
  );

  return (
    <>
      <motion.aside
        animate={{ width: isCollapsed ? 88 : 288 }}
        transition={{ duration: prefersReduced ? 0 : 0.25, ease: 'easeOut' }}
        className="fixed inset-y-0 left-0 z-50 hidden border-r border-[#E9ECEF]/10 bg-gradient-to-b from-[#131313] via-[#111111] to-[#0E0E0E] md:flex md:flex-col"
      >
        <button
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="absolute -right-3 top-8 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#E9ECEF]/20 bg-[#1A1A1A] text-[#FCBF49]"
          aria-label="Toggle sidebar"
        >
          <svg className={`h-3.5 w-3.5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        {navContent}
      </motion.aside>

      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-4 top-4 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E9ECEF]/25 bg-[#141414]/95 text-[#FCBF49] shadow-lg backdrop-blur-md md:hidden"
        aria-label="Open navigation"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.2 }}
              className="fixed inset-0 z-[65] bg-black/55 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              initial={prefersReduced ? { x: 0 } : { x: -320 }}
              animate={{ x: 0 }}
              exit={prefersReduced ? { x: 0 } : { x: -320 }}
              transition={{ duration: prefersReduced ? 0 : 0.28, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 z-[70] flex w-72 flex-col border-r border-[#E9ECEF]/10 bg-gradient-to-b from-[#131313] via-[#111111] to-[#0E0E0E] md:hidden"
            >
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E9ECEF]/20 bg-[#1A1A1A] text-[#F8F9FA]"
                aria-label="Close navigation"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
