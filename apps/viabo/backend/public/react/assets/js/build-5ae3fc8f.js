import{ak as q,r as g,k as D,a as L,g as k,b as P,aT as x,j as e,S as m,T as d}from"./index-346c4534.js";import{u as N}from"./build-31883e00.js";import{c as f,b as K}from"./build-737c64c4.js";import{M as S,a as W,S as Q}from"./build-2fef3fd1.js";import{u as j}from"./build-b25654fe.js";import{C as B}from"./build-f12c9d12.js";import{F as H}from"./build-1db93dc8.js";import{R as A}from"./build-fe827404.js";import{R as Y}from"./build-d933afe7.js";import{a as $,M as w}from"./build-cda2d33b.js";import{W as G}from"./build-b5443b7f.js";import"./build-a20336ff.js";import"./build-6435c1fd.js";import"./build-9177a231.js";import"./build-4fa429fc.js";import"./build-cb0e7475.js";import"./build-f0d75a0c.js";import"./build-45178a4b.js";import"./build-40e523c6.js";import"./build-24563a1e.js";import"./build-f149ac76.js";import"./build-c4e15452.js";import"./build-63044447.js";import"./build-4c40c561.js";import"./build-429ae8b4.js";import"./build-6cc29a6e.js";import"./build-bee6630b.js";import"./build-515c977a.js";import"./build-140098fa.js";import"./build-6a6f2775.js";import"./build-f8f5ccb1.js";import"./build-e9361a90.js";import"./build-6471b759.js";import"./build-2a2c9560.js";import"./build-ee9a7afc.js";import"./build-68a52787.js";import"./build-f60f1278.js";import"./build-5c8ea86c.js";import"./build-f8fc243b.js";import"./build-dd40c98b.js";import"./build-0be84931.js";import"./build-3a26c3a8.js";import"./build-dbf7eaf8.js";import"./build-2fcf14dd.js";const V=r=>{var t,a;const i=((t=r==null?void 0:r.commerce)==null?void 0:t.value)||"";return r!=null&&r.cardId?{cardId:r==null?void 0:r.cardId,commerceId:i}:{amount:r==null?void 0:r.numberOfCards.toString(),paymentProcessorId:((a=r==null?void 0:r.cardType)==null?void 0:a.value)||"",commerceId:i}},z=(r={})=>{const{enqueueSnackbar:i}=q(),[t,a]=g.useState(null),l=D();return{...L(W,{onSuccess:()=>{a(null),l.invalidateQueries([S.STOCK_CARDS_LIST]),i("Se asignaron las tarjetas al comercio",{variant:"success",autoHideDuration:5e3})},onError:n=>{l.invalidateQueries([S.STOCK_CARDS_LIST]);const o=k(n,"No se puede asignar las tarjetas al comercio");i(o,{variant:P(n),autoHideDuration:5e3}),a(o)},...r}),error:t||null}};function Qe(){const r=j(s=>s.setOpen),i=j(s=>s.setCard),t=j(s=>s.card),a=x([S.AFFILIATED_COMMERCES_LIST])||[],l=x([S.STOCK_CARDS_LIST])||[],u=x([Q.CARD_TYPES_LIST])||[],[n,o]=g.useState(!1),{mutate:T,isLoading:b}=z(),E=g.useMemo(()=>{const s={commerce:f().nullable().required("El comercio es requerido")};return t?{...s}:{...s,cardType:f().nullable().required("El tipo de tarjeta es requerido"),numberOfCards:K().min(1,"Al menos debe existir una tarjeta").test("maxCards","El maximo de tarjetas",function(p){const{cardType:O}=this.parent,h=l.filter(R=>R.cardTypeId===O.id).length;return p>h?this.createError({message:`No se pueden agregar más tarjetas que las disponibles (${h} tarjetas)`}):!0}).required("El número de tarjetas es requerido")}},[t,l]),y=g.useMemo(()=>t?{cardId:t==null?void 0:t.id,commerce:null}:{numberOfCards:1,cardType:u&&u.length>0&&u[0]||null,commerce:null},[t]),C=N({initialValues:y,validationSchema:f().shape(E),onSubmit:(s,{setSubmitting:p})=>{p(!1),o(!0)}}),{isSubmitting:v,handleSubmit:I,values:_,setSubmitting:F}=C,c=v||b,M=s=>{const p=V(s);T(p,{onSuccess:()=>{r(!1),i(null),o(!1)},onError:()=>{o(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx($,{onClose:()=>{r(!1),i(null)},onSuccess:I,isSubmitting:c,fullWidth:!0,scrollType:"body",title:t?"Asignar Tarjeta":"Asignar Tarjetas",textButtonSuccess:"Asignar",open:!n,children:e.jsx(H,{formik:C,children:e.jsxs(m,{spacing:3,sx:{py:3},children:[t?e.jsx(B,{card:t}):e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(d,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta:"}),e.jsx(A,{name:"cardType",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:u,disabled:c})]}),e.jsxs(m,{children:[e.jsx(d,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de tarjetas:"}),e.jsx(Y,{name:"numberOfCards",placeholder:"1",type:"number",InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:"1"},disabled:c})]})]}),e.jsxs(m,{children:[e.jsx(d,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Comercio:"}),e.jsx(A,{name:"commerce",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:a,disabled:c})]})]})})}),n&&e.jsx(w,{title:t?"Asignar Tarjeta":"Asignar Tarjetas",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{o(!1),F(!1)},open:n,isSubmitting:c,description:e.jsxs(m,{spacing:2,children:[e.jsx(d,{children:t?"¿Está seguro de asignar esta tarjeta a este comercio?":"¿Está seguro de asignar estas tarjetas a este comercio?"}),e.jsxs(m,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(G,{}),e.jsx(d,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{M(_)},fullWidth:!0,maxWidth:"xs"})]})}export{Qe as default};