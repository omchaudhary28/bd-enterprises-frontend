import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const sections = [
  {
    id: 'egress-design',
    title: 'Egress Lighting Design and Installation',
    images: [
      '/images/emergency-lights/76yvHsMjxoXFU4WTt3JUP94YBWVObAz48gti09nzlKzkXU0iZueHb4nEzuD-Q8MeywZXladWrqsgsRcsVSs2v3F2K7aqdqMe1cmlK-fDSrw.jpg',
      '/images/emergency-lights/VRRSsIdZ3Hrp7F-MiQX3BYUhkRJgyT6js3C-k3k9WT-p1szH9NKExmSOk1PuiKJGViwxnzYrzbX_9bZDpXRNYOuvDQlnvgGThdzaGhYL220.jpg',
    ],
    paragraphs: [
      'B. D. Enterprises designs emergency lighting layouts that keep evacuation paths visible during power loss, smoke conditions, and emergency shutdown scenarios. Installation planning covers corridors, staircases, assembly points, and escape route intersections so occupants can move safely under low-visibility conditions.',
      'Our installation team integrates luminaires, exit indicators, and backup systems based on occupancy density and building movement patterns. This approach supports practical evacuation behavior and improves emergency response coordination for facility staff and incident control teams.',
    ],
    highlights: [
      'Escape route and exit point illumination planning',
      'Strategic placement for low-visibility movement support',
      'Installation suited to occupancy and travel patterns',
      'System setup aligned with evacuation response needs',
    ],
    applications: [
      'Industrial and manufacturing facilities',
      'Commercial offices and business complexes',
      'Warehouses and logistics centers',
      'Institutional campuses and public access buildings',
    ],
    compliance: [
      'Exit route coverage prepared for inspection audits',
      'Installed layout records and location tagging',
      'Commissioning checks for illumination continuity',
      'Documentation support for life safety compliance',
    ],
  },
  {
    id: 'backup-power',
    title: 'Backup Autonomy and System Reliability',
    images: [
      '/images/emergency-lights/WkM7Ecs0fbsLPqwSLpG_y-cimFLti-eKQMT9W0bIoIpwSlHsmGrJgMOWpQZhT4LVnJsQErzLdarPK5WiFH1sq-lzm9oVmP20IQSDwIsOE_U.jpg',
      '/images/emergency-lights/rKGpcdySuc5au8QGVXi18u_EsaETgbClI2bhlNPqBcHJijLk4Urzk6edYOB8N9St45-d46aD8HV3VJfqpH2Wk7O-mA4i73tE4kwMnO2rNPk.jpg',
    ],
    paragraphs: [
      'Emergency lighting reliability depends on battery autonomy, charging performance, and periodic load verification. B. D. Enterprises configures systems to maintain required backup duration and functional stability so evacuation lighting remains active throughout emergency event windows.',
      'Our service scope includes battery health review, charging circuit checks, and fixture-level function tests. This ensures units do not fail at the point of need and allows facility teams to maintain predictable safety performance across all protected areas.',
    ],
    highlights: [
      'Battery autonomy planning for emergency duration targets',
      'Charging circuit and fixture health verification',
      'Periodic function tests for operational confidence',
      'Failure-prone unit identification and replacement planning',
    ],
    applications: [
      'Facilities with strict evacuation time requirements',
      'Operations with frequent power disturbances',
      'High-occupancy buildings requiring safe egress',
      'Risk-sensitive areas with critical process shutdown paths',
    ],
    compliance: [
      'Battery test and replacement records',
      'Autonomy verification logs for audit review',
      'Functional testing evidence across routes',
      'Maintenance records linked to fixture locations',
    ],
  },
  {
    id: 'maintenance-inspection',
    title: 'Maintenance, Inspection, and Service Lifecycle',
    images: [
      '/images/complainces-and-audits/fire-and-life-safety-safety-inspection-checklist-sipe.jpg',
      '/images/complainces-and-audits/Guide%20to%20WHS%20Inspections-1.webp',
    ],
    paragraphs: [
      'B. D. Enterprises provides ongoing emergency lighting maintenance through scheduled inspections, non-working fixture rectification, battery replacement coordination, and circuit continuity checks. Preventive service planning reduces failure risk and keeps evacuation systems available during real emergencies.',
      'We also support compliance inspections through documented service records, system status reports, and corrective action closure. This enables organizations to demonstrate operational readiness to internal EHS teams, insurers, and statutory authorities.',
    ],
    highlights: [
      'Preventive maintenance and fault rectification services',
      'Fixture-level inspection and replacement tracking',
      'Inspection-ready documentation and closure reports',
      'Annual service programs for sustained reliability',
    ],
    applications: [
      'Annual maintenance contracts for emergency lighting',
      'Compliance audit preparation and closure',
      'Legacy system performance restoration',
      'Multi-building centralized maintenance management',
    ],
    compliance: [
      'Inspection logs and maintenance traceability',
      'Rectification records for observed deficiencies',
      'Service evidence for statutory verification',
      'Lifecycle data for internal safety governance',
    ],
  },
];

const standards = [
  {
    title: 'NFPA 101 Intent',
    description: 'Life safety guidance for emergency egress illumination and occupant movement support.',
  },
  {
    title: 'National Building Code',
    description: 'Requirements for exit identification and emergency route lighting in occupied buildings.',
  },
  {
    title: 'Project EHS Standards',
    description: 'Client-level emergency preparedness expectations for lighting system availability.',
  },
];

const capabilities = [
  'Emergency lighting and exit indicator system installation',
  'Route-based layout planning for evacuation effectiveness',
  'Battery autonomy checks and replacement support',
  'Periodic testing and preventive maintenance execution',
  'Inspection support with service documentation',
  'Corrective action closure for audit observations',
];

const EmergencyLighting = () => (
  <ServiceDetailLayout
    pageKey="emergency-lighting"
    badge="Life Safety Illumination"
    title="Emergency Lighting Systems"
    subtitle="Installation, Reliability Management, and Compliance Support"
    intro="B. D. Enterprises delivers complete emergency lighting services including design, installation, backup verification, maintenance, and inspection support. Our solutions are engineered to keep evacuation routes visible, improve emergency response, and maintain compliance readiness across industrial and commercial facilities."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Emergency Lighting Compliance Support?"
    ctaBody="Schedule a site assessment to evaluate route illumination, backup autonomy, maintenance priorities, and audit readiness."
    ctaLabel="Request Lighting Assessment"
  />
);

export default EmergencyLighting;


