import{r as n,d as C,g as f,Q as g,b as h,C as x,_ as D,j as o,b4 as _,S as d,T as j,D as y,Z as M,$ as S}from"./index-EBrH4AFB.js";import{M as R,g as T,u as l}from"./build-0CMGtcs1.js";import"./build-qVohwCJK.js";import"./build-4P6Yt8QQ.js";import"./build-CFFJOsj4.js";import"./build-4IleTySW.js";import"./build-06sTZeHO.js";import"./build-zH8OCAbq.js";import"./build-zEF68lUW.js";import"./build-A0pkRIS4.js";import"./build-u_9qcimv.js";import"./build-H7IOl2jl.js";import"./build-ra700BiT.js";import"./build-UC2Jv_Rj.js";import"./build-bT2ZGV7i.js";import"./build-P0jbLy60.js";import"./build-BTCdeRGE.js";import"./build-qEQsGcT6.js";import"./build-rECqXkdZ.js";import"./build-F7ivJfbI.js";import"./build-W0u3MlWw.js";import"./build-NGendJ1R.js";import"./build-Tk_iTi2U.js";import"./build-YTv3sfp4.js";import"./build-ulQ1JAvE.js";import"./build-Uc7vb3zK.js";const b=(i,m={})=>{const[a,e]=n.useState(null),r=C({queryKey:[R.COMMERCE_DETAILS,i],queryFn:({signal:t})=>T(i),refetchOnWindowFocus:!1,retry:!1,staleTime:3e5,...m});return n.useEffect(()=>{if(r!=null&&r.isError){const t=f(r.error,"No se puede obtener los detalles de este comercio. Intente nuevamente o reporte a sistemas");e(t),g.error(t,{type:h(r.error)})}},[r.isError,r.error]),{...r,error:a||null}},P=x(n.lazy(()=>D(()=>import("./build-WfPpSTjF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]))));function oe(){const{setCommerce:i,setOpenCommerceDetails:m}=l(s=>s),a=l(s=>s.openCommerceDetails),e=l(s=>s.commerce),{data:r,isLoading:t,isError:p,error:E,refetch:c}=b(e==null?void 0:e.id,{enabled:!!(e!=null&&e.id)}),u=()=>{m(!1),i(null)};return n.useEffect(()=>{e!=null&&e.id&&c()},[e]),o.jsx(_,{open:a,handleClose:u,titleElement:o.jsx(d,{children:o.jsx(j,{variant:"h6",children:"Editar Comercio"})}),children:o.jsx(y,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:o.jsxs(d,{p:3,children:[t&&o.jsx(M,{}),p&&!t&&o.jsx(S,{errorMessage:E,titleMessage:"Detalles Comercio",handleButton:()=>c()}),a&&!p&&!t&&o.jsx(P,{commerce:r,onSuccess:u})]})})})}export{oe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-WfPpSTjF.js","assets/js/index-EBrH4AFB.js","assets/css/build-pvjN466W.css","assets/js/build-YTv3sfp4.js","assets/js/build-DzxOi4kS.js","assets/js/build-0CMGtcs1.js","assets/js/build-4P6Yt8QQ.js","assets/js/build-CFFJOsj4.js","assets/js/build-qVohwCJK.js","assets/js/build-F7ivJfbI.js","assets/js/build-ra700BiT.js","assets/js/build-UC2Jv_Rj.js","assets/js/build-bT2ZGV7i.js","assets/js/build-ulQ1JAvE.js","assets/js/build-Uc7vb3zK.js","assets/js/build-rECqXkdZ.js","assets/js/build-4IleTySW.js","assets/js/build-06sTZeHO.js","assets/js/build-zH8OCAbq.js","assets/js/build-zEF68lUW.js","assets/js/build-A0pkRIS4.js","assets/js/build-u_9qcimv.js","assets/js/build-H7IOl2jl.js","assets/js/build-P0jbLy60.js","assets/js/build-BTCdeRGE.js","assets/js/build-qEQsGcT6.js","assets/js/build-W0u3MlWw.js","assets/js/build-NGendJ1R.js","assets/js/build-Tk_iTi2U.js","assets/js/build-OChxTlYF.js","assets/js/build-QYKE-a6z.js","assets/js/build-uCBm7Zd7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}