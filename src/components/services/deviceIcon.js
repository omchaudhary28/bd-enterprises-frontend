const getInitials = (name) => {
  const words = name
    .replace(/[()]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) {
    return "DV";
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};

const getPalette = (name) => {
  const key = name.toLowerCase();

  if (key.includes("panel") || key.includes("network")) {
    return { start: "#2563eb", end: "#1d4ed8" };
  }
  if (key.includes("smoke") || key.includes("heat") || key.includes("flame") || key.includes("detector")) {
    return { start: "#ef4444", end: "#f97316" };
  }
  if (key.includes("sprinkler") || key.includes("hydrant") || key.includes("hose")) {
    return { start: "#0ea5e9", end: "#0284c7" };
  }
  if (key.includes("valve") || key.includes("gauge") || key.includes("switch")) {
    return { start: "#06b6d4", end: "#0891b2" };
  }
  if (key.includes("pump") || key.includes("tank")) {
    return { start: "#7c3aed", end: "#6366f1" };
  }
  if (key.includes("manual") || key.includes("hooter")) {
    return { start: "#14b8a6", end: "#0f766e" };
  }

  return { start: "#334155", end: "#1e293b" };
};

export const getDeviceIconSrc = (name) => {
  const initials = getInitials(name);
  const palette = getPalette(name);
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${palette.start}"/>
      <stop offset="100%" stop-color="${palette.end}"/>
    </linearGradient>
  </defs>
  <rect width="56" height="56" rx="14" fill="url(#g)"/>
  <circle cx="28" cy="28" r="22" fill="#ffffff" opacity="0.14"/>
  <text x="28" y="34" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="#ffffff">${initials}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
