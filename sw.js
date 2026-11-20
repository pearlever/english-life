/* English Life PWA — shell only; never cache Gemini API responses */
const CACHE='english-life-shell-v4';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg','./content-pack.js'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const req=event.request; const url=new URL(req.url);if(req.method!=='GET'||url.origin!==location.origin)return;event.respondWith(fetch(req).then(response=>{if(response.ok&&(url.pathname.endsWith('/index.html')||url.pathname.endsWith('/manifest.webmanifest')||url.pathname.endsWith('/icon.svg')||url.pathname.endsWith('/content-pack.js'))) {const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(req,copy))}return response}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))))});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(async windows=>{for(const client of windows){if(client.url.includes('/english-life/')){await client.focus();return}}await clients.openWindow('./') }))});
