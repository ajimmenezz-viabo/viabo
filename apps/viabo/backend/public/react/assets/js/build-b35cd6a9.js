import{Q as S,R as j,b4 as x,W as R,U as h,e as N,b5 as m,r as v,V as _,X as $,j as i,Z as U,$ as M,S as T,T as V,I as X}from"./build-a914105e.js";import{g as A,t as L}from"./build-80a184b8.js";import{C as B,M as I}from"./build-43d9dd38.js";import{e as P,g as W}from"./build-71d71eb2.js";import{V as E,a as F}from"./build-6b2f2a1f.js";function K(t){return S("MuiSkeleton",t)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const O=["animation","className","component","height","style","variant","width"];let d=t=>t,g,f,b,C;const z=t=>{const{classes:e,variant:a,animation:s,hasChildren:o,width:r,height:n}=t;return M({root:["root",a,s,o&&"withChildren",o&&!r&&"fitContent",o&&!n&&"heightAuto"]},K,e)},H=x(g||(g=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Q=x(f||(f=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),Z=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=A(t.shape.borderRadius)||"px",s=L(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:N(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(b||(b=d`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),H),({ownerState:t,theme:e})=>t.animation==="wave"&&m(C||(C=d`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Q,(e.vars||e).palette.action.hover)),q=v.forwardRef(function(e,a){const s=_({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:n="span",height:l,style:u,variant:y="text",width:k}=s,c=$(s,O),p=h({},s,{animation:o,component:n,variant:y,hasChildren:!!c.children}),w=z(p);return i.jsx(Z,h({as:n,ref:a,className:U(w.root,r),ownerState:p},c,{style:h({width:k,height:l},u)}))}),et=q;function at({card:t,disableShow:e,color:a}){var n;const[s,o]=v.useState(!0),r=l=>{l.stopPropagation(),o(u=>!u)};return i.jsxs(T,{direction:"row",alignItems:"center",spacing:1,children:[((n=t==null?void 0:t.cardType)==null?void 0:n.toLowerCase())!=="mastercard"?i.jsx(B,{color:a}):i.jsx(I,{color:a}),i.jsx(V,{sx:{typography:"h6"},children:s?P(t==null?void 0:t.cardNumber):W(t==null?void 0:t.cardNumber)}),!e&&i.jsx(i.Fragment,{children:i.jsx(X,{size:"small",color:"inherit",onClick:r,sx:{opacity:.2},children:s?i.jsx(E,{}):i.jsx(F,{})})})]})}export{at as C,et as S};
