import{ao as A,a as D,g as T,b as W,a8 as P,r as q,j as e,S as a,f,T as o,E as M,L as V}from"./index-zZLQf85F.js";import{u as L}from"./build-vea5MoeN.js";import{h as _}from"./build-C4ADt6PN.js";import{c as w,a as z}from"./build-rPYTnZ0P.js";import{u as n,C as B}from"./build-DdXX27yg.js";import{m as G}from"./build-X5H9nG5J.js";import{v as U}from"./build-s8ML6bFe.js";import{v as j}from"./build-K3n06G8N.js";import{F as $,R as H,M as O}from"./build-xvftTHFY.js";import{I as J}from"./build-lGOk465E.js";import{C as K}from"./build-PBVwdiWg.js";import"./build-gPmZEdkF.js";import"./build-oAUg0xyq.js";import"./build-BiFUCUez.js";import"./build-nrvKdWYL.js";import"./build-BC3f-duO.js";import"./build-Uc7vb3zK.js";import"./build-zIcY1Gcs.js";import"./build-FIAgVl-Q.js";const Q=(d={})=>{const{enqueueSnackbar:c}=A();return D({mutationFn:U,onError:i=>{const m=T(i,"No se puede validar la tarjeta.");c(m,{variant:W(i),autoHideDuration:5e3})},...d})};function fe(){const d=n(r=>r.setToken),c=n(r=>r.setStepAssignRegister),i=n(r=>r.setCard),m=n(r=>r.resetState),C=P("up","md"),{mutate:b,isLoading:v,reset:S,isError:l}=Q(),E=w().shape({cardNumber:z().transform((r,t)=>t.replace(/\s/g,"")).min(8,"Debe contener los últimos 8 dígitos").required("El número de la tarjeta es requerido")}),u=L({initialValues:{cardNumber:""},validationSchema:E,onSubmit:(r,{setSubmitting:t})=>{var g;b({cardNumber:(g=r==null?void 0:r.cardNumber)==null?void 0:g.replace(/\s+/g,"")},{onSuccess:R=>{const{token:x,...F}=R;x&&(d(x),i(F),c(B.USER_REGISTER)),t(!1)},onError:()=>{t(!1)}})}}),{isSubmitting:N,values:p,setFieldValue:h,handleSubmit:k,errors:X}=u,s=N||v;q.useEffect(()=>{m()},[]);const y=r=>{l&&S(),h("cardNumber",r)},I=(r,t)=>G(r);return e.jsxs(a,{spacing:5,children:[e.jsxs(a,{direction:"column",width:1,spacing:1,children:[e.jsxs(a,{children:[e.jsx(f.div,{variants:j().inRight,children:e.jsx(o,{align:"center",variant:"h3",sx:{color:"primary.main",fontWeight:"fontWeightMedium"},children:"Aquí Comienza"})}),e.jsx(f.div,{variants:j().inRight,children:e.jsx(o,{align:"center",variant:"h3",sx:{color:"primary.light",fontWeight:"fontWeightMedium"},children:"tu agilidad en pagos"})})]}),e.jsx(o,{paragraph:!0,align:"center",variant:"subtitle1",color:"text.primary",whiteSpace:"pre-line",children:"Ingrese los 8 últimos dígitos de la tarjeta."})]}),e.jsx($,{formik:u,children:C?e.jsx(_,{name:"cardNumber",length:8,value:p.cardNumber,onChange:y,validateChar:I,sx:{gap:1.5},TextFieldsProps:{placeholder:"-",error:l,disabled:s,fullWidth:!0}}):e.jsx(H,{name:"cardNumber",required:!0,placeholder:"9717 8968",fullWidth:!0,size:"small",InputProps:{startAdornment:e.jsx(J,{position:"start",children:e.jsx(K,{})}),inputComponent:O,inputProps:{mask:"0000 0000",value:p.cardNumber,onAccept:r=>{h("cardNumber",r)}}},disabled:s})}),e.jsxs(a,{spacing:3,px:5,children:[e.jsxs(a,{children:[e.jsx(o,{paragraph:!0,align:"center",variant:"body2",color:"text.primary",children:"Iniciemos el proceso de asociación de tu cuenta."}),e.jsx(M,{})]}),e.jsx(a,{alignItems:"center",justifyContent:"center",children:e.jsx(V,{loading:s,variant:"contained",size:"large",color:"primary",fullWidth:!0,type:"submit",onClick:k,disabled:s,sx:{width:150},children:"Validar"})})]})]})}export{fe as default};
