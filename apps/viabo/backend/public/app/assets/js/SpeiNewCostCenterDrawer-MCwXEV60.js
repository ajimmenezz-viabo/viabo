import{g as E,L as S,_ as f,S as g,R as _,E as h}from"./index-Kl2QvVyT.js";import{r as o,e as x,i as r,S as m,T as R}from"./vendor-B39b6gT1.js";import{S as j,g as N}from"./useFindSpeiCostCenters-C7cTaPcD.js";import{u as c}from"./ViaboSpeiCostCenters-BFzhnK3m.js";import{R as T}from"./RightPanel-2SzQigm1.js";import"./matchTypes-E5vQDj-t.js";import"./useViaboSpeiBreadCrumbs-DaixJMcW.js";import"./viabo-spei-paths-D6KJcfc8.js";import"./MaterialDataTable-BLrn9vSy.js";import"./useMaterialTable-BgHRdWwm.js";import"./HeaderPage-CoeRaeoE.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";const w=(s={})=>{const[n,a]=o.useState(null),e=x({queryKey:[j.USERS_ADMIN_COST_CENTER_LIST],queryFn:({signal:t})=>N(),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...s});return o.useEffect(()=>{if(e!=null&&e.isError){const t=E(e.error,"No se puede obtener la lista de usuarios. Intente nuevamente o reporte a sistemas");a(t)}},[e.isError,e.error]),{...e,error:n||null}},y=S(o.lazy(()=>f(()=>import("./SpeiNewCostCenterForm-D5_d9L-G.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])))),V=()=>{const{openNewCostCenter:s,setOpenNewSpeiCostCenter:n,setSpeiCostCenter:a}=c(),e=c(d=>d.costCenter),{data:t,isLoading:i,isError:p,error:C,refetch:l}=w({enabled:!1});o.useEffect(()=>{s&&l()},[s]);const u=()=>{n(!1),a(null)};return r.jsx(T,{open:s,handleClose:u,titleElement:r.jsx(m,{children:r.jsx(R,{variant:"h6",children:e?"Editar Centro de Costos":"Nuevo Centro de Costos"})}),children:r.jsx(g,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:r.jsxs(m,{spacing:3,p:3,children:[i&&r.jsx(_,{}),p&&!i&&r.jsx(h,{errorMessage:C,titleMessage:"Lista de Usuarios",handleButton:()=>l()}),!p&&!i&&s&&r.jsx(y,{adminUsers:t,onSuccess:u,costCenter:e})]})})})};export{V as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/SpeiNewCostCenterForm-D5_d9L-G.js","assets/js/vendor-B39b6gT1.js","assets/js/formik.esm-CRn2DIxC.js","assets/js/index.esm-DHXyn7Aa.js","assets/js/index-Kl2QvVyT.js","assets/css/build-Bl0dWaDY.css","assets/js/useFindSpeiCostCenters-C7cTaPcD.js","assets/js/matchTypes-E5vQDj-t.js","assets/js/TextMaxLine-BvJpBV6_.js","assets/js/formatTime-DnNoLFDr.js","assets/js/UploadSingleFile-BV6pleIy.js","assets/js/fade-CViozI82.js","assets/js/transition-anLY3gj9.js","assets/js/formatNumber-Byfz8vD2.js","assets/js/RFSelect-CCRetmrq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=SpeiNewCostCenterDrawer-MCwXEV60.js.map