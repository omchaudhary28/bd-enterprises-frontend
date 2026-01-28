import React from 'react';
import { Link } from 'react-router-dom';

const FireAlarmDetection = () => {
  const features = [
    { icon: '✓', title: 'Smart Detection', description: 'Advanced smoke and heat detection with AI-powered false alarm reduction.' },
    { icon: '✓', title: 'Professional Monitoring', description: '24/7 monitoring center alerts and emergency dispatch coordination.' },
    { icon: '✓', title: 'System Integration', description: 'Seamless integration with building automation and security systems.' },
    { icon: '✓', title: 'Mobile Alerts', description: 'Instant notifications to key personnel on their mobile devices.' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-black min-h-screen py-12 md:py-16">
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="bg-gradient-to-br from-teal-100 to-blue-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg glow-box" data-aos="fade-up" data-aos-duration="800">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-6 text-center glow-text" data-aos="fade-down" data-aos-duration="800">Fire Alarm & Detection Systems</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="text-lg text-neutral-700 dark:text-gray-300 leading-relaxed mb-4">
              Early detection is critical in fire safety. Our state-of-the-art fire alarm and detection systems use the latest technology to identify fire hazards within seconds, enabling rapid response and evacuation.
            </p>
            <p className="text-lg text-neutral-700 dark:text-gray-300 leading-relaxed">
              From small offices to large industrial facilities, we design, install, and monitor systems that meet or exceed all regulatory requirements while minimizing false alarms.
            </p>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" alt="Fire Alarm & Detection Systems" className="rounded-lg w-full h-auto dark:shadow-2xl transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-secondary dark:text-blue-400 mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">Key Features & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start bg-blue-50 dark:bg-gray-900 p-4 rounded-lg border border-blue-200 dark:border-slate-700 service-card-scroll" data-aos="fade-right" data-aos-delay={100 + index * 50} data-aos-duration="800" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl text-accent mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">{feature.title}</h3>
                  <p className="text-neutral-700 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-black p-8 rounded-lg border border-blue-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 text-center" data-aos="fade-down" data-aos-duration="800">Our Service Includes</h2>
          
          {/* Service subsections with images */}
          <div className="space-y-8 mt-6">
            {/* System Design */}
            <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Complete System Design & Assessment</h3>
                <p className="text-neutral-700 dark:text-gray-300 mb-3">We conduct thorough fire load analysis and facility assessment to design systems that provide comprehensive coverage while meeting all code requirements.</p>
                <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Complete site assessment and risk evaluation</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Code compliance planning and design</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Optimal detector placement analysis</li>
                </ul>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=500&h=400&fit=crop" alt="System Design" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Professional Monitoring */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">24/7 Professional Monitoring</h3>
                <p className="text-neutral-700 dark:text-gray-300 mb-3">Our certified monitoring center provides round-the-clock surveillance and instant emergency dispatch coordination to ensure rapid response to any fire alarm.</p>
                <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> 24/7 professional monitoring center</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Automatic emergency dispatch coordination</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> False alarm reduction protocols</li>
                </ul>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop" alt="Professional Monitoring" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Mobile Alerts */}
            <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Mobile App & Instant Notifications</h3>
                <p className="text-neutral-700 dark:text-gray-300 mb-3">Key personnel receive instant mobile alerts and real-time system notifications, enabling quick decision-making and response coordination from anywhere.</p>
                <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Real-time mobile notifications</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Custom alert configuration per user</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> System status and history tracking</li>
                </ul>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop" alt="Mobile Alerts" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Annual Inspections */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Annual Inspections & Compliance</h3>
                <p className="text-neutral-700 dark:text-gray-300 mb-3">Regular inspections ensure all components are functional and systems remain code-compliant. We provide detailed documentation for regulatory agencies and insurance companies.</p>
                <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Annual NFPA 72 compliance inspections</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Battery testing and replacement</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">✓</span> Certification documentation provided</li>
                </ul>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="https://images.unsplash.com/photo-1554224311-beee415c15cb?w=500&h=400&fit=crop" alt="Inspections" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
          </div>
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

export default FireAlarmDetection;
