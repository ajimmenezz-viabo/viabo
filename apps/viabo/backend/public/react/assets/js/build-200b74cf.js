import{r as n,_ as r,c as S,a as A,k as R,l as E,j as s,f as u,B as _,i as I,C as x}from"./index-d80df4f2.js";import{G as T}from"./build-ba2fcc4d.js";import{C as g}from"./build-5f0f07db.js";const C=n.lazy(()=>r(()=>import("./build-714c9c29.js"),["assets/js/build-714c9c29.js","assets/js/index-d80df4f2.js","assets/css/build-f63bc8fe.css","assets/js/build-ac3d2487.js","assets/js/build-81cea643.js","assets/js/build-60aaddb4.js","assets/js/build-d7476723.js","assets/js/build-bee6630b.js","assets/js/build-ce399990.js","assets/js/build-7c868d50.js","assets/js/build-8687dd75.js","assets/js/build-d7f513da.js","assets/js/build-1247f810.js","assets/js/build-58852775.js","assets/js/build-ba2fcc4d.js","assets/js/build-5f0f07db.js"])),D=n.lazy(()=>r(()=>import("./build-46915f96.js"),["assets/js/build-46915f96.js","assets/js/index-d80df4f2.js","assets/css/build-f63bc8fe.css","assets/js/build-ac3d2487.js","assets/js/build-9cf33696.js","assets/js/build-8687dd75.js","assets/js/build-1247f810.js","assets/js/build-81cea643.js","assets/js/build-60aaddb4.js","assets/js/build-d7476723.js","assets/js/build-bee6630b.js","assets/js/build-7c868d50.js","assets/js/build-d7f513da.js","assets/js/build-ff186b5f.js","assets/js/build-ba2fcc4d.js","assets/js/build-5f0f07db.js"])),f=n.lazy(()=>r(()=>import("./build-afe868f9.js"),["assets/js/build-afe868f9.js","assets/js/index-d80df4f2.js","assets/css/build-f63bc8fe.css","assets/js/build-5fd85d05.js","assets/js/build-8d1cf625.js","assets/js/build-8687dd75.js","assets/js/build-ecaf0d13.js","assets/js/build-091f1fac.js","assets/js/build-ba2fcc4d.js","assets/js/build-5f0f07db.js"])),h=n.lazy(()=>r(()=>import("./build-d46c497c.js"),["assets/js/build-d46c497c.js","assets/js/index-d80df4f2.js","assets/css/build-f63bc8fe.css","assets/js/build-ac3d2487.js","assets/js/build-81cea643.js","assets/js/build-a2d34822.js","assets/js/build-60aaddb4.js","assets/js/build-d7476723.js","assets/js/build-bee6630b.js","assets/js/build-ce399990.js","assets/js/build-7c868d50.js","assets/js/build-8687dd75.js","assets/js/build-d7f513da.js","assets/js/build-1247f810.js","assets/js/build-5b8cc769.js","assets/js/build-f9ea7cd2.js","assets/js/build-fa3622be.js","assets/js/build-ba2fcc4d.js","assets/js/build-5bcae247.js","assets/js/build-5f0f07db.js"])),O=n.lazy(()=>r(()=>import("./build-95bcd870.js"),["assets/js/build-95bcd870.js","assets/js/index-d80df4f2.js","assets/css/build-f63bc8fe.css","assets/js/build-091f1fac.js","assets/js/build-ba2fcc4d.js","assets/js/build-5f0f07db.js"])),a={CARD_VALIDATION:"VALIDACION TARJETA",USER_REGISTER:"REGISTRO USUARIO",USER_VALIDATION:"VALIDACIÓN USUARIO",CARD_REGISTER:"REGISTRO TARJETA",CARD_ASSIGNED:"TARJETA ASIGNADA"},j=[{name:a.CARD_VALIDATION,step:1,content:C},{name:a.USER_REGISTER,step:2,content:D},{name:a.USER_VALIDATION,step:3,content:f},{name:a.CARD_REGISTER,step:4,content:h},{name:a.CARD_ASSIGNED,step:5,content:O}],c={step:a.CARD_VALIDATION,user:null,card:null,token:null},G=(e,i)=>({...c,setStepAssignRegister:t=>{e(o=>({step:t}),!1,"SET_STEP_ASSIGN")},setUser:t=>{e(o=>({user:t}),!1,"SET_USER_ASSIGN")},setCard:t=>{e(o=>({card:t}),!1,"SET_CARD_ASSIGN")},setToken:t=>{e(o=>({token:t}),!1,"SET_TOKEN_USER_DEMO")},resetState:()=>{e(t=>({...c}),!1,"RESET_CARD_USER_STORE"),localStorage.removeItem("token"),delete A.defaults.headers.common.Authorization}}),N=S(G);function U(){const e=R(),i=E("up","lg"),t=N(l=>l.step),o=n.useMemo(()=>j.find(l=>l.name===t),[t]);if(!o)return null;const d={[e.breakpoints.down("sm")]:{alignItems:"",justifyContent:""},[e.breakpoints.up("sm")]:{direction:"column",alignItems:"center",justifyContent:"center"},height:"100vh"},p={paddingTop:"24px",height:{xs:1,sm:1,md:"600px",lg:"600px",xl:"700px"},borderRadius:`${i?"1rem":"0"}`,backgroundColor:e.palette.background.paper,boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.25)",display:"flex",flexDirection:"column",[e.breakpoints.down("lg")]:{maxWidth:"none",minHeight:"100%","@media (orientation: landscape)":{maxWidth:"none",minHeight:"100%"}}},m=o.content;return s.jsx(u,{title:"Registro Tarjetas",children:s.jsx(T,{component:"main",container:!0,spacing:0,sx:d,children:s.jsx(g,{sx:p,maxWidth:"xs",elevation:7,component:i?I:_,children:s.jsx(n.Suspense,{fallback:s.jsx(b,{}),children:s.jsx(m,{})})})})})}function b(){return s.jsx(_,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:e=>e.zIndex.modal-1},children:s.jsx(x,{})})}const P=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{a as C,P as R,N as u};