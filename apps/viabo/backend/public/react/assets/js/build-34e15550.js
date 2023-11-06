import{ak as $,r as C,k as D,a as H,g as Q,O as U,j as e,S as h,T as g,h as K,B as z,I as P,i as T,cQ as A,L as G,p as X}from"./index-346c4534.js";import{u as Y}from"./build-31883e00.js";import{a as Z}from"./build-13481640.js";import{C as J,c as ee,p as re}from"./build-d5dd02c0.js";import{a as j}from"./build-bc833da9.js";import{c as oe,a as m,e as se,f as ae}from"./build-737c64c4.js";import{A as ne}from"./build-372dcfb0.js";import{T as x}from"./build-6435c1fd.js";import{I as b}from"./build-4fa429fc.js";import{E as te}from"./build-a952e659.js";import{V as N}from"./build-68a52787.js";import{V as I}from"./build-f60f1278.js";import{F as ie,C as le}from"./build-f8f5ccb1.js";import{L as k}from"./build-f149ac76.js";import"./build-6471b759.js";import"./build-9177a231.js";import"./build-e9361a90.js";const ce=t=>{const{name:i,lastName:c,phone:a,email:d,password:f,confirmPassword:u}=t;return{name:i,lastname:c,phone:a,email:d,password:f,confirmPassword:u}},me=(t={})=>{const{enqueueSnackbar:i}=$(),[c,a]=C.useState(null),d=D();return{...H(ee,{onSuccess:()=>{a(null),d.removeQueries([J.TOKEN_COMMERCE]),i("Se creo el comercio",{variant:"success",autoHideDuration:5e3})},onError:u=>{a(Q(u,"No se puede crear el comercio"))},...t}),error:c||null}},de=t=>({schema:oe({name:m().required("El nombre es requerido"),lastName:m().required("Los apellidos son requeridos"),email:m().email("Ingresa un correo valido").required("El correo es requerido"),phone:m().required("El telefono es requerido").test("longitud","El telefono es muy corto",a=>!(a&&a.replace(/[\s+]/g,"").length<10)),password:m().required("La contraseña es requerida").matches("^(?=(?:.*\\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[_\\-.\\@])\\S{8,16}$","La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula , un número y un caracter especial [ - _ . @]"),confirmPassword:m().oneOf([se("password"),null],"Las contraseñas no coinciden").required("La confirmación de la contraseña es requerida"),terms:ae().oneOf([!0],"Debe aceptar los acuerdos y condiciones")}),initialValues:{name:"",lastName:"",phone:"",email:"",password:"",confirmPassword:"",terms:!1}});ue.propTypes={store:U.shape(re)};function ue({store:t}){const[i,c]=C.useState(!1),[a,d]=C.useState(!1),{schema:f,initialValues:u}=C.useMemo(()=>de(),[t]),{setActualProcess:S,setLastProcess:L}=t,{mutate:v,isError:y,isLoading:R,error:O}=me(),q=Y({initialValues:u,validationSchema:f,onSubmit:l=>{const w=ce(l),{email:M}=w;v(w,{onSuccess:()=>{S(j.VALIDATION_CODE),L({info:{email:M},name:j.REGISTER}),E(!1)},onError:()=>{E(!1)}})}}),{handleSubmit:B,values:s,errors:r,touched:o,handleChange:p,isSubmitting:V,setSubmitting:E,getFieldProps:F,setFieldValue:_}=q,n=R||V,W=()=>{S(j.CONTINUE_PROCESS)};return e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"column",width:1,spacing:1,children:[e.jsx(g,{variant:"h4",color:"textPrimary",align:"center",children:"Registrar Comercio"}),e.jsx(g,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese la información para iniciar con el proceso de registro."})]}),y&&e.jsxs(ne,{listenElement:y,sx:{mt:3,textAlign:"initial"},severity:"warning",children:[e.jsx(K,{sx:{textAlign:"initial"},children:"Error al registrar el comercio"}),O]}),e.jsx(z,{width:1,mt:4,component:"form",onSubmit:B,children:e.jsxs(h,{spacing:3,pb:5,direction:"column",children:[e.jsxs(h,{direction:{xs:"column",sm:"row"},spacing:3,children:[e.jsx(x,{fullWidth:!0,name:"name",label:"Nombre(s)",autoComplete:"on",autoFocus:!0,value:s.name,error:o.name&&!!r.name,helperText:o.name&&r.name,onChange:p,disabled:n}),e.jsx(x,{fullWidth:!0,name:"lastName",label:"Apellidos",value:s.lastName,error:o.lastName&&!!r.lastName,helperText:o.lastName&&r.lastName,onChange:p,disabled:n})]}),e.jsxs(h,{direction:{xs:"column",sm:"row"},spacing:3,children:[e.jsx(x,{fullWidth:!0,id:"email",name:"email",label:"Correo",placeholder:"usuario@dominio.com",value:s.email,onChange:p,error:o.email&&!!r.email,helperText:o.email&&r.email,disabled:n,InputProps:{startAdornment:e.jsx(b,{position:"start",children:e.jsx(te,{})})}}),e.jsx(Z,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:s.phone||"+52",disabled:n,onChange:(l,w)=>{_("phone",l)},error:o.phone&&!!r.phone,helperText:o.phone&&r.phone})]}),e.jsx(x,{fullWidth:!0,id:"password",name:"password",label:"Contraseña",placeholder:"********",type:i?"text":"password",autoComplete:"current-password",InputProps:{endAdornment:e.jsx(b,{position:"end",sx:{mr:1},children:e.jsx(P,{edge:"end",onClick:()=>c(l=>!l),children:i?e.jsx(N,{}):e.jsx(I,{})})})},value:s.password,onChange:p,error:o.password&&!!r.password,helperText:o.password&&r.password,disabled:n}),e.jsx(x,{fullWidth:!0,id:"confirmPassword",name:"confirmPassword",label:"Confirmar Contraseña",placeholder:"********",type:a?"text":"password",autoComplete:"current-password",InputProps:{endAdornment:e.jsx(b,{position:"end",sx:{mr:1},children:e.jsx(P,{edge:"end",onClick:()=>d(l=>!l),children:a?e.jsx(N,{}):e.jsx(I,{})})})},value:s.confirmPassword,onChange:p,error:o.confirmPassword&&!!r.confirmPassword,helperText:o.confirmPassword&&r.confirmPassword,disabled:n}),e.jsxs(h,{direction:"column",justifyContent:"center",alignItems:"center",spacing:{xs:1,md:0},children:[e.jsx(ie,{control:e.jsx(le,{...F("terms"),disabled:n,checked:s==null?void 0:s.terms,value:s==null?void 0:s.terms}),label:e.jsxs(g,{variant:"body2",align:"center",sx:{color:"text.secondary"},children:["He leído y acepto los  ",e.jsx(k,{component:T,underline:"always",color:"info.main",to:A.policies,target:"_blank",children:"Términos y condiciones"}),"  &  ",e.jsx(k,{component:T,underline:"always",color:"info.main",to:A.privacy,target:"_blank",children:"Acuerdos de privacidad"}),"."]})}),!!r.terms&&o.terms&&e.jsx(g,{variant:"caption",color:"error",children:r.terms})]}),e.jsx(G,{loading:n,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Registrar"}),e.jsx(X,{onClick:W,children:">> Continuar proceso"})]})})]})}export{ue as default};
