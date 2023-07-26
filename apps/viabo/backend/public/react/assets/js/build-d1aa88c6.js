import{am as S,an as j,aS as x,W as N,ao as h,e as R,aT as m,r as v,ap as _,aq as $,j as i,as as M,at as T,S as U,T as A,I as L}from"./build-9dc23fd9.js";import{g as V,t as X,a as B,M as I}from"./build-3a6bce7a.js";import{f as P,a as W}from"./build-f50814e2.js";import{V as E,a as F}from"./build-b1913ba4.js";function K(t){return S("MuiSkeleton",t)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const O=["animation","className","component","height","style","variant","width"];let d=t=>t,g,f,b,C;const q=t=>{const{classes:a,variant:e,animation:s,hasChildren:o,width:r,height:n}=t;return T({root:["root",e,s,o&&"withChildren",o&&!r&&"fitContent",o&&!n&&"heightAuto"]},K,a)},z=x(g||(g=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),H=x(f||(f=d`
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
`)),D=N("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=V(t.shape.borderRadius)||"px",s=X(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:R(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${e}/${Math.round(s/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(b||(b=d`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),z),({ownerState:t,theme:a})=>t.animation==="wave"&&m(C||(C=d`
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
    `),H,(a.vars||a).palette.action.hover)),G=v.forwardRef(function(a,e){const s=_({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:n="span",height:l,style:u,variant:y="text",width:k}=s,c=$(s,O),p=h({},s,{animation:o,component:n,variant:y,hasChildren:!!c.children}),w=q(p);return i.jsx(D,h({as:n,ref:e,className:M(w.root,r),ownerState:p},c,{style:h({width:k,height:l},u)}))}),tt=G;function at({card:t,disableShow:a,color:e}){var n;const[s,o]=v.useState(!0),r=l=>{l.stopPropagation(),o(u=>!u)};return i.jsxs(U,{direction:"row",alignItems:"center",spacing:1,children:[((n=t==null?void 0:t.cardType)==null?void 0:n.toLowerCase())!=="mastercard"?i.jsx(B,{color:e}):i.jsx(I,{color:e}),i.jsx(A,{sx:{typography:"h6"},children:s?P(t==null?void 0:t.cardNumber):W(t==null?void 0:t.cardNumber)}),!a&&i.jsx(i.Fragment,{children:i.jsx(L,{size:"small",color:"inherit",onClick:r,sx:{opacity:.2},children:s?i.jsx(E,{}):i.jsx(F,{})})})]})}export{at as C,tt as S};
