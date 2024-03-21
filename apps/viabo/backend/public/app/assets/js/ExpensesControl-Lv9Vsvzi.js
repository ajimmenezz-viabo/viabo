import{aH as E,aI as A,aJ as R,r as m,e as V,U as $,aK as D,aq as z,i as s,S as f,T as j,I as S,aC as O,aM as W}from"./vendor-B39b6gT1.js";import{a as U,g as X,b as q,L as G,_ as J,P as Q,p as Y}from"./index-Kl2QvVyT.js";import{B as Z,a as w,b as ee,c as se}from"./index-BR5jfK4T.js";import{P as re}from"./index-CreHyv2Z.js";import{C as te}from"./CardMovementsHeader-BFWWhrwE.js";import{C as ne}from"./cardMovementsAdapter-BwF5c2zj.js";import{g as oe}from"./cardTypes-Dv_vUqe3.js";import{M as ie}from"./MaterialDataTable-BLrn9vSy.js";import{C as ae,H as le}from"./HeaderPage-CoeRaeoE.js";import"./iconBase-Bx2LR7oe.js";import"./formatTime-DnNoLFDr.js";import"./formatNumber-Byfz8vD2.js";import"./AmexLogo-CYfYyhsT.js";import"./CarnetLogo-CXbiBg5q.js";import"./MasterCardLogo-VWsSONZB.js";import"./VisaLogo-DxnifGLv.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";const ce={MOVEMENTS:"expenses-card-movements-commerce"},me=async(d,x,g)=>{const o=new URL("/api/cards/movements/commerce",window.location.origin),p=[{field:"date",operator:">=",value:d},{field:"date",operator:"<=",value:x},{field:"operationType",operator:"=",value:"OTROS CARGOS"}];p==null||p.forEach((C,i)=>{Object.entries(C).forEach(([c,h])=>{o.searchParams.set(`filters[${i}][${c}]`,h)})});const{data:a}=await U.get(o.href,{signal:g});return ne(a)},de=(d,x,g={})=>{if(!d||!x)return null;const o=E(A(d),"yyyy-MM-dd HH:mm:ss"),p=E(R(x),"yyyy-MM-dd HH:mm:ss"),[a,C]=m.useState(null),i=V({queryKey:[ce.MOVEMENTS],queryFn:({signal:c})=>me(o,p,c),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...g});return m.useEffect(()=>{if(i!=null&&i.isError){const c=X(i.error,"No se puede obtener la lista de movimientos. Intente nuevamente o reporte a sistemas");C(c),$.error(c,{type:q(i.error)})}},[i.isError,i.error]),{...i,error:a||null}},pe=G(m.lazy(()=>J(()=>import("./BalanceDrawer-O4cqXlu5.js"),__vite__mapDeps([0,1,2,3,4])))),ue=()=>{const d=new Date,x=D(d,{days:30}),g=d,[o,p]=m.useState(x),[a,C]=m.useState(g),[i,c]=m.useState(!1),{data:h,isError:F,isLoading:_,isFetching:P,error:H,refetch:I}=de(o,a),v=m.useMemo(()=>({startDate:A(o),endDate:R(a),text:`${E(o,"dd MMMM yyyy",{locale:z})} - ${E(a,"dd MMMM yyyy",{locale:z})}`}),[o,a]),L=n=>()=>{var t,r;(r=(t=n==null?void 0:n.expensesControl)==null?void 0:t.otherFiles)==null||r.forEach(e=>{window.open(e,"_blank").focus()})};m.useEffect(()=>{o&&a&&I()},[o,a]);const N=m.useMemo(()=>[{accessorKey:"cardNumber",header:"Tarjeta",enableHiding:!1,size:150,Cell:({cell:n,column:t,row:r})=>{var y,b;const{original:e}=r,u=e==null?void 0:e.isMainCard,l=oe(e==null?void 0:e.paymentProcessor),M=l==null?void 0:l.component;return s.jsxs(f,{direction:"row",spacing:1,alignItems:"center",children:[l&&s.jsx(M,{sx:{width:30,height:30}}),s.jsx(j,{variant:"subtitle2",fontWeight:"bold",noWrap:!0,children:u?e==null?void 0:e.cardNumber:(b=e==null?void 0:e.cardNumber)==null?void 0:b.substr(((y=e==null?void 0:e.cardNumber)==null?void 0:y.length)-4)})]})}},{accessorKey:"ownerCard",header:"Tarjetahabiente",filterVariant:"multi-select",size:150,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r;return s.jsx(f,{children:s.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.ownerCard})})}},{accessorKey:"description",header:"Movimiento",minSize:120,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r;return s.jsx(f,{children:s.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.description})})}},{accessorKey:"fullDate",header:"Fecha",size:120,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r;return s.jsx(f,{children:s.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.fullDate})})}},{accessorKey:"amount",header:"Monto",size:100,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r,u=(e==null?void 0:e.type)==="ingreso",l=(e==null?void 0:e.type)==="terminal";return s.jsx(j,{variant:"subtitle2",fontWeight:"bold",color:u||l?"success.main":"error",children:u||l?`+ ${e==null?void 0:e.amountFormat}`:`- ${e==null?void 0:e.amountFormat}`})}},{accessorKey:"verified",header:"Comprobación",size:100,Cell:({cell:n,column:t,row:r})=>{const{original:e}=r;return s.jsx(f,{flexDirection:"row",width:1,justifyContent:"center",alignItems:"center",gap:1,mr:2,color:"primary",children:e!=null&&e.verified?s.jsx(Z,{color:"green",fontWeight:"bold",fontSize:"18px"}):s.jsx(w,{fontSize:"18px",color:"red"})})}},{accessorKey:"files",header:"Archivos",size:100,enableFilters:!1,enableColumnFilter:!1,Cell:({cell:n,column:t,row:r})=>{var u,l,M,y,b,B,T,k;const{original:e}=r;return s.jsxs(f,{flexDirection:"row",color:"primary",children:[((u=e==null?void 0:e.expensesControl)==null?void 0:u.isInvoice)&&s.jsxs(f,{direction:"row",spacing:.5,children:[s.jsx(S,{title:"Descargar PDF",LinkComponent:O,href:(M=(l=e==null?void 0:e.expensesControl)==null?void 0:l.invoiceFiles)==null?void 0:M.pdf,target:"_blank",color:"error",children:s.jsx(ee,{fontSize:"18px"})}),s.jsx(S,{title:"Descargar XML",LinkComponent:O,href:(b=(y=e==null?void 0:e.expensesControl)==null?void 0:y.invoiceFiles)==null?void 0:b.xml,target:"_blank",color:"info",children:s.jsx(se,{fontSize:"18px"})})]}),!((B=e==null?void 0:e.expensesControl)!=null&&B.isInvoice)&&((k=(T=e==null?void 0:e.expensesControl)==null?void 0:T.otherFiles)==null?void 0:k.length)>0&&s.jsx(S,{color:"primary",title:"Descargar Archivos",onClick:L(e),children:s.jsx(re,{fontSize:"20px"})})]})}}],[]),K=n=>{const{startDate:t,endDate:r}=n;r!==null&&t!==null&&(C(r),p(t))};return s.jsxs(s.Fragment,{children:[s.jsxs(W,{children:[s.jsx(te,{startDate:o,endDate:a,onChangeDateRange:K,onOpenBalance:()=>c(!0),loading:P}),s.jsx(ie,{enableColumnPinning:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:N,data:(h==null?void 0:h.movements)||[],isError:F,textError:H,selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"fullDate",desc:!0}]},state:{isLoading:_,showAlertBanner:F,showProgressBars:P},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",size:80},"mrt-row-select":{size:10}},muiTableBodyRowProps:({row:n})=>({sx:t=>({backgroundColor:t.palette.background.paper,"&.Mui-selected":{backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}}})}),muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}}})]}),s.jsx(pe,{open:i,card:h,dateRange:v==null?void 0:v.text,onClose:()=>{c(!1)}})]})},Oe=()=>s.jsx(Q,{title:"Comprobaciones",children:s.jsxs(ae,{children:[s.jsx(le,{name:"Comprobaciones",links:[{name:"Inicio",href:Y.root},{name:"Comprobaciones"}]}),s.jsx(ue,{})]})});export{Oe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/BalanceDrawer-O4cqXlu5.js","assets/js/vendor-B39b6gT1.js","assets/js/RightPanel-2SzQigm1.js","assets/js/index-Kl2QvVyT.js","assets/css/build-Bl0dWaDY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=ExpensesControl-Lv9Vsvzi.js.map