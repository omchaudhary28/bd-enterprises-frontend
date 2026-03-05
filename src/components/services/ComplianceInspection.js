import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const sections = [
  {
    id: 'inspection-framework',
    title: 'Technical Inspection Framework and Gap Assessment',
    images: [
      '/images/compliances-and-audits/fire-and-life-safety-safety-inspection-checklist-sipe.jpg',
      '/images/compliances-and-audits/Guide%20to%20WHS%20Inspections-1.webp',
    ],
    paragraphs: [
      'B. D. Enterprises conducts structured compliance inspections covering fire protection systems, emergency infrastructure, safety records, and operational controls. Our inspection approach identifies technical non-conformities, documentation gaps, and service deficiencies that can affect statutory readiness and emergency performance.',
      'Every inspection is executed with practical facility context in mind, including system availability, maintenance history, and process risk exposure. This produces actionable findings rather than generic checklists, allowing organizations to prioritize high-impact corrective measures.',
    ],
    highlights: [
      'Comprehensive fire and safety asset inspection',
      'Operational and documentation gap identification',
      'Risk-priority classification of observed findings',
      'Actionable site-specific compliance recommendations',
    ],
    applications: [
      'Pre-audit readiness checks for industrial facilities',
      'Recurring internal EHS compliance reviews',
      'Insurance and external audit preparation',
      'Post-expansion safety compliance verification',
    ],
    compliance: [
      'Inspection reports with evidence-based findings',
      'Gap registers mapped to corrective actions',
      'Priority grading for closure sequencing',
      'Traceable records for internal and external audits',
    ],
  },
  {
    id: 'corrective-planning',
    title: 'Corrective Action Planning and Implementation Support',
    images: [
      '/images/compliances-and-audits/0_l7xz_e_0Y31BCplJ.png',
      '/images/compliances-and-audits/06c082721669e71c86cda1f8000022c610ef15a2-940x492.webp',
    ],
    paragraphs: [
      'After inspection, B. D. Enterprises prepares a closure roadmap that links every finding to technical rectification, ownership assignment, and completion target. This includes system repairs, replacement recommendations, service interventions, and documentation updates required to meet compliance benchmarks.',
      'Our team supports implementation follow-through by coordinating with client operations, maintenance teams, and third-party service providers. This ensures corrective actions move from report stage to practical execution with measurable closure evidence.',
    ],
    highlights: [
      'Corrective action matrix with timelines and ownership',
      'Rectification support for system and process gaps',
      'Prioritized closure for high-risk observations',
      'Execution tracking with status reporting',
    ],
    applications: [
      'Audit observation closure programs',
      'Compliance recovery for overdue facilities',
      'System upgrade planning after risk assessments',
      'Plant readiness before certification reviews',
    ],
    compliance: [
      'Closure evidence for each corrective action',
      'Status reporting aligned to inspection findings',
      'Rectification validation before final sign-off',
      'Documentation package for re-inspection readiness',
    ],
  },
  {
    id: 'maintenance-governance',
    title: 'Maintenance Governance and Ongoing Compliance Monitoring',
    images: [
      '/images/compliances-and-audits/Industrial-buildings-2.jpg',
      '/images/compliances-and-audits/fire-and-life-safety-safety-inspection-checklist-sipe.jpg',
    ],
    paragraphs: [
      'Compliance stability depends on continuous maintenance governance. B. D. Enterprises supports periodic review cycles, service schedule controls, and document quality checks so facilities do not drift back into non-compliance after initial closure.',
      'We establish monitoring routines that integrate inspection outcomes with maintenance plans, training schedules, and service documentation. This approach builds long-term compliance discipline and gives management clear visibility into fire and safety governance performance.',
    ],
    highlights: [
      'Periodic monitoring and re-verification inspections',
      'Maintenance schedule review for compliance continuity',
      'Documentation governance and record quality checks',
      'Management reporting for safety decision-making',
    ],
    applications: [
      'Long-term compliance maintenance programs',
      'Enterprise-level multi-site governance',
      'Recurring statutory inspection readiness',
      'Operational safety performance monitoring',
    ],
    compliance: [
      'Ongoing audit trail for maintenance and inspections',
      'Record completeness for statutory reviews',
      'Periodic closure validation and exception tracking',
      'Integrated compliance dashboard inputs',
    ],
  },
];

const standards = [
  {
    title: 'National Building Code Fire Provisions',
    description: 'Reference framework for fire and life safety infrastructure compliance in occupied buildings.',
  },
  {
    title: 'Factory and Occupational Safety Requirements',
    description: 'Workplace safety obligations for hazard control, emergency preparedness, and recordkeeping.',
  },
  {
    title: 'Client EHS Governance Policies',
    description: 'Internal safety standards translated into measurable inspection and closure outcomes.',
  },
];

const capabilities = [
  'Technical compliance inspections and risk-based gap analysis',
  'Corrective action planning with closure accountability',
  'Support for fire safety installation and maintenance rectification',
  'Inspection documentation and audit evidence preparation',
  'Periodic monitoring for sustained compliance performance',
  'Consulting support for enterprise safety governance',
];

const ComplianceInspection = () => (
  <ServiceDetailLayout
    pageKey="compliance-inspection"
    badge="Inspection and Governance Service"
    title="Compliance Inspection"
    subtitle="Gap Analysis, Corrective Closure, and Ongoing Compliance Support"
    intro="B. D. Enterprises provides comprehensive compliance inspection services that combine technical audits, corrective planning, and continuous governance support. We help organizations move from checklist-driven review to measurable closure, reliable maintenance discipline, and long-term fire and safety compliance readiness."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Compliance Gap Closure Support?"
    ctaBody="Book a technical compliance inspection and receive a practical rectification roadmap with priority actions and closure tracking."
    ctaLabel="Start Compliance Review"
  />
);

export default ComplianceInspection;

