import{r as n,_ as r,c as S,a as A,k as R,l as E,j as s,f as u,B as _,i as I,C as x}from"./index-07bc056d.js";import{G as T}from"./build-d6b566fb.js";import{C as g}from"./build-d9cee615.js";const C=n.lazy(()=>r(()=>import("./build-bd0481e5.js"),["assets/js/build-bd0481e5.js","assets/js/index-07bc056d.js","assets/css/build-f63bc8fe.css","assets/js/build-3c444f8f.js","assets/js/build-f6a3a480.js","assets/js/build-1b568532.js","assets/js/build-8ac830c6.js","assets/js/build-bee6630b.js","assets/js/build-ce399990.js","assets/js/build-61a353d3.js","assets/js/build-d3679b96.js","assets/js/build-92a37797.js","assets/js/build-593470b2.js","assets/js/build-040390e9.js","assets/js/build-d6b566fb.js","assets/js/build-d9cee615.js"])),D=n.lazy(()=>r(()=>import("./build-722d6d64.js"),["assets/js/build-722d6d64.js","assets/js/index-07bc056d.js","assets/css/build-f63bc8fe.css","assets/js/build-3c444f8f.js","assets/js/build-90baef54.js","assets/js/build-d3679b96.js","assets/js/build-593470b2.js","assets/js/build-f6a3a480.js","assets/js/build-1b568532.js","assets/js/build-8ac830c6.js","assets/js/build-bee6630b.js","assets/js/build-61a353d3.js","assets/js/build-92a37797.js","assets/js/build-3686c4bb.js","assets/js/build-d6b566fb.js","assets/js/build-d9cee615.js"])),f=n.lazy(()=>r(()=>import("./build-52c7f581.js"),["assets/js/build-52c7f581.js","assets/js/index-07bc056d.js","assets/css/build-f63bc8fe.css","assets/js/build-7832bf4e.js","assets/js/build-1c8b75c8.js","assets/js/build-d3679b96.js","assets/js/build-ecaf0d13.js","assets/js/build-091f1fac.js","assets/js/build-d6b566fb.js","assets/js/build-d9cee615.js"])),h=n.lazy(()=>r(()=>import("./build-51937c17.js"),["assets/js/build-51937c17.js","assets/js/index-07bc056d.js","assets/css/build-f63bc8fe.css","assets/js/build-3c444f8f.js","assets/js/build-f6a3a480.js","assets/js/build-bbb6c732.js","assets/js/build-1b568532.js","assets/js/build-8ac830c6.js","assets/js/build-bee6630b.js","assets/js/build-ce399990.js","assets/js/build-61a353d3.js","assets/js/build-d3679b96.js","assets/js/build-92a37797.js","assets/js/build-593470b2.js","assets/js/build-fc4bfd81.js","assets/js/build-0fbecc05.js","assets/js/build-b9b4650b.js","assets/js/build-d6b566fb.js","assets/js/build-00b2c150.js","assets/js/build-d9cee615.js"])),O=n.lazy(()=>r(()=>import("./build-3fa5dcc2.js"),["assets/js/build-3fa5dcc2.js","assets/js/index-07bc056d.js","assets/css/build-f63bc8fe.css","assets/js/build-091f1fac.js","assets/js/build-d6b566fb.js","assets/js/build-d9cee615.js"])),a={CARD_VALIDATION:"VALIDACION TARJETA",USER_REGISTER:"REGISTRO USUARIO",USER_VALIDATION:"VALIDACIÓN USUARIO",CARD_REGISTER:"REGISTRO TARJETA",CARD_ASSIGNED:"TARJETA ASIGNADA"},j=[{name:a.CARD_VALIDATION,step:1,content:C},{name:a.USER_REGISTER,step:2,content:D},{name:a.USER_VALIDATION,step:3,content:f},{name:a.CARD_REGISTER,step:4,content:h},{name:a.CARD_ASSIGNED,step:5,content:O}],c={step:a.CARD_VALIDATION,user:null,card:null,token:null},G=(e,i)=>({...c,setStepAssignRegister:t=>{e(o=>({step:t}),!1,"SET_STEP_ASSIGN")},setUser:t=>{e(o=>({user:t}),!1,"SET_USER_ASSIGN")},setCard:t=>{e(o=>({card:t}),!1,"SET_CARD_ASSIGN")},setToken:t=>{e(o=>({token:t}),!1,"SET_TOKEN_USER_DEMO")},resetState:()=>{e(t=>({...c}),!1,"RESET_CARD_USER_STORE"),localStorage.removeItem("token"),delete A.defaults.headers.common.Authorization}}),N=S(G);function U(){const e=R(),i=E("up","lg"),t=N(l=>l.step),o=n.useMemo(()=>j.find(l=>l.name===t),[t]);if(!o)return null;const d={[e.breakpoints.down("sm")]:{alignItems:"",justifyContent:""},[e.breakpoints.up("sm")]:{direction:"column",alignItems:"center",justifyContent:"center"},height:"100vh"},p={paddingTop:"24px",height:{xs:1,sm:1,md:"600px",lg:"600px",xl:"700px"},borderRadius:`${i?"1rem":"0"}`,backgroundColor:e.palette.background.paper,boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.25)",display:"flex",flexDirection:"column",[e.breakpoints.down("lg")]:{maxWidth:"none",minHeight:"100%","@media (orientation: landscape)":{maxWidth:"none",minHeight:"100%"}}},m=o.content;return s.jsx(u,{title:"Registro Tarjetas",children:s.jsx(T,{component:"main",container:!0,spacing:0,sx:d,children:s.jsx(g,{sx:p,maxWidth:"xs",elevation:7,component:i?I:_,children:s.jsx(n.Suspense,{fallback:s.jsx(b,{}),children:s.jsx(m,{})})})})})}function b(){return s.jsx(_,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:e=>e.zIndex.modal-1},children:s.jsx(x,{})})}const P=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{a as C,P as R,N as u};
