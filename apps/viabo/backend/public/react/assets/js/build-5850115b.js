import{D as I,r as m,j as e,B as t,T as i,H as b,S as R,J as k}from"./index-225b8590.js";import{h as N}from"./build-b7b777ad.js";import{P as O,a as p}from"./build-bf16cd7e.js";import{u as w}from"./build-2f31a2ef.js";import{p as B}from"./build-928270c4.js";import{u as F}from"./build-b34e8fe8.js";import{u as A}from"./build-a0e1dfc6.js";import{m as H}from"./build-ecaf0d13.js";import{L as J}from"./build-c8520ba8.js";import"./build-b558b3a6.js";import"./build-d4376901.js";import"./build-9563ddbe.js";import"./build-b8a746d1.js";const M="/react/assets/img/mail.svg";q.propTypes={store:I.shape(B)};function q({store:x}){const{lastProcess:u,setActualProcess:n,setLastProcess:h,setToken:g,token:C,resume:s}=x,{info:r}=u,{mutate:S,isLoading:j}=A(),{mutate:f,isLoading:E,isError:c,reset:v}=F(),{data:o,isError:z}=w(r==null?void 0:r.email,{enabled:!!(r!=null&&r.email)});m.useEffect(()=>{o&&g(o==null?void 0:o.token)},[o]);const[y,d]=m.useState(""),T=a=>{d(a),v()},P=a=>H(a),L=a=>{f({verificationCode:a,token:C},{onSuccess:()=>{var l;s!=null&&s.step?n(((l=O.find(_=>_.step===(s==null?void 0:s.step)))==null?void 0:l.name)||p.SERVICES_SELECTION):n(p.SERVICES_SELECTION),h()},onError:()=>{d("")}})},V=()=>{S({token:o==null?void 0:o.token})};return e.jsxs(e.Fragment,{children:[e.jsx(t,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:e.jsx("img",{className:"animate__animated animate__pulse",src:M,width:"25%",alt:"Sent Mail"})}),e.jsx(i,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),e.jsxs(i,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",r==null?void 0:r.email," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),e.jsx(N,{length:6,value:y,onComplete:L,onChange:T,validateChar:P,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:c,disabled:E}}),!!c&&e.jsx(t,{mt:1,children:e.jsx(i,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(t,{mb:5,children:e.jsx(b,{sx:{my:4},children:e.jsx(R,{direction:"row",spacing:1,justifyContent:"center",children:j?e.jsx(k,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(J,{underline:"hover",sx:{cursor:"pointer"},onClick:V,children:e.jsx(i,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})})]})}export{q as default};