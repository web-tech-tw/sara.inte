"use strict";(self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[]).push([[437],{5437:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-8 py-16"},[s("div",{staticClass:"flex justify-center"},[s("div",{staticClass:"flex flex-col"},[s("label",{staticClass:"input-label text-base mb-2"},[t._v(t._s(t.title))]),s("p",{staticClass:"input-label text-base mb-2 text-red-600"},[t._v(t._s(t.status))]),s("input-modal",{attrs:{loading:t.loading,placeholder:t.placeholder},on:{submit:t.submit},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),s("p",{staticClass:"text-base mt-2"},[t._v("請於您的新的電子郵件信箱收取轉移代碼。")])],1)]),s("div",{staticClass:"flex justify-center mt-5"},[s("button",{staticClass:"bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3",on:{click:t.cancel}},[t._v(" 取消 ")])])])},n=[],i=(s(4916),s(5306),s(1539),s(8783),s(3948),s(1637),s(2945)),l={name:"ManageEmailView",components:{InputModal:i.Z},data:function(){return{status:"",token:"",answer:"",loading:!1}},computed:{title:function(){return this.token?"請輸入您的轉移代碼：":"請輸入新的電子郵件地址："},placeholder:function(){return this.token?"例如：12345678":"例如：sara@web-tech-tw.github.io"}},methods:{cancel:function(){this.$router.history.length?this.$router.back():this.$router.replace("/")},submit:function(){this.status="",this.answer?this.token?this.verify():this.do():this.status="請輸入資料"},do:function(){var t=this,e=new URLSearchParams;e.set("email",this.answer),this.loading=!0,this.$axios.put("/profile/email",e,this.authOptions).then((function(e){var s;null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.update_email_token?t.token=e.data.update_email_token:t.status="發生錯誤 (無錯誤代碼)"})).catch((function(e){var s;t.status="發生錯誤 (".concat((null===e||void 0===e||null===(s=e.response)||void 0===s?void 0:s.status)||"無錯誤代碼",")")})).finally((function(){return t.loading=!1}))},verify:function(){var t=this,e=new URLSearchParams;e.set("code",this.answer),e.set("update_email_token",this.token),this.loading=!0,this.$axios.post("/profile/email/verify",e,this.authOptions).then((function(){t.status="修改成功，正在更新憑證...",setTimeout((function(){return t.$router.replace("/manage")}),500)})).catch((function(e){var s;t.status="發生錯誤 (".concat((null===e||void 0===e||null===(s=e.response)||void 0===s?void 0:s.status)||"無錯誤代碼",")")})).finally((function(){return t.loading=!1}))}}},o=l,u=s(1001),r=(0,u.Z)(o,a,n,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=437-legacy.84e84bf7.js.map