/**
 * SEO Helpers for canonical tags and meta management
 * Used to ensure proper canonicalization and Google indexing
 */

/**
 * Set canonical URL in document head
 * Creates or updates the canonical link tag
 */
export const setCanonicalUrl = (url) => {
  if (typeof window === 'undefined') return; // SSR safety

  // Remove existing canonical tag if present
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  
  canonicalLink.href = url;
};

/**
 * Update meta description
 */
export const setMetaDescription = (description) => {
  if (typeof window === 'undefined') return;
  
  let metaTag = document.querySelector('meta[name="description"]');
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.name = 'description';
    document.head.appendChild(metaTag);
  }
  metaTag.content = description;
};

/**
 * Update page title
 */
export const setPageTitle = (title) => {
  if (typeof window === 'undefined') return;
  document.title = title;
};

/**
 * Full SEO update with canonical, title, and description
 */
export const updatePageSEO = ({ 
  canonicalUrl, 
  title = 'B. D. Enterprises', 
  description = 'Professional fire safety solutions and protective equipment.' 
}) => {
  if (typeof window === 'undefined') return;
  
  setCanonicalUrl(canonicalUrl);
  setPageTitle(title);
  setMetaDescription(description);
};

/**
 * Base domain for all canonical URLs
 */
export const DOMAIN = 'https://bdenterprises.in';

/**
 * Generate canonical URL for a path
 */
export const getCanonicalUrl = (path) => {
  // Remove trailing slash for consistency, except for root
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return `${DOMAIN}${cleanPath}`;
};

/**
 * Service page canonical URLs mapping
 */
export const SERVICE_CANONICALS = {
  '/services/fire-extinguishers': `${DOMAIN}/services/fire-extinguishers`,
  '/services/fire-alarm-detection': `${DOMAIN}/services/fire-alarm-detection`,
  '/services/sprinkler-systems': `${DOMAIN}/services/sprinkler-systems`,
  '/services/emergency-lighting': `${DOMAIN}/services/emergency-lighting`,
  '/services/fire-safety-training': `${DOMAIN}/services/fire-safety-training`,
  '/services/compliance-inspection': `${DOMAIN}/services/compliance-inspection`,
  '/services/ppe/head-protection': `${DOMAIN}/services/ppe/head-protection`,
  '/services/ppe/eye-face-protection': `${DOMAIN}/services/ppe/eye-face-protection`,
  '/services/ppe/hearing-protection': `${DOMAIN}/services/ppe/hearing-protection`,
  '/services/ppe/respiratory-protection': `${DOMAIN}/services/ppe/respiratory-protection`,
  '/services/ppe/hand-protection': `${DOMAIN}/services/ppe/hand-protection`,
  '/services/ppe/body-protection': `${DOMAIN}/services/ppe/body-protection`,
  '/services/ppe/foot-protection': `${DOMAIN}/services/ppe/foot-protection`,
};
