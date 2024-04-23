import{t as F,C as V,a as g,g as P,b as I,L as R,_ as B,P as W}from"./index-DBYLOnQL.js";import{P as C,i as t,B as A,I as _,bs as U,c as H,f as K,U as T,r as x,e as Y,T as c,aM as $,bg as Q,x as q,br as G,S as m,bt as J,bu as X}from"./vendor-5lkxkETF.js";import{u as Z}from"./useViaboSpeiBreadCrumbs-CjA4s5wD.js";import{a as D}from"./TextMaxLine-BZ8yvKeq.js";import{c as E,i as N}from"./matchTypes-mENztEWg.js";import{f as y}from"./formatNumber-dGNhWwxT.js";import{M as ee}from"./MaterialDataTable-CiQ4Lsxs.js";import{M as se}from"./ModalAlert-Ju1kumTl.js";import{u as te}from"./useMaterialTable-8QQmzXWd.js";import{C as ie,H as re}from"./HeaderPage-aVphsUzw.js";const ae={company:null,openNewCompany:!1},ne=(e,i)=>({...ae,setSpeiCompany:s=>{e(r=>({company:s}),!1,"SET_SPEI_COMPANY")},setOpenNewSpeiCompany:s=>{e(r=>({openNewCompany:s}),!1,"SET_OPEN_SPEI_NEW_COMPANY")}}),M=F(ne);function O({table:e,isChangingCauseStatus:i,causeIdToggleStatus:s,onChangeStatus:r}){const{row:o}=e,{original:n}=o,{status:u}=n,S=i&&s===(n==null?void 0:n.id),{setSpeiCompany:l,setOpenNewSpeiCompany:p}=M();return t.jsxs(A,{sx:{display:"flex",flex:1,justifyContent:"flex-start",alignItems:"center",flexWrap:"nowrap",gap:"8px"},children:[S?t.jsx(V,{size:15,containerProps:{display:"flex",ml:1}}):t.jsx(D,{size:"md",color:u?"success":"error",checked:u||!1,inputProps:{"aria-label":"controlled"},onClick:d=>{d.stopPropagation(),r(n)}}),u&&t.jsx(_,{size:"small",color:"primary",onClick:d=>{d.stopPropagation(),l(n),p(!0)},children:t.jsx(U,{size:"small",fontSize:"16px"})})]})}O.propTypes={causeIdToggleStatus:C.any,isChangingCauseStatus:C.any,onChangeStatus:C.func,table:C.shape({row:C.shape({original:C.shape({id:C.any,status:C.bool})})})};const oe=e=>{const i=e==null?void 0:e.map(s=>({id:s==null?void 0:s.id,name:s==null?void 0:s.name}));return E(i,"id","name")},v={COMPANIES_LIST:"spei-companies-list",USERS_ADMIN_COMPANY_LIST:"spei-admin-company-users-list",COMPANY_DETAILS:"spei-company-details",CONCENTRATORS_LIST:"spei-concentrators-list",COMMISSIONS:"spei-commissions"},_e={ADMIN_USERS:"users",NEW_ADMIN_USER:"new-user"},le=e=>{const i=(e==null?void 0:e.map(s=>{var r;return{id:s==null?void 0:s.id,folio:s==null?void 0:s.folio,name:s==null?void 0:s.tradeName,balance:y((s==null?void 0:s.balance)||"0"),status:(s==null?void 0:s.active)==="1",rfc:s==null?void 0:s.rfc,stpAccount:{complete:s==null?void 0:s.bankAccount,hidden:(r=s==null?void 0:s.bankAccount)==null?void 0:r.replace(/.(?=.{8})/g,"*")}}}))||[];return E(i,"id","name")},ue=e=>{var s,r,o,n,u,S;return{id:e==null?void 0:e.id,commercialName:e==null?void 0:e.tradeName,fiscalName:e==null?void 0:e.fiscalName,rfc:e==null?void 0:e.rfc,adminUsers:((s=e==null?void 0:e.users)==null?void 0:s.map(l=>l==null?void 0:l.id))||[],costCenters:((r=e==null?void 0:e.costCenters)==null?void 0:r.map(l=>l==null?void 0:l.id))||[],commissions:{speiOut:(o=e==null?void 0:e.speiCommissions)==null?void 0:o.speiOut,internalTransferCompany:(n=e==null?void 0:e.speiCommissions)==null?void 0:n.internal,fee:(u=e==null?void 0:e.speiCommissions)==null?void 0:u.feeStp,speiIn:(S=e==null?void 0:e.speiCommissions)==null?void 0:S.speiIn},concentrator:{id:e==null?void 0:e.stpAccountId}}},de=e=>{const i=e==null?void 0:e.map(s=>({id:s==null?void 0:s.id,name:s==null?void 0:s.name}));return E(i,"id","name")},ce=async()=>{const{data:e}=await g.get("/api/commerces");return le(e)},Me=async e=>{const{data:i}=await g.post("/api/backoffice/company/new",e);return i},Oe=async()=>{const{data:e}=await g.get("/api/security/users/administrators-of-companies");return oe(e)},Se=async e=>{const i=new URL("/api/backoffice/company/toggle",window.location.origin);return i.searchParams.set("company",e==null?void 0:e.id),i.searchParams.set("active",e==null?void 0:e.changeStatus),await g.put(i),e},ve=async e=>{const{data:i}=await g.get(`/api/backoffice/company/${e}`);return ue(i)},ke=async e=>(await g.put("/api/backoffice/company/update",e),e),Le=async()=>{const{data:e}=await g.get("/api/spei/concentrator");return de(e)},ze=async()=>{const{data:e}=await g.get("/api/backoffice/rates");return{percentage:e==null?void 0:e.CommisionPercentage,amount:e==null?void 0:e.FeeStp}},pe=(e={})=>{const i=H(),s=K({mutationFn:Se,...e});return{...s,mutate:async(o,n)=>{const{onSuccess:u,onError:S,...l}=n;try{await T.promise(s.mutateAsync(o,l),{pending:"Actualizando estado de la empresa...",success:{render({data:p}){return i.invalidateQueries([v.COMPANIES_LIST]),N(u)&&u(p),"Se actualizó el estado de la empresa con éxito"}}})}catch(p){const d=P(p,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");N(S)&&S(d),T.error(d,{type:I(p)})}}}},Ce=(e={})=>{const[i,s]=x.useState(null),r=Y({queryKey:[v.COMPANIES_LIST],queryFn:ce,refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...e});return x.useEffect(()=>{if(r!=null&&r.isError){const o=P(r.error,"No se puede obtener la lista de empresas. Intente nuevamente o reporte a sistemas");s(o),T.error(o,{type:I(r.error)})}},[r.isError,r.error]),{...r,error:i||null}},ge=()=>x.useMemo(()=>[{id:"folio",accessorKey:"folio",header:"ID",enableHiding:!1,maxSize:50,Cell:({cell:e,column:i,row:s,renderedCellValue:r})=>t.jsx(c,{variant:"subtitle2",children:r})},{id:"rfc",accessorKey:"rfc",header:"RFC",Cell:({cell:e,column:i,row:s,renderedCellValue:r})=>t.jsx(c,{textTransform:"uppercase",variant:"subtitle2",children:r})},{id:"name",accessorKey:"name",header:"Nombre",enableHiding:!1,Cell:({cell:e,column:i,row:s,renderedCellValue:r})=>t.jsx(c,{textTransform:"capitalize",fontWeight:"bold",variant:"subtitle2",children:r})},{id:"stpAccount",header:"Cuenta STP",enableClickToCopy:!0,accessorFn:e=>{var i;return((i=e==null?void 0:e.stpAccount)==null?void 0:i.complete)||null},Cell:({cell:e,column:i,row:s,renderedCellValue:r})=>{var n;const{original:o}=s;return t.jsx(c,{variant:"subtitle2",children:(n=o==null?void 0:o.stpAccount)==null?void 0:n.hidden})}},{id:"balance",accessorKey:"balance",header:"Balance",minSize:100,Cell:({cell:e,column:i,row:s,renderedCellValue:r})=>t.jsx(c,{variant:"subtitle2",children:r})}],[]),be=()=>{var w;const{data:e,isLoading:i,isError:s,error:r,isFetching:o}=Ce(),{setOpenNewSpeiCompany:n}=M(),u=ge(),[S,l]=x.useState(!1),[p,d]=x.useState(null),[a,h]=x.useState(null),{mutate:k,isLoading:L}=pe(),z=()=>{l(!1),k({...a,changeStatus:!(a!=null&&a.status)},{onSuccess:()=>{d(null),h(null)},onError:()=>{d(null),h(null)}})},j=te(s,r,{columns:u,data:e||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,enableDensityToggle:!1,positionActionsColumn:"last",selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"folio",desc:!1}]},state:{isLoading:i,showAlertBanner:s,showProgressBars:o},displayColumnDefOptions:{"mrt-row-select":{maxSize:10},"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},muiTableBodyRowProps:({row:b})=>({sx:f=>({backgroundColor:"inherit","&.Mui-selected":{backgroundColor:f.palette.action.selected,"&:hover":{backgroundColor:f.palette.action.hover}}})}),enableColumnResizing:!0,layoutMode:"grid",renderTopToolbarCustomActions:()=>t.jsx(A,{}),renderRowActions:b=>t.jsx(O,{table:b,isChangingCauseStatus:L,onChangeStatus:f=>{h(f),d(f==null?void 0:f.id),l(!0)},causeIdToggleStatus:p})});return t.jsxs(t.Fragment,{children:[t.jsxs($,{variant:"outlined",sx:b=>j.getState().isFullScreen?{}:{boxShadow:b.customShadows.z24,backgroundColor:b.palette.mode==="light"?"inherit":b.palette.grey[50012],backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"},children:[t.jsx(Q,{sx:b=>({pb:2}),title:"Lista de Empresas",subheader:`Tienes ${(e==null?void 0:e.length)||0} empresas dadas de alta`,action:t.jsx(q,{title:"Nueva Empresa",children:t.jsx(_,{color:"primary",size:"large",onClick:()=>n(!0),children:t.jsx(G,{})})})}),t.jsx(ee,{table:j})]}),t.jsx(se,{title:t.jsxs(m,{alignItems:"center",justifyContent:"space-between",flexDirection:"row",children:[t.jsx(c,{variant:"h6",children:a!=null&&a.status?"Desactivar Empresa":"Activar Empresa"}),a!=null&&a.status?t.jsx(J,{color:"error"}):t.jsx(X,{color:"success"})]}),textButtonSuccess:"Si",textButtonCancel:"No",onClose:()=>{l(!1)},open:S,actionsProps:{sx:{justifyContent:"center"}},description:t.jsxs(m,{spacing:3,children:[t.jsxs(m,{spacing:.5,p:2,borderColor:"secondary.light",borderRadius:2,sx:{borderStyle:"dotted"},children:[t.jsx(c,{fontWeight:"bold",variant:"subtitle2",children:a==null?void 0:a.name}),t.jsx(c,{variant:"subtitle2",children:a==null?void 0:a.rfc}),t.jsx(c,{variant:"subtitle2",children:(w=a==null?void 0:a.stpAccount)==null?void 0:w.hidden})]}),t.jsxs(c,{textAlign:"center",children:["¿Está seguro de"," ",t.jsx(A,{component:"span",sx:{fontWeight:"bold"},children:`${a!=null&&a.status?"Desactivar":"Activar"}`})," ","la empresa?"]})]}),onSuccess:z,fullWidth:!0,maxWidth:"xs"})]})},fe=R(x.lazy(()=>B(()=>import("./SpeiNewCompanyDrawer-Dk79zuUi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])))),xe=()=>{const{companies:e}=Z();return t.jsx(W,{title:"Empresas - Viabo Spei",children:t.jsxs(ie,{sx:{pb:3},children:[t.jsx(re,{name:"Empresas",links:e}),t.jsx(be,{}),t.jsx(fe,{})]})})},Fe=Object.freeze(Object.defineProperty({__proto__:null,ViaboSpeiCompanies:xe},Symbol.toStringTag,{value:"Module"}));export{_e as M,v as S,Fe as V,Oe as a,ze as b,ve as c,ke as d,Le as g,Me as n,M as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/SpeiNewCompanyDrawer-Dk79zuUi.js","assets/js/index-DBYLOnQL.js","assets/js/vendor-5lkxkETF.js","assets/css/build-Bl0dWaDY.css","assets/js/useFindSpeiCostCenters-1V9BVHp8.js","assets/js/matchTypes-mENztEWg.js","assets/js/RightPanel-CejIYnEw.js","assets/js/useViaboSpeiBreadCrumbs-CjA4s5wD.js","assets/js/viabo-spei-paths-2dp9zdWt.js","assets/js/TextMaxLine-BZ8yvKeq.js","assets/js/formik.esm-CTTSENmf.js","assets/js/formatTime-jCgU2sMR.js","assets/js/UploadSingleFile-WHmSFia6.js","assets/js/fade-CViozI82.js","assets/js/transition-anLY3gj9.js","assets/js/formatNumber-dGNhWwxT.js","assets/js/MaterialDataTable-CiQ4Lsxs.js","assets/js/ModalAlert-Ju1kumTl.js","assets/js/useMaterialTable-8QQmzXWd.js","assets/js/HeaderPage-aVphsUzw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=ViaboSpeiCompanies-CCRAcfPx.js.map