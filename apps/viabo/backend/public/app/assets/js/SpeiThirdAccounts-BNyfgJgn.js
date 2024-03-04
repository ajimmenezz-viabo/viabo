import{L as m,_ as p,P as C}from"./index-B-U8M-8N.js";import{i as e,B as x,I as b,bK as T,r as d,T as n,x as g,bj as A,a3 as j,bx as f}from"./vendor-CEMfbhOc.js";import{u as S}from"./useViaboSpeiBreadCrumbs-DmcNTwHL.js";import{u as h}from"./spei-third-accounts-store-CIqgAlGv.js";import{u as y}from"./useFindSpeiThirdAccountsList-UcwIeOqg.js";import{M as w}from"./MaterialDataTable-CDmLz-NL.js";import{u as _}from"./useMaterialTable-9wOa4uxn.js";import{C as z,H as B}from"./HeaderPage-DRv2GeZX.js";import"./viabo-spei-paths-CP0FcW2K.js";import"./SpeiThirdAccountsRepository-CCVKP0gE.js";import"./matchTypes-BFKCRNnN.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";function k(r){const{row:s,closeMenu:a}=r,{original:t}=s,{status:o}=t,{setOpenDeleteSpeiThirdAccount:c,setSpeiThirdAccount:u}=h();return e.jsx(x,{sx:{display:"flex",flex:1,justifyContent:"flex-start",alignItems:"center",flexWrap:"nowrap",gap:"8px"},children:o&&e.jsx(b,{size:"small",color:"primary",title:"Borrar",onClick:l=>{l.stopPropagation(),u(t),c(!0)},children:e.jsx(T,{color:"error",size:"small",titleAccess:"Borrar"})})})}const v=()=>d.useMemo(()=>[{id:"name",accessorKey:"name",header:"Beneficiario",enableHiding:!1,size:150,Cell:({cell:r,column:s,row:a,renderedCellValue:t})=>e.jsx(n,{fontWeight:"bold",variant:"subtitle2",children:t})},{id:"clabe",accessorKey:"clabe",header:"CLABE",Cell:({cell:r,column:s,row:a,renderedCellValue:t})=>e.jsx(n,{variant:"subtitle2",children:t})},{id:"bank",header:"Banco",accessorFn:r=>{var s;return((s=r==null?void 0:r.bank)==null?void 0:s.name)||null},Cell:({cell:r,column:s,row:a,renderedCellValue:t})=>{const{original:o}=a;return e.jsx(n,{variant:"subtitle2",children:o==null?void 0:o.bank.name})}},{id:"email",accessorKey:"email",header:"Correo",minSize:100,Cell:({cell:r,column:s,row:a,renderedCellValue:t})=>e.jsx(n,{variant:"subtitle2",children:t})},{id:"phone",accessorKey:"phone",header:"Teléfono",Cell:({cell:r,column:s,row:a,renderedCellValue:t})=>e.jsx(n,{variant:"subtitle2",children:t})}],[]),P=()=>{const{data:r,isLoading:s,isError:a,error:t,isFetching:o}=y(),{setOpenNewSpeiThirdAccount:c}=h(),u=v(),l=_(a,t,{columns:u,data:r||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,enableDensityToggle:!1,positionActionsColumn:"last",selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"name",desc:!1}]},state:{isLoading:s,showAlertBanner:a,showProgressBars:o},displayColumnDefOptions:{"mrt-row-select":{maxSize:10},"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},enableColumnResizing:!0,layoutMode:"grid",renderTopToolbarCustomActions:()=>e.jsx(x,{}),renderRowActions:i=>k(i)});return e.jsxs(g,{variant:"outlined",sx:i=>l.getState().isFullScreen?{}:{boxShadow:i.customShadows.z24,backgroundColor:i.palette.mode==="light"?"inherit":i.palette.grey[50012],backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"},children:[e.jsx(A,{sx:i=>({pb:2}),title:"Lista de Cuentas",subheader:`Tienes ${(r==null?void 0:r.length)||0} cuentas dadas de alta`,action:e.jsx(j,{title:"Nueva Cuenta",children:e.jsx(b,{color:"primary",size:"large",onClick:()=>c(!0),children:e.jsx(f,{})})})}),e.jsx(w,{table:l})]})},D=m(d.lazy(()=>p(()=>import("./NewSpeiThirdAccountDrawer-D498-mxM.js"),__vite__mapDeps([0,1,2,3,4,5,6])))),F=m(d.lazy(()=>p(()=>import("./AlertConfirmationDeleteAccount-B5Ar6OTh.js"),__vite__mapDeps([7,2,1,3,5,4,6])))),G=()=>{const{thirdAccounts:r}=S();return e.jsx(C,{title:"Cuentas de Terceros - Viabo Spei",children:e.jsxs(z,{sx:{pb:3},children:[e.jsx(B,{name:"Cuentas de Terceros ",links:r}),e.jsx(P,{}),e.jsx(D,{}),e.jsx(F,{})]})})};export{G as SpeiThirdAccounts};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/NewSpeiThirdAccountDrawer-D498-mxM.js","assets/js/index-B-U8M-8N.js","assets/js/vendor-CEMfbhOc.js","assets/css/build-Bl0dWaDY.css","assets/js/SpeiThirdAccountsRepository-CCVKP0gE.js","assets/js/matchTypes-BFKCRNnN.js","assets/js/spei-third-accounts-store-CIqgAlGv.js","assets/js/AlertConfirmationDeleteAccount-B5Ar6OTh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=SpeiThirdAccounts-BNyfgJgn.js.map