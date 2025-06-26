
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("f1-cache").then((cache) => {
      return cache.addAll(["/", "/manifest.json"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
