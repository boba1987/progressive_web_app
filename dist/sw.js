// Use a cacheName for cache versioning
var cacheName = 'v1:static';

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                './index.html',
                './assets/images/loading_spinner.gif',

                './maps/scripts/app-92ae0b8462.js.map',
                './maps/scripts/vendor-3e48a67529.js.map',

                './maps/styles/app-5609ba82e6.css.map',
                './maps/styles/vendor-c2769e81fe.css.map',

                './scripts/app-92ae0b8462',
                './scripts/vendor-3e48a67529.js',

                './styles/app-5609ba82e6.css',
                './styles/vendor-c2769e81fe.css',

                './fonts/glyphicons-halflings-regular.woff',

                './sw.js',
                './main.js',
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
      if(response){
          cache.put(event.request, response);
      }
    });
    return response.clone();
  }).catch(function(err) {
    return fetch(event.request);
  }));
});
