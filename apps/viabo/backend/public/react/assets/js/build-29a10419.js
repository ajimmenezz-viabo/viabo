import{r as a,j as e,X as g,S as r,T as n,L as S,e0 as C,z as I,ae as w,di as M}from"./build-34d4d483.js";import{R as F}from"./build-c6ac4340.js";import{f as j}from"./build-47f482cf.js";import"./build-6d5c7127.js";import{S as E,u as P}from"./build-ba575d38.js";import{R as N}from"./build-a16b502a.js";import{u as R}from"./build-170b63b6.js";import{F as T}from"./build-892c0580.js";import"./build-ecaf0d13.js";import"./build-1debacbf.js";import"./build-8deab1ab.js";import"./build-29a3d3af.js";import"./build-ed9a6418.js";import"./build-b6bc740d.js";import"./build-34ba9f86.js";import"./build-3e6b3c55.js";import"./build-bee6630b.js";import"./build-9206015e.js";import"./build-a7fe1706.js";import"./build-9563ddbe.js";import"./build-0c2dc063.js";import"./build-2203328a.js";import"./build-0304cced.js";import"./build-3501e6c1.js";import"./build-c575e8a4.js";import"./build-9dc06f1a.js";import"./build-c1670f83.js";import"./build-c82c2b54.js";const D=0,p=2e3,B=100;function k({balance:d,setCurrentBalance:x,insufficient:t,setShowQR:o}){a.useState(30);const c=R({initialValues:{amount:0},onSubmit:m=>{setTimeout(()=>{o(!0)},3e3)}}),{errors:f,touched:u,isSubmitting:s,setFieldValue:l,values:h,setSubmitting:A}=c,{amount:i}=h,b=m=>{const y=m.target.value===""?"":Number(m.target.value);l("amount",y)},v=()=>{i<0||i===""?l("amount",0):i>p&&l("amount",p)};return a.useEffect(()=>{const m=i===""?0:i;x(parseFloat(d)-parseFloat(m))},[i]),e.jsx(g,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(T,{formik:c,children:e.jsxs(r,{spacing:3,sx:{p:3},children:[e.jsxs(n,{variant:"overline",sx:{color:"text.secondary"},children:["Ingresa La Cantidad (Máximo $",p,".00)"]}),e.jsxs(r,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center",children:[e.jsx(N,{fullWidth:!0,placeholder:"$0.00",name:"amount",type:"number",onChange:b,onBlur:v,InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:D,max:p,step:B}}),e.jsx(n,{variant:"caption",children:"MXN"})]}),e.jsx(r,{sx:{pt:3},children:e.jsx(S,{loading:s,variant:"contained",color:"primary",disabled:i===0||t,fullWidth:!0,type:"submit",startIcon:e.jsx(E,{}),children:"Enviar"})})]})})})}const X="/react/assets/img/qr-code.png";function pe({open:d,setOpen:x}){const t=P(h=>h.card),[o,c]=a.useState(t==null?void 0:t.balance),[f,u]=a.useState(!0),s=a.useMemo(()=>o<0,[o]),l=()=>{x(!1),u(!1)};return a.useEffect(()=>{c(t==null?void 0:t.balance),u(!1)},[t==null?void 0:t.balance]),e.jsx(F,{open:d,handleClose:l,title:"Enviar Pago",children:f?e.jsx(g,{children:e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(r,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(n,{variant:"subtitle1",children:"Transferencia Exitosa"}),e.jsx(C,{sx:{width:40,height:40},color:"success"})]}),e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:[e.jsx(n,{variant:"subtitle2",children:"Importe"}),e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",children:j(100)}),e.jsx(n,{variant:"caption",children:"MXN"})]})]}),e.jsx(I,{src:X,sx:{width:250}}),e.jsx(n,{variant:"caption",color:"text.disabled",children:w(new Date,"dd MMM yyyy hh:mm a",{locale:M})})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,p:5,children:[e.jsx(n,{variant:"subtitle1",children:"Saldo"}),e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",color:s?"error":"success.main",children:j(o)}),e.jsx(n,{variant:"caption",color:s?"error":"success.main",children:"MXN"})]}),s&&e.jsx(n,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la operación"})]}),e.jsx(k,{balance:t==null?void 0:t.balance,insufficient:s,setCurrentBalance:c,setShowQR:u})]})})}export{pe as default};