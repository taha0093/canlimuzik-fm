// Service Worker for CanliMuzik.fm
const CACHE_NAME = 'canlimuzik-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/playlist.json',
  '/style.css'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Try network first for API/YouTube, otherwise cache-first
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
        // cache responses for later
        if (event.request.method === 'GET' && resp && resp.status === 200) {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return resp;
      }).catch(() => cached))
    );
  } else {
    // Cross-origin (YouTube) - network first
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
  }
});
