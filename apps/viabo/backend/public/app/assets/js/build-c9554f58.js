import{ai as i}from"./index-4598388a.js";import{g as m}from"./build-b76ffe54.js";import{a as c,b as f}from"./build-074be596.js";import{f as g}from"./build-2e665ca4.js";import{C as w}from"./build-a635d66e.js";const p=(t,n)=>{var e,s;const o=(e=t==null?void 0:t.processorTypes)==null?void 0:e.find(r=>(r==null?void 0:r.value)==="1"),a=(s=t==null?void 0:t.processorTypes)==null?void 0:s.find(r=>(r==null?void 0:r.value)==="2");return{cardId:n==null?void 0:n.id,amount:t==null?void 0:t.amount.toString(),spei:o?n==null?void 0:n.SPEI:"",payCash:a?"1":"",emails:t==null?void 0:t.emails}},C=t=>{const n=m(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);if(n)return{reference:n==null?void 0:n.referenceNumber};throw new Error("Algo fallo al obtener la información")},b=t=>{const n=m(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return(n==null?void 0:n.map(a=>{var e;return{id:a==null?void 0:a.id,name:(e=a==null?void 0:a.name)==null?void 0:e.toUpperCase()}}))||[]},h=t=>{const n=m(t==null?void 0:t.ciphertext,t==null?void 0:t.iv),o=parseFloat((n==null?void 0:n.balance)===""?"0":n==null?void 0:n.balance.replace(/,/g,""));if(n)return{id:n==null?void 0:n.cardId,SPEI:n==null?void 0:n.spei,balance:o,balanceFormatted:g(o),cardNumberHidden:"GLOBAL"};throw new Error("Algo fallo al obtenerla informacion")},x=async()=>{const{data:t}=await i.get("/api/payment-processors/of/commerce");return b(t)},E=async t=>{const{data:n}=await i.get(`/api/enabled-cards/commerce?paymentProcessorId=${t}`);return c(n)},F=async(t,n)=>{const{data:o}=await i.get(`/api/card/information/${t}`,{signal:n});return f(o)},O=async t=>(await i.put(`/api/card/${t==null?void 0:t.id}/block/${t!=null&&t.cardON?"unblocked":"blocked"}`),t),$=async t=>(await i.post("/api/card/transactions",t==null?void 0:t.data),t),L=async(t,n,o,a)=>{const e=new URL("/api/card/movements",window.location.origin);e.searchParams.set("cardId",t),e.searchParams.set("startDate",n),e.searchParams.set("endDate",o);const{data:s}=await i.get(e.href,{timeout:3e4,signal:a});return w(s)},M=async(t,n)=>{const{data:o}=await i.get(`/api/main-card/information?paymentProcessorId=${t}`,{signal:n});return h(o)},S=async t=>{const{data:n}=await i.post("/api/funding-order/new",t);return C(n)};export{p as C,F as a,L as b,x as c,M as d,O as e,S as f,E as g,$ as t};
