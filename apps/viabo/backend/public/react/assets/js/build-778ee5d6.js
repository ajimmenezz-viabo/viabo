import{z as F,j as e,k as R,a as L,Z as C,g as A,b as k,as as W,r as O,d as H,q as Q,S as D,a2 as K,B as f,T as j}from"./index-5445d16d.js";import{c as w,T as y,g as _,u as g}from"./build-656a338a.js";import{f as I}from"./build-26d602c4.js";import{T as b,g as $,h as G,i as q,j as a,k as Y,M as Z,S as J}from"./build-98df91ca.js";import{a as U}from"./build-5666178f.js";import{G as T}from"./build-1400b2f5.js";import"./build-f8ddfafb.js";import"./build-cf9097da.js";import"./build-99021b88.js";import"./build-5cc597ce.js";import"./build-d3dc267c.js";import"./build-b6012193.js";import"./build-a86b361e.js";import"./build-b8b6de57.js";import"./build-ced4bd65.js";import"./build-7dfea482.js";import"./build-ba4c8c2b.js";import"./build-e4f38d2e.js";import"./build-3c143c77.js";import"./build-29b66785.js";import"./build-42e605bc.js";import"./build-7824b992.js";import"./build-7d6b9cd7.js";import"./build-3e3331ed.js";import"./build-6cbfc9db.js";import"./build-e31e8a44.js";import"./build-205e2358.js";import"./build-bee6630b.js";import"./build-d6c5753f.js";import"./build-48f5e890.js";import"./build-7a8e7821.js";import"./build-ef00e0ae.js";import"./build-e7854443.js";import"./build-4a6d9156.js";import"./build-17108c0c.js";import"./build-9da808a4.js";const X=F(e.jsx("path",{d:"M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V14zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.31.85.09.85-.36z"}),"CompareArrowsRounded"),ee=(i,l,s)=>{var r,d;const c=(l==null?void 0:l.map(o=>{var m,n;return{transactionId:(m=o==null?void 0:o.id)==null?void 0:m.toString(),amount:(n=o==null?void 0:o.amount)==null?void 0:n.toString()}}))??[];return{terminalId:i==null?void 0:i.terminalId,speiCardTransactionId:(r=s==null?void 0:s.id)==null?void 0:r.toString(),speiCardTransactionAmount:(d=s==null?void 0:s.amount)==null?void 0:d.toString(),transactions:c}},te=(i={})=>{const l=R(),s=L(w,i);return{...s,mutate:async(r,d)=>{const{onSuccess:o,onError:m,mutationOptions:n}=d;try{await C.promise(s.mutateAsync(r,n),{pending:"Conciliando movimientos de la terminal ...",success:{render({data:p}){return l.invalidateQueries([y.MOVEMENTS,r==null?void 0:r.terminalId]),o(p),"Se creó la conciliación con éxito"}}})}catch(p){const u=A(p,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");m(u),C.error(u,{type:k(p)})}}}},oe=(i,l,s={})=>{const c=W(l,"yyyy-MM-dd"),[r,d]=O.useState(null),o=i?[y.CONCILIATE_MOVEMENTS,i]:[y.MOVEMENTS,"global"];return{...H(o,({signal:n})=>_(i,c),{staleTime:6e4,refetchOnWindowFocus:!1,onError:n=>{const p=A(n,"No se puede obtener la lista de movimientos para conciliar la terminal. Intente nuevamente o reporte a sistemas");d(p),C.error(p,{type:k(n)})},...s}),error:r||null}},ie=Q(b)(({theme:i})=>({"& td":{paddingTop:i.spacing(.5),paddingBottom:i.spacing(.5),backgroundColor:i.palette.background.neutral}})),He=()=>{const i=g(t=>t.setOpenConciliate),l=g(t=>t.openConciliate),s=g(t=>t.setConciliateMovements),{movements:c,total:r,date:d}=g(t=>t.conciliateInfo),o=g(t=>t.terminal),m=O.useRef(null),{data:n,error:p,isError:u,isFetching:z,isLoading:B}=oe(o==null?void 0:o.terminalId,d,{enabled:!!(o&&d)}),{mutate:M,isLoading:N}=te(),v=R(),E=()=>{i(!1),s(null),v.removeQueries([y.CONCILIATE_MOVEMENTS,o==null?void 0:o.terminalId])},V=()=>{var x,h;const t=(x=m.current)==null?void 0:x.getSelectedRowModel().flatRows;if((t==null?void 0:t.length)>0){const S=ee(o,c,(h=t[0])==null?void 0:h.original);M(S,{onSuccess:()=>{E()},onError:()=>{}})}else C.warn("Debe seleccionar un movimiento de la tarjeta para conciliar los movimientos de la terminal")},P=[{id:"card",header:"Movimientos Tarjeta Asociada",columns:[{accessorKey:"description",header:"Movimiento",size:100},{accessorKey:"date",header:"Fecha",size:130},{accessorKey:"amountFormat",header:"Monto",size:100}]}];return e.jsx(U,{onClose:E,onSuccess:V,isSubmitting:N,fullWidth:!0,scrollType:"body",title:`Conciliar Movimientos ${o==null?void 0:o.name}`,textButtonSuccess:"Conciliar",maxWidth:"md",open:l,children:e.jsx(D,{pt:3,children:e.jsxs(T,{container:!0,spacing:{xs:2},children:[e.jsx(T,{item:!0,xs:12,md:5,children:e.jsx(K,{children:e.jsx($,{sx:{minWidth:200},children:e.jsxs(G,{size:"small",children:[e.jsxs(q,{sx:{borderBottom:t=>`solid 1px ${t.palette.divider}`},children:[e.jsx(b,{children:e.jsx(a,{align:"center",colSpan:3,children:"Movimientos Terminal"})}),e.jsxs(b,{children:[e.jsx(a,{width:40,children:"#"}),e.jsx(a,{align:"left",children:"Descripción"}),e.jsx(a,{align:"right",children:"Monto"})]})]}),e.jsxs(Y,{children:[c==null?void 0:c.map((t,x)=>{var h;return e.jsxs(b,{sx:{borderBottom:S=>`solid 1px ${S.palette.divider}`},children:[e.jsx(a,{children:x+1}),e.jsx(a,{align:"left",children:e.jsxs(f,{sx:{maxWidth:180},children:[e.jsx(j,{variant:"subtitle2",children:t==null?void 0:t.description}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:(h=t==null?void 0:t.transactionDate)==null?void 0:h.fullDate})]})}),e.jsx(a,{align:"right",children:I(t==null?void 0:t.amount)})]},x)}),e.jsxs(ie,{children:[e.jsx(a,{colSpan:1}),e.jsx(a,{align:"right",children:e.jsx(j,{variant:"h6",children:"Total"})}),e.jsx(a,{align:"right",width:140,children:e.jsx(j,{variant:"h6",children:I(r)})})]})]})]})})})}),e.jsx(T,{item:!0,xs:12,md:1,sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(f,{display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(X,{fontSize:"large",color:"primary"})})}),e.jsx(T,{item:!0,xs:12,md:6,children:e.jsx(Z,{enablePinning:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowSelection:!0,enableMultiRowSelection:!1,positionActionsColumn:"last",enableDensityToggle:!1,columns:P||[],data:(n==null?void 0:n.movements)||[],isError:u,textError:p,tableInstanceRef:m,initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:B,showAlertBanner:u,showProgressBars:z},muiTablePaperProps:{elevation:0,sx:t=>({borderRadius:0,backgroundColor:t.palette.background.neutral})},muiBottomToolbarProps:{sx:t=>({backgroundColor:t.palette.background.neutral})},muiTopToolbarProps:{sx:t=>({backgroundColor:t.palette.background.neutral})},displayColumnDefOptions:{"mrt-row-select":{size:12,header:""}},renderToolbarInternalActions:({table:t})=>e.jsx(f,{children:e.jsx(J,{table:t})}),muiTableContainerProps:{sx:{maxHeight:"md"}}})})]})})})};export{He as default};