import{a as k,Y as E,g as M,b as V,k as K,r as A,aH as X,j as t,a2 as w,S as i,U as J,T as c,L as W,C as Z}from"./index-66cb75df.js";import{u as I}from"./build-bd32fad9.js";import{a as ee}from"./build-72adeabc.js";import{c as te,a as R}from"./build-66bff701.js";import{a as se}from"./build-6d8fb990.js";import{r as re,b as ae,c as ie}from"./build-9f4568ae.js";import{i as y}from"./build-1340cc8b.js";import{A as oe}from"./build-73979575.js";import{F as ne}from"./build-8a357111.js";import{R as z}from"./build-f0053943.js";import{a as le}from"./build-2883e9ba.js";import{L as ce}from"./build-1f27af78.js";import{W as me}from"./build-b8146948.js";import"./build-b463c8f6.js";import"./build-9d3fe41c.js";import"./build-27a4b8f9.js";import"./build-f58640b5.js";import"./build-7b5d6586.js";import"./build-48fe95c1.js";import"./build-cb9d33cb.js";import"./build-6421e956.js";import"./build-bee6630b.js";import"./build-ac9daf3f.js";import"./build-3eb05f86.js";import"./build-83d17a75.js";import"./build-899176f2.js";import"./build-708407b9.js";import"./build-1ee72508.js";import"./build-8fb582f0.js";import"./build-7226c475.js";import"./build-722d29d2.js";import"./build-c0c056ef.js";import"./build-2e8706bc.js";import"./build-33d27e57.js";const pe=(s,e)=>{var m;const d={ownerId:(m=e==null?void 0:e.assignUser)==null?void 0:m.id,name:s==null?void 0:s.name,lastName:s==null?void 0:s.lastName,phone:s==null?void 0:s.phone};return se(d)},de=(s={})=>{const e=k(re,s);return{...e,mutate:async(m,g={})=>{const{onSuccess:u,onError:o,...h}=g;try{await E.promise(e.mutateAsync(m,h),{pending:"Restableciendo Contraseña ...",success:{render({data:n}){return y(u)&&u(n),"Se restableció la contraseña con éxito"}}})}catch(n){const a=M(n,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");y(o)&&o(a),E.error(a,{type:V(n)})}}}},ue=(s={})=>{const e=K(),d=k(ae,s);return{...d,mutate:async(g,u={})=>{const{onSuccess:o,onError:h,...n}=u;try{await E.promise(d.mutateAsync(g,n),{pending:"Actualizando información ...",success:{render({data:a}){return e.invalidateQueries([oe.LIST]),y(o)&&o(a),"Se actualizo con éxito"}}})}catch(a){const l=M(a,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");y(h)&&h(l),E.error(l,{type:V(a)})}}}},p={UPDATE_USER_INFO:"1",RECOVERY_PASSWORD:"2"},he=({handleSuccess:s})=>{var N,P,_,T,F,f,D,L;const e=ie(r=>r.cardInfo),{mutate:d,isLoading:m}=ue(),{mutate:g,isLoading:u}=de(),[o,h]=A.useState(((N=e==null?void 0:e.assignUser)==null?void 0:N.name)||""),[n,a]=A.useState(!1),[l,b]=A.useState(null),Y=te({name:R().required("El nombre es requerido"),lastName:R(),phone:R().test("longitud","El teléfono es muy corto",r=>!(r&&r.replace(/[\s+]/g,"").length<10))}),v=I({initialValues:{name:((P=e==null?void 0:e.assignUser)==null?void 0:P.name)||"",phone:((_=e==null?void 0:e.assignUser)==null?void 0:_.phone)||"",lastName:((T=e==null?void 0:e.assignUser)==null?void 0:T.lastName)||""},enableReinitialize:!0,validationSchema:Y,onSubmit:(r,{setSubmitting:S})=>{if(l===p.UPDATE_USER_INFO){const H=pe(r,e);d(H,{onSuccess:()=>{s(),b(null)}})}S(!1)}}),{values:j,setFieldValue:q,touched:C,errors:U,isSubmitting:B,handleSubmit:Q}=v,x=m||B||u;A.useEffect(()=>{var r;j.name?h(j.name):h((r=e==null?void 0:e.assignUser)==null?void 0:r.name)},[j.name]);const O=A.useMemo(()=>X(o),[o]),$=()=>{g(e==null?void 0:e.assignUser,{onSuccess:()=>{s(),b(null)}})},G=()=>{a(!1),l===p.UPDATE_USER_INFO&&Q(),l===p.RECOVERY_PASSWORD&&$()};return t.jsxs(t.Fragment,{children:[t.jsx(w,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:t.jsx(ne,{formik:v,children:t.jsxs(i,{spacing:2,sx:{p:3},children:[t.jsx(i,{spacing:.5,children:t.jsxs(i,{justifyContent:"center",alignItems:"center",spacing:1,children:[t.jsx(J,{variant:"rounded",src:"",color:"warning",alt:o,sx:{backgroundColor:r=>{var S;return(S=r.palette[O.color])==null?void 0:S.main},width:80,height:80,color:"white"},children:O.name}),t.jsx(c,{component:ce,href:`mailto:${(F=e==null?void 0:e.assignUser)==null?void 0:F.email}`,variant:"body2",children:((f=e==null?void 0:e.assignUser)==null?void 0:f.email)??"-"}),t.jsx(i,{spacing:.5,alignItems:"center",children:(D=e==null?void 0:e.assignUser)!=null&&D.lastLogged?t.jsxs(t.Fragment,{children:[t.jsx(c,{paragraph:!0,variant:"body2",fontStyle:"italic",sx:{color:"text.disabled"},children:"Último Inicio de Sesión:"}),t.jsx(c,{paragraph:!0,variant:"body2",sx:{color:"text.disabled"},children:((L=e==null?void 0:e.assignUser)==null?void 0:L.lastLogged)??"🚀"})]}):t.jsx(c,{paragraph:!0,variant:"body2",fontStyle:"italic",sx:{color:"text.disabled"},children:"No ha iniciado sesión 🚀"})}),t.jsx(i,{children:t.jsx(W,{variant:"contained",color:"secondary",loading:u,disabled:x,sx:{color:"black",fontWeight:"bolder"},onClick:()=>{b(p.RECOVERY_PASSWORD),a(!0)},children:"Restablecer Contraseña"})})]})}),t.jsxs(i,{spacing:.5,children:[t.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre (s)"}),t.jsx(z,{name:"name",required:!0,placeholder:"Usuario",disabled:x})]}),t.jsxs(i,{spacing:.5,children:[t.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Apellidos"}),t.jsx(z,{name:"lastName",required:!0,placeholder:"Usuario",disabled:x})]}),t.jsxs(i,{spacing:.5,children:[t.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Teléfono"}),t.jsx(ee,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:j.phone||"+52",disabled:x,onChange:(r,S)=>{q("phone",r)},error:C.phone&&!!U.phone,helperText:C.phone&&U.phone})]}),t.jsx(i,{pt:2,children:t.jsx(W,{size:"large",variant:"contained",color:"primary",fullWidth:!0,loading:m,disabled:x,onClick:()=>{b(p.UPDATE_USER_INFO),a(!0)},children:"Actualizar"})})]})})}),n&&t.jsx(le,{title:l===p.UPDATE_USER_INFO?"Actualizar Usuario":"Restablecer Contraseña",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:()=>{a(!1)},open:n,isSubmitting:!1,description:t.jsxs(i,{spacing:2,children:[t.jsx(c,{children:l===p.UPDATE_USER_INFO?"¿Está seguro de actualizar la información de este usuario?":"¿Está seguro de restablecer la contraseña de este usuario?"}),l===p.RECOVERY_PASSWORD&&t.jsxs(i,{direction:"row",alignItems:"center",spacing:1,children:[t.jsx(me,{}),t.jsx(i,{children:t.jsx(c,{variant:"caption",children:"Se enviara una notificación via correo electrónico con los cambios realizados"})})]})]}),onSuccess:G,fullWidth:!0,maxWidth:"xs"})]})};he.propTypes={handleSuccess:Z.func};export{he as default};