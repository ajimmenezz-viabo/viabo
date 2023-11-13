import{ak as q,r as g,k as D,a as L,g as k,b as P,aT as x,j as e,S as m,T as d}from"./index-5b9abb5d.js";import{u as N}from"./build-475a8c0d.js";import{c as f,b as K}from"./build-52be6f5f.js";import{M as S,a as W,S as Q}from"./build-1b029d8b.js";import{u as j}from"./build-fce65b4c.js";import{C as B}from"./build-3abb5e9d.js";import{F as H}from"./build-e33dd52a.js";import{R as A}from"./build-7206e541.js";import{R as Y}from"./build-4687a6d9.js";import{a as $,M as w}from"./build-e097666d.js";import{W as G}from"./build-48aa7e01.js";import"./build-0307e86f.js";import"./build-cd679c67.js";import"./build-a4831788.js";import"./build-71e28a4a.js";import"./build-559b3bfe.js";import"./build-102bf6ff.js";import"./build-2cdf3779.js";import"./build-6bf4add6.js";import"./build-749e2f01.js";import"./build-dfaaa189.js";import"./build-3f722807.js";import"./build-3f74d6f1.js";import"./build-df269ee7.js";import"./build-cfcbf657.js";import"./build-e39b555e.js";import"./build-bee6630b.js";import"./build-069ad97e.js";import"./build-6b9539fd.js";import"./build-f8705fa2.js";import"./build-90852445.js";import"./build-6bc3e71f.js";import"./build-17708e30.js";import"./build-62079204.js";import"./build-ae4e085b.js";import"./build-a8f597ad.js";import"./build-9479cbad.js";import"./build-a0eac57b.js";import"./build-f8fc243b.js";import"./build-cc901af1.js";import"./build-ddd0d1c0.js";import"./build-b368167f.js";import"./build-fe5ba574.js";import"./build-a3daaeb8.js";const V=r=>{var t,a;const i=((t=r==null?void 0:r.commerce)==null?void 0:t.value)||"";return r!=null&&r.cardId?{cardId:r==null?void 0:r.cardId,commerceId:i}:{amount:r==null?void 0:r.numberOfCards.toString(),paymentProcessorId:((a=r==null?void 0:r.cardType)==null?void 0:a.value)||"",commerceId:i}},z=(r={})=>{const{enqueueSnackbar:i}=q(),[t,a]=g.useState(null),l=D();return{...L(W,{onSuccess:()=>{a(null),l.invalidateQueries([S.STOCK_CARDS_LIST]),i("Se asignaron las tarjetas al comercio",{variant:"success",autoHideDuration:5e3})},onError:n=>{l.invalidateQueries([S.STOCK_CARDS_LIST]);const o=k(n,"No se puede asignar las tarjetas al comercio");i(o,{variant:P(n),autoHideDuration:5e3}),a(o)},...r}),error:t||null}};function Qe(){const r=j(s=>s.setOpen),i=j(s=>s.setCard),t=j(s=>s.card),a=x([S.AFFILIATED_COMMERCES_LIST])||[],l=x([S.STOCK_CARDS_LIST])||[],u=x([Q.CARD_TYPES_LIST])||[],[n,o]=g.useState(!1),{mutate:T,isLoading:b}=z(),E=g.useMemo(()=>{const s={commerce:f().nullable().required("El comercio es requerido")};return t?{...s}:{...s,cardType:f().nullable().required("El tipo de tarjeta es requerido"),numberOfCards:K().min(1,"Al menos debe existir una tarjeta").test("maxCards","El maximo de tarjetas",function(p){const{cardType:O}=this.parent,h=l.filter(R=>R.cardTypeId===O.id).length;return p>h?this.createError({message:`No se pueden agregar más tarjetas que las disponibles (${h} tarjetas)`}):!0}).required("El número de tarjetas es requerido")}},[t,l]),y=g.useMemo(()=>t?{cardId:t==null?void 0:t.id,commerce:null}:{numberOfCards:1,cardType:u&&u.length>0&&u[0]||null,commerce:null},[t]),C=N({initialValues:y,validationSchema:f().shape(E),onSubmit:(s,{setSubmitting:p})=>{p(!1),o(!0)}}),{isSubmitting:v,handleSubmit:I,values:_,setSubmitting:F}=C,c=v||b,M=s=>{const p=V(s);T(p,{onSuccess:()=>{r(!1),i(null),o(!1)},onError:()=>{o(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx($,{onClose:()=>{r(!1),i(null)},onSuccess:I,isSubmitting:c,fullWidth:!0,scrollType:"body",title:t?"Asignar Tarjeta":"Asignar Tarjetas",textButtonSuccess:"Asignar",open:!n,children:e.jsx(H,{formik:C,children:e.jsxs(m,{spacing:3,sx:{py:3},children:[t?e.jsx(B,{card:t}):e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(d,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta:"}),e.jsx(A,{name:"cardType",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:u,disabled:c})]}),e.jsxs(m,{children:[e.jsx(d,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de tarjetas:"}),e.jsx(Y,{name:"numberOfCards",placeholder:"1",type:"number",InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:"1"},disabled:c})]})]}),e.jsxs(m,{children:[e.jsx(d,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Comercio:"}),e.jsx(A,{name:"commerce",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:a,disabled:c})]})]})})}),n&&e.jsx(w,{title:t?"Asignar Tarjeta":"Asignar Tarjetas",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{o(!1),F(!1)},open:n,isSubmitting:c,description:e.jsxs(m,{spacing:2,children:[e.jsx(d,{children:t?"¿Está seguro de asignar esta tarjeta a este comercio?":"¿Está seguro de asignar estas tarjetas a este comercio?"}),e.jsxs(m,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(G,{}),e.jsx(d,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{M(_)},fullWidth:!0,maxWidth:"xs"})]})}export{Qe as default};