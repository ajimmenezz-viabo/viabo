import{cK as He,am as W,cr as qe,z as k,at as Ue,ax as Ve,au as Ge,cc as Je,as as Ye,cb as Ke,c8 as Ie,aw as Ze,bp as Re,c9 as Qe,ak as Z,aj as Q,q as R,an as r,r as M,ao as X,ap as H,n as se,j as n,aq as J,ar as ee,bR as Xe,cL as et,cM as ce,al as je,bT as de,T as re,av as tt,aE as _,J as we,ay as A,b8 as pe,b9 as ue,ba as ge,bb as ae,az as fe,aA as xe,b5 as ve,bc as be,bd as me,b4 as he,b6 as at,cN as ot,cB as nt,B as F,o as st,N as I,i as Ee,L as rt,p as it}from"./index-3809032b.js";import{i as lt}from"./build-53b11780.js";import{C as ct}from"./build-c6f78c0d.js";import{L as dt}from"./build-6fc59234.js";function pt(e,t){return()=>null}function ut(e,t){return()=>null}function gt(e,t,a,o,i){return null}const ft={configure:e=>{He.configure(e)}},xt=Object.freeze(Object.defineProperty({__proto__:null,capitalize:W,createChainedFunction:qe,createSvgIcon:k,debounce:Ue,deprecatedPropType:pt,isMuiElement:lt,ownerDocument:Ve,ownerWindow:Ge,requirePropFactory:ut,setRef:Je,unstable_ClassNameGenerator:ft,unstable_useEnhancedEffect:Ye,unstable_useId:Ke,unsupportedProp:gt,useControlled:Ie,useEventCallback:Ze,useForkRef:Re,useIsFocusVisible:Qe},Symbol.toStringTag,{value:"Module"}));function vt(e){return Z("MuiCollapse",e)}Q("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const bt=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],mt=e=>{const{orientation:t,classes:a}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return ee(o,vt,a)},ht=R("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.orientation],a.state==="entered"&&t.entered,a.state==="exited"&&!a.in&&a.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>r({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&r({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),yt=R("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>r({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Ct=R("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>r({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Be=M.forwardRef(function(t,a){const o=X({props:t,name:"MuiCollapse"}),{addEndListener:i,children:f,className:u,collapsedSize:l="0px",component:C,easing:z,in:$,onEnter:j,onEntered:m,onEntering:x,onExit:d,onExited:S,onExiting:B,orientation:v="vertical",style:h,timeout:g=Xe.standard,TransitionComponent:N=et}=o,D=H(o,bt),P=r({},o,{orientation:v,collapsedSize:l}),p=mt(P),y=se(),c=M.useRef(),b=M.useRef(null),q=M.useRef(),U=typeof l=="number"?`${l}px`:l,O=v==="horizontal",V=O?"width":"height";M.useEffect(()=>()=>{clearTimeout(c.current)},[]);const Y=M.useRef(null),Le=Re(a,Y),T=s=>w=>{if(s){const L=Y.current;w===void 0?s(L):s(L,w)}},te=()=>b.current?b.current[O?"clientWidth":"clientHeight"]:0,Oe=T((s,w)=>{b.current&&O&&(b.current.style.position="absolute"),s.style[V]=U,j&&j(s,w)}),ke=T((s,w)=>{const L=te();b.current&&O&&(b.current.style.position="");const{duration:G,easing:K}=ce({style:h,timeout:g,easing:z},{mode:"enter"});if(g==="auto"){const le=y.transitions.getAutoHeightDuration(L);s.style.transitionDuration=`${le}ms`,q.current=le}else s.style.transitionDuration=typeof G=="string"?G:`${G}ms`;s.style[V]=`${L}px`,s.style.transitionTimingFunction=K,x&&x(s,w)}),Te=T((s,w)=>{s.style[V]="auto",m&&m(s,w)}),_e=T(s=>{s.style[V]=`${te()}px`,d&&d(s)}),Ae=T(S),We=T(s=>{const w=te(),{duration:L,easing:G}=ce({style:h,timeout:g,easing:z},{mode:"exit"});if(g==="auto"){const K=y.transitions.getAutoHeightDuration(w);s.style.transitionDuration=`${K}ms`,q.current=K}else s.style.transitionDuration=typeof L=="string"?L:`${L}ms`;s.style[V]=U,s.style.transitionTimingFunction=G,B&&B(s)}),Fe=s=>{g==="auto"&&(c.current=setTimeout(s,q.current||0)),i&&i(Y.current,s)};return n.jsx(N,r({in:$,onEnter:Oe,onEntered:Te,onEntering:ke,onExit:_e,onExited:Ae,onExiting:We,addEndListener:Fe,nodeRef:Y,timeout:g==="auto"?null:g},D,{children:(s,w)=>n.jsx(ht,r({as:C,className:J(p.root,u,{entered:p.entered,exited:!$&&U==="0px"&&p.hidden}[s]),style:r({[O?"minWidth":"minHeight"]:U},h),ownerState:r({},P,{state:s}),ref:Le},w,{children:n.jsx(yt,{ownerState:r({},P,{state:s}),className:p.wrapper,ref:b,children:n.jsx(Ct,{ownerState:r({},P,{state:s}),className:p.wrapperInner,children:f})})}))}))});Be.muiSupportAuto=!0;const va=Be,zt=k(n.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Pt=["slots","slotProps"],$t=R(je)(({theme:e})=>r({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":r({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":r({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:de(e.palette.grey[200],.12)}:{backgroundColor:de(e.palette.grey[600],.12)})})),Mt=R(zt)({width:24,height:16});function It(e){const{slots:t={},slotProps:a={}}=e,o=H(e,Pt),i=e;return n.jsx("li",{children:n.jsx($t,r({focusRipple:!0},o,{ownerState:i,children:n.jsx(Mt,r({as:t.CollapsedIcon,ownerState:i},a.collapsedIcon))}))})}function Rt(e){return Z("MuiBreadcrumbs",e)}const jt=Q("MuiBreadcrumbs",["root","ol","li","separator"]),wt=jt,Et=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Bt=e=>{const{classes:t}=e;return ee({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Rt,t)},Dt=R(re,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${wt.li}`]:t.li},t.root]})({}),St=R("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),Nt=R("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function Lt(e,t,a,o){return e.reduce((i,f,u)=>(u<e.length-1?i=i.concat(f,n.jsx(Nt,{"aria-hidden":!0,className:t,ownerState:o,children:a},`separator-${u}`)):i.push(f),i),[])}const Ot=M.forwardRef(function(t,a){const o=X({props:t,name:"MuiBreadcrumbs"}),{children:i,className:f,component:u="nav",slots:l={},slotProps:C={},expandText:z="Show path",itemsAfterCollapse:$=1,itemsBeforeCollapse:j=1,maxItems:m=8,separator:x="/"}=o,d=H(o,Et),[S,B]=M.useState(!1),v=r({},o,{component:u,expanded:S,expandText:z,itemsAfterCollapse:$,itemsBeforeCollapse:j,maxItems:m,separator:x}),h=Bt(v),g=tt({elementType:l.CollapsedIcon,externalSlotProps:C.collapsedIcon,ownerState:v}),N=M.useRef(null),D=p=>{const y=()=>{B(!0);const c=N.current.querySelector("a[href],button,[tabindex]");c&&c.focus()};return j+$>=p.length?p:[...p.slice(0,j),n.jsx(It,{"aria-label":z,slots:{CollapsedIcon:l.CollapsedIcon},slotProps:{collapsedIcon:g},onClick:y},"ellipsis"),...p.slice(p.length-$,p.length)]},P=M.Children.toArray(i).filter(p=>M.isValidElement(p)).map((p,y)=>n.jsx("li",{className:h.li,children:p},`child-${y}`));return n.jsx(Dt,r({ref:a,component:u,color:"text.secondary",className:J(h.root,f),ownerState:v},d,{children:n.jsx(St,{className:h.ol,ref:N,ownerState:v,children:Lt(S||m&&P.length<=m?P:D(P),h.separator,x,v)})}))}),kt=Ot;function Tt(e){return Z("MuiPagination",e)}Q("MuiPagination",["root","ul","outlined","text"]);const _t=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function At(e={}){const{boundaryCount:t=1,componentName:a="usePagination",count:o=1,defaultPage:i=1,disabled:f=!1,hideNextButton:u=!1,hidePrevButton:l=!1,onChange:C,page:z,showFirstButton:$=!1,showLastButton:j=!1,siblingCount:m=1}=e,x=H(e,_t),[d,S]=Ie({controlled:z,default:i,name:a,state:"page"}),B=(c,b)=>{z||S(b),C&&C(c,b)},v=(c,b)=>{const q=b-c+1;return Array.from({length:q},(U,O)=>c+O)},h=v(1,Math.min(t,o)),g=v(Math.max(o-t+1,t+1),o),N=Math.max(Math.min(d-m,o-t-m*2-1),t+2),D=Math.min(Math.max(d+m,t+m*2+2),g.length>0?g[0]-2:o-1),P=[...$?["first"]:[],...l?[]:["previous"],...h,...N>t+2?["start-ellipsis"]:t+1<o-t?[t+1]:[],...v(N,D),...D<o-t-1?["end-ellipsis"]:o-t>t?[o-t]:[],...g,...u?[]:["next"],...j?["last"]:[]],p=c=>{switch(c){case"first":return 1;case"previous":return d-1;case"next":return d+1;case"last":return o;default:return null}},y=P.map(c=>typeof c=="number"?{onClick:b=>{B(b,c)},type:"page",page:c,selected:c===d,disabled:f,"aria-current":c===d?"true":void 0}:{onClick:b=>{B(b,p(c))},type:c,page:p(c),selected:!1,disabled:f||c.indexOf("ellipsis")===-1&&(c==="next"||c==="last"?d>=o:d<=1)});return r({items:y},x)}function Wt(e){return Z("MuiPaginationItem",e)}const Ft=Q("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),E=Ft,ye=k(n.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Ce=k(n.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),ze=k(n.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),Pe=k(n.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Ht=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],De=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${W(a.size)}`],a.variant==="text"&&t[`text${W(a.color)}`],a.variant==="outlined"&&t[`outlined${W(a.color)}`],a.shape==="rounded"&&t.rounded,a.type==="page"&&t.page,(a.type==="start-ellipsis"||a.type==="end-ellipsis")&&t.ellipsis,(a.type==="previous"||a.type==="next")&&t.previousNext,(a.type==="first"||a.type==="last")&&t.firstLast]},qt=e=>{const{classes:t,color:a,disabled:o,selected:i,size:f,shape:u,type:l,variant:C}=e,z={root:["root",`size${W(f)}`,C,u,a!=="standard"&&`${C}${W(a)}`,o&&"disabled",i&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return ee(z,Wt,t)},Ut=R("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:De})(({theme:e,ownerState:t})=>r({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${E.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)})),Vt=R(je,{name:"MuiPaginationItem",slot:"Root",overridesResolver:De})(({theme:e,ownerState:t})=>r({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${E.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${E.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${E.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:_(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${E.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:_(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${E.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius}),({theme:e,ownerState:t})=>r({},t.variant==="text"&&{[`&.${E.selected}`]:r({},t.color!=="standard"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${E.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${E.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},t.variant==="outlined"&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${E.selected}`]:r({},t.color!=="standard"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:_(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:_(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:_(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${E.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:_(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${E.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})})),Gt=R("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})(({theme:e,ownerState:t})=>r({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:e.typography.pxToRem(18)},t.size==="large"&&{fontSize:e.typography.pxToRem(22)})),Jt=M.forwardRef(function(t,a){const o=X({props:t,name:"MuiPaginationItem"}),{className:i,color:f="standard",component:u,components:l={},disabled:C=!1,page:z,selected:$=!1,shape:j="circular",size:m="medium",slots:x={},type:d="page",variant:S="text"}=o,B=H(o,Ht),v=r({},o,{color:f,disabled:C,selected:$,shape:j,size:m,type:d,variant:S}),h=se(),g=qt(v),D=(h.direction==="rtl"?{previous:x.next||l.next||Pe,next:x.previous||l.previous||ze,last:x.first||l.first||ye,first:x.last||l.last||Ce}:{previous:x.previous||l.previous||ze,next:x.next||l.next||Pe,first:x.first||l.first||ye,last:x.last||l.last||Ce})[d];return d==="start-ellipsis"||d==="end-ellipsis"?n.jsx(Ut,{ref:a,ownerState:v,className:J(g.root,i),children:"…"}):n.jsxs(Vt,r({ref:a,ownerState:v,component:u,disabled:C,className:J(g.root,i)},B,{children:[d==="page"&&z,D?n.jsx(Gt,{as:D,ownerState:v,className:g.icon}):null]}))}),Yt=Jt,Kt=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Zt=e=>{const{classes:t,variant:a}=e;return ee({root:["root",a],ul:["ul"]},Tt,t)},Qt=R("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),Xt=R("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ea(e,t,a){return e==="page"?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}const ta=M.forwardRef(function(t,a){const o=X({props:t,name:"MuiPagination"}),{boundaryCount:i=1,className:f,color:u="standard",count:l=1,defaultPage:C=1,disabled:z=!1,getItemAriaLabel:$=ea,hideNextButton:j=!1,hidePrevButton:m=!1,renderItem:x=y=>n.jsx(Yt,r({},y)),shape:d="circular",showFirstButton:S=!1,showLastButton:B=!1,siblingCount:v=1,size:h="medium",variant:g="text"}=o,N=H(o,Kt),{items:D}=At(r({},o,{componentName:"Pagination"})),P=r({},o,{boundaryCount:i,color:u,count:l,defaultPage:C,disabled:z,getItemAriaLabel:$,hideNextButton:j,hidePrevButton:m,renderItem:x,shape:d,showFirstButton:S,showLastButton:B,siblingCount:v,size:h,variant:g}),p=Zt(P);return n.jsx(Qt,r({"aria-label":"pagination navigation",className:J(p.root,f),ownerState:P,ref:a},N,{children:n.jsx(Xt,{className:p.ul,ownerState:P,children:D.map((y,c)=>n.jsx("li",{children:x(r({},y,{color:u,"aria-label":$(y.type,y.page,y.selected),shape:d,size:h,variant:g}))},c))})}))}),ba=ta;function ma(e){return we(new Date(e),"dd MMMM, yyyy",{locale:A})}function ha(e){return we(new Date(e),"dd MMM yyyy HH:mm",{locale:A})}function ya(e){const t=at(e),a=new Date().getTimezoneOffset();return ot(t,a)}const Ca=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],za=(e=new Date)=>[{label:"Hoy",startDate:e,endDate:e},{label:"Ayer",startDate:pe(e,-1),endDate:pe(e,-1)},{label:"Esta Semana",startDate:ue(e,{locale:A}),endDate:ge(e,{locale:A})},{label:"Última Semana",startDate:ue(ae(e,-1),{locale:A}),endDate:ge(ae(e,-1),{locale:A})},{label:"Últimos 7 Días",startDate:ae(e,-1),endDate:e},{label:"Este Mes",startDate:fe(e),endDate:xe(e)},{label:"Último Mes",startDate:fe(ve(e,-1)),endDate:xe(ve(e,-1))},{label:"Este Año",startDate:be(e),endDate:me(e)},{label:"Último Año",startDate:be(he(e,-1)),endDate:me(he(e,-1))}];var Se={exports:{}};(function(e){function t(a){return a&&a.__esModule?a:{default:a}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Se);var aa=Se.exports,oe={};const oa=nt(xt);var $e;function na(){return $e||($e=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=oa}(oe)),oe}var ie={},sa=aa;Object.defineProperty(ie,"__esModule",{value:!0});var ra=ie.default=void 0,ia=sa(na()),la=n,ca=(0,ia.default)((0,la.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");ra=ie.default=ca;function Pa({sx:e,color:t,basedOnTheme:a=!1}){const o=se();o.palette.text.disabled,o.palette.text.secondary,o.palette.text.primary;const i=o.palette.mode==="dark";return n.jsx(F,{sx:{width:50,height:50,display:"flex",alignItems:"center",...e},children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",style:{enableBackground:"new 0 0 145.8 80.4"},viewBox:"0 0 145.8 80.4",children:n.jsx("path",{d:"M72.5 25.2c25.1 0 46 9.6 50.1 22.2.5-1.5.8-3 .8-4.6 0-14.8-22.8-26.9-51-26.9-28.1 0-51 12-51 26.9 0 1.6.3 3.1.8 4.6 4.3-12.6 25.2-22.2 50.3-22.2zm0-15.9c25.1 0 46 9.6 50.1 22.2.5-1.5.8-3 .8-4.6C123.5 12 100.7 0 72.5 0c-28.1 0-51 12-51 26.9 0 1.6.3 3.1.8 4.6C26.5 18.9 47.4 9.3 72.5 9.3zm20.9 64.3L83 60.2h-5v19.9h4.8v-13l10.3 13h5.1V60.2h-4.8v13.4zM15.1 76c-1 .7-2.2 1-3.5 1-1.8 0-3.4-.5-4.5-1.6-1.2-1.1-1.7-2.9-1.7-5.4 0-2.4.6-4.1 1.8-5.1 1.2-1.1 2.7-1.6 4.6-1.6 1.4 0 2.5.3 3.5.9.9.6 1.6 1.4 1.9 2.4l5.1-.9c-.6-1.6-1.4-2.8-2.6-3.7-1.9-1.4-4.5-2.1-7.6-2.1-3.6 0-6.4.9-8.6 2.7C1.1 64.5 0 67 0 70.4c0 3.1 1.1 5.6 3.3 7.4 2.2 1.8 4.9 2.7 8.3 2.7 2.7 0 5-.5 6.8-1.6 1.8-1.1 3-2.7 3.8-4.9l-5-1.2c-.5 1.5-1.2 2.5-2.1 3.2zm110.5-15.8v3.4h7.6v16.5h5.1V63.6h7.5v-3.4h-20.2zm-16.8 11.2h12.8V68h-12.8v-4.4h13.7v-3.4h-18.8v19.9H123v-3.4h-14.2v-5.3zM69.1 73c-.7-.6-1.6-1.2-2.7-1.7 2.2-.3 3.9-.9 5-1.8 1.1-1 1.7-2.2 1.7-3.7 0-1.2-.4-2.2-1.1-3.1-.7-.9-1.7-1.6-3-1.9-1.2-.4-3.2-.5-5.9-.5H52.3v19.9h5.1v-8.3h1c1.2 0 2 .1 2.6.2.5.1 1.1.4 1.5.8.5.4 1.4 1.4 2.7 2.9l3.7 4.3H75l-3.1-3.9c-1.1-1.5-2-2.6-2.8-3.2zm-7.9-4.3h-3.8v-5.1h4c2.1 0 3.3 0 3.7.1.8.1 1.5.4 1.9.8.5.4.7 1 .7 1.6 0 .6-.2 1.1-.5 1.5-.3.4-.8.7-1.4.8-.6.2-2.1.3-4.6.3zm-27.3-8.5L24 80.1h5.5l2.1-4.5h10.2l2.2 4.5h5.6L39.4 60.2h-5.5zm-.8 12 3.4-7.4 3.5 7.4h-6.9z",style:{fill:a?i?"#ea1d25":"white":"#ea1d25"}})})})}const Me=k(n.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function da({children:e,...t}){return n.jsx(ct,{component:st,className:"animate__animated animate__fadeIn",maxWidth:!1,...t,children:e})}da.propTypes={children:I.node.isRequired};Ne.propTypes={activeLast:I.bool,links:I.array.isRequired};function Ne({links:e=[],friendlyPages:t={},activeLast:a=!1,...o}){const i=e[e.length-1].name,f=e.map(l=>n.jsx(ne,{link:l},l.name)),u=e.map(l=>n.jsx("div",{children:l.name!==i?n.jsx(ne,{link:l}):n.jsx(re,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:i})},l.name));return n.jsx(kt,{separator:n.jsx(F,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),"aria-label":"breadcrumb",...o,children:a?f:u})}ne.propTypes={link:I.shape({href:I.string,icon:I.any,name:I.string})};function ne({link:e}){const{href:t,name:a,icon:o}=e;return n.jsxs(dt,{variant:"body2",component:Ee,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&n.jsx(F,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),a]},a)}pa.propTypes={onClick:I.func,name:I.string.isRequired,buttonName:I.string,to:I.string,loading:I.bool,buttons:I.object};function pa({name:e,buttonName:t,to:a="",onClick:o,loading:i=!1,buttons:f,links:u=[]}){return n.jsxs(F,{display:"flex",mb:2,spacing:3,flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"},children:[n.jsxs(F,{sx:{flexGrow:1,mb:{xs:t?3:0,sm:0}},children:[n.jsx(re,{variant:"h4",children:e}),n.jsx(Ne,{links:u})]}),n.jsx(F,{sx:{flex:"1 1 auto"}}),f,t&&n.jsx(n.Fragment,{children:a===""?n.jsx(rt,{loading:i,variant:"contained",onClick:o,startIcon:n.jsx(Me,{}),children:t}):n.jsx(it,{variant:"contained",component:Ee,to:a,startIcon:n.jsx(Me,{}),children:t})})]})}export{Me as A,va as C,ye as F,pa as H,Ce as L,ba as P,Pa as a,da as b,ha as c,ra as d,Yt as e,ma as f,za as g,aa as i,Ca as m,ya as n,na as r};
