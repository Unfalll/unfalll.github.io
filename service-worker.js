if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const l=e=>d(e,c),f={module:{uri:c},exports:a,require:l};i[c]=Promise.all(s.map((e=>f[e]||l(e)))).then((e=>(r(...e),a)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/01/hello-world/index.html",revision:"a5689b712d707003b8418cffb5dcb0d4"},{url:"about/index.html",revision:"258890635807d6fa4b4e9462276652b4"},{url:"archives/2022/03/index.html",revision:"7c98a3eb161ecbafa86d347252e2a976"},{url:"archives/2022/index.html",revision:"2b6755ed72c5b7d068288303fbd70703"},{url:"archives/index.html",revision:"9532b3ca9aef6390ca9da60512c099ca"},{url:"categories/index.html",revision:"b1b619607cd326850cff529acdc201be"},{url:"css/index.css",revision:"e347984f4c7ca503b1fe365b5c8d63f9"},{url:"css/mycss/background.css",revision:"cec2dffba19bd3bfaef0e1dd68041494"},{url:"css/mycss/footer.css",revision:"95c03e21cc5331a640631e356cd697af"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"7a1b7e300f874934bb294c103f2b3adc"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"8b1b58f3bef882ae957f7b69f57819ee"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"fe9e7235822694361fd7079437b8e907"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"864a3e598bd47c726a5174342ce69b67"},{url:"live2d-widget/demo/demo.html",revision:"180275f4ed193ab8a4713040b0a649c6"},{url:"live2d-widget/demo/login.html",revision:"5bcdd7f2471429e8dac7e866aab2b94b"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"5e61153c81680871c6b501997e4df15f"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"bb66afd3c8edead1aa90208e549818c1"},{url:"movies/index.html",revision:"9ae76127abd63dbe242296880b4224eb"},{url:"music/index.html",revision:"99d9cdf40123fafb304a274e2e5ed0f3"},{url:"tags/index.html",revision:"443587174fb4eedcbcdbd9fca3f0050e"}],{})}));
//# sourceMappingURL=service-worker.js.map
