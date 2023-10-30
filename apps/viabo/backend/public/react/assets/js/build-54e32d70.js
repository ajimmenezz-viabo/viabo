import{a as k,Z as v,g as A,b as E,D as C,j as e,a2 as L,S as n,T as i,L as T,r as I,a_ as w,i as N,I as q,C as F,as as $,at as D}from"./index-a047affd.js";import{d as O}from"./build-a524677b.js";import{u as R}from"./build-fd15e878.js";import{a as X}from"./build-d7129edd.js";import{c as _,a as x}from"./build-8293f91c.js";import{a as B}from"./build-7aab8da4.js";import{a as U,u as P,L as z}from"./build-0ad742bb.js";import{F as V,M as W}from"./build-3ed52cce.js";import{R as g}from"./build-e016c969.js";import{I as y}from"./build-8f64463c.js";import{P as G}from"./build-78636f83.js";import{E as Z}from"./build-9b160308.js";import{a as Q}from"./build-bff0b082.js";import{f as H}from"./build-7efe98ef.js";import"./build-232a1646.js";import{L as J}from"./build-c89a286d.js";import{C as K}from"./build-4152b7ca.js";import{C as Y}from"./build-65a6ee31.js";import"./build-bcb90f6b.js";import"./build-1d1632da.js";import"./build-6c0e5d69.js";import"./build-f4cfa8ef.js";import"./build-9a7ff251.js";import"./build-b400356a.js";import"./build-a0870c4d.js";import"./build-cb012aef.js";import"./build-553de6b1.js";import"./build-af959ca4.js";import"./build-790666fb.js";import"./build-f91b49ee.js";import"./build-1b5e218d.js";import"./build-95579a04.js";import"./build-3146bd8f.js";import"./build-63a958f6.js";import"./build-6bd54f0f.js";import"./build-bee6630b.js";import"./build-3ee17b63.js";import"./build-849b3856.js";import"./build-1fd9977c.js";import"./build-ab0df4ed.js";const ee=(t,o)=>{var a;const r={commerceId:t==null?void 0:t.commerceId,terminalId:t==null?void 0:t.terminalId,amount:parseFloat((o==null?void 0:o.amount.toString())===""?"0":(a=o==null?void 0:o.amount)==null?void 0:a.toString().replace(/,/g,"")).toString(),clientName:o==null?void 0:o.name,email:o==null?void 0:o.email,phone:o==null?void 0:o.phone,description:o==null?void 0:o.concept};return B(r)},oe=(t={})=>{const o=k(U,t);return{...o,mutate:async(a,d)=>{const{onSuccess:p,onError:m,mutationOptions:u}=d;try{await v.promise(o.mutateAsync(a,u),{pending:"generando Liga de Pago ...",success:{render({data:c}){return p(c),"Se creó y envió la liga de pago con éxito"}}})}catch(c){const l=A(c,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");m(l),v.error(l,{type:E(c)})}}}},re=1,ne=1e5,M=({onSuccess:t})=>{const{mutate:o,isLoading:r}=oe(),a=P(s=>s.terminal),d=_({amount:x().required("El monto es requerido"),name:x().required("El nombre es requerido"),email:x().email("Ingresa un correo valido").required("El correo es requerido"),phone:x().test("longitud","El telefono es muy corto",s=>!(s&&s.replace(/[\s+]/g,"").length<10)).required("El telefono es requerido")}),p=R({initialValues:{amount:"",name:"",email:"",phone:"",concept:""},validationSchema:d,onSubmit:(s,{setSubmitting:f})=>{const S=ee(a,s);o(S,{onSuccess:j=>{f(!1),t({id:j==null?void 0:j.code,amount:s.amount})},onError:()=>{f(!1)}})}}),{errors:m,touched:u,isSubmitting:c,setFieldValue:l,values:b}=p,h=c||r;return e.jsx(L,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(V,{formik:p,children:e.jsxs(n,{spacing:3,sx:{p:3},children:[e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Monto * (Máximo $100,000 por liga de pago)"}),e.jsx(g,{fullWidth:!0,name:"amount",required:!0,placeholder:"0.00",disabled:h,autoComplete:"off",InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:e.jsx(y,{position:"end",children:"MXN"}),inputComponent:W,inputProps:{mask:Number,radix:".",thousandsSeparator:",",padFractionalZeros:!0,min:re,max:ne,scale:2,value:b.amount,onAccept:s=>{l("amount",s)}}}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Completo *"}),e.jsx(g,{name:"name",required:!0,placeholder:"Usuario",disabled:h,InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(G,{})})}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico *"}),e.jsx(g,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:h,InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(Z,{})})}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono *"}),e.jsx(X,{name:"phone",fullWidth:!0,defaultCountry:"MX",langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],forceCallingCode:!0,value:b.phone,disabled:h,onChange:(s,f)=>{l("phone",s)},error:u.phone&&!!m.phone,helperText:u.phone&&m.phone})]}),e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Mensaje"}),e.jsx(g,{name:"concept",multiline:!0,disabled:h,rows:2,placeholder:"Pago por .."})]}),e.jsx(n,{children:e.jsx(T,{loading:c,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(z,{}),children:"Generar"})})]})})})};M.propTypes={onSuccess:C.func};const te=({open:t,setOpen:o})=>{const[r,a]=I.useState(null),[d,p]=I.useState(!1),m=P(l=>l.terminal),u=`${window.location.host}/cobro/${r==null?void 0:r.id}`,c=()=>{o(!1),a(null)};return e.jsx(Q,{open:t,handleClose:c,titleElement:e.jsxs(n,{children:[e.jsx(i,{variant:"h6",children:"Liga de Pago"}),e.jsx(i,{variant:"subtitle2",children:m==null?void 0:m.name})]}),children:r?e.jsxs(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(n,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(w,{sx:{width:40,height:40},color:"success"}),e.jsx(i,{textAlign:"center",variant:"subtitle2",children:"Comparte la siguiente liga de pago para realizar el cobro por:"}),e.jsxs(n,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxs(i,{variant:"h3",children:[" ",H(r.amount)]}),e.jsx(i,{variant:"caption",children:"MXN"})]})]}),e.jsx(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:e.jsxs(n,{justifyContent:"center",alignItems:"center",direction:"row",spacing:1,children:[e.jsx(O,{}),e.jsx(J,{component:N,underline:"always",to:`/cobro/${r==null?void 0:r.id}`,target:"_blank",color:"info.main",children:u}),e.jsx(q,{variant:"outlined",size:"small",color:d?"success":"inherit",onClick:()=>{p(!0),F(u),setTimeout(()=>{p(!1)},1e3)},children:d?e.jsx(K,{sx:{color:"success"}}):e.jsx(Y,{sx:{color:"text.disabled"}})})]})}),e.jsx(i,{variant:"caption",color:"text.disabled",children:$(new Date,"dd MMM yyyy hh:mm a",{locale:D})})]}):e.jsx(M,{onSuccess:l=>{a(l)}})})};te.propTypes={open:C.any,setOpen:C.func};export{te as default};
