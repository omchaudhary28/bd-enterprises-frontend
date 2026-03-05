import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const sections = [
  {
    id: 'modular-panel-system',
    title: 'Modular Panel System Engineering',
    images: [
      '/images/water_modular_tank/Process-Water-Tanks-002-min.jpg',
      '/images/water_modular_tank/STP-Water-Tanks-003-min.jpg',
    ],
    paragraphs: [
      'Water modular tank systems are built using prefabricated panel assemblies that allow flexible capacity planning and controlled on-site installation. B. D. Enterprises designs panel configuration, support layout, and connection architecture to match fire water demand, site conditions, and expansion strategy.',
      'The modular approach minimizes long construction cycles and enables structured project execution in active facilities. Panel-by-panel assembly also supports staged deployment where storage capacity can be increased over time without fully replacing the existing fire water infrastructure.',
    ],
    highlights: [
      'Factory-made panel system for consistent quality',
      'Structured assembly sequence for faster installation',
      'Capacity planning matched to fire water demand',
      'Expandable layout for phased infrastructure growth',
    ],
    applications: [
      'Industrial plants requiring dedicated fire water reserve',
      'Commercial campuses with centralized fire storage planning',
      'Facilities with staged expansion requirements',
      'Sites needing rapid storage deployment in limited spaces',
    ],
    compliance: [
      'Design records aligned to project fire water calculations',
      'Panel assembly checks for commissioning acceptance',
      'Storage documentation for inspection readiness',
      'Installation traceability for statutory reviews',
    ],
  },
  {
    id: 'corrosion-resistance',
    title: 'Corrosion Resistance and Durability Planning',
    images: [
      '/images/water_modular_tank/larger-capacity-storage-tanks-1000x1000.jpg',
      '/images/water_modular_tank/STP-Water-Tanks-003-min.jpg',
    ],
    paragraphs: [
      'B. D. Enterprises specifies modular tank systems with corrosion-resistant material options and sealing methods to maintain long service life in demanding industrial environments. Material selection is guided by water quality, ambient conditions, and expected operating cycle to reduce long-term degradation risk.',
      'Durability planning also includes structural support design, leak prevention strategy, and access provisions for internal inspection. This enables sustained performance and reduces lifecycle maintenance burden while protecting fire protection reliability over the asset lifespan.',
    ],
    highlights: [
      'Corrosion-resistant panel and joint configuration',
      'Leak control through controlled sealing and assembly',
      'Support structure planning for load stability',
      'Inspection-friendly access and service provisions',
    ],
    applications: [
      'Outdoor installations exposed to weather variation',
      'Process facilities with high humidity conditions',
      'Long-life fire protection infrastructure projects',
      'Sites requiring predictable maintenance performance',
    ],
    compliance: [
      'Material and installation records for quality assurance',
      'Periodic integrity checks for safety audits',
      'Structural verification documentation',
      'Maintenance logs for lifecycle traceability',
    ],
  },
  {
    id: 'installation-maintenance',
    title: 'Scalable Installation and Maintenance Services',
    images: [
      '/images/water_modular_tank/Process-Water-Tanks-002-min.jpg',
      '/images/water_modular_tank/larger-capacity-storage-tanks-1000x1000.jpg',
    ],
    paragraphs: [
      'Our installation scope covers civil interface coordination, panel erection, piping interconnection, valve arrangement, and integration with fire pump suction systems. B. D. Enterprises executes installation with documented quality checkpoints so water storage readiness is achieved without operational disruption.',
      'Maintenance services include visual integrity checks, leakage review, structural assessment, and periodic cleaning planning. We provide service schedules, inspection records, and corrective action support so modular tank systems remain reliable as a core component of overall fire protection infrastructure.',
    ],
    highlights: [
      'Complete on-site installation and commissioning support',
      'Integration with pump house and hydrant/sprinkler systems',
      'Scalable upgrades for future capacity requirements',
      'Planned maintenance with documented inspection cycles',
    ],
    applications: [
      'Greenfield fire water storage development',
      'Retrofit replacement of aging storage structures',
      'Capacity expansion for changing fire demand',
      'Compliance upgrade projects for high-occupancy facilities',
    ],
    compliance: [
      'Commissioning reports for fire water readiness',
      'Inspection documentation for statutory and internal audits',
      'Maintenance evidence for lifecycle governance',
      'Corrective action tracking for observed deficiencies',
    ],
  },
];

const standards = [
  {
    title: 'NFPA Water Supply Intent',
    description: 'Adequate and dependable fire water storage for suppression and hydrant network demand.',
  },
  {
    title: 'National Building Code',
    description: 'Fire water reserve planning for occupancy-specific protection requirements.',
  },
  {
    title: 'Project Authority Requirements',
    description: 'Client and local authority requirements for storage integrity and serviceability documentation.',
  },
];

const capabilities = [
  'Modular tank design and site-specific capacity planning',
  'Panel system installation and connection integration',
  'Corrosion-resistant configuration and durability planning',
  'Fire pump and distribution network interface execution',
  'Periodic inspection and maintenance service programs',
  'Compliance documentation and readiness support',
];

const WaterModularTank = () => (
  <ServiceDetailLayout
    pageKey="water-modular-tank"
    badge="Fire Water Storage Infrastructure"
    title="Water Modular Tank"
    subtitle="Scalable Panel Storage Systems for Reliable Fire Water Availability"
    intro="B. D. Enterprises provides complete water modular tank services for fire water storage, including engineering, installation, expansion planning, maintenance, and compliance support. Our modular tank solutions are built for industrial-scale performance, long-term durability, and integration with hydrant and sprinkler protection systems."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Fire Water Storage Planning?"
    ctaBody="Book a technical review for modular tank capacity design, installation planning, and lifecycle maintenance strategy for your facility."
    ctaLabel="Plan Storage Infrastructure"
  />
);

export default WaterModularTank;

