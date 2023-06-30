import{P as k,j as e,S as m,V as d,T as p,B as u,L as F}from"./build-27e237f5.js";import{u as L}from"./build-f2a1bf56.js";import{c as O,a as V}from"./build-9892c001.js";import{P as h}from"./build-61d5e77c.js";import{u as A}from"./build-fbf4edcb.js";import{p as v}from"./build-190ad162.js";import{u as B}from"./build-0df00ef1.js";import{T as _}from"./build-7079f4d4.js";import{I as q}from"./build-21702c1b.js";import{E as w}from"./build-34be79e8.js";import"./build-91fdb816.js";import"./build-9563ddbe.js";import"./build-e603dc94.js";import"./build-65e7778d.js";const D="/react/assets/img/forms_steps.svg";N.propTypes={store:k.shape(v)};function N({store:f}){const{setToken:x,setActualProcess:g,setLastProcess:y}=f,{mutate:S,isLoading:j}=B(),C=L({initialValues:{email:""},validationSchema:O({email:V().email("Ingresa un correo valido").required("El correo es requerido")}),onSubmit:r=>{const c=r==null?void 0:r.email;P().then(b=>{const{isError:I,data:o}=b;I?a(!1):(x(o==null?void 0:o.token),S({email:c,token:o==null?void 0:o.token},{onSuccess:()=>{g(h.VALIDATION_CODE),y({info:{email:c},name:h.CONTINUE_PROCESS})},onError:()=>{a(!1)}}))})}}),{handleSubmit:t,values:i,errors:n,touched:s,handleChange:T,isSubmitting:E,setSubmitting:a,getFieldProps:R,setFieldValue:W}=C,{data:$,isError:z,refetch:P}=A(i==null?void 0:i.email,{enabled:!1}),l=j||E;return e.jsxs(e.Fragment,{children:[e.jsx(m,{direction:"column",width:1,spacing:1,children:e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx(p,{variant:"h4",color:"textPrimary",align:"center",children:"Continué con el proceso"}),e.jsx(p,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese el correo electrónico con el que se hizo el registro para poder continuar con su proceso."})]})}),e.jsx(d.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:e.jsx(u,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:e.jsx("img",{src:D,width:"40%",alt:"fill forms"})})}),e.jsx(u,{component:"form",mt:3,onSubmit:t,children:e.jsxs(m,{direction:"column",spacing:3,children:[e.jsx(_,{fullWidth:!0,id:"email",name:"email",label:"Correo",placeholder:"usuario@dominio.com",value:i.email,onChange:T,error:s.email&&!!n.email,helperText:s.email&&n.email,disabled:l,InputProps:{startAdornment:e.jsx(q,{position:"start",children:e.jsx(w,{})})}}),e.jsx(F,{onClick:t,loading:l,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Continuar"})]})})]})}export{N as default};