import{e as o,aF as p,S as R,s as v,aG as M,d as f,aH as m,u as y}from"./index-a5b9a34e.js";import{u as S,s as g}from"./integracion-tecnologica-ba5f7d0c.js";let h=0;function E(n){const[t,e]=o.useState(n),r=n||t;return o.useEffect(()=>{t==null&&(h+=1,e(`mui-${h}`))},[t]),r}const d=p["useId"];function w(n){if(d!==void 0){const t=d();return n??t}return E(n)}class x extends R{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;const r=this.options;this.options=this.client.defaultMutationOptions(t),v(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(e=this.currentMutation)==null||e.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const e={listeners:!0};t.type==="success"?e.onSuccess=!0:t.type==="error"&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:M(),e={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){f.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var e,r,a,s;(e=(r=this.mutateOptions).onSuccess)==null||e.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(a=(s=this.mutateOptions).onSettled)==null||a.call(s,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var u,l,i,c;(u=(l=this.mutateOptions).onError)==null||u.call(l,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(i=(c=this.mutateOptions).onSettled)==null||i.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(b=>{b(this.currentResult)})})}}function U(n,t,e){const r=m(n,t,e),a=y({context:r.context}),[s]=o.useState(()=>new x(a,r));o.useEffect(()=>{s.setOptions(r)},[s,r]);const u=S(o.useCallback(i=>s.subscribe(f.batchCalls(i)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),l=o.useCallback((i,c)=>{s.mutate(i,c).catch(C)},[s]);if(u.error&&g(s.options.useErrorBoundary,[u.error]))throw u.error;return{...u,mutate:l,mutateAsync:u.mutate}}function C(){}export{w as a,U as u};
