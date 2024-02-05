import{c as R,f as W,a9 as B,s as M,bA as S,r as E,i as e,bx as k,by as F,bz as L,bB as s,bC as V,B as z,T as r,V as C,a0 as D,dv as N,O as P,dW as Q,P as o}from"./vendor-StReGf79.js";import{f as b}from"./formatNumber-D2wM-uoj.js";import{g as _,a as G,S as H}from"./index-mKe_odg3.js";import{a as $}from"./crypto-DOZFMzid.js";import{i as A}from"./matchTypes-VzXr5CmM.js";import{c as K,V as I}from"./DashboardViaboSpeiByProfile-iskGPtk8.js";import"./index.esm-wXlZO6aY.js";import"./iconBase-cjdMeG85.js";import"./formatTime-j4oUQxO9.js";import"./index.es-PN-q7ccZ.js";import"./HeaderPage-fCD0eWYY.js";import"./fade-HpdRXKiE.js";import"./transition-Uc7vb3zK.js";import"./useMaterialTable-3iMRnh5c.js";import"./spei-third-accounts-store-tHzxA6YR.js";import"./TextMaxLine-Nybdgfc_.js";import"./formik.esm-ayHIcoJR.js";import"./UploadSingleFile-NVjHNA2_.js";const Y=(i,l)=>{const a={externalAccounts:i==null?void 0:i.map(t=>{var d,p,c;return{id:(p=(d=t==null?void 0:t.account)==null?void 0:d.id)==null?void 0:p.toString(),amount:parseFloat((t==null?void 0:t.amount.toString())===""?"0":(c=t==null?void 0:t.amount)==null?void 0:c.toString().replace(/,/g,""))}}),concept:(l==null?void 0:l.toString())||""};return $(a)},q=(i={})=>{const l=R(),a=W(K,i);return{...a,mutate:async(d,p)=>{const{onSuccess:c,onError:x,mutationOptions:y}=p;try{const u=await B.promise(a.mutateAsync(d,y),{pending:"Enviando Transacciones ..."});l.invalidateQueries([I.BALANCE]),l.invalidateQueries([I.MOVEMENTS]),A(c)&&c(u)}catch(u){const h=_(u,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");A(x)&&x(h),B.error(h,{type:G(u)})}}}},f=M(S)(({theme:i})=>({"& td":{paddingTop:i.spacing(.5),paddingBottom:i.spacing(.5)}})),J=({data:i,onBack:l,setTransactionLoading:a,transactionLoading:t,onSuccess:d})=>{const{mutate:p,isLoading:c}=q(),x=E.useMemo(()=>(i==null?void 0:i.transactions)||[],[i]),y=E.useMemo(()=>(parseFloat(i==null?void 0:i.balance)-(i==null?void 0:i.currentBalance)).toFixed(2)||0,[i]),u=()=>{const{transactions:n,concept:m}=i,g=Y(n,m);a(!0),p(g,{onSuccess:j=>{d(j)},onError:()=>{a(!1)}})},h=c||t;return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(k,{sx:{minWidth:200},children:e.jsxs(F,{children:[e.jsx(L,{sx:{borderBottom:n=>`solid 1px ${n.palette.divider}`},children:e.jsxs(S,{children:[e.jsx(s,{width:40,children:"#"}),e.jsx(s,{align:"left",children:"Movimiento"}),e.jsx(s,{align:"right",children:"Monto"})]})}),e.jsxs(V,{children:[x==null?void 0:x.map((n,m)=>{var g,j,T,v;return e.jsxs(S,{sx:{borderBottom:O=>`solid 1px ${O.palette.divider}`},children:[e.jsx(s,{children:m+1}),e.jsx(s,{align:"left",children:e.jsxs(z,{sx:{maxWidth:200},children:[e.jsx(r,{variant:"subtitle2",fontWeight:"bold",children:(g=n==null?void 0:n.account)==null?void 0:g.alias}),e.jsx(r,{variant:"subtitle2",children:(T=(j=n==null?void 0:n.account)==null?void 0:j.bank)==null?void 0:T.name}),e.jsx(r,{variant:"subtitle2",children:(v=n==null?void 0:n.account)==null?void 0:v.clabe}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:n==null?void 0:n.concept})]})}),e.jsx(s,{align:"right",children:b(n==null?void 0:n.amount)})]},m)}),e.jsxs(f,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsx(C,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"flex-end",children:e.jsx(r,{children:"Saldo Disponible"})})}),e.jsx(s,{align:"right",width:120,children:e.jsx(r,{children:b(i==null?void 0:i.balance)})})]}),e.jsxs(f,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsx(r,{variant:"h6",children:"Total a dispersar"})}),e.jsx(s,{align:"right",width:120,children:e.jsx(r,{variant:"h6",sx:{color:"error.main"},children:b(-(i==null?void 0:i.currentBalance))})})]}),e.jsxs(f,{children:[e.jsx(s,{colSpan:1}),e.jsx(s,{align:"right",children:e.jsx(r,{children:"Total después de movimiento"})}),e.jsx(s,{align:"right",width:140,children:e.jsx(r,{children:b(y)})})]})]})]})})}),e.jsxs(C,{sx:{p:3},spacing:3,children:[e.jsx(D,{size:"large",onClick:u,endIcon:e.jsx(N,{}),loading:h,variant:"contained",color:"primary",fullWidth:!0,type:"submit",sx:{fontWeight:"bold"},children:"Realizar"}),!h&&e.jsx(P,{onClick:l,variant:"outlined",color:"inherit",fullWidth:!0,startIcon:e.jsx(Q,{}),children:"Regresar"})]})]})};J.propTypes={data:o.shape({balance:o.any,currentBalance:o.any,concept:o.any,transactions:o.array}),onBack:o.func,onSuccess:o.func,setTransactionLoading:o.func,transactionLoading:o.any};export{J as default};
//# sourceMappingURL=SpeiOutResume-bzSQo0vv.js.map