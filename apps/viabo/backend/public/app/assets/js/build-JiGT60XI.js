import{k as O,a as N,Q as y,g as M,b as j,r as B,d as R,j as t,B as k,d8 as A,S as c,a0 as P,T as S,N as v}from"./index-bz0JfzWC.js";import{c as z,F as w,g as I,u as h}from"./build-2Dhgq_CH.js";import{g as D}from"./build-iKPoJFGV.js";import{S as L,M as G}from"./build-AZMH2dGi.js";import{u as K}from"./build-bhlzmUkW.js";import"./build-nH9HniGq.js";import"./build-g0Kl8Qv9.js";import"./build-m-mEVbTu.js";import"./build-6FYqyEjf.js";import"./build-zH8OCAbq.js";import"./build-zEF68lUW.js";import"./build-UIJPclv6.js";import"./build-gHVnTrfc.js";import"./build-ZTcLKyR-.js";import"./build-FgzbiAP4.js";import"./build-JnDA2kJ8.js";import"./build-vUCIxQMA.js";import"./build-J55YvdEr.js";import"./build-Uc7vb3zK.js";import"./build--iAdUT6r.js";import"./build-1DdlkYHZ.js";import"./build-wLA-0OYY.js";import"./build-XunueIHm.js";import"./build-uVUyK5Wh.js";import"./build-tZH4gWSH.js";import"./build-f4rrdv3o.js";import"./build-LcHoFEF6.js";import"./build-WQmC1XzH.js";import"./build-kexvEVEW.js";import"./build-4NsTR_M5.js";import"./build-cHqgJp4i.js";const Q=(r,n)=>({fundingOrderId:r==null?void 0:r.id,conciliationNumber:n==null?void 0:n.id}),V=(r={})=>{const n=O(),o=N(z,r);return{...o,mutate:async(u,i)=>{const{onSuccess:s,onError:l,mutationOptions:m}=i;try{await y.promise(o.mutateAsync(u,m),{pending:"Conciliando orden de fondeo ...",success:{render({data:a}){return n.invalidateQueries([w.LIST]),s(a),"Se creó la conciliación con éxito"}}})}catch(a){const p=M(a,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");l(p),y.error(p,{type:j(a)})}}}},W=(r,n={})=>{const[o,d]=B.useState(null);return{...R([w.MOVEMENTS,r==null?void 0:r.id],()=>I(r),{staleTime:6e4,refetchOnWindowFocus:!1,onError:i=>{const s=M(i,"No se puede obtener los movimientos de la cuenta");d(s),y.error(s,{type:j(i)})},...n}),error:o||null}},Me=()=>{var f;const r=h(e=>e.openConciliateModal),n=h(e=>e.setOpenConciliateModal),o=h(e=>e.fundingOrder),d=h(e=>e.setFundingOrder),{mutate:u,isLoading:i}=V(),s=[{accessorKey:"description",header:"Movimiento",size:100},{accessorKey:"date",header:"Fecha",size:100},{accessorKey:"amountFormat",header:"Monto",size:100}],{data:l,isError:m,error:a,isLoading:p,isFetching:T}=W(o,{enabled:!!o}),g=D(o==null?void 0:o.paymentProcessorName),F=g==null?void 0:g.component,b=K(m,a,{columns:s,data:(l==null?void 0:l.movements)||[],enableColumnPinning:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowSelection:!0,enableMultiRowSelection:!1,positionActionsColumn:"last",enableDensityToggle:!1,enableColumnResizing:!1,initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:p,showAlertBanner:m,showProgressBars:T},muiTablePaperProps:{elevation:0,sx:e=>({borderRadius:0,backgroundColor:e.palette.background.neutral})},muiBottomToolbarProps:{sx:e=>({backgroundColor:e.palette.background.neutral})},muiTopToolbarProps:{sx:e=>({backgroundColor:e.palette.background.neutral})},displayColumnDefOptions:{"mrt-row-select":{maxSize:10,header:""}},renderToolbarInternalActions:({table:e})=>t.jsx(k,{children:t.jsx(L,{table:e})}),muiTableContainerProps:{sx:{maxHeight:"md"}}}),x=((f=b==null?void 0:b.getSelectedRowModel().flatRows)==null?void 0:f.map(e=>e.original))??[],E=()=>{if((x==null?void 0:x.length)>0){const e=Q(o,x[0]);u(e,{onSuccess:()=>{C()},onError:()=>{}})}else y.warn("Debe seleccionar un movimiento para conciliar la orden de fondeo")},C=()=>{n(!1),d(null)};return t.jsx(A,{onClose:C,onSuccess:E,isSubmitting:i,fullWidth:!0,scrollType:"body",title:"Conciliar",textButtonSuccess:"Conciliar",open:r,children:t.jsxs(c,{spacing:3,sx:{py:3},children:[t.jsx(P,{severity:"info",sx:{display:"flex",flexGrow:1,"& .MuiAlert-message":{display:"flex",flexGrow:1}},children:t.jsxs(c,{flexGrow:1,spacing:2,direction:"row",justifyContent:"space-between",alignItems:"center",children:[t.jsxs(c,{children:[t.jsxs(S,{variant:"subtitle2",children:["Orden #",o==null?void 0:o.referenceNumber]}),t.jsx(S,{variant:"subtitle2",fontWeight:"bold",children:o==null?void 0:o.amount})]}),t.jsx(c,{children:g&&t.jsx(F,{sx:{width:30,height:30}})})]})}),t.jsx(c,{children:t.jsx(v,{children:t.jsx(G,{table:b})})})]})})};export{Me as default};
