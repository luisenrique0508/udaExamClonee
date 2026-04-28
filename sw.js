const CACHE_NAME = 'udabol-exam-v3';
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

// Interceptar peticiones: Estrategia "Network First" (Primero Red, luego Caché)
// De esta forma siempre busca la última versión, sin tener que cambiar el CACHE_NAME manualmente.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Si hay internet y la respuesta es válida, actualizamos la caché
        if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || event.request.url.includes('fonts.'))) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Si no hay internet (offline), devolvemos la versión guardada en caché
        return caches.match(event.request);
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
