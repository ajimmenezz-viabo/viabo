import{z as _,j as n,as as E,at as b,a8 as y,r as D,d as j,g as T,Z as O,b as M,a9 as v,aw as F,b2 as f,b3 as z,S as h,T as N,aa as A,ab as S,P as R,a4 as L}from"./index-ead3f9df.js";import"./build-99510531.js";import{M as w}from"./build-ca75a273.js";import{V as B}from"./build-a2e5984e.js";import{g as U,B as V,a as H}from"./build-10f107d2.js";import{g as k}from"./build-67d030bf.js";import{L as K}from"./build-55e2f19b.js";import{C as G}from"./build-66873ba5.js";import{g as I}from"./build-c5107058.js";import{f as Y}from"./build-829758c5.js";import{f as x,b as $,H as Q}from"./build-0e7b58e0.js";import{C as W}from"./build-bf6b44a2.js";const q=_(n.jsx("path",{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"}),"AddTask"),Z=[{id:6,name:"PENDIENTE",color:"warning"},{id:7,name:"PAGADA",color:"primary"},{id:8,name:"CANCELADA",color:"error"},{id:9,name:"LIQUIDADA",color:"success"}],J=t=>{var e;return((e=Z.find(s=>{var a;return s.name===((a=t==null?void 0:t.toLowerCase())==null?void 0:a.toUpperCase())}))==null?void 0:e.color)||"info"},X=t=>G(t),d=t=>{var e;return(t==null?void 0:t.statusName)==="Pagada"?(e=t==null?void 0:t.payCashData)==null?void 0:e.date:(t==null?void 0:t.statusName)==="Liquidada"?t==null?void 0:t.conciliationDate:(t==null?void 0:t.statusName)==="Cancelada"?t==null?void 0:t.cancellationDate:t==null?void 0:t.registerDate},P=t=>{var c,o,l,m,C;let e="";t!=null&&t.spei&&(t!=null&&t.referencePayCash)&&t.spei!==""&&t.referencePayCash!==""?e="SPEI,PAYCASH":t!=null&&t.spei&&t.spei!==""?e="SPEI":t!=null&&t.referencePayCash&&t.referencePayCash!==""&&(e="PAYCASH");const s=t!=null&&t.registerDate?E(new Date(t==null?void 0:t.registerDate),"dd MMM yyyy",{locale:b}):"",a=t!=null&&t.registerDate?E(new Date(t==null?void 0:t.registerDate),"p"):"",i=d(t);return{id:t==null?void 0:t.id,cardId:t==null?void 0:t.cardId,cardNumber:t==null?void 0:t.cardNumber,paymentProcessorName:t==null?void 0:t.paymentProcessorName,paymentMethods:e,referenceNumber:t==null?void 0:t.referenceNumber,amount:Y(t==null?void 0:t.amount),status:t==null?void 0:t.statusName,date:t==null?void 0:t.registerDate,registerDate:{fullDate:x(t==null?void 0:t.registerDate),time:a,date:s},spei:t==null?void 0:t.spei,emails:(c=t==null?void 0:t.emails)==null?void 0:c.split(","),conciliatedName:(t==null?void 0:t.conciliated)!=="No"?"Conciliada":"Sin Conciliar",conciliated:(t==null?void 0:t.conciliated)!=="No",conciliationInfo:{number:t==null?void 0:t.conciliationNumber,userId:t==null?void 0:t.conciliationUserId,userName:t==null?void 0:t.conciliationUserName,date:t!=null&&t.conciliationDate?x(t==null?void 0:t.conciliationDate):""},cancelationInfo:{userId:t==null?void 0:t.canceledByUserId,userName:t==null?void 0:t.canceledByUserName,date:t==null?void 0:t.cancellationDate},payCash:t==null?void 0:t.referencePayCash,payCashURLS:t==null?void 0:t.instructionsUrls,paymentInfo:{folio:(o=t==null?void 0:t.payCashData)==null?void 0:o.folio,authorizationCode:(l=t==null?void 0:t.payCashData)==null?void 0:l.authorizationCode,date:(m=t==null?void 0:t.payCashData)!=null&&m.date?x((C=t==null?void 0:t.payCashData)==null?void 0:C.date):""},lastStatusDate:i?x(i):""}},r=t=>{const e=I(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return P(e)},tt=t=>{const e=I(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return e==null?void 0:e.map(s=>P(s))},at={LIST:"funding-orders-list",MOVEMENTS:"conciliate-movements",DETAILS:"funding-order-details"},et=async()=>{const{data:t}=await y.get("/api/funding-orders");return tt(t)},Pt=async t=>{const{data:e}=await y.get(`/api/funding-order/${t==null?void 0:t.id}`);return r(e)},_t=async t=>{const{data:e}=await y.get(`/api/master-card/movements/unreconciled?fundingOrderId=${t==null?void 0:t.id}`);return X(e)},bt=async t=>{const{data:e}=await y.put("/api/funding-order/conciliation",t);return e},jt=async t=>{const{data:e}=await y.put(`/api/funding-order/cancel/${t==null?void 0:t.id}`);return e},st=(t={})=>{const[e,s]=D.useState(null);return{...j([at.LIST],et,{staleTime:6e4,refetchOnWindowFocus:!1,onError:i=>{const c=T(i,"No se puede obtener las ordenes de fondeo");s(c),O.error(c,{type:M(i)})},...t}),error:e||null}},nt={openConciliateModal:!1,openCancelFundingOrder:!1,openDetailsFundingOrder:!1,fundingOrder:null},it=(t,e)=>({...nt,setOpenConciliateModal:s=>{t(a=>({openConciliateModal:s}),!1,"SET_OPEN_CONCILIATE_MODAL")},setFundingOrder:s=>{t(a=>({fundingOrder:s}),!1,"SET_FUNDING_ORDER")},setOpenCancelFundingOrder:s=>{t(a=>({openCancelFundingOrder:s}),!1,"SET_OPEN_CANCEL_FUNDING_ORDER")},setOpenDetailsFundingOrder:s=>{t(a=>({openDetailsFundingOrder:s}),!1,"SET_OPEN_DETAILS_FUNDING_ORDER")}}),p=v(it);function ct(t,e){const{original:s}=t,{status:a}=s,i=a==="Pendiente",c=a==="Pagada",o=p(u=>u.setFundingOrder),l=p(u=>u.setOpenConciliateModal),m=p(u=>u.setOpenCancelFundingOrder),C=p(u=>u.setOpenDetailsFundingOrder),g=[n.jsxs(F,{onClick:()=>{o(s),C(!0),e()},sx:{m:0},children:[n.jsx(f,{children:n.jsx(B,{color:"info"})}),"Ver Detalles"]},0)];return(c||i)&&g.push(n.jsxs(F,{onClick:()=>{o(s),l(!0),e()},sx:{m:0},children:[n.jsx(f,{children:n.jsx(q,{color:"success"})}),"Conciliar"]},1)),i&&g.push(n.jsxs(F,{onClick:()=>{o(s),m(!0),e()},sx:{m:0},children:[n.jsx(f,{children:n.jsx(z,{color:"error"})}),"Cancelar"]},2)),g}const lt=[{accessorKey:"referenceNumber",header:"Referencia",enableHiding:!1,size:100},{accessorKey:"paymentProcessorName",header:"Cuenta",size:100,filterVariant:"multi-select",Cell:({cell:t,column:e,row:s})=>{const{original:a}=s,i=U(a==null?void 0:a.paymentProcessorName),c=i==null?void 0:i.component;return n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:i&&n.jsx(c,{sx:{width:30,height:30}})})}},{accessorKey:"amount",header:"Monto",size:100,Cell:({cell:t,column:e,row:s,renderedCellValue:a})=>n.jsx(N,{variant:"subtitle2",fontWeight:"bold",children:a})},{accessorKey:"date",header:"Fecha",size:100,Cell:({cell:t,column:e,row:s})=>{var i,c;const{original:a}=s;return n.jsxs(h,{children:[n.jsx(N,{variant:"subtitle2",children:(i=a==null?void 0:a.registerDate)==null?void 0:i.date}),n.jsx(N,{variant:"body2",sx:{color:"text.secondary"},children:(c=a==null?void 0:a.registerDate)==null?void 0:c.time})]})}},{accessorKey:"paymentMethods",header:"Método(s)",size:120,filterVariant:"multi-select",Cell:({cell:t,column:e,row:s})=>{var o;const{original:a}=s,i=[],c=((o=a==null?void 0:a.paymentMethods)==null?void 0:o.split(","))||[];return c==null||c.forEach(l=>{const m=k(l);m&&i.push({component:m==null?void 0:m.component,width:l==="PAYCASH"?50:30,height:l==="PAYCASH"?50:30})}),n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:i==null?void 0:i.map(({component:l,width:m,height:C},g)=>n.jsx(l,{sx:{width:m,height:C}},g))})}},{accessorKey:"status",header:"Estado",filterVariant:"multi-select",size:100,Cell:({cell:t,column:e,row:s})=>{const{original:a}=s,i=J(a==null?void 0:a.status);return n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:n.jsx(K,{variant:"ghost",color:i,sx:{textTransform:"capitalize"},children:a==null?void 0:a.status})})}},{accessorKey:"conciliatedName",header:"¿Conciliada?",filterVariant:"multi-select",size:80,Cell:({cell:t,column:e,row:s})=>{const{original:a}=s;return n.jsx(h,{flexDirection:"row",width:1,justifyContent:"center",alignItems:"center",mr:2,gap:1,color:"primary",children:a!=null&&a.conciliated?n.jsx(V,{color:"green",fontWeight:"bold",fontSize:"18px"}):n.jsx(H,{fontSize:"18px",color:"red"})})}}],ot=()=>{const{data:t,isError:e,isLoading:s,isFetching:a,error:i}=st(),c=lt;return n.jsx(W,{children:n.jsx(w,{enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:c,data:t||[],isError:e,textError:i,selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:s,showAlertBanner:e,showProgressBars:a},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",maxSize:80},"mrt-row-select":{maxSize:10}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},renderRowActionMenuItems:({closeMenu:o,row:l})=>ct(l,o)})})},mt=A(D.lazy(()=>S(()=>import("./build-5f4b489c.js"),["assets/js/build-5f4b489c.js","assets/js/index-ead3f9df.js","assets/css/build-f63bc8fe.css","assets/js/build-10f107d2.js","assets/js/build-cde73089.js","assets/js/build-0e7b58e0.js","assets/js/build-cd815eee.js","assets/js/build-7bf5cd64.js","assets/js/build-e7613443.js","assets/js/build-d3b40241.js","assets/js/build-c053d984.js","assets/js/build-ca75a273.js","assets/js/build-3511fb03.js","assets/js/build-3d2cab90.js","assets/js/build-c206cad7.js","assets/js/build-75f5a94c.js","assets/js/build-c5107058.js","assets/js/build-399cae67.js","assets/js/build-829758c5.js","assets/js/build-6d1af6c1.js","assets/js/build-99510531.js","assets/js/build-6109df8b.js","assets/js/build-bf6b44a2.js","assets/js/build-a2e5984e.js","assets/js/build-67d030bf.js","assets/js/build-83d17a75.js","assets/js/build-899176f2.js","assets/js/build-55e2f19b.js","assets/js/build-70f85a92.js","assets/js/build-67192212.js","assets/js/build-bee6630b.js","assets/js/build-66873ba5.js"]))),ut=A(D.lazy(()=>S(()=>import("./build-25db5c79.js"),["assets/js/build-25db5c79.js","assets/js/index-ead3f9df.js","assets/css/build-f63bc8fe.css","assets/js/build-1589db1f.js","assets/js/build-99510531.js","assets/js/build-c5107058.js","assets/js/build-c206cad7.js","assets/js/build-cd815eee.js","assets/js/build-399cae67.js","assets/js/build-829758c5.js","assets/js/build-ca75a273.js","assets/js/build-3511fb03.js","assets/js/build-3d2cab90.js","assets/js/build-0e7b58e0.js","assets/js/build-7bf5cd64.js","assets/js/build-e7613443.js","assets/js/build-75f5a94c.js","assets/js/build-6d1af6c1.js","assets/js/build-3a6d984b.js","assets/js/build-a2e5984e.js","assets/js/build-10f107d2.js","assets/js/build-cde73089.js","assets/js/build-d3b40241.js","assets/js/build-c053d984.js","assets/js/build-67d030bf.js","assets/js/build-83d17a75.js","assets/js/build-899176f2.js","assets/js/build-55e2f19b.js","assets/js/build-70f85a92.js","assets/js/build-67192212.js","assets/js/build-bee6630b.js","assets/js/build-66873ba5.js","assets/js/build-bf6b44a2.js"]))),pt=A(D.lazy(()=>S(()=>import("./build-5eef63fa.js"),["assets/js/build-5eef63fa.js","assets/js/index-ead3f9df.js","assets/css/build-f63bc8fe.css","assets/js/build-10f107d2.js","assets/js/build-cde73089.js","assets/js/build-0e7b58e0.js","assets/js/build-cd815eee.js","assets/js/build-7bf5cd64.js","assets/js/build-e7613443.js","assets/js/build-d3b40241.js","assets/js/build-c053d984.js","assets/js/build-67d030bf.js","assets/js/build-83d17a75.js","assets/js/build-899176f2.js","assets/js/build-55e2f19b.js","assets/js/build-70f85a92.js","assets/js/build-6d1af6c1.js","assets/js/build-3d2cab90.js","assets/js/build-c206cad7.js","assets/js/build-67192212.js","assets/js/build-bee6630b.js","assets/js/build-829758c5.js","assets/js/build-b24122dc.js","assets/js/build-7bc0d04a.js","assets/js/build-c5107058.js","assets/js/build-399cae67.js","assets/js/build-ff022a63.js","assets/js/build-bf6b44a2.js","assets/js/build-4a79c9d3.js","assets/js/build-e777c72a.js","assets/js/build-99510531.js","assets/js/build-ca75a273.js","assets/js/build-3511fb03.js","assets/js/build-75f5a94c.js","assets/js/build-a2e5984e.js","assets/js/build-66873ba5.js"]))),Ct=()=>{const t=p(a=>a.openConciliateModal),e=p(a=>a.openCancelFundingOrder),s=p(a=>a.openDetailsFundingOrder);return n.jsx(R,{title:"Órdenes de Fondeo",children:n.jsxs($,{children:[n.jsx(Q,{name:"Órdenes de Fondeo",links:[{name:"Inicio",href:L.root},{name:"Órdenes de Fondeo"}]}),n.jsx(ot,{}),t&&n.jsx(mt,{}),e&&n.jsx(ut,{}),s&&n.jsx(pt,{})]})})},Tt=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"}));export{at as F,jt as a,J as b,bt as c,Pt as d,Tt as e,_t as g,p as u};