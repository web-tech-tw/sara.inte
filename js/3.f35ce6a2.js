"use strict";(self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[]).push([[3],{5003:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"flex justify-center my-8 py-16"},[e("div",{staticClass:"flex flex-col"},[e("label",{staticClass:"input-label text-base mb-2"},[t._v(t._s(t.title))]),e("p",{staticClass:"input-label text-base mb-2 text-red-600"},[t._v(t._s(t.status))]),e("input-modal",{attrs:{loading:t.loading,placeholder:t.placeholder},on:{submit:t.submit},model:{value:t.answer,callback:function(s){t.answer=s},expression:"answer"}}),e("p",{staticClass:"text-base mt-2"},[t._v(" 請於您的電子郵件信箱收取註冊代碼，往後操作各項涉及安全性的事務，皆亦需要於信箱收取驗證代號。 ")])],1)]),e("div",{staticClass:"flex justify-center mt-5"},[e("button",{staticClass:"bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3",on:{click:t.cancel}},[t._v(" 取消 ")])])])},i=[],n=e(7637),l=e(2945),r={name:"HomeView",components:{InputModal:l.Z},props:{email:{type:String,required:!1,default:()=>null}},data:()=>({mode:0,loading:!1,token:"",answer:"",status:""}),computed:{title(){return this.token?"請輸入您的註冊代碼：":"請輸入您的暱稱："},placeholder(){return this.token?"例如：1234567":"例如：星川 サラ"}},methods:{cancel(){this.$router.history.length?this.$router.back():this.$router.replace("/")},submit(){this.status="",this.answer?this.token?this.verify():this.do():this.status="請輸入資料"},do(){const t=new URLSearchParams;t.set("email",this.email),t.set("nickname",this.answer),this.loading=!0,this.$axios.post("/register",t).then((t=>{t?.data?.register_token?(this.mode=3,this.loading=!1,this.token=t.data.register_token):(this.loading=!1,this.status="發生錯誤 (無錯誤代碼)")})).catch((t=>{410===t?.response?.status?(this.mode=1,this.loading=!1):(this.loading=!1,this.status=`發生錯誤 (${t?.response?.status||"無錯誤代碼"})`)})).finally((()=>this.loading=!1))},verify(){const t=new URLSearchParams;t.set("code",this.answer),t.set("register_token",this.token),this.loading=!0,this.$axios.post("/register/verify",t).then((()=>{this.status="修改成功，正在更新憑證...",(0,n.uX)()})).catch((t=>{this.loading=!1,this.status=`發生錯誤 (${t?.response?.status||"無錯誤代碼"})`})).finally((()=>this.loading=!1))}},created(){null===this.email&&this.$router.replace("/")}},o=r,h=e(1001),u=(0,h.Z)(o,a,i,!1,null,null,null),c=u.exports}}]);
//# sourceMappingURL=3.f35ce6a2.js.map