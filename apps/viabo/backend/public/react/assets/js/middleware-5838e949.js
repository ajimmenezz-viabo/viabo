import{r as T,b8 as C,E as A}from"./index-68e3b10c.js";const R=t=>{let o;const r=new Set,c=(l,h)=>{const n=typeof l=="function"?l(o):l;if(!Object.is(n,o)){const d=o;o=h??typeof n!="object"?n:Object.assign({},o,n),r.forEach(v=>v(o,d))}},e=()=>o,s={setState:c,getState:e,subscribe:l=>(r.add(l),()=>r.delete(l)),destroy:()=>{({BASE_URL:"/react/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return o=t(c,e,s),s},I=t=>t?R(t):R;var g={},j={get exports(){return g},set exports(t){g=t}},x={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=T,P=C;function M(t,o){return t===o&&(t!==0||1/t===1/o)||t!==t&&o!==o}var U=typeof Object.is=="function"?Object.is:M,V=P.useSyncExternalStore,N=O.useRef,k=O.useEffect,L=O.useMemo,J=O.useDebugValue;x.useSyncExternalStoreWithSelector=function(t,o,r,c,e){var S=N(null);if(S.current===null){var E={hasValue:!1,value:null};S.current=E}else E=S.current;S=L(function(){function l(a){if(!h){if(h=!0,n=a,a=c(a),e!==void 0&&E.hasValue){var p=E.value;if(e(p,a))return d=p}return d=a}if(p=d,U(n,a))return p;var u=c(a);return e!==void 0&&e(p,u)?p:(n=a,d=u)}var h=!1,n,d,v=r===void 0?null:r;return[function(){return l(o())},v===null?void 0:function(){return l(v())}]},[o,r,c,e]);var s=V(t,S[0],S[1]);return k(function(){E.hasValue=!0,E.value=s},[s]),J(s),s};(function(t){t.exports=x})(j);const B=A(g),{useSyncExternalStoreWithSelector:z}=B;function F(t,o=t.getState,r){const c=z(t.subscribe,t.getState,t.getServerState||t.getState,o,r);return T.useDebugValue(c),c}const w=t=>{({BASE_URL:"/react/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const o=typeof t=="function"?I(t):t,r=(c,e)=>F(o,c,e);return Object.assign(r,o),r},q=t=>t?w(t):w,_=new Map,m=t=>{const o=_.get(t);return o?Object.fromEntries(Object.entries(o.stores).map(([r,c])=>[r,c.getState()])):{}},W=(t,o,r)=>{if(t===void 0)return{type:"untracked",connection:o.connect(r)};const c=_.get(r.name);if(c)return{type:"tracked",store:t,...c};const e={connection:o.connect(r),stores:{}};return _.set(r.name,e),{type:"tracked",store:t,...e}},X=(t,o={})=>(r,c,e)=>{const{enabled:S,anonymousActionType:E,store:s,...l}=o;let h;try{h=(S??({BASE_URL:"/react/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!h)return({BASE_URL:"/react/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&S&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),t(r,c,e);const{connection:n,...d}=W(s,h,l);let v=!0;e.setState=(u,y,i)=>{const f=r(u,y);if(!v)return f;const D=i===void 0?{type:E||"anonymous"}:typeof i=="string"?{type:i}:i;return s===void 0?(n==null||n.send(D,c()),f):(n==null||n.send({...D,type:`${s}/${D.type}`},{...m(l.name),[s]:e.getState()}),f)};const a=(...u)=>{const y=v;v=!1,r(...u),v=y},p=t(e.setState,c,e);if(d.type==="untracked"?n==null||n.init(p):(d.stores[d.store]=e,n==null||n.init(Object.fromEntries(Object.entries(d.stores).map(([u,y])=>[u,u===d.store?p:y.getState()])))),e.dispatchFromDevtools&&typeof e.dispatch=="function"){let u=!1;const y=e.dispatch;e.dispatch=(...i)=>{({BASE_URL:"/react/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&i[0].type==="__setState"&&!u&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),u=!0),y(...i)}}return n.subscribe(u=>{var y;switch(u.type){case"ACTION":if(typeof u.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return b(u.payload,i=>{if(i.type==="__setState"){if(s===void 0){a(i.state);return}Object.keys(i.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const f=i.state[s];if(f==null)return;JSON.stringify(e.getState())!==JSON.stringify(f)&&a(f);return}e.dispatchFromDevtools&&typeof e.dispatch=="function"&&e.dispatch(i)});case"DISPATCH":switch(u.payload.type){case"RESET":return a(p),s===void 0?n==null?void 0:n.init(e.getState()):n==null?void 0:n.init(m(l.name));case"COMMIT":if(s===void 0){n==null||n.init(e.getState());return}return n==null?void 0:n.init(m(l.name));case"ROLLBACK":return b(u.state,i=>{if(s===void 0){a(i),n==null||n.init(e.getState());return}a(i[s]),n==null||n.init(m(l.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return b(u.state,i=>{if(s===void 0){a(i);return}JSON.stringify(e.getState())!==JSON.stringify(i[s])&&a(i[s])});case"IMPORT_STATE":{const{nextLiftedState:i}=u.payload,f=(y=i.computedStates.slice(-1)[0])==null?void 0:y.state;if(!f)return;a(s===void 0?f:f[s]),n==null||n.send(null,i);return}case"PAUSE_RECORDING":return v=!v}return}}),p},G=X,b=(t,o)=>{let r;try{r=JSON.parse(t)}catch(c){console.error("[zustand devtools middleware] Could not parse the received json",c)}r!==void 0&&o(r)};export{q as c,G as d};