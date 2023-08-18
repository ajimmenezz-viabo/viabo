import{t as f,j as s,Z as h,cg as _,aq as p,bD as R,ao as z,aQ as N,aP as q,T as b,r as x,aR as F,c7 as U,aT as W,aU as J,K as V,ax as Z,cs as G,ct as K,P as n,B as u,cu as Q,W as Y,N as X,O as D,L as ee,d as se}from"./index-6863da86.js";import{C as te}from"./build-3106248c.js";const re=f(s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),oe=["slots","slotProps"],ae=h(_)(({theme:e})=>p({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":p({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":p({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:R(e.palette.grey[200],.12)}:{backgroundColor:R(e.palette.grey[600],.12)})})),ne=h(re)({width:24,height:16});function le(e){const{slots:t={},slotProps:r={}}=e,o=z(e,oe),a=e;return s.jsx("li",{children:s.jsx(ae,p({focusRipple:!0},o,{ownerState:a,children:s.jsx(ne,p({as:t.CollapsedIcon,ownerState:a},r.collapsedIcon))}))})}function ie(e){return q("MuiBreadcrumbs",e)}const ce=N("MuiBreadcrumbs",["root","ol","li","separator"]),de=ce,pe=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],ue=e=>{const{classes:t}=e;return J({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ie,t)},me=h(b,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${de.li}`]:t.li},t.root]})({}),xe=h("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),he=h("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ge(e,t,r,o){return e.reduce((a,d,i)=>(i<e.length-1?a=a.concat(d,s.jsx(he,{"aria-hidden":!0,className:t,ownerState:o,children:r},`separator-${i}`)):a.push(d),a),[])}const fe=x.forwardRef(function(t,r){const o=F({props:t,name:"MuiBreadcrumbs"}),{children:a,className:d,component:i="nav",slots:c={},slotProps:A={},expandText:S="Show path",itemsAfterCollapse:y=1,itemsBeforeCollapse:j=1,maxItems:C=8,separator:I="/"}=o,k=z(o,pe),[M,E]=x.useState(!1),m=p({},o,{component:i,expanded:M,expandText:S,itemsAfterCollapse:y,itemsBeforeCollapse:j,maxItems:C,separator:I}),g=ue(m),H=U({elementType:c.CollapsedIcon,externalSlotProps:A.collapsedIcon,ownerState:m}),P=x.useRef(null),$=l=>{const B=()=>{E(!0);const L=P.current.querySelector("a[href],button,[tabindex]");L&&L.focus()};return j+y>=l.length?l:[...l.slice(0,j),s.jsx(le,{"aria-label":S,slots:{CollapsedIcon:c.CollapsedIcon},slotProps:{collapsedIcon:H},onClick:B},"ellipsis"),...l.slice(l.length-y,l.length)]},v=x.Children.toArray(a).filter(l=>x.isValidElement(l)).map((l,B)=>s.jsx("li",{className:g.li,children:l},`child-${B}`));return s.jsx(me,p({ref:r,component:i,color:"text.secondary",className:W(g.root,d),ownerState:m},k,{children:s.jsx(xe,{className:g.ol,ref:P,ownerState:m,children:ge(M||C&&v.length<=C?v:$(v),g.separator,I,m)})}))}),be=fe,we=f(s.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Se=f(s.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");function Ie(e){return V(new Date(e),"dd MMM yyyy HH:mm",{locale:Z})}function Me(e){const t=G(e),r=new Date().getTimezoneOffset();return K(t,r)}const Pe=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],T=f(s.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");ye.propTypes={message:n.string};function ye({message:e,widthImage:t="60%",...r}){return s.jsxs(u,{justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center",sx:{height:"100%"},...r,children:[s.jsx(b,{variant:"subtitle1",textTransform:"capitalize",children:e}),s.jsx(Q,{sx:{width:t}})]})}function je({children:e,...t}){return s.jsx(te,{component:Y,className:"animate__animated animate__fadeIn",maxWidth:!1,...t,style:{overflowY:"auto"},children:e})}je.propTypes={children:n.node.isRequired};O.propTypes={activeLast:n.bool,links:n.array.isRequired};function O({links:e=[],friendlyPages:t={},activeLast:r=!1,...o}){const a=e[e.length-1].name,d=e.map(c=>s.jsx(w,{link:c},c.name)),i=e.map(c=>s.jsx("div",{children:c.name!==a?s.jsx(w,{link:c}):s.jsx(b,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:a})},c.name));return s.jsx(be,{separator:s.jsx(u,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),"aria-label":"breadcrumb",...o,children:r?d:i})}w.propTypes={link:n.shape({href:n.string,icon:n.any,name:n.string})};function w({link:e}){const{href:t,name:r,icon:o}=e;return s.jsxs(X,{variant:"body2",component:D,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&s.jsx(u,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),r]},r)}Ce.propTypes={onClick:n.func,name:n.string.isRequired,buttonName:n.string,to:n.string,loading:n.bool,buttons:n.object};function Ce({name:e,buttonName:t,to:r="",onClick:o,loading:a=!1,buttons:d,links:i=[]}){return s.jsxs(u,{display:"flex",mb:2,spacing:3,flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"},children:[s.jsxs(u,{sx:{flexGrow:1,mb:{xs:t?3:0,sm:0}},children:[s.jsx(b,{variant:"h4",children:e}),s.jsx(O,{links:i})]}),s.jsx(u,{sx:{flex:"1 1 auto"}}),d,t&&s.jsx(s.Fragment,{children:r===""?s.jsx(ee,{loading:a,variant:"contained",onClick:o,startIcon:s.jsx(T,{}),children:t}):s.jsx(se,{variant:"contained",component:D,to:r,startIcon:s.jsx(T,{}),children:t})})]})}export{T as A,je as C,ye as E,we as F,Ce as H,Se as L,Ie as f,Pe as m,Me as n};