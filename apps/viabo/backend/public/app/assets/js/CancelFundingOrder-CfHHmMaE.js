import{c as F,f as S,a9 as l,i as t,S as g,a2 as f,T as x}from"./vendor-CEMfbhOc.js";import{g as y,a as C,y as h}from"./index-B-U8M-8N.js";import{i as O}from"./matchTypes-BFKCRNnN.js";import{a as E,F as j,u as a}from"./FundingOrders-BUVI52IW.js";import"./MaterialDataTable-CDmLz-NL.js";import"./index-BdTlPQ76.js";import"./iconBase-D_ql85QS.js";import"./cardTypes-NmdqE8Eh.js";import"./AmexLogo-DsyshqEq.js";import"./CarnetLogo-BssSE0Ex.js";import"./MasterCardLogo-Bcn9gvbj.js";import"./VisaLogo-ByWQmEg7.js";import"./operationTypes-BbkqNKhX.js";import"./viabo-card-CcTpX9JZ.js";import"./viabo-pay-Tb0TUikx.js";import"./TextMaxLine-D6XZvUuW.js";import"./formik.esm-Dshy1xjd.js";import"./formatTime-mlJJpQBT.js";import"./UploadSingleFile-B0jkdwVt.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./formatNumber-Df8NwpjV.js";import"./cardMovementsAdapter-ocC5swCp.js";import"./crypto--V-xCCVf.js";import"./HeaderPage-DRv2GeZX.js";const A=(c={})=>{const n=F(),o=S(E,c);return{...o,mutate:async(d,p={})=>{const{onSuccess:r,onError:i,mutationOptions:e}=p;try{await l.promise(o.mutateAsync(d,e),{pending:"Cancelando orden de fondeo ...",success:{render({data:s}){return n.invalidateQueries([j.LIST]),O(r)&&r(s),"Se canceló la orden de fondeo con éxito"}}})}catch(s){const u=y(s,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");O(i)&&i(u),l.error(u,{type:C(s)})}}}},X=()=>{const c=a(e=>e.setFundingOrder),n=a(e=>e.fundingOrder),o=a(e=>e.setOpenCancelFundingOrder),m=a(e=>e.openCancelFundingOrder),{mutate:d,isLoading:p}=A(),r=()=>{o(!1),c(null)},i=()=>{r(),d({id:n==null?void 0:n.id})};return t.jsx(h,{title:"Cancelar Orden de Fondeo",typeAlert:"warning",textButtonSuccess:"Si, estoy de acuerdo",onClose:r,open:m,isSubmitting:p,description:t.jsx(g,{spacing:2,children:t.jsxs(g,{direction:"row",alignItems:"center",spacing:1,children:[t.jsx(f,{}),t.jsx(x,{children:"¿Está seguro de cancelar esta orden de fondeo?"})]})}),onSuccess:i,fullWidth:!0,maxWidth:"xs"})};export{X as default};
//# sourceMappingURL=CancelFundingOrder-CfHHmMaE.js.map