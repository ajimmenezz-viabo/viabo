import{u as X,o as Y,g as Z,s as W,aj as O,j as o,B as R,p as ee,r as _,c as A,$ as j,T as P,aT as te,S as ae,C as re,a7 as ne}from"./index-2dd0b517.js";import{T as oe}from"./TextField-5be2cc10.js";import{v as se,p as ie}from"./CommerceRegister-0dec3471.js";import{m as ce}from"./matchTypes-ecaf0d13.js";import{a as le,P as B}from"./processList-61d5e77c.js";import{u as de,a as ue}from"./useSendValidationCode-d28143d9.js";import"./shallow-7e05bccc.js";import"./integracion-tecnologica-11ba68ca.js";import"./Grid-0153dc16.js";const pe=(r={})=>{const{enqueueSnackbar:i}=X();return Y({mutationFn:se,onError:c=>{const s=Z(c,"No se puede validar el código");i(s,{variant:(c==null?void 0:c.status)===500?"error":"warning",autoHideDuration:5e3})},...r})},me=W(oe)`
  input {
    text-align: center;
  }
`,ge={TextFieldStyled:me},he=r=>o(ge.TextFieldStyled,{...r}),D={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace"};function fe(r,i){return r<=0?[]:Array.from({length:r},i)}function Ce(r,i,c){return r.map((s,h)=>i===h?c:s)}function $(r){return r.join("")}function K(r,i){return[...r,i]}function xe(r,i,c){return r.reduce((s,h,d)=>{const{characters:l,restArrayMerged:n}=s;if(d<c)return{restArrayMerged:n,characters:K(l,h)};const[C,...y]=n;return{restArrayMerged:y,characters:K(l,C||"")}},{restArrayMerged:i,characters:[]}).characters}function ve(r){return r.split("")}const H=O.forwardRef((r,i)=>{const{value:c,length:s,autoFocus:h,onChange:d,TextFieldsProps:l,onComplete:n,validateChar:C,className:y,...k}=r,{onPaste:S,onFocus:x,onKeyDown:E,className:u,...M}=l||{},g=fe(s,(e,a)=>({character:c[a]||"",inputRef:O.createRef()})),v=e=>g.findIndex(({inputRef:a})=>a.current===e),I=()=>g.map(({character:e})=>e),b=(e,a)=>{const t=Ce(I(),e,a);return $(t)},T=e=>{var a,t;(t=(a=g[e])==null?void 0:a.inputRef.current)==null||t.focus()},f=e=>{var a,t;(t=(a=g[e])==null?void 0:a.inputRef.current)==null||t.select()},p=e=>{e+1!==s&&(g[e+1].character?f(e+1):T(e+1))},F=e=>{e>0&&f(e-1)},w=e=>{const a=e.target.value[0]||"",t=v(e.target);if(typeof C=="function"&&!C(a,t))return;const m=b(t,a);d==null||d(m),m.length===s&&(n==null||n(m)),a!==""?m.length<s?p(m.length-1):p(t):m[t]?f(t):F(t)},q=e=>{e.preventDefault(),e.target.select(),x==null||x(e)},z=e=>{const a=e.target,t=v(a);a.value===e.key?(e.preventDefault(),p(t)):!a.value&&D.backspace===e.key||D.left===e.key?(e.preventDefault(),f(t-1)):D.right===e.key&&(e.preventDefault(),f(t+1)),E==null||E(e)},G=e=>{e.preventDefault();const a=e.target,t=e.clipboardData.getData("text/plain"),m=v(a),J=I(),V=xe(J,ve(t),m),L=V.findIndex((Q,U)=>U>m&&Q===""),N=$(V);if(d==null||d(N),N.length===s){n==null||n(N),T(s-1);return}L!==-1&&T(L),S==null||S(e)};return o(R,{display:"flex",gap:"20px",alignItems:"center",ref:i,className:`MuiOtpInput-Box ${y||""}`,...k,children:g.map(({character:e,inputRef:a},t)=>o(he,{autoFocus:h?t===0:!1,autoComplete:"one-time-code",value:e,inputRef:a,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${t+1} ${u||""}`,onPaste:G,onFocus:q,onChange:w,onKeyDown:z,...M},t))})});H.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}};const ye="/react/assets/img/mail-a33a291d.svg";Se.propTypes={store:ee.shape(ie)};function Se({store:r}){const{lastProcess:i,setActualProcess:c,setLastProcess:s,setToken:h,token:d,resume:l}=r,{info:n}=i,{mutate:C,isLoading:y}=de(),{mutate:k,isLoading:S,isError:x,reset:E}=pe(),{data:u,isError:M}=ue(n==null?void 0:n.email,{enabled:!!(n!=null&&n.email)});_.useEffect(()=>{u&&h(u==null?void 0:u.token)},[u]);const[g,v]=_.useState(""),I=p=>{v(p),E()},b=(p,F)=>ce(p),T=p=>{k({verificationCode:p,token:d},{onSuccess:()=>{var F;l!=null&&l.step?c(((F=le.find(w=>w.step===(l==null?void 0:l.step)))==null?void 0:F.name)||B.SERVICES_SELECTION):c(B.SERVICES_SELECTION),s()},onError:()=>{v("")}})},f=()=>{C({token:u==null?void 0:u.token})};return A(j,{children:[o(R,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:o("img",{className:"animate__animated animate__pulse",src:ye,width:"25%",alt:"Sent Mail"})}),o(P,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),A(P,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",n==null?void 0:n.email," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),o(H,{length:6,value:g,onComplete:T,onChange:I,validateChar:b,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:x,disabled:S}}),!!x&&o(R,{mt:1,children:o(P,{variant:"caption",color:"error",children:"Código incorrecto"})}),o(R,{mb:5,children:o(te,{sx:{my:4},children:o(ae,{direction:"row",spacing:1,justifyContent:"center",children:y?o(re,{wid:!0,sx:{mx:3}}):A(j,{children:[o(P,{variant:"body2",children:"¿No tengo un código?"}),o(ne,{underline:"hover",sx:{cursor:"pointer"},onClick:f,children:o(P,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})})]})}export{Se as default};
