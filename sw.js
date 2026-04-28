const CACHE_NAME = 'udabol-exam-v2';
const urlsToCache = [
  './',
  './index.html',
  './stile.css',
  './udabol-logo.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
];

// Instalación del Service Worker: Guardar archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos cacheados exitosamente');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones: Devolver desde caché si no hay internet, y cachear nuevos recursos (como las fuentes)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Devuelve desde caché
        }
        return fetch(event.request).then(networkResponse => {
          // Si es una petición válida, guardarla en caché para la próxima vez (ej: archivos .woff2 de Google Fonts)
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic' || event.request.url.includes('fonts.gstatic.com')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
          }
          return networkResponse;
        });
      })
  );
});

// Activar el Service Worker y limpiar cachés antiguas si las hay
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
