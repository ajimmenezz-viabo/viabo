import{aQ as R,aP as T,Z as c,ap as d,r as j,aR as P,an as N,T as l,j as r,aT as M,aU as w}from"./index-6ad460b4.js";function S(a){return T("MuiCardHeader",a)}const U=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),C=U,A=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],$=a=>{const{classes:e}=a;return w({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},S,e)},_=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${C.title}`]:e.title,[`& .${C.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),k=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),E=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),B=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),I=j.forwardRef(function(e,h){const p=P({props:e,name:"MuiCardHeader"}),{action:m,avatar:i,className:v,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:x,title:g,titleTypographyProps:H}=p,f=N(p,A),s=d({},p,{component:y,disableTypography:u}),t=$(s);let o=g;o!=null&&o.type!==l&&!u&&(o=r.jsx(l,d({variant:i?"body2":"h5",className:t.title,component:"span",display:"block"},H,{children:o})));let n=b;return n!=null&&n.type!==l&&!u&&(n=r.jsx(l,d({variant:i?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:n}))),r.jsxs(_,d({className:M(t.root,v),as:y,ref:h,ownerState:s},f,{children:[i&&r.jsx(k,{className:t.avatar,ownerState:s,children:i}),r.jsxs(B,{className:t.content,ownerState:s,children:[o,n]}),m&&r.jsx(E,{className:t.action,ownerState:s,children:m})]}))}),Q=I;export{Q as C};
