import{a6 as X,aT as K,r as i,j as e,T as r,B as Q,S as x,m as M,C as g,_ as E,O as y}from"./index-346c4534.js";import{C as Y}from"./build-c7ce8ef2.js";import{f as L}from"./build-cb0e7475.js";import{u as O}from"./build-7d848a9e.js";import{a as q}from"./build-b25654fe.js";import"./build-429ae8b4.js";import{L as H}from"./build-1db93dc8.js";import{T as J,a as C}from"./build-3a26c3a8.js";import"./build-9177a231.js";import"./build-e96dcb11.js";import"./build-a7e8e7cb.js";import"./build-40e523c6.js";import"./build-24563a1e.js";import"./build-f149ac76.js";import"./build-515c977a.js";import"./build-905506d5.js";import"./build-5eec7cc5.js";import"./build-737c64c4.js";import"./build-6cc29a6e.js";import"./build-bee6630b.js";import"./build-6435c1fd.js";import"./build-cf621495.js";import"./build-31883e00.js";import"./build-6a6f2775.js";import"./build-f8f5ccb1.js";import"./build-e9361a90.js";import"./build-6471b759.js";import"./build-a20336ff.js";import"./build-4fa429fc.js";import"./build-2a2c9560.js";import"./build-ef13f1ba.js";import"./build-45178a4b.js";import"./build-f0d75a0c.js";import"./build-c0c04b6b.js";import"./build-fe827404.js";import"./build-d933afe7.js";import"./build-ee11d05a.js";import"./build-f38e29d0.js";import"./build-ee9a7afc.js";import"./build-2fcf14dd.js";const S=g(i.lazy(()=>E(()=>import("./build-a5c0e1cd.js"),["assets/js/build-a5c0e1cd.js","assets/js/index-346c4534.js","assets/css/build-c23c9e36.css","assets/js/build-31883e00.js","assets/js/build-737c64c4.js","assets/js/build-7d848a9e.js","assets/js/build-e96dcb11.js","assets/js/build-a7e8e7cb.js","assets/js/build-40e523c6.js","assets/js/build-9177a231.js","assets/js/build-24563a1e.js","assets/js/build-f149ac76.js","assets/js/build-515c977a.js","assets/js/build-905506d5.js","assets/js/build-5eec7cc5.js","assets/js/build-6cc29a6e.js","assets/js/build-bee6630b.js","assets/js/build-cb0e7475.js","assets/js/build-1db93dc8.js","assets/js/build-2a2c9560.js","assets/js/build-e9361a90.js","assets/js/build-6435c1fd.js","assets/js/build-cf621495.js","assets/js/build-6a6f2775.js","assets/js/build-f8f5ccb1.js","assets/js/build-6471b759.js","assets/js/build-a20336ff.js","assets/js/build-4fa429fc.js","assets/js/build-ef13f1ba.js","assets/js/build-45178a4b.js","assets/js/build-f0d75a0c.js","assets/js/build-c0c04b6b.js","assets/js/build-b25654fe.js","assets/js/build-ee9a7afc.js","assets/js/build-2fcf14dd.js","assets/js/build-429ae8b4.js","assets/js/build-fe827404.js","assets/js/build-d933afe7.js","assets/js/build-ee11d05a.js","assets/js/build-f38e29d0.js","assets/js/build-a08d8e48.js"]))),W=g(i.lazy(()=>E(()=>import("./build-3e44052f.js"),["assets/js/build-3e44052f.js","assets/js/index-346c4534.js","assets/css/build-c23c9e36.css","assets/js/build-a20336ff.js","assets/js/build-6435c1fd.js","assets/js/build-9177a231.js","assets/js/build-4fa429fc.js","assets/js/build-cb0e7475.js","assets/js/build-c7ce8ef2.js","assets/js/build-ef13f1ba.js","assets/js/build-45178a4b.js","assets/js/build-40e523c6.js","assets/js/build-24563a1e.js","assets/js/build-f149ac76.js","assets/js/build-f0d75a0c.js","assets/js/build-c0c04b6b.js","assets/js/build-6a6f2775.js","assets/js/build-f8f5ccb1.js","assets/js/build-e9361a90.js","assets/js/build-6471b759.js","assets/js/build-2a2c9560.js","assets/js/build-694e69f9.js"]))),Z=g(i.lazy(()=>E(()=>import("./build-4ef2fbd7.js"),["assets/js/build-4ef2fbd7.js","assets/js/index-346c4534.js","assets/css/build-c23c9e36.css","assets/js/build-31883e00.js","assets/js/build-737c64c4.js","assets/js/build-1db93dc8.js","assets/js/build-2a2c9560.js","assets/js/build-e9361a90.js","assets/js/build-6435c1fd.js","assets/js/build-9177a231.js","assets/js/build-6cc29a6e.js","assets/js/build-bee6630b.js","assets/js/build-cb0e7475.js","assets/js/build-f149ac76.js","assets/js/build-d933afe7.js","assets/js/build-a20336ff.js","assets/js/build-4fa429fc.js","assets/js/build-c4e15452.js","assets/js/build-a08d8e48.js"])));function $({open:P,setOpen:A,isFundingCard:s}){var w;const f=X(),t=O(o=>o.card),n=O(o=>o.mainCard),a=K([Y.CARDS_COMMERCE_LIST,t==null?void 0:t.cardTypeId])||[],[h,c]=i.useState(0),u=i.useMemo(()=>s?n==null?void 0:n.balance:t==null?void 0:t.balance,[n==null?void 0:n.balance,t==null?void 0:t.balance]),[m,z]=i.useState("1"),[d,T]=i.useState(!1),[G,v]=i.useState(null),[R,B]=i.useState(!1),p=i.useMemo(()=>(parseFloat(u)-h).toFixed(2)<0,[h,u]),_=i.useMemo(()=>{var o;return((o=f==null?void 0:f.profile)==null?void 0:o.toLowerCase())==="representante legal"},[f]),b=i.useMemo(()=>a==null?void 0:a.filter(o=>o.id!==(t==null?void 0:t.id)),[a,t==null?void 0:t.id]),D=()=>{A(!1),c(0),T(!1),v(null),B(!1)},V=(o,l)=>{l&&z(l)};i.useEffect(()=>{c(0)},[m]);const j=o=>{const l=m==="2";let I=s?n==null?void 0:n.id:t==null?void 0:t.id;l&&(I=t==null?void 0:t.id),v({cardOriginId:I,isGlobal:l,transactions:l?o:(o==null?void 0:o.transactions)||[],concept:o==null?void 0:o.concept,balance:u,currentBalance:h}),T(!0)},k=()=>{T(!1)},N=e.jsx(e.Fragment,{children:s?e.jsx(r,{variant:"h6",children:"Fondear"}):e.jsxs(Q,{children:[e.jsxs(x,{spacing:1,alignItems:"center",direction:"row",mb:.5,children:[e.jsx(r,{variant:"subtitle2",children:"Origen: "}),e.jsxs(r,{variant:"subtitle2",children:[t==null?void 0:t.cardNumberMoreDigits," "]})]}),e.jsx(H,{color:"info",children:(w=t==null?void 0:t.assignUser)==null?void 0:w.name})]})}),U=e.jsxs(e.Fragment,{children:[!s&&_&&e.jsx(x,{alignItems:"flex-end",sx:{py:1,px:3},children:e.jsxs(J,{size:"small",color:"primary",value:m,exclusive:!0,onChange:V,"aria-label":"Platform",disabled:R,children:[e.jsx(C,{value:"1",children:"Tarjetas"}),e.jsx(C,{value:"2",children:"Global"})]})}),e.jsxs(x,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:s?2:1,children:[e.jsx(r,{variant:"subtitle1",children:"Saldo"}),e.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(r,{variant:"h3",color:"success.main",children:L(u)}),e.jsx(r,{variant:"caption",color:"success.main",children:"MXN"})]}),e.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxs(r,{variant:"subtitle1",color:"error",children:["- ",L(h)]}),e.jsx(r,{variant:"caption",color:"error",children:"MXN"})]}),p&&e.jsx(r,{variant:"caption",color:"warning.main",textAlign:"center",children:"Saldo insuficiente para realizar la(s) operacion(es)"})]}),s&&e.jsx(S,{cards:s?a:b,setCurrentBalance:c,insufficient:p,isBinCard:s,onSuccess:j}),!s&&_&&e.jsxs(e.Fragment,{children:[m==="1"&&e.jsx(S,{cards:s?a:b,setCurrentBalance:c,insufficient:p,isBinCard:s,onSuccess:j}),m==="2"&&e.jsx(Z,{mainCard:n,setCurrentBalance:c,insufficient:p,onSuccess:j})]}),!s&&!_&&e.jsx(S,{cards:s?a:b,setCurrentBalance:c,insufficient:p,isBinCard:s,onSuccess:j})]});return e.jsxs(q,{open:P,handleClose:D,titleElement:N,children:[e.jsx(M.div,{initial:{opacity:1},animate:{opacity:d?0:1},transition:{duration:.5},style:{display:d?"none":"flex",flex:1,overflow:"hidden",flexDirection:"column"},children:U}),e.jsx(M.div,{initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.5},style:{display:d?"flex":"none",flexDirection:"column",flex:1,overflow:"hidden"},children:e.jsx(W,{data:G,onBack:k,setTransactionLoading:B,transactionLoading:R,onClose:D})})]})}$.propTypes={isFundingCard:y.bool,open:y.bool,setOpen:y.func};export{$ as default};
