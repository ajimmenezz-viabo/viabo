import{aQ as o,a3 as u,aR as l,r as g,aS as h}from"./build-a914105e.js";function C(a,r,n){const[t,c={}]=o(a,r,n),e=u({context:c.context}),s=e.getQueryCache();return l(g.useCallback(i=>s.subscribe(h.batchCalls(i)),[s]),()=>e.isFetching(t),()=>e.isFetching(t))}export{C as u};