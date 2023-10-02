import{D as o,j as e,S as a,T as t,B as j,r as C,i as w,I as E,C as T,d as B,g as P,a0 as z,b as R,a3 as A,R as L,N as k}from"./index-fe9cccac.js";import{B as M,b as $,d as W,e as G,F as q,u as y}from"./build-462aa9df.js";import"./build-e56cf91f.js";import{g as Y}from"./build-6d9b0aa0.js";import{L as _}from"./build-ae8d849a.js";import{L as H}from"./build-8c12169f.js";import{C as Q}from"./build-83d77235.js";import{C as K}from"./build-3a0a00c5.js";import{C as U}from"./build-316e6977.js";import{R as J}from"./build-b65c576b.js";import"./build-dc545d90.js";import"./build-8c6704b2.js";import"./build-2d75fe1f.js";import"./build-93c6284b.js";import"./build-3850ff23.js";import"./build-13d4e6e1.js";import"./build-ac2beafa.js";import"./build-cfe3475e.js";import"./build-85a1c1dd.js";import"./build-0a8b7475.js";import"./build-f7a33889.js";import"./build-ba4c2166.js";import"./build-bee6630b.js";import"./build-0032fb80.js";import"./build-1eee0384.js";import"./build-2a2deaa7.js";import"./build-8b850ec5.js";import"./build-6567a1ef.js";import"./build-83d17a75.js";import"./build-899176f2.js";import"./build-c84bd68c.js";import"./build-23d329b8.js";const F=({fundingOrder:s})=>{var c,r,l,p,x;return e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Conciliación"}),e.jsx(a,{spacing:2,children:e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"¿Conciliada?"}),e.jsx(j,{textAlign:"center",children:s!=null&&s.conciliated?e.jsx(M,{color:"green",fontWeight:"bold",fontSize:"20px"}):e.jsx($,{fontSize:"20px",color:"red"})})]}),e.jsx(j,{display:"flex",flex:1}),e.jsx(a,{flexGrow:1,spacing:.5,children:((c=s==null?void 0:s.conciliationInfo)==null?void 0:c.number)&&((r=s==null?void 0:s.conciliationInfo)==null?void 0:r.number)!==""&&e.jsxs(e.Fragment,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Movimiento"}),e.jsxs(a,{children:[e.jsx(t,{variant:"body2",children:`${((l=s==null?void 0:s.conciliationInfo)==null?void 0:l.number)||"-"}`}),e.jsx(t,{variant:"body2",children:` ${((p=s==null?void 0:s.conciliationInfo)==null?void 0:p.date)||"-"}`}),e.jsx(t,{variant:"body2",children:` ${((x=s==null?void 0:s.conciliationInfo)==null?void 0:x.userName)||"-"}`})]})]})})]})})]})};F.propTypes={fundingOrder:o.shape({conciliated:o.any,conciliationInfo:o.shape({date:o.any,number:o.string,userName:o.any})})};const I=({fundingOrder:s})=>{var n,m,b,v;const[c,r]=C.useState(!1),l=[],p=((n=s==null?void 0:s.paymentMethods)==null?void 0:n.split(","))||[],x=W(s==null?void 0:s.status);return p==null||p.forEach(i=>{const h=Y(i);h&&l.push({component:h==null?void 0:h.component,width:i==="PAYCASH"?50:30,height:i==="PAYCASH"?50:30})}),e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Datos de la orden"}),e.jsxs(a,{spacing:2,children:[e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Monto:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.amount)??"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Referencia Interna:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.referenceNumber)??"-"})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Cuenta Maestra:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.cardNumber)??"-"})]}),e.jsxs(a,{spacing:1.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Métodos de Fondeo:"}),e.jsx(a,{flexDirection:"row",alignItems:"center",gap:1,position:"relative",children:l==null?void 0:l.map(({component:i,width:h,height:N},D)=>e.jsx(i,{sx:{width:h,height:N,position:"absolute",left:D===0?0:40}},D))})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha de Creación:"}),e.jsx(t,{variant:"body2",children:((m=s==null?void 0:s.registerDate)==null?void 0:m.fullDate)??"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",gutterBottom:!1,sx:{color:"text.disabled"},children:"Liga Orden de Fondeo"}),(s==null?void 0:s.referenceNumber)&&e.jsxs(a,{alignItems:"flex-start",direction:"row",spacing:1,children:[e.jsx(H,{variant:"body2",component:w,underline:"always",to:`/orden-fondeo/${s==null?void 0:s.referenceNumber}`,target:"_blank",color:"info.main",children:`orden-fondeo/${s==null?void 0:s.referenceNumber}`}),e.jsx(j,{position:"relative",children:e.jsx(E,{variant:"outlined",sx:{position:"absolute",p:0},size:"small",color:c?"success":"inherit",onClick:()=>{r(!0),T(`${window.location.host}/orden-fondeo/${s==null?void 0:s.referenceNumber}`),setTimeout(()=>{r(!1)},1e3)},children:c?e.jsx(Q,{fontSize:"small",sx:{color:"success"}}):e.jsx(K,{fontSize:"small",sx:{color:"text.disabled"}})})})]})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Destinatarios:"}),((b=s==null?void 0:s.emails)==null?void 0:b.length)>0?(v=s==null?void 0:s.emails)==null?void 0:v.map(i=>e.jsx(j,{display:"flex",flexDirection:"column",children:e.jsx(j,{children:e.jsx(U,{label:e.jsx(t,{variant:"body2",children:i}),size:"small"})})},i)):e.jsx(t,{variant:"body2",children:"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Estado:"}),e.jsx(j,{children:e.jsx(_,{variant:"ghost",color:x,sx:{textTransform:"capitalize"},children:(s==null?void 0:s.status)||"-"})})]})]}),e.jsx(a,{flexDirection:"row",gap:1,children:e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha Último Estado:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.lastStatusDate)||"-"})]})})]})]})};I.propTypes={fundingOrder:o.shape({amount:o.string,cardNumber:o.string,emails:o.array,lastStatusDate:o.string,paymentMethods:o.string,referenceNumber:o.string,registerDate:o.shape({fullDate:o.string}),status:o.string})};const S=({fundingOrder:s})=>{var c,r,l;return e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Datos del Pago"}),e.jsxs(a,{spacing:2,children:[e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Referencia"}),e.jsx(t,{variant:"body2",children:s==null?void 0:s.payCash})]}),e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Folio"}),e.jsx(t,{variant:"body2",children:((c=s==null?void 0:s.paymentInfo)==null?void 0:c.folio)||"-"})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha"}),e.jsx(t,{variant:"body2",children:((r=s==null?void 0:s.paymentInfo)==null?void 0:r.date)||"-"})]}),e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Código Autorización"}),e.jsx(t,{variant:"body2",children:((l=s==null?void 0:s.paymentInfo)==null?void 0:l.authorizationCode)||"-"})]})]})]})]})};S.propTypes={fundingOrder:o.shape({payCash:o.any,paymentInfo:o.shape({authorizationCode:o.string,date:o.string,folio:o.string})})};const V=(s,c={})=>{const[r,l]=C.useState(null);return{...B([q.DETAILS,s==null?void 0:s.id],()=>G(s),{staleTime:6e4,refetchOnWindowFocus:!1,onError:x=>{const n=P(x,"No se puede obtener la información de la orden de fondeo");l(n),z.error(n,{type:R(x)})},...c}),error:r||null}},Ee=()=>{const s=y(i=>i.fundingOrder),c=y(i=>i.setFundingOrder),r=y(i=>i.setOpenDetailsFundingOrder),l=y(i=>i.openDetailsFundingOrder),{data:p,isLoading:x,isError:n,error:m,refetch:b}=V(s,{enabled:!!s}),v=()=>{r(!1),c(null)};return e.jsx(J,{open:l,handleClose:v,titleElement:e.jsxs(a,{children:[e.jsx(t,{variant:"h6",children:"Orden de Fondeo"}),e.jsxs(t,{variant:"subtitle1",children:["#",s==null?void 0:s.referenceNumber]})]}),children:e.jsx(A,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsxs(a,{spacing:3,p:3,children:[x&&e.jsx(L,{open:x}),n&&!x&&e.jsx(k,{errorMessage:m,titleMessage:"Detalles Orden de Fondeo",handleButton:()=>b()}),!n&&!x&&e.jsxs(e.Fragment,{children:[e.jsx(I,{fundingOrder:p}),["Pagada","Liquidada"].includes(s==null?void 0:s.status)&&(s==null?void 0:s.payCash)!==""&&e.jsx(S,{fundingOrder:p}),e.jsx(F,{fundingOrder:p})]})]})})})};export{Ee as default};
