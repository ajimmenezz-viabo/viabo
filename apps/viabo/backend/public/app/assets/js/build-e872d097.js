import{al as y,am as A,q as C,ap as c,r as b,aq as I,ar as j,j as i,as as L,T as $,ao as m,at as z}from"./index-4598388a.js";import{u as R,r as T}from"./build-002795c1.js";function F(n){return A("MuiInputAdornment",n)}const M=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=M;var x;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},U=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return z(d,F,t)},_=C("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:S})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),w=b.forwardRef(function(t,e){const o=I({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:u,variant:v}=o,E=j(o,N),a=R()||{};let p=v;v&&a.variant,a&&!p&&(p=a.variant);const h=c({},o,{hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:d,position:u,variant:p}),P=U(h);return i.jsx(T.Provider,{value:null,children:i.jsx(_,c({as:l,ownerState:h,className:L(P.root,r),ref:e},E,{children:typeof s=="string"&&!g?i.jsx($,{color:"text.secondary",children:s}):i.jsxs(b.Fragment,{children:[u==="start"?x||(x=i.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),H=w;export{H as I};
