import{g,a as C,L as j,_ as k,D as I,S as L,E as P}from"./index-B-U8M-8N.js";import{r as m,dY as F,a9 as T,c as N,f as D,i as o,S as d,T as w,a0 as A,dZ as O}from"./vendor-CEMfbhOc.js";import"./TextMaxLine-D6XZvUuW.js";import{T as f}from"./tickets-support-list-keys-S53qn0fN.js";import{u as y,g as R,f as b}from"./SupportIncidences-BCwUOpKp.js";import{i as S}from"./matchTypes-BFKCRNnN.js";import"./formik.esm-Dshy1xjd.js";import"./formatTime-mlJJpQBT.js";import"./UploadSingleFile-B0jkdwVt.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./formatNumber-Df8NwpjV.js";import"./MaterialDataTable-CDmLz-NL.js";import"./useMaterialTable-9wOa4uxn.js";import"./HeaderPage-DRv2GeZX.js";const M=(s,i={})=>{const[e,l]=m.useState(null),a=y(r=>r.setCanCloseTicket),t=F({queryKey:[f.TICKET_CONVERSATION,s],queryFn:async({pageParam:r=1})=>{const n=await R(s,r);return a(!!(n!=null&&n.canCloseTicket)),n},getNextPageParam:r=>r.next,refetchOnMount:"always",staleTime:60*5e3,...i});return m.useEffect(()=>{if(t!=null&&t.isError){const r=g(t.error,"No se puede obtener la conversación del ticket. Intente nuevamente o reporte a sistemas");l(r),T.error(r,{type:C(t.error)}),a(!1)}},[t.isError,t.error]),{...t,error:e||null}},z=(s={})=>{const i=N(),e=D({mutationFn:b,...s});return{...e,mutate:async(a,t)=>{const{onSuccess:r,onError:n,...p}=t;try{await T.promise(e.mutateAsync(a,p),{pending:"Finalizando Ticket...",success:{render({data:c}){return i.invalidateQueries([f.ASSIGNED_LIST]),i.invalidateQueries([f.GENERATED_LIST]),S(r)&&r(c),"Se finalizo el ticket con éxito"}}})}catch(c){const u=g(c,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");S(n)&&n(u),T.error(u,{type:C(c)})}}}},B=j(m.lazy(()=>k(()=>import("./TicketConversationLayout-BIUiGqyo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])))),oe=()=>{var E;const{openTicketConversation:s,setOpenTicketConversation:i,ticket:e,setSupportTicketDetails:l,canCloseTicket:a}=y(),t=M(e==null?void 0:e.id,{enabled:!!(e!=null&&e.id)}),{mutate:r,isLoading:n}=z(),{isLoading:p,error:c,isError:u,refetch:h,data:v,fetchNextPage:K}=t;m.useEffect(()=>{s&&(e!=null&&e.id)&&h()},[s,e==null?void 0:e.id]);const x=()=>{i(!1),l(null)},_=()=>{r({ticketId:e==null?void 0:e.id},{onSuccess:()=>{x()}})};return o.jsxs(I,{open:s,handleClose:x,titleElement:o.jsxs(d,{justifyContent:"space-between",flex:1,flexDirection:"column",gap:1,children:[o.jsx(d,{children:o.jsx(w,{variant:"h6",children:`Ticket #${e==null?void 0:e.id}`})}),e&&v&&a&&((E=e==null?void 0:e.status)==null?void 0:E.id)!=="3"&&o.jsx(d,{maxWidth:"30%",children:o.jsx(A,{endIcon:o.jsx(O,{}),variant:"contained",onClick:_,loading:p||n,color:"success",children:"Concluir"})})]}),width:{sm:"100%",lg:"50%",xl:"40%"},children:[u&&!p&&o.jsx(L,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:o.jsx(d,{spacing:3,p:3,children:o.jsx(P,{errorMessage:c,titleMessage:"Conversación del Ticket",handleButton:()=>h()})})}),!u&&s&&o.jsx(B,{queryTicketConversation:t,ticket:e})]})};export{oe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/TicketConversationLayout-BIUiGqyo.js","assets/js/index-B-U8M-8N.js","assets/js/vendor-CEMfbhOc.js","assets/css/build-Bl0dWaDY.css","assets/js/formik.esm-Dshy1xjd.js","assets/js/index.esm-C2GVbld4.js","assets/js/matchTypes-BFKCRNnN.js","assets/js/tickets-support-list-keys-S53qn0fN.js","assets/js/SupportIncidences-BCwUOpKp.js","assets/js/TextMaxLine-D6XZvUuW.js","assets/js/formatTime-mlJJpQBT.js","assets/js/UploadSingleFile-B0jkdwVt.js","assets/js/fade-CViozI82.js","assets/js/transition-anLY3gj9.js","assets/js/formatNumber-Df8NwpjV.js","assets/js/MaterialDataTable-CDmLz-NL.js","assets/js/useMaterialTable-9wOa4uxn.js","assets/js/HeaderPage-DRv2GeZX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=TicketSupportConversationDrawer-I3TQmDeK.js.map