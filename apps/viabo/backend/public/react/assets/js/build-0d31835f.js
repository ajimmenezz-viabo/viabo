import{a8 as N,as as z,b9 as K,ba as V,r as h,d as _,g as W,Z as $,b as q,au as X,av as D,j as r,S as d,T as C,I as M,H as Q,P as U,a4 as G}from"./index-5445d16d.js";import{B as Y,a as Z,b as J,c as w}from"./build-f8ddfafb.js";import{b as ee}from"./build-c8bdd5f3.js";import{C as re}from"./build-3c143c77.js";import{M as se}from"./build-98df91ca.js";import{a as te,b as oe,H as ne}from"./build-5cc597ce.js";import{M as ie}from"./build-b8b6de57.js";import{L as T}from"./build-a86b361e.js";import{C as ae}from"./build-d6c5753f.js";import{b as le}from"./build-42e605bc.js";import{M as k}from"./build-7c79461b.js";import"./build-cf9097da.js";import"./build-29b66785.js";import"./build-26d602c4.js";import"./build-d3dc267c.js";import"./build-7824b992.js";import"./build-7d6b9cd7.js";import"./build-1400b2f5.js";import"./build-4a6d9156.js";import"./build-e31e8a44.js";import"./build-b6012193.js";const ce={MOVEMENTS:"expenses-card-movements-commerce"},me=async(p,f,g)=>{const n=new URL("/api/cards/movements/commerce",window.location.origin),c=[{field:"date",operator:">=",value:p},{field:"date",operator:"<=",value:f},{field:"operationType",operator:"=",value:"OTROS CARGOS"}];c==null||c.forEach((x,i)=>{Object.entries(x).forEach(([l,y])=>{n.searchParams.set(`filters[${i}][${l}]`,y)})});const{data:a}=await N.get(n.href,{signal:g});return re(a)},de=(p,f,g={})=>{if(!p||!f)return null;const n=z(K(p),"yyyy-MM-dd HH:mm:ss"),c=z(V(f),"yyyy-MM-dd HH:mm:ss"),[a,x]=h.useState(null),i=_({queryKey:[ce.MOVEMENTS],queryFn:({signal:l})=>me(n,c,l),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...g});return h.useEffect(()=>{if(i!=null&&i.isError){const l=W(i.error,"No se puede obtener la lista de movimientos. Intente nuevamente o reporte a sistemas");x(l),$.error(l,{type:q(i.error)})}},[i.isError,i.error]),{...i,error:a||null}},pe=()=>{const p=new Date,f=X(p),g=D(p),[n,c]=h.useState(f),[a,x]=h.useState(g),i=h.useRef(null),{data:l,isError:y,isLoading:O,isFetching:j,error:A,refetch:B}=de(n,a),I=s=>()=>{var o,t;(t=(o=s==null?void 0:s.expensesControl)==null?void 0:o.otherFiles)==null||t.forEach(e=>{window.open(e,"_blank").focus()})};h.useEffect(()=>{n&&a&&B()},[n,a]);const H=h.useMemo(()=>[{accessorKey:"cardNumber",header:"Tarjeta",enableHiding:!1,size:150,Cell:({cell:s,column:o,row:t})=>{var m,b;const{original:e}=t,u=e==null?void 0:e.isMainCard;return r.jsxs(d,{direction:"row",spacing:1,alignItems:"center",children:[(e==null?void 0:e.cardType)==="Carnet"?r.jsx(te,{sx:{width:25,height:25}}):r.jsx(ie,{sx:{width:25,height:25}}),r.jsx(C,{variant:"subtitle2",fontWeight:"bold",noWrap:!0,children:u?e==null?void 0:e.cardNumber:(b=e==null?void 0:e.cardNumber)==null?void 0:b.substr(((m=e==null?void 0:e.cardNumber)==null?void 0:m.length)-4)})]})}},{accessorKey:"ownerCard",header:"Tarjetahabiente",filterVariant:"multi-select",size:150,Cell:({cell:s,column:o,row:t})=>{const{original:e}=t;return r.jsx(d,{children:r.jsx(C,{variant:"subtitle2",children:e==null?void 0:e.ownerCard})})}},{accessorKey:"description",header:"Movimiento",size:120,Cell:({cell:s,column:o,row:t})=>{const{original:e}=t;return r.jsx(d,{children:r.jsx(C,{variant:"subtitle2",children:e==null?void 0:e.description})})}},{accessorKey:"serverDate",header:"Fecha",size:120,Cell:({cell:s,column:o,row:t})=>{const{original:e}=t;return r.jsx(d,{children:r.jsx(C,{variant:"subtitle2",children:e==null?void 0:e.fullDate})})}},{accessorKey:"amount",header:"Monto",size:100,Cell:({cell:s,column:o,row:t})=>{const{original:e}=t,u=(e==null?void 0:e.type)==="ingreso",m=(e==null?void 0:e.type)==="terminal";return r.jsx(C,{variant:"subtitle2",fontWeight:"bold",color:u||m?"success.main":"error",children:u||m?`+ ${e==null?void 0:e.amountFormat}`:`- ${e==null?void 0:e.amountFormat}`})}},{accessorKey:"verified",header:"Comprobación",size:100,Cell:({cell:s,column:o,row:t})=>{const{original:e}=t;return r.jsx(d,{flexDirection:"row",width:1,justifyContent:"center",alignItems:"center",gap:1,mr:2,color:"primary",children:e!=null&&e.verified?r.jsx(Y,{color:"green",fontWeight:"bold",fontSize:"18px"}):r.jsx(Z,{fontSize:"18px",color:"red"})})}},{accessorKey:"files",header:"Archivos",size:100,enableFilters:!1,enableColumnFilter:!1,Cell:({cell:s,column:o,row:t})=>{var u,m,b,v,E,S,F,P;const{original:e}=t;return r.jsxs(d,{flexDirection:"row",color:"primary",children:[((u=e==null?void 0:e.expensesControl)==null?void 0:u.isInvoice)&&r.jsxs(d,{direction:"row",spacing:.5,children:[r.jsx(M,{title:"Descargar PDF",LinkComponent:T,href:(b=(m=e==null?void 0:e.expensesControl)==null?void 0:m.invoiceFiles)==null?void 0:b.pdf,target:"_blank",color:"error",children:r.jsx(J,{fontSize:"18px"})}),r.jsx(M,{title:"Descargar XML",LinkComponent:T,href:(E=(v=e==null?void 0:e.expensesControl)==null?void 0:v.invoiceFiles)==null?void 0:E.xml,target:"_blank",color:"info",children:r.jsx(w,{fontSize:"18px"})})]}),!((S=e==null?void 0:e.expensesControl)!=null&&S.isInvoice)&&((P=(F=e==null?void 0:e.expensesControl)==null?void 0:F.otherFiles)==null?void 0:P.length)>0&&r.jsx(M,{color:"primary",title:"Descargar Archivos",onClick:I(e),children:r.jsx(ee,{fontSize:"20px"})})]})}}],[]),L=s=>{a!==null&&s>a&&x(s),c(s)},R=s=>{n!==null&&s<n&&c(s),x(s)};return r.jsx(r.Fragment,{children:r.jsxs(ae,{children:[r.jsxs(d,{p:2,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[r.jsx(k,{size:"small",value:n,onChange:L,maxDate:a,slotProps:{textField:{size:"small",required:!0}},disabled:j,format:"dd MMMM yyyy"}),r.jsx(le,{children:"-"}),r.jsx(k,{size:"small",value:a,onChange:R,minDate:n,slotProps:{textField:{size:"small",required:!0}},disabled:j,format:"dd MMMM yyyy"})]}),r.jsx(Q,{sx:{borderStyle:"dashed"}}),r.jsx(se,{enablePinning:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:H,data:(l==null?void 0:l.movements)||[],isError:y,textError:A,selectAllMode:"all",tableInstanceRef:i,initialState:{density:"compact",sorting:[{id:"serverDate",desc:!0}]},state:{isLoading:O,showAlertBanner:y,showProgressBars:j},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",size:80},"mrt-row-select":{size:10}},muiTableBodyRowProps:({row:s})=>({sx:o=>({backgroundColor:o.palette.background.paper,"&.Mui-selected":{backgroundColor:o.palette.action.selected,"&:hover":{backgroundColor:o.palette.action.hover}}})}),muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}}})]})})},Ie=()=>r.jsx(U,{title:"Comprobaciones",children:r.jsxs(oe,{children:[r.jsx(ne,{name:"Comprobaciones",links:[{name:"Inicio",href:G.root},{name:"Comprobaciones"}]}),r.jsx(pe,{})]})});export{Ie as default};