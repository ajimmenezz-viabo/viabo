import{j as e,a2 as h,S as s,p as j,D as r}from"./index-5445d16d.js";import{u as b}from"./build-6cbfc9db.js";import{c as F,a as g}from"./build-012205cd.js";import{F as y,M as S}from"./build-3e3331ed.js";import{R as p}from"./build-0d070a86.js";import{C as w}from"./build-29b66785.js";import{C as T}from"./build-c804e8ae.js";import{A as k}from"./build-dc90fb74.js";import"./build-e31e8a44.js";import"./build-7d6b9cd7.js";import"./build-42e605bc.js";import"./build-d3dc267c.js";import"./build-205e2358.js";import"./build-bee6630b.js";import"./build-26d602c4.js";import"./build-a86b361e.js";function I({setCurrentBalance:c,insufficient:a,mainCard:t,onSuccess:u}){const m=F().shape({amount:g().required("La cantidad es requerida")}),i=b({initialValues:{card:t?{label:t==null?void 0:t.label,value:t==null?void 0:t.id}:null,amount:"",concept:""},validationSchema:m,onSubmit:(o,{setSubmitting:l})=>a?l(!1):(l(!1),u(o))}),{isSubmitting:d,setFieldValue:x,values:f}=i,n=d;return e.jsx(h,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(y,{formik:i,children:e.jsxs(s,{sx:{p:3},spacing:1,children:[e.jsx(s,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},alignItems:"flex-start",justifyContent:"center",children:e.jsx(w,{icon:e.jsx(T,{}),label:t==null?void 0:t.cardNumberHidden})}),e.jsx(s,{children:e.jsx(p,{sx:{width:1},size:"small",name:"amount",required:!0,label:"Cantidad",placeholder:"0.00",disabled:n,autoComplete:"off",InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),inputComponent:S,inputProps:{mask:Number,radix:".",thousandsSeparator:",",padFractionalZeros:!0,min:0,max:5e4,scale:2,value:f.amount,onAccept:o=>{c(parseFloat(o===""?"0":o.replace(/,/g,"")).toFixed(2)),x("amount",o)}}}})}),e.jsx(s,{sx:{width:1},children:e.jsx(p,{name:"concept",multiline:!0,disabled:n,rows:2,label:"Concepto",placeholder:"Transferencia .."})}),e.jsx(s,{sx:{px:3,pt:3},children:e.jsx(j,{variant:"outlined",color:"primary",disabled:a,fullWidth:!0,type:"submit",startIcon:e.jsx(k,{}),children:"Siguiente"})})]})})})}I.propTypes={insufficient:r.any,mainCard:r.shape({cardNumberHidden:r.any,id:r.any,label:r.any}),onSuccess:r.func,setCurrentBalance:r.func};export{I as default};
