import{k as F,a as S,Q as l,g as f,b as x,j as n,S as g,T as C}from"./index-4598388a.js";import{i as O}from"./build-67977c10.js";import{a as y,F as h,u as a}from"./build-825ea37a.js";import{M as j}from"./build-e66be09a.js";import{W as E}from"./build-42b1ff9e.js";import"./build-a3ff9182.js";import"./build-5a5c5f07.js";import"./build-c52d07ca.js";import"./build-002795c1.js";import"./build-0672d956.js";import"./build-6273f162.js";import"./build-65a59fe1.js";import"./build-ff9321b7.js";import"./build-a6ca5fb2.js";import"./build-633032d6.js";import"./build-e872d097.js";import"./build-2e665ca4.js";import"./build-f32805fc.js";import"./build-8a3f4e6f.js";import"./build-40175313.js";import"./build-27d511bc.js";import"./build-a9e726a7.js";import"./build-c449aeae.js";import"./build-441a9fbc.js";import"./build-353c2f49.js";import"./build-ab61dd8b.js";import"./build-3a978d3e.js";import"./build-056efa0c.js";import"./build-50bbde61.js";import"./build-efce0394.js";import"./build-bee6630b.js";import"./build-a635d66e.js";import"./build-b76ffe54.js";import"./build-30afe32b.js";const A=(c={})=>{const r=F(),o=S(y,c);return{...o,mutate:async(d,p={})=>{const{onSuccess:t,onError:i,mutationOptions:e}=p;try{await l.promise(o.mutateAsync(d,e),{pending:"Cancelando orden de fondeo ...",success:{render({data:s}){return r.invalidateQueries([h.LIST]),O(t)&&t(s),"Se canceló la orden de fondeo con éxito"}}})}catch(s){const u=f(s,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");O(i)&&i(u),l.error(u,{type:x(s)})}}}},se=()=>{const c=a(e=>e.setFundingOrder),r=a(e=>e.fundingOrder),o=a(e=>e.setOpenCancelFundingOrder),m=a(e=>e.openCancelFundingOrder),{mutate:d,isLoading:p}=A(),t=()=>{o(!1),c(null)},i=()=>{t(),d({id:r==null?void 0:r.id})};return n.jsx(j,{title:"Cancelar Orden de Fondeo",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:t,open:m,isSubmitting:p,description:n.jsx(g,{spacing:2,children:n.jsxs(g,{direction:"row",alignItems:"center",spacing:1,children:[n.jsx(E,{}),n.jsx(C,{children:"¿Está seguro de cancelar esta orden de fondeo?"})]})}),onSuccess:i,fullWidth:!0,maxWidth:"xs"})};export{se as default};
