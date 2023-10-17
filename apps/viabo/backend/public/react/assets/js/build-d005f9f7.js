import{a8 as e}from"./index-1e831042.js";import{g as i}from"./build-c813b1a2.js";import{a as c,b as C}from"./build-1a4a1a73.js";import{f}from"./build-61e6e28b.js";import{C as g}from"./build-9df66b67.js";const h={CARDS_COMMERCE_LIST:"cardsCommerce",CARD_INFO:"cardInfo",CARD_MOVEMENTS:"cardMovements",MAIN_CARD:"mainCard",TRANSIT_BALANCE:"transitBalance",PAYMENT_PROCESSORS:"paymentProcessors"},O=(t,n)=>{var s,m;const a=(s=t==null?void 0:t.processorTypes)==null?void 0:s.find(r=>(r==null?void 0:r.value)==="1"),o=(m=t==null?void 0:t.processorTypes)==null?void 0:m.find(r=>(r==null?void 0:r.value)==="2");return{cardId:n==null?void 0:n.id,amount:t==null?void 0:t.amount.toString(),spei:a?n==null?void 0:n.SPEI:"",payCash:o?"1":"",emails:t==null?void 0:t.emails}},A=t=>{const n=i(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);if(n)return{reference:n==null?void 0:n.referenceNumber};throw new Error("Algo fallo al obtener la información")},I=t=>{const n=i(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);return(n==null?void 0:n.map(o=>{var s;return{id:o==null?void 0:o.id,name:(s=o==null?void 0:o.name)==null?void 0:s.toUpperCase()}}))||[]},b=t=>{const n=i(t==null?void 0:t.ciphertext,t==null?void 0:t.iv),a=parseFloat((n==null?void 0:n.balance)===""?"0":n==null?void 0:n.balance.replace(/,/g,""));if(n)return{id:n==null?void 0:n.cardId,SPEI:n==null?void 0:n.spei,balance:a,balanceFormatted:f(a),cardNumberHidden:"GLOBAL"};throw new Error("Algo fallo al obtenerla informacion")},d=async()=>{const{data:t}=await e.get("/api/payment-processors/of/commerce");return I(t)},u=async t=>{const{data:n}=await e.get(`/api/enabled-cards/commerce?paymentProcessorId=${t}`);return c(n)},R=async(t,n)=>{const{data:a}=await e.get(`/api/card/information/${t}`,{signal:n});return C(a)},l=async t=>(await e.put(`/api/card/${t==null?void 0:t.id}/block/${t!=null&&t.cardON?"unblocked":"blocked"}`),t),N=async t=>(await e.post("/api/card/transactions",t==null?void 0:t.data),t),P=async(t,n,a,o)=>{const{data:s}=await e.get(`/api/card/${t}/movements/${n}/to/${a}`,{timeout:3e4,signal:o});return g(s)},_=async(t,n)=>{const{data:a}=await e.get(`/api/main-card/information?paymentProcessorId=${t}`,{signal:n});return b(a)},$=async t=>{const{data:n}=await e.post("/api/cards/send/message",t);return n},D=async t=>{const{data:n}=await e.post("/api/card/send/spei-key",t);return n},F=async t=>{const{data:n}=await e.post("/api/funding-order/new",t);return A(n)};export{h as C,R as a,d as b,_ as c,l as d,$ as e,F as f,u as g,P as h,O as i,D as s,N as t};