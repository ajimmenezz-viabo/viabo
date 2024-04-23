import{g as c,b as S,L as U,_ as q,S as K,R as V,E as W}from"./index-DBYLOnQL.js";import{r as o,e as l,U as g,i,S as f,T as B}from"./vendor-5lkxkETF.js";import{u as Y}from"./useFindSpeiCostCenters-1V9BVHp8.js";import{S as m,g as k,a as z,b as G,c as Q,u as C}from"./ViaboSpeiCompanies-CCRAcfPx.js";import{R as H}from"./RightPanel-CejIYnEw.js";import"./matchTypes-mENztEWg.js";import"./useViaboSpeiBreadCrumbs-CjA4s5wD.js";import"./viabo-spei-paths-2dp9zdWt.js";import"./TextMaxLine-BZ8yvKeq.js";import"./formik.esm-CTTSENmf.js";import"./formatTime-jCgU2sMR.js";import"./UploadSingleFile-WHmSFia6.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./formatNumber-dGNhWwxT.js";import"./MaterialDataTable-CiQ4Lsxs.js";import"./ModalAlert-Ju1kumTl.js";import"./useMaterialTable-8QQmzXWd.js";import"./HeaderPage-aVphsUzw.js";const J=(s={})=>{const[t,n]=o.useState(null),r=l({queryKey:[m.CONCENTRATORS_LIST],queryFn:({signal:e})=>k(),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...s});return o.useEffect(()=>{if(r!=null&&r.isError){const e=c(r.error,"No se puede obtener la lista de concentradoras. Intente nuevamente o reporte a sistemas");n(e)}},[r.isError,r.error]),{...r,error:t||null}},X=(s={})=>{const[t,n]=o.useState(null),r=l({queryKey:[m.USERS_ADMIN_COMPANY_LIST],queryFn:({signal:e})=>z(),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...s});return o.useEffect(()=>{if(r!=null&&r.isError){const e=c(r.error,"No se puede obtener la lista de usuarios. Intente nuevamente o reporte a sistemas");n(e)}},[r.isError,r.error]),{...r,error:t||null}},Z=(s={})=>{const[t,n]=o.useState(null),r=l({queryKey:[m.COMMISSIONS],queryFn:G,refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...s});return o.useEffect(()=>{if(r!=null&&r.isError){const e=c(r.error,"No se puede obtener la lista de comisiones del servicio. Intente nuevamente o reporte a sistemas");n(e),g.error(e,{type:S(r.error)})}},[r.isError,r.error]),{...r,error:t||null}},$=(s,t={})=>{const[n,r]=o.useState(null),e=l({queryKey:[m.COMPANY_DETAILS,s],queryFn:()=>Q(s),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...t});return o.useEffect(()=>{if(e!=null&&e.isError){const a=c(e.error,"No se puede obtener la información de la empresa. Intente nuevamente o reporte a sistemas");r(a),g.error(a,{type:S(e.error)})}},[e.isError,e.error]),{...e,error:n||null}},rr=U(o.lazy(()=>q(()=>import("./SpeiNewCompanyForm-C0ncbvTc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])))),hr=()=>{const{openNewCompany:s,setOpenNewSpeiCompany:t,setSpeiCompany:n}=C(),r=C(v=>v.company),{data:e,isFetching:a,isError:y,error:h,refetch:u}=X({enabled:!1}),{data:b,isFetching:F,isError:N,error:_,refetch:x}=Y({enabled:!1}),{data:L,isError:I,error:O,isFetching:T}=$(r==null?void 0:r.id,{enabled:!!(r!=null&&r.id)}),{data:M,isError:w,error:A,isLoading:D}=J({enabled:!!s}),{data:P,isLoading:R}=Z({enabled:!!s});o.useEffect(()=>{s&&(u(),x())},[s]);const d=()=>{t(!1),n(null)},E=y||N||I||w,p=a||F||T||D||R,j=h||_||O||A;return i.jsx(H,{open:s,handleClose:d,titleElement:i.jsx(f,{children:i.jsx(B,{variant:"h6",children:r?"Editar Empresa":"Nueva Empresa"})}),children:i.jsx(K,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:i.jsxs(f,{spacing:3,p:3,children:[p&&i.jsx(V,{}),E&&!p&&i.jsx(W,{errorMessage:j,titleMessage:"Error al obtener información",handleButton:()=>u()}),!E&&!p&&s&&i.jsx(rr,{adminCompanyUsers:e,costCenters:b,concentrators:M,company:L,commissions:P,onSuccess:d})]})})})};export{hr as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/SpeiNewCompanyForm-C0ncbvTc.js","assets/js/vendor-5lkxkETF.js","assets/js/formik.esm-CTTSENmf.js","assets/js/index.esm-gIIytEq8.js","assets/js/index-DBYLOnQL.js","assets/css/build-Bl0dWaDY.css","assets/js/ViaboSpeiCompanies-CCRAcfPx.js","assets/js/useViaboSpeiBreadCrumbs-CjA4s5wD.js","assets/js/viabo-spei-paths-2dp9zdWt.js","assets/js/TextMaxLine-BZ8yvKeq.js","assets/js/formatTime-jCgU2sMR.js","assets/js/matchTypes-mENztEWg.js","assets/js/UploadSingleFile-WHmSFia6.js","assets/js/fade-CViozI82.js","assets/js/transition-anLY3gj9.js","assets/js/formatNumber-dGNhWwxT.js","assets/js/MaterialDataTable-CiQ4Lsxs.js","assets/js/ModalAlert-Ju1kumTl.js","assets/js/useMaterialTable-8QQmzXWd.js","assets/js/HeaderPage-aVphsUzw.js","assets/js/viabo-card-CcTpX9JZ.js","assets/js/RFSelect-DSsw7uR8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=SpeiNewCompanyDrawer-Dk79zuUi.js.map