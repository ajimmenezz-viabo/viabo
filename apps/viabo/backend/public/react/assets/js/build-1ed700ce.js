import{u as b,r as D,n as I,g as V,o as F,b2 as k,H as v,J as w,j as e,S as s,T as c,ag as E,B as M,a6 as P,F as R,L as T,d as _,a as q}from"./index-6ad460b4.js";import{u as B}from"./build-154de2c9.js";import{c as L,a as j}from"./build-74deba51.js";import{g as N}from"./build-5e714fdb.js";import{u as h,C as y}from"./build-76da712b.js";import{a as z}from"./build-555608e8.js";import{c as U}from"./build-ce399990.js";import{F as $,M as G}from"./build-437622c8.js";import{R as H}from"./build-e822f479.js";import{I as W}from"./build-062e0ba8.js";import{V as O}from"./build-50a5e040.js";import{A as J}from"./build-2c8099cc.js";import{D as K}from"./build-78813490.js";import"./build-4d96ee10.js";import"./build-caf88c1a.js";import"./build-0a64cac0.js";import"./build-bee6630b.js";import"./build-636787f0.js";import"./build-af45772f.js";const Y=r=>{var p,a;const d=(p=r==null?void 0:r.expiration)==null?void 0:p.slice(-2),o={expiration:((a=r==null?void 0:r.expiration)==null?void 0:a.slice(0,3))+d,cvv:r==null?void 0:r.cvv};return N(o)},Q=(r={})=>{const{enqueueSnackbar:d}=b(),[n,o]=D.useState(null);return{...I(z,{onSuccess:()=>{o(null)},onError:a=>{const i=V(a,"No se puede asignar la tarjeta. Intente nuevamente o reporte a sistemas");o(i),d(i,{variant:F(a),autoHideDuration:5e3})},...r}),error:n||null}};function ye(){const r=h(t=>t.setStepAssignRegister),d=h(t=>t.token),n=h(t=>t.card),{mutate:o,isLoading:p}=Q(),a=L().shape({cvv:j().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),expiration:j().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(t){const l=k(`01/${t}`,"dd/MM/yyyy",new Date),x=new Date;return v(l)&&w(l,x)})}),i=B({initialValues:{expiration:"",cvv:""},validationSchema:a,onSubmit:(t,{setSubmitting:l})=>{const x=Y(t);q.defaults.headers.common.Authorization=`Bearer ${d}`,o(x,{onSuccess:()=>{l(!1),r(y.CARD_ASSIGNED)},onError:()=>{l(!1)}})}}),{isSubmitting:C,values:g,setFieldValue:A,errors:u,handleSubmit:S,touched:f,resetForm:X,setSubmitting:Z}=i,m=C||p;return e.jsxs(s,{sx:{display:"flex",overflow:"hidden",mb:3},children:[e.jsxs(s,{direction:"column",width:1,spacing:1,pb:2,px:3,children:[e.jsx(c,{variant:"h4",color:"textPrimary",align:"center",children:"Registrar Tarjeta"}),e.jsx(c,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese la información faltante de la tarjeta para asociarla a su cuenta."})]}),e.jsxs(E,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:[e.jsx($,{formik:i,children:e.jsxs(s,{px:3,children:[e.jsxs(M,{sx:{pb:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2},children:[e.jsx("img",{className:"animate__animated animate__pulse",src:U,width:"20%",alt:"Sent Mail"}),e.jsx(c,{variant:"overline",color:"primary.main",children:n==null?void 0:n.cardNumberHidden})]}),e.jsx(P,{sx:{textAlign:"center",width:"100%",justifyContent:"center",display:"flex",mb:2},severity:"warning",children:e.jsx(c,{variant:"caption",fontWeight:"bold",children:"En caso de no capturar los datos correctos de la tarjeta, la información de la misma podrá ser erronea."})}),e.jsxs(s,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(s,{sx:{width:{xs:"100%",lg:"40%"}},children:[e.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(H,{name:"cvv",required:!0,placeholder:"123",size:"small",InputProps:{startAdornment:e.jsx(W,{position:"start",children:e.jsx(O,{})}),inputComponent:G,inputProps:{mask:"000",onAccept:t=>{A("cvv",t)},value:g.cvv}},disabled:m})]}),e.jsxs(s,{children:[e.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence"}),e.jsx(K,{disabled:m,views:["year","month"],size:"small",name:"expiration",value:new Date(g.expiration)??null,onChange:t=>v(t)?i.setFieldValue("expiration",R(t,"MM/yyyy")):i.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,size:"small",error:!!(f.expiration&&u.expiration),required:!0,helperText:f.expiration&&u.expiration?u.expiration:""}},disablePast:!0,format:"MM/yy"})]})]})]})}),e.jsxs(s,{spacing:3,px:3,py:4,children:[e.jsx(T,{loading:m,variant:"contained",color:"primary",fullWidth:!0,type:"submit",onClick:S,disabled:m,startIcon:e.jsx(J,{}),children:"Asociar"}),e.jsx(_,{variant:"outlined",color:"inherit",onClick:()=>{r(y.CARD_VALIDATION)},children:"Cancelar"})]})]})]})}export{ye as default};
