import{o as M,j as s,r as c,u as O,aS as q,I as E,aV as N,aW as F,S as a,T as j,B as p,aX as L,a3 as W,Q as _}from"./build-1231e3a0.js";import{u as G,s as Q,P as X}from"./build-1fdfaa58.js";import{u as S,f as J,i as K,h as U,d as o}from"./build-b6c0e000.js";import{V as Y,a as Z}from"./build-4cd0bb50.js";import{C as $,S as ss,E as I}from"./build-7c01970e.js";import{C as es}from"./build-d84d71fa.js";import{T as ts}from"./build-50738b0b.js";import{I as as}from"./build-0e55227b.js";const rs=M([s.jsx("path",{d:"M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zM2 4h15v2H2z"},"0"),s.jsx("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"1")],"AddBusiness"),js=M(s.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z"}),"AddCard");function ns({card:e}){const u=S(t=>t.isReadyToAssign),n=S(t=>t.setOpen),m=S(t=>t.setCard),[x,d]=c.useState(null),l=!!x,{enqueueSnackbar:f}=O(),i=t=>{d(t.currentTarget)},v=()=>{d(null)},C=()=>{u?(n(!0),m(e)):(n(!1),f("Por el momento no se puede asignar la tarjeta. No hay comercios disponibles",{variant:"warning",autoHideDuration:5e3}))};return s.jsxs(s.Fragment,{children:[s.jsx(q,{title:"Acciones",children:s.jsx(E,{onClick:i,sx:{ml:2},"aria-controls":l?"card-menu":void 0,"aria-haspopup":"true","aria-expanded":l?"true":void 0,children:s.jsx(J,{width:20,height:20})})}),s.jsx(N,{open:!!l,anchorEl:x,onClose:v,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-start",sx:{mt:-1,mr:0,p:2,width:250,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:s.jsxs(F,{onClick:()=>{C(),v()},sx:{color:"text.secondary"},children:[s.jsx(rs,{width:24,height:24}),"Asignar a Comercio"]})})]})}function is({card:e,disableShow:u}){const[n,m]=c.useState(!0),x=d=>{d.stopPropagation(),m(l=>!l)};return s.jsxs(a,{position:"relative",children:[s.jsx(j,{sx:{mb:1,typography:"caption",opacity:.48},children:"CVV"}),s.jsx(a,{direction:"row",spacing:1,alignItems:"center",children:s.jsx(j,{sx:{typography:"subtitle2"},children:n?"***":e==null?void 0:e.cvv})}),!u&&s.jsx(p,{position:"absolute",sx:{left:"32px",top:"20px"},children:s.jsx(E,{size:"small",color:"inherit",onClick:x,sx:{opacity:.2},children:n?s.jsx(Y,{}):s.jsx(Z,{})})})]})}function os({card:e}){return s.jsxs(K,{children:[s.jsx($,{action:s.jsx(ns,{card:e}),title:s.jsx(j,{sx:{typography:"subtitle2",opacity:.72},children:"Viabo Card"}),subheader:e==null?void 0:e.register,sx:{p:0}}),s.jsx("div",{children:s.jsx(U,{card:e})}),s.jsxs(a,{direction:"row",spacing:5,children:[s.jsxs(a,{children:[s.jsx(j,{sx:{mb:1,typography:"caption",opacity:.48},children:"Vencimiento"}),s.jsx(j,{sx:{typography:"subtitle1"},children:e==null?void 0:e.expiration})]}),s.jsx(is,{card:e})]})]})}function cs(){return s.jsxs(es,{sx:e=>({color:e.palette.common.white,display:"flex",p:3,flexDirection:"column",justifyContent:"space-between"}),children:[s.jsxs(a,{children:[s.jsx(o,{variant:"text",sx:{width:.3}}),s.jsx(o,{variant:"text",sx:{width:.5}})]}),s.jsx(a,{sx:{py:1.5},children:s.jsx(o,{variant:"text",sx:{width:.9,height:40}})}),s.jsxs(a,{direction:"row",spacing:2,children:[s.jsxs(a,{spacing:.5,children:[s.jsx(o,{variant:"text",sx:{width:100}}),s.jsx(o,{variant:"text",sx:{width:40}})]}),s.jsxs(a,{spacing:.5,children:[s.jsx(o,{variant:"text",sx:{width:100}}),s.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[s.jsx(o,{variant:"text",sx:{width:40}}),s.jsx(o,{variant:"circular",sx:{width:16,height:16}})]})]})]})]})}function vs({cards:e,emptyMessage:u="No hay tarjetas disponibles en stock",cardComponent:n=os,...m}){const x=L("up","xl"),{isCollapse:d}=W(),[l,f]=c.useState(1),[i,v]=c.useState(""),[C,t]=c.useState([]),{data:z,isLoading:P,isError:b,error:B,isSuccess:A,refetch:R}=e,r=z||[],y=P,w=x?12:9,T=c.useMemo(()=>(i!==""?C:r)||[],[i,r,C]),V=T.length||0,H=Math.ceil(V/w),k=G(T||[],w),D=(h,g)=>{f(g),k.jump(g)};return c.useEffect(()=>{if(i){const h=Q(r,i);t(h)}else t([])},[i,r]),s.jsxs(s.Fragment,{children:[A&&(r==null?void 0:r.length)>0&&s.jsxs(p,{display:"flex",mb:3,flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center"},...m,children:[s.jsx(p,{children:s.jsx(ts,{fullWidth:!0,size:"small",placeholder:"Buscar ...",value:i,onChange:h=>v(h.target.value),InputProps:{startAdornment:s.jsx(as,{position:"start",children:s.jsx(p,{sx:{color:"text.disabled"},children:s.jsx(ss,{sx:{marginTop:1}})})})}})}),s.jsx(p,{sx:{flex:"1 1 auto",mb:{xs:3}}}),s.jsx(X,{count:H,page:l,onChange:D})]}),!y&&A&&r.length===0&&s.jsx(I,{widthImage:"30%",message:u}),!y&&b&&s.jsx(_,{widthImage:"30%",errorMessage:B,handleButton:R}),!b&&s.jsx(p,{mb:3,sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:d?"repeat(3, 1fr)":"repeat(2, 1fr)",xl:"repeat(4, 1fr)"}},children:(y?[...Array(w)]:k.currentData()||[]).map((h,g)=>h?c.createElement(n,{card:h,key:g}):s.jsx(cs,{},g))}),r.length>0&&V===0&&s.jsx(I,{widthImage:"30%",message:"No hay tarjetas que coincidan con la búsqueda"})]})}export{js as A,vs as C,is as a};
