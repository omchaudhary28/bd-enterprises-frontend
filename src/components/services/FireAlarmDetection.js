import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';
import serviceImageManifest from '../../data/serviceImageManifest';

const serviceImages = serviceImageManifest.fireAlarmSystems;

const sections = [
  {
    id: 'detection-devices',
    title: 'Smoke and Heat Detection Architecture',
    images: serviceImages,
    paragraphs: [
      'B. D. Enterprises designs integrated fire alarm and detection systems that combine smoke detectors, heat detectors, and suitable device logic based on real hazard conditions. We evaluate occupancy pattern, ambient environment, and process behavior to decide detector type and detector spacing for dependable early warning performance.',
      'Smoke detection and thermal detection are delivered as a single coordinated protection layer under our fire alarm and detection service. This ensures faster recognition of both smoldering and rapid heat-rise incidents, reducing delay between ignition and alarm activation in industrial, commercial, and institutional facilities.',
    ],
    highlights: [
      'Smoke detector deployment for early-stage fire sensing',
      'Heat detector planning for dusty or high-temperature zones',
      'Detector zoning based on risk and response strategy',
      'False alarm reduction through proper device selection',
    ],
    applications: [
      'Production areas with mixed fire load characteristics',
      'Warehousing and logistics spaces with varying storage density',
      'Office and commercial occupancy blocks',
      'Utilities and process support rooms',
    ],
    compliance: [
      'Device selection aligned to site environment conditions',
      'Spacing and zoning prepared for inspection audits',
      'Detector test records maintained for statutory review',
      'System logs integrated with compliance documentation',
    ],
  },
  {
    id: 'addressable-conventional',
    title: 'Addressable and Conventional System Integration',
    images: serviceImages,
    paragraphs: [
      'Our engineering team deploys both addressable and conventional systems based on project scale, troubleshooting requirements, and future expansion plans. Addressable networks provide point-level status visibility, while conventional solutions remain effective for compact and well-defined zone-based installations.',
      'Control panel architecture is configured to match emergency response workflows, annunciation needs, and facility operating priorities. B. D. Enterprises ensures panel logic, device mapping, and integration points are validated during commissioning so incident alerts are clear, actionable, and traceable.',
    ],
    highlights: [
      'Addressable panel configuration with device-level intelligence',
      'Conventional zoning for practical cost-controlled projects',
      'Panel programming, cause-effect matrix, and testing',
      'Scalable design for phased facility expansion',
    ],
    applications: [
      'Large campuses requiring exact alarm point identification',
      'Small and mid-size facilities using zone logic',
      'Mixed-use properties with varied response requirements',
      'Sites upgrading from legacy alarm systems',
    ],
    compliance: [
      'Panel and detector testing protocols for acceptance',
      'Cause-effect documentation for authority review',
      'As-built drawings and zone maps for inspections',
      'Functional test evidence retained for annual audits',
    ],
  },
  {
    id: 'monitoring-maintenance',
    title: 'Monitoring Panels, Maintenance, and Lifecycle Support',
    images: serviceImages,
    paragraphs: [
      'Beyond installation, B. D. Enterprises provides periodic testing, panel health checks, detector cleaning, battery assessment, and fault rectification to keep systems reliable year-round. We build preventive maintenance schedules that limit system downtime and support uninterrupted fire safety readiness.',
      'Our inspection and maintenance process includes alarm simulation, loop verification, notification device testing, and documentation of every finding with corrective action closure. This lifecycle approach ensures the alarm system remains technically compliant and operationally dependable as facility conditions change.',
    ],
    highlights: [
      'Routine panel diagnostics and event history review',
      'Detector cleaning and sensitivity management',
      'Battery, power supply, and sounder functionality checks',
      'Breakdown response and corrective action closure',
    ],
    applications: [
      'Annual maintenance contract programs',
      'Pre-audit system verification campaigns',
      'Performance recovery for nuisance alarm-prone systems',
      'Multi-building monitoring consistency projects',
    ],
    compliance: [
      'Periodic test records prepared for audits',
      'Maintenance logs linked to device and panel IDs',
      'Rectification reports with closure evidence',
      'Service schedules aligned to statutory expectations',
    ],
  },
];

const standards = [
  {
    title: 'NFPA 72 Reference Practice',
    description: 'Benchmark for fire alarm system design, installation, testing, and maintenance procedures.',
  },
  {
    title: 'National Building Code',
    description: 'Detection and alarm requirements for occupancy classification and life safety objectives.',
  },
  {
    title: 'Local Fire Authority Requirements',
    description: 'Jurisdiction-specific approval, testing, and maintenance documentation expectations.',
  },
];

const capabilities = [
  'End-to-end fire alarm and detection system installation',
  'Smoke and heat detector deployment as unified protection scope',
  'Addressable and conventional panel engineering',
  'Testing, commissioning, and compliance documentation',
  'Preventive and corrective maintenance execution',
  'Inspection support and audit preparedness coordination',
];

const FireAlarmDetection = () => (
  <ServiceDetailLayout
    pageKey="fire-alarm-detection"
    badge="Detection and Notification Service"
    title="Fire Alarm & Detection"
    subtitle="Smoke, Heat, Addressable, Conventional, and Monitoring Systems"
    intro="B. D. Enterprises delivers complete fire alarm and detection services including installation, system integration, panel commissioning, preventive maintenance, and compliance inspections. Smoke detection is provided as an integrated function within this service scope, ensuring full-spectrum early warning capability supported by technical documentation and lifecycle service support."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Fire Alarm and Detection Engineering?"
    ctaBody="Schedule a technical walkthrough for system design, detector strategy, panel architecture, and maintenance planning for your facility."
    ctaLabel="Book Technical Consultation"
  />
);

export default FireAlarmDetection;

