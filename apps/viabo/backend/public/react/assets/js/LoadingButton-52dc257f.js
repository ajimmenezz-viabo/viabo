import{N as b,L as x,w as v,v as C,R as d,Q as c,e as m,V as y,W as E,aw as R,m as f,o as W,Y as M}from"./index-9b2f5530.js";import{C as z}from"./integracion-tecnologica-cec87d95.js";function U(n){return x("MuiLoadingButton",n)}const j=b("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),i=j,_=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],F=n=>{const{loading:o,loadingPosition:t,classes:a}=n,r={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${c(t)}`],endIcon:[o&&`endIconLoading${c(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${c(t)}`]},l=M(r,U,a);return d({},a,l)},N=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",k=v(C,{shouldForwardProp:n=>N(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),Q=v("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${c(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),T=m.forwardRef(function(o,t){const a=y({props:o,name:"MuiLoadingButton"}),{children:r,disabled:l=!1,id:h,loading:e=!1,loadingIndicator:g,loadingPosition:B="center",variant:u="text"}=a,$=E(a,_),I=R(h),L=g??f(z,{"aria-labelledby":I,color:"inherit",size:16}),s=d({},a,{disabled:l,loading:e,loadingIndicator:L,loadingPosition:B,variant:u}),P=F(s),p=e?f(Q,{className:P.loadingIndicator,ownerState:s,children:L}):null;return W(k,d({disabled:l||e,id:I,ref:t},$,{variant:u,classes:P,ownerState:s,children:[s.loadingPosition==="end"?r:p,s.loadingPosition==="end"?p:r]}))}),q=T;export{q as L};