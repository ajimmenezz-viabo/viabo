import{k as F,a as S,Q as l,g as f,b as x,j as n,S as g,T as C}from"./index-x-tL3MOy.js";import{i as O}from"./build-XMbFjTpc.js";import{a as y,F as h,u as a}from"./build-IHZgIfoS.js";import{M as j}from"./build-OIGRQKXP.js";import{W as E}from"./build--EZ-wUnK.js";import"./build-yw6dnA5g.js";import"./build-Pt2-zlVs.js";import"./build-3JmeY1AD.js";import"./build-mZf3ZGCw.js";import"./build-rDZAP2eW.js";import"./build-fO9Z8l-Y.js";import"./build-WksAqt8r.js";import"./build-P_JIiLI3.js";import"./build-Q1bOWlNZ.js";import"./build-aXq1ykHm.js";import"./build-YUdFPXK7.js";import"./build-EckPbxwb.js";import"./build-GMGSYTt0.js";import"./build-f4JKtdjp.js";import"./build-iPi1GP4n.js";import"./build-EUAVn8Jf.js";import"./build-zw289rNM.js";import"./build-SWnGRRxs.js";import"./build-GKTonalM.js";import"./build-D1gP2gt3.js";import"./build-zH8OCAbq.js";import"./build-zEF68lUW.js";import"./build-eCwt9U-A.js";import"./build-RTCxoqUU.js";import"./build-Kbx5ZuUJ.js";import"./build-Uc7vb3zK.js";import"./build-2TgacLCq.js";import"./build-3y5AuJst.js";import"./build-TmPCBBAV.js";const A=(c={})=>{const r=F(),o=S(y,c);return{...o,mutate:async(d,p={})=>{const{onSuccess:t,onError:i,mutationOptions:e}=p;try{await l.promise(o.mutateAsync(d,e),{pending:"Cancelando orden de fondeo ...",success:{render({data:s}){return r.invalidateQueries([h.LIST]),O(t)&&t(s),"Se canceló la orden de fondeo con éxito"}}})}catch(s){const u=f(s,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");O(i)&&i(u),l.error(u,{type:x(s)})}}}},se=()=>{const c=a(e=>e.setFundingOrder),r=a(e=>e.fundingOrder),o=a(e=>e.setOpenCancelFundingOrder),m=a(e=>e.openCancelFundingOrder),{mutate:d,isLoading:p}=A(),t=()=>{o(!1),c(null)},i=()=>{t(),d({id:r==null?void 0:r.id})};return n.jsx(j,{title:"Cancelar Orden de Fondeo",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:t,open:m,isSubmitting:p,description:n.jsx(g,{spacing:2,children:n.jsxs(g,{direction:"row",alignItems:"center",spacing:1,children:[n.jsx(E,{}),n.jsx(C,{children:"¿Está seguro de cancelar esta orden de fondeo?"})]})}),onSuccess:i,fullWidth:!0,maxWidth:"xs"})};export{se as default};