(function(){"use strict";var t={2945:function(t,e,n){n.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex rounded bg-white w-auto shadow-md md:w-[30rem]"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{disabled:t.loading,placeholder:t.placeholder,type:"text"},domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},t.input],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)}}}),n("button",{staticClass:"m-2 rounded px-4 px-4 py-2 font-semibold",attrs:{disabled:t.loading},on:{click:t.submit}},[n("svg",{staticClass:"mt-1 h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z","stroke-linecap":"round","stroke-linejoin":"round"}})])])])},i=[],r={name:"InputModal",props:{value:{type:String,required:!1,default:()=>""},placeholder:{type:String,require:!1,default:()=>""},loading:{type:Boolean,require:!1,default:()=>!1}},data(){return{content:this.value}},methods:{input(){this.$emit("input",this.content)},submit(){this.content="",this.$emit("submit")}}},s=r,o=n(1001),u=(0,o.Z)(s,a,i,!1,null,null,null),l=u.exports},6946:function(t,e,n){var a=n(8935),i=n(6166),r=n.n(i);const s={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},o=r().create(s);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get(){return o}},$axios:{get(){return o}}})},a.Z.use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900"},[t._v(" Sara ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,a){return n("div",{key:a},["function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[t._m(0),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,a){return n("div",{key:a},["function"===e.type?n("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" Sara ")])])}],m={name:"AppHeader",data:()=>({menu_collapse:{mobile_menu:!1}}),computed:{menu(){return[{name:"回首頁",type:"function",icon:n(9182),action:()=>location.assign("https://web-tech-tw.github.io")}]}}},p=m,f=n(1001),h=(0,f.Z)(p,c,d,!1,null,null,null),g=h.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「Sara系統」是一個開放原始碼的無密碼式身份認證解決方案。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw?q=sara"}},[t._v("系統原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],x={name:"AppFooter"},w=x,y=(0,f.Z)(w,v,b,!1,null,null,null),_=y.exports,k={name:"App",components:{AppHeader:g,AppFooter:_}},C=k,j=(0,f.Z)(C,u,l,!1,null,null,null),O=j.exports,S=n(2809),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center my-8 py-16"},[n("div",{staticClass:"flex flex-col"},[n("label",{staticClass:"input-label text-base mb-2"},[t._v(t._s(t.title))]),n("p",{staticClass:"input-label text-base mb-2 text-red-600"},[t._v(t._s(t.status))]),n("input-modal",{attrs:{loading:t.loading,placeholder:t.placeholder},on:{submit:t.submit},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),n("p",{staticClass:"text-base mt-2"},[t._v("請於您的電子郵件信箱收取登入代碼。")])],1)])},$=[],E=n(7637),T=n(2945),Z={name:"HomeView",components:{InputModal:T.Z},data:()=>({status:"",token:"",answer:"",loading:!1}),computed:{title(){return this.token?"請輸入您的登入代碼：":"請輸入您的電子郵件地址："},placeholder(){return this.token?"例如：123456":"例如：sara@web-tech-tw.github.io"}},methods:{submit(){this.status="",this.answer?this.token?this.verify():this.do():this.status="請輸入資料"},do(){const t=new URLSearchParams;t.set("email",this.answer),this.loading=!0,this.$axios.post("/login",t).then((t=>{t?.data?.next_token?this.token=t.data.next_token:this.status="發生錯誤 (無錯誤代碼)"})).catch((t=>{404===t?.response?.status?this.$router.push({name:"register",params:{email:this.answer}}):this.status=`發生錯誤 (${t?.response?.status||"無錯誤代碼"})`})).finally((()=>this.loading=!1))},verify(){const t=new URLSearchParams;t.set("code",this.answer),t.set("next_token",this.token),this.loading=!0,this.$axios.post("/login/verify",t).then((t=>{t?.data?.token?(this.status="登入成功，憑證登錄中...",localStorage.setItem("unified_token",t.data.token),(0,E.uX)()):this.status="發生錯誤 (無錯誤代碼)"})).catch((t=>{this.status=`發生錯誤 (${t?.response?.status||"無錯誤代碼"})`})).finally((()=>this.loading=!1))}}},M=Z,A=(0,f.Z)(M,P,$,!1,null,null,null),L=A.exports;a.Z.use(S.Z);const I=[{path:"/",name:"home",component:L},{path:"/manage",name:"manage",component:()=>n.e(119).then(n.bind(n,2119))},{path:"/manage/email",name:"manage-email",component:()=>n.e(281).then(n.bind(n,281)),props:!0},{path:"/register",name:"register",component:()=>n.e(1).then(n.bind(n,5001)),props:!0},{path:"*",name:"not-found",component:()=>n.e(242).then(n.bind(n,9242))}],N=new S.Z({routes:I});N.beforeEach(((t,e,n)=>{if(localStorage.getItem("unified_token")){if(location.search){const t=new URLSearchParams(location.search);if(t.has("refer"))return void(0,E.ON)(t.get("refer"))}"manage"!==t.name&&"manage-email"!==t.name&&n({name:"manage"})}else{if(location.search){const t=new URLSearchParams(location.search);t.has("refer")&&sessionStorage.setItem("sara_refer",t.get("refer"))}"manage"===t.name&&n({name:"home"})}n()}));var q=N;a.Z.config.productionTip=!1,new a.Z({router:q,render:t=>t(O)}).$mount("#app")},7637:function(t,e,n){function a(t){return t.startsWith("https://web-tech-tw.github.io")}function i(t){location.replace(t&&a(t)?t:"https://web-tech-tw.github.io")}function r(){const t=sessionStorage.getItem("sara_refer");setTimeout((()=>i(t)),500),sessionStorage.removeItem("sara_refer")}n.d(e,{ON:function(){return i},uX:function(){return r}})},9182:function(t,e,n){t.exports=n.p+"img/home.18cdc896.svg"}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,r){if(!a){var s=1/0;for(c=0;c<t.length;c++){a=t[c][0],i=t[c][1],r=t[c][2];for(var o=!0,u=0;u<a.length;u++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(o=!1,r<s&&(s=r));if(o){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{1:"d36bb53a",119:"85115300",242:"736ac16f",281:"b05d9202"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sara.inte:";n.l=function(a,i,r,s){if(t[a])t[a].push(i);else{var o,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+r),o.src=a),t[a]=[i];var m=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var i=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/sara.inte/"}(),function(){var t={826:0};n.f.j=function(e,a){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(n,a){i=t[e]=[n,a]}));a.push(i[2]=r);var s=n.p+n.u(e),o=new Error,u=function(a){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,i[1](o)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,s=a[0],o=a[1],u=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(u)var c=u(n)}for(e&&e(a);l<s.length;l++)r=s[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},a=self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6946)}));a=n.O(a)})();
//# sourceMappingURL=index.ccd3f26a.js.map