import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updatePageSEO, DOMAIN } from '../utils/seoHelpers';

/**
 * Hook to automatically set canonical URL based on current route
 * Call this once in App.js to handle all routes
 */
export const useCanonicalUrl = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    
    // Determine canonical URL and metadata based on route
    let canonicalUrl = DOMAIN + path;
    let title = 'B. D. Enterprises';
    let description = 'Professional fire safety solutions and protective equipment.';

    // Route-specific metadata
    switch (path) {
      case '/':
        canonicalUrl = DOMAIN + '/';
        title = 'B. D. Enterprises | Industrial Safety & Fire Protection Systems';
        description = 'B. D. Enterprises (est. 2006) provides industrial safety products (PPE), fire hydrant and sprinkler systems, alarm & smoke detection, and fabrication services. ISO 9001:2015 certified.';
        break;

      case '/about':
        title = 'About B. D. Enterprises | Fire Safety Experts';
        description = 'Learn about B. D. Enterprises\' mission to provide comprehensive fire safety and protective equipment solutions.';
        break;

      case '/services':
        title = 'Services | B. D. Enterprises — PPE & Fire Protection Systems';
        description = 'Comprehensive services: PPE supply, fire hydrant and sprinkler systems, fire alarm & smoke detection, fabrication, inspections and training.';
        break;

      case '/services/fire-extinguishers':
        title = 'Fire Extinguishers & Suppression Systems | B. D. Enterprises';
        description = 'Automated fire suppression systems, CO2 systems, and fire extinguisher services with NFPA certification.';
        break;

      case '/services/fire-alarm-detection':
        title = 'Advanced Fire Alarm Detection Systems | B. D. Enterprises';
        description = 'Smart fire alarm and detection systems with real-time monitoring and emergency response integration.';
        break;

      case '/services/sprinkler-systems':
        title = 'Fire Sprinkler Systems Installation & Maintenance | B. D. Enterprises';
        description = 'Professional fire sprinkler system installation, inspection, and maintenance for comprehensive protection.';
        break;

      case '/services/emergency-lighting':
        title = 'Emergency Lighting Solutions | B. D. Enterprises';
        description = 'Exit signs and emergency lighting systems ensuring safe evacuation routes during emergencies.';
        break;

      case '/services/fire-safety-training':
        title = 'Fire Safety Training Programs | B. D. Enterprises';
        description = 'Comprehensive fire safety training for employees including evacuation procedures and equipment use.';
        break;

      case '/services/compliance-inspection':
        title = 'Fire Safety Compliance & Inspection Services | B. D. Enterprises';
        description = 'Professional fire safety audits, compliance inspections, and documentation for regulatory requirements.';
        break;

      case '/services/ppe/head-protection':
        title = 'Safety Helmets & Hard Hats | B. D. Enterprises PPE';
        description = 'High-quality safety helmets and hard hats certified for workplace protection against head injuries.';
        break;

      case '/services/ppe/eye-face-protection':
        title = 'Eye & Face Protection Equipment | B. D. Enterprises PPE';
        description = 'Safety glasses, goggles, face shields, and welding helmets for complete eye and face protection.';
        break;

      case '/services/ppe/hearing-protection':
        title = 'Hearing Protection Equipment | B. D. Enterprises PPE';
        description = 'Ear protection devices including earplugs and earmuffs certified for noise hazard protection.';
        break;

      case '/services/ppe/respiratory-protection':
        title = 'Respiratory Protection Systems | B. D. Enterprises PPE';
        description = 'Respirators and breathing protection equipment for hazardous air and chemical exposure protection.';
        break;

      case '/services/ppe/hand-protection':
        title = 'Hand Protection Gloves | B. D. Enterprises PPE';
        description = 'Industrial work gloves and protective hand wear for various hazard types and work environments.';
        break;

      case '/services/ppe/body-protection':
        title = 'Body Protection Clothing | B. D. Enterprises PPE';
        description = 'Protective clothing, vests, and body wear for chemical, thermal, and mechanical hazard protection.';
        break;

      case '/services/ppe/foot-protection':
        title = 'Safety Footwear & Foot Protection | B. D. Enterprises PPE';
        description = 'Steel-toe boots and protective footwear for workplace safety against crushing and piercing hazards.';
        break;

      case '/contact':
        title = 'Contact B. D. Enterprises | Fire Safety Solutions';
        description = 'Get in touch with B. D. Enterprises for fire safety solutions and protective equipment quotes.';
        break;

      default:
        canonicalUrl = DOMAIN + path.replace(/\/$/, '');
    }

    // Update SEO
    updatePageSEO({
      canonicalUrl,
      title,
      description,
    });

  }, [location.pathname]);
};
