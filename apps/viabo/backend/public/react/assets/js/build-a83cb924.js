import{n as I,Q as T,g as k,o as E,P,G as S,H as q,J as D,j as e,S as i,T as t,i as C,K as F,N as V,O as A,L as w,a7 as z}from"./index-d80df4f2.js";import{u as L}from"./build-ac3d2487.js";import{a as R}from"./build-9cf33696.js";import{c as B,a as h}from"./build-81cea643.js";import{g as O}from"./build-a2d34822.js";import{g as W,u as M}from"./build-e5cb9583.js";import{R as g}from"./build-7c868d50.js";import{F as $,M as v}from"./build-d7f513da.js";import{M as X}from"./build-20986720.js";import{V as _,L as U}from"./build-0c15f219.js";import{I as j}from"./build-1247f810.js";import{C as G}from"./build-58852775.js";import{V as K}from"./build-5b8cc769.js";import{P as H}from"./build-26ceff91.js";import{E as J}from"./build-ff186b5f.js";import{D as Q}from"./build-fa3622be.js";import{R as Y}from"./build-92300a8f.js";import"./build-f74d8498.js";import"./build-8687dd75.js";import"./build-aec534f9.js";import"./build-d7476723.js";import"./build-bee6630b.js";import"./build-8fc42554.js";import"./build-75eddafd.js";import"./build-ec25e499.js";import"./build-ba2fcc4d.js";import"./build-5bcae247.js";import"./build-c0d58f38.js";import"./build-67585b90.js";import"./build-bf16a813.js";import"./build-95542c29.js";import"./build-5f0f07db.js";const Z=(a,r)=>{var c,s,l,d;const m={commerceId:a==null?void 0:a.commerceId,terminalId:a==null?void 0:a.terminalId,amount:parseFloat(((c=r==null?void 0:r.amount)==null?void 0:c.toString())===""?"0":(s=r==null?void 0:r.amount)==null?void 0:s.toString().replace(/,/g,"")).toString(),description:r==null?void 0:r.concept,clientName:r==null?void 0:r.name,phone:r==null?void 0:r.phone,cardNumber:r==null?void 0:r.cardNumber.replace(/\s+/g,""),expMonth:(l=r==null?void 0:r.expiration)==null?void 0:l.slice(0,2),expYear:(d=r==null?void 0:r.expiration)==null?void 0:d.slice(-2),security:r==null?void 0:r.cvv,email:r==null?void 0:r.email};return O(m)},y=(a={})=>{const r=I(W,a);return{...r,mutate:async(c,s)=>{const{onSuccess:l,onError:d,mutationOptions:f}=s;try{await T.promise(r.mutateAsync(c,f),{pending:"Realizando Pago ...",success:{render({data:u}){return l(u),"Se completó la transacción y se envió el comprobante con éxito"}}})}catch(u){const n=k(u,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");d(n),T.error(n,{type:E(u)})}}}},ee=1,re=1e5,N=({onSuccessTransaction:a})=>{const r=M(o=>o.terminal),{mutate:m}=y(),c=B().shape({amount:h().required("El monto es requerido"),concept:h().required("El concepto es requerido"),cardNumber:h().transform((o,p)=>p.replace(/\s/g,"")).min(16,"Debe contener 16 digitos").required("El número de la tarjeta es requerido"),cvv:h().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),expiration:h().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(o){const p=S(`01/${o}`,"dd/MM/yyyy",new Date),b=new Date;return q(p)&&D(p,b)}),name:h().required("El nombre es requerido"),email:h().email("Ingresa un correo valido").required("El correo es requerido"),phone:h().test("longitud","El telefono es muy corto",o=>!(o&&o.replace(/[\s+]/g,"").length<10)).required("El telefono es requerido")}),s=L({initialValues:{amount:"",cardNumber:"",expiration:"",cvv:"",name:"",email:"",phone:"",concept:""},enableReinitialize:!0,validationSchema:c,onSubmit:(o,{setSubmitting:p})=>{const b=Z(r,o);m(b,{onSuccess:()=>{p(!1),a()},onError:()=>{p(!1)}})}}),{errors:l,touched:d,isSubmitting:f,setFieldValue:u,values:n}=s,x=f;return e.jsx($,{formik:s,children:e.jsxs(i,{spacing:2,p:3,children:[e.jsxs(i,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(t,{variant:"subtitle1",children:"Forma de Pago"}),e.jsx(C,{sx:{px:1,backgroundColor:"background.default"},children:e.jsx(X,{sx:{width:30,height:30}})}),e.jsx(C,{sx:{px:1,backgroundColor:"background.default"},children:e.jsx(_,{sx:{width:30,height:30}})})]}),e.jsxs(i,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Monto *"}),e.jsx(g,{autoFocus:!0,fullWidth:!0,name:"amount",required:!0,placeholder:"0.00",disabled:x,size:"small",autoComplete:"off",InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),endAdornment:e.jsx(j,{position:"end",children:"MXN"}),inputComponent:v,inputProps:{mask:Number,radix:".",thousandsSeparator:",",padFractionalZeros:!0,min:ee,max:re,scale:2,value:n.amount,onAccept:o=>{u("amount",o)}}}})]}),e.jsxs(i,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Concepto *"}),e.jsx(g,{size:"small",name:"concept",multiline:!0,disabled:x,rows:2,placeholder:"Pago por .."})]}),e.jsxs(i,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de Tarjeta *"}),e.jsx(g,{name:"cardNumber",required:!0,size:"small",placeholder:"5254 2700 9717 8968",fullWidth:!0,InputProps:{startAdornment:e.jsx(j,{position:"start",children:e.jsx(G,{})}),inputComponent:v,inputProps:{mask:"0000 0000 0000 0000",value:n.cardNumber,onAccept:o=>{u("cardNumber",o)}}},disabled:x})]}),e.jsxs(i,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(i,{flex:1,spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence *"}),e.jsx(Q,{disabled:x,size:"small",views:["year","month"],name:"expiration",value:n!=null&&n.expiration?new Date(n.expiration):null,required:!0,onChange:o=>q(o)?s.setFieldValue("expiration",F(o,"MM/yyyy")):s.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,size:"small",error:!!(d.expiration&&l.expiration),required:!0,helperText:d.expiration&&l.expiration?l.expiration:""}},disablePast:!0,minDate:new Date,format:"MM/yy"})]}),e.jsxs(i,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV *"}),e.jsx(g,{name:"cvv",required:!0,placeholder:"123",size:"small",InputProps:{startAdornment:e.jsx(j,{position:"start",children:e.jsx(K,{})}),inputComponent:v,inputProps:{mask:"000",onAccept:o=>{u("cvv",o)},value:n.cvv}},disabled:x})]})]}),e.jsxs(i,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tarjetahabiente *"}),e.jsx(g,{name:"name",required:!0,size:"small",placeholder:"Nombre del Titular de la Tarjeta",disabled:x,InputProps:{startAdornment:e.jsx(j,{position:"start",children:e.jsx(H,{})})}})]}),e.jsxs(i,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico *"}),e.jsx(g,{name:"email",required:!0,size:"small",placeholder:"usuario@dominio.com",disabled:x,InputProps:{startAdornment:e.jsx(j,{position:"start",children:e.jsx(J,{})})}})]}),e.jsxs(i,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono *"}),e.jsx(R,{name:"phone",fullWidth:!0,langOfCountryName:"es",defaultCountry:"MX",preferredCountries:["MX","US"],continents:["NA","SA"],forceCallingCode:!0,value:n.phone,disabled:x,required:!0,size:"small",onChange:(o,p)=>{u("phone",o)},error:d.phone&&!!l.phone,helperText:d.phone&&l.phone})]}),e.jsxs(t,{variant:"body2",align:"center",sx:{color:"text.secondary"},children:["Al hacer clic en el botón de Pagar, accedo a los  ",e.jsx(V,{component:A,underline:"always",target:"_blank",color:"info.main",children:"Terminos y condiciones"}),"  &  ",e.jsx(V,{component:A,underline:"always",target:"_blank",color:"info.main",children:"Acuerdos de privacidad"}),"."]}),e.jsx(i,{children:e.jsx(w,{loading:f,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(U,{}),children:"Pagar"})})]})})};N.propTypes={onSuccessTransaction:P.func};const oe=({open:a,setOpen:r})=>{const m=M(s=>s.terminal),c=()=>{r(!1)};return e.jsx(Y,{open:a,handleClose:c,titleElement:e.jsxs(i,{children:[e.jsx(t,{variant:"h6",children:"Terminal Virtual"}),e.jsx(t,{variant:"subtitle2",children:m==null?void 0:m.name})]}),children:e.jsx(z,{children:e.jsx(N,{onSuccessTransaction:c})})})};oe.propTypes={open:P.bool,setOpen:P.func};export{oe as default};