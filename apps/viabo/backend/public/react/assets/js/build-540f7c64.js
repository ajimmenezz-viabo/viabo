import{r as u,j as s,S as x,T as b,I as f}from"./index-940cbd95.js";import{a as h}from"./build-b3d80aba.js";import{M as l}from"./build-f2699fae.js";import{a as C,b as g}from"./build-5c0b3e2f.js";import{V as j}from"./build-e89d39fb.js";import{V as y}from"./build-8891c058.js";function V({card:r,disableShow:i,color:o}){var e;const[t,a]=u.useState(!0),m=n=>{n.stopPropagation(),a(p=>!p)};return s.jsxs(x,{direction:"row",alignItems:"center",spacing:1,children:[((e=r==null?void 0:r.cardType)==null?void 0:e.toLowerCase())!=="mastercard"?s.jsx(h,{color:o}):s.jsx(l,{color:o}),s.jsx(b,{sx:{typography:"h6"},children:t?C(r==null?void 0:r.cardNumber):g(r==null?void 0:r.cardNumber)}),!i&&s.jsx(s.Fragment,{children:s.jsx(f,{size:"small",color:"inherit",onClick:m,sx:{opacity:.2},children:t?s.jsx(j,{}):s.jsx(y,{})})})]})}export{V as C};