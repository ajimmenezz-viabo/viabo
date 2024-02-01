import{r as o,i as e,V as r,T as d,B as c,aH as _,a5 as x,k as A,C as R}from"./vendor-pMbAJ2vN.js";import{G as u}from"./iconBase-qbdG-1ZU.js";import{_ as l,r as m,q as g,P as S,F as h,M as I,a0 as E}from"./index-4lAQqZtp.js";function T(t){return u({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(t)}const f=o.lazy(()=>l(()=>import("./FormDemoCardValidation-72n2P1Vr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),j=o.lazy(()=>l(()=>import("./FormRegisterDemoUserCard-THvBYrPQ.js"),__vite__mapDeps([15,1,4,16,6,8,2,3,9,12,13,10,11,14]))),C=o.lazy(()=>l(()=>import("./FormDemoUserValidation-Sfcwz5vC.js"),__vite__mapDeps([17,1,5,2,3,18,7,14]))),D=o.lazy(()=>l(()=>import("./FormCardRegister-JmxqMR-_.js"),__vite__mapDeps([19,1,4,6,20,2,3,8,9,12,13,10,11,14]))),v=o.lazy(()=>l(()=>import("./FormSuccessAssignCard-BTHGdRyJ.js"),__vite__mapDeps([21,1,2,3,14]))),i={CARD_VALIDATION:"VALIDACION TARJETA",USER_REGISTER:"REGISTRO USUARIO",USER_VALIDATION:"VALIDACIÓN USUARIO",CARD_REGISTER:"REGISTRO TARJETA",CARD_ASSIGNED:"TARJETA ASIGNADA"},w=[{name:i.CARD_VALIDATION,step:1,content:f},{name:i.USER_REGISTER,step:2,content:j},{name:i.USER_VALIDATION,step:3,content:C},{name:i.CARD_REGISTER,step:4,content:D},{name:i.CARD_ASSIGNED,step:5,content:v}],p={step:i.CARD_VALIDATION,user:null,card:null,token:null},L=(t,n)=>({...p,setStepAssignRegister:s=>{t(a=>({step:s}),!1,"SET_STEP_ASSIGN")},setUser:s=>{t(a=>({user:s}),!1,"SET_USER_ASSIGN")},setCard:s=>{t(a=>({card:s}),!1,"SET_CARD_ASSIGN")},setToken:s=>{t(a=>({token:s}),!1,"SET_TOKEN_USER_DEMO")},resetState:()=>{t(s=>({...p}),!1,"RESET_CARD_USER_STORE"),localStorage.removeItem("token"),delete g.defaults.headers.common.Authorization}}),O=m(L),y="/app/assets/webp/build-7U6RMn8R.webp",b="/app/assets/webp/build-Z0SsT2Uu.webp";function G(){const t=O(a=>a.step),n=o.useMemo(()=>w.find(a=>a.name===t),[t]);if(!n)return null;const s=n.content;return e.jsx(S,{title:"Registro Tarjetas",children:e.jsx(r,{alignItems:"center",justifyContent:"center",minHeight:"100dvH",children:e.jsxs(r,{px:{xs:0,sm:10,xl:20},width:1,height:1,direction:"row",children:[e.jsxs(r,{width:1,height:1,minHeight:"90vh",maxHeight:"90vH",position:"relative",sx:{overflowY:"auto",overflowX:"hidden"},justifyContent:"space-between",children:[e.jsxs(r,{direction:"row",spacing:1,alignItems:"center",px:{xs:5,sm:0},children:[e.jsx(h,{sx:{width:100}}),e.jsx(d,{fontWeight:"600",variant:"subtitle1",children:"Agilidad en pagos"})]}),e.jsx(c,{flexGrow:1}),e.jsx(r,{flexGrow:1,px:{xs:5,xl:10},children:e.jsx(o.Suspense,{fallback:e.jsx(U,{}),children:e.jsx(I,{children:e.jsx(s,{})})})}),e.jsx(c,{flexGrow:1,children:e.jsxs(r,{spacing:1,children:[e.jsxs(r,{justifyContent:"center",alignItems:"center",direction:"row",spacing:1,children:[e.jsx(T,{fontSize:20}),e.jsx(d,{variant:"caption",children:"ayuda@viabo.com"})]}),(n==null?void 0:n.step)!==5&&e.jsxs(d,{variant:"body2",fontWeight:600,align:"center",sx:{color:"text.secondary"},children:["¡Ya tengo una cuenta!  ",e.jsx(_,{color:"primary",component:x,to:E.login,children:"Acceder."})]})]})})]}),e.jsx(r,{width:1,justifyContent:"center",height:1,flexGrow:1,ml:1,sx:{display:{xs:"none",sm:"none",lg:"flex"}},children:e.jsx(c,{component:A.LazyLoadImage,wrapperClassName:"wrapper",effect:"blur",maxHeight:"90vH",placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"cover"},src:(n==null?void 0:n.step)===1?y:b,borderRadius:4})})]})})})}function U(){return e.jsx(c,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:t=>t.zIndex.modal-1},children:e.jsx(R,{})})}const P=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{i as C,P as R,O as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/FormDemoCardValidation-72n2P1Vr.js","assets/js/vendor-pMbAJ2vN.js","assets/js/index-4lAQqZtp.js","assets/css/build-K0YT2apu.css","assets/js/formik.esm-EswYUHaB.js","assets/js/mui-one-time-password-input.es-1poCvtMI.js","assets/js/index.esm-EW845fRj.js","assets/js/matchTypes-oh7PAwYC.js","assets/js/RegisterCardsRepository-stxda7qM.js","assets/js/formatNumber-MXwvW5Fn.js","assets/js/fade-HpdRXKiE.js","assets/js/transition-Uc7vb3zK.js","assets/js/TextMaxLine-EkO8Go0i.js","assets/js/UploadSingleFile-IYzOW8Uc.js","assets/js/iconBase-qbdG-1ZU.js","assets/js/FormRegisterDemoUserCard-THvBYrPQ.js","assets/js/mui-tel-input.es-B0TASf-x.js","assets/js/FormDemoUserValidation-Sfcwz5vC.js","assets/js/useValidateCode-c7p98OEI.js","assets/js/FormCardRegister-JmxqMR-_.js","assets/js/crypto-8PBvuXzj.js","assets/js/FormSuccessAssignCard-BTHGdRyJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=RegisterCards-Yl8sUMG8.js.map