import{n as M,Q as v,g as A,o as E,P as b,j as e,ah as L,S as n,T as i,L as T,r as I,aK as w,K as N,N as q,I as F,az as $,F as O,aw as R}from"./index-23ec28e1.js";import{d as D,C as X}from"./build-f4b9149c.js";import{u as z}from"./build-5f2543fb.js";import{a as B}from"./build-7a57c9bd.js";import{c as U,a as x}from"./build-23530379.js";import{g as _}from"./build-4e68fd35.js";import{c as V,u as P,L as W}from"./build-75a43839.js";import{F as G,M as K}from"./build-c616c612.js";import{R as g}from"./build-ba4202b0.js";import{I as y}from"./build-79fb9ca8.js";import{P as Q}from"./build-1db7ad67.js";import{E as Z}from"./build-b6087623.js";import{R as H}from"./build-bcba88f3.js";import{f as J}from"./build-8ab16f05.js";import"./build-a67802f5.js";import{a as Y}from"./build-bc2c5e34.js";import"./build-488f3cd2.js";import"./build-a7defbcd.js";import"./build-8fd84771.js";import"./build-cd43da46.js";import"./build-f728c994.js";import"./build-ece7c255.js";import"./build-60193303.js";import"./build-88fbe48e.js";import"./build-73909af0.js";import"./build-25569222.js";import"./build-addf1bbe.js";import"./build-bee6630b.js";import"./build-4572f792.js";const ee=(t,r)=>{var a;const o={commerceId:t==null?void 0:t.commerceId,terminalId:t==null?void 0:t.terminalId,amount:parseFloat((r==null?void 0:r.amount.toString())===""?"0":(a=r==null?void 0:r.amount)==null?void 0:a.toString().replace(/,/g,"")).toString(),clientName:r==null?void 0:r.name,email:r==null?void 0:r.email,phone:r==null?void 0:r.phone,description:r==null?void 0:r.concept};return _(o)},re=(t={})=>{const r=M(V,t);return{...r,mutate:async(a,d)=>{const{onSuccess:p,onError:m,mutationOptions:u}=d;try{await v.promise(r.mutateAsync(a,u),{pending:"generando Liga de Pago ...",success:{render({data:c}){return p(c),"Se creó y envió la liga de pago con éxito"}}})}catch(c){const l=A(c,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");m(l),v.error(l,{type:E(c)})}}}},oe=1,ne=2e4,S=({onSuccess:t})=>{const{mutate:r,isLoading:o}=re(),a=P(s=>s.terminal),d=U({amount:x().required("El monto es requerido"),name:x().required("El nombre es requerido"),email:x().email("Ingresa un correo valido").required("El correo es requerido"),phone:x().test("longitud","El telefono es muy corto",s=>!(s&&s.replace(/[\s+]/g,"").length<10)).required("El telefono es requerido")}),p=z({initialValues:{amount:"",name:"",email:"",phone:"",concept:""},validationSchema:d,onSubmit:(s,{setSubmitting:j})=>{const k=ee(a,s);r(k,{onSuccess:f=>{j(!1),t({id:f==null?void 0:f.code,amount:s.amount})},onError:()=>{j(!1)}})}}),{errors:m,touched:u,isSubmitting:c,setFieldValue:l,values:C}=p,h=c||o;return e.jsx(L,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(G,{formik:p,children:e.jsxs(n,{spacing:3,sx:{p:3},children:[e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Monto *"}),e.jsx(g,{fullWidth:!0,name:"amount",required:!0,placeholder:"0.00",disabled:h,autoComplete:"off",InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:e.jsx(y,{position:"end",children:"MXN"}),inputComponent:K,inputProps:{mask:Number,radix:".",thousandsSeparator:",",padFractionalZeros:!0,min:oe,max:ne,scale:2,value:C.amount,onAccept:s=>{l("amount",s)}}}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Completo *"}),e.jsx(g,{name:"name",required:!0,placeholder:"Usuario",disabled:h,InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(Q,{})})}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico *"}),e.jsx(g,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:h,InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(Z,{})})}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono *"}),e.jsx(B,{name:"phone",fullWidth:!0,defaultCountry:"MX",langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],forceCallingCode:!0,value:C.phone,disabled:h,onChange:(s,j)=>{l("phone",s)},error:u.phone&&!!m.phone,helperText:u.phone&&m.phone})]}),e.jsxs(n,{spacing:1,children:[e.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Mensaje"}),e.jsx(g,{name:"concept",multiline:!0,disabled:h,rows:2,placeholder:"Pago por .."})]}),e.jsx(n,{children:e.jsx(T,{loading:c,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(W,{}),children:"Generar"})})]})})})};S.propTypes={onSuccess:b.func};const te=({open:t,setOpen:r})=>{const[o,a]=I.useState(null),[d,p]=I.useState(!1),m=P(l=>l.terminal),u=`${window.location.host}/cobro/${o==null?void 0:o.id}`,c=()=>{r(!1),a(null)};return e.jsx(H,{open:t,handleClose:c,titleElement:e.jsxs(n,{children:[e.jsx(i,{variant:"h6",children:"Liga de Pago"}),e.jsx(i,{variant:"subtitle2",children:m==null?void 0:m.name})]}),children:o?e.jsxs(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(n,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(w,{sx:{width:40,height:40},color:"success"}),e.jsx(i,{textAlign:"center",variant:"subtitle2",children:"Comparte la siguiente liga de pago para realizar el cobro por:"}),e.jsxs(n,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxs(i,{variant:"h3",children:[" ",J(o.amount)]}),e.jsx(i,{variant:"caption",children:"MXN"})]})]}),e.jsx(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:e.jsxs(n,{justifyContent:"center",alignItems:"center",direction:"row",spacing:1,children:[e.jsx(D,{}),e.jsx(N,{component:q,underline:"always",to:`/cobro/${o==null?void 0:o.id}`,target:"_blank",color:"info.main",children:u}),e.jsx(F,{variant:"outlined",size:"small",color:d?"success":"inherit",onClick:()=>{p(!0),$(u),setTimeout(()=>{p(!1)},1e3)},children:d?e.jsx(Y,{sx:{color:"success"}}):e.jsx(X,{sx:{color:"text.disabled"}})})]})}),e.jsx(i,{variant:"caption",color:"text.disabled",children:O(new Date,"dd MMM yyyy hh:mm a",{locale:R})})]}):e.jsx(S,{onSuccess:l=>{a(l)}})})};te.propTypes={open:b.any,setOpen:b.func};export{te as default};