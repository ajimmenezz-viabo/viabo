import{aM as E,aN as A,aO as R,r as m,e as V,a9 as $,aP as D,aw as k,i as s,V as x,T as j,I as S,aH as z,x as W}from"./vendor-VdGvLetj.js";import{q as X,g as q,a as Q,L as U,_ as G,P as Y,o as J}from"./index-W5_PJt9d.js";import{B as Z,a as w,b as ee,c as se}from"./index.esm-08iuFCQv.js";import{b as re}from"./index.esm-xKKex4JK.js";import{C as te}from"./CardMovementsHeader-id-ohlEZ.js";import{C as ne}from"./cardMovementsAdapter-aZlT15s7.js";import{g as oe}from"./cardTypes-Tbu19olq.js";import{M as ie,C as ae,H as le}from"./HeaderPage-XC-NTdiG.js";import"./iconBase-Qvi60nla.js";import"./index.es-0GaMr3jB.js";import"./formatTime-26vjoVpy.js";import"./crypto-X2gsqmc7.js";import"./formatNumber-v_3o-PH6.js";import"./AmexLogo-JrdIJQxM.js";import"./CarnetLogo--tWhaH1b.js";import"./MasterCardLogo-eODEjC_o.js";import"./VisaLogo-uafCb8an.js";import"./fade-HpdRXKiE.js";import"./transition-Uc7vb3zK.js";const ce={MOVEMENTS:"expenses-card-movements-commerce"},me=async(d,f,g)=>{const o=new URL("/api/cards/movements/commerce",window.location.origin),p=[{field:"date",operator:">=",value:d},{field:"date",operator:"<=",value:f},{field:"operationType",operator:"=",value:"OTROS CARGOS"}];p==null||p.forEach((y,i)=>{Object.entries(y).forEach(([c,h])=>{o.searchParams.set(`filters[${i}][${c}]`,h)})});const{data:a}=await X.get(o.href,{signal:g});return ne(a)},de=(d,f,g={})=>{if(!d||!f)return null;const o=E(A(d),"yyyy-MM-dd HH:mm:ss"),p=E(R(f),"yyyy-MM-dd HH:mm:ss"),[a,y]=m.useState(null),i=V({queryKey:[ce.MOVEMENTS],queryFn:({signal:c})=>me(o,p,c),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...g});return m.useEffect(()=>{if(i!=null&&i.isError){const c=q(i.error,"No se puede obtener la lista de movimientos. Intente nuevamente o reporte a sistemas");y(c),$.error(c,{type:Q(i.error)})}},[i.isError,i.error]),{...i,error:a||null}},pe=U(m.lazy(()=>G(()=>import("./BalanceDrawer-fA5XjR4a.js"),__vite__mapDeps([0,1,2,3])))),ue=()=>{const d=new Date,f=D(d,{days:30}),g=d,[o,p]=m.useState(f),[a,y]=m.useState(g),[i,c]=m.useState(!1),{data:h,isError:F,isLoading:_,isFetching:P,error:H,refetch:I}=de(o,a),v=m.useMemo(()=>({startDate:A(o),endDate:R(a),text:`${E(o,"dd MMMM yyyy",{locale:k})} - ${E(a,"dd MMMM yyyy",{locale:k})}`}),[o,a]),N=n=>()=>{var t,r;(r=(t=n==null?void 0:n.expensesControl)==null?void 0:t.otherFiles)==null||r.forEach(e=>{window.open(e,"_blank").focus()})};m.useEffect(()=>{o&&a&&I()},[o,a]);const L=m.useMemo(()=>[{accessorKey:"cardNumber",header:"Tarjeta",enableHiding:!1,size:150,Cell:({cell:n,column:t,row:r})=>{var C,b;const{original:e}=r,u=e==null?void 0:e.isMainCard,l=oe(e==null?void 0:e.paymentProcessor),M=l==null?void 0:l.component;return s.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[l&&s.jsx(M,{sx:{width:30,height:30}}),s.jsx(j,{variant:"subtitle2",fontWeight:"bold",noWrap:!0,children:u?e==null?void 0:e.cardNumber:(b=e==null?void 0:e.cardNumber)==null?void 0:b.substr(((C=e==null?void 0:e.cardNumber)==null?void 0:C.length)-4)})]})}},{accessorKey:"ownerCard",header:"Tarjetahabiente",filterVariant:"multi-select",size:150,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r;return s.jsx(x,{children:s.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.ownerCard})})}},{accessorKey:"description",header:"Movimiento",minSize:120,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r;return s.jsx(x,{children:s.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.description})})}},{accessorKey:"fullDate",header:"Fecha",size:120,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r;return s.jsx(x,{children:s.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.fullDate})})}},{accessorKey:"amount",header:"Monto",size:100,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r,u=(e==null?void 0:e.type)==="ingreso",l=(e==null?void 0:e.type)==="terminal";return s.jsx(j,{variant:"subtitle2",fontWeight:"bold",color:u||l?"success.main":"error",children:u||l?`+ ${e==null?void 0:e.amountFormat}`:`- ${e==null?void 0:e.amountFormat}`})}},{accessorKey:"verified",header:"Comprobación",size:100,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r;return s.jsx(x,{flexDirection:"row",width:1,justifyContent:"center",alignItems:"center",gap:1,mr:2,color:"primary",children:e!=null&&e.verified?s.jsx(Z,{color:"green",fontWeight:"bold",fontSize:"18px"}):s.jsx(w,{fontSize:"18px",color:"red"})})}},{accessorKey:"files",header:"Archivos",size:100,enableFilters:!1,enableColumnFilter:!1,Cell:({cell:n,column:t,row:r})=>{var u,l,M,C,b,T,B,O;const{original:e}=r;return s.jsxs(x,{flexDirection:"row",color:"primary",children:[((u=e==null?void 0:e.expensesControl)==null?void 0:u.isInvoice)&&s.jsxs(x,{direction:"row",spacing:.5,children:[s.jsx(S,{title:"Descargar PDF",LinkComponent:z,href:(M=(l=e==null?void 0:e.expensesControl)==null?void 0:l.invoiceFiles)==null?void 0:M.pdf,target:"_blank",color:"error",children:s.jsx(ee,{fontSize:"18px"})}),s.jsx(S,{title:"Descargar XML",LinkComponent:z,href:(b=(C=e==null?void 0:e.expensesControl)==null?void 0:C.invoiceFiles)==null?void 0:b.xml,target:"_blank",color:"info",children:s.jsx(se,{fontSize:"18px"})})]}),!((T=e==null?void 0:e.expensesControl)!=null&&T.isInvoice)&&((O=(B=e==null?void 0:e.expensesControl)==null?void 0:B.otherFiles)==null?void 0:O.length)>0&&s.jsx(S,{color:"primary",title:"Descargar Archivos",onClick:N(e),children:s.jsx(re,{fontSize:"20px"})})]})}}],[]),K=n=>{const{startDate:t,endDate:r}=n;r!==null&&t!==null&&(y(r),p(t))};return s.jsxs(s.Fragment,{children:[s.jsxs(W,{children:[s.jsx(te,{startDate:o,endDate:a,onChangeDateRange:K,onOpenBalance:()=>c(!0),loading:P}),s.jsx(ie,{enableColumnPinning:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:L,data:(h==null?void 0:h.movements)||[],isError:F,textError:H,selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"fullDate",desc:!0}]},state:{isLoading:_,showAlertBanner:F,showProgressBars:P},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",size:80},"mrt-row-select":{size:10}},muiTableBodyRowProps:({row:n})=>({sx:t=>({backgroundColor:t.palette.background.paper,"&.Mui-selected":{backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}}})}),muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}}})]}),s.jsx(pe,{open:i,card:h,dateRange:v==null?void 0:v.text,onClose:()=>{c(!1)}})]})},Ae=()=>s.jsx(Y,{title:"Comprobaciones",children:s.jsxs(ae,{children:[s.jsx(le,{name:"Comprobaciones",links:[{name:"Inicio",href:J.root},{name:"Comprobaciones"}]}),s.jsx(ue,{})]})});export{Ae as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/BalanceDrawer-fA5XjR4a.js","assets/js/vendor-VdGvLetj.js","assets/js/index-W5_PJt9d.js","assets/css/build-K0YT2apu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=ExpensesControl-lEyEmXld.js.map