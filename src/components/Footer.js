import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Map from './Map';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Fire Extinguishers', path: '/services/fire-extinguishers' },
    { name: 'Fire Alarm Detection', path: '/services/fire-alarm-detection' },
    { name: 'Sprinkler Systems', path: '/services/sprinkler-systems' },
    { name: 'Emergency Lighting', path: '/services/emergency-lighting' },
    { name: 'Fire Safety Training', path: '/services/fire-safety-training' },
    { name: 'Compliance Inspection', path: '/services/compliance-inspection' },
    { name: 'Oxygen Cylinders', path: '/services/oxygen-cylinders' },
    { name: 'Fabrication', path: '/services/fabrication' },
  ];

  const ppeServices = [
    { name: 'Head Protection', path: '/services/ppe/head-protection' },
    { name: 'Eye & Face Protection', path: '/services/ppe/eye-face-protection' },
    { name: 'Respiratory Protection', path: '/services/ppe/respiratory-protection' },
    { name: 'Hand Protection', path: '/services/ppe/hand-protection' },
    { name: 'Foot Protection', path: '/services/ppe/foot-protection' },
    { name: 'Body Protection', path: '/services/ppe/body-protection' },
    { name: 'Hearing Protection', path: '/services/ppe/hearing-protection' },
    { name: 'Oxygen & SCBA Cylinders', path: '/services/oxygen-cylinders' },
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={`${process.env.PUBLIC_URL || ''}/logo.png`} alt="B. D. Enterprises" className="h-12 w-auto object-contain" loading="lazy" />
              <h3 className="text-lg md:text-xl font-bold glow-text">B. D. Enterprises</h3>
            </div>
            <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 leading-relaxed mb-4">
              Protecting what matters most with advanced fire safety solutions backed by <span className="font-semibold text-accent">25+ years</span> of expertise of B. D. Enterprises.
            </p>

            <div className="flex gap-3 mb-4">
              {[{ label: 'Facebook', icon: 'f' }, { label: 'Twitter', icon: 'X' }, { label: 'LinkedIn', icon: 'in' }].map((s) => (
                <button key={s.label} className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-semibold">
                  {s.icon}
                </button>
              ))}
            </div>

            {/* compact map */}
            <div className="mt-4 hidden md:block">
              <div className="w-48 h-20 overflow-hidden rounded-lg shadow-md">
                <Map height={120} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-accent mb-3">Fire Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* PPE Services */}
          <div>
            <h4 className="text-sm font-bold text-accent mb-3">PPE Solutions</h4>
            <ul className="space-y-2">
              {ppeServices.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-accent mb-3">Company</h4>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.path}>
                  <Link to={c.path} className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-accent mb-3">Contact</h4>
            <p className="text-sm text-gray-200">Phone: <a href="tel:9898046269" className="hover:text-white">9898046269</a></p>
            <p className="text-sm text-gray-200">Email: <a href="mailto:bdenterprises99@yahoo.co.in" className="hover:text-white">bdenterprises99@yahoo.co.in</a></p>
          </div>
        </motion.div>

        <div className="border-t border-accent border-opacity-20 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-gray-300 dark:text-gray-400 text-center md:text-left">
              &copy; {currentYear} B. D. Enterprises. All rights reserved. | Fire Safety Excellence Since 2006
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <button className="text-xs md:text-sm text-gray-300 dark:text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer">Privacy Policy</button>
              <button className="text-xs md:text-sm text-gray-300 dark:text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer">Terms & Conditions</button>
              <button className="text-xs md:text-sm text-gray-300 dark:text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer">Sitemap</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
