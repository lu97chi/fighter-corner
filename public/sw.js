if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>a(e,n),u={module:{uri:n},exports:c,require:r};s[n]=Promise.all(i.map((e=>u[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/README.md",revision:"464ca0d43bd54502485b5dd6ac788803"},{url:"/_next/app-build-manifest.json",revision:"7fe03daebcc9fe5aabdd7ee9bf959f48"},{url:"/_next/static/NNugOmu_SdCwSJQkOIzsj/_buildManifest.js",revision:"8a635f4ce202dfca0cf507559f3ca8dd"},{url:"/_next/static/NNugOmu_SdCwSJQkOIzsj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-3048be2d38b9f0b0.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/27-e5598e90c89d4360.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/4bd1b696-11be667b8c2bfec5.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/517-c70dca153313d85c.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/565-b769d0c71d851564.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/a6eb9415-0644a0702932d333.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/_not-found/page-d3f3189736ed81f1.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/about/page-aca57c420d7ec386.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/api/newsletter/%5Bid%5D/route-086eee4d7cb52bdc.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/api/newsletter/route-bd43527596af40f5.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/api/test-contentful/route-218f1d43b6189595.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/contact/page-ff9beceab48a25f0.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/layout-96a1f144ff158dfd.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/newsletter/page-62c9a374873b56e7.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/page-dfe327951ffb7944.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/app/schedule/page-eda24b83d94e1487.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/framework-a6eb4bce5bd8ed9b.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/main-7bdd054a9aceac7f.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/main-app-014360cdf8672827.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-13557201f6fad8bc.js",revision:"NNugOmu_SdCwSJQkOIzsj"},{url:"/_next/static/css/39363639c719e3b5.css",revision:"39363639c719e3b5"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/hero-video.mp4",revision:"a4392124be5fdd40cf1d213a6db92c07"},{url:"/manifest.json",revision:"9bedb69bfcc91585659c86d949c19bb2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/portrait-10.jpg",revision:"dd8dafab49829c48610cd359f3c361b1"},{url:"/portrait-11.jpg",revision:"0b88070e288a5a8068d162cabd2244e2"},{url:"/portrait-12.jpg",revision:"5431a9b1a6a432f1e85c0837ee988fa1"},{url:"/portrait-13.jpg",revision:"ccc2484c9c484c26865ae0062e898bc3"},{url:"/portrait-14.jpg",revision:"7cd04075ca403fac90ffa1eaaac3876a"},{url:"/portrait-2.jpg",revision:"f40a0980e12cb937a7dc3bf8674145d1"},{url:"/portrait-3.jpg",revision:"db07bc1292b991eb115503f9ca1c1618"},{url:"/portrait-4.jpg",revision:"b5dd3d0d6ee79947da8a955886900f39"},{url:"/portrait-5.jpg",revision:"93b4766fb46723f62a0877e1f2c30fcf"},{url:"/portrait-6.jpg",revision:"eab181785903f50e5c2ceedd1dec62cc"},{url:"/portrait-7.jpg",revision:"6f85f717e168a9122966400a5765b1e7"},{url:"/portrait-8.jpg",revision:"4afdb49c8b8de3a725432f3fc57f7118"},{url:"/portrait-9.jpg",revision:"5ef00ed5b94e547fe6565a04ffd82654"},{url:"/portrait.jpg",revision:"65b8c4f0ebbe1b25c7b865c61241d470"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
