---
---

{% if jekyll.environment == 'production' and site.google_analytics %}
var DYNAMIC_CACHE = 'dynamic-cache-v1';
var STATIC_CACHE = 'static-cache-v1';


// listen for outgoing network request
self.addEventListener('fetch', function (event) {
    // try to find response object in the cache
    // associated with current request
    event.respondWith(
        caches.open(STATIC_CACHE).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                if (response) return response;

                return fetch(event.request).then(function (networkResponse) {
                    if (!networkResponse || (networkResponse.status !== 200 && !networkResponse.ok)) {
                        return caches.open(DYNAMIC_CACHE).then(function (dynCache) {
                            return dynCache.match(event.request);
                        }).then(function (dynResponse) {
                            if (dynResponse) return dynResponse;
                            else return networkResponse;
                        });
                    }
                    var cachedResponse = networkResponse.clone();
                    caches.open(DYNAMIC_CACHE).then(function (dynCache) {
                        dynCache.put(event.request, cachedResponse);
                    });
                    return networkResponse;
                });
            });
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('service worker activate');
});

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(function (cache) {
            return cache.addAll(
                [
                    "{{ " / assets / css / style.css" | absolute_url }}",
                    "{{ " / assets / js / main.js" | absolute_url }}",
                    {% for page in site.pages %}{% if page.layout == "page" %}"{{ page.url }}",
    {% endif %}{% endfor %}
    {% assign collection = site.collections | where: 'label', 'uploads' | first %}
    {% for file in collection.files %}"{{ " / uploads / " | append: file.name | absolute_url }}",
        {% endfor %}
                ]
            );
        })
    );
});
{% endif %}
