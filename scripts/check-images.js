const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');

function walk(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else if (/\.(js|jsx|ts|tsx|html)$/.test(f)) out.push(full);
  }
  return out;
}

const files = walk(SRC);
const refs = new Set();

const IMG_RE = /(['\"])(\/images\/[^'"\)\s]+)\1/g;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = IMG_RE.exec(content))) {
    refs.add(m[2]);
  }
}

const results = [];
for (const ref of refs) {
  // decode possible %20 or encoded chars
  const decoded = decodeURIComponent(ref);
  // create possible FS path under public
  const candidate = path.join(PUBLIC, decoded.replace(/^\//, ''));
  const exists = fs.existsSync(candidate);
  results.push({ ref, decoded, candidate, exists });
}

const missing = results.filter(r => !r.exists);
console.log(`Checked ${results.length} image references.`);
if (missing.length === 0) console.log('All referenced images exist in public/.');
else {
  console.log(`${missing.length} missing images:`);
  for (const m of missing) console.log('-', m.ref, '->', m.candidate);
}

// exit with code 0
process.exit(0);
