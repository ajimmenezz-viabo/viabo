import{aj as k,j as t,N as M,aL as T,O as c,r as h,ah as H,S as d,T as l,B as g,ai as b,E as U,a1 as G,ak as q,d as $,g as K,P as W,ab as Q,aM as Y,aN as J,C as O,_ as P}from"./index-x-tL3MOy.js";import{V as X}from"./build-GMGSYTt0.js";import{P as Z}from"./build-ee8L5M-j.js";import{L as _}from"./build-eCwt9U-A.js";import{L as ee}from"./build-EckPbxwb.js";import{g as re}from"./build-D1gP2gt3.js";import{P as te}from"./build-A0pkRIS4.js";import{f as A,M as ne,C as se,H as ae}from"./build-yw6dnA5g.js";import{u as oe}from"./build-Dae5ZSnf.js";import{C as ie}from"./build-TmPCBBAV.js";const le={commerce:null,openCommerceDetails:!1,openCommerceCommissions:!1},ce=(e,r)=>({...le,setCommerce:s=>{e(n=>({commerce:s}))},setOpenCommerceDetails:s=>{e(n=>({openCommerceDetails:s}),!1,"SET_OPEN_COMMERCE_DETAILS")},setOpenCommerceCommissions:s=>{e(n=>({openCommerceCommissions:s}),!1,"SET_OPEN_COMMERCE_COMMISSIONS")}}),me=k(ce);function pe(e){const{row:r,closeMenu:s}=e,{original:n}=r,{setCommerce:a,setOpenCommerceDetails:o,setOpenCommerceCommissions:i}=me(m=>m);return[t.jsxs(M,{onClick:()=>{a(n),o(!0),s()},sx:{m:0},children:[t.jsx(T,{children:t.jsx(X,{color:"info"})}),"Ver Detalles"]},"details"),t.jsxs(M,{onClick:()=>{a(n),i(!0),s()},sx:{m:0},children:[t.jsx(T,{children:t.jsx(Z,{color:"primary"})}),"Comisiones"]},"commissions")]}const N=({open:e,anchorEl:r,handlePopoverClose:s,data:n})=>{var a;return n?t.jsx(H,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:e,anchorEl:r,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},onClose:s,disableRestoreFocus:!0,slotProps:{paper:{sx:{mt:1.5,ml:.5,overflow:"inherit",boxShadow:o=>o.customShadows.z20,border:o=>`solid 1px ${o.palette.grey[5008]}`,width:200}}},children:t.jsxs(d,{spacing:2,p:2,children:[t.jsxs(d,{spacing:.5,flex:1,children:[t.jsx(l,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre:"}),t.jsx(l,{variant:"body2",children:(n==null?void 0:n.name)??"-"})]}),t.jsxs(d,{spacing:.5,flex:1,children:[t.jsx(l,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Teléfono:"}),t.jsx(l,{variant:"body2",children:(n==null?void 0:n.phone)??"-"})]}),t.jsxs(d,{spacing:.5,flex:1,children:[t.jsx(l,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha Registro:"}),t.jsx(l,{variant:"body2",children:(n==null?void 0:n.register)??"-"})]}),t.jsxs(d,{spacing:.5,flex:1,children:[t.jsx(l,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Último Inicio de Sesión:"}),t.jsx(l,{variant:"body2",children:(n==null?void 0:n.lastLogged)??"-"})]}),t.jsxs(d,{spacing:.5,flex:1,children:[t.jsx(l,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Estado:"}),t.jsx(g,{children:t.jsx(_,{variant:"ghost",color:((a=n==null?void 0:n.status)==null?void 0:a.toLowerCase())==="activo"?"success":"error",sx:{textTransform:"uppercase"},children:(n==null?void 0:n.status)??"-"})})]})]})}):null};N.propTypes={anchorEl:c.any,data:c.shape({lastLogged:c.string,name:c.string,phone:c.string,register:c.string,status:c.string}),handlePopoverClose:c.any,open:c.any};const ue=h.memo(N),I=({row:e})=>{var i;const[r,s]=h.useState(null),n=p=>{s(p.currentTarget)},a=()=>{s(null)},o=!!r;return t.jsxs(t.Fragment,{children:[t.jsx(ue,{anchorEl:r,open:o,handlePopoverClose:a,data:e==null?void 0:e.account}),t.jsx(g,{sx:{display:"flex",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:1},children:t.jsx(ee,{color:"info.main",sx:{cursor:"auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},underline:"none",variant:"subtitle2",component:l,"aria-owns":o?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:p=>{n(p)},onMouseLeave:a,children:(i=e==null?void 0:e.account)==null?void 0:i.name})})]})};I.propTypes={row:c.shape({account:c.shape({name:c.any})})};const de=e=>{const r=e==null?void 0:e.find(s=>(s==null?void 0:s.type)==="2");return r?{id:r==null?void 0:r.id,type:r==null?void 0:r.type,name:r==null?void 0:r.name,cardNumbers:r==null?void 0:r.cardNumbers,cardUse:r==null?void 0:r.cardUse,customCardsRequired:(r==null?void 0:r.personalized)==="1"}:null},he=e=>(e==null?void 0:e.map(r=>{const{Id:s,Name:n,storePath:a}=r;return{id:s,name:n,path:a}}))??[],xe=e=>({available:!!e,speiInCarnet:parseFloat((e==null?void 0:e.SpeiInCarnet)??"0.0"),speiOutCarnet:parseFloat((e==null?void 0:e.SpeiOutCarnet)??"0.0"),speiInMasterCard:parseFloat((e==null?void 0:e.SpeiInMasterCard)??"0.0"),speiOutMasterCard:parseFloat((e==null?void 0:e.SpeiOutMasterCard)??"0.0"),viaboPay:parseFloat((e==null?void 0:e.Pay)??"0.0")}),Ce=e=>e.map((r,s)=>{var v;const{id:n,legalRepresentative:a,legalRepresentativeName:o,legalRepresentativePhone:i,legalRepresentativeLastSession:p,legalRepresentativeEmail:m,taxName:u,fiscalPersonType:S,tradeName:C,rfc:j,employees:E,branchOffices:L,pointSaleTerminal:y,paymentApi:D,register:F,statusId:w,registerStep:z,statusName:R,services:f,documents:B,commissions:V}=r;return{id:n,name:C,account:{id:a,name:o,email:m,phone:i,status:"Activo",lastLogged:p===""?"No ha iniciado sesión":A(p),register:A(F)??""},information:{available:u!=="",fiscalName:u,commercialName:C,fiscalTypePerson:S==="1"?"Moral":"Física",rfc:j,employeesNumber:E,branchesNumber:L},services:{names:(f==null?void 0:f.map(x=>x==null?void 0:x.name))||[],available:y!=="0",viaboCard:de(f),viaboPay:{tpvsNumber:y,apiRequired:D==="1"}},status:{id:w,name:R,step:((v=te.find(x=>x.step.toString()===z))==null?void 0:v.name)??""},documents:he(B),commissions:xe(V)}}),fe={COMMERCE_LIST:"commerceList"},ge=async()=>{const{data:e}=await b.get("/api/commerces");return Ce(e)},ze=async e=>{const{data:r}=await b.post("/api/commerce/commissions/register",e);return r},Re=async e=>{const{data:r}=await b.post("/api/commerce/information",e);return r},Se=[{id:1,name:"Registro",color:"info"},{id:2,name:"Validacion",color:"warning"},{id:3,name:"Afiliacion",color:"primary"},{id:4,name:"Cancelado",color:"error"}],je=e=>{var r;return((r=Se.find(s=>s.id.toString()===e.toString()))==null?void 0:r.color)||"info"},Ee=()=>h.useMemo(()=>[{id:"name",accessorKey:"name",header:"Nombre",enableHiding:!1,size:120,Cell:({cell:e,column:r,row:s,renderedCellValue:n})=>t.jsx(l,{fontWeight:"bold",variant:"subtitle2",children:n})},{id:"legalRepresentative",accessorFn:e=>{var r;return(r=e==null?void 0:e.account)==null?void 0:r.name},header:"Representante Legal",size:100,Cell:({cell:e,column:r,row:s,renderedCellValue:n})=>{const{original:a}=s;return t.jsx(I,{row:a})}},{id:"services",accessorFn:e=>{var r,s;return(s=(r=e==null?void 0:e.services)==null?void 0:r.names)==null?void 0:s.toString()},size:220,header:"Servicios",Cell:({cell:e,column:r,row:s,renderedCellValue:n})=>{var i,p;const{original:a}=s,o=[];return(p=(i=a==null?void 0:a.services)==null?void 0:i.names)==null||p.forEach(m=>{const u=re(m);u&&o.push({component:u==null?void 0:u.component,name:m,width:m==="NUBE"?20:25,height:m==="NUBE"?20:25,color:m==="NUBE"?"primary.main":"inherit"})}),t.jsxs(d,{flexDirection:"row",alignItems:"center",gap:1,divider:t.jsx(U,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"double"}}),children:[(o==null?void 0:o.length)===0&&t.jsx(l,{variant:"subtitle2",fontWeight:"bold",color:"warning.main",children:"Sin Servicios"}),o==null?void 0:o.map(({component:m,width:u,height:S,name:C,color:j},E)=>t.jsx(G,{title:C,children:t.jsx(g,{display:"flex",children:t.jsx(m,{sx:{width:u,height:S,color:j}})})},E))]})}},{id:"register-status",accessorFn:e=>{var r;return(r=e==null?void 0:e.status)==null?void 0:r.step},header:"Estado Registro",minSize:100,Cell:({cell:e,column:r,row:s,renderedCellValue:n})=>t.jsx(d,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.jsx(l,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"subtitle2",title:n,children:n})})},{id:"status",accessorFn:e=>{var r;return(r=e==null?void 0:e.status)==null?void 0:r.name},header:"Estado",size:70,Cell:({cell:e,column:r,row:s,renderedCellValue:n})=>{var o,i;const{original:a}=s;return t.jsx(d,{children:t.jsx(_,{size:"sm",variant:"filled",color:je((o=a==null?void 0:a.status)==null?void 0:o.id),sx:{textTransform:"uppercase"},children:(i=a==null?void 0:a.status)==null?void 0:i.name})})}}],[]),be=(e={})=>{const{enqueueSnackbar:r}=q(),[s,n]=h.useState(null);return{...$([fe.COMMERCE_LIST],ge,{staleTime:60*5e3,onError:o=>{const i=K(o,"No se puede obtener la lista de comercios");n(i),r(i,{variant:"error",autoHideDuration:5e3})},...e}),error:s||null}};function ye(){const{data:e,isLoading:r,isError:s,error:n,isFetching:a}=be(),o=Ee(),i=oe(s,n,{columns:o,data:e||[],enableColumnPinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,enableDensityToggle:!1,positionActionsColumn:"last",selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"name",desc:!1}]},state:{isLoading:r,showAlertBanner:s,showProgressBars:a},displayColumnDefOptions:{"mrt-row-select":{maxSize:10},"mrt-row-actions":{header:"Acciones",maxSize:80}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},renderTopToolbarCustomActions:()=>t.jsx(g,{}),renderRowActionMenuItems:pe});return t.jsx(ie,{children:t.jsx(ne,{table:i})})}const ve=O(h.lazy(()=>P(()=>import("./build-pZPF0kIh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])))),Me=O(h.lazy(()=>P(()=>import("./build-s4UHJUSe.js"),__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]))));function Te(){return t.jsx(W,{title:"Administración Comercios",children:t.jsxs(se,{children:[t.jsx(ae,{name:"Comercios",links:[{name:"Inicio",href:Q.root},{name:"Administración",href:Y.commerces},{name:J.commerces.name}]}),t.jsx(ye,{}),t.jsx(ve,{}),t.jsx(Me,{})]})})}const Be=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"}));export{fe as M,Re as a,ze as b,Be as c,me as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-pZPF0kIh.js","assets/js/index-x-tL3MOy.js","assets/css/build-pvjN466W.css","assets/js/build-NIRfJG7v.js","assets/js/build-TmPCBBAV.js","assets/js/build-G8xLV4ng.js","assets/js/build-GMGSYTt0.js","assets/js/build-ee8L5M-j.js","assets/js/build-eCwt9U-A.js","assets/js/build-RTCxoqUU.js","assets/js/build-aXq1ykHm.js","assets/js/build-3JmeY1AD.js","assets/js/build-mZf3ZGCw.js","assets/js/build-rDZAP2eW.js","assets/js/build-Kbx5ZuUJ.js","assets/js/build-Uc7vb3zK.js","assets/js/build-Q1bOWlNZ.js","assets/js/build-EckPbxwb.js","assets/js/build-D1gP2gt3.js","assets/js/build-zH8OCAbq.js","assets/js/build-zEF68lUW.js","assets/js/build-A0pkRIS4.js","assets/js/build-yw6dnA5g.js","assets/js/build-Pt2-zlVs.js","assets/js/build-fO9Z8l-Y.js","assets/js/build-WksAqt8r.js","assets/js/build-P_JIiLI3.js","assets/js/build-YUdFPXK7.js","assets/js/build-Dae5ZSnf.js","assets/js/build-s4UHJUSe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}