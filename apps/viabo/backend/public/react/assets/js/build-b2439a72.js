import{r as y,j as e,S as s,d5 as A,T as o,B as l,G as E,H as I,p as L,a8 as m}from"./index-66cb75df.js";import{h as V}from"./build-60824353.js";import{u as k}from"./build-ba890577.js";import{u as B}from"./build-10297c02.js";import{u as t,C as h}from"./build-a26b0c4e.js";import{m as D}from"./build-1340cc8b.js";import{L as T}from"./build-1f27af78.js";import"./build-b463c8f6.js";import"./build-9d3fe41c.js";import"./build-0e88a906.js";function H(){const n=t(r=>r.setStepAssignRegister),i=t(r=>r.user),a=t(r=>r.token),[p,d]=y.useState(""),{mutate:x,isLoading:u}=B(),{mutate:g,isLoading:C,isError:c,reset:j}=k(),v=r=>{d(r),j()},S=(r,b)=>D(r),f=r=>{m.defaults.headers.common.Authorization=`Bearer ${a}`,g({verificationCode:r,token:a},{onSuccess:()=>{n(h.CARD_REGISTER)},onError:()=>{d("")}})},R=()=>{m.defaults.headers.common.Authorization=`Bearer ${a}`,x()};return e.jsxs(s,{children:[e.jsx(A,{}),e.jsx(o,{variant:"h4",color:"textPrimary",align:"center",children:"Estamos a un paso de validar tu identidad"}),e.jsxs(o,{paragraph:!0,sx:{mb:4},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Revisa tu correo electrónico ",(i==null?void 0:i.email)||"-"," e ingresa el código de verificación."]}),e.jsx(V,{length:6,value:p,onComplete:f,onChange:v,validateChar:S,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:c,disabled:C}}),!!c&&e.jsx(l,{mt:1,children:e.jsx(o,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(l,{children:e.jsx(E,{sx:{my:4},children:e.jsx(s,{direction:"row",spacing:1,justifyContent:"center",children:u?e.jsx(I,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(T,{underline:"hover",sx:{cursor:"pointer"},onClick:R,children:e.jsx(o,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})}),e.jsx(s,{px:5,children:e.jsx(L,{size:"large",variant:"outlined",color:"inherit",onClick:()=>{n(h.CARD_VALIDATION)},children:"Cancelar"})})]})}export{H as default};