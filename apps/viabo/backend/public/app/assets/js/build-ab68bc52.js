import{O as I,r as m,j as e,B as t,T as i,E as b,S as R,X as k}from"./index-5b9abb5d.js";import{h as O}from"./build-22efc8c6.js";import{P as N,a as p}from"./build-bc833da9.js";import{u as w}from"./build-a13e922c.js";import{p as B}from"./build-38f36500.js";import{u as F}from"./build-73aff62d.js";import{u as A}from"./build-ae3b7788.js";import{m as M}from"./build-102bf6ff.js";import{L as X}from"./build-dfaaa189.js";import"./build-cd679c67.js";import"./build-a4831788.js";import"./build-17708e30.js";const q="/app/assets/img/mail.svg";z.propTypes={store:I.shape(B)};function z({store:x}){const{lastProcess:u,setActualProcess:n,setLastProcess:h,setToken:g,token:C,resume:s}=x,{info:r}=u,{mutate:S,isLoading:j}=F(),{mutate:E,isLoading:f,isError:c,reset:v}=A(),{data:o,isError:G}=w(r==null?void 0:r.email,{enabled:!!(r!=null&&r.email)});m.useEffect(()=>{o&&g(o==null?void 0:o.token)},[o]);const[y,d]=m.useState(""),T=a=>{d(a),v()},P=a=>M(a),L=a=>{E({verificationCode:a,token:C},{onSuccess:()=>{var l;s!=null&&s.step?n(((l=N.find(_=>_.step===(s==null?void 0:s.step)))==null?void 0:l.name)||p.SERVICES_SELECTION):n(p.SERVICES_SELECTION),h()},onError:()=>{d("")}})},V=()=>{S({token:o==null?void 0:o.token})};return e.jsxs(e.Fragment,{children:[e.jsx(t,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:e.jsx("img",{className:"animate__animated animate__pulse",src:q,width:"25%",alt:"Sent Mail"})}),e.jsx(i,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),e.jsxs(i,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",r==null?void 0:r.email," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),e.jsx(O,{length:6,value:y,onComplete:L,onChange:T,validateChar:P,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:c,disabled:f}}),!!c&&e.jsx(t,{mt:1,children:e.jsx(i,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(t,{mb:5,children:e.jsx(b,{sx:{my:4},children:e.jsx(R,{direction:"row",spacing:1,justifyContent:"center",children:j?e.jsx(k,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(X,{underline:"hover",sx:{cursor:"pointer"},onClick:V,children:e.jsx(i,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})})]})}export{z as default};
