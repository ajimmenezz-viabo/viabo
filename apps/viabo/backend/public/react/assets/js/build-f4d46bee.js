import{r as y,j as e,S as s,cD as A,T as o,B as l,H as E,J as D,p as I,ah as m}from"./index-225b8590.js";import{h as L}from"./build-b7b777ad.js";import{u as V}from"./build-b34e8fe8.js";import{u as k}from"./build-a0e1dfc6.js";import{u as t,C as h}from"./build-ee638aca.js";import{m as B}from"./build-ecaf0d13.js";import{L as T}from"./build-c8520ba8.js";import"./build-b558b3a6.js";import"./build-d4376901.js";import"./build-b576546c.js";function H(){const n=t(r=>r.setStepAssignRegister),i=t(r=>r.user),a=t(r=>r.token),[p,d]=y.useState(""),{mutate:x,isLoading:u}=k(),{mutate:g,isLoading:C,isError:c,reset:j}=V(),v=r=>{d(r),j()},S=(r,b)=>B(r),f=r=>{m.defaults.headers.common.Authorization=`Bearer ${a}`,g({verificationCode:r,token:a},{onSuccess:()=>{n(h.CARD_REGISTER)},onError:()=>{d("")}})},R=()=>{m.defaults.headers.common.Authorization=`Bearer ${a}`,x()};return e.jsxs(s,{children:[e.jsx(A,{}),e.jsx(o,{variant:"h4",color:"textPrimary",align:"center",children:"Estamos a un paso de validar tu identidad"}),e.jsxs(o,{paragraph:!0,sx:{mb:4},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Revisa tu correo electrónico ",(i==null?void 0:i.email)||"-"," e ingresa el código de verificación."]}),e.jsx(L,{length:6,value:p,onComplete:f,onChange:v,validateChar:S,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:c,disabled:C}}),!!c&&e.jsx(l,{mt:1,children:e.jsx(o,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(l,{children:e.jsx(E,{sx:{my:4},children:e.jsx(s,{direction:"row",spacing:1,justifyContent:"center",children:u?e.jsx(D,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(T,{underline:"hover",sx:{cursor:"pointer"},onClick:R,children:e.jsx(o,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})}),e.jsx(s,{px:5,children:e.jsx(I,{size:"large",variant:"outlined",color:"inherit",onClick:()=>{n(h.CARD_VALIDATION)},children:"Cancelar"})})]})}export{H as default};