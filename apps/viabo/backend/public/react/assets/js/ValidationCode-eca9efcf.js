import{v as he,n as fe,ak as H,A as pe,W as ne,G as U,D as se,_ as D,r as w,B as ve,g as ye,al as me,o as ge,j as R,i as Re,l as be,x as Ce,a5 as Se,am as z,an as G,ao as Ee,ap as xe,aq as Y,ar as J,as as Oe,at as Te,a1 as M,a2 as Ie,T as k,a4 as Qe,au as Fe,ab as j,ac as L,a7 as ke,p as B,aa as X}from"./index-d7f6818e.js";import{s as Pe,g as Ue,C as De,u as ie,v as Ae,a as ae,b as Me,q as Le,p as we,D as Ne,S as _e,c as Be,P as Ve}from"./CommerceRegister-7222a437.js";function $e(t){return fe("MuiLink",t)}const je=he("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Ke=je,oe={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},We=t=>oe[t]||t,qe=({theme:t,ownerState:a})=>{const n=We(a.color),i=H(t,`palette.${n}`,!1)||a.color,r=H(t,`palette.${n}Channel`);return"vars"in t&&r?`rgba(${r} / 0.4)`:pe(i,.4)},He=qe,ze=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Ge=t=>{const{classes:a,component:n,focusVisible:i,underline:r}=t,e={root:["root",`underline${se(r)}`,n==="button"&&"button",i&&"focusVisible"]};return be(e,$e,a)},Ye=ne(U,{name:"MuiLink",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[a.root,a[`underline${se(n.underline)}`],n.component==="button"&&a.button]}})(({theme:t,ownerState:a})=>D({},a.underline==="none"&&{textDecoration:"none"},a.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},a.underline==="always"&&D({textDecoration:"underline"},a.color!=="inherit"&&{textDecorationColor:He({theme:t,ownerState:a})},{"&:hover":{textDecorationColor:"inherit"}}),a.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ke.focusVisible}`]:{outline:"auto"}})),Je=w.forwardRef(function(a,n){const i=ve({props:a,name:"MuiLink"}),{className:r,color:e="primary",component:u="a",onBlur:s,onFocus:l,TypographyClasses:c,underline:f="always",variant:m="inherit",sx:d}=i,b=ye(i,ze),{isFocusVisibleRef:h,onBlur:C,onFocus:E,ref:T}=me(),[I,y]=w.useState(!1),S=ge(n,T),x=Q=>{C(Q),h.current===!1&&y(!1),s&&s(Q)},g=Q=>{E(Q),h.current===!0&&y(!0),l&&l(Q)},P=D({},i,{color:e,component:u,focusVisible:I,underline:f,variant:m}),A=Ge(P);return R(Ye,D({color:e,className:Re(A.root,r),classes:c,component:u,onBlur:x,onFocus:g,ref:S,ownerState:P,variant:m,sx:[...Object.keys(oe).includes(e)?[]:[{color:e}],...Array.isArray(d)?d:[d]]},b))}),Xe=Je;var Ze=function(t){Ce(a,t);function a(i,r){var e;return e=t.call(this)||this,e.client=i,e.options=r,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(r),e}var n=a.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Z(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return $(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return $(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(r,e){var u=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(r),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=u.queryKey),this.updateQuery();var l=this.hasListeners();l&&ee(this.currentQuery,s,this.options,u)&&this.executeFetch(),this.updateResult(e),l&&(this.currentQuery!==s||this.options.enabled!==u.enabled||this.options.staleTime!==u.staleTime)&&this.updateStaleTimeout();var c=this.computeRefetchInterval();l&&(this.currentQuery!==s||this.options.enabled!==u.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)},n.getOptimisticResult=function(r){var e=this.client.defaultQueryObserverOptions(r),u=this.client.getQueryCache().build(this.client,e);return this.createResult(u,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(r,e){var u=this,s={},l=function(f){u.trackedProps.includes(f)||u.trackedProps.push(f)};return Object.keys(r).forEach(function(c){Object.defineProperty(s,c,{configurable:!1,enumerable:!0,get:function(){return l(c),r[c]}})}),(e.useErrorBoundary||e.suspense)&&l("error"),s},n.getNextResult=function(r){var e=this;return new Promise(function(u,s){var l=e.subscribe(function(c){c.isFetching||(l(),c.isError&&(r!=null&&r.throwOnError)?s(c.error):u(c))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(r){return this.fetch(D({},r,{meta:{refetchPage:r==null?void 0:r.refetchPage}}))},n.fetchOptimistic=function(r){var e=this,u=this.client.defaultQueryObserverOptions(r),s=this.client.getQueryCache().build(this.client,u);return s.fetch().then(function(){return e.createResult(s,u)})},n.fetch=function(r){var e=this;return this.executeFetch(r).then(function(){return e.updateResult(),e.currentResult})},n.executeFetch=function(r){this.updateQuery();var e=this.currentQuery.fetch(this.options,r);return r!=null&&r.throwOnError||(e=e.catch(Se)),e},n.updateStaleTimeout=function(){var r=this;if(this.clearStaleTimeout(),!(z||this.currentResult.isStale||!G(this.options.staleTime))){var e=Ee(this.currentResult.dataUpdatedAt,this.options.staleTime),u=e+1;this.staleTimeoutId=setTimeout(function(){r.currentResult.isStale||r.updateResult()},u)}},n.computeRefetchInterval=function(){var r;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(r=this.options.refetchInterval)!=null?r:!1},n.updateRefetchInterval=function(r){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=r,!(z||this.options.enabled===!1||!G(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||xe.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(r,e){var u=this.currentQuery,s=this.options,l=this.currentResult,c=this.currentResultState,f=this.currentResultOptions,m=r!==u,d=m?r.state:this.currentQueryInitialState,b=m?this.currentResult:this.previousQueryResult,h=r.state,C=h.dataUpdatedAt,E=h.error,T=h.errorUpdatedAt,I=h.isFetching,y=h.status,S=!1,x=!1,g;if(e.optimisticResults){var P=this.hasListeners(),A=!P&&Z(r,e),Q=P&&ee(r,u,e,s);(A||Q)&&(I=!0,C||(y="loading"))}if(e.keepPreviousData&&!h.dataUpdateCount&&(b!=null&&b.isSuccess)&&y!=="error")g=b.data,C=b.dataUpdatedAt,y=b.status,S=!0;else if(e.select&&typeof h.data<"u")if(l&&h.data===(c==null?void 0:c.data)&&e.select===this.selectFn)g=this.selectResult;else try{this.selectFn=e.select,g=e.select(h.data),e.structuralSharing!==!1&&(g=Y(l==null?void 0:l.data,g)),this.selectResult=g,this.selectError=null}catch(o){J().error(o),this.selectError=o}else g=h.data;if(typeof e.placeholderData<"u"&&typeof g>"u"&&(y==="loading"||y==="idle")){var O;if(l!=null&&l.isPlaceholderData&&e.placeholderData===(f==null?void 0:f.placeholderData))O=l.data;else if(O=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof O<"u")try{O=e.select(O),e.structuralSharing!==!1&&(O=Y(l==null?void 0:l.data,O)),this.selectError=null}catch(o){J().error(o),this.selectError=o}typeof O<"u"&&(y="success",g=O,x=!0)}this.selectError&&(E=this.selectError,g=this.selectResult,T=Date.now(),y="error");var N={status:y,isLoading:y==="loading",isSuccess:y==="success",isError:y==="error",isIdle:y==="idle",data:g,dataUpdatedAt:C,error:E,errorUpdatedAt:T,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>d.dataUpdateCount||h.errorUpdateCount>d.errorUpdateCount,isFetching:I,isRefetching:I&&y!=="loading",isLoadingError:y==="error"&&h.dataUpdatedAt===0,isPlaceholderData:x,isPreviousData:S,isRefetchError:y==="error"&&h.dataUpdatedAt!==0,isStale:K(r,e),refetch:this.refetch,remove:this.remove};return N},n.shouldNotifyListeners=function(r,e){if(!e)return!0;var u=this.options,s=u.notifyOnChangeProps,l=u.notifyOnChangePropsExclusions;if(!s&&!l||s==="tracked"&&!this.trackedProps.length)return!0;var c=s==="tracked"?this.trackedProps:s;return Object.keys(r).some(function(f){var m=f,d=r[m]!==e[m],b=c==null?void 0:c.some(function(C){return C===f}),h=l==null?void 0:l.some(function(C){return C===f});return d&&!h&&(!c||b)})},n.updateResult=function(r){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Oe(this.currentResult,e)){var u={cache:!0};(r==null?void 0:r.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(u.listeners=!0),this.notify(D({},u,r))}},n.updateQuery=function(){var r=this.client.getQueryCache().build(this.client,this.options);if(r!==this.currentQuery){var e=this.currentQuery;this.currentQuery=r,this.currentQueryInitialState=r.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),r.addObserver(this))}},n.onQueryUpdate=function(r){var e={};r.type==="success"?e.onSuccess=!0:r.type==="error"&&!Te(r.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(r){var e=this;M.batch(function(){r.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):r.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),r.listeners&&e.listeners.forEach(function(u){u(e.currentResult)}),r.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},a}(Ie);function et(t,a){return a.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&a.retryOnMount===!1)}function Z(t,a){return et(t,a)||t.state.dataUpdatedAt>0&&$(t,a,a.refetchOnMount)}function $(t,a,n){if(a.enabled!==!1){var i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&K(t,a)}return!1}function ee(t,a,n,i){return n.enabled!==!1&&(t!==a||i.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&K(t,n)}function K(t,a){return t.isStaleByTime(a.staleTime)}function tt(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var rt=k.createContext(tt()),nt=function(){return k.useContext(rt)};function st(t,a){var n=k.useRef(!1),i=k.useState(0),r=i[1],e=Qe(),u=nt(),s=e.defaultQueryObserverOptions(t);s.optimisticResults=!0,s.onError&&(s.onError=M.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=M.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=M.batchCalls(s.onSettled)),s.suspense&&(typeof s.staleTime!="number"&&(s.staleTime=1e3),s.cacheTime===0&&(s.cacheTime=1)),(s.suspense||s.useErrorBoundary)&&(u.isReset()||(s.retryOnMount=!1));var l=k.useState(function(){return new a(e,s)}),c=l[0],f=c.getOptimisticResult(s);if(k.useEffect(function(){n.current=!0,u.clearReset();var m=c.subscribe(M.batchCalls(function(){n.current&&r(function(d){return d+1})}));return c.updateResult(),function(){n.current=!1,m()}},[u,c]),k.useEffect(function(){c.setOptions(s,{listeners:!1})},[s,c]),s.suspense&&f.isLoading)throw c.fetchOptimistic(s).then(function(m){var d=m.data;s.onSuccess==null||s.onSuccess(d),s.onSettled==null||s.onSettled(d,null)}).catch(function(m){u.clearReset(),s.onError==null||s.onError(m),s.onSettled==null||s.onSettled(void 0,m)});if(f.isError&&!u.isReset()&&!f.isFetching&&Pe(s.suspense,s.useErrorBoundary,[f.error,c.getCurrentQuery()]))throw f.error;return s.notifyOnChangeProps==="tracked"&&(f=c.trackResult(f,s)),f}function it(t,a,n){var i=Fe(t,a,n);return st(i,Ze)}function at(t){const a=typeof t=="number",n=ot(t);return(a||n&&t!=="")&&!isNaN(Number(t))}function ot(t){return typeof t=="string"||t instanceof String}const ut=(t,a={})=>{const{enqueueSnackbar:n}=j();return it([De.TOKEN_COMMERCE],()=>Ue(t),{staleTime:60*5e3,onError:()=>{n("😟 Error al obtener el comercio",{variant:"error",autoHideDuration:5e3})},enabled:!!t,...a})},ct=(t={})=>{const{enqueueSnackbar:a}=j();return ie({mutationFn:Ae,onError:n=>{const i=ae(n,"No se puede validar el código");a(i,{variant:(n==null?void 0:n.status)===500?"error":"warning",autoHideDuration:5e3})},...t})},lt=(t={})=>{const{enqueueSnackbar:a}=j();return ie({mutationFn:Me,onSuccess:()=>{a("Código Enviado!",{variant:"success"})},onError:n=>{const i=ae(n,"No se puede enviar el código");a(i,{variant:(n==null?void 0:n.status)===500?"error":"warning",autoHideDuration:5e3})},...t})},dt=ne(Le)`
  input {
    text-align: center;
  }
`,ht={TextFieldStyled:dt},ft=t=>R(ht.TextFieldStyled,{...t}),V={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace"};function pt(t,a){return t<=0?[]:Array.from({length:t},a)}function vt(t,a,n){return t.map((i,r)=>a===r?n:i)}function te(t){return t.join("")}function re(t,a){return[...t,a]}function yt(t,a,n){return t.reduce((i,r,e)=>{const{characters:u,restArrayMerged:s}=i;if(e<n)return{restArrayMerged:s,characters:re(u,r)};const[l,...c]=s;return{restArrayMerged:c,characters:re(u,l||"")}},{restArrayMerged:a,characters:[]}).characters}function mt(t){return t.split("")}const ue=k.forwardRef((t,a)=>{const{value:n,length:i,autoFocus:r,onChange:e,TextFieldsProps:u,onComplete:s,validateChar:l,className:c,...f}=t,{onPaste:m,onFocus:d,onKeyDown:b,className:h,...C}=u||{},E=pt(i,(o,v)=>({character:n[v]||"",inputRef:k.createRef()})),T=o=>E.findIndex(({inputRef:v})=>v.current===o),I=()=>E.map(({character:o})=>o),y=(o,v)=>{const p=vt(I(),o,v);return te(p)},S=o=>{var v,p;(p=(v=E[o])==null?void 0:v.inputRef.current)==null||p.focus()},x=o=>{var v,p;(p=(v=E[o])==null?void 0:v.inputRef.current)==null||p.select()},g=o=>{o+1!==i&&(E[o+1].character?x(o+1):S(o+1))},P=o=>{o>0&&x(o-1)},A=o=>{const v=o.target.value[0]||"",p=T(o.target);if(typeof l=="function"&&!l(v,p))return;const F=y(p,v);e==null||e(F),F.length===i&&(s==null||s(F)),v!==""?F.length<i?g(F.length-1):g(p):F[p]?x(p):P(p)},Q=o=>{o.preventDefault(),o.target.select(),d==null||d(o)},O=o=>{const v=o.target,p=T(v);v.value===o.key?(o.preventDefault(),g(p)):!v.value&&V.backspace===o.key||V.left===o.key?(o.preventDefault(),x(p-1)):V.right===o.key&&(o.preventDefault(),x(p+1)),b==null||b(o)},N=o=>{o.preventDefault();const v=o.target,p=o.clipboardData.getData("text/plain"),F=T(v),ce=I(),W=yt(ce,mt(p),F),q=W.findIndex((le,de)=>de>F&&le===""),_=te(W);if(e==null||e(_),_.length===i){s==null||s(_),S(i-1);return}q!==-1&&S(q),m==null||m(o)};return R(L,{display:"flex",gap:"20px",alignItems:"center",ref:a,className:`MuiOtpInput-Box ${c||""}`,...f,children:E.map(({character:o,inputRef:v},p)=>R(ft,{autoFocus:r?p===0:!1,autoComplete:"one-time-code",value:o,inputRef:v,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${p+1} ${h||""}`,onPaste:N,onFocus:Q,onChange:A,onKeyDown:O,...C},p))})});ue.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}};const gt="/react/assets/img/mail-a33a291d.svg";Rt.propTypes={store:ke.shape(we)};function Rt({store:t}){const{lastProcess:a,setActualProcess:n,setLastProcess:i,setToken:r}=t,{info:e}=a,{mutate:u,isLoading:s}=lt(),{mutate:l,isLoading:c,isError:f,reset:m}=ct(),{data:d,isError:b}=ut(e==null?void 0:e.email);w.useEffect(()=>{d&&r(d==null?void 0:d.token)},[d]);const[h,C]=w.useState(""),E=S=>{C(S),m()},T=(S,x)=>at(S),I=S=>{l({verificationCode:S,token:d==null?void 0:d.token},{onSuccess:()=>{n(Ve.SERVICES_SELECTION),i()},onError:()=>{C("")}})},y=()=>{u({token:d==null?void 0:d.token})};return B(X,{children:[R(L,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",my:4},children:R("img",{className:"animate__animated animate__pulse",src:gt,width:"25%",alt:"Sent Mail"})}),R(U,{variant:"h4",color:"textPrimary",align:"center",children:"Verificación de Cuenta"}),B(U,{paragraph:!0,sx:{mb:4,mt:2},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Enviamos un correo electrónico a ",e==null?void 0:e.email," con el código de verificacion de tu cuenta, ingrese el código en el cuadro a continuación para verificar su cuenta."]}),R(ue,{length:6,value:h,onComplete:I,onChange:E,validateChar:T,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:f,disabled:c}}),!!f&&R(L,{mt:1,children:R(U,{variant:"caption",color:"error",children:"Código incorrecto"})}),R(L,{mb:5,children:R(Ne,{sx:{my:4},children:R(_e,{direction:"row",spacing:1,justifyContent:"center",children:s?R(Be,{wid:!0,sx:{mx:3}}):B(X,{children:[R(U,{variant:"body2",children:"¿No tengo un código?"}),R(Xe,{underline:"hover",sx:{cursor:"pointer"},onClick:y,children:R(U,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})})]})}export{Rt as default};
