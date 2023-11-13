import{r as o,_ as l,aj as _,ai as x,j as e,P as A,S as r,F as m,T as d,B as c,M as u,i as R,cV as g,l as S,X as h}from"./index-5b9abb5d.js";import{G as I}from"./build-1c3a34e7.js";import{L as E}from"./build-dfaaa189.js";function f(t){return I({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(t)}const T=o.lazy(()=>l(()=>import("./build-784ce58e.js"),["assets/js/build-784ce58e.js","assets/js/index-5b9abb5d.js","assets/css/build-a4b698a0.css","assets/js/build-475a8c0d.js","assets/js/build-22efc8c6.js","assets/js/build-cd679c67.js","assets/js/build-a4831788.js","assets/js/build-52be6f5f.js","assets/js/build-102bf6ff.js","assets/js/build-881b936d.js","assets/js/build-559b3bfe.js","assets/js/build-e39b555e.js","assets/js/build-bee6630b.js","assets/js/build-e33dd52a.js","assets/js/build-62079204.js","assets/js/build-6bc3e71f.js","assets/js/build-dfaaa189.js","assets/js/build-4687a6d9.js","assets/js/build-71e28a4a.js","assets/js/build-3f722807.js","assets/js/build-1c3a34e7.js"])),j=o.lazy(()=>l(()=>import("./build-34a3e6f6.js"),["assets/js/build-34a3e6f6.js","assets/js/index-5b9abb5d.js","assets/css/build-a4b698a0.css","assets/js/build-475a8c0d.js","assets/js/build-2ec9c9b5.js","assets/js/build-cd679c67.js","assets/js/build-a4831788.js","assets/js/build-71e28a4a.js","assets/js/build-52be6f5f.js","assets/js/build-881b936d.js","assets/js/build-559b3bfe.js","assets/js/build-e33dd52a.js","assets/js/build-62079204.js","assets/js/build-6bc3e71f.js","assets/js/build-e39b555e.js","assets/js/build-bee6630b.js","assets/js/build-dfaaa189.js","assets/js/build-4687a6d9.js","assets/js/build-f8e9536d.js","assets/js/build-90852445.js","assets/js/build-1c3a34e7.js"])),C=o.lazy(()=>l(()=>import("./build-6e55f01b.js"),["assets/js/build-6e55f01b.js","assets/js/index-5b9abb5d.js","assets/css/build-a4b698a0.css","assets/js/build-22efc8c6.js","assets/js/build-cd679c67.js","assets/js/build-a4831788.js","assets/js/build-73aff62d.js","assets/js/build-ae3b7788.js","assets/js/build-102bf6ff.js","assets/js/build-dfaaa189.js","assets/js/build-1c3a34e7.js"])),D=o.lazy(()=>l(()=>import("./build-7dae2e7d.js"),["assets/js/build-7dae2e7d.js","assets/js/index-5b9abb5d.js","assets/css/build-a4b698a0.css","assets/js/build-475a8c0d.js","assets/js/build-52be6f5f.js","assets/js/build-0307e86f.js","assets/js/build-cd679c67.js","assets/js/build-a4831788.js","assets/js/build-71e28a4a.js","assets/js/build-559b3bfe.js","assets/js/build-881b936d.js","assets/js/build-e33dd52a.js","assets/js/build-62079204.js","assets/js/build-6bc3e71f.js","assets/js/build-e39b555e.js","assets/js/build-bee6630b.js","assets/js/build-dfaaa189.js","assets/js/build-4687a6d9.js","assets/js/build-3f74d6f1.js","assets/js/build-df269ee7.js","assets/js/build-1c3a34e7.js"])),v=o.lazy(()=>l(()=>import("./build-34b09577.js"),["assets/js/build-34b09577.js","assets/js/index-5b9abb5d.js","assets/css/build-a4b698a0.css","assets/js/build-1c3a34e7.js","assets/js/build-dfaaa189.js"])),i={CARD_VALIDATION:"VALIDACION TARJETA",USER_REGISTER:"REGISTRO USUARIO",USER_VALIDATION:"VALIDACIÓN USUARIO",CARD_REGISTER:"REGISTRO TARJETA",CARD_ASSIGNED:"TARJETA ASIGNADA"},w=[{name:i.CARD_VALIDATION,step:1,content:T},{name:i.USER_REGISTER,step:2,content:j},{name:i.USER_VALIDATION,step:3,content:C},{name:i.CARD_REGISTER,step:4,content:D},{name:i.CARD_ASSIGNED,step:5,content:v}],p={step:i.CARD_VALIDATION,user:null,card:null,token:null},L=(t,n)=>({...p,setStepAssignRegister:s=>{t(a=>({step:s}),!1,"SET_STEP_ASSIGN")},setUser:s=>{t(a=>({user:s}),!1,"SET_USER_ASSIGN")},setCard:s=>{t(a=>({card:s}),!1,"SET_CARD_ASSIGN")},setToken:s=>{t(a=>({token:s}),!1,"SET_TOKEN_USER_DEMO")},resetState:()=>{t(s=>({...p}),!1,"RESET_CARD_USER_STORE"),localStorage.removeItem("token"),delete x.defaults.headers.common.Authorization}}),O=_(L),b="/app/assets/webp/build-7334240c.webp",y="/app/assets/webp/build-f1d96b82.webp";function G(){const t=O(a=>a.step),n=o.useMemo(()=>w.find(a=>a.name===t),[t]);if(!n)return null;const s=n.content;return e.jsx(A,{title:"Registro Tarjetas",children:e.jsx(r,{alignItems:"center",justifyContent:"center",minHeight:"100vH",children:e.jsxs(r,{px:{xs:0,sm:10,xl:20},width:1,height:1,direction:"row",children:[e.jsxs(r,{width:1,height:1,minHeight:"90vh",maxHeight:"90vH",position:"relative",sx:{overflowY:"auto",overflowX:"hidden"},justifyContent:"space-between",children:[e.jsxs(r,{direction:"row",spacing:1,alignItems:"center",px:{xs:5,sm:0},children:[e.jsx(m,{sx:{width:100}}),e.jsx(d,{fontWeight:"600",variant:"subtitle1",children:"Agilidad en pagos"})]}),e.jsx(c,{flexGrow:1}),e.jsx(r,{flexGrow:1,px:{xs:5,xl:10},children:e.jsx(o.Suspense,{fallback:e.jsx(N,{}),children:e.jsx(u,{children:e.jsx(s,{})})})}),e.jsx(c,{flexGrow:1,children:e.jsxs(r,{spacing:1,children:[e.jsxs(r,{justifyContent:"center",alignItems:"center",direction:"row",spacing:1,children:[e.jsx(f,{fontSize:20}),e.jsx(d,{variant:"caption",children:"ayuda@viabo.com"})]}),(n==null?void 0:n.step)!==5&&e.jsxs(d,{variant:"body2",fontWeight:600,align:"center",sx:{color:"text.secondary"},children:["¡Ya tengo una cuenta!  ",e.jsx(E,{color:"primary",component:R,to:g.login,children:"Acceder."})]})]})})]}),e.jsx(r,{width:1,justifyContent:"center",height:1,flexGrow:1,ml:1,sx:{display:{xs:"none",sm:"none",lg:"flex"}},children:e.jsx(c,{component:S.LazyLoadImage,wrapperClassName:"wrapper",effect:"blur",maxHeight:"90vH",placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"cover"},src:(n==null?void 0:n.step)===1?b:y,borderRadius:4})})]})})})}function N(){return e.jsx(c,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:t=>t.zIndex.modal-1},children:e.jsx(h,{})})}const k=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{i as C,k as R,O as u};