!function(){"use strict";self.CACHE_BUSTER="1581980965761|0.33396682924324805",self.addEventListener("install",function(s){return self.skipWaiting()}),self.addEventListener("activate",function(s){return self.clients.claim()});var s=function(s,e){return caches.keys().then(function(n){n.forEach(function(n){0===n.indexOf(s)&&n!==e&&caches.delete(n)})})},e="".concat("esw-asset-cache","-").concat("1"),n=["assets/auto-import-fastboot-e289ea484a4d8949ea84cb262a624452.js","assets/auto-import-fastboot-81f919f3d82c38703c7b0de8c4c4a874.map","assets/brand/icon-blue-gradient.svg","assets/brand/icon-blue-noshades.svg","assets/brand/icon-colors-gradient-scoured.svg","assets/brand/icon-colors-gradient.svg","assets/brand/icon-flat.svg","assets/brand/icon-gradient-blue.svg","assets/brand/icon-gradient-green.svg","assets/brand/icon-gradient-orange.svg","assets/brand/icon-gradient-pink.svg","assets/brand/icon-gradient-violet.svg","assets/brand/icon-orange.svg","assets/fonts/Abel-regular/Abel-regular.eot","assets/fonts/Abel-regular/Abel-regular.svg","assets/fonts/Abel-regular/Abel-regular.ttf","assets/fonts/Abel-regular/Abel-regular.woff","assets/fonts/Abel-regular/Abel-regular.woff2","assets/fonts/Abel-regular/LICENSE.txt","assets/fonts/Open-Sans-300/LICENSE.txt","assets/fonts/Open-Sans-300/Open-Sans-300.eot","assets/fonts/Open-Sans-300/Open-Sans-300.svg","assets/fonts/Open-Sans-300/Open-Sans-300.ttf","assets/fonts/Open-Sans-300/Open-Sans-300.woff","assets/fonts/Open-Sans-300/Open-Sans-300.woff2","assets/fonts/Open-Sans-700/LICENSE.txt","assets/fonts/Open-Sans-700/Open-Sans-700.eot","assets/fonts/Open-Sans-700/Open-Sans-700.svg","assets/fonts/Open-Sans-700/Open-Sans-700.ttf","assets/fonts/Open-Sans-700/Open-Sans-700.woff","assets/fonts/Open-Sans-700/Open-Sans-700.woff2","assets/fonts/Open-Sans-regular/LICENSE.txt","assets/fonts/Open-Sans-regular/Open-Sans-regular.eot","assets/fonts/Open-Sans-regular/Open-Sans-regular.svg","assets/fonts/Open-Sans-regular/Open-Sans-regular.ttf","assets/fonts/Open-Sans-regular/Open-Sans-regular.woff","assets/fonts/Open-Sans-regular/Open-Sans-regular.woff2","assets/icons/asterisk.svg","assets/icons/cubes.svg","assets/icons/folder-alt.svg","assets/icons/folder.svg","assets/icons/home.svg","assets/icons/info-circle.svg","assets/icons/sign-in.svg","assets/icons/sign-out.svg","assets/icons/user.svg","assets/storage-frontend-25fb830fccea1ad53c19feac0b4637e6.css","assets/storage-frontend-2661ffaf59eef7ca8614753ae67d6b52.js","assets/storage-frontend-4feb8c827c4c32a50ed52f25d59c81ac.map","assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css","assets/vendor-36ee735cdb9edec5cd5072b6c7f3bb70.js","assets/vendor-5ba367d7e88af09b2fc5b9c325361809.map","favicon.ico"].map(function(s){return new URL(s,self.location).toString()});self.addEventListener("install",function(s){s.waitUntil(caches.open(e).then(function(s){return Promise.all(n.map(function(e){var n=new Request(e,{mode:"cors"});return fetch(n).then(function(n){if(n.status>=400){var t=new Error("Request for ".concat(e," failed with status ").concat(n.statusText));throw t}return s.put(e,n)}).catch(function(s){console.error("Not caching ".concat(e," due to ").concat(s))})}))}))}),self.addEventListener("activate",function(t){t.waitUntil(Promise.all([s("esw-asset-cache",e),void caches.open(e).then(function(s){return s.keys().then(function(e){e.forEach(function(e){-1===n.indexOf(e.url)&&s.delete(e)})})})]))}),self.addEventListener("fetch",function(s){var t="GET"===s.request.method,a=-1!==n.indexOf(s.request.url);t&&a&&s.respondWith(caches.match(s.request,{cacheName:e}).then(function(e){return e||fetch(s.request.url,{mode:"cors"})}))});var t=[],a=[];function r(s,e){return!!e.find(function(e){return e.test(decodeURI(s))})}self.INDEX_FILE_HASH="52336eaa5e179fdc2174e0a66139a62b";var o="".concat("esw-index","-").concat("1"),c=new URL("index.html",self.location).toString();self.addEventListener("install",function(s){s.waitUntil(fetch(c,{credentials:"include"}).then(function(s){return caches.open(o).then(function(e){return e.put(c,s)})}))}),self.addEventListener("activate",function(e){e.waitUntil(s("esw-index",o))}),self.addEventListener("fetch",function(s){var e=s.request,n=new URL(e.url),i="GET"===e.method,f=-1!==e.headers.get("accept").indexOf("text/html"),u=n.origin===location.origin,l=r(e.url,t),d=!a.length||r(e.url,a);!("/tests"===n.pathname&&!1)&&i&&f&&u&&d&&!l&&s.respondWith(caches.match(c,{cacheName:o}).then(function(s){return s||fetch(c,{credentials:"include"}).then(function(s){return caches.open(o).then(function(e){return e.put(c,s)}),s.clone()})}))})}();
//# sourceMappingURL=sw-9067566d2d69e493f6a64ddc9bf0d6c6.map