import{Z as i,j as a,f as d,cE as p,aU as c,aA as g,a9 as x,C as t,$ as u,S as f,T as h,I as m,aT as y,G as b}from"./index-b206e6bf.js";import{C as S}from"./build-bed0eb48.js";import{D as w}from"./build-7661dcbf.js";const C="/react/assets/img/overlay_2.jpg",R=230,I=i(e=>a.jsx(S,{...e}))(({theme:e})=>({height:R-16,color:e.palette.common.white,padding:e.spacing(3),display:"flex",flexDirection:"column",justifyContent:"space-between",background:`linear-gradient(rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.9)) center center / cover no-repeat, url(${C})`})),k=i(d.div)(({theme:e,width:o})=>({...p(e).bgBlur({color:e.palette.background.paper,opacity:.92}),top:0,right:0,bottom:0,display:"flex",position:"fixed",overflow:"hidden",width:o||c.BASE_WIDTH+200,[e.breakpoints.down("md")]:{width:"100%"},flexDirection:"column",margin:0,paddingBottom:e.spacing(3),zIndex:e.zIndex.drawer+3,borderRadius:Number(e.shape.borderRadius)*1.5,boxShadow:`-24px 12px 32px -4px ${g(e.palette.mode==="light"?e.palette.grey[500]:e.palette.common.black,.16)}`})),T={open:!1,card:null,isReadyToAssign:!1},j=(e,o)=>({...T,setCard:s=>{e(r=>({card:s}),!1,"SET_CARD")},setReadyToAssign:s=>{e(r=>({isReadyToAssign:s}),!1,"SET_READY_TO_ASSIGN")},setOpen:s=>{e(r=>({open:s}),!1,"SET_OPEN")}}),_=x(j);A.propTypes={open:t.bool,handleClose:t.func,title:t.string,children:t.node,titleElement:t.node};function A({open:e=!1,handleClose:o,title:s,children:r,titleElement:l}){const n=u("down","md");return a.jsxs(w,{anchor:n?"bottom":"right",sx:{"& .MuiPaper-root.MuiDrawer-paper":{borderRadius:`${n?"none":"10px 0px 0px 10px"}`,width:{sm:"100%",lg:"40%",xl:"30%"}}},open:e,keepMounted:!1,children:[a.jsxs(f,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[l||a.jsx(h,{variant:"h6",children:s}),a.jsx("div",{children:a.jsx(m,{"aria-label":"close",size:"medium",onClick:o,children:a.jsx(y,{width:20,height:20,fontSize:"inherit",color:"primary"})})})]}),a.jsx(b,{sx:{borderStyle:"dashed"}}),r]})}export{I as C,k as R,A as a,_ as u};
