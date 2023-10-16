import{y as _,j as n,as as S,at as b,a9 as y,r as D,d as j,g as T,a0 as M,b as O,aa as v,aw as f,ba as F,bb as z,S as h,T as N,ab as A,ac as E,P as R,a5 as L}from"./index-be176464.js";import"./build-726930e2.js";import{M as w}from"./build-6bd3f839.js";import{V as B}from"./build-1c3bacef.js";import{B as U}from"./build-156a6049.js";import{a as V}from"./build-a5ba83d8.js";import{g as H}from"./build-b7da0f7f.js";import{g as k}from"./build-f86e02cf.js";import{L as K}from"./build-3fdf003c.js";import{C as G}from"./build-bf8ea840.js";import{g as I}from"./build-f0aa92ba.js";import{f as Y}from"./build-8047ff64.js";import{f as x,b as $,H as Q}from"./build-199169fb.js";import{C as W}from"./build-a3d9f42b.js";const q=_(n.jsx("path",{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"}),"AddTask"),J=[{id:6,name:"PENDIENTE",color:"warning"},{id:7,name:"PAGADA",color:"primary"},{id:8,name:"CANCELADA",color:"error"},{id:9,name:"LIQUIDADA",color:"success"}],X=t=>{var a;return((a=J.find(s=>{var e;return s.name===((e=t==null?void 0:t.toLowerCase())==null?void 0:e.toUpperCase())}))==null?void 0:a.color)||"info"},Z=t=>G(t),d=t=>{var a;return(t==null?void 0:t.statusName)==="Pagada"?(a=t==null?void 0:t.payCashData)==null?void 0:a.date:(t==null?void 0:t.statusName)==="Liquidada"?t==null?void 0:t.conciliationDate:(t==null?void 0:t.statusName)==="Cancelada"?t==null?void 0:t.cancellationDate:t==null?void 0:t.registerDate},P=t=>{var c,o,l,m,C;let a="";t!=null&&t.spei&&(t!=null&&t.referencePayCash)&&t.spei!==""&&t.referencePayCash!==""?a="SPEI,PAYCASH":t!=null&&t.spei&&t.spei!==""?a="SPEI":t!=null&&t.referencePayCash&&t.referencePayCash!==""&&(a="PAYCASH");const s=t!=null&&t.registerDate?S(new Date(t==null?void 0:t.registerDate),"dd MMM yyyy",{locale:b}):"",e=t!=null&&t.registerDate?S(new Date(t==null?void 0:t.registerDate),"p"):"",i=d(t);return{id:t==null?void 0:t.id,cardId:t==null?void 0:t.cardId,cardNumber:t==null?void 0:t.cardNumber,paymentProcessorName:t==null?void 0:t.paymentProcessorName,paymentMethods:a,referenceNumber:t==null?void 0:t.referenceNumber,amount:Y(t==null?void 0:t.amount),status:t==null?void 0:t.statusName,date:t==null?void 0:t.registerDate,registerDate:{fullDate:x(t==null?void 0:t.registerDate),time:e,date:s},spei:t==null?void 0:t.spei,emails:(c=t==null?void 0:t.emails)==null?void 0:c.split(","),conciliatedName:(t==null?void 0:t.conciliated)!=="No"?"Conciliada":"Sin Conciliar",conciliated:(t==null?void 0:t.conciliated)!=="No",conciliationInfo:{number:t==null?void 0:t.conciliationNumber,userId:t==null?void 0:t.conciliationUserId,userName:t==null?void 0:t.conciliationUserName,date:t!=null&&t.conciliationDate?x(t==null?void 0:t.conciliationDate):""},cancelationInfo:{userId:t==null?void 0:t.canceledByUserId,userName:t==null?void 0:t.canceledByUserName,date:t==null?void 0:t.cancellationDate},payCash:t==null?void 0:t.referencePayCash,payCashURLS:t==null?void 0:t.instructionsUrls,paymentInfo:{folio:(o=t==null?void 0:t.payCashData)==null?void 0:o.folio,authorizationCode:(l=t==null?void 0:t.payCashData)==null?void 0:l.authorizationCode,date:(m=t==null?void 0:t.payCashData)!=null&&m.date?x((C=t==null?void 0:t.payCashData)==null?void 0:C.date):""},lastStatusDate:i?x(i):""}},r=t=>{const a=I(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return P(a)},tt=t=>{const a=I(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return a==null?void 0:a.map(s=>P(s))},at={LIST:"funding-orders-list",MOVEMENTS:"conciliate-movements",DETAILS:"funding-order-details"},et=async()=>{const{data:t}=await y.get("/api/funding-orders");return tt(t)},bt=async t=>{const{data:a}=await y.get(`/api/funding-order/${t==null?void 0:t.id}`);return r(a)},jt=async t=>{const{data:a}=await y.get(`/api/master-card/movements/unreconciled?fundingOrderId=${t==null?void 0:t.id}`);return Z(a)},Tt=async t=>{const{data:a}=await y.put("/api/funding-order/conciliation",t);return a},Mt=async t=>{const{data:a}=await y.put(`/api/funding-order/cancel/${t==null?void 0:t.id}`);return a},st=(t={})=>{const[a,s]=D.useState(null);return{...j([at.LIST],et,{staleTime:6e4,refetchOnWindowFocus:!1,onError:i=>{const c=T(i,"No se puede obtener las ordenes de fondeo");s(c),M.error(c,{type:O(i)})},...t}),error:a||null}},nt={openConciliateModal:!1,openCancelFundingOrder:!1,openDetailsFundingOrder:!1,fundingOrder:null},it=(t,a)=>({...nt,setOpenConciliateModal:s=>{t(e=>({openConciliateModal:s}),!1,"SET_OPEN_CONCILIATE_MODAL")},setFundingOrder:s=>{t(e=>({fundingOrder:s}),!1,"SET_FUNDING_ORDER")},setOpenCancelFundingOrder:s=>{t(e=>({openCancelFundingOrder:s}),!1,"SET_OPEN_CANCEL_FUNDING_ORDER")},setOpenDetailsFundingOrder:s=>{t(e=>({openDetailsFundingOrder:s}),!1,"SET_OPEN_DETAILS_FUNDING_ORDER")}}),p=v(it);function ct(t,a){const{original:s}=t,{status:e}=s,i=e==="Pendiente",c=e==="Pagada",o=p(u=>u.setFundingOrder),l=p(u=>u.setOpenConciliateModal),m=p(u=>u.setOpenCancelFundingOrder),C=p(u=>u.setOpenDetailsFundingOrder),g=[n.jsxs(f,{onClick:()=>{o(s),C(!0),a()},sx:{m:0},children:[n.jsx(F,{children:n.jsx(B,{color:"info"})}),"Ver Detalles"]},0)];return(c||i)&&g.push(n.jsxs(f,{onClick:()=>{o(s),l(!0),a()},sx:{m:0},children:[n.jsx(F,{children:n.jsx(q,{color:"success"})}),"Conciliar"]},1)),i&&g.push(n.jsxs(f,{onClick:()=>{o(s),m(!0),a()},sx:{m:0},children:[n.jsx(F,{children:n.jsx(z,{color:"error"})}),"Cancelar"]},2)),g}const lt=[{accessorKey:"referenceNumber",header:"Referencia",enableHiding:!1,size:100},{accessorKey:"paymentProcessorName",header:"Cuenta",size:100,filterVariant:"multi-select",Cell:({cell:t,column:a,row:s})=>{const{original:e}=s,i=H(e==null?void 0:e.paymentProcessorName),c=i==null?void 0:i.component;return n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:i&&n.jsx(c,{sx:{width:30,height:30}})})}},{accessorKey:"amount",header:"Monto",size:100,Cell:({cell:t,column:a,row:s,renderedCellValue:e})=>n.jsx(N,{variant:"subtitle2",fontWeight:"bold",children:e})},{accessorKey:"date",header:"Fecha",size:100,Cell:({cell:t,column:a,row:s})=>{var i,c;const{original:e}=s;return n.jsxs(h,{children:[n.jsx(N,{variant:"subtitle2",children:(i=e==null?void 0:e.registerDate)==null?void 0:i.date}),n.jsx(N,{variant:"body2",sx:{color:"text.secondary"},children:(c=e==null?void 0:e.registerDate)==null?void 0:c.time})]})}},{accessorKey:"paymentMethods",header:"Método(s)",size:100,filterVariant:"multi-select",Cell:({cell:t,column:a,row:s})=>{var o;const{original:e}=s,i=[],c=((o=e==null?void 0:e.paymentMethods)==null?void 0:o.split(","))||[];return c==null||c.forEach(l=>{const m=k(l);m&&i.push({component:m==null?void 0:m.component,width:l==="PAYCASH"?50:30,height:l==="PAYCASH"?50:30})}),n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:i==null?void 0:i.map(({component:l,width:m,height:C},g)=>n.jsx(l,{sx:{width:m,height:C}},g))})}},{accessorKey:"status",header:"Estado",filterVariant:"multi-select",size:100,Cell:({cell:t,column:a,row:s})=>{const{original:e}=s,i=X(e==null?void 0:e.status);return n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:n.jsx(K,{variant:"ghost",color:i,sx:{textTransform:"capitalize"},children:e==null?void 0:e.status})})}},{accessorKey:"conciliatedName",header:"¿Conciliada?",filterVariant:"multi-select",size:110,Cell:({cell:t,column:a,row:s})=>{const{original:e}=s;return n.jsx(h,{flexDirection:"row",width:1,justifyContent:"center",alignItems:"center",gap:1,color:"primary",children:e!=null&&e.conciliated?n.jsx(V,{color:"green",fontWeight:"bold",fontSize:"20px"}):n.jsx(U,{fontSize:"20px",color:"red"})})}}],ot=()=>{const{data:t,isError:a,isLoading:s,isFetching:e,error:i}=st(),c=lt;return n.jsx(W,{children:n.jsx(w,{enablePinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:c,data:t||[],isError:a,textError:i,selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:s,showAlertBanner:a,showProgressBars:e},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",minSize:80},"mrt-row-select":{size:10}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},renderRowActionMenuItems:({closeMenu:o,row:l})=>ct(l,o)})})},mt=A(D.lazy(()=>E(()=>import("./build-20758de7.js"),["assets/js/build-20758de7.js","assets/js/index-be176464.js","assets/css/build-f63bc8fe.css","assets/js/build-b7da0f7f.js","assets/js/build-199169fb.js","assets/js/build-bc852905.js","assets/js/build-aeaad37b.js","assets/js/build-112d79ca.js","assets/js/build-59cb91f6.js","assets/js/build-eff8b675.js","assets/js/build-6bd3f839.js","assets/js/build-b46d1600.js","assets/js/build-865f3cc7.js","assets/js/build-7cb492e3.js","assets/js/build-f0aa92ba.js","assets/js/build-3edaa701.js","assets/js/build-726930e2.js","assets/js/build-a3d9f42b.js","assets/js/build-1c3bacef.js","assets/js/build-156a6049.js","assets/js/build-d6c61d92.js","assets/js/build-a5ba83d8.js","assets/js/build-f86e02cf.js","assets/js/build-83d17a75.js","assets/js/build-899176f2.js","assets/js/build-3fdf003c.js","assets/js/build-f1e2ed79.js","assets/js/build-8047ff64.js","assets/js/build-bee6630b.js","assets/js/build-bf8ea840.js"]))),ut=A(D.lazy(()=>E(()=>import("./build-76638f93.js"),["assets/js/build-76638f93.js","assets/js/index-be176464.js","assets/css/build-f63bc8fe.css","assets/js/build-f3d6ad6d.js","assets/js/build-726930e2.js","assets/js/build-f0aa92ba.js","assets/js/build-6bd3f839.js","assets/js/build-b46d1600.js","assets/js/build-865f3cc7.js","assets/js/build-bc852905.js","assets/js/build-199169fb.js","assets/js/build-aeaad37b.js","assets/js/build-112d79ca.js","assets/js/build-7cb492e3.js","assets/js/build-3edaa701.js","assets/js/build-07913b04.js","assets/js/build-1c3bacef.js","assets/js/build-156a6049.js","assets/js/build-d6c61d92.js","assets/js/build-a5ba83d8.js","assets/js/build-b7da0f7f.js","assets/js/build-59cb91f6.js","assets/js/build-eff8b675.js","assets/js/build-f86e02cf.js","assets/js/build-83d17a75.js","assets/js/build-899176f2.js","assets/js/build-3fdf003c.js","assets/js/build-f1e2ed79.js","assets/js/build-8047ff64.js","assets/js/build-bee6630b.js","assets/js/build-bf8ea840.js","assets/js/build-a3d9f42b.js"]))),pt=A(D.lazy(()=>E(()=>import("./build-3f68c814.js"),["assets/js/build-3f68c814.js","assets/js/index-be176464.js","assets/css/build-f63bc8fe.css","assets/js/build-156a6049.js","assets/js/build-d6c61d92.js","assets/js/build-a5ba83d8.js","assets/js/build-f86e02cf.js","assets/js/build-83d17a75.js","assets/js/build-899176f2.js","assets/js/build-3fdf003c.js","assets/js/build-f1e2ed79.js","assets/js/build-865f3cc7.js","assets/js/build-bc852905.js","assets/js/build-8047ff64.js","assets/js/build-bee6630b.js","assets/js/build-112d79ca.js","assets/js/build-eb025cba.js","assets/js/build-22cfdd14.js","assets/js/build-f0aa92ba.js","assets/js/build-3e2825f2.js","assets/js/build-a3d9f42b.js","assets/js/build-8a3d443f.js","assets/js/build-0d6b0eaf.js","assets/js/build-726930e2.js","assets/js/build-6bd3f839.js","assets/js/build-b46d1600.js","assets/js/build-199169fb.js","assets/js/build-aeaad37b.js","assets/js/build-7cb492e3.js","assets/js/build-3edaa701.js","assets/js/build-1c3bacef.js","assets/js/build-b7da0f7f.js","assets/js/build-59cb91f6.js","assets/js/build-eff8b675.js","assets/js/build-bf8ea840.js"]))),Ct=()=>{const t=p(s=>s.openConciliateModal),a=p(s=>s.openCancelFundingOrder);return p(s=>s.openDetailsFundingOrder),n.jsx(R,{title:"Órdenes de Fondeo",children:n.jsxs($,{children:[n.jsx(Q,{name:"Órdenes de Fondeo",links:[{name:"Inicio",href:L.root},{name:"Órdenes de Fondeo"}]}),n.jsx(ot,{}),t&&n.jsx(mt,{}),a&&n.jsx(ut,{}),n.jsx(pt,{})]})})},Ot=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"}));export{at as F,Mt as a,X as b,Tt as c,bt as d,Ot as e,jt as g,p as u};
