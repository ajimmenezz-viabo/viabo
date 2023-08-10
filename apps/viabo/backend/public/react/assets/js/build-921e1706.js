import{u as q,r as g,E as D,n as L,g as P,o as N,b0 as x,j as e,S as l,T as p}from"./build-66521f42.js";import{u as k}from"./build-1da746e9.js";import{c as f,d as K}from"./build-47ea8464.js";import{M as S,a as W,W as Q,S as B}from"./build-4d096a62.js";import{u as j}from"./build-9329eefd.js";import{C as H}from"./build-5008115c.js";import{R as Y}from"./build-7828142a.js";import{R as A}from"./build-29719f93.js";import{F as $}from"./build-6460db89.js";import{M as w,a as G}from"./build-e3b145ef.js";import"./build-300c7970.js";import"./build-ecaf0d13.js";import"./build-439cb602.js";import"./build-c4917e3a.js";import"./build-bee6630b.js";import"./build-0161e1e2.js";import"./build-ba5534ae.js";import"./build-337ca852.js";import"./build-7e86f35e.js";import"./build-a6d123aa.js";import"./build-c2476d0d.js";import"./build-251e00de.js";import"./build-e23acde9.js";import"./build-6e1d55ad.js";import"./build-15635981.js";import"./build-cf5c3b20.js";import"./build-fe187947.js";import"./build-62f3d783.js";import"./build-0801cb3d.js";import"./build-72bf0ad7.js";import"./build-765dfa32.js";import"./build-56d4435a.js";import"./build-f8fc243b.js";import"./build-9861fe81.js";import"./build-6c4e1a9a.js";import"./build-e1902c28.js";import"./build-98dd2718.js";const V=r=>{var t,i;const a=((t=r==null?void 0:r.commerce)==null?void 0:t.value)||"";return r!=null&&r.cardId?{cardId:r==null?void 0:r.cardId,commerceId:a}:{amount:r==null?void 0:r.numberOfCards.toString(),paymentProcessorId:((i=r==null?void 0:r.cardType)==null?void 0:i.value)||"",commerceId:a}},z=(r={})=>{const{enqueueSnackbar:a}=q(),[t,i]=g.useState(null),m=D();return{...L(W,{onSuccess:()=>{i(null),m.invalidateQueries([S.STOCK_CARDS_LIST]),a("Se asignaron las tarjetas al comercio",{variant:"success",autoHideDuration:5e3})},onError:n=>{m.invalidateQueries([S.STOCK_CARDS_LIST]);const o=P(n,"No se puede asignar las tarjetas al comercio");a(o,{variant:N(n),autoHideDuration:5e3}),i(o)},...r}),error:t||null}};function De(){const r=j(s=>s.setOpen),a=j(s=>s.setCard),t=j(s=>s.card),i=x([S.AFFILIATED_COMMERCES_LIST])||[],m=x([S.STOCK_CARDS_LIST])||[],u=x([B.CARD_TYPES_LIST])||[],[n,o]=g.useState(!1),{mutate:T,isLoading:b}=z(),E=g.useMemo(()=>{const s={commerce:f().nullable().required("El comercio es requerido")};return t?{...s}:{...s,cardType:f().nullable().required("El tipo de tarjeta es requerido"),numberOfCards:K().min(1,"Al menos debe existir una tarjeta").test("maxCards","El maximo de tarjetas",function(d){const{cardType:O}=this.parent,h=m.filter(R=>R.cardTypeId===O.id).length;return d>h?this.createError({message:`No se pueden agregar más tarjetas que las disponibles (${h} tarjetas)`}):!0}).required("El número de tarjetas es requerido")}},[t,m]),y=g.useMemo(()=>t?{cardId:t==null?void 0:t.id,commerce:null}:{numberOfCards:1,cardType:u&&u.length>0&&u[0]||null,commerce:null},[t]),C=k({initialValues:y,validationSchema:f().shape(E),onSubmit:(s,{setSubmitting:d})=>{d(!1),o(!0)}}),{isSubmitting:v,handleSubmit:I,values:_,setSubmitting:F}=C,c=v||b,M=s=>{const d=V(s);T(d,{onSuccess:()=>{r(!1),a(null),o(!1)},onError:()=>{o(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{onClose:()=>{r(!1),a(null)},onSuccess:I,isSubmitting:c,fullWidth:!0,scrollType:"body",title:t?"Asignar Tarjeta":"Asignar Tarjetas",textButtonSuccess:"Asignar",open:!n,children:e.jsx($,{formik:C,children:e.jsxs(l,{spacing:3,sx:{py:3},children:[t?e.jsx(H,{card:t}):e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta:"}),e.jsx(A,{name:"cardType",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:u,disabled:c})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de tarjetas:"}),e.jsx(Y,{name:"numberOfCards",placeholder:"1",type:"number",InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:"1"},disabled:c})]})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Comercio:"}),e.jsx(A,{name:"commerce",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:i,disabled:c})]})]})})}),n&&e.jsx(G,{title:t?"Asignar Tarjeta":"Asignar Tarjetas",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{o(!1),F(!1)},open:n,isSubmitting:c,description:e.jsxs(l,{spacing:2,children:[e.jsx(p,{children:t?"¿Está seguro de asignar esta tarjeta a este comercio?":"¿Está seguro de asignar estas tarjetas a este comercio?"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Q,{}),e.jsx(p,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{M(_)},fullWidth:!0,maxWidth:"xs"})]})}export{De as default};
