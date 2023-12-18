import{z as _,j as n,G as E,J as j,am as y,r as D,d as b,g as T,Q as O,b as M,an as v,K as F,aP as f,bc as z,S as h,T as N,N as R,C as A,_ as S,P as L,ae as w}from"./index-zZLQf85F.js";import{M as B,C as U,H as V}from"./build-udEC9BlS.js";import{V as H}from"./build-8fJY7UDq.js";import{B as k,a as K}from"./build-iqbXtRFJ.js";import{g as G}from"./build-cX5RxqWy.js";import{g as Y}from"./build-1bT-D2KS.js";import{L as $}from"./build-xvftTHFY.js";import{C as Q}from"./build-AYB_aIcJ.js";import{g as I}from"./build-NjJ5ZdqY.js";import{f as W}from"./build-BC3f-duO.js";import{f as x}from"./build-0PBFFrMf.js";const q=_(n.jsx("path",{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"}),"AddTask"),J=[{id:6,name:"PENDIENTE",color:"warning"},{id:7,name:"PAGADA",color:"primary"},{id:8,name:"CANCELADA",color:"error"},{id:9,name:"LIQUIDADA",color:"success"}],X=t=>{var e;return((e=J.find(s=>{var a;return s.name===((a=t==null?void 0:t.toLowerCase())==null?void 0:a.toUpperCase())}))==null?void 0:e.color)||"info"},Z=t=>Q(t),d=t=>{var e;return(t==null?void 0:t.statusName)==="Pagada"?(e=t==null?void 0:t.payCashData)==null?void 0:e.date:(t==null?void 0:t.statusName)==="Liquidada"?t==null?void 0:t.conciliationDate:(t==null?void 0:t.statusName)==="Cancelada"?t==null?void 0:t.cancellationDate:t==null?void 0:t.registerDate},P=t=>{var c,o,l,m,C;let e="";t!=null&&t.spei&&(t!=null&&t.referencePayCash)&&t.spei!==""&&t.referencePayCash!==""?e="SPEI,PAYCASH":t!=null&&t.spei&&t.spei!==""?e="SPEI":t!=null&&t.referencePayCash&&t.referencePayCash!==""&&(e="PAYCASH");const s=t!=null&&t.registerDate?E(new Date(t==null?void 0:t.registerDate),"dd MMM yyyy",{locale:j}):"",a=t!=null&&t.registerDate?E(new Date(t==null?void 0:t.registerDate),"p"):"",i=d(t);return{id:t==null?void 0:t.id,cardId:t==null?void 0:t.cardId,cardNumber:t==null?void 0:t.cardNumber,paymentProcessorName:t==null?void 0:t.paymentProcessorName,paymentMethods:e,referenceNumber:t==null?void 0:t.referenceNumber,amount:W(t==null?void 0:t.amount),status:t==null?void 0:t.statusName,date:t==null?void 0:t.registerDate,registerDate:{fullDate:x(t==null?void 0:t.registerDate),time:a,date:s},spei:t==null?void 0:t.spei,emails:(c=t==null?void 0:t.emails)==null?void 0:c.split(","),conciliatedName:(t==null?void 0:t.conciliated)!=="No"?"Conciliada":"Sin Conciliar",conciliated:(t==null?void 0:t.conciliated)!=="No",conciliationInfo:{number:t==null?void 0:t.conciliationNumber,userId:t==null?void 0:t.conciliationUserId,userName:t==null?void 0:t.conciliationUserName,date:t!=null&&t.conciliationDate?x(t==null?void 0:t.conciliationDate):""},cancelationInfo:{userId:t==null?void 0:t.canceledByUserId,userName:t==null?void 0:t.canceledByUserName,date:t==null?void 0:t.cancellationDate},payCash:t==null?void 0:t.referencePayCash,payCashURLS:t==null?void 0:t.instructionsUrls,paymentInfo:{folio:(o=t==null?void 0:t.payCashData)==null?void 0:o.folio,authorizationCode:(l=t==null?void 0:t.payCashData)==null?void 0:l.authorizationCode,date:(m=t==null?void 0:t.payCashData)!=null&&m.date?x((C=t==null?void 0:t.payCashData)==null?void 0:C.date):""},lastStatusDate:i?x(i):""}},r=t=>{const e=I(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return P(e)},tt=t=>{const e=I(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return e==null?void 0:e.map(s=>P(s))},at={LIST:"funding-orders-list",MOVEMENTS:"conciliate-movements",DETAILS:"funding-order-details"},et=async()=>{const{data:t}=await y.get("/api/funding-orders");return tt(t)},It=async t=>{const{data:e}=await y.get(`/api/funding-order/${t==null?void 0:t.id}`);return r(e)},Pt=async t=>{const{data:e}=await y.get(`/api/master-card/movements/unreconciled?fundingOrderId=${t==null?void 0:t.id}`);return Z(e)},_t=async t=>{const{data:e}=await y.put("/api/funding-order/conciliation",t);return e},jt=async t=>{const{data:e}=await y.put(`/api/funding-order/cancel/${t==null?void 0:t.id}`);return e},st=(t={})=>{const[e,s]=D.useState(null);return{...b([at.LIST],et,{staleTime:6e4,refetchOnWindowFocus:!1,onError:i=>{const c=T(i,"No se puede obtener las ordenes de fondeo");s(c),O.error(c,{type:M(i)})},...t}),error:e||null}},nt={openConciliateModal:!1,openCancelFundingOrder:!1,openDetailsFundingOrder:!1,fundingOrder:null},it=(t,e)=>({...nt,setOpenConciliateModal:s=>{t(a=>({openConciliateModal:s}),!1,"SET_OPEN_CONCILIATE_MODAL")},setFundingOrder:s=>{t(a=>({fundingOrder:s}),!1,"SET_FUNDING_ORDER")},setOpenCancelFundingOrder:s=>{t(a=>({openCancelFundingOrder:s}),!1,"SET_OPEN_CANCEL_FUNDING_ORDER")},setOpenDetailsFundingOrder:s=>{t(a=>({openDetailsFundingOrder:s}),!1,"SET_OPEN_DETAILS_FUNDING_ORDER")}}),p=v(it);function ct(t,e){const{original:s}=t,{status:a}=s,i=a==="Pendiente",c=a==="Pagada",o=p(u=>u.setFundingOrder),l=p(u=>u.setOpenConciliateModal),m=p(u=>u.setOpenCancelFundingOrder),C=p(u=>u.setOpenDetailsFundingOrder),g=[n.jsxs(F,{onClick:()=>{o(s),C(!0),e()},sx:{m:0},children:[n.jsx(f,{children:n.jsx(H,{color:"info"})}),"Ver Detalles"]},0)];return(c||i)&&g.push(n.jsxs(F,{onClick:()=>{o(s),l(!0),e()},sx:{m:0},children:[n.jsx(f,{children:n.jsx(q,{color:"success"})}),"Conciliar"]},1)),i&&g.push(n.jsxs(F,{onClick:()=>{o(s),m(!0),e()},sx:{m:0},children:[n.jsx(f,{children:n.jsx(z,{color:"error"})}),"Cancelar"]},2)),g}const lt=[{accessorKey:"referenceNumber",header:"Referencia",enableHiding:!1,size:100},{accessorKey:"paymentProcessorName",header:"Cuenta",size:100,filterVariant:"multi-select",Cell:({cell:t,column:e,row:s})=>{const{original:a}=s,i=G(a==null?void 0:a.paymentProcessorName),c=i==null?void 0:i.component;return n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:i&&n.jsx(c,{sx:{width:30,height:30}})})}},{accessorKey:"amount",header:"Monto",size:100,Cell:({cell:t,column:e,row:s,renderedCellValue:a})=>n.jsx(N,{variant:"subtitle2",fontWeight:"bold",children:a})},{accessorKey:"date",header:"Fecha",size:100,Cell:({cell:t,column:e,row:s})=>{var i,c;const{original:a}=s;return n.jsxs(h,{children:[n.jsx(N,{variant:"subtitle2",children:(i=a==null?void 0:a.registerDate)==null?void 0:i.date}),n.jsx(N,{variant:"body2",sx:{color:"text.secondary"},children:(c=a==null?void 0:a.registerDate)==null?void 0:c.time})]})}},{accessorKey:"paymentMethods",header:"Método(s)",size:120,filterVariant:"multi-select",Cell:({cell:t,column:e,row:s})=>{var o;const{original:a}=s,i=[],c=((o=a==null?void 0:a.paymentMethods)==null?void 0:o.split(","))||[];return c==null||c.forEach(l=>{const m=Y(l);m&&i.push({component:m==null?void 0:m.component,width:l==="PAYCASH"?50:30,height:l==="PAYCASH"?50:30})}),n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:i==null?void 0:i.map(({component:l,width:m,height:C},g)=>n.jsx(l,{sx:{width:m,height:C}},g))})}},{accessorKey:"status",header:"Estado",filterVariant:"multi-select",size:100,Cell:({cell:t,column:e,row:s})=>{const{original:a}=s,i=X(a==null?void 0:a.status);return n.jsx(h,{flexDirection:"row",alignItems:"center",gap:1,children:n.jsx($,{variant:"ghost",color:i,sx:{textTransform:"capitalize"},children:a==null?void 0:a.status})})}},{accessorKey:"conciliatedName",header:"¿Conciliada?",filterVariant:"multi-select",size:80,Cell:({cell:t,column:e,row:s})=>{const{original:a}=s;return n.jsx(h,{flexDirection:"row",width:1,justifyContent:"center",alignItems:"center",mr:2,gap:1,color:"primary",children:a!=null&&a.conciliated?n.jsx(k,{color:"green",fontWeight:"bold",fontSize:"18px"}):n.jsx(K,{fontSize:"18px",color:"red"})})}}],ot=()=>{const{data:t,isError:e,isLoading:s,isFetching:a,error:i}=st(),c=lt;return n.jsx(R,{children:n.jsx(B,{enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:c,data:t||[],isError:e,textError:i,selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:s,showAlertBanner:e,showProgressBars:a},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",maxSize:80},"mrt-row-select":{maxSize:10}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},renderRowActionMenuItems:({closeMenu:o,row:l})=>ct(l,o)})})},mt=A(D.lazy(()=>S(()=>import("./build-xaMX9XFk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])))),ut=A(D.lazy(()=>S(()=>import("./build-l0bmpqeQ.js"),__vite__mapDeps([34,1,2,35,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,3,4,5,6,7,25,26,27,28,29,30,31,32,33])))),pt=A(D.lazy(()=>S(()=>import("./build-24p8X8mm.js"),__vite__mapDeps([36,1,2,23,24,25,26,27,28,29,18,10,11,12,30,31,17,20,37,38,15,16,8,9,13,14,19,22,3,4,5,6,7,32,33])))),Ct=()=>{const t=p(a=>a.openConciliateModal),e=p(a=>a.openCancelFundingOrder),s=p(a=>a.openDetailsFundingOrder);return n.jsx(L,{title:"Órdenes de Fondeo",children:n.jsxs(U,{children:[n.jsx(V,{name:"Órdenes de Fondeo",links:[{name:"Inicio",href:w.root},{name:"Órdenes de Fondeo"}]}),n.jsx(ot,{}),t&&n.jsx(mt,{}),e&&n.jsx(ut,{}),s&&n.jsx(pt,{})]})})},bt=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"}));export{at as F,jt as a,X as b,_t as c,It as d,bt as e,Pt as g,p as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-xaMX9XFk.js","assets/js/index-zZLQf85F.js","assets/css/build-pvjN466W.css","assets/js/build-cX5RxqWy.js","assets/js/build-9WjOiGQT.js","assets/js/build-wZ7Dg5PX.js","assets/js/build-hgCuK9tE.js","assets/js/build-EhLVEfg9.js","assets/js/build-udEC9BlS.js","assets/js/build-LqvR14b6.js","assets/js/build-FIAgVl-Q.js","assets/js/build-gPmZEdkF.js","assets/js/build-oAUg0xyq.js","assets/js/build-0PBFFrMf.js","assets/js/build-n0Ctg4Eu.js","assets/js/build-zm_xBd2R.js","assets/js/build-lGOk465E.js","assets/js/build-BC3f-duO.js","assets/js/build-zIcY1Gcs.js","assets/js/build-m87tawfs.js","assets/js/build-nrvKdWYL.js","assets/js/build-P75XL4JI.js","assets/js/build-8fJY7UDq.js","assets/js/build-iqbXtRFJ.js","assets/js/build-BiFUCUez.js","assets/js/build-1bT-D2KS.js","assets/js/build-zH8OCAbq.js","assets/js/build-zEF68lUW.js","assets/js/build-xvftTHFY.js","assets/js/build-vea5MoeN.js","assets/js/build-K3n06G8N.js","assets/js/build-Uc7vb3zK.js","assets/js/build-AYB_aIcJ.js","assets/js/build-NjJ5ZdqY.js","assets/js/build-l0bmpqeQ.js","assets/js/build-X5H9nG5J.js","assets/js/build-24p8X8mm.js","assets/js/build-xuU5eCFS.js","assets/js/build-CRG-Gpo1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}