// Generates sitemap.xml from routes declared in src/App.tsx
// Usage: SITE_BASE_URL=https://reyonasafaris.com node scripts/generate-sitemap.mjs
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const BASE = (process.env.SITE_BASE_URL || 'https://reyonasafaris.com').replace(/\/$/, '');

const appPath = resolve('src', 'App.tsx');
const sitemapPath = resolve('public', 'sitemap.xml');

function unique(arr) {
  return Array.from(new Set(arr));
}

function toXml(urls) {
  const today = new Date().toISOString().slice(0, 10);
  const items = urls
    .sort()
    .map((u) => `  <url><loc>${BASE}${u}</loc><lastmod>${today}</lastmod></url>`) 
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

try {
  const src = await readFile(appPath, 'utf8');
  // Match <Route path="/something" element=...
  const routeRe = /<Route\s+path=\"([^\"]+)\"/g;
  const paths = [];
  let m;
  while ((m = routeRe.exec(src))) {
    const p = m[1];
    if (!p || p === '*' || !p.startsWith('/')) continue;
    paths.push(p);
  }
  // Always include home
  if (!paths.includes('/')) paths.push('/');
  const urls = unique(paths);
  const xml = toXml(urls);
  await writeFile(sitemapPath, xml, 'utf8');
  console.log(`Generated sitemap with ${urls.length} routes at ${sitemapPath}`);
} catch (err) {
  console.error('Sitemap generation failed:', err);
  process.exitCode = 1;
}

