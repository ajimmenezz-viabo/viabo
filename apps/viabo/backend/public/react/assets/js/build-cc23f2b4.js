import{u as M,r as C,E as _,n as $,g as D,P as H,j as e,S as h,T as g,v as K,B as Q,I as P,O as T,L as U,d as z}from"./build-de786878.js";import{u as G}from"./build-32dc6f9b.js";import{a as X}from"./build-7fe00976.js";import{C as Y,c as Z,p as J}from"./build-8c6d3825.js";import{P as j}from"./build-61d5e77c.js";import{c as ee,a as m,e as re,f as oe}from"./build-aaf0c156.js";import{A as se}from"./build-eccdbe61.js";import{T as x}from"./build-8e48d587.js";import{I as b}from"./build-0d6223af.js";import{E as ae}from"./build-d0939168.js";import{V as A,a as N}from"./build-3f95c7d4.js";import{F as ne,C as te}from"./build-ea741c8a.js";import"./build-9563ddbe.js";import"./build-e603dc94.js";import"./build-dd25d9e2.js";const ie=t=>{const{name:i,lastName:c,phone:a,email:d,password:f,confirmPassword:u}=t;return{name:i,lastname:c,phone:a,email:d,password:f,confirmPassword:u}},le=(t={})=>{const{enqueueSnackbar:i}=M(),[c,a]=C.useState(null),d=_();return{...$(Z,{onSuccess:()=>{a(null),d.removeQueries([Y.TOKEN_COMMERCE]),i("Se creo el comercio",{variant:"success",autoHideDuration:5e3})},onError:u=>{a(D(u,"No se puede crear el comercio"))},...t}),error:c||null}},ce=t=>({schema:ee({name:m().required("El nombre es requerido"),lastName:m().required("Los apellidos son requeridos"),email:m().email("Ingresa un correo valido").required("El correo es requerido"),phone:m().required("El telefono es requerido").test("longitud","El telefono es muy corto",a=>!(a&&a.replace(/[\s+]/g,"").length<10)),password:m().required("La contraseña es requerida").matches("^(?=(?:.*\\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[_\\-.\\@])\\S{8,16}$","La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula , un número y un caracter especial [ - _ . @]"),confirmPassword:m().oneOf([re("password"),null],"Las contraseñas no coinciden").required("La confirmación de la contraseña es requerida"),terms:oe().oneOf([!0],"Debe aceptar los acuerdos y condiciones")}),initialValues:{name:"",lastName:"",phone:"",email:"",password:"",confirmPassword:"",terms:!1}});me.propTypes={store:H.shape(J)};function me({store:t}){const[i,c]=C.useState(!1),[a,d]=C.useState(!1),{schema:f,initialValues:u}=C.useMemo(()=>ce(),[t]),{setActualProcess:y,setLastProcess:I}=t,{mutate:v,isError:E,isLoading:R,error:O}=le(),q=G({initialValues:u,validationSchema:f,onSubmit:l=>{const w=ie(l),{email:W}=w;v(w,{onSuccess:()=>{y(j.VALIDATION_CODE),I({info:{email:W},name:j.REGISTER}),S(!1)},onError:()=>{S(!1)}})}}),{handleSubmit:L,values:s,errors:r,touched:o,handleChange:p,isSubmitting:B,setSubmitting:S,getFieldProps:k,setFieldValue:F}=q,n=R||B,V=()=>{y(j.CONTINUE_PROCESS)};return e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"column",width:1,spacing:1,children:[e.jsx(g,{variant:"h4",color:"textPrimary",align:"center",children:"Registrar Comercio"}),e.jsx(g,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese la información para iniciar con el proceso de registro."})]}),E&&e.jsxs(se,{listenElement:E,sx:{mt:3,textAlign:"initial"},severity:"warning",children:[e.jsx(K,{sx:{textAlign:"initial"},children:"Error al registrar el comercio"}),O]}),e.jsx(Q,{width:1,mt:4,component:"form",onSubmit:L,children:e.jsxs(h,{spacing:3,pb:5,direction:"column",children:[e.jsxs(h,{direction:{xs:"column",sm:"row"},spacing:3,children:[e.jsx(x,{fullWidth:!0,name:"name",label:"Nombre(s)",autoComplete:"on",autoFocus:!0,value:s.name,error:o.name&&!!r.name,helperText:o.name&&r.name,onChange:p,disabled:n}),e.jsx(x,{fullWidth:!0,name:"lastName",label:"Apellidos",value:s.lastName,error:o.lastName&&!!r.lastName,helperText:o.lastName&&r.lastName,onChange:p,disabled:n})]}),e.jsxs(h,{direction:{xs:"column",sm:"row"},spacing:3,children:[e.jsx(x,{fullWidth:!0,id:"email",name:"email",label:"Correo",placeholder:"usuario@dominio.com",value:s.email,onChange:p,error:o.email&&!!r.email,helperText:o.email&&r.email,disabled:n,InputProps:{startAdornment:e.jsx(b,{position:"start",children:e.jsx(ae,{})})}}),e.jsx(X,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:s.phone||"+52",disabled:n,onChange:(l,w)=>{F("phone",l)},error:o.phone&&!!r.phone,helperText:o.phone&&r.phone})]}),e.jsx(x,{fullWidth:!0,id:"password",name:"password",label:"Contraseña",placeholder:"********",type:i?"text":"password",autoComplete:"current-password",InputProps:{endAdornment:e.jsx(b,{position:"end",sx:{mr:1},children:e.jsx(P,{edge:"end",onClick:()=>c(l=>!l),children:i?e.jsx(A,{}):e.jsx(N,{})})})},value:s.password,onChange:p,error:o.password&&!!r.password,helperText:o.password&&r.password,disabled:n}),e.jsx(x,{fullWidth:!0,id:"confirmPassword",name:"confirmPassword",label:"Confirmar Contraseña",placeholder:"********",type:a?"text":"password",autoComplete:"current-password",InputProps:{endAdornment:e.jsx(b,{position:"end",sx:{mr:1},children:e.jsx(P,{edge:"end",onClick:()=>d(l=>!l),children:a?e.jsx(A,{}):e.jsx(N,{})})})},value:s.confirmPassword,onChange:p,error:o.confirmPassword&&!!r.confirmPassword,helperText:o.confirmPassword&&r.confirmPassword,disabled:n}),e.jsxs(h,{direction:"column",justifyContent:"center",alignItems:"center",spacing:{xs:1,md:0},children:[e.jsx(ne,{control:e.jsx(te,{...k("terms"),disabled:n,checked:s==null?void 0:s.terms,value:s==null?void 0:s.terms}),label:e.jsxs(g,{variant:"body2",align:"center",sx:{color:"text.secondary"},children:["He leído y acepto los  ",e.jsx(T,{underline:"always",color:"primary",href:".#",children:"Terminos"}),"  y  ",e.jsx(T,{underline:"always",color:"text.secondary",href:".#",children:"Acuerdos de privacidad"}),"."]})}),!!r.terms&&o.terms&&e.jsx(g,{variant:"caption",color:"error",children:r.terms})]}),e.jsx(U,{loading:n,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Registrar"}),e.jsx(z,{onClick:V,children:">> Continuar proceso"})]})})]})}export{me as default};
