import{g as E,b as F,L as w,_ as I,S as M,R,E as T}from"./index-Kl2QvVyT.js";import{r as t,e as f,U,i as o,S as u,T as O}from"./vendor-B39b6gT1.js";import{u as v}from"./useFindSpeiCostCenters-C7cTaPcD.js";import{S as C,g as q,a as B,u as d}from"./ViaboSpeiCompanies-C5MoRVEO.js";import{R as K}from"./RightPanel-2SzQigm1.js";import"./matchTypes-E5vQDj-t.js";import"./useViaboSpeiBreadCrumbs-DaixJMcW.js";import"./viabo-spei-paths-D6KJcfc8.js";import"./TextMaxLine-BvJpBV6_.js";import"./formik.esm-CRn2DIxC.js";import"./formatTime-DnNoLFDr.js";import"./UploadSingleFile-BV6pleIy.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./formatNumber-Byfz8vD2.js";import"./MaterialDataTable-BLrn9vSy.js";import"./ModalAlert-DU1WX_NF.js";import"./useMaterialTable-BgHRdWwm.js";import"./HeaderPage-CoeRaeoE.js";const V=(s={})=>{const[a,i]=t.useState(null),r=f({queryKey:[C.USERS_ADMIN_COMPANY_LIST],queryFn:({signal:e})=>q(),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...s});return t.useEffect(()=>{if(r!=null&&r.isError){const e=E(r.error,"No se puede obtener la lista de usuarios. Intente nuevamente o reporte a sistemas");i(e)}},[r.isError,r.error]),{...r,error:a||null}},Y=(s,a={})=>{const[i,r]=t.useState(null),e=f({queryKey:[C.COMPANY_DETAILS,s],queryFn:()=>B(s),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...a});return t.useEffect(()=>{if(e!=null&&e.isError){const n=E(e.error,"No se puede obtener la información de la empresa. Intente nuevamente o reporte a sistemas");r(n),U.error(n,{type:F(e.error)})}},[e.isError,e.error]),{...e,error:i||null}},W=w(t.lazy(()=>I(()=>import("./SpeiNewCompanyForm-CTLZdGPW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])))),lr=()=>{const{openNewCompany:s,setOpenNewSpeiCompany:a,setSpeiCompany:i}=d(),r=d(A=>A.company),{data:e,isLoading:n,isError:S,error:g,refetch:m}=V({enabled:!1}),{data:y,isLoading:h,isError:x,error:_,refetch:N}=v({enabled:!1}),{data:b,isError:L,error:D,isFetching:P}=Y(r==null?void 0:r.id,{enabled:!!(r!=null&&r.id)});t.useEffect(()=>{s&&(m(),N())},[s]);const l=()=>{a(!1),i(null)},c=S||x||L,p=n||h||P,j=g||_||D;return o.jsx(K,{open:s,handleClose:l,titleElement:o.jsx(u,{children:o.jsx(O,{variant:"h6",children:r?"Editar Empresa":"Nueva Empresa"})}),children:o.jsx(M,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:o.jsxs(u,{spacing:3,p:3,children:[p&&o.jsx(R,{}),c&&!p&&o.jsx(T,{errorMessage:j,titleMessage:"Error al obtener información",handleButton:()=>m()}),!c&&!p&&s&&o.jsx(W,{adminCompanyUsers:e,costCenters:y,company:b,onSuccess:l})]})})})};export{lr as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/SpeiNewCompanyForm-CTLZdGPW.js","assets/js/vendor-B39b6gT1.js","assets/js/formik.esm-CRn2DIxC.js","assets/js/index.esm-DHXyn7Aa.js","assets/js/index-Kl2QvVyT.js","assets/css/build-Bl0dWaDY.css","assets/js/ViaboSpeiCompanies-C5MoRVEO.js","assets/js/useViaboSpeiBreadCrumbs-DaixJMcW.js","assets/js/viabo-spei-paths-D6KJcfc8.js","assets/js/TextMaxLine-BvJpBV6_.js","assets/js/formatTime-DnNoLFDr.js","assets/js/matchTypes-E5vQDj-t.js","assets/js/UploadSingleFile-BV6pleIy.js","assets/js/fade-CViozI82.js","assets/js/transition-anLY3gj9.js","assets/js/formatNumber-Byfz8vD2.js","assets/js/MaterialDataTable-BLrn9vSy.js","assets/js/ModalAlert-DU1WX_NF.js","assets/js/useMaterialTable-BgHRdWwm.js","assets/js/HeaderPage-CoeRaeoE.js","assets/js/viabo-card-CcTpX9JZ.js","assets/js/RFSelect-CCRetmrq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=SpeiNewCompanyDrawer-3E_KCmne.js.map