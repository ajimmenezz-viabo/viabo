import{z as ge,j as e,ak as he,O as S,r as g,al as fe,S as E,T as C,am as _,d as xe,g as Se,an as B,n as Ce,B as I,p as Ae,a2 as H,V as O,U as Ee,N as je,Q as D,k as ve,P as Ie,ae as be,af as ye,ag as _e,C as q,_ as W}from"./index-ixKXqnJp.js";import{A as $,e as Te}from"./build-ziaGZLXR.js";import{r as we}from"./build-dm4yWFPt.js";import{g as Pe}from"./build-OnzdUfjQ.js";import{C as Oe}from"./build-_JHXRbD6.js";import{g as De}from"./build-FAvjNavH.js";import{c as Le}from"./build-oHIjvIrR.js";import{C as Ne}from"./build-01KfIDYg.js";import{M as ze}from"./build-aUYrQuCN.js";import{g as Fe}from"./build-N8x3nlwn.js";import{S as Me,a as Re,F as Ue,M as Ve,C as ke,H as He}from"./build-LwbiozbY.js";import{L as Be,a as qe}from"./build-VQrlUuND.js";import{u as We}from"./build-LAyEB08K.js";import{L as $e}from"./build-pdsvphlv.js";import{A as Ke}from"./build-GjlXFwqt.js";import{F as Qe}from"./build-Vrx0FahE.js";const Ye=ge([e.jsx("circle",{cx:"10",cy:"8",r:"4"},"0"),e.jsx("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"ManageAccounts"),Ge=t=>{const i=De(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);if(i&&Array.isArray(i)){const n=i==null?void 0:i.map(d=>Oe(d)),s=Le(n,"id","cardUserNumber")||[];return{data:s,meta:{total:(s==null?void 0:s.length)??0}}}throw new Error("No se pueden obtener las tarjetas")};var N={},Je=he;Object.defineProperty(N,"__esModule",{value:!0});var K=N.default=void 0,Xe=Je(we()),Ze=e,es=(0,Xe.default)((0,Ze.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");K=N.default=es;const Q=({open:t,anchorEl:i,handlePopoverClose:n,data:s})=>{var d,u,f;return s?e.jsx(fe,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:t,anchorEl:i,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},onClose:n,disableRestoreFocus:!0,slotProps:{paper:{sx:{mt:1.5,ml:.5,overflow:"inherit",boxShadow:p=>p.customShadows.z20,border:p=>`solid 1px ${p.palette.grey[5008]}`,width:200}}},children:e.jsxs(E,{spacing:2,p:2,children:[e.jsxs(E,{spacing:.5,flex:1,children:[e.jsx(C,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre (s):"}),e.jsx(C,{variant:"body2",children:((d=s==null?void 0:s.assignUser)==null?void 0:d.name)??"-"})]}),e.jsxs(E,{spacing:.5,flex:1,children:[e.jsx(C,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Apellidos:"}),e.jsx(C,{variant:"body2",children:((u=s==null?void 0:s.assignUser)==null?void 0:u.lastName)??"-"})]}),e.jsxs(E,{spacing:.5,flex:1,children:[e.jsx(C,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Teléfono:"}),e.jsx(C,{variant:"body2",children:((f=s==null?void 0:s.assignUser)==null?void 0:f.phone)??"-"})]})]})}):null};Q.propTypes={anchorEl:S.any,data:S.shape({assignUser:S.shape({lastName:S.string,name:S.string,phone:S.string})}),handlePopoverClose:S.any,open:S.any};const ss=g.memo(Q),ts=async(t,i)=>{const{columnFilters:n,globalFilter:s,pageIndex:d,pageSize:u,sorting:f}=t,p=new URL("/api/cards/commerce",window.location.origin);p.searchParams.set("start",`${d*u}`),p.searchParams.set("size",`${u}`),p.searchParams.set("filters",JSON.stringify(n??[])),p.searchParams.set("globalFilter",s??""),p.searchParams.set("sorting",JSON.stringify(f??[]));const{data:x}=await _.get(p.href,{signal:i});return Ge(x)},_s=async t=>(await _.put("/api/assign/commerce-card/to/user",t),t),Ts=async t=>{const{data:i}=await _.put("/api/card-owner/data/update",t);return i},ws=async t=>{const{data:i}=await _.put(`/api/card-owner/password/reset/${t.id}`);return i},rs=(t={},i={})=>{const{columnFilters:n,globalFilter:s,pageIndex:d,pageSize:u,sorting:f}=t,[p,x]=g.useState(null);return{...xe({queryKey:[$.LIST,n,s,d,u,f],queryFn:async({signal:v})=>ts(t,v),keepPreviousData:!0,onError:v=>{const T=Se(v,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");x(T)},staleTime:6e4,refetchOnWindowFocus:!1,...i}),error:p||null}},ns={cardInfo:null,openUserInfo:!1,hoverInfo:null,hoverElement:null},as=(t,i)=>({...ns,setOpenUserInfo:n=>{t(s=>({openUserInfo:n}),!1,"SET_OPEN_USER_INFO_MODAL")},setCardInfo:n=>{t(s=>({cardInfo:n}),!1,"SET_CARD_INFO")},setHoverInfo:n=>{t(s=>({hoverInfo:n}),!1,"SET_HOVER_INFO")},setHoverElement:n=>{t(s=>({hoverElement:n}),!1,"SET_HOVER_ElEMENT")}}),Y=B(as),os={cards:[],rows:[],openAssign:!1},ls=(t,i)=>({...os,setSelectedCard:n=>{const{cards:s}=i(),d=s.indexOf(n);let u=[];d===-1?u=u.concat(s,n):d===0?u=u.concat(s.slice(1)):d===s.length-1?u=u.concat(s.slice(0,-1)):d>0&&(u=u.concat(s.slice(0,d),s.slice(d+1))),t(f=>({cards:u}),!1,"SET_SELECTED_INACTIVE_CARDS")},setAllCards:n=>{t(s=>({cards:n}),!1,"SET_SELECTED_ALL_INACTIVE_CARDS")},setIndexCards:n=>{t(s=>({rows:n}),!1,"SET_SELECTED_ALL_INACTIVE_ROWS")},setOpenAssign:n=>{t(s=>({openAssign:n}),!1,"SET_OPEN_ASSIGN_SIDEBAR")},resetCards:()=>{t(n=>({cards:[],rows:[]}),!1,"RESET_SELECTED_INACTIVE_CARDS")}}),L=B(ls),G=({resetSelection:t,setResetSelection:i})=>{var k;const[n,s]=g.useState([]),[d,u]=g.useState(""),[f,p]=g.useState([]),[x,J]=g.useState({pageIndex:0,pageSize:10}),[v,T]=g.useState({}),{setOpenUserInfo:X,setCardInfo:Z}=Y(r=>r),ee=L(r=>r.setOpenAssign),se=L(r=>r.setAllCards),te=Ce(),{data:j,isLoading:w,isFetching:re,isError:z,error:ne,refetch:ae}=rs({columnFilters:n??[],globalFilter:d??"",pageIndex:(x==null?void 0:x.pageIndex)??0,pageSize:(x==null?void 0:x.pageSize)??10,sorting:f??[]}),{mutate:oe,isLoading:le}=Te(),[F,M]=g.useState(null),[ie,R]=g.useState(null),[ce,P]=g.useState(null),ue=r=>{M(r.currentTarget)},U=()=>{M(null),R(null)},V=!!F,A=g.useMemo(()=>[{id:"cardNumber",accessorKey:"cardNumber",header:"Tarjeta",enableClickToCopy:!0,enableHiding:!1,size:120,Cell:({cell:r,column:l,row:o})=>{var h,m;const{original:a}=o;return e.jsxs(E,{direction:"row",spacing:1,alignItems:"center",children:[(a==null?void 0:a.cardType)==="Carnet"?e.jsx(Ne,{sx:{width:25,height:25}}):e.jsx(ze,{sx:{width:25,height:25}}),e.jsx(C,{variant:"subtitle2",fontWeight:"bold",noWrap:!0,children:(m=a==null?void 0:a.cardNumber)==null?void 0:m.substr(((h=a==null?void 0:a.cardNumber)==null?void 0:h.length)-4)})]})}},{id:"assigned",accessorFn:r=>{var l;return((l=r==null?void 0:r.assignUser)==null?void 0:l.fullName)||null},Cell:({cell:r,column:l,row:o,renderedCellValue:a})=>{const{original:h}=o;return a!=="-"?e.jsx(E,{direction:"row",spacing:2,alignItems:"center",children:e.jsx($e,{color:"info.main",underline:"none",variant:"subtitle2",component:C,"aria-owns":V?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:m=>{ue(m),R(h)},onMouseLeave:U,children:a})}):a},header:"Asignado",minSize:150},{id:"methods",accessorKey:"methods",header:"Métodos de Fondeo",minSize:120,Cell:({cell:r,column:l,row:o})=>{const a=[],h=["SPEI","PAYCASH"];return h==null||h.forEach(m=>{const c=Fe(m);c&&a.push({component:c==null?void 0:c.component,width:m==="PAYCASH"?50:30,height:m==="PAYCASH"?50:30})}),e.jsx(E,{flexDirection:"row",alignItems:"center",gap:1,children:a==null?void 0:a.map(({component:m,width:c,height:y},me)=>e.jsx(m,{sx:{width:c,height:y}},me))})}},{id:"status",accessorFn:r=>{var l;return((l=r==null?void 0:r.cardStatus)==null?void 0:l.name)||null},header:"Estado",filterVariant:"select",minSize:100,Cell:({cell:r,column:l,row:o,renderedCellValue:a})=>{var m;const{original:h}=o;return a?e.jsx(I,{sx:{display:"flex",pt:1},children:e.jsx(Be,{variant:te.palette.mode==="light"?"ghost":"filled",color:(m=h==null?void 0:h.cardStatus)!=null&&m.isActive?"success":"error",sx:{textTransform:"capitalize"},children:a})}):null}}],[]),de=r=>()=>{var m;const l=((m=r.getSelectedRowModel().flatRows)==null?void 0:m.map(c=>c.original))??[],o=l.some(c=>(c==null?void 0:c.cvv)==="")&&(l==null?void 0:l.length)>1,a=l.some(c=>{var y;return((y=c==null?void 0:c.assignUser)==null?void 0:y.id)!==""});l.every(c=>(c==null?void 0:c.cvv)==="")&&(l==null?void 0:l.length)>1?D.warn("Las tarjetas seleccionadas no tiene cvv , debe asignar una por una"):o?D.warn("Existe al menos una tarjeta seleccionada que no tiene cvv"):a?D.warn("Existe al menos una tarjeta seleccionada que ya esta asignada"):(se(l),ee(!0))},pe=r=>()=>{try{const l=r.getSortedRowModel().rows.map(o=>(A==null?void 0:A.map(a=>o.getValue(a.accessorKey)))||[])??[];Pe((A==null?void 0:A.map(o=>o.header))||[],l,"Stock del comercio")}catch{}},b=We(z,ne,{columns:A,data:(j==null?void 0:j.data)||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,positionActionsColumn:"last",selectAllMode:"all",rowCount:((k=j==null?void 0:j.meta)==null?void 0:k.total)??0,initialState:{density:"compact",sorting:[{id:"assigned",desc:!0}]},onRowSelectionChange:T,state:{isLoading:w,showAlertBanner:z,showProgressBars:re,rowSelection:v??{}},displayColumnDefOptions:{"mrt-row-select":{maxSize:10},"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},muiTableBodyRowProps:({row:r})=>({sx:l=>({backgroundColor:l.palette.background.paper})}),renderTopToolbarCustomActions:({table:r})=>e.jsx(I,{sx:{display:"flex",gap:"1rem"},children:e.jsx(Ae,{onClick:de(r),disabled:!r.getIsSomeRowsSelected(),startIcon:e.jsx(Ke,{width:24,height:24}),children:"Asociar"})}),renderToolbarInternalActions:({table:r})=>e.jsxs(I,{children:[e.jsx(H,{arrow:!0,title:"Actualizar",children:e.jsx(O,{onClick:()=>ae(),children:e.jsx(K,{})})}),e.jsx(Me,{table:r}),e.jsx(H,{title:"Descargar",children:e.jsx(O,{disabled:r.getPrePaginationRowModel().rows.length===0,onClick:pe(r),children:e.jsx(Qe,{})})}),e.jsx(Re,{table:r}),e.jsx(Ue,{table:r})]}),renderRowActions:({row:r,table:l})=>{var m,c;const{original:o}=r,a=(m=o==null?void 0:o.cardStatus)==null?void 0:m.isActive,h=le&&ce===(o==null?void 0:o.id);return e.jsxs(I,{sx:{display:"flex",flex:1,justifyContent:"flex-start",alignItems:"center",flexWrap:"nowrap",gap:"8px"},children:[((c=o==null?void 0:o.assignUser)==null?void 0:c.fullName)!=="-"&&e.jsx(O,{size:"small",color:"primary",disabled:w,onClick:()=>{Z(o),X(!0)},children:e.jsx(Ye,{})}),h?e.jsx(Ee,{size:15,containerProps:{display:"flex",ml:1}}):e.jsx(qe,{disabled:w,size:"sm",color:a?"success":"error",checked:a||!1,inputProps:{"aria-label":"controlled"},onChange:()=>{P(o==null?void 0:o.id),oe({...o,cardON:!a},{onSuccess:()=>{P(null)},onError:()=>{P(null)}})}})]})}});return g.useEffect(()=>{t&&(b==null||b.resetRowSelection(),i(!1))},[t]),e.jsx(I,{maxWidth:"lg",children:e.jsxs(je,{children:[e.jsx(ss,{anchorEl:F,open:V,handlePopoverClose:U,data:ie}),e.jsx(Ve,{table:b})]})})};G.propTypes={resetSelection:S.any,setResetSelection:S.func};const is=q(g.lazy(()=>W(()=>import("./build-H6rC63MQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34])))),cs=q(g.lazy(()=>W(()=>import("./build-WY3NFdyx.js"),__vite__mapDeps([35,1,2]))));function us(){const{openAssign:t,setOpenAssign:i}=L(p=>p),{openUserInfo:n,setOpenUserInfo:s}=Y(p=>p),d=ve(),[u,f]=g.useState(!1);return g.useEffect(()=>()=>{const p=Object.values($);d.cancelQueries(p)},[]),e.jsx(Ie,{title:"Stock de Tarjetas del Comercio",children:e.jsxs(ke,{sx:{height:"100%"},children:[e.jsx(He,{name:"Stock de Tarjetas",links:[{name:"Inicio",href:be.root},{name:"Viabo Card",href:ye.allCards},{name:_e.allCards.name}]}),e.jsx(G,{setResetSelection:f,resetSelection:u}),e.jsx(is,{open:t,handleClose:()=>{i(!1)},handleSuccess:()=>{i(!1),f(!0)}}),e.jsx(cs,{open:n,handleClose:()=>{s(!1)},handleSuccess:()=>{s(!1)}})]})})}const Ps=Object.freeze(Object.defineProperty({__proto__:null,default:us},Symbol.toStringTag,{value:"Module"}));export{Ps as A,_s as a,Ts as b,Y as c,ws as r,L as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-H6rC63MQ.js","assets/js/index-ixKXqnJp.js","assets/css/build-pvjN466W.css","assets/js/build-QRts0fGp.js","assets/js/build-0U7rJSAM.js","assets/js/build-KbTEeZ86.js","assets/js/build-lj6x1nL8.js","assets/js/build-6YIPcFHU.js","assets/js/build-DPpCFjgD.js","assets/js/build-ziaGZLXR.js","assets/js/build-FAvjNavH.js","assets/js/build-_JHXRbD6.js","assets/js/build-dm4yWFPt.js","assets/js/build-oHIjvIrR.js","assets/js/build-dEqz9zUm.js","assets/js/build-OnzdUfjQ.js","assets/js/build-01KfIDYg.js","assets/js/build-aUYrQuCN.js","assets/js/build-N8x3nlwn.js","assets/js/build-zH8OCAbq.js","assets/js/build-zEF68lUW.js","assets/js/build-LwbiozbY.js","assets/js/build-ZOc5AsDV.js","assets/js/build-YOvIjgAO.js","assets/js/build-M__DqRBL.js","assets/js/build-GywV9psu.js","assets/js/build-LPvWp5h1.js","assets/js/build-pdsvphlv.js","assets/js/build-VQrlUuND.js","assets/js/build-etstWp0g.js","assets/js/build-3mvdD2lh.js","assets/js/build-Uc7vb3zK.js","assets/js/build-LAyEB08K.js","assets/js/build-GjlXFwqt.js","assets/js/build-Vrx0FahE.js","assets/js/build-WY3NFdyx.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}