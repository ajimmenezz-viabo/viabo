import{r as y,d8 as A,j as e,S as s,dI as E,T as o,B as l,E as I,Y as L,p as V,al as m}from"./index-y5qwZYHa.js";import{h as k}from"./build-Ykpcd_0-.js";import{u as B}from"./build-kEdlA-sL.js";import{m as D}from"./build-BezCRUW3.js";import{u as n,C as h}from"./build-6-RfgNTa.js";import{L as T}from"./build-Yn4D2ea6.js";import"./build-1tNQEUgO.js";import"./build-EPVZwbdT.js";import"./build-kN1LN86M.js";function $(){const t=n(r=>r.setStepAssignRegister),i=n(r=>r.user),a=n(r=>r.token),[p,d]=y.useState(""),{mutate:x,isLoading:u}=A(),{mutate:g,isLoading:C,isError:c,reset:j}=B(),v=r=>{d(r),j()},S=(r,b)=>D(r),f=r=>{m.defaults.headers.common.Authorization=`Bearer ${a}`,g({verificationCode:r,token:a},{onSuccess:()=>{t(h.CARD_REGISTER)},onError:()=>{d("")}})},R=()=>{m.defaults.headers.common.Authorization=`Bearer ${a}`,x()};return e.jsxs(s,{children:[e.jsx(E,{}),e.jsx(o,{variant:"h4",color:"textPrimary",align:"center",children:"Estamos a un paso de validar tu identidad"}),e.jsxs(o,{paragraph:!0,sx:{mb:4},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Revisa tu correo electrónico ",(i==null?void 0:i.email)||"-"," e ingresa el código de verificación."]}),e.jsx(k,{length:6,value:p,onComplete:f,onChange:v,validateChar:S,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:c,disabled:C}}),!!c&&e.jsx(l,{mt:1,children:e.jsx(o,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(l,{children:e.jsx(I,{sx:{my:4},children:e.jsx(s,{direction:"row",spacing:1,justifyContent:"center",children:u?e.jsx(L,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(T,{underline:"hover",sx:{cursor:"pointer"},onClick:R,children:e.jsx(o,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})}),e.jsx(s,{px:5,children:e.jsx(V,{size:"large",variant:"outlined",color:"inherit",onClick:()=>{t(h.CARD_VALIDATION)},children:"Cancelar"})})]})}export{$ as default};