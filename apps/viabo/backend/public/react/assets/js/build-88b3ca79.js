import{P as L,r as m,j as e,B as n,T as s,ai as b,S as R,C as k,a2 as N}from"./build-27e237f5.js";import{u as O,Z as w}from"./build-b77e3a7f.js";import{m as B}from"./build-091f1fac.js";import{p as F}from"./build-190ad162.js";import{m as A}from"./build-ecaf0d13.js";import{a as M,P as p}from"./build-61d5e77c.js";import{u as Z}from"./build-fbf4edcb.js";import{u as q}from"./build-0df00ef1.js";import"./build-7079f4d4.js";import"./build-91fdb816.js";import"./build-9563ddbe.js";import"./build-e603dc94.js";import"./build-65e7778d.js";z.propTypes={store:L.shape(F)};function z({store:x}){const{lastProcess:u,setActualProcess:c,setLastProcess:h,setToken:C,token:g,resume:i}=x,{info:r}=u,{mutate:S,isLoading:j}=q(),{mutate:E,isLoading:f,isError:d,reset:y}=O(),{data:o,isError:G}=Z(r==null?void 0:r.email,{enabled:!!(r!=null&&r.email)});m.useEffect(()=>{o&&C(o==null?void 0:o.token)},[o]);const[v,l]=m.useState(""),T=a=>{l(a),y()},P=(a,t)=>A(a),V=a=>{E({verificationCode:a,token:g},{onSuccess:()=>{var t;i!=null&&i.step?c(((t=M.find(I=>I.step===(i==null?void 0:i.step)))==null?void 0:t.name)||p.SERVICES_SELECTION):c(p.SERVICES_SELECTION),h()},onError:()=>{l("")}})},_=()=>{S({token:o==null?void 0:o.token})};return e.jsxs(e.Fragment,{children:[e.jsx(n,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:e.jsx("img",{className:"animate__animated animate__pulse",src:B,width:"25%",alt:"Sent Mail"})}),e.jsx(s,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),e.jsxs(s,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",r==null?void 0:r.email," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),e.jsx(w,{length:6,value:v,onComplete:V,onChange:T,validateChar:P,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:d,disabled:f}}),!!d&&e.jsx(n,{mt:1,children:e.jsx(s,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(n,{mb:5,children:e.jsx(b,{sx:{my:4},children:e.jsx(R,{direction:"row",spacing:1,justifyContent:"center",children:j?e.jsx(k,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(N,{underline:"hover",sx:{cursor:"pointer"},onClick:_,children:e.jsx(s,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})})]})}export{z as default};