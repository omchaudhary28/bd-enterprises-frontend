import React from 'react';
import { Link } from 'react-router-dom';
import { getDeviceIconSrc } from './deviceIcon';

const FireAlarmDetection = () => {
  const features = [
    { icon: '\u2713', title: 'Smart Detection', description: 'Advanced smoke and heat detection with AI-powered false alarm reduction.' },
    { icon: '\u2713', title: 'Professional Monitoring', description: '24/7 monitoring center alerts and emergency dispatch coordination.' },
    { icon: '\u2713', title: 'System Integration', description: 'Seamless integration with building automation and security systems.' },
    { icon: '\u2713', title: 'Mobile Alerts', description: 'Instant notifications to key personnel on their mobile devices.' },
  ];
  const deviceGroups = [
    {
      title: 'System Core & Panels',
      items: [
        {
          name: 'Fire Alarm System',
          description: 'Complete, code-compliant system design, installation, and commissioning with clear zoning and documentation.'
        },
        {
          name: 'Addressable Panel',
          description: 'Pinpoints the exact device location for faster response, troubleshooting, and maintenance.'
        },
        {
          name: 'Conventional Panel',
          description: 'Zone-based control panels ideal for smaller facilities with straightforward layouts.'
        },
        {
          name: 'Network System (Peer-to-Peer)',
          description: 'Links multiple panels across large sites for centralized monitoring and coordinated response.'
        }
      ]
    },
    {
      title: 'Detection Devices',
      items: [
        {
          name: 'Smoke Detector',
          description: 'Early warning for smoldering fires; installed with proper spacing and airflow considerations.'
        },
        {
          name: 'Heat Detector',
          description: 'Reliable in dusty or humid areas; configured for fixed temperature or rate-of-rise triggers.'
        },
        {
          name: 'Beam Detector',
          description: 'Long-range detection for warehouses and high ceilings with precise alignment and testing.'
        },
        {
          name: 'Flame Detector',
          description: 'Rapid optical detection for high-risk areas such as fuel storage or industrial processes.'
        },
        {
          name: 'Multi Detector',
          description: 'Combines smoke and heat sensing for accurate detection and reduced false alarms.'
        }
      ]
    },
    {
      title: 'Initiation & Notification',
      items: [
        {
          name: 'Manual Call Point (MCP)',
          description: 'Wall-mounted break-glass stations for manual activation near exits and corridors.'
        },
        {
          name: 'Hooter',
          description: 'High-output audible alarm devices installed for clear evacuation signaling.'
        }
      ]
    }
  ];

  return (
    <div className="service-page relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-black min-h-screen py-12 md:py-16">
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="service-page-card bg-gradient-to-br from-teal-100 to-blue-100 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg glow-box" data-aos="fade-up" data-aos-duration="300">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6 text-center glow-text" data-aos="fade-down" data-aos-duration="300">Fire Alarm & Detection Systems</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
          <div>
            <p className="text-base sm:text-lg md:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed mb-4">
              Early detection is critical in fire safety. Our state-of-the-art fire alarm and detection systems use the latest technology to identify fire hazards within seconds, enabling rapid response and evacuation.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed">
              From small offices to large industrial facilities, we design, install, and monitor systems that meet or exceed all regulatory requirements while minimizing false alarms.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md image-reveal-scroll" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="400">
            <img src="/images/services/fire-alarm-detection.svg" alt="Fire Alarm & Detection Systems" className="rounded-lg w-full h-auto dark:shadow-2xl transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary dark:text-blue-400 mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">Key Features & Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col bg-blue-50 dark:bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg border border-blue-200 dark:border-slate-700 service-card-scroll hover:shadow-lg transition-shadow" data-aos="fade-right" data-aos-delay={100 + index * 50} data-aos-duration="300" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl text-accent mb-3">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-primary dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-secondary dark:text-blue-400 mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">Fire Alarm System Devices</h2>
          <p className="text-neutral-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-6">
            We supply, install, and test every major fire alarm component to ensure reliable detection, fast notification, and code-compliant system performance.
          </p>
          {deviceGroups.map((group, groupIndex) => (
            <div key={group.title} className="mt-6">
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-primary dark:text-white mb-4">{group.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((item, index) => (
                  <div key={item.name} className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg border border-blue-200 dark:border-slate-700 service-card-scroll" data-aos="fade-up" data-aos-delay={100 + (groupIndex * 100) + (index * 50)} data-aos-duration="300" style={{ animationDelay: `${index * 80}ms` }}>
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={getDeviceIconSrc(item.name)}
                        alt=""
                        aria-hidden="true"
                        className="w-8 h-8 md:w-9 md:h-9 rounded-lg shadow-sm"
                      />
                      <h4 className="text-lg font-semibold text-primary dark:text-white">{item.name}</h4>
                    </div>
                    <p className="text-sm md:text-base text-neutral-700 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="service-section-card mb-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-black p-6 sm:p-8 rounded-lg border border-blue-200 dark:border-slate-700">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4 text-center" data-aos="fade-down" data-aos-duration="300">Our Service Includes</h2>
          
          {/* Service subsections with images */}
          <div className="space-y-8 mt-6">
            {/* System Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch service-card-scroll" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Complete System Design & Assessment</h3>
                <p className="text-base sm:text-base text-neutral-700 dark:text-gray-300 mb-3">We conduct thorough fire load analysis and facility assessment to design systems that provide comprehensive coverage while meeting all code requirements.</p>
                <ul className="space-y-2 text-base sm:text-base text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Complete site assessment and risk evaluation</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Code compliance planning and design</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Optimal detector placement analysis</li>
                </ul>
              </div>
              <div className="order-first md:order-last overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="/images/services/fire-alarm-system-design.svg" alt="System Design" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Professional Monitoring */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch service-card-scroll" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
              <div className="order-last md:order-first">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-secondary dark:text-blue-400 mb-3">24/7 Professional Monitoring</h3>
                <p className="text-base sm:text-base text-neutral-700 dark:text-gray-300 mb-3">Our certified monitoring center provides round-the-clock surveillance and instant emergency dispatch coordination to ensure rapid response to any fire alarm.</p>
                <ul className="space-y-2 text-base sm:text-base text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> 24/7 professional monitoring center</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Automatic emergency dispatch coordination</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> False alarm reduction protocols</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="/images/services/fire-alarm-monitoring.svg" alt="Professional Monitoring" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Mobile Alerts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch service-card-scroll" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Mobile App & Instant Notifications</h3>
                <p className="text-base sm:text-base text-neutral-700 dark:text-gray-300 mb-3">Key personnel receive instant mobile alerts and real-time system notifications, enabling quick decision-making and response coordination from anywhere.</p>
                <ul className="space-y-2 text-base sm:text-base text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Real-time mobile notifications</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Custom alert configuration per user</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> System status and history tracking</li>
                </ul>
              </div>
              <div className="order-first md:order-last overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="/images/services/fire-alarm-mobile-alerts.svg" alt="Mobile Alerts" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Annual Inspections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch service-card-scroll" data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
              <div className="order-last md:order-first">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Annual Inspections & Compliance</h3>
                <p className="text-base sm:text-base text-neutral-700 dark:text-gray-300 mb-3">Regular inspections ensure all components are functional and systems remain code-compliant. We provide detailed documentation for regulatory agencies and insurance companies.</p>
                <ul className="space-y-2 text-base sm:text-base text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Annual NFPA 72 compliance inspections</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Battery testing and replacement</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Certification documentation provided</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="/images/services/compliance-inspection.svg" alt="Inspections" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="inline-flex min-h-[44px] items-center justify-center bg-secondary dark:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-opacity-90 dark:hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl glow-box">
            Contact Us
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FireAlarmDetection;
