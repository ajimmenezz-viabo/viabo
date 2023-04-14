import{L as I,N as R,w as T,e as g,V as N,W as O,R as u,m as s,X as P,Y as _,j as V,o as y,aa as w,q as v,ae as h,T as b,B,x as L}from"./index-9b2f5530.js";import{p as U,P as M}from"./CommerceRegister-d7b49ab1.js";import{A as j,a as $}from"./AlertWithFocus-8f348d18.js";import{u as F,C as W}from"./commerceUpdateAdapter-78a9c353.js";import{C as z}from"./Card-38d37a02.js";import{L as D}from"./LoadingButton-52dc257f.js";import"./integracion-tecnologica-cec87d95.js";import"./Alert-4174d822.js";import"./useMutation-50e01840.js";function Y(e){return I("MuiCardContent",e)}R("MuiCardContent",["root"]);const G=["className","component"],H=e=>{const{classes:o}=e;return _({root:["root"]},Y,o)},X=T("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),q=g.forwardRef(function(o,c){const t=N({props:o,name:"MuiCardContent"}),{className:a,component:p="div"}=t,l=O(t,G),d=u({},t,{component:p}),C=H(d);return s(X,u({as:p,className:P(C.root,a),ownerState:d,ref:c},l))}),J=q;function K(e){return I("MuiCardMedia",e)}R("MuiCardMedia",["root","media","img"]);const Q=["children","className","component","image","src","style"],Z=e=>{const{classes:o,isMediaComponent:c,isImageComponent:t}=e;return _({root:["root",c&&"media",t&&"img"]},K,o)},ee=T("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:c}=e,{isMediaComponent:t,isImageComponent:a}=c;return[o.root,t&&o.media,a&&o.img]}})(({ownerState:e})=>u({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),te=["video","audio","picture","iframe","img"],oe=["picture","img"],ae=g.forwardRef(function(o,c){const t=N({props:o,name:"MuiCardMedia"}),{children:a,className:p,component:l="div",image:d,src:C,style:f}=t,S=O(t,Q),m=te.indexOf(l)!==-1,r=!m&&d?u({backgroundImage:`url("${d}")`},f):f,n=u({},t,{component:l,isMediaComponent:m,isImageComponent:oe.indexOf(l)!==-1}),i=Z(n);return s(ee,u({className:P(i.root,p),as:l,role:!m&&d?"img":void 0,ref:c,style:r,ownerState:n,src:m?d||C:void 0},S,{children:a}))}),re=ae,se="/react/assets/img/viabo-card-be5013bb.png",ne="/react/assets/img/viabo-pay-c2518fc8.png",A={VIABO_CARD:"Viabo Card",VIABO_PAY:"Viabo Pay"},x=[{type:1,name:A.VIABO_PAY,description:"Herramienta de cobro/pago por pefiles,transparencia transaccional y alertas.",image:ne},{type:2,name:A.VIABO_CARD,description:"Tarjeta CARNET X VIABO para control de gastos, pago de compensaciones, cash-back y fidelización por perfiles.",image:se}];ie.propTypes={store:V.shape(U)};const E={selected:{backgroundColor:e=>L(e.palette.primary.main,.3),borderColor:e=>e.palette.primary.main},unselected:{backgroundColor:e=>e.palette.background.neutral,borderColor:"transparent"}};function ie({store:e}){const{setActualProcess:o,setLastProcess:c,resume:t}=e,[a,p]=g.useState([]),[l,d]=g.useState(!1),{mutate:C,isLoading:f}=F();g.useEffect(()=>{if(t!=null&&t.services){const r=(t==null?void 0:t.services.map(n=>{var i;return(i=x.find(k=>k.type.toString()===(n==null?void 0:n.type)))==null?void 0:i.name}))||[];p(r)}},[t==null?void 0:t.services]);const S=r=>{if(!a.includes(r.name))return p([...a,r.name]);const n=a.filter(i=>i!==r.name);return p(n)},m=()=>{if(a.length===0)return d(!0);const r=W(t,2),n=x.filter(i=>a.includes(i.name)).map(i=>({type:i.type.toString(),cardNumbers:"0",cardUse:"",personalized:"0"}));return C({...r,services:n},{onSuccess:()=>{o(M.COMMERCE_INFO),c({info:a,name:M.SERVICES_SELECTION}),d(!1)}})};return y(w,{children:[s(v,{direction:"column",width:1,spacing:1,children:y(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s(b,{variant:"h4",color:"textPrimary",align:"center",children:"¡Bienvenido a Viabo!"}),s(b,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Seleccione los servicios para habilitar su ecosistema."})]})}),l&&y(j,{listenElement:l,sx:{mb:5,mx:2,textAlign:"initial"},severity:"warning",children:[s($,{sx:{textAlign:"initial"},children:"Servicios"}),"Se debe seleccionar al menos un servicio para continuar con el proceso"]}),s(h.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},children:s(B,{my:3,px:2,sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)",xl:"repeat(2, 1fr)"}},children:x.map((r,n)=>{const i=a.includes(r.name);return s(h.div,{whileHover:{scale:1.05},whileTap:{scale:.9},children:y(z,{onClick:()=>S(r),sx:{backgroundColor:"transparent",cursor:"pointer",height:"100%",...i?E.selected:E.unselected},children:[s(re,{sx:{px:{xs:10,sm:5},pt:3},component:"img",image:r.image}),s(J,{children:s(b,{variant:"caption",color:"text.disabled",children:r.description})})]})},n)})})}),s(v,{mt:7,px:2,children:s(D,{onClick:m,loading:f,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Guardar"})})]})}export{ie as ServicesSelection,ie as default};