"use strict";(self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[]).push([[872],{8872:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-8 py-16"},[a("div",{staticClass:"flex justify-center"},[a("div",{staticClass:"flex flex-col"},[a("label",{staticClass:"input-label text-base mb-2"},[t._v(t._s(t.title))]),a("p",{staticClass:"input-label text-base mb-2 text-red-600"},[t._v(t._s(t.status))]),a("input-modal",{attrs:{loading:t.loading,placeholder:t.placeholder},on:{submit:t.submit},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),a("p",{staticClass:"text-base mt-2"},[t._v("請於您的新的電子郵件信箱收取轉移代碼。")])],1)]),a("div",{staticClass:"flex justify-center mt-5"},[a("button",{staticClass:"bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3",on:{click:t.cancel}},[t._v(" 取消 ")])])])},s=[],i=(a(4916),a(5306),a(1539),a(8783),a(3948),a(1637),a(2945)),o={name:"ManageEmailView",components:{InputModal:i.Z},data:function(){return{status:"",token:"",answer:"",loading:!1}},computed:{title:function(){return this.token?"請輸入您的轉移代碼：":"請輸入新的電子郵件地址："},placeholder:function(){return this.token?"例如：12345678":"例如：sara@web-tech-tw.github.io"},authOptions:function(){return{headers:{Authorization:localStorage.getItem("unified_token")}}}},methods:{cancel:function(){this.$router.history.length?this.$router.back():this.$router.replace("/")},submit:function(){this.status="",this.answer?this.token?this.verify():this.do():this.status="請輸入資料"},do:function(){var t=this,e=new URLSearchParams;e.set("email",this.answer),this.loading=!0,this.$axios.put("/profile/email",e,this.authOptions).then((function(e){var a;null!==e&&void 0!==e&&null!==(a=e.data)&&void 0!==a&&a.update_email_token?t.token=e.data.update_email_token:t.status="發生錯誤 (無錯誤代碼)"})).catch((function(e){var a;t.status="發生錯誤 (".concat((null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.status)||"無錯誤代碼",")")})).finally((function(){return t.loading=!1}))},verify:function(){var t=this,e=new URLSearchParams;e.set("code",this.answer),e.set("update_email_token",this.token),this.loading=!0,this.$axios.post("/profile/email/verify",e,this.authOptions).then((function(e){var a;null!==e&&void 0!==e&&null!==(a=e.data)&&void 0!==a&&a.token?(t.status="修改成功，正在更新憑證...",localStorage.setItem("unified_token",e.data.token),setTimeout((function(){return t.$router.replace("/manage")}),500)):t.status="發生錯誤 (無錯誤代碼)"})).catch((function(e){var a;t.status="發生錯誤 (".concat((null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.status)||"無錯誤代碼",")")})).finally((function(){return t.loading=!1}))}}},l=o,u=a(1001),r=(0,u.Z)(l,n,s,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=872-legacy.7170bb43.js.map