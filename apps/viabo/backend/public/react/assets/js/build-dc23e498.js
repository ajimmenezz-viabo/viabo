import{r as a,j as e,X as g,S as r,T as n,L as S,e0 as C,z as I,ae as w,dk as M}from"./build-25e7e2eb.js";import{R as F}from"./build-b4439384.js";import{g as j}from"./build-e8a6b0bf.js";import"./build-fd05424b.js";import{u as E}from"./build-1aa4ae0f.js";import{R as P}from"./build-84820902.js";import{u as N}from"./build-0c7fe524.js";import{F as R}from"./build-9151ecd6.js";import{S as T}from"./build-1e37eace.js";import"./build-ecaf0d13.js";import"./build-b0cf8558.js";import"./build-42302140.js";import"./build-caa4c160.js";import"./build-3a191c20.js";import"./build-3f6bbffc.js";import"./build-cdcb9c1c.js";import"./build-bee6630b.js";import"./build-aef65eb7.js";import"./build-c7ce8ef2.js";import"./build-8ee8c8e9.js";import"./build-26fd9c17.js";import"./build-8a0ce378.js";import"./build-3cc84a75.js";const D=0,p=2e3,k=100;function B({balance:d,setCurrentBalance:x,insufficient:t,setShowQR:o}){a.useState(30);const c=N({initialValues:{amount:0},onSubmit:m=>{setTimeout(()=>{o(!0)},3e3)}}),{errors:f,touched:u,isSubmitting:s,setFieldValue:l,values:h,setSubmitting:A}=c,{amount:i}=h,b=m=>{const y=m.target.value===""?"":Number(m.target.value);l("amount",y)},v=()=>{i<0||i===""?l("amount",0):i>p&&l("amount",p)};return a.useEffect(()=>{const m=i===""?0:i;x(parseFloat(d)-parseFloat(m))},[i]),e.jsx(g,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(R,{formik:c,children:e.jsxs(r,{spacing:3,sx:{p:3},children:[e.jsxs(n,{variant:"overline",sx:{color:"text.secondary"},children:["Ingresa La Cantidad (Máximo $",p,".00)"]}),e.jsxs(r,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center",children:[e.jsx(P,{fullWidth:!0,placeholder:"$0.00",name:"amount",type:"number",onChange:b,onBlur:v,InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:D,max:p,step:k}}),e.jsx(n,{variant:"caption",children:"MXN"})]}),e.jsx(r,{sx:{pt:3},children:e.jsx(S,{loading:s,variant:"contained",color:"primary",disabled:i===0||t,fullWidth:!0,type:"submit",startIcon:e.jsx(T,{}),children:"Enviar"})})]})})})}const X="/react/assets/img/qr-code.png";function oe({open:d,setOpen:x}){const t=E(h=>h.card),[o,c]=a.useState(t==null?void 0:t.balance),[f,u]=a.useState(!0),s=a.useMemo(()=>o<0,[o]),l=()=>{x(!1),u(!1)};return a.useEffect(()=>{c(t==null?void 0:t.balance),u(!1)},[t==null?void 0:t.balance]),e.jsx(F,{open:d,handleClose:l,title:"Enviar Pago",children:f?e.jsx(g,{children:e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(r,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(n,{variant:"subtitle1",children:"Transferencia Exitosa"}),e.jsx(C,{sx:{width:40,height:40},color:"success"})]}),e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:[e.jsx(n,{variant:"subtitle2",children:"Importe"}),e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",children:j(100)}),e.jsx(n,{variant:"caption",children:"MXN"})]})]}),e.jsx(I,{src:X,sx:{width:250}}),e.jsx(n,{variant:"caption",color:"text.disabled",children:w(new Date,"dd MMM yyyy hh:mm a",{locale:M})})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,p:5,children:[e.jsx(n,{variant:"subtitle1",children:"Saldo"}),e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",color:s?"error":"success.main",children:j(o)}),e.jsx(n,{variant:"caption",color:s?"error":"success.main",children:"MXN"})]}),s&&e.jsx(n,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la operación"})]}),e.jsx(B,{balance:t==null?void 0:t.balance,insufficient:s,setCurrentBalance:c,setShowQR:u})]})})}export{oe as default};
