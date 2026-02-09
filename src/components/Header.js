import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Grouped services data
  const servicesDropdown = [
    {
      section: 'Detection & Suppression',
      icon: '🔥',
      color: 'from-red-500 to-orange-500',
      items: [
        { label: 'Fire Extinguisher Systems', path: '/services/fire-extinguishers', emoji: '🧯' },
        { label: 'Fire Alarm & Detection', path: '/services/fire-alarm-detection', emoji: '🚨' },
        { label: 'Sprinkler Systems', path: '/services/sprinkler-systems', emoji: '💧' },
      ]
    },
    {
      section: 'Safety & Emergency',
      icon: '⚡',
      color: 'from-yellow-500 to-amber-500',
      items: [
        { label: 'Emergency Lighting & Exits', path: '/services/emergency-lighting', emoji: '💡' },
        { label: 'Fire Safety Training', path: '/services/fire-safety-training', emoji: '👥' },
      ]
    },
    {
      section: 'Compliance & Audits',
      icon: '✓',
      color: 'from-blue-500 to-cyan-500',
      items: [
        { label: 'Compliance & Inspection', path: '/services/compliance-inspection', emoji: '📋' },
      ]
    },
    {
      section: 'Personal Protective Equipment',
      icon: '🛡️',
      color: 'from-purple-500 to-pink-500',
      items: [
        { label: 'Head Protection', path: '/services/ppe/head-protection', emoji: '👷' },
        { label: 'Eye & Face Protection', path: '/services/ppe/eye-face-protection', emoji: '👓' },
        { label: 'Respiratory Protection', path: '/services/ppe/respiratory-protection', emoji: '😷' },
        { label: 'Hand Protection', path: '/services/ppe/hand-protection', emoji: '🧤' },
        { label: 'Foot Protection', path: '/services/ppe/foot-protection', emoji: '👢' },
        { label: 'Body Protection', path: '/services/ppe/body-protection', emoji: '🧥' },
        { label: 'Hearing Protection', path: '/services/ppe/hearing-protection', emoji: '🎧' },
      ]
    }
  ];

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-primary via-primary to-secondary dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-white shadow-lg sticky top-0 z-50 border-b-2 border-accent dark:border-opacity-50 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold hover:text-accent transition-colors duration-300 glow-text truncate">
          <Link to="/" className="flex items-center gap-2">
            <span>🛡️ BD Enterprises</span>
          </Link>
        </h1>
        
        <div className="flex items-center gap-2 md:gap-8 justify-center flex-1 px-4">
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-2 md:space-x-4 items-center justify-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="relative text-lg w-fit block px-4 py-2 after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Services Dropdown */}
              <li className="relative group">
                <button
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="relative text-lg w-fit px-4 py-2 transition-colors duration-300 hover:text-accent inline-flex items-center gap-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {/* Desktop Dropdown Menu */}
                <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className={`absolute z-40 mt-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-xl shadow-2xl border border-accent border-opacity-30 overflow-hidden transition-all duration-300 transform origin-top ${
                    isServicesDropdownOpen ? 'opacity-100 scale-y-100 pointer-events-auto visible' : 'opacity-0 scale-y-95 pointer-events-none invisible'
                  }`}
                  style={{ 
                    top: '100%', 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90vw',
                    maxWidth: '900px',
                    maxHeight: 'calc(100vh - 120px)',
                    overflowY: 'auto',
                    overflowX: 'hidden'
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-8">
                    {servicesDropdown.map((section, idx) => (
                      <div key={idx} className="space-y-3 md:space-y-4">
                        {/* Section Header */}
                        <div className={`flex items-center gap-2 md:gap-3 pb-2 md:pb-3 border-b border-accent border-opacity-20`}>
                          <span className="text-xl md:text-2xl">{section.icon}</span>
                          <h3 className={`text-xs md:text-lg font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                            {section.section}
                          </h3>
                        </div>
                        
                        {/* Subsection Items */}
                        <ul className="space-y-2">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.path}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-accent hover:bg-opacity-20 transition-all duration-200 group/item text-sm md:text-base"
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                <span className="text-lg">{item.emoji}</span>
                                <span className="font-medium group-hover/item:translate-x-1 transition-transform duration-200">
                                  {item.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Dropdown Footer */}
                  <div className="bg-gradient-to-r from-accent/20 to-secondary/20 px-6 md:px-8 py-3 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-accent border-opacity-20 gap-2">
                    <p className="text-xs md:text-sm text-gray-300">
                      ✨ All services backed by 25+ years of expertise
                    </p>
                    <Link
                      to="/services"
                      className="text-accent hover:text-white font-semibold hover:scale-110 transition-transform duration-200 text-sm md:text-base whitespace-nowrap"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Tablet/Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/services"
              className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-secondary to-accent rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 active:scale-95"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 active:scale-95"
            >
              Book Consulting
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white focus:outline-none transition-transform duration-300 active:scale-90 p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-gradient-to-b from-primary to-secondary dark:from-slate-900 dark:to-slate-800 shadow-xl lg:hidden animate-slideDown border-b-2 border-accent max-h-[calc(100vh-80px)] overflow-y-auto z-40">
            <ul className="flex flex-col space-y-0">
              {navLinks.map((link, index) => (
                <li key={index} className="border-b border-accent border-opacity-20">
                  <Link
                    to={link.path}
                    className="block px-4 md:px-6 py-4 text-base md:text-lg hover:bg-secondary dark:hover:bg-blue-900 transition-all duration-300 active:bg-accent active:text-primary font-medium"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesDropdownOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* Mobile Services Section */}
              <li className="border-b border-accent border-opacity-20">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="w-full px-4 md:px-6 py-4 text-base md:text-lg hover:bg-secondary dark:hover:bg-blue-900 transition-all duration-300 font-medium flex items-center justify-between"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {/* Mobile Services Dropdown */}
                {isServicesDropdownOpen && (
                  <div className="bg-primary dark:bg-slate-800 border-t border-accent border-opacity-20 space-y-2 py-3 px-2">
                    {servicesDropdown.map((section, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2 px-3 py-2">
                          <span className="text-xl">{section.icon}</span>
                          <h4 className="font-bold text-accent text-xs md:text-sm">{section.section}</h4>
                        </div>
                        {section.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={item.path}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-secondary dark:hover:bg-blue-900 transition-all duration-300 active:bg-accent active:text-primary text-sm md:text-base ml-2"
                            onClick={() => {
                              setIsOpen(false);
                              setIsServicesDropdownOpen(false);
                            }}
                          >
                            <span>{item.emoji}</span>
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <li className="p-4 border-t border-accent border-opacity-20 bg-primary dark:bg-slate-800">
                <ThemeToggle variant="pill" />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
