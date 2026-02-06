import React from 'react';
import { Link } from 'react-router-dom';

const SprinklerSystems = () => {
  const features = [
    { icon: '\u2713', title: 'High-Performance Design', description: 'Wet, dry, and pre-action systems engineered for rapid response.' },
    { icon: '\u2713', title: 'Full Coverage', description: 'Complete coverage assessment ensures every area of your facility is protected.' },
    { icon: '\u2713', title: 'Minimal Damage', description: 'Advanced systems discharge only where fire is detected, reducing water damage.' },
    { icon: '\u2713', title: 'Regulatory Compliance', description: 'Full NFPA 13 certification and code compliance inspections.' },
  ];
  const sprinklerDevices = [
    {
      name: 'Sprinkler Pendant',
      description: 'Ceiling-mounted heads designed for most indoor areas with uniform spray coverage.'
    },
    {
      name: 'Sprinkler Upright',
      description: 'Installed above pipework for open ceilings and industrial areas with exposed piping.'
    },
    {
      name: 'Alarm Valve',
      description: 'Core control valve that triggers waterflow alarms and monitors system activation.'
    },
    {
      name: 'Curtain Nozzle',
      description: 'Creates a water curtain to protect openings, conveyors, or separating zones.'
    },
    {
      name: 'Deluge Valve',
      description: 'Used in deluge systems for high-hazard areas; releases water through open heads.'
    }
  ];
  const hydrantDevices = [
    {
      name: 'Hydrant Valve',
      description: 'Main outlet valve for drawing water during firefighting operations.'
    },
    {
      name: 'Hose Box',
      description: 'Wall-mounted cabinet housing hose reels and hydrant accessories for quick access.'
    },
    {
      name: 'Hose Reel Drum',
      description: 'Provides controlled hose deployment for first-aid firefighting.'
    },
    {
      name: 'Shut-Off Nozzle',
      description: 'Controls water flow at the hose end with adjustable spray patterns.'
    },
    {
      name: 'Hose Pipe',
      description: 'Durable, high-pressure hose used for hydrant and hose reel systems.'
    },
    {
      name: 'Pressure Gauge',
      description: 'Displays line pressure to verify system readiness and pump performance.'
    },
    {
      name: 'Pressure Switch',
      description: 'Automatically starts pumps when pressure drops below set thresholds.'
    },
    {
      name: 'Butterfly Valve',
      description: 'Quarter-turn isolation valve for quick system control and maintenance.'
    },
    {
      name: 'Sluice Valve',
      description: 'Gate valve for line isolation, commonly used in underground piping.'
    },
    {
      name: 'NRV (Non-Return Valve)',
      description: 'Prevents reverse flow and protects pumps and pipework.'
    },
    {
      name: 'Pressure Relief Valve',
      description: 'Releases excess pressure to protect equipment and system integrity.'
    },
    {
      name: 'Foot Valve',
      description: 'One-way valve at pump suction to maintain prime and prevent backflow.'
    },
    {
      name: 'Bellows (Expansion Joint)',
      description: 'Absorbs vibration and thermal expansion in piping runs.'
    },
    {
      name: 'Electrical Main Pump',
      description: 'Primary water supply pump sized for full hydrant demand.'
    },
    {
      name: 'Electrical Jockey Pump',
      description: 'Maintains system pressure and prevents unnecessary main pump starts.'
    },
    {
      name: 'Diesel Engine Pump',
      description: 'Backup pump for reliable operation during power failures.'
    },
    {
      name: 'Modular Tank',
      description: 'On-site water storage with scalable capacity for fire protection demand.'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-black min-h-screen py-12 md:py-16">
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="bg-gradient-to-br from-teal-100 to-blue-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg glow-box" data-aos="fade-up" data-aos-duration="300">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-6 text-center glow-text" data-aos="fade-down" data-aos-duration="300">Sprinkler & Suppression Systems</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="text-lg text-neutral-700 dark:text-gray-300 leading-relaxed mb-4">
              Sprinkler systems are the gold standard in fire suppression. Our high-performance systems automatically detect and suppress fires before they spread, protecting lives, property, and business continuity.
            </p>
            <p className="text-lg text-neutral-700 dark:text-gray-300 leading-relaxed">
              We design, install, and maintain systems for every building type&mdash;from warehouses and factories to office parks and retail centers. Our systems minimize collateral water damage while maximizing fire suppression effectiveness.
            </p>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="400">
            <img src="https://images.unsplash.com/photo-1581092160562-40038f56c6fe?w=600&h=400&fit=crop" alt="Sprinkler & Suppression Systems" className="rounded-lg w-full h-auto dark:shadow-2xl transition-transform duration-500 hover:scale-105" />
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

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-secondary dark:text-blue-400 mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">Sprinkler System Components</h2>
          <p className="text-neutral-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-6">
            We supply and install certified sprinkler components with proper spacing, hydraulic calculations, and commissioning tests.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sprinklerDevices.map((device, index) => (
              <div key={device.name} className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg border border-blue-200 dark:border-slate-700 service-card-scroll" data-aos="fade-up" data-aos-delay={100 + index * 50} data-aos-duration="300" style={{ animationDelay: `${index * 80}ms` }}>
                <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">{device.name}</h3>
                <p className="text-sm md:text-base text-neutral-700 dark:text-gray-300">{device.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-secondary dark:text-blue-400 mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">Hydrant System Components</h2>
          <p className="text-neutral-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-6">
            Our hydrant installations include pumps, valves, and accessories designed for reliable water delivery and easy emergency access.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hydrantDevices.map((device, index) => (
              <div key={device.name} className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg border border-blue-200 dark:border-slate-700 service-card-scroll" data-aos="fade-up" data-aos-delay={100 + index * 40} data-aos-duration="300" style={{ animationDelay: `${index * 70}ms` }}>
                <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">{device.name}</h3>
                <p className="text-sm md:text-base text-neutral-700 dark:text-gray-300">{device.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-black p-8 rounded-lg border border-blue-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 text-center" data-aos="fade-down" data-aos-duration="300">Our Service Includes</h2>
          
          {/* Service subsections with images */}
          <div className="space-y-8 mt-6">
            {/* System Design & Engineering */}
            <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">System Design & Engineering</h3>
                <p className="text-neutral-700 dark:text-gray-300 mb-3">Our engineers conduct complete hydraulic analysis and fire load assessment to design systems providing optimal coverage and rapid response for your specific facility.</p>
                <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Complete hydraulic and fire load analysis</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> System design for optimal coverage</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Engineering documentation and plans</li>
                </ul>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=500&h=400&fit=crop" alt="System Design" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Professional Installation */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Professional Installation</h3>
                <p className="text-neutral-700 dark:text-gray-300 mb-3">Licensed installers execute all work with minimal operational disruption. We handle all connections, supports, and system testing to ensure peak performance.</p>
                <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Licensed professional installation</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Minimal facility disruption</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Complete system testing and commissioning</li>
                </ul>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop" alt="Installation" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Annual Inspections & Testing */}
            <div className="flex flex-col md:flex-row items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Annual Inspections & Testing</h3>
                <p className="text-neutral-700 dark:text-gray-300 mb-3">We perform comprehensive NFPA 13 inspections and pressure testing to ensure systems are fully functional and code-compliant every year.</p>
                <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> NFPA 13 annual inspections</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Pressure and flow testing</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Detailed compliance reporting</li>
                </ul>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="https://images.unsplash.com/photo-1554224311-beee415c15cb?w=500&h=400&fit=crop" alt="Inspections" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* System Support & Maintenance */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 service-card-scroll" data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 mb-3">Support, Hangers & Freeze Protection</h3>
                <p className="text-neutral-700 dark:text-gray-300 mb-3">We provide all necessary support brackets, hangers, and freeze protection systems to ensure year-round reliability in all climate conditions.</p>
                <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Professional hangers and support brackets</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> Freeze protection systems for cold climates</li>
                  <li className="flex items-center"><span className="text-accent text-xl mr-2">&#10003;</span> System upgrades and retrofitting services</li>
                </ul>
              </div>
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md image-reveal-scroll">
                <img src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=500&h=400&fit=crop" alt="Support Systems" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
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

export default SprinklerSystems;
