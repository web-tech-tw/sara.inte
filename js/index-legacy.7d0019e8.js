(function(){"use strict";var t={2945:function(t,e,n){n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex rounded bg-white w-auto shadow-md md:w-[30rem]"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{disabled:t.loading,placeholder:t.placeholder,type:"text"},domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},t.input],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)}}}),n("button",{staticClass:"m-2 rounded px-4 px-4 py-2 font-semibold",attrs:{disabled:t.loading},on:{click:t.submit}},[n("svg",{staticClass:"mt-1 h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z","stroke-linecap":"round","stroke-linejoin":"round"}})])])])},a=[],i={name:"InputModal",props:{value:{type:String,required:!1,default:function(){return""}},placeholder:{type:String,require:!1,default:function(){return""}},loading:{type:Boolean,require:!1,default:function(){return!1}}},data:function(){return{content:this.value}},methods:{input:function(){this.$emit("input",this.content)},submit:function(){this.content="",this.$emit("submit")}}},o=i,s=n(1001),u=(0,s.Z)(o,r,a,!1,null,null,null),l=u.exports},3143:function(t,e,n){n.d(e,{SX:function(){return o},T2:function(){return a},aQ:function(){return r},y4:function(){return i}});var r="unified_token",a="safe_code",i="sara_refer",o="refer"},3243:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),a=n(6198),i=(n(8975),n(1539),n(6166)),o=n.n(i),s=n(3143),u={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},l=o().create(u);l.interceptors.request.use((function(t){var e=localStorage.getItem(s.aQ);return e&&(t.headers["Authorization"]="SARA ".concat(e)),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return"sara-issue"in(null===t||void 0===t?void 0:t.headers)&&localStorage.setItem(s.aQ,t.headers["sara-issue"]),t}),(function(t){return Promise.reject(t)}));var c={install:function(t){t.prototype.$sara=l,t.prototype.$profile=(0,a.Z)(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(localStorage.getItem(s.aQ)){t.next=2;break}return t.abrupt("return",null);case 2:return t.prev=2,t.next=5,l.get("profile");case 5:return n=t.sent,t.abrupt("return",(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.profile)||!1);case 9:return t.prev=9,t.t0=t["catch"](2),401===(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r?void 0:r.status)&&(localStorage.removeItem(s.aQ),location.reload()),t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))}};r.Z.use(c);n(9714);var d={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},m=o().create(d);m.interceptors.request.use((function(t){var e=localStorage.getItem(s.aQ);e&&(t.headers["Authorization"]="SARA ".concat(e));var n=localStorage.getItem(s.T2);return e&&n&&(t.headers["Sara-Secret"]=n.toString()),t}),(function(t){return Promise.reject(t)})),m.interceptors.response.use((function(t){return"sara-issue"in(null===t||void 0===t?void 0:t.headers)&&localStorage.setItem(s.aQ,t.headers["sara-issue"]),"sara-code"in(null===t||void 0===t?void 0:t.headers)&&localStorage.setItem(s.T2,t.headers["sara-code"]),t}),(function(t){return Promise.reject(t)}));var p={install:function(t){t.axios=m,window.axios=m,Object.defineProperties(t.prototype,{axios:{get:function(){return m}},$axios:{get:function(){return m}}})}};r.Z.use(p);var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},g=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 hidden sm:block"},[t._v(" "+t._s(t.title.long)+" ")]),n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" "+t._s(t.title.short)+" ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,r){return n("div",{key:r},["dropdown"===e.type?n("div",{staticClass:"relative"},[n("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(n){return t.openMenu(e.status)}}},[n("span",[t._v(t._s(e.name))]),n("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse[e.status],expression:"menu_collapse[item.status]"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,r){return n("div",{key:r,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" "+t._s(t.title.short)+" ")])]),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,r){return n("div",{key:r},["dropdown"===e.type?n("div",{staticClass:"relative"},[n("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(n){return t.openMenu(e.status)}}},[n("span",[t._v(t._s(e.name))]),n("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"absolute z-10 -ml-7 mt-3 transform px-2 w-screen max-w-md sm:px-0 sm:-ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse[e.status],expression:"menu_collapse[item.status]"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,r){return n("div",{key:r,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?n("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},h=[],x=(n(4747),n(7941),{name:"AppHeader",data:function(){return{title:{short:"Sara",long:"Sara"},menu_collapse:{mobile_menu:!1},profile:null}},computed:{menu:function(){return[{name:"回首頁",type:"function",icon:n(9182),action:function(){return location.assign("https://web-tech-tw.github.io")}}]}},created:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.addEventListener("click",t.handleDocumentClick),e.next=3,t.$profile();case 3:t.profile=e.sent;case 4:case"end":return e.stop()}}),e)})))()},methods:{openMenu:function(t){var e=this;Object.keys(this.menu_collapse).forEach((function(n){"mobile_menu"!==n&&(e.menu_collapse[n]=n===t&&!e.menu_collapse[n])}))},handleDocumentClick:function(t){var e=this;this.$el.contains(t.target)||Object.keys(this.menu_collapse).forEach((function(t){e.menu_collapse[t]=!1}))}}}),w=x,b=n(1001),y=(0,b.Z)(w,v,h,!1,null,null,null),_=y.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「Sara系統」是一個開放原始碼的無密碼式身份認證解決方案。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw?q=sara"}},[t._v("系統原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],S={name:"AppFooter"},j=S,O=(0,b.Z)(j,C,k,!1,null,null,null),Z=O.exports,E={name:"App",components:{AppHeader:_,AppFooter:Z}},$=E,M=(0,b.Z)($,f,g,!1,null,null,null),P=M.exports,R=(n(8783),n(3948),n(8309),n(2809)),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center my-8 py-16"},[n("div",{staticClass:"flex flex-col"},[n("label",{staticClass:"input-label text-base mb-2"},[t._v(t._s(t.title))]),n("p",{staticClass:"input-label text-base mb-2 text-red-600"},[t._v(t._s(t.status))]),n("input-modal",{attrs:{loading:t.loading,placeholder:t.placeholder},on:{submit:t.submit},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),n("p",{staticClass:"text-base mt-2"},[t._v("請於您的電子郵件信箱收取登入代碼。")])],1)])},A=[],I=(n(1637),n(7637)),L=n(2945),z={name:"HomeView",components:{InputModal:L.Z},data:function(){return{status:"",token:"",answer:"",loading:!1}},computed:{title:function(){return this.token?"請輸入您的登入代碼：":"請輸入您的電子郵件地址："},placeholder:function(){return this.token?"例如：123456":"例如：sara@web-tech-tw.github.io"}},methods:{submit:function(){this.status="",this.answer?this.token?this.verify():this.do():this.status="請輸入資料"},do:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.set("email",t.answer),t.loading=!0,e.prev=3,e.next=6,t.$axios.post("/login",n);case 6:a=e.sent,null!==a&&void 0!==a&&null!==(r=a.data)&&void 0!==r&&r.next_token?t.token=a.data.next_token:t.status="發生錯誤 (無錯誤代碼)",e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),404===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)?t.$router.push({name:"register",params:{email:t.answer}}):t.status="發生錯誤 (".concat((null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.status)||"無錯誤代碼",")");case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})))()},verify:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.set("code",t.answer),n.set("next_token",t.token),t.loading=!0,e.prev=4,e.next=7,t.$axios.post("/login/verify",n);case 7:t.status="登入成功，正在寫入憑證...",(0,I.x4)(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),t.status="發生錯誤 (".concat((null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)||"無錯誤代碼",")");case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[4,11,14,17]])})))()}}},Q=z,q=(0,b.Z)(Q,T,A,!1,null,null,null),B=q.exports;r.Z.use(R.Z);var N=[{path:"/",name:"home",component:B},{path:"/manage",name:"manage",component:function(){return n.e(929).then(n.bind(n,7929))}},{path:"/manage/email",name:"manage-email",component:function(){return n.e(516).then(n.bind(n,9516))},props:!0},{path:"/register",name:"register",component:function(){return n.e(53).then(n.bind(n,2053))},props:!0},{path:"*",name:"not-found",component:function(){return n.e(242).then(n.bind(n,9242))}}],W=new R.Z({routes:N});W.beforeEach((function(t,e,n){localStorage.getItem(s.aQ)?((0,I.W7)((function(t){(0,I._J)(t)})),"manage"!==t.name&&"manage-email"!==t.name&&n({name:"manage"})):((0,I.W7)((function(t){sessionStorage.setItem(s.y4,t)})),"manage"===t.name&&n({name:"home"})),n()}));var U=W;r.Z.config.productionTip=!1,new r.Z({router:U,render:function(t){return t(P)}}).$mount("#app")},7637:function(t,e,n){n.d(e,{W7:function(){return a},_J:function(){return i},x4:function(){return s}});n(4916),n(4765),n(1539),n(8783),n(3948),n(1637),n(5306),n(6755);var r=n(3143);function a(t){if(window.location.search){var e=new URLSearchParams(window.location.search);e.has(r.SX)&&t(e.get(r.SX))}}function i(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];o(t)||(console.log("Unsafe redirect url detected: "+t),t="https://web-tech-tw.github.io",console.log("Reject it")),e?window.location.replace(t):window.location.assign(t)}function o(t){return t.startsWith("https://web-tech-tw.github.io")}function s(){var t=sessionStorage.getItem(r.y4)||"";setTimeout((function(){return i(t)}),500),sessionStorage.removeItem(r.y4)}},9182:function(t,e,n){t.exports=n.p+"img/home.18cdc896.svg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],i=t[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,i<o&&(o=i));if(s){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{53:"8a16c722",242:"736ac16f",516:"910f7f88",929:"d928ea72"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sara.inte:";n.l=function(r,a,i,o){if(t[r])t[r].push(a);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[a];var m=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var a=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/sara.inte/"}(),function(){var t={826:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=i);var o=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}};n.l(o,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],s=r[1],u=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(e&&e(r);l<o.length;l++)i=o[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3243)}));r=n.O(r)})();
//# sourceMappingURL=index-legacy.7d0019e8.js.map