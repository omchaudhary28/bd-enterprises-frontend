import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updatePageSEO, DOMAIN } from '../utils/seoHelpers';

export const useCanonicalUrl = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let canonicalUrl = `${DOMAIN}${path}`;
    let title = 'B. D. Enterprises';
    let description = 'Professional fire safety solutions and protective equipment.';

    switch (path) {
      case '/':
        canonicalUrl = `${DOMAIN}/`;
        title = 'B. D. Enterprises | Industrial Safety and Fire Protection Systems';
        description = 'B. D. Enterprises provides industrial safety products, PPE, fire hydrant and sprinkler systems, alarm and smoke detection, and fabrication services.';
        break;

      case '/about':
        title = 'About B. D. Enterprises | Fire Safety Experts';
        description = 'Learn about B. D. Enterprises and our mission to deliver reliable fire safety and industrial protection solutions.';
        break;

      case '/services':
        title = 'Services | B. D. Enterprises - PPE and Fire Protection Systems';
        description = 'Comprehensive services including PPE supply, fire hydrant and sprinkler systems, fire alarm and smoke detection, fabrication, inspections and training.';
        break;

      case '/services/fire-extinguishers':
        title = 'Fire Extinguishers and Suppression Systems | B. D. Enterprises';
        description = 'Automated fire suppression systems, CO2 systems, and fire extinguisher services with compliance support.';
        break;

      case '/services/fire-alarm-detection':
      case '/services/smoke-detection':
        title = 'Fire Alarm and Smoke Detection Systems | B. D. Enterprises';
        description = 'Advanced fire alarm and smoke detection systems with monitoring and emergency response integration.';
        break;

      case '/services/sprinkler-systems':
      case '/services/fire-hydrant-systems':
        title = 'Fire Sprinkler and Hydrant Systems | B. D. Enterprises';
        description = 'Professional sprinkler and hydrant system installation, inspection, and maintenance for complete protection.';
        break;

      case '/services/emergency-lighting':
        title = 'Emergency Lighting Solutions | B. D. Enterprises';
        description = 'Emergency lighting and exit systems that keep evacuation routes visible and compliant.';
        break;

      case '/services/fire-safety-training':
        title = 'Fire Safety Training Programs | B. D. Enterprises';
        description = 'Practical fire safety training for staff, covering evacuation procedures and equipment handling.';
        break;

      case '/services/compliance-inspection':
        title = 'Fire Safety Compliance and Inspection Services | B. D. Enterprises';
        description = 'Professional fire safety audits, compliance inspections, and reporting support for regulatory readiness.';
        break;

      case '/services/ppe':
        title = 'Industrial PPE Solutions | B. D. Enterprises';
        description = 'Certified head-to-toe personal protective equipment solutions for industrial and commercial workplaces.';
        break;

      case '/services/oxygen-cylinders':
        title = 'Oxygen and SCBA Cylinders | B. D. Enterprises';
        description = 'Certified oxygen and breathing air cylinders with testing, refill, and maintenance services.';
        break;

      case '/services/fabrication':
        title = 'Fire Safety Fabrication Services | B. D. Enterprises';
        description = 'Custom fabrication for fire safety equipment cabinets, supports, mounts, and industrial installations.';
        break;

      case '/services/ppe/head-protection':
        title = 'Safety Helmets and Hard Hats | B. D. Enterprises PPE';
        description = 'Industrial safety helmets and hard hats certified for workplace protection against head injuries.';
        break;

      case '/services/ppe/eye-face-protection':
        title = 'Eye and Face Protection Equipment | B. D. Enterprises PPE';
        description = 'Safety glasses, goggles, face shields, and welding protection for industrial environments.';
        break;

      case '/services/ppe/hearing-protection':
        title = 'Hearing Protection Equipment | B. D. Enterprises PPE';
        description = 'Earplugs and earmuffs designed to reduce industrial noise exposure and hearing risks.';
        break;

      case '/services/ppe/respiratory-protection':
        title = 'Respiratory Protection Systems | B. D. Enterprises PPE';
        description = 'Respirators and breathing protection systems for hazardous air and chemical exposure control.';
        break;

      case '/services/ppe/hand-protection':
        title = 'Hand Protection Gloves | B. D. Enterprises PPE';
        description = 'Industrial safety gloves for mechanical, chemical, and thermal workplace hazards.';
        break;

      case '/services/ppe/body-protection':
        title = 'Body Protection Clothing | B. D. Enterprises PPE';
        description = 'Protective clothing and safety wear for chemical, thermal, and mechanical risk environments.';
        break;

      case '/services/ppe/foot-protection':
        title = 'Safety Footwear and Foot Protection | B. D. Enterprises PPE';
        description = 'Safety shoes and protective footwear for impact, puncture, and slip resistance.';
        break;

      case '/contact':
        title = 'Contact B. D. Enterprises | Fire Safety Solutions';
        description = 'Get in touch with B. D. Enterprises for fire safety solutions and protective equipment consultation.';
        break;

      default:
        canonicalUrl = `${DOMAIN}${path.replace(/\/$/, '')}`;
    }

    updatePageSEO({ canonicalUrl, title, description });
  }, [location.pathname]);
};
