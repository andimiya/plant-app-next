if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/N19X48CKUBrtacikOKZLW/_buildManifest.js",revision:"8dddc291cbc1d2c4fb186581f6135e75"},{url:"/_next/static/N19X48CKUBrtacikOKZLW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/128-224b9ab15990e9fd.js",revision:"224b9ab15990e9fd"},{url:"/_next/static/chunks/303-a2fdf850ba186bae.js",revision:"a2fdf850ba186bae"},{url:"/_next/static/chunks/4072747d-39c9804688118da1.js",revision:"39c9804688118da1"},{url:"/_next/static/chunks/67-27c48b141feebe49.js",revision:"27c48b141feebe49"},{url:"/_next/static/chunks/framework-73b8966a3c579ab0.js",revision:"73b8966a3c579ab0"},{url:"/_next/static/chunks/main-b87c30412882cad1.js",revision:"b87c30412882cad1"},{url:"/_next/static/chunks/pages/_app-9bb1d077129e0a11.js",revision:"9bb1d077129e0a11"},{url:"/_next/static/chunks/pages/_error-3f6d1c55bb8051ab.js",revision:"3f6d1c55bb8051ab"},{url:"/_next/static/chunks/pages/add-new-634a94a900bae813.js",revision:"634a94a900bae813"},{url:"/_next/static/chunks/pages/camera-9740db2c46919514.js",revision:"9740db2c46919514"},{url:"/_next/static/chunks/pages/components/Footer/Footer-159b18b308e2e924.js",revision:"159b18b308e2e924"},{url:"/_next/static/chunks/pages/components/Gallery/Gallery-050e1446c1e9594b.js",revision:"050e1446c1e9594b"},{url:"/_next/static/chunks/pages/components/Header/Header-e3517f8e0a8c9852.js",revision:"e3517f8e0a8c9852"},{url:"/_next/static/chunks/pages/components/ImagePreview/ImagePreview-aac0c535c1558740.js",revision:"aac0c535c1558740"},{url:"/_next/static/chunks/pages/components/Layout/Layout-872e99aace6cb40a.js",revision:"872e99aace6cb40a"},{url:"/_next/static/chunks/pages/index-2a2e8282e4568846.js",revision:"2a2e8282e4568846"},{url:"/_next/static/chunks/pages/library-3a71496c00d53c01.js",revision:"3a71496c00d53c01"},{url:"/_next/static/chunks/pages/plants/%5Bpid%5D-6997b81cd9052388.js",revision:"6997b81cd9052388"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/4c68859679fba5e8.css",revision:"4c68859679fba5e8"},{url:"/_next/static/css/78340467c6ce8b84.css",revision:"78340467c6ce8b84"},{url:"/_next/static/css/a985c6306f89649e.css",revision:"a985c6306f89649e"},{url:"/_next/static/css/dce2bf1b07f8a504.css",revision:"dce2bf1b07f8a504"},{url:"/_next/static/media/1502bd213e25ba3e-s.woff2",revision:"a9c7c20a417a34a9d017176b563cfb64"},{url:"/_next/static/media/28777f2d837b799c-s.p.woff2",revision:"e7e52c955aa33e618baf437a16539524"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"8562a7a5ff433bd7b96b1c8839ab184f"},{url:"/icon-256x256.png",revision:"8162df7510ee0fa2bf9b34b95137a204"},{url:"/icon-384x384.png",revision:"e77929b24fe9b18342fae08bc49f09b1"},{url:"/icon-512x512.png",revision:"069e2158e81c6193220dd1b7653d8796"},{url:"/manifest.json",revision:"014346a3f102326a2c288862cd80c784"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
