import{k as F,a as S,Q as l,g as f,b as x,j as n,S as g,T as C}from"./index-5b9abb5d.js";import{i as O}from"./build-102bf6ff.js";import{a as y,F as h,u as a}from"./build-f4560446.js";import{M as j}from"./build-e097666d.js";import{W as E}from"./build-48aa7e01.js";import"./build-f8705fa2.js";import"./build-90852445.js";import"./build-6bc3e71f.js";import"./build-cd679c67.js";import"./build-a4831788.js";import"./build-6bf4add6.js";import"./build-749e2f01.js";import"./build-dfaaa189.js";import"./build-17708e30.js";import"./build-0307e86f.js";import"./build-71e28a4a.js";import"./build-559b3bfe.js";import"./build-62079204.js";import"./build-a8f597ad.js";import"./build-d3853b32.js";import"./build-1c3a34e7.js";import"./build-069ad97e.js";import"./build-8f348ddc.js";import"./build-d32e47e5.js";import"./build-ab61dd8b.js";import"./build-3a978d3e.js";import"./build-e33dd52a.js";import"./build-475a8c0d.js";import"./build-e39b555e.js";import"./build-bee6630b.js";import"./build-7e51684f.js";import"./build-ae4e085b.js";const A=(c={})=>{const r=F(),o=S(y,c);return{...o,mutate:async(d,p={})=>{const{onSuccess:t,onError:i,mutationOptions:e}=p;try{await l.promise(o.mutateAsync(d,e),{pending:"Cancelando orden de fondeo ...",success:{render({data:s}){return r.invalidateQueries([h.LIST]),O(t)&&t(s),"Se canceló la orden de fondeo con éxito"}}})}catch(s){const u=f(s,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");O(i)&&i(u),l.error(u,{type:x(s)})}}}},oe=()=>{const c=a(e=>e.setFundingOrder),r=a(e=>e.fundingOrder),o=a(e=>e.setOpenCancelFundingOrder),m=a(e=>e.openCancelFundingOrder),{mutate:d,isLoading:p}=A(),t=()=>{o(!1),c(null)},i=()=>{t(),d({id:r==null?void 0:r.id})};return n.jsx(j,{title:"Cancelar Orden de Fondeo",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:t,open:m,isSubmitting:p,description:n.jsx(g,{spacing:2,children:n.jsxs(g,{direction:"row",alignItems:"center",spacing:1,children:[n.jsx(E,{}),n.jsx(C,{children:"¿Está seguro de cancelar esta orden de fondeo?"})]})}),onSuccess:i,fullWidth:!0,maxWidth:"xs"})};export{oe as default};