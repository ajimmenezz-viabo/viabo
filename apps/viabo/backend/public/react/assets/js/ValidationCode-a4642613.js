import{u as X,t as Y,c as Z,f as W,a5 as O,j as o,B as b,p as ee,r as _,d as A,a6 as j,T as I,ac as te,S as ae,C as re,ad as ne}from"./index-eb88d5db.js";import{T as oe}from"./TextField-ebaea117.js";import{v as se,p as ie,a as ce,P as B}from"./CommerceRegister-4b1a88cb.js";import{u as le,a as de}from"./useSendValidationCode-97d35d31.js";import"./integracion-tecnologica-98d23ebe.js";function ue(t){const s=typeof t=="number",i=pe(t);return(s||i&&t!=="")&&!isNaN(Number(t))}function pe(t){return typeof t=="string"||t instanceof String}const ge=(t={})=>{const{enqueueSnackbar:s}=X();return Y({mutationFn:se,onError:i=>{const c=Z(i,"No se puede validar el código");s(c,{variant:(i==null?void 0:i.status)===500?"error":"warning",autoHideDuration:5e3})},...t})},me=W(oe)`
  input {
    text-align: center;
  }
`,he={TextFieldStyled:me},fe=t=>o(he.TextFieldStyled,{...t}),D={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace"};function Ce(t,s){return t<=0?[]:Array.from({length:t},s)}function ye(t,s,i){return t.map((c,h)=>s===h?i:c)}function $(t){return t.join("")}function K(t,s){return[...t,s]}function ve(t,s,i){return t.reduce((c,h,d)=>{const{characters:l,restArrayMerged:n}=c;if(d<i)return{restArrayMerged:n,characters:K(l,h)};const[C,...x]=n;return{restArrayMerged:x,characters:K(l,C||"")}},{restArrayMerged:s,characters:[]}).characters}function xe(t){return t.split("")}const H=O.forwardRef((t,s)=>{const{value:i,length:c,autoFocus:h,onChange:d,TextFieldsProps:l,onComplete:n,validateChar:C,className:x,...N}=t,{onPaste:S,onFocus:y,onKeyDown:E,className:u,...M}=l||{},m=Ce(c,(e,r)=>({character:i[r]||"",inputRef:O.createRef()})),v=e=>m.findIndex(({inputRef:r})=>r.current===e),P=()=>m.map(({character:e})=>e),R=(e,r)=>{const a=ye(P(),e,r);return $(a)},T=e=>{var r,a;(a=(r=m[e])==null?void 0:r.inputRef.current)==null||a.focus()},f=e=>{var r,a;(a=(r=m[e])==null?void 0:r.inputRef.current)==null||a.select()},p=e=>{e+1!==c&&(m[e+1].character?f(e+1):T(e+1))},F=e=>{e>0&&f(e-1)},k=e=>{const r=e.target.value[0]||"",a=v(e.target);if(typeof C=="function"&&!C(r,a))return;const g=R(a,r);d==null||d(g),g.length===c&&(n==null||n(g)),r!==""?g.length<c?p(g.length-1):p(a):g[a]?f(a):F(a)},q=e=>{e.preventDefault(),e.target.select(),y==null||y(e)},z=e=>{const r=e.target,a=v(r);r.value===e.key?(e.preventDefault(),p(a)):!r.value&&D.backspace===e.key||D.left===e.key?(e.preventDefault(),f(a-1)):D.right===e.key&&(e.preventDefault(),f(a+1)),E==null||E(e)},G=e=>{e.preventDefault();const r=e.target,a=e.clipboardData.getData("text/plain"),g=v(r),J=P(),V=ve(J,xe(a),g),L=V.findIndex((Q,U)=>U>g&&Q===""),w=$(V);if(d==null||d(w),w.length===c){n==null||n(w),T(c-1);return}L!==-1&&T(L),S==null||S(e)};return o(b,{display:"flex",gap:"20px",alignItems:"center",ref:s,className:`MuiOtpInput-Box ${x||""}`,...N,children:m.map(({character:e,inputRef:r},a)=>o(fe,{autoFocus:h?a===0:!1,autoComplete:"one-time-code",value:e,inputRef:r,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${a+1} ${u||""}`,onPaste:G,onFocus:q,onChange:k,onKeyDown:z,...M},a))})});H.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}};const Se="/react/assets/img/mail-a33a291d.svg";Ee.propTypes={store:ee.shape(ie)};function Ee({store:t}){const{lastProcess:s,setActualProcess:i,setLastProcess:c,setToken:h,token:d,resume:l}=t,{info:n}=s,{mutate:C,isLoading:x}=le(),{mutate:N,isLoading:S,isError:y,reset:E}=ge(),{data:u,isError:M}=de(n==null?void 0:n.email,{enabled:!!(n!=null&&n.email)});_.useEffect(()=>{u&&h(u==null?void 0:u.token)},[u]);const[m,v]=_.useState(""),P=p=>{v(p),E()},R=(p,F)=>ue(p),T=p=>{N({verificationCode:p,token:d},{onSuccess:()=>{var F;l!=null&&l.step?i(((F=ce.find(k=>k.step===(l==null?void 0:l.step)))==null?void 0:F.name)||B.SERVICES_SELECTION):i(B.SERVICES_SELECTION),c()},onError:()=>{v("")}})},f=()=>{C({token:u==null?void 0:u.token})};return A(j,{children:[o(b,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:o("img",{className:"animate__animated animate__pulse",src:Se,width:"25%",alt:"Sent Mail"})}),o(I,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),A(I,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",n==null?void 0:n.email," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),o(H,{length:6,value:m,onComplete:T,onChange:P,validateChar:R,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:y,disabled:S}}),!!y&&o(b,{mt:1,children:o(I,{variant:"caption",color:"error",children:"Código incorrecto"})}),o(b,{mb:5,children:o(te,{sx:{my:4},children:o(ae,{direction:"row",spacing:1,justifyContent:"center",children:x?o(re,{wid:!0,sx:{mx:3}}):A(j,{children:[o(I,{variant:"body2",children:"¿No tengo un código?"}),o(ne,{underline:"hover",sx:{cursor:"pointer"},onClick:f,children:o(I,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})})]})}export{Ee as default};
