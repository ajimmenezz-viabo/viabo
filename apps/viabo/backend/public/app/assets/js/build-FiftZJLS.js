import{al as V,G as E,H as A,I as R,r as m,d as $,g as D,Q as W,b as X,C as G,_ as Q,J as z,j as r,S as f,T as j,V as S,N as U,P as q,ae as J}from"./index-mplo7Cy0.js";import{B as Y,a as Z,b as w,c as ee}from"./build-awl8fLyI.js";import{P as re}from"./build-Prpaxqgv.js";import{s as se,a as te}from"./build-tosIezQB.js";import{C as oe}from"./build-O459-JAu.js";import{g as ne}from"./build-leKxOdBh.js";import{M as ie,C as ae,H as le}from"./build-oGgHkT3Q.js";import{L as O}from"./build-1LmYI3dU.js";import"./build-1rkYb17X.js";import"./build-Qg3JQUP_.js";import"./build-9Efc2eo3.js";import"./build-D3xC4GbD.js";import"./build-nSdaxBfa.js";import"./build-cj4zBQF0.js";import"./build-olvv2LeH.js";import"./build-DxgzDpLF.js";import"./build-rsBjAxA5.js";import"./build-PfoRwXqx.js";import"./build-UhUpPKic.js";import"./build-M7AoVccO.js";import"./build-jhrJ8roR.js";import"./build-E66JUiqZ.js";import"./build-onu4nqUu.js";const ce={MOVEMENTS:"expenses-card-movements-commerce"},me=async(d,x,g)=>{const n=new URL("/api/cards/movements/commerce",window.location.origin),p=[{field:"date",operator:">=",value:d},{field:"date",operator:"<=",value:x},{field:"operationType",operator:"=",value:"OTROS CARGOS"}];p==null||p.forEach((y,i)=>{Object.entries(y).forEach(([c,h])=>{n.searchParams.set(`filters[${i}][${c}]`,h)})});const{data:a}=await V.get(n.href,{signal:g});return oe(a)},de=(d,x,g={})=>{if(!d||!x)return null;const n=E(A(d),"yyyy-MM-dd HH:mm:ss"),p=E(R(x),"yyyy-MM-dd HH:mm:ss"),[a,y]=m.useState(null),i=$({queryKey:[ce.MOVEMENTS],queryFn:({signal:c})=>me(n,p,c),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...g});return m.useEffect(()=>{if(i!=null&&i.isError){const c=D(i.error,"No se puede obtener la lista de movimientos. Intente nuevamente o reporte a sistemas");y(c),W.error(c,{type:X(i.error)})}},[i.isError,i.error]),{...i,error:a||null}},pe=G(m.lazy(()=>Q(()=>import("./build-zBboOkO4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])))),ue=()=>{const d=new Date,x=se(d,{days:30}),g=d,[n,p]=m.useState(x),[a,y]=m.useState(g),[i,c]=m.useState(!1),{data:h,isError:F,isLoading:_,isFetching:P,error:H,refetch:I}=de(n,a),v=m.useMemo(()=>({startDate:A(n),endDate:R(a),text:`${E(n,"dd MMMM yyyy",{locale:z})} - ${E(a,"dd MMMM yyyy",{locale:z})}`}),[n,a]),N=o=>()=>{var t,s;(s=(t=o==null?void 0:o.expensesControl)==null?void 0:t.otherFiles)==null||s.forEach(e=>{window.open(e,"_blank").focus()})};m.useEffect(()=>{n&&a&&I()},[n,a]);const L=m.useMemo(()=>[{accessorKey:"cardNumber",header:"Tarjeta",enableHiding:!1,size:150,Cell:({cell:o,column:t,row:s})=>{var C,b;const{original:e}=s,u=e==null?void 0:e.isMainCard,l=ne(e==null?void 0:e.paymentProcessor),M=l==null?void 0:l.component;return r.jsxs(f,{direction:"row",spacing:1,alignItems:"center",children:[l&&r.jsx(M,{sx:{width:30,height:30}}),r.jsx(j,{variant:"subtitle2",fontWeight:"bold",noWrap:!0,children:u?e==null?void 0:e.cardNumber:(b=e==null?void 0:e.cardNumber)==null?void 0:b.substr(((C=e==null?void 0:e.cardNumber)==null?void 0:C.length)-4)})]})}},{accessorKey:"ownerCard",header:"Tarjetahabiente",filterVariant:"multi-select",size:150,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s;return r.jsx(f,{children:r.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.ownerCard})})}},{accessorKey:"description",header:"Movimiento",minSize:120,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s;return r.jsx(f,{children:r.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.description})})}},{accessorKey:"fullDate",header:"Fecha",size:120,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s;return r.jsx(f,{children:r.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.fullDate})})}},{accessorKey:"amount",header:"Monto",size:100,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s,u=(e==null?void 0:e.type)==="ingreso",l=(e==null?void 0:e.type)==="terminal";return r.jsx(j,{variant:"subtitle2",fontWeight:"bold",color:u||l?"success.main":"error",children:u||l?`+ ${e==null?void 0:e.amountFormat}`:`- ${e==null?void 0:e.amountFormat}`})}},{accessorKey:"verified",header:"Comprobación",size:100,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s;return r.jsx(f,{flexDirection:"row",width:1,justifyContent:"center",alignItems:"center",gap:1,mr:2,color:"primary",children:e!=null&&e.verified?r.jsx(Y,{color:"green",fontWeight:"bold",fontSize:"18px"}):r.jsx(Z,{fontSize:"18px",color:"red"})})}},{accessorKey:"files",header:"Archivos",size:100,enableFilters:!1,enableColumnFilter:!1,Cell:({cell:o,column:t,row:s})=>{var u,l,M,C,b,T,B,k;const{original:e}=s;return r.jsxs(f,{flexDirection:"row",color:"primary",children:[((u=e==null?void 0:e.expensesControl)==null?void 0:u.isInvoice)&&r.jsxs(f,{direction:"row",spacing:.5,children:[r.jsx(S,{title:"Descargar PDF",LinkComponent:O,href:(M=(l=e==null?void 0:e.expensesControl)==null?void 0:l.invoiceFiles)==null?void 0:M.pdf,target:"_blank",color:"error",children:r.jsx(w,{fontSize:"18px"})}),r.jsx(S,{title:"Descargar XML",LinkComponent:O,href:(b=(C=e==null?void 0:e.expensesControl)==null?void 0:C.invoiceFiles)==null?void 0:b.xml,target:"_blank",color:"info",children:r.jsx(ee,{fontSize:"18px"})})]}),!((T=e==null?void 0:e.expensesControl)!=null&&T.isInvoice)&&((k=(B=e==null?void 0:e.expensesControl)==null?void 0:B.otherFiles)==null?void 0:k.length)>0&&r.jsx(S,{color:"primary",title:"Descargar Archivos",onClick:N(e),children:r.jsx(re,{fontSize:"20px"})})]})}}],[]),K=o=>{const{startDate:t,endDate:s}=o;s!==null&&t!==null&&(y(s),p(t))};return r.jsxs(r.Fragment,{children:[r.jsxs(U,{children:[r.jsx(te,{startDate:n,endDate:a,onChangeDateRange:K,onOpenBalance:()=>c(!0),loading:P}),r.jsx(ie,{enableColumnPinning:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:L,data:(h==null?void 0:h.movements)||[],isError:F,textError:H,selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"fullDate",desc:!0}]},state:{isLoading:_,showAlertBanner:F,showProgressBars:P},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",size:80},"mrt-row-select":{size:10}},muiTableBodyRowProps:({row:o})=>({sx:t=>({backgroundColor:t.palette.background.paper,"&.Mui-selected":{backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}}})}),muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}}})]}),r.jsx(pe,{open:i,card:h,dateRange:v==null?void 0:v.text,onClose:()=>{c(!1)}})]})},Ie=()=>r.jsx(q,{title:"Comprobaciones",children:r.jsxs(ae,{children:[r.jsx(le,{name:"Comprobaciones",links:[{name:"Inicio",href:J.root},{name:"Comprobaciones"}]}),r.jsx(ue,{})]})});export{Ie as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-zBboOkO4.js","assets/js/index-mplo7Cy0.js","assets/css/build-pvjN466W.css","assets/js/build-nSdaxBfa.js","assets/js/build-D3xC4GbD.js","assets/js/build-oGgHkT3Q.js","assets/js/build-PfoRwXqx.js","assets/js/build-UhUpPKic.js","assets/js/build-Qg3JQUP_.js","assets/js/build-M7AoVccO.js","assets/js/build-jhrJ8roR.js","assets/js/build-9Efc2eo3.js","assets/js/build-E66JUiqZ.js","assets/js/build-onu4nqUu.js","assets/js/build-1LmYI3dU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}