import{t as ue,j as e,E as pe,n as xe,Q as H,g as me,o as he,r as S,a7 as X,B as fe,S as x,T as v,d as W,R as Z,ad as Y,aJ as C,L as ee,b2 as de}from"./index-6863da86.js";import{C as D}from"./build-c7ce8ef2.js";import{f as je}from"./build-a416485b.js";import{u as se,d as be}from"./build-e9e14512.js";import{c as P,b as ge,a as te}from"./build-e86cc6dd.js";import{g as Se}from"./build-6b8b3360.js";import{R as ve}from"./build-15a7749e.js";import{t as ye,u as k}from"./build-f57b0a01.js";import{F as re,M as oe}from"./build-1f7770a6.js";import{R as Ie}from"./build-5eb65a1f.js";import{R as z}from"./build-d31bc419.js";import{A as Ae}from"./build-1adf09ae.js";import{C as B}from"./build-79dc0c41.js";import{S as ne}from"./build-51953880.js";import{C as we}from"./build-320827f8.js";import{T as Ee,a as J}from"./build-28023d9a.js";import"./build-bee6630b.js";import"./build-2b8469e6.js";import"./build-5d2d86dd.js";import"./build-9e7fd326.js";import"./build-6c440e0a.js";import"./build-2ea1affa.js";import"./build-94c95ab3.js";import"./build-82dd0259.js";import"./build-ac6e46ca.js";import"./build-01f8aab2.js";import"./build-a30d033e.js";import"./build-9b410350.js";import"./build-3b37d32a.js";import"./build-a0f4f8d6.js";import"./build-04e845f5.js";import"./build-ecaf0d13.js";import"./build-3106248c.js";const Re=ue(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),le=(d,o,r)=>{var n,c,p;const{transactions:s}=o;let t;return r?t={originCardId:d,destinationCards:[{cardId:(n=o==null?void 0:o.card)==null?void 0:n.value.toString(),concept:(c=o==null?void 0:o.concept)==null?void 0:c.toString(),amount:parseFloat((o==null?void 0:o.amount.toString())===""?"0":(p=o==null?void 0:o.amount)==null?void 0:p.toString().replace(/,/g,"")).toString()}]}:t={originCardId:d,destinationCards:s==null?void 0:s.map(l=>{var a,h,j,f;return{cardId:(h=(a=l==null?void 0:l.card)==null?void 0:a.value)==null?void 0:h.toString(),concept:(j=l==null?void 0:l.concept)==null?void 0:j.toString(),amount:parseFloat((l==null?void 0:l.amount.toString())===""?"0":(f=l==null?void 0:l.amount)==null?void 0:f.toString().replace(/,/g,"")).toString()}})},{cardId:t==null?void 0:t.originCardId,data:Se(t)}},ae=(d={})=>{const o=pe(),r=xe(ye,d);return{...r,transaction:async(t,n)=>{const{onSuccess:c,onError:p,mutationOptions:l}=n;try{await H.promise(r.mutateAsync(t,l),{pending:"Procesando Transferencia ...",success:{render({data:a}){return o.fetchQuery([D.TRANSIT_BALANCE]),o.invalidateQueries([D.CARD_INFO,a==null?void 0:a.cardId]),o.fetchQuery([D.CARD_MOVEMENTS,a==null?void 0:a.cardId]),o.fetchQuery([D.MAIN_CARD]),c(a),"Se realizo la transferencia con éxito"}}})}catch(a){const h=me(a,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");p(h),H.error(h,{type:he(a)})}}}};function K({cards:d,balance:o,setCurrentBalance:r,insufficient:s,cardOriginId:t,setOpen:n,isBinCard:c,setTransactionLoading:p}){const l=S.useRef(null),[a,h]=S.useState(d),{transaction:j,isLoading:f}=ae(),m=k(u=>u==null?void 0:u.selectedCards);S.useEffect(()=>{if(m&&c){const u=m==null?void 0:m.map(i=>({...i,isDisabled:!0}));h(u)}},[m,c]);const I=P().shape({transactions:ge().of(P().shape({amount:te().required("La cantidad es requerida"),card:P().nullable().required("La tarjeta es requerida")}))}),b=se({initialValues:{transactions:(m==null?void 0:m.length)>0&&c&&(m==null?void 0:m.map(u=>({id:Math.random(),card:{value:u==null?void 0:u.value,label:u==null?void 0:u.label,...u},amount:"",concept:""})))||[{id:1,card:null,amount:"",concept:""}]},validationSchema:I,onSubmit:u=>{if(s)return R(!1);const i=le(t,u);p(!0),j(i,{onSuccess:()=>{R(!1),n(!1),p(!1)},onError:()=>{R(!1),p(!1)}})}}),{isSubmitting:y,setFieldValue:A,values:g,setSubmitting:R}=b,T=y||f;return e.jsx(e.Fragment,{children:e.jsx(X,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(re,{formik:b,children:e.jsxs(fe,{sx:{p:3},children:[e.jsxs(x,{spacing:2,direction:{xs:"column-reverse",md:"row"},alignItems:"center",mb:3,children:[e.jsx(v,{variant:"subtitle1",sx:{color:"text.disabled"},children:"Transacciones:"}),e.jsx(x,{spacing:2,justifyContent:"flex-end",direction:{xs:"column",md:"row"},sx:{width:1}}),!c&&e.jsx(W,{type:"button",size:"small",variant:"outlined",startIcon:e.jsx(Ae,{}),disabled:T,onClick:()=>l.current.push({id:Math.random(),card:null,amount:"",concept:""}),sx:{flexShrink:0},children:"Nueva"})]}),e.jsx(be,{name:"transactions",render:u=>(l.current=u,e.jsx(x,{divider:e.jsx(Z,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:g==null?void 0:g.transactions.map((i,M)=>{var V,_,$,Q,G,L;const q=`transactions[${M}].card`,F=`transactions[${M}].amount`,ie=`transactions[${M}].concept`;return e.jsxs(x,{alignItems:"flex-end",spacing:1.5,children:[((_=(V=i==null?void 0:i.card)==null?void 0:V.assignUser)==null?void 0:_.name)&&e.jsx(B,{avatar:e.jsx(Y,{...C(((Q=($=i==null?void 0:i.card)==null?void 0:$.assignUser)==null?void 0:Q.name)??"")}),label:(L=(G=i==null?void 0:i.card)==null?void 0:G.assignUser)==null?void 0:L.name}),e.jsxs(x,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},alignItems:"flex-start",children:[e.jsx(v,{variant:"overline",color:"text.disabled",children:M+1}),e.jsx(Ie,{name:q,disabled:T||c,textFieldParams:{placeholder:"Seleccionar ...",label:"Tarjeta",required:!0,size:"small"},options:a||[],onChange:(N,w)=>{const ce=a==null?void 0:a.map(E=>{var O,U;return!(w!=null&&w.value)&&E.value===((O=i==null?void 0:i.card)==null?void 0:O.value)?{...E,isDisabled:!1}:E.value===(w==null?void 0:w.value)?{...E,isDisabled:!0}:E.value===((U=i==null?void 0:i.card)==null?void 0:U.value)?{...E,isDisabled:!1}:E});h(ce),A(q,w)},sx:{width:{xs:1,lg:.6}}}),e.jsx(z,{sx:{width:{xs:1,lg:.4}},size:"small",name:F,required:!0,label:"Cantidad",placeholder:"0.00",disabled:T,autoComplete:"off",InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),inputComponent:oe,inputProps:{mask:Number,radix:".",thousandsSeparator:",",padFractionalZeros:!0,min:0,max:5e4,scale:2,value:i.amount,onAccept:N=>{r((parseFloat(o)-parseFloat(N===""?"0":N.replace(/,/g,""))).toFixed(2)),A(F,N)}}}})]}),e.jsx(x,{sx:{width:1},children:e.jsx(z,{name:ie,multiline:!0,disabled:T,rows:2,label:"Concepto",placeholder:"Transferencia .."})}),M!==0&&!c&&e.jsx(W,{size:"small",color:"error",disabled:T,startIcon:e.jsx(Re,{}),onClick:()=>u.remove(M),children:"Borrar"})]},i.id)})}))}),e.jsx(Z,{sx:{my:3,borderStyle:"dashed"}}),e.jsx(x,{sx:{px:3,pt:3},children:e.jsx(ee,{variant:"contained",color:"primary",loading:T,fullWidth:!0,type:"submit",startIcon:e.jsx(ne,{}),children:"Enviar"})})]})})})})}function Te({balance:d,setCurrentBalance:o,insufficient:r,cardOriginId:s,setOpen:t,mainCard:n,setTransactionLoading:c}){const{transaction:p,isLoading:l}=ae(),a=P().shape({amount:te().required("La cantidad es requerida")}),h=se({initialValues:{card:n?{label:n==null?void 0:n.label,value:n==null?void 0:n.id}:null,amount:"",concept:""},validationSchema:a,onSubmit:(b,{setSubmitting:y})=>{if(r)return y(!1);const A=le(s,b,!0);c(!0),p(A,{onSuccess:()=>{y(!1),t(!1),c(!1)},onError:()=>{y(!1),c(!1)}})}}),{isSubmitting:j,setFieldValue:f,values:m}=h,I=j||l;return e.jsx(X,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(re,{formik:h,children:e.jsxs(x,{sx:{p:3},spacing:1,children:[e.jsx(x,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},alignItems:"flex-start",justifyContent:"center",children:e.jsx(B,{icon:e.jsx(we,{}),label:n==null?void 0:n.cardNumberHidden})}),e.jsx(x,{children:e.jsx(z,{sx:{width:1},size:"small",name:"amount",required:!0,label:"Cantidad",placeholder:"0.00",disabled:I,autoComplete:"off",InputProps:{startAdornment:e.jsx("span",{style:{marginRight:"5px"},children:"$"}),inputComponent:oe,inputProps:{mask:Number,radix:".",thousandsSeparator:",",padFractionalZeros:!0,min:0,max:5e4,scale:2,value:m.amount,onAccept:b=>{o((parseFloat(d)-parseFloat(b===""?"0":b.replace(/,/g,""))).toFixed(2)),f("amount",b)}}}})}),e.jsx(x,{sx:{width:1},children:e.jsx(z,{name:"concept",multiline:!0,disabled:I,rows:2,label:"Concepto",placeholder:"Transferencia .."})}),e.jsx(x,{sx:{px:3,pt:3},children:e.jsx(ee,{variant:"contained",color:"primary",loading:I,fullWidth:!0,type:"submit",startIcon:e.jsx(ne,{}),children:"Enviar"})})]})})})}function is({open:d,setOpen:o,isFundingCard:r}){var y,A;const s=k(g=>g.card),t=k(g=>g.mainCard),n=de([D.CARDS_COMMERCE_LIST])||[],[c,p]=S.useState(r?t==null?void 0:t.balance:s==null?void 0:s.balance),[l,a]=S.useState("1"),[h,j]=S.useState(!1),f=S.useMemo(()=>c<0,[c]);S.useEffect(()=>{r||p(s==null?void 0:s.balance)},[s==null?void 0:s.balance,r]),S.useEffect(()=>{r&&p(t==null?void 0:t.balance)},[t==null?void 0:t.balance,r]);const m=S.useMemo(()=>n==null?void 0:n.filter(g=>g.id!==(s==null?void 0:s.id)),[n,s==null?void 0:s.id]),I=()=>{p(r?t==null?void 0:t.balance:s==null?void 0:s.balance),o(!1)},b=(g,R)=>{R&&a(R)};return e.jsxs(ve,{open:d,handleClose:I,titleElement:r?e.jsx(v,{variant:"h6",children:"Fondear"}):e.jsxs(x,{children:[e.jsxs(x,{spacing:1,alignItems:"center",direction:"row",children:[e.jsx(v,{variant:"subtitle2",children:"Origen: "}),e.jsxs(v,{variant:"subtitle2",children:[s==null?void 0:s.cardNumberMoreDigits," "]})]}),e.jsx(B,{avatar:e.jsx(Y,{...C(((y=s==null?void 0:s.assignUser)==null?void 0:y.name)??"")}),label:(A=s==null?void 0:s.assignUser)==null?void 0:A.name})]}),children:[!r&&e.jsx(x,{alignItems:"flex-end",sx:{py:1,px:3},children:e.jsxs(Ee,{size:"small",color:"primary",value:l,exclusive:!0,onChange:b,"aria-label":"Platform",disabled:h,children:[e.jsx(J,{value:"1",children:"Tarjetas"}),e.jsx(J,{value:"2",children:"Global"})]})}),e.jsxs(x,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,px:3,py:r?3:1,children:[e.jsx(v,{variant:"subtitle1",children:"Saldo"}),e.jsxs(x,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(v,{variant:"h3",color:f?"error":"success.main",children:je(c)}),e.jsx(v,{variant:"caption",color:f?"error":"success.main",children:"MXN"})]}),f&&e.jsx(v,{variant:"caption",color:"warning.main",textAlign:"center",children:"No cuenta con suficiente saldo para realizar la(s) operacion(es)"})]}),r&&e.jsx(K,{cards:r?n:m,balance:r?t==null?void 0:t.balance:s==null?void 0:s.balance,setCurrentBalance:p,insufficient:f,cardOriginId:r?t==null?void 0:t.id:s==null?void 0:s.id,setOpen:o,isBinCard:r,setTransactionLoading:j}),!r&&e.jsxs(e.Fragment,{children:[l==="1"&&e.jsx(K,{cards:r?n:m,balance:r?t==null?void 0:t.balance:s==null?void 0:s.balance,setCurrentBalance:p,insufficient:f,cardOriginId:r?t==null?void 0:t.id:s==null?void 0:s.id,setOpen:o,isBinCard:r,setTransactionLoading:j}),l==="2"&&e.jsx(Te,{mainCard:t,balance:s==null?void 0:s.balance,setCurrentBalance:p,insufficient:f,cardOriginId:s==null?void 0:s.id,setOpen:o,setTransactionLoading:j})]})]})}export{is as default};