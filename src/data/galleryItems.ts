export type GalleryItem = {
  title: string;
  src: string;
  type: 'image' | 'video';
  alt?: string;
};
import { galleryAuto } from './galleryAuto';

export const baseGalleryItems: readonly GalleryItem[] = [
  {
    title: 'Safari Clip (1)',
    src: '/gallery/Untitled design (1).mp4',
    type: 'video',
  },
  {
    title: 'Safari Clip (2)',
    src: '/gallery/Untitled design (2).mp4',
    type: 'video',
  },
  {
    title: 'Safari Clip (3)',
    src: '/gallery/Untitled design (3).mp4',
    type: 'video',
  },
  {
    title: 'Safari Clip (4)',
    src: '/gallery/Untitled design (4).mp4',
    type: 'video',
  },
  {
    title: 'Safari Clip',
    src: '/gallery/Untitled design.mp4',
    type: 'video',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.41 (3)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.41 (3).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.41',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.41.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.42 (1)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.42 (1).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.42 (2)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.42 (2).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.42',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.42.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.43 (1)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.43 (1).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.43 (2)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.43 (2).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.43 (3)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.43 (3).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.43',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.43.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.44 (1)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.44 (1).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.44 (2)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.44 (2).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.44',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.44.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.45 (1)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.45 (1).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.45 (2)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.45 (2).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.45 (3)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.45 (3).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.45',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.45.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.46 (1)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.46 (1).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.46 (2)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.46 (2).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.46 (3)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.46 (3).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.46',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.46.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 12.50.47',
    src: '/gallery/WhatsApp Image 2025-10-28 at 12.50.47.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.04 (1)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.04 (1).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.04 (2)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.04 (2).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.04 (3)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.04 (3).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.04 (4)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.04 (4).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.04',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.04.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (1)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (1).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (10)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (10).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (11)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (11).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (12)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (12).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (13)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (13).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (14)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (14).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (15)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (15).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (16)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (16).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (17)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (17).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (18)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (18).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (19)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (19).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (2)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (2).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (20)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (20).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (21)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (21).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (22)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (22).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (23)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (23).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (24)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (24).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (25)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (25).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (26)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (26).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (27)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (27).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (28)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (28).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (3)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (3).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (4)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (4).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (5)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (5).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (6)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (6).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (7)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (7).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (8)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (8).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05 (9)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05 (9).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.05',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.05.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (1)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (1).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (10)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (10).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (11)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (11).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (12)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (12).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (13)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (13).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (14)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (14).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (2)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (2).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (3)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (3).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (4)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (4).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (5)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (5).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (6)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (6).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (7)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (7).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (8)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (8).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06 (9)',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06 (9).jpeg',
    type: 'image',
  },
  {
    title: 'Safari Moment 2025-10-28 At 13.22.06',
    src: '/gallery/WhatsApp Image 2025-10-28 at 13.22.06.jpeg',
    type: 'image',
  },
  {
    title: 'Safari Highlight 2025-10-28 At 12.50.47',
    src: '/gallery/WhatsApp Video 2025-10-28 at 12.50.47.mp4',
    type: 'video',
  },
  {
    title: 'Bathtub',
    src: '/gallery/bathtub.png',
    type: 'image',
  },
  {
    title: 'Wildbee',
    src: '/gallery/wildbee.png',
    type: 'image',
  },
  {
    title: 'Wildcroc',
    src: '/gallery/wildcroc.png',
    type: 'image',
  },
] as const;

// Merge in any files found in public/gallery automatically
const existingSrc = new Set(baseGalleryItems.map((i) => i.src));
const autoItems = (galleryAuto as readonly { title: string; src: string; type: 'image' | 'video' }[])
  .filter((i) => !existingSrc.has(i.src));

// Derive SEO-friendly alt text
const deriveAlt = (item: { title: string; src: string; type: 'image' | 'video'; alt?: string }): string | undefined => {
  if (item.type !== 'image') return undefined;
  if (item.alt) return item.alt;
  const file = item.src.split('/').pop() || '';
  // WhatsApp filename pattern: WhatsApp Image YYYY-MM-DD at HH.MM.SS
  const wa = file.match(/^WhatsApp Image\s+(\d{4}-\d{2}-\d{2})\s+at\s+(\d{2})\.(\d{2})\.(\d{2})/i);
  if (wa) {
    const [, d, hh, mm, ss] = wa;
    return `Safari moment captured on ${d} at ${hh}:${mm}:${ss} — Reyona Safaris photo gallery`;
  }
  const name = (item.title || file).replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
  const lower = name.toLowerCase();
  const keywordMap: { test: RegExp; alt: string }[] = [
    { test: /angama/, alt: 'Angama Mara luxury safari lodge — Reyona Safaris' },
    { test: /balloon|inflating/i, alt: 'Hot air balloon being prepared for a sunrise safari — Reyona Safaris' },
    { test: /mara|masai/, alt: 'Masai Mara safari scene — Reyona Safaris' },
    { test: /amboseli/, alt: 'Amboseli elephants with Kilimanjaro backdrop — Reyona Safaris' },
    { test: /samburu/, alt: 'Samburu safari wildlife — Reyona Safaris' },
    { test: /tsavo/, alt: 'Tsavo safari with red elephants — Reyona Safaris' },
    { test: /nakuru/, alt: 'Lake Nakuru flamingos and wildlife — Reyona Safaris' },
    { test: /naivasha/, alt: 'Lake Naivasha boat safari — Reyona Safaris' },
    { test: /elementaita/, alt: 'Lake Elementaita birding scene — Reyona Safaris' },
    { test: /bogoria/, alt: 'Lake Bogoria hot springs and flamingos — Reyona Safaris' },
    { test: /serengeti/, alt: 'Serengeti safari on the endless plains — Reyona Safaris' },
    { test: /ngorongoro/, alt: 'Ngorongoro Crater wildlife — Reyona Safaris' },
    { test: /tarangire/, alt: 'Tarangire baobabs and elephants — Reyona Safaris' },
    { test: /manyara/, alt: 'Lake Manyara and tree‑climbing lions — Reyona Safaris' },
    { test: /zanzibar/, alt: 'Zanzibar beaches and Stone Town heritage — Reyona Safaris' },
    { test: /ol pejeta|olpejeta/, alt: 'Ol Pejeta Conservancy and rhino conservation — Reyona Safaris' },
    { test: /solio/, alt: 'Solio Conservancy rhino stronghold — Reyona Safaris' },
    { test: /meru/, alt: 'Meru National Park rivers and palms — Reyona Safaris' },
  ];
  for (const k of keywordMap) {
    if (k.test.test(lower)) return k.alt;
  }
  // Fallback: describe using cleaned title
  return `${name} — Reyona Safaris photo gallery`;
};

const merged: GalleryItem[] = [...baseGalleryItems, ...autoItems].map((i) => ({
  ...i,
  alt: i.type === 'image' ? deriveAlt(i) : undefined,
}));

export const galleryItems: GalleryItem[] = merged;
