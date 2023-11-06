import{r as c,j as e,D as x,S as i,T as r,L as f,b3 as j,aO as g,G as b,K as y}from"./index-346c4534.js";import{u as v}from"./build-31883e00.js";import{F as I}from"./build-1db93dc8.js";import{R as w}from"./build-d933afe7.js";import{I as M}from"./build-4fa429fc.js";import{S as C}from"./build-694e69f9.js";import{u as S}from"./build-7d848a9e.js";import{a as F}from"./build-b25654fe.js";import{f as d}from"./build-cb0e7475.js";import"./build-429ae8b4.js";import"./build-2a2c9560.js";import"./build-e9361a90.js";import"./build-6435c1fd.js";import"./build-9177a231.js";import"./build-6cc29a6e.js";import"./build-bee6630b.js";import"./build-f149ac76.js";import"./build-e96dcb11.js";import"./build-a7e8e7cb.js";import"./build-40e523c6.js";import"./build-24563a1e.js";import"./build-515c977a.js";import"./build-905506d5.js";import"./build-5eec7cc5.js";import"./build-737c64c4.js";import"./build-cf621495.js";import"./build-6a6f2775.js";import"./build-f8f5ccb1.js";import"./build-6471b759.js";import"./build-a20336ff.js";import"./build-ef13f1ba.js";import"./build-45178a4b.js";import"./build-f0d75a0c.js";import"./build-c0c04b6b.js";import"./build-fe827404.js";import"./build-ee11d05a.js";import"./build-f38e29d0.js";import"./build-ee9a7afc.js";import"./build-2fcf14dd.js";const P=0,D=2e3;function E({balance:m,setCurrentBalance:p,insufficient:t,setShowQR:s}){const o=v({initialValues:{amount:""},onSubmit:l=>{setTimeout(()=>{s(!0)},3e3)}}),{isSubmitting:u,values:a}=o,{amount:n}=a;return c.useEffect(()=>{const l=n===""?0:n;p(parseFloat(m)-parseFloat(l))},[n]),e.jsx(x,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(I,{formik:o,children:e.jsxs(i,{spacing:3,sx:{p:3},children:[e.jsxs(r,{variant:"overline",sx:{color:"text.secondary"},children:["Ingresa La Cantidad (Máximo $",D,".00)"]}),e.jsx(i,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"center",children:e.jsx(w,{fullWidth:!0,placeholder:"0.00",name:"amount",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:e.jsx(M,{position:"end",children:"MXN"})},inputProps:{inputMode:"numeric",step:"any",min:P}})}),e.jsx(i,{children:e.jsx(f,{loading:u,variant:"contained",color:"primary",disabled:n<=0||t,fullWidth:!0,type:"submit",startIcon:e.jsx(C,{}),children:"Enviar"})})]})})})}const R="/react/assets/img/qr-code.png";function je({open:m,setOpen:p}){const t=S(h=>h.card),[s,o]=c.useState(t==null?void 0:t.balance),[u,a]=c.useState(!0),n=c.useMemo(()=>s<0,[s]),l=()=>{p(!1),a(!1)};return c.useEffect(()=>{o(t==null?void 0:t.balance),a(!1)},[t==null?void 0:t.balance]),e.jsx(F,{open:m,handleClose:l,title:"Enviar Pago",children:u?e.jsx(x,{children:e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(i,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(r,{variant:"subtitle1",children:"Transferencia Exitosa"}),e.jsx(j,{sx:{width:40,height:40},color:"success"})]}),e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:[e.jsx(r,{variant:"subtitle2",children:"Importe"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{variant:"h3",children:d(100)}),e.jsx(r,{variant:"caption",children:"MXN"})]})]}),e.jsx(g,{src:R,sx:{width:250}}),e.jsx(r,{variant:"caption",color:"text.disabled",children:b(new Date,"dd MMM yyyy hh:mm a",{locale:y})})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:3,pb:0,children:[e.jsx(r,{variant:"subtitle1",children:"Saldo"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{variant:"h3",color:n?"error":"success.main",children:d(s)}),e.jsx(r,{variant:"caption",color:n?"error":"success.main",children:"MXN"})]}),n&&e.jsx(r,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la operación"})]}),e.jsx(E,{balance:t==null?void 0:t.balance,insufficient:n,setCurrentBalance:o,setShowQR:a})]})})}export{je as default};