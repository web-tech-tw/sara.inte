"use strict";(self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[]).push([[872],{8872:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-8 py-16"},[s("div",{staticClass:"flex justify-center"},[s("div",{staticClass:"flex flex-col"},[s("label",{staticClass:"input-label text-base mb-2"},[t._v(t._s(t.title))]),s("p",{staticClass:"input-label text-base mb-2 text-red-600"},[t._v(t._s(t.status))]),s("input-modal",{attrs:{loading:t.loading,placeholder:t.placeholder},on:{submit:t.submit},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),s("p",{staticClass:"text-base mt-2"},[t._v("請於您的新的電子郵件信箱收取轉移代碼。")])],1)]),s("div",{staticClass:"flex justify-center mt-5"},[s("button",{staticClass:"bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3",on:{click:t.cancel}},[t._v(" 取消 ")])])])},i=[],n=s(2945),l={name:"ManageEmailView",components:{InputModal:n.Z},data:()=>({status:"",token:"",answer:"",loading:!1}),computed:{title(){return this.token?"請輸入您的轉移代碼：":"請輸入新的電子郵件地址："},placeholder(){return this.token?"例如：12345678":"例如：sara@web-tech-tw.github.io"},authOptions(){return{headers:{Authorization:localStorage.getItem("unified_token")}}}},methods:{cancel(){this.$router.history.length?this.$router.back():this.$router.replace("/")},submit(){this.status="",this.answer?this.token?this.verify():this.do():this.status="請輸入資料"},do(){const t=new URLSearchParams;t.set("email",this.answer),this.loading=!0,this.$axios.put("/profile/email",t,this.authOptions).then((t=>{t?.data?.update_email_token?this.token=t.data.update_email_token:this.status="發生錯誤 (無錯誤代碼)"})).catch((t=>{this.status=`發生錯誤 (${t?.response?.status||"無錯誤代碼"})`})).finally((()=>this.loading=!1))},verify(){const t=new URLSearchParams;t.set("code",this.answer),t.set("update_email_token",this.token),this.loading=!0,this.$axios.post("/profile/email/verify",t,this.authOptions).then((t=>{t?.data?.token?(this.status="修改成功，正在更新憑證...",localStorage.setItem("unified_token",t.data.token),setTimeout((()=>this.$router.replace("/manage")),500)):this.status="發生錯誤 (無錯誤代碼)"})).catch((t=>{this.status=`發生錯誤 (${t?.response?.status||"無錯誤代碼"})`})).finally((()=>this.loading=!1))}}},o=l,r=s(1001),u=(0,r.Z)(o,a,i,!1,null,null,null),h=u.exports}}]);
//# sourceMappingURL=872.fbd4226b.js.map