import{c as O,f as B,a9 as y,r as N,e as R,i as t,B as A,S as c,O as P,T as S,x as k}from"./vendor-CEMfbhOc.js";import{g as M,a as w,a8 as v}from"./index-B-U8M-8N.js";import{c as z,F as T,g as I,u as h}from"./FundingOrders-BUVI52IW.js";import{g as D}from"./cardTypes-NmdqE8Eh.js";import{S as L,M as G}from"./MaterialDataTable-CDmLz-NL.js";import{u as K}from"./useMaterialTable-9wOa4uxn.js";import"./index-BdTlPQ76.js";import"./iconBase-D_ql85QS.js";import"./operationTypes-BbkqNKhX.js";import"./viabo-card-CcTpX9JZ.js";import"./viabo-pay-Tb0TUikx.js";import"./TextMaxLine-D6XZvUuW.js";import"./formik.esm-Dshy1xjd.js";import"./formatTime-mlJJpQBT.js";import"./matchTypes-BFKCRNnN.js";import"./UploadSingleFile-B0jkdwVt.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./formatNumber-Df8NwpjV.js";import"./cardMovementsAdapter-ocC5swCp.js";import"./crypto--V-xCCVf.js";import"./HeaderPage-DRv2GeZX.js";import"./AmexLogo-DsyshqEq.js";import"./CarnetLogo-BssSE0Ex.js";import"./MasterCardLogo-Bcn9gvbj.js";import"./VisaLogo-ByWQmEg7.js";const Q=(r,n)=>({fundingOrderId:r==null?void 0:r.id,conciliationNumber:n==null?void 0:n.id}),V=(r={})=>{const n=O(),o=B(z,r);return{...o,mutate:async(u,a)=>{const{onSuccess:s,onError:l,mutationOptions:m}=a;try{await y.promise(o.mutateAsync(u,m),{pending:"Conciliando orden de fondeo ...",success:{render({data:i}){return n.invalidateQueries([T.LIST]),s(i),"Se creó la conciliación con éxito"}}})}catch(i){const p=M(i,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");l(p),y.error(p,{type:w(i)})}}}},W=(r,n={})=>{const[o,d]=N.useState(null);return{...R([T.MOVEMENTS,r==null?void 0:r.id],()=>I(r),{staleTime:6e4,refetchOnWindowFocus:!1,onError:a=>{const s=M(a,"No se puede obtener los movimientos de la cuenta");d(s),y.error(s,{type:w(a)})},...n}),error:o||null}},he=()=>{var f;const r=h(e=>e.openConciliateModal),n=h(e=>e.setOpenConciliateModal),o=h(e=>e.fundingOrder),d=h(e=>e.setFundingOrder),{mutate:u,isLoading:a}=V(),s=[{accessorKey:"description",header:"Movimiento",size:100},{accessorKey:"date",header:"Fecha",size:100},{accessorKey:"amountFormat",header:"Monto",size:100}],{data:l,isError:m,error:i,isLoading:p,isFetching:j}=W(o,{enabled:!!o}),g=D(o==null?void 0:o.paymentProcessorName),F=g==null?void 0:g.component,x=K(m,i,{columns:s,data:(l==null?void 0:l.movements)||[],enableColumnPinning:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowSelection:!0,enableMultiRowSelection:!1,positionActionsColumn:"last",enableDensityToggle:!1,enableColumnResizing:!1,initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:p,showAlertBanner:m,showProgressBars:j},muiTablePaperProps:{elevation:0,sx:e=>({borderRadius:0,backgroundColor:e.palette.background.neutral})},muiBottomToolbarProps:{sx:e=>({backgroundColor:e.palette.background.neutral})},muiTopToolbarProps:{sx:e=>({backgroundColor:e.palette.background.neutral})},displayColumnDefOptions:{"mrt-row-select":{maxSize:10,header:""}},renderToolbarInternalActions:({table:e})=>t.jsx(A,{children:t.jsx(L,{table:e})}),muiTableContainerProps:{sx:{maxHeight:"md"}}}),b=((f=x==null?void 0:x.getSelectedRowModel().flatRows)==null?void 0:f.map(e=>e.original))??[],E=()=>{if((b==null?void 0:b.length)>0){const e=Q(o,b[0]);u(e,{onSuccess:()=>{C()},onError:()=>{}})}else y.warn("Debe seleccionar un movimiento para conciliar la orden de fondeo")},C=()=>{n(!1),d(null)};return t.jsx(v,{onClose:C,onSuccess:E,isSubmitting:a,fullWidth:!0,scrollType:"body",title:"Conciliar",textButtonSuccess:"Conciliar",open:r,children:t.jsxs(c,{spacing:3,sx:{py:3},children:[t.jsx(P,{severity:"info",sx:{display:"flex",flexGrow:1,"& .MuiAlert-message":{display:"flex",flexGrow:1}},children:t.jsxs(c,{flexGrow:1,spacing:2,direction:"row",justifyContent:"space-between",alignItems:"center",children:[t.jsxs(c,{children:[t.jsxs(S,{variant:"subtitle2",children:["Orden #",o==null?void 0:o.referenceNumber]}),t.jsx(S,{variant:"subtitle2",fontWeight:"bold",children:o==null?void 0:o.amount})]}),t.jsx(c,{children:g&&t.jsx(F,{sx:{width:30,height:30}})})]})}),t.jsx(c,{children:t.jsx(k,{children:t.jsx(G,{table:x})})})]})})};export{he as default};
//# sourceMappingURL=ConciliateModal-BAuaFQFQ.js.map