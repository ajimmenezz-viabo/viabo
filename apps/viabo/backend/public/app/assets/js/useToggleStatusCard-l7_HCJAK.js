import{r as c,t as m,a as s,g as d,b as l}from"./index-DBYLOnQL.js";import{bx as u,r as S,c as E,f}from"./vendor-5lkxkETF.js";import{a as A,b as g}from"./cardsAdapter-YffhfOrS.js";import{f as _}from"./formatNumber-dGNhWwxT.js";import{C as D}from"./cardMovementsAdapter-C-jafIFP.js";const R={CARDS_COMMERCE_LIST:"cardsCommerce",CARD_INFO:"cardInfo",CARD_MOVEMENTS:"cardMovements",MAIN_CARD:"mainCard",TRANSIT_BALANCE:"transitBalance",PAYMENT_PROCESSORS:"paymentProcessors"},B=(e,t)=>{var r,i;const a=(r=e==null?void 0:e.processorTypes)==null?void 0:r.find(o=>o==="1"),n=(i=e==null?void 0:e.processorTypes)==null?void 0:i.find(o=>o==="2");return{cardId:t==null?void 0:t.id,amount:e==null?void 0:e.amount.toString(),spei:a?t==null?void 0:t.SPEI:"",payCash:n?"1":""}},I=e=>{const t=c(e==null?void 0:e.ciphertext,e==null?void 0:e.iv);if(t)return{id:t==null?void 0:t.id,reference:t==null?void 0:t.referenceNumber};throw new Error("Algo fallo al obtener la información")},O=e=>{const t=c(e==null?void 0:e.ciphertext,e==null?void 0:e.iv);return(t==null?void 0:t.map(n=>{var r;return{id:n==null?void 0:n.id,name:(r=n==null?void 0:n.name)==null?void 0:r.toUpperCase()}}))||[]},p={card:null,isMainCardSelected:!1,cardTypeSelected:null,mainCard:null,selectedCards:[],openFundingOrder:!1,fundingCard:null},M=(e,t)=>({...p,setCard:a=>{const{card:n}=t();e(r=>({card:{...n,...a}}),!1,"SET_CARD")},resetCard:()=>{e(a=>({card:null}),!1,"RESET_CARD")},setSelectedCards:a=>{t(),e(n=>({selectedCards:a}),!1,"SET_SELECTED_CARDS")},addInfoCard:a=>{const{card:n}=t();e(r=>({card:{...n,...a}}),!1,"SET_INFO_CARD")},setMainCard:a=>{e(n=>({mainCard:a}),!1,"SET_MAIN_CARD")},setSelectedMainCard:a=>{e(n=>({isMainCardSelected:a}),!1,"SET_IS_MAIN_CARD_SELECTED")},setOpenFundingOrder:a=>{e(n=>({openFundingOrder:a}),!1,"SET_OPEN_FUNDING_ORDER")},setFundingCard:a=>{e(n=>({fundingCard:a}),!1,"SET_FUNDING_CARD")},resetFundingOrder:()=>{e(a=>({fundingCard:null,openFundingOrder:!1}),!1,"RESET_FUNDING_ORDER")},setCardTypeSelected:a=>{e(n=>({cardTypeSelected:a}),!1,"SET_CARD_TYPE_SELECTED")}}),G=m(M),N=e=>{const t=c(e==null?void 0:e.ciphertext,e==null?void 0:e.iv),a=parseFloat((t==null?void 0:t.balance)===""?"0":t==null?void 0:t.balance.replace(/,/g,""));if(t)return{id:t==null?void 0:t.cardId,SPEI:t==null?void 0:t.spei,balance:a,balanceFormatted:_(a),cardNumberHidden:"GLOBAL"};throw new Error("Algo fallo al obtenerla informacion")},U=async()=>{const{data:e}=await s.get("/api/payment-processors/of/commerce");return O(e)},k=async e=>{const{data:t}=await s.get(`/api/enabled-cards/commerce?paymentProcessorId=${e}`);return A(t)},Y=async(e,t)=>{const{data:a}=await s.get(`/api/card/information/${e}`,{signal:t});return g(a)},b=async e=>(await s.put(`/api/card/${e==null?void 0:e.id}/block/${e!=null&&e.cardON?"unblocked":"blocked"}`),e),$=async e=>(await s.post("/api/card/transactions",e==null?void 0:e.data),e),H=async(e,t,a,n)=>{const r=new URL("/api/card/movements",window.location.origin);r.searchParams.set("cardId",e),r.searchParams.set("startDate",t),r.searchParams.set("endDate",a);const{data:i}=await s.get(r.href,{timeout:3e4,signal:n});return D(i)},Q=async(e,t)=>{const{data:a}=await s.get(`/api/main-card/information?paymentProcessorId=${e}`,{signal:t});return N(a)},K=async e=>{const{data:t}=await s.post("/api/funding-order/new",e);return I(t)},j=async e=>{const{data:t}=await s.post("/api/funding-order/send",e);return t},F={LIST:"commerce-all-cards"},w={GLOBAL_CARDS:"global-cards",MOVEMENTS:"master-movements",COMMERCE_CARDS:"commerce-cards"},V=(e={})=>{const{enqueueSnackbar:t}=u(),[a,n]=S.useState(null),r=E();return{...f(b,{onSuccess:o=>{n(null),r.refetchQueries([R.CARD_INFO,o==null?void 0:o.id]),r.invalidateQueries([F.LIST]),r.invalidateQueries([w.GLOBAL_CARDS]),t(o!=null&&o.cardON?"Se encendió la tarjeta con éxito":"Se apagó la tarjeta con éxito",{variant:"success",autoHideDuration:5e3})},onError:o=>{const C=d(o,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");t(C,{variant:l(o),autoHideDuration:5e3}),n(C)},...e}),error:a||null}};export{F as A,R as C,w as D,H as a,U as b,k as c,Q as d,V as e,K as f,Y as g,B as h,j as s,$ as t,G as u};
//# sourceMappingURL=useToggleStatusCard-l7_HCJAK.js.map