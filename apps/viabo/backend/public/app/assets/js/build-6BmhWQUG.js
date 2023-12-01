import{k as I,a as O,Q as P,g as _,b as k,j as s,S as l,T as i,L as q,O as r}from"./index-mplo7Cy0.js";import{u as G}from"./build-0lw-wv_t.js";import{c as $,a as E,e as M}from"./build-SLoEvwLV.js";import{a as B,M as D}from"./build-pAnreocp.js";import{F as Q,c as V}from"./build-fgcEbVX7.js";import{R as U}from"./build-e7H5oRgU.js";import{R as p}from"./build-ZYzTDOzo.js";import{i as R}from"./build-yDVAqRjG.js";import{F as W,q as Z}from"./build-nSdaxBfa.js";import{R as K}from"./build-GNRD3-sI.js";import{F as L}from"./build-PfoRwXqx.js";import{R as w}from"./build-oGgHkT3Q.js";import"./build-piimbepB.js";import"./build-eQ93QMpk.js";import"./build-1LmYI3dU.js";import"./build-TesjUH-a.js";import"./build-zH8OCAbq.js";import"./build-zEF68lUW.js";import"./build-A0pkRIS4.js";import"./build-yyP470yP.js";import"./build-E66JUiqZ.js";import"./build-UhUpPKic.js";import"./build-Hhkdi4aP.js";import"./build-Uc7vb3zK.js";import"./build-9Efc2eo3.js";import"./build-D3xC4GbD.js";import"./build-Qg3JQUP_.js";import"./build-M7AoVccO.js";import"./build-jhrJ8roR.js";import"./build-onu4nqUu.js";const Y=(e,n)=>{var x,o,t;const d=new FormData,m={commerceId:n==null?void 0:n.id,fiscalPersonType:e==null?void 0:e.fiscalTypePerson,fiscalName:e==null?void 0:e.fiscalName,tradeName:e==null?void 0:e.commercialName,rfc:e==null?void 0:e.rfc,employees:e==null?void 0:e.employeesNumber,branchOffices:e==null?void 0:e.branchesNumber,postalAddress:e==null?void 0:e.postalAddress,phoneNumbers:e==null?void 0:e.phoneNumbers,slug:((o=(x=e==null?void 0:e.terminalCommerceSlug)==null?void 0:x.toLowerCase())==null?void 0:o.trim())||"",publicTerminal:((t=e==null?void 0:e.publicTerminal)==null?void 0:t.value)||"",logo:(e==null?void 0:e.commerceLogo)||null};return Object.entries(m).forEach(([b,h])=>{d.append(b,h)}),d},H=(e={})=>{const n=I(),d=O(B,e);return{...d,mutate:async(x,o)=>{const{onSuccess:t,onError:b,mutationOptions:h}=o;try{await P.promise(d.mutateAsync(x,h),{pending:"Actualizando Comercio ...",success:{render({data:a}){return n.invalidateQueries([D.COMMERCE_LIST]),R(t)&&t(a),"Se actualizo la información del comercio con éxito"}}})}catch(a){const c=_(a,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");R(b)&&b(c),P.error(c,{type:k(a)})}}}};function J({commerce:e,onSuccess:n}){var c,j,y,N,v,C,S,T,F,f,A,z;const{mutate:d,isLoading:m}=H(),x=$().shape({commercialName:E().trim().required("El nombre comercial es requerido"),employeesNumber:M().min(1,"Al menos debe existir un empleado"),branchesNumber:M().min(1,"Al menos debe existir una sucursal"),terminalCommerceSlug:E().trim().matches(/^[a-zA-Z]+([_-][a-zA-Z]+)*$/,{message:"Solo se permiten letras y los espacios se deben convertir en (_ ó -).",excludeEmptyString:!0})}),o=G({initialValues:{commercialName:((c=e==null?void 0:e.information)==null?void 0:c.commercialName)||"",fiscalName:((j=e==null?void 0:e.information)==null?void 0:j.fiscalName)||"",fiscalTypePerson:((y=e==null?void 0:e.information)==null?void 0:y.fiscalTypePerson)||"1",rfc:((N=e==null?void 0:e.information)==null?void 0:N.rfc)||"",employeesNumber:((v=e==null?void 0:e.information)==null?void 0:v.employeesNumber)||"",branchesNumber:((C=e==null?void 0:e.information)==null?void 0:C.branchesNumber)||"",postalAddress:((S=e==null?void 0:e.information)==null?void 0:S.postalAddress)||"",phoneNumbers:((T=e==null?void 0:e.information)==null?void 0:T.phoneNumbers)||"",terminalCommerceSlug:((F=e==null?void 0:e.information)==null?void 0:F.terminalCommerceSlug)||"",publicTerminal:((f=e==null?void 0:e.terminals)==null?void 0:f.find(u=>{var g;return(u==null?void 0:u.id)===((g=e==null?void 0:e.information)==null?void 0:g.publicTerminal)}))||null,commerceLogo:((A=e==null?void 0:e.information)==null?void 0:A.logo)||null},enableReinitialize:!0,validationSchema:x,onSubmit:(u,{setSubmitting:g,setFieldTouched:ee})=>{const X=Y(u,e);d(X,{onSuccess:()=>{n(),g(!1)},onError:()=>{g(!1)}})}}),{isSubmitting:t,setFieldValue:b,values:h}=o,a=t||m;return s.jsx(Q,{formik:o,children:s.jsxs(l,{spacing:2,children:[s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Comercial *"}),s.jsx(p,{size:"small",name:"commercialName",disabled:a,required:!0,placeholder:"Comercio ..."})]}),s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Fiscal"}),s.jsx(p,{size:"small",name:"fiscalName",disabled:a,placeholder:"Comercio S.A. de C.V. ..."})]}),s.jsxs(l,{flexDirection:{xs:"column",md:"row"},gap:3,children:[s.jsxs(l,{spacing:1,flex:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"RFC"}),s.jsx(p,{size:"small",name:"rfc",disabled:a,placeholder:"XXXXXXXXX ..."})]}),s.jsx(l,{flex:1,children:s.jsxs(W,{disabled:a,children:[s.jsx(Z,{id:"fiscal-type-person-group-label",sx:{color:"text.disabled",typography:"overline"},children:"Tipo de Persona"}),s.jsxs(K,{value:h.fiscalTypePerson,onChange:u=>{b("fiscalTypePerson",u.target.value)},row:!0,"aria-labelledby":"fiscal-type-person-group-label",name:"fiscalTypePerson",children:[s.jsx(L,{value:"1",control:s.jsx(w,{}),label:"Moral"}),s.jsx(L,{value:"2",control:s.jsx(w,{}),label:"Física"})]})]})})]}),s.jsxs(l,{direction:{xs:"column",md:"row"},spacing:3,children:[s.jsxs(l,{spacing:1,flex:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de empleados"}),s.jsx(p,{size:"small",name:"employeesNumber",type:"number",inputProps:{inputMode:"numeric",min:"1"},disabled:a,placeholder:"0"})]}),s.jsxs(l,{spacing:1,flex:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Número de sucursales"}),s.jsx(p,{size:"small",name:"branchesNumber",disabled:a,placeholder:"0",type:"number",inputProps:{inputMode:"numeric",min:"1"}})]})]}),s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Dirección Postal"}),s.jsx(p,{size:"small",name:"postalAddress",multiline:!0,disabled:a,rows:2,placeholder:"..."})]}),s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Números Telefónicos"}),s.jsx(p,{size:"small",name:"phoneNumbers",disabled:a,placeholder:"(00)-0000 000... , (00) 0000 000..."})]}),s.jsxs(l,{flex:1,spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Terminal Cobro Pública *"}),s.jsx(U,{size:"small",name:"publicTerminal",disabled:a,options:(e==null?void 0:e.terminals)||[],textFieldParams:{placeholder:"Seleccionar ...",size:"small"}})]}),((z=e==null?void 0:e.terminals)==null?void 0:z.length)>0&&s.jsxs(l,{spacing:1,children:[s.jsx(i,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Liga de cobro (Slug)"}),s.jsx(p,{size:"small",name:"terminalCommerceSlug",disabled:a,placeholder:"mi_comercio ..."})]}),s.jsxs(l,{spacing:1,children:[s.jsx(i,{variant:"overline",sx:{color:"text.disabled",width:1},children:"Logo (Max - 3MB - png,svg,webp):"}),s.jsx(V,{name:"commerceLogo",maxSize:3145728,accept:{"image/*":[".svg",".webp",".png"]}})]}),s.jsx(l,{pt:2,children:s.jsx(q,{loading:t,variant:"contained",color:"primary",fullWidth:!0,type:"submit",sx:{fontWeight:"bold"},children:"Guardar"})})]})})}J.propTypes={commerce:r.shape({information:r.shape({branchesNumber:r.string,logo:r.any,commercialName:r.string,employeesNumber:r.string,fiscalName:r.string,fiscalTypePerson:r.string,phoneNumbers:r.string,postalAddress:r.string,publicTerminal:r.any,rfc:r.string,terminalCommerceSlug:r.string}),terminals:r.array}),onSuccess:r.func};export{J as default};
