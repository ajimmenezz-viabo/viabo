import{ac as A,a as D,g as T,b as W,$ as P,r as q,j as e,S as a,f,T as o,H as M,L as V}from"./index-5445d16d.js";import{u as L}from"./build-6cbfc9db.js";import{h as _}from"./build-3e9886de.js";import{c as w,a as z}from"./build-012205cd.js";import{u as n,C as $}from"./build-b58ba1cf.js";import{m as B}from"./build-6e1b3593.js";import{v as G}from"./build-ca544b67.js";import{v as j}from"./build-205e2358.js";import{F as H,M as U}from"./build-3e3331ed.js";import{R as O}from"./build-0d070a86.js";import{I as J}from"./build-4a6d9156.js";import{C as K}from"./build-c804e8ae.js";import"./build-42e605bc.js";import"./build-d3dc267c.js";import"./build-cf9097da.js";import"./build-a86b361e.js";import"./build-26d602c4.js";import"./build-bee6630b.js";import"./build-e31e8a44.js";import"./build-7d6b9cd7.js";const Q=(d={})=>{const{enqueueSnackbar:c}=A();return D({mutationFn:G,onError:i=>{const m=T(i,"No se puede validar la tarjeta.");c(m,{variant:W(i),autoHideDuration:5e3})},...d})};function je(){const d=n(r=>r.setToken),c=n(r=>r.setStepAssignRegister),i=n(r=>r.setCard),m=n(r=>r.resetState),C=P("up","md"),{mutate:b,isLoading:v,reset:S,isError:l}=Q(),N=w().shape({cardNumber:z().transform((r,t)=>t.replace(/\s/g,"")).min(8,"Debe contener los últimos 8 dígitos").required("El número de la tarjeta es requerido")}),p=L({initialValues:{cardNumber:""},validationSchema:N,onSubmit:(r,{setSubmitting:t})=>{var g;b({cardNumber:(g=r==null?void 0:r.cardNumber)==null?void 0:g.replace(/\s+/g,"")},{onSuccess:R=>{const{token:x,...F}=R;x&&(d(x),i(F),c($.USER_REGISTER)),t(!1)},onError:()=>{t(!1)}})}}),{isSubmitting:E,values:u,setFieldValue:h,handleSubmit:k,errors:X}=p,s=E||v;q.useEffect(()=>{m()},[]);const y=r=>{l&&S(),h("cardNumber",r)},I=(r,t)=>B(r);return e.jsxs(a,{spacing:5,children:[e.jsxs(a,{direction:"column",width:1,spacing:1,children:[e.jsxs(a,{children:[e.jsx(f.div,{variants:j().inRight,children:e.jsx(o,{align:"center",variant:"h3",sx:{color:"primary.main",fontWeight:"fontWeightMedium"},children:"Aquí Comienza"})}),e.jsx(f.div,{variants:j().inRight,children:e.jsx(o,{align:"center",variant:"h3",sx:{color:"primary.light",fontWeight:"fontWeightMedium"},children:"tu agilidad en pagos"})})]}),e.jsx(o,{paragraph:!0,align:"center",variant:"subtitle1",color:"text.primary",whiteSpace:"pre-line",children:"Ingrese los 8 últimos dígitos de la tarjeta."})]}),e.jsx(H,{formik:p,children:C?e.jsx(_,{name:"cardNumber",length:8,value:u.cardNumber,onChange:y,validateChar:I,sx:{gap:1.5},TextFieldsProps:{placeholder:"-",error:l,disabled:s,fullWidth:!0}}):e.jsx(O,{name:"cardNumber",required:!0,placeholder:"9717 8968",fullWidth:!0,size:"small",InputProps:{startAdornment:e.jsx(J,{position:"start",children:e.jsx(K,{})}),inputComponent:U,inputProps:{mask:"0000 0000",value:u.cardNumber,onAccept:r=>{h("cardNumber",r)}}},disabled:s})}),e.jsxs(a,{spacing:3,px:5,children:[e.jsxs(a,{children:[e.jsx(o,{paragraph:!0,align:"center",variant:"body2",color:"text.primary",children:"Iniciemos el proceso de asociación de tu cuenta."}),e.jsx(M,{})]}),e.jsx(a,{alignItems:"center",justifyContent:"center",children:e.jsx(V,{loading:s,variant:"contained",size:"large",color:"primary",fullWidth:!0,type:"submit",onClick:k,disabled:s,sx:{width:150},children:"Validar"})})]})]})}export{je as default};
