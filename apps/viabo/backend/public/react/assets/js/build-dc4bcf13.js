import{r as n,_ as r,c as S,a as A,k as R,l as E,j as s,f as u,B as _,i as I,C as x}from"./index-66295b8b.js";import{G as T}from"./build-beef059d.js";import{C as g}from"./build-66b880ea.js";const C=n.lazy(()=>r(()=>import("./build-e99d26ce.js"),["assets/js/build-e99d26ce.js","assets/js/index-66295b8b.js","assets/css/build-f63bc8fe.css","assets/js/build-32f64c1a.js","assets/js/build-f8e2190b.js","assets/js/build-dbe5ac82.js","assets/js/build-50e962e0.js","assets/js/build-bee6630b.js","assets/js/build-ce399990.js","assets/js/build-10d10d69.js","assets/js/build-43bcfde5.js","assets/js/build-ef958374.js","assets/js/build-100194d5.js","assets/js/build-74860e86.js","assets/js/build-beef059d.js","assets/js/build-66b880ea.js"])),D=n.lazy(()=>r(()=>import("./build-b7c78cf7.js"),["assets/js/build-b7c78cf7.js","assets/js/index-66295b8b.js","assets/css/build-f63bc8fe.css","assets/js/build-32f64c1a.js","assets/js/build-64f71063.js","assets/js/build-43bcfde5.js","assets/js/build-100194d5.js","assets/js/build-f8e2190b.js","assets/js/build-dbe5ac82.js","assets/js/build-50e962e0.js","assets/js/build-bee6630b.js","assets/js/build-10d10d69.js","assets/js/build-ef958374.js","assets/js/build-39508b97.js","assets/js/build-beef059d.js","assets/js/build-66b880ea.js"])),f=n.lazy(()=>r(()=>import("./build-1d6b5add.js"),["assets/js/build-1d6b5add.js","assets/js/index-66295b8b.js","assets/css/build-f63bc8fe.css","assets/js/build-9a586f59.js","assets/js/build-e57852df.js","assets/js/build-43bcfde5.js","assets/js/build-ecaf0d13.js","assets/js/build-091f1fac.js","assets/js/build-beef059d.js","assets/js/build-66b880ea.js"])),h=n.lazy(()=>r(()=>import("./build-753f8dd3.js"),["assets/js/build-753f8dd3.js","assets/js/index-66295b8b.js","assets/css/build-f63bc8fe.css","assets/js/build-32f64c1a.js","assets/js/build-f8e2190b.js","assets/js/build-8b48bdca.js","assets/js/build-dbe5ac82.js","assets/js/build-50e962e0.js","assets/js/build-bee6630b.js","assets/js/build-ce399990.js","assets/js/build-10d10d69.js","assets/js/build-43bcfde5.js","assets/js/build-ef958374.js","assets/js/build-100194d5.js","assets/js/build-2b44d82c.js","assets/js/build-bd5e0c0c.js","assets/js/build-f6beeddc.js","assets/js/build-beef059d.js","assets/js/build-b5fa9823.js","assets/js/build-66b880ea.js"])),O=n.lazy(()=>r(()=>import("./build-915ba272.js"),["assets/js/build-915ba272.js","assets/js/index-66295b8b.js","assets/css/build-f63bc8fe.css","assets/js/build-091f1fac.js","assets/js/build-beef059d.js","assets/js/build-66b880ea.js"])),a={CARD_VALIDATION:"VALIDACION TARJETA",USER_REGISTER:"REGISTRO USUARIO",USER_VALIDATION:"VALIDACIÓN USUARIO",CARD_REGISTER:"REGISTRO TARJETA",CARD_ASSIGNED:"TARJETA ASIGNADA"},j=[{name:a.CARD_VALIDATION,step:1,content:C},{name:a.USER_REGISTER,step:2,content:D},{name:a.USER_VALIDATION,step:3,content:f},{name:a.CARD_REGISTER,step:4,content:h},{name:a.CARD_ASSIGNED,step:5,content:O}],c={step:a.CARD_VALIDATION,user:null,card:null,token:null},G=(e,i)=>({...c,setStepAssignRegister:t=>{e(o=>({step:t}),!1,"SET_STEP_ASSIGN")},setUser:t=>{e(o=>({user:t}),!1,"SET_USER_ASSIGN")},setCard:t=>{e(o=>({card:t}),!1,"SET_CARD_ASSIGN")},setToken:t=>{e(o=>({token:t}),!1,"SET_TOKEN_USER_DEMO")},resetState:()=>{e(t=>({...c}),!1,"RESET_CARD_USER_STORE"),localStorage.removeItem("token"),delete A.defaults.headers.common.Authorization}}),N=S(G);function U(){const e=R(),i=E("up","lg"),t=N(l=>l.step),o=n.useMemo(()=>j.find(l=>l.name===t),[t]);if(!o)return null;const d={[e.breakpoints.down("sm")]:{alignItems:"",justifyContent:""},[e.breakpoints.up("sm")]:{direction:"column",alignItems:"center",justifyContent:"center"},height:"100vh"},p={paddingTop:"24px",height:{xs:1,sm:1,md:"600px",lg:"600px",xl:"700px"},borderRadius:`${i?"1rem":"0"}`,backgroundColor:e.palette.background.paper,boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.25)",display:"flex",flexDirection:"column",[e.breakpoints.down("lg")]:{maxWidth:"none",minHeight:"100%","@media (orientation: landscape)":{maxWidth:"none",minHeight:"100%"}}},m=o.content;return s.jsx(u,{title:"Registro Tarjetas",children:s.jsx(T,{component:"main",container:!0,spacing:0,sx:d,children:s.jsx(g,{sx:p,maxWidth:"xs",elevation:7,component:i?I:_,children:s.jsx(n.Suspense,{fallback:s.jsx(b,{}),children:s.jsx(m,{})})})})})}function b(){return s.jsx(_,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:e=>e.zIndex.modal-1},children:s.jsx(x,{})})}const P=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{a as C,P as R,N as u};
