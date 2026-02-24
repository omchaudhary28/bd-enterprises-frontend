import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: 'Fire Extinguishers', path: '/services/fire-extinguishers' },
    { name: 'Fire Alarm Detection', path: '/services/fire-alarm-detection' },
    { name: 'Sprinkler Systems', path: '/services/sprinkler-systems' },
    { name: 'Emergency Lighting', path: '/services/emergency-lighting' },
    { name: 'Compliance Inspection', path: '/services/compliance-inspection' },
    { name: 'Oxygen and SCBA Cylinders', path: '/services/oxygen-cylinders' },
  ];

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Brands', path: '/brands' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative z-10 mt-auto border-t border-[#E9ECEF]/10 bg-[#111111] text-[#F8F9FA]">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="B. D. Enterprises" className="h-11 w-auto object-contain" loading="lazy" />
              <h3 className="text-lg font-black tracking-tight text-[#F8F9FA]">B. D. Enterprises</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#E9ECEF]/80">
              Industrial fire and safety solutions with structured execution, trusted partner supply, and long-term compliance support.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-[#FCBF49]">Fire Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm text-[#E9ECEF]/85 transition-colors duration-300 hover:text-[#F77F00]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-[#FCBF49]">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[#E9ECEF]/85 transition-colors duration-300 hover:text-[#F77F00]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-[#FCBF49]">Contact</h4>
            <p className="mb-2 text-sm text-[#E9ECEF]/85">
              Phone:{' '}
              <a href="tel:9898046269" className="transition-colors duration-300 hover:text-[#F77F00]">
                9898046269
              </a>
            </p>
            <p className="mb-4 text-sm text-[#E9ECEF]/85">
              Email:{' '}
              <a
                href="mailto:bdenterprises99@yahoo.co.in"
                className="break-all transition-colors duration-300 hover:text-[#F77F00]"
              >
                bdenterprises99@yahoo.co.in
              </a>
            </p>
            <Link
              to="/contact"
              className="btn-corporate inline-flex min-h-[44px] items-center justify-center rounded-full px-5 text-xs font-black uppercase tracking-wider"
            >
              Contact Team
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E9ECEF]/10 pt-6">
          <p className="text-center text-xs text-[#E9ECEF]/70 md:text-sm">
            Copyright {currentYear} B. D. Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
