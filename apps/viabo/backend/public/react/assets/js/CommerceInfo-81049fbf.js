import{r as G,c as b,$ as H,S as y,j as a,T,B as J,bd as K,L as Q,p as X}from"./index-fdfb4bd6.js";import{u as Y}from"./formik.esm-d38db077.js";import{c as U,a as t,e as c}from"./index.esm-4f526a47.js";import{p as Z}from"./CommerceRegister-17768659.js";import{P as R}from"./processList-ab804c83.js";import{u as ee,C as re}from"./commerceUpdateAdapter-ab648cb5.js";import{T as l}from"./TextField-887a410b.js";import{F as P,C as v}from"./FormControlLabel-ce88d45b.js";import"./integracion-tecnologica-11ba68ca.js";import"./Grid-1c0a6d7c.js";const ae=["Pago compensaciones a colaboradores","Pago servicios","Control de gastos ","Otro"],oe=U({fiscalName:t().required("El nombre fiscal es requerido"),rfc:t().required("El RFC es requerido"),commercialName:t().required("El nombre comercial es requerido"),employeesNumber:c().min(1,"Al menos debe exisitir un empleado").required("El número de empleados es requerido"),branchesNumber:c().min(1,"Al menos debe existir una sucursal").required("El número de sucursales es requerido"),tpvsNumber:c().min(1,"Al menos debe seleccionar una terminal punto de venta").required("El número de terminales de punto de venta es requerido")}),ie=U({fiscalName:t().required("El nombre fiscal es requerido"),rfc:t().required("El RFC es requerido"),commercialName:t().required("El nombre comercial es requerido"),employeesNumber:c().min(1,"Al menos debe exisitir un empleado").required("El número de empleados es requerido"),branchesNumber:c().min(1,"Al menos debe existir una sucursal").required("El número de sucursales es requerido"),tpvsNumber:c().min(1,"Al menos debe seleccionar una terminal punto de venta").required("El número de terminales de punto de venta es requerido"),cardsUse:t().required("El uso de la tarjetas es requerido"),cardsNumber:c().min(1,"Al menos debe seleccionar una tarjeta").required("El número de tarjetas es requerido")}),ne=e=>{var f;const d={fiscalName:(e==null?void 0:e.fiscalName)||"",rfc:(e==null?void 0:e.rfc)||"",commercialName:(e==null?void 0:e.commercialName)||"",employeesNumber:(e==null?void 0:e.employeesNumber)||"",branchesNumber:(e==null?void 0:e.branchesNumber)||"",tpvsNumber:(e==null?void 0:e.tpvsNumber)||"",apiRequired:(e==null?void 0:e.apiRequired)||!1,cardsUse:(e==null?void 0:e.cardsUse)||"",cardsNumber:(e==null?void 0:e.cardsNumber)||"",customCardsRequired:(e==null?void 0:e.customCardsRequired)||!1};let N=oe;const h=!!((f=e==null?void 0:e.services)!=null&&f.find(m=>(m==null?void 0:m.type)==="2"));return h&&(N=ie),{initialValues:d,schema:N,allInfoIsRequired:h}};le.propTypes={store:X.shape(Z)};function le({store:e}){const{resume:d,setActualProcess:N,setLastProcess:h}=e,{schema:f,initialValues:m,allInfoIsRequired:C}=G.useMemo(()=>ne(d),[d]),{mutate:I,isLoading:A}=ee(),B=Y({initialValues:m,enableReinitialize:!0,validationSchema:f,onSubmit:u=>{var E;const{fiscalName:M,rfc:j,commercialName:W,employeesNumber:O,branchesNumber:k,tpvsNumber:L,apiRequired:w,cardsUse:z,cardsNumber:D,customCardsRequired:V}=u,q=re(d,3),_=(E=q==null?void 0:q.services)==null?void 0:E.map(p=>(p==null?void 0:p.type)==="2"?{type:p.type.toString(),cardNumbers:D.toString(),cardUse:z,personalized:V?"1":"0"}:p),$={...q,taxName:M,tradeName:W,rfc:j,employees:O,branchOffices:k,pointSaleTerminal:L,paymentApi:w?"1":"0",services:_};I($,{onSuccess:()=>{N(R.COMMERCE_DOCUMENTATION),h({info:null,name:R.COMMERCE_INFO}),S(!1)},onError:()=>{S(!1)}})}}),{handleSubmit:F,values:r,errors:o,touched:i,handleChange:s,isSubmitting:x,setSubmitting:S,getFieldProps:g}=B,n=x||A;return b(H,{children:[b(y,{direction:"column",width:1,spacing:1,children:[a(T,{variant:"h4",color:"textPrimary",align:"center",children:"Información del Comercio"}),a(T,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese la información del comercio para continuar con el proceso"})]}),a(J,{width:1,py:4,component:"form",onSubmit:F,children:b(y,{spacing:3,children:[a(l,{fullWidth:!0,name:"fiscalName",label:"Nombre Fiscal",autoFocus:!0,value:r.fiscalName,error:i.fiscalName&&!!o.fiscalName,helperText:i.fiscalName&&o.fiscalName,onChange:s,disabled:n}),a(l,{fullWidth:!0,name:"rfc",label:"RFC",value:r.rfc,error:i.rfc&&!!o.rfc,helperText:i.rfc&&o.rfc,onChange:s,disabled:n}),a(l,{fullWidth:!0,name:"commercialName",label:"Nombre Comercial",value:r.commercialName,error:i.commercialName&&!!o.commercialName,helperText:i.commercialName&&o.commercialName,onChange:s,disabled:n}),b(y,{direction:{xs:"column",md:"row"},spacing:3,children:[a(l,{fullWidth:!0,name:"employeesNumber",label:"No. Empleados",type:"number",inputProps:{inputMode:"numeric",min:"1"},value:r.employeesNumber,error:i.employeesNumber&&!!o.employeesNumber,helperText:i.employeesNumber&&o.employeesNumber,onChange:s,disabled:n}),a(l,{fullWidth:!0,name:"branchesNumber",label:"No. Sucursales",type:"number",inputProps:{inputMode:"numeric",min:"1"},value:r.branchesNumber,error:i.branchesNumber&&!!o.branchesNumber,helperText:i.branchesNumber&&o.branchesNumber,onChange:s,disabled:n})]}),b(y,{direction:{xs:"column",md:"row"},spacing:3,children:[a(l,{fullWidth:!0,name:"tpvsNumber",label:"No. Terminales TPV's",type:"number",inputProps:{inputMode:"numeric",min:"1"},value:r.tpvsNumber,error:i.tpvsNumber&&!!o.tpvsNumber,helperText:i.tpvsNumber&&o.tpvsNumber,onChange:s,disabled:n}),C&&a(l,{fullWidth:!0,name:"cardsNumber",label:"No. de Tarjetas",type:"number",inputProps:{inputMode:"numeric",min:"1"},value:r.cardsNumber,error:i.cardsNumber&&!!o.cardsNumber,helperText:i.cardsNumber&&o.cardsNumber,onChange:s,disabled:n})]}),C&&a(l,{...g("cardsUse"),value:r==null?void 0:r.cardsUse,disabled:x,fullWidth:!0,select:!0,label:"Uso de las tarjetas viabo",placeholder:"Seleccionar",SelectProps:{MenuProps:{sx:{"& .MuiPaper-root":{maxHeight:260}}}},error:i.cardsUse&&!!o.cardsUse,helperText:i.cardsUse&&o.cardsUse,sx:{textTransform:"capitalize"},children:ae.map(u=>a(K,{value:u,sx:{mx:1,my:.5,borderRadius:.75,typography:"body2",textTransform:"uppercase"},children:u},u))}),a(P,{control:a(v,{...g("apiRequired"),disabled:n,checked:r==null?void 0:r.apiRequired,value:r==null?void 0:r.apiRequired}),label:"¿Se requiere API para ligas de cobro? (Pagos a distancia sin tarjeta física, protegido con 3D secure)"}),C&&a(P,{control:a(v,{...g("customCardsRequired"),disabled:n,checked:r==null?void 0:r.customCardsRequired,value:r==null?void 0:r.customCardsRequired}),label:"¿Desea que las tarjetas fisicas esten personalizadas? (Grabadas)"}),a(Q,{loading:n,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Guardar"})]})})]})}export{le as default};
