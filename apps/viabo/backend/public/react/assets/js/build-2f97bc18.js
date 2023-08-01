import{Q as h,R as b,W as u,U as i,r as p,V as y,X as S,j as c,Z as m,$,aN as V,dG as G,a0 as d,i as T,k as O,d1 as Q,dB as Z}from"./build-a914105e.js";function q(o){return h("MuiDialogContent",o)}b("MuiDialogContent",["root","dividers"]);function ko(o){return h("MuiDialogTitle",o)}const J=b("MuiDialogTitle",["root"]),oo=J,eo=["className","dividers"],ao=o=>{const{classes:e,dividers:a}=o;return $({root:["root",a&&"dividers"]},q,e)},to=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${oo.root} + &`]:{paddingTop:0}})),io=p.forwardRef(function(e,a){const t=y({props:e,name:"MuiDialogContent"}),{className:s,dividers:r=!1}=t,n=S(t,eo),l=i({},t,{dividers:r}),g=ao(l);return c.jsx(to,i({className:m(g.root,s),ownerState:l,ref:a},n))}),yo=io;function so(o){return h("MuiDialog",o)}const ro=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=ro,no=p.createContext({}),lo=no,co=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],po=u(V,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),uo=o=>{const{classes:e,scroll:a,maxWidth:t,fullWidth:s,fullScreen:r}=o,n={root:["root"],container:["container",`scroll${d(a)}`],paper:["paper",`paperScroll${d(a)}`,`paperWidth${d(String(t))}`,s&&"paperFullWidth",r&&"paperFullScreen"]};return $(n,so,e)},go=u(G,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),xo=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${d(a.scroll)}`]]}})(({ownerState:o})=>i({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),mo=u(T,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${d(a.scroll)}`],e[`paperWidth${d(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),fo=p.forwardRef(function(e,a){const t=y({props:e,name:"MuiDialog"}),s=O(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":l,BackdropComponent:g,BackdropProps:A,children:N,className:j,disableEscapeKeyDown:M=!1,fullScreen:U=!1,fullWidth:F=!1,maxWidth:E="sm",onBackdropClick:w,onClose:D,open:P,PaperComponent:I=T,PaperProps:B={},scroll:L="paper",TransitionComponent:_=Z,transitionDuration:R=r,TransitionProps:X}=t,Y=S(t,co),f=i({},t,{disableEscapeKeyDown:M,fullScreen:U,fullWidth:F,maxWidth:E,scroll:L}),C=uo(f),v=p.useRef(),K=x=>{v.current=x.target===x.currentTarget},z=x=>{v.current&&(v.current=null,w&&w(x),D&&D(x,"backdropClick"))},W=Q(l),H=p.useMemo(()=>({titleId:W}),[W]);return c.jsx(go,i({className:m(C.root,j),closeAfterTransition:!0,components:{Backdrop:po},componentsProps:{backdrop:i({transitionDuration:R,as:g},A)},disableEscapeKeyDown:M,onClose:D,open:P,ref:a,onClick:z,ownerState:f},Y,{children:c.jsx(_,i({appear:!0,in:P,timeout:R,role:"presentation"},X,{children:c.jsx(xo,{className:m(C.container),onMouseDown:K,ownerState:f,children:c.jsx(mo,i({as:I,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":W},B,{className:m(C.paper,B.className),ownerState:f,children:c.jsx(lo.Provider,{value:H,children:N})}))})}))}))}),So=fo;function ho(o){return h("MuiDialogActions",o)}b("MuiDialogActions",["root","spacing"]);const bo=["className","disableSpacing"],Do=o=>{const{classes:e,disableSpacing:a}=o;return $({root:["root",!a&&"spacing"]},ho,e)},Co=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,!a.disableSpacing&&e.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),vo=p.forwardRef(function(e,a){const t=y({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:r=!1}=t,n=S(t,bo),l=i({},t,{disableSpacing:r}),g=Do(l);return c.jsx(Co,i({className:m(g.root,s),ownerState:l,ref:a},n))}),$o=vo;export{lo as D,So as a,yo as b,$o as c,k as d,ko as g};