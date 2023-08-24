import{r as c,j as e,ag as x,S as i,T as n,L as f,aK as j,D as g,F as b,aw as y}from"./index-6ad460b4.js";import{u as v}from"./build-154de2c9.js";import{F as I}from"./build-437622c8.js";import{R as w}from"./build-e822f479.js";import{I as M}from"./build-062e0ba8.js";import{S as C,u as S}from"./build-0dc03407.js";import{R as F}from"./build-d7137d46.js";import{f as d}from"./build-0a64cac0.js";import"./build-2ccf16cb.js";import"./build-636787f0.js";import"./build-37cbbe5d.js";import"./build-c7ce8ef2.js";import"./build-22e34012.js";import"./build-74deba51.js";import"./build-5e714fdb.js";import"./build-b079eafd.js";import"./build-aafae676.js";import"./build-4d96ee10.js";import"./build-af45772f.js";import"./build-632033c9.js";import"./build-fe029121.js";import"./build-47365e4f.js";import"./build-8a8411e2.js";import"./build-0b0fca12.js";import"./build-59732c7e.js";import"./build-cc8e6188.js";import"./build-01244a73.js";import"./build-259e1a22.js";import"./build-0e9239a0.js";import"./build-ecaf0d13.js";import"./build-bee6630b.js";import"./build-caf88c1a.js";const P=0,R=2e3;function D({balance:m,setCurrentBalance:p,insufficient:t,setShowQR:s}){const a=v({initialValues:{amount:""},onSubmit:l=>{setTimeout(()=>{s(!0)},3e3)}}),{isSubmitting:u,values:o}=a,{amount:r}=o;return c.useEffect(()=>{const l=r===""?0:r;p(parseFloat(m)-parseFloat(l))},[r]),e.jsx(x,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(I,{formik:a,children:e.jsxs(i,{spacing:3,sx:{p:3},children:[e.jsxs(n,{variant:"overline",sx:{color:"text.secondary"},children:["Ingresa La Cantidad (Máximo $",R,".00)"]}),e.jsx(i,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center",children:e.jsx(w,{fullWidth:!0,placeholder:"0.00",name:"amount",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:e.jsx(M,{position:"end",children:"MXN"})},inputProps:{inputMode:"numeric",step:"any",min:P}})}),e.jsx(i,{children:e.jsx(f,{loading:u,variant:"contained",color:"primary",disabled:r<=0||t,fullWidth:!0,type:"submit",startIcon:e.jsx(C,{}),children:"Enviar"})})]})})})}const E="/react/assets/img/qr-code.png";function me({open:m,setOpen:p}){const t=S(h=>h.card),[s,a]=c.useState(t==null?void 0:t.balance),[u,o]=c.useState(!0),r=c.useMemo(()=>s<0,[s]),l=()=>{p(!1),o(!1)};return c.useEffect(()=>{a(t==null?void 0:t.balance),o(!1)},[t==null?void 0:t.balance]),e.jsx(F,{open:m,handleClose:l,title:"Enviar Pago",children:u?e.jsx(x,{children:e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(i,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(n,{variant:"subtitle1",children:"Transferencia Exitosa"}),e.jsx(j,{sx:{width:40,height:40},color:"success"})]}),e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:[e.jsx(n,{variant:"subtitle2",children:"Importe"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",children:d(100)}),e.jsx(n,{variant:"caption",children:"MXN"})]})]}),e.jsx(g,{src:E,sx:{width:250}}),e.jsx(n,{variant:"caption",color:"text.disabled",children:b(new Date,"dd MMM yyyy hh:mm a",{locale:y})})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:3,pb:0,children:[e.jsx(n,{variant:"subtitle1",children:"Saldo"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",color:r?"error":"success.main",children:d(s)}),e.jsx(n,{variant:"caption",color:r?"error":"success.main",children:"MXN"})]}),r&&e.jsx(n,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la operación"})]}),e.jsx(D,{balance:t==null?void 0:t.balance,insufficient:r,setCurrentBalance:a,setShowQR:o})]})})}export{me as default};
