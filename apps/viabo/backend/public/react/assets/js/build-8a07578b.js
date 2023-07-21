import{r as C,d4 as yt,aO as et,aT as Ee,e2 as St,ao as c,am as bt,an as mt,W as j,au as Fe,ap as xt,aq as It,j as x,as as ge,at as Ot,I as Ct,dC as $t,h as Pt,d as tt,e3 as At}from"./build-25e7e2eb.js";import{a as Lt}from"./build-0c7fe524.js";import{e as ot,i as se,p as ct,q as fe,A as kt,T as Rt}from"./build-3f6bbffc.js";import{C as Tt}from"./build-b0cf8558.js";const wt=o=>{const n=C.useRef({});return C.useEffect(()=>{n.current=o}),n.current},Dt=wt;function dt(o){return typeof o.normalize<"u"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function Nt(o={}){const{ignoreAccents:n=!0,ignoreCase:i=!0,limit:b,matchFrom:L="any",stringify:y,trim:I=!1}=o;return(h,{inputValue:V,getOptionLabel:d})=>{let O=I?V.trim():V;i&&(O=O.toLowerCase()),n&&(O=dt(O));const B=O?h.filter(ae=>{let W=(y||d)(ae);return i&&(W=W.toLowerCase()),n&&(W=dt(W)),L==="start"?W.indexOf(O)===0:W.indexOf(O)>-1}):h;return typeof b=="number"?B.slice(0,b):B}}function nt(o,n){for(let i=0;i<o.length;i+=1)if(n(o[i]))return i;return-1}const Et=Nt(),ft=5,Ft=o=>{var n;return o.current!==null&&((n=o.current.parentElement)==null?void 0:n.contains(document.activeElement))};function Mt(o){const{unstable_isActiveElementInListbox:n=Ft,unstable_classNamePrefix:i="Mui",autoComplete:b=!1,autoHighlight:L=!1,autoSelect:y=!1,blurOnSelect:I=!1,clearOnBlur:h=!o.freeSolo,clearOnEscape:V=!1,componentName:d="useAutocomplete",defaultValue:O=o.multiple?[]:null,disableClearable:B=!1,disableCloseOnSelect:ae=!1,disabled:W,disabledItemsFocusable:Me=!1,disableListWrap:He=!1,filterOptions:rt=Et,filterSelectedOptions:he=!1,freeSolo:Y=!1,getOptionDisabled:q,getOptionLabel:ze=t=>{var e;return(e=t.label)!=null?e:t},groupBy:ie,handleHomeEndKeys:je=!o.freeSolo,id:le,includeInputInList:Ve=!1,inputValue:at,isOptionEqualToValue:Z=(t,e)=>t===e,multiple:f=!1,onChange:be,onClose:me,onHighlightChange:Se,onInputChange:K,onOpen:xe,open:We,openOnFocus:lt=!1,options:st,readOnly:J=!1,selectOnFocus:Be=!o.freeSolo,value:Ge}=o,T=yt(le);let k=ze;k=t=>{const e=ze(t);return typeof e!="string"?String(e):e};const Ie=C.useRef(!1),Oe=C.useRef(!0),S=C.useRef(null),E=C.useRef(null),[pe,_e]=C.useState(null),[N,ue]=C.useState(-1),Ae=L?0:-1,w=C.useRef(Ae),[l,Le]=et({controlled:Ge,default:O,name:d}),[g,ee]=et({controlled:at,default:"",name:d,state:"inputValue"}),[Q,ke]=C.useState(!1),ce=C.useCallback((t,e)=>{if(!(f?l.length<e.length:e!==null)&&!h)return;let a;if(f)a="";else if(e==null)a="";else{const u=k(e);a=typeof u=="string"?u:""}g!==a&&(ee(a),K&&K(t,a,"reset"))},[k,g,f,K,ee,h,l]),[te,Re]=et({controlled:We,default:!1,name:d,state:"open"}),[Ue,Te]=C.useState(!0),we=!f&&l!=null&&g===k(l),D=te&&!J,m=D?rt(st.filter(t=>!(he&&(f?l:[l]).some(e=>e!==null&&Z(t,e)))),{inputValue:we&&Ue?"":g,getOptionLabel:k}):[],F=Dt({filteredOptions:m,value:l});C.useEffect(()=>{const t=l!==F.value;Q&&!t||Y&&!t||ce(null,l)},[l,ce,Q,F.value,Y]);const Ce=te&&m.length>0&&!J,de=Ee(t=>{t===-1?S.current.focus():pe.querySelector(`[data-tag-index="${t}"]`).focus()});C.useEffect(()=>{f&&N>l.length-1&&(ue(-1),de(-1))},[l,f,N,de]);function qe(t,e){if(!E.current||t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===m.length||e==="previous"&&r===-1)return-1;const a=E.current.querySelector(`[data-option-index="${r}"]`),u=Me?!1:!a||a.disabled||a.getAttribute("aria-disabled")==="true";if(a&&!a.hasAttribute("tabindex")||u)r+=e==="next"?1:-1;else return r}}const M=Ee(({event:t,index:e,reason:r="auto"})=>{if(w.current=e,e===-1?S.current.removeAttribute("aria-activedescendant"):S.current.setAttribute("aria-activedescendant",`${T}-option-${e}`),Se&&Se(t,e===-1?null:m[e],r),!E.current)return;const a=E.current.querySelector(`[role="option"].${i}-focused`);a&&(a.classList.remove(`${i}-focused`),a.classList.remove(`${i}-focusVisible`));const u=E.current.parentElement.querySelector('[role="listbox"]');if(!u)return;if(e===-1){u.scrollTop=0;return}const A=E.current.querySelector(`[data-option-index="${e}"]`);if(A&&(A.classList.add(`${i}-focused`),r==="keyboard"&&A.classList.add(`${i}-focusVisible`),u.scrollHeight>u.clientHeight&&r!=="mouse")){const P=A,U=u.clientHeight+u.scrollTop,ut=P.offsetTop+P.offsetHeight;ut>U?u.scrollTop=ut-u.clientHeight:P.offsetTop-P.offsetHeight*(ie?1.3:0)<u.scrollTop&&(u.scrollTop=P.offsetTop-P.offsetHeight*(ie?1.3:0))}}),H=Ee(({event:t,diff:e,direction:r="next",reason:a="auto"})=>{if(!D)return;const A=qe((()=>{const P=m.length-1;if(e==="reset")return Ae;if(e==="start")return 0;if(e==="end")return P;const U=w.current+e;return U<0?U===-1&&Ve?-1:He&&w.current!==-1||Math.abs(e)>1?0:P:U>P?U===P+1&&Ve?-1:He||Math.abs(e)>1?P:0:U})(),r);if(M({index:A,reason:a,event:t}),b&&e!=="reset")if(A===-1)S.current.value=g;else{const P=k(m[A]);S.current.value=P,P.toLowerCase().indexOf(g.toLowerCase())===0&&g.length>0&&S.current.setSelectionRange(g.length,P.length)}}),Ke=()=>{const t=(e,r)=>{const a=e?k(e):"",u=r?k(r):"";return a===u};if(w.current!==-1&&F.filteredOptions&&F.filteredOptions.length!==m.length&&(f?l.length===F.value.length&&F.value.every((e,r)=>k(l[r])===k(e)):t(F.value,l))){const e=F.filteredOptions[w.current];if(e&&m.some(a=>k(a)===k(e)))return!0}return!1},oe=C.useCallback(()=>{if(!D||Ke())return;const t=f?l[0]:l;if(m.length===0||t==null){H({diff:"reset"});return}if(E.current){if(t!=null){const e=m[w.current];if(f&&e&&nt(l,a=>Z(e,a))!==-1)return;const r=nt(m,a=>Z(a,t));r===-1?H({diff:"reset"}):M({index:r});return}if(w.current>=m.length-1){M({index:m.length-1});return}M({index:w.current})}},[m.length,f?!1:l,he,H,M,D,g,f]),Je=Ee(t=>{St(E,t),t&&oe()});C.useEffect(()=>{oe()},[oe]);const X=t=>{te||(Re(!0),Te(!0),xe&&xe(t))},G=(t,e)=>{te&&(Re(!1),me&&me(t,e))},_=(t,e,r,a)=>{if(f){if(l.length===e.length&&l.every((u,A)=>u===e[A]))return}else if(l===e)return;be&&be(t,e,r,a),Le(e)},ne=C.useRef(!1),$=(t,e,r="selectOption",a="options")=>{let u=r,A=e;if(f){A=Array.isArray(l)?l.slice():[];const P=nt(A,U=>Z(e,U));P===-1?A.push(e):a!=="freeSolo"&&(A.splice(P,1),u="removeOption")}ce(t,A),_(t,A,u,{option:e}),!ae&&(!t||!t.ctrlKey&&!t.metaKey)&&G(t,u),(I===!0||I==="touch"&&ne.current||I==="mouse"&&!ne.current)&&S.current.blur()};function v(t,e){if(t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===l.length||e==="previous"&&r===-1)return-1;const a=pe.querySelector(`[data-tag-index="${r}"]`);if(!a||!a.hasAttribute("tabindex")||a.disabled||a.getAttribute("aria-disabled")==="true")r+=e==="next"?1:-1;else return r}}const z=(t,e)=>{if(!f)return;g===""&&G(t,"toggleInput");let r=N;N===-1?g===""&&e==="previous"&&(r=l.length-1):(r+=e==="next"?1:-1,r<0&&(r=0),r===l.length&&(r=-1)),r=v(r,e),ue(r),de(r)},Qe=t=>{Ie.current=!0,ee(""),K&&K(t,"","clear"),_(t,f?[]:null,"clear")},Xe=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(N!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(ue(-1),de(-1)),e.which!==229))switch(e.key){case"Home":D&&je&&(e.preventDefault(),H({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":D&&je&&(e.preventDefault(),H({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),H({diff:-ft,direction:"previous",reason:"keyboard",event:e}),X(e);break;case"PageDown":e.preventDefault(),H({diff:ft,direction:"next",reason:"keyboard",event:e}),X(e);break;case"ArrowDown":e.preventDefault(),H({diff:1,direction:"next",reason:"keyboard",event:e}),X(e);break;case"ArrowUp":e.preventDefault(),H({diff:-1,direction:"previous",reason:"keyboard",event:e}),X(e);break;case"ArrowLeft":z(e,"previous");break;case"ArrowRight":z(e,"next");break;case"Enter":if(w.current!==-1&&D){const r=m[w.current],a=q?q(r):!1;if(e.preventDefault(),a)return;$(e,r,"selectOption"),b&&S.current.setSelectionRange(S.current.value.length,S.current.value.length)}else Y&&g!==""&&we===!1&&(f&&e.preventDefault(),$(e,g,"createOption","freeSolo"));break;case"Escape":D?(e.preventDefault(),e.stopPropagation(),G(e,"escape")):V&&(g!==""||f&&l.length>0)&&(e.preventDefault(),e.stopPropagation(),Qe(e));break;case"Backspace":if(f&&!J&&g===""&&l.length>0){const r=N===-1?l.length-1:N,a=l.slice();a.splice(r,1),_(e,a,"removeOption",{option:l[r]})}break;case"Delete":if(f&&!J&&g===""&&l.length>0&&N!==-1){const r=N,a=l.slice();a.splice(r,1),_(e,a,"removeOption",{option:l[r]})}break}},it=t=>{ke(!0),lt&&!Ie.current&&X(t)},De=t=>{if(n(E)){S.current.focus();return}ke(!1),Oe.current=!0,Ie.current=!1,y&&w.current!==-1&&D?$(t,m[w.current],"blur"):y&&Y&&g!==""?$(t,g,"blur","freeSolo"):h&&ce(t,l),G(t,"blur")},Ne=t=>{const e=t.target.value;g!==e&&(ee(e),Te(!1),K&&K(t,e,"input")),e===""?!B&&!f&&_(t,null,"clear"):X(t)},$e=t=>{M({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},Pe=t=>{M({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),ne.current=!0},ve=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));$(t,m[e],"selectOption"),ne.current=!1},ye=t=>e=>{const r=l.slice();r.splice(t,1),_(e,r,"removeOption",{option:l[t]})},p=t=>{te?G(t,"toggleInput"):X(t)},R=t=>{t.target.getAttribute("id")!==T&&t.preventDefault()},re=()=>{S.current.focus(),Be&&Oe.current&&S.current.selectionEnd-S.current.selectionStart===0&&S.current.select(),Oe.current=!1},Ye=t=>{(g===""||!te)&&p(t)};let Ze=Y&&g.length>0;Ze=Ze||(f?l.length>0:l!==null);let pt=m;return ie&&(pt=m.reduce((t,e,r)=>{const a=ie(e);return t.length>0&&t[t.length-1].group===a?t[t.length-1].options.push(e):t.push({key:r,index:r,group:a,options:[e]}),t},[])),W&&Q&&De(),{getRootProps:(t={})=>c({"aria-owns":Ce?`${T}-listbox`:null},t,{onKeyDown:Xe(t),onMouseDown:R,onClick:re}),getInputLabelProps:()=>({id:`${T}-label`,htmlFor:T}),getInputProps:()=>({id:T,value:g,onBlur:De,onFocus:it,onChange:Ne,onMouseDown:Ye,"aria-activedescendant":D?"":null,"aria-autocomplete":b?"both":"list","aria-controls":Ce?`${T}-listbox`:void 0,"aria-expanded":Ce,autoComplete:"off",ref:S,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:W}),getClearProps:()=>({tabIndex:-1,onClick:Qe}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:p}),getTagProps:({index:t})=>c({key:t,"data-tag-index":t,tabIndex:-1},!J&&{onDelete:ye(t)}),getListboxProps:()=>({role:"listbox",id:`${T}-listbox`,"aria-labelledby":`${T}-label`,ref:Je,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const r=(f?l:[l]).some(u=>u!=null&&Z(e,u)),a=q?q(e):!1;return{key:k(e),tabIndex:-1,role:"option",id:`${T}-option-${t}`,onMouseOver:$e,onClick:ve,onTouchStart:Pe,"data-option-index":t,"aria-disabled":a,"aria-selected":r}},id:T,inputValue:g,value:l,dirty:Ze,expanded:D&&pe,popupOpen:D,focused:Q||N!==-1,anchorEl:pe,setAnchorEl:_e,focusedTag:N,groupedOptions:pt}}function Ht(o){return bt("MuiListSubheader",o)}mt("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const zt=["className","color","component","disableGutters","disableSticky","inset"],jt=o=>{const{classes:n,color:i,disableGutters:b,inset:L,disableSticky:y}=o,I={root:["root",i!=="default"&&`color${Fe(i)}`,!b&&"gutters",L&&"inset",!y&&"sticky"]};return Ot(I,Ht,n)},Vt=j("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:i}=o;return[n.root,i.color!=="default"&&n[`color${Fe(i.color)}`],!i.disableGutters&&n.gutters,i.inset&&n.inset,!i.disableSticky&&n.sticky]}})(({theme:o,ownerState:n})=>c({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(o.vars||o).palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},n.color==="primary"&&{color:(o.vars||o).palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(o.vars||o).palette.background.paper})),vt=C.forwardRef(function(n,i){const b=xt({props:n,name:"MuiListSubheader"}),{className:L,color:y="default",component:I="li",disableGutters:h=!1,disableSticky:V=!1,inset:d=!1}=b,O=It(b,zt),B=c({},b,{color:y,component:I,disableGutters:h,disableSticky:V,inset:d}),ae=jt(B);return x.jsx(Vt,c({as:I,className:ge(ae.root,L),ref:i,ownerState:B},O))});vt.muiSkipListHighlight=!0;const Wt=vt;function Bt(o){return bt("MuiAutocomplete",o)}const Gt=mt("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),s=Gt;var gt,ht;const _t=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],Ut=o=>{const{classes:n,disablePortal:i,expanded:b,focused:L,fullWidth:y,hasClearIcon:I,hasPopupIcon:h,inputFocused:V,popupOpen:d,size:O}=o,B={root:["root",b&&"expanded",L&&"focused",y&&"fullWidth",I&&"hasClearIcon",h&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",V&&"inputFocused"],tag:["tag",`tagSize${Fe(O)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",d&&"popupIndicatorOpen"],popper:["popper",i&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return Ot(B,Bt,n)},qt=j("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:i}=o,{fullWidth:b,hasClearIcon:L,hasPopupIcon:y,inputFocused:I,size:h}=i;return[{[`& .${s.tag}`]:n.tag},{[`& .${s.tag}`]:n[`tagSize${Fe(h)}`]},{[`& .${s.inputRoot}`]:n.inputRoot},{[`& .${s.input}`]:n.input},{[`& .${s.input}`]:I&&n.inputFocused},n.root,b&&n.fullWidth,y&&n.hasPopupIcon,L&&n.hasClearIcon]}})(({ownerState:o})=>c({[`&.${s.focused} .${s.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${s.clearIndicator}`]:{visibility:"visible"}}},o.fullWidth&&{width:"100%"},{[`& .${s.tag}`]:c({margin:3,maxWidth:"calc(100% - 6px)"},o.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${s.inputRoot}`]:{flexWrap:"wrap",[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4},[`& .${s.input}`]:{width:0,minWidth:30}},[`& .${ot.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${ot.root}.${se.sizeSmall}`]:{[`& .${ot.input}`]:{padding:"2px 4px 3px 0"}},[`& .${ct.root}`]:{padding:9,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${s.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${ct.root}.${se.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${s.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${fe.root}`]:{paddingTop:19,paddingLeft:8,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${fe.input}`]:{padding:"7px 4px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${fe.root}.${se.sizeSmall}`]:{paddingBottom:1,[`& .${fe.input}`]:{padding:"2.5px 4px"}},[`& .${se.hiddenLabel}`]:{paddingTop:8},[`& .${fe.root}.${se.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${s.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${fe.root}.${se.hiddenLabel}.${se.sizeSmall}`]:{[`& .${s.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${s.input}`]:c({flexGrow:1,textOverflow:"ellipsis",opacity:0},o.inputFocused&&{opacity:1})})),Kt=j("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,n)=>n.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),Jt=j(Ct,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Qt=j(Ct,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},n)=>c({},n.popupIndicator,o.popupOpen&&n.popupIndicatorOpen)})(({ownerState:o})=>c({padding:2,marginRight:-2},o.popupOpen&&{transform:"rotate(180deg)"})),Xt=j($t,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,n)=>{const{ownerState:i}=o;return[{[`& .${s.option}`]:n.option},n.popper,i.disablePortal&&n.popperDisablePortal]}})(({theme:o,ownerState:n})=>c({zIndex:(o.vars||o).zIndex.modal},n.disablePortal&&{position:"absolute"})),Yt=j(Pt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,n)=>n.paper})(({theme:o})=>c({},o.typography.body1,{overflow:"auto"})),Zt=j("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,n)=>n.loading})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),eo=j("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,n)=>n.noOptions})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),to=j("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,n)=>n.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${s.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${s.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${s.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:tt(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${s.focused}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:tt(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${s.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:tt(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),oo=j(Wt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,n)=>n.groupLabel})(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8})),no=j("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,n)=>n.groupUl})({padding:0,[`& .${s.option}`]:{paddingLeft:24}}),ro=C.forwardRef(function(n,i){var b,L,y,I;const h=xt({props:n,name:"MuiAutocomplete"}),{autoComplete:V=!1,autoHighlight:d=!1,autoSelect:O=!1,blurOnSelect:B=!1,ChipProps:ae,className:W,clearIcon:Me=gt||(gt=x.jsx(At,{fontSize:"small"})),clearOnBlur:He=!h.freeSolo,clearOnEscape:rt=!1,clearText:he="Clear",closeText:Y="Close",componentsProps:q={},defaultValue:ze=h.multiple?[]:null,disableClearable:ie=!1,disableCloseOnSelect:je=!1,disabled:le=!1,disabledItemsFocusable:Ve=!1,disableListWrap:at=!1,disablePortal:Z=!1,filterSelectedOptions:f=!1,forcePopupIcon:be="auto",freeSolo:me=!1,fullWidth:Se=!1,getLimitTagsText:K=p=>`+${p}`,getOptionLabel:xe=p=>{var R;return(R=p.label)!=null?R:p},groupBy:We,handleHomeEndKeys:lt=!h.freeSolo,includeInputInList:st=!1,limitTags:J=-1,ListboxComponent:Be="ul",ListboxProps:Ge,loading:T=!1,loadingText:k="Loading…",multiple:Ie=!1,noOptionsText:Oe="No options",openOnFocus:S=!1,openText:E="Open",PaperComponent:pe=Pt,PopperComponent:_e=$t,popupIcon:N=ht||(ht=x.jsx(kt,{})),readOnly:ue=!1,renderGroup:Ae,renderInput:w,renderOption:l,renderTags:Le,selectOnFocus:g=!h.freeSolo,size:ee="medium",slotProps:Q={}}=h,ke=It(h,_t),{getRootProps:ce,getInputProps:te,getInputLabelProps:Re,getPopupIndicatorProps:Ue,getClearProps:Te,getTagProps:we,getListboxProps:D,getOptionProps:m,value:F,dirty:Ce,expanded:de,id:qe,popupOpen:M,focused:H,focusedTag:Ke,anchorEl:oe,setAnchorEl:Je,inputValue:X,groupedOptions:G}=Mt(c({},h,{componentName:"Autocomplete"})),_=!ie&&!le&&Ce&&!ue,ne=(!me||be===!0)&&be!==!1,$=c({},h,{disablePortal:Z,expanded:de,focused:H,fullWidth:Se,hasClearIcon:_,hasPopupIcon:ne,inputFocused:Ke===-1,popupOpen:M,size:ee}),v=Ut($);let z;if(Ie&&F.length>0){const p=R=>c({className:v.tag,disabled:le},we(R));Le?z=Le(F,p,$):z=F.map((R,re)=>x.jsx(Tt,c({label:xe(R),size:ee},p({index:re}),ae)))}if(J>-1&&Array.isArray(z)){const p=z.length-J;!H&&p>0&&(z=z.splice(0,J),z.push(x.jsx("span",{className:v.tag,children:K(p)},z.length)))}const Xe=Ae||(p=>x.jsxs("li",{children:[x.jsx(oo,{className:v.groupLabel,ownerState:$,component:"div",children:p.group}),x.jsx(no,{className:v.groupUl,ownerState:$,children:p.children})]},p.key)),De=l||((p,R)=>x.jsx("li",c({},p,{children:xe(R)}))),Ne=(p,R)=>{const re=m({option:p,index:R});return De(c({},re,{className:v.option}),p,{selected:re["aria-selected"],index:R,inputValue:X})},$e=(b=Q.clearIndicator)!=null?b:q.clearIndicator,Pe=(L=Q.paper)!=null?L:q.paper,ve=(y=Q.popper)!=null?y:q.popper,ye=(I=Q.popupIndicator)!=null?I:q.popupIndicator;return x.jsxs(C.Fragment,{children:[x.jsx(qt,c({ref:i,className:ge(v.root,W),ownerState:$},ce(ke),{children:w({id:qe,disabled:le,fullWidth:!0,size:ee==="small"?"small":void 0,InputLabelProps:Re(),InputProps:c({ref:Je,className:v.inputRoot,startAdornment:z},(_||ne)&&{endAdornment:x.jsxs(Kt,{className:v.endAdornment,ownerState:$,children:[_?x.jsx(Jt,c({},Te(),{"aria-label":he,title:he,ownerState:$},$e,{className:ge(v.clearIndicator,$e==null?void 0:$e.className),children:Me})):null,ne?x.jsx(Qt,c({},Ue(),{disabled:le,"aria-label":M?Y:E,title:M?Y:E,ownerState:$},ye,{className:ge(v.popupIndicator,ye==null?void 0:ye.className),children:N})):null]})}),inputProps:c({className:v.input,disabled:le,readOnly:ue},te())})})),oe?x.jsx(Xt,c({as:_e,disablePortal:Z,style:{width:oe?oe.clientWidth:null},ownerState:$,role:"presentation",anchorEl:oe,open:M},ve,{className:ge(v.popper,ve==null?void 0:ve.className),children:x.jsxs(Yt,c({ownerState:$,as:pe},Pe,{className:ge(v.paper,Pe==null?void 0:Pe.className),children:[T&&G.length===0?x.jsx(Zt,{className:v.loading,ownerState:$,children:k}):null,G.length===0&&!me&&!T?x.jsx(eo,{className:v.noOptions,ownerState:$,role:"presentation",onMouseDown:p=>{p.preventDefault()},children:Oe}):null,G.length>0?x.jsx(to,c({as:Be,className:v.listbox,ownerState:$},D(),Ge,{children:G.map((p,R)=>We?Xe({key:p.key,group:p.group,children:p.options.map((re,Ye)=>Ne(re,p.index+Ye))}):Ne(p,R))})):null]}))})):null]})}),ao=ro;function uo({options:o,label:n,name:i,textFieldParams:b={},...L}){const[y,I,h]=Lt(i),V=(d,O)=>{h.setValue(O)};return x.jsx(ao,{options:o,value:y.value,onChange:V,getOptionLabel:d=>(d==null?void 0:d.label)||"",getOptionDisabled:d=>d==null?void 0:d.isDisabled,isOptionEqualToValue:(d,O)=>(d==null?void 0:d.value)===(O==null?void 0:O.value),renderInput:d=>x.jsx(Rt,{...d,label:n,error:!!I.error,helperText:I.error,...b}),...L})}export{uo as R};
