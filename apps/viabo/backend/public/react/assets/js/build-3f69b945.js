import{cY as pe,cZ as Ne,c_ as se,c$ as J,d0 as V,d1 as Q,d2 as It,aC as wt,r as d,cp as jt}from"./index-1fae866e.js";function Br(e,r){for(var t=-1,a=e==null?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}var Ct=Array.isArray;const ce=Ct;var Mt=1/0,fr=pe?pe.prototype:void 0,dr=fr?fr.toString:void 0;function Hr(e){if(typeof e=="string")return e;if(ce(e))return Br(e,Hr)+"";if(Ne(e))return dr?dr.call(e):"";var r=e+"";return r=="0"&&1/e==-Mt?"-0":r}var Rt="[object AsyncFunction]",Pt="[object Function]",Lt="[object GeneratorFunction]",Dt="[object Proxy]";function Gr(e){if(!se(e))return!1;var r=J(e);return r==Pt||r==Lt||r==Rt||r==Dt}var Ut=V["__core-js_shared__"];const Oe=Ut;var pr=function(){var e=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Vt(e){return!!pr&&pr in e}var Nt=Function.prototype,xt=Nt.toString;function W(e){if(e!=null){try{return xt.call(e)}catch{}try{return e+""}catch{}}return""}var Bt=/[\\^$.*+?()[\]{}|]/g,Ht=/^\[object .+?Constructor\]$/,Gt=Function.prototype,kt=Object.prototype,zt=Gt.toString,Kt=kt.hasOwnProperty,Wt=RegExp("^"+zt.call(Kt).replace(Bt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Yt(e){if(!se(e)||Vt(e))return!1;var r=Gr(e)?Wt:Ht;return r.test(W(e))}function qt(e,r){return e==null?void 0:e[r]}function Y(e,r){var t=qt(e,r);return Yt(t)?t:void 0}var Xt=Y(V,"WeakMap");const Me=Xt;var hr=Object.create,Zt=function(){function e(){}return function(r){if(!se(r))return{};if(hr)return hr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Jt=Zt;function kr(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var Qt=function(){try{var e=Y(Object,"defineProperty");return e({},"",{}),e}catch{}}();const vr=Qt;function en(e,r){for(var t=-1,a=e==null?0:e.length;++t<a&&r(e[t],t,e)!==!1;);return e}var rn=9007199254740991,tn=/^(?:0|[1-9]\d*)$/;function nn(e,r){var t=typeof e;return r=r??rn,!!r&&(t=="number"||t!="symbol"&&tn.test(e))&&e>-1&&e%1==0&&e<r}function zr(e,r,t){r=="__proto__"&&vr?vr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}function Kr(e,r){return e===r||e!==e&&r!==r}var an=Object.prototype,on=an.hasOwnProperty;function Wr(e,r,t){var a=e[r];(!(on.call(e,r)&&Kr(a,t))||t===void 0&&!(r in e))&&zr(e,r,t)}function ve(e,r,t,a){var n=!t;t||(t={});for(var i=-1,u=r.length;++i<u;){var s=r[i],v=a?a(t[s],e[s],s,t,e):void 0;v===void 0&&(v=e[s]),n?zr(t,s,v):Wr(t,s,v)}return t}var un=9007199254740991;function Yr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=un}function qr(e){return e!=null&&Yr(e.length)&&!Gr(e)}var sn=Object.prototype;function xe(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||sn;return e===t}function cn(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var ln="[object Arguments]";function yr(e){return Q(e)&&J(e)==ln}var Xr=Object.prototype,fn=Xr.hasOwnProperty,dn=Xr.propertyIsEnumerable,pn=yr(function(){return arguments}())?yr:function(e){return Q(e)&&fn.call(e,"callee")&&!dn.call(e,"callee")};const hn=pn;function vn(){return!1}var Zr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,gr=Zr&&typeof module=="object"&&module&&!module.nodeType&&module,yn=gr&&gr.exports===Zr,mr=yn?V.Buffer:void 0,gn=mr?mr.isBuffer:void 0,mn=gn||vn;const Jr=mn;var bn="[object Arguments]",Tn="[object Array]",En="[object Boolean]",An="[object Date]",_n="[object Error]",Sn="[object Function]",Fn="[object Map]",$n="[object Number]",On="[object Object]",In="[object RegExp]",wn="[object Set]",jn="[object String]",Cn="[object WeakMap]",Mn="[object ArrayBuffer]",Rn="[object DataView]",Pn="[object Float32Array]",Ln="[object Float64Array]",Dn="[object Int8Array]",Un="[object Int16Array]",Vn="[object Int32Array]",Nn="[object Uint8Array]",xn="[object Uint8ClampedArray]",Bn="[object Uint16Array]",Hn="[object Uint32Array]",_={};_[Pn]=_[Ln]=_[Dn]=_[Un]=_[Vn]=_[Nn]=_[xn]=_[Bn]=_[Hn]=!0;_[bn]=_[Tn]=_[Mn]=_[En]=_[Rn]=_[An]=_[_n]=_[Sn]=_[Fn]=_[$n]=_[On]=_[In]=_[wn]=_[jn]=_[Cn]=!1;function Gn(e){return Q(e)&&Yr(e.length)&&!!_[J(e)]}function Be(e){return function(r){return e(r)}}var Qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ne=Qr&&typeof module=="object"&&module&&!module.nodeType&&module,kn=ne&&ne.exports===Qr,Ie=kn&&It.process,zn=function(){try{var e=ne&&ne.require&&ne.require("util").types;return e||Ie&&Ie.binding&&Ie.binding("util")}catch{}}();const Z=zn;var br=Z&&Z.isTypedArray,Kn=br?Be(br):Gn;const Wn=Kn;var Yn=Object.prototype,qn=Yn.hasOwnProperty;function et(e,r){var t=ce(e),a=!t&&hn(e),n=!t&&!a&&Jr(e),i=!t&&!a&&!n&&Wn(e),u=t||a||n||i,s=u?cn(e.length,String):[],v=s.length;for(var p in e)(r||qn.call(e,p))&&!(u&&(p=="length"||n&&(p=="offset"||p=="parent")||i&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||nn(p,v)))&&s.push(p);return s}function rt(e,r){return function(t){return e(r(t))}}var Xn=rt(Object.keys,Object);const Zn=Xn;var Jn=Object.prototype,Qn=Jn.hasOwnProperty;function ea(e){if(!xe(e))return Zn(e);var r=[];for(var t in Object(e))Qn.call(e,t)&&t!="constructor"&&r.push(t);return r}function He(e){return qr(e)?et(e):ea(e)}function ra(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var ta=Object.prototype,na=ta.hasOwnProperty;function aa(e){if(!se(e))return ra(e);var r=xe(e),t=[];for(var a in e)a=="constructor"&&(r||!na.call(e,a))||t.push(a);return t}function Ge(e){return qr(e)?et(e,!0):aa(e)}var ia=Y(Object,"create");const ie=ia;function oa(){this.__data__=ie?ie(null):{},this.size=0}function ua(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var sa="__lodash_hash_undefined__",ca=Object.prototype,la=ca.hasOwnProperty;function fa(e){var r=this.__data__;if(ie){var t=r[e];return t===sa?void 0:t}return la.call(r,e)?r[e]:void 0}var da=Object.prototype,pa=da.hasOwnProperty;function ha(e){var r=this.__data__;return ie?r[e]!==void 0:pa.call(r,e)}var va="__lodash_hash_undefined__";function ya(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ie&&r===void 0?va:r,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}z.prototype.clear=oa;z.prototype.delete=ua;z.prototype.get=fa;z.prototype.has=ha;z.prototype.set=ya;function ga(){this.__data__=[],this.size=0}function ye(e,r){for(var t=e.length;t--;)if(Kr(e[t][0],r))return t;return-1}var ma=Array.prototype,ba=ma.splice;function Ta(e){var r=this.__data__,t=ye(r,e);if(t<0)return!1;var a=r.length-1;return t==a?r.pop():ba.call(r,t,1),--this.size,!0}function Ea(e){var r=this.__data__,t=ye(r,e);return t<0?void 0:r[t][1]}function Aa(e){return ye(this.__data__,e)>-1}function _a(e,r){var t=this.__data__,a=ye(t,e);return a<0?(++this.size,t.push([e,r])):t[a][1]=r,this}function N(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}N.prototype.clear=ga;N.prototype.delete=Ta;N.prototype.get=Ea;N.prototype.has=Aa;N.prototype.set=_a;var Sa=Y(V,"Map");const oe=Sa;function Fa(){this.size=0,this.__data__={hash:new z,map:new(oe||N),string:new z}}function $a(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function ge(e,r){var t=e.__data__;return $a(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Oa(e){var r=ge(this,e).delete(e);return this.size-=r?1:0,r}function Ia(e){return ge(this,e).get(e)}function wa(e){return ge(this,e).has(e)}function ja(e,r){var t=ge(this,e),a=t.size;return t.set(e,r),this.size+=t.size==a?0:1,this}function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}B.prototype.clear=Fa;B.prototype.delete=Oa;B.prototype.get=Ia;B.prototype.has=wa;B.prototype.set=ja;var Ca="Expected a function";function ke(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Ca);var t=function(){var a=arguments,n=r?r.apply(this,a):a[0],i=t.cache;if(i.has(n))return i.get(n);var u=e.apply(this,a);return t.cache=i.set(n,u)||i,u};return t.cache=new(ke.Cache||B),t}ke.Cache=B;var Ma=500;function Ra(e){var r=ke(e,function(a){return t.size===Ma&&t.clear(),a}),t=r.cache;return r}var Pa=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,La=/\\(\\)?/g,Da=Ra(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Pa,function(t,a,n,i){r.push(n?i.replace(La,"$1"):a||t)}),r});const Ua=Da;function Va(e){return e==null?"":Hr(e)}var Na=1/0;function xa(e){if(typeof e=="string"||Ne(e))return e;var r=e+"";return r=="0"&&1/e==-Na?"-0":r}function tt(e,r){for(var t=-1,a=r.length,n=e.length;++t<a;)e[n+t]=r[t];return e}var Ba=rt(Object.getPrototypeOf,Object);const ze=Ba;var Ha="[object Object]",Ga=Function.prototype,ka=Object.prototype,nt=Ga.toString,za=ka.hasOwnProperty,Ka=nt.call(Object);function Tr(e){if(!Q(e)||J(e)!=Ha)return!1;var r=ze(e);if(r===null)return!0;var t=za.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&nt.call(t)==Ka}function Wa(){this.__data__=new N,this.size=0}function Ya(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function qa(e){return this.__data__.get(e)}function Xa(e){return this.__data__.has(e)}var Za=200;function Ja(e,r){var t=this.__data__;if(t instanceof N){var a=t.__data__;if(!oe||a.length<Za-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new B(a)}return t.set(e,r),this.size=t.size,this}function ee(e){var r=this.__data__=new N(e);this.size=r.size}ee.prototype.clear=Wa;ee.prototype.delete=Ya;ee.prototype.get=qa;ee.prototype.has=Xa;ee.prototype.set=Ja;function Qa(e,r){return e&&ve(r,He(r),e)}function ei(e,r){return e&&ve(r,Ge(r),e)}var at=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Er=at&&typeof module=="object"&&module&&!module.nodeType&&module,ri=Er&&Er.exports===at,Ar=ri?V.Buffer:void 0,_r=Ar?Ar.allocUnsafe:void 0;function ti(e,r){if(r)return e.slice();var t=e.length,a=_r?_r(t):new e.constructor(t);return e.copy(a),a}function ni(e,r){for(var t=-1,a=e==null?0:e.length,n=0,i=[];++t<a;){var u=e[t];r(u,t,e)&&(i[n++]=u)}return i}function it(){return[]}var ai=Object.prototype,ii=ai.propertyIsEnumerable,Sr=Object.getOwnPropertySymbols,oi=Sr?function(e){return e==null?[]:(e=Object(e),ni(Sr(e),function(r){return ii.call(e,r)}))}:it;const Ke=oi;function ui(e,r){return ve(e,Ke(e),r)}var si=Object.getOwnPropertySymbols,ci=si?function(e){for(var r=[];e;)tt(r,Ke(e)),e=ze(e);return r}:it;const ot=ci;function li(e,r){return ve(e,ot(e),r)}function ut(e,r,t){var a=r(e);return ce(e)?a:tt(a,t(e))}function fi(e){return ut(e,He,Ke)}function di(e){return ut(e,Ge,ot)}var pi=Y(V,"DataView");const Re=pi;var hi=Y(V,"Promise");const Pe=hi;var vi=Y(V,"Set");const Le=vi;var Fr="[object Map]",yi="[object Object]",$r="[object Promise]",Or="[object Set]",Ir="[object WeakMap]",wr="[object DataView]",gi=W(Re),mi=W(oe),bi=W(Pe),Ti=W(Le),Ei=W(Me),G=J;(Re&&G(new Re(new ArrayBuffer(1)))!=wr||oe&&G(new oe)!=Fr||Pe&&G(Pe.resolve())!=$r||Le&&G(new Le)!=Or||Me&&G(new Me)!=Ir)&&(G=function(e){var r=J(e),t=r==yi?e.constructor:void 0,a=t?W(t):"";if(a)switch(a){case gi:return wr;case mi:return Fr;case bi:return $r;case Ti:return Or;case Ei:return Ir}return r});const We=G;var Ai=Object.prototype,_i=Ai.hasOwnProperty;function Si(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&_i.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Fi=V.Uint8Array;const jr=Fi;function Ye(e){var r=new e.constructor(e.byteLength);return new jr(r).set(new jr(e)),r}function $i(e,r){var t=r?Ye(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Oi=/\w*$/;function Ii(e){var r=new e.constructor(e.source,Oi.exec(e));return r.lastIndex=e.lastIndex,r}var Cr=pe?pe.prototype:void 0,Mr=Cr?Cr.valueOf:void 0;function wi(e){return Mr?Object(Mr.call(e)):{}}function ji(e,r){var t=r?Ye(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Ci="[object Boolean]",Mi="[object Date]",Ri="[object Map]",Pi="[object Number]",Li="[object RegExp]",Di="[object Set]",Ui="[object String]",Vi="[object Symbol]",Ni="[object ArrayBuffer]",xi="[object DataView]",Bi="[object Float32Array]",Hi="[object Float64Array]",Gi="[object Int8Array]",ki="[object Int16Array]",zi="[object Int32Array]",Ki="[object Uint8Array]",Wi="[object Uint8ClampedArray]",Yi="[object Uint16Array]",qi="[object Uint32Array]";function Xi(e,r,t){var a=e.constructor;switch(r){case Ni:return Ye(e);case Ci:case Mi:return new a(+e);case xi:return $i(e,t);case Bi:case Hi:case Gi:case ki:case zi:case Ki:case Wi:case Yi:case qi:return ji(e,t);case Ri:return new a;case Pi:case Ui:return new a(e);case Li:return Ii(e);case Di:return new a;case Vi:return wi(e)}}function Zi(e){return typeof e.constructor=="function"&&!xe(e)?Jt(ze(e)):{}}var Ji="[object Map]";function Qi(e){return Q(e)&&We(e)==Ji}var Rr=Z&&Z.isMap,eo=Rr?Be(Rr):Qi;const ro=eo;var to="[object Set]";function no(e){return Q(e)&&We(e)==to}var Pr=Z&&Z.isSet,ao=Pr?Be(Pr):no;const io=ao;var oo=1,uo=2,so=4,st="[object Arguments]",co="[object Array]",lo="[object Boolean]",fo="[object Date]",po="[object Error]",ct="[object Function]",ho="[object GeneratorFunction]",vo="[object Map]",yo="[object Number]",lt="[object Object]",go="[object RegExp]",mo="[object Set]",bo="[object String]",To="[object Symbol]",Eo="[object WeakMap]",Ao="[object ArrayBuffer]",_o="[object DataView]",So="[object Float32Array]",Fo="[object Float64Array]",$o="[object Int8Array]",Oo="[object Int16Array]",Io="[object Int32Array]",wo="[object Uint8Array]",jo="[object Uint8ClampedArray]",Co="[object Uint16Array]",Mo="[object Uint32Array]",A={};A[st]=A[co]=A[Ao]=A[_o]=A[lo]=A[fo]=A[So]=A[Fo]=A[$o]=A[Oo]=A[Io]=A[vo]=A[yo]=A[lt]=A[go]=A[mo]=A[bo]=A[To]=A[wo]=A[jo]=A[Co]=A[Mo]=!0;A[po]=A[ct]=A[Eo]=!1;function ae(e,r,t,a,n,i){var u,s=r&oo,v=r&uo,p=r&so;if(t&&(u=n?t(e,a,n,i):t(e)),u!==void 0)return u;if(!se(e))return e;var O=ce(e);if(O){if(u=Si(e),!s)return kr(e,u)}else{var g=We(e),l=g==ct||g==ho;if(Jr(e))return ti(e,s);if(g==lt||g==st||l&&!n){if(u=v||l?{}:Zi(e),!s)return v?li(e,ei(u,e)):ui(e,Qa(u,e))}else{if(!A[g])return n?e:{};u=Xi(e,g,s)}}i||(i=new ee);var $=i.get(e);if($)return $;i.set(e,u),io(e)?e.forEach(function(F){u.add(ae(F,r,t,F,e,i))}):ro(e)&&e.forEach(function(F,S){u.set(S,ae(F,r,t,S,e,i))});var C=p?v?di:fi:v?Ge:He,j=O?void 0:C(e);return en(j||e,function(F,S){j&&(S=F,F=e[S]),Wr(u,S,ae(F,r,t,S,e,i))}),u}var Ro=4;function Lr(e){return ae(e,Ro)}var Po=1,Lo=4;function Do(e){return ae(e,Po|Lo)}function ft(e){return ce(e)?Br(e,xa):Ne(e)?[e]:kr(Ua(Va(e)))}var Uo=function(r){return Vo(r)&&!No(r)};function Vo(e){return!!e&&typeof e=="object"}function No(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Ho(e)}var xo=typeof Symbol=="function"&&Symbol.for,Bo=xo?Symbol.for("react.element"):60103;function Ho(e){return e.$$typeof===Bo}function Go(e){return Array.isArray(e)?[]:{}}function he(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ue(Go(e),e,r):e}function ko(e,r,t){return e.concat(r).map(function(a){return he(a,t)})}function zo(e,r,t){var a={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(n){a[n]=he(e[n],t)}),Object.keys(r).forEach(function(n){!t.isMergeableObject(r[n])||!e[n]?a[n]=he(r[n],t):a[n]=ue(e[n],r[n],t)}),a}function ue(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||ko,t.isMergeableObject=t.isMergeableObject||Uo;var a=Array.isArray(r),n=Array.isArray(e),i=a===n;return i?a?t.arrayMerge(e,r,t):zo(e,r,t):he(r,t)}ue.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(a,n){return ue(a,n,t)},{})};var De=ue,Dr=Array.isArray,Ur=Object.keys,Ko=Object.prototype.hasOwnProperty,Wo=typeof Element<"u";function Ue(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=Dr(e),a=Dr(r),n,i,u;if(t&&a){if(i=e.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!Ue(e[n],r[n]))return!1;return!0}if(t!=a)return!1;var s=e instanceof Date,v=r instanceof Date;if(s!=v)return!1;if(s&&v)return e.getTime()==r.getTime();var p=e instanceof RegExp,O=r instanceof RegExp;if(p!=O)return!1;if(p&&O)return e.toString()==r.toString();var g=Ur(e);if(i=g.length,i!==Ur(r).length)return!1;for(n=i;n--!==0;)if(!Ko.call(r,g[n]))return!1;if(Wo&&e instanceof Element&&r instanceof Element)return e===r;for(n=i;n--!==0;)if(u=g[n],!(u==="_owner"&&e.$$typeof)&&!Ue(e[u],r[u]))return!1;return!0}return e!==e&&r!==r}var Yo=function(r,t){try{return Ue(r,t)}catch(a){if(a.message&&a.message.match(/stack|recursion/i)||a.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",a.name,a.message),!1;throw a}};const x=wt(Yo);var qo=!0;function qe(e,r){if(!qo){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function b(){return b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},b.apply(this,arguments)}function Xo(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function k(e,r){if(e==null)return{};var t={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&(t[n]=e[n]);return t}function Vr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var me=d.createContext(void 0);me.displayName="FormikContext";var hu=me.Provider,Zo=me.Consumer;function Xe(){var e=d.useContext(me);return e||qe(!1),e}var Nr=function(r){return Array.isArray(r)&&r.length===0},M=function(r){return typeof r=="function"},re=function(r){return r!==null&&typeof r=="object"},Jo=function(r){return String(Math.floor(Number(r)))===r},we=function(r){return Object.prototype.toString.call(r)==="[object String]"},Qo=function(r){return d.Children.count(r)===0},je=function(r){return re(r)&&M(r.then)};function w(e,r,t,a){a===void 0&&(a=0);for(var n=ft(r);e&&a<n.length;)e=e[n[a++]];return a!==n.length&&!e||e===void 0?t:e}function D(e,r,t){for(var a=Lr(e),n=a,i=0,u=ft(r);i<u.length-1;i++){var s=u[i],v=w(e,u.slice(0,i+1));if(v&&(re(v)||Array.isArray(v)))n=n[s]=Lr(v);else{var p=u[i+1];n=n[s]=Jo(p)&&Number(p)>=0?[]:{}}}return(i===0?e:n)[u[i]]===t?e:(t===void 0?delete n[u[i]]:n[u[i]]=t,i===0&&t===void 0&&delete a[u[i]],a)}function dt(e,r,t,a){t===void 0&&(t=new WeakMap),a===void 0&&(a={});for(var n=0,i=Object.keys(e);n<i.length;n++){var u=i[n],s=e[u];re(s)?t.get(s)||(t.set(s,!0),a[u]=Array.isArray(s)?[]:{},dt(s,r,t,a[u])):a[u]=r}return a}function eu(e,r){switch(r.type){case"SET_VALUES":return b({},e,{values:r.payload});case"SET_TOUCHED":return b({},e,{touched:r.payload});case"SET_ERRORS":return x(e.errors,r.payload)?e:b({},e,{errors:r.payload});case"SET_STATUS":return b({},e,{status:r.payload});case"SET_ISSUBMITTING":return b({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return b({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return b({},e,{values:D(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return b({},e,{touched:D(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return b({},e,{errors:D(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return b({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return b({},e,{touched:dt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return b({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return b({},e,{isSubmitting:!1});default:return e}}var H={},de={};function vu(e){var r=e.validateOnChange,t=r===void 0?!0:r,a=e.validateOnBlur,n=a===void 0?!0:a,i=e.validateOnMount,u=i===void 0?!1:i,s=e.isInitialValid,v=e.enableReinitialize,p=v===void 0?!1:v,O=e.onSubmit,g=k(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),l=b({validateOnChange:t,validateOnBlur:n,validateOnMount:u,onSubmit:O},g),$=d.useRef(l.initialValues),C=d.useRef(l.initialErrors||H),j=d.useRef(l.initialTouched||de),F=d.useRef(l.initialStatus),S=d.useRef(!1),L=d.useRef({});d.useEffect(function(){return S.current=!0,function(){S.current=!1}},[]);var be=d.useState(0),ht=be[1],le=d.useRef({values:l.initialValues,errors:l.initialErrors||H,touched:l.initialTouched||de,status:l.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),E=le.current,T=d.useCallback(function(o){var c=le.current;le.current=eu(c,o),c!==le.current&&ht(function(f){return f+1})},[]),Ze=d.useCallback(function(o,c){return new Promise(function(f,h){var y=l.validate(o,c);y==null?f(H):je(y)?y.then(function(m){f(m||H)},function(m){h(m)}):f(y)})},[l.validate]),Te=d.useCallback(function(o,c){var f=l.validationSchema,h=M(f)?f(c):f,y=c&&h.validateAt?h.validateAt(c,o):tu(o,h);return new Promise(function(m,I){y.then(function(){m(H)},function(U){U.name==="ValidationError"?m(ru(U)):I(U)})})},[l.validationSchema]),Je=d.useCallback(function(o,c){return new Promise(function(f){return f(L.current[o].validate(c))})},[]),Qe=d.useCallback(function(o){var c=Object.keys(L.current).filter(function(h){return M(L.current[h].validate)}),f=c.length>0?c.map(function(h){return Je(h,w(o,h))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(f).then(function(h){return h.reduce(function(y,m,I){return m==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||m&&(y=D(y,c[I],m)),y},{})})},[Je]),vt=d.useCallback(function(o){return Promise.all([Qe(o),l.validationSchema?Te(o):{},l.validate?Ze(o):{}]).then(function(c){var f=c[0],h=c[1],y=c[2],m=De.all([f,h,y],{arrayMerge:nu});return m})},[l.validate,l.validationSchema,Qe,Ze,Te]),P=R(function(o){return o===void 0&&(o=E.values),T({type:"SET_ISVALIDATING",payload:!0}),vt(o).then(function(c){return S.current&&(T({type:"SET_ISVALIDATING",payload:!1}),T({type:"SET_ERRORS",payload:c})),c})});d.useEffect(function(){u&&S.current===!0&&x($.current,l.initialValues)&&P($.current)},[u,P]);var te=d.useCallback(function(o){var c=o&&o.values?o.values:$.current,f=o&&o.errors?o.errors:C.current?C.current:l.initialErrors||{},h=o&&o.touched?o.touched:j.current?j.current:l.initialTouched||{},y=o&&o.status?o.status:F.current?F.current:l.initialStatus;$.current=c,C.current=f,j.current=h,F.current=y;var m=function(){T({type:"RESET_FORM",payload:{isSubmitting:!!o&&!!o.isSubmitting,errors:f,touched:h,status:y,values:c,isValidating:!!o&&!!o.isValidating,submitCount:o&&o.submitCount&&typeof o.submitCount=="number"?o.submitCount:0}})};if(l.onReset){var I=l.onReset(E.values,cr);je(I)?I.then(m):m()}else m()},[l.initialErrors,l.initialStatus,l.initialTouched]);d.useEffect(function(){S.current===!0&&!x($.current,l.initialValues)&&p&&($.current=l.initialValues,te(),u&&P($.current))},[p,l.initialValues,te,u,P]),d.useEffect(function(){p&&S.current===!0&&!x(C.current,l.initialErrors)&&(C.current=l.initialErrors||H,T({type:"SET_ERRORS",payload:l.initialErrors||H}))},[p,l.initialErrors]),d.useEffect(function(){p&&S.current===!0&&!x(j.current,l.initialTouched)&&(j.current=l.initialTouched||de,T({type:"SET_TOUCHED",payload:l.initialTouched||de}))},[p,l.initialTouched]),d.useEffect(function(){p&&S.current===!0&&!x(F.current,l.initialStatus)&&(F.current=l.initialStatus,T({type:"SET_STATUS",payload:l.initialStatus}))},[p,l.initialStatus,l.initialTouched]);var er=R(function(o){if(L.current[o]&&M(L.current[o].validate)){var c=w(E.values,o),f=L.current[o].validate(c);return je(f)?(T({type:"SET_ISVALIDATING",payload:!0}),f.then(function(h){return h}).then(function(h){T({type:"SET_FIELD_ERROR",payload:{field:o,value:h}}),T({type:"SET_ISVALIDATING",payload:!1})})):(T({type:"SET_FIELD_ERROR",payload:{field:o,value:f}}),Promise.resolve(f))}else if(l.validationSchema)return T({type:"SET_ISVALIDATING",payload:!0}),Te(E.values,o).then(function(h){return h}).then(function(h){T({type:"SET_FIELD_ERROR",payload:{field:o,value:w(h,o)}}),T({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),yt=d.useCallback(function(o,c){var f=c.validate;L.current[o]={validate:f}},[]),gt=d.useCallback(function(o){delete L.current[o]},[]),rr=R(function(o,c){T({type:"SET_TOUCHED",payload:o});var f=c===void 0?n:c;return f?P(E.values):Promise.resolve()}),tr=d.useCallback(function(o){T({type:"SET_ERRORS",payload:o})},[]),nr=R(function(o,c){var f=M(o)?o(E.values):o;T({type:"SET_VALUES",payload:f});var h=c===void 0?t:c;return h?P(f):Promise.resolve()}),fe=d.useCallback(function(o,c){T({type:"SET_FIELD_ERROR",payload:{field:o,value:c}})},[]),q=R(function(o,c,f){T({type:"SET_FIELD_VALUE",payload:{field:o,value:c}});var h=f===void 0?t:f;return h?P(D(E.values,o,c)):Promise.resolve()}),ar=d.useCallback(function(o,c){var f=c,h=o,y;if(!we(o)){o.persist&&o.persist();var m=o.target?o.target:o.currentTarget,I=m.type,U=m.name,Fe=m.id,$e=m.value,$t=m.checked,du=m.outerHTML,lr=m.options,Ot=m.multiple;f=c||U||Fe,h=/number|range/.test(I)?(y=parseFloat($e),isNaN(y)?"":y):/checkbox/.test(I)?iu(w(E.values,f),$t,$e):lr&&Ot?au(lr):$e}f&&q(f,h)},[q,E.values]),Ee=R(function(o){if(we(o))return function(c){return ar(c,o)};ar(o)}),X=R(function(o,c,f){c===void 0&&(c=!0),T({type:"SET_FIELD_TOUCHED",payload:{field:o,value:c}});var h=f===void 0?n:f;return h?P(E.values):Promise.resolve()}),ir=d.useCallback(function(o,c){o.persist&&o.persist();var f=o.target,h=f.name,y=f.id,m=f.outerHTML,I=c||h||y;X(I,!0)},[X]),Ae=R(function(o){if(we(o))return function(c){return ir(c,o)};ir(o)}),or=d.useCallback(function(o){M(o)?T({type:"SET_FORMIK_STATE",payload:o}):T({type:"SET_FORMIK_STATE",payload:function(){return o}})},[]),ur=d.useCallback(function(o){T({type:"SET_STATUS",payload:o})},[]),sr=d.useCallback(function(o){T({type:"SET_ISSUBMITTING",payload:o})},[]),_e=R(function(){return T({type:"SUBMIT_ATTEMPT"}),P().then(function(o){var c=o instanceof Error,f=!c&&Object.keys(o).length===0;if(f){var h;try{if(h=bt(),h===void 0)return}catch(y){throw y}return Promise.resolve(h).then(function(y){return S.current&&T({type:"SUBMIT_SUCCESS"}),y}).catch(function(y){if(S.current)throw T({type:"SUBMIT_FAILURE"}),y})}else if(S.current&&(T({type:"SUBMIT_FAILURE"}),c))throw o})}),mt=R(function(o){o&&o.preventDefault&&M(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&M(o.stopPropagation)&&o.stopPropagation(),_e().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),cr={resetForm:te,validateForm:P,validateField:er,setErrors:tr,setFieldError:fe,setFieldTouched:X,setFieldValue:q,setStatus:ur,setSubmitting:sr,setTouched:rr,setValues:nr,setFormikState:or,submitForm:_e},bt=R(function(){return O(E.values,cr)}),Tt=R(function(o){o&&o.preventDefault&&M(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&M(o.stopPropagation)&&o.stopPropagation(),te()}),Et=d.useCallback(function(o){return{value:w(E.values,o),error:w(E.errors,o),touched:!!w(E.touched,o),initialValue:w($.current,o),initialTouched:!!w(j.current,o),initialError:w(C.current,o)}},[E.errors,E.touched,E.values]),At=d.useCallback(function(o){return{setValue:function(f,h){return q(o,f,h)},setTouched:function(f,h){return X(o,f,h)},setError:function(f){return fe(o,f)}}},[q,X,fe]),_t=d.useCallback(function(o){var c=re(o),f=c?o.name:o,h=w(E.values,f),y={name:f,value:h,onChange:Ee,onBlur:Ae};if(c){var m=o.type,I=o.value,U=o.as,Fe=o.multiple;m==="checkbox"?I===void 0?y.checked=!!h:(y.checked=!!(Array.isArray(h)&&~h.indexOf(I)),y.value=I):m==="radio"?(y.checked=h===I,y.value=I):U==="select"&&Fe&&(y.value=y.value||[],y.multiple=!0)}return y},[Ae,Ee,E.values]),Se=d.useMemo(function(){return!x($.current,E.values)},[$.current,E.values]),St=d.useMemo(function(){return typeof s<"u"?Se?E.errors&&Object.keys(E.errors).length===0:s!==!1&&M(s)?s(l):s:E.errors&&Object.keys(E.errors).length===0},[s,Se,E.errors,l]),Ft=b({},E,{initialValues:$.current,initialErrors:C.current,initialTouched:j.current,initialStatus:F.current,handleBlur:Ae,handleChange:Ee,handleReset:Tt,handleSubmit:mt,resetForm:te,setErrors:tr,setFormikState:or,setFieldTouched:X,setFieldValue:q,setFieldError:fe,setStatus:ur,setSubmitting:sr,setTouched:rr,setValues:nr,submitForm:_e,validateForm:P,validateField:er,isValid:St,dirty:Se,unregisterField:gt,registerField:yt,getFieldProps:_t,getFieldMeta:Et,getFieldHelpers:At,validateOnBlur:n,validateOnChange:t,validateOnMount:u});return Ft}function ru(e){var r={};if(e.inner){if(e.inner.length===0)return D(r,e.path,e.message);for(var n=e.inner,t=Array.isArray(n),a=0,n=t?n:n[Symbol.iterator]();;){var i;if(t){if(a>=n.length)break;i=n[a++]}else{if(a=n.next(),a.done)break;i=a.value}var u=i;w(r,u.path)||(r=D(r,u.path,u.message))}}return r}function tu(e,r,t,a){t===void 0&&(t=!1);var n=Ve(e);return r[t?"validateSync":"validate"](n,{abortEarly:!1,context:a||n})}function Ve(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=String(t);Array.isArray(e[a])===!0?r[a]=e[a].map(function(n){return Array.isArray(n)===!0||Tr(n)?Ve(n):n!==""?n:void 0}):Tr(e[a])?r[a]=Ve(e[a]):r[a]=e[a]!==""?e[a]:void 0}return r}function nu(e,r,t){var a=e.slice();return r.forEach(function(i,u){if(typeof a[u]>"u"){var s=t.clone!==!1,v=s&&t.isMergeableObject(i);a[u]=v?De(Array.isArray(i)?[]:{},i,t):i}else t.isMergeableObject(i)?a[u]=De(e[u],i,t):e.indexOf(i)===-1&&a.push(i)}),a}function au(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function iu(e,r,t){if(typeof e=="boolean")return!!r;var a=[],n=!1,i=-1;if(Array.isArray(e))a=e,i=e.indexOf(t),n=i>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!n?a.concat(t):n?a.slice(0,i).concat(a.slice(i+1)):a}var ou=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function R(e){var r=d.useRef(e);return ou(function(){r.current=e}),d.useCallback(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return r.current.apply(void 0,a)},[])}function yu(e){var r=Xe(),t=r.getFieldProps,a=r.getFieldMeta,n=r.getFieldHelpers,i=r.registerField,u=r.unregisterField,s=re(e),v=s?e:{name:e},p=v.name,O=v.validate;d.useEffect(function(){return p&&i(p,{validate:O}),function(){p&&u(p)}},[i,u,p,O]),p||qe(!1);var g=d.useMemo(function(){return n(p)},[n,p]);return[t(v),a(p),g]}function gu(e){var r=e.validate,t=e.name,a=e.render,n=e.children,i=e.as,u=e.component,s=k(e,["validate","name","render","children","as","component"]),v=Xe(),p=k(v,["validate","validationSchema"]),O=p.registerField,g=p.unregisterField;d.useEffect(function(){return O(t,{validate:r}),function(){g(t)}},[O,g,t,r]);var l=p.getFieldProps(b({name:t},s)),$=p.getFieldMeta(t),C={field:l,form:p};if(a)return a(b({},C,{meta:$}));if(M(n))return n(b({},C,{meta:$}));if(u){if(typeof u=="string"){var j=s.innerRef,F=k(s,["innerRef"]);return d.createElement(u,b({ref:j},l,F),n)}return d.createElement(u,b({field:l,form:p},s),n)}var S=i||"input";if(typeof S=="string"){var L=s.innerRef,be=k(s,["innerRef"]);return d.createElement(S,b({ref:L},l,be),n)}return d.createElement(S,b({},l,s),n)}var uu=d.forwardRef(function(e,r){var t=e.action,a=k(e,["action"]),n=t??"#",i=Xe(),u=i.handleReset,s=i.handleSubmit;return d.createElement("form",b({onSubmit:s,ref:r,onReset:u,action:n},a))});uu.displayName="Form";function su(e){var r=function(n){return d.createElement(Zo,null,function(i){return i||qe(!1),d.createElement(e,b({},n,{formik:i}))})},t=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return r.WrappedComponent=e,r.displayName="FormikConnect("+t+")",jt(r,e)}var cu=function(r,t,a){var n=K(r),i=n[t];return n.splice(t,1),n.splice(a,0,i),n},lu=function(r,t,a){var n=K(r),i=n[t];return n[t]=n[a],n[a]=i,n},Ce=function(r,t,a){var n=K(r);return n.splice(t,0,a),n},fu=function(r,t,a){var n=K(r);return n[t]=a,n},K=function(r){if(r){if(Array.isArray(r))return[].concat(r);var t=Object.keys(r).map(function(a){return parseInt(a)}).reduce(function(a,n){return n>a?n:a},0);return Array.from(b({},r,{length:t+1}))}else return[]},xr=function(r,t){var a=typeof r=="function"?r:t;return function(n){if(Array.isArray(n)||re(n)){var i=K(n);return a(i)}return n}},pt=function(e){Xo(r,e);function r(a){var n;return n=e.call(this,a)||this,n.updateArrayField=function(i,u,s){var v=n.props,p=v.name,O=v.formik.setFormikState;O(function(g){var l=xr(s,i),$=xr(u,i),C=D(g.values,p,i(w(g.values,p))),j=s?l(w(g.errors,p)):void 0,F=u?$(w(g.touched,p)):void 0;return Nr(j)&&(j=void 0),Nr(F)&&(F=void 0),b({},g,{values:C,errors:s?D(g.errors,p,j):g.errors,touched:u?D(g.touched,p,F):g.touched})})},n.push=function(i){return n.updateArrayField(function(u){return[].concat(K(u),[Do(i)])},!1,!1)},n.handlePush=function(i){return function(){return n.push(i)}},n.swap=function(i,u){return n.updateArrayField(function(s){return lu(s,i,u)},!0,!0)},n.handleSwap=function(i,u){return function(){return n.swap(i,u)}},n.move=function(i,u){return n.updateArrayField(function(s){return cu(s,i,u)},!0,!0)},n.handleMove=function(i,u){return function(){return n.move(i,u)}},n.insert=function(i,u){return n.updateArrayField(function(s){return Ce(s,i,u)},function(s){return Ce(s,i,null)},function(s){return Ce(s,i,null)})},n.handleInsert=function(i,u){return function(){return n.insert(i,u)}},n.replace=function(i,u){return n.updateArrayField(function(s){return fu(s,i,u)},!1,!1)},n.handleReplace=function(i,u){return function(){return n.replace(i,u)}},n.unshift=function(i){var u=-1;return n.updateArrayField(function(s){var v=s?[i].concat(s):[i];return u=v.length,v},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),u},n.handleUnshift=function(i){return function(){return n.unshift(i)}},n.handleRemove=function(i){return function(){return n.remove(i)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(Vr(n)),n.pop=n.pop.bind(Vr(n)),n}var t=r.prototype;return t.componentDidUpdate=function(n){this.props.validateOnChange&&this.props.formik.validateOnChange&&!x(w(n.formik.values,n.name),w(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},t.remove=function(n){var i;return this.updateArrayField(function(u){var s=u?K(u):[];return i||(i=s[n]),M(s.splice)&&s.splice(n,1),M(s.every)&&s.every(function(v){return v===void 0})?[]:s},!0,!0),i},t.pop=function(){var n;return this.updateArrayField(function(i){var u=i.slice();return n||(n=u&&u.pop&&u.pop()),u},!0,!0),n},t.render=function(){var n={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},i=this.props,u=i.component,s=i.render,v=i.children,p=i.name,O=i.formik,g=k(O,["validate","validationSchema"]),l=b({},n,{form:g,name:p});return u?d.createElement(u,l):s?s(l):v?typeof v=="function"?v(l):Qo(v)?null:d.Children.only(v):null},r}(d.Component);pt.defaultProps={validateOnChange:!0};var mu=su(pt);export{gu as F,mu as a,yu as b,hu as c,uu as d,vu as u};
