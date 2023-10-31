import{ae as _,ad as E,aj as T,aV as J,ah as l,z as G,j as y,q as h,af as K,aA as k,r as U,ai as S,n as Q,ak as j,ag as L,al as q}from"./index-5445d16d.js";import{F as W,L as A}from"./build-5cc597ce.js";function X(a){return _("MuiPagination",a)}E("MuiPagination",["root","ul","outlined","text"]);const Y=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Z(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:n=1,defaultPage:d=1,disabled:g=!1,hideNextButton:v=!1,hidePrevButton:r=!1,onChange:p,page:s,showFirstButton:b=!1,showLastButton:z=!1,siblingCount:C=1}=a,c=T(a,Y),[i,M]=J({controlled:s,default:d,name:o,state:"page"}),m=(e,$)=>{s||M($),p&&p(e,$)},x=(e,$)=>{const w=$-e+1;return Array.from({length:w},(ba,H)=>e+H)},N=x(1,Math.min(t,n)),f=x(Math.max(n-t+1,t+1),n),R=Math.max(Math.min(i-C,n-t-C*2-1),t+2),I=Math.min(Math.max(i+C,t+C*2+2),f.length>0?f[0]-2:n-1),B=[...b?["first"]:[],...r?[]:["previous"],...N,...R>t+2?["start-ellipsis"]:t+1<n-t?[t+1]:[],...x(R,I),...I<n-t-1?["end-ellipsis"]:n-t>t?[n-t]:[],...f,...v?[]:["next"],...z?["last"]:[]],O=e=>{switch(e){case"first":return 1;case"previous":return i-1;case"next":return i+1;case"last":return n;default:return null}},P=B.map(e=>typeof e=="number"?{onClick:$=>{m($,e)},type:"page",page:e,selected:e===i,disabled:g,"aria-current":e===i?"true":void 0}:{onClick:$=>{m($,O(e))},type:e,page:O(e),selected:!1,disabled:g||e.indexOf("ellipsis")===-1&&(e==="next"||e==="last"?i>=n:i<=1)});return l({items:P},c)}function aa(a){return _("MuiPaginationItem",a)}const ta=E("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),u=ta,F=G(y.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),V=G(y.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),oa=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],D=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${L(o.size)}`],o.variant==="text"&&t[`text${L(o.color)}`],o.variant==="outlined"&&t[`outlined${L(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},na=a=>{const{classes:t,color:o,disabled:n,selected:d,size:g,shape:v,type:r,variant:p}=a,s={root:["root",`size${L(g)}`,p,v,o!=="standard"&&`${p}${L(o)}`,n&&"disabled",d&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[r]],icon:["icon"]};return q(s,aa,t)},ea=h("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:D})(({theme:a,ownerState:t})=>l({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${u.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),sa=h(K,{name:"MuiPaginationItem",slot:"Root",overridesResolver:D})(({theme:a,ownerState:t})=>l({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${u.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${u.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:k(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${u.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:k(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${u.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>l({},t.variant==="text"&&{[`&.${u.selected}`]:l({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${u.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${u.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${u.selected}`]:l({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:k(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:k(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:k(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:k(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${u.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),ia=h("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>l({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),ra=U.forwardRef(function(t,o){const n=S({props:t,name:"MuiPaginationItem"}),{className:d,color:g="standard",component:v,components:r={},disabled:p=!1,page:s,selected:b=!1,shape:z="circular",size:C="medium",slots:c={},type:i="page",variant:M="text"}=n,m=T(n,oa),x=l({},n,{color:g,disabled:p,selected:b,shape:z,size:C,type:i,variant:M}),N=Q(),f=na(x),I=(N.direction==="rtl"?{previous:c.next||r.next||V,next:c.previous||r.previous||F,last:c.first||r.first||W,first:c.last||r.last||A}:{previous:c.previous||r.previous||F,next:c.next||r.next||V,first:c.first||r.first||W,last:c.last||r.last||A})[i];return i==="start-ellipsis"||i==="end-ellipsis"?y.jsx(ea,{ref:o,ownerState:x,className:j(f.root,d),children:"…"}):y.jsxs(sa,l({ref:o,ownerState:x,component:v,disabled:p,className:j(f.root,d)},m,{children:[i==="page"&&s,I?y.jsx(ia,{as:I,ownerState:x,className:f.icon}):null]}))}),la=ra,ca=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],da=a=>{const{classes:t,variant:o}=a;return q({root:["root",o],ul:["ul"]},X,t)},pa=h("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),ua=h("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ga(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const va=U.forwardRef(function(t,o){const n=S({props:t,name:"MuiPagination"}),{boundaryCount:d=1,className:g,color:v="standard",count:r=1,defaultPage:p=1,disabled:s=!1,getItemAriaLabel:b=ga,hideNextButton:z=!1,hidePrevButton:C=!1,renderItem:c=P=>y.jsx(la,l({},P)),shape:i="circular",showFirstButton:M=!1,showLastButton:m=!1,siblingCount:x=1,size:N="medium",variant:f="text"}=n,R=T(n,ca),{items:I}=Z(l({},n,{componentName:"Pagination"})),B=l({},n,{boundaryCount:d,color:v,count:r,defaultPage:p,disabled:s,getItemAriaLabel:b,hideNextButton:z,hidePrevButton:C,renderItem:c,shape:i,showFirstButton:M,showLastButton:m,siblingCount:x,size:N,variant:f}),O=da(B);return y.jsx(pa,l({"aria-label":"pagination navigation",className:j(O.root,g),ownerState:B,ref:o},R,{children:y.jsx(ua,{className:O.ul,ownerState:B,children:I.map((P,e)=>y.jsx("li",{children:c(l({},P,{color:v,"aria-label":b(P.type,P.page,P.selected),shape:i,size:N,variant:f}))},e))})}))}),ya=va;function Ca(a,t){const[o,n]=U.useState(1),d=Math.ceil(a.length/t);function g(){const s=(o-1)*t,b=s+t;return a.slice(s,b)}function v(){n(s=>Math.min(s+1,d))}function r(){n(s=>Math.max(s-1,1))}function p(s){const b=Math.max(1,s);n(z=>Math.min(b,d))}return{next:v,prev:r,jump:p,currentData:g,currentPage:o,maxPage:d}}export{ya as P,Ca as u};