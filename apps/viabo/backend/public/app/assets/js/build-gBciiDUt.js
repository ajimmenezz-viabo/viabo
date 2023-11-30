import{z,j as i,aj as H,N as w,aL as F,G as p,K as g,ai as A,H as j,J as E,r as n,d as B,g as R,Q as K,b as U,O as h,B as y,a1 as k,a2 as W,T as u,S as x,C as $,_ as Q,P as Y,ab as G,aH as J,aI as X}from"./index-x-tL3MOy.js";import{f as L}from"./build-Q1bOWlNZ.js";import{n as b,M as Z,C as v,H as m}from"./build-yw6dnA5g.js";import{g as aa}from"./build-EUAVn8Jf.js";import{A as sa}from"./build-r-MJ89TZ.js";import{C as ra}from"./build-OVyPJnWA.js";import{C as ia}from"./build-a2Rn9pG_.js";import{s as ta,a as ea}from"./build-7J3pUmpV.js";import{u as ca}from"./build-Dae5ZSnf.js";import{C as la}from"./build-TmPCBBAV.js";const da=z(i.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"}),"Payment"),na={openDrawerLiquidateMovement:!1,movement:null,filterDate:null},oa=(t,s)=>({...na,setMovementToLiquidate:a=>{t(e=>({movement:a}),!1,"SET_DETAILS_MOVEMENT_TO_LIQUIDATE")},setOpenDrawerLiquidateMovement:a=>{t(e=>({openDrawerLiquidateMovement:a}),!1,"SET_OPEN_LIQUIDATE_MOVEMENT_VIABO_PAY")},setFilterDate:a=>{t(e=>({filterDate:a}),!1,"SET_FILTER_DATE_LIQUIDATE_MOVEMENTS")}}),T=H(oa);function ua(t){const{row:s,closeMenu:a}=t,{original:e}=s,{liquidationStatus:r}=e,{setMovementToLiquidate:c,setOpenDrawerLiquidateMovement:o}=T(l=>l);return[(r==null?void 0:r.id)!=="13"&&i.jsxs(w,{onClick:()=>{c(e),o(!0),a()},sx:{m:0},children:[i.jsx(F,{children:i.jsx(da,{color:"success"})}),"Liquidar"]},0)]}const pa={MOVEMENTS:"liquidated-viabo-pay-movements"},ha=t=>(t==null?void 0:t.map(a=>{const e=parseFloat((a==null?void 0:a.amount)||"0"),r=a!=null&&a.transaction_date?p(b(a==null?void 0:a.transaction_date),"dd MMM yyyy",{locale:g}):"",c=a!=null&&a.transaction_date?p(b(a==null?void 0:a.transaction_date),"p"):"";return{id:a==null?void 0:a.id,terminalName:a==null?void 0:a.terminal_name,terminalId:a==null?void 0:a.terminal_id,amount:e,amountFormat:L(e),amountToLiquidate:a==null?void 0:a.amountToSettled,amountToLiquidateFormat:L(a==null?void 0:a.amountToSettled),commerceName:a==null?void 0:a.commerceName,commerceId:a==null?void 0:a.commerceId,approved:a==null?void 0:a.approved,cardType:a==null?void 0:a.card_brand,authNumber:a==null?void 0:a.authorization_number,commission:(a==null?void 0:a.commission)>=0?`${a==null?void 0:a.commission}%`:"0%",cardNumber:a==null?void 0:a.card_number,cardBank:a==null?void 0:a.issuer,transactionDate:{fullDate:p(b(a==null?void 0:a.transaction_date),"dd MMM yyyy HH:mm",{locale:g}),date:r,time:c},serverDate:b(a==null?void 0:a.transaction_date),description:`${(a==null?void 0:a.issuer)===""?a==null?void 0:a.card_brand:a==null?void 0:a.issuer}-${a==null?void 0:a.card_number}`.toUpperCase(),transactionMessage:a==null?void 0:a.result_message,conciliated:!!(a!=null&&a.conciliated),conciliatedName:a!=null&&a.conciliated?"Conciliada":"Sin Conciliar",liquidationStatus:{id:a==null?void 0:a.liquidationStatusId,name:a==null?void 0:a.liquidationStatusName},dataToLiquidate:{id:a==null?void 0:a.id,commerceId:a==null?void 0:a.commerceId,authorization_number:a==null?void 0:a.authorization_number,terminal_id:a==null?void 0:a.terminal_id,terminal_spei_card:(a==null?void 0:a.terminal_spei_card)||"",amountToSettled:a==null?void 0:a.amountToSettled}}}))??[],ya=async(t,s,a)=>{const e=new URL("/api/terminals/shared/transactions",window.location.origin);e.searchParams.set("startDate",t),e.searchParams.set("endDate",s);const{data:r}=await A.get(e.href,{signal:a});return ha(r)},Pa=async t=>{const{data:s}=await A.post("/api/card/transactions/shared-terminals",t);return s},Ma=(t,s,a={})=>{if(!t||!s)return null;const{setFilterDate:e}=T(d=>d),r=p(j(t),"yyyy-MM-dd HH:mm:ss"),c=p(E(s),"yyyy-MM-dd HH:mm:ss"),[o,M]=n.useState(null),l=B({queryKey:[pa.MOVEMENTS],queryFn:({signal:d})=>ya(r,c,d),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,onSuccess:d=>{e({startDate:j(t),endDate:E(s),text:`${p(t,"dd MMMM yyyy",{locale:g})} - ${p(s,"dd MMMM yyyy",{locale:g})}`})},...a});return n.useEffect(()=>{if(l!=null&&l.isError){const d=R(l.error,"No se puede obtener la lista de movimientos. Intente nuevamente o reporte a sistemas");M(d),K.error(d,{type:U(l.error)})}},[l.isError,l.error]),{...l,error:o||null}},q=({row:t})=>{const{original:s}=t,a=s==null?void 0:s.approved,e=aa(s==null?void 0:s.cardType),r=e==null?void 0:e.component;return i.jsxs(y,{sx:{display:"flex",alignItems:"center"},children:[i.jsxs(y,{sx:{position:"relative"},children:[i.jsx(k,{title:s==null?void 0:s.cardType,children:i.jsx(W,{sx:{width:40,height:40,color:"text.secondary",bgcolor:"background.neutral"},children:e?i.jsx(r,{sx:{width:25,height:25}}):i.jsx(sa,{width:25,height:25})})}),i.jsx(y,{sx:{right:0,bottom:0,width:15,height:15,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",color:"common.white",bgcolor:"error.main",justifyContent:"center",...a&&{bgcolor:"success.main"}},children:a?i.jsx(ra,{sx:{width:12,height:12}}):i.jsx(ia,{sx:{width:12,height:12}})})]}),i.jsxs(y,{sx:{ml:2},children:[i.jsx(u,{variant:"subtitle2",sx:{textWrap:"wrap"},children:s==null?void 0:s.description}),i.jsx(u,{variant:"body2",textTransform:"capitalize",sx:{color:a?"success.main":"error.main",textWrap:"wrap"},children:s==null?void 0:s.transactionMessage})]})]})};q.propTypes={row:h.shape({original:h.shape({approved:h.bool,cardType:h.any,description:h.any,transactionMessage:h.any})})};const xa=()=>n.useMemo(()=>[{accessorKey:"description",header:"Movimiento",enableHiding:!1,size:200,Cell:({row:t})=>i.jsx(q,{row:t})},{accessorKey:"terminalName",header:"Terminal",size:120,Cell:({cell:t,column:s,row:a,renderedCellValue:e})=>{const{original:r}=a;return i.jsx(u,{fontWeight:"bold",variant:"subtitle2",children:r==null?void 0:r.terminalName})}},{accessorKey:"commerceName",header:"Comercio",size:120},{accessorKey:"serverDate",header:"Fecha",size:100,Cell:({cell:t,column:s,row:a,renderedCellValue:e})=>{var c;const{original:r}=a;return i.jsx(x,{children:i.jsx(u,{variant:"subtitle2",children:(c=r==null?void 0:r.transactionDate)==null?void 0:c.fullDate})})}},{accessorKey:"amount",header:"Monto Cobrado",size:120,Cell:({cell:t,column:s,row:a,renderedCellValue:e})=>{const{original:r}=a;return i.jsx(x,{children:i.jsx(u,{fontWeight:"bold",variant:"subtitle2",children:r==null?void 0:r.amountFormat})})}},{accessorKey:"amountToLiquidate",header:"Monto por liquidar",size:120,Cell:({cell:t,column:s,row:a,renderedCellValue:e})=>{const{original:r}=a;return i.jsx(x,{children:i.jsx(u,{fontWeight:"bold",color:"success.main",variant:"subtitle2",children:r==null?void 0:r.amountToLiquidateFormat})})}},{id:"status",accessorFn:t=>{var s;return((s=t==null?void 0:t.liquidationStatus)==null?void 0:s.name)||null},header:"Estado de Liquidación",size:120,Cell:({cell:t,column:s,row:a,renderedCellValue:e})=>{var c;const{original:r}=a;return i.jsx(x,{children:i.jsx(u,{variant:"subtitle2",children:(c=r==null?void 0:r.liquidationStatus)==null?void 0:c.name})})}}],[]),ba=()=>{const t=new Date,s=T(_=>_.filterDate),a=n.useMemo(()=>s!=null&&s.startDate?new Date(s==null?void 0:s.startDate):ta(t,{days:30}),[s==null?void 0:s.startDate]),e=n.useMemo(()=>s!=null&&s.endDate?new Date(s==null?void 0:s.endDate):t,[s==null?void 0:s.endDate]),[r,c]=n.useState(a),[o,M]=n.useState(e),{data:l,isError:d,error:I,isLoading:P,isFetching:C,refetch:D}=Ma(r,o);n.useEffect(()=>{r&&o&&D()},[r,o]);const V=xa(),O=ca(d,I,{columns:V,data:l||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,enableDensityToggle:!1,positionActionsColumn:"last",selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"serverDate",desc:!0}]},state:{isLoading:P,showAlertBanner:d,showProgressBars:C},displayColumnDefOptions:{"mrt-row-select":{maxSize:10},"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},renderRowActionMenuItems:ua,renderTopToolbarCustomActions:()=>i.jsx(y,{})}),N=_=>{const{startDate:f,endDate:S}=_;S!==null&&f!==null&&(M(S),c(f))};return i.jsxs(la,{children:[i.jsx(ea,{startDate:r,endDate:o,onChangeDateRange:N,hideBalance:!0,loading:C}),i.jsx(Z,{table:O})]})},ga=$(n.lazy(()=>Q(()=>import("./build-2mGN7gqt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])))),_a=()=>i.jsx(Y,{title:"Movimientos a Liquidar Viabo Pay",children:i.jsxs(v,{children:[i.jsx(m,{name:"Nube",links:[{name:"Inicio",href:G.root},{name:"Viabo Pay",href:J.cloud},{name:X.cloud.name}]}),i.jsx(ba,{}),i.jsx(ga,{})]})}),Da=Object.freeze(Object.defineProperty({__proto__:null,default:_a},Symbol.toStringTag,{value:"Module"}));export{pa as C,Da as a,Pa as l,T as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-2mGN7gqt.js","assets/js/index-x-tL3MOy.js","assets/css/build-pvjN466W.css","assets/js/build-NIRfJG7v.js","assets/js/build-TmPCBBAV.js","assets/js/build-G8xLV4ng.js","assets/js/build-Q1bOWlNZ.js","assets/js/build-rDZAP2eW.js","assets/js/build-yw6dnA5g.js","assets/js/build-Pt2-zlVs.js","assets/js/build-3JmeY1AD.js","assets/js/build-mZf3ZGCw.js","assets/js/build-fO9Z8l-Y.js","assets/js/build-WksAqt8r.js","assets/js/build-P_JIiLI3.js","assets/js/build-aXq1ykHm.js","assets/js/build-YUdFPXK7.js","assets/js/build-EckPbxwb.js","assets/js/build-EUAVn8Jf.js","assets/js/build-zw289rNM.js","assets/js/build-SWnGRRxs.js","assets/js/build-GKTonalM.js","assets/js/build-r-MJ89TZ.js","assets/js/build-OVyPJnWA.js","assets/js/build-a2Rn9pG_.js","assets/js/build-7J3pUmpV.js","assets/js/build-Dae5ZSnf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}