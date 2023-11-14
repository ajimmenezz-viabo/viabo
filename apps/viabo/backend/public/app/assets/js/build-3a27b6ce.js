import{r as c,j as t,D as x,S as n,T as r,L as f,b4 as j,aP as g,G as b,K as y}from"./index-4598388a.js";import{u as v}from"./build-50bbde61.js";import{F as I}from"./build-056efa0c.js";import{R as w}from"./build-9c8e2664.js";import{I as M}from"./build-e872d097.js";import{S as C}from"./build-3dfc3cbb.js";import{u as S}from"./build-3dcd95d4.js";import{a as P}from"./build-bfb80ca8.js";import{f as d}from"./build-2e665ca4.js";import"./build-d8ac8382.js";import"./build-f32805fc.js";import"./build-c52d07ca.js";import"./build-002795c1.js";import"./build-0672d956.js";import"./build-efce0394.js";import"./build-bee6630b.js";import"./build-ff9321b7.js";import"./build-27d511bc.js";import"./build-a9e726a7.js";import"./build-6273f162.js";import"./build-65a59fe1.js";import"./build-c449aeae.js";import"./build-441a9fbc.js";import"./build-b0443748.js";import"./build-571c23d5.js";import"./build-f460a358.js";import"./build-a3ff9182.js";import"./build-5a5c5f07.js";import"./build-a6ca5fb2.js";import"./build-633032d6.js";import"./build-e706f73e.js";import"./build-c9554f58.js";import"./build-b76ffe54.js";import"./build-074be596.js";import"./build-67977c10.js";import"./build-a635d66e.js";import"./build-9060ae36.js";import"./build-c358b8a5.js";import"./build-f7d89240.js";import"./build-30afe32b.js";import"./build-05419962.js";const F=0,D=2e3;function E({balance:m,setCurrentBalance:p,insufficient:e,setShowQR:s}){const o=v({initialValues:{amount:""},onSubmit:l=>{setTimeout(()=>{s(!0)},3e3)}}),{isSubmitting:u,values:a}=o,{amount:i}=a;return c.useEffect(()=>{const l=i===""?0:i;p(parseFloat(m)-parseFloat(l))},[i]),t.jsx(x,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:t.jsx(I,{formik:o,children:t.jsxs(n,{spacing:3,sx:{p:3},children:[t.jsxs(r,{variant:"overline",sx:{color:"text.secondary"},children:["Ingresa La Cantidad (Máximo $",D,".00)"]}),t.jsx(n,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center",children:t.jsx(w,{fullWidth:!0,placeholder:"0.00",name:"amount",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:t.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:t.jsx(M,{position:"end",children:"MXN"})},inputProps:{inputMode:"numeric",step:"any",min:F}})}),t.jsx(n,{children:t.jsx(f,{loading:u,variant:"contained",color:"primary",disabled:i<=0||e,fullWidth:!0,type:"submit",startIcon:t.jsx(C,{}),children:"Enviar"})})]})})})}const R="/app/assets/img/qr-code.png";function bt({open:m,setOpen:p}){const e=S(h=>h.card),[s,o]=c.useState(e==null?void 0:e.balance),[u,a]=c.useState(!0),i=c.useMemo(()=>s<0,[s]),l=()=>{p(!1),a(!1)};return c.useEffect(()=>{o(e==null?void 0:e.balance),a(!1)},[e==null?void 0:e.balance]),t.jsx(P,{open:m,handleClose:l,title:"Enviar Pago",children:u?t.jsx(x,{children:t.jsxs(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[t.jsxs(n,{flexDirection:"column",alignItems:"center",spacing:2,children:[t.jsx(r,{variant:"subtitle1",children:"Transferencia Exitosa"}),t.jsx(j,{sx:{width:40,height:40},color:"success"})]}),t.jsxs(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:[t.jsx(r,{variant:"subtitle2",children:"Importe"}),t.jsxs(n,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(r,{variant:"h3",children:d(100)}),t.jsx(r,{variant:"caption",children:"MXN"})]})]}),t.jsx(g,{src:R,sx:{width:250}}),t.jsx(r,{variant:"caption",color:"text.disabled",children:b(new Date,"dd MMM yyyy hh:mm a",{locale:y})})]})}):t.jsxs(t.Fragment,{children:[t.jsxs(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:3,pb:0,children:[t.jsx(r,{variant:"subtitle1",children:"Saldo"}),t.jsxs(n,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(r,{variant:"h3",color:i?"error":"success.main",children:d(s)}),t.jsx(r,{variant:"caption",color:i?"error":"success.main",children:"MXN"})]}),i&&t.jsx(r,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la operación"})]}),t.jsx(E,{balance:e==null?void 0:e.balance,insufficient:i,setCurrentBalance:o,setShowQR:a})]})})}export{bt as default};
