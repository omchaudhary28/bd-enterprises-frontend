import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const sections = [
  {
    id: 'network-layout',
    title: 'Hydrant Network Layout and Distribution Planning',
    images: [
      '/images/fire_hydrant_system/hydrant-1.webp',
      '/images/fire_hydrant_system/hydrant-2.jpg',
    ],
    paragraphs: [
      'B. D. Enterprises designs fire hydrant systems as a structured distribution network that maintains dependable water availability across operational zones. Ring main routing, branch positioning, and hydrant point allocation are planned to ensure fast firefighting access in industrial and commercial facilities.',
      'Network layout planning considers occupancy hazard, building geometry, process-critical areas, and fire brigade accessibility. This ensures hydrant points are not only code-compliant but also practically located for emergency response teams and internal fire wardens during active incidents.',
    ],
    highlights: [
      'Ring main layout with pressure-stable distribution',
      'Hydrant points mapped for operational accessibility',
      'Branch network balancing for reliable flow delivery',
      'Design planning aligned to real emergency movement paths',
    ],
    applications: [
      'Industrial campuses and manufacturing zones',
      'Warehouse clusters and distribution hubs',
      'Commercial mixed-use facilities',
      'Utility and high-risk process blocks',
    ],
    compliance: [
      'Hydrant spacing and coverage planning records',
      'As-built network drawings for inspection review',
      'Flow and pressure validation during handover',
      'Layout documentation for audit submissions',
    ],
  },
  {
    id: 'pump-integration',
    title: 'Fire Pump Integration and Critical System Components',
    images: [
      '/images/fire_hydrant_system/hydrant-3.jpg',
      '/images/fire_hydrant_system/hydrant-2.jpg',
    ],
    paragraphs: [
      'Hydrant system reliability depends on correct fire pump integration. B. D. Enterprises configures main pumps, standby pumps, jockey pumps, and control logic to maintain stable pressure and deliver required flow when hydrant operation begins. Pump rooms are engineered for maintainability and monitored readiness.',
      'We integrate critical components including hose reels, landing valves, fire brigade inlet connections, and sectional isolation controls. This component-level approach ensures system usability for both in-house response and external fire brigade operations while maintaining clear operational protocols.',
    ],
    highlights: [
      'Main and standby pump integration with control panels',
      'Jockey pump management for line pressure stability',
      'Landing valves and hose reel deployment strategy',
      'Fire brigade inlet integration for external support',
    ],
    applications: [
      'Large facilities requiring high-flow firefighting water',
      'Multi-building sites with extended ring mains',
      'Facilities with dedicated emergency response teams',
      'High-value asset zones requiring rapid manual firefighting',
    ],
    compliance: [
      'Pump testing and performance logs',
      'Landing valve and hose reel inspection records',
      'Fire brigade inlet accessibility verification',
      'Component-level maintenance documentation',
    ],
  },
  {
    id: 'maintenance-compliance',
    title: 'Maintenance, Inspection, and Compliance Standards',
    images: [
      '/images/fire_hydrant_system/hydrant-1.webp',
      '/images/fire_hydrant_system/hydrant-3.jpg',
    ],
    paragraphs: [
      'B. D. Enterprises executes preventive and corrective maintenance programs for hydrant networks including valve operation checks, pump auto-start trials, pressure testing, hose reel verification, and line health inspections. Scheduled maintenance reduces system degradation and preserves emergency readiness.',
      'Our compliance support includes inspection reports, test records, deficiency logs, and rectification closure evidence. This documentation framework supports statutory inspections, insurer assessments, and internal EHS audits while ensuring hydrant infrastructure remains operationally reliable throughout its lifecycle.',
    ],
    highlights: [
      'Periodic pressure, flow, and valve functionality tests',
      'Pump room health checks and automation verification',
      'Hose reel, landing valve, and inlet readiness validation',
      'Rectification tracking with documented closure',
    ],
    applications: [
      'Annual maintenance contracts for hydrant systems',
      'Audit preparation and compliance closeout programs',
      'Performance restoration for aging installations',
      'Operational readiness checks before high-risk shutdowns',
    ],
    compliance: [
      'Test certificates and maintenance log continuity',
      'Inspection-ready reports for authorities and insurers',
      'Defect tracking with closure accountability',
      'Service evidence aligned with fire safety standards',
    ],
  },
];

const standards = [
  {
    title: 'NFPA 20 Reference',
    description: 'Fire pump installation and performance expectations for hydrant water delivery reliability.',
  },
  {
    title: 'NFPA 24 Reference',
    description: 'Private fire service main planning and installation guidance for external distribution systems.',
  },
  {
    title: 'National Building Code Fire Provisions',
    description: 'Hydrant and manual firefighting infrastructure requirements for occupied facilities.',
  },
];

const capabilities = [
  'Hydrant network design, installation, and commissioning',
  'Fire pump room setup with control and standby logic',
  'Landing valve, hose reel, and fire brigade inlet integration',
  'Periodic testing, maintenance, and breakdown rectification',
  'Compliance documentation and inspection support',
  'Lifecycle service planning for sustained hydrant readiness',
];

const FireHydrantSystems = () => (
  <ServiceDetailLayout
    pageKey="fire-hydrant-systems"
    badge="Manual Firefighting Infrastructure"
    title="Fire Hydrant Systems"
    subtitle="Hydrant Network, Pump Integration, and Compliance-Driven Maintenance"
    intro="B. D. Enterprises provides full hydrant system services including engineering, installation, pump integration, commissioning, and lifecycle maintenance. Our hydrant solutions are designed for practical emergency use, sustained pressure reliability, and inspection-ready compliance documentation across industrial and commercial facilities."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Hydrant System Design or Upgrade?"
    ctaBody="Schedule a technical survey for hydrant network planning, pump integration, compliance evaluation, and annual maintenance scope."
    ctaLabel="Book Hydrant Assessment"
  />
);

export default FireHydrantSystems;

