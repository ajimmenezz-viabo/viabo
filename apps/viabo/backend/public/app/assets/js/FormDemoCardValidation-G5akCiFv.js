import{bx as T,f as A,r as D,i as e,S as a,q as f,T as o,aT as W,aV as q,y as P,Q as V}from"./vendor-5lkxkETF.js";import{g as M,b as _,k as w}from"./index-DkbAsBWZ.js";import{u as z}from"./formik.esm-CTTSENmf.js";import{o as L}from"./mui-one-time-password-input.es-DECpCfUz.js";import{c as B,a as G}from"./index.esm-gIIytEq8.js";import{u as n,C as U}from"./RegisterCards-C5_I1Y1r.js";import{m as $}from"./matchTypes-mENztEWg.js";import{v as H}from"./RegisterCardsRepository-DirGGdP-.js";import{v as j}from"./fade-CViozI82.js";import{F as O,R as Q,M as J}from"./TextMaxLine-B63DtfW-.js";import"./iconBase-jHcAKz16.js";import"./formatNumber-dGNhWwxT.js";import"./transition-anLY3gj9.js";import"./formatTime-jCgU2sMR.js";import"./UploadSingleFile-ByYCreVQ.js";const K=(d={})=>{const{enqueueSnackbar:c}=T();return A({mutationFn:H,onError:i=>{const m=M(i,"No se puede validar la tarjeta.");c(m,{variant:_(i),autoHideDuration:5e3})},...d})};function pe(){const d=n(r=>r.setToken),c=n(r=>r.setStepAssignRegister),i=n(r=>r.setCard),m=n(r=>r.resetState),b=w("up","md"),{mutate:v,isLoading:C,reset:S,isError:l}=K(),N=B().shape({cardNumber:G().transform((r,t)=>t.replace(/\s/g,"")).min(8,"Debe contener los últimos 8 dígitos").required("El número de la tarjeta es requerido")}),u=z({initialValues:{cardNumber:""},validationSchema:N,onSubmit:(r,{setSubmitting:t})=>{var g;v({cardNumber:(g=r==null?void 0:r.cardNumber)==null?void 0:g.replace(/\s+/g,"")},{onSuccess:I=>{const{token:x,...F}=I;x&&(d(x),i(F),c(U.USER_REGISTER)),t(!1)},onError:()=>{t(!1)}})}}),{isSubmitting:k,values:p,setFieldValue:h,handleSubmit:y,errors:X}=u,s=k||C;D.useEffect(()=>{m()},[]);const E=r=>{l&&S(),h("cardNumber",r)},R=(r,t)=>$(r);return e.jsxs(a,{spacing:5,children:[e.jsxs(a,{direction:"column",width:1,spacing:1,children:[e.jsxs(a,{children:[e.jsx(f.div,{variants:j().inRight,children:e.jsx(o,{align:"center",variant:"h3",sx:{color:"primary.main",fontWeight:"fontWeightMedium"},children:"Aquí Comienza"})}),e.jsx(f.div,{variants:j().inRight,children:e.jsx(o,{align:"center",variant:"h3",sx:{color:"primary.light",fontWeight:"fontWeightMedium"},children:"tu agilidad en pagos"})})]}),e.jsx(o,{paragraph:!0,align:"center",variant:"subtitle1",color:"text.primary",whiteSpace:"pre-line",children:"Ingrese los 8 últimos dígitos de la tarjeta."})]}),e.jsx(O,{formik:u,children:b?e.jsx(L,{name:"cardNumber",length:8,value:p.cardNumber,onChange:E,validateChar:R,sx:{gap:1.5},TextFieldsProps:{placeholder:"-",error:l,disabled:s,fullWidth:!0}}):e.jsx(Q,{name:"cardNumber",required:!0,placeholder:"9717 8968",fullWidth:!0,size:"small",InputProps:{startAdornment:e.jsx(W,{position:"start",children:e.jsx(q,{})}),inputComponent:J,inputProps:{mask:"0000 0000",value:p.cardNumber,onAccept:r=>{h("cardNumber",r)}}},disabled:s})}),e.jsxs(a,{spacing:3,px:5,children:[e.jsxs(a,{children:[e.jsx(o,{paragraph:!0,align:"center",variant:"body2",color:"text.primary",children:"Iniciemos el proceso de asociación de tu cuenta."}),e.jsx(P,{})]}),e.jsx(a,{alignItems:"center",justifyContent:"center",children:e.jsx(V,{loading:s,variant:"contained",size:"large",color:"primary",fullWidth:!0,type:"submit",onClick:y,disabled:s,sx:{width:150},children:"Validar"})})]})]})}export{pe as default};
//# sourceMappingURL=FormDemoCardValidation-G5akCiFv.js.map