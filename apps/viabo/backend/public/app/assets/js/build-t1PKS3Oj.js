import{r as m,d as C,g as f,Q as g,b as h,C as x,_ as D,j as o,b5 as _,S as d,T as j,D as y,Z as M,$ as S}from"./index-zZLQf85F.js";import{M as R,g as T,u as p}from"./build-xAzUBn5m.js";import"./build-xvftTHFY.js";import"./build-8fJY7UDq.js";import"./build-kLZCIjl4.js";import"./build-nrvKdWYL.js";import"./build-1bT-D2KS.js";import"./build-zH8OCAbq.js";import"./build-zEF68lUW.js";import"./build-5PgQjHza.js";import"./build-0DUGlmod.js";import"./build-NjJ5ZdqY.js";import"./build-0PBFFrMf.js";import"./build-oAUg0xyq.js";import"./build-X5H9nG5J.js";import"./build-udEC9BlS.js";import"./build-LqvR14b6.js";import"./build-FIAgVl-Q.js";import"./build-gPmZEdkF.js";import"./build-n0Ctg4Eu.js";import"./build-zm_xBd2R.js";import"./build-lGOk465E.js";import"./build-BC3f-duO.js";import"./build-zIcY1Gcs.js";import"./build-m87tawfs.js";import"./build-P75XL4JI.js";import"./build-vea5MoeN.js";import"./build-K3n06G8N.js";import"./build-Uc7vb3zK.js";const b=(i,n={})=>{const[a,e]=m.useState(null),r=C({queryKey:[R.COMMERCE_DETAILS,i],queryFn:({signal:t})=>T(i),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...n});return m.useEffect(()=>{if(r!=null&&r.isError){const t=f(r.error,"No se puede obtener los detalles de este comercio. Intente nuevamente o reporte a sistemas");e(t),g.error(t,{type:h(r.error)})}},[r.isError,r.error]),{...r,error:a||null}},P=x(m.lazy(()=>D(()=>import("./build-v0FVAoTq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]))));function ie(){const{setCommerce:i,setOpenCommerceDetails:n}=p(s=>s),a=p(s=>s.openCommerceDetails),e=p(s=>s.commerce),{data:r,isLoading:t,isError:l,error:E,refetch:c}=b(e==null?void 0:e.id,{enabled:!!(e!=null&&e.id)}),u=()=>{n(!1),i(null)};return m.useEffect(()=>{e!=null&&e.id&&c()},[e]),o.jsx(_,{open:a,handleClose:u,titleElement:o.jsx(d,{children:o.jsx(j,{variant:"h6",children:"Editar Comercio"})}),children:o.jsx(y,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:o.jsxs(d,{p:3,children:[t&&o.jsx(M,{}),l&&!t&&o.jsx(S,{errorMessage:E,titleMessage:"Detalles Comercio",handleButton:()=>c()}),a&&!l&&!t&&o.jsx(P,{commerce:r,onSuccess:u})]})})})}export{ie as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-v0FVAoTq.js","assets/js/index-zZLQf85F.js","assets/css/build-pvjN466W.css","assets/js/build-vea5MoeN.js","assets/js/build-rPYTnZ0P.js","assets/js/build-xAzUBn5m.js","assets/js/build-8fJY7UDq.js","assets/js/build-kLZCIjl4.js","assets/js/build-xvftTHFY.js","assets/js/build-zIcY1Gcs.js","assets/js/build-FIAgVl-Q.js","assets/js/build-gPmZEdkF.js","assets/js/build-oAUg0xyq.js","assets/js/build-K3n06G8N.js","assets/js/build-Uc7vb3zK.js","assets/js/build-BC3f-duO.js","assets/js/build-nrvKdWYL.js","assets/js/build-1bT-D2KS.js","assets/js/build-zH8OCAbq.js","assets/js/build-zEF68lUW.js","assets/js/build-5PgQjHza.js","assets/js/build-0DUGlmod.js","assets/js/build-NjJ5ZdqY.js","assets/js/build-0PBFFrMf.js","assets/js/build-X5H9nG5J.js","assets/js/build-udEC9BlS.js","assets/js/build-LqvR14b6.js","assets/js/build-n0Ctg4Eu.js","assets/js/build-zm_xBd2R.js","assets/js/build-lGOk465E.js","assets/js/build-m87tawfs.js","assets/js/build-P75XL4JI.js","assets/js/build-svcpzLsY.js","assets/js/build-nVDdRWbO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}