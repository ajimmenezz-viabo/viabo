import{r as A,j as e,S as l,B as o,T as a,a6 as R,C as E,aJ as _,d as I,a as m}from"./build-a914105e.js";import{u as V,Z as D}from"./build-bcc5cded.js";import{u as t,C as u}from"./build-fb9f8611.js";import{m as k}from"./build-ecaf0d13.js";import{u as B}from"./build-cd00b33b.js";import{m as T}from"./build-091f1fac.js";import"./build-b1f1edf3.js";import"./build-eeb9eef1.js";import"./build-56505f06.js";function $(){const s=t(r=>r.setStepAssignRegister),i=t(r=>r.user),n=t(r=>r.token),[x,c]=A.useState(""),{mutate:h,isLoading:p}=B(),{mutate:C,isLoading:g,isError:d,reset:j}=V(),f=r=>{c(r),j()},v=(r,b)=>k(r),S=r=>{m.defaults.headers.common.Authorization=`Bearer ${n}`,C({verificationCode:r,token:n},{onSuccess:()=>{s(u.CARD_REGISTER)},onError:()=>{c("")}})},y=()=>{m.defaults.headers.common.Authorization=`Bearer ${n}`,h()};return e.jsxs(l,{children:[e.jsx(o,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:e.jsx("img",{className:"animate__animated animate__pulse",src:T,width:"25%",alt:"Sent Mail"})}),e.jsx(a,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),e.jsxs(a,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",(i==null?void 0:i.email)||"-"," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),e.jsx(D,{length:6,value:x,onComplete:S,onChange:f,validateChar:v,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:d,disabled:g}}),!!d&&e.jsx(o,{mt:1,children:e.jsx(a,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(o,{children:e.jsx(R,{sx:{my:4},children:e.jsx(l,{direction:"row",spacing:1,justifyContent:"center",children:p?e.jsx(E,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(_,{underline:"hover",sx:{cursor:"pointer"},onClick:y,children:e.jsx(a,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})}),e.jsx(I,{variant:"outlined",color:"inherit",onClick:()=>{s(u.CARD_VALIDATION)},children:"Cancelar"})]})}export{$ as default};