import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Fire Extinguishers', path: '/services/fire-extinguishers' },
    { name: 'Fire Alarms', path: '/services/fire-alarm-detection' },
    { name: 'Sprinkler Systems', path: '/services/sprinkler-systems' },
    { name: 'Emergency Lighting', path: '/services/emergency-lighting' },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-lg md:text-xl font-bold glow-text">BD Enterprises</h3>
            </div>
            <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 leading-relaxed mb-4">
              Protecting what matters most with advanced fire safety solutions backed by <span className="font-semibold text-accent">25+ years</span> of expertise.
            </p>

            <div className="flex gap-3 mb-4">
              {[{ label: 'Facebook', icon: 'f' }, { label: 'Twitter', icon: 'X' }, { label: 'LinkedIn', icon: 'in' }].map((s) => (
                <button key={s.label} className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-semibold">
                  {s.icon}
                </button>
              ))}
            </div>

            {/* compact map */}
            {process.env.REACT_APP_GOOGLE_MAP_IFRAME && (
              <div className="mt-4 hidden md:block">
                <div className="w-48 h-20 overflow-hidden rounded-lg shadow-md">
                  <div
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: (function () {
                      try {
                        const raw = process.env.REACT_APP_GOOGLE_MAP_IFRAME;
                        return raw.replace(/<iframe(.*?)>/i, (match, attrs) => {
                          let s = attrs;
                          if (!/loading=/i.test(s)) s += ' loading="lazy"';
                          if (!/style=/i.test(s)) s += ' style="width:100%;height:100%;border:0;border-radius:8px;"';
                          else s = s.replace(/style=(['"])(.*?)\1/i, (m, q, inner) => `style=${q}${inner};width:100%;height:100%;border:0;border-radius:8px;${q}`);
                          return `<iframe${s}>`;
                        });
                      } catch (err) {
                        return process.env.REACT_APP_GOOGLE_MAP_IFRAME;
                      }
                    })() }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-accent mb-3">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-gray-200 hover:text-white">
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
                  <Link to={c.path} className="text-sm text-gray-200 hover:text-white">
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
              &copy; {currentYear} BD Enterprises. All rights reserved. | Fire Safety Excellence Since 2001
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
