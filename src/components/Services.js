import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: 'Fire Extinguisher Systems',
    description: 'Certified, compliant fire extinguishers for all facility types. Regular inspections, maintenance, and emergency replacement services available 24/7.',
    imageUrl: '/images/services/fire-extinguisher-systems.svg',
    iconUrl: '/images/services/fire-extinguisher-systems.svg',
    path: '/services/fire-extinguishers',
  },
  {
    title: 'Fire Alarm & Detection',
    description: 'State-of-the-art fire detection and alarm systems with smart monitoring. Automatic alerts, professional monitoring, and code compliance guaranteed.',
    imageUrl: '/images/services/fire-alarm-detection.svg',
    iconUrl: '/images/services/fire-alarm-detection.svg',
    path: '/services/fire-alarm-detection',
  },
  {
    title: 'Sprinkler Systems',
    description: 'High-performance sprinkler and suppression systems engineered for maximum protection. Installation, maintenance, and annual inspections included.',
    imageUrl: '/images/services/sprinkler-systems.svg',
    iconUrl: '/images/services/sprinkler-systems.svg',
    path: '/services/sprinkler-systems',
  },
  {
    title: 'Emergency Lighting & Exits',
    description: 'Code-compliant emergency lighting, exit signs, and wayfinding systems. Battery backup and LED solutions for cost savings and reliability.',
    imageUrl: '/images/services/emergency-lighting-exits.svg',
    iconUrl: '/images/services/emergency-lighting-exits.svg',
    path: '/services/emergency-lighting',
  },
  {
    title: 'Fire Safety Training',
    description: 'NFPA-certified fire safety training and employee evacuation drills. Customized programs for your facility to ensure workplace readiness.',
    imageUrl: '/images/services/fire-safety-training.svg',
    iconUrl: '/images/services/fire-safety-training.svg',
    path: '/services/fire-safety-training',
  },
  {
    title: 'Compliance & Inspection',
    description: 'Full NFPA and code compliance audits. Annual inspections, documentation, and certification to keep your facility up-to-date with all regulations.',
    imageUrl: '/images/services/compliance-inspection.svg',
    iconUrl: '/images/services/compliance-inspection.svg',
    path: '/services/compliance-inspection',
  },
];

const Services = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-black min-h-screen py-12 md:py-16">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white glow-text" data-aos="fade-down" data-aos-duration="300">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-100 to-blue-100 dark:from-slate-900 dark:to-slate-800 rounded-lg md:rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform active:scale-95 md:hover:scale-105 cursor-pointer glow-box flex flex-col service-card-scroll"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden h-40 md:h-48 image-reveal-scroll">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <img src={service.iconUrl} alt="" aria-hidden="true" className="w-6 h-6 rounded-sm shadow-sm" />
                  <h2 className="text-lg md:text-2xl font-bold text-primary dark:text-accent hover:text-secondary dark:hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h2>
                </div>
                <p className="text-sm md:text-base text-neutral-700 dark:text-gray-300 mb-4 line-clamp-2 md:line-clamp-3 flex-grow">{service.description}</p>
                <Link to={service.path} className="inline-flex items-center justify-center bg-secondary dark:bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg md:rounded-full text-sm md:text-base font-semibold hover:bg-opacity-90 dark:hover:bg-blue-500 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] active:scale-95 w-full md:w-auto">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
