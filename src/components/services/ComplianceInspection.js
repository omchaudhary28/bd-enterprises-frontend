import React from 'react';
import { Link } from 'react-router-dom';

const ComplianceInspection = () => {
  const features = [
    { icon: '✓', title: 'Comprehensive Audits', description: 'Full facility assessment against NFPA, IBC, and local fire codes.' },
    { icon: '✓', title: 'Detailed Reports', description: 'Clear documentation of findings with actionable remediation recommendations.' },
    { icon: '✓', title: 'Code Expert Review', description: 'Analysis by certified fire protection engineers ensures accuracy and compliance.' },
    { icon: '✓', title: 'Audit Trail Documentation', description: 'Complete documentation package ready for insurance and regulatory inspections.' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-black min-h-screen py-12 md:py-16">
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="bg-gradient-to-br from-teal-100 to-blue-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg glow-box" data-aos="fade-up" data-aos-duration="400">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-6 text-center glow-text" data-aos="fade-down" data-aos-duration="400">Fire Code Compliance & Inspection Services</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="text-lg text-neutral-700 dark:text-gray-300 leading-relaxed mb-4">
              Navigating fire code requirements can be complex. Our experienced inspectors conduct thorough compliance audits, ensuring your facility meets or exceeds all NFPA standards, IBC requirements, and local fire marshal regulations.
            </p>
            <p className="text-lg text-neutral-700 dark:text-gray-300 leading-relaxed">
              We provide detailed reports, actionable remediation plans, and full documentation to keep your facility compliant, reduce liability, and pass insurance and regulatory inspections with confidence.
            </p>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
            <img src="https://images.unsplash.com/photo-1554224311-beee415c15cb?w=600&h=400&fit=crop" alt="Compliance & Inspection" className="rounded-lg w-full h-auto dark:shadow-2xl transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-secondary dark:text-blue-400 mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="400">Key Features & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start bg-blue-50 dark:bg-gray-900 p-4 rounded-lg border border-blue-200 dark:border-slate-700 service-card-scroll" data-aos="fade-right" data-aos-delay={100 + index * 50} data-aos-duration="400" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl text-accent mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">{feature.title}</h3>
                  <p className="text-neutral-700 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-950 p-8 rounded-lg border border-blue-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 text-center" data-aos="fade-down" data-aos-duration="400">Inspection & Compliance Services</h2>
          <ul className="space-y-3 text-neutral-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100" data-aos-duration="400">
            <li className="flex items-center"><span className="text-accent text-xl mr-3">→</span> Annual NFPA comprehensive facility audits</li>
            <li className="flex items-center"><span className="text-accent text-xl mr-3">→</span> Fire extinguisher certification and inspection</li>
            <li className="flex items-center"><span className="text-accent text-xl mr-3">→</span> Fire alarm system testing and certification</li>
            <li className="flex items-center"><span className="text-accent text-xl mr-3">→</span> Sprinkler system inspections and certifications</li>
            <li className="flex items-center"><span className="text-accent text-xl mr-3">→</span> Emergency lighting and exit signage verification</li>
            <li className="flex items-center"><span className="text-accent text-xl mr-3">→</span> Fire compartmentalization and seal integrity checks</li>
            <li className="flex items-center"><span className="text-accent text-xl mr-3">→</span> Code remediation planning and project management</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="bg-secondary dark:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-opacity-90 dark:hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl glow-box">
            Contact Us
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ComplianceInspection;
