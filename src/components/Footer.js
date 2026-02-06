import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          
          {/* Brand Section */}
          <div data-aos="fade-up" data-aos-duration="300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-lg md:text-xl font-bold glow-text">BD Enterprises</h3>
            </div>
            <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 leading-relaxed mb-4">
              Protecting what matters most with advanced fire safety solutions backed by 25+ years of expertise.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-accent hover:bg-secondary text-primary flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Facebook">
                f
              </button>
              <button className="w-10 h-10 rounded-full bg-accent hover:bg-secondary text-primary flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Twitter">
                𝕏
              </button>
              <button className="w-10 h-10 rounded-full bg-accent hover:bg-secondary text-primary flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95" aria-label="LinkedIn">
                in
              </button>
            </div>
          </div>

          {/* Services Section */}
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
            <h4 className="text-base md:text-lg font-bold mb-4 text-accent">🔥 Services</h4>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    className="text-sm md:text-base text-gray-200 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400 transition-all duration-300 block py-1 hover:translate-x-1"
                  >
                    → {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200">
            <h4 className="text-base md:text-lg font-bold mb-4 text-accent">🏢 Company</h4>
            <ul className="space-y-2">
              {company.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-sm md:text-base text-gray-200 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400 transition-all duration-300 block py-1 hover:translate-x-1"
                  >
                    → {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">
            <h4 className="text-base md:text-lg font-bold mb-4 text-accent">📞 Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs md:text-sm font-semibold text-accent mb-1">Email</p>
                <a href="mailto:omchaudhary2111@gmail.com" className="text-sm md:text-base text-gray-200 dark:text-gray-300 hover:text-accent transition-colors duration-300 break-all">
                  omchaudhary2111@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold text-accent mb-1">Phone</p>
                <a href="tel:7499953708" className="text-sm md:text-base text-gray-200 dark:text-gray-300 hover:text-accent transition-colors duration-300">
                  7499953708
                </a>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold text-accent mb-1">Hours</p>
                <p className="text-sm md:text-base text-gray-200 dark:text-gray-300">
                  24/7 Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent border-opacity-20 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-gray-300 dark:text-gray-400 text-center md:text-left">
              &copy; {currentYear} BD Enterprises. All rights reserved. | Fire Safety Excellence Since 2001
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <button className="text-xs md:text-sm text-gray-300 dark:text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </button>
              <button className="text-xs md:text-sm text-gray-300 dark:text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer">
                Terms & Conditions
              </button>
              <button className="text-xs md:text-sm text-gray-300 dark:text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
