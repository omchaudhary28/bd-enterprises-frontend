import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

// Collapsible Footer Section Component
const FooterSection = ({ title, items, sectionId, expandedSection, setExpandedSection, delay, prefersReduced }) => {
  const isExpanded = expandedSection === sectionId;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReduced ? 0 : 0.5, ease: 'easeOut', delay }}
      viewport={{ once: true }}
    >
      {/* Desktop: Always Expanded | Mobile: Collapsible */}
      <motion.button
        onClick={() => setExpandedSection(isExpanded ? null : sectionId)}
        className="w-full md:w-auto text-base md:text-lg font-bold mb-4 text-accent flex items-center justify-between md:justify-start gap-2 md:cursor-default"
        whileHover={prefersReduced ? {} : { x: 5 }}
      >
        <span>{title}</span>
        <svg 
          className="w-4 h-4 md:hidden transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.button>

      {/* Desktop: Always Show | Mobile: Conditional */}
      <motion.div
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: prefersReduced ? 0 : 0.3, ease: 'easeInOut' }}
        className="overflow-hidden md:overflow-visible md:opacity-100"
      >
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.3, delay: prefersReduced ? 0 : idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={item.path}
                className="text-sm md:text-base text-gray-200 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2 py-1 group"
              >
                <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">→</span>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Footer = () => {
  const prefersReduced = useReducedMotion();
  const [expandedSection, setExpandedSection] = useState(null);
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Fire Extinguishers', path: '/services/fire-extinguishers' },
    { name: 'Fire Alarms', path: '/services/fire-alarm-detection' },
    { name: 'Sprinkler Systems', path: '/services/sprinkler-systems' },
    { name: 'Emergency Lighting', path: '/services/emergency-lighting' },
    { name: 'Fire Safety Training', path: '/services/fire-safety-training' },
    { name: 'Compliance & Inspection', path: '/services/compliance-inspection' },
  ];

  const company = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary via-primary to-secondary dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-white mt-auto shadow-lg border-t-4 border-accent dark:border-opacity-50 relative z-10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Desktop: 4-Column Grid | Mobile: Stacked with Collapsible Sections */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.6
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-lg md:text-xl font-bold glow-text">BD Enterprises</h3>
            </div>
            <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 leading-relaxed mb-4">
              Protecting what matters most with advanced fire safety solutions backed by <span className="font-semibold text-accent">25+ years</span> of expertise.
            </p>
            {/* Social Links */}
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[{ label: 'Facebook', icon: 'f' }, { label: 'Twitter', icon: 'X' }, { label: 'LinkedIn', icon: 'in' }].map((social) => (
                <motion.button 
                  key={social.label}
                  className="w-10 h-10 rounded-full bg-accent hover:bg-secondary text-primary flex items-center justify-center font-semibold transition-colors duration-300"
                  whileHover={prefersReduced ? {} : { scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Services Section - Collapsible on Mobile */}
          <FooterSection 
            title="🔥 Services" 
            items={services}
            sectionId="services"
            expandedSection={expandedSection}
            setExpandedSection={setExpandedSection}
            delay={0.08}
            prefersReduced={prefersReduced}
          />

          {/* Company Section - Collapsible on Mobile */}
          <FooterSection 
            title="🏢 Company" 
            items={company}
            sectionId="company"
            expandedSection={expandedSection}
            setExpandedSection={setExpandedSection}
            delay={0.16}
            prefersReduced={prefersReduced}
          />

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.5, ease: 'easeOut', delay: 0.24 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="text-base md:text-lg font-bold mb-4 text-accent">📞 Contact</h4>
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xs md:text-sm font-semibold text-accent mb-1">Email</p>
                <a href="mailto:bdenterprises99@yahoo.co.in" className="text-sm md:text-base text-gray-200 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400 transition-colors duration-300 break-all block">
                  bdenterprises99@yahoo.co.in
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xs md:text-sm font-semibold text-accent mb-1">Phone</p>
                <a href="tel:9898046269" className="text-sm md:text-base text-gray-200 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">
                  📱 9898046269
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xs md:text-sm font-semibold text-accent mb-1">Hours</p>
                <p className="text-sm md:text-base text-gray-200 dark:text-gray-300">
                  ⏰ 24/7 Available
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Trust Indicators & Legal */}
        <motion.div 
          className="border-t border-accent border-opacity-20 pt-8 md:pt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Trust Indicators */}
          <div className="mb-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.div 
              className="flex items-center gap-2 text-sm text-accent font-semibold"
              whileHover={prefersReduced ? {} : { scale: 1.05 }}
            >
              <span className="text-lg">✓</span> ANSI/OSHA Certified
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-sm text-accent font-semibold"
              whileHover={prefersReduced ? {} : { scale: 1.05 }}
            >
              <span className="text-lg">🛡️</span> Enterprise Grade
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-sm text-accent font-semibold"
              whileHover={prefersReduced ? {} : { scale: 1.05 }}
            >
              <span className="text-lg">⏰</span> 25+ Years
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-gray-300 dark:text-gray-400 text-center md:text-left">
              © {currentYear} BD Enterprises. All rights reserved. | <span className="text-accent font-semibold">Fire Safety Excellence Since 2001</span>
            </p>
            <motion.div 
              className="flex gap-4 flex-wrap justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { label: 'Privacy Policy', path: '#' },
                { label: 'Terms & Conditions', path: '#' },
                { label: 'Sitemap', path: '/sitemap.xml' }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-xs md:text-sm text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>

          {/* Optional compact map - renders only if REACT_APP_GOOGLE_MAP_IFRAME is set */}
          {process.env.REACT_APP_GOOGLE_MAP_IFRAME && (
            <div className="mt-6 w-full max-w-sm mx-auto md:mx-0">
              <div className="rounded-lg overflow-hidden shadow-inner">
                <div className="w-full" dangerouslySetInnerHTML={{ __html: process.env.REACT_APP_GOOGLE_MAP_IFRAME }} />
              </div>
            </div>
          )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
