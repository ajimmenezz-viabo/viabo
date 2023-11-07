import{r as c,j as e,D as x,S as i,T as r,L as f,b3 as j,aO as g,G as b,K as y}from"./index-1970f1dc.js";import{u as v}from"./build-ffac7634.js";import{F as I}from"./build-ed9fea26.js";import{R as w}from"./build-c59042b5.js";import{I as M}from"./build-45e36c7b.js";import{S as C}from"./build-cb0314c1.js";import{u as S}from"./build-57448001.js";import{a as F}from"./build-589cfc72.js";import{f as d}from"./build-2b1189e0.js";import"./build-8545fca1.js";import"./build-d8157e4c.js";import"./build-5d46946a.js";import"./build-28c3e1ae.js";import"./build-d28ff831.js";import"./build-c6f21fca.js";import"./build-bee6630b.js";import"./build-6553a32b.js";import"./build-37c20432.js";import"./build-24d2f6ad.js";import"./build-fcdd56c0.js";import"./build-8e00bab0.js";import"./build-7f04195b.js";import"./build-c9ffca00.js";import"./build-d9ea44f9.js";import"./build-ea21fc0d.js";import"./build-5de223b4.js";import"./build-69ad5ac2.js";import"./build-d8f8536d.js";import"./build-c3d0a05d.js";import"./build-6345f405.js";import"./build-ff372fb5.js";import"./build-1322f1b7.js";import"./build-e594db61.js";import"./build-ba4811c1.js";import"./build-d2dc32af.js";import"./build-8c99efbb.js";import"./build-2aa26bd2.js";import"./build-5ad62618.js";import"./build-7ff0ad56.js";const P=0,D=2e3;function E({balance:m,setCurrentBalance:p,insufficient:t,setShowQR:s}){const o=v({initialValues:{amount:""},onSubmit:l=>{setTimeout(()=>{s(!0)},3e3)}}),{isSubmitting:u,values:a}=o,{amount:n}=a;return c.useEffect(()=>{const l=n===""?0:n;p(parseFloat(m)-parseFloat(l))},[n]),e.jsx(x,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(I,{formik:o,children:e.jsxs(i,{spacing:3,sx:{p:3},children:[e.jsxs(r,{variant:"overline",sx:{color:"text.secondary"},children:["Ingresa La Cantidad (Máximo $",D,".00)"]}),e.jsx(i,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center",children:e.jsx(w,{fullWidth:!0,placeholder:"0.00",name:"amount",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:e.jsx(M,{position:"end",children:"MXN"})},inputProps:{inputMode:"numeric",step:"any",min:P}})}),e.jsx(i,{children:e.jsx(f,{loading:u,variant:"contained",color:"primary",disabled:n<=0||t,fullWidth:!0,type:"submit",startIcon:e.jsx(C,{}),children:"Enviar"})})]})})})}const R="/react/assets/img/qr-code.png";function je({open:m,setOpen:p}){const t=S(h=>h.card),[s,o]=c.useState(t==null?void 0:t.balance),[u,a]=c.useState(!0),n=c.useMemo(()=>s<0,[s]),l=()=>{p(!1),a(!1)};return c.useEffect(()=>{o(t==null?void 0:t.balance),a(!1)},[t==null?void 0:t.balance]),e.jsx(F,{open:m,handleClose:l,title:"Enviar Pago",children:u?e.jsx(x,{children:e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(i,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(r,{variant:"subtitle1",children:"Transferencia Exitosa"}),e.jsx(j,{sx:{width:40,height:40},color:"success"})]}),e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:[e.jsx(r,{variant:"subtitle2",children:"Importe"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{variant:"h3",children:d(100)}),e.jsx(r,{variant:"caption",children:"MXN"})]})]}),e.jsx(g,{src:R,sx:{width:250}}),e.jsx(r,{variant:"caption",color:"text.disabled",children:b(new Date,"dd MMM yyyy hh:mm a",{locale:y})})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:3,pb:0,children:[e.jsx(r,{variant:"subtitle1",children:"Saldo"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{variant:"h3",color:n?"error":"success.main",children:d(s)}),e.jsx(r,{variant:"caption",color:n?"error":"success.main",children:"MXN"})]}),n&&e.jsx(r,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la operación"})]}),e.jsx(E,{balance:t==null?void 0:t.balance,insufficient:n,setCurrentBalance:o,setShowQR:a})]})})}export{je as default};