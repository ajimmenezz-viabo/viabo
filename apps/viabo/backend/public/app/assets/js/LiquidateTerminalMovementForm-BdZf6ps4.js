import{c as b,f as w,U as j,i,S as r,T as s,y,B as a,Q as C,P as n}from"./vendor-5lkxkETF.js";import{g as T,b as q}from"./index-DBYLOnQL.js";import{l as L,C as N}from"./CloudMovementsPay-DZWyG3jP.js";import{i as f}from"./matchTypes-mENztEWg.js";import{g as I}from"./cardTypes-DJaxapqV.js";import"./formatNumber-dGNhWwxT.js";import"./formatTime-jCgU2sMR.js";import"./CardMovementsHeader-DPIxrpWb.js";import"./MaterialDataTable-CiQ4Lsxs.js";import"./useMaterialTable-8QQmzXWd.js";import"./HeaderPage-aVphsUzw.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./AmexLogo-BNm7u8Au.js";import"./CarnetLogo-CFGRKXQt.js";import"./MasterCardLogo-C26mw1FM.js";import"./VisaLogo-BXtVVQaT.js";const M=(t={})=>{const l=b(),e=w(L,t);return{...e,mutate:async(p,u)=>{const{onSuccess:o,onError:c,mutationOptions:g}=u;try{await j.promise(e.mutateAsync(p,g),{pending:"Liquidando movimiento ...",success:{render({data:d}){return l.invalidateQueries([N.MOVEMENTS]),f(o)&&o(d),"Se liquidó el movimiento con éxito"}}})}catch(d){const x=T(d,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");f(c)&&c(x),j.error(x,{type:q(d)})}}}},S=({movement:t,onSuccess:l})=>{var c;const e=I(t==null?void 0:t.cardType),h=e==null?void 0:e.component,{mutate:p,isLoading:u}=M(),o=()=>{p(t==null?void 0:t.dataToLiquidate,{onSuccess:()=>{l()}})};return i.jsxs(r,{px:5,py:3,children:[i.jsxs(r,{alignItems:"center",justifyContent:"center",spacing:.5,children:[i.jsx(r,{alignItems:"center",justifyContent:"center",children:i.jsxs(r,{direction:"row",spacing:1,alignItems:"center",children:[i.jsxs(s,{variant:"h2",children:[" ",t==null?void 0:t.amount]}),i.jsx(s,{variant:"caption",children:"MXN"})]})}),i.jsxs(r,{direction:"row",spacing:.5,alignItems:"center",children:[i.jsx(h,{sx:{width:25,height:25}}),i.jsx(s,{textAlign:"center",variant:"body1",children:t==null?void 0:t.description})]})]}),i.jsxs(r,{divider:i.jsx(y,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:1,alignItems:"center",justifyContent:"center",children:[i.jsx(a,{}),i.jsx(s,{variant:"subtitle1",color:"text.secondary",children:"Detalles de la Transacción"}),i.jsxs(r,{flex:1,width:1,spacing:1,children:[i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(s,{variant:"subtitle2",children:"Comercio:"}),i.jsx(a,{component:"span",color:"primary.light",fontWeight:"bold",children:t==null?void 0:t.commerceName})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(s,{variant:"subtitle2",children:"Terminal:"}),i.jsx(a,{component:"span",color:"primary.main",fontWeight:"bold",children:t==null?void 0:t.terminalName})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(s,{variant:"subtitle2",children:"No. Referencia:"}),i.jsx(a,{component:"span",color:"primary.main",fontWeight:"bold",children:t==null?void 0:t.id})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(s,{variant:"subtitle2",children:"No. Autorización:"}),i.jsx(a,{component:"span",color:"primary.main",fontWeight:"bold",children:t==null?void 0:t.authNumber})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(s,{variant:"subtitle2",children:"Fecha:"}),i.jsx(a,{component:s,variant:"subtitle2",color:"text.primary",children:(c=t==null?void 0:t.transactionDate)==null?void 0:c.fullDate})]})]})]}),i.jsxs(r,{divider:i.jsx(y,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:1,alignItems:"center",justifyContent:"center",children:[i.jsx(a,{}),i.jsx(s,{variant:"subtitle1",color:"text.secondary",children:"Liquidación"}),i.jsxs(r,{flex:1,width:1,spacing:1,children:[i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(s,{variant:"subtitle2",children:"Monto:"}),i.jsx(a,{component:"span",fontWeight:"bold",children:t==null?void 0:t.amountFormat})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(s,{variant:"subtitle2",children:"Comisión:"}),i.jsxs(a,{component:"span",color:"error.main",fontWeight:"bold",children:["-",t==null?void 0:t.commission]})]}),i.jsxs(r,{justifyContent:"space-between",direction:"row",children:[i.jsx(s,{variant:"subtitle2",children:"Monto a Liquidar:"}),i.jsx(a,{component:"span",color:"success.main",fontWeight:"bold",children:t==null?void 0:t.amountToLiquidateFormat})]})]}),i.jsx(r,{width:1,pt:2,children:i.jsx(C,{loading:u,size:"large",fullWidth:!0,variant:"contained",onClick:o,children:"Liquidar"})})]})]})};S.propTypes={movement:n.shape({amount:n.any,amountFormat:n.any,amountToLiquidateFormat:n.any,authNumber:n.any,cardType:n.any,commerceName:n.any,commission:n.any,dataToLiquidate:n.any,description:n.any,id:n.any,terminalName:n.any,transactionDate:n.shape({fullDate:n.any})}),onSuccess:n.func};export{S as default};
//# sourceMappingURL=LiquidateTerminalMovementForm-BdZf6ps4.js.map