// Use a cacheName for cache versioning
var cacheName = 'v1:static';

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                './',
                './styles/app-0f4caef2bd.css',
                './assets/images',
                './scripts/app-083e9bf2b2.js',
                './scripts/vendor-3e48a67529.js',
                './fonts/glyphicons-halflings-regular.woff',
                './sw.js',
                './main.js',
                './index.html',
                './offline.html'
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
  var response;

  // … either respond with the cached object or go ahead and fetch the actual URL
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(r) {
    response = r;
    caches.open('v1').then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function() {
    return caches.match('/offline.html');
  }));
});
