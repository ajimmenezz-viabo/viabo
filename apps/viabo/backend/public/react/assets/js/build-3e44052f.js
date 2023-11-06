import{z as v,j as e,k as A,a as E,Q as T,g as M,b as R,q as k,r as I,D as F,B as f,T as m,S as N,L as O,p as Q,O as c}from"./index-346c4534.js";import{a as _}from"./build-a20336ff.js";import{f as j}from"./build-cb0e7475.js";import{C as y}from"./build-c7ce8ef2.js";import{t as L}from"./build-ef13f1ba.js";import{m as b,T as W,k as z,l as D,n as l,o as G}from"./build-6a6f2775.js";import{S as P}from"./build-694e69f9.js";import"./build-6435c1fd.js";import"./build-9177a231.js";import"./build-4fa429fc.js";import"./build-45178a4b.js";import"./build-40e523c6.js";import"./build-24563a1e.js";import"./build-f149ac76.js";import"./build-f0d75a0c.js";import"./build-c0c04b6b.js";import"./build-f8f5ccb1.js";import"./build-e9361a90.js";import"./build-6471b759.js";import"./build-2a2c9560.js";const $=v(e.jsx("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos"),q=(r,i,t,h)=>{var a,p;let d;return h?d={originCardId:r,destinationCards:[{cardId:(a=i==null?void 0:i.card)==null?void 0:a.value.toString(),concept:(t==null?void 0:t.toString())||"",amount:parseFloat((i==null?void 0:i.amount.toString())===""?"0":(p=i==null?void 0:i.amount)==null?void 0:p.toString().replace(/,/g,"")).toString()}]}:d={originCardId:r,destinationCards:i==null?void 0:i.map(o=>{var x,s,n;return{cardId:(s=(x=o==null?void 0:o.card)==null?void 0:x.value)==null?void 0:s.toString(),concept:(t==null?void 0:t.toString())||"",amount:parseFloat((o==null?void 0:o.amount.toString())===""?"0":(n=o==null?void 0:o.amount)==null?void 0:n.toString().replace(/,/g,"")).toString()}})},{cardId:d==null?void 0:d.originCardId,data:_(d)}},H=(r={})=>{const i=A(),t=E(L,r);return{...t,transaction:async(d,a)=>{const{onSuccess:p,onError:o,mutationOptions:x}=a;try{await T.promise(t.mutateAsync(d,x),{pending:"Procesando Transferencia ...",success:{render({data:s}){return i.fetchQuery([y.TRANSIT_BALANCE]),i.invalidateQueries([y.CARD_INFO,s==null?void 0:s.cardId]),i.fetchQuery([y.CARD_MOVEMENTS,s==null?void 0:s.cardId]),i.fetchQuery([y.MAIN_CARD]),p(s),"Se realizo la transferencia con éxito"}}})}catch(s){const n=M(s,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");o(n),T.error(n,{type:R(s)})}}}},C=k(b)(({theme:r})=>({"& td":{paddingTop:r.spacing(.5),paddingBottom:r.spacing(.5)}})),K=({data:r,onBack:i,setTransactionLoading:t,transactionLoading:h,onClose:d})=>{const{transaction:a,isLoading:p}=H(),o=I.useMemo(()=>(r!=null&&r.isGlobal?[r==null?void 0:r.transactions]:r==null?void 0:r.transactions)||[],[r]),x=I.useMemo(()=>(parseFloat(r==null?void 0:r.balance)-(r==null?void 0:r.currentBalance)).toFixed(2)||0,[r]),s=()=>{const{cardOriginId:n,transactions:u,isGlobal:g,concept:S}=r,B=q(n,u,S,g);t(!0),a(B,{onSuccess:()=>{d()},onError:()=>{t(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx(W,{sx:{minWidth:200},children:e.jsxs(z,{children:[e.jsx(D,{sx:{borderBottom:n=>`solid 1px ${n.palette.divider}`},children:e.jsxs(b,{children:[e.jsx(l,{width:40,children:"#"}),e.jsx(l,{align:"left",children:"Movimiento"}),e.jsx(l,{align:"right",children:"Monto"})]})}),e.jsxs(G,{children:[o==null?void 0:o.map((n,u)=>{var g;return e.jsxs(b,{sx:{borderBottom:S=>`solid 1px ${S.palette.divider}`},children:[e.jsx(l,{children:u+1}),e.jsx(l,{align:"left",children:e.jsxs(f,{sx:{maxWidth:200},children:[e.jsx(m,{variant:"subtitle2",children:((g=n==null?void 0:n.card)==null?void 0:g.cardUserNumber)||"Cuenta Global"}),e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:n==null?void 0:n.concept})]})}),e.jsx(l,{align:"right",children:j(n==null?void 0:n.amount)})]},u)}),e.jsxs(C,{children:[e.jsx(l,{colSpan:1}),e.jsxs(l,{align:"right",children:[e.jsx(f,{sx:{mt:2}}),e.jsx(m,{children:"Saldo"})]}),e.jsxs(l,{align:"right",width:120,children:[e.jsx(f,{sx:{mt:2}}),e.jsx(m,{children:j(r==null?void 0:r.balance)})]})]}),e.jsxs(C,{children:[e.jsx(l,{colSpan:1}),e.jsx(l,{align:"right",children:e.jsx(m,{children:"Transacciones"})}),e.jsx(l,{align:"right",width:120,children:e.jsx(m,{sx:{color:"error.main"},children:j(-(r==null?void 0:r.currentBalance))})})]}),e.jsxs(C,{children:[e.jsx(l,{colSpan:1}),e.jsx(l,{align:"right",children:e.jsx(m,{variant:"h6",children:"Total"})}),e.jsx(l,{align:"right",width:140,children:e.jsx(m,{variant:"h6",children:j(x)})})]})]})]})})}),e.jsxs(N,{sx:{p:3},spacing:3,children:[e.jsx(O,{onClick:s,loading:p||h,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(P,{}),children:"Enviar"}),(!p||!h)&&e.jsx(Q,{onClick:i,variant:"outlined",color:"inherit",fullWidth:!0,startIcon:e.jsx($,{}),children:"Regresar"})]})]})};K.propTypes={data:c.shape({balance:c.any,cardOriginId:c.any,currentBalance:c.any,isGlobal:c.any,transactions:c.any,concept:c.any}),onBack:c.any,onClose:c.func,setTransactionLoading:c.func,transactionLoading:c.any};export{K as default};