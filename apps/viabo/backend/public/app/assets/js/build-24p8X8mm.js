import{O as o,j as e,S as a,T as t,B as m,r as D,i as E,V as N,W as T,d as B,g as P,Q as z,b as A,b5 as L,D as $,Z as k,$ as M}from"./index-zZLQf85F.js";import{B as R,a as W}from"./build-iqbXtRFJ.js";import{b as G,d as q,F as Y,u as y}from"./build-HyF69iU6.js";import{g as _}from"./build-1bT-D2KS.js";import{L as H}from"./build-xvftTHFY.js";import{L as Q}from"./build-nrvKdWYL.js";import{C as K}from"./build-xuU5eCFS.js";import{C as U}from"./build-CRG-Gpo1.js";import{C as V}from"./build-zm_xBd2R.js";import"./build-BiFUCUez.js";import"./build-udEC9BlS.js";import"./build-LqvR14b6.js";import"./build-FIAgVl-Q.js";import"./build-gPmZEdkF.js";import"./build-oAUg0xyq.js";import"./build-0PBFFrMf.js";import"./build-n0Ctg4Eu.js";import"./build-lGOk465E.js";import"./build-zIcY1Gcs.js";import"./build-m87tawfs.js";import"./build-8fJY7UDq.js";import"./build-cX5RxqWy.js";import"./build-9WjOiGQT.js";import"./build-wZ7Dg5PX.js";import"./build-hgCuK9tE.js";import"./build-EhLVEfg9.js";import"./build-AYB_aIcJ.js";import"./build-NjJ5ZdqY.js";import"./build-BC3f-duO.js";import"./build-zH8OCAbq.js";import"./build-zEF68lUW.js";import"./build-vea5MoeN.js";import"./build-K3n06G8N.js";import"./build-Uc7vb3zK.js";const F=({fundingOrder:s})=>{var c,r,l,x,p;return e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Conciliación"}),e.jsx(a,{spacing:2,children:e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"¿Conciliada?"}),e.jsx(m,{textAlign:"center",children:s!=null&&s.conciliated?e.jsx(R,{color:"green",fontWeight:"bold",fontSize:"20px"}):e.jsx(W,{fontSize:"20px",color:"red"})})]}),e.jsx(m,{display:"flex",flex:1}),e.jsx(a,{flexGrow:1,spacing:.5,children:((c=s==null?void 0:s.conciliationInfo)==null?void 0:c.number)&&((r=s==null?void 0:s.conciliationInfo)==null?void 0:r.number)!==""&&e.jsxs(e.Fragment,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Movimiento"}),e.jsxs(a,{children:[e.jsx(t,{variant:"body2",children:`${((l=s==null?void 0:s.conciliationInfo)==null?void 0:l.number)||"-"}`}),e.jsx(t,{variant:"body2",children:` ${((x=s==null?void 0:s.conciliationInfo)==null?void 0:x.date)||"-"}`}),e.jsx(t,{variant:"body2",children:` ${((p=s==null?void 0:s.conciliationInfo)==null?void 0:p.userName)||"-"}`})]})]})})]})})]})};F.propTypes={fundingOrder:o.shape({conciliated:o.any,conciliationInfo:o.shape({date:o.any,number:o.string,userName:o.any})})};const I=({fundingOrder:s})=>{var n,b,j,v;const[c,r]=D.useState(!1),l=[],x=((n=s==null?void 0:s.paymentMethods)==null?void 0:n.split(","))||[],p=G(s==null?void 0:s.status);return x==null||x.forEach(i=>{const h=_(i);h&&l.push({component:h==null?void 0:h.component,width:i==="PAYCASH"?50:30,height:i==="PAYCASH"?50:30})}),e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Datos de la orden"}),e.jsxs(a,{spacing:2,children:[e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Monto:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.amount)??"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Referencia Interna:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.referenceNumber)??"-"})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Cuenta Maestra:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.cardNumber)??"-"})]}),e.jsxs(a,{spacing:1.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Métodos de Fondeo:"}),e.jsx(a,{flexDirection:"row",alignItems:"center",gap:1,position:"relative",children:l==null?void 0:l.map(({component:i,width:h,height:w},C)=>e.jsx(i,{sx:{width:h,height:w,position:"absolute",left:C===0?0:40}},C))})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha de Creación:"}),e.jsx(t,{variant:"body2",children:((b=s==null?void 0:s.registerDate)==null?void 0:b.fullDate)??"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",gutterBottom:!1,sx:{color:"text.disabled"},children:"Liga Orden de Fondeo"}),(s==null?void 0:s.referenceNumber)&&e.jsxs(a,{alignItems:"flex-start",direction:"row",spacing:1,children:[e.jsx(Q,{variant:"body2",component:E,underline:"always",to:`/orden-fondeo/${s==null?void 0:s.referenceNumber}`,target:"_blank",color:"info.main",children:`orden-fondeo/${s==null?void 0:s.referenceNumber}`}),e.jsx(m,{position:"relative",children:e.jsx(N,{variant:"outlined",sx:{position:"absolute",p:0},size:"small",color:c?"success":"inherit",onClick:()=>{r(!0),T(`${window.location.host}/orden-fondeo/${s==null?void 0:s.referenceNumber}`),setTimeout(()=>{r(!1)},1e3)},children:c?e.jsx(K,{fontSize:"small",sx:{color:"success"}}):e.jsx(U,{fontSize:"small",sx:{color:"text.disabled"}})})})]})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Destinatarios:"}),((j=s==null?void 0:s.emails)==null?void 0:j.length)>0?(v=s==null?void 0:s.emails)==null?void 0:v.map(i=>e.jsx(m,{display:"flex",flexDirection:"column",children:e.jsx(m,{children:e.jsx(V,{label:e.jsx(t,{variant:"body2",children:i}),size:"small"})})},i)):e.jsx(t,{variant:"body2",children:"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Estado:"}),e.jsx(m,{children:e.jsx(H,{variant:"ghost",color:p,sx:{textTransform:"capitalize"},children:(s==null?void 0:s.status)||"-"})})]})]}),e.jsx(a,{flexDirection:"row",gap:1,children:e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha Último Estado:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.lastStatusDate)||"-"})]})})]})]})};I.propTypes={fundingOrder:o.shape({amount:o.string,cardNumber:o.string,emails:o.array,lastStatusDate:o.string,paymentMethods:o.string,referenceNumber:o.string,registerDate:o.shape({fullDate:o.string}),status:o.string})};const S=({fundingOrder:s})=>{var c,r,l;return e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Datos del Pago"}),e.jsxs(a,{spacing:2,children:[e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Referencia"}),e.jsx(t,{variant:"body2",children:s==null?void 0:s.payCash})]}),e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Folio"}),e.jsx(t,{variant:"body2",children:((c=s==null?void 0:s.paymentInfo)==null?void 0:c.folio)||"-"})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha"}),e.jsx(t,{variant:"body2",children:((r=s==null?void 0:s.paymentInfo)==null?void 0:r.date)||"-"})]}),e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Código Autorización"}),e.jsx(t,{variant:"body2",children:((l=s==null?void 0:s.paymentInfo)==null?void 0:l.authorizationCode)||"-"})]})]})]})]})};S.propTypes={fundingOrder:o.shape({payCash:o.any,paymentInfo:o.shape({authorizationCode:o.string,date:o.string,folio:o.string})})};const Z=(s,c={})=>{const[r,l]=D.useState(null);return{...B([Y.DETAILS,s==null?void 0:s.id],()=>q(s),{staleTime:6e4,refetchOnWindowFocus:!1,onError:p=>{const n=P(p,"No se puede obtener la información de la orden de fondeo");l(n),z.error(n,{type:A(p)})},...c}),error:r||null}},Be=()=>{const s=y(i=>i.fundingOrder),c=y(i=>i.setFundingOrder),r=y(i=>i.setOpenDetailsFundingOrder),l=y(i=>i.openDetailsFundingOrder),{data:x,isLoading:p,isError:n,error:b,refetch:j}=Z(s,{enabled:!!s});D.useEffect(()=>{s&&j()},[s]);const v=()=>{r(!1),c(null)};return e.jsx(L,{open:l,handleClose:v,titleElement:e.jsxs(a,{children:[e.jsx(t,{variant:"h6",children:"Orden de Fondeo"}),e.jsxs(t,{variant:"subtitle1",children:["#",s==null?void 0:s.referenceNumber]})]}),children:e.jsx($,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsxs(a,{spacing:3,p:3,children:[p&&e.jsx(k,{}),n&&!p&&e.jsx(M,{errorMessage:b,titleMessage:"Detalles Orden de Fondeo",handleButton:()=>j()}),!n&&!p&&e.jsxs(e.Fragment,{children:[e.jsx(I,{fundingOrder:x}),["Pagada","Liquidada"].includes(s==null?void 0:s.status)&&(s==null?void 0:s.payCash)!==""&&e.jsx(S,{fundingOrder:x}),e.jsx(F,{fundingOrder:x})]})]})})})};export{Be as default};
