import{u as q,r as g,E as D,n as L,g as P,o as N,b0 as x,j as e,S as l,T as p}from"./build-ff249ccd.js";import{u as k}from"./build-c35749b2.js";import{c as f,d as K}from"./build-21c8fd33.js";import{M as S,a as W,W as Q,S as B}from"./build-55c749a3.js";import{u as j}from"./build-deaba545.js";import{C as H}from"./build-2d03f662.js";import{R as Y}from"./build-d4a81a0e.js";import{R as A}from"./build-ba6b5ae5.js";import{F as $}from"./build-c7c745f5.js";import{M as w,a as G}from"./build-42756ae8.js";import"./build-2de398c6.js";import"./build-ecaf0d13.js";import"./build-efc7dfc7.js";import"./build-7a360ede.js";import"./build-bee6630b.js";import"./build-45c14002.js";import"./build-fb7eb957.js";import"./build-d0cdcec7.js";import"./build-8afc3184.js";import"./build-cb8ebebb.js";import"./build-8380f677.js";import"./build-2446f370.js";import"./build-0f64fb7c.js";import"./build-d81db254.js";import"./build-a5b127ff.js";import"./build-2c67f035.js";import"./build-bb72ca38.js";import"./build-53c7ff00.js";import"./build-a9857978.js";import"./build-a95cd612.js";import"./build-d3854add.js";import"./build-d6522b34.js";import"./build-e4031801.js";import"./build-584ef5c3.js";import"./build-a7a53a70.js";import"./build-033677ad.js";const V=r=>{var t,i;const a=((t=r==null?void 0:r.commerce)==null?void 0:t.value)||"";return r!=null&&r.cardId?{cardId:r==null?void 0:r.cardId,commerceId:a}:{amount:r==null?void 0:r.numberOfCards.toString(),paymentProcessorId:((i=r==null?void 0:r.cardType)==null?void 0:i.value)||"",commerceId:a}},z=(r={})=>{const{enqueueSnackbar:a}=q(),[t,i]=g.useState(null),m=D();return{...L(W,{onSuccess:()=>{i(null),m.invalidateQueries([S.STOCK_CARDS_LIST]),a("Se asignaron las tarjetas al comercio",{variant:"success",autoHideDuration:5e3})},onError:n=>{m.invalidateQueries([S.STOCK_CARDS_LIST]);const o=P(n,"No se puede asignar las tarjetas al comercio");a(o,{variant:N(n),autoHideDuration:5e3}),i(o)},...r}),error:t||null}};function qe(){const r=j(s=>s.setOpen),a=j(s=>s.setCard),t=j(s=>s.card),i=x([S.AFFILIATED_COMMERCES_LIST])||[],m=x([S.STOCK_CARDS_LIST])||[],u=x([B.CARD_TYPES_LIST])||[],[n,o]=g.useState(!1),{mutate:T,isLoading:b}=z(),E=g.useMemo(()=>{const s={commerce:f().nullable().required("El comercio es requerido")};return t?{...s}:{...s,cardType:f().nullable().required("El tipo de tarjeta es requerido"),numberOfCards:K().min(1,"Al menos debe existir una tarjeta").test("maxCards","El maximo de tarjetas",function(d){const{cardType:O}=this.parent,h=m.filter(R=>R.cardTypeId===O.id).length;return d>h?this.createError({message:`No se pueden agregar más tarjetas que las disponibles (${h} tarjetas)`}):!0}).required("El número de tarjetas es requerido")}},[t,m]),y=g.useMemo(()=>t?{cardId:t==null?void 0:t.id,commerce:null}:{numberOfCards:1,cardType:u&&u.length>0&&u[0]||null,commerce:null},[t]),C=k({initialValues:y,validationSchema:f().shape(E),onSubmit:(s,{setSubmitting:d})=>{d(!1),o(!0)}}),{isSubmitting:v,handleSubmit:I,values:_,setSubmitting:F}=C,c=v||b,M=s=>{const d=V(s);T(d,{onSuccess:()=>{r(!1),a(null),o(!1)},onError:()=>{o(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{onClose:()=>{r(!1),a(null)},onSuccess:I,isSubmitting:c,fullWidth:!0,scrollType:"body",title:t?"Asignar Tarjeta":"Asignar Tarjetas",textButtonSuccess:"Asignar",open:!n,children:e.jsx($,{formik:C,children:e.jsxs(l,{spacing:3,sx:{py:3},children:[t?e.jsx(H,{card:t}):e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta:"}),e.jsx(A,{name:"cardType",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:u,disabled:c})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de tarjetas:"}),e.jsx(Y,{name:"numberOfCards",placeholder:"1",type:"number",InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:"1"},disabled:c})]})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Comercio:"}),e.jsx(A,{name:"commerce",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:i,disabled:c})]})]})})}),n&&e.jsx(G,{title:t?"Asignar Tarjeta":"Asignar Tarjetas",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{o(!1),F(!1)},open:n,isSubmitting:c,description:e.jsxs(l,{spacing:2,children:[e.jsx(p,{children:t?"¿Está seguro de asignar esta tarjeta a este comercio?":"¿Está seguro de asignar estas tarjetas a este comercio?"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Q,{}),e.jsx(p,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{M(_)},fullWidth:!0,maxWidth:"xs"})]})}export{qe as default};