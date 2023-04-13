import{q as $,K as S,v as Q,e as M,$ as Z,U as ee,m as c,V as te,W as re,k as ae,l as ie,ae as O,B as N,j as ne,o as L,a6 as W,T as E}from"./index-a5b9a34e.js";import{T as oe}from"./TextField-749b4905.js";import{v as se,p as le,a as ce,P as j}from"./CommerceRegister-0ebd4dc3.js";import{u as de,a as pe}from"./useSendValidationCode-18d4ff21.js";import{u as ue}from"./useMutation-46b372a0.js";import{g as ge}from"./dividerClasses-c7aed1b2.js";import{S as he,C as fe}from"./integracion-tecnologica-ba5f7d0c.js";import{L as me}from"./Link-66c337cc.js";import"./index-1aacdabe.js";const ve=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],xe=e=>{const{absolute:t,children:a,classes:s,flexItem:u,light:d,orientation:l,textAlign:i,variant:h}=e;return re({root:["root",t&&"absolute",h,d&&"light",l==="vertical"&&"vertical",u&&"flexItem",a&&"withChildren",a&&l==="vertical"&&"withChildrenVertical",i==="right"&&l!=="vertical"&&"textAlignRight",i==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},ge,s)},Ce=$("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,a.orientation==="vertical"&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&a.orientation==="vertical"&&t.withChildrenVertical,a.textAlign==="right"&&a.orientation!=="vertical"&&t.textAlignRight,a.textAlign==="left"&&a.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>S({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:Q(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>S({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>S({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>S({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),be=$("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,a.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>S({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),ye=M.forwardRef(function(t,a){const s=Z({props:t,name:"MuiDivider"}),{absolute:u=!1,children:d,className:l,component:i=d?"div":"hr",flexItem:h=!1,light:v=!1,orientation:I="horizontal",role:x=i!=="hr"?"separator":void 0,textAlign:C="center",variant:b="fullWidth"}=s,p=ee(s,ve),T=S({},s,{absolute:u,component:i,flexItem:h,light:v,orientation:I,role:x,textAlign:C,variant:b}),g=xe(T);return c(Ce,S({as:i,className:te(g.root,l),role:x,ref:a,ownerState:T},p,{children:d?c(be,{className:g.wrapper,ownerState:T,children:d}):null}))}),Se=ye;function Te(e){const t=typeof e=="number",a=Re(e);return(t||a&&e!=="")&&!isNaN(Number(e))}function Re(e){return typeof e=="string"||e instanceof String}const Ie=(e={})=>{const{enqueueSnackbar:t}=ae();return ue({mutationFn:se,onError:a=>{const s=ie(a,"No se puede validar el código");t(s,{variant:(a==null?void 0:a.status)===500?"error":"warning",autoHideDuration:5e3})},...e})},we=$(oe)`
  input {
    text-align: center;
  }
`,Ae={TextFieldStyled:we},Ee=e=>c(Ae.TextFieldStyled,{...e}),V={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace"};function De(e,t){return e<=0?[]:Array.from({length:e},t)}function Ne(e,t,a){return e.map((s,u)=>t===u?a:s)}function K(e){return e.join("")}function U(e,t){return[...e,t]}function Pe(e,t,a){return e.reduce((s,u,d)=>{const{characters:l,restArrayMerged:i}=s;if(d<a)return{restArrayMerged:i,characters:U(l,u)};const[h,...v]=i;return{restArrayMerged:v,characters:U(l,h||"")}},{restArrayMerged:t,characters:[]}).characters}function ke(e){return e.split("")}const z=O.forwardRef((e,t)=>{const{value:a,length:s,autoFocus:u,onChange:d,TextFieldsProps:l,onComplete:i,validateChar:h,className:v,...I}=e,{onPaste:x,onFocus:C,onKeyDown:b,className:p,...T}=l||{},g=De(s,(r,o)=>({character:a[o]||"",inputRef:O.createRef()})),R=r=>g.findIndex(({inputRef:o})=>o.current===r),D=()=>g.map(({character:r})=>r),P=(r,o)=>{const n=Ne(D(),r,o);return K(n)},w=r=>{var o,n;(n=(o=g[r])==null?void 0:o.inputRef.current)==null||n.focus()},y=r=>{var o,n;(n=(o=g[r])==null?void 0:o.inputRef.current)==null||n.select()},f=r=>{r+1!==s&&(g[r+1].character?y(r+1):w(r+1))},A=r=>{r>0&&y(r-1)},k=r=>{const o=r.target.value[0]||"",n=R(r.target);if(typeof h=="function"&&!h(o,n))return;const m=P(n,o);d==null||d(m),m.length===s&&(i==null||i(m)),o!==""?m.length<s?f(m.length-1):f(n):m[n]?y(n):A(n)},q=r=>{r.preventDefault(),r.target.select(),C==null||C(r)},H=r=>{const o=r.target,n=R(o);o.value===r.key?(r.preventDefault(),f(n)):!o.value&&V.backspace===r.key||V.left===r.key?(r.preventDefault(),y(n-1)):V.right===r.key&&(r.preventDefault(),y(n+1)),b==null||b(r)},X=r=>{r.preventDefault();const o=r.target,n=r.clipboardData.getData("text/plain"),m=R(o),Y=D(),_=Pe(Y,ke(n),m),B=_.findIndex((G,J)=>J>m&&G===""),F=K(_);if(d==null||d(F),F.length===s){i==null||i(F),w(s-1);return}B!==-1&&w(B),x==null||x(r)};return c(N,{display:"flex",gap:"20px",alignItems:"center",ref:t,className:`MuiOtpInput-Box ${v||""}`,...I,children:g.map(({character:r,inputRef:o},n)=>c(Ee,{autoFocus:u?n===0:!1,autoComplete:"one-time-code",value:r,inputRef:o,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${n+1} ${p||""}`,onPaste:X,onFocus:q,onChange:k,onKeyDown:H,...T},n))})});z.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}};const Fe="/react/assets/img/mail-a33a291d.svg";Le.propTypes={store:ne.shape(le)};function Le({store:e}){const{lastProcess:t,setActualProcess:a,setLastProcess:s,setToken:u,token:d,resume:l}=e,{info:i}=t,{mutate:h,isLoading:v}=de(),{mutate:I,isLoading:x,isError:C,reset:b}=Ie(),{data:p,isError:T}=pe(i==null?void 0:i.email,{enabled:!!(i!=null&&i.email)});M.useEffect(()=>{p&&u(p==null?void 0:p.token)},[p]);const[g,R]=M.useState(""),D=f=>{R(f),b()},P=(f,A)=>Te(f),w=f=>{I({verificationCode:f,token:d},{onSuccess:()=>{var A;l!=null&&l.step?a(((A=ce.find(k=>k.step===(l==null?void 0:l.step)))==null?void 0:A.name)||j.SERVICES_SELECTION):a(j.SERVICES_SELECTION),s()},onError:()=>{R("")}})},y=()=>{h({token:p==null?void 0:p.token})};return L(W,{children:[c(N,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:c("img",{className:"animate__animated animate__pulse",src:Fe,width:"25%",alt:"Sent Mail"})}),c(E,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),L(E,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",i==null?void 0:i.email," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),c(z,{length:6,value:g,onComplete:w,onChange:D,validateChar:P,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:C,disabled:x}}),!!C&&c(N,{mt:1,children:c(E,{variant:"caption",color:"error",children:"Código incorrecto"})}),c(N,{mb:5,children:c(Se,{sx:{my:4},children:c(he,{direction:"row",spacing:1,justifyContent:"center",children:v?c(fe,{wid:!0,sx:{mx:3}}):L(W,{children:[c(E,{variant:"body2",children:"¿No tengo un código?"}),c(me,{underline:"hover",sx:{cursor:"pointer"},onClick:y,children:c(E,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})})]})}export{Le as default};
