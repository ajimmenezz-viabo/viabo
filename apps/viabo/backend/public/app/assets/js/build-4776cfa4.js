import{ai as V,G as E,H as A,J as R,r as m,d as $,g as D,Q as W,b as X,C as G,_ as Q,K as z,j as r,S as f,T as j,I as S,P as U,ab as q}from"./index-e73cf17b.js";import{B as J,a as Y,b as Z,c as w}from"./build-b63e25d5.js";import{b as ee}from"./build-925ac39f.js";import{s as re,a as se}from"./build-a99081e6.js";import{C as te}from"./build-ae292b2c.js";import{g as oe}from"./build-e432cd3b.js";import{M as ne}from"./build-dba47033.js";import{L as O}from"./build-0c8c73a4.js";import{C as ie}from"./build-c6c15f5a.js";import{a as ae,H as le}from"./build-de5e9f77.js";import"./build-2184f94b.js";import"./build-08243790.js";import"./build-ac55763c.js";import"./build-605ae648.js";import"./build-8193b4a1.js";import"./build-7101bc47.js";import"./build-34e19a43.js";import"./build-9964c057.js";import"./build-3c0d21c0.js";import"./build-350bceb8.js";import"./build-89d6f61d.js";import"./build-5033c3a7.js";import"./build-7c7c485c.js";import"./build-a2715f08.js";const ce={MOVEMENTS:"expenses-card-movements-commerce"},me=async(d,x,g)=>{const n=new URL("/api/cards/movements/commerce",window.location.origin),p=[{field:"date",operator:">=",value:d},{field:"date",operator:"<=",value:x},{field:"operationType",operator:"=",value:"OTROS CARGOS"}];p==null||p.forEach((y,i)=>{Object.entries(y).forEach(([c,h])=>{n.searchParams.set(`filters[${i}][${c}]`,h)})});const{data:a}=await V.get(n.href,{signal:g});return te(a)},de=(d,x,g={})=>{if(!d||!x)return null;const n=E(A(d),"yyyy-MM-dd HH:mm:ss"),p=E(R(x),"yyyy-MM-dd HH:mm:ss"),[a,y]=m.useState(null),i=$({queryKey:[ce.MOVEMENTS],queryFn:({signal:c})=>me(n,p,c),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...g});return m.useEffect(()=>{if(i!=null&&i.isError){const c=D(i.error,"No se puede obtener la lista de movimientos. Intente nuevamente o reporte a sistemas");y(c),W.error(c,{type:X(i.error)})}},[i.isError,i.error]),{...i,error:a||null}},pe=G(m.lazy(()=>Q(()=>import("./build-4eedce32.js"),["assets/js/build-4eedce32.js","assets/js/index-e73cf17b.js","assets/css/build-a4b698a0.css","assets/js/build-4a40c88d.js","assets/js/build-c6c15f5a.js","assets/js/build-542501a4.js","assets/js/build-02458b41.js","assets/js/build-8193b4a1.js","assets/js/build-605ae648.js","assets/js/build-dba47033.js","assets/js/build-89d6f61d.js","assets/js/build-5033c3a7.js","assets/js/build-de5e9f77.js","assets/js/build-a2715f08.js","assets/js/build-0c8c73a4.js","assets/js/build-08243790.js","assets/js/build-7101bc47.js","assets/js/build-34e19a43.js","assets/js/build-ac55763c.js","assets/js/build-7c7c485c.js"]))),ue=()=>{const d=new Date,x=re(d,{days:30}),g=d,[n,p]=m.useState(x),[a,y]=m.useState(g),[i,c]=m.useState(!1),{data:h,isError:F,isLoading:_,isFetching:P,error:H,refetch:I}=de(n,a),v=m.useMemo(()=>({startDate:A(n),endDate:R(a),text:`${E(n,"dd MMMM yyyy",{locale:z})} - ${E(a,"dd MMMM yyyy",{locale:z})}`}),[n,a]),L=o=>()=>{var t,s;(s=(t=o==null?void 0:o.expensesControl)==null?void 0:t.otherFiles)==null||s.forEach(e=>{window.open(e,"_blank").focus()})};m.useEffect(()=>{n&&a&&I()},[n,a]);const N=m.useMemo(()=>[{accessorKey:"cardNumber",header:"Tarjeta",enableHiding:!1,size:150,Cell:({cell:o,column:t,row:s})=>{var C,b;const{original:e}=s,u=e==null?void 0:e.isMainCard,l=oe(e==null?void 0:e.paymentProcessor),M=l==null?void 0:l.component;return r.jsxs(f,{direction:"row",spacing:1,alignItems:"center",children:[l&&r.jsx(M,{sx:{width:30,height:30}}),r.jsx(j,{variant:"subtitle2",fontWeight:"bold",noWrap:!0,children:u?e==null?void 0:e.cardNumber:(b=e==null?void 0:e.cardNumber)==null?void 0:b.substr(((C=e==null?void 0:e.cardNumber)==null?void 0:C.length)-4)})]})}},{accessorKey:"ownerCard",header:"Tarjetahabiente",filterVariant:"multi-select",size:150,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s;return r.jsx(f,{children:r.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.ownerCard})})}},{accessorKey:"description",header:"Movimiento",minSize:120,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s;return r.jsx(f,{children:r.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.description})})}},{accessorKey:"fullDate",header:"Fecha",size:120,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s;return r.jsx(f,{children:r.jsx(j,{variant:"subtitle2",children:e==null?void 0:e.fullDate})})}},{accessorKey:"amount",header:"Monto",size:100,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s,u=(e==null?void 0:e.type)==="ingreso",l=(e==null?void 0:e.type)==="terminal";return r.jsx(j,{variant:"subtitle2",fontWeight:"bold",color:u||l?"success.main":"error",children:u||l?`+ ${e==null?void 0:e.amountFormat}`:`- ${e==null?void 0:e.amountFormat}`})}},{accessorKey:"verified",header:"Comprobación",size:100,Cell:({cell:o,column:t,row:s})=>{const{original:e}=s;return r.jsx(f,{flexDirection:"row",width:1,justifyContent:"center",alignItems:"center",gap:1,mr:2,color:"primary",children:e!=null&&e.verified?r.jsx(J,{color:"green",fontWeight:"bold",fontSize:"18px"}):r.jsx(Y,{fontSize:"18px",color:"red"})})}},{accessorKey:"files",header:"Archivos",size:100,enableFilters:!1,enableColumnFilter:!1,Cell:({cell:o,column:t,row:s})=>{var u,l,M,C,b,T,B,k;const{original:e}=s;return r.jsxs(f,{flexDirection:"row",color:"primary",children:[((u=e==null?void 0:e.expensesControl)==null?void 0:u.isInvoice)&&r.jsxs(f,{direction:"row",spacing:.5,children:[r.jsx(S,{title:"Descargar PDF",LinkComponent:O,href:(M=(l=e==null?void 0:e.expensesControl)==null?void 0:l.invoiceFiles)==null?void 0:M.pdf,target:"_blank",color:"error",children:r.jsx(Z,{fontSize:"18px"})}),r.jsx(S,{title:"Descargar XML",LinkComponent:O,href:(b=(C=e==null?void 0:e.expensesControl)==null?void 0:C.invoiceFiles)==null?void 0:b.xml,target:"_blank",color:"info",children:r.jsx(w,{fontSize:"18px"})})]}),!((T=e==null?void 0:e.expensesControl)!=null&&T.isInvoice)&&((k=(B=e==null?void 0:e.expensesControl)==null?void 0:B.otherFiles)==null?void 0:k.length)>0&&r.jsx(S,{color:"primary",title:"Descargar Archivos",onClick:L(e),children:r.jsx(ee,{fontSize:"20px"})})]})}}],[]),K=o=>{const{startDate:t,endDate:s}=o;s!==null&&t!==null&&(y(s),p(t))};return r.jsxs(r.Fragment,{children:[r.jsxs(ie,{children:[r.jsx(se,{startDate:n,endDate:a,onChangeDateRange:K,onOpenBalance:()=>c(!0),loading:P}),r.jsx(ne,{enableColumnPinning:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:N,data:(h==null?void 0:h.movements)||[],isError:F,textError:H,selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"fullDate",desc:!0}]},state:{isLoading:_,showAlertBanner:F,showProgressBars:P},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",size:80},"mrt-row-select":{size:10}},muiTableBodyRowProps:({row:o})=>({sx:t=>({backgroundColor:t.palette.background.paper,"&.Mui-selected":{backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}}})}),muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}}})]}),r.jsx(pe,{open:i,card:h,dateRange:v==null?void 0:v.text,onClose:()=>{c(!1)}})]})},Le=()=>r.jsx(U,{title:"Comprobaciones",children:r.jsxs(ae,{children:[r.jsx(le,{name:"Comprobaciones",links:[{name:"Inicio",href:q.root},{name:"Comprobaciones"}]}),r.jsx(ue,{})]})});export{Le as default};
