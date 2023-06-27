import{W as v,T as k,r as f,ar as B,as as w,j as o,aq as M,au as R,av as E,P as e,i as L,aW as P,c as C,L as y}from"./build-bd106f3f.js";import{D as A,g as I,a as j,b as T,c as D}from"./build-b80dcee8.js";const N=["className","id"],W=n=>{const{classes:s}=n;return E({root:["root"]},I,s)},_=v(k,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(n,s)=>s.root})({padding:"16px 24px",flex:"0 0 auto"}),K=f.forwardRef(function(s,a){const t=B({props:s,name:"MuiDialogTitle"}),{className:l,id:i}=t,r=w(t,N),c=t,g=W(c),{titleId:u=i}=f.useContext(A);return o.jsx(_,M({component:"h2",className:R(g.root,l),ownerState:c,ref:a,variant:"h6",id:i??u},r))}),S=K;U.propTypes={onClose:e.func,onSuccess:e.func,children:e.node,open:e.bool,isSubmitting:e.bool,scrollType:e.string,title:e.string,textButtonSuccess:e.string,disableLoadingIndicator:e.bool};function U(n){const{title:s,textButtonSuccess:a,isSubmitting:t,open:l,scrollType:i="paper",onClose:r,onSuccess:c,disableLoadingIndicator:g=!1,children:u,...m}=n,x=L();P(x.breakpoints.between("xs","sm"));const d=f.useRef(null);f.useEffect(()=>{if(l){const{current:h}=d;h!==null&&h.focus()}},[l]);const p=(h,b)=>{b&&b==="backdropClick"||b&&b==="escapeKeyDown"||r()};return o.jsxs(j,{open:l,onClose:p,scroll:i,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",...m,children:[o.jsx(S,{sx:{mb:i==="paper"?3:0},id:"scroll-dialog-title",children:s}),o.jsx(T,{id:"scroll-dialog-description",dividers:i==="paper",children:u}),o.jsxs(D,{children:[!t&&o.jsx(C,{variant:"outlined",color:"inherit",onClick:r,children:"Cerrar"}),o.jsx(y,{onClick:c,loading:t,color:"primary",variant:"contained",children:a})]})]})}q.propTypes={onClose:e.func,onSuccess:e.func,open:e.bool,isSubmitting:e.bool,title:e.string,description:e.node,textButtonSuccess:e.string,textButtonCancel:e.string,typeAlert:e.oneOf(["primary","secondary","success","error","info","warning"])};function q(n){const{title:s,description:a,typeAlert:t,textButtonSuccess:l,textButtonCancel:i="Cancelar",isSubmitting:r,open:c,onClose:g,onSuccess:u,...m}=n,x=(d,p)=>{p&&p==="backdropClick"||p&&p==="escapeKeyDown"||g()};return o.jsxs(j,{open:c,onClose:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{"& .MuiDialog-paper":{color:d=>d.palette[t].darker,bgcolor:d=>d.palette[t].lighter}},...m,children:[o.jsx(S,{sx:{paddingBottom:2},id:"alert-dialog-title",children:s}),o.jsx(T,{sx:{paddingBottom:0},children:a}),o.jsxs(D,{children:[!r&&o.jsx(C,{variant:"outlined",color:"inherit",onClick:x,children:i}),o.jsx(y,{onClick:u,color:t,loading:r,variant:"contained",children:l})]})]})}export{q as M,U as a};
