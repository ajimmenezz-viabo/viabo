import{r as m,e as w,a9 as x,P as b,i as o,T as d,B as S,c as L,f as _,V as u,a0 as I,x as O}from"./vendor-VdGvLetj.js";import{q as y,g as P,a as j,r as k,L as q,_ as B,D as M,S as R,P as D,o as H,G as W}from"./index-W5_PJt9d.js";import{c as K,i as E}from"./matchTypes-Lmz382Bt.js";import{u as G}from"./formik.esm-qswtkH0w.js";import{c as h,a as C}from"./index.esm-tihgvVDv.js";import{F as V,R as f}from"./TextMaxLine-WruMZtAJ.js";import{R as v}from"./RFSelect-DkgJojm8.js";import{M as Q,C as $,H as U}from"./HeaderPage-XC-NTdiG.js";import{u as Y}from"./useMaterialTable-amx9ppYv.js";import"./UploadSingleFile-6LMGjDBZ.js";import"./fade-HpdRXKiE.js";import"./transition-Uc7vb3zK.js";import"./formatNumber-v_3o-PH6.js";const J={PROFILES:"profiles-catalog"},X=r=>{const e=r==null?void 0:r.map(t=>({id:t==null?void 0:t.id,status:t==null?void 0:t.active,name:t==null?void 0:t.name,initUrl:t==null?void 0:t.urlInit,level:Number(t==null?void 0:t.level)}));return K(e,"id","name","status")},Z=async()=>{const{data:r}=await y.get("/api/profiles");return X(r)},ee=(r={})=>{const[e,t]=m.useState(null),s=w({queryKey:[J.PROFILES],queryFn:Z,staleTime:6e4,...r});return m.useEffect(()=>{if(s!=null&&s.isError){const a=P(s.error,"No se puede obtener los perfiles del sistema. Intente nuevamente o reporte a sistemas");t(a),x.error(a,{type:j(a)})}},[s.isError,s.error]),{...s,error:e||null}},re={openNewCause:!1},te=(r,e)=>({...re,setOpenNewCause:t=>{r(s=>({openNewCause:t}),!1,"SET_OPEN_NEW_CAUSE")}}),F=k(te),se=q(m.lazy(()=>B(()=>Promise.resolve().then(()=>ue),void 0))),T=({profiles:r})=>{const{openNewCause:e,setOpenNewCause:t}=F(a=>a),s=()=>{t(!1)};return o.jsx(M,{open:e,handleClose:s,titleElement:"Nueva Causa",children:e&&o.jsx(se,{profiles:r,onSuccess:s})})};T.propTypes={profiles:b.any};const N={LIST:"catalog-causes-list"},oe=r=>(r==null?void 0:r.map(e=>{var t;return{id:e==null?void 0:e.id,cause:e==null?void 0:e.name,description:e==null?void 0:e.description,color:(t=e==null?void 0:e.color)==null?void 0:t.trim(),status:(e==null?void 0:e.active)==="1",requesterProfile:{id:e==null?void 0:e.applicantProfileId,name:e==null?void 0:e.applicantProfileName},receptorProfile:{id:e==null?void 0:e.assignedProfileId,name:e==null?void 0:e.assignedProfileName}}}))||[],ae=r=>{var e,t;return{reason:r==null?void 0:r.cause,description:r==null?void 0:r.description,applicantProfileId:((e=r==null?void 0:r.requesterProfile)==null?void 0:e.value)||"",assignedProfileId:((t=r==null?void 0:r.receptorProfile)==null?void 0:t.value)||"",color:r==null?void 0:r.color}},ne=r=>parseInt(r.replace(/^#/,""),16)>83886075e-1?"black":"white",ie=()=>m.useMemo(()=>[{id:"cause",accessorKey:"cause",header:"Causa",enableHiding:!1,size:150,Cell:({cell:r,column:e,row:t,renderedCellValue:s})=>o.jsx(d,{fontWeight:"bold",variant:"subtitle2",children:s})},{id:"requesterProfile",accessorFn:r=>{var e;return((e=r==null?void 0:r.requesterProfile)==null?void 0:e.name)||null},header:"Perfil Solicitante",Cell:({cell:r,column:e,row:t,renderedCellValue:s})=>o.jsx(d,{variant:"subtitle2",children:s})},{id:"receptorProfile",accessorFn:r=>{var e;return((e=r==null?void 0:r.receptorProfile)==null?void 0:e.name)||null},header:"Perfil Receptor",Cell:({cell:r,column:e,row:t,renderedCellValue:s})=>o.jsx(d,{variant:"subtitle2",children:s})},{id:"color",accessorKey:"color",header:"Color",minSize:100,Cell:({cell:r,column:e,row:t,renderedCellValue:s})=>{const a=l=>({height:"auto",minHeight:22,minWidth:22,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"normal",wordWrap:"break-word",display:"inline-flex",justifyContent:"center",padding:l.spacing(0,1),color:ne(s),fontSize:l.typography.pxToRem(12),fontFamily:l.typography.fontFamily,backgroundColor:s,fontWeight:l.typography.fontWeightBold});return o.jsx(S,{sx:{display:"flex",pt:1},children:o.jsx(S,{component:"span",sx:a,children:s})})}}],[]),le=async r=>{const{data:e}=await y.post("/api/support-reason/new",r);return e},ce=async()=>{const{data:r}=await y.get("/api/support-reasons");return oe(r)},de=(r={})=>{const e=L(),t=_(le,r);return{...t,mutate:async(a,l)=>{const{onSuccess:p,onError:i,mutationOptions:c}=l;try{const n=await x.promise(t.mutateAsync(a,c),{pending:"Guardando nueva causa ..."});e.invalidateQueries([N.LIST]),E(p)&&p(n)}catch(n){const g=P(n,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");E(i)&&i(g),x.error(g,{type:j(n)})}}}},pe=(r={})=>{const[e,t]=m.useState(null),s=w({queryKey:[N.LIST],queryFn:ce,refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...r});return m.useEffect(()=>{if(s!=null&&s.isError){const a=P(s.error,"No se puede obtener la lista de las causas. Intente nuevamente o reporte a sistemas");t(a),x.error(a,{type:j(s.error)})}},[s.isError,s.error]),{...s,error:e||null}},A=({profiles:r,onSuccess:e})=>{const{mutate:t,isLoading:s}=de(),a=h().shape({cause:C().trim().max(100,"Máximo 100 caracteres").required("Es necesario la causa"),description:C().trim().max(250,"Máximo 250 caracteres"),requesterProfile:h().nullable().required("Es necesario el perfil solicitante"),receptorProfile:h().nullable().required("Es necesario el perfil receptor").test("not-equal","El perfil receptor no puede ser igual al perfil solicitante",function(c){const{requesterProfile:n}=this.parent;return!c||!n||c.id!==n.id}).test("higher-level","El perfil receptor debe tener un nivel más alto que el perfil solicitante",function(c){const{requesterProfile:n}=this.parent;return!c||n&&(c==null?void 0:c.level)<(n==null?void 0:n.level)}),color:C()}),l=G({initialValues:{cause:"",description:"",requesterProfile:null,receptorProfile:null,color:""},enableReinitialize:!0,validationSchema:a,onSubmit:(c,{setSubmitting:n,setFieldValue:g})=>{const z=ae(c);t(z,{onSuccess:()=>{n(!1),e()},onError:()=>{n(!1)}})}}),{isSubmitting:p}=l,i=s||p;return o.jsx(R,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:o.jsx(V,{formik:l,children:o.jsxs(u,{spacing:2,sx:{p:3},children:[o.jsxs(u,{spacing:1,children:[o.jsx(d,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Causa *"}),o.jsx(f,{size:"small",name:"cause",placeholder:"Nueva causa...",disabled:i})]}),o.jsxs(u,{spacing:1,children:[o.jsx(d,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Descripción"}),o.jsx(f,{size:"small",name:"description",multiline:!0,rows:2,disabled:i,placeholder:"Descripción de la causa..."})]}),o.jsxs(u,{spacing:1,children:[o.jsx(d,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Perfil Solicitante *"}),o.jsx(v,{size:"small",name:"requesterProfile",disabled:i,options:r||[],textFieldParams:{placeholder:"Seleccionar ...",size:"small"}})]}),o.jsxs(u,{spacing:1,children:[o.jsx(d,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Perfil Receptor *"}),o.jsx(v,{size:"small",name:"receptorProfile",disabled:i,options:r||[],textFieldParams:{placeholder:"Seleccionar ...",size:"small"}})]}),o.jsxs(u,{spacing:1,children:[o.jsx(d,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Color"}),o.jsx(f,{size:"small",type:"color",name:"color",disabled:i})]}),o.jsx(u,{sx:{pt:1},children:o.jsx(I,{size:"large",loading:i,variant:"contained",color:"primary",fullWidth:!0,type:"submit",children:"Crear"})})]})})})};A.propTypes={onSuccess:b.func,profiles:b.array};const ue=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),me=()=>{const{data:r,isLoading:e,isError:t,error:s,isFetching:a}=pe(),l=ie(),p=Y(t,s,{columns:l,data:r||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,enableDensityToggle:!1,positionActionsColumn:"last",selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"cause",desc:!1}]},state:{isLoading:e,showAlertBanner:t,showProgressBars:a},displayColumnDefOptions:{"mrt-row-select":{maxSize:10},"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},enableColumnResizing:!0,layoutMode:"grid",renderTopToolbarCustomActions:()=>o.jsx(S,{})});return o.jsx(O,{variant:"outlined",sx:i=>p.getState().isFullScreen?{}:{boxShadow:i.customShadows.z24,backgroundColor:i.palette.mode==="light"?"inherit":i.palette.grey[50012],backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"},children:o.jsx(Q,{table:p})})},Fe=()=>{const{data:r,isLoading:e}=ee(),t=F(s=>s.setOpenNewCause);return o.jsxs(D,{title:"Catálogo de Causas",children:[o.jsxs($,{children:[o.jsx(U,{name:"Catálogo de Causas",links:[{name:"Inicio",href:H.root},{name:"Catálogos",href:W.causes},{name:"Causas"}],buttonName:"Nueva Causa",onClick:()=>t(!0),loading:e}),o.jsx(me,{})]}),o.jsx(T,{profiles:r})]})};export{Fe as CatalogCauses};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=CatalogCauses-HBJgIA-u.js.map