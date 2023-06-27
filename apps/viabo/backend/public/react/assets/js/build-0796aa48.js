import{q as H,j as e,a as b,a8 as W,m as K,a9 as D,g as k,n as G,u as z,r as x,b as B,aa as F,ab as Q,ac as w,ad as Y,X as $,S as l,T as h,ae as U,L as X,af as J,ag as Z,I as ee,ah as ae,ai as re,aj as N,e as te,a5 as se,a6 as ne,a7 as oe,c as ie,ak as de,_ as ce}from"./build-bd106f3f.js";import{a as le,H as ue}from"./build-3fd10419.js";import{v as R,A as pe}from"./build-785a4db1.js";import{u as me}from"./build-7122b208.js";import{c as P,a as E}from"./build-f590a2bc.js";import{I as he,R as L}from"./build-b80dcee8.js";import{R as O}from"./build-6201b366.js";import{F as xe}from"./build-bae479f0.js";import{g as ge,C as fe,S as Ce,u as _}from"./build-f16e01c8.js";import{c as je}from"./build-ecaf0d13.js";import{S as Se,V as ve,D as Ae,u as be}from"./build-1d224b6d.js";import{M as ye}from"./build-ebcdcaa2.js";import{I as q}from"./build-200f548c.js";import{C as Te}from"./build-a614d788.js";import{A as Ie}from"./build-b563e77e.js";import{C as Ee}from"./build-ae888455.js";const _e=H([e.jsx("path",{d:"M15.36 9H3.64l-.6 3h12.92z",opacity:".3"},"0"),e.jsx("path",{d:"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z"},"1"),e.jsx("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"2")],"AddBusinessTwoTone"),ke=H(e.jsx("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"WarningAmberOutlined"),y={STOCK_CARDS_LIST:"stockCards",AFFILIATED_COMMERCES_LIST:"affiliatedCommerces"},Me=a=>{const{cardNumber:t,cardType:r,expiration:n,cvv:o,assigned:s}=a,c=n==null?void 0:n.slice(-2),g=(n==null?void 0:n.slice(0,3))+c,u={cardNumber:t.replace(/\s+/g,""),paymentProcessorId:r==null?void 0:r.value,expirationDate:g,cvv:o,commerceId:(s==null?void 0:s.value)||""};return ge(u)},De=a=>{const t=(a==null?void 0:a.map(r=>({id:r==null?void 0:r.id,name:r==null?void 0:r.name})))||[];return je(t,"id","name")},Fe=async a=>(await b.post("/api/card/new",a),a),we=async()=>{const{data:a}=await b.get("/api/commerces/affiliates");return De(a)},Ne=async()=>{const{data:a}=await b.get("/api/cards/stock");return fe(a)},na=async a=>{const t=a!=null&&a.cardId?"/api/card/assign/commerce":"/api/cards/assign/commerce",{data:r}=await b.post(t,a);return r},Re=(a={})=>{const t=W(),r=K(Fe,a);return{...r,registerCard:async(o,s)=>{const{onSuccess:c,onError:g,mutationOptions:u}=s;try{await D.promise(r.mutateAsync(o,u),{pending:"Registrando tarjeta ...",success:{render({data:i}){return t.invalidateQueries([y.STOCK_CARDS_LIST]),c(i),i!=null&&i.isAssigned?"Se agrego una nueva tarjeta al comercio":"Se agrego una nueva tarjeta al stock"}}})}catch(i){const p=k(i,"No se puede agregar la tarjeta al stock");g(p),D.error(p,{type:G(i)})}}}},Pe=(a={})=>{const{enqueueSnackbar:t}=z(),[r,n]=x.useState(null);return{...B([y.AFFILIATED_COMMERCES_LIST],we,{staleTime:60*5e3,onError:s=>{const c=k(s,"No se puede obtener la lista de comercios afiliados");n(c),t(c,{variant:"error",autoHideDuration:5e3})},...a}),error:r||null}},Le=(a={})=>{const[t,r]=x.useState(null);return{...B([y.STOCK_CARDS_LIST],Ne,{staleTime:6e4,onError:o=>{const s=k(o,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");r(s)},...a}),error:t||null}},V=x.forwardRef((a,t)=>e.jsx(he,{overwrite:!0,...a,inputRef:t}));function Oe({setOpen:a}){const{registerCard:t,isLoading:r}=Re(),n=F([y.AFFILIATED_COMMERCES_LIST])||[],o=F([Se.CARD_TYPES_LIST])||[],[s,c]=x.useState(!1),g=P().shape({cardNumber:E().transform((d,m)=>m.replace(/\s/g,"")).min(16,"Debe contener 16 digitos").required("El número de la tarjeta es requerido"),cvv:E().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),cardType:P().nullable().required("El tipo de tarjeta es requerido"),expiration:E().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(d){const m=Q(`01/${d}`,"dd/MM/yyyy",new Date),I=new Date;return w(m)&&Y(m,I)})}),u=me({initialValues:{cardNumber:"",cardType:o&&o.length>0&&o[0]||null,expiration:"",cvv:"",assigned:null},validationSchema:g,onSubmit:(d,{setSubmitting:m})=>{m(!1),d.assigned?c(!0):M(d)}}),{isSubmitting:i,values:p,setFieldValue:j,errors:S,handleSubmit:v,touched:A,resetForm:T,setSubmitting:f}=u,C=i||r,M=(d,m=!1)=>{const I=Me(d);t({...I,isAssigned:m},{onSuccess:()=>{a(!1),T(),c(!1)},onError:()=>{c(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx($,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(xe,{formik:u,children:e.jsx(l,{spacing:5,sx:{p:3},children:e.jsxs(l,{spacing:3,children:[e.jsxs(l,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta"}),e.jsx(L,{name:"cardType",disableClearable:!0,textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:o,disabled:C})]}),e.jsxs(l,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de Tarjeta"}),e.jsx(O,{autoFocus:!0,name:"cardNumber",required:!0,placeholder:"5254 2700 9717 8968",fullWidth:!0,InputProps:{startAdornment:e.jsx(q,{position:"start",children:e.jsx(Te,{})}),inputComponent:V,inputProps:{mask:"0000 0000 0000 0000",value:p.cardNumber,onAccept:d=>{j("cardNumber",d)}}},disabled:C})]}),e.jsxs(l,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(l,{sx:{width:{xs:"100%",lg:"40%"}},children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(O,{name:"cvv",required:!0,placeholder:"123",InputProps:{startAdornment:e.jsx(q,{position:"start",children:e.jsx(ve,{})}),inputComponent:V,inputProps:{mask:"000",onAccept:d=>{j("cvv",d)},value:p.cvv}},disabled:C})]}),e.jsxs(l,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence"}),e.jsx(Ae,{disabled:C,views:["year","month"],name:"expiration",value:new Date(p.expiration)??null,onChange:d=>w(d)?u.setFieldValue("expiration",U(d,"MM/yyyy")):u.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,error:!!(A.expiration&&S.expiration),required:!0,helperText:A.expiration&&S.expiration?S.expiration:""}},disablePast:!0,format:"MM/yy"})]})]}),e.jsxs(l,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Asignar:"}),e.jsx(L,{name:"assigned",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:n,disabled:C})]})]})})})}),e.jsx(l,{sx:{px:3,pt:3},children:e.jsx(X,{loading:C,variant:"contained",color:"primary",fullWidth:!0,type:"submit",onClick:v,disabled:C,startIcon:e.jsx(Ie,{}),children:"Crear"})}),s&&e.jsx(ye,{title:"Asignar Tarjeta",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{c(!1),f(!1)},open:s,isSubmitting:r,description:e.jsxs(l,{spacing:2,children:[e.jsx(h,{children:"¿Está seguro de asignar esta tarjeta a este comercio?"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(ke,{}),e.jsx(h,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{M(p,!0)},fullWidth:!0,maxWidth:"xs"})]})}function qe({open:a,setOpen:t}){const{themeDirection:r}=J(),n=r!=="rtl"?R({distance:N.BASE_WIDTH,durationIn:.32,durationOut:.32}).inRight:R({distance:N.BASE_WIDTH,durationIn:.32,durationOut:.32}).inLeft;x.useEffect(()=>{a?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[a]);const o=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Z,{open:a,onClick:o,sx:{background:"transparent",zIndex:s=>s.zIndex.drawer+1}}),e.jsx(pe,{children:a&&e.jsx(e.Fragment,{children:e.jsxs(Ce,{...n,children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(h,{variant:"subtitle1",children:"Nueva Tarjeta"}),e.jsx("div",{children:e.jsx(ee,{"aria-label":"close",size:"medium",onClick:o,children:e.jsx(ae,{width:20,height:20,fontSize:"inherit",color:"primary"})})})]}),e.jsx(re,{sx:{borderStyle:"dashed"}}),e.jsx(Oe,{setOpen:t})]})})})]})}const Ve=de(x.lazy(()=>ce(()=>import("./build-ded7bc1c.js"),["assets/js/build-ded7bc1c.js","assets/js/build-bd106f3f.js","assets/css/build-2e53629c.css","assets/js/build-7122b208.js","assets/js/build-f590a2bc.js","assets/js/build-6201b366.js","assets/js/build-ce849df6.js","assets/js/build-b80dcee8.js","assets/js/build-a614d788.js","assets/js/build-bae479f0.js","assets/js/build-785a4db1.js","assets/js/build-bee6630b.js","assets/js/build-ebcdcaa2.js","assets/js/build-f16e01c8.js","assets/js/build-ecaf0d13.js","assets/js/build-3fd10419.js","assets/js/build-fecf758a.js","assets/js/build-bc51bc70.js","assets/js/build-3df7d10a.js","assets/js/build-3625df71.js","assets/js/build-1d224b6d.js","assets/js/build-d3be50c2.js","assets/js/build-200f548c.js","assets/js/build-b563e77e.js","assets/js/build-ae888455.js","assets/js/build-9e94644c.js"])));function He(){const[a,t]=x.useState(!1),{data:r,isSuccess:n,isLoading:o}=Pe(),{data:s,isSuccess:c,isLoading:g}=be(),u=Le(),{data:i}=u,p=_(f=>f.setOpen),j=_(f=>f.setReadyToAssign),S=_(f=>f.open),{enqueueSnackbar:v}=z(),A=()=>{r&&s&&c&&n?t(!0):v("Por el momento no se puede crear una tarjeta. Intente nuevamenta o reporte a sistemas",{variant:"warning",autoHideDuration:5e3})},T=()=>{r&&r.length>0&&s&&s.length>0?p(!0):(p(!1),v("Por el momento no se puede asignar tarjetas. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return x.useEffect(()=>{r&&r.length>0?j(!0):j(!1)},[r]),e.jsx(te,{title:"Stock de Tarjetas",children:e.jsxs(le,{children:[e.jsx(ue,{name:"Stock de Tarjetas",links:[{name:"Inicio",href:se.root},{name:"Administracion",href:ne.stock_cards},{name:oe.stock_cards.name}],buttonName:"Nueva Tarjeta",onClick:A,loading:o||g,buttons:i&&(i==null?void 0:i.length)>0?e.jsx(ie,{sx:{mr:{sm:3},mb:{xs:3,sm:0},color:"black"},type:"button",color:"secondary",variant:"contained",onClick:T,startIcon:e.jsx(_e,{}),children:"Asignar Tarjetas"}):null}),e.jsx(Ee,{cards:u}),e.jsx(qe,{open:a,setOpen:t}),S&&e.jsx(Ve,{})]})})}const oa=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"}));export{y as M,oa as S,ke as W,na as a};
