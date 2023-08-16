import{t as f,j as s,Z as h,cg as N,aq as p,bD as R,ao as z,aQ as O,aP as q,T as b,r as x,aR as F,c7 as U,aT as W,aU as J,K,aK as V,P as n,B as u,cs as G,W as Q,N as Y,O as A,L as Z,d as X}from"./index-d80df4f2.js";import{C as ee}from"./build-5f0f07db.js";const se=f(s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),re=["slots","slotProps"],te=h(N)(({theme:e})=>p({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":p({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":p({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:R(e.palette.grey[200],.12)}:{backgroundColor:R(e.palette.grey[600],.12)})})),oe=h(se)({width:24,height:16});function ae(e){const{slots:r={},slotProps:t={}}=e,o=z(e,re),a=e;return s.jsx("li",{children:s.jsx(te,p({focusRipple:!0},o,{ownerState:a,children:s.jsx(oe,p({as:r.CollapsedIcon,ownerState:a},t.collapsedIcon))}))})}function ne(e){return q("MuiBreadcrumbs",e)}const le=O("MuiBreadcrumbs",["root","ol","li","separator"]),ie=le,ce=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],de=e=>{const{classes:r}=e;return J({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ne,r)},pe=h(b,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${ie.li}`]:r.li},r.root]})({}),ue=h("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),me=h("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function xe(e,r,t,o){return e.reduce((a,d,i)=>(i<e.length-1?a=a.concat(d,s.jsx(me,{"aria-hidden":!0,className:r,ownerState:o,children:t},`separator-${i}`)):a.push(d),a),[])}const he=x.forwardRef(function(r,t){const o=F({props:r,name:"MuiBreadcrumbs"}),{children:a,className:d,component:i="nav",slots:c={},slotProps:E={},expandText:S="Show path",itemsAfterCollapse:y=1,itemsBeforeCollapse:j=1,maxItems:C=8,separator:I="/"}=o,H=z(o,ce),[P,$]=x.useState(!1),m=p({},o,{component:i,expanded:P,expandText:S,itemsAfterCollapse:y,itemsBeforeCollapse:j,maxItems:C,separator:I}),g=de(m),D=U({elementType:c.CollapsedIcon,externalSlotProps:E.collapsedIcon,ownerState:m}),M=x.useRef(null),_=l=>{const B=()=>{$(!0);const L=M.current.querySelector("a[href],button,[tabindex]");L&&L.focus()};return j+y>=l.length?l:[...l.slice(0,j),s.jsx(ae,{"aria-label":S,slots:{CollapsedIcon:c.CollapsedIcon},slotProps:{collapsedIcon:D},onClick:B},"ellipsis"),...l.slice(l.length-y,l.length)]},v=x.Children.toArray(a).filter(l=>x.isValidElement(l)).map((l,B)=>s.jsx("li",{className:g.li,children:l},`child-${B}`));return s.jsx(pe,p({ref:t,component:i,color:"text.secondary",className:W(g.root,d),ownerState:m},H,{children:s.jsx(ue,{className:g.ol,ref:M,ownerState:m,children:xe(P||C&&v.length<=C?v:_(v),g.separator,I,m)})}))}),ge=he,ve=f(s.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Be=f(s.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");function we(e){return K(new Date(e),"dd MMM yyyy HH:mm",{locale:V})}const Se=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],T=f(s.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");fe.propTypes={message:n.string};function fe({message:e,widthImage:r="60%",...t}){return s.jsxs(u,{justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center",sx:{height:"100%"},...t,children:[s.jsx(b,{variant:"subtitle1",textTransform:"capitalize",children:e}),s.jsx(G,{sx:{width:r}})]})}function be({children:e,...r}){return s.jsx(ee,{component:Q,className:"animate__animated animate__fadeIn",maxWidth:!1,...r,style:{overflowY:"auto"},children:e})}be.propTypes={children:n.node.isRequired};k.propTypes={activeLast:n.bool,links:n.array.isRequired};function k({links:e=[],friendlyPages:r={},activeLast:t=!1,...o}){const a=e[e.length-1].name,d=e.map(c=>s.jsx(w,{link:c},c.name)),i=e.map(c=>s.jsx("div",{children:c.name!==a?s.jsx(w,{link:c}):s.jsx(b,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:a})},c.name));return s.jsx(ge,{separator:s.jsx(u,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),"aria-label":"breadcrumb",...o,children:t?d:i})}w.propTypes={link:n.shape({href:n.string,icon:n.any,name:n.string})};function w({link:e}){const{href:r,name:t,icon:o}=e;return s.jsxs(Y,{variant:"body2",component:A,to:r||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&s.jsx(u,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),t]},t)}ye.propTypes={onClick:n.func,name:n.string.isRequired,buttonName:n.string,to:n.string,loading:n.bool,buttons:n.object};function ye({name:e,buttonName:r,to:t="",onClick:o,loading:a=!1,buttons:d,links:i=[]}){return s.jsxs(u,{display:"flex",mb:2,spacing:3,flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"},children:[s.jsxs(u,{sx:{flexGrow:1,mb:{xs:r?3:0,sm:0}},children:[s.jsx(b,{variant:"h4",children:e}),s.jsx(k,{links:i})]}),s.jsx(u,{sx:{flex:"1 1 auto"}}),d,r&&s.jsx(s.Fragment,{children:t===""?s.jsx(Z,{loading:a,variant:"contained",onClick:o,startIcon:s.jsx(T,{}),children:r}):s.jsx(X,{variant:"contained",component:A,to:t,startIcon:s.jsx(T,{}),children:r})})]})}export{T as A,be as C,fe as E,ve as F,ye as H,Be as L,we as f,Se as m};