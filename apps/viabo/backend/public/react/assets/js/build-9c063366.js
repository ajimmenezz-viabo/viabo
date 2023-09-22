import{z as q,r as g,k as D,a as L,g as N,b as P,aN as x,j as e,S as l,T as p}from"./index-0c89b1fb.js";import{u as k}from"./build-8c0129b2.js";import{c as j,b as K}from"./build-075b7b48.js";import{M as S,a as W,W as Q,S as B}from"./build-b666f2c1.js";import{u as f}from"./build-1e6ee133.js";import"./build-564bfe9d.js";import{C as H}from"./build-99a95a7c.js";import{F as Y}from"./build-bda87866.js";import{a as $,R as A,M as w}from"./build-283987e1.js";import{R as G}from"./build-5b1ad017.js";import"./build-5b2b1e03.js";import"./build-ecaf0d13.js";import"./build-30a14c47.js";import"./build-3af199f5.js";import"./build-bee6630b.js";import"./build-64bb4934.js";import"./build-ee3cd84a.js";import"./build-0688eccf.js";import"./build-2987bb1f.js";import"./build-89409a29.js";import"./build-aa43c8a5.js";import"./build-75af11bb.js";import"./build-e96b9c7b.js";import"./build-5704980c.js";import"./build-e5633e7f.js";import"./build-240c801d.js";import"./build-659711ad.js";import"./build-512b8392.js";import"./build-2a2b2b05.js";import"./build-4b8037d2.js";import"./build-4f8389d0.js";import"./build-89ec39bf.js";import"./build-def3b0c6.js";import"./build-f8fc243b.js";import"./build-26343198.js";import"./build-0e41b3b7.js";import"./build-715ec50d.js";import"./build-08894989.js";import"./build-0b7452fb.js";const V=r=>{var t,i;const a=((t=r==null?void 0:r.commerce)==null?void 0:t.value)||"";return r!=null&&r.cardId?{cardId:r==null?void 0:r.cardId,commerceId:a}:{amount:r==null?void 0:r.numberOfCards.toString(),paymentProcessorId:((i=r==null?void 0:r.cardType)==null?void 0:i.value)||"",commerceId:a}},z=(r={})=>{const{enqueueSnackbar:a}=q(),[t,i]=g.useState(null),m=D();return{...L(W,{onSuccess:()=>{i(null),m.invalidateQueries([S.STOCK_CARDS_LIST]),a("Se asignaron las tarjetas al comercio",{variant:"success",autoHideDuration:5e3})},onError:n=>{m.invalidateQueries([S.STOCK_CARDS_LIST]);const o=N(n,"No se puede asignar las tarjetas al comercio");a(o,{variant:P(n),autoHideDuration:5e3}),i(o)},...r}),error:t||null}};function Ne(){const r=f(s=>s.setOpen),a=f(s=>s.setCard),t=f(s=>s.card),i=x([S.AFFILIATED_COMMERCES_LIST])||[],m=x([S.STOCK_CARDS_LIST])||[],u=x([B.CARD_TYPES_LIST])||[],[n,o]=g.useState(!1),{mutate:b,isLoading:T}=z(),E=g.useMemo(()=>{const s={commerce:j().nullable().required("El comercio es requerido")};return t?{...s}:{...s,cardType:j().nullable().required("El tipo de tarjeta es requerido"),numberOfCards:K().min(1,"Al menos debe existir una tarjeta").test("maxCards","El maximo de tarjetas",function(d){const{cardType:O}=this.parent,h=m.filter(R=>R.cardTypeId===O.id).length;return d>h?this.createError({message:`No se pueden agregar más tarjetas que las disponibles (${h} tarjetas)`}):!0}).required("El número de tarjetas es requerido")}},[t,m]),y=g.useMemo(()=>t?{cardId:t==null?void 0:t.id,commerce:null}:{numberOfCards:1,cardType:u&&u.length>0&&u[0]||null,commerce:null},[t]),C=k({initialValues:y,validationSchema:j().shape(E),onSubmit:(s,{setSubmitting:d})=>{d(!1),o(!0)}}),{isSubmitting:v,handleSubmit:I,values:_,setSubmitting:F}=C,c=v||T,M=s=>{const d=V(s);b(d,{onSuccess:()=>{r(!1),a(null),o(!1)},onError:()=>{o(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx($,{onClose:()=>{r(!1),a(null)},onSuccess:I,isSubmitting:c,fullWidth:!0,scrollType:"body",title:t?"Asignar Tarjeta":"Asignar Tarjetas",textButtonSuccess:"Asignar",open:!n,children:e.jsx(Y,{formik:C,children:e.jsxs(l,{spacing:3,sx:{py:3},children:[t?e.jsx(H,{card:t}):e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta:"}),e.jsx(A,{name:"cardType",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:u,disabled:c})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de tarjetas:"}),e.jsx(G,{name:"numberOfCards",placeholder:"1",type:"number",InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:"1"},disabled:c})]})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Comercio:"}),e.jsx(A,{name:"commerce",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:i,disabled:c})]})]})})}),n&&e.jsx(w,{title:t?"Asignar Tarjeta":"Asignar Tarjetas",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{o(!1),F(!1)},open:n,isSubmitting:c,description:e.jsxs(l,{spacing:2,children:[e.jsx(p,{children:t?"¿Está seguro de asignar esta tarjeta a este comercio?":"¿Está seguro de asignar estas tarjetas a este comercio?"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Q,{}),e.jsx(p,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{M(_)},fullWidth:!0,maxWidth:"xs"})]})}export{Ne as default};