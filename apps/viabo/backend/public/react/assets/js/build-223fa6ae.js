import{u as R,r as f,aM as N,k as P,g as k,m as W,aN as h,c as i,W as x,j as t,S as u,T as g}from"./build-177448d0.js";import{u as K}from"./build-5212f76f.js";import{c as C,e as Q}from"./build-4f526a47.js";import{R as B}from"./build-7c30f8db.js";import{M as S,a as $,u as b,b as w,R as E,c as G,W as H}from"./build-14b16ea3.js";import{F as V}from"./build-793f0b4f.js";import{b as Y}from"./build-6c94c9d5.js";import"./build-9efa6479.js";import"./build-c4f99057.js";import"./build-b412be2e.js";import"./build-a49bd28c.js";import"./build-5257a7bc.js";import"./build-e099dfb8.js";import"./build-ee65361a.js";import"./build-bee6630b.js";import"./build-ecaf0d13.js";import"./build-a078076c.js";import"./build-59ea2470.js";import"./build-d7b324e7.js";const z=(e={})=>{const{enqueueSnackbar:s}=R(),[r,n]=f.useState(null),c=N();return{...P($,{onSuccess:()=>{n(null),c.invalidateQueries([S.STOCK_CARDS_LIST]),s("Se asignaron las tarjetas al comercio",{variant:"success",autoHideDuration:5e3})},onError:l=>{c.invalidateQueries([S.STOCK_CARDS_LIST]);const o=k(l,"No se puede asignar las tarjetas al comercio");s(o,{variant:W(l),autoHideDuration:5e3}),n(o)},...e}),error:r||null}},J=e=>{var r,n;const s=((r=e==null?void 0:e.commerce)==null?void 0:r.value)||"";return e!=null&&e.cardId?{cardId:e==null?void 0:e.cardId,commerceId:s}:{amount:e==null?void 0:e.numberOfCards.toString(),paymentProcessorId:((n=e==null?void 0:e.cardType)==null?void 0:n.value)||"",commerceId:s}};function he(){const e=b(a=>a.setOpen),s=b(a=>a.setCard),r=b(a=>a.card),n=h([S.AFFILIATED_COMMERCES_LIST])||[],c=h([S.STOCK_CARDS_LIST])||[],m=h([S.CARD_TYPES_LIST])||[],[l,o]=f.useState(!1),{mutate:j,isLoading:y}=z(),v=f.useMemo(()=>{const a={commerce:C().nullable().required("El comercio es requerido")};return r?{...a}:{...a,cardType:C().nullable().required("El tipo de tarjeta es requerido"),numberOfCards:Q().min(1,"Al menos debe existir una tarjeta").test("maxCards","El maximo de tarjetas",function(p){const{cardType:D}=this.parent,T=c.filter(L=>L.cardTypeId===D.id).length;return p>T?this.createError({message:`No se pueden agregar más tarjetas que las disponibles (${T} tarjetas)`}):!0}).required("El número de tarjetas es requerido")}},[r,c]),I=f.useMemo(()=>r?{cardId:r==null?void 0:r.id,commerce:null}:{numberOfCards:1,cardType:m&&m.length>0&&m[0]||null,commerce:null},[r]),A=K({initialValues:I,validationSchema:C().shape(v),onSubmit:(a,{setSubmitting:p})=>{p(!1),o(!0)}}),{isSubmitting:M,handleSubmit:O,values:_,setSubmitting:q}=A,d=M||y,F=a=>{const p=J(a);j(p,{onSuccess:()=>{e(!1),s(null),o(!1)},onError:()=>{o(!1)}})};return i(x,{children:[t(w,{onClose:()=>{e(!1),s(null)},onSuccess:O,isSubmitting:d,fullWidth:!0,scrollType:"body",title:r?"Asignar Tarjeta":"Asignar Tarjetas",textButtonSuccess:"Asignar",open:!l,children:t(V,{formik:A,children:i(u,{spacing:3,sx:{py:3},children:[r?t(Y,{card:r}):i(x,{children:[i(u,{children:[t(g,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta:"}),t(E,{name:"cardType",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:m,disabled:d})]}),i(u,{children:[t(g,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de tarjetas:"}),t(B,{name:"numberOfCards",placeholder:"1",type:"number",InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:"1"},disabled:d})]})]}),i(u,{children:[t(g,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Comercio:"}),t(E,{name:"commerce",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:n,disabled:d})]})]})})}),l&&t(G,{title:r?"Asignar Tarjeta":"Asignar Tarjetas",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{o(!1),q(!1)},open:l,isSubmitting:d,description:i(u,{spacing:2,children:[t(g,{children:r?"¿Está seguro de asignar esta tarjeta a este comercio?":"¿Está seguro de asignar estas tarjetas a este comercio?"}),i(u,{direction:"row",alignItems:"center",spacing:1,children:[t(H,{}),t(g,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{F(_)},fullWidth:!0,maxWidth:"xs"})]})}export{he as default};
