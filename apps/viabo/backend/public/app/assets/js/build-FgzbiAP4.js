import{ap as W,ao as A,q as x,aq as D,as as i,cF as G,r as H,au as J,cj as K,j as F,av as M,ar as Q,aw as T}from"./index-bz0JfzWC.js";import{u as V}from"./build-JnDA2kJ8.js";function X(e){return W("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:t,checked:d,disabled:l,edge:a}=e,r={root:["root",d&&"checked",l&&"disabled",a&&`edge${Q(a)}`],input:["input"]};return T(r,X,t)},ee=x(D)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=x("input",{shouldForwardProp:G})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),oe=H.forwardRef(function(t,d){const{autoFocus:l,checked:a,checkedIcon:r,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:R=!1,icon:S,id:P,inputProps:I,inputRef:v,name:j,onBlur:f,onChange:g,onFocus:m,readOnly:q,required:z=!1,tabIndex:E,type:n,value:b}=t,N=J(t,Y),[k,U]=K({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),o=V(),L=s=>{m&&m(s),o&&o.onFocus&&o.onFocus(s)},_=s=>{f&&f(s),o&&o.onBlur&&o.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;U(C),g&&g(s,C)};let c=y;o&&typeof c>"u"&&(c=o.disabled);const $=n==="checkbox"||n==="radio",u=i({},t,{checked:k,disabled:c,disableFocusRipple:p,edge:R}),B=Z(u);return F.jsxs(ee,i({component:"span",className:M(B.root,w),centerRipple:!0,focusRipple:!p,disabled:c,tabIndex:null,role:void 0,onFocus:L,onBlur:_,ownerState:u,ref:d},N,{children:[F.jsx(se,i({autoFocus:l,checked:a,defaultChecked:h,className:B.input,disabled:c,id:$?P:void 0,name:j,onChange:O,readOnly:q,ref:v,required:z,ownerState:u,tabIndex:E,type:n},n==="checkbox"&&b===void 0?{}:{value:b},I)),k?r:S]}))}),ce=oe;export{ce as S};
