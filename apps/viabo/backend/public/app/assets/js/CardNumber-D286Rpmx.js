import{r as u,i as e,S as b,T as x,I as h,bK as C,bN as l}from"./vendor-B39b6gT1.js";import{C as g}from"./CarnetLogo-CXbiBg5q.js";import"./index-Kl2QvVyT.js";import{M as f}from"./MasterCardLogo-VWsSONZB.js";import{b as j,c as N}from"./formatNumber-Byfz8vD2.js";function T({card:s,disableShow:i,color:r}){var t;const[o,a]=u.useState(!0),n=m=>{m.stopPropagation(),a(p=>!p)};return e.jsxs(b,{direction:"row",alignItems:"center",spacing:1,children:[((t=s==null?void 0:s.cardType)==null?void 0:t.toLowerCase())!=="mastercard"?e.jsx(g,{basedOnTheme:!0,color:r}):e.jsx(f,{color:r}),e.jsx(x,{sx:{typography:"h6"},children:o?j(s==null?void 0:s.cardNumber):N(s==null?void 0:s.cardNumber)}),!i&&e.jsx(e.Fragment,{children:e.jsx(h,{size:"small",color:"inherit",onClick:n,sx:{opacity:.2},children:o?e.jsx(C,{}):e.jsx(l,{})})})]})}export{T as C};
//# sourceMappingURL=CardNumber-D286Rpmx.js.map