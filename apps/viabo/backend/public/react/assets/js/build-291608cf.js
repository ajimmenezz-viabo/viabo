import{z as _,j as e,a8 as R,r as g,S as l,T as j,B as E,I as P,ac as D,U as X,aM as oe,aw as ie,$ as le,K as ce,N as de,k as ue,a as me,Z as B,g as F,b as pe,d as z,aN as q,aO as xe,aP as W,aQ as he,a2 as ge,as as je,L as ee,aR as Ce,aS as fe,aT as ve,H as Se,aU as K,V as be,P as ye,a4 as Ae,aK as Te,aL as we,p as Ie,aa as Ee,ab as ke}from"./index-5914b1fb.js";import{u as Me}from"./build-f6f438e5.js";import{c as G,a as N}from"./build-faa42696.js";import{a as Re,D as De}from"./build-23c6fce1.js";import{c as te}from"./build-b57852ec.js";import{a as _e}from"./build-b8a0c28b.js";import{F as Pe,M as Q}from"./build-c62d72c2.js";import{R as Y}from"./build-f0c05603.js";import{R as $}from"./build-91eb3a6d.js";import{M as Fe}from"./build-29cf80d2.js";import{I as O}from"./build-ecf2e624.js";import{C as Ve}from"./build-bbb3372b.js";import{V as Le}from"./build-d7788e6e.js";import{A as Ne}from"./build-3480fbad.js";import{W as Oe}from"./build-70b12df3.js";import{u as A,C as ze,R as He}from"./build-cf1479e2.js";import{E as U}from"./build-21808848.js";import{v as Z,A as Be}from"./build-ef0ed077.js";import{P as qe,a as We,b as Ke,H as Ge,A as Qe}from"./build-60153964.js";import{M as Ye}from"./build-6fe99893.js";import{A as $e}from"./build-d8ecdeb6.js";import{e as w,D as Ue}from"./build-bf7efcf7.js";import{C as se}from"./build-48835d84.js";import{C as Ze}from"./build-e1090473.js";import{V as Je}from"./build-c47585df.js";import{V as Xe}from"./build-813cba1c.js";import{C as et}from"./build-731e9aff.js";import{s as tt}from"./build-f8fc243b.js";import{u as st}from"./build-7761cca2.js";import{T as rt}from"./build-784a8ed3.js";import{S as at}from"./build-5e492155.js";import{T as nt,a as J}from"./build-1539ed51.js";import{A as ot}from"./build-e6395f36.js";const it=_([e.jsx("path",{d:"M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zM2 4h15v2H2z"},"0"),e.jsx("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"1")],"AddBusiness"),lt=_([e.jsx("path",{d:"M15.36 9H3.64l-.6 3h12.92z",opacity:".3"},"0"),e.jsx("path",{d:"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z"},"1"),e.jsx("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"2")],"AddBusinessTwoTone"),ct=_(e.jsx("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted"),dt=_(e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVertTwoTone"),ut=t=>{const r=t.map(s=>{var a;return{id:s==null?void 0:s.id,name:(a=s==null?void 0:s.name)==null?void 0:a.toUpperCase(),statusId:s==null?void 0:s.active}})||[];return te(r,"id","name")},re={CARD_TYPES_LIST:"cardTypes"},mt=async()=>{const{data:t}=await R.get("/api/payment-processors");return ut(t)};function pt({card:t,disableShow:r}){const[s,a]=g.useState(!0),c=n=>{n.stopPropagation(),a(d=>!d)};return e.jsxs(l,{position:"relative",children:[e.jsx(j,{sx:{mb:1,typography:"caption",opacity:.48},children:"CVV"}),e.jsx(l,{direction:"row",spacing:1,alignItems:"center",children:e.jsx(j,{sx:{typography:"subtitle2"},children:s?"***":t==null?void 0:t.cvv})}),!r&&e.jsx(E,{position:"absolute",sx:{left:"32px",top:"20px"},children:e.jsx(P,{size:"small",color:"inherit",onClick:c,sx:{opacity:.2},children:s?e.jsx(Je,{}):e.jsx(Xe,{})})})]})}function xt({card:t}){const r=A(p=>p.isReadyToAssign),s=A(p=>p.setOpen),a=A(p=>p.setCard),[c,n]=g.useState(null),d=!!c,{enqueueSnackbar:f}=D(),u=p=>{n(p.currentTarget)},m=()=>{n(null)},o=()=>{r?(s(!0),a(t)):(s(!1),f("Por el momento no se puede asignar la tarjeta. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return e.jsxs(e.Fragment,{children:[e.jsx(X,{title:"Acciones",children:e.jsx(P,{onClick:u,sx:{ml:2},"aria-controls":d?"card-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,children:e.jsx(dt,{width:20,height:20})})}),e.jsx(oe,{open:!!d,anchorEl:c,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-start",sx:{mt:-1,mr:0,p:2,width:250,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:e.jsxs(ie,{onClick:()=>{o(),m()},sx:{color:"text.secondary"},children:[e.jsx(it,{width:24,height:24}),"Asignar a Comercio"]})})]})}function ht({card:t}){return e.jsxs(ze,{children:[e.jsx(et,{action:e.jsx(xt,{card:t}),title:e.jsx(j,{sx:{typography:"subtitle2",opacity:.72},children:"Viabo Card"}),subheader:t==null?void 0:t.register,sx:{p:0}}),e.jsx("div",{children:e.jsx(Ze,{card:t})}),e.jsxs(l,{direction:"row",spacing:5,children:[e.jsxs(l,{children:[e.jsx(j,{sx:{mb:1,typography:"caption",opacity:.48},children:"Vencimiento"}),e.jsx(j,{sx:{typography:"subtitle1"},children:t==null?void 0:t.expiration})]}),e.jsx(pt,{card:t})]})]})}function gt(){return e.jsxs(se,{sx:t=>({color:t.palette.common.white,display:"flex",p:3,flexDirection:"column",justifyContent:"space-between"}),children:[e.jsxs(l,{children:[e.jsx(w,{variant:"text",sx:{width:.3}}),e.jsx(w,{variant:"text",sx:{width:.5}})]}),e.jsx(l,{sx:{py:1.5},children:e.jsx(w,{variant:"text",sx:{width:.9,height:40}})}),e.jsxs(l,{direction:"row",spacing:2,children:[e.jsxs(l,{spacing:.5,children:[e.jsx(w,{variant:"text",sx:{width:100}}),e.jsx(w,{variant:"text",sx:{width:40}})]}),e.jsxs(l,{spacing:.5,children:[e.jsx(w,{variant:"text",sx:{width:100}}),e.jsxs(l,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(w,{variant:"text",sx:{width:40}}),e.jsx(w,{variant:"circular",sx:{width:16,height:16}})]})]})]})]})}function jt({cards:t,emptyMessage:r="No hay tarjetas disponibles en stock",cardComponent:s=ht,...a}){const c=le("up","xl"),{isCollapse:n}=ce(),[d,f]=g.useState(1),[u,m]=g.useState(""),[o,p]=g.useState([]),{data:i,isLoading:S,isError:b,error:y,isSuccess:k,refetch:v}=t,C=i||[],x=S,h=c?12:9,T=g.useMemo(()=>(u!==""?o:C)||[],[u,C,o]),L=T.length||0,ae=Math.ceil(L/h),H=st(T||[],h),ne=(I,M)=>{f(M),H.jump(M)};return g.useEffect(()=>{if(u){const I=tt(C,u);p(I)}else p([])},[u,C]),e.jsxs(e.Fragment,{children:[k&&(C==null?void 0:C.length)>0&&e.jsxs(E,{display:"flex",mb:3,flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center"},...a,children:[e.jsx(E,{children:e.jsx(rt,{fullWidth:!0,size:"small",placeholder:"Buscar ...",value:u,onChange:I=>m(I.target.value),InputProps:{startAdornment:e.jsx(O,{position:"start",children:e.jsx(E,{sx:{color:"text.disabled"},children:e.jsx(at,{sx:{marginTop:1}})})})}})}),e.jsx(E,{sx:{flex:"1 1 auto",mb:{xs:3}}}),e.jsx(qe,{count:ae,page:d,onChange:ne})]}),!x&&k&&C.length===0&&e.jsx(U,{widthImage:"30%",message:r}),!x&&b&&e.jsx(de,{widthImage:"30%",errorMessage:y,handleButton:v}),!b&&e.jsx(E,{mb:3,sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:n?"repeat(3, 1fr)":"repeat(2, 1fr)",xl:"repeat(4, 1fr)"}},children:(x?[...Array(h)]:H.currentData()||[]).map((I,M)=>I?g.createElement(s,{card:I,key:M}):e.jsx(gt,{},M))}),C.length>0&&L===0&&e.jsx(U,{widthImage:"30%",message:"No hay tarjetas que coincidan con la búsqueda"})]})}function Ct({handleAssign:t}){return e.jsx(E,{sx:{marginRight:3},children:e.jsx(X,{title:"Asignar",children:e.jsx(P,{onClick:t,children:e.jsx($e,{sx:{color:r=>r.palette.info.main},width:24,height:24})})})})}const V={STOCK_CARDS_LIST:"stockCards",AFFILIATED_COMMERCES_LIST:"affiliatedCommerces"},ft=t=>{const{cardNumber:r,cardType:s,expiration:a,cvv:c,assigned:n}=t,d=a==null?void 0:a.slice(-2),f=(a==null?void 0:a.slice(0,3))+d,u={cardNumber:r.replace(/\s+/g,""),paymentProcessorId:s==null?void 0:s.value,expirationDate:f,cvv:c,commerceId:(n==null?void 0:n.value)||""};return Re(u)},vt=t=>{const r=(t==null?void 0:t.map(s=>({id:s==null?void 0:s.id,name:s==null?void 0:s.name})))||[];return te(r,"id","name")},St=async t=>(await R.post("/api/card/new",t),t),bt=async()=>{const{data:t}=await R.get("/api/commerces/affiliates");return vt(t)},yt=async()=>{const{data:t}=await R.get("/api/cards/stock");return _e(t)},ms=async t=>{const r=t!=null&&t.cardId?"/api/card/assign/commerce":"/api/cards/assign/commerce",{data:s}=await R.post(r,t);return s},At=(t={})=>{const r=ue(),s=me(St,t);return{...s,registerCard:async(c,n)=>{const{onSuccess:d,onError:f,mutationOptions:u}=n;try{await B.promise(s.mutateAsync(c,u),{pending:"Registrando tarjeta ...",success:{render({data:m}){return r.invalidateQueries([V.STOCK_CARDS_LIST]),d(m),m!=null&&m.isAssigned?"Se agrego una nueva tarjeta al comercio":"Se agrego una nueva tarjeta al stock"}}})}catch(m){const o=F(m,"No se puede agregar la tarjeta al stock");f(o),B.error(o,{type:pe(m)})}}}},Tt=(t={})=>{const{enqueueSnackbar:r}=D(),[s,a]=g.useState(null);return{...z([V.AFFILIATED_COMMERCES_LIST],bt,{staleTime:60*5e3,onError:n=>{const d=F(n,"No se puede obtener la lista de comercios afiliados");a(d),r(d,{variant:"error",autoHideDuration:5e3})},...t}),error:s||null}},wt=(t={})=>{const[r,s]=g.useState(null);return{...z([V.STOCK_CARDS_LIST],yt,{staleTime:6e4,onError:c=>{const n=F(c,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");s(n)},...t}),error:r||null}};function It({setOpen:t}){const{registerCard:r,isLoading:s}=At(),a=q([V.AFFILIATED_COMMERCES_LIST])||[],c=q([re.CARD_TYPES_LIST])||[],[n,d]=g.useState(!1),f=G().shape({cardNumber:N().transform((x,h)=>h.replace(/\s/g,"")).min(16,"Debe contener 16 digitos").required("El número de la tarjeta es requerido"),cvv:N().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),cardType:G().nullable().required("El tipo de tarjeta es requerido"),expiration:N().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(x){const h=xe(`01/${x}`,"dd/MM/yyyy",new Date),T=new Date;return W(h)&&he(h,T)})}),u=Me({initialValues:{cardNumber:"",cardType:c&&c.length>0&&c[0]||null,expiration:"",cvv:"",assigned:null},validationSchema:f,onSubmit:(x,{setSubmitting:h})=>{h(!1),x.assigned?d(!0):C(x)}}),{isSubmitting:m,values:o,setFieldValue:p,errors:i,handleSubmit:S,touched:b,resetForm:y,setSubmitting:k}=u,v=m||s,C=(x,h=!1)=>{const T=ft(x);r({...T,isAssigned:h},{onSuccess:()=>{t(!1),y(),d(!1)},onError:()=>{d(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(ge,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(Pe,{formik:u,children:e.jsx(l,{spacing:5,sx:{p:3},children:e.jsxs(l,{spacing:3,children:[e.jsxs(l,{children:[e.jsx(j,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta"}),e.jsx(Y,{name:"cardType",disableClearable:!0,textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:c,disabled:v})]}),e.jsxs(l,{children:[e.jsx(j,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de Tarjeta"}),e.jsx($,{autoFocus:!0,name:"cardNumber",required:!0,placeholder:"5254 2700 9717 8968",fullWidth:!0,InputProps:{startAdornment:e.jsx(O,{position:"start",children:e.jsx(Ve,{})}),inputComponent:Q,inputProps:{mask:"0000 0000 0000 0000",value:o.cardNumber,onAccept:x=>{p("cardNumber",x)}}},disabled:v})]}),e.jsxs(l,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(l,{sx:{width:{xs:"100%",lg:"40%"}},children:[e.jsx(j,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx($,{name:"cvv",required:!0,placeholder:"123",InputProps:{startAdornment:e.jsx(O,{position:"start",children:e.jsx(Le,{})}),inputComponent:Q,inputProps:{mask:"000",onAccept:x=>{p("cvv",x)},value:o.cvv}},disabled:v})]}),e.jsxs(l,{children:[e.jsx(j,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence"}),e.jsx(De,{disabled:v,views:["year","month"],name:"expiration",value:new Date(o.expiration)??null,onChange:x=>W(x)?u.setFieldValue("expiration",je(x,"MM/yyyy")):u.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,error:!!(b.expiration&&i.expiration),required:!0,helperText:b.expiration&&i.expiration?i.expiration:""}},disablePast:!0,format:"MM/yy"})]})]}),e.jsxs(l,{children:[e.jsx(j,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Asignar:"}),e.jsx(Y,{name:"assigned",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:a,disabled:v})]})]})})})}),e.jsx(l,{sx:{px:3,pt:3},children:e.jsx(ee,{loading:v,variant:"contained",color:"primary",fullWidth:!0,type:"submit",onClick:S,disabled:v,startIcon:e.jsx(Ne,{}),children:"Crear"})}),n&&e.jsx(Fe,{title:"Asignar Tarjeta",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{d(!1),k(!1)},open:n,isSubmitting:s,description:e.jsxs(l,{spacing:2,children:[e.jsx(j,{children:"¿Está seguro de asignar esta tarjeta a este comercio?"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Oe,{}),e.jsx(j,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{C(o,!0)},fullWidth:!0,maxWidth:"xs"})]})}function Et({open:t,setOpen:r}){const{themeDirection:s}=Ce(),a=s!=="rtl"?Z({distance:K.BASE_WIDTH,durationIn:.32,durationOut:.32}).inRight:Z({distance:K.BASE_WIDTH,durationIn:.32,durationOut:.32}).inLeft;g.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[t]);const c=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(fe,{open:t,onClick:c,sx:{background:"transparent",zIndex:n=>n.zIndex.drawer+1}}),e.jsx(Be,{children:t&&e.jsx(e.Fragment,{children:e.jsxs(He,{...a,children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(j,{variant:"subtitle1",children:"Nueva Tarjeta"}),e.jsx("div",{children:e.jsx(P,{"aria-label":"close",size:"medium",onClick:c,children:e.jsx(ve,{width:20,height:20,fontSize:"inherit",color:"primary"})})})]}),e.jsx(Se,{sx:{borderStyle:"dashed"}}),e.jsx(It,{setOpen:r})]})})})]})}function kt({isLoading:t,cards:r=[]}){const s=A(o=>o.isReadyToAssign),a=A(o=>o.setOpen),c=A(o=>o.setCard),[n,d]=g.useState(null),{enqueueSnackbar:f}=D(),u=[{name:"cardNumberHidden",label:"Tarjeta",options:{customBodyRenderLite:(o,p)=>{const i=r[o];return e.jsx(j,{variant:"subtitle2",fontWeight:"bold",children:i==null?void 0:i.cardNumberHidden})}}},{name:"cardType",label:"Tipo",options:{customBodyRenderLite:(o,p)=>{const i=r[o];return e.jsxs(l,{flexDirection:"row",alignItems:"center",gap:1,children:[e.jsx(be,{sx:S=>({width:45,height:45,color:S.palette.primary.contrastText,backgroundColor:S.palette.primary.light}),children:(i==null?void 0:i.cardType)==="Carnet"?e.jsx(We,{sx:{width:30},color:"white"}):e.jsx(Ye,{sx:{width:30}})}),e.jsx(j,{variant:"subtitle2",children:i==null?void 0:i.cardType})]})}}},{name:"expiration",label:"Vence",options:{filterType:"textField"}},{name:"register",label:"Fecha",options:{filterType:"textField",customBodyRenderLite:(o,p)=>{const i=r[o];return e.jsxs(l,{children:[e.jsx(j,{variant:"subtitle2",children:i==null?void 0:i.registerDate}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:i==null?void 0:i.registerTime})]})}}}],m=()=>{s?(a(!0),c(n)):(a(!1),f("Por el momento no se puede asignar la tarjeta. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return e.jsx(se,{children:e.jsx(Ue,{isLoading:t,data:r||[],columns:u,options:{responsive:"simple",rowHover:!0,selectableRows:"single",selectableRowsOnClick:!0,selectToolbarPlacement:"replace",sortOrder:{name:"register",direction:"desc"},downloadOptions:{filename:"tarjetas_stock.csv",filterOptions:{useDisplayedColumnsOnly:!1}},onRowSelectionChange:(o,p,i)=>{const S=r==null?void 0:r.find((b,y)=>i.includes(y));d(S)},customToolbarSelect:o=>e.jsx(Ct,{handleAssign:m})}})})}const Mt=(t={})=>{const{enqueueSnackbar:r}=D(),[s,a]=g.useState(null);return{...z([re.CARD_TYPES_LIST],mt,{staleTime:60*5e3,onError:n=>{const d=F(n,"No se puede obtener la lista de los tipos de tarjeta");a(d),r(d,{variant:"error",autoHideDuration:5e3})},...t}),error:s||null}},Rt=Ee(g.lazy(()=>ke(()=>import("./build-eae2af52.js"),["assets/js/build-eae2af52.js","assets/js/index-5914b1fb.js","assets/css/build-f63bc8fe.css","assets/js/build-f6f438e5.js","assets/js/build-faa42696.js","assets/js/build-cf1479e2.js","assets/js/build-48835d84.js","assets/js/build-556efae6.js","assets/js/build-e1090473.js","assets/js/build-60153964.js","assets/js/build-729cafe5.js","assets/js/build-6ed57473.js","assets/js/build-0eef8a39.js","assets/js/build-6fe99893.js","assets/js/build-d581bd4f.js","assets/js/build-c47585df.js","assets/js/build-813cba1c.js","assets/js/build-c62d72c2.js","assets/js/build-c24ec286.js","assets/js/build-07eaa56e.js","assets/js/build-784a8ed3.js","assets/js/build-ef0ed077.js","assets/js/build-bee6630b.js","assets/js/build-f0c05603.js","assets/js/build-bf7efcf7.js","assets/js/build-63a5a323.js","assets/js/build-1dfe973f.js","assets/js/build-23c6fce1.js","assets/js/build-ecf2e624.js","assets/js/build-91eb3a6d.js","assets/js/build-29cf80d2.js","assets/js/build-70b12df3.js","assets/js/build-b57852ec.js","assets/js/build-b8a0c28b.js","assets/js/build-bbb3372b.js","assets/js/build-d7788e6e.js","assets/js/build-3480fbad.js","assets/js/build-21808848.js","assets/js/build-d8ecdeb6.js","assets/js/build-731e9aff.js","assets/js/build-f8fc243b.js","assets/js/build-7761cca2.js","assets/js/build-5e492155.js","assets/js/build-1539ed51.js","assets/js/build-e6395f36.js"])));function Dt(){const[t,r]=g.useState(!1),{data:s,isSuccess:a,isLoading:c}=Tt(),{data:n,isSuccess:d,isLoading:f}=Mt(),u=wt(),{data:m,isLoading:o}=u,p=A(h=>h.setOpen),i=A(h=>h.setReadyToAssign),S=A(h=>h.open),{enqueueSnackbar:b}=D(),[y,k]=g.useState("1"),v=(h,T)=>{k(T)},C=()=>{s&&n&&d&&a?r(!0):b("Por el momento no se puede crear una tarjeta. Intente nuevamenta o reporte a sistemas",{variant:"warning",autoHideDuration:5e3})},x=()=>{s&&s.length>0&&n&&n.length>0?p(!0):(p(!1),b("Por el momento no se puede asignar tarjetas. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return g.useEffect(()=>{s&&s.length>0?i(!0):i(!1)},[s]),e.jsx(ye,{title:"Stock de Tarjetas",children:e.jsxs(Ke,{children:[e.jsx(Ge,{name:"Stock de Tarjetas",links:[{name:"Inicio",href:Ae.root},{name:"Administracion",href:Te.stock_cards},{name:we.stock_cards.name}],buttons:e.jsxs(l,{direction:"column",spacing:2,mt:{xs:2,md:0},children:[e.jsxs(l,{spacing:2,direction:{xs:"column",md:"row"},children:[m&&(m==null?void 0:m.length)>0&&e.jsx(Ie,{sx:{color:"text.primary"},type:"button",color:"secondary",variant:"contained",onClick:x,startIcon:e.jsx(lt,{}),children:"Asignar Tarjetas"}),e.jsx(ee,{loading:c||f,variant:"contained",onClick:C,startIcon:e.jsx(Qe,{}),children:"Nueva Tarjeta"})]}),e.jsx(l,{alignItems:{xs:"center",md:"flex-end"},children:e.jsxs(nt,{size:"small",color:"primary",value:y,exclusive:!0,onChange:v,"aria-label":"Platform",children:[e.jsx(J,{value:"1",children:e.jsx(ct,{})}),e.jsx(J,{value:"2",children:e.jsx(ot,{})})]})})]})}),y==="2"&&e.jsx(jt,{cards:u}),y==="1"&&e.jsx(kt,{cards:m,isLoading:o}),e.jsx(Et,{open:t,setOpen:r}),S&&e.jsx(Rt,{})]})})}const ps=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"}));export{V as M,re as S,ms as a,ps as b};
