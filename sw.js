// Service Worker v3 — network-first voor documenten/content, cache-first voor afbeeldingen
// Reden v3: v2 was cache-first voor alles en serveerde daardoor verouderde content.json
// en pagina's na deploys. V3 haalt altijd de verse versie op en gebruikt de cache alleen
// als fallback (offline) of voor statische afbeeldingen.
const CACHE_NAME = 'boomkamp-v3';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/main.js',
  '/page-i18n.js',
  '/content.json',
  '/images/banner-top01.webp',
  '/images/banner-top01-mobile.webp',
  '/images/paul.png',
  '/images/logo-full-dark.png',
  '/images/kieskunstgras_v1.webp',
  '/images/sandrabedruktLogo.webp',
  '/images/logo_schuco.webp',
];

const IMAGE_EXT = /\.(webp|png|jpe?g|gif|svg|ico)(\?.*)?$/i;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Externe requests (fonts, analytics, gtag): niet cachen, gewoon netwerk
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== 'GET') return;

  // Afbeeldingen: cache-first, anders netwerk + opslaan
  if (event.request.destination === 'image' || IMAGE_EXT.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(resp => {
          if (resp && resp.ok) {
            const copy = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return resp;
        });
      })
    );
    return;
  }

  // Documenten, content.json en JS: network-first (altijd verse versie),
  // cache als offline-fallback
  event.respondWith(
    fetch(event.request).then(resp => {
      if (resp && resp.ok) {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return resp;
    }).catch(() => caches.match(event.request))
  );
});