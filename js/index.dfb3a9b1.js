(function(){"use strict";var t={3101:function(t,e,n){n.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex rounded bg-white w-auto shadow-md md:w-[30rem]"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"\n        w-full\n        border-none\n        bg-transparent\n        px-4\n        py-1\n        text-gray-900\n        outline-none\n        focus:outline-none\n      ",attrs:{disabled:t.loading,placeholder:t.placeholder,type:"text"},domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},t.input],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)}}}),n("button",{staticClass:"m-2 rounded px-4 py-2 font-semibold",attrs:{disabled:t.loading},on:{click:t.submit}},[n("svg",{staticClass:"mt-1 h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),n("p",{staticClass:"text-base mt-2"},[t._v(" "+t._s(t.description)+" ")])])},a=[],i={name:"InputModal",props:{value:{type:String,required:!1,default:()=>""},placeholder:{type:String,require:!1,default:()=>""},loading:{type:Boolean,require:!1,default:()=>!1},description:{type:String,require:!1,default:()=>""}},data(){return{content:this.value}},methods:{input(){this.$emit("input",this.content)},submit(){this.content="",this.$emit("submit")}}},r=i,o=n(1001),l=(0,o.Z)(r,s,a,!1,null,null,null),u=l.exports},3143:function(t,e,n){n.d(e,{SX:function(){return r},T2:function(){return a},aQ:function(){return s},y4:function(){return i}});const s="unified_token",a="safe_code",i="sara_refer",r="refer"},7360:function(t,e,n){var s=n(8935),a=n(6166),i=n.n(a),r=n(3143);const o={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},l=i().create(o);l.interceptors.request.use((function(t){const e=localStorage.getItem(r.aQ);return e&&(t.headers["Authorization"]=`SARA ${e}`),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return"sara-issue"in t?.headers&&localStorage.setItem(r.aQ,t.headers["sara-issue"]),t}),(function(t){return Promise.reject(t)}));const u={install:t=>{t.prototype.$sara=l,t.prototype.$profile=async()=>{if(!localStorage.getItem(r.aQ))return null;try{const t=await l.get("profile");return t?.data?.profile||!1}catch(t){return 401===t?.response?.status&&(localStorage.removeItem(r.aQ),location.reload()),!1}}}};s.Z.use(u);const c={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},d=i().create(c);d.interceptors.request.use((function(t){const e=localStorage.getItem(r.aQ);e&&(t.headers["Authorization"]=`SARA ${e}`);const n=localStorage.getItem(r.T2);return e&&n&&(t.headers["Sara-Secret"]=n.toString()),t}),(function(t){return Promise.reject(t)})),d.interceptors.response.use((function(t){return"sara-issue"in t?.headers&&localStorage.setItem(r.aQ,t.headers["sara-issue"]),"sara-code"in t?.headers&&localStorage.setItem(r.T2,t.headers["sara-code"]),t}),(function(t){return Promise.reject(t)}));const m={install:t=>{t.axios=d,window.axios=d,Object.defineProperties(t.prototype,{axios:{get(){return d}},$axios:{get(){return d}}})}};s.Z.use(m);var p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},f=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 hidden sm:block"},[t._v(" "+t._s(t.title.long)+" ")]),n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" "+t._s(t.title.short)+" ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,s){return n("div",{key:s},["dropdown"===e.type?n("div",{staticClass:"relative"},[n("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(n){return t.openMenu(e.status)}}},[n("span",[t._v(t._s(e.name))]),n("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse[e.status],expression:"menu_collapse[item.status]"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,s){return n("div",{key:s,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" "+t._s(t.title.short)+" ")])]),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,s){return n("div",{key:s},["dropdown"===e.type?n("div",{staticClass:"relative"},[n("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(n){return t.openMenu(e.status)}}},[n("span",[t._v(t._s(e.name))]),n("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"absolute z-10 -ml-7 mt-3 transform px-2 w-screen max-w-md sm:px-0 sm:-ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse[e.status],expression:"menu_collapse[item.status]"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,s){return n("div",{key:s,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?n("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},h=[],v={name:"AppHeader",data:()=>({title:{short:"Sara",long:"Sara"},menu_collapse:{mobile_menu:!1},profile:null}),computed:{menu(){return[{name:"回首頁",type:"function",icon:n(9182),action:()=>location.assign("https://web-tech-tw.github.io")}]}},async created(){document.addEventListener("click",this.handleDocumentClick),this.profile=await this.$profile()},methods:{openMenu(t){Object.keys(this.menu_collapse).forEach((e=>{"mobile_menu"!==e&&(this.menu_collapse[e]=e===t&&!this.menu_collapse[e])}))},handleDocumentClick(t){this.$el.contains(t.target)||Object.keys(this.menu_collapse).forEach((t=>{this.menu_collapse[t]=!1}))}}},w=v,x=n(1001),b=(0,x.Z)(w,g,h,!1,null,null,null),y=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「Sara系統」是一個開放原始碼的無密碼式身份認證解決方案。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw?q=sara"}},[t._v("系統原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],k={name:"AppFooter"},S=k,j=(0,x.Z)(S,_,C,!1,null,null,null),M=j.exports,I={name:"App",components:{AppHeader:y,AppFooter:M}},$=I,O=(0,x.Z)($,p,f,!1,null,null,null),L=O.exports,E=n(2809),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center my-8 py-16"},[n("div",{staticClass:"flex flex-col"},[n("label",{staticClass:"input-label text-base mb-2"},[t._v(t._s(t.title))]),n("p",{staticClass:"input-label text-base mb-2 text-red-600"},[t._v(t._s(t.statusMessage))]),n("input-modal",{attrs:{loading:t.isLoading,placeholder:t.placeholder,description:t.description},on:{submit:t.submit},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1)])},T=[],A=n(7637),Z=n(3101),R={name:"HomeView",components:{InputModal:Z.Z},data:()=>({isLoading:!1,statusMessage:"",answer:"",sessionId:""}),computed:{title(){return this.sessionId?"請輸入您的登入代碼：":"請輸入您的電子郵件地址："},placeholder(){return this.sessionId?"例如：123456":"例如：sara@web-tech-tw.github.io"},description(){return this.sessionId?"請於您的電子郵件信箱收取登入代碼。":""}},methods:{submit(){this.statusMessage="",this.answer?this.sessionId?this.verify():this.do():this.statusMessage="請輸入資料"},async do(){const t=new URLSearchParams;t.set("email",this.answer),this.isLoading=!0;try{const e=await this.$axios.post("/login",t);e?.data?.session_id?this.sessionId=e.data.session_id:this.statusMessage="發生錯誤 (無錯誤代碼)"}catch(e){404===e?.response?.status?this.$router.push({name:"register",params:{email:this.answer}}):this.statusMessage=`發生錯誤 (${e?.response?.status||"無錯誤代碼"})`}finally{this.isLoading=!1}},async verify(){const t=new URLSearchParams;t.set("code",this.answer),t.set("next_sessionId",this.sessionId),this.isLoading=!0;try{await this.$axios.post("/login/verify",t),this.statusMessage="登入成功，正在寫入憑證...",(0,A.x4)()}catch(e){this.statusMessage=`發生錯誤 (${e?.response?.status||"無錯誤代碼"})`}finally{this.isLoading=!1}}}},q=R,z=(0,x.Z)(q,P,T,!1,null,null,null),Q=z.exports;s.Z.use(E.Z);const U=[{path:"/",name:"home",component:Q},{path:"/manage",name:"manage",component:()=>n.e(929).then(n.bind(n,7929))},{path:"/manage/email",name:"manage-email",component:()=>n.e(575).then(n.bind(n,575)),props:!0},{path:"/register",name:"register",component:()=>n.e(445).then(n.bind(n,5445)),props:!0},{path:"*",name:"not-found",component:()=>n.e(242).then(n.bind(n,9242))}],B=new E.Z({routes:U});B.beforeEach(((t,e,n)=>{localStorage.getItem(r.aQ)?((0,A.W7)((t=>{(0,A._J)(t)})),"manage"!==t.name&&"manage-email"!==t.name&&n({name:"manage"})):((0,A.W7)((t=>{sessionStorage.setItem(r.y4,t)})),"manage"===t.name&&n({name:"home"})),n()}));var N=B;s.Z.config.productionTip=!1,new s.Z({router:N,render:t=>t(L)}).$mount("#app")},7637:function(t,e,n){n.d(e,{W7:function(){return a},_J:function(){return i},x4:function(){return o}});var s=n(3143);function a(t){if(window.location.search){const e=new URLSearchParams(window.location.search);e.has(s.SX)&&t(e.get(s.SX))}}function i(t,e=!0){r(t)||(console.warn("Unsafe redirect url detected: "+t),t="https://web-tech-tw.github.io",console.warn("Reject it")),e?window.location.replace(t):window.location.assign(t)}function r(t){const e=new URL(t),n=new URL("https://web-tech-tw.github.io");return e.host===n.host}function o(){const t=sessionStorage.getItem(s.y4)||"https://web-tech-tw.github.io";setTimeout((()=>i(t)),500),sessionStorage.removeItem(s.y4)}},9182:function(t,e,n){t.exports=n.p+"img/home.18cdc896.svg"}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,a,i){if(!s){var r=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],i=t[c][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,s){return n.f[s](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{242:"736ac16f",445:"5858bc12",575:"5e22e0f3",929:"7315d0b1"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sara.inte:";n.l=function(s,a,i,r){if(t[s])t[s].push(a);else{var o,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+i){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+i),o.src=s),t[s]=[a];var m=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var a=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/sara.inte/"}(),function(){var t={826:0};n.f.j=function(e,s){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var i=new Promise((function(n,s){a=t[e]=[n,s]}));s.push(a[2]=i);var r=n.p+n.u(e),o=new Error,l=function(s){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,a[1](o)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,i,r=s[0],o=s[1],l=s[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var c=l(n)}for(e&&e(s);u<r.length;u++)i=r[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},s=self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7360)}));s=n.O(s)})();
//# sourceMappingURL=index.dfb3a9b1.js.map