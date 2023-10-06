import{y as Y,j as e,B as $,V as U,I as W,ag as y,k as X,a as J,a0 as M,g as E,b as Z,z as k,r as h,d as R,aO as F,aP as ee,aQ as L,aR as te,a3 as se,S as u,T as g,au as ae,L as K,aS as re,aT as ne,aU as oe,H as ie,aV as P,X as de,P as le,a5 as ce,aM as ue,aN as me,p as pe,aD as xe,aA as ge}from"./index-940cbd95.js";import{u as he}from"./build-4fd34fc0.js";import{c as N,a as w}from"./build-a69c6c4b.js";import{g as Ce}from"./build-7907bfce.js";import{c as G}from"./build-ecaf0d13.js";import{C as je}from"./build-978cc126.js";import{D as fe}from"./build-e43ddf1a.js";import{F as Se,M as O}from"./build-61d1d1dd.js";import{R as H}from"./build-82e20c96.js";import{R as V}from"./build-34d25871.js";import{a as ve}from"./build-5bb2e343.js";import{I as B}from"./build-28bfabc9.js";import{C as Ae}from"./build-f1c086f0.js";import{V as be}from"./build-c169d49c.js";import{D as Te}from"./build-5b4a3568.js";import{A as ye}from"./build-b5d9a10e.js";import{W as Ie}from"./build-cf3163a6.js";import{a as Ee,u as b}from"./build-26c15b0d.js";import"./build-3c6e45d2.js";import{v as q,A as ke}from"./build-5c0b3e2f.js";import{a as De,b as _e,H as we,A as Re}from"./build-b3d80aba.js";import{M as Me}from"./build-f2699fae.js";import{A as Fe,F as Le,a as Pe}from"./build-58801573.js";import{C as Ne}from"./build-cf3057a2.js";import{T as Oe,a as z}from"./build-33b2b583.js";import{A as He}from"./build-1bc14366.js";const Ve=Y([e.jsx("path",{d:"M15.36 9H3.64l-.6 3h12.92z",opacity:".3"},"0"),e.jsx("path",{d:"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z"},"1"),e.jsx("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"2")],"AddBusinessTwoTone"),Be=s=>{const a=s.map(t=>{var n;return{id:t==null?void 0:t.id,name:(n=t==null?void 0:t.name)==null?void 0:n.toUpperCase(),statusId:t==null?void 0:t.active}})||[];return G(a,"id","name")},Q={CARD_TYPES_LIST:"cardTypes"};function qe({handleAssign:s}){return e.jsx($,{sx:{marginRight:3},children:e.jsx(U,{title:"Asignar",children:e.jsx(W,{onClick:s,children:e.jsx(Fe,{sx:{color:a=>a.palette.info.main},width:24,height:24})})})})}const ze=async()=>{const{data:s}=await y.get("/api/payment-processors");return Be(s)},D={STOCK_CARDS_LIST:"stockCards",AFFILIATED_COMMERCES_LIST:"affiliatedCommerces"},We=s=>{const{cardNumber:a,cardType:t,expiration:n,cvv:d,assigned:i}=s,l=n==null?void 0:n.slice(-2),C=(n==null?void 0:n.slice(0,3))+l,x={cardNumber:a.replace(/\s+/g,""),paymentProcessorId:t==null?void 0:t.value,expirationDate:C,cvv:d,commerceId:(i==null?void 0:i.value)||""};return Ce(x)},Ke=s=>{const a=(s==null?void 0:s.map(t=>({id:t==null?void 0:t.id,name:t==null?void 0:t.name})))||[];return G(a,"id","name")},Ge=async s=>(await y.post("/api/card/new",s),s),Qe=async()=>{const{data:s}=await y.get("/api/commerces/affiliates");return Ke(s)},Ye=async()=>{const{data:s}=await y.get("/api/cards/stock");return je(s)},wt=async s=>{const a=s!=null&&s.cardId?"/api/card/assign/commerce":"/api/cards/assign/commerce",{data:t}=await y.post(a,s);return t},$e=(s={})=>{const a=X(),t=J(Ge,s);return{...t,registerCard:async(d,i)=>{const{onSuccess:l,onError:C,mutationOptions:x}=i;try{await M.promise(t.mutateAsync(d,x),{pending:"Registrando tarjeta ...",success:{render({data:c}){return a.invalidateQueries([D.STOCK_CARDS_LIST]),l(c),c!=null&&c.isAssigned?"Se agrego una nueva tarjeta al comercio":"Se agrego una nueva tarjeta al stock"}}})}catch(c){const o=E(c,"No se puede agregar la tarjeta al stock");C(o),M.error(o,{type:Z(c)})}}}},Ue=(s={})=>{const{enqueueSnackbar:a}=k(),[t,n]=h.useState(null);return{...R([D.AFFILIATED_COMMERCES_LIST],Qe,{staleTime:60*5e3,onError:i=>{const l=E(i,"No se puede obtener la lista de comercios afiliados");n(l),a(l,{variant:"error",autoHideDuration:5e3})},...s}),error:t||null}},Xe=(s={})=>{const[a,t]=h.useState(null);return{...R([D.STOCK_CARDS_LIST],Ye,{staleTime:6e4,onError:d=>{const i=E(d,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");t(i)},...s}),error:a||null}};function Je({setOpen:s}){const{registerCard:a,isLoading:t}=$e(),n=F([D.AFFILIATED_COMMERCES_LIST])||[],d=F([Q.CARD_TYPES_LIST])||[],[i,l]=h.useState(!1),C=N().shape({cardNumber:w().transform((m,p)=>p.replace(/\s/g,"")).min(16,"Debe contener 16 digitos").required("El número de la tarjeta es requerido"),cvv:w().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),cardType:N().nullable().required("El tipo de tarjeta es requerido"),expiration:w().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(m){const p=ee(`01/${m}`,"dd/MM/yyyy",new Date),T=new Date;return L(p)&&te(p,T)})}),x=he({initialValues:{cardNumber:"",cardType:d&&d.length>0&&d[0]||null,expiration:"",cvv:"",assigned:null},validationSchema:C,onSubmit:(m,{setSubmitting:p})=>{p(!1),m.assigned?l(!0):I(m)}}),{isSubmitting:c,values:o,setFieldValue:j,errors:r,handleSubmit:S,touched:A,resetForm:v,setSubmitting:_}=x,f=c||t,I=(m,p=!1)=>{const T=We(m);a({...T,isAssigned:p},{onSuccess:()=>{s(!1),v(),l(!1)},onError:()=>{l(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(se,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(Se,{formik:x,children:e.jsx(u,{spacing:5,sx:{p:3},children:e.jsxs(u,{spacing:3,children:[e.jsxs(u,{children:[e.jsx(g,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta"}),e.jsx(H,{name:"cardType",disableClearable:!0,textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:d,disabled:f})]}),e.jsxs(u,{children:[e.jsx(g,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de Tarjeta"}),e.jsx(V,{autoFocus:!0,name:"cardNumber",required:!0,placeholder:"5254 2700 9717 8968",fullWidth:!0,InputProps:{startAdornment:e.jsx(B,{position:"start",children:e.jsx(Ae,{})}),inputComponent:O,inputProps:{mask:"0000 0000 0000 0000",value:o.cardNumber,onAccept:m=>{j("cardNumber",m)}}},disabled:f})]}),e.jsxs(u,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(u,{sx:{width:{xs:"100%",lg:"40%"}},children:[e.jsx(g,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(V,{name:"cvv",required:!0,placeholder:"123",InputProps:{startAdornment:e.jsx(B,{position:"start",children:e.jsx(be,{})}),inputComponent:O,inputProps:{mask:"000",onAccept:m=>{j("cvv",m)},value:o.cvv}},disabled:f})]}),e.jsxs(u,{children:[e.jsx(g,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence"}),e.jsx(Te,{disabled:f,views:["year","month"],name:"expiration",value:new Date(o.expiration)??null,onChange:m=>L(m)?x.setFieldValue("expiration",ae(m,"MM/yyyy")):x.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,error:!!(A.expiration&&r.expiration),required:!0,helperText:A.expiration&&r.expiration?r.expiration:""}},disablePast:!0,format:"MM/yy"})]})]}),e.jsxs(u,{children:[e.jsx(g,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Asignar:"}),e.jsx(H,{name:"assigned",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:n,disabled:f})]})]})})})}),e.jsx(u,{sx:{px:3,pt:3},children:e.jsx(K,{loading:f,variant:"contained",color:"primary",fullWidth:!0,type:"submit",onClick:S,disabled:f,startIcon:e.jsx(ye,{}),children:"Crear"})}),i&&e.jsx(ve,{title:"Asignar Tarjeta",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{l(!1),_(!1)},open:i,isSubmitting:t,description:e.jsxs(u,{spacing:2,children:[e.jsx(g,{children:"¿Está seguro de asignar esta tarjeta a este comercio?"}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Ie,{}),e.jsx(g,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{I(o,!0)},fullWidth:!0,maxWidth:"xs"})]})}function Ze({open:s,setOpen:a}){const{themeDirection:t}=re(),n=t!=="rtl"?q({distance:P.BASE_WIDTH,durationIn:.32,durationOut:.32}).inRight:q({distance:P.BASE_WIDTH,durationIn:.32,durationOut:.32}).inLeft;h.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[s]);const d=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(ne,{open:s,onClick:d,sx:{background:"transparent",zIndex:i=>i.zIndex.drawer+1}}),e.jsx(ke,{children:s&&e.jsx(e.Fragment,{children:e.jsxs(Ee,{...n,children:[e.jsxs(u,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(g,{variant:"subtitle1",children:"Nueva Tarjeta"}),e.jsx("div",{children:e.jsx(W,{"aria-label":"close",size:"medium",onClick:d,children:e.jsx(oe,{width:20,height:20,fontSize:"inherit",color:"primary"})})})]}),e.jsx(ie,{sx:{borderStyle:"dashed"}}),e.jsx(Je,{setOpen:a})]})})})]})}function et({isLoading:s,cards:a=[]}){const t=b(o=>o.isReadyToAssign),n=b(o=>o.setOpen),d=b(o=>o.setCard),[i,l]=h.useState(null),{enqueueSnackbar:C}=k(),x=[{name:"cardNumberHidden",label:"Tarjeta",options:{customBodyRenderLite:(o,j)=>{const r=a[o];return e.jsx(g,{variant:"subtitle2",fontWeight:"bold",children:r==null?void 0:r.cardNumberHidden})}}},{name:"cardType",label:"Tipo",options:{customBodyRenderLite:(o,j)=>{const r=a[o];return e.jsxs(u,{flexDirection:"row",alignItems:"center",gap:1,children:[e.jsx(de,{sx:S=>({width:45,height:45,color:S.palette.primary.contrastText,backgroundColor:S.palette.primary.light}),children:(r==null?void 0:r.cardType)==="Carnet"?e.jsx(De,{sx:{width:30},color:"white"}):e.jsx(Me,{sx:{width:30}})}),e.jsx(g,{variant:"subtitle2",children:r==null?void 0:r.cardType})]})}}},{name:"expiration",label:"Vence",options:{filterType:"textField"}},{name:"register",label:"Fecha",options:{filterType:"textField",customBodyRenderLite:(o,j)=>{const r=a[o];return e.jsxs(u,{children:[e.jsx(g,{variant:"subtitle2",children:r==null?void 0:r.registerDate}),e.jsx(g,{variant:"body2",sx:{color:"text.secondary"},children:r==null?void 0:r.registerTime})]})}}}],c=()=>{t?(n(!0),d(i)):(n(!1),C("Por el momento no se puede asignar la tarjeta. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return e.jsx(Ne,{children:e.jsx(fe,{isLoading:s,data:a||[],columns:x,options:{responsive:"simple",rowHover:!0,selectableRows:"single",selectableRowsOnClick:!0,selectToolbarPlacement:"replace",sortOrder:{name:"register",direction:"desc"},downloadOptions:{filename:"tarjetas_stock.csv",filterOptions:{useDisplayedColumnsOnly:!1}},onRowSelectionChange:(o,j,r)=>{const S=a==null?void 0:a.find((A,v)=>r.includes(v));l(S)},customToolbarSelect:o=>e.jsx(qe,{handleAssign:c})}})})}const tt=(s={})=>{const{enqueueSnackbar:a}=k(),[t,n]=h.useState(null);return{...R([Q.CARD_TYPES_LIST],ze,{staleTime:60*5e3,onError:i=>{const l=E(i,"No se puede obtener la lista de los tipos de tarjeta");n(l),a(l,{variant:"error",autoHideDuration:5e3})},...s}),error:t||null}},st=xe(h.lazy(()=>ge(()=>import("./build-d22720d2.js"),["assets/js/build-d22720d2.js","assets/js/index-940cbd95.js","assets/css/build-f63bc8fe.css","assets/js/build-4fd34fc0.js","assets/js/build-a69c6c4b.js","assets/js/build-26c15b0d.js","assets/js/build-cf3057a2.js","assets/js/build-aa3a24dd.js","assets/js/build-e43ddf1a.js","assets/js/build-d1071ca7.js","assets/js/build-23a2f7cc.js","assets/js/build-ee8b42b7.js","assets/js/build-b3d80aba.js","assets/js/build-3bc6e6a2.js","assets/js/build-361e14c0.js","assets/js/build-b8db2d74.js","assets/js/build-7907bfce.js","assets/js/build-28bfabc9.js","assets/js/build-540f7c64.js","assets/js/build-f2699fae.js","assets/js/build-5c0b3e2f.js","assets/js/build-bee6630b.js","assets/js/build-e89d39fb.js","assets/js/build-8891c058.js","assets/js/build-61d1d1dd.js","assets/js/build-82e20c96.js","assets/js/build-34d25871.js","assets/js/build-5bb2e343.js","assets/js/build-cf3163a6.js","assets/js/build-ecaf0d13.js","assets/js/build-978cc126.js","assets/js/build-f1c086f0.js","assets/js/build-c169d49c.js","assets/js/build-5b4a3568.js","assets/js/build-1b7ce516.js","assets/js/build-b5d9a10e.js","assets/js/build-3c6e45d2.js","assets/js/build-58801573.js","assets/js/build-26982e51.js","assets/js/build-f8fc243b.js","assets/js/build-1389aff6.js","assets/js/build-bb2a3b1f.js","assets/js/build-33b2b583.js","assets/js/build-1bc14366.js"])));function at(){const[s,a]=h.useState(!1),{data:t,isSuccess:n,isLoading:d}=Ue(),{data:i,isSuccess:l,isLoading:C}=tt(),x=Xe(),{data:c,isLoading:o}=x,j=b(p=>p.setOpen),r=b(p=>p.setReadyToAssign),S=b(p=>p.open),{enqueueSnackbar:A}=k(),[v,_]=h.useState("1"),f=(p,T)=>{_(T)},I=()=>{t&&i&&l&&n?a(!0):A("Por el momento no se puede crear una tarjeta. Intente nuevamenta o reporte a sistemas",{variant:"warning",autoHideDuration:5e3})},m=()=>{t&&t.length>0&&i&&i.length>0?j(!0):(j(!1),A("Por el momento no se puede asignar tarjetas. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return h.useEffect(()=>{t&&t.length>0?r(!0):r(!1)},[t]),e.jsx(le,{title:"Stock de Tarjetas",children:e.jsxs(_e,{children:[e.jsx(we,{name:"Stock de Tarjetas",links:[{name:"Inicio",href:ce.root},{name:"Administracion",href:ue.stock_cards},{name:me.stock_cards.name}],buttons:e.jsxs(u,{direction:"column",spacing:2,mt:{xs:2,md:0},children:[e.jsxs(u,{spacing:2,direction:{xs:"column",md:"row"},children:[c&&(c==null?void 0:c.length)>0&&e.jsx(pe,{sx:{color:"black"},type:"button",color:"secondary",variant:"contained",onClick:m,startIcon:e.jsx(Ve,{}),children:"Asignar Tarjetas"}),e.jsx(K,{loading:d||C,variant:"contained",onClick:I,startIcon:e.jsx(Re,{}),children:"Nueva Tarjeta"})]}),e.jsx(u,{alignItems:{xs:"center",md:"flex-end"},children:e.jsxs(Oe,{size:"small",color:"primary",value:v,exclusive:!0,onChange:f,"aria-label":"Platform",children:[e.jsx(z,{value:"1",children:e.jsx(Le,{})}),e.jsx(z,{value:"2",children:e.jsx(He,{})})]})})]})}),v==="2"&&e.jsx(Pe,{cards:x}),v==="1"&&e.jsx(et,{cards:c,isLoading:o}),e.jsx(Ze,{open:s,setOpen:a}),S&&e.jsx(st,{})]})})}const Rt=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));export{D as M,Q as S,wt as a,Rt as b};