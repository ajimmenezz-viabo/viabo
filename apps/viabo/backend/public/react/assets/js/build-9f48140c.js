import{a4 as X,aR as K,r as i,j as e,T as n,B as Q,S as x,m as M,C as v,_ as g,N as y}from"./index-3809032b.js";import{C as Y}from"./build-c7ce8ef2.js";import{f as L}from"./build-566d20b3.js";import{u as O}from"./build-38a50b1e.js";import{a as q}from"./build-02647ec5.js";import"./build-d59f6763.js";import{L as H}from"./build-0d95e123.js";import{T as J,a as C}from"./build-50ee6672.js";import"./build-53b11780.js";import"./build-26daf111.js";import"./build-9d77b025.js";import"./build-2b227f05.js";import"./build-c6f78c0d.js";import"./build-6fc59234.js";import"./build-f3f9b6e9.js";import"./build-e6290908.js";import"./build-2969add5.js";import"./build-35d26722.js";import"./build-1f7146f4.js";import"./build-bee6630b.js";import"./build-4389c83a.js";import"./build-6fc5dca7.js";import"./build-ee266471.js";import"./build-1adb5778.js";import"./build-b0677c31.js";import"./build-46916aa3.js";import"./build-381d8d7c.js";import"./build-7637d2c3.js";import"./build-4d4aa58d.js";import"./build-f831d8b4.js";import"./build-78fd7f79.js";import"./build-8fbeaa5d.js";import"./build-627f2440.js";import"./build-5af041c1.js";import"./build-e69012db.js";import"./build-7041d859.js";import"./build-adedcfe4.js";import"./build-49cea08c.js";import"./build-9f005fe0.js";import"./build-ff91dbf2.js";const S=v(i.lazy(()=>g(()=>import("./build-5f935abc.js"),["assets/js/build-5f935abc.js","assets/js/index-3809032b.js","assets/css/build-c23c9e36.css","assets/js/build-ee266471.js","assets/js/build-35d26722.js","assets/js/build-38a50b1e.js","assets/js/build-26daf111.js","assets/js/build-9d77b025.js","assets/js/build-2b227f05.js","assets/js/build-53b11780.js","assets/js/build-c6f78c0d.js","assets/js/build-6fc59234.js","assets/js/build-f3f9b6e9.js","assets/js/build-e6290908.js","assets/js/build-2969add5.js","assets/js/build-1f7146f4.js","assets/js/build-bee6630b.js","assets/js/build-566d20b3.js","assets/js/build-0d95e123.js","assets/js/build-f831d8b4.js","assets/js/build-46916aa3.js","assets/js/build-4389c83a.js","assets/js/build-6fc5dca7.js","assets/js/build-1adb5778.js","assets/js/build-b0677c31.js","assets/js/build-381d8d7c.js","assets/js/build-7637d2c3.js","assets/js/build-4d4aa58d.js","assets/js/build-78fd7f79.js","assets/js/build-8fbeaa5d.js","assets/js/build-627f2440.js","assets/js/build-5af041c1.js","assets/js/build-02647ec5.js","assets/js/build-9f005fe0.js","assets/js/build-ff91dbf2.js","assets/js/build-d59f6763.js","assets/js/build-e69012db.js","assets/js/build-7041d859.js","assets/js/build-adedcfe4.js","assets/js/build-49cea08c.js","assets/js/build-3e92a63a.js"]))),W=v(i.lazy(()=>g(()=>import("./build-1b71e6f5.js"),["assets/js/build-1b71e6f5.js","assets/js/index-3809032b.js","assets/css/build-c23c9e36.css","assets/js/build-7637d2c3.js","assets/js/build-4389c83a.js","assets/js/build-53b11780.js","assets/js/build-4d4aa58d.js","assets/js/build-566d20b3.js","assets/js/build-c7ce8ef2.js","assets/js/build-78fd7f79.js","assets/js/build-8fbeaa5d.js","assets/js/build-2b227f05.js","assets/js/build-c6f78c0d.js","assets/js/build-6fc59234.js","assets/js/build-627f2440.js","assets/js/build-5af041c1.js","assets/js/build-1adb5778.js","assets/js/build-b0677c31.js","assets/js/build-46916aa3.js","assets/js/build-381d8d7c.js","assets/js/build-f831d8b4.js","assets/js/build-8adb868c.js"]))),Z=v(i.lazy(()=>g(()=>import("./build-f80532fc.js"),["assets/js/build-f80532fc.js","assets/js/index-3809032b.js","assets/css/build-c23c9e36.css","assets/js/build-ee266471.js","assets/js/build-35d26722.js","assets/js/build-0d95e123.js","assets/js/build-f831d8b4.js","assets/js/build-46916aa3.js","assets/js/build-4389c83a.js","assets/js/build-53b11780.js","assets/js/build-1f7146f4.js","assets/js/build-bee6630b.js","assets/js/build-566d20b3.js","assets/js/build-6fc59234.js","assets/js/build-7041d859.js","assets/js/build-7637d2c3.js","assets/js/build-4d4aa58d.js","assets/js/build-5f6917c9.js","assets/js/build-3e92a63a.js"])));function $({open:P,setOpen:A,isFundingCard:o}){var w;const f=X(),t=O(s=>s.card),r=O(s=>s.mainCard),a=K([Y.CARDS_COMMERCE_LIST,t==null?void 0:t.cardTypeId])||[],[u,l]=i.useState(0),h=i.useMemo(()=>o?r==null?void 0:r.balance:t==null?void 0:t.balance,[r==null?void 0:r.balance,t==null?void 0:t.balance]),[m,z]=i.useState("1"),[d,T]=i.useState(!1),[G,E]=i.useState(null),[R,B]=i.useState(!1),p=i.useMemo(()=>(parseFloat(h)-u).toFixed(2)<0,[u,h]),_=i.useMemo(()=>{var s;return((s=f==null?void 0:f.profile)==null?void 0:s.toLowerCase())==="representante legal"},[f]),b=i.useMemo(()=>a==null?void 0:a.filter(s=>s.id!==(t==null?void 0:t.id)),[a,t==null?void 0:t.id]),D=()=>{A(!1),l(0),T(!1),E(null),B(!1)},N=(s,c)=>{c&&z(c)};i.useEffect(()=>{l(0)},[m]);const j=s=>{const c=m==="2";let I=o?r==null?void 0:r.id:t==null?void 0:t.id;c&&(I=t==null?void 0:t.id),E({cardOriginId:I,isGlobal:c,transactions:c?s:(s==null?void 0:s.transactions)||[],balance:h,currentBalance:u}),T(!0)},V=()=>{T(!1)},k=e.jsx(e.Fragment,{children:o?e.jsx(n,{variant:"h6",children:"Fondear"}):e.jsxs(Q,{children:[e.jsxs(x,{spacing:1,alignItems:"center",direction:"row",mb:.5,children:[e.jsx(n,{variant:"subtitle2",children:"Origen: "}),e.jsxs(n,{variant:"subtitle2",children:[t==null?void 0:t.cardNumberMoreDigits," "]})]}),e.jsx(H,{color:"info",children:(w=t==null?void 0:t.assignUser)==null?void 0:w.name})]})}),U=e.jsxs(e.Fragment,{children:[!o&&_&&e.jsx(x,{alignItems:"flex-end",sx:{py:1,px:3},children:e.jsxs(J,{size:"small",color:"primary",value:m,exclusive:!0,onChange:N,"aria-label":"Platform",disabled:R,children:[e.jsx(C,{value:"1",children:"Tarjetas"}),e.jsx(C,{value:"2",children:"Global"})]})}),e.jsxs(x,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:o?2:1,children:[e.jsx(n,{variant:"subtitle1",children:"Saldo"}),e.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(n,{variant:"h3",color:"success.main",children:L(h)}),e.jsx(n,{variant:"caption",color:"success.main",children:"MXN"})]}),e.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxs(n,{variant:"subtitle1",color:"error",children:["- ",L(u)]}),e.jsx(n,{variant:"caption",color:"error",children:"MXN"})]}),p&&e.jsx(n,{variant:"caption",color:"warning.main",textAlign:"center",children:"Saldo insuficiente para realizar la(s) operacion(es)"})]}),o&&e.jsx(S,{cards:o?a:b,setCurrentBalance:l,insufficient:p,isBinCard:o,onSuccess:j}),!o&&_&&e.jsxs(e.Fragment,{children:[m==="1"&&e.jsx(S,{cards:o?a:b,setCurrentBalance:l,insufficient:p,isBinCard:o,onSuccess:j}),m==="2"&&e.jsx(Z,{mainCard:r,setCurrentBalance:l,insufficient:p,onSuccess:j})]}),!o&&!_&&e.jsx(S,{cards:o?a:b,setCurrentBalance:l,insufficient:p,isBinCard:o,onSuccess:j})]});return e.jsxs(q,{open:P,handleClose:D,titleElement:k,children:[e.jsx(M.div,{initial:{opacity:1},animate:{opacity:d?0:1},transition:{duration:.5},style:{display:d?"none":"flex",flex:1,overflow:"hidden",flexDirection:"column"},children:U}),e.jsx(M.div,{initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.5},style:{display:d?"flex":"none",flexDirection:"column",flex:1,overflow:"hidden"},children:e.jsx(W,{data:G,onBack:V,setTransactionLoading:B,transactionLoading:R,onClose:D})})]})}$.propTypes={isFundingCard:y.bool,open:y.bool,setOpen:y.func};export{$ as default};
