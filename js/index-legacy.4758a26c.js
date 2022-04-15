(function(){"use strict";var t={2945:function(t,e,n){n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex rounded bg-white w-auto shadow-md md:w-[30rem]"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{disabled:t.loading,placeholder:t.placeholder,type:"text"},domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},t.input],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)}}}),n("button",{staticClass:"m-2 rounded px-4 px-4 py-2 font-semibold",attrs:{disabled:t.loading},on:{click:t.submit}},[n("svg",{staticClass:"mt-1 h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z","stroke-linecap":"round","stroke-linejoin":"round"}})])])])},i=[],o={name:"InputModal",props:{value:{type:String,required:!1,default:function(){return""}},placeholder:{type:String,require:!1,default:function(){return""}},loading:{type:Boolean,require:!1,default:function(){return!1}}},data:function(){return{content:this.value}},methods:{input:function(){this.$emit("input",this.content)},submit:function(){this.content="",this.$emit("submit")}}},a=o,s=n(1001),u=(0,s.Z)(a,r,i,!1,null,null,null),l=u.exports},8025:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),i=(n(1539),n(6166)),o=n.n(i),a={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},s=o().create(a);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r.Z.use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900"},[t._v(" Sara ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,r){return n("div",{key:r},["function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[t._m(0),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,r){return n("div",{key:r},["function"===e.type?n("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" Sara ")])])}],f={name:"AppHeader",data:function(){return{menu_collapse:{mobile_menu:!1}}},computed:{menu:function(){return[{name:"回首頁",type:"function",icon:n(9182),action:function(){return location.assign("https://web-tech-tw.github.io")}}]}}},m=f,p=n(1001),h=(0,p.Z)(m,c,d,!1,null,null,null),v=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「Sara系統」是一個開放原始碼的無密碼式身份認證解決方案。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw?q=sara"}},[t._v("系統原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],x={name:"AppFooter"},w=x,y=(0,p.Z)(w,g,b,!1,null,null,null),_=y.exports,k={name:"App",components:{AppHeader:v,AppFooter:_}},C=k,j=(0,p.Z)(C,u,l,!1,null,null,null),O=j.exports,S=(n(8783),n(3948),n(4916),n(4765),n(1637),n(8309),n(2809)),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center my-8 py-16"},[n("div",{staticClass:"flex flex-col"},[n("label",{staticClass:"input-label text-base mb-2"},[t._v(t._s(t.title))]),n("p",{staticClass:"input-label text-base mb-2 text-red-600"},[t._v(t._s(t.status))]),n("input-modal",{attrs:{loading:t.loading,placeholder:t.placeholder},on:{submit:t.submit},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1)])},E=[],$=n(7637),T=n(2945),Z={name:"HomeView",components:{InputModal:T.Z},data:function(){return{status:"",token:"",answer:"",loading:!1}},computed:{title:function(){return this.token?"請輸入您的登入代碼：":"請輸入您的電子郵件地址："},placeholder:function(){return this.token?"例如：123456":"例如：sara@web-tech-tw.github.io"}},methods:{submit:function(){this.status="",this.answer?this.token?this.verify():this.do():this.status="請輸入資料"},do:function(){var t=this,e=new URLSearchParams;e.set("email",this.answer),this.loading=!0,this.$axios.post("/login",e).then((function(e){var n;null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.next_token?t.token=e.data.next_token:t.status="發生錯誤 (無錯誤代碼)"})).catch((function(e){var n,r;404===(null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.status)?t.$router.push({name:"register",params:{email:t.answer}}):t.status="發生錯誤 (".concat((null===e||void 0===e||null===(r=e.response)||void 0===r?void 0:r.status)||"無錯誤代碼",")")})).finally((function(){return t.loading=!1}))},verify:function(){var t=this,e=new URLSearchParams;e.set("code",this.answer),e.set("next_token",this.token),this.loading=!0,this.$axios.post("/login/verify",e).then((function(e){var n;null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.token?(t.status="登入成功，憑證登錄中...",localStorage.setItem("unified_token",e.data.token),(0,$.uX)()):t.status="發生錯誤 (無錯誤代碼)"})).catch((function(e){var n;t.status="發生錯誤 (".concat((null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.status)||"無錯誤代碼",")")})).finally((function(){return t.loading=!1}))}}},M=Z,A=(0,p.Z)(M,P,E,!1,null,null,null),L=A.exports;r.Z.use(S.Z);var I=[{path:"/",name:"home",component:L},{path:"/manage",name:"manage",component:function(){return n.e(484).then(n.bind(n,4484))}},{path:"/manage/email",name:"manage-email",component:function(){return n.e(986).then(n.bind(n,8986))},props:!0},{path:"/register",name:"register",component:function(){return n.e(498).then(n.bind(n,8498))},props:!0},{path:"*",name:"not-found",component:function(){return n.e(242).then(n.bind(n,9242))}}],N=new S.Z({routes:I});N.beforeEach((function(t,e,n){if(localStorage.getItem("unified_token")){if(location.search){var r=new URLSearchParams(location.search);if(r.has("refer"))return void(0,$.ON)(r.get("refer"))}"manage"!==t.name&&"manage-email"!==t.name&&n({name:"manage"})}else{if(location.search){var i=new URLSearchParams(location.search);i.has("refer")&&sessionStorage.setItem("sara_refer",i.get("refer"))}"manage"===t.name&&n({name:"home"})}n()}));var q=N;r.Z.config.productionTip=!1,new r.Z({router:q,render:function(t){return t(O)}}).$mount("#app")},7637:function(t,e,n){n.d(e,{ON:function(){return i},uX:function(){return o}});n(6755),n(4916),n(5306);function r(t){return t.startsWith("https://web-tech-tw.github.io")}function i(t){location.replace(t&&r(t)?t:"https://web-tech-tw.github.io")}function o(){var t=sessionStorage.getItem("sara_refer");setTimeout((function(){return i(t)}),500),sessionStorage.removeItem("sara_refer")}},9182:function(t,e,n){t.exports=n.p+"img/home.18cdc896.svg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{242:"736ac16f",484:"c972145f",498:"47f13c9d",986:"662feeb9"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sara.inte:";n.l=function(r,i,o,a){if(t[r])t[r].push(i);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[i];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/sara.inte/"}(),function(){var t={826:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],u=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var c=u(n)}for(e&&e(r);l<a.length;l++)o=a[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8025)}));r=n.O(r)})();
//# sourceMappingURL=index-legacy.4758a26c.js.map