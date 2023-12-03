import{r as o,_ as l,am as _,al as x,j as e,P as A,S as r,F as R,T as d,B as c,M as m,i as u,d3 as S,l as g,Y as h}from"./index-y5qwZYHa.js";import{G as I}from"./build-kN1LN86M.js";import{L as E}from"./build-Yn4D2ea6.js";function T(t){return I({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(t)}const f=o.lazy(()=>l(()=>import("./build-rnI5A9K8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))),j=o.lazy(()=>l(()=>import("./build-RP2IWlEk.js"),__vite__mapDeps([21,1,2,3,22,5,6,18,7,9,10,13,14,15,11,12,16,17,23,24,20]))),C=o.lazy(()=>l(()=>import("./build-Z7507px0.js"),__vite__mapDeps([25,1,2,4,5,6,26,8,16,20]))),D=o.lazy(()=>l(()=>import("./build-ngEhm5Ho.js"),__vite__mapDeps([27,1,2,3,7,28,9,10,6,13,14,15,5,11,12,16,17,18,29,30,31,20]))),v=o.lazy(()=>l(()=>import("./build-CEaIvR6w.js"),__vite__mapDeps([32,1,2,20,16]))),i={CARD_VALIDATION:"VALIDACION TARJETA",USER_REGISTER:"REGISTRO USUARIO",USER_VALIDATION:"VALIDACIÓN USUARIO",CARD_REGISTER:"REGISTRO TARJETA",CARD_ASSIGNED:"TARJETA ASIGNADA"},w=[{name:i.CARD_VALIDATION,step:1,content:f},{name:i.USER_REGISTER,step:2,content:j},{name:i.USER_VALIDATION,step:3,content:C},{name:i.CARD_REGISTER,step:4,content:D},{name:i.CARD_ASSIGNED,step:5,content:v}],p={step:i.CARD_VALIDATION,user:null,card:null,token:null},L=(t,n)=>({...p,setStepAssignRegister:s=>{t(a=>({step:s}),!1,"SET_STEP_ASSIGN")},setUser:s=>{t(a=>({user:s}),!1,"SET_USER_ASSIGN")},setCard:s=>{t(a=>({card:s}),!1,"SET_CARD_ASSIGN")},setToken:s=>{t(a=>({token:s}),!1,"SET_TOKEN_USER_DEMO")},resetState:()=>{t(s=>({...p}),!1,"RESET_CARD_USER_STORE"),localStorage.removeItem("token"),delete x.defaults.headers.common.Authorization}}),O=_(L),y="/app/assets/webp/build-7U6RMn8R.webp",b="/app/assets/webp/build-Z0SsT2Uu.webp";function G(){const t=O(a=>a.step),n=o.useMemo(()=>w.find(a=>a.name===t),[t]);if(!n)return null;const s=n.content;return e.jsx(A,{title:"Registro Tarjetas",children:e.jsx(r,{alignItems:"center",justifyContent:"center",minHeight:"100vH",children:e.jsxs(r,{px:{xs:0,sm:10,xl:20},width:1,height:1,direction:"row",children:[e.jsxs(r,{width:1,height:1,minHeight:"90vh",maxHeight:"90vH",position:"relative",sx:{overflowY:"auto",overflowX:"hidden"},justifyContent:"space-between",children:[e.jsxs(r,{direction:"row",spacing:1,alignItems:"center",px:{xs:5,sm:0},children:[e.jsx(R,{sx:{width:100}}),e.jsx(d,{fontWeight:"600",variant:"subtitle1",children:"Agilidad en pagos"})]}),e.jsx(c,{flexGrow:1}),e.jsx(r,{flexGrow:1,px:{xs:5,xl:10},children:e.jsx(o.Suspense,{fallback:e.jsx(U,{}),children:e.jsx(m,{children:e.jsx(s,{})})})}),e.jsx(c,{flexGrow:1,children:e.jsxs(r,{spacing:1,children:[e.jsxs(r,{justifyContent:"center",alignItems:"center",direction:"row",spacing:1,children:[e.jsx(T,{fontSize:20}),e.jsx(d,{variant:"caption",children:"ayuda@viabo.com"})]}),(n==null?void 0:n.step)!==5&&e.jsxs(d,{variant:"body2",fontWeight:600,align:"center",sx:{color:"text.secondary"},children:["¡Ya tengo una cuenta!  ",e.jsx(E,{color:"primary",component:u,to:S.login,children:"Acceder."})]})]})})]}),e.jsx(r,{width:1,justifyContent:"center",height:1,flexGrow:1,ml:1,sx:{display:{xs:"none",sm:"none",lg:"flex"}},children:e.jsx(c,{component:g.LazyLoadImage,wrapperClassName:"wrapper",effect:"blur",maxHeight:"90vH",placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"cover"},src:(n==null?void 0:n.step)===1?y:b,borderRadius:4})})]})})})}function U(){return e.jsx(c,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:t=>t.zIndex.modal-1},children:e.jsx(h,{})})}const k=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{i as C,k as R,O as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-rnI5A9K8.js","assets/js/index-y5qwZYHa.js","assets/css/build-pvjN466W.css","assets/js/build-PJPIYBgW.js","assets/js/build-Ykpcd_0-.js","assets/js/build-1tNQEUgO.js","assets/js/build-EPVZwbdT.js","assets/js/build-8X4s3jOI.js","assets/js/build-BezCRUW3.js","assets/js/build-KQ_RphFQ.js","assets/js/build-Rz0-vvWC.js","assets/js/build-SRt7phYD.js","assets/js/build-Uc7vb3zK.js","assets/js/build-SDHWuAcQ.js","assets/js/build-iz_J-lP_.js","assets/js/build-QtGFkQWE.js","assets/js/build-Yn4D2ea6.js","assets/js/build-ZJzPV2Tj.js","assets/js/build-fxHra5tZ.js","assets/js/build-yc4r4FsI.js","assets/js/build-kN1LN86M.js","assets/js/build-RP2IWlEk.js","assets/js/build-wWqC24GC.js","assets/js/build-Y6u_Wa8_.js","assets/js/build-opCDIkM4.js","assets/js/build-Z7507px0.js","assets/js/build-kEdlA-sL.js","assets/js/build-ngEhm5Ho.js","assets/js/build-y_Xl7D_I.js","assets/js/build-N8t7XGiE.js","assets/js/build-N5icTqHb.js","assets/js/build-yK9xw9pv.js","assets/js/build-CEaIvR6w.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}