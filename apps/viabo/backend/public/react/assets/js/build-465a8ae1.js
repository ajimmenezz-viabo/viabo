import{y as C,j as s,r as c,S as r,T as j,B as p,I,z as F,V as N,aW as O,ay as q,a1 as L,K as W,N as _}from"./index-52f3dfc5.js";import{u as b,C as G}from"./build-c5ba3c37.js";import{C as K}from"./build-f67de522.js";import{V as J}from"./build-c2902dfc.js";import{V as Q}from"./build-f4130253.js";import{C as U}from"./build-eb87c3ef.js";import{C as X}from"./build-f6d6e604.js";import{k as a}from"./build-588bcae8.js";import{s as Y}from"./build-f8fc243b.js";import{E as k}from"./build-2a90e701.js";import{u as Z,P as $}from"./build-400a280d.js";import{T as ss}from"./build-6b6057ed.js";import{I as es}from"./build-2f366dad.js";import{S as ts}from"./build-5c8c8589.js";const rs=C([s.jsx("path",{d:"M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zM2 4h15v2H2z"},"0"),s.jsx("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"1")],"AddBusiness"),Ss=C(s.jsx("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"}),"AssignmentIndRounded"),bs=C(s.jsx("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted"),os=C(s.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVertTwoTone");function ns({card:e,disableShow:m}){const[n,u]=c.useState(!0),x=d=>{d.stopPropagation(),u(l=>!l)};return s.jsxs(r,{position:"relative",children:[s.jsx(j,{sx:{mb:1,typography:"caption",opacity:.48},children:"CVV"}),s.jsx(r,{direction:"row",spacing:1,alignItems:"center",children:s.jsx(j,{sx:{typography:"subtitle2"},children:n?"***":e==null?void 0:e.cvv})}),!m&&s.jsx(p,{position:"absolute",sx:{left:"32px",top:"20px"},children:s.jsx(I,{size:"small",color:"inherit",onClick:x,sx:{opacity:.2},children:n?s.jsx(J,{}):s.jsx(Q,{})})})]})}function is({card:e}){const m=b(t=>t.isReadyToAssign),n=b(t=>t.setOpen),u=b(t=>t.setCard),[x,d]=c.useState(null),l=!!x,{enqueueSnackbar:y}=F(),i=t=>{d(t.currentTarget)},v=()=>{d(null)},f=()=>{m?(n(!0),u(e)):(n(!1),y("Por el momento no se puede asignar la tarjeta. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return s.jsxs(s.Fragment,{children:[s.jsx(N,{title:"Acciones",children:s.jsx(I,{onClick:i,sx:{ml:2},"aria-controls":l?"card-menu":void 0,"aria-haspopup":"true","aria-expanded":l?"true":void 0,children:s.jsx(os,{width:20,height:20})})}),s.jsx(O,{open:!!l,anchorEl:x,onClose:v,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-start",sx:{mt:-1,mr:0,p:2,width:250,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:s.jsxs(q,{onClick:()=>{f(),v()},sx:{color:"text.secondary"},children:[s.jsx(rs,{width:24,height:24}),"Asignar a Comercio"]})})]})}function as({card:e}){return s.jsxs(G,{children:[s.jsx(U,{action:s.jsx(is,{card:e}),title:s.jsx(j,{sx:{typography:"subtitle2",opacity:.72},children:"Viabo Card"}),subheader:e==null?void 0:e.register,sx:{p:0}}),s.jsx("div",{children:s.jsx(K,{card:e})}),s.jsxs(r,{direction:"row",spacing:5,children:[s.jsxs(r,{children:[s.jsx(j,{sx:{mb:1,typography:"caption",opacity:.48},children:"Vencimiento"}),s.jsx(j,{sx:{typography:"subtitle1"},children:e==null?void 0:e.expiration})]}),s.jsx(ns,{card:e})]})]})}function cs(){return s.jsxs(X,{sx:e=>({color:e.palette.common.white,display:"flex",p:3,flexDirection:"column",justifyContent:"space-between"}),children:[s.jsxs(r,{children:[s.jsx(a,{variant:"text",sx:{width:.3}}),s.jsx(a,{variant:"text",sx:{width:.5}})]}),s.jsx(r,{sx:{py:1.5},children:s.jsx(a,{variant:"text",sx:{width:.9,height:40}})}),s.jsxs(r,{direction:"row",spacing:2,children:[s.jsxs(r,{spacing:.5,children:[s.jsx(a,{variant:"text",sx:{width:100}}),s.jsx(a,{variant:"text",sx:{width:40}})]}),s.jsxs(r,{spacing:.5,children:[s.jsx(a,{variant:"text",sx:{width:100}}),s.jsxs(r,{direction:"row",spacing:1,alignItems:"center",children:[s.jsx(a,{variant:"text",sx:{width:40}}),s.jsx(a,{variant:"circular",sx:{width:16,height:16}})]})]})]})]})}function zs({cards:e,emptyMessage:m="No hay tarjetas disponibles en stock",cardComponent:n=as,...u}){const x=L("up","xl"),{isCollapse:d}=W(),[l,y]=c.useState(1),[i,v]=c.useState(""),[f,t]=c.useState([]),{data:B,isLoading:E,isError:z,error:P,isSuccess:V,refetch:R}=e,o=B||[],w=E,S=x?12:9,A=c.useMemo(()=>(i!==""?f:o)||[],[i,o,f]),T=A.length||0,H=Math.ceil(T/S),M=Z(A||[],S),D=(h,g)=>{y(g),M.jump(g)};return c.useEffect(()=>{if(i){const h=Y(o,i);t(h)}else t([])},[i,o]),s.jsxs(s.Fragment,{children:[V&&(o==null?void 0:o.length)>0&&s.jsxs(p,{display:"flex",mb:3,flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center"},...u,children:[s.jsx(p,{children:s.jsx(ss,{fullWidth:!0,size:"small",placeholder:"Buscar ...",value:i,onChange:h=>v(h.target.value),InputProps:{startAdornment:s.jsx(es,{position:"start",children:s.jsx(p,{sx:{color:"text.disabled"},children:s.jsx(ts,{sx:{marginTop:1}})})})}})}),s.jsx(p,{sx:{flex:"1 1 auto",mb:{xs:3}}}),s.jsx($,{count:H,page:l,onChange:D})]}),!w&&V&&o.length===0&&s.jsx(k,{widthImage:"30%",message:m}),!w&&z&&s.jsx(_,{widthImage:"30%",errorMessage:P,handleButton:R}),!z&&s.jsx(p,{mb:3,sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:d?"repeat(3, 1fr)":"repeat(2, 1fr)",xl:"repeat(4, 1fr)"}},children:(w?[...Array(S)]:M.currentData()||[]).map((h,g)=>h?c.createElement(n,{card:h,key:g}):s.jsx(cs,{},g))}),o.length>0&&T===0&&s.jsx(k,{widthImage:"30%",message:"No hay tarjetas que coincidan con la búsqueda"})]})}export{Ss as A,ns as C,bs as F,zs as a};
