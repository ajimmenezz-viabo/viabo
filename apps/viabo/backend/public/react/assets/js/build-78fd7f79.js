import{ag as r}from"./index-3809032b.js";import{a as m}from"./build-7637d2c3.js";import{a as c,b as f}from"./build-8fbeaa5d.js";import{f as g}from"./build-566d20b3.js";import{C as w}from"./build-5af041c1.js";const P=(t,a)=>{var e,s;const n=(e=t==null?void 0:t.processorTypes)==null?void 0:e.find(i=>(i==null?void 0:i.value)==="1"),o=(s=t==null?void 0:t.processorTypes)==null?void 0:s.find(i=>(i==null?void 0:i.value)==="2");return{cardId:a==null?void 0:a.id,amount:t==null?void 0:t.amount.toString(),spei:n?a==null?void 0:a.SPEI:"",payCash:o?"1":"",emails:t==null?void 0:t.emails}},C=t=>{const a=m(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);if(a)return{reference:a==null?void 0:a.referenceNumber};throw new Error("Algo fallo al obtener la información")},b=t=>{const a=m(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return(a==null?void 0:a.map(o=>{var e;return{id:o==null?void 0:o.id,name:(e=o==null?void 0:o.name)==null?void 0:e.toUpperCase()}}))||[]},h=t=>{const a=m(t==null?void 0:t.ciphertext,t==null?void 0:t.iv),n=parseFloat((a==null?void 0:a.balance)===""?"0":a==null?void 0:a.balance.replace(/,/g,""));if(a)return{id:a==null?void 0:a.cardId,SPEI:a==null?void 0:a.spei,balance:n,balanceFormatted:g(n),cardNumberHidden:"GLOBAL"};throw new Error("Algo fallo al obtenerla informacion")},d=async()=>{const{data:t}=await r.get("/api/payment-processors/of/commerce");return b(t)},x=async t=>{const{data:a}=await r.get(`/api/enabled-cards/commerce?paymentProcessorId=${t}`);return c(a)},E=async(t,a)=>{const{data:n}=await r.get(`/api/card/information/${t}`,{signal:a});return f(n)},F=async t=>(await r.put(`/api/card/${t==null?void 0:t.id}/block/${t!=null&&t.cardON?"unblocked":"blocked"}`),t),O=async t=>(await r.post("/api/card/transactions",t==null?void 0:t.data),t),$=async(t,a,n,o)=>{const e=new URL("/api/card/movements",window.location.origin);e.searchParams.set("cardId",t),e.searchParams.set("startDate",a),e.searchParams.set("endDate",n);const{data:s}=await r.get(e.href,{timeout:3e4,signal:o});return w(s)},k=async(t,a)=>{const{data:n}=await r.get(`/api/main-card/information?paymentProcessorId=${t}`,{signal:a});return h(n)},L=async t=>{const{data:a}=await r.post("/api/card/send/spei-key",t);return a},M=async t=>{const{data:a}=await r.post("/api/funding-order/new",t);return C(a)};export{P as C,E as a,$ as b,d as c,k as d,F as e,M as f,x as g,L as s,O as t};
