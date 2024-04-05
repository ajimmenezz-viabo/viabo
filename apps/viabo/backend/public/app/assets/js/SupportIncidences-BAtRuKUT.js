import{T as R,a as x,U as A,g as y,b as P,t as U,j as M,W as p,L as B,_ as z,P as w,p as H,X as V}from"./index-B-z26lbo.js";import{u as v,r as c,i as o,T as S,B as N,e as g,U as j,aM as W,bg as q,bK as $,bL as I,S as _}from"./vendor-5lkxkETF.js";import{L as D}from"./TextMaxLine-ChrJUY3q.js";import{T as F}from"./tickets-support-list-keys-S53qn0fN.js";import{f as L,b as Q}from"./formatTime-jCgU2sMR.js";import{M as G}from"./MaterialDataTable-CeaDrhsC.js";import{u as K}from"./useMaterialTable-8QQmzXWd.js";import{C as X,H as Y}from"./HeaderPage-Cjh8Zw77.js";const J=r=>r==null?void 0:r.map(e=>({id:e==null?void 0:e.id,attendant:e==null?void 0:e.assignedName,requester:e==null?void 0:e.applicantName,description:e==null?void 0:e.description,cause:{id:e==null?void 0:e.supportReasonId,name:e==null?void 0:e.supportReasonName},date:{original:e==null?void 0:e.createDate,dateTime:e!=null&&e.createDate?L(e==null?void 0:e.createDate):""},status:{id:e==null?void 0:e.statusId,name:e==null?void 0:e.statusName},createdBy:{id:e==null?void 0:e.createdByUser}})),Z=r=>r==null?void 0:r.map(e=>({id:e==null?void 0:e.id,attendant:e==null?void 0:e.assignedName,requester:e==null?void 0:e.applicantName,description:e==null?void 0:e.description,cause:{id:e==null?void 0:e.supportReasonId,name:e==null?void 0:e.supportReasonName},date:{original:e==null?void 0:e.createDate,dateTime:e!=null&&e.createDate?L(e==null?void 0:e.createDate):""},status:{id:e==null?void 0:e.statusId,name:e==null?void 0:e.statusName},createdBy:{id:e==null?void 0:e.createdByUser}})),k=(r,e)=>{var u,T;const{total:n,page:s,limit:l}=r,i=((u=r==null?void 0:r.participants)==null?void 0:u.map((t,C)=>{const{name:d,initials:f,photo:h}=t;return{id:C,name:d,initials:f,avatar:h&&h!==""?h:"/"}}))||[],a=((T=r==null?void 0:r.messages)==null?void 0:T.map((t,C)=>({id:t==null?void 0:t.id,name:t==null?void 0:t.userName,initials:R((t==null?void 0:t.userName)||""),message:t==null?void 0:t.description,createDate:{fToNow:t!=null&&t.createDate?Q(t==null?void 0:t.createDate):"",original:t==null?void 0:t.createDate},my:!!(t!=null&&t.isUserSentMessage),attachment:(t==null?void 0:t.files)||[],avatar:t!=null&&t.photo&&(t==null?void 0:t.photo)!==""?t==null?void 0:t.photo:"/",isSent:!0})))||[];return{results:{participants:i,messages:a},next:Number(n)>Number(s)*Number(l)?e+1:void 0,canCloseTicket:!!(r!=null&&r.userCanCloseTicket)}},ee=async()=>{const r=new URL("/api/tickets",window.location.origin);r.searchParams.set("created",!0);const{data:e}=await x.get(r);return Z(e)},re=async()=>{const r=new URL("/api/tickets",window.location.origin);r.searchParams.set("assigned",!0);const{data:e}=await x.get(r);return J(e)},Ie=async(r,e)=>{const n=new URL("/api/tickets/messages",window.location.origin);n.searchParams.set("ticket",r),n.searchParams.set("limit",10),n.searchParams.set("page",e);const{data:s}=await x.get(n);return k(s,e)},_e=async r=>(await x.post("/api/tickets/message/new",r==null?void 0:r.data),r==null?void 0:r.ticketId),Ae=async r=>{const{data:e}=await x.put(`/api/tickets/ticket/${r==null?void 0:r.ticketId}/close`);return e},ne=[{id:"1",name:"Nuevo",color:"info"},{id:"2",name:"Problema",color:"warning"},{id:"3",name:"Resuelto",color:"success"}],O=r=>{var e;return((e=ne.find(n=>n.id.toString()===r))==null?void 0:e.color)||"info"},se=()=>{const r=v(),{fontSize:e}=A("caption");return c.useMemo(()=>[{id:"id",accessorKey:"id",header:"ID",enableHiding:!1,size:50,Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>o.jsx(S,{fontWeight:"bold",variant:"subtitle2",children:i})},{id:"cause",accessorFn:n=>{var s;return((s=n==null?void 0:n.cause)==null?void 0:s.name)||null},header:"Causa",Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>o.jsx(S,{variant:"subtitle2",children:i})},{id:"description",accessorKey:"description",header:"Descripción",Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>o.jsx(S,{variant:"subtitle2",children:i})},{id:"requester",header:"Solicita",accessorKey:"requester",maxSize:200,Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>o.jsx(S,{variant:"subtitle2",children:i})},{id:"status",accessorFn:n=>{var s;return((s=n==null?void 0:n.status)==null?void 0:s.name)||null},header:"Estado",maxSize:120,Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>{var u,T;const{original:a}=l;return o.jsx(N,{sx:{display:"flex",pt:1},children:o.jsx(D,{variant:r.palette.mode==="light"?"ghost":"filled",color:O((u=a==null?void 0:a.status)==null?void 0:u.id)||"primary",sx:{textTransform:"capitalize",whiteSpace:"nowrap",fontSize:e},children:(T=a==null?void 0:a.status)==null?void 0:T.name})})}},{id:"date",accessorFn:n=>{var s;return((s=n==null?void 0:n.date)==null?void 0:s.original)||null},header:"Fecha",Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>{var u;const{original:a}=l;return o.jsx(S,{variant:"subtitle2",children:(u=a==null?void 0:a.date)==null?void 0:u.dateTime})}}],[r.palette.mode])},te=(r={})=>{const[e,n]=c.useState(null),s=g({queryKey:[F.ASSIGNED_LIST],queryFn:re,refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...r});return c.useEffect(()=>{if(s!=null&&s.isError){const l=y(s.error,"No se puede obtener la lista de tickets asignados. Intente nuevamente o reporte a sistemas");n(l),j.error(l,{type:P(s.error)})}},[s.isError,s.error]),{...s,error:e||null}},ae=(r={})=>{const[e,n]=c.useState(null),s=g({queryKey:[F.GENERATED_LIST],queryFn:ee,refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...r});return c.useEffect(()=>{if(s!=null&&s.isError){const l=y(s.error,"No se puede obtener la lista de tickets generados. Intente nuevamente o reporte a sistemas");n(l),j.error(l,{type:P(s.error)})}},[s.isError,s.error]),{...s,error:e||null}},oe={ticket:null,totalTicketsGenerated:0,totalTicketsAssigned:0,isTableFullScreen:!1,openTicketConversation:!1,canCloseTicket:!1},le=(r,e)=>({...oe,setSupportTicketDetails:n=>{r(s=>({ticket:n}),!1,"SET_SUPPORT_TICKET_DETAILS")},setOpenTicketConversation:n=>{r(s=>({openTicketConversation:n}),!1,"SET_SUPPORT_TICKET_CONVERSATION")},setFullScreenTableSupportList:n=>{r(s=>({isTableFullScreen:n}),!1,"SET_FULL_SCREEN_TABLE_SUPPORT_LIST")},setTotalSupportTicketsGenerated:n=>{r(s=>({totalTicketsGenerated:n}),!1,"SET_TOTAL_SUPPORT_TICKETS_GENERATED")},setTotalSupportTicketsAssigned:n=>{r(s=>({totalTicketsAssigned:n}),!1,"SET_TOTAL_SUPPORT_TICKETS_ASSIGNED")},setCanCloseTicket:n=>{r(s=>({canCloseTicket:n}),!1,"SET_CAN_CLOSE_SUPPORT_TICKET")}}),b=U(le),ie=()=>{const r=v(),{fontSize:e}=A("caption");return c.useMemo(()=>[{id:"id",accessorKey:"id",header:"ID",enableHiding:!1,size:50,Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>o.jsx(S,{fontWeight:"bold",variant:"subtitle2",children:i})},{id:"cause",accessorFn:n=>{var s;return((s=n==null?void 0:n.cause)==null?void 0:s.name)||null},header:"Causa",Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>o.jsx(S,{variant:"subtitle2",children:i})},{id:"description",accessorKey:"description",header:"Descripción",Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>o.jsx(S,{variant:"subtitle2",children:i})},{id:"attendant",header:"Atiende",accessorKey:"attendant",maxSize:200,Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>o.jsx(S,{variant:"subtitle2",children:i})},{id:"status",accessorFn:n=>{var s;return((s=n==null?void 0:n.status)==null?void 0:s.name)||null},header:"Estado",maxSize:120,Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>{var u,T;const{original:a}=l;return o.jsx(N,{sx:{display:"flex",pt:1},children:o.jsx(D,{variant:r.palette.mode==="light"?"ghost":"filled",color:O((u=a==null?void 0:a.status)==null?void 0:u.id)||"primary",sx:{textTransform:"capitalize",whiteSpace:"nowrap",fontSize:e},children:(T=a==null?void 0:a.status)==null?void 0:T.name})})}},{id:"date",accessorFn:n=>{var s;return((s=n==null?void 0:n.date)==null?void 0:s.original)||null},header:"Fecha",Cell:({cell:n,column:s,row:l,renderedCellValue:i})=>{var u;const{original:a}=l;return o.jsx(S,{variant:"subtitle2",children:(u=a==null?void 0:a.date)==null?void 0:u.dateTime})}}],[r.palette.mode])},ue=()=>{const{data:r,isLoading:e,isError:n,error:s,isFetching:l,refetch:i}=te(),{setTotalSupportTicketsAssigned:a,setFullScreenTableSupportList:u,setSupportTicketDetails:T,setOpenTicketConversation:t}=b(),C=se(),[d,f]=c.useState({}),h=K(n,s,{columns:C,data:r||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableDensityToggle:!1,enableMultiRowSelection:!1,initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:e,showAlertBanner:n,showProgressBars:l,rowSelection:d},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},enableColumnResizing:!0,layoutMode:"grid",muiTableBodyRowProps:({row:E})=>({onClick:()=>{E.getToggleSelectedHandler(),T(E==null?void 0:E.original),t(!0)},selected:d[E.id],sx:m=>({cursor:"pointer",backgroundColor:"inherit","&.Mui-selected":{backgroundColor:m.palette.action.selected,"&:hover":{backgroundColor:m.palette.action.hover}}})}),positionToolbarAlertBanner:"none",onRowSelectionChange:f});return c.useEffect(()=>{i()},[]),c.useEffect(()=>{r!=null&&r.length?a(r==null?void 0:r.length):a(0)},[r]),c.useEffect(()=>{u(h.getState().isFullScreen)},[h.getState().isFullScreen]),o.jsx(G,{table:h})},ce=()=>{const{data:r,isLoading:e,isError:n,error:s,isFetching:l,refetch:i}=ae(),{setTotalSupportTicketsGenerated:a,setFullScreenTableSupportList:u,setSupportTicketDetails:T,setOpenTicketConversation:t}=b(),C=ie(),[d,f]=c.useState({}),h=K(n,s,{columns:C,data:r||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableDensityToggle:!1,enableMultiRowSelection:!1,initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:e,showAlertBanner:n,showProgressBars:l,rowSelection:d},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},enableColumnResizing:!0,layoutMode:"grid",muiTableBodyRowProps:({row:E})=>({onClick:()=>{E.getToggleSelectedHandler(),T(E==null?void 0:E.original),t(!0)},sx:m=>({cursor:"pointer",backgroundColor:"inherit","&.Mui-selected":{backgroundColor:m.palette.action.selected,"&:hover":{backgroundColor:m.palette.action.hover}}})}),positionToolbarAlertBanner:"none",onRowSelectionChange:f});return c.useEffect(()=>{i()},[]),c.useEffect(()=>{r!=null&&r.length?a(r==null?void 0:r.length):a(0)},[r]),c.useEffect(()=>{u(h.getState().isFullScreen)},[h.getState().isFullScreen]),o.jsx(G,{table:h})},de=()=>{const r=M(),e=r==null?void 0:r.permissions.includes(p.GENERATED_TICKETS),n=r==null?void 0:r.permissions.includes(p.ASSIGNED_TICKETS),s=b(d=>d.totalTicketsGenerated),l=b(d=>d.totalTicketsAssigned),i=b(d=>d.isTableFullScreen),[a,u]=c.useState(null),T=e&&n,t=c.useMemo(()=>a===p.GENERATED_TICKETS?"Generados":"Asignados",[a]),C=c.useMemo(()=>a===p.GENERATED_TICKETS?s:l,[a,s,l]);return c.useEffect(()=>u(T?p.ASSIGNED_TICKETS:e?p.GENERATED_TICKETS:n?p.ASSIGNED_TICKETS:p.GENERATED_TICKETS),[]),o.jsxs(W,{variant:"outlined",sx:d=>i?{}:{boxShadow:d.customShadows.z24,backgroundColor:d.palette.mode==="light"?"inherit":d.palette.grey[50012]},children:[o.jsx(q,{sx:d=>({pb:2}),title:`Lista de Tickets ${t}`,subheader:`Tienes ${C||0} Tickets ${t}`,action:T?o.jsxs($,{color:"primary",value:a,exclusive:!0,onChange:(d,f)=>{f&&u(f)},"aria-label":"Ticket View",sx:{backgroundColor:"inherit"},children:[o.jsx(I,{fullWidth:!0,sx:{width:1},value:p.ASSIGNED_TICKETS,children:o.jsx(_,{direction:"row",spacing:1,alignItems:"center",children:o.jsx(S,{variant:"subtitle2",children:"Asignados"})})}),o.jsx(I,{fullWidth:!0,sx:{width:1},value:p.GENERATED_TICKETS,children:o.jsx(_,{direction:"row",spacing:1,alignItems:"center",children:o.jsx(S,{variant:"subtitle2",children:"Generados"})})})]}):o.jsx(o.Fragment,{})}),a===p.GENERATED_TICKETS&&o.jsx(ce,{}),a===p.ASSIGNED_TICKETS&&o.jsx(ue,{})]})},Te=B(c.lazy(()=>z(()=>import("./TicketSupportConversationDrawer-BQxrokY3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])))),pe=()=>o.jsx(w,{title:"Incidencias & Consultas",children:o.jsxs(X,{children:[o.jsx(Y,{name:"Incidencias & Consultas",links:[{name:"Inicio",href:H.root},{name:"Soporte",href:V.incidences},{name:"Incidencias"}]}),o.jsx(de,{}),o.jsx(Te,{})]})}),ye=Object.freeze(Object.defineProperty({__proto__:null,SupportIncidences:pe},Symbol.toStringTag,{value:"Module"}));export{ye as S,_e as a,Ae as f,Ie as g,b as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/TicketSupportConversationDrawer-BQxrokY3.js","assets/js/index-B-z26lbo.js","assets/js/vendor-5lkxkETF.js","assets/css/build-Bl0dWaDY.css","assets/js/TextMaxLine-ChrJUY3q.js","assets/js/formik.esm-CTTSENmf.js","assets/js/formatTime-jCgU2sMR.js","assets/js/matchTypes-mENztEWg.js","assets/js/UploadSingleFile-D6AfvhwH.js","assets/js/fade-CViozI82.js","assets/js/transition-anLY3gj9.js","assets/js/formatNumber-dGNhWwxT.js","assets/js/tickets-support-list-keys-S53qn0fN.js","assets/js/RightPanel-Dv9-fhxv.js","assets/js/MaterialDataTable-CeaDrhsC.js","assets/js/useMaterialTable-8QQmzXWd.js","assets/js/HeaderPage-Cjh8Zw77.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=SupportIncidences-BAtRuKUT.js.map