import{a6 as X,aT as K,r as i,j as e,T as r,B as Q,S as x,m as M,C as g,_ as E,O as y}from"./index-5b9abb5d.js";import{C as Y}from"./build-c7ce8ef2.js";import{f as L}from"./build-559b3bfe.js";import{u as O}from"./build-db1161a4.js";import{a as q}from"./build-fce65b4c.js";import"./build-cfcbf657.js";import{L as H}from"./build-e33dd52a.js";import{T as J,a as C}from"./build-b368167f.js";import"./build-a4831788.js";import"./build-1c3a34e7.js";import"./build-d3853b32.js";import"./build-6bf4add6.js";import"./build-749e2f01.js";import"./build-dfaaa189.js";import"./build-069ad97e.js";import"./build-8f348ddc.js";import"./build-90110e69.js";import"./build-52be6f5f.js";import"./build-e39b555e.js";import"./build-bee6630b.js";import"./build-cd679c67.js";import"./build-24c5c7af.js";import"./build-475a8c0d.js";import"./build-f8705fa2.js";import"./build-90852445.js";import"./build-6bc3e71f.js";import"./build-17708e30.js";import"./build-0307e86f.js";import"./build-71e28a4a.js";import"./build-62079204.js";import"./build-f86dba9e.js";import"./build-2cdf3779.js";import"./build-102bf6ff.js";import"./build-7e51684f.js";import"./build-7206e541.js";import"./build-4687a6d9.js";import"./build-14e2eebf.js";import"./build-fcc46be9.js";import"./build-ae4e085b.js";import"./build-a3daaeb8.js";const S=g(i.lazy(()=>E(()=>import("./build-d12f4be3.js"),["assets/js/build-d12f4be3.js","assets/js/index-5b9abb5d.js","assets/css/build-a4b698a0.css","assets/js/build-475a8c0d.js","assets/js/build-52be6f5f.js","assets/js/build-db1161a4.js","assets/js/build-1c3a34e7.js","assets/js/build-d3853b32.js","assets/js/build-6bf4add6.js","assets/js/build-a4831788.js","assets/js/build-749e2f01.js","assets/js/build-dfaaa189.js","assets/js/build-069ad97e.js","assets/js/build-8f348ddc.js","assets/js/build-90110e69.js","assets/js/build-e39b555e.js","assets/js/build-bee6630b.js","assets/js/build-559b3bfe.js","assets/js/build-e33dd52a.js","assets/js/build-62079204.js","assets/js/build-6bc3e71f.js","assets/js/build-cd679c67.js","assets/js/build-24c5c7af.js","assets/js/build-f8705fa2.js","assets/js/build-90852445.js","assets/js/build-17708e30.js","assets/js/build-0307e86f.js","assets/js/build-71e28a4a.js","assets/js/build-f86dba9e.js","assets/js/build-2cdf3779.js","assets/js/build-102bf6ff.js","assets/js/build-7e51684f.js","assets/js/build-fce65b4c.js","assets/js/build-ae4e085b.js","assets/js/build-a3daaeb8.js","assets/js/build-cfcbf657.js","assets/js/build-7206e541.js","assets/js/build-4687a6d9.js","assets/js/build-14e2eebf.js","assets/js/build-fcc46be9.js","assets/js/build-c3ed5750.js"]))),W=g(i.lazy(()=>E(()=>import("./build-fb140bf8.js"),["assets/js/build-fb140bf8.js","assets/js/index-5b9abb5d.js","assets/css/build-a4b698a0.css","assets/js/build-0307e86f.js","assets/js/build-cd679c67.js","assets/js/build-a4831788.js","assets/js/build-71e28a4a.js","assets/js/build-559b3bfe.js","assets/js/build-c7ce8ef2.js","assets/js/build-f86dba9e.js","assets/js/build-2cdf3779.js","assets/js/build-6bf4add6.js","assets/js/build-749e2f01.js","assets/js/build-dfaaa189.js","assets/js/build-102bf6ff.js","assets/js/build-7e51684f.js","assets/js/build-f8705fa2.js","assets/js/build-90852445.js","assets/js/build-6bc3e71f.js","assets/js/build-17708e30.js","assets/js/build-62079204.js","assets/js/build-cfa174aa.js"]))),Z=g(i.lazy(()=>E(()=>import("./build-87b97e17.js"),["assets/js/build-87b97e17.js","assets/js/index-5b9abb5d.js","assets/css/build-a4b698a0.css","assets/js/build-475a8c0d.js","assets/js/build-52be6f5f.js","assets/js/build-e33dd52a.js","assets/js/build-62079204.js","assets/js/build-6bc3e71f.js","assets/js/build-cd679c67.js","assets/js/build-a4831788.js","assets/js/build-e39b555e.js","assets/js/build-bee6630b.js","assets/js/build-559b3bfe.js","assets/js/build-dfaaa189.js","assets/js/build-4687a6d9.js","assets/js/build-0307e86f.js","assets/js/build-71e28a4a.js","assets/js/build-3f722807.js","assets/js/build-c3ed5750.js"])));function $({open:P,setOpen:A,isFundingCard:s}){var w;const f=X(),t=O(o=>o.card),n=O(o=>o.mainCard),a=K([Y.CARDS_COMMERCE_LIST,t==null?void 0:t.cardTypeId])||[],[h,c]=i.useState(0),u=i.useMemo(()=>s?n==null?void 0:n.balance:t==null?void 0:t.balance,[n==null?void 0:n.balance,t==null?void 0:t.balance]),[m,z]=i.useState("1"),[d,T]=i.useState(!1),[G,v]=i.useState(null),[R,B]=i.useState(!1),p=i.useMemo(()=>(parseFloat(u)-h).toFixed(2)<0,[h,u]),_=i.useMemo(()=>{var o;return((o=f==null?void 0:f.profile)==null?void 0:o.toLowerCase())==="representante legal"},[f]),b=i.useMemo(()=>a==null?void 0:a.filter(o=>o.id!==(t==null?void 0:t.id)),[a,t==null?void 0:t.id]),D=()=>{A(!1),c(0),T(!1),v(null),B(!1)},V=(o,l)=>{l&&z(l)};i.useEffect(()=>{c(0)},[m]);const j=o=>{const l=m==="2";let I=s?n==null?void 0:n.id:t==null?void 0:t.id;l&&(I=t==null?void 0:t.id),v({cardOriginId:I,isGlobal:l,transactions:l?o:(o==null?void 0:o.transactions)||[],concept:o==null?void 0:o.concept,balance:u,currentBalance:h}),T(!0)},k=()=>{T(!1)},N=e.jsx(e.Fragment,{children:s?e.jsx(r,{variant:"h6",children:"Fondear"}):e.jsxs(Q,{children:[e.jsxs(x,{spacing:1,alignItems:"center",direction:"row",mb:.5,children:[e.jsx(r,{variant:"subtitle2",children:"Origen: "}),e.jsxs(r,{variant:"subtitle2",children:[t==null?void 0:t.cardNumberMoreDigits," "]})]}),e.jsx(H,{color:"info",children:(w=t==null?void 0:t.assignUser)==null?void 0:w.name})]})}),U=e.jsxs(e.Fragment,{children:[!s&&_&&e.jsx(x,{alignItems:"flex-end",sx:{py:1,px:3},children:e.jsxs(J,{size:"small",color:"primary",value:m,exclusive:!0,onChange:V,"aria-label":"Platform",disabled:R,children:[e.jsx(C,{value:"1",children:"Tarjetas"}),e.jsx(C,{value:"2",children:"Global"})]})}),e.jsxs(x,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:s?2:1,children:[e.jsx(r,{variant:"subtitle1",children:"Saldo"}),e.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(r,{variant:"h3",color:"success.main",children:L(u)}),e.jsx(r,{variant:"caption",color:"success.main",children:"MXN"})]}),e.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxs(r,{variant:"subtitle1",color:"error",children:["- ",L(h)]}),e.jsx(r,{variant:"caption",color:"error",children:"MXN"})]}),p&&e.jsx(r,{variant:"caption",color:"warning.main",textAlign:"center",children:"Saldo insuficiente para realizar la(s) operacion(es)"})]}),s&&e.jsx(S,{cards:s?a:b,setCurrentBalance:c,insufficient:p,isBinCard:s,onSuccess:j}),!s&&_&&e.jsxs(e.Fragment,{children:[m==="1"&&e.jsx(S,{cards:s?a:b,setCurrentBalance:c,insufficient:p,isBinCard:s,onSuccess:j}),m==="2"&&e.jsx(Z,{mainCard:n,setCurrentBalance:c,insufficient:p,onSuccess:j})]}),!s&&!_&&e.jsx(S,{cards:s?a:b,setCurrentBalance:c,insufficient:p,isBinCard:s,onSuccess:j})]});return e.jsxs(q,{open:P,handleClose:D,titleElement:N,children:[e.jsx(M.div,{initial:{opacity:1},animate:{opacity:d?0:1},transition:{duration:.5},style:{display:d?"none":"flex",flex:1,overflow:"hidden",flexDirection:"column"},children:U}),e.jsx(M.div,{initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.5},style:{display:d?"flex":"none",flexDirection:"column",flex:1,overflow:"hidden"},children:e.jsx(W,{data:G,onBack:k,setTransactionLoading:B,transactionLoading:R,onClose:D})})]})}$.propTypes={isFundingCard:y.bool,open:y.bool,setOpen:y.func};export{$ as default};
