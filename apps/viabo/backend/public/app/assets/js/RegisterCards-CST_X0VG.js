import{r as o,i as e,S as r,T as d,B as c,aH as _,a5 as x,k as A,C as R}from"./vendor-CEMfbhOc.js";import{G as m}from"./iconBase-D_ql85QS.js";import{_ as l,r as u,q as S,P as g,F as h,M as E,a5 as I}from"./index-B-U8M-8N.js";function T(t){return m({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(t)}const f=o.lazy(()=>l(()=>import("./FormDemoCardValidation-DIDaRlxN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))),j=o.lazy(()=>l(()=>import("./FormRegisterDemoUserCard-X_bWhjUw.js"),__vite__mapDeps([16,1,4,17,6,8,2,3,9,12,13,7,14,10,11,15]))),C=o.lazy(()=>l(()=>import("./FormDemoUserValidation-D3OvrXG1.js"),__vite__mapDeps([18,1,5,2,3,19,7,15]))),D=o.lazy(()=>l(()=>import("./FormCardRegister-Dal08goS.js"),__vite__mapDeps([20,1,4,6,21,2,3,8,9,12,13,7,14,10,11,15]))),v=o.lazy(()=>l(()=>import("./FormSuccessAssignCard-CpMdDPoD.js"),__vite__mapDeps([22,1,2,3,15]))),i={CARD_VALIDATION:"VALIDACION TARJETA",USER_REGISTER:"REGISTRO USUARIO",USER_VALIDATION:"VALIDACIÓN USUARIO",CARD_REGISTER:"REGISTRO TARJETA",CARD_ASSIGNED:"TARJETA ASIGNADA"},w=[{name:i.CARD_VALIDATION,step:1,content:f},{name:i.USER_REGISTER,step:2,content:j},{name:i.USER_VALIDATION,step:3,content:C},{name:i.CARD_REGISTER,step:4,content:D},{name:i.CARD_ASSIGNED,step:5,content:v}],p={step:i.CARD_VALIDATION,user:null,card:null,token:null},y=(t,n)=>({...p,setStepAssignRegister:s=>{t(a=>({step:s}),!1,"SET_STEP_ASSIGN")},setUser:s=>{t(a=>({user:s}),!1,"SET_USER_ASSIGN")},setCard:s=>{t(a=>({card:s}),!1,"SET_CARD_ASSIGN")},setToken:s=>{t(a=>({token:s}),!1,"SET_TOKEN_USER_DEMO")},resetState:()=>{t(s=>({...p}),!1,"RESET_CARD_USER_STORE"),localStorage.removeItem("token"),delete S.defaults.headers.common.Authorization}}),L=u(y),O="/app/assets/webp/build-DtTpEyfx.webp",b="/app/assets/webp/build-BnRKxPZS.webp";function G(){const t=L(a=>a.step),n=o.useMemo(()=>w.find(a=>a.name===t),[t]);if(!n)return null;const s=n.content;return e.jsx(g,{title:"Registro Tarjetas",children:e.jsx(r,{alignItems:"center",justifyContent:"center",minHeight:"100dvH",children:e.jsxs(r,{px:{xs:0,sm:10,xl:20},width:1,height:1,direction:"row",children:[e.jsxs(r,{width:1,height:1,minHeight:"90vh",maxHeight:"90vH",position:"relative",sx:{overflowY:"auto",overflowX:"hidden"},justifyContent:"space-between",children:[e.jsxs(r,{direction:"row",spacing:1,alignItems:"center",px:{xs:5,sm:0},children:[e.jsx(h,{sx:{width:100}}),e.jsx(d,{fontWeight:"600",variant:"subtitle1",children:"Agilidad en pagos"})]}),e.jsx(c,{flexGrow:1}),e.jsx(r,{flexGrow:1,px:{xs:5,xl:10},children:e.jsx(o.Suspense,{fallback:e.jsx(N,{}),children:e.jsx(E,{children:e.jsx(s,{})})})}),e.jsx(c,{flexGrow:1,children:e.jsxs(r,{spacing:1,children:[e.jsxs(r,{justifyContent:"center",alignItems:"center",direction:"row",spacing:1,children:[e.jsx(T,{fontSize:20}),e.jsx(d,{variant:"caption",children:"ayuda@viabo.com"})]}),(n==null?void 0:n.step)!==5&&e.jsxs(d,{variant:"body2",fontWeight:600,align:"center",sx:{color:"text.secondary"},children:["¡Ya tengo una cuenta!  ",e.jsx(_,{color:"primary",component:x,to:I.login,children:"Acceder."})]})]})})]}),e.jsx(r,{width:1,justifyContent:"center",height:1,flexGrow:1,ml:1,sx:{display:{xs:"none",sm:"none",lg:"flex"}},children:e.jsx(c,{component:A.LazyLoadImage,wrapperClassName:"wrapper",effect:"blur",maxHeight:"90vH",placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"cover"},src:(n==null?void 0:n.step)===1?O:b,borderRadius:4})})]})})})}function N(){return e.jsx(c,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:t=>t.zIndex.modal-1},children:e.jsx(R,{})})}const k=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{i as C,k as R,L as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/FormDemoCardValidation-DIDaRlxN.js","assets/js/vendor-CEMfbhOc.js","assets/js/index-B-U8M-8N.js","assets/css/build-Bl0dWaDY.css","assets/js/formik.esm-Dshy1xjd.js","assets/js/mui-one-time-password-input.es-DPmvTOAU.js","assets/js/index.esm-C2GVbld4.js","assets/js/matchTypes-BFKCRNnN.js","assets/js/RegisterCardsRepository-4nT7LqPk.js","assets/js/formatNumber-Df8NwpjV.js","assets/js/fade-CViozI82.js","assets/js/transition-anLY3gj9.js","assets/js/TextMaxLine-D6XZvUuW.js","assets/js/formatTime-mlJJpQBT.js","assets/js/UploadSingleFile-B0jkdwVt.js","assets/js/iconBase-D_ql85QS.js","assets/js/FormRegisterDemoUserCard-X_bWhjUw.js","assets/js/mui-tel-input.es-DuWRtnpZ.js","assets/js/FormDemoUserValidation-D3OvrXG1.js","assets/js/useValidateCode-CyPM5qQH.js","assets/js/FormCardRegister-Dal08goS.js","assets/js/crypto--V-xCCVf.js","assets/js/FormSuccessAssignCard-CpMdDPoD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=RegisterCards-CST_X0VG.js.map