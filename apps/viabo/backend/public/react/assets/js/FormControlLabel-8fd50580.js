import{J as U,K as O,f as w,ae as ee,N as l,r as y,R as _,af as oe,d as W,j as u,U as z,ab as R,X as E,z as T,ag as te,h as ae,O as A,T as D}from"./index-eb88d5db.js";import{u as J,f as ne}from"./TextField-ebaea117.js";function se(e){return U("PrivateSwitchBase",e)}O("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const le=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ce=e=>{const{classes:o,checked:a,disabled:n,edge:t}=e,s={root:["root",a&&"checked",n&&"disabled",t&&`edge${R(t)}`],input:["input"]};return E(s,se,o)},re=w(ee)(({ownerState:e})=>l({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ie=w("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=y.forwardRef(function(o,a){const{autoFocus:n,checked:t,checkedIcon:s,className:P,defaultChecked:r,disabled:v,disableFocusRipple:i=!1,edge:x=!1,icon:I,id:f,inputProps:B,inputRef:C,name:c,onBlur:m,onChange:g,onFocus:b,readOnly:S,required:F=!1,tabIndex:k,type:d,value:H}=o,K=_(o,le),[j,X]=oe({controlled:t,default:!!r,name:"SwitchBase",state:"checked"}),h=J(),G=p=>{b&&b(p),h&&h.onFocus&&h.onFocus(p)},Q=p=>{m&&m(p),h&&h.onBlur&&h.onBlur(p)},Y=p=>{if(p.nativeEvent.defaultPrevented)return;const q=p.target.checked;X(q),g&&g(p,q)};let $=v;h&&typeof $>"u"&&($=h.disabled);const Z=d==="checkbox"||d==="radio",N=l({},o,{checked:j,disabled:$,disableFocusRipple:i,edge:x}),V=ce(N);return W(re,l({component:"span",className:z(V.root,P),centerRipple:!0,focusRipple:!i,disabled:$,tabIndex:null,role:void 0,onFocus:G,onBlur:Q,ownerState:N,ref:a},K,{children:[u(ie,l({autoFocus:n,checked:t,defaultChecked:r,className:V.input,disabled:$,id:Z?f:void 0,name:c,onChange:Y,readOnly:S,ref:C,required:F,ownerState:N,tabIndex:k,type:d},d==="checkbox"&&H===void 0?{}:{value:H},B)),j?s:I]}))}),pe=de,ue=T(u("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),me=T(u("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),be=T(u("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function he(e){return U("MuiCheckbox",e)}const fe=O("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),M=fe,Ce=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ge=e=>{const{classes:o,indeterminate:a,color:n}=e,t={root:["root",a&&"indeterminate",`color${R(n)}`]},s=E(t,he,o);return l({},o,s)},ke=w(pe,{shouldForwardProp:e=>te(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.indeterminate&&o.indeterminate,a.color!=="default"&&o[`color${R(a.color)}`]]}})(({theme:e,ownerState:o})=>l({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ae(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${M.checked}, &.${M.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${M.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),xe=u(me,{}),ye=u(ue,{}),Pe=u(be,{}),ve=y.forwardRef(function(o,a){var n,t;const s=A({props:o,name:"MuiCheckbox"}),{checkedIcon:P=xe,color:r="primary",icon:v=ye,indeterminate:i=!1,indeterminateIcon:x=Pe,inputProps:I,size:f="medium",className:B}=s,C=_(s,Ce),c=i?x:v,m=i?x:P,g=l({},s,{color:r,indeterminate:i,size:f}),b=ge(g);return u(ke,l({type:"checkbox",inputProps:l({"data-indeterminate":i},I),icon:y.cloneElement(c,{fontSize:(n=c.props.fontSize)!=null?n:f}),checkedIcon:y.cloneElement(m,{fontSize:(t=m.props.fontSize)!=null?t:f}),ownerState:g,ref:a,className:z(b.root,B)},C,{classes:b}))}),we=ve;function Ie(e){return U("MuiFormControlLabel",e)}const Be=O("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),L=Be,Fe=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],$e=e=>{const{classes:o,disabled:a,labelPlacement:n,error:t}=e,s={root:["root",a&&"disabled",`labelPlacement${R(n)}`,t&&"error"],label:["label",a&&"disabled"]};return E(s,Ie,o)},Re=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[{[`& .${L.label}`]:o.label},o.root,o[`labelPlacement${R(a.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>l({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${L.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${L.label}`]:{[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Se=y.forwardRef(function(o,a){var n;const t=A({props:o,name:"MuiFormControlLabel"}),{className:s,componentsProps:P={},control:r,disabled:v,disableTypography:i,label:x,labelPlacement:I="end",slotProps:f={}}=t,B=_(t,Fe),C=J();let c=v;typeof c>"u"&&typeof r.props.disabled<"u"&&(c=r.props.disabled),typeof c>"u"&&C&&(c=C.disabled);const m={disabled:c};["checked","name","onChange","value","inputRef"].forEach(d=>{typeof r.props[d]>"u"&&typeof t[d]<"u"&&(m[d]=t[d])});const g=ne({props:t,muiFormControl:C,states:["error"]}),b=l({},t,{disabled:c,labelPlacement:I,error:g.error}),S=$e(b),F=(n=f.typography)!=null?n:P.typography;let k=x;return k!=null&&k.type!==D&&!i&&(k=u(D,l({component:"span"},F,{className:z(S.label,F==null?void 0:F.className),children:k}))),W(Re,l({className:z(S.root,s),ownerState:b,ref:a},B,{children:[y.cloneElement(r,m),k]}))}),Ne=Se;export{we as C,Ne as F};
