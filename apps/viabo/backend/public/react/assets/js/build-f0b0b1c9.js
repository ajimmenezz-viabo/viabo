import{k as F,a as S,Y as l,g as f,b as x,j as n,S as g,T as C}from"./index-66cb75df.js";import{i as O}from"./build-1340cc8b.js";import{a as y,F as h,u as a}from"./build-eb999ccf.js";import{a as j}from"./build-2883e9ba.js";import{W as E}from"./build-b8146948.js";import"./build-708407b9.js";import"./build-1ee72508.js";import"./build-8fb582f0.js";import"./build-b463c8f6.js";import"./build-9d3fe41c.js";import"./build-f58640b5.js";import"./build-7b5d6586.js";import"./build-1f27af78.js";import"./build-7226c475.js";import"./build-6d8fb990.js";import"./build-27a4b8f9.js";import"./build-8a357111.js";import"./build-bd32fad9.js";import"./build-6421e956.js";import"./build-bee6630b.js";import"./build-4d1efd89.js";import"./build-a6202e80.js";import"./build-0e88a906.js";import"./build-ac9daf3f.js";import"./build-888818c8.js";import"./build-3eb05f86.js";import"./build-83d17a75.js";import"./build-899176f2.js";import"./build-33d27e57.js";import"./build-722d29d2.js";const A=(c={})=>{const r=F(),o=S(y,c);return{...o,mutate:async(d,p={})=>{const{onSuccess:t,onError:i,mutationOptions:e}=p;try{await l.promise(o.mutateAsync(d,e),{pending:"Cancelando orden de fondeo ...",success:{render({data:s}){return r.invalidateQueries([h.LIST]),O(t)&&t(s),"Se canceló la orden de fondeo con éxito"}}})}catch(s){const u=f(s,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");O(i)&&i(u),l.error(u,{type:x(s)})}}}},te=()=>{const c=a(e=>e.setFundingOrder),r=a(e=>e.fundingOrder),o=a(e=>e.setOpenCancelFundingOrder),m=a(e=>e.openCancelFundingOrder),{mutate:d,isLoading:p}=A(),t=()=>{o(!1),c(null)},i=()=>{t(),d({id:r==null?void 0:r.id})};return n.jsx(j,{title:"Cancelar Orden de Fondeo",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:t,open:m,isSubmitting:p,description:n.jsx(g,{spacing:2,children:n.jsxs(g,{direction:"row",alignItems:"center",spacing:1,children:[n.jsx(E,{}),n.jsx(C,{children:"¿Está seguro de cancelar esta orden de fondeo?"})]})}),onSuccess:i,fullWidth:!0,maxWidth:"xs"})};export{te as default};
