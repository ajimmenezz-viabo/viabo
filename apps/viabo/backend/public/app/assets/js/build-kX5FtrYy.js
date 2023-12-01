import{an as D,r as g,k as M,a as L,g as P,b as k,aR as x,aV as j,j as e,d8 as N,S as l,T as p,aZ as K,a_ as Q}from"./index-mplo7Cy0.js";import{u as W}from"./build-0lw-wv_t.js";import{c as C,e as B}from"./build-SLoEvwLV.js";import{M as S,a as H,S as V}from"./build-s4Tmh3xS.js";import{C as Y}from"./build-rBembG_4.js";import{F as $}from"./build-fgcEbVX7.js";import{R as A}from"./build-e7H5oRgU.js";import{R as w}from"./build-ZYzTDOzo.js";import"./build-cj4zBQF0.js";import"./build-yDVAqRjG.js";import"./build-ocJTeYdP.js";import"./build-9Efc2eo3.js";import"./build-D3xC4GbD.js";import"./build-oGgHkT3Q.js";import"./build-PfoRwXqx.js";import"./build-UhUpPKic.js";import"./build-nSdaxBfa.js";import"./build-Qg3JQUP_.js";import"./build-M7AoVccO.js";import"./build-jhrJ8roR.js";import"./build-E66JUiqZ.js";import"./build-onu4nqUu.js";import"./build-1LmYI3dU.js";import"./build-8YmxNTRo.js";import"./build-njq8goKG.js";import"./build-t9pfQBCv.js";import"./build-Hhkdi4aP.js";import"./build-Uc7vb3zK.js";import"./build-olvv2LeH.js";import"./build-DxgzDpLF.js";import"./build-ZGk8AJ0f.js";import"./build-piimbepB.js";import"./build-rLtiYSy5.js";import"./build-ff9_sQzU.js";import"./build-WwkBAoF_.js";import"./build-MmaV-EYE.js";import"./build-T7_oXGCu.js";const G=r=>{var t,i;const a=((t=r==null?void 0:r.commerce)==null?void 0:t.value)||"";return r!=null&&r.cardId?{cardId:r==null?void 0:r.cardId,commerceId:a}:{amount:r==null?void 0:r.numberOfCards.toString(),paymentProcessorId:((i=r==null?void 0:r.cardType)==null?void 0:i.value)||"",commerceId:a}},Z=(r={})=>{const{enqueueSnackbar:a}=D(),[t,i]=g.useState(null),m=M();return{...L(H,{onSuccess:()=>{i(null),m.invalidateQueries([S.STOCK_CARDS_LIST]),a("Se asignaron las tarjetas al comercio",{variant:"success",autoHideDuration:5e3})},onError:n=>{m.invalidateQueries([S.STOCK_CARDS_LIST]);const o=P(n,"No se puede asignar las tarjetas al comercio");a(o,{variant:k(n),autoHideDuration:5e3}),i(o)},...r}),error:t||null}};function Me(){const r=x(s=>s.setOpen),a=x(s=>s.setCard),t=x(s=>s.card),i=j([S.AFFILIATED_COMMERCES_LIST])||[],m=j([S.STOCK_CARDS_LIST])||[],u=j([V.CARD_TYPES_LIST])||[],[n,o]=g.useState(!1),{mutate:T,isLoading:b}=Z(),E=g.useMemo(()=>{const s={commerce:C().nullable().required("El comercio es requerido")};return t?{...s}:{...s,cardType:C().nullable().required("El tipo de tarjeta es requerido"),numberOfCards:B().min(1,"Al menos debe existir una tarjeta").test("maxCards","El maximo de tarjetas",function(d){const{cardType:O}=this.parent,h=m.filter(q=>q.cardTypeId===O.id).length;return d>h?this.createError({message:`No se pueden agregar más tarjetas que las disponibles (${h} tarjetas)`}):!0}).required("El número de tarjetas es requerido")}},[t,m]),y=g.useMemo(()=>t?{cardId:t==null?void 0:t.id,commerce:null}:{numberOfCards:1,cardType:u&&u.length>0&&u[0]||null,commerce:null},[t]),f=W({initialValues:y,validationSchema:C().shape(E),onSubmit:(s,{setSubmitting:d})=>{d(!1),o(!0)}}),{isSubmitting:v,handleSubmit:I,values:_,setSubmitting:R}=f,c=v||b,F=s=>{const d=G(s);T(d,{onSuccess:()=>{r(!1),a(null),o(!1)},onError:()=>{o(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(N,{onClose:()=>{r(!1),a(null)},onSuccess:I,isSubmitting:c,fullWidth:!0,scrollType:"body",title:t?"Asignar Tarjeta":"Asignar Tarjetas",textButtonSuccess:"Asignar",open:!n,children:e.jsx($,{formik:f,children:e.jsxs(l,{spacing:3,sx:{py:3},children:[t?e.jsx(Y,{card:t}):e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tipo de Tarjeta:"}),e.jsx(A,{name:"cardType",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:u,disabled:c})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de tarjetas:"}),e.jsx(w,{name:"numberOfCards",placeholder:"1",type:"number",InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:"1"},disabled:c})]})]}),e.jsxs(l,{children:[e.jsx(p,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Comercio:"}),e.jsx(A,{name:"commerce",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:i,disabled:c})]})]})})}),n&&e.jsx(K,{title:t?"Asignar Tarjeta":"Asignar Tarjetas",typeAlert:"warning",textButtonSuccess:"Asignar",onClose:()=>{o(!1),R(!1)},open:n,isSubmitting:c,description:e.jsxs(l,{spacing:2,children:[e.jsx(p,{children:t?"¿Está seguro de asignar esta tarjeta a este comercio?":"¿Está seguro de asignar estas tarjetas a este comercio?"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Q,{}),e.jsx(p,{variant:"caption",children:"Verifique que todos los datos esten correctos"})]})]}),onSuccess:()=>{F(_)},fullWidth:!0,maxWidth:"xs"})]})}export{Me as default};