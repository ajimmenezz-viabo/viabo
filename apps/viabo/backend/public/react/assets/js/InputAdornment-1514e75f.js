import{N as A,L as C,w as E,R as c,e as b,V as I,W as L,m as r,X as $,T as z,o as R,Q as m,Y as T}from"./index-9b2f5530.js";import{u as F,F as N}from"./TextField-b282859c.js";function w(n){return C("MuiInputAdornment",n)}const M=A("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=M;var g;const S=["children","className","component","disablePointerEvents","disableTypography","position","variant"],U=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},_=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:s,position:o,size:a,variant:l}=n,d={root:["root",e&&"disablePointerEvents",o&&`position${m(o)}`,l,s&&"hiddenLabel",a&&`size${m(a)}`]};return T(d,w,t)},j=E("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:U})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),W=b.forwardRef(function(t,e){const s=I({props:t,name:"MuiInputAdornment"}),{children:o,className:a,component:l="div",disablePointerEvents:d=!1,disableTypography:P=!1,position:u,variant:v}=s,x=L(s,S),i=F()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},s,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),y=_(h);return r(N.Provider,{value:null,children:r(j,c({as:l,ownerState:h,className:$(y.root,a),ref:e},x,{children:typeof o=="string"&&!P?r(z,{color:"text.secondary",children:o}):R(b.Fragment,{children:[u==="start"?g||(g=r("span",{className:"notranslate",children:"​"})):null,o]})}))})}),Q=W;export{Q as I};