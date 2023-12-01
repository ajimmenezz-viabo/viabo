import{z as M,j as e,k as R,a as E,Q as I,g as N,b as F,q as k,r as C,D as O,B as z,T as m,S as B,L as D,p as Q,O as c}from"./index-EBrH4AFB.js";import{a as W}from"./build-6Nx01Jh-.js";import{f as y}from"./build-rECqXkdZ.js";import{C as f}from"./build-qjKQWaxY.js";import{t as _}from"./build-43qu0tfv.js";import{g as L}from"./build-OLvjL4ru.js";import{t as T,T as P,q as G,s as q,u as s,v as $}from"./build-u_9qcimv.js";import"./build-bT2ZGV7i.js";import"./build-skxbiffK.js";import"./build-NGendJ1R.js";import"./build-xkgo0pxg.js";import"./build-1Ft3NZNk.js";import"./build-8l7LuNRn.js";import"./build-pTw3iSuy.js";import"./build-H7IOl2jl.js";import"./build-ra700BiT.js";import"./build-UC2Jv_Rj.js";import"./build-P0jbLy60.js";import"./build-BTCdeRGE.js";import"./build-qEQsGcT6.js";import"./build-F7ivJfbI.js";import"./build-W0u3MlWw.js";import"./build-4IleTySW.js";const H=M(e.jsx("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos"),K=(r,i,t,a)=>{var x,h;let d;return a?d={originCardId:r,destinationCards:[{cardId:(x=i==null?void 0:i.card)==null?void 0:x.value.toString(),concept:(t==null?void 0:t.toString())||"",amount:parseFloat((i==null?void 0:i.amount.toString())===""?"0":(h=i==null?void 0:i.amount)==null?void 0:h.toString().replace(/,/g,"")).toString()}]}:d={originCardId:r,destinationCards:i==null?void 0:i.map(o=>{var u,n,p;return{cardId:(n=(u=o==null?void 0:o.card)==null?void 0:u.value)==null?void 0:n.toString(),concept:(t==null?void 0:t.toString())||"",amount:parseFloat((o==null?void 0:o.amount.toString())===""?"0":(p=o==null?void 0:o.amount)==null?void 0:p.toString().replace(/,/g,"")).toString()}})},{cardId:d==null?void 0:d.originCardId,data:W(d)}},U=(r={})=>{const i=R(),t=E(_,r);return{...t,transaction:async(d,x)=>{const{onSuccess:h,onError:o,mutationOptions:u}=x;try{await I.promise(t.mutateAsync(d,u),{pending:"Procesando Transferencia ...",success:{render({data:n}){return i.fetchQuery([f.TRANSIT_BALANCE]),i.invalidateQueries([f.CARD_INFO,n==null?void 0:n.cardId]),i.fetchQuery([f.CARD_MOVEMENTS,n==null?void 0:n.cardId]),i.fetchQuery([f.MAIN_CARD]),h(n),"Se realizo la transferencia con éxito"}}})}catch(n){const p=N(n,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");o(p),I.error(p,{type:F(n)})}}}},b=k(T)(({theme:r})=>({"& td":{paddingTop:r.spacing(.5),paddingBottom:r.spacing(.5)}})),V=({data:r,onBack:i,setTransactionLoading:t,transactionLoading:a,onClose:d})=>{const{transaction:x,isLoading:h}=U(),o=C.useMemo(()=>(r!=null&&r.isGlobal?[r==null?void 0:r.transactions]:r==null?void 0:r.transactions)||[],[r]),u=C.useMemo(()=>(parseFloat(r==null?void 0:r.balance)-(r==null?void 0:r.currentBalance)).toFixed(2)||0,[r]),n=()=>{const{cardOriginId:l,transactions:g,isGlobal:j,concept:S}=r,A=K(l,g,S,j);t(!0),x(A,{onSuccess:()=>{d()},onError:()=>{t(!1)}})},p=C.useMemo(()=>L(r==null?void 0:r.paymentProcessor),[r]),v=p==null?void 0:p.component;return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsx(P,{sx:{minWidth:200},children:e.jsxs(G,{children:[e.jsx(q,{sx:{borderBottom:l=>`solid 1px ${l.palette.divider}`},children:e.jsxs(T,{children:[e.jsx(s,{width:40,children:"#"}),e.jsx(s,{align:"left",children:"Movimiento"}),e.jsx(s,{align:"right",children:"Monto"})]})}),e.jsxs($,{children:[o==null?void 0:o.map((l,g)=>{var j;return e.jsxs(T,{sx:{borderBottom:S=>`solid 1px ${S.palette.divider}`},children:[e.jsx(s,{children:g+1}),e.jsx(s,{align:"left",children:e.jsxs(z,{sx:{maxWidth:200},children:[e.jsx(m,{variant:"subtitle2",children:((j=l==null?void 0:l.card)==null?void 0:j.cardUserNumber)||"Cuenta Global"}),e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:l==null?void 0:l.concept})]})}),e.jsx(s,{align:"right",children:y(l==null?void 0:l.amount)})]},g)}),e.jsxs(b,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsxs(B,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"flex-end",children:[e.jsx(m,{children:"Saldo Disponible"}),p&&e.jsx(v,{sx:{width:30,height:30}})]})}),e.jsx(s,{align:"right",width:120,children:e.jsx(m,{children:y(r==null?void 0:r.balance)})})]}),e.jsxs(b,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsx(m,{variant:"h6",children:"Total a dispersar"})}),e.jsx(s,{align:"right",width:120,children:e.jsx(m,{variant:"h6",sx:{color:"error.main"},children:y(-(r==null?void 0:r.currentBalance))})})]}),e.jsxs(b,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsx(m,{children:"Total después de movimiento"})}),e.jsx(s,{align:"right",width:140,children:e.jsx(m,{children:y(u)})})]})]})]})})}),e.jsxs(B,{sx:{p:3},spacing:3,children:[e.jsx(D,{size:"large",onClick:n,loading:h||a,variant:"contained",color:"primary",fullWidth:!0,type:"submit",sx:{fontWeight:"bold"},children:"Realizar"}),(!h||!a)&&e.jsx(Q,{onClick:i,variant:"outlined",color:"inherit",fullWidth:!0,startIcon:e.jsx(H,{}),children:"Regresar"})]})]})};V.propTypes={data:c.shape({balance:c.any,cardOriginId:c.any,paymentProcessor:c.any,currentBalance:c.any,isGlobal:c.any,transactions:c.any,concept:c.any}),onBack:c.any,onClose:c.func,setTransactionLoading:c.func,transactionLoading:c.any};export{V as default};