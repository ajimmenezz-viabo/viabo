import{a as k,Q as v,g as A,b as E,O as b,j as e,D as L,S as n,T as s,L as T,r as I,b4 as w,b8 as N,i as q,V as F,W as $,G as O,J as D}from"./index-2z-ZW7ZM.js";import{d as R}from"./build-ILQLAXUu.js";import{u as X}from"./build-zmG1rUQC.js";import{l as B}from"./build-iAtYeLWU.js";import{c as U,a as x}from"./build-zGwhZ4ld.js";import{a as V}from"./build-YktOvMmT.js";import{a as W,u as P,L as _}from"./build-OE_afsL-.js";import{F as z,M as G}from"./build-A7hFqGNg.js";import{R as g}from"./build-2Ry57NQ3.js";import{I as y}from"./build-wuqjaMWm.js";import{P as J}from"./build-GyZx8JE7.js";import{E as Q}from"./build-RSWDk8cB.js";import{f as Z}from"./build-_xMqY4Jh.js";import{L as H}from"./build-1KANcpWx.js";import{C as K}from"./build-wEVVDuym.js";import{C as Y}from"./build-wJeONznC.js";import"./build-Ve6yeeQ4.js";import"./build-397rQXlc.js";import"./build-KmDWCa1O.js";import"./build-fTSzZ0k5.js";import"./build-1AAt12lA.js";import"./build-ohrxkAt7.js";import"./build-_FiX8RUA.js";import"./build-SzDtQGnO.js";import"./build-xb_ThzDn.js";import"./build-wLPnTU3G.js";import"./build-3NrWKoAI.js";import"./build-5IcMrkAf.js";import"./build-vCUe-or4.js";import"./build-sKNA4Dm8.js";import"./build-lgQIOkqP.js";import"./build-Ehw6M_IE.js";import"./build-73OlWr4U.js";import"./build-EIezJPNs.js";import"./build-PVsx4C9_.js";import"./build-3VBSNG3q.js";import"./build-u3LcFEdF.js";import"./build-Uc7vb3zK.js";import"./build-MEvXQR6G.js";import"./build-YFX_2h4z.js";import"./build-BsfU8sNK.js";import"./build-JQ0JUNpf.js";import"./build-7ZnY03Lw.js";const ee=(t,o)=>{var a;const r={commerceId:t==null?void 0:t.commerceId,terminalId:t==null?void 0:t.terminalId,amount:parseFloat((o==null?void 0:o.amount.toString())===""?"0":(a=o==null?void 0:o.amount)==null?void 0:a.toString().replace(/,/g,"")).toString(),clientName:o==null?void 0:o.name,email:o==null?void 0:o.email,phone:o==null?void 0:o.phone,description:o==null?void 0:o.concept};return V(r)},oe=(t={})=>{const o=k(W,t);return{...o,mutate:async(a,d)=>{const{onSuccess:p,onError:m,mutationOptions:u}=d;try{await v.promise(o.mutateAsync(a,u),{pending:"generando Liga de Pago ...",success:{render({data:c}){return p(c),"Se creó y envió la liga de pago con éxito"}}})}catch(c){const l=A(c,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");m(l),v.error(l,{type:E(c)})}}}},re=1,ne=1e5,M=({onSuccess:t})=>{const{mutate:o,isLoading:r}=oe(),a=P(i=>i.terminal),d=U({amount:x().required("El monto es requerido"),name:x().required("El nombre es requerido"),email:x().email("Ingresa un correo valido").required("El correo es requerido"),phone:x().test("longitud","El telefono es muy corto",i=>!(i&&i.replace(/[\s+]/g,"").length<10)).required("El telefono es requerido")}),p=X({initialValues:{amount:"",name:"",email:"",phone:"",concept:""},validationSchema:d,onSubmit:(i,{setSubmitting:j})=>{const S=ee(a,i);o(S,{onSuccess:f=>{j(!1),t({id:f==null?void 0:f.code,amount:i.amount})},onError:()=>{j(!1)}})}}),{errors:m,touched:u,isSubmitting:c,setFieldValue:l,values:C}=p,h=c||r;return e.jsx(L,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(z,{formik:p,children:e.jsxs(n,{spacing:3,sx:{p:3},children:[e.jsxs(n,{spacing:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Monto * (Máximo $100,000 por liga de pago)"}),e.jsx(g,{fullWidth:!0,name:"amount",required:!0,placeholder:"0.00",disabled:h,autoComplete:"off",InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:e.jsx(y,{position:"end",children:"MXN"}),inputComponent:G,inputProps:{mask:Number,radix:".",thousandsSeparator:",",padFractionalZeros:!0,min:re,max:ne,scale:2,value:C.amount,onAccept:i=>{l("amount",i)}}}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Completo *"}),e.jsx(g,{name:"name",required:!0,placeholder:"Usuario",disabled:h,InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(J,{})})}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico *"}),e.jsx(g,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:h,InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(Q,{})})}})]}),e.jsxs(n,{spacing:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono *"}),e.jsx(B,{name:"phone",fullWidth:!0,defaultCountry:"MX",langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],forceCallingCode:!0,value:C.phone,disabled:h,onChange:(i,j)=>{l("phone",i)},error:u.phone&&!!m.phone,helperText:u.phone&&m.phone})]}),e.jsxs(n,{spacing:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Mensaje"}),e.jsx(g,{name:"concept",multiline:!0,disabled:h,rows:2,placeholder:"Pago por .."})]}),e.jsx(n,{children:e.jsx(T,{loading:c,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(_,{}),children:"Generar"})})]})})})};M.propTypes={onSuccess:b.func};const te=({open:t,setOpen:o})=>{const[r,a]=I.useState(null),[d,p]=I.useState(!1),m=P(l=>l.terminal),u=`${window.location.host}/cobro/${r==null?void 0:r.id}`,c=()=>{o(!1),a(null)};return e.jsx(w,{open:t,handleClose:c,titleElement:e.jsxs(n,{children:[e.jsx(s,{variant:"h6",children:"Liga de Pago"}),e.jsx(s,{variant:"subtitle2",children:m==null?void 0:m.name})]}),children:r?e.jsxs(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:2,p:5,children:[e.jsxs(n,{flexDirection:"column",alignItems:"center",spacing:2,children:[e.jsx(N,{sx:{width:40,height:40},color:"success"}),e.jsx(s,{textAlign:"center",variant:"subtitle2",children:"Comparte la siguiente liga de pago para realizar el cobro por:"}),e.jsxs(n,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxs(s,{variant:"h3",children:[" ",Z(r.amount)]}),e.jsx(s,{variant:"caption",children:"MXN"})]})]}),e.jsx(n,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,children:e.jsxs(n,{justifyContent:"center",alignItems:"center",direction:"row",spacing:1,children:[e.jsx(R,{}),e.jsx(H,{component:q,underline:"always",to:`/cobro/${r==null?void 0:r.id}`,target:"_blank",color:"info.main",children:u}),e.jsx(F,{variant:"outlined",size:"small",color:d?"success":"inherit",onClick:()=>{p(!0),$(u),setTimeout(()=>{p(!1)},1e3)},children:d?e.jsx(K,{sx:{color:"success"}}):e.jsx(Y,{sx:{color:"text.disabled"}})})]})}),e.jsx(s,{variant:"caption",color:"text.disabled",children:O(new Date,"dd MMM yyyy hh:mm a",{locale:D})})]}):e.jsx(M,{onSuccess:l=>{a(l)}})})};te.propTypes={open:b.any,setOpen:b.func};export{te as default};
