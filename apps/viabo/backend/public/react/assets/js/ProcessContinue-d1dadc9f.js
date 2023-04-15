import{p as L,d as t,a6 as O,j as e,S as d,aa as p,T as u,B as h,L as A}from"./index-eb88d5db.js";import{u as V}from"./formik.esm-e529335e.js";import{c as j,a as v}from"./index.esm-4f526a47.js";import{p as B,P as f}from"./CommerceRegister-4b1a88cb.js";import{u as _,a as q}from"./useSendValidationCode-97d35d31.js";import{T as w}from"./TextField-ebaea117.js";import{I as D}from"./InputAdornment-cc1b7148.js";import{E as N}from"./EmailOutlined-dd8848de.js";import"./integracion-tecnologica-98d23ebe.js";const R="/react/assets/img/forms_steps-1aa59cf4.svg";W.propTypes={store:L.shape(B)};function W({store:g}){const{setToken:y,setActualProcess:S,setLastProcess:C}=g,{mutate:x,isLoading:T}=_(),E=V({initialValues:{email:""},validationSchema:j({email:v().email("Ingresa un correo valido").required("El correo es requerido")}),onSubmit:r=>{const m=r==null?void 0:r.email;k().then(P=>{const{isError:F,data:o}=P;F?l(!1):(y(o==null?void 0:o.token),x({email:m,token:o==null?void 0:o.token},{onSuccess:()=>{S(f.VALIDATION_CODE),C({info:{email:m},name:f.CONTINUE_PROCESS})},onError:()=>{l(!1)}}))})}}),{handleSubmit:a,values:i,errors:n,touched:s,handleChange:b,isSubmitting:I,setSubmitting:l,getFieldProps:$,setFieldValue:z}=E,{data:U,isError:G,refetch:k}=q(i==null?void 0:i.email,{enabled:!1}),c=T||I;return t(O,{children:[e(d,{direction:"column",width:1,spacing:1,children:t(p.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e(u,{variant:"h4",color:"textPrimary",align:"center",children:"Continué con el proceso"}),e(u,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese el correo electrónico con el que se hizo el registro para poder continuar con su proceso."})]})}),e(p.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:e(h,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:e("img",{src:R,width:"40%",alt:"fill forms"})})}),e(h,{component:"form",mt:3,onSubmit:a,children:t(d,{direction:"column",spacing:3,children:[e(w,{fullWidth:!0,id:"email",name:"email",label:"Correo",placeholder:"usuario@dominio.com",value:i.email,onChange:b,error:s.email&&!!n.email,helperText:s.email&&n.email,disabled:c,InputProps:{startAdornment:e(D,{position:"start",children:e(N,{})})}}),e(A,{onClick:a,loading:c,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Continuar"})]})})]})}export{W as default};
