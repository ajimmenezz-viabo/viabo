import{a as M,Q as E,g as k,b as V,k as X,r as A,aN as w,j as t,D as H,S as i,a2 as J,T as c,L as W,O as Z}from"./index-e73cf17b.js";import{u as I}from"./build-5fb868c5.js";import{a as ee}from"./build-00d41d87.js";import{c as te,a as R}from"./build-c0dc204e.js";import{a as re}from"./build-9964c057.js";import{r as se,b as ae,c as ie}from"./build-01bfc1cc.js";import{i as b}from"./build-c9433a85.js";import{A as oe}from"./build-5ac932c0.js";import{F as ne}from"./build-c9934e06.js";import{R as z}from"./build-125e0389.js";import{M as le}from"./build-dc8af0ab.js";import{L as ce}from"./build-0c8c73a4.js";import{W as me}from"./build-a924306a.js";import"./build-8193b4a1.js";import"./build-605ae648.js";import"./build-34e19a43.js";import"./build-de5e9f77.js";import"./build-a2715f08.js";import"./build-dce3df38.js";import"./build-65018187.js";import"./build-ac55763c.js";import"./build-3c0d21c0.js";import"./build-5eeac4ed.js";import"./build-ab61dd8b.js";import"./build-3a978d3e.js";import"./build-dba47033.js";import"./build-89d6f61d.js";import"./build-5033c3a7.js";import"./build-08243790.js";import"./build-7101bc47.js";import"./build-7c7c485c.js";import"./build-77a5b78b.js";import"./build-a52a36b3.js";import"./build-c6c15f5a.js";import"./build-c7ce8ef2.js";import"./build-23ddbecb.js";import"./build-ae292b2c.js";import"./build-178dbaa7.js";import"./build-bee6630b.js";const pe=(r,e)=>{var m;const d={ownerId:(m=e==null?void 0:e.assignUser)==null?void 0:m.id,name:r==null?void 0:r.name,lastName:r==null?void 0:r.lastName,phone:r==null?void 0:r.phone};return re(d)},de=(r={})=>{const e=M(se,r);return{...e,mutate:async(m,g={})=>{const{onSuccess:u,onError:o,...h}=g;try{await E.promise(e.mutateAsync(m,h),{pending:"Restableciendo Contraseña ...",success:{render({data:n}){return b(u)&&u(n),"Se restableció la contraseña con éxito"}}})}catch(n){const a=k(n,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");b(o)&&o(a),E.error(a,{type:V(n)})}}}},ue=(r={})=>{const e=X(),d=M(ae,r);return{...d,mutate:async(g,u={})=>{const{onSuccess:o,onError:h,...n}=u;try{await E.promise(d.mutateAsync(g,n),{pending:"Actualizando información ...",success:{render({data:a}){return e.invalidateQueries([oe.LIST]),b(o)&&o(a),"Se actualizo con éxito"}}})}catch(a){const l=k(a,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");b(h)&&h(l),E.error(l,{type:V(a)})}}}},p={UPDATE_USER_INFO:"1",RECOVERY_PASSWORD:"2"},he=({handleSuccess:r})=>{var U,P,_,T,F,f,D,L;const e=ie(s=>s.cardInfo),{mutate:d,isLoading:m}=ue(),{mutate:g,isLoading:u}=de(),[o,h]=A.useState(((U=e==null?void 0:e.assignUser)==null?void 0:U.name)||""),[n,a]=A.useState(!1),[l,j]=A.useState(null),Y=te({name:R().required("El nombre es requerido"),lastName:R(),phone:R().test("longitud","El teléfono es muy corto",s=>!(s&&s.replace(/[\s+]/g,"").length<10))}),v=I({initialValues:{name:((P=e==null?void 0:e.assignUser)==null?void 0:P.name)||"",phone:((_=e==null?void 0:e.assignUser)==null?void 0:_.phone)||"",lastName:((T=e==null?void 0:e.assignUser)==null?void 0:T.lastName)||""},enableReinitialize:!0,validationSchema:Y,onSubmit:(s,{setSubmitting:S})=>{if(l===p.UPDATE_USER_INFO){const K=pe(s,e);d(K,{onSuccess:()=>{r(),j(null)}})}S(!1)}}),{values:y,setFieldValue:q,touched:C,errors:O,isSubmitting:B,handleSubmit:Q}=v,x=m||B||u;A.useEffect(()=>{var s;y.name?h(y.name):h((s=e==null?void 0:e.assignUser)==null?void 0:s.name)},[y.name]);const N=A.useMemo(()=>w(o),[o]),$=()=>{g(e==null?void 0:e.assignUser,{onSuccess:()=>{r(),j(null)}})},G=()=>{a(!1),l===p.UPDATE_USER_INFO&&Q(),l===p.RECOVERY_PASSWORD&&$()};return t.jsxs(t.Fragment,{children:[t.jsx(H,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:t.jsx(ne,{formik:v,children:t.jsxs(i,{spacing:2,sx:{p:3},children:[t.jsx(i,{spacing:.5,children:t.jsxs(i,{justifyContent:"center",alignItems:"center",spacing:1,children:[t.jsx(J,{variant:"rounded",src:"",color:"warning",alt:o,sx:{backgroundColor:s=>{var S;return(S=s.palette[N.color])==null?void 0:S.main},width:80,height:80,color:"white"},children:N.name}),t.jsx(c,{component:ce,href:`mailto:${(F=e==null?void 0:e.assignUser)==null?void 0:F.email}`,variant:"body2",children:((f=e==null?void 0:e.assignUser)==null?void 0:f.email)??"-"}),t.jsx(i,{spacing:.5,alignItems:"center",children:(D=e==null?void 0:e.assignUser)!=null&&D.lastLogged?t.jsxs(t.Fragment,{children:[t.jsx(c,{paragraph:!0,variant:"body2",fontStyle:"italic",sx:{color:"text.disabled"},children:"Último Inicio de Sesión:"}),t.jsx(c,{paragraph:!0,variant:"body2",sx:{color:"text.disabled"},children:((L=e==null?void 0:e.assignUser)==null?void 0:L.lastLogged)??"🚀"})]}):t.jsx(c,{paragraph:!0,variant:"body2",fontStyle:"italic",sx:{color:"text.disabled"},children:"No ha iniciado sesión 🚀"})}),t.jsx(i,{children:t.jsx(W,{variant:"contained",color:"secondary",loading:u,disabled:x,sx:{color:"text.primary",fontWeight:"bolder"},onClick:()=>{j(p.RECOVERY_PASSWORD),a(!0)},children:"Restablecer Contraseña"})})]})}),t.jsxs(i,{spacing:.5,children:[t.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre (s)"}),t.jsx(z,{name:"name",required:!0,placeholder:"Usuario",disabled:x})]}),t.jsxs(i,{spacing:.5,children:[t.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Apellidos"}),t.jsx(z,{name:"lastName",required:!0,placeholder:"Usuario",disabled:x})]}),t.jsxs(i,{spacing:.5,children:[t.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Teléfono"}),t.jsx(ee,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:y.phone||"+52",disabled:x,onChange:(s,S)=>{q("phone",s)},error:C.phone&&!!O.phone,helperText:C.phone&&O.phone})]}),t.jsx(i,{pt:2,children:t.jsx(W,{size:"large",variant:"contained",color:"primary",fullWidth:!0,loading:m,disabled:x,onClick:()=>{j(p.UPDATE_USER_INFO),a(!0)},children:"Actualizar"})})]})})}),n&&t.jsx(le,{title:l===p.UPDATE_USER_INFO?"Actualizar Usuario":"Restablecer Contraseña",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:()=>{a(!1)},open:n,isSubmitting:!1,description:t.jsxs(i,{spacing:2,children:[t.jsx(c,{children:l===p.UPDATE_USER_INFO?"¿Está seguro de actualizar la información de este usuario?":"¿Está seguro de restablecer la contraseña de este usuario?"}),l===p.RECOVERY_PASSWORD&&t.jsxs(i,{direction:"row",alignItems:"center",spacing:1,children:[t.jsx(me,{}),t.jsx(i,{children:t.jsx(c,{variant:"caption",children:"Se enviara una notificación via correo electrónico con los cambios realizados"})})]})]}),onSuccess:G,fullWidth:!0,maxWidth:"xs"})]})};he.propTypes={handleSuccess:Z.func};export{he as default};
