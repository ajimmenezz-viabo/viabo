import{s as Y,bN as _,c0 as g,i as j,B as ee}from"./vendor-_TWOdD6q.js";const te=Y(_)`
  input {
    text-align: center;
  }
`,ne={TextFieldStyled:te},re=r=>j.jsx(ne.TextFieldStyled,{...r}),v={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace",home:"Home",end:"End"};function ae(r,l){return r<=0?[]:Array.from({length:r},l)}function le(r,l,i){return r.map((s,m)=>l===m?i:s)}function $(r){return r.join("")}function L(r,l){return[...r,l]}function ce(r,l,i){return r.reduce((s,m,c)=>{const{characters:C,restArrayMerged:o}=s;if(c<i)return{restArrayMerged:o,characters:L(C,m)};const[D,...F]=o;return{restArrayMerged:F,characters:L(C,D||"")}},{restArrayMerged:l,characters:[]}).characters}function se(r){return r.split("")}function q(r){const l=g.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return g.useInsertionEffect(()=>{l.current=r}),g.useCallback((...i)=>{var s;return(s=l.current)==null?void 0:s.call(l,...i)},[])}const oe=()=>!0,ie=g.forwardRef((r,l)=>{const{value:i="",length:s=4,autoFocus:m=!1,onChange:c,TextFieldsProps:C,onComplete:o,validateChar:D=oe,className:F,onBlur:k,...z}=r,G=g.useRef(i),B=q(o),h=q(e=>{const t=e.slice(0,s);return{isCompleted:t.length===s,finalValue:t}}),{onPaste:w,onFocus:I,onKeyDown:A,className:J,placeholder:M,onBlur:T,...K}=C||{};g.useEffect(()=>{const{isCompleted:e,finalValue:t}=h(G.current);e&&B(t)},[s,B,h]);const f=ae(s,(e,t)=>({character:i[t]||"",inputRef:g.createRef()})),E=e=>f.findIndex(({inputRef:t})=>t.current===e),N=()=>f.map(({character:e})=>e),O=(e,t)=>{const n=le(N(),e,t);return $(n)},Q=e=>{var t,n;(n=(t=f[e])==null?void 0:t.inputRef.current)==null||n.focus()},u=e=>{var t,n;(n=(t=f[e])==null?void 0:t.inputRef.current)==null||n.select()},P=e=>{e+1!==s&&(f[e+1].character?u(e+1):Q(e+1))},S=(e,t)=>typeof D!="function"?!0:D(e,t),U=e=>{const t=E(e.target);if(t===0&&e.target.value.length>1){const{finalValue:y,isCompleted:V}=h(e.target.value);c==null||c(y),V&&(o==null||o(y)),u(y.length-1);return}const n=e.target.value[0]||"";let p=n;p&&!S(p,t)&&(p="");const a=O(t,p);c==null||c(a);const{isCompleted:x,finalValue:d}=h(a);x&&(o==null||o(d)),p!==""?a.length-1<t?u(a.length):P(t):n===""&&a.length<=t&&u(t-1)},X=e=>{e.preventDefault(),e.target.select(),I==null||I(e)},H=e=>{const t=e.target,n=t.selectionStart,p=t.selectionEnd,a=E(t),x=n===0&&p===0;if(t.value===e.key)e.preventDefault(),P(a);else if(v.backspace===e.key){if(!t.value)e.preventDefault(),u(a-1);else if(x){e.preventDefault();const d=O(a,"");c==null||c(d),d.length<=a&&u(a-1)}}else v.left===e.key?(e.preventDefault(),u(a-1)):v.right===e.key?(e.preventDefault(),u(a+1)):v.home===e.key?(e.preventDefault(),u(0)):v.end===e.key&&(e.preventDefault(),u(f.length-1));A==null||A(e)},Z=e=>{e.preventDefault();const t=e.clipboardData.getData("text/plain"),n=e.target,p=f.findIndex(({character:R,inputRef:b})=>R===""||b.current===n),a=N(),x=ce(a,se(t),p).map((R,b)=>S(R,b)?R:""),d=$(x);c==null||c(d);const{isCompleted:y,finalValue:V}=h(d);y?(o==null||o(V),u(s-1)):u(d.length),w==null||w(e)},W=e=>{if(T==null||T(e),!f.some(({inputRef:t})=>t.current===e.relatedTarget)){const{isCompleted:t,finalValue:n}=h(i);k==null||k(n,t)}};return j.jsx(ee,{display:"flex",gap:"20px",alignItems:"center",ref:l,className:`MuiOtpInput-Box ${F||""}`,...z,children:f.map(({character:e,inputRef:t},n)=>j.jsx(re,{autoFocus:m?n===0:!1,autoComplete:"one-time-code",value:e,inputRef:t,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${n+1} ${J||""}`,onPaste:Z,onFocus:X,onChange:U,onKeyDown:H,onBlur:W,placeholder:typeof M=="function"?M(n):M,...K},n))})});export{ie as h};
//# sourceMappingURL=mui-one-time-password-input.es-Y4GFcdVB.js.map