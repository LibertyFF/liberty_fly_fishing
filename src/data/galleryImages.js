// ── Feature images ───────────────────────────────────────────────────────────
export const coloradoFeature  = '/images/favorites/co/nature_on_river.JPG';
export const louisianaFeature = '/images/favorites/louisiana/holding_big_fish.jpg';

// ── Gallery images ────────────────────────────────────────────────────────────
// portrait: true + w/h  → image is taller than wide; placed in full-column slots.
//   The gallery computes column width as  stripHeight × (w / h)  so the image
//   fills the full strip height at its natural aspect ratio — zero cropping.
// (no portrait flag) → landscape; placed in stacked multi-image columns.

export const coloradoGallery = [
    // ── Landscape ──────────────────────────────────────────────────
    // DSC04473.JPG omitted — 12000×8000 (96 MP) causes GPU decode jank in gallery
    { src: '/images/colorado/DSC04476.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4641.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4642.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4643.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4644.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4645.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4646.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4655.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4657.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4658.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_4659.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_5715.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_7866.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_0728.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/IMG_3817.JPG',                              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/9D6519CF-671D-4F48-A83D-C48B31D74867.jpg', alt: 'Colorado fly fishing' },
    { src: '/images/colorado/image000002.jpg',                           alt: 'Colorado fly fishing' },
    { src: '/images/colorado/20251027145031884_0002-2.JPG',              alt: 'Colorado fly fishing' },
    { src: '/images/colorado/20251027145031884_0006.JPG',                alt: 'Colorado fly fishing' },
    // ── Portrait (w×h measured; gallery width = stripHeight × w/h) ──
    { src: '/images/colorado/11120D28-5928-4E1B-9705-0439219F169D.jpg', alt: 'Colorado fly fishing', portrait: true, w: 2324, h: 3083 },
    { src: '/images/colorado/123_1(1).jpeg',                            alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1920 },
    { src: '/images/colorado/123_1.jpeg',                               alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1920 },
    { src: '/images/colorado/21E5F247-5F48-415C-A99F-75F3E62A03DD.jpg', alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1920 },
    { src: '/images/colorado/276B535D-09E6-4785-B4BC-927FD066870E.jpg', alt: 'Colorado fly fishing', portrait: true, w: 3024, h: 4032 },
    { src: '/images/colorado/4244BEF7-D76C-4BDC-8D54-9CFB14380D84.jpg', alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1795 },
    { src: '/images/colorado/6CF25736-DDF4-41E5-9435-9484502103DB.jpg', alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1920 },
    { src: '/images/colorado/B8F9C8A3-70D0-44F0-9239-5A3F9DED7A35.jpg', alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1795 },
    { src: '/images/colorado/BD77194A-01F4-47CB-B07C-05370F89FE15.jpg', alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1795 },
    { src: '/images/colorado/E57683B8-C6FD-4649-8C20-3AEA82042CED.jpg', alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1920 },
    { src: '/images/colorado/E664DB44-E91E-49FF-8F7D-DF58746D54FC.jpg', alt: 'Colorado fly fishing', portrait: true, w: 1440, h: 1920 },
    { src: '/images/colorado/IMG_4481.PNG',                             alt: 'Colorado fly fishing', portrait: true, w: 1170, h: 2532 },
    { src: '/images/colorado/IMG_4665.PNG',                             alt: 'Colorado fly fishing', portrait: true, w: 1170, h: 2532 },
    { src: '/images/colorado/image000000.jpg',                          alt: 'Colorado fly fishing', portrait: true, w: 1200, h: 1600 },
];

export const louisianaGallery = [
    // All Louisiana shots are landscape — no portrait flag needed
    { src: '/images/louisiana/1103525905744646251.jpg',  alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/image000000.jpg',          alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/image000000(1).jpg',       alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/IMG_2244.jpeg',            alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/IMG_2266.jpeg',            alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/IMG_2661.JPG',             alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/IMG_2663.JPG',             alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/IMG_5306.jpeg',            alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/IMG_5616.jpeg',            alt: 'Louisiana fly fishing' },
    { src: '/images/louisiana/IMG_7906.JPG',             alt: 'Louisiana fly fishing' },
];

export const allGallery = coloradoGallery.reduce((acc, coImg, i) => {
    acc.push(coImg);
    if (louisianaGallery[i]) acc.push(louisianaGallery[i]);
    return acc;
}, []);
