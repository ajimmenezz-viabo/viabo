import{c as F,f,a9 as l,i as t,V as g,a2 as x,T as C}from"./vendor-VdGvLetj.js";import{g as S,a as y,T as h}from"./index-W5_PJt9d.js";import{i as O}from"./matchTypes-Lmz382Bt.js";import{a as E,F as j,u as a}from"./FundingOrders-15-yz7s3.js";import"./HeaderPage-XC-NTdiG.js";import"./fade-HpdRXKiE.js";import"./transition-Uc7vb3zK.js";import"./index.esm-08iuFCQv.js";import"./iconBase-Qvi60nla.js";import"./cardTypes-Tbu19olq.js";import"./AmexLogo-JrdIJQxM.js";import"./CarnetLogo--tWhaH1b.js";import"./MasterCardLogo-eODEjC_o.js";import"./VisaLogo-uafCb8an.js";import"./operationTypes-jWV5LFk2.js";import"./viabo-card-zH8OCAbq.js";import"./viabo-pay-zEF68lUW.js";import"./TextMaxLine-WruMZtAJ.js";import"./formik.esm-qswtkH0w.js";import"./UploadSingleFile-6LMGjDBZ.js";import"./formatNumber-v_3o-PH6.js";import"./cardMovementsAdapter-aZlT15s7.js";import"./crypto-X2gsqmc7.js";import"./formatTime-26vjoVpy.js";const A=(c={})=>{const n=F(),o=f(E,c);return{...o,mutate:async(d,p={})=>{const{onSuccess:r,onError:s,mutationOptions:e}=p;try{await l.promise(o.mutateAsync(d,e),{pending:"Cancelando orden de fondeo ...",success:{render({data:i}){return n.invalidateQueries([j.LIST]),O(r)&&r(i),"Se canceló la orden de fondeo con éxito"}}})}catch(i){const u=S(i,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");O(s)&&s(u),l.error(u,{type:y(i)})}}}},J=()=>{const c=a(e=>e.setFundingOrder),n=a(e=>e.fundingOrder),o=a(e=>e.setOpenCancelFundingOrder),m=a(e=>e.openCancelFundingOrder),{mutate:d,isLoading:p}=A(),r=()=>{o(!1),c(null)},s=()=>{r(),d({id:n==null?void 0:n.id})};return t.jsx(h,{title:"Cancelar Orden de Fondeo",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:r,open:m,isSubmitting:p,description:t.jsx(g,{spacing:2,children:t.jsxs(g,{direction:"row",alignItems:"center",spacing:1,children:[t.jsx(x,{}),t.jsx(C,{children:"¿Está seguro de cancelar esta orden de fondeo?"})]})}),onSuccess:s,fullWidth:!0,maxWidth:"xs"})};export{J as default};
//# sourceMappingURL=CancelFundingOrder-w8tQyxx-.js.map