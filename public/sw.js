if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/145-db03591da384e461.js",revision:"db03591da384e461"},{url:"/_next/static/chunks/4072747d-39c9804688118da1.js",revision:"39c9804688118da1"},{url:"/_next/static/chunks/659-815b7e1131d5e0b3.js",revision:"815b7e1131d5e0b3"},{url:"/_next/static/chunks/675-8a4846b0a2e2cf34.js",revision:"8a4846b0a2e2cf34"},{url:"/_next/static/chunks/75fc9c18-da7e853fcdcaa641.js",revision:"da7e853fcdcaa641"},{url:"/_next/static/chunks/869-9a311d7a770b973c.js",revision:"9a311d7a770b973c"},{url:"/_next/static/chunks/framework-73b8966a3c579ab0.js",revision:"73b8966a3c579ab0"},{url:"/_next/static/chunks/main-b87c30412882cad1.js",revision:"b87c30412882cad1"},{url:"/_next/static/chunks/pages/_app-c69656f4414617dd.js",revision:"c69656f4414617dd"},{url:"/_next/static/chunks/pages/_error-3f6d1c55bb8051ab.js",revision:"3f6d1c55bb8051ab"},{url:"/_next/static/chunks/pages/add-new-634a94a900bae813.js",revision:"634a94a900bae813"},{url:"/_next/static/chunks/pages/camera-9e896bf84becae8d.js",revision:"9e896bf84becae8d"},{url:"/_next/static/chunks/pages/components/Dropdown/Dropdown-056d9c58186b4824.js",revision:"056d9c58186b4824"},{url:"/_next/static/chunks/pages/components/Footer/Footer-47822caf61587921.js",revision:"47822caf61587921"},{url:"/_next/static/chunks/pages/components/Gallery/Gallery-307646a632613d0b.js",revision:"307646a632613d0b"},{url:"/_next/static/chunks/pages/components/Header/Header-e3517f8e0a8c9852.js",revision:"e3517f8e0a8c9852"},{url:"/_next/static/chunks/pages/components/ImagePreview/ImagePreview-c3c9553a77aa0d99.js",revision:"c3c9553a77aa0d99"},{url:"/_next/static/chunks/pages/components/Layout/Layout-872e99aace6cb40a.js",revision:"872e99aace6cb40a"},{url:"/_next/static/chunks/pages/components/WaterFertilizerLog/WaterFertilizerLog-97478f68a2883154.js",revision:"97478f68a2883154"},{url:"/_next/static/chunks/pages/index-16770cde754beed2.js",revision:"16770cde754beed2"},{url:"/_next/static/chunks/pages/library-3a71496c00d53c01.js",revision:"3a71496c00d53c01"},{url:"/_next/static/chunks/pages/plants/%5Bpid%5D-baf1e3de0eb1eae5.js",revision:"baf1e3de0eb1eae5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-36d12a75f0098f30.js",revision:"36d12a75f0098f30"},{url:"/_next/static/css/1328091f9b4a39f0.css",revision:"1328091f9b4a39f0"},{url:"/_next/static/css/3fd1f8facb0dbce6.css",revision:"3fd1f8facb0dbce6"},{url:"/_next/static/css/4c68859679fba5e8.css",revision:"4c68859679fba5e8"},{url:"/_next/static/css/78340467c6ce8b84.css",revision:"78340467c6ce8b84"},{url:"/_next/static/css/99444dbe54251813.css",revision:"99444dbe54251813"},{url:"/_next/static/css/eeadc6c0c8b2b17c.css",revision:"eeadc6c0c8b2b17c"},{url:"/_next/static/dfxNGXfek7FSqH51UcJU0/_buildManifest.js",revision:"ca6396d9b1920a93dd217d2b5022488a"},{url:"/_next/static/dfxNGXfek7FSqH51UcJU0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/4de1fea1a954a5b6-s.p.woff2",revision:"b7d6b48d8d12946dc808ff39aed6c460"},{url:"/_next/static/media/f1df658da56627d0-s.woff2",revision:"372d9cf6e4822b41d014fcc9de0a979a"},{url:"/default-placeholder.png",revision:"f065b10c4a756e686ac012fb675b334f"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"8562a7a5ff433bd7b96b1c8839ab184f"},{url:"/icon-256x256.png",revision:"8162df7510ee0fa2bf9b34b95137a204"},{url:"/icon-384x384.png",revision:"e77929b24fe9b18342fae08bc49f09b1"},{url:"/icon-512x512.png",revision:"069e2158e81c6193220dd1b7653d8796"},{url:"/manifest.json",revision:"014346a3f102326a2c288862cd80c784"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
