import{P as o,i as e,S as a,T as t,B as j,r as D,aC as w,z as N,I as B,aL as P,bZ as T,bP as z,e as R,U as A}from"./vendor-5lkxkETF.js";import{B as L,a as k}from"./index-C6YA3NyB.js";import{f as M,g as $,b as W,S as G,R as q,E as Y}from"./index-D5oZe3QV.js";import{b as _,d as H,F as U,u as y}from"./FundingOrders-CwRsfYRq.js";import{g as K}from"./operationTypes-DDw4nqok.js";import{L as Q}from"./TextMaxLine-Cweu1ZMD.js";import{R as Z}from"./RightPanel-CslEBAnY.js";import"./iconBase-jHcAKz16.js";import"./ModalAlert-Ju1kumTl.js";import"./MaterialDataTable-D4JD1893.js";import"./cardTypes-CvY5Fp9f.js";import"./AmexLogo-BNm7u8Au.js";import"./CarnetLogo-CFGRKXQt.js";import"./MasterCardLogo-C26mw1FM.js";import"./VisaLogo-BXtVVQaT.js";import"./cardMovementsAdapter-CYXVbuW_.js";import"./formatNumber-dGNhWwxT.js";import"./formatTime-jCgU2sMR.js";import"./HeaderPage-BXF44eOm.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./viabo-card-CcTpX9JZ.js";import"./viabo-pay-Tb0TUikx.js";import"./formik.esm-CTTSENmf.js";import"./matchTypes-mENztEWg.js";import"./UploadSingleFile-D4e1QNmZ.js";const C=({fundingOrder:s})=>{var c,r,i,x,p;return e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Conciliación"}),e.jsx(a,{spacing:2,children:e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"¿Conciliada?"}),e.jsx(j,{textAlign:"center",children:s!=null&&s.conciliated?e.jsx(L,{color:"green",fontWeight:"bold",fontSize:"20px"}):e.jsx(k,{fontSize:"20px",color:"red"})})]}),e.jsx(j,{display:"flex",flex:1}),e.jsx(a,{flexGrow:1,spacing:.5,children:((c=s==null?void 0:s.conciliationInfo)==null?void 0:c.number)&&((r=s==null?void 0:s.conciliationInfo)==null?void 0:r.number)!==""&&e.jsxs(e.Fragment,{children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Movimiento"}),e.jsxs(a,{children:[e.jsx(t,{variant:"body2",children:`${((i=s==null?void 0:s.conciliationInfo)==null?void 0:i.number)||"-"}`}),e.jsx(t,{variant:"body2",children:` ${((x=s==null?void 0:s.conciliationInfo)==null?void 0:x.date)||"-"}`}),e.jsx(t,{variant:"body2",children:` ${((p=s==null?void 0:s.conciliationInfo)==null?void 0:p.userName)||"-"}`})]})]})})]})})]})};C.propTypes={fundingOrder:o.shape({conciliated:o.any,conciliationInfo:o.shape({date:o.any,number:o.string,userName:o.any})})};const I=({fundingOrder:s})=>{var n,b,m,v;const[c,r]=D.useState(!1),i=[],x=((n=s==null?void 0:s.paymentMethods)==null?void 0:n.split(","))||[],p=_(s==null?void 0:s.status);return x==null||x.forEach(l=>{const h=K(l);h&&i.push({component:h==null?void 0:h.component,width:l==="PAYCASH"?50:30,height:l==="PAYCASH"?50:30})}),e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Datos de la orden"}),e.jsxs(a,{spacing:2,children:[e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Monto:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.amount)??"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Referencia Interna:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.referenceNumber)??"-"})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Cuenta Maestra:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.cardNumber)??"-"})]}),e.jsxs(a,{spacing:1.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Métodos de Fondeo:"}),e.jsx(a,{flexDirection:"row",alignItems:"center",gap:1,position:"relative",children:i==null?void 0:i.map(({component:l,width:h,height:E},F)=>e.jsx(l,{sx:{width:h,height:E,position:"absolute",left:F===0?0:40}},F))})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha de Creación:"}),e.jsx(t,{variant:"body2",children:((b=s==null?void 0:s.registerDate)==null?void 0:b.fullDate)??"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",gutterBottom:!1,sx:{color:"text.disabled"},children:"Liga Orden de Fondeo"}),(s==null?void 0:s.referenceNumber)&&e.jsxs(a,{alignItems:"flex-start",direction:"row",spacing:1,children:[e.jsx(w,{variant:"body2",component:N,underline:"always",to:`/orden-fondeo/${s==null?void 0:s.referenceNumber}`,target:"_blank",color:"info.main",children:`orden-fondeo/${s==null?void 0:s.referenceNumber}`}),e.jsx(j,{position:"relative",children:e.jsx(B,{variant:"outlined",sx:{position:"absolute",p:0},size:"small",color:c?"success":"inherit",onClick:()=>{r(!0),M(`${window.location.host}/orden-fondeo/${s==null?void 0:s.referenceNumber}`),setTimeout(()=>{r(!1)},1e3)},children:c?e.jsx(P,{fontSize:"small",sx:{color:"success"}}):e.jsx(T,{fontSize:"small",sx:{color:"text.disabled"}})})})]})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Destinatarios:"}),((m=s==null?void 0:s.emails)==null?void 0:m.length)>0?(v=s==null?void 0:s.emails)==null?void 0:v.map(l=>e.jsx(j,{display:"flex",flexDirection:"column",children:e.jsx(j,{children:e.jsx(z,{label:e.jsx(t,{variant:"body2",children:l}),size:"small"})})},l)):e.jsx(t,{variant:"body2",children:"-"})]}),e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Estado:"}),e.jsx(j,{children:e.jsx(Q,{variant:"ghost",color:p,sx:{textTransform:"capitalize"},children:(s==null?void 0:s.status)||"-"})})]})]}),e.jsx(a,{flexDirection:"row",gap:1,children:e.jsxs(a,{spacing:.5,flex:1,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha Último Estado:"}),e.jsx(t,{variant:"body2",children:(s==null?void 0:s.lastStatusDate)||"-"})]})})]})]})};I.propTypes={fundingOrder:o.shape({amount:o.string,cardNumber:o.string,emails:o.array,lastStatusDate:o.string,paymentMethods:o.string,referenceNumber:o.string,registerDate:o.shape({fullDate:o.string}),status:o.string})};const S=({fundingOrder:s})=>{var c,r,i;return e.jsxs(a,{spacing:2,children:[e.jsx(t,{variant:"subtitle1",fontWeight:"bold",children:"Datos del Pago"}),e.jsxs(a,{spacing:2,children:[e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Referencia"}),e.jsx(t,{variant:"body2",children:s==null?void 0:s.payCash})]}),e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Folio"}),e.jsx(t,{variant:"body2",children:((c=s==null?void 0:s.paymentInfo)==null?void 0:c.folio)||"-"})]})]}),e.jsxs(a,{flexDirection:"row",gap:1,children:[e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha"}),e.jsx(t,{variant:"body2",children:((r=s==null?void 0:s.paymentInfo)==null?void 0:r.date)||"-"})]}),e.jsxs(a,{flex:1,spacing:.5,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Código Autorización"}),e.jsx(t,{variant:"body2",children:((i=s==null?void 0:s.paymentInfo)==null?void 0:i.authorizationCode)||"-"})]})]})]})]})};S.propTypes={fundingOrder:o.shape({payCash:o.any,paymentInfo:o.shape({authorizationCode:o.string,date:o.string,folio:o.string})})};const J=(s,c={})=>{const[r,i]=D.useState(null);return{...R([U.DETAILS,s==null?void 0:s.id],()=>H(s),{staleTime:6e4,refetchOnWindowFocus:!1,onError:p=>{const n=$(p,"No se puede obtener la información de la orden de fondeo");i(n),A.error(n,{type:W(p)})},...c}),error:r||null}},Fe=()=>{const s=y(l=>l.fundingOrder),c=y(l=>l.setFundingOrder),r=y(l=>l.setOpenDetailsFundingOrder),i=y(l=>l.openDetailsFundingOrder),{data:x,isLoading:p,isError:n,error:b,refetch:m}=J(s,{enabled:!!s});D.useEffect(()=>{s&&m()},[s]);const v=()=>{r(!1),c(null)};return e.jsx(Z,{open:i,handleClose:v,titleElement:e.jsxs(a,{children:[e.jsx(t,{variant:"h6",children:"Orden de Fondeo"}),e.jsxs(t,{variant:"subtitle1",children:["#",s==null?void 0:s.referenceNumber]})]}),children:e.jsx(G,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsxs(a,{spacing:3,p:3,children:[p&&e.jsx(q,{}),n&&!p&&e.jsx(Y,{errorMessage:b,titleMessage:"Detalles Orden de Fondeo",handleButton:()=>m()}),!n&&!p&&e.jsxs(e.Fragment,{children:[e.jsx(I,{fundingOrder:x}),["Pagada","Liquidada"].includes(s==null?void 0:s.status)&&(s==null?void 0:s.payCash)!==""&&e.jsx(S,{fundingOrder:x}),e.jsx(C,{fundingOrder:x})]})]})})})};export{Fe as default};
//# sourceMappingURL=FundingOrderDetails-Cbwdw5wY.js.map