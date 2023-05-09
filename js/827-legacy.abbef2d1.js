"use strict";(self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[]).push([[827],{2827:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-8 py-16"},[s("div",{staticClass:"flex justify-center"},[s("div",{staticClass:"flex flex-col"},[s("label",{staticClass:"input-label text-base mb-2"},[e._v(e._s(e.title))]),s("p",{staticClass:"input-label text-base mb-2 text-red-600"},[e._v(e._s(e.statusMessage))]),s("input-modal",{attrs:{loading:e.isLoading,placeholder:e.placeholder,description:e.description},on:{submit:e.submit},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}})],1)]),s("div",{staticClass:"flex justify-center mt-5"},[s("button",{staticClass:"\n        bg-white-500\n        shadow-md\n        text-sm text-black\n        font-bold\n        py-3\n        md:px-8\n        px-4\n        hover:bg-slate-100\n        rounded\n        mr-3\n      ",on:{click:e.cancel}},[e._v(" 取消 ")])])])},a=[],i=s(6198),r=(s(8975),s(4916),s(5306),s(3101)),o={name:"ManageEmailView",components:{InputModal:r.Z},data:function(){return{isLoading:!1,statusMessage:"",sessionId:"",answer:""}},computed:{title:function(){return this.sessionId?"請輸入您的轉移代碼：":"請輸入新的電子郵件地址："},placeholder:function(){return this.sessionId?"例如：12345678":"例如：sara@web-tech-tw.github.io"},description:function(){return this.sessionId?"請於您的新的電子郵件信箱收取轉移代碼。":""}},methods:{cancel:function(){this.$router.history.length?this.$router.back():this.$router.replace("/")},submit:function(){this.statusMessage="",this.answer?this.sessionId?this.verify():this.do():this.statusMessage="請輸入資料"},do:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$axios.put("/users/me/email",{email:e.answer});case 4:n=t.sent,null!==n&&void 0!==n&&null!==(s=n.data)&&void 0!==s&&s.session_id?e.sessionId=n.data.session_id:e.statusMessage="發生錯誤 (無錯誤代碼)",t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.statusMessage="發生錯誤 (".concat((null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)||"無錯誤代碼",")");case 11:return t.prev=11,e.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},verify:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$axios.patch("/users/me/email",{code:e.answer,session_id:e.sessionId});case 4:e.statusMessage="修改成功，正在寫入憑證...",setTimeout((function(){return e.$router.replace("/manage")}),500),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.statusMessage="發生錯誤 (".concat((null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.status)||"無錯誤代碼",")");case 11:return t.prev=11,e.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}}},u=o,c=s(1001),l=(0,c.Z)(u,n,a,!1,null,null,null),d=l.exports}}]);
//# sourceMappingURL=827-legacy.abbef2d1.js.map