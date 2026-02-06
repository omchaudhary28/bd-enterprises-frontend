import React from 'react';
import { Link } from 'react-router-dom';

const FireExtinguishers = () => {
  const features = [
    { icon: '\u2713', title: 'Multi-Type Coverage', description: 'ABC, ABCD, Halon, and specialty extinguishers for all fire classes.' },
    { icon: '\u2713', title: 'Annual Compliance', description: 'Full NFPA 10 compliance with certified inspections and documentation.' },
    { icon: '\u2713', title: '24/7 Replacement', description: 'Emergency replacement service ensures continuous protection.' },
    { icon: '\u2713', title: 'Training Included', description: 'Free staff training on proper operation and emergency procedures.' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-black min-h-screen py-12 md:py-16">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-br from-teal-100 to-blue-100 dark:from-slate-900 dark:to-slate-800 p-6 md:p-8 rounded-lg md:rounded-xl shadow-lg glow-box" data-aos="fade-up" data-aos-duration="300">
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6 text-center glow-text" data-aos="fade-down" data-aos-duration="300">Fire Extinguisher Systems</h1>
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <p className="text-base md:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed mb-4">
                Fire extinguishers are the first line of defense in fire emergencies. Our comprehensive fire extinguisher systems provide multi-class coverage for any facility type, ensuring rapid response capabilities and regulatory compliance.
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed">
                From manufacturing plants to office buildings, we install, inspect, and maintain systems tailored to your specific fire risks and operational needs.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="400">
              <img src="https://images.unsplash.com/photo-1578479318637-f3e97bb6ce5e?w=800&h=600&fit=crop" alt="Fire Extinguisher Inspection" className="rounded-lg shadow-md w-full dark:shadow-2xl transition-transform duration-500 hover:scale-105" />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-secondary dark:text-blue-400 mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">Key Features & Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start bg-blue-50 dark:bg-gray-900 p-4 rounded-lg border border-blue-200 dark:border-slate-700 service-card-scroll" data-aos="fade-right" data-aos-delay={100 + index * 50} data-aos-duration="300" style={{ animationDelay: `${index * 100}ms` }}>
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
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 text-center" data-aos="fade-down" data-aos-duration="300">Our Advanced Fire Suppression Systems</h2>
            <div className="space-y-8 mt-6">
              <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Automated Fire Suppression Systems</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3 leading-relaxed">
                    At BD Enterprises, we provide state-of-the-art automated fire suppression systems designed for immediate, 24/7 protection of your most critical assets. These systems offer unparalleled peace of mind by detecting and extinguishing fires in their earliest stages, often before significant damage can occur. Our expert team designs and installs custom solutions that minimize business interruption and enhance employee safety. By choosing our automated systems, you are investing in a cost-effective, long-term safety strategy that reduces the risk of catastrophic loss and may even lower your insurance premiums.
                  </p>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="/images/fire extinguisher/automated-Fire-extinguisher.webp" alt="Automated Fire Extinguisher System" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">CO2 Fire Suppression Systems</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3 leading-relaxed">
                    BD Enterprises specializes in the design, installation, and maintenance of CO2 fire suppression systems for unoccupied industrial and commercial spaces. These systems are the ideal choice for protecting sensitive, high-value equipment such as data centers, power generation facilities, and flammable liquid storage areas. The CO2 agent suppresses fires by displacing oxygen and cooling the area, leaving behind no residue and eliminating the need for costly cleanup. We ensure that every CO2 system we install complies with all NFPA 12 standards, incorporating critical safety features like pre-discharge alarms and lockout/tagout procedures to protect your personnel and property.
                  </p>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="/images/fire extinguisher/CO2-Fire-suppression-system.jpg" alt="CO2 Fire Suppression System" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">CO2 Flooding Systems</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3 leading-relaxed">
                    For total room protection, BD Enterprises offers CO2 flooding systems that provide rapid, automated fire suppression for unoccupied hazardous areas. These systems are engineered to completely fill a room with a concentration of CO2 gas that is sufficient to extinguish a fire within seconds. This method is exceptionally effective for controlling fires in complex industrial environments with multiple hazards. Our comprehensive services for CO2 flooding systems include site assessment, system design, installation, and ongoing maintenance to ensure your facility is protected against the most challenging fire risks. With a focus on safety and compliance, we deliver solutions that safeguard your assets and ensure business continuity.
                  </p>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="/images/fire extinguisher/co2-flooding-system-1000x1000.jpg" alt="CO2 Flooding System" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">CO2 Tubing Systems</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3 leading-relaxed">
                    CO2 tubing systems connect storage cylinders to discharge nozzles with precision-engineered pipework and fittings. We design routing, install brackets and supports, pressure test the network, and label zones for safe operation and fast maintenance. Properly installed tubing ensures reliable agent delivery and consistent suppression performance across protected areas.
                  </p>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=600&h=400&fit=crop" alt="CO2 Tubing System" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-black p-8 rounded-lg border border-blue-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 text-center" data-aos="fade-down" data-aos-duration="300">Our Service Includes</h2>
            
            {/* Service subsections with images */}
            <div className="space-y-8 mt-6">
              {/* Installation & Placement */}
              <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Professional Installation & Placement</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3">Our certified technicians assess your facility to determine optimal placement and coverage. We ensure accessibility, visibility, and compliance with all regulations.</p>
                  <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Site assessment and planning</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Professional installation by NFPA certified technicians</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Code-compliant placement and accessibility</li>
                  </ul>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=500&h=400&fit=crop" alt="Professional Installation" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>

              {/* NFPA 10 Compliance */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">NFPA 10 Annual Inspections</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3">Annual compliance inspections ensure your extinguishers meet NFPA 10 standards. We provide certified documentation and handle any needed repairs or recharging.</p>
                  <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Annual NFPA 10 certified inspections</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Pressure testing and gauging</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Tagged and documented for compliance</li>
                  </ul>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop" alt="NFPA Compliance" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>

              {/* Hydrostatic Testing */}
              <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Hydrostatic Testing & Recharging</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3">We perform industry-standard hydrostatic testing to verify cylinder integrity and recharge agents to manufacturer specifications, ensuring peak performance when needed.</p>
                  <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Hydrostatic pressure testing (every 5-12 years)</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Agent recharging to OEM specifications</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Quick turnaround and same-day service available</li>
                  </ul>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=500&h=400&fit=crop" alt="Hydrostatic Testing" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>

              {/* 24/7 Emergency Service */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">24/7 Emergency Replacement</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3">If an extinguisher is used or expires during an emergency, our rapid response team ensures you get replacements when you need them&mdash;anytime, day or night.</p>
                  <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> 24/7 emergency replacement availability</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Rapid response team on standby</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Guaranteed replacement within hours</li>
                  </ul>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="https://images.unsplash.com/photo-1578479318637-f3e97bb6ce5e?w=500&h=400&fit=crop" alt="Emergency Service" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>

              {/* Staff Training */}
              <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="400" data-aos-duration="300">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Staff Training & Education</h3>
                  <p className="text-neutral-700 dark:text-gray-300 mb-3">Comprehensive training programs teach employees proper extinguisher operation, safety protocols, and emergency procedures. Certification available upon completion.</p>
                  <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Hands-on training for all staff</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> PASS technique (Pull, Aim, Squeeze, Sweep)</li>
                    <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Certification and documentation provided</li>
                  </ul>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop" alt="Staff Training" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
                      <Link to="/contact" className="bg-secondary dark:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-opacity-90 dark:hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl glow-box">
                        Contact Us
                      </Link>          </div>
        </div>
      </div>
    </div>
  );
};

export default FireExtinguishers;
