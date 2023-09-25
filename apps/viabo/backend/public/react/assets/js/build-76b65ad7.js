import{y as $,j as e,af as te,r as C,S as d,T as x,B as w,I as ne,C as ie,p as R,m as N,R as re,a3 as oe,H as K,D as E,ax as B,ay as ae,ah as X,d as q,g as U,a0 as Q,b as Y,az as le,aA as ce,X as pe,av as O,K as de,P as xe,a5 as he}from"./index-225b8590.js";import{u as _,M as ue,b as ge,d as je,S as ye,N as fe,F as be}from"./build-1eec2217.js";import{C as G}from"./build-76b72f32.js";import{C as Ce,A as Me}from"./build-c3c3669b.js";import{C as me}from"./build-5f844ece.js";import{R as Se}from"./build-2fca7661.js";import"./build-3f013ad2.js";import"./build-5a73c89d.js";import{M as Ie}from"./build-e18cb1a2.js";import"./build-7cb1f9a9.js";import"./build-4ade4230.js";import{a as Z}from"./build-299a3a6a.js";import{A as Te,f as M}from"./build-4b3e21cb.js";import{C as W}from"./build-0f0ab970.js";import{G as we}from"./build-b576546c.js";import{a as J}from"./build-0c430ffd.js";import{f as Ee,b as Pe,H as Fe}from"./build-b4972649.js";import{g as Ae}from"./build-97755ebe.js";import{M as H}from"./build-4007f3e6.js";import{a as Le}from"./build-b558b3a6.js";import{G as z}from"./build-b8a746d1.js";import"./build-c7ce8ef2.js";import"./build-9dca7400.js";import"./build-3a361562.js";import"./build-f05c43d8.js";import"./build-682196dc.js";import"./build-729f57ed.js";import"./build-8d8d1173.js";import"./build-11dda1bc.js";import"./build-2fde0da0.js";import"./build-fc921a08.js";import"./build-48b27ab6.js";import"./build-ecaf0d13.js";import"./build-ac511f54.js";import"./build-c8520ba8.js";import"./build-bf0d9dea.js";import"./build-12ff8f8e.js";import"./build-53a1bd2d.js";import"./build-bee6630b.js";import"./build-d4376901.js";import"./build-447406f9.js";import"./build-83d17a75.js";import"./build-899176f2.js";const Oe=$(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86-.01-.63-.14-1.24-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4.01.86-.17 1.7-.54 2.51zm3.07 1.56-1.3-.74c.52-.92.78-1.98.78-3.15 0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07 0 1.43-.33 2.74-.98 3.89zm3.14 1.32-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69 0-1.51-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31 0 1.74-.44 3.54-1.33 5.35z"}),"Contactless"),V=$(e.jsx("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update"),Re={card:null,isMaster:!0,movements:[],balanceMovements:"$0.00",income:"$0.00",expenses:"$0.00",filterPaymentProcessor:null},Be=(t,l)=>({...Re,setGlobalCard:o=>{l(),t(a=>({card:o}),!1,"SET_GLOBAL_CARD")},resetGlobalCard:()=>{t(o=>({card:null}),!1,"RESET_GLOBAL_CARD")},setIsMaster:o=>{t(a=>({isMaster:o}),!1,"SET_IS_MASTER")},setMovements:o=>{t(a=>({movements:(o==null?void 0:o.movements)||[],balanceMovements:(o==null?void 0:o.balanceMovements)||"$0.00",expenses:(o==null?void 0:o.expenses)||"$0.00",income:(o==null?void 0:o.income)||"$0.00"}),!1,"SET_MASTER_MOVEMENTS")},getBalance:()=>{const{balanceMovements:o,income:a,expenses:s}=l();return{balanceMovements:o,income:a,expenses:s}},setFilterPaymentProcessor:o=>{t(a=>({filterPaymentProcessor:o}),!1,"SET_FILTER_PAYMENT_PROCESSOR")}}),y=te(Be);function Ge(){var h;const t=y(j=>j.card),[l,o]=C.useState(!1),[a,s]=C.useState(!1),r=_(j=>j.setOpenFundingOrder),g=_(j=>j.setFundingCard);return e.jsxs(e.Fragment,{children:[e.jsxs(G,{sx:{p:3},children:[e.jsxs(d,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(x,{variant:"h6",textTransform:"capitalize",children:`Fondear Tarjeta ${(h=t==null?void 0:t.paymentProcessor)==null?void 0:h.toLowerCase()}`}),e.jsx(w,{sx:{flex:"1 1 auto"}})]}),e.jsxs(d,{spacing:2,children:[e.jsxs(d,{flexDirection:"column",justifyContent:"space-between",alignItems:"baseline",gap:1,sx:{display:"flex",flexWrap:"wrap"},children:[e.jsxs(d,{flexDirection:"row",alignItems:"center",justifyContent:"center",sx:{flexGrow:1,flexWrap:"wrap"},gap:1,children:[e.jsx(x,{variant:"subtitle1",sx:{color:"text.secondary"},children:"SPEI"}),e.jsx(ne,{variant:"outlined",color:l?"success":"inherit",onClick:()=>{o(!0),ie(t==null?void 0:t.SPEI),setTimeout(()=>{o(!1)},1e3)},children:l?e.jsx(Ce,{sx:{color:"success"}}):e.jsx(me,{sx:{color:"text.disabled"}})})]}),e.jsx(x,{variant:"body1",children:t==null?void 0:t.SPEI})]}),e.jsxs(d,{flexDirection:"row",flexWrap:"wrap",gap:3,alignItems:"center",children:[e.jsx(R,{fullWidth:!0,color:"primary",variant:"outlined",startIcon:e.jsx(ue,{}),onClick:()=>s(!0),children:"Compartir"}),e.jsx(R,{fullWidth:!0,color:"primary",variant:"contained",startIcon:e.jsx(Se,{}),onClick:()=>{r(!0),g(t)},children:"Orden Fondeo"})]})]})]}),e.jsx(ge,{open:a,card:t,onClose:()=>{s(!1)}})]})}function v({data:t,isLoading:l}){var A;const[o,a]=C.useState("1"),s=y(n=>n.card),r=y(n=>n.setGlobalCard),g=y(n=>n.resetGlobalCard),h=y(n=>n.setIsMaster),j=y(n=>n.setFilterPaymentProcessor),S=y(n=>n.getBalance),b=y(n=>n.movements),T=y(n=>n.isMaster),k=C.useMemo(()=>S(),[b]),m=t==null?void 0:t.master,P=t==null?void 0:t.globals,D=n=>()=>{j(n==null?void 0:n.paymentProcessor),h(!1),r(n),a("1")},F=(n,c)=>()=>{j(n==null?void 0:n.paymentProcessor),r(n),a(c),h(!1)};return e.jsx(Te,{children:e.jsxs(d,{spacing:2,flex:1,children:[e.jsx(N.div,{onClick:()=>{h(!0),a("1"),g(),j(null)},whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsxs(G,{sx:{p:0,cursor:"pointer",border:T?3:0,borderColor:n=>T?n.palette.mode==="dark"?n.palette.secondary.main:n.palette.primary.main:"inherit"},children:[e.jsx(W,{title:e.jsx(d,{flexDirection:"row",gap:1,alignItems:"center",children:e.jsx(x,{variant:"subtitle2",children:"Global [Master]"})}),sx:{px:2,py:2}}),l?e.jsx(re,{mb:3}):e.jsxs(d,{alignItems:"center",pb:2,px:2,children:[e.jsxs(d,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{variant:"h3",children:m==null?void 0:m.balanceFormatted}),e.jsx(x,{variant:"caption",children:"MXN"})]}),e.jsxs(d,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(V,{sx:{width:30,height:30,color:"text.secondary"}}),e.jsxs(d,{alignItems:"center",children:[e.jsx(x,{variant:"subtitle2",children:"En transito"}),e.jsxs(d,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(x,{variant:"body1",children:m==null?void 0:m.inTransitFormatted}),e.jsx(x,{variant:"caption",children:"MXN"})]})]})]})]})]})}),e.jsx(w,{children:e.jsx(oe,{children:e.jsx(d,{direction:{xs:"column",md:"row"},spacing:2,pb:2,children:P==null?void 0:P.map(n=>{const c=Z(n==null?void 0:n.paymentProcessor),I=c==null?void 0:c.component,u=(s==null?void 0:s.id)===(n==null?void 0:n.id);return e.jsx(d,{flexGrow:1,position:"relative",children:e.jsxs(G,{sx:{minWidth:{xs:300,md:"auto"},border:u?3:0,borderColor:i=>u?i.palette.mode==="dark"?i.palette.secondary.main:i.palette.primary.main:"inherit"},children:[e.jsxs(N.div,{onClick:D(n),whileTap:{scale:.8},style:{cursor:"pointer"},children:[e.jsx(W,{title:e.jsxs(d,{flexDirection:"row",gap:1,alignItems:"center",justifyContent:"space-between",children:[e.jsx(x,{variant:"caption",children:n==null?void 0:n.paymentProcessor}),c&&e.jsx(I,{sx:{width:30,height:30}})]}),sx:{px:2,py:2}}),e.jsxs(d,{alignItems:"center",pb:2,px:2,children:[e.jsxs(d,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{variant:"h6",children:n==null?void 0:n.balanceFormatted}),e.jsx(x,{variant:"caption",children:"MXN"})]}),e.jsxs(d,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(V,{sx:{width:20,height:20,color:"text.secondary"}}),e.jsxs(d,{alignItems:"center",children:[e.jsx(x,{variant:"subtitle2",children:"En transito"}),e.jsxs(d,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(x,{variant:"body2",children:n==null?void 0:n.inTransitFormatted}),e.jsx(x,{variant:"caption",children:"MXN"})]})]})]})]})]}),e.jsx(K,{sx:{borderStyle:"dashed"}}),e.jsxs(d,{px:2,py:1,flexDirection:"row",justifyContent:"space-between",children:[e.jsx(R,{onClick:F(n,"1"),children:"Balance"}),e.jsx(R,{onClick:F(n,"2"),children:"Fondeo"})]})]})},n==null?void 0:n.cardId)})})})}),o==="1"&&e.jsx(je,{card:k,title:s&&!T?`Balance ${(A=s==null?void 0:s.paymentProcessor)==null?void 0:A.toLowerCase()}`:"Balance Master"}),o==="2"&&s&&!T&&e.jsx(Ge,{})]})})}v.propTypes={data:E.shape({globals:E.array,master:E.shape({balanceFormatted:E.any,inTransitFormatted:E.any})}),isLoading:E.any};function ke(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"}},{tag:"path",attr:{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}},{tag:"path",attr:{d:"M12 17V7"}}]})(t)}const ee={GLOBAL_CARDS:"global-cards",MOVEMENTS:"master-movements"},De=t=>{const l=J(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);let o=0,a=0;const s=l==null?void 0:l.map(r=>(o+=parseFloat(r==null?void 0:r.balance),a+=parseFloat(r==null?void 0:r.inTransit),{...r,id:r==null?void 0:r.cardId,SPEI:r==null?void 0:r.spei,balanceFormatted:M(r==null?void 0:r.balance),inTransitFormatted:M(r==null?void 0:r.inTransit)}));return{master:{balance:o,inTransit:a,balanceFormatted:M(o),inTransitFormatted:M(a)},globals:s}},ze=t=>{const l=J(t==null?void 0:t.ciphertext,t==null?void 0:t.iv);let o=0,a=0;return{movements:(l==null?void 0:l.map(s=>{const r=parseFloat((s==null?void 0:s.amount)||"0");(s==null?void 0:s.type.toLowerCase())==="gasto"&&(o+=r),(s==null?void 0:s.type.toLowerCase())==="ingreso"&&(a+=r);const g=s!=null&&s.date?B(new Date(s==null?void 0:s.date),"dd MMM yyyy",{locale:ae}):"",h=s!=null&&s.date?B(new Date(s==null?void 0:s.date),"p"):"";return{fullDate:Ee(s==null?void 0:s.date),date:g,time:h,description:s==null?void 0:s.description,amount:r,amountFormatted:M(r),paymentProcessor:s==null?void 0:s.paymentProcessor,type:s==null?void 0:s.type.toLowerCase(),operationType:s==null?void 0:s.typeOperation.toUpperCase(),concept:(s==null?void 0:s.concept)??""}}))??[],income:M(a),expenses:M(o),balanceMovements:M(a-o)}},_e=async()=>{const{data:t}=await X.get("/api/main-cards/information");return De(t)},Ne=async(t,l,o)=>{const{data:a}=await X.get(`/api/cards/movements/${t}/to/${l}`);return ze(a)},We=(t={})=>{const[l,o]=C.useState(null),a=_(r=>r.setMainCard);return{...q([ee.GLOBAL_CARDS],_e,{staleTime:6e4,refetchOnWindowFocus:!1,onError:r=>{const g=U(r,"No se puede obtener la informacion de las tarjetas principales");o(g),a(null),Q.error(g,{type:Y(r)})},onSuccess:r=>{a(r)},...t}),error:l||null}},He=(t,l,o={})=>{if(!t||!l)return null;const a=B(t,"yyyy-MM-dd"),s=B(l,"yyyy-MM-dd"),[r,g]=C.useState(null),h=y(S=>S.setMovements);return{...q([ee.MOVEMENTS],({signal:S})=>Ne(a,s),{staleTime:6e4,retry:!1,refetchOnWindowFocus:!1,onError:S=>{const b=U(S,"No se puede obtener la lista de movimientos. Intente nuevamente o reporte a sistemas");g(b),Q.error(b,{type:Y(S)}),h(null)},...o}),error:r||null}};function Ve(){const t=new Date,l=le(t),o=ce(t),[a,s]=C.useState(l),[r,g]=C.useState(o),h=y(c=>c.filterPaymentProcessor),j=y(c=>c.setMovements),S=y(c=>c.movements),{data:b,isError:T,isLoading:k,isFetching:m,error:P,refetch:D}=He(a,r);C.useEffect(()=>{a&&r&&D()},[a,r]),C.useEffect(()=>{var c;if(h){let I=0,u=0;const i=(c=b==null?void 0:b.movements)==null?void 0:c.filter(p=>{var f;return((f=p==null?void 0:p.paymentProcessor)==null?void 0:f.toLowerCase())===(h==null?void 0:h.toLowerCase())});i==null||i.forEach(p=>{(p==null?void 0:p.type.toLowerCase())==="gasto"?I+=p==null?void 0:p.amount:u+=p==null?void 0:p.amount}),j({movements:i,income:M(u),expenses:M(I),balanceMovements:M(u-I)})}else j(b)},[h,b]);const F=C.useMemo(()=>[{accessorKey:"description",header:"Movimiento",enableHiding:!1,minSize:300,Cell:({cell:c,column:I,row:u})=>{const{original:i}=u,p=(i==null?void 0:i.type)==="ingreso",f=(i==null?void 0:i.type)==="terminal",L=Z(i==null?void 0:i.paymentProcessor),se=L==null?void 0:L.component;return e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsxs(w,{sx:{position:"relative"},children:[e.jsx(pe,{sx:{width:40,height:40,color:"text.secondary",bgcolor:"background.neutral"},children:L?e.jsx(se,{sx:{width:25,height:25}}):f?e.jsx(Oe,{color:"primary",width:24,height:24}):e.jsx(Me,{width:24,height:24})}),e.jsx(w,{sx:{right:0,bottom:0,width:15,height:15,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",color:"common.white",bgcolor:"error.main",justifyContent:"center",...(p||f)&&{bgcolor:"success.main"}},children:p||f?e.jsx(ye,{sx:{width:10,height:10}}):e.jsx(fe,{sx:{width:10,height:10}})})]}),e.jsxs(d,{flexWrap:"wrap",sx:{ml:2},children:[e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:p||f?"Recibe dinero de: ":"Retiro de dinero en:"}),e.jsx(x,{variant:"subtitle2",sx:{textWrap:"wrap"},children:i==null?void 0:i.description}),(i==null?void 0:i.concept)!==""&&e.jsxs(x,{variant:"overline",color:"text.disabled",fontStyle:"italic",sx:{textWrap:"wrap"},children:["concepto : ",i==null?void 0:i.concept]})]})]})}},{accessorKey:"date",header:"Fecha",size:100,Cell:({cell:c,column:I,row:u})=>{const{original:i}=u;return e.jsxs(d,{children:[e.jsx(x,{variant:"subtitle2",children:i==null?void 0:i.date}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:i==null?void 0:i.time})]})}},{accessorKey:"operationType",header:"Tipo",filterVariant:"multi-select",size:100,Cell:({cell:c,column:I,row:u})=>{const{original:i}=u,p=Ae(i==null?void 0:i.operationType),f=p==null?void 0:p.component;return e.jsx(w,{children:p?e.jsx(f,{sx:{width:25,height:25}}):e.jsx(ke,{size:22})})}},{accessorKey:"amountFormatted",header:"Monto",size:100,Cell:({cell:c,column:I,row:u})=>{const{original:i}=u,p=(i==null?void 0:i.type)==="ingreso",f=(i==null?void 0:i.type)==="terminal";return e.jsx(x,{variant:"subtitle2",fontWeight:"bold",color:p||f?"success.main":"error",children:p||f?`+ ${i==null?void 0:i.amountFormatted}`:`- ${i==null?void 0:i.amountFormatted}`})}}],[b]),A=c=>{r!==null&&c>r&&g(c),s(c)},n=c=>{a!==null&&c<a&&s(c),g(c)};return e.jsxs(G,{children:[e.jsxs(d,{p:2,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[e.jsx(H,{size:"small",value:a,onChange:A,maxDate:r,slotProps:{textField:{size:"small",required:!0}},disabled:m,format:"dd MMMM yyyy"}),e.jsx(Le,{children:"-"}),e.jsx(H,{size:"small",value:r,onChange:n,minDate:a,slotProps:{textField:{size:"small",required:!0}},disabled:m,format:"dd MMMM yyyy"})]}),e.jsx(K,{sx:{borderStyle:"dashed"}}),e.jsx(Ie,{enablePinning:!0,enableColumnFilterModes:!0,enableStickyHeader:!0,enableRowVirtualization:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,positionActionsColumn:"last",enableDensityToggle:!1,columns:F,data:S||[],isError:T,textError:P,selectAllMode:"all",initialState:{density:"compact",sorting:[{id:"date",desc:!0}]},state:{isLoading:k,showAlertBanner:T,showProgressBars:m},displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",size:80},"mrt-row-select":{size:10}},muiTableContainerProps:{sx:{maxHeight:{md:"350px",lg:"450px",xl:"700px"}}},renderRowActionMenuItems:({row:c})=>[e.jsx(O,{onClick:()=>console.info("conciliation"),children:"Conciliación"},"conciliation"),e.jsx(O,{onClick:()=>console.info("incidence"),children:"Incidencia"},"incidence"),e.jsx(O,{onClick:()=>console.info("communication"),children:"Comunicación"},"communication"),e.jsx(O,{onClick:()=>console.info("tag"),children:"Tag"},"tag")]})]})}function Rs(){var a,s;const{isCollapse:t}=de(),{data:l,isLoading:o}=We();return e.jsx(xe,{title:"Dashboard Master",children:e.jsxs(Pe,{children:[e.jsx(Fe,{name:"Dashboard Master",links:[{name:"Inicio",href:he.root},{name:"Dashboard Master"}]}),e.jsx(w,{pb:4,children:e.jsxs(z,{container:!0,flex:1,spacing:2,children:[e.jsx(z,{item:!0,xs:12,md:((a=l==null?void 0:l.globals)==null?void 0:a.length)>1?t?4:5:t?3:4,xl:t?3:4,children:e.jsx(v,{data:l,isLoading:o})}),e.jsx(z,{item:!0,xs:12,md:((s=l==null?void 0:l.globals)==null?void 0:s.length)>1?t?8:7:t?9:8,xl:t?9:8,children:e.jsx(Ve,{})})]})}),e.jsx(be,{})]})})}export{Rs as default};