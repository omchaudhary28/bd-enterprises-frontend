import React from 'react';
import { Link } from 'react-router-dom';

const ppeCategories = [
  {
    title: 'Head Protection',
    subtitle: 'Helmets & Hard Hats',
    description: 'Shields from impact, falling objects, and overhead hazards. Essential for construction, manufacturing, and industrial workplaces.',
    imageUrl: 'https://images.unsplash.com/photo-1516169104891-35b1dd1ca893?w=600&h=400&fit=crop',
    path: '/ppe/head-protection',
    emoji: '🛡️',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Eye & Face Protection',
    subtitle: 'Goggles & Shields',
    description: 'Guard against chemical splashes, welding sparks, and flying debris. Critical for labs, welding, and chemical handling.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-112173d7f6f0?w=600&h=400&fit=crop',
    path: '/ppe/eye-face-protection',
    emoji: '👓',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Hearing Protection',
    subtitle: 'Earplugs & Earmuffs',
    description: 'Prevents noise-induced hearing loss in loud industrial environments. ANSI/OSHA compliant protection.',
    imageUrl: 'https://images.unsplash.com/photo-1484632341272-339079fa3142?w=600&h=400&fit=crop',
    path: '/ppe/hearing-protection',
    emoji: '🎧',
    color: 'from-green-400 to-teal-500',
  },
  {
    title: 'Respiratory Protection',
    subtitle: 'Masks & Respirators',
    description: 'Protects from dust, fumes, gases, and hazardous particles. NIOSH-certified for maximum safety.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5f00206dd?w=600&h=400&fit=crop',
    path: '/ppe/respiratory-protection',
    emoji: '😷',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Hand Protection',
    subtitle: 'Gloves',
    description: 'Specialized gloves for chemical handling, thermal protection, and mechanical safety. Customized for different hazards.',
    imageUrl: 'https://images.unsplash.com/photo-1576158547314-71207b676bfc?w=600&h=400&fit=crop',
    path: '/ppe/hand-protection',
    emoji: '🧤',
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Body Protection',
    subtitle: 'Coveralls & Vests',
    description: 'Full-body coverage from chemical exposure, thermal hazards, and contamination. Durable and compliant.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    path: '/ppe/body-protection',
    emoji: '🧥',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    title: 'Foot Protection',
    subtitle: 'Safety Shoes & Boots',
    description: 'Steel-toed and protective footwear for impact and puncture resistance. ASTM certified for workplace safety.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop',
    path: '/ppe/foot-protection',
    emoji: '👢',
    color: 'from-amber-400 to-orange-500',
  },
];

const PPEs = () => {
  return (
    <div className="ppe-page relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-slate-900 dark:to-slate-800 min-h-screen py-12 md:py-16">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white glow-text mb-3 md:mb-4">
            Personal Protection Equipment (PPEs)
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive PPE solutions for every workplace hazard. Your employees' safety is our priority.
          </p>
          <p className="text-sm sm:text-base text-white/80 mt-3 max-w-2xl mx-auto">
            From head to toe, we provide certified protection equipment and expert guidance on proper usage and maintenance.
          </p>
        </div>

        {/* PPE Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3 sm:gap-4 mb-12">
          {ppeCategories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group relative overflow-hidden rounded-lg md:rounded-xl transition-all duration-300 transform active:scale-95 md:hover:scale-105 flex "
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-black/50 to-black/30 z-10"></div>
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white text-center px-3 py-4">
                <div className="text-4xl md:text-5xl mb-2">{category.emoji}</div>
                <h3 className="text-sm md:text-base font-bold leading-tight line-clamp-2">{category.title}</h3>
                <p className="text-xs md:text-sm font-medium text-white/80 line-clamp-1">{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Main Categories Card Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 glow-text">Explore PPE Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
          {ppeCategories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group bg-gradient-to-br from-white to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform active:scale-95 md:hover:scale-105 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="overflow-hidden h-40 sm:h-48 md:h-56 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <div className="text-3xl sm:text-4xl mb-2">{category.emoji}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-accent dark:text-blue-400 font-semibold mb-2">
                  {category.subtitle}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-gray-300 mb-4 flex-grow leading-snug">
                  {category.description}
                </p>
                <button className="inline-flex items-center justify-center bg-gradient-to-r from-secondary to-accent text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3 rounded-lg md:rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] active:scale-95 w-full min-h-[44px]">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* BD Enterprises PPE Services */}
        <div className="mt-12 md:mt-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 rounded-lg md:rounded-xl border-2 border-accent glow-box" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4 md:mb-6">
            How BD Enterprises Enhances Your PPE Program
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: 'Expert Selection',
                description: 'We help you choose the right PPE for your specific workplace hazards and compliance requirements.',
                icon: '✓',
              },
              {
                title: 'Proper Fitting',
                description: 'Get expert fitting and sizing guidance to ensure maximum comfort and protection for all employees.',
                icon: '👔',
              },
              {
                title: 'Training & Guidance',
                description: 'Comprehensive training on proper usage, care, maintenance, and replacement schedules.',
                icon: '📚',
              },
              {
                title: 'Compliance & Audits',
                description: 'We ensure your PPE program meets all OSHA, ANSI, and industry-specific standards.',
                icon: '📋',
              },
              {
                title: 'Maintenance & Replacement',
                description: 'Scheduled replacements and maintenance services to keep all PPE in optimal condition.',
                icon: '🔧',
              },
              {
                title: '24/7 Support',
                description: 'Emergency replacement and support available around the clock for your peace of mind.',
                icon: '☎️',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="text-base md:text-lg font-bold text-primary dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300 leading-snug">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 md:mt-12 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Enhance Your Workplace Safety?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Contact us today for a comprehensive PPE assessment and customized safety solution for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-[48px] bg-accent dark:bg-blue-500 text-primary dark:text-white px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-black rounded-xl sm:rounded-full shadow-2xl ring-2 ring-white/30 dark:ring-white/20 hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider"
          >
            Schedule PPE Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PPEs;
