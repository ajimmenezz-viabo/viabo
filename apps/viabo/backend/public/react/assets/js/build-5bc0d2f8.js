import{t as I,j as e,u as U,r as y,n as A,g as C,o as R,S as s,T as t,$ as k,L as T,a as D}from"./build-7f26f9ca.js";import{u as N}from"./build-1442fb25.js";import{a as q}from"./build-632f8838.js";import{c as F,a as p}from"./build-38142a14.js";import{u as c,C as L}from"./build-bdda7ab5.js";import{c as V}from"./build-7829488d.js";import{R as v}from"./build-e1125ef8.js";import{F as P}from"./build-bfec3b8f.js";import{I as w}from"./build-8ee9e1f7.js";import{E as B}from"./build-9ad2dcba.js";import"./build-b2ad78ab.js";import"./build-3c5effeb.js";import"./build-f7a5a130.js";import"./build-fb36d713.js";import"./build-bee6630b.js";const M=I(e.jsx("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}),"VerifiedUser"),O=(u={})=>{const{enqueueSnackbar:n}=U(),[m,i]=y.useState(null);return{...A(V,{onSuccess:()=>{i(null),n("Se creo el usuario con éxito",{variant:"success",autoHideDuration:5e3})},onError:a=>{const l=C(a,"No se puede crear el usuario. Intente nuevamente o reporte a sistemas");i(l),n(l,{variant:R(a),autoHideDuration:5e3})},...u}),error:m||null}};function se(){const u=c(r=>r.setStepAssignRegister),n=c(r=>r.setUser),m=c(r=>r.setToken),i=c(r=>r.token),{mutate:h,isLoading:a}=O(),l=F({name:p().required("El nombre es requerido"),email:p().email("Ingresa un correo valido").required("El correo es requerido"),phone:p().test("longitud","El telefono es muy corto",r=>!(r&&r.replace(/[\s+]/g,"").length<10))}),x=N({initialValues:{name:"",phone:"",email:""},validationSchema:l,onSubmit:r=>{D.defaults.headers.common.Authorization=`Bearer ${i}`,h(r,{onSuccess:o=>{o!=null&&o.token&&(m(o==null?void 0:o.token),n(r),u(L.USER_VALIDATION)),S(!1)},onError:()=>{S(!1)}})}}),{errors:g,touched:f,isSubmitting:j,setFieldValue:b,values:E,setSubmitting:S}=x,d=j||a;return e.jsxs(s,{sx:{display:"flex",overflow:"hidden"},children:[e.jsxs(s,{direction:"column",width:1,spacing:1,children:[e.jsx(t,{variant:"h4",color:"textPrimary",align:"center",children:"Registrar Tarjeta"}),e.jsx(t,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese la información del usuario para continuar con el proceso de asociación de su tarjeta."})]}),e.jsx(k,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(P,{formik:x,children:e.jsxs(s,{spacing:2,sx:{p:3},children:[e.jsxs(s,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Completo*"}),e.jsx(v,{name:"name",required:!0,placeholder:"Usuario",disabled:d})]}),e.jsxs(s,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico*"}),e.jsx(v,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:d,InputProps:{startAdornment:e.jsx(w,{position:"start",children:e.jsx(B,{})})}})]}),e.jsxs(s,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(q,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:E.phone||"+52",disabled:d,onChange:(r,o)=>{b("phone",r)},error:f.phone&&!!g.phone,helperText:f.phone&&g.phone})]}),e.jsx(s,{sx:{pt:3},children:e.jsx(T,{loading:j,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(M,{}),children:"Registrar"})})]})})})]})}export{se as default};
