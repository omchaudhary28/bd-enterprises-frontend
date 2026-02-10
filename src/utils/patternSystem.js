/**
 * Deterministic Pattern System
 * Generates unique visual decorative patterns for service pages based on service slug/index.
 * Patterns are subtle (5-10% opacity) and non-intrusive.
 */

export const getPatternForService = (slug, index) => {
  const patterns = [
    'pattern-dots',
    'pattern-grid',
    'pattern-diagonal',
    'pattern-waves',
    'pattern-circles',
    'pattern-dashes',
  ];

  // Deterministic: same result for same service
  const patternIndex = (slug.charCodeAt(0) + index) % patterns.length;
  return patterns[patternIndex];
};

/**
 * SVG-based inline pattern definitions for hero sections
 * Can be used with: style={{ backgroundImage: `url("data:image/svg+xml,${pattern}")` }}
 */
export const getInlinePatternSVG = (slug, index) => {
  const patterns = [
    // Dots pattern
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="10" cy="10" r="2" fill="white" opacity="0.1" />
      <circle cx="30" cy="20" r="2" fill="white" opacity="0.1" />
      <circle cx="50" cy="15" r="2" fill="white" opacity="0.1" />
      <circle cx="70" cy="25" r="2" fill="white" opacity="0.1" />
      <circle cx="90" cy="10" r="2" fill="white" opacity="0.1" />
      <circle cx="20" cy="40" r="2" fill="white" opacity="0.1" />
      <circle cx="40" cy="50" r="2" fill="white" opacity="0.1" />
      <circle cx="60" cy="45" r="2" fill="white" opacity="0.1" />
      <circle cx="80" cy="55" r="2" fill="white" opacity="0.1" />
      <circle cx="10" cy="70" r="2" fill="white" opacity="0.1" />
      <circle cx="35" cy="75" r="2" fill="white" opacity="0.1" />
      <circle cx="55" cy="80" r="2" fill="white" opacity="0.1" />
      <circle cx="75" cy="70" r="2" fill="white" opacity="0.1" />
      <circle cx="95" cy="85" r="2" fill="white" opacity="0.1" />
    </svg>`,

    // Grid pattern
    `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <line x1="0" y1="0" x2="40" y2="0" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="10" x2="40" y2="10" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="20" x2="40" y2="20" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="30" x2="40" y2="30" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="40" x2="40" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="0" x2="0" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="10" y1="0" x2="10" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="20" y1="0" x2="20" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="30" y1="0" x2="30" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="40" y1="0" x2="40" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
    </svg>`,

    // Diagonal lines pattern
    `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <line x1="0" y1="0" x2="40" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="10" y1="0" x2="40" y2="30" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="20" y1="0" x2="40" y2="20" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="30" y1="0" x2="40" y2="10" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="10" x2="30" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="20" x2="20" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="30" x2="10" y2="40" stroke="white" stroke-width="0.5" opacity="0.1" />
    </svg>`,

    // Wavy lines pattern
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 80 40">
      <path d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20" stroke="white" stroke-width="1" fill="none" opacity="0.1" />
      <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10" stroke="white" stroke-width="1" fill="none" opacity="0.1" />
      <path d="M0,30 Q10,40 20,30 T40,30 T60,30 T80,30" stroke="white" stroke-width="1" fill="none" opacity="0.1" />
    </svg>`,

    // Concentric circles pattern
    `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="5" fill="none" stroke="white" stroke-width="0.5" opacity="0.1" />
      <circle cx="30" cy="30" r="10" fill="none" stroke="white" stroke-width="0.5" opacity="0.1" />
      <circle cx="30" cy="30" r="15" fill="none" stroke="white" stroke-width="0.5" opacity="0.1" />
      <circle cx="30" cy="30" r="20" fill="none" stroke="white" stroke-width="0.5" opacity="0.1" />
      <circle cx="30" cy="30" r="25" fill="none" stroke="white" stroke-width="0.5" opacity="0.1" />
    </svg>`,

    // Dashed lines pattern
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <line x1="0" y1="0" x2="20" y2="0" stroke="white" stroke-width="0.5" stroke-dasharray="3,2" opacity="0.1" />
      <line x1="0" y1="5" x2="20" y2="5" stroke="white" stroke-width="0.5" stroke-dasharray="3,2" opacity="0.1" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="white" stroke-width="0.5" stroke-dasharray="3,2" opacity="0.1" />
      <line x1="0" y1="15" x2="20" y2="15" stroke="white" stroke-width="0.5" stroke-dasharray="3,2" opacity="0.1" />
      <line x1="0" y1="20" x2="20" y2="20" stroke="white" stroke-width="0.5" stroke-dasharray="3,2" opacity="0.1" />
    </svg>`,
  ];

  const patternIndex = (slug.charCodeAt(0) + slug.charCodeAt(slug.length - 1)) % patterns.length;
  return patterns[patternIndex];
};

/**
 * Return base64-encoded SVG for use in backgroundImage
 */
export const getPatternBackgroundImage = (slug, index) => {
  const svg = getInlinePatternSVG(slug, index);
  const encoded = btoa(unescape(encodeURIComponent(svg)));
  return `url("data:image/svg+xml;base64,${encoded}")`;
};

/**
 * CSS class name for pattern (for Tailwind or custom CSS)
 */
export const getPatternClass = (slug, index) => {
  return getPatternForService(slug, index);
};
