import{db as o,aI as u,dc as l,r as g,dd as h}from"./build-dfe151cb.js";function C(r,a,n){const[t,c={}]=o(r,a,n),e=u({context:c.context}),s=e.getQueryCache();return l(g.useCallback(i=>s.subscribe(h.batchCalls(i)),[s]),()=>e.isFetching(t),()=>e.isFetching(t))}export{C as u};