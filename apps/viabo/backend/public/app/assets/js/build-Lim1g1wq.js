import{r as R,dE as y,j as e,S as s,dH as A,T as o,B as l,E as I,Y as L,p as V,al as m}from"./index-mplo7Cy0.js";import{h as k}from"./build-kVhtA37X.js";import{u as B}from"./build-a1EOjll4.js";import{m as D}from"./build-yDVAqRjG.js";import{u as n,C as h}from"./build-bFKG6kC-.js";import{L as T}from"./build-1LmYI3dU.js";import"./build-nSdaxBfa.js";import"./build-D3xC4GbD.js";import"./build-1rkYb17X.js";function $(){const t=n(r=>r.setStepAssignRegister),i=n(r=>r.user),a=n(r=>r.token),[p,d]=R.useState(""),{mutate:x,isLoading:u}=y(),{mutate:g,isLoading:C,isError:c,reset:j}=B(),v=r=>{d(r),j()},S=(r,b)=>D(r),f=r=>{m.defaults.headers.common.Authorization=`Bearer ${a}`,g({verificationCode:r,token:a},{onSuccess:()=>{t(h.CARD_REGISTER)},onError:()=>{d("")}})},E=()=>{m.defaults.headers.common.Authorization=`Bearer ${a}`,x()};return e.jsxs(s,{children:[e.jsx(A,{}),e.jsx(o,{variant:"h4",color:"textPrimary",align:"center",children:"Estamos a un paso de validar tu identidad"}),e.jsxs(o,{paragraph:!0,sx:{mb:4},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Revisa tu correo electrónico ",(i==null?void 0:i.email)||"-"," e ingresa el código de verificación."]}),e.jsx(k,{length:6,value:p,onComplete:f,onChange:v,validateChar:S,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:c,disabled:C}}),!!c&&e.jsx(l,{mt:1,children:e.jsx(o,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(l,{children:e.jsx(I,{sx:{my:4},children:e.jsx(s,{direction:"row",spacing:1,justifyContent:"center",children:u?e.jsx(L,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(T,{underline:"hover",sx:{cursor:"pointer"},onClick:E,children:e.jsx(o,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})}),e.jsx(s,{px:5,children:e.jsx(V,{size:"large",variant:"outlined",color:"inherit",onClick:()=>{t(h.CARD_VALIDATION)},children:"Cancelar"})})]})}export{$ as default};