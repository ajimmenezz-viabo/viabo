import{cN as o,a as n}from"./index-6aaca417.js";import{a as e}from"./build-3f2e38ba.js";const s=a=>{const t=a==null?void 0:a.token,r=o(t);return{token:t,id:r==null?void 0:r.cardId,cardNumber:r==null?void 0:r.cardNumber,cardNumberHidden:e((r==null?void 0:r.cardNumber)??"")}},i=async a=>{const{data:t}=await n.post("/api/security/commerce-demo/user/new",a);return t},u=async a=>{const{data:t}=await n.get(`/api/card-demo/information/${a==null?void 0:a.cardNumber}`);return s(t)},N=async a=>{const{data:t}=await n.put("/api/assign/commerce-demo-card/to/user",a);return t};export{N as a,i as c,u as v};
