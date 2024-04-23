import{r as S,e as L,U as h,P as m,i as a,S as C,T as x,B as j,c as T,f as z,Q as q,I as R,bs as k,aM as M}from"./vendor-5lkxkETF.js";import{a as f,g as P,b,t as B,L as H,_ as D,S as W,C as U,P as K,p as Q,D as $}from"./index-DBYLOnQL.js";import{c as G,i as y}from"./matchTypes-mENztEWg.js";import{R as V}from"./RightPanel-CejIYnEw.js";import{u as Y}from"./formik.esm-CTTSENmf.js";import{c as v,a as w}from"./index.esm-gIIytEq8.js";import{F as J,R as A,a as X}from"./TextMaxLine-BZ8yvKeq.js";import{R as N}from"./RFSelect-DSsw7uR8.js";import{c as Z}from"./getColorName-DlaFStQx.js";import{M as ee}from"./MaterialDataTable-CiQ4Lsxs.js";import{u as te}from"./useMaterialTable-8QQmzXWd.js";import{C as re,H as se}from"./HeaderPage-aVphsUzw.js";import"./formatTime-jCgU2sMR.js";import"./UploadSingleFile-WHmSFia6.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./formatNumber-dGNhWwxT.js";const ae={PROFILES:"profiles-catalog"},oe=e=>{const r=e==null?void 0:e.map(t=>({id:t==null?void 0:t.id,status:t==null?void 0:t.active,name:t==null?void 0:t.name,initUrl:t==null?void 0:t.urlInit,level:Number(t==null?void 0:t.level)}));return G(r,"id","name","status")},ne=async()=>{const{data:e}=await f.get("/api/profiles");return oe(e)},ie=(e={})=>{const[r,t]=S.useState(null),s=L({queryKey:[ae.PROFILES],queryFn:ne,staleTime:6e4,...e});return S.useEffect(()=>{if(s!=null&&s.isError){const o=P(s.error,"No se puede obtener los perfiles del sistema. Intente nuevamente o reporte a sistemas");t(o),h.error(o,{type:b(o)})}},[s.isError,s.error]),{...s,error:r||null}},le={openNewCause:!1,cause:null},ce=(e,r)=>({...le,setOpenNewCause:t=>{e(s=>({openNewCause:t}),!1,"SET_OPEN_NEW_CAUSE")},setCause:t=>{e(s=>({cause:t}),!1,"SET_CAUSE_DETAILS")}}),F=B(ce),de=H(S.lazy(()=>D(()=>Promise.resolve().then(()=>be),void 0))),_=({profiles:e})=>{const{openNewCause:r,setOpenNewCause:t,setCause:s,cause:o}=F(),i=()=>{t(!1),s(null)};return a.jsx(V,{open:r,handleClose:i,titleElement:a.jsx(C,{children:a.jsx(x,{variant:"h6",children:o?"Editar Causa":"Nueva Causa"})}),children:r&&a.jsx(de,{profiles:e,onSuccess:i,cause:o})})};_.propTypes={profiles:m.any};const E={LIST:"catalog-causes-list"},ue=e=>(e==null?void 0:e.map(r=>{var t;return{id:r==null?void 0:r.id,cause:r==null?void 0:r.name,description:r==null?void 0:r.description,color:(t=r==null?void 0:r.color)==null?void 0:t.trim(),status:(r==null?void 0:r.active)==="1",requesterProfile:{id:r==null?void 0:r.applicantProfileId,name:r==null?void 0:r.applicantProfileName},receptorProfile:{id:r==null?void 0:r.assignedProfileId,name:r==null?void 0:r.assignedProfileName}}}))||[],pe=e=>{var r,t;return{reason:e==null?void 0:e.cause,description:e==null?void 0:e.description,applicantProfileId:((r=e==null?void 0:e.requesterProfile)==null?void 0:r.value)||"",assignedProfileId:((t=e==null?void 0:e.receptorProfile)==null?void 0:t.value)||"",color:e==null?void 0:e.color}},me=()=>S.useMemo(()=>[{id:"cause",accessorKey:"cause",header:"Causa",enableHiding:!1,size:150,Cell:({cell:e,column:r,row:t,renderedCellValue:s})=>a.jsx(x,{fontWeight:"bold",variant:"subtitle2",children:s})},{id:"requesterProfile",accessorFn:e=>{var r;return((r=e==null?void 0:e.requesterProfile)==null?void 0:r.name)||null},header:"Perfil Solicitante",Cell:({cell:e,column:r,row:t,renderedCellValue:s})=>a.jsx(x,{variant:"subtitle2",children:s})},{id:"receptorProfile",accessorFn:e=>{var r;return((r=e==null?void 0:e.receptorProfile)==null?void 0:r.name)||null},header:"Perfil Receptor",Cell:({cell:e,column:r,row:t,renderedCellValue:s})=>a.jsx(x,{variant:"subtitle2",children:s})},{id:"color",accessorKey:"color",header:"Color",minSize:100,Cell:({cell:e,column:r,row:t,renderedCellValue:s})=>{const o=i=>({height:"auto",minHeight:22,minWidth:22,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"normal",wordWrap:"break-word",display:"inline-flex",justifyContent:"center",padding:i.spacing(0,1),color:Z(s),fontSize:i.typography.pxToRem(12),fontFamily:i.typography.fontFamily,backgroundColor:s,fontWeight:i.typography.fontWeightBold});return a.jsx(j,{sx:{display:"flex",pt:1},children:a.jsx(j,{component:"span",sx:o,children:s})})}}],[]),ge=async e=>{const{data:r}=await f.post("/api/support-reason/new",e);return r},xe=async()=>{const{data:e}=await f.get("/api/tickets/support-reasons");return ue(e)},Ce=async e=>(await f.put(`/api/tickets/support-reasons/${e==null?void 0:e.id}/${e!=null&&e.changeStatus?"disable":"enable"}`),e),he=async e=>{const{data:r}=await f.put("/api/support-reason/update",e);return r},Se=(e={})=>{const r=T(),t=z({mutationFn:Ce,...e});return{...t,mutate:async(o,i)=>{const{onSuccess:p,onError:l,...g}=i;try{await h.promise(t.mutateAsync(o,g),{pending:"Actualizando estado de la causa...",success:{render({data:c}){return r.invalidateQueries([E.LIST]),y(p)&&p(c),"Se actualizó el estado de la causa con éxito"}}})}catch(c){const d=P(c,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");y(l)&&l(d),h.error(d,{type:b(c)})}}}},ye=(e={})=>{const r=T(),t=z(ge,e);return{...t,mutate:async(o,i)=>{const{onSuccess:p,onError:l,mutationOptions:g}=i;try{const c=await h.promise(t.mutateAsync(o,g),{pending:"Guardando nueva causa ...",success:"Se creó la causa con éxito"});r.invalidateQueries([E.LIST]),y(p)&&p(c)}catch(c){const d=P(c,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");y(l)&&l(d),h.error(d,{type:b(c)})}}}},fe=(e={})=>{const[r,t]=S.useState(null),s=L({queryKey:[E.LIST],queryFn:xe,refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...e});return S.useEffect(()=>{if(s!=null&&s.isError){const o=P(s.error,"No se puede obtener la lista de las causas. Intente nuevamente o reporte a sistemas");t(o),h.error(o,{type:b(s.error)})}},[s.isError,s.error]),{...s,error:r||null}},Pe=(e={})=>{const r=T(),t=z(he,e);return{...t,mutate:async(o,i)=>{const{onSuccess:p,onError:l,mutationOptions:g}=i;try{const c=await h.promise(t.mutateAsync(o,g),{pending:"Actualizando causa ...",success:"Se actualizó la causa con éxito"});r.invalidateQueries([E.LIST]),y(p)&&p(c)}catch(c){const d=P(c,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");y(l)&&l(d),h.error(d,{type:b(c)})}}}},O=({profiles:e,onSuccess:r,cause:t})=>{const{mutate:s,isLoading:o}=ye(),{mutate:i,isLoading:p}=Pe(),l=v().shape({cause:w().trim().max(100,"Máximo 100 caracteres").required("Es necesario la causa"),description:w().trim().max(250,"Máximo 250 caracteres"),requesterProfile:v().nullable().required("Es necesario el perfil solicitante"),receptorProfile:v().nullable().required("Es necesario el perfil receptor").test("not-equal","El perfil receptor no puede ser igual al perfil solicitante",function(n){const{requesterProfile:u}=this.parent;return!n||!u||n.id!==u.id}).test("higher-level","El perfil receptor debe tener un nivel más alto que el perfil solicitante",function(n){const{requesterProfile:u}=this.parent;return!n||u&&(n==null?void 0:n.level)<(u==null?void 0:u.level)}),color:w()}),g=Y({initialValues:{cause:(t==null?void 0:t.cause)||"",description:(t==null?void 0:t.description)||"",requesterProfile:(e==null?void 0:e.find(n=>{var u;return(n==null?void 0:n.id)===((u=t==null?void 0:t.requesterProfile)==null?void 0:u.id)}))||null,receptorProfile:(e==null?void 0:e.find(n=>{var u;return(n==null?void 0:n.id)===((u=t==null?void 0:t.receptorProfile)==null?void 0:u.id)}))||null,color:(t==null?void 0:t.color)||""},enableReinitialize:!0,validationSchema:l,onSubmit:(n,{setSubmitting:u,setFieldValue:ve})=>{const I=pe(n);return t?i({...I,id:t==null?void 0:t.id},{onSuccess:()=>{u(!1),r()},onError:()=>{u(!1)}}):s(I,{onSuccess:()=>{u(!1),r()},onError:()=>{u(!1)}})}}),{isSubmitting:c}=g,d=o||p||c;return a.jsx(W,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:a.jsx(J,{formik:g,children:a.jsxs(C,{spacing:2,sx:{p:3},children:[a.jsxs(C,{spacing:1,children:[a.jsx(x,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Causa *"}),a.jsx(A,{size:"small",name:"cause",placeholder:"Nueva causa...",disabled:d})]}),a.jsxs(C,{spacing:1,children:[a.jsx(x,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Descripción"}),a.jsx(A,{size:"small",name:"description",multiline:!0,rows:2,disabled:d,placeholder:"Descripción de la causa..."})]}),a.jsxs(C,{spacing:1,children:[a.jsx(x,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Perfil Solicitante *"}),a.jsx(N,{size:"small",name:"requesterProfile",disabled:d,options:e||[],textFieldParams:{placeholder:"Seleccionar ...",size:"small"}})]}),a.jsxs(C,{spacing:1,children:[a.jsx(x,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Perfil Receptor *"}),a.jsx(N,{size:"small",name:"receptorProfile",disabled:d,options:e||[],textFieldParams:{placeholder:"Seleccionar ...",size:"small"}})]}),a.jsxs(C,{spacing:1,children:[a.jsx(x,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Color"}),a.jsx(A,{size:"small",type:"color",name:"color",disabled:d})]}),a.jsx(C,{sx:{pt:1},children:a.jsx(q,{size:"large",loading:d,variant:"contained",color:"primary",fullWidth:!0,type:"submit",children:t?"Actualizar":"Crear"})})]})})})};O.propTypes={cause:m.shape({cause:m.string,color:m.string,description:m.string,receptorProfile:m.shape({id:m.any}),requesterProfile:m.shape({id:m.any})}),onSuccess:m.func,profiles:m.array};const be=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));function je(e){const{row:r}=e,{original:t}=r,{status:s}=t,[o,i]=S.useState(null),{setOpenNewCause:p,setCause:l}=F(),{mutate:g,isLoading:c}=Se(),d=c&&o===(t==null?void 0:t.id);return a.jsxs(j,{sx:{display:"flex",flex:1,justifyContent:"flex-start",alignItems:"center",flexWrap:"nowrap",gap:"8px"},children:[d?a.jsx(U,{size:15,containerProps:{display:"flex",ml:1}}):a.jsx(X,{size:"sm",color:s?"success":"error",checked:s||!1,inputProps:{"aria-label":"controlled"},onChange:n=>{},onClick:n=>{n.stopPropagation(),i(t==null?void 0:t.id),g({...t,changeStatus:!s},{onSuccess:()=>{i(null)},onError:()=>{i(null)}})}}),s&&!d&&a.jsx(R,{size:"small",color:"primary",onClick:n=>{n.stopPropagation(),l(t),p(!0)},children:a.jsx(k,{size:"small",fontSize:"16px"})})]})}const Ee=()=>{const{data:e,isLoading:r,isError:t,error:s,isFetching:o}=fe(),i=me(),p=te(t,s,{columns:i,data:e||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,enableDensityToggle:!1,positionActionsColumn:"last",selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"cause",desc:!1}]},state:{isLoading:r,showAlertBanner:t,showProgressBars:o},displayColumnDefOptions:{"mrt-row-select":{maxSize:10},"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},enableColumnResizing:!0,layoutMode:"grid",renderTopToolbarCustomActions:()=>a.jsx(j,{}),renderRowActions:l=>je(l)});return a.jsx(M,{variant:"outlined",sx:l=>p.getState().isFullScreen?{}:{boxShadow:l.customShadows.z24,backgroundColor:l.palette.mode==="light"?"inherit":l.palette.grey[50012]},children:a.jsx(ee,{table:p})})},We=()=>{const{data:e,isLoading:r}=ie(),t=F(s=>s.setOpenNewCause);return a.jsxs(K,{title:"Catálogo de Causas",children:[a.jsxs(re,{children:[a.jsx(se,{name:"Catálogo de Causas",links:[{name:"Inicio",href:Q.root},{name:"Catálogos",href:$.causes},{name:"Causas"}],buttonName:"Nueva Causa",onClick:()=>t(!0),loading:r}),a.jsx(Ee,{})]}),a.jsx(_,{profiles:e})]})};export{We as CatalogCauses};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=CatalogCauses-BASSX-Mv.js.map