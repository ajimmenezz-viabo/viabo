import{c as F,f,a9 as l,i as t,V as g,a2 as x,T as C}from"./vendor-StReGf79.js";import{g as S,a as y,T as h}from"./index-mKe_odg3.js";import{i as O}from"./matchTypes-VzXr5CmM.js";import{a as E,F as j,u as a}from"./FundingOrders-WRD4ONJ9.js";import"./HeaderPage-fCD0eWYY.js";import"./fade-HpdRXKiE.js";import"./transition-Uc7vb3zK.js";import"./index.esm-vu-kmgCH.js";import"./iconBase-cjdMeG85.js";import"./cardTypes-2fVUpN-V.js";import"./AmexLogo-HKO7b419.js";import"./CarnetLogo-9N730tjt.js";import"./MasterCardLogo-31QJgBVq.js";import"./VisaLogo-WgMS-TBE.js";import"./operationTypes-4-tdTgKX.js";import"./viabo-card-zH8OCAbq.js";import"./viabo-pay-zEF68lUW.js";import"./TextMaxLine-Nybdgfc_.js";import"./formik.esm-ayHIcoJR.js";import"./UploadSingleFile-NVjHNA2_.js";import"./formatNumber-D2wM-uoj.js";import"./cardMovementsAdapter-fRoPhU7M.js";import"./crypto-DOZFMzid.js";import"./formatTime-j4oUQxO9.js";const A=(c={})=>{const n=F(),o=f(E,c);return{...o,mutate:async(d,p={})=>{const{onSuccess:r,onError:s,mutationOptions:e}=p;try{await l.promise(o.mutateAsync(d,e),{pending:"Cancelando orden de fondeo ...",success:{render({data:i}){return n.invalidateQueries([j.LIST]),O(r)&&r(i),"Se canceló la orden de fondeo con éxito"}}})}catch(i){const u=S(i,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");O(s)&&s(u),l.error(u,{type:y(i)})}}}},J=()=>{const c=a(e=>e.setFundingOrder),n=a(e=>e.fundingOrder),o=a(e=>e.setOpenCancelFundingOrder),m=a(e=>e.openCancelFundingOrder),{mutate:d,isLoading:p}=A(),r=()=>{o(!1),c(null)},s=()=>{r(),d({id:n==null?void 0:n.id})};return t.jsx(h,{title:"Cancelar Orden de Fondeo",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:r,open:m,isSubmitting:p,description:t.jsx(g,{spacing:2,children:t.jsxs(g,{direction:"row",alignItems:"center",spacing:1,children:[t.jsx(x,{}),t.jsx(C,{children:"¿Está seguro de cancelar esta orden de fondeo?"})]})}),onSuccess:s,fullWidth:!0,maxWidth:"xs"})};export{J as default};
//# sourceMappingURL=CancelFundingOrder--BUgQdvR.js.map