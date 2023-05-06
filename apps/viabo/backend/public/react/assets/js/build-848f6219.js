import{a as c,p as n,_ as d,u as y,b as N,g as A,r as g,j as r,B as f,c as I,S as L,d as w,C as M,s as S,e as D,P as z,f as G,h as V}from"./build-46cd7d18.js";import{c as j,d as B}from"./build-7e9da9c4.js";import{P as a,s as U}from"./build-695b9228.js";import{I as F}from"./build-e603dc94.js";import{G as b}from"./build-85021bb5.js";const H={TOKEN_COMMERCE:"tokenCommerce",VALIDATION_CODE:"validationCode",COMMERCE_PROCESS:"commerceProcess"},q=e=>{const{id:s,fiscalPersonType:t,taxName:o,tradeName:m,rfc:u,employees:E,branchOffices:P,paymentAPI:h,registerStep:_,legalRepresentative:R,services:p,pointSaleTerminal:C,documents:i}=e,l=p==null?void 0:p.find(v=>v.type==="2"),T=(l==null?void 0:l.cardNumbers)||0,O=(l==null?void 0:l.cardUse)||"",k=(l==null?void 0:l.personalized)==="1"||!1;return{id:s,idUser:R,services:p,fiscalTypePerson:t,fiscalName:o,rfc:u,commercialName:m,employeesNumber:Number(E),branchesNumber:Number(P),tpvsNumber:Number(C),apiRequired:h==="1",cardsNumber:Number(T),cardsUse:O,customCardsRequired:k,files:i,step:Number(_)}},ne=async e=>{const{data:s}=await c.post("/api/security/legalRepresentative/new",e);return s},ce=async e=>{const{data:s}=await c.get("/api/legal-representative/verificate",{headers:{Username:`${e}`}});return s},ie=async()=>{const{data:e}=await c.post("/api/code/verification/resend");return e},le=async e=>{const{data:s}=await c.post("/api/code/verificate",e);return s},$=async()=>{const{data:e}=await c.get("/api/commerce/legal-representative");return q(e)},me=async e=>{const{data:s}=await c.put("/api/commerce/update",e);return s},de=async e=>{const{data:s}=await c.post("/api/commerce/documents/create",e);return s},pe=async e=>{const{data:s}=await c.post("/api/commerce/documents/delete",e);return s},ue={actualProcess:n.string,token:n.string,resume:n.object,lastProcess:n.shape({name:n.any,info:n.any}),getComponent:n.func,getBackProcess:n.func,setLastProcess:n.func,setActualProcess:n.func,setToken:n.func,setResume:n.func},K=(e,s)=>({actualProcess:a.REGISTER,token:null,resume:null,lastProcess:{name:null,info:null},processList:[{name:a.REGISTER,component:()=>d(()=>import("./build-5abe6c6d.js"),["assets/js/build-5abe6c6d.js","assets/js/build-46cd7d18.js","assets/css/build-bdca15e6.css","assets/js/build-0598f50a.js","assets/js/build-4f526a47.js","assets/js/build-695b9228.js","assets/js/build-94f2d634.js","assets/js/build-866367d6.js","assets/js/build-797bdb1b.js","assets/js/build-bdcb94e4.js","assets/js/build-e854ff17.js","assets/js/build-0463c888.js","assets/js/build-7e9da9c4.js","assets/js/build-e603dc94.js","assets/js/build-85021bb5.js"]),backProcess:a.REGISTER},{name:a.CONTINUE_PROCESS,component:()=>d(()=>import("./build-d0aa55c5.js"),["assets/js/build-d0aa55c5.js","assets/js/build-46cd7d18.js","assets/css/build-bdca15e6.css","assets/js/build-0598f50a.js","assets/js/build-4f526a47.js","assets/js/build-695b9228.js","assets/js/build-7fbedeae.js","assets/js/build-94f2d634.js","assets/js/build-866367d6.js","assets/js/build-bdcb94e4.js","assets/js/build-7e9da9c4.js","assets/js/build-e603dc94.js","assets/js/build-85021bb5.js"]),backProcess:a.REGISTER},{name:a.VALIDATION_CODE,component:()=>d(()=>import("./build-31cf7c78.js"),["assets/js/build-31cf7c78.js","assets/js/build-46cd7d18.js","assets/css/build-bdca15e6.css","assets/js/build-94f2d634.js","assets/js/build-ecaf0d13.js","assets/js/build-695b9228.js","assets/js/build-7fbedeae.js","assets/js/build-7e9da9c4.js","assets/js/build-e603dc94.js","assets/js/build-85021bb5.js"]),backProcess:a.REGISTER},{name:a.SERVICES_SELECTION,component:()=>d(()=>import("./build-8ce0563b.js"),["assets/js/build-8ce0563b.js","assets/js/build-46cd7d18.js","assets/css/build-bdca15e6.css","assets/js/build-797bdb1b.js","assets/js/build-695b9228.js","assets/js/build-84878585.js","assets/js/build-fe06994c.js","assets/js/build-e747707c.js","assets/js/build-7e9da9c4.js","assets/js/build-e603dc94.js","assets/js/build-85021bb5.js"]),backProcess:a.REGISTER},{name:a.COMMERCE_INFO,component:()=>d(()=>import("./build-061a0beb.js"),["assets/js/build-061a0beb.js","assets/js/build-46cd7d18.js","assets/css/build-bdca15e6.css","assets/js/build-0598f50a.js","assets/js/build-4f526a47.js","assets/js/build-695b9228.js","assets/js/build-fe06994c.js","assets/js/build-94f2d634.js","assets/js/build-0463c888.js","assets/js/build-7e9da9c4.js","assets/js/build-e603dc94.js","assets/js/build-85021bb5.js"]),backProcess:a.SERVICES_SELECTION},{name:a.COMMERCE_DOCUMENTATION,component:()=>d(()=>import("./build-a795ddf7.js"),["assets/js/build-a795ddf7.js","assets/js/build-46cd7d18.js","assets/css/build-bdca15e6.css","assets/js/build-0598f50a.js","assets/js/build-695b9228.js","assets/js/build-7ac1f7b5.js","assets/js/build-fe06994c.js","assets/js/build-85021bb5.js","assets/js/build-e747707c.js","assets/js/build-7e9da9c4.js","assets/js/build-e603dc94.js"]),backProcess:a.COMMERCE_INFO},{name:a.FINISHED_PROCESS,component:()=>d(()=>import("./build-7998487e.js"),["assets/js/build-7998487e.js","assets/js/build-46cd7d18.js","assets/css/build-bdca15e6.css","assets/js/build-695b9228.js","assets/js/build-7e9da9c4.js","assets/js/build-e603dc94.js","assets/js/build-85021bb5.js"]),backProcess:a.COMMERCE_DOCUMENTATION}],getComponent:()=>{const{processList:t,actualProcess:o}=s(),m=()=>d(()=>import("./build-31cf7c78.js"),["assets/js/build-31cf7c78.js","assets/js/build-46cd7d18.js","assets/css/build-bdca15e6.css","assets/js/build-94f2d634.js","assets/js/build-ecaf0d13.js","assets/js/build-695b9228.js","assets/js/build-7fbedeae.js","assets/js/build-7e9da9c4.js","assets/js/build-e603dc94.js","assets/js/build-85021bb5.js"]);return t.find(u=>u.name===o).component??m},getBackProcess:()=>{const{processList:t,actualProcess:o}=s();return t.find(m=>m.name===o).backProcess??a.REGISTER},setLastProcess:t=>{e(o=>({lastProcess:{name:(t==null?void 0:t.name)||null,info:(t==null?void 0:t.info)||null}}))},setActualProcess:t=>{e(o=>({actualProcess:t})),t===a.REGISTER&&(localStorage.removeItem("token"),delete c.defaults.headers.common.Authorization)},setToken:t=>{e(o=>({token:t})),localStorage.setItem("token",t),c.defaults.headers.common.Authorization=`Bearer ${t}`},setResume:t=>{e(o=>({resume:t}))}}),x=j(B(K)),W=(e={})=>{const{enqueueSnackbar:s}=y();return N([H.COMMERCE_PROCESS],$,{staleTime:60*5e3,onError:t=>{const o=A(t,"😟 Error al obtener el proceso del comercio");s(o,{variant:"error",autoHideDuration:5e3})},...e})},Q=()=>{const e=x(i=>i.getComponent),s=x(i=>i.getBackProcess),t=x(i=>i,U),{actualProcess:o,setToken:m,setActualProcess:u,setResume:E,token:P,resume:h}=t,{data:_,isSuccess:R}=W({enabled:!!P});g.useEffect(()=>{E(_&&R?_:null)},[_,R]),g.useEffect(()=>{o===a.REGISTER&&(m(null),E(null))},[o,m]);const p=()=>{const i=s();u(i)},C=g.useMemo(()=>g.lazy(e()),[o]);return r(f,{sx:{height:{xs:"100%",sm:"100%",md:"100%",lg:"100vh",xl:"calc(100vh - 100px)"},minHeight:{xs:"100vH",sm:"100vh",md:"100vh",lg:"100vh",xl:"600px"},display:"flex",flexDirection:"column",overflow:"auto",zIndex:1},className:"animate__animated animate__fadeIn",children:I(g.Suspense,{fallback:r(Y,{}),children:[o!==a.REGISTER&&r(L,{m:5,mb:0,direction:"row",children:r(w,{onClick:p,children:"< Regresar"})}),r(f,{m:5,height:1,children:r(C,{store:t})})]})})},Y=()=>r(f,{sx:{position:"relative",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(1px)",zIndex:e=>e.zIndex.modal-1},children:r(M,{})}),J=S("div")(({theme:e})=>({top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:D(e.palette.grey[900],.1)})),X=S("div")(({theme:e})=>({display:"flex",maxWidth:e.breakpoints.values.lg,[e.breakpoints.down("xl")]:{maxWidth:"100%"},margin:"0 auto",height:"100%",overflow:"auto",zIndex:"100000",justifyContent:"center",alignItems:"center",backgroundColor:e.palette.background.paper,borderRadius:"0px",[e.breakpoints.up("xl")]:{borderRadius:"16px",boxShadow:"0 0 60px 10px rgb(85 44 44 / 20%)"}})),Z=S("div")(({theme:e})=>({padding:"0px",height:"100%",[e.breakpoints.up("sm")]:{padding:"0px"},[e.breakpoints.up("md")]:{padding:"0px"},[e.breakpoints.up("lg")]:{padding:"0px"},[e.breakpoints.up("xl")]:{padding:"100px"}}));function ee(){return r(z,{title:"Registro Comercio",children:r(Z,{className:"animate__animated animated__fadeIn",children:r(X,{children:I(b,{container:!0,spacing:0,component:"main",justifyContent:"center",children:[r(b,{item:!0,elevation:0,xs:!1,sm:!1,md:6,children:I(f,{sx:{position:"relative",display:"flex",height:1,backgroundColor:"#161C24"},children:[r(J,{}),r(f,{component:G.LazyLoadImage,wrapperClassName:"wrapper",effect:"blur",placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"cover"},src:F})]})}),r(b,{item:!0,xs:12,sm:12,md:6,alignItems:"center",justify:"center",component:V,elevation:10,sx:{overflow:"auto",borderRadius:{md:0,xl:"0px 16px 16px 0px"}},children:r(Q,{})})]})})})})}const Ee=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{H as C,me as a,Ee as b,ne as c,pe as d,ce as g,ue as p,ie as s,de as u,le as v};
