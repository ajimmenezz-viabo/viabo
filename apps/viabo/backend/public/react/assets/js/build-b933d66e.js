import{u as q,r as g,E as D,n as L,g as P,o as N,aY as x,j as e,S as l,T as p}from"./index-4b99f413.js";import{u as k}from"./build-3a8905b3.js";import{c as j,d as K}from"./build-2009f55b.js";import{M as S,a as W,W as Q,S as Y}from"./build-3ba03787.js";import{u as f}from"./build-fe021a1f.js";import"./build-bb0265ab.js";import{C as B}from"./build-72c8723e.js";import{F as H}from"./build-7a1aa18c.js";import{M as $,R as A,a as w}from"./build-09eafbeb.js";import{R as G}from"./build-41005266.js";import"./build-31b96a33.js";import"./build-ecaf0d13.js";import"./build-2c3cdb47.js";import"./build-79240b72.js";import"./build-bee6630b.js";import"./build-92d12e9a.js";import"./build-cae86eed.js";import"./build-4c42a69c.js";import"./build-70e42481.js";import"./build-0a41abf6.js";import"./build-393df24b.js";import"./build-28ef993b.js";import"./build-eac152ed.js";import"./build-8ea1e281.js";import"./build-4e0a8c73.js";import"./build-b8fe6533.js";import"./build-ff2e3b30.js";import"./build-b66547c6.js";import"./build-c930eafb.js";import"./build-f8fc243b.js";import"./build-1cc39562.js";import"./build-1b6c7885.js";import"./build-00c4bcb0.js";import"./build-4f905a17.js";import"./build-9367c53e.js";const V=r=>{var t,i;const a=((t=r==null?void 0:r.commerce)==null?void 0:t.value)||"";return r!=null&&r.cardId?{cardId:r==null?void 0:r.cardId,commerceId:a}:{amount:r==null?void 0:r.numberOfCards.toString(),paymentProcessorId:((i=r==null?void 0:r.cardType)==null?void 0:i.value)||"",commerceId:a}},z=(r={})=>{const{enqueueSnackbar:a}=q(),[t,i]=g.useState(null),m=D();return{...L(W,{onSuccess:()=>{i(null),m.invalidateQueries([S.STOCK_CARDS_LIST]),a("Se asignaron las tarjetas al comercio",{variant:"success",autoHideDuration:5e3})},onError:n=>{m.invalidateQueries([S.STOCK_CARDS_LIST]);const o=P(n,"No se puede asignar las tarjetas al comercio");a(o,{variant:N(n),autoHideDuration:5e3}),i(o)},...r}),error:t||null}};function Re(){const r=f(s=>s.setOpen),a=f(s=>s.setCard),t=f(s=>s.card),i=x([S.AFFILIATED_COMMERCES_LIST])||[],m=x([S.STOCK_CARDS_LIST])||[],u=x([Y.CARD_TYPES_LIST])||[],[n,o]=g.useState(!1),{mutate:T,isLoading:b}=z(),E=g.useMemo(()=>{const s={commerce:j().nullable().required("El comercio es requerido")};return t?{...s}:{...s,cardType:j().nullable().required("El tipo de tarjeta es requerido"),numberOfCards:K().min(1,"Al menos debe existir una tarjeta").test("maxCards","El maximo de tarjetas",function(d){const{cardType:O}=this.parent,h=m.filter(R=>R.cardTypeId===O.id).length;return d>h?this.createError({message:`No se pueden agregar más tarjetas que las disponibles (${h} tarjetas)`}):!0}).required("El número de tarjetas es requerido")}},[t,m]),y=g.useMemo(()=>t?{cardId:t==null?void 0:t.id,commerce:null}:{numberOfCards:1,cardType:u&&u.length>0&&u[0]||null,commerce:null},[t]),C=k({initialValues:y,validationSchema:j().shape(E),onSubmit:(s,{setSubmitting:d})=>{d(!1),o(!0)}}),{isSubmitting:v,handleSubmit:I,values:_,setSubmitting:F}=C,c=v||b,M=s=>{const d=V(s);T(d,{onSuccess:()=>{r(!1),a(null),o(!1)},onError:()=>{o(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx($,{onClose:()=>{r(!1),a(null)},onSuccess:I,isSubmitting:c,fullWidth:!0,scrollType:"body",title:t?"Asignar Tarjeta":"Asignar Tarjetas",textButtonSuccess:"Asignar",open:!n,children:e.jsx(H,{formik:C,children:e.jsxs(l,{spacing:3,sx:{py:3},children:[t?e.jsx(B,{card:t}):e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta:"}),e.jsx(A,{name:"cardType",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:u,disabled:c})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de tarjetas:"}),e.jsx(G,{name:"numberOfCards",placeholder:"1",type:"number",InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:"1"},disabled:c})]})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Comercio:"}),e.jsx(A,{name:"commerce",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:i,disabled:c})]})]})})}),n&&e.jsx(w,{title:t?"Asignar Tarjeta":"Asignar Tarjetas",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{o(!1),F(!1)},open:n,isSubmitting:c,description:e.jsxs(l,{spacing:2,children:[e.jsx(p,{children:t?"¿Está seguro de asignar esta tarjeta a este comercio?":"¿Está seguro de asignar estas tarjetas a este comercio?"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Q,{}),e.jsx(p,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{M(_)},fullWidth:!0,maxWidth:"xs"})]})}export{Re as default};
