import{t as U,r as T,f as v,i as e,S as o,T as p,aH as h,aY as q,dr as D,dZ as F,bb as L,aI as C,a5 as k,a0 as N,d$ as P}from"./vendor-FSZoD0Ty.js";import{u as _}from"./formik.esm--ft-gNTR.js";import{l as z}from"./mui-tel-input.es-jzcQnTky.js";import{c as w,a as g}from"./index.esm-ZMwb309P.js";import{u as m,C as B}from"./RegisterCards-dQbaM8UI.js";import{c as H}from"./RegisterCardsRepository-NN2bOznt.js";import{g as V,a as $,a4 as E,q as O}from"./index-s6HyWPbs.js";import{F as M,R as I}from"./TextMaxLine-PpgibfDP.js";import"./iconBase-EID8StbH.js";import"./formatNumber-IeezKRXK.js";import"./UploadSingleFile-RRpuU-ga.js";import"./fade-HpdRXKiE.js";import"./transition-Uc7vb3zK.js";const W=(u={})=>{const{enqueueSnackbar:i}=U(),[d,t]=T.useState(null);return{...v(H,{onSuccess:()=>{t(null),i("Se creo el usuario con éxito",{variant:"success",autoHideDuration:5e3})},onError:a=>{const l=V(a,"No se puede crear el usuario. Intente nuevamente o reporte a sistemas");t(l),i(l,{variant:$(a),autoHideDuration:5e3})},...u}),error:d||null}};function te(){const u=m(r=>r.setStepAssignRegister),i=m(r=>r.setUser),d=m(r=>r.setToken),t=m(r=>r.token),{mutate:x,isLoading:a}=W(),l=w({name:g().required("El nombre es requerido"),email:g().email("Ingresa un correo valido").required("El correo es requerido"),phone:g().test("longitud","El telefono es muy corto",r=>!(r&&r.replace(/[\s+]/g,"").length<10))}),f=_({initialValues:{name:"",phone:"",email:"",privacy:!1},validationSchema:l,onSubmit:r=>{O.defaults.headers.common.Authorization=`Bearer ${t}`,x(r,{onSuccess:n=>{n!=null&&n.token&&(d(n==null?void 0:n.token),i(r),u(B.USER_VALIDATION)),y(!1)},onError:()=>{y(!1)}})}}),{errors:j,touched:S,isSubmitting:b,setFieldValue:A,values:s,setSubmitting:y,getFieldProps:R}=f,c=b||a;return e.jsxs(o,{children:[e.jsxs(o,{direction:"column",width:1,spacing:0,children:[e.jsx(p,{variant:"h4",color:"textPrimary",align:"center",children:"Crear Cuenta"}),e.jsx(p,{paragraph:!0,align:"center",variant:"subtitle1",color:"text.primary",whiteSpace:"pre-line",children:"¡Es tiempo de transformar tu negocio!"})]}),e.jsx(M,{formik:f,children:e.jsxs(o,{spacing:2,sx:{p:3,px:5},children:[e.jsxs(o,{spacing:1,children:[e.jsx(h,{children:"Nombre Completo*"}),e.jsx(I,{name:"name",required:!0,placeholder:"Usuario",disabled:c,size:"small"})]}),e.jsxs(o,{spacing:1,children:[e.jsx(h,{children:"Correo Electrónico*"}),e.jsx(I,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:c,size:"small",InputProps:{startAdornment:e.jsx(q,{position:"start",children:e.jsx(D,{})})}})]}),e.jsxs(o,{spacing:1,children:[e.jsx(h,{children:"Teléfono"}),e.jsx(z,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:s.phone||"+52",disabled:c,onChange:(r,n)=>{A("phone",r)},size:"small",error:S.phone&&!!j.phone,helperText:S.phone&&j.phone})]}),e.jsx(o,{justifyContent:"center",alignItems:"center",children:e.jsx(F,{control:e.jsx(L,{size:"small",...R("privacy"),disabled:c,checked:s==null?void 0:s.apiRequired,value:s==null?void 0:s.apiRequired}),label:e.jsxs(p,{variant:"body2",align:"center",sx:{color:"text.secondary"},children:["He leído y acepto los  ",e.jsx(C,{component:k,underline:"always",color:"info.main",to:E.policies,target:"_blank",children:"Términos y condiciones"}),"  &  ",e.jsx(C,{component:k,underline:"always",color:"info.main",to:E.privacy,target:"_blank",children:"Acuerdos de privacidad"}),"."]})})}),e.jsx(o,{sx:{px:5},children:e.jsx(N,{size:"large",loading:b,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(P,{}),children:"Registrar"})})]})})]})}export{te as default};
//# sourceMappingURL=FormRegisterDemoUserCard-LI7yU1F7.js.map