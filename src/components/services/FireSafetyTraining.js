import React from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const sections = [
  {
    id: 'preparedness-program',
    title: 'Structured Fire Safety Preparedness Programs',
    images: [
      '/images/fire-safety-training/Fire_drill_in_a_smoke_trailer,_Naples,_Italy_-_081007-N-4044H-271.jpg',
      '/images/fire-safety-training/Z_61FevxEdbNPF7t_FireSafetyPrevention.avif',
    ],
    paragraphs: [
      'B. D. Enterprises develops role-based training programs for fire wardens, shift supervisors, and operational teams to build practical emergency readiness. Training modules are aligned to facility hazards, evacuation routes, and installed fire protection systems so every participant understands response priorities and safe action sequences.',
      'Program delivery includes classroom awareness, on-site demonstrations, and scenario-based response planning. This blended format helps teams retain procedural clarity, improve coordination, and reduce delay during real emergency events.',
    ],
    highlights: [
      'Role-based curriculum for operational teams',
      'Hazard-focused emergency response planning',
      'Facility-specific evacuation strategy integration',
      'Awareness modules linked to installed safety systems',
    ],
    applications: [
      'Industrial manufacturing and process facilities',
      'Commercial and institutional occupancy sites',
      'Warehousing and logistics operations',
      'Multi-shift facilities requiring repeated training cycles',
    ],
    compliance: [
      'Training attendance and competency records',
      'Program documentation for audit presentation',
      'Role assignment traceability for emergency planning',
      'Refresher schedule mapping for compliance continuity',
    ],
  },
  {
    id: 'practical-drills',
    title: 'Practical Drills and Extinguisher Handling',
    images: [
      '/images/fire-safety-training/Fire%20Extinguisher%20Training%20Demo%20Open%20Burn.jpg',
      '/images/fire-safety-training/PASS-steps-as-shown-through-the-video-training-Bass-2014_Q320.jpg',
    ],
    paragraphs: [
      'Practical drill execution is a core part of our training service. B. D. Enterprises conducts live simulations and extinguisher handling sessions so participants learn safe activation, target approach methods, and escalation protocol for situations that move beyond first-response control.',
      'Mock drills are structured around realistic scenarios including detection alerts, assembly movement, emergency communication, and first-line firefighting coordination. Post-drill analysis is provided to identify response gaps and improve readiness in subsequent cycles.',
    ],
    highlights: [
      'Hands-on extinguisher use and response sequencing',
      'Mock drill execution with defined incident scenarios',
      'Emergency communication and assembly protocol testing',
      'Post-drill performance review and improvement planning',
    ],
    applications: [
      'Sites with newly installed fire safety systems',
      'Annual emergency preparedness compliance cycles',
      'High-occupancy facilities needing evacuation validation',
      'Operations with rotating or newly inducted workforce',
    ],
    compliance: [
      'Drill reports with observations and corrective actions',
      'Extinguisher handling competency documentation',
      'Emergency response timeline tracking',
      'Audit-ready evidence of practical preparedness activity',
    ],
  },
  {
    id: 'continuous-improvement',
    title: 'Training Maintenance and Compliance Continuity',
    images: [
      '/images/fire-safety-training/feuerloschubung_im_betrieb-cws_fire_safety.jpg',
      '/images/compliances-and-audits/Guide%20to%20WHS%20Inspections-1.webp',
    ],
    paragraphs: [
      'Training is treated as an ongoing service, not a one-time event. B. D. Enterprises prepares periodic refresher schedules, role revalidation plans, and training calendar support so safety competency remains active despite workforce changes and operational expansion.',
      'We also align training outcomes with inspection and compliance programs by providing attendance matrices, content records, and action closure status. This ensures organizations can demonstrate not only policy intent but practical readiness during internal and statutory reviews.',
    ],
    highlights: [
      'Refresher planning for long-term competency retention',
      'Role revalidation and shift coverage alignment',
      'Training records integrated with compliance systems',
      'Corrective action tracking from drill observations',
    ],
    applications: [
      'Annual EHS program management',
      'Compliance closure after safety audits',
      'Skill continuity during workforce turnover',
      'Multi-site standardized training governance',
    ],
    compliance: [
      'Attendance logs and topic-wise training registers',
      'Competency evidence for emergency roles',
      'Refresher schedule and completion records',
      'Integrated documentation for authority inspections',
    ],
  },
];

const standards = [
  {
    title: 'NFPA 600 Intent',
    description: 'Organized emergency response preparedness through structured fire brigade and response training.',
  },
  {
    title: 'National Building Code',
    description: 'Occupant safety preparedness expectations including drills and emergency response planning.',
  },
  {
    title: 'Occupational Safety Frameworks',
    description: 'Workplace safety competency requirements for hazard communication and emergency action readiness.',
  },
];

const capabilities = [
  'Fire safety awareness and practical drill execution',
  'Extinguisher handling and response role training',
  'Emergency evacuation and communication protocol training',
  'Refresher cycle planning and competency revalidation',
  'Training documentation for compliance inspections',
  'Corrective action support based on drill findings',
];

const FireSafetyTraining = () => (
  <ServiceDetailLayout
    pageKey="fire-safety-training"
    badge="Training and Preparedness Service"
    title="Fire Safety Training"
    subtitle="Practical Preparedness, Drill Execution, and Compliance Documentation"
    intro="B. D. Enterprises delivers comprehensive fire safety training services covering awareness, practical response, mock drills, and ongoing competency maintenance. Our training programs are built for real site conditions and integrated with facility fire protection systems, compliance goals, and operational risk controls."
    sections={sections}
    standards={standards}
    capabilities={capabilities}
    ctaTitle="Need Site-Wide Fire Safety Training?"
    ctaBody="Book a customized training and drill program to strengthen response readiness, compliance performance, and workforce safety confidence."
    ctaLabel="Plan Training Program"
  />
);

export default FireSafetyTraining;

