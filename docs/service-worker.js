function promiseAny(e){return new Promise(function(n,t){e=e.map(function(e){return Promise.resolve(e)}),e.forEach(function(e){return e.then(n)}),e.reduce(function(e,n){return e.catch(function(){return n})},Promise.reject()).catch(function(){return t(Error("All failed"))})})}function goToNetwork(e){return fetch(e)}var CACHE_NAME="english-card-1474869255313",PREFIX="/english-cards",URLS_TO_CACHE=["/app.672aaa0e.css","/data.json","/favicon.ico","/index.e7503a4e.js","/manifest.json","/"].map(function(e){return PREFIX+e}),REL_URL_TO_ABS_MAP=URLS_TO_CACHE.map(function(e){return new URL(e,self.location).toString()});self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return e.addAll(URLS_TO_CACHE)}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e!==CACHE_NAME}).map(function(e){return console.log("Deleting "+e),caches.delete(e)}))}))}),self.addEventListener("fetch",function(e){"GET"===e.request.method&&REL_URL_TO_ABS_MAP.indexOf(e.request.url)!==-1&&e.respondWith(promiseAny([caches.match(e.request),goToNetwork(e.request)]))});