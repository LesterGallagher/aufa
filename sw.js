---
---
var STATIC_CACHE = 'static-cache-v1'
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.open(STATIC_CACHE)
        .then(function (cache) {
            return cache.match(event.request)
                .then(function (response) {
                    if (response) return response;

                    return fetch(event.request).then(function (networkResponse) {
                        return networkResponse;
                    });
                });
        }));

});
self.addEventListener('activate', function (event) {
    console.log('service worker activate');
});
self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(STATIC_CACHE).then(function (cache) {
        return cache.addAll([
            "{{ "/assets/css/style.css" | absolute_url }}",
            "{{ "/assets/js/main.js" | absolute_url }}",
            {% for page in site.pages %}{% if page.layout == "page" %}"{{ page.url | absolute_url }}",
            {% endif %}{% endfor %}
            {% assign collection = site.collections | where: 'label', 'uploads' | first %}
            {% for file in collection.files %}"{{ "/uploads/" | append: file.name | absolute_url }}",
            {% endfor %}
        ]);
    }));
});
