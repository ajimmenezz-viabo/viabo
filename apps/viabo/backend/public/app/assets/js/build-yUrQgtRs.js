import{z as M,j as e,k as R,a as E,Q as I,g as N,b as F,q as k,r as C,D as O,B as z,T as m,S as B,L as D,p as Q,O as c}from"./index-ixKXqnJp.js";import{a as W}from"./build-FAvjNavH.js";import{f as y}from"./build-6YIPcFHU.js";import{t as _,C as S}from"./build-ziaGZLXR.js";import{g as L}from"./build-NI10TJ2R.js";import{n as T,T as P,l as G,m as $,o as s,p as q}from"./build-LwbiozbY.js";import"./build-KbTEeZ86.js";import"./build-_JHXRbD6.js";import"./build-dm4yWFPt.js";import"./build-oHIjvIrR.js";import"./build-dEqz9zUm.js";import"./build-ra1ELWP8.js";import"./build-01KfIDYg.js";import"./build-aUYrQuCN.js";import"./build-JMbQ2yu8.js";import"./build-ZOc5AsDV.js";import"./build-YOvIjgAO.js";import"./build-0U7rJSAM.js";import"./build-M__DqRBL.js";import"./build-QRts0fGp.js";import"./build-lj6x1nL8.js";import"./build-GywV9psu.js";import"./build-LPvWp5h1.js";import"./build-pdsvphlv.js";const H=M(e.jsx("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos"),K=(r,i,t,u)=>{var x,h;let p;return u?p={originCardId:r,destinationCards:[{cardId:(x=i==null?void 0:i.card)==null?void 0:x.value.toString(),concept:(t==null?void 0:t.toString())||"",amount:parseFloat((i==null?void 0:i.amount.toString())===""?"0":(h=i==null?void 0:i.amount)==null?void 0:h.toString().replace(/,/g,"")).toString()}]}:p={originCardId:r,destinationCards:i==null?void 0:i.map(o=>{var a,n,d;return{cardId:(n=(a=o==null?void 0:o.card)==null?void 0:a.value)==null?void 0:n.toString(),concept:(t==null?void 0:t.toString())||"",amount:parseFloat((o==null?void 0:o.amount.toString())===""?"0":(d=o==null?void 0:o.amount)==null?void 0:d.toString().replace(/,/g,"")).toString()}})},{cardId:p==null?void 0:p.originCardId,data:W(p)}},U=(r={})=>{const i=R(),t=E(_,r);return{...t,transaction:async(p,x)=>{const{onSuccess:h,onError:o,mutationOptions:a}=x;try{await I.promise(t.mutateAsync(p,a),{pending:"Procesando Transferencia ...",success:{render({data:n}){return i.fetchQuery([S.TRANSIT_BALANCE]),i.invalidateQueries([S.CARD_INFO,n==null?void 0:n.cardId]),i.fetchQuery([S.CARD_MOVEMENTS,n==null?void 0:n.cardId]),i.fetchQuery([S.MAIN_CARD]),h(n),"Se realizo la transferencia con éxito"}}})}catch(n){const d=N(n,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");o(d),I.error(d,{type:F(n)})}}}},b=k(T)(({theme:r})=>({"& td":{paddingTop:r.spacing(.5),paddingBottom:r.spacing(.5)}})),V=({data:r,onBack:i,setTransactionLoading:t,transactionLoading:u,onClose:p})=>{const{transaction:x,isLoading:h}=U(),o=C.useMemo(()=>(r!=null&&r.isGlobal?[r==null?void 0:r.transactions]:r==null?void 0:r.transactions)||[],[r]),a=C.useMemo(()=>(parseFloat(r==null?void 0:r.balance)-(r==null?void 0:r.currentBalance)).toFixed(2)||0,[r]),n=()=>{const{cardOriginId:l,transactions:g,isGlobal:j,concept:f}=r,A=K(l,g,f,j);t(!0),x(A,{onSuccess:()=>{p()},onError:()=>{t(!1)}})},d=C.useMemo(()=>L(r==null?void 0:r.paymentProcessor),[r]),v=d==null?void 0:d.component;return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsx(P,{sx:{minWidth:200},children:e.jsxs(G,{children:[e.jsx($,{sx:{borderBottom:l=>`solid 1px ${l.palette.divider}`},children:e.jsxs(T,{children:[e.jsx(s,{width:40,children:"#"}),e.jsx(s,{align:"left",children:"Movimiento"}),e.jsx(s,{align:"right",children:"Monto"})]})}),e.jsxs(q,{children:[o==null?void 0:o.map((l,g)=>{var j;return e.jsxs(T,{sx:{borderBottom:f=>`solid 1px ${f.palette.divider}`},children:[e.jsx(s,{children:g+1}),e.jsx(s,{align:"left",children:e.jsxs(z,{sx:{maxWidth:200},children:[e.jsx(m,{variant:"subtitle2",children:((j=l==null?void 0:l.card)==null?void 0:j.cardUserNumber)||"Cuenta Global"}),e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:l==null?void 0:l.concept})]})}),e.jsx(s,{align:"right",children:y(l==null?void 0:l.amount)})]},g)}),e.jsxs(b,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsxs(B,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"flex-end",children:[e.jsx(m,{children:"Saldo Disponible"}),d&&e.jsx(v,{sx:{width:30,height:30}})]})}),e.jsx(s,{align:"right",width:120,children:e.jsx(m,{children:y(r==null?void 0:r.balance)})})]}),e.jsxs(b,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsx(m,{variant:"h6",children:"Total a dispersar"})}),e.jsx(s,{align:"right",width:120,children:e.jsx(m,{variant:"h6",sx:{color:"error.main"},children:y(-(r==null?void 0:r.currentBalance))})})]}),e.jsxs(b,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsx(m,{children:"Total después de movimiento"})}),e.jsx(s,{align:"right",width:140,children:e.jsx(m,{children:y(a)})})]})]})]})})}),e.jsxs(B,{sx:{p:3},spacing:3,children:[e.jsx(D,{size:"large",onClick:n,loading:h||u,variant:"contained",color:"primary",fullWidth:!0,type:"submit",sx:{fontWeight:"bold"},children:"Realizar"}),(!h||!u)&&e.jsx(Q,{onClick:i,variant:"outlined",color:"inherit",fullWidth:!0,startIcon:e.jsx(H,{}),children:"Regresar"})]})]})};V.propTypes={data:c.shape({balance:c.any,cardOriginId:c.any,paymentProcessor:c.any,currentBalance:c.any,isGlobal:c.any,transactions:c.any,concept:c.any}),onBack:c.any,onClose:c.func,setTransactionLoading:c.func,transactionLoading:c.any};export{V as default};