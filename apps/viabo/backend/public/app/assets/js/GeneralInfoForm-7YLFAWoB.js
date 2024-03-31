import{c as I,f as _,U as f,i as s,S as l,T as i,b4 as O,dN as B,e6 as G,e1 as E,e7 as M,Q as $,P as r}from"./vendor-5lkxkETF.js";import{u as k}from"./formik.esm-CTTSENmf.js";import{c as q,a as R,b as L}from"./index.esm-gIIytEq8.js";import{g as D,b as Q}from"./index-D5oZe3QV.js";import{a as U,M as V}from"./ManagementCommerces-BFoTaE0L.js";import{F as W,R as n,e as Z}from"./TextMaxLine-Cweu1ZMD.js";import{R as K}from"./RFSelect-DSsw7uR8.js";import{i as w}from"./matchTypes-mENztEWg.js";import"./operationTypes-DDw4nqok.js";import"./viabo-card-CcTpX9JZ.js";import"./viabo-pay-Tb0TUikx.js";import"./managementCommercesAdapter-DNc62lKi.js";import"./processList-CzVvLx1j.js";import"./formatTime-jCgU2sMR.js";import"./MaterialDataTable-D4JD1893.js";import"./useMaterialTable-8QQmzXWd.js";import"./HeaderPage-BXF44eOm.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./UploadSingleFile-D4e1QNmZ.js";import"./formatNumber-dGNhWwxT.js";const Y=(e,d)=>{var x,o,t;const p=new FormData,j={commerceId:d==null?void 0:d.id,fiscalPersonType:e==null?void 0:e.fiscalTypePerson,fiscalName:e==null?void 0:e.fiscalName,tradeName:e==null?void 0:e.commercialName,rfc:e==null?void 0:e.rfc,employees:e==null?void 0:e.employeesNumber,branchOffices:e==null?void 0:e.branchesNumber,postalAddress:e==null?void 0:e.postalAddress,phoneNumbers:e==null?void 0:e.phoneNumbers,slug:((o=(x=e==null?void 0:e.terminalCommerceSlug)==null?void 0:x.toLowerCase())==null?void 0:o.trim())||"",publicTerminal:((t=e==null?void 0:e.publicTerminal)==null?void 0:t.value)||"",logo:(e==null?void 0:e.commerceLogo)||null};return Object.entries(j).forEach(([b,h])=>{p.append(b,h)}),p},H=(e={})=>{const d=I(),p=_(U,e);return{...p,mutate:async(x,o)=>{const{onSuccess:t,onError:b,mutationOptions:h}=o;try{await f.promise(p.mutateAsync(x,h),{pending:"Actualizando Comercio ...",success:{render({data:a}){return d.invalidateQueries([V.COMMERCE_LIST]),w(t)&&t(a),"Se actualizo la información del comercio con éxito"}}})}catch(a){const c=D(a,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");w(b)&&b(c),f.error(c,{type:Q(a)})}}}};function J({commerce:e,onSuccess:d}){var c,N,m,y,v,C,S,T,F,A,P,z;const{mutate:p,isLoading:j}=H(),x=q().shape({commercialName:R().trim().required("El nombre comercial es requerido"),employeesNumber:L().min(1,"Al menos debe existir un empleado"),branchesNumber:L().min(1,"Al menos debe existir una sucursal"),terminalCommerceSlug:R().trim().matches(/^[a-zA-Z]+([_-][a-zA-Z]+)*$/,{message:"Solo se permiten letras y los espacios se deben convertir en (_ ó -).",excludeEmptyString:!0})}),o=k({initialValues:{commercialName:((c=e==null?void 0:e.information)==null?void 0:c.commercialName)||"",fiscalName:((N=e==null?void 0:e.information)==null?void 0:N.fiscalName)||"",fiscalTypePerson:((m=e==null?void 0:e.information)==null?void 0:m.fiscalTypePerson)||"1",rfc:((y=e==null?void 0:e.information)==null?void 0:y.rfc)||"",employeesNumber:((v=e==null?void 0:e.information)==null?void 0:v.employeesNumber)||"",branchesNumber:((C=e==null?void 0:e.information)==null?void 0:C.branchesNumber)||"",postalAddress:((S=e==null?void 0:e.information)==null?void 0:S.postalAddress)||"",phoneNumbers:((T=e==null?void 0:e.information)==null?void 0:T.phoneNumbers)||"",terminalCommerceSlug:((F=e==null?void 0:e.information)==null?void 0:F.terminalCommerceSlug)||"",publicTerminal:((A=e==null?void 0:e.terminals)==null?void 0:A.find(u=>{var g;return(u==null?void 0:u.id)===((g=e==null?void 0:e.information)==null?void 0:g.publicTerminal)}))||null,commerceLogo:((P=e==null?void 0:e.information)==null?void 0:P.logo)||null},enableReinitialize:!0,validationSchema:x,onSubmit:(u,{setSubmitting:g,setFieldTouched:ee})=>{const X=Y(u,e);p(X,{onSuccess:()=>{d(),g(!1)},onError:()=>{g(!1)}})}}),{isSubmitting:t,setFieldValue:b,values:h}=o,a=t||j;return s.jsx(W,{formik:o,children:s.jsxs(l,{spacing:2,children:[s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Comercial *"}),s.jsx(n,{size:"small",name:"commercialName",disabled:a,required:!0,placeholder:"Comercio ..."})]}),s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Fiscal"}),s.jsx(n,{size:"small",name:"fiscalName",disabled:a,placeholder:"Comercio S.A. de C.V. ..."})]}),s.jsxs(l,{flexDirection:{xs:"column",md:"row"},gap:3,children:[s.jsxs(l,{spacing:1,flex:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"RFC"}),s.jsx(n,{size:"small",name:"rfc",disabled:a,placeholder:"XXXXXXXXX ..."})]}),s.jsx(l,{flex:1,children:s.jsxs(O,{disabled:a,children:[s.jsx(B,{id:"fiscal-type-person-group-label",sx:{color:"text.disabled",typography:"overline"},children:"Tipo de Persona"}),s.jsxs(G,{value:h.fiscalTypePerson,onChange:u=>{b("fiscalTypePerson",u.target.value)},row:!0,"aria-labelledby":"fiscal-type-person-group-label",name:"fiscalTypePerson",children:[s.jsx(E,{value:"1",control:s.jsx(M,{}),label:"Moral"}),s.jsx(E,{value:"2",control:s.jsx(M,{}),label:"Física"})]})]})})]}),s.jsxs(l,{direction:{xs:"column",md:"row"},spacing:3,children:[s.jsxs(l,{spacing:1,flex:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de empleados"}),s.jsx(n,{size:"small",name:"employeesNumber",type:"number",inputProps:{inputMode:"numeric",min:"1"},disabled:a,placeholder:"0"})]}),s.jsxs(l,{spacing:1,flex:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de sucursales"}),s.jsx(n,{size:"small",name:"branchesNumber",disabled:a,placeholder:"0",type:"number",inputProps:{inputMode:"numeric",min:"1"}})]})]}),s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Dirección Postal"}),s.jsx(n,{size:"small",name:"postalAddress",multiline:!0,disabled:a,rows:2,placeholder:"..."})]}),s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Números Telefónicos"}),s.jsx(n,{size:"small",name:"phoneNumbers",disabled:a,placeholder:"(00)-0000 000... , (00) 0000 000..."})]}),s.jsxs(l,{flex:1,spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Terminal Cobro Pública *"}),s.jsx(K,{size:"small",name:"publicTerminal",disabled:a,options:(e==null?void 0:e.terminals)||[],textFieldParams:{placeholder:"Seleccionar ...",size:"small"}})]}),((z=e==null?void 0:e.terminals)==null?void 0:z.length)>0&&s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Liga de cobro (Slug)"}),s.jsx(n,{size:"small",name:"terminalCommerceSlug",disabled:a,placeholder:"mi_comercio ..."})]}),s.jsxs(l,{spacing:1,children:[s.jsx(i,{variant:"overline",sx:{color:"text.disabled",width:1},children:"Logo (Max - 3MB - png,svg,webp):"}),s.jsx(Z,{name:"commerceLogo",maxSize:3145728,accept:{"image/*":[".svg",".webp",".png"]}})]}),s.jsx(l,{pt:2,children:s.jsx($,{loading:t,variant:"contained",color:"primary",fullWidth:!0,type:"submit",sx:{fontWeight:"bold"},children:"Guardar"})})]})})}J.propTypes={commerce:r.shape({information:r.shape({branchesNumber:r.string,logo:r.any,commercialName:r.string,employeesNumber:r.string,fiscalName:r.string,fiscalTypePerson:r.string,phoneNumbers:r.string,postalAddress:r.string,publicTerminal:r.any,rfc:r.string,terminalCommerceSlug:r.string}),terminals:r.array}),onSuccess:r.func};export{J as default};
//# sourceMappingURL=GeneralInfoForm-7YLFAWoB.js.map