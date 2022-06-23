"use strict";(self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[]).push([[929],{7929:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center my-8 py-16"},[t.profile?s("div",{staticClass:"flex flex-col mx-5 md:mx-auto"},[s("div",{staticClass:"max-w-2xl mx-auto sm:px-6 lg:px-8"},[t.edit?s("div",{staticClass:"overflow-hidden shadow-md"},[s("div",{staticClass:"px-6 py-4 bg-white border-b border-gray-200 font-bold"},[t._v(" 修改個人資料： ")]),s("div",{staticClass:"p-6 bg-white border-b border-gray-200"},[s("div",{staticClass:"flex rounded bg-white"},[s("label",{staticClass:"px-4 py-1 text-gray-600",attrs:{for:"nickname"}},[t._v("暱稱：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.field.nickname,expression:"field.nickname"}],staticClass:"border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{id:"nickname",placeholder:"例如：星川 サラ",type:"text"},domProps:{value:t.field.nickname},on:{input:function(e){e.target.composing||t.$set(t.field,"nickname",e.target.value)}}})])]),s("div",{staticClass:"p-6 bg-white border-b border-gray-200"},[t._v(" 若要修改電子郵件地址，請點 "),s("router-link",{staticClass:"text-amber-900",attrs:{to:"/manage/email"}},[t._v("此處")]),t._v(" 。 ")],1),s("div",{staticClass:"p-6 bg-white border-gray-200 text-right"},[s("button",{staticClass:"bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3",on:{click:function(e){t.edit=!1}}},[t._v(" 取消 ")]),s("button",{staticClass:"bg-sky-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-sky-600 rounded",on:{click:t.update}},[t._v(" 確定修改 ")])])]):s("div",{staticClass:"overflow-hidden shadow-md"},[s("div",{staticClass:"px-6 py-4 bg-white border-b border-gray-200 font-bold"},[t._v(" 您好，"+t._s(t.profile.nickname)+"，這裡是您的個人資料： ")]),s("div",{staticClass:"p-6 bg-white border-b border-gray-200"},[s("span",{staticClass:"text-gray-600"},[t._v("暱稱：")]),t._v(t._s(t.profile.nickname)),s("br"),s("span",{staticClass:"text-gray-600"},[t._v("電子郵件地址：")]),t._v(t._s(t.profile.email)),s("br"),s("span",{staticClass:"text-gray-600"},[t._v("Sara系統使用者識別碼：")]),t._v(t._s(t.profile._id)+" ")]),s("div",{staticClass:"p-6 bg-white border-b border-gray-200 text-right"},[s("button",{staticClass:"bg-sky-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-sky-600 rounded mr-3",on:{click:function(e){t.edit=!0}}},[t._v("修改個人資料 ")]),s("button",{staticClass:"bg-amber-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-amber-600 rounded",on:{click:t.logout}},[t._v("登出 ")])]),t.showRoles?s("div",{staticClass:"p-6 bg-white border-b border-gray-200"},[s("span",{staticClass:"text-gray-600"},[t._v("持有權限：")]),s("ul",{staticClass:"list-disc ml-7"},t._l(t.profile.roles,(function(e,a){return s("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()])])]):s("div",[t._v(t._s(null===t.profile?"載入中...":"發生錯誤"))])])},i=[],r={name:"ManageView",data:()=>({edit:!1,field:{nickname:""},profile:null}),computed:{showRoles(){return Array.isArray(this.profile.roles)&&this.profile.roles.length}},methods:{async update(){const t=new URLSearchParams;t.set("nickname",this.field.nickname);try{await this.$axios.put("/profile",t),this.status="修改成功，正在寫入憑證...",setTimeout((()=>location.reload()),500)}catch(e){this.status=`發生錯誤 (${e?.response?.status||"無錯誤代碼"})`}},logout(){localStorage.clear(),location.assign("https://web-tech-tw.github.io")}},async created(){this.profile=await this.$profile(),this.field.nickname=this.profile.nickname}},o=r,l=s(1001),n=(0,l.Z)(o,a,i,!1,null,null,null),d=n.exports}}]);
//# sourceMappingURL=929.03ee2733.js.map