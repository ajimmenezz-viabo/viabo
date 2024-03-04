import{c as V,f as j,a9 as C,r as E,i as n,S,X as b,B as A,P as e}from"./vendor-CEMfbhOc.js";import{u as B}from"./formik.esm-Dshy1xjd.js";import{c as I,M}from"./ManagementCommerces-DDCvWLrr.js";import{g as P,a as T,C as z}from"./index-B-U8M-8N.js";import{g as F}from"./operationTypes-BbkqNKhX.js";import{F as O,a as N}from"./TextMaxLine-D6XZvUuW.js";import{i as k}from"./matchTypes-BFKCRNnN.js";import"./managementCommercesAdapter-Du8A3KZc.js";import"./processList-CzVvLx1j.js";import"./crypto--V-xCCVf.js";import"./formatTime-mlJJpQBT.js";import"./MaterialDataTable-CDmLz-NL.js";import"./useMaterialTable-9wOa4uxn.js";import"./HeaderPage-DRv2GeZX.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./viabo-card-CcTpX9JZ.js";import"./viabo-pay-Tb0TUikx.js";import"./UploadSingleFile-B0jkdwVt.js";import"./formatNumber-Df8NwpjV.js";const w=(a={})=>{const f=V(),s=j(I,a);return{...s,mutate:async(i,o)=>{const{onSuccess:l,onError:u,mutationOptions:m}=o;try{await C.promise(s.mutateAsync(i,m),{pending:"Actualizando Servicio ...",success:{render({data:r}){return f.invalidateQueries([M.COMMERCE_LIST]),k(l)&&l(r),"Se actualizo el servicio del comercio con éxito"}}})}catch(r){const d=P(r,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");k(u)&&u(d),C.error(d,{type:T(r)})}}}},y=[{name:"VIABO CARD",type:"2",formikValue:"viaboCard"},{name:"VIABO PAY",type:"1",formikValue:"viaboPay"},{name:"NUBE",type:"3",formikValue:"cloud"}],R=({commerce:a})=>{var g;const{mutate:f,isLoading:s}=w(),[x,i]=E.useState(null),o=(g=a==null?void 0:a.services)==null?void 0:g.catalog,l=E.useMemo(()=>y==null?void 0:y.map(t=>{const p=F(t==null?void 0:t.name);return{...t,logo:p==null?void 0:p.component}}),[y]),u=B({initialValues:{viaboPay:(o==null?void 0:o.some(t=>(t==null?void 0:t.type)==="1"))||!1,viaboCard:(o==null?void 0:o.some(t=>(t==null?void 0:t.type)==="2"))||!1,cloud:(o==null?void 0:o.some(t=>(t==null?void 0:t.type)==="3"))||!1},enableReinitialize:!0}),{values:m,setFieldValue:r}=u,d=t=>p=>{i(t==null?void 0:t.type);const h=!m[t==null?void 0:t.formikValue];f({commerceId:a==null?void 0:a.id,type:t==null?void 0:t.type,active:h?"1":"0"},{onSuccess:()=>{r(t==null?void 0:t.formikValue,h),i(null)},onError:()=>{i(null)}})};return n.jsx(O,{formik:u,children:n.jsx(S,{spacing:2,p:5,divider:n.jsx(b,{orientation:"horizontal",flexItem:!0,sx:{borderStyle:"dashed"}}),children:l==null?void 0:l.map(t=>{const p=t.logo;return n.jsxs(S,{justifyContent:"space-between",flexDirection:"row",alignItems:"center",children:[p&&n.jsx(A,{py:1,children:n.jsx(p,{sx:{width:35,height:35}})}),x===(t==null?void 0:t.type)?n.jsx(z,{size:30,containerProps:{display:"flex",ml:1}}):n.jsx(N,{disabled:s,size:"md",color:m[t==null?void 0:t.formikValue]?"success":"error",checked:!!m[t==null?void 0:t.formikValue]||!1,inputProps:{"aria-label":"controlled"},onChange:d(t)})]},t==null?void 0:t.name)})})})};R.propTypes={commerce:e.shape({id:e.any,services:e.shape({catalog:e.array})})};export{R as default};
//# sourceMappingURL=ServicesForm-DWO8lLAg.js.map