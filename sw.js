const CACHE_NAME = 'boomkamp-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/main.js',
  '/content.json',
  '/images/banner-top01.webp',
  '/images/banner-top01-mobile.webp',
  '/images/paul.png',
  '/images/logo-full-dark.png',
  '/images/kieskunstgras_v1.webp',
  '/images/sandrabedruktLogo.webp',
  '/images/logo_schuco.webp',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
