import{o as b,n as x,W as v,_ as d,t as c,e as m,q as C,g as E,j as f,w as y,l as R}from"./index-21571737.js";import{B as W,C as M}from"./CommerceRegister-43a2c944.js";import{u as j}from"./useId-a16d032f.js";function z(n){return x("MuiLoadingButton",n)}const U=b("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),i=U,_=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],F=n=>{const{loading:o,loadingPosition:t,classes:a}=n,r={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${c(t)}`],endIcon:[o&&`endIconLoading${c(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${c(t)}`]},l=R(r,z,a);return d({},a,l)},k=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",q=v(W,{shouldForwardProp:n=>k(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),N=v("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${c(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),T=m.forwardRef(function(o,t){const a=C({props:o,name:"MuiLoadingButton"}),{children:r,disabled:l=!1,id:h,loading:g=!1,loadingIndicator:e,loadingPosition:B="center",variant:u="text"}=a,$=E(a,_),I=j(h),L=e??f(M,{"aria-labelledby":I,color:"inherit",size:16}),s=d({},a,{disabled:l,loading:g,loadingIndicator:L,loadingPosition:B,variant:u}),P=F(s),p=g?f(N,{className:P.loadingIndicator,ownerState:s,children:L}):null;return y(q,d({disabled:l||g,id:I,ref:t},$,{variant:u,classes:P,ownerState:s,children:[s.loadingPosition==="end"?r:p,s.loadingPosition==="end"?p:r]}))}),H=T;export{H as L};
