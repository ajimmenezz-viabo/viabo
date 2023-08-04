import{r as i,j as e,a7 as g,S as r,T as n,L as S,c$ as C,D as I,az as w,cm as M}from"./build-5885a497.js";import{u as F}from"./build-984b3412.js";import{F as E,R as P}from"./build-ebd5bc51.js";import{S as D}from"./build-bf320aec.js";import{u as N}from"./build-a3c1b3b6.js";import{R}from"./build-6e151cd8.js";import{f as j}from"./build-4ec2ea70.js";import"./build-a3405297.js";import"./build-4c4ba0aa.js";import"./build-23e0dc4d.js";import"./build-c7ce8ef2.js";import"./build-98a4c969.js";import"./build-85f46b5d.js";import"./build-9f964f93.js";import"./build-026421cb.js";import"./build-8b042b43.js";import"./build-ecaf0d13.js";import"./build-009a24e3.js";import"./build-8254f016.js";import"./build-e08f604e.js";import"./build-bee6630b.js";import"./build-90d696a1.js";const T=0,p=2e3,B=100;function k({balance:x,setCurrentBalance:d,insufficient:t,setShowQR:o}){i.useState(30);const c=F({initialValues:{amount:0},onSubmit:m=>{setTimeout(()=>{o(!0)},3e3)}}),{errors:f,touched:u,isSubmitting:s,setFieldValue:l,values:h,setSubmitting:L}=c,{amount:a}=h,b=m=>{const y=m.target.value===""?"":Number(m.target.value);l("amount",y)},v=()=>{a<0||a===""?l("amount",0):a>p&&l("amount",p)};return i.useEffect(()=>{const m=a===""?0:a;d(parseFloat(x)-parseFloat(m))},[a]),e.jsx(g,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(E,{formik:c,children:e.jsxs(r,{spacing:3,sx:{p:3},children:[e.jsxs(n,{variant:"overline",sx:{color:"text.secondary"},children:["Ingresa La Cantidad (Máximo $",p,".00)"]}),e.jsxs(r,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center",children:[e.jsx(P,{fullWidth:!0,placeholder:"$0.00",name:"amount",type:"number",onChange:b,onBlur:v,InputLabelProps:{shrink:!0},inputProps:{inputMode:"numeric",min:T,max:p,step:B}}),e.jsx(n,{variant:"caption",children:"MXN"})]}),e.jsx(r,{sx:{pt:3},children:e.jsx(S,{loading:s,variant:"contained",color:"primary",disabled:a===0||t,fullWidth:!0,type:"submit",startIcon:e.jsx(D,{}),children:"Enviar"})})]})})})}const A="/react/assets/img/qr-code.png";function ie({open:x,setOpen:d}){const t=N(h=>h.card),[o,c]=i.useState(t==null?void 0:t.balance),[f,u]=i.useState(!0),s=i.useMemo(()=>o<0,[o]),l=()=>{d(!1),u(!1)};return i.useEffect(()=>{c(t==null?void 0:t.balance),u(!1)},[t==null?void 0:t.balance]),e.jsx(R,{open:x,handleClose:l,title:"Enviar Pago",children:f?e.jsx(g,{children:e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(r,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(n,{variant:"subtitle1",children:"Transferencia Exitosa"}),e.jsx(C,{sx:{width:40,height:40},color:"success"})]}),e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:[e.jsx(n,{variant:"subtitle2",children:"Importe"}),e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",children:j(100)}),e.jsx(n,{variant:"caption",children:"MXN"})]})]}),e.jsx(I,{src:A,sx:{width:250}}),e.jsx(n,{variant:"caption",color:"text.disabled",children:w(new Date,"dd MMM yyyy hh:mm a",{locale:M})})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(r,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,p:5,children:[e.jsx(n,{variant:"subtitle1",children:"Saldo"}),e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",color:s?"error":"success.main",children:j(o)}),e.jsx(n,{variant:"caption",color:s?"error":"success.main",children:"MXN"})]}),s&&e.jsx(n,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la operación"})]}),e.jsx(k,{balance:t==null?void 0:t.balance,insufficient:s,setCurrentBalance:c,setShowQR:u})]})})}export{ie as default};
