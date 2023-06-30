import{q as B,j as e,a as v,a8 as Y,m as G,a9 as F,g as y,n as Q,u as D,r as h,b as M,aa as N,ab as $,ac as R,ad as U,X,S as l,T as x,ae as J,L as Z,af as ee,ag as te,I as ae,ah as re,ai as se,aj as P,e as ne,a5 as oe,a6 as ie,a7 as ce,c as de,ak as le,_ as ue}from"./build-27e237f5.js";import{a as me,H as pe}from"./build-b52be7d2.js";import{v as L,A as he}from"./build-e34aa31a.js";import{u as xe}from"./build-f2a1bf56.js";import{c as q,a as _}from"./build-9892c001.js";import{I as ge}from"./build-4e8887e5.js";import{R as O}from"./build-afd9320c.js";import{R as H,M as Ce}from"./build-166686ae.js";import{F as fe}from"./build-eacb7745.js";import{g as Se,C as je}from"./build-d9ece2eb.js";import{c as W}from"./build-ecaf0d13.js";import{C as ve,S as Ae,u as k}from"./build-14d7966e.js";import{I as V}from"./build-21702c1b.js";import{V as be,D as ye}from"./build-0339c3cb.js";import{A as Te}from"./build-50c0a80c.js";import{C as Ee}from"./build-294e2628.js";const Ie=B([e.jsx("path",{d:"M15.36 9H3.64l-.6 3h12.92z",opacity:".3"},"0"),e.jsx("path",{d:"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z"},"1"),e.jsx("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"2")],"AddBusinessTwoTone"),_e=B(e.jsx("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"WarningAmberOutlined"),T={STOCK_CARDS_LIST:"stockCards",AFFILIATED_COMMERCES_LIST:"affiliatedCommerces"},ke=a=>{const{cardNumber:r,cardType:t,expiration:s,cvv:o,assigned:n}=a,i=s==null?void 0:s.slice(-2),g=(s==null?void 0:s.slice(0,3))+i,u={cardNumber:r.replace(/\s+/g,""),paymentProcessorId:t==null?void 0:t.value,expirationDate:g,cvv:o,commerceId:(n==null?void 0:n.value)||""};return Se(u)},De=a=>{const r=(a==null?void 0:a.map(t=>({id:t==null?void 0:t.id,name:t==null?void 0:t.name})))||[];return W(r,"id","name")},Me=a=>{const r=a.map(t=>{var s;return{id:t==null?void 0:t.id,name:(s=t==null?void 0:t.name)==null?void 0:s.toUpperCase(),statusId:t==null?void 0:t.active}})||[];return W(r,"id","name")},K={CARD_TYPES_LIST:"cardTypes"},we=async a=>(await v.post("/api/card/new",a),a),Fe=async()=>{const{data:a}=await v.get("/api/commerces/affiliates");return De(a)},Ne=async()=>{const{data:a}=await v.get("/api/cards/stock");return ve(a)},it=async a=>{const r=a!=null&&a.cardId?"/api/card/assign/commerce":"/api/cards/assign/commerce",{data:t}=await v.post(r,a);return t},Re=(a={})=>{const r=Y(),t=G(we,a);return{...t,registerCard:async(o,n)=>{const{onSuccess:i,onError:g,mutationOptions:u}=n;try{await F.promise(t.mutateAsync(o,u),{pending:"Registrando tarjeta ...",success:{render({data:c}){return r.invalidateQueries([T.STOCK_CARDS_LIST]),i(c),c!=null&&c.isAssigned?"Se agrego una nueva tarjeta al comercio":"Se agrego una nueva tarjeta al stock"}}})}catch(c){const m=y(c,"No se puede agregar la tarjeta al stock");g(m),F.error(m,{type:Q(c)})}}}},Pe=(a={})=>{const{enqueueSnackbar:r}=D(),[t,s]=h.useState(null);return{...M([T.AFFILIATED_COMMERCES_LIST],Fe,{staleTime:60*5e3,onError:n=>{const i=y(n,"No se puede obtener la lista de comercios afiliados");s(i),r(i,{variant:"error",autoHideDuration:5e3})},...a}),error:t||null}},Le=(a={})=>{const[r,t]=h.useState(null);return{...M([T.STOCK_CARDS_LIST],Ne,{staleTime:6e4,onError:o=>{const n=y(o,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");t(n)},...a}),error:r||null}},z=h.forwardRef((a,r)=>e.jsx(ge,{overwrite:!0,...a,inputRef:r}));function qe({setOpen:a}){const{registerCard:r,isLoading:t}=Re(),s=N([T.AFFILIATED_COMMERCES_LIST])||[],o=N([K.CARD_TYPES_LIST])||[],[n,i]=h.useState(!1),g=q().shape({cardNumber:_().transform((d,p)=>p.replace(/\s/g,"")).min(16,"Debe contener 16 digitos").required("El número de la tarjeta es requerido"),cvv:_().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),cardType:q().nullable().required("El tipo de tarjeta es requerido"),expiration:_().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(d){const p=$(`01/${d}`,"dd/MM/yyyy",new Date),I=new Date;return R(p)&&U(p,I)})}),u=xe({initialValues:{cardNumber:"",cardType:o&&o.length>0&&o[0]||null,expiration:"",cvv:"",assigned:null},validationSchema:g,onSubmit:(d,{setSubmitting:p})=>{p(!1),d.assigned?i(!0):w(d)}}),{isSubmitting:c,values:m,setFieldValue:S,errors:j,handleSubmit:A,touched:b,resetForm:E,setSubmitting:C}=u,f=c||t,w=(d,p=!1)=>{const I=ke(d);r({...I,isAssigned:p},{onSuccess:()=>{a(!1),E(),i(!1)},onError:()=>{i(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(X,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(fe,{formik:u,children:e.jsx(l,{spacing:5,sx:{p:3},children:e.jsxs(l,{spacing:3,children:[e.jsxs(l,{children:[e.jsx(x,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta"}),e.jsx(H,{name:"cardType",disableClearable:!0,textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:o,disabled:f})]}),e.jsxs(l,{children:[e.jsx(x,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de Tarjeta"}),e.jsx(O,{autoFocus:!0,name:"cardNumber",required:!0,placeholder:"5254 2700 9717 8968",fullWidth:!0,InputProps:{startAdornment:e.jsx(V,{position:"start",children:e.jsx(je,{})}),inputComponent:z,inputProps:{mask:"0000 0000 0000 0000",value:m.cardNumber,onAccept:d=>{S("cardNumber",d)}}},disabled:f})]}),e.jsxs(l,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(l,{sx:{width:{xs:"100%",lg:"40%"}},children:[e.jsx(x,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(O,{name:"cvv",required:!0,placeholder:"123",InputProps:{startAdornment:e.jsx(V,{position:"start",children:e.jsx(be,{})}),inputComponent:z,inputProps:{mask:"000",onAccept:d=>{S("cvv",d)},value:m.cvv}},disabled:f})]}),e.jsxs(l,{children:[e.jsx(x,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence"}),e.jsx(ye,{disabled:f,views:["year","month"],name:"expiration",value:new Date(m.expiration)??null,onChange:d=>R(d)?u.setFieldValue("expiration",J(d,"MM/yyyy")):u.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,error:!!(b.expiration&&j.expiration),required:!0,helperText:b.expiration&&j.expiration?j.expiration:""}},disablePast:!0,format:"MM/yy"})]})]}),e.jsxs(l,{children:[e.jsx(x,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Asignar:"}),e.jsx(H,{name:"assigned",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:s,disabled:f})]})]})})})}),e.jsx(l,{sx:{px:3,pt:3},children:e.jsx(Z,{loading:f,variant:"contained",color:"primary",fullWidth:!0,type:"submit",onClick:A,disabled:f,startIcon:e.jsx(Te,{}),children:"Crear"})}),n&&e.jsx(Ce,{title:"Asignar Tarjeta",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{i(!1),C(!1)},open:n,isSubmitting:t,description:e.jsxs(l,{spacing:2,children:[e.jsx(x,{children:"¿Está seguro de asignar esta tarjeta a este comercio?"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(_e,{}),e.jsx(x,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{w(m,!0)},fullWidth:!0,maxWidth:"xs"})]})}const Oe=async()=>{const{data:a}=await v.get("/api/payment-processors");return Me(a)},He=(a={})=>{const{enqueueSnackbar:r}=D(),[t,s]=h.useState(null);return{...M([K.CARD_TYPES_LIST],Oe,{staleTime:60*5e3,onError:n=>{const i=y(n,"No se puede obtener la lista de los tipos de tarjeta");s(i),r(i,{variant:"error",autoHideDuration:5e3})},...a}),error:t||null}};function Ve({open:a,setOpen:r}){const{themeDirection:t}=ee(),s=t!=="rtl"?L({distance:P.BASE_WIDTH,durationIn:.32,durationOut:.32}).inRight:L({distance:P.BASE_WIDTH,durationIn:.32,durationOut:.32}).inLeft;h.useEffect(()=>{a?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[a]);const o=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(te,{open:a,onClick:o,sx:{background:"transparent",zIndex:n=>n.zIndex.drawer+1}}),e.jsx(he,{children:a&&e.jsx(e.Fragment,{children:e.jsxs(Ae,{...s,children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(x,{variant:"subtitle1",children:"Nueva Tarjeta"}),e.jsx("div",{children:e.jsx(ae,{"aria-label":"close",size:"medium",onClick:o,children:e.jsx(re,{width:20,height:20,fontSize:"inherit",color:"primary"})})})]}),e.jsx(se,{sx:{borderStyle:"dashed"}}),e.jsx(qe,{setOpen:r})]})})})]})}const ze=le(h.lazy(()=>ue(()=>import("./build-43311b87.js"),["assets/js/build-43311b87.js","assets/js/build-27e237f5.js","assets/css/build-2e53629c.css","assets/js/build-f2a1bf56.js","assets/js/build-9892c001.js","assets/js/build-afd9320c.js","assets/js/build-7079f4d4.js","assets/js/build-166686ae.js","assets/js/build-d9ece2eb.js","assets/js/build-4e8887e5.js","assets/js/build-eacb7745.js","assets/js/build-e34aa31a.js","assets/js/build-bee6630b.js","assets/js/build-14d7966e.js","assets/js/build-ecaf0d13.js","assets/js/build-b52be7d2.js","assets/js/build-e06ad1b7.js","assets/js/build-acbedff4.js","assets/js/build-91fdb816.js","assets/js/build-5a101712.js","assets/js/build-21702c1b.js","assets/js/build-0339c3cb.js","assets/js/build-65e7778d.js","assets/js/build-50c0a80c.js","assets/js/build-294e2628.js","assets/js/build-a2653c0a.js"])));function Be(){const[a,r]=h.useState(!1),{data:t,isSuccess:s,isLoading:o}=Pe(),{data:n,isSuccess:i,isLoading:g}=He(),u=Le(),{data:c}=u,m=k(C=>C.setOpen),S=k(C=>C.setReadyToAssign),j=k(C=>C.open),{enqueueSnackbar:A}=D(),b=()=>{t&&n&&i&&s?r(!0):A("Por el momento no se puede crear una tarjeta. Intente nuevamenta o reporte a sistemas",{variant:"warning",autoHideDuration:5e3})},E=()=>{t&&t.length>0&&n&&n.length>0?m(!0):(m(!1),A("Por el momento no se puede asignar tarjetas. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return h.useEffect(()=>{t&&t.length>0?S(!0):S(!1)},[t]),e.jsx(ne,{title:"Stock de Tarjetas",children:e.jsxs(me,{children:[e.jsx(pe,{name:"Stock de Tarjetas",links:[{name:"Inicio",href:oe.root},{name:"Administracion",href:ie.stock_cards},{name:ce.stock_cards.name}],buttonName:"Nueva Tarjeta",onClick:b,loading:o||g,buttons:c&&(c==null?void 0:c.length)>0?e.jsx(de,{sx:{mr:{sm:3},mb:{xs:3,sm:0},color:"black"},type:"button",color:"secondary",variant:"contained",onClick:E,startIcon:e.jsx(Ie,{}),children:"Asignar Tarjetas"}):null}),e.jsx(Ee,{cards:u}),e.jsx(Ve,{open:a,setOpen:r}),j&&e.jsx(ze,{})]})})}const ct=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"}));export{T as M,K as S,_e as W,it as a,ct as b};
