import{a7 as X,aW as K,r as n,j as e,T as i,B as Q,S as x,b5 as W,m as M,C as g,_ as E,O as y}from"./index-ixKXqnJp.js";import{u as L,C as Y}from"./build-ziaGZLXR.js";import{f as O}from"./build-6YIPcFHU.js";import{L as q}from"./build-VQrlUuND.js";import{T as H,a as C}from"./build-BaOazoJW.js";import"./build-FAvjNavH.js";import"./build-_JHXRbD6.js";import"./build-dm4yWFPt.js";import"./build-KbTEeZ86.js";import"./build-oHIjvIrR.js";import"./build-dEqz9zUm.js";import"./build-etstWp0g.js";import"./build-GywV9psu.js";import"./build-YOvIjgAO.js";import"./build-0U7rJSAM.js";import"./build-3mvdD2lh.js";import"./build-Uc7vb3zK.js";import"./build-pdsvphlv.js";const S=g(n.lazy(()=>E(()=>import("./build-uRg8ouPB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])))),J=g(n.lazy(()=>E(()=>import("./build-yUrQgtRs.js"),__vite__mapDeps([30,1,2,6,8,9,5,7,10,11,12,31,32,33,34,35,22,23,16,17,24,25,26,15,27,20])))),Z=g(n.lazy(()=>E(()=>import("./build-aPgUaJNn.js"),__vite__mapDeps([36,1,2,3,4,14,15,16,17,9,18,19,8,20,25,26,37,29]))));function $({open:P,setOpen:A,isFundingCard:o}){var w;const f=X(),t=L(s=>s.card),a=L(s=>s.mainCard),r=K([Y.CARDS_COMMERCE_LIST,t==null?void 0:t.cardTypeId])||[],[h,c]=n.useState(0),u=n.useMemo(()=>o?a==null?void 0:a.balance:t==null?void 0:t.balance,[a==null?void 0:a.balance,t==null?void 0:t.balance]),[m,z]=n.useState("1"),[d,b]=n.useState(!1),[G,v]=n.useState(null),[R,B]=n.useState(!1),p=n.useMemo(()=>(parseFloat(u)-h).toFixed(2)<0,[h,u]),T=n.useMemo(()=>{var s;return((s=f==null?void 0:f.profile)==null?void 0:s.toLowerCase())==="representante legal"},[f]),_=n.useMemo(()=>r==null?void 0:r.filter(s=>s.id!==(t==null?void 0:t.id)),[r,t==null?void 0:t.id]),D=()=>{A(!1),c(0),b(!1),v(null),B(!1)},V=(s,l)=>{l&&z(l)};n.useEffect(()=>{c(0)},[m]);const j=s=>{const l=m==="2";let I=o?a==null?void 0:a.id:t==null?void 0:t.id;l&&(I=t==null?void 0:t.id),v({cardOriginId:I,isGlobal:l,transactions:l?s:(s==null?void 0:s.transactions)||[],concept:s==null?void 0:s.concept,balance:u,currentBalance:h}),b(!0)},k=()=>{b(!1)},N=e.jsx(e.Fragment,{children:o?e.jsx(i,{variant:"h6",children:"Fondear"}):e.jsxs(Q,{children:[e.jsxs(x,{spacing:1,alignItems:"center",direction:"row",mb:.5,children:[e.jsx(i,{variant:"subtitle2",children:"Origen: "}),e.jsxs(i,{variant:"subtitle2",children:[t==null?void 0:t.cardNumberMoreDigits," "]})]}),e.jsx(q,{color:"info",children:(w=t==null?void 0:t.assignUser)==null?void 0:w.name})]})}),U=e.jsxs(e.Fragment,{children:[!o&&T&&e.jsx(x,{alignItems:"flex-end",sx:{py:1,px:3},children:e.jsxs(H,{size:"small",color:"primary",value:m,exclusive:!0,onChange:V,"aria-label":"Platform",disabled:R,children:[e.jsx(C,{value:"1",children:"Tarjetas"}),e.jsx(C,{value:"2",children:"Global"})]})}),e.jsxs(x,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,pt:o?2:1,children:[e.jsx(i,{variant:"subtitle1",children:"Saldo"}),e.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(i,{variant:"h3",color:"success.main",children:O(u)}),e.jsx(i,{variant:"caption",color:"success.main",children:"MXN"})]}),e.jsxs(x,{direction:"row",spacing:1,alignItems:"center",children:[e.jsxs(i,{variant:"subtitle1",color:"error",children:["- ",O(h)]}),e.jsx(i,{variant:"caption",color:"error",children:"MXN"})]}),p&&e.jsx(i,{variant:"caption",color:"warning.main",textAlign:"center",children:"Saldo insuficiente para realizar la(s) operacion(es)"})]}),o&&e.jsx(S,{cards:o?r:_,setCurrentBalance:c,insufficient:p,isBinCard:o,onSuccess:j}),!o&&T&&e.jsxs(e.Fragment,{children:[m==="1"&&e.jsx(S,{cards:o?r:_,setCurrentBalance:c,insufficient:p,isBinCard:o,onSuccess:j}),m==="2"&&e.jsx(Z,{mainCard:a,setCurrentBalance:c,insufficient:p,onSuccess:j})]}),!o&&!T&&e.jsx(S,{cards:o?r:_,setCurrentBalance:c,insufficient:p,isBinCard:o,onSuccess:j})]});return e.jsxs(W,{open:P,handleClose:D,titleElement:N,children:[e.jsx(M.div,{initial:{opacity:1},animate:{opacity:d?0:1},transition:{duration:.5},style:{display:d?"none":"flex",flex:1,overflow:"hidden",flexDirection:"column"},children:U}),e.jsx(M.div,{initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.5},style:{display:d?"flex":"none",flexDirection:"column",flex:1,overflow:"hidden"},children:e.jsx(J,{data:G,onBack:k,setTransactionLoading:B,transactionLoading:R,onClose:D})})]})}$.propTypes={isFundingCard:y.bool,open:y.bool,setOpen:y.func};export{$ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/js/build-uRg8ouPB.js","assets/js/index-ixKXqnJp.js","assets/css/build-pvjN466W.css","assets/js/build-etstWp0g.js","assets/js/build-FTXeMWpc.js","assets/js/build-ziaGZLXR.js","assets/js/build-FAvjNavH.js","assets/js/build-_JHXRbD6.js","assets/js/build-6YIPcFHU.js","assets/js/build-KbTEeZ86.js","assets/js/build-dm4yWFPt.js","assets/js/build-oHIjvIrR.js","assets/js/build-dEqz9zUm.js","assets/js/build-SO8f7Ll6.js","assets/js/build-VQrlUuND.js","assets/js/build-GywV9psu.js","assets/js/build-YOvIjgAO.js","assets/js/build-0U7rJSAM.js","assets/js/build-3mvdD2lh.js","assets/js/build-Uc7vb3zK.js","assets/js/build-pdsvphlv.js","assets/js/build-F7XNioOU.js","assets/js/build-LwbiozbY.js","assets/js/build-ZOc5AsDV.js","assets/js/build-M__DqRBL.js","assets/js/build-QRts0fGp.js","assets/js/build-lj6x1nL8.js","assets/js/build-LPvWp5h1.js","assets/js/build-Vrx0FahE.js","assets/js/build-RXVruzSL.js","assets/js/build-yUrQgtRs.js","assets/js/build-NI10TJ2R.js","assets/js/build-ra1ELWP8.js","assets/js/build-01KfIDYg.js","assets/js/build-aUYrQuCN.js","assets/js/build-JMbQ2yu8.js","assets/js/build-aPgUaJNn.js","assets/js/build-DPpCFjgD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}