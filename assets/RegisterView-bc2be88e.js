import{r as c,u as w,c as u,g as k,o as V,a as C,b as o,t as v,d as R,e as j,f as B}from"./index-240002d4.js";import{_ as S}from"./InputModal-0e9a8846.js";const $={class:"flex justify-center my-8 py-16"},q={class:"flex flex-col"},M={class:"input-label text-base mb-2"},N={class:"input-label text-base mb-2 text-red-600"},E={__name:"RegisterView",props:{email:String},setup(m){const d=m,i=c(!1),s=c(""),n=c(""),t=c(""),r=w(),p=B(),f=u(()=>t.value?"請輸入您的註冊代碼：":"請輸入您的暱稱："),_=u(()=>t.value?"例如：1234567":"例如：星川 サラ"),b=u(()=>t.value?"請於您的電子郵件信箱收取註冊代碼。":""),h=()=>{r.history.length?r.back():r.replace("/")},x=()=>{if(!n.value){s.value="請輸入資料";return}s.value="",i.value=!0,t.value?g():y(),i.value=!1},y=async()=>{var a;try{(await(await p.post("users",{email:d.email,nickname:n.value})).json()).session_id?t.value=xhr.data.session_id:s.value="發生錯誤 (無錯誤代碼)"}catch(e){const l=((a=e==null?void 0:e.response)==null?void 0:a.status)||"無錯誤代碼";s.value=`發生錯誤 (${l})`}},g=async()=>{var a;try{await p.patch("users",{code:n.value,session_id:t.value}),s.value="註冊成功，正在寫入憑證...",j()}catch(e){const l=((a=e==null?void 0:e.response)==null?void 0:a.status)||"無錯誤代碼";s.value=`發生錯誤 (${l})`}};return k(()=>{d.email===null&&r.replace("/")}),(a,e)=>(V(),C("div",null,[o("div",$,[o("div",q,[o("label",M,v(f.value),1),o("p",N,v(s.value),1),R(S,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l),loading:i.value,placeholder:_.value,description:b.value,onSubmit:x},null,8,["modelValue","loading","placeholder","description"])])]),o("div",{class:"flex justify-center mt-5"},[o("button",{onClick:h,class:"bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3"}," 取消 ")])]))}};export{E as default};