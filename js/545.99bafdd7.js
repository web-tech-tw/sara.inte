"use strict";(self["webpackChunksara_inte"]=self["webpackChunksara_inte"]||[]).push([[545],{5545:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-center my-8 py-16"},[a("div",{staticClass:"flex flex-col mx-5 md:mx-auto"},[a("div",{staticClass:"max-w-2xl mx-auto sm:px-6 lg:px-8"},[t.edit?a("div",{staticClass:"overflow-hidden shadow-md"},[a("div",{staticClass:"px-6 py-4 bg-white border-b border-gray-200 font-bold"},[t._v(" 修改個人資料： ")]),a("div",{staticClass:"p-6 bg-white border-b border-gray-200"},[a("div",{staticClass:"flex rounded bg-white"},[a("label",{staticClass:"px-4 py-1 text-gray-600",attrs:{for:"nickname"}},[t._v("暱稱：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.field.nickname,expression:"field.nickname"}],staticClass:"border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{id:"nickname",placeholder:"例如：星川 サラ",type:"text"},domProps:{value:t.field.nickname},on:{input:function(e){e.target.composing||t.$set(t.field,"nickname",e.target.value)}}})])]),a("div",{staticClass:"p-6 bg-white border-b border-gray-200"},[t._v(" 若要修改電子郵件地址，請點 "),a("router-link",{staticClass:"text-amber-900",attrs:{to:"/manage/email"}},[t._v("此處")]),t._v(" 。 ")],1),a("div",{staticClass:"p-6 bg-white border-gray-200 text-right"},[a("button",{staticClass:"bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3",on:{click:function(e){t.edit=!1}}},[t._v(" 取消 ")]),a("button",{staticClass:"bg-sky-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-sky-600 rounded",on:{click:t.update}},[t._v(" 確定修改 ")])])]):a("div",{staticClass:"overflow-hidden shadow-md"},[a("div",{staticClass:"px-6 py-4 bg-white border-b border-gray-200 font-bold"},[t._v(" 您好，"+t._s(t.profile.nickname)+"，這裡是您的個人資料： ")]),a("div",{staticClass:"p-6 bg-white border-b border-gray-200"},[a("span",{staticClass:"text-gray-600"},[t._v("暱稱：")]),t._v(t._s(t.profile.nickname)),a("br"),a("span",{staticClass:"text-gray-600"},[t._v("電子郵件地址：")]),t._v(t._s(t.profile.email)),a("br"),a("span",{staticClass:"text-gray-600"},[t._v("Sara系統使用者識別碼：")]),t._v(t._s(t.profile._id)+" ")]),a("div",{staticClass:"p-6 bg-white border-gray-200 text-right"},[a("button",{staticClass:"bg-sky-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-sky-600 rounded mr-3",on:{click:function(e){t.edit=!0}}},[t._v("修改個人資料 ")]),a("button",{staticClass:"bg-amber-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-amber-600 rounded",on:{click:t.logout}},[t._v("登出 ")])])])])])])},i=[];a(1703),a(2801);function n(t){this.message=t}n.prototype=new Error,n.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,r,i=0,o=0,s="";r=e.charAt(o++);~r&&(a=i%4?64*a+r:r,i++%4)?s+=String.fromCharCode(255&a>>(-2*i&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return s};function s(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(o(t).replace(/(.)/g,(function(t,e){var a=e.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a})))}(e)}catch(t){return o(e)}}function d(t){this.message=t}function l(t,e){if("string"!=typeof t)throw new d("Invalid token specified");var a=!0===(e=e||{}).header?0:1;try{return JSON.parse(s(t.split(".")[a]))}catch(t){throw new d("Invalid token specified: "+t.message)}}d.prototype=new Error,d.prototype.name="InvalidTokenError";var c=l,p={name:"ManageView",data:()=>({edit:!1,field:{nickname:""}}),computed:{profile(){const t=localStorage.getItem("unified_token");if(!t)return!1;const e=c(t);return e?.user||null},authOptions(){return{headers:{Authorization:localStorage.getItem("unified_token")}}}},methods:{update(){const t=new URLSearchParams;t.set("nickname",this.field.nickname),this.$axios.put("/profile",t,this.authOptions).then((t=>{t?.data?.token?(this.status="修改成功，正在更新憑證...",localStorage.setItem("unified_token",t.data.token),setTimeout((()=>location.reload()),500)):this.status="發生錯誤 (無錯誤代碼)"})).catch((t=>{this.status=`發生錯誤 (${t?.response?.status||"無錯誤代碼"})`}))},logout(){localStorage.clear(),location.assign("https://web-tech-tw.github.io")}},mounted(){this.field.nickname=this.profile.nickname}},u=p,h=a(1001),b=(0,h.Z)(u,r,i,!1,null,null,null),m=b.exports}}]);
//# sourceMappingURL=545.99bafdd7.js.map