import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';
import serviceImageManifest from '../../data/serviceImageManifest';

const serviceImages = serviceImageManifest.sprinklerSystem;

const sections = [
  {
    id: 'wet-pipe',
    title: 'Wet Pipe Systems',
    images: serviceImages,
    paragraphs: [
      'Wet pipe sprinkler systems operate with constant water-filled pipes, which allows immediate discharge when a sprinkler head activates. Activation occurs through heat-sensitive glass bulb or fusible link operation, opening only at affected points and controlling fire growth in its earliest stage.',
      'B. D. Enterprises recommends wet pipe systems for frost-free environments where fast response, design simplicity, and operational reliability are priorities. These systems are cost-effective, comparatively simple to maintain, and highly dependable for industrial and commercial occupancy fire protection.',
    ],
    highlights: [
      'Constant water-filled network for instant discharge',
      'Heat-triggered activation through bulb or fusible mechanism',
      'Reliable and cost-effective for routine operations',
      'Lower mechanical complexity versus specialized systems',
    ],
    applications: [
      'Commercial offices and business occupancies',
      'Industrial process and manufacturing floors',
      'Retail, logistics, and distribution buildings',
      'Institutional and utility support blocks',
    ],
    compliance: [
      'Hydraulic design and density planning for code alignment',
      'Flow and pressure verification during commissioning',
      'Inspection schedules with valve and alarm checks',
      'Documentation support for regulatory audits',
    ],
  },
  {
    id: 'dry-pipe',
    title: 'Dry Pipe Systems',
    images: serviceImages,
    paragraphs: [
      'Dry pipe systems keep branch lines filled with pressurized air or nitrogen until sprinkler operation occurs. Once a head opens, pressure drops and the dry valve releases water into the piping network, resulting in a controlled delayed discharge suitable for freezing-prone environments.',
      'B. D. Enterprises deploys dry pipe systems where ambient conditions can freeze standing water in wet networks. Warehouses, loading docks, and cold storage facilities benefit from this configuration because it protects infrastructure from freeze damage while maintaining fire suppression readiness.',
    ],
    highlights: [
      'Air-filled piping for freeze protection',
      'Controlled delayed discharge through dry valve operation',
      'Suitable for low-temperature and exposed zones',
      'Specialized valve and compressor supervision requirements',
    ],
    applications: [
      'Cold storage and freezer facilities',
      'Unheated industrial and utility spaces',
      'Loading dock canopies and exposed service areas',
      'Climate-sensitive warehousing operations',
    ],
    compliance: [
      'Dry valve performance testing and pressure monitoring',
      'Periodic trip tests and response time validation',
      'Compressor and air supply inspection logs',
      'Maintenance evidence for compliance review',
    ],
  },
  {
    id: 'deluge',
    title: 'Deluge Systems',
    images: serviceImages,
    paragraphs: [
      'Deluge systems use open sprinkler heads and release water only after a detection system commands the deluge valve. When activated, water discharges simultaneously through all heads in the protected zone, rapidly flooding high-hazard areas where fire spread potential is severe.',
      'B. D. Enterprises engineers deluge solutions for critical risk facilities such as chemical plants, power plants, and specialized process units. The design integrates detection logic, valve release controls, and dedicated water supply capacity to deliver high-intensity suppression where conventional systems may be insufficient.',
    ],
    highlights: [
      'Open-head configuration for full-area discharge',
      'Detection-triggered release for controlled operation',
      'Simultaneous water delivery in high-hazard zones',
      'Suitable for facilities with rapid fire escalation risk',
    ],
    applications: [
      'Chemical and petrochemical process installations',
      'Power generation and high-energy utility zones',
      'Fuel handling and hazardous material sections',
      'Critical risk process clusters and equipment bays',
    ],
    compliance: [
      'Integrated detection and valve logic verification',
      'Discharge test protocols for acceptance and audits',
      'High-hazard protection records and maintenance logs',
      'System readiness evidence for regulatory inspections',
    ],
  },
];

const standards = [
  {
    title: 'NFPA 13',
    description: 'Sprinkler system design and installation guidance for occupancy hazard classification and suppression density.',
  },
  {
    title: 'NFPA 25',
    description: 'Inspection, testing, and maintenance framework to sustain operational sprinkler reliability.',
  },
  {
    title: 'Project Fire Authority Norms',
    description: 'Local authority approvals and test documentation requirements for commissioning and operation.',
  },
];

const capabilities = [
  'Wet pipe, dry pipe, and deluge system engineering',
  'Hydraulic calculations and material specification planning',
  'Installation and commissioning by trained field teams',
  'Inspection and maintenance service schedules',
  'Compliance documentation and audit readiness support',
  'Integration planning with hydrant and fire pump infrastructure',
];

const SprinklerSystems = () => (
  <ServiceDetailLayout
    pageKey="sprinkler-systems"
    badge="Automatic Suppression Service"
    title="Fire Protection Sprinkler Systems"
    subtitle="Wet Pipe, Dry Pipe, and Deluge Engineering and Lifecycle Support"
    intro="B. D. Enterprises provides complete sprinkler system services from design and installation to maintenance, inspection, and compliance support. We evaluate hazard profile, environmental conditions, and process risks to deploy the right sprinkler technology and maintain long-term suppression readiness through structured service programs."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Planning a Sprinkler System Upgrade?"
    ctaBody="Arrange a detailed site survey for sprinkler type selection, hydraulic planning, installation scope, and long-term maintenance strategy."
    ctaLabel="Schedule Engineering Visit"
  />
);

export default SprinklerSystems;

