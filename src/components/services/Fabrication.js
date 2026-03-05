import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const sections = [
  {
    id: 'custom-design',
    title: 'Custom Fabrication Design for Fire and Safety Infrastructure',
    images: [
      '/images/fabrication/fabrication-1.jpg',
      '/images/fabrication/fabrication-2.webp',
    ],
    paragraphs: [
      'B. D. Enterprises provides custom fabrication services for fire and safety system support structures, protective housings, equipment stands, and utility assemblies. Each fabrication requirement is developed from practical site conditions, operational loads, and access constraints to ensure long-term field usability.',
      'Our design process includes dimension verification, material suitability checks, and integration planning with installed fire safety systems. This enables clients to deploy fabricated components that improve maintainability, protection, and organized system layout across operational areas.',
    ],
    highlights: [
      'Site-driven design for practical field installation',
      'Material and dimensional suitability planning',
      'Integration with fire and safety equipment layouts',
      'Fabrication aligned to serviceability requirements',
    ],
    applications: [
      'Safety equipment mounting and housing solutions',
      'Pump room and hydrant accessory supports',
      'Control panel and utility protection structures',
      'Industrial areas requiring durable custom assemblies',
    ],
    compliance: [
      'Fabrication drawings and specification records',
      'Installation traceability for inspection support',
      'Material documentation for quality verification',
      'Project closure evidence for audit readiness',
    ],
  },
  {
    id: 'manufacturing-installation',
    title: 'Manufacturing Execution and On-Site Installation',
    images: [
      '/images/fabrication/fabrication-3.png',
      '/images/fabrication/fabrication-2.webp',
    ],
    paragraphs: [
      'Fabrication execution is managed through controlled production workflows followed by supervised site installation. B. D. Enterprises coordinates measurements, fitment checks, and installation sequencing so fabricated components align accurately with existing structures and operational pathways.',
      'Our team ensures that fabricated assemblies are installed without obstructing emergency access, maintenance movement, or system operation. This reduces rework and supports safer, cleaner infrastructure integration in live industrial environments.',
    ],
    highlights: [
      'Controlled fabrication process with quality checkpoints',
      'Fitment verification before final installation',
      'Site installation planning with safety controls',
      'Integration without disrupting critical operations',
    ],
    applications: [
      'Retrofit upgrades in active operational facilities',
      'New fire system support structure deployment',
      'Equipment relocation and layout optimization projects',
      'Multi-point fabrication and installation contracts',
    ],
    compliance: [
      'Installation quality check records',
      'Alignment verification for safety access requirements',
      'Rectification reports for site observations',
      'Completion documentation for project audits',
    ],
  },
  {
    id: 'maintenance-service',
    title: 'Maintenance, Retrofit, and Lifecycle Support',
    images: [
      '/images/fabrication/fabrication-1.jpg',
      '/images/fabrication/fabrication-3.png',
    ],
    paragraphs: [
      'Fabricated infrastructure requires periodic inspection for corrosion, structural wear, and mounting integrity. B. D. Enterprises provides maintenance and retrofit support to restore performance, improve safety, and extend usable service life of installed fabricated components.',
      'We also support compliance and inspection programs by documenting condition assessments, repair actions, and replacement recommendations. This enables facilities to maintain dependable fabrication performance while meeting internal and statutory safety expectations.',
    ],
    highlights: [
      'Condition assessment and repair planning',
      'Retrofit upgrades for aging fabricated structures',
      'Corrosion and integrity management support',
      'Lifecycle documentation for compliance continuity',
    ],
    applications: [
      'Annual maintenance programs for support structures',
      'Safety infrastructure modernization initiatives',
      'Corrective work after compliance audits',
      'Long-term facility improvement contracts',
    ],
    compliance: [
      'Maintenance logs for fabricated components',
      'Repair and retrofit records with closure evidence',
      'Inspection reports for safety audits',
      'Lifecycle tracking for asset governance',
    ],
  },
];

const standards = [
  {
    title: 'Industrial Fabrication Practice',
    description: 'Field-oriented fabrication standards for structural reliability and safe operational use.',
  },
  {
    title: 'Occupational Safety Requirements',
    description: 'Safe access, movement, and hazard control integration during fabrication and installation.',
  },
  {
    title: 'Project Quality Assurance Controls',
    description: 'Documentation, inspection, and closure evidence for fabrication quality governance.',
  },
];

const capabilities = [
  'Custom fabrication for fire and safety infrastructure',
  'Design-to-installation execution with fitment validation',
  'Retrofit and repair support for existing structures',
  'Maintenance services for lifecycle reliability',
  'Compliance documentation for inspections and audits',
  'Technical consulting for durable fabrication planning',
];

const Fabrication = () => (
  <ServiceDetailLayout
    pageKey="fabrication"
    badge="Custom Industrial Support Service"
    title="Fabrication Services"
    subtitle="Design, Installation, Retrofit, and Maintenance for Safety Infrastructure"
    intro="B. D. Enterprises delivers end-to-end fabrication services for fire and safety infrastructure, including custom design, manufacturing, installation, and lifecycle maintenance. Our fabrication solutions are engineered for durability, practical operation, and compliance support in demanding industrial and commercial environments."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Custom Fabrication for Your Safety Infrastructure?"
    ctaBody="Schedule a site consultation to define fabrication requirements, installation strategy, and lifecycle maintenance scope."
    ctaLabel="Request Fabrication Consultation"
  />
);

export default Fabrication;

