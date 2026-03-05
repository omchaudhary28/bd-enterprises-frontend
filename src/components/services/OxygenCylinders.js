import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';
import serviceImageManifest from '../../data/serviceImageManifest';

const serviceImages = serviceImageManifest.oxygenCylinders;

const sections = [
  {
    id: 'supply-planning',
    title: 'Oxygen and SCBA Cylinder Supply Planning',
    images: serviceImages,
    paragraphs: [
      'B. D. Enterprises supplies oxygen and SCBA cylinder solutions for firefighting, emergency response, and industrial breathing support applications. We assess operational risk, usage frequency, and standby requirements to define correct cylinder type, pressure class, and deployment quantity for each facility.',
      'Supply planning includes compatibility checks with breathing apparatus sets, handling requirements, and designated storage practices. This ensures cylinder systems are available, safe to operate, and aligned with the emergency response strategy of the site.',
    ],
    highlights: [
      'Cylinder type and capacity mapping to response needs',
      'SCBA compatibility and deployment planning',
      'Storage and handling strategy for operational safety',
      'Standby readiness alignment for critical zones',
    ],
    applications: [
      'Fire response teams and emergency rescue units',
      'Industrial zones with breathable air risk concerns',
      'Maintenance shutdown support in hazardous areas',
      'Safety teams requiring portable breathing backup',
    ],
    compliance: [
      'Inventory and traceability records for cylinders',
      'Storage and handling compliance documentation',
      'Service and inspection logs for audit readiness',
      'Operational readiness records for safety governance',
    ],
  },
  {
    id: 'testing-maintenance',
    title: 'Inspection, Testing, and Maintenance Lifecycle',
    images: serviceImages,
    paragraphs: [
      'Cylinder reliability requires periodic inspection, pressure condition checks, valve integrity verification, and hydro-test scheduling. B. D. Enterprises provides lifecycle service support that helps organizations maintain safe operating condition and avoid out-of-certification deployment risks.',
      'Our maintenance workflow includes service status tracking, testing coordination, and replacement planning for worn or non-compliant units. This supports uninterrupted safety operations and improves confidence during emergency use.',
    ],
    highlights: [
      'Periodic cylinder condition and valve checks',
      'Hydro-test and certification coordination support',
      'Refill cycle and pressure management oversight',
      'Non-compliant unit replacement planning',
    ],
    applications: [
      'Annual safety equipment maintenance programs',
      'Pre-audit readiness checks for breathing systems',
      'Industrial emergency equipment lifecycle control',
      'Multi-unit response inventory management',
    ],
    compliance: [
      'Test certificates and validity tracking records',
      'Maintenance logs linked to cylinder IDs',
      'Refill and service cycle documentation',
      'Inspection evidence for authority and EHS review',
    ],
  },
  {
    id: 'installation-readiness',
    title: 'Operational Readiness and Service Support',
    images: serviceImages,
    paragraphs: [
      'B. D. Enterprises supports installation and readiness planning for cylinder storage stations, emergency access points, and SCBA deployment locations. We ensure equipment is positioned for fast retrieval and integrated into site emergency response procedures.',
      'Beyond supply and maintenance, we provide consulting on handling SOPs, periodic checks, and response preparedness so teams can operate equipment safely under pressure. This integrated support model improves practical readiness and compliance outcomes across critical operations.',
    ],
    highlights: [
      'Storage and access point setup guidance',
      'SCBA deployment readiness planning',
      'Handling SOP consultation and team orientation',
      'Service scheduling for sustained preparedness',
    ],
    applications: [
      'Emergency response preparedness upgrades',
      'New facility safety infrastructure setup',
      'Refit projects for legacy breathing equipment',
      'Critical operations with heightened respiratory risk',
    ],
    compliance: [
      'Readiness checklists for emergency deployment points',
      'Service reports integrated with safety documentation',
      'Handling protocol records for training audits',
      'Corrective action support for non-conformities',
    ],
  },
];

const standards = [
  {
    title: 'Cylinder Testing Regulations',
    description: 'Periodic hydro-testing and integrity validation for safe operational use.',
  },
  {
    title: 'Industrial Safety Handling Norms',
    description: 'Storage, transportation, and usage practices for pressurized cylinders.',
  },
  {
    title: 'Emergency Response Equipment Protocols',
    description: 'Readiness expectations for breathing support equipment in risk-critical facilities.',
  },
];

const capabilities = [
  'Oxygen and SCBA cylinder sourcing and deployment planning',
  'Periodic inspection and hydro-test coordination',
  'Refill and service lifecycle management support',
  'Storage setup and emergency access planning',
  'Maintenance records and compliance documentation',
  'Consulting for safe handling and operational readiness',
];

const OxygenCylinders = () => (
  <ServiceDetailLayout
    pageKey="oxygen-cylinders"
    badge="Breathing Support Equipment Service"
    title="Oxygen and SCBA Cylinders"
    subtitle="Supply, Testing, Maintenance, and Operational Readiness"
    intro="B. D. Enterprises provides complete oxygen and SCBA cylinder services including supply, inspection, testing coordination, maintenance support, and readiness planning. We help organizations maintain certified breathing support infrastructure for emergency response, industrial safety operations, and compliance-driven equipment governance."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Cylinder Readiness and Maintenance Support?"
    ctaBody="Schedule a technical review for supply planning, testing cycles, service documentation, and emergency deployment readiness."
    ctaLabel="Arrange Technical Review"
  />
);

export default OxygenCylinders;

