import{r as c,j as e,a7 as x,S as i,T as n,L as f,aJ as j,D as g,K as b,aK as y}from"./index-2d3a0a13.js";import{u as v}from"./build-30241498.js";import{R as I}from"./build-01b6f7f4.js";import{F as w}from"./build-1e307d2a.js";import{I as M}from"./build-4e0deea5.js";import{S as C}from"./build-c84276db.js";import{u as S}from"./build-d75056be.js";import{R as F}from"./build-ac8f790c.js";import{f as d}from"./build-f07e5e18.js";import"./build-2272a72f.js";import"./build-764e85bd.js";import"./build-b76a1f77.js";import"./build-c7ce8ef2.js";import"./build-a8378add.js";import"./build-07def057.js";import"./build-d7db9a04.js";import"./build-334dd83b.js";import"./build-dd4cc906.js";import"./build-f30598e0.js";import"./build-74899642.js";import"./build-3ddaf20a.js";import"./build-8a1d1600.js";import"./build-062a6c7c.js";import"./build-b77d30e7.js";import"./build-63df143b.js";import"./build-6fda1b55.js";import"./build-09bd3f47.js";import"./build-a796168f.js";import"./build-ecaf0d13.js";import"./build-bee6630b.js";import"./build-b2ae39de.js";const P=0,R=2e3;function D({balance:m,setCurrentBalance:p,insufficient:t,setShowQR:s}){const a=v({initialValues:{amount:""},onSubmit:l=>{setTimeout(()=>{s(!0)},3e3)}}),{isSubmitting:u,values:o}=a,{amount:r}=o;return c.useEffect(()=>{const l=r===""?0:r;p(parseFloat(m)-parseFloat(l))},[r]),e.jsx(x,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(w,{formik:a,children:e.jsxs(i,{spacing:3,sx:{p:3},children:[e.jsxs(n,{variant:"overline",sx:{color:"text.secondary"},children:["Ingresa La Cantidad (Máximo $",R,".00)"]}),e.jsx(i,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center",children:e.jsx(I,{fullWidth:!0,placeholder:"0.00",name:"amount",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:e.jsx(M,{position:"end",children:"MXN"})},inputProps:{inputMode:"numeric",step:"any",min:P}})}),e.jsx(i,{children:e.jsx(f,{loading:u,variant:"contained",color:"primary",disabled:r<=0||t,fullWidth:!0,type:"submit",startIcon:e.jsx(C,{}),children:"Enviar"})})]})})})}const E="/react/assets/img/qr-code.png";function le({open:m,setOpen:p}){const t=S(h=>h.card),[s,a]=c.useState(t==null?void 0:t.balance),[u,o]=c.useState(!0),r=c.useMemo(()=>s<0,[s]),l=()=>{p(!1),o(!1)};return c.useEffect(()=>{a(t==null?void 0:t.balance),o(!1)},[t==null?void 0:t.balance]),e.jsx(F,{open:m,handleClose:l,title:"Enviar Pago",children:u?e.jsx(x,{children:e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(i,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(n,{variant:"subtitle1",children:"Transferencia Exitosa"}),e.jsx(j,{sx:{width:40,height:40},color:"success"})]}),e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:[e.jsx(n,{variant:"subtitle2",children:"Importe"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",children:d(100)}),e.jsx(n,{variant:"caption",children:"MXN"})]})]}),e.jsx(g,{src:E,sx:{width:250}}),e.jsx(n,{variant:"caption",color:"text.disabled",children:b(new Date,"dd MMM yyyy hh:mm a",{locale:y})})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:3,pb:0,children:[e.jsx(n,{variant:"subtitle1",children:"Saldo"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"h3",color:r?"error":"success.main",children:d(s)}),e.jsx(n,{variant:"caption",color:r?"error":"success.main",children:"MXN"})]}),r&&e.jsx(n,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la operación"})]}),e.jsx(D,{balance:t==null?void 0:t.balance,insufficient:r,setCurrentBalance:a,setShowQR:o})]})})}export{le as default};
