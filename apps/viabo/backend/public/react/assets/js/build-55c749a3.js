import{t as W,j as e,a as y,u as E,r as g,b as R,g as _,B as $,ab as U,I as G,E as J,n as X,Q as M,o as Z,b0 as F,G as ee,H as L,J as te,a7 as se,S as u,T as h,K as re,L as K,b1 as ae,aG as ne,aH as oe,a4 as ie,b2 as P,ad as de,f as le,al as ce,a_ as ue,a$ as me,d as pe,av as xe,_ as he}from"./build-ff249ccd.js";import{u as ge}from"./build-c35749b2.js";import{c as N,a as D}from"./build-21c8fd33.js";import{g as Ce}from"./build-2de398c6.js";import{c as Y}from"./build-ecaf0d13.js";import{C as je}from"./build-efc7dfc7.js";import{a as fe,u as b}from"./build-deaba545.js";import{R as O}from"./build-d4a81a0e.js";import{R as H}from"./build-ba6b5ae5.js";import{F as ve,M as B}from"./build-c7c745f5.js";import{a as Se}from"./build-42756ae8.js";import{I as q}from"./build-d0cdcec7.js";import{C as Ae}from"./build-cb8ebebb.js";import{V as be}from"./build-8380f677.js";import{D as Te}from"./build-2446f370.js";import{A as ye}from"./build-a5b127ff.js";import{C as Ie,H as Ee,A as _e}from"./build-45c14002.js";import{v as V,A as ke}from"./build-7a360ede.js";import{C as we}from"./build-2c67f035.js";import{M as De}from"./build-bb72ca38.js";import{A as Re,F as Me,a as Fe}from"./build-53c7ff00.js";import{D as Le}from"./build-d3854add.js";import{C as Pe}from"./build-a95cd612.js";import{T as Ne,a as z}from"./build-a7a53a70.js";import{A as Oe}from"./build-033677ad.js";const He=W([e.jsx("path",{d:"M15.36 9H3.64l-.6 3h12.92z",opacity:".3"},"0"),e.jsx("path",{d:"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z"},"1"),e.jsx("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"2")],"AddBusinessTwoTone"),Be=W(e.jsx("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"WarningAmberOutlined"),qe=s=>{const r=s.map(t=>{var n;return{id:t==null?void 0:t.id,name:(n=t==null?void 0:t.name)==null?void 0:n.toUpperCase(),statusId:t==null?void 0:t.active}})||[];return Y(r,"id","name")},Q={CARD_TYPES_LIST:"cardTypes"},Ve=async()=>{const{data:s}=await y.get("/api/payment-processors");return qe(s)},ze=(s={})=>{const{enqueueSnackbar:r}=E(),[t,n]=g.useState(null);return{...R([Q.CARD_TYPES_LIST],Ve,{staleTime:60*5e3,onError:i=>{const l=_(i,"No se puede obtener la lista de los tipos de tarjeta");n(l),r(l,{variant:"error",autoHideDuration:5e3})},...s}),error:t||null}};function We({handleAssign:s}){return e.jsx($,{sx:{marginRight:3},children:e.jsx(U,{title:"Asignar",children:e.jsx(G,{onClick:s,children:e.jsx(Re,{sx:{color:r=>r.palette.info.main},width:24,height:24})})})})}const k={STOCK_CARDS_LIST:"stockCards",AFFILIATED_COMMERCES_LIST:"affiliatedCommerces"},Ge=s=>{const{cardNumber:r,cardType:t,expiration:n,cvv:d,assigned:i}=s,l=n==null?void 0:n.slice(-2),C=(n==null?void 0:n.slice(0,3))+l,x={cardNumber:r.replace(/\s+/g,""),paymentProcessorId:t==null?void 0:t.value,expirationDate:C,cvv:d,commerceId:(i==null?void 0:i.value)||""};return Ce(x)},Ke=s=>{const r=(s==null?void 0:s.map(t=>({id:t==null?void 0:t.id,name:t==null?void 0:t.name})))||[];return Y(r,"id","name")},Ye=async s=>(await y.post("/api/card/new",s),s),Qe=async()=>{const{data:s}=await y.get("/api/commerces/affiliates");return Ke(s)},$e=async()=>{const{data:s}=await y.get("/api/cards/stock");return je(s)},wt=async s=>{const r=s!=null&&s.cardId?"/api/card/assign/commerce":"/api/cards/assign/commerce",{data:t}=await y.post(r,s);return t},Ue=(s={})=>{const r=J(),t=X(Ye,s);return{...t,registerCard:async(d,i)=>{const{onSuccess:l,onError:C,mutationOptions:x}=i;try{await M.promise(t.mutateAsync(d,x),{pending:"Registrando tarjeta ...",success:{render({data:c}){return r.invalidateQueries([k.STOCK_CARDS_LIST]),l(c),c!=null&&c.isAssigned?"Se agrego una nueva tarjeta al comercio":"Se agrego una nueva tarjeta al stock"}}})}catch(c){const o=_(c,"No se puede agregar la tarjeta al stock");C(o),M.error(o,{type:Z(c)})}}}},Je=(s={})=>{const{enqueueSnackbar:r}=E(),[t,n]=g.useState(null);return{...R([k.AFFILIATED_COMMERCES_LIST],Qe,{staleTime:60*5e3,onError:i=>{const l=_(i,"No se puede obtener la lista de comercios afiliados");n(l),r(l,{variant:"error",autoHideDuration:5e3})},...s}),error:t||null}},Xe=(s={})=>{const[r,t]=g.useState(null);return{...R([k.STOCK_CARDS_LIST],$e,{staleTime:6e4,onError:d=>{const i=_(d,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");t(i)},...s}),error:r||null}};function Ze({setOpen:s}){const{registerCard:r,isLoading:t}=Ue(),n=F([k.AFFILIATED_COMMERCES_LIST])||[],d=F([Q.CARD_TYPES_LIST])||[],[i,l]=g.useState(!1),C=N().shape({cardNumber:D().transform((m,p)=>p.replace(/\s/g,"")).min(16,"Debe contener 16 digitos").required("El número de la tarjeta es requerido"),cvv:D().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),cardType:N().nullable().required("El tipo de tarjeta es requerido"),expiration:D().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(m){const p=ee(`01/${m}`,"dd/MM/yyyy",new Date),T=new Date;return L(p)&&te(p,T)})}),x=ge({initialValues:{cardNumber:"",cardType:d&&d.length>0&&d[0]||null,expiration:"",cvv:"",assigned:null},validationSchema:C,onSubmit:(m,{setSubmitting:p})=>{p(!1),m.assigned?l(!0):I(m)}}),{isSubmitting:c,values:o,setFieldValue:j,errors:a,handleSubmit:v,touched:A,resetForm:S,setSubmitting:w}=x,f=c||t,I=(m,p=!1)=>{const T=Ge(m);r({...T,isAssigned:p},{onSuccess:()=>{s(!1),S(),l(!1)},onError:()=>{l(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(se,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(ve,{formik:x,children:e.jsx(u,{spacing:5,sx:{p:3},children:e.jsxs(u,{spacing:3,children:[e.jsxs(u,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta"}),e.jsx(H,{name:"cardType",disableClearable:!0,textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:d,disabled:f})]}),e.jsxs(u,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de Tarjeta"}),e.jsx(O,{autoFocus:!0,name:"cardNumber",required:!0,placeholder:"5254 2700 9717 8968",fullWidth:!0,InputProps:{startAdornment:e.jsx(q,{position:"start",children:e.jsx(Ae,{})}),inputComponent:B,inputProps:{mask:"0000 0000 0000 0000",value:o.cardNumber,onAccept:m=>{j("cardNumber",m)}}},disabled:f})]}),e.jsxs(u,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(u,{sx:{width:{xs:"100%",lg:"40%"}},children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(O,{name:"cvv",required:!0,placeholder:"123",InputProps:{startAdornment:e.jsx(q,{position:"start",children:e.jsx(be,{})}),inputComponent:B,inputProps:{mask:"000",onAccept:m=>{j("cvv",m)},value:o.cvv}},disabled:f})]}),e.jsxs(u,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence"}),e.jsx(Te,{disabled:f,views:["year","month"],name:"expiration",value:new Date(o.expiration)??null,onChange:m=>L(m)?x.setFieldValue("expiration",re(m,"MM/yyyy")):x.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,error:!!(A.expiration&&a.expiration),required:!0,helperText:A.expiration&&a.expiration?a.expiration:""}},disablePast:!0,format:"MM/yy"})]})]}),e.jsxs(u,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Asignar:"}),e.jsx(H,{name:"assigned",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:n,disabled:f})]})]})})})}),e.jsx(u,{sx:{px:3,pt:3},children:e.jsx(K,{loading:f,variant:"contained",color:"primary",fullWidth:!0,type:"submit",onClick:v,disabled:f,startIcon:e.jsx(ye,{}),children:"Crear"})}),i&&e.jsx(Se,{title:"Asignar Tarjeta",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{l(!1),w(!1)},open:i,isSubmitting:t,description:e.jsxs(u,{spacing:2,children:[e.jsx(h,{children:"¿Está seguro de asignar esta tarjeta a este comercio?"}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Be,{}),e.jsx(h,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{I(o,!0)},fullWidth:!0,maxWidth:"xs"})]})}function et({open:s,setOpen:r}){const{themeDirection:t}=ae(),n=t!=="rtl"?V({distance:P.BASE_WIDTH,durationIn:.32,durationOut:.32}).inRight:V({distance:P.BASE_WIDTH,durationIn:.32,durationOut:.32}).inLeft;g.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[s]);const d=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(ne,{open:s,onClick:d,sx:{background:"transparent",zIndex:i=>i.zIndex.drawer+1}}),e.jsx(ke,{children:s&&e.jsx(e.Fragment,{children:e.jsxs(fe,{...n,children:[e.jsxs(u,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(h,{variant:"subtitle1",children:"Nueva Tarjeta"}),e.jsx("div",{children:e.jsx(G,{"aria-label":"close",size:"medium",onClick:d,children:e.jsx(oe,{width:20,height:20,fontSize:"inherit",color:"primary"})})})]}),e.jsx(ie,{sx:{borderStyle:"dashed"}}),e.jsx(Ze,{setOpen:r})]})})})]})}function tt({isLoading:s,cards:r=[]}){const t=b(o=>o.isReadyToAssign),n=b(o=>o.setOpen),d=b(o=>o.setCard),[i,l]=g.useState(null),{enqueueSnackbar:C}=E(),x=[{name:"cardNumberHidden",label:"Tarjeta",options:{customBodyRenderLite:(o,j)=>{const a=r[o];return e.jsx(h,{variant:"subtitle2",fontWeight:"bold",children:a==null?void 0:a.cardNumberHidden})}}},{name:"cardType",label:"Tipo",options:{customBodyRenderLite:(o,j)=>{const a=r[o];return e.jsxs(u,{flexDirection:"row",alignItems:"center",gap:1,children:[e.jsx(de,{sx:v=>({width:45,height:45,color:v.palette.primary.contrastText,backgroundColor:v.palette.primary.light}),children:(a==null?void 0:a.cardType)==="Carnet"?e.jsx(we,{sx:{width:30},color:"white"}):e.jsx(De,{sx:{width:30}})}),e.jsx(h,{variant:"subtitle2",children:a==null?void 0:a.cardType})]})}}},{name:"expiration",label:"Vence",options:{filterType:"textField"}},{name:"register",label:"Fecha",options:{filterType:"textField",customBodyRenderLite:(o,j)=>{const a=r[o];return e.jsxs(u,{children:[e.jsx(h,{variant:"subtitle2",children:a==null?void 0:a.registerDate}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:a==null?void 0:a.registerTime})]})}}}],c=()=>{t?(n(!0),d(i)):(n(!1),C("Por el momento no se puede asignar la tarjeta. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return e.jsx(Pe,{children:e.jsx(Le,{isLoading:s,data:r||[],columns:x,options:{responsive:"simple",rowHover:!0,selectableRows:"single",selectableRowsOnClick:!0,selectToolbarPlacement:"replace",sortOrder:{name:"register",direction:"desc"},downloadOptions:{filename:"tarjetas_stock.csv",filterOptions:{useDisplayedColumnsOnly:!1}},onRowSelectionChange:(o,j,a)=>{const v=r==null?void 0:r.find((A,S)=>a.includes(S));l(v)},customToolbarSelect:o=>e.jsx(We,{handleAssign:c})}})})}const st=xe(g.lazy(()=>he(()=>import("./build-2f62642a.js"),["assets/js/build-2f62642a.js","assets/js/build-ff249ccd.js","assets/css/build-2e53629c.css","assets/js/build-c35749b2.js","assets/js/build-21c8fd33.js","assets/js/build-deaba545.js","assets/js/build-a95cd612.js","assets/js/build-45c14002.js","assets/js/build-fb7eb957.js","assets/js/build-7a360ede.js","assets/js/build-bee6630b.js","assets/js/build-2d03f662.js","assets/js/build-2c67f035.js","assets/js/build-bb72ca38.js","assets/js/build-a9857978.js","assets/js/build-d4a81a0e.js","assets/js/build-8afc3184.js","assets/js/build-ba6b5ae5.js","assets/js/build-d3854add.js","assets/js/build-d6522b34.js","assets/js/build-0f64fb7c.js","assets/js/build-d81db254.js","assets/js/build-d0cdcec7.js","assets/js/build-c7c745f5.js","assets/js/build-42756ae8.js","assets/js/build-2de398c6.js","assets/js/build-ecaf0d13.js","assets/js/build-efc7dfc7.js","assets/js/build-cb8ebebb.js","assets/js/build-8380f677.js","assets/js/build-2446f370.js","assets/js/build-a5b127ff.js","assets/js/build-53c7ff00.js","assets/js/build-e4031801.js","assets/js/build-584ef5c3.js","assets/js/build-a7a53a70.js","assets/js/build-033677ad.js"])));function rt(){const[s,r]=g.useState(!1),{data:t,isSuccess:n,isLoading:d}=Je(),{data:i,isSuccess:l,isLoading:C}=ze(),x=Xe(),{data:c,isLoading:o}=x,j=b(p=>p.setOpen),a=b(p=>p.setReadyToAssign),v=b(p=>p.open),{enqueueSnackbar:A}=E(),[S,w]=g.useState("1"),f=(p,T)=>{w(T)},I=()=>{t&&i&&l&&n?r(!0):A("Por el momento no se puede crear una tarjeta. Intente nuevamenta o reporte a sistemas",{variant:"warning",autoHideDuration:5e3})},m=()=>{t&&t.length>0&&i&&i.length>0?j(!0):(j(!1),A("Por el momento no se puede asignar tarjetas. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return g.useEffect(()=>{t&&t.length>0?a(!0):a(!1)},[t]),e.jsx(le,{title:"Stock de Tarjetas",children:e.jsxs(Ie,{children:[e.jsx(Ee,{name:"Stock de Tarjetas",links:[{name:"Inicio",href:ce.root},{name:"Administracion",href:ue.stock_cards},{name:me.stock_cards.name}],buttons:e.jsxs(u,{direction:"column",spacing:2,mt:{xs:2,md:0},children:[e.jsxs(u,{spacing:2,direction:{xs:"column",md:"row"},children:[c&&(c==null?void 0:c.length)>0&&e.jsx(pe,{sx:{color:"black"},type:"button",color:"secondary",variant:"contained",onClick:m,startIcon:e.jsx(He,{}),children:"Asignar Tarjetas"}),e.jsx(K,{loading:d||C,variant:"contained",onClick:I,startIcon:e.jsx(_e,{}),children:"Nueva Tarjeta"})]}),e.jsx(u,{alignItems:{xs:"center",md:"flex-end"},children:e.jsxs(Ne,{size:"small",color:"primary",value:S,exclusive:!0,onChange:f,"aria-label":"Platform",children:[e.jsx(z,{value:"1",children:e.jsx(Me,{})}),e.jsx(z,{value:"2",children:e.jsx(Oe,{})})]})})]})}),S==="2"&&e.jsx(Fe,{cards:x}),S==="1"&&e.jsx(tt,{cards:c,isLoading:o}),e.jsx(et,{open:s,setOpen:r}),v&&e.jsx(st,{})]})})}const Dt=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));export{k as M,Q as S,Be as W,wt as a,Dt as b};