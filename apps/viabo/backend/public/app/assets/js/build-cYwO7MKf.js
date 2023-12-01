import{k as b,a as w,Q as j,g as C,b as T,j as i,S as r,T as a,E as y,B as s,L as q,O as n}from"./index-mplo7Cy0.js";import{l as L,C as N}from"./build--4CwA0Hz.js";import{i as f}from"./build-yDVAqRjG.js";import{g as I}from"./build-leKxOdBh.js";import"./build-9Efc2eo3.js";import"./build-D3xC4GbD.js";import"./build-oGgHkT3Q.js";import"./build-PfoRwXqx.js";import"./build-UhUpPKic.js";import"./build-nSdaxBfa.js";import"./build-Qg3JQUP_.js";import"./build-M7AoVccO.js";import"./build-jhrJ8roR.js";import"./build-E66JUiqZ.js";import"./build-onu4nqUu.js";import"./build-1LmYI3dU.js";import"./build-9TFJ6mqz.js";import"./build-1d3PLEzR.js";import"./build-u-keFLA5.js";import"./build-tosIezQB.js";import"./build-yyP470yP.js";import"./build-olvv2LeH.js";import"./build-DxgzDpLF.js";import"./build-rsBjAxA5.js";const M=(t={})=>{const l=b(),e=w(L,t);return{...e,mutate:async(p,u)=>{const{onSuccess:c,onError:o,mutationOptions:g}=u;try{await j.promise(e.mutateAsync(p,g),{pending:"Liquidando movimiento ...",success:{render({data:d}){return l.invalidateQueries([N.MOVEMENTS]),f(c)&&c(d),"Se liquidó el movimiento con éxito"}}})}catch(d){const x=C(d,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");f(o)&&o(x),j.error(x,{type:T(d)})}}}},S=({movement:t,onSuccess:l})=>{var o;const e=I(t==null?void 0:t.cardType),h=e==null?void 0:e.component,{mutate:p,isLoading:u}=M(),c=()=>{p(t==null?void 0:t.dataToLiquidate,{onSuccess:()=>{l()}})};return i.jsxs(r,{px:5,py:3,children:[i.jsxs(r,{alignItems:"center",justifyContent:"center",spacing:.5,children:[i.jsx(r,{alignItems:"center",justifyContent:"center",children:i.jsxs(r,{direction:"row",spacing:1,alignItems:"center",children:[i.jsxs(a,{variant:"h2",children:[" ",t==null?void 0:t.amount]}),i.jsx(a,{variant:"caption",children:"MXN"})]})}),i.jsxs(r,{direction:"row",spacing:.5,alignItems:"center",children:[i.jsx(h,{sx:{width:25,height:25}}),i.jsx(a,{textAlign:"center",variant:"body1",children:t==null?void 0:t.description})]})]}),i.jsxs(r,{divider:i.jsx(y,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:1,alignItems:"center",justifyContent:"center",children:[i.jsx(s,{}),i.jsx(a,{variant:"subtitle1",color:"text.secondary",children:"Detalles de la Transacción"}),i.jsxs(r,{flex:1,width:1,spacing:1,children:[i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(a,{variant:"subtitle2",children:"Comercio:"}),i.jsx(s,{component:"span",color:"primary.light",fontWeight:"bold",children:t==null?void 0:t.commerceName})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(a,{variant:"subtitle2",children:"Terminal:"}),i.jsx(s,{component:"span",color:"primary.main",fontWeight:"bold",children:t==null?void 0:t.terminalName})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(a,{variant:"subtitle2",children:"No. Referencia:"}),i.jsx(s,{component:"span",color:"primary.main",fontWeight:"bold",children:t==null?void 0:t.id})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(a,{variant:"subtitle2",children:"No. Autorización:"}),i.jsx(s,{component:"span",color:"primary.main",fontWeight:"bold",children:t==null?void 0:t.authNumber})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(a,{variant:"subtitle2",children:"Fecha:"}),i.jsx(s,{component:a,variant:"subtitle2",color:"text.primary",children:(o=t==null?void 0:t.transactionDate)==null?void 0:o.fullDate})]})]})]}),i.jsxs(r,{divider:i.jsx(y,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:1,alignItems:"center",justifyContent:"center",children:[i.jsx(s,{}),i.jsx(a,{variant:"subtitle1",color:"text.secondary",children:"Liquidación"}),i.jsxs(r,{flex:1,width:1,spacing:1,children:[i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(a,{variant:"subtitle2",children:"Monto:"}),i.jsx(s,{component:"span",fontWeight:"bold",children:t==null?void 0:t.amountFormat})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(a,{variant:"subtitle2",children:"Comisión:"}),i.jsxs(s,{component:"span",color:"error.main",fontWeight:"bold",children:["-",t==null?void 0:t.commission]})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(a,{variant:"subtitle2",children:"Monto a Liquidar:"}),i.jsx(s,{component:"span",color:"success.main",fontWeight:"bold",children:t==null?void 0:t.amountToLiquidateFormat})]})]}),i.jsx(r,{width:1,pt:2,children:i.jsx(q,{loading:u,size:"large",fullWidth:!0,variant:"contained",onClick:c,children:"Liquidar"})})]})]})};S.propTypes={movement:n.shape({amount:n.any,amountFormat:n.any,amountToLiquidateFormat:n.any,authNumber:n.any,cardType:n.any,commerceName:n.any,commission:n.any,dataToLiquidate:n.any,description:n.any,id:n.any,terminalName:n.any,transactionDate:n.shape({fullDate:n.any})}),onSuccess:n.func};export{S as default};
