import{O as P,j as e,S as m,m as d,T as p,B as u,L as F}from"./index-5b9abb5d.js";import{u as O}from"./build-475a8c0d.js";import{c as L,a as A}from"./build-52be6f5f.js";import{a as h}from"./build-bc833da9.js";import{u as V}from"./build-a13e922c.js";import{p as v}from"./build-38f36500.js";import{u as B}from"./build-73aff62d.js";import{T as _}from"./build-cd679c67.js";import{I as q}from"./build-71e28a4a.js";import{E as w}from"./build-f8e9536d.js";import"./build-17708e30.js";import"./build-a4831788.js";const D="/app/assets/img/forms_steps.svg";N.propTypes={store:P.shape(v)};function N({store:f}){const{setToken:x,setActualProcess:g,setLastProcess:y}=f,{mutate:S,isLoading:j}=B(),C=O({initialValues:{email:""},validationSchema:L({email:A().email("Ingresa un correo valido").required("El correo es requerido")}),onSubmit:r=>{const c=r==null?void 0:r.email;b().then(I=>{const{isError:k,data:o}=I;k?a(!1):(x(o==null?void 0:o.token),S({email:c,token:o==null?void 0:o.token},{onSuccess:()=>{g(h.VALIDATION_CODE),y({info:{email:c},name:h.CONTINUE_PROCESS})},onError:()=>{a(!1)}}))})}}),{handleSubmit:t,values:i,errors:n,touched:s,handleChange:T,isSubmitting:E,setSubmitting:a,getFieldProps:R,setFieldValue:W}=C,{data:$,isError:z,refetch:b}=V(i==null?void 0:i.email,{enabled:!1}),l=j||E;return e.jsxs(e.Fragment,{children:[e.jsx(m,{direction:"column",width:1,spacing:1,children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx(p,{variant:"h4",color:"textPrimary",align:"center",children:"Continué con el proceso"}),e.jsx(p,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese el correo electrónico con el que se hizo el registro para poder continuar con su proceso."})]})}),e.jsx(d.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:e.jsx(u,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:e.jsx("img",{src:D,width:"40%",alt:"fill forms"})})}),e.jsx(u,{component:"form",mt:3,onSubmit:t,children:e.jsxs(m,{direction:"column",spacing:3,children:[e.jsx(_,{fullWidth:!0,id:"email",name:"email",label:"Correo",placeholder:"usuario@dominio.com",value:i.email,onChange:T,error:s.email&&!!n.email,helperText:s.email&&n.email,disabled:l,InputProps:{startAdornment:e.jsx(q,{position:"start",children:e.jsx(w,{})})}}),e.jsx(F,{onClick:t,loading:l,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Continuar"})]})})]})}export{N as default};
