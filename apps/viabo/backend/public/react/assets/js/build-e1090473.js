import{r as u,j as s,S as x,T as b,I as h}from"./index-5914b1fb.js";import{a as f}from"./build-60153964.js";import{M as l}from"./build-6fe99893.js";import{a as C,b as g}from"./build-d581bd4f.js";import{V as j}from"./build-c47585df.js";import{V as y}from"./build-813cba1c.js";function V({card:r,disableShow:i,color:o}){var t;const[e,a]=u.useState(!0),m=n=>{n.stopPropagation(),a(p=>!p)};return s.jsxs(x,{direction:"row",alignItems:"center",spacing:1,children:[((t=r==null?void 0:r.cardType)==null?void 0:t.toLowerCase())!=="mastercard"?s.jsx(f,{basedOnTheme:!0,color:o}):s.jsx(l,{color:o}),s.jsx(b,{sx:{typography:"h6"},children:e?C(r==null?void 0:r.cardNumber):g(r==null?void 0:r.cardNumber)}),!i&&s.jsx(s.Fragment,{children:s.jsx(h,{size:"small",color:"inherit",onClick:m,sx:{opacity:.2},children:e?s.jsx(j,{}):s.jsx(y,{})})})]})}export{V as C};
