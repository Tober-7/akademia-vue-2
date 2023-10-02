(function(){"use strict";var t={6430:function(t,e,n){var i=n(9242),r=n(3396),o=n(7139);const a={class:"container-app"},s={class:"container-sidebar"},u=(0,r._)("div",{class:"header"},[(0,r._)("span",{class:"text title"},"Shopping List")],-1),c={class:"sidebar-options"},l=(0,r._)("span",{class:"text button"},"Lists",-1),d=[l],p=(0,r._)("div",{class:"sidebar-border"},null,-1),f=["onClick"],h={class:"text button"};function v(t,e,n,l,v,m){const b=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",s,[u,(0,r._)("div",c,[(0,r._)("a",{href:"",onClick:e[0]||(e[0]=(0,i.iM)(((...t)=>m.openLists&&m.openLists(...t)),["prevent"]))},[(0,r._)("div",{class:(0,o.C_)(["sidebar-option",{selected:m.checkRouter(null)}])},d,2)]),p,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.lists,(t=>((0,r.wg)(),(0,r.iD)("div",{key:`item-${t.id}`},[(0,r._)("a",{href:"`/lists/${item.id}`",onClick:(0,i.iM)((e=>m.openShoppingListDetail(t)),["prevent"])},[(0,r._)("div",{class:(0,o.C_)(["sidebar-option",{selected:m.checkRouter(t)}])},[(0,r._)("span",h,(0,o.zw)(t.title),1)],2)],8,f)])))),128))])]),(0,r.Wm)(b)])}n(7658);var m=n(4161),b={data(){return{lists:null}},methods:{async update(){try{const{data:{data:t}}=await m.Z.get("/api/v1/shopping-lists");this.lists=t}catch(t){console.error("Error:",t),this.lists={error:t}}},checkRouter(t){if(t){if(void 0==this.$route.params.id)return!1;if(this.$route.params.id==t.id)return!0}else if(void 0==this.$route.params.id)return!0},openShoppingListDetail({id:t}){this.$router.push({name:"Shopping List - Detail",params:{id:t}})},openLists(){this.$router.replace({name:"Shopping List - List"})}},async mounted(){this.update()},async updated(){this.update()}},g=n(89);const y=(0,g.Z)(b,[["render",v]]);var k=y,_=n(2483);const w=[{path:"",name:"Shopping List - List",component:()=>n.e(559).then(n.bind(n,559))},{path:"/shopping-list/:id",name:"Shopping List - Detail",component:()=>n.e(334).then(n.bind(n,6334))},{path:"/:catchAll(.*)",name:"NotFound",component:()=>n.e(391).then(n.bind(n,4391))}],L=(0,_.p7)({history:(0,_.r5)("/"),routes:w});var O=L;(0,i.ri)(k).use(O).mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var a=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],o=t[l][2];for(var s=!0,u=0;u<i.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{334:"ce49cc01",391:"5f24d89a",559:"d12008c1"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="akademia-vue-2:";n.l=function(i,r,o,a){if(t[i])t[i].push(r);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=i),t[i]=[r];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var r=t[i];if(delete t[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,i){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(n,i){r=t[e]=[n,i]}));i.push(r[2]=o);var a=n.p+n.u(e),s=new Error,u=function(i){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,a=i[0],s=i[1],u=i[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(i);c<a.length;c++)o=a[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},i=self["webpackChunkakademia_vue_2"]=self["webpackChunkakademia_vue_2"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6430)}));i=n.O(i)})();
//# sourceMappingURL=app.29fa6516.js.map