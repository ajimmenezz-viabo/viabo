import{r as n,_ as r,c as S,a as A,k as R,l as E,j as s,f as u,B as _,i as I,C as x}from"./build-66521f42.js";import{G as T}from"./build-e23acde9.js";import{C as g}from"./build-ba5534ae.js";const C=n.lazy(()=>r(()=>import("./build-7b3cfe33.js"),["assets/js/build-7b3cfe33.js","assets/js/build-66521f42.js","assets/css/build-f63bc8fe.css","assets/js/build-1da746e9.js","assets/js/build-47ea8464.js","assets/js/build-d32aea36.js","assets/js/build-c4917e3a.js","assets/js/build-bee6630b.js","assets/js/build-ce399990.js","assets/js/build-7828142a.js","assets/js/build-7e86f35e.js","assets/js/build-6460db89.js","assets/js/build-337ca852.js","assets/js/build-a6d123aa.js","assets/js/build-e23acde9.js","assets/js/build-ba5534ae.js"])),D=n.lazy(()=>r(()=>import("./build-4c3ed1e8.js"),["assets/js/build-4c3ed1e8.js","assets/js/build-66521f42.js","assets/css/build-f63bc8fe.css","assets/js/build-1da746e9.js","assets/js/build-84629e21.js","assets/js/build-7e86f35e.js","assets/js/build-337ca852.js","assets/js/build-47ea8464.js","assets/js/build-d32aea36.js","assets/js/build-c4917e3a.js","assets/js/build-bee6630b.js","assets/js/build-7828142a.js","assets/js/build-6460db89.js","assets/js/build-9f4a53d7.js","assets/js/build-e23acde9.js","assets/js/build-ba5534ae.js"])),f=n.lazy(()=>r(()=>import("./build-3891673c.js"),["assets/js/build-3891673c.js","assets/js/build-66521f42.js","assets/css/build-f63bc8fe.css","assets/js/build-b501f57f.js","assets/js/build-245538c0.js","assets/js/build-7e86f35e.js","assets/js/build-ecaf0d13.js","assets/js/build-091f1fac.js","assets/js/build-e23acde9.js","assets/js/build-ba5534ae.js"])),h=n.lazy(()=>r(()=>import("./build-527544c4.js"),["assets/js/build-527544c4.js","assets/js/build-66521f42.js","assets/css/build-f63bc8fe.css","assets/js/build-1da746e9.js","assets/js/build-47ea8464.js","assets/js/build-300c7970.js","assets/js/build-d32aea36.js","assets/js/build-c4917e3a.js","assets/js/build-bee6630b.js","assets/js/build-ce399990.js","assets/js/build-7828142a.js","assets/js/build-7e86f35e.js","assets/js/build-6460db89.js","assets/js/build-337ca852.js","assets/js/build-c2476d0d.js","assets/js/build-15635981.js","assets/js/build-251e00de.js","assets/js/build-e23acde9.js","assets/js/build-6e1d55ad.js","assets/js/build-ba5534ae.js"])),O=n.lazy(()=>r(()=>import("./build-8468b1dc.js"),["assets/js/build-8468b1dc.js","assets/js/build-66521f42.js","assets/css/build-f63bc8fe.css","assets/js/build-091f1fac.js","assets/js/build-e23acde9.js","assets/js/build-ba5534ae.js"])),a={CARD_VALIDATION:"VALIDACION TARJETA",USER_REGISTER:"REGISTRO USUARIO",USER_VALIDATION:"VALIDACIÓN USUARIO",CARD_REGISTER:"REGISTRO TARJETA",CARD_ASSIGNED:"TARJETA ASIGNADA"},j=[{name:a.CARD_VALIDATION,step:1,content:C},{name:a.USER_REGISTER,step:2,content:D},{name:a.USER_VALIDATION,step:3,content:f},{name:a.CARD_REGISTER,step:4,content:h},{name:a.CARD_ASSIGNED,step:5,content:O}],c={step:a.CARD_VALIDATION,user:null,card:null,token:null},G=(e,i)=>({...c,setStepAssignRegister:t=>{e(o=>({step:t}),!1,"SET_STEP_ASSIGN")},setUser:t=>{e(o=>({user:t}),!1,"SET_USER_ASSIGN")},setCard:t=>{e(o=>({card:t}),!1,"SET_CARD_ASSIGN")},setToken:t=>{e(o=>({token:t}),!1,"SET_TOKEN_USER_DEMO")},resetState:()=>{e(t=>({...c}),!1,"RESET_CARD_USER_STORE"),localStorage.removeItem("token"),delete A.defaults.headers.common.Authorization}}),N=S(G);function U(){const e=R(),i=E("up","lg"),t=N(l=>l.step),o=n.useMemo(()=>j.find(l=>l.name===t),[t]);if(!o)return null;const d={[e.breakpoints.down("sm")]:{alignItems:"",justifyContent:""},[e.breakpoints.up("sm")]:{direction:"column",alignItems:"center",justifyContent:"center"},height:"100vh"},p={paddingTop:"24px",height:{xs:1,sm:1,md:"600px",lg:"600px",xl:"700px"},borderRadius:`${i?"1rem":"0"}`,backgroundColor:e.palette.background.paper,boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.25)",display:"flex",flexDirection:"column",[e.breakpoints.down("lg")]:{maxWidth:"none",minHeight:"100%","@media (orientation: landscape)":{maxWidth:"none",minHeight:"100%"}}},m=o.content;return s.jsx(u,{title:"Registro Tarjetas",children:s.jsx(T,{component:"main",container:!0,spacing:0,sx:d,children:s.jsx(g,{sx:p,maxWidth:"xs",elevation:7,component:i?I:_,children:s.jsx(n.Suspense,{fallback:s.jsx(b,{}),children:s.jsx(m,{})})})})})}function b(){return s.jsx(_,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:e=>e.zIndex.modal-1},children:s.jsx(x,{})})}const P=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{a as C,P as R,N as u};
