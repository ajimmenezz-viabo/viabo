import{t as A,f as D,r as T,i as e,S as a,p as f,T as o,aX as W,aZ as P,X as q,a0 as M}from"./vendor-CEMfbhOc.js";import{g as V,a as _,j as w}from"./index-B-U8M-8N.js";import{u as z}from"./formik.esm-Dshy1xjd.js";import{o as L}from"./mui-one-time-password-input.es-DPmvTOAU.js";import{c as B,a as G}from"./index.esm-C2GVbld4.js";import{u as n,C as U}from"./RegisterCards-CST_X0VG.js";import{m as X}from"./matchTypes-BFKCRNnN.js";import{v as $}from"./RegisterCardsRepository-4nT7LqPk.js";import{v as j}from"./fade-CViozI82.js";import{F as H,R as O,M as Z}from"./TextMaxLine-D6XZvUuW.js";import"./iconBase-D_ql85QS.js";import"./formatNumber-Df8NwpjV.js";import"./transition-anLY3gj9.js";import"./formatTime-mlJJpQBT.js";import"./UploadSingleFile-B0jkdwVt.js";const J=(d={})=>{const{enqueueSnackbar:c}=A();return D({mutationFn:$,onError:i=>{const m=V(i,"No se puede validar la tarjeta.");c(m,{variant:_(i),autoHideDuration:5e3})},...d})};function pe(){const d=n(r=>r.setToken),c=n(r=>r.setStepAssignRegister),i=n(r=>r.setCard),m=n(r=>r.resetState),v=w("up","md"),{mutate:C,isLoading:b,reset:S,isError:l}=J(),N=B().shape({cardNumber:G().transform((r,t)=>t.replace(/\s/g,"")).min(8,"Debe contener los últimos 8 dígitos").required("El número de la tarjeta es requerido")}),u=z({initialValues:{cardNumber:""},validationSchema:N,onSubmit:(r,{setSubmitting:t})=>{var g;C({cardNumber:(g=r==null?void 0:r.cardNumber)==null?void 0:g.replace(/\s+/g,"")},{onSuccess:I=>{const{token:x,...F}=I;x&&(d(x),i(F),c(U.USER_REGISTER)),t(!1)},onError:()=>{t(!1)}})}}),{isSubmitting:E,values:p,setFieldValue:h,handleSubmit:k,errors:K}=u,s=E||b;T.useEffect(()=>{m()},[]);const y=r=>{l&&S(),h("cardNumber",r)},R=(r,t)=>X(r);return e.jsxs(a,{spacing:5,children:[e.jsxs(a,{direction:"column",width:1,spacing:1,children:[e.jsxs(a,{children:[e.jsx(f.div,{variants:j().inRight,children:e.jsx(o,{align:"center",variant:"h3",sx:{color:"primary.main",fontWeight:"fontWeightMedium"},children:"Aquí Comienza"})}),e.jsx(f.div,{variants:j().inRight,children:e.jsx(o,{align:"center",variant:"h3",sx:{color:"primary.light",fontWeight:"fontWeightMedium"},children:"tu agilidad en pagos"})})]}),e.jsx(o,{paragraph:!0,align:"center",variant:"subtitle1",color:"text.primary",whiteSpace:"pre-line",children:"Ingrese los 8 últimos dígitos de la tarjeta."})]}),e.jsx(H,{formik:u,children:v?e.jsx(L,{name:"cardNumber",length:8,value:p.cardNumber,onChange:y,validateChar:R,sx:{gap:1.5},TextFieldsProps:{placeholder:"-",error:l,disabled:s,fullWidth:!0}}):e.jsx(O,{name:"cardNumber",required:!0,placeholder:"9717 8968",fullWidth:!0,size:"small",InputProps:{startAdornment:e.jsx(W,{position:"start",children:e.jsx(P,{})}),inputComponent:Z,inputProps:{mask:"0000 0000",value:p.cardNumber,onAccept:r=>{h("cardNumber",r)}}},disabled:s})}),e.jsxs(a,{spacing:3,px:5,children:[e.jsxs(a,{children:[e.jsx(o,{paragraph:!0,align:"center",variant:"body2",color:"text.primary",children:"Iniciemos el proceso de asociación de tu cuenta."}),e.jsx(q,{})]}),e.jsx(a,{alignItems:"center",justifyContent:"center",children:e.jsx(M,{loading:s,variant:"contained",size:"large",color:"primary",fullWidth:!0,type:"submit",onClick:k,disabled:s,sx:{width:150},children:"Validar"})})]})]})}export{pe as default};
//# sourceMappingURL=FormDemoCardValidation-DIDaRlxN.js.map