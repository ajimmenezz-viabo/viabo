import{an as I,ao as T,s as R,r as g,aq as k,ak as N,ah as u,j as s,ar as O,as as P,p as V,c as y,$ as w,S as M,a0 as h,T as x,y as B,B as U,L,e as j}from"./build-46cd7d18.js";import{p as $}from"./build-848f6219.js";import{A as F}from"./build-797bdb1b.js";import{P as b}from"./build-695b9228.js";import{V as z,a as D}from"./build-84878585.js";import{u as W,C as G}from"./build-fe06994c.js";import{C as H}from"./build-e747707c.js";import"./build-7e9da9c4.js";import"./build-e603dc94.js";import"./build-85021bb5.js";function Y(e){return I("MuiCardContent",e)}T("MuiCardContent",["root"]);const q=["className","component"],X=e=>{const{classes:a}=e;return P({root:["root"]},Y,a)},J=R("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),K=g.forwardRef(function(a,c){const t=k({props:a,name:"MuiCardContent"}),{className:o,component:p="div"}=t,l=N(t,q),d=u({},t,{component:p}),C=X(d);return s(J,u({as:p,className:O(C.root,o),ownerState:d,ref:c},l))}),Q=K;function Z(e){return I("MuiCardMedia",e)}T("MuiCardMedia",["root","media","img"]);const ee=["children","className","component","image","src","style"],te=e=>{const{classes:a,isMediaComponent:c,isImageComponent:t}=e;return P({root:["root",c&&"media",t&&"img"]},Z,a)},ae=R("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:c}=e,{isMediaComponent:t,isImageComponent:o}=c;return[a.root,t&&a.media,o&&a.img]}})(({ownerState:e})=>u({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),oe=["video","audio","picture","iframe","img"],re=["picture","img"],se=g.forwardRef(function(a,c){const t=k({props:a,name:"MuiCardMedia"}),{children:o,className:p,component:l="div",image:d,src:C,style:f}=t,S=N(t,ee),m=oe.indexOf(l)!==-1,r=!m&&d?u({backgroundImage:`url("${d}")`},f):f,n=u({},t,{component:l,isMediaComponent:m,isImageComponent:re.indexOf(l)!==-1}),i=te(n);return s(ae,u({className:O(i.root,p),as:l,role:!m&&d?"img":void 0,ref:c,style:r,ownerState:n,src:m?d||C:void 0},S,{children:o}))}),ne=se,A={VIABO_CARD:"Viabo Card",VIABO_PAY:"Viabo Pay"},v=[{type:1,name:A.VIABO_PAY,description:"Herramienta de cobro/pago por pefiles,transparencia transaccional y alertas.",image:z},{type:2,name:A.VIABO_CARD,description:"Tarjeta CARNET X VIABO para control de gastos, pago de compensaciones, cash-back y fidelización por perfiles.",image:D}];ie.propTypes={store:V.shape($)};const E={selected:{backgroundColor:e=>j(e.palette.primary.main,.3),borderColor:e=>e.palette.primary.main},unselected:{backgroundColor:e=>e.palette.background.neutral,borderColor:"transparent"}};function ie({store:e}){const{setActualProcess:a,setLastProcess:c,resume:t}=e,[o,p]=g.useState([]),[l,d]=g.useState(!1),{mutate:C,isLoading:f}=W();g.useEffect(()=>{if(t!=null&&t.services){const r=(t==null?void 0:t.services.map(n=>{var i;return(i=v.find(_=>_.type.toString()===(n==null?void 0:n.type)))==null?void 0:i.name}))||[];p(r)}},[t==null?void 0:t.services]);const S=r=>{if(!o.includes(r.name))return p([...o,r.name]);const n=o.filter(i=>i!==r.name);return p(n)},m=()=>{if(o.length===0)return d(!0);const r=G(t,2),n=v.filter(i=>o.includes(i.name)).map(i=>({type:i.type.toString(),cardNumbers:"0",cardUse:"",personalized:"0"}));return C({...r,services:n},{onSuccess:()=>{a(b.COMMERCE_INFO),c({info:o,name:b.SERVICES_SELECTION}),d(!1)}})};return y(w,{children:[s(M,{direction:"column",width:1,spacing:1,children:y(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s(x,{variant:"h4",color:"textPrimary",align:"center",children:"¡Bienvenido a Viabo!"}),s(x,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Seleccione los servicios para habilitar su ecosistema."})]})}),l&&y(F,{listenElement:l,sx:{mb:5,mx:2,textAlign:"initial"},severity:"warning",children:[s(B,{sx:{textAlign:"initial"},children:"Servicios"}),"Se debe seleccionar al menos un servicio para continuar con el proceso"]}),s(h.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},children:s(U,{my:3,px:2,sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)",xl:"repeat(2, 1fr)"}},children:v.map((r,n)=>{const i=o.includes(r.name);return s(h.div,{whileHover:{scale:1.05},whileTap:{scale:.9},children:y(H,{onClick:()=>S(r),sx:{backgroundColor:"transparent",cursor:"pointer",height:"100%",...i?E.selected:E.unselected},children:[s(ne,{sx:{px:{xs:10,sm:5},pt:3},component:"img",image:r.image}),s(Q,{children:s(x,{variant:"caption",color:"text.disabled",children:r.description})})]})},n)})})}),s(M,{mt:7,px:2,children:s(L,{onClick:m,loading:f,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Guardar"})})]})}export{ie as ServicesSelection,ie as default};
