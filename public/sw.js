if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SsATJVEpTJ9jHsWu-IfPv/_buildManifest.js",revision:"9d2323a4574b3986c34eb12f2d6ed00b"},{url:"/_next/static/SsATJVEpTJ9jHsWu-IfPv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4072747d-7585035a6645142a.js",revision:"7585035a6645142a"},{url:"/_next/static/chunks/433-c2fedfff5ec280fa.js",revision:"c2fedfff5ec280fa"},{url:"/_next/static/chunks/46-32bc594813730661.js",revision:"32bc594813730661"},{url:"/_next/static/chunks/50-0f0d79eedeed2aa2.js",revision:"0f0d79eedeed2aa2"},{url:"/_next/static/chunks/675-8a4846b0a2e2cf34.js",revision:"8a4846b0a2e2cf34"},{url:"/_next/static/chunks/738-c6d919954cccfb80.js",revision:"c6d919954cccfb80"},{url:"/_next/static/chunks/75fc9c18-da7e853fcdcaa641.js",revision:"da7e853fcdcaa641"},{url:"/_next/static/chunks/855-6857a207c7c36bd4.js",revision:"6857a207c7c36bd4"},{url:"/_next/static/chunks/862-f625d75c769efea7.js",revision:"f625d75c769efea7"},{url:"/_next/static/chunks/927-0cc16bb7336f92ec.js",revision:"0cc16bb7336f92ec"},{url:"/_next/static/chunks/framework-73b8966a3c579ab0.js",revision:"73b8966a3c579ab0"},{url:"/_next/static/chunks/main-9a47f57ffa6ad141.js",revision:"9a47f57ffa6ad141"},{url:"/_next/static/chunks/pages/_app-22cb04a65b7b3598.js",revision:"22cb04a65b7b3598"},{url:"/_next/static/chunks/pages/_error-3f6d1c55bb8051ab.js",revision:"3f6d1c55bb8051ab"},{url:"/_next/static/chunks/pages/add-new-bbcb4ebc16a30664.js",revision:"bbcb4ebc16a30664"},{url:"/_next/static/chunks/pages/camera-241d9c5fa8e9897c.js",revision:"241d9c5fa8e9897c"},{url:"/_next/static/chunks/pages/components/Dropdown/Dropdown-8c6097ca434e301c.js",revision:"8c6097ca434e301c"},{url:"/_next/static/chunks/pages/components/Footer/Footer-47822caf61587921.js",revision:"47822caf61587921"},{url:"/_next/static/chunks/pages/components/Form/AddNewPlant-c47c775442b35ee1.js",revision:"c47c775442b35ee1"},{url:"/_next/static/chunks/pages/components/Form/EditDetails-f78690411f58491d.js",revision:"f78690411f58491d"},{url:"/_next/static/chunks/pages/components/Gallery/Gallery-63517d35fa746137.js",revision:"63517d35fa746137"},{url:"/_next/static/chunks/pages/components/Header/Header-e3517f8e0a8c9852.js",revision:"e3517f8e0a8c9852"},{url:"/_next/static/chunks/pages/components/Icons/Edit-984d5936cbc47e58.js",revision:"984d5936cbc47e58"},{url:"/_next/static/chunks/pages/components/Icons/Fertilizer-b6d9fc007470676f.js",revision:"b6d9fc007470676f"},{url:"/_next/static/chunks/pages/components/Icons/WaterDrop-ef1ad858c998efa2.js",revision:"ef1ad858c998efa2"},{url:"/_next/static/chunks/pages/components/ImagePreview/ImagePreview-c3c9553a77aa0d99.js",revision:"c3c9553a77aa0d99"},{url:"/_next/static/chunks/pages/components/Layout/Layout-872e99aace6cb40a.js",revision:"872e99aace6cb40a"},{url:"/_next/static/chunks/pages/components/PlantCard/PlantCard-c479353d6fa74397.js",revision:"c479353d6fa74397"},{url:"/_next/static/chunks/pages/components/PlantDetails/PlantDetails-dbe5e21232747f0d.js",revision:"dbe5e21232747f0d"},{url:"/_next/static/chunks/pages/components/Toast/Toast-a0142e313a782f4f.js",revision:"a0142e313a782f4f"},{url:"/_next/static/chunks/pages/components/WaterFertilizerLog/WaterFertilizerLog-dea9459a3513fa28.js",revision:"dea9459a3513fa28"},{url:"/_next/static/chunks/pages/index-b77e700a494ed5f4.js",revision:"b77e700a494ed5f4"},{url:"/_next/static/chunks/pages/library-0309d99884760a43.js",revision:"0309d99884760a43"},{url:"/_next/static/chunks/pages/plants/%5Bpid%5D-95106c5e85587e08.js",revision:"95106c5e85587e08"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-36d12a75f0098f30.js",revision:"36d12a75f0098f30"},{url:"/_next/static/css/1b4e10626e03593e.css",revision:"1b4e10626e03593e"},{url:"/_next/static/css/372722d553aa9969.css",revision:"372722d553aa9969"},{url:"/_next/static/css/3ba346273353e2a8.css",revision:"3ba346273353e2a8"},{url:"/_next/static/css/3c76c62dbf441285.css",revision:"3c76c62dbf441285"},{url:"/_next/static/css/4ba645b535f96cff.css",revision:"4ba645b535f96cff"},{url:"/_next/static/css/668bdc1845f6649a.css",revision:"668bdc1845f6649a"},{url:"/_next/static/css/ba44dd2386319769.css",revision:"ba44dd2386319769"},{url:"/_next/static/css/d036106c9007d7b2.css",revision:"d036106c9007d7b2"},{url:"/_next/static/css/ddb73a7d9ce27b46.css",revision:"ddb73a7d9ce27b46"},{url:"/_next/static/css/f70c8b37f9728603.css",revision:"f70c8b37f9728603"},{url:"/_next/static/media/5f51572adc9d6741-s.woff2",revision:"337b3324109236e7e85a914d41882b0c"},{url:"/_next/static/media/a5b3f9638b3ccb53-s.p.woff2",revision:"13b034ce4fd4bef6fb4bbd639993b350"},{url:"/_next/static/media/brand-icons.1a368124.ttf",revision:"1a368124"},{url:"/_next/static/media/brand-icons.a5c2b578.eot",revision:"a5c2b578"},{url:"/_next/static/media/brand-icons.b0ccb869.svg",revision:"b0ccb869"},{url:"/_next/static/media/brand-icons.d3632e64.woff2",revision:"d3632e64"},{url:"/_next/static/media/brand-icons.ff793786.woff",revision:"ff793786"},{url:"/_next/static/media/f78c7efeefc8db1e-s.woff2",revision:"c21232fb8b035ee7c509ac7ca728e863"},{url:"/_next/static/media/flags.6989ab0a.png",revision:"6989ab0a"},{url:"/_next/static/media/icons.004393de.woff",revision:"004393de"},{url:"/_next/static/media/icons.62a2bfb1.woff2",revision:"62a2bfb1"},{url:"/_next/static/media/icons.8ec0357f.ttf",revision:"8ec0357f"},{url:"/_next/static/media/icons.a93cf03c.svg",revision:"a93cf03c"},{url:"/_next/static/media/icons.fa5c061f.eot",revision:"fa5c061f"},{url:"/_next/static/media/outline-icons.315b68a4.woff",revision:"315b68a4"},{url:"/_next/static/media/outline-icons.3c7c2806.eot",revision:"3c7c2806"},{url:"/_next/static/media/outline-icons.7af2e9ac.svg",revision:"7af2e9ac"},{url:"/_next/static/media/outline-icons.ba204dab.ttf",revision:"ba204dab"},{url:"/_next/static/media/outline-icons.d24ca609.woff2",revision:"d24ca609"},{url:"/camera-placeholder.jpg",revision:"5b1aa7917e23cce37353c0dd4a11baf5"},{url:"/default-placeholder.png",revision:"f065b10c4a756e686ac012fb675b334f"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"8562a7a5ff433bd7b96b1c8839ab184f"},{url:"/icon-256x256.png",revision:"8162df7510ee0fa2bf9b34b95137a204"},{url:"/icon-384x384.png",revision:"e77929b24fe9b18342fae08bc49f09b1"},{url:"/icon-512x512.png",revision:"069e2158e81c6193220dd1b7653d8796"},{url:"/manifest.json",revision:"014346a3f102326a2c288862cd80c784"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
