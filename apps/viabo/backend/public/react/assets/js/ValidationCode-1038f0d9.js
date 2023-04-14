import{k as X,l as Y,w as Z,a9 as O,m as o,B as b,j as W,e as _,o as A,aa as j,T as I,af as ee,q as te,ag as ae}from"./index-9b2f5530.js";import{T as re}from"./TextField-b282859c.js";import{v as ne,p as oe,a as se,P as B}from"./CommerceRegister-d7b49ab1.js";import{u as ie,a as ce}from"./useSendValidationCode-8ccd9d75.js";import{u as le}from"./useMutation-50e01840.js";import{C as ue}from"./integracion-tecnologica-cec87d95.js";function de(t){const s=typeof t=="number",i=pe(t);return(s||i&&t!=="")&&!isNaN(Number(t))}function pe(t){return typeof t=="string"||t instanceof String}const me=(t={})=>{const{enqueueSnackbar:s}=X();return le({mutationFn:ne,onError:i=>{const c=Y(i,"No se puede validar el código");s(c,{variant:(i==null?void 0:i.status)===500?"error":"warning",autoHideDuration:5e3})},...t})},ge=Z(re)`
  input {
    text-align: center;
  }
`,he={TextFieldStyled:ge},fe=t=>o(he.TextFieldStyled,{...t}),D={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace"};function Ce(t,s){return t<=0?[]:Array.from({length:t},s)}function ye(t,s,i){return t.map((c,h)=>s===h?i:c)}function $(t){return t.join("")}function K(t,s){return[...t,s]}function ve(t,s,i){return t.reduce((c,h,u)=>{const{characters:l,restArrayMerged:n}=c;if(u<i)return{restArrayMerged:n,characters:K(l,h)};const[C,...x]=n;return{restArrayMerged:x,characters:K(l,C||"")}},{restArrayMerged:s,characters:[]}).characters}function xe(t){return t.split("")}const q=O.forwardRef((t,s)=>{const{value:i,length:c,autoFocus:h,onChange:u,TextFieldsProps:l,onComplete:n,validateChar:C,className:x,...k}=t,{onPaste:S,onFocus:y,onKeyDown:E,className:d,...M}=l||{},g=Ce(c,(e,r)=>({character:i[r]||"",inputRef:O.createRef()})),v=e=>g.findIndex(({inputRef:r})=>r.current===e),P=()=>g.map(({character:e})=>e),N=(e,r)=>{const a=ye(P(),e,r);return $(a)},T=e=>{var r,a;(a=(r=g[e])==null?void 0:r.inputRef.current)==null||a.focus()},f=e=>{var r,a;(a=(r=g[e])==null?void 0:r.inputRef.current)==null||a.select()},p=e=>{e+1!==c&&(g[e+1].character?f(e+1):T(e+1))},F=e=>{e>0&&f(e-1)},R=e=>{const r=e.target.value[0]||"",a=v(e.target);if(typeof C=="function"&&!C(r,a))return;const m=N(a,r);u==null||u(m),m.length===c&&(n==null||n(m)),r!==""?m.length<c?p(m.length-1):p(a):m[a]?f(a):F(a)},H=e=>{e.preventDefault(),e.target.select(),y==null||y(e)},z=e=>{const r=e.target,a=v(r);r.value===e.key?(e.preventDefault(),p(a)):!r.value&&D.backspace===e.key||D.left===e.key?(e.preventDefault(),f(a-1)):D.right===e.key&&(e.preventDefault(),f(a+1)),E==null||E(e)},G=e=>{e.preventDefault();const r=e.target,a=e.clipboardData.getData("text/plain"),m=v(r),J=P(),V=ve(J,xe(a),m),L=V.findIndex((Q,U)=>U>m&&Q===""),w=$(V);if(u==null||u(w),w.length===c){n==null||n(w),T(c-1);return}L!==-1&&T(L),S==null||S(e)};return o(b,{display:"flex",gap:"20px",alignItems:"center",ref:s,className:`MuiOtpInput-Box ${x||""}`,...k,children:g.map(({character:e,inputRef:r},a)=>o(fe,{autoFocus:h?a===0:!1,autoComplete:"one-time-code",value:e,inputRef:r,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${a+1} ${d||""}`,onPaste:G,onFocus:H,onChange:R,onKeyDown:z,...M},a))})});q.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}};const Se="/react/assets/img/mail-a33a291d.svg";Ee.propTypes={store:W.shape(oe)};function Ee({store:t}){const{lastProcess:s,setActualProcess:i,setLastProcess:c,setToken:h,token:u,resume:l}=t,{info:n}=s,{mutate:C,isLoading:x}=ie(),{mutate:k,isLoading:S,isError:y,reset:E}=me(),{data:d,isError:M}=ce(n==null?void 0:n.email,{enabled:!!(n!=null&&n.email)});_.useEffect(()=>{d&&h(d==null?void 0:d.token)},[d]);const[g,v]=_.useState(""),P=p=>{v(p),E()},N=(p,F)=>de(p),T=p=>{k({verificationCode:p,token:u},{onSuccess:()=>{var F;l!=null&&l.step?i(((F=se.find(R=>R.step===(l==null?void 0:l.step)))==null?void 0:F.name)||B.SERVICES_SELECTION):i(B.SERVICES_SELECTION),c()},onError:()=>{v("")}})},f=()=>{C({token:d==null?void 0:d.token})};return A(j,{children:[o(b,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:o("img",{className:"animate__animated animate__pulse",src:Se,width:"25%",alt:"Sent Mail"})}),o(I,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),A(I,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",n==null?void 0:n.email," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),o(q,{length:6,value:g,onComplete:T,onChange:P,validateChar:N,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:y,disabled:S}}),!!y&&o(b,{mt:1,children:o(I,{variant:"caption",color:"error",children:"Código incorrecto"})}),o(b,{mb:5,children:o(ee,{sx:{my:4},children:o(te,{direction:"row",spacing:1,justifyContent:"center",children:x?o(ue,{wid:!0,sx:{mx:3}}):A(j,{children:[o(I,{variant:"body2",children:"¿No tengo un código?"}),o(ae,{underline:"hover",sx:{cursor:"pointer"},onClick:f,children:o(I,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})})]})}export{Ee as default};