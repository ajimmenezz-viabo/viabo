import{q as U,j as e,u as y,r as E,m as C,g as R,n as A,S as s,T as t,X as T,L as k}from"./build-27e237f5.js";import{R as v}from"./build-afd9320c.js";import{u as D}from"./build-f2a1bf56.js";import{F as q}from"./build-eacb7745.js";import{M as N}from"./build-18d54861.js";import{c as F,a as p}from"./build-9892c001.js";import{u as c,C as L}from"./build-ab3853aa.js";import{c as V}from"./build-1bba3cfd.js";import{I as M}from"./build-21702c1b.js";import{E as P}from"./build-34be79e8.js";import"./build-7079f4d4.js";import"./build-e34aa31a.js";import"./build-bee6630b.js";import"./build-91fdb816.js";import"./build-65e7778d.js";import"./build-e06ad1b7.js";const w=U(e.jsx("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}),"VerifiedUser"),O=(u={})=>{const{enqueueSnackbar:i}=y(),[m,n]=E.useState(null);return{...C(V,{onSuccess:()=>{n(null),i("Se creo el usuario con éxito",{variant:"success",autoHideDuration:5e3})},onError:a=>{const l=R(a,"No se puede crear el usuario. Intente nuevamente o reporte a sistemas");n(l),i(l,{variant:A(a),autoHideDuration:5e3})},...u}),error:m||null}};function se(){const u=c(r=>r.setStepAssignRegister),i=c(r=>r.setUser),m=c(r=>r.setToken),n=c(r=>r.resetState),{mutate:h,isLoading:a}=O(),l=F({name:p().required("El nombre es requerido"),email:p().email("Ingresa un correo valido").required("El correo es requerido"),phone:p().test("longitud","El telefono es muy corto",r=>!(r&&r.replace(/[\s+]/g,"").length<10))}),x=D({initialValues:{name:"",phone:"",email:""},validationSchema:l,onSubmit:r=>{h(r,{onSuccess:o=>{o!=null&&o.token&&m(o==null?void 0:o.token),j(!1),i(r),u(L.USER_VALIDATION)},onError:()=>{j(!1)}})}}),{errors:g,touched:f,isSubmitting:S,setFieldValue:b,values:I,setSubmitting:j}=x,d=S||a;return E.useEffect(()=>{n()},[]),e.jsxs(s,{sx:{display:"flex",overflow:"hidden"},children:[e.jsxs(s,{direction:"column",width:1,spacing:1,children:[e.jsx(t,{variant:"h4",color:"textPrimary",align:"center",children:"Registrar Tarjeta"}),e.jsx(t,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese la información del usuario para iniciar con el proceso de asociación de su tarjeta."})]}),e.jsx(T,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(q,{formik:x,children:e.jsxs(s,{spacing:2,sx:{p:3},children:[e.jsxs(s,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Completo*"}),e.jsx(v,{name:"name",required:!0,placeholder:"Usuario",disabled:d})]}),e.jsxs(s,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico*"}),e.jsx(v,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:d,InputProps:{startAdornment:e.jsx(M,{position:"start",children:e.jsx(P,{})})}})]}),e.jsxs(s,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(N,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:I.phone||"+52",disabled:d,onChange:(r,o)=>{b("phone",r)},error:f.phone&&!!g.phone,helperText:f.phone&&g.phone})]}),e.jsx(s,{sx:{pt:3},children:e.jsx(k,{loading:S,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(w,{}),children:"Registrar"})})]})})})]})}export{se as default};
