import{a8 as j,_ as P,a9 as $,aa as k,ab as x,ac as V,ad as q,ae as _,af as M,ag as W,ah as H,ai as S,aj as Y,Q as b,U as z,ak as G,S as L}from"./index-3c15f187.js";import{a as J,g as X,u as Z,b as ee}from"./CommerceRepository-cb9bcdbe.js";import{C as te}from"./commerceKeys-73898a6d.js";import{g as B}from"./CommerceRegister-2b274463.js";var re=function(u){j(a,u);function a(n,t){var e;return e=u.call(this)||this,e.client=n,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var s=a.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),w(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return E(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return E(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(t,e){var i=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();var c=this.hasListeners();c&&A(this.currentQuery,r,this.options,i)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();var o=this.computeRefetchInterval();c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)},s.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),i=this.client.getQueryCache().build(this.client,e);return this.createResult(i,e)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(t,e){var i=this,r={},c=function(h){i.trackedProps.includes(h)||i.trackedProps.push(h)};return Object.keys(t).forEach(function(o){Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:function(){return c(o),t[o]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),r},s.getNextResult=function(t){var e=this;return new Promise(function(i,r){var c=e.subscribe(function(o){o.isFetching||(c(),o.isError&&(t!=null&&t.throwOnError)?r(o.error):i(o))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(t){return this.fetch(P({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},s.fetchOptimistic=function(t){var e=this,i=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,i);return r.fetch().then(function(){return e.createResult(r,i)})},s.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},s.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch($)),e},s.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(k||this.currentResult.isStale||!x(this.options.staleTime))){var e=V(this.currentResult.dataUpdatedAt,this.options.staleTime),i=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},i)}},s.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},s.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(k||this.options.enabled===!1||!x(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||q.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},s.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},s.createResult=function(t,e){var i=this.currentQuery,r=this.options,c=this.currentResult,o=this.currentResultState,h=this.currentResultOptions,f=t!==i,p=f?t.state:this.currentQueryInitialState,R=f?this.currentResult:this.previousQueryResult,l=t.state,m=l.dataUpdatedAt,C=l.error,I=l.errorUpdatedAt,Q=l.isFetching,d=l.status,T=!1,F=!1,v;if(e.optimisticResults){var U=this.hasListeners(),D=!U&&w(t,e),N=U&&A(t,i,e,r);(D||N)&&(Q=!0,m||(d="loading"))}if(e.keepPreviousData&&!l.dataUpdateCount&&(R!=null&&R.isSuccess)&&d!=="error")v=R.data,m=R.dataUpdatedAt,d=R.status,T=!0;else if(e.select&&typeof l.data<"u")if(c&&l.data===(o==null?void 0:o.data)&&e.select===this.selectFn)v=this.selectResult;else try{this.selectFn=e.select,v=e.select(l.data),e.structuralSharing!==!1&&(v=_(c==null?void 0:c.data,v)),this.selectResult=v,this.selectError=null}catch(g){M().error(g),this.selectError=g}else v=l.data;if(typeof e.placeholderData<"u"&&typeof v>"u"&&(d==="loading"||d==="idle")){var y;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(h==null?void 0:h.placeholderData))y=c.data;else if(y=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof y<"u")try{y=e.select(y),e.structuralSharing!==!1&&(y=_(c==null?void 0:c.data,y)),this.selectError=null}catch(g){M().error(g),this.selectError=g}typeof y<"u"&&(d="success",v=y,F=!0)}this.selectError&&(C=this.selectError,v=this.selectResult,I=Date.now(),d="error");var K={status:d,isLoading:d==="loading",isSuccess:d==="success",isError:d==="error",isIdle:d==="idle",data:v,dataUpdatedAt:m,error:C,errorUpdatedAt:I,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>p.dataUpdateCount||l.errorUpdateCount>p.errorUpdateCount,isFetching:Q,isRefetching:Q&&d!=="loading",isLoadingError:d==="error"&&l.dataUpdatedAt===0,isPlaceholderData:F,isPreviousData:T,isRefetchError:d==="error"&&l.dataUpdatedAt!==0,isStale:O(t,e),refetch:this.refetch,remove:this.remove};return K},s.shouldNotifyListeners=function(t,e){if(!e)return!0;var i=this.options,r=i.notifyOnChangeProps,c=i.notifyOnChangePropsExclusions;if(!r&&!c||r==="tracked"&&!this.trackedProps.length)return!0;var o=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(h){var f=h,p=t[f]!==e[f],R=o==null?void 0:o.some(function(m){return m===h}),l=c==null?void 0:c.some(function(m){return m===h});return p&&!l&&(!o||R)})},s.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!W(this.currentResult,e)){var i={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(i.listeners=!0),this.notify(P({},i,t))}},s.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},s.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!H(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},s.notify=function(t){var e=this;S.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(i){i(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},a}(Y);function se(u,a){return a.enabled!==!1&&!u.state.dataUpdatedAt&&!(u.state.status==="error"&&a.retryOnMount===!1)}function w(u,a){return se(u,a)||u.state.dataUpdatedAt>0&&E(u,a,a.refetchOnMount)}function E(u,a,s){if(a.enabled!==!1){var n=typeof s=="function"?s(u):s;return n==="always"||n!==!1&&O(u,a)}return!1}function A(u,a,s,n){return s.enabled!==!1&&(u!==a||n.enabled===!1)&&(!s.suspense||u.state.status!=="error")&&O(u,s)}function O(u,a){return u.isStaleByTime(a.staleTime)}function ne(){var u=!1;return{clearReset:function(){u=!1},reset:function(){u=!0},isReset:function(){return u}}}var ie=b.createContext(ne()),ue=function(){return b.useContext(ie)};function ae(u,a){var s=b.useRef(!1),n=b.useState(0),t=n[1],e=z(),i=ue(),r=e.defaultQueryObserverOptions(u);r.optimisticResults=!0,r.onError&&(r.onError=S.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=S.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=S.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(i.isReset()||(r.retryOnMount=!1));var c=b.useState(function(){return new a(e,r)}),o=c[0],h=o.getOptimisticResult(r);if(b.useEffect(function(){s.current=!0,i.clearReset();var f=o.subscribe(S.batchCalls(function(){s.current&&t(function(p){return p+1})}));return o.updateResult(),function(){s.current=!1,f()}},[i,o]),b.useEffect(function(){o.setOptions(r,{listeners:!1})},[r,o]),r.suspense&&h.isLoading)throw o.fetchOptimistic(r).then(function(f){var p=f.data;r.onSuccess==null||r.onSuccess(p),r.onSettled==null||r.onSettled(p,null)}).catch(function(f){i.clearReset(),r.onError==null||r.onError(f),r.onSettled==null||r.onSettled(void 0,f)});if(h.isError&&!i.isReset()&&!h.isFetching&&J(r.suspense,r.useErrorBoundary,[h.error,o.getCurrentQuery()]))throw h.error;return r.notifyOnChangeProps==="tracked"&&(h=o.trackResult(h,r)),h}function oe(u,a,s){var n=G(u,a,s);return ae(n,re)}const fe=(u,a={})=>{const{enqueueSnackbar:s}=L();return oe([te.TOKEN_COMMERCE],()=>X(u),{staleTime:60*5e3,onError:n=>{const t=B(n,"😟 Error al obtener el comercio");s(t,{variant:"error",autoHideDuration:5e3})},...a})},ve=(u={})=>{const{enqueueSnackbar:a}=L();return Z({mutationFn:ee,onSuccess:()=>{a("Código Enviado!",{variant:"success"})},onError:s=>{const n=B(s,"No se puede enviar el código");a(n,{variant:(s==null?void 0:s.status)===500?"error":"warning",autoHideDuration:5e3})},...u})};export{fe as a,ve as u};
