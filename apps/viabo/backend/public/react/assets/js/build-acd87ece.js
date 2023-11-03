import{r as $,j as r,S as x,T as S,B as G,aw as H,L as J,D as K}from"./index-ead3f9df.js";import{u as Q}from"./build-70f85a92.js";import{u as X,C as Y}from"./build-29f2df4e.js";import{a as E}from"./build-bc833da9.js";import{p as Z}from"./build-22274fe9.js";import{c as P,a as t,b as c}from"./build-c33e978b.js";import{T as n}from"./build-c206cad7.js";import{F as T,C as R}from"./build-3511fb03.js";import"./build-75f5a94c.js";import"./build-cd815eee.js";import"./build-3d2cab90.js";const ee=["Pago compensaciones a colaboradores","Pago servicios","Control de gastos ","Otro"],re=P({fiscalName:t().required("El nombre fiscal es requerido"),rfc:t().required("El RFC es requerido"),commercialName:t().required("El nombre comercial es requerido"),employeesNumber:c().min(1,"Al menos debe exisitir un empleado").required("El número de empleados es requerido"),branchesNumber:c().min(1,"Al menos debe existir una sucursal").required("El número de sucursales es requerido"),tpvsNumber:c().min(1,"Al menos debe seleccionar una terminal punto de venta").required("El número de terminales de punto de venta es requerido")}),ae=P({fiscalName:t().required("El nombre fiscal es requerido"),rfc:t().required("El RFC es requerido"),commercialName:t().required("El nombre comercial es requerido"),employeesNumber:c().min(1,"Al menos debe exisitir un empleado").required("El número de empleados es requerido"),branchesNumber:c().min(1,"Al menos debe existir una sucursal").required("El número de sucursales es requerido"),tpvsNumber:c().min(1,"Al menos debe seleccionar una terminal punto de venta").required("El número de terminales de punto de venta es requerido"),cardsUse:t().required("El uso de la tarjetas es requerido"),cardsNumber:c().min(1,"Al menos debe seleccionar una tarjeta").required("El número de tarjetas es requerido")}),oe=e=>{var h;const m={fiscalName:(e==null?void 0:e.fiscalName)||"",rfc:(e==null?void 0:e.rfc)||"",commercialName:(e==null?void 0:e.commercialName)||"",employeesNumber:(e==null?void 0:e.employeesNumber)||"",branchesNumber:(e==null?void 0:e.branchesNumber)||"",tpvsNumber:(e==null?void 0:e.tpvsNumber)||"",apiRequired:(e==null?void 0:e.apiRequired)||!1,cardsUse:(e==null?void 0:e.cardsUse)||"",cardsNumber:(e==null?void 0:e.cardsNumber)||"",customCardsRequired:(e==null?void 0:e.customCardsRequired)||!1};let b=re;const N=!!((h=e==null?void 0:e.services)!=null&&h.find(d=>(d==null?void 0:d.type)==="2"));return N&&(b=ae),{initialValues:m,schema:b,allInfoIsRequired:N}};ie.propTypes={store:K.shape(Z)};function ie({store:e}){const{resume:m,setActualProcess:b,setLastProcess:N}=e,{schema:h,initialValues:d,allInfoIsRequired:q}=$.useMemo(()=>oe(m),[m]),{mutate:v,isLoading:U}=X(),I=Q({initialValues:d,enableReinitialize:!0,validationSchema:h,onSubmit:u=>{var j;const{fiscalName:B,rfc:F,commercialName:M,employeesNumber:W,branchesNumber:O,tpvsNumber:k,apiRequired:w,cardsUse:L,cardsNumber:D,customCardsRequired:z}=u,f=Y(m,3),V=(j=f==null?void 0:f.services)==null?void 0:j.map(p=>(p==null?void 0:p.type)==="2"?{type:p.type.toString(),cardNumbers:D.toString(),cardUse:L,personalized:z?"1":"0"}:p),_={...f,taxName:B,tradeName:M,rfc:F,employees:W,branchOffices:O,pointSaleTerminal:k,paymentApi:w?"1":"0",services:V};v(_,{onSuccess:()=>{b(E.COMMERCE_DOCUMENTATION),N({info:null,name:E.COMMERCE_INFO}),g(!1)},onError:()=>{g(!1)}})}}),{handleSubmit:A,values:a,errors:o,touched:i,handleChange:l,isSubmitting:C,setSubmitting:g,getFieldProps:y}=I,s=C||U;return r.jsxs(r.Fragment,{children:[r.jsxs(x,{direction:"column",width:1,spacing:1,children:[r.jsx(S,{variant:"h4",color:"textPrimary",align:"center",children:"Información del Comercio"}),r.jsx(S,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese la información del comercio para continuar con el proceso"})]}),r.jsx(G,{width:1,py:4,component:"form",onSubmit:A,children:r.jsxs(x,{spacing:3,children:[r.jsx(n,{fullWidth:!0,name:"fiscalName",label:"Nombre Fiscal",autoFocus:!0,value:a.fiscalName,error:i.fiscalName&&!!o.fiscalName,helperText:i.fiscalName&&o.fiscalName,onChange:l,disabled:s}),r.jsx(n,{fullWidth:!0,name:"rfc",label:"RFC",value:a.rfc,error:i.rfc&&!!o.rfc,helperText:i.rfc&&o.rfc,onChange:l,disabled:s}),r.jsx(n,{fullWidth:!0,name:"commercialName",label:"Nombre Comercial",value:a.commercialName,error:i.commercialName&&!!o.commercialName,helperText:i.commercialName&&o.commercialName,onChange:l,disabled:s}),r.jsxs(x,{direction:{xs:"column",md:"row"},spacing:3,children:[r.jsx(n,{fullWidth:!0,name:"employeesNumber",label:"No. Empleados",type:"number",inputProps:{inputMode:"numeric",min:"1"},value:a.employeesNumber,error:i.employeesNumber&&!!o.employeesNumber,helperText:i.employeesNumber&&o.employeesNumber,onChange:l,disabled:s}),r.jsx(n,{fullWidth:!0,name:"branchesNumber",label:"No. Sucursales",type:"number",inputProps:{inputMode:"numeric",min:"1"},value:a.branchesNumber,error:i.branchesNumber&&!!o.branchesNumber,helperText:i.branchesNumber&&o.branchesNumber,onChange:l,disabled:s})]}),r.jsxs(x,{direction:{xs:"column",md:"row"},spacing:3,children:[r.jsx(n,{fullWidth:!0,name:"tpvsNumber",label:"No. Terminales TPV's",type:"number",inputProps:{inputMode:"numeric",min:"1"},value:a.tpvsNumber,error:i.tpvsNumber&&!!o.tpvsNumber,helperText:i.tpvsNumber&&o.tpvsNumber,onChange:l,disabled:s}),q&&r.jsx(n,{fullWidth:!0,name:"cardsNumber",label:"No. de Tarjetas",type:"number",inputProps:{inputMode:"numeric",min:"1"},value:a.cardsNumber,error:i.cardsNumber&&!!o.cardsNumber,helperText:i.cardsNumber&&o.cardsNumber,onChange:l,disabled:s})]}),q&&r.jsx(n,{...y("cardsUse"),value:a==null?void 0:a.cardsUse,disabled:C,fullWidth:!0,select:!0,label:"Uso de las tarjetas viabo",placeholder:"Seleccionar",SelectProps:{MenuProps:{sx:{"& .MuiPaper-root":{maxHeight:260}}}},error:i.cardsUse&&!!o.cardsUse,helperText:i.cardsUse&&o.cardsUse,sx:{textTransform:"capitalize"},children:ee.map(u=>r.jsx(H,{value:u,sx:{mx:1,my:.5,borderRadius:.75,typography:"body2",textTransform:"uppercase"},children:u},u))}),r.jsx(T,{control:r.jsx(R,{...y("apiRequired"),disabled:s,checked:a==null?void 0:a.apiRequired,value:a==null?void 0:a.apiRequired}),label:"¿Se requiere API para ligas de cobro? (Pagos a distancia sin tarjeta física, protegido con 3D secure)"}),q&&r.jsx(T,{control:r.jsx(R,{...y("customCardsRequired"),disabled:s,checked:a==null?void 0:a.customCardsRequired,value:a==null?void 0:a.customCardsRequired}),label:"¿Desea que las tarjetas fisicas esten personalizadas? (Grabadas)"}),r.jsx(J,{loading:s,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Guardar"})]})})]})}export{ie as default};