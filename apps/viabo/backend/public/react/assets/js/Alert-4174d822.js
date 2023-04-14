import{N as V,L as j,A as c,m as l,w as p,z as F,Q as R,az as S,aA as h,R as a,e as Z,V as Q,W as X,I as Y,o as q,X as D,Y as G}from"./index-9b2f5530.js";function J(o){return j("MuiAlert",o)}const K=V("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),L=K,oo=c(l("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),to=c(l("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),so=c(l("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),lo=c(l("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),eo=c(l("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ro=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],no=o=>{const{variant:s,color:e,severity:r,classes:t}=o,d={root:["root",`${s}${R(e||r)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return G(d,J,t)},ao=p(F,{name:"MuiAlert",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[s.root,s[e.variant],s[`${e.variant}${R(e.color||e.severity)}`]]}})(({theme:o,ownerState:s})=>{const e=o.palette.mode==="light"?S:h,r=o.palette.mode==="light"?h:S,t=s.color||s.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&s.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:e(o.palette[t].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${t}StandardBg`]:r(o.palette[t].light,.9),[`& .${L.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:e(o.palette[t].light,.6),border:`1px solid ${(o.vars||o).palette[t].light}`,[`& .${L.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${t}FilledColor`],backgroundColor:o.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main,color:o.palette.getContrastText(o.palette[t].main)}))}),io=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),co=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),P=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),B={success:l(oo,{fontSize:"inherit"}),warning:l(to,{fontSize:"inherit"}),error:l(so,{fontSize:"inherit"}),info:l(lo,{fontSize:"inherit"})},po=Z.forwardRef(function(s,e){var r,t,d,A,C,f;const u=Q({props:s,name:"MuiAlert"}),{action:g,children:b,className:k,closeText:I="Close",color:_,components:M={},componentsProps:x={},icon:$,iconMapping:N=B,onClose:m,role:O="alert",severity:v="success",slotProps:z={},slots:y={},variant:W="standard"}=u,w=X(u,ro),n=a({},u,{color:_,severity:v,variant:W}),i=no(n),E=(r=(t=y.closeButton)!=null?t:M.CloseButton)!=null?r:Y,H=(d=(A=y.closeIcon)!=null?A:M.CloseIcon)!=null?d:eo,T=(C=z.closeButton)!=null?C:x.closeButton,U=(f=z.closeIcon)!=null?f:x.closeIcon;return q(ao,a({role:O,elevation:0,ownerState:n,className:D(i.root,k),ref:e},w,{children:[$!==!1?l(io,{ownerState:n,className:i.icon,children:$||N[v]||B[v]}):null,l(co,{ownerState:n,className:i.message,children:b}),g!=null?l(P,{ownerState:n,className:i.action,children:g}):null,g==null&&m?l(P,{ownerState:n,className:i.action,children:l(E,a({size:"small","aria-label":I,title:I,color:"inherit",onClick:m},T,{children:l(H,a({fontSize:"small"},U))}))}):null]}))}),go=po;export{go as A};
