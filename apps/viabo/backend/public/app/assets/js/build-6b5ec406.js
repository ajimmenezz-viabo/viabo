import{dt as n,ai as e}from"./index-e73cf17b.js";import{a as o}from"./build-ac55763c.js";const s=a=>{const t=a==null?void 0:a.token,r=n(t);return{token:t,id:r==null?void 0:r.cardId,cardNumber:r==null?void 0:r.cardNumber,cardNumberHidden:o((r==null?void 0:r.cardNumber)??"")}},c=async a=>{const{data:t}=await e.post("/api/security/commerce-demo/user/new",a);return t},u=async a=>{const{data:t}=await e.get(`/api/card-demo/information/${a==null?void 0:a.cardNumber}`);return s(t)},p=async a=>{const{data:t}=await e.put("/api/assign/commerce-demo-card/to/user",a);return t};export{p as a,c,u as v};
