self.addEventListener('fetch', (evt) =>{
    if(evt.request.mode != 'navigate'){
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() =>{
                return caches.open('String')
                .then((cache) => {
                    return cache.match('offline.html');
                });
            })
        )
});

self.addEventListener('activate', (evt) => {
    
    evt.waitUntil(
        caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
        if (key !== 'String') {
            console.log('[ServiceWorker] Removing old cache',key);
            return caches.delete(key);
        }
        }));
    })
);

});

// self.addEventListener('install', (evt) => {
//         evt.waitUntil(
//         caches.open('String').then((cache) => {
//         console.log('[ServiceWorker] Pre-caching offline page');
//             return cache.addAll(FILES_TO_CACHE);
//             })
//         );
//         Self.skipWaiting();
// }); 

const FILES_TO_CACHE = 
[    'offline.html', ];

const CACHE_NAME = 'String'
self.addEventListener('install',(evt)=>{
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
})