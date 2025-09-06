// Use timestamp for cache versioning to ensure updates
const CACHE_NAME = `reyona-safaris-v${Date.now()}`;
const STATIC_CACHE = 'reyona-static-v1';

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting(); // Force activation of new service worker
});

// Activate event - clean up old caches and take control
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete all old caches
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // Take control of all pages immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - network first strategy for better updates
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If network request succeeds, update cache and return response
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails, try to serve from cache
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // If no cache, return offline page or fallback
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
    })
  );
});
