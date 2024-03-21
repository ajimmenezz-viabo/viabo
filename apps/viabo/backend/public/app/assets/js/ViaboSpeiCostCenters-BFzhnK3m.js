import{t as x,L as S,_ as g,P as f}from"./index-Kl2QvVyT.js";import{i as e,B as p,I as C,bH as h,r as u,T as l,aM as w,bg as j,x as T,bq as _}from"./vendor-B39b6gT1.js";import{u as y}from"./useViaboSpeiBreadCrumbs-DaixJMcW.js";import{u as E}from"./useFindSpeiCostCenters-C7cTaPcD.js";import{M as P}from"./MaterialDataTable-BLrn9vSy.js";import{u as z}from"./useMaterialTable-BgHRdWwm.js";import{C as N,H as k}from"./HeaderPage-CoeRaeoE.js";const v={costCenter:null,openNewCostCenter:!1},A=(t,r)=>({...v,setSpeiCostCenter:o=>{t(s=>({costCenter:o}),!1,"SET_SPEI_COST_CENTER")},setOpenNewSpeiCostCenter:o=>{t(s=>({openNewCostCenter:o}),!1,"SET_OPEN_SPEI_NEW_COST_CENTER")}}),m=x(A);function M(t){const{row:r}=t,{original:o}=r,{setSpeiCostCenter:s,setOpenNewSpeiCostCenter:n}=m();return e.jsx(p,{sx:{display:"flex",flex:1,justifyContent:"flex-start",alignItems:"center",flexWrap:"nowrap",gap:"8px"},children:e.jsx(C,{size:"small",color:"primary",onClick:i=>{i.stopPropagation(),s(o),n(!0)},children:e.jsx(h,{size:"small",fontSize:"16px"})})})}const O=()=>u.useMemo(()=>[{id:"id",accessorKey:"folio",header:"ID",enableHiding:!1,maxSize:40,Cell:({cell:t,column:r,row:o,renderedCellValue:s})=>e.jsx(l,{variant:"subtitle2",children:s})},{id:"name",accessorKey:"name",header:"Nombre",enableHiding:!1,Cell:({cell:t,column:r,row:o,renderedCellValue:s})=>e.jsx(l,{textTransform:"capitalize",fontWeight:"bold",variant:"subtitle2",children:s})},{id:"companies",header:"Empresas",accessorKey:"companies",Cell:({cell:t,column:r,row:o,renderedCellValue:s})=>e.jsx(l,{variant:"subtitle2",children:s})}],[]),R=()=>{const{data:t,isLoading:r,isError:o,error:s,isFetching:n}=E(),{setOpenNewSpeiCostCenter:i}=m(),b=O(),c=z(o,s,{columns:b,data:t||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,enableDensityToggle:!1,positionActionsColumn:"last",selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"id",desc:!1}]},state:{isLoading:r,showAlertBanner:o,showProgressBars:n},displayColumnDefOptions:{"mrt-row-select":{maxSize:10},"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},muiTableBodyRowProps:({row:a})=>({sx:d=>({backgroundColor:"inherit","&.Mui-selected":{backgroundColor:d.palette.action.selected,"&:hover":{backgroundColor:d.palette.action.hover}}})}),enableColumnResizing:!0,layoutMode:"grid",renderTopToolbarCustomActions:()=>e.jsx(p,{}),renderRowActions:a=>M(a)});return e.jsxs(w,{variant:"outlined",sx:a=>c.getState().isFullScreen?{}:{boxShadow:a.customShadows.z24,backgroundColor:a.palette.mode==="light"?"inherit":a.palette.grey[50012],backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"},children:[e.jsx(j,{sx:a=>({pb:2}),title:"Lista de Centros de Costos",subheader:`Tienes ${(t==null?void 0:t.length)||0} centros de costos dados de alta`,action:e.jsx(T,{title:"Nueva Centro de Costos",children:e.jsx(C,{color:"primary",size:"large",onClick:()=>i(!0),children:e.jsx(_,{})})})}),e.jsx(P,{table:c})]})},V=S(u.lazy(()=>g(()=>import("./SpeiNewCostCenterDrawer-MCwXEV60.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])))),B=()=>{const{costCenters:t}=y();return e.jsx(f,{title:"Centro de Costos - Viabo Spei",children:e.jsxs(N,{sx:{pb:3},children:[e.jsx(k,{name:"Centro de Costos",links:t}),e.jsx(R,{}),e.jsx(V,{})]})})},$=Object.freeze(Object.defineProperty({__proto__:null,ViaboSpeiCostCenters:B},Symbol.toStringTag,{value:"Module"}));export{$ as V,m as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/SpeiNewCostCenterDrawer-MCwXEV60.js","assets/js/index-Kl2QvVyT.js","assets/js/vendor-B39b6gT1.js","assets/css/build-Bl0dWaDY.css","assets/js/useFindSpeiCostCenters-C7cTaPcD.js","assets/js/matchTypes-E5vQDj-t.js","assets/js/RightPanel-2SzQigm1.js","assets/js/useViaboSpeiBreadCrumbs-DaixJMcW.js","assets/js/viabo-spei-paths-D6KJcfc8.js","assets/js/MaterialDataTable-BLrn9vSy.js","assets/js/useMaterialTable-BgHRdWwm.js","assets/js/HeaderPage-CoeRaeoE.js","assets/js/fade-CViozI82.js","assets/js/transition-anLY3gj9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=ViaboSpeiCostCenters-BFzhnK3m.js.map