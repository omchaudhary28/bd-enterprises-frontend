import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const sections = [
  {
    id: 'risk-assessment-selection',
    title: 'Risk Assessment and Extinguisher Selection',
    images: [
      '/images/fire%20extinguisher/co2-flooding-system-1000x1000.jpg',
      '/images/fire%20extinguisher/CO2-Fire-suppression-system.jpg',
    ],
    paragraphs: [
      'B. D. Enterprises begins every fire extinguisher project with a zone-by-zone hazard review covering Class A, B, C, and electrical risk exposure. This allows correct extinguishing media selection, discharge capacity planning, and location mapping so response time is minimized during early-stage fire incidents.',
      'Our design process aligns extinguisher type, quantity, and mounting locations with occupancy use, process hazards, and travel distance criteria. We develop practical deployment plans for offices, factories, warehouses, utilities areas, and high-load production environments where rapid first-response suppression is critical.',
    ],
    highlights: [
      'Class-wise extinguisher selection based on process risk',
      'Coverage mapping for rapid accessibility and response',
      'Wall bracket and floor stand placement planning',
      'Identification signage and asset coding strategy',
    ],
    applications: [
      'Industrial process lines and machine halls',
      'Electrical rooms, panels, and control stations',
      'Commercial offices, corridors, and service zones',
      'Storage blocks with combustible material risk',
    ],
    compliance: [
      'IS 2190 maintenance and placement guidance',
      'NBC fire safety provisions for occupancy protection',
      'Audit-ready extinguisher location documentation',
      'Inspection records linked to asset tagging',
    ],
  },
  {
    id: 'installation-commissioning',
    title: 'Installation and Commissioning Execution',
    images: [
      '/images/fire%20extinguisher/automated-Fire-extinguisher.webp',
      '/images/complainces%20and%20audits/Industrial-buildings-2.jpg',
    ],
    paragraphs: [
      'Installation is executed with controlled mounting heights, visible access paths, and obstruction-free positioning so extinguishers remain immediately reachable in an emergency. We also integrate signage, route marking, and location indexing to ensure users can identify and operate the right extinguisher under pressure.',
      'During commissioning, our team verifies pressure status, nozzle integrity, locking arrangements, and safety pin condition. We hand over system records that include location maps, serial tagging, and service intervals, giving facility managers a clear foundation for periodic inspection and compliance audits.',
    ],
    highlights: [
      'Site-supervised installation by trained technicians',
      'Commissioning checklist for each installed unit',
      'Location coding integrated with maintenance register',
      'User orientation on type-wise extinguisher operation',
    ],
    applications: [
      'New facility fire safety setup projects',
      'Retrofit upgrades for existing buildings',
      'Expansion blocks and additional process zones',
      'Temporary hazard areas requiring short-term cover',
    ],
    compliance: [
      'Commissioning evidence for inspection authorities',
      'Correct installation height and signage conformity',
      'Fire point visibility and accessibility validation',
      'Deployment records for internal safety audits',
    ],
  },
  {
    id: 'maintenance-refilling',
    title: 'Maintenance, Refilling, and Readiness Assurance',
    images: [
      '/images/fire%20extinguisher/CO2-Fire-suppression-system.jpg',
      '/images/fire%20extinguisher/co2-flooding-system-1000x1000.jpg',
    ],
    paragraphs: [
      'Our maintenance scope includes periodic visual checks, pressure verification, cylinder condition review, hose and horn integrity, and tamper seal inspection. Any non-conformity is recorded and corrected through controlled servicing workflows that prioritize immediate readiness and operational reliability.',
      'Refilling and hydro-testing activities are managed with traceable documentation so each extinguisher can be validated during client audits and statutory inspections. B. D. Enterprises also supports annual maintenance contracts with planned service calendars, emergency replacement coordination, and lifecycle tracking for every unit.',
    ],
    highlights: [
      'Periodic preventive maintenance by service schedule',
      'Pressure, weight, and discharge condition verification',
      'Refilling and hydro-test coordination with records',
      'Emergency replacement support for critical locations',
    ],
    applications: [
      'Annual maintenance contract execution',
      'Audit closure and rectification programs',
      'Large campuses requiring centralized tracking',
      'High-occupancy zones with strict readiness targets',
    ],
    compliance: [
      'Service logbooks maintained for each asset',
      'Refill and hydro-test records for compliance proof',
      'Defect closure traceability for inspection teams',
      'Maintenance plans aligned to statutory cycles',
    ],
  },
];

const standards = [
  {
    title: 'IS 2190',
    description: 'Guidelines for selection, installation, inspection, and maintenance of first-aid fire fighting appliances.',
  },
  {
    title: 'National Building Code',
    description: 'Occupancy-wise requirements for fire point positioning, access, and preparedness.',
  },
  {
    title: 'Internal EHS Protocols',
    description: 'Client-specific safety management procedures integrated into service planning and reporting.',
  },
];

const capabilities = [
  'Complete extinguisher installation for new and existing facilities',
  'Annual maintenance contracts with planned inspection schedules',
  'Refilling and hydro-testing coordination with traceable reports',
  'Fire point signage, mapping, and area allocation planning',
  'On-site orientation for user response and extinguisher handling',
  'Rapid breakdown support and replacement coordination',
];

const FireExtinguishers = () => (
  <ServiceDetailLayout
    pageKey="fire-extinguishers"
    badge="Fire Suppression Service"
    title="Fire Extinguisher Systems"
    subtitle="Installation, Maintenance, Compliance, and Inspection Support"
    intro="B. D. Enterprises provides end-to-end fire extinguisher lifecycle services including system setup, technical deployment, inspection planning, refilling management, and preventive maintenance. Our team aligns every installation to site-specific risk conditions and compliance requirements so organizations maintain reliable first-response fire protection at all times."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Extinguisher System Setup or AMC Support?"
    ctaBody="Book a technical site visit for extinguisher selection, deployment planning, and maintenance program design aligned to your facility risk profile."
    ctaLabel="Schedule Site Assessment"
  />
);

export default FireExtinguishers;
