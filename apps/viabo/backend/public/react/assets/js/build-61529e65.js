import{r as c,y as G,j as e,d as T,g as P,z as Se,k as se,a as be,b as ne,S as u,T as C,B as b,I as W,C as ye,p as O,Z as re,D as f,E as oe,G as we,H as ve,J as Ie,K as Me,R as ie,N as $,m as L,O as Ee,Q as De,U as ae,V as Oe,W as le,X as Re,Y as Ae,_ as Pe,$ as ke,a0 as Fe,n as Le,a1 as Te,a2 as Ne,a3 as Be,a4 as He,P as _e,a5 as ze,a6 as Ve,a7 as We}from"./index-52f3dfc5.js";import{C as D}from"./build-c7ce8ef2.js";import{g as Qe,a as Ge,c as $e,u as p,M as qe,b as Ye,C as Xe,d as Ke,e as Je,f as Ze,h as Ue,P as et,i as tt,T as st,F as nt}from"./build-eb97abf1.js";import{C as ce}from"./build-f6d6e604.js";import{V as rt}from"./build-f4130253.js";import{V as ot}from"./build-c2902dfc.js";import{C as it,a as at,b as lt,H as ct}from"./build-403d520b.js";import{C as dt}from"./build-e2e8afa7.js";import{C as ut}from"./build-e525973c.js";import{R as xt}from"./build-19601d60.js";import{S as ht}from"./build-588bcae8.js";import{C as mt}from"./build-f67de522.js";import"./build-c5ba3c37.js";import{u as ft}from"./build-e9f47470.js";import{S as pt}from"./build-fe0392f5.js";import{A as Ct,L as jt}from"./build-9092ed75.js";import{G as z}from"./build-8fcc5577.js";import{M as gt}from"./build-ba0beaeb.js";import{C as St}from"./build-96a5c3fc.js";import{L as bt,S as yt,a as wt,b as vt,c as V,d as Z}from"./build-e2353a68.js";import{s as It}from"./build-9563ddbe.js";import{L as Mt,I as Et}from"./build-ca5e47bb.js";import{s as Dt}from"./build-f8fc243b.js";import{E as U}from"./build-2a90e701.js";import{I as Ot}from"./build-2f366dad.js";import{S as Rt}from"./build-5c8c8589.js";import{C as At}from"./build-be6f7eb2.js";import{D as ee}from"./build-9070c40a.js";import{C as Pt}from"./build-14727b18.js";import"./build-8158aef9.js";import"./build-39396126.js";import"./build-5b8b07bd.js";import"./build-477daaf2.js";import"./build-34a56e1f.js";import"./build-6b6057ed.js";import"./build-f7effa0e.js";import"./build-ca24cb32.js";import"./build-18b35141.js";import"./build-9e5b31e9.js";import"./build-bde68dd5.js";import"./build-981164bd.js";import"./build-ecaf0d13.js";import"./build-d343e405.js";import"./build-b586a278.js";import"./build-bee6630b.js";function kt(t){const[n,o]=c.useState((t==null?void 0:t.defaultDense)||!1),[a,l]=c.useState((t==null?void 0:t.defaultOrderBy)||"name"),[d,s]=c.useState((t==null?void 0:t.defaultOrder)||"asc"),[r,x]=c.useState((t==null?void 0:t.defaultCurrentPage)||0),[h,w]=c.useState((t==null?void 0:t.defaultRowsPerPage)||5),[i,y]=c.useState((t==null?void 0:t.defaultSelected)||[]);return{dense:n,order:d,page:r,setPage:x,orderBy:a,rowsPerPage:h,selected:i,setSelected:y,resetSelected:()=>{y((t==null?void 0:t.defaultSelected)||[])},onSelectRow:m=>{const g=i.indexOf(m);let S=[];g===-1?S=S.concat(i,m):g===0?S=S.concat(i.slice(1)):g===i.length-1?S=S.concat(i.slice(0,-1)):g>0&&(S=S.concat(i.slice(0,g),i.slice(g+1))),y(S)},onSelectAllRows:(m,g)=>{if(m){y(g);return}y([])},onSort:m=>{m!==""&&(s(a===m&&d==="asc"?"desc":"asc"),l(m))},onChangePage:(m,g)=>{x(g)},onChangeDense:m=>{o(m.target.checked)},onChangeRowsPerPage:m=>{w(parseInt(m.target.value,10)),x(0)}}}const Ft=G(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),Lt=G(e.jsx("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message"),te=G(e.jsx("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"PasswordTwoTone"),Tt=(t,n={})=>{const[o,a]=c.useState(null);return{...T([D.CARDS_COMMERCE_LIST],()=>Qe(t),{staleTime:6e4,refetchOnMount:"always",onError:d=>{const s=P(d,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");a(s)},...n}),error:o||null}},Nt=(t,n={})=>{const[o,a]=c.useState(null);return{...T([D.CARD_INFO,t],({signal:d})=>Ge(t,d),{staleTime:6e4,onError:d=>{const s=P(d,"No se puede obtener la informacion de la tarjeta. Intente nuevamente o reporte a sistemas");a(s)},refetchOnWindowFocus:!1,...n}),error:o||null}},Bt=(t={})=>{const{enqueueSnackbar:n}=Se(),[o,a]=c.useState(null),l=se();return{...be($e,{onSuccess:s=>{a(null),l.refetchQueries([D.CARD_INFO,s==null?void 0:s.id]),n(s!=null&&s.cardON?"Se encendió la tarjeta con éxito":"Se apagó la tarjeta con éxito",{variant:"success",autoHideDuration:5e3})},onError:s=>{const r=P(s,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");n(r,{variant:ne(s),autoHideDuration:5e3}),a(r)},...t}),error:o||null}};function Ht({disabledExpand:t=!1}){const n=p(i=>i.card),[o,a]=c.useState(t),[l,d]=c.useState(!1),[s,r]=c.useState(!1),x=p(i=>i.setOpenFundingOrder),h=p(i=>i.setFundingCard),w=p(i=>i.isMainCardSelected);return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{sx:{p:3},children:[e.jsxs(u,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(C,{variant:"h6",children:w?"Fondear Comercio":"Fondear Tarjeta"}),e.jsx(b,{sx:{flex:"1 1 auto"}}),!t&&e.jsx(W,{onClick:()=>{a(i=>!i)},children:o?e.jsx(rt,{sx:{color:"text.disabled"}}):e.jsx(ot,{sx:{color:"text.disabled"}})})]}),e.jsx(it,{in:o,timeout:"auto",children:e.jsxs(u,{spacing:2,children:[e.jsxs(u,{flexDirection:"column",justifyContent:"space-between",alignItems:"baseline",gap:1,sx:{display:"flex",flexWrap:"wrap"},children:[e.jsxs(u,{flexDirection:"row",alignItems:"center",justifyContent:"center",sx:{flexGrow:1,flexWrap:"wrap"},gap:1,children:[e.jsx(C,{variant:"subtitle1",sx:{color:"text.secondary"},children:"SPEI"}),e.jsx(W,{variant:"outlined",color:l?"success":"inherit",onClick:()=>{d(!0),ye(n==null?void 0:n.SPEI),setTimeout(()=>{d(!1)},1e3)},children:l?e.jsx(dt,{sx:{color:"success"}}):e.jsx(ut,{sx:{color:"text.disabled"}})})]}),e.jsx(C,{variant:"body1",children:n==null?void 0:n.SPEI})]}),e.jsxs(u,{flexDirection:"row",flexWrap:"wrap",gap:3,alignItems:"center",children:[e.jsx(O,{fullWidth:!0,color:"primary",variant:"outlined",startIcon:e.jsx(qe,{}),onClick:()=>r(!0),children:"Compartir"}),e.jsx(O,{fullWidth:!0,color:"primary",variant:"contained",startIcon:e.jsx(xt,{}),onClick:()=>{x(!0),h(n)},children:"Orden Fondeo"})]})]})})]}),e.jsx(Ye,{card:n,open:s,onClose:()=>{r(!1)}})]})}function _t(){const t=p(o=>o.card),{assignUser:n}=t;return e.jsxs(ce,{sx:{p:3},children:[e.jsx(C,{variant:"h6",gutterBottom:!0,children:"Asignado a:"}),e.jsxs(u,{spacing:3,children:[e.jsxs(u,{justifyContent:"space-between",gap:1,children:[e.jsx(C,{variant:"subtitle2",sx:{color:"text.secondary"},textTransform:"capitalize",children:"Nombre"}),e.jsx(C,{variant:"body2",children:n==null?void 0:n.name})]}),(n==null?void 0:n.phone)&&e.jsxs(u,{justifyContent:"space-between",gap:1,children:[e.jsx(C,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Telefono"}),e.jsx(C,{variant:"body2",children:(n==null?void 0:n.phone)||"-"})]}),e.jsxs(u,{justifyContent:"space-between",gap:1,children:[e.jsx(C,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Correo"}),e.jsx(C,{variant:"body2",children:n==null?void 0:n.email})]})]})]})}const zt=re(t=>e.jsx(ht,{focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,...t}))(({theme:t})=>({width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:t.palette.mode==="dark"?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:t.palette.mode==="light"?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:26/2,backgroundColor:t.palette.error.main,opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}));function de({card:t}){const[n,o]=c.useState(!1),[a,l]=c.useState(!1),{mutate:d,isLoading:s}=Bt(),r=ft([D.CARD_INFO,t==null?void 0:t.id])===1;c.useEffect(()=>{o(!1),l(!1)},[t==null?void 0:t.id]);const x=h=>{d({...t,cardON:!(t!=null&&t.cardON)})};return e.jsx(oe,{sx:h=>({borderRadius:1,position:"relative",zIndex:1,backgroundColor:h.palette.primary.light,color:"white",minHeight:"auto!important",height:{xs:1,sm:"auto"},py:{xs:0,sm:2}}),children:e.jsxs(u,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[e.jsxs(u,{flexDirection:"column",spacing:0,alignItems:{xs:"center",md:"start"},children:[e.jsxs(u,{flexDirection:"row",gap:1,alignItems:"center",children:[e.jsx(C,{variant:"subtitle2",children:"Disponible"}),s||r?e.jsx(we,{size:30,containerProps:{display:"flex",ml:1}}):e.jsx(zt,{disabled:s,color:t!=null&&t.cardON?"success":"error",checked:(t==null?void 0:t.cardON)||!1,onChange:x,sx:{m:1},inputProps:{"aria-label":"controlled"}})]}),e.jsxs(u,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(C,{variant:"h3",children:t==null?void 0:t.balanceFormatted}),e.jsx(C,{variant:"caption",children:"MXN"})]})]}),e.jsxs(u,{justifyContent:"flex-end",spacing:1,alignItems:{xs:"center",md:"end"},children:[e.jsx(mt,{card:t,color:"#fff"}),e.jsxs(u,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",gap:1,divider:e.jsx(ve,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsx(C,{color:"#fff",variant:"subtitle2",children:t==null?void 0:t.expiration}),e.jsx(O,{startIcon:n?e.jsx(Q,{handleFinish:()=>o(!1)}):e.jsx(te,{}),color:"inherit",onClick:()=>o(h=>!h),sx:{px:0,mx:0},children:n?e.jsx(u,{px:1,children:t==null?void 0:t.cvv}):"CVV"}),e.jsx(O,{startIcon:a?e.jsx(Q,{handleFinish:()=>l(!1)}):e.jsx(te,{}),color:"inherit",onClick:()=>l(h=>!h),children:a?e.jsx(u,{px:1,children:t==null?void 0:t.nip}):"NIP"})]})]})]})})}de.propTypes={card:f.shape({balanceFormatted:f.any,cardON:f.bool,cvv:f.any,expiration:f.any,id:f.any,nip:f.any})};function Q({handleFinish:t,duration:n=10}){const[o,a]=c.useState(100);return c.useEffect(()=>{let l;return o>0?l=setInterval(()=>{a(d=>d-100/n)},1e3):t(),()=>clearInterval(l)},[o,n]),e.jsxs(b,{sx:{position:"relative",display:"inline-flex"},children:[e.jsx(Ie,{variant:"determinate",value:o}),e.jsx(b,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(C,{variant:"caption",component:"div",color:"text.primary",children:`${Math.ceil(n*o/100)} `})})]})}Q.propTypes={duration:f.number,handleFinish:f.func};function Vt(){const t=p(x=>x.card),n=p(x=>x.addInfoCard),{data:o,isLoading:a,isError:l,error:d,refetch:s}=Nt(t==null?void 0:t.id,{enabled:!!(t!=null&&t.id)}),{isCollapse:r}=Me();return c.useEffect(()=>{o&&n(o)},[o]),e.jsx(u,{sx:x=>({pl:{xs:0,sm:2,lg:2},overflow:"hidden",flexDirection:"column",flexGrow:1}),children:e.jsxs(Ct,{children:[a&&t&&e.jsx(ie,{}),l&&!o&&!a&&e.jsx($,{sx:{justifyContent:"flex-start"},errorMessage:d,handleButton:s}),t&&!a&&!l&&o&&e.jsxs(e.Fragment,{children:[e.jsx(L.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:e.jsxs(u,{sx:x=>({overflow:"hidden",flexDirection:"column",flexGrow:1}),children:[e.jsx(de,{card:t}),e.jsx(Xe,{})]})}),e.jsx(b,{sx:{overflowY:"auto"},children:e.jsx(L.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:e.jsx(u,{pt:2,pb:4,px:2,children:e.jsxs(z,{container:!0,spacing:3,sx:{p:0,pb:3},children:[e.jsx(z,{item:!0,xs:12,sm:12,md:12,lg:r?4:12,xl:4,children:e.jsxs(u,{spacing:3,children:[e.jsx(Ke,{card:t}),e.jsx(Ht,{}),e.jsx(_t,{})]})}),e.jsx(z,{item:!0,xs:12,sm:12,md:12,lg:r?8:12,xl:8,children:e.jsx(Je,{})})]})})})})]}),!t&&e.jsx(L.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:e.jsxs(u,{spacing:3,sx:{height:"100%",width:"100%"},children:[e.jsx(Ee,{variant:"filled",severity:"info",children:"Debe seleccionar una tarjeta para ver sus detalles!"}),e.jsx(u,{alignItems:"center",children:e.jsx(pt,{sx:{width:"30%"}})})]})})]})})}const Wt=re(De)(({theme:t})=>({borderRadius:"8px!important",width:1,justifyContent:"center",display:"flex",alignItems:"center",mb:1}));ue.propTypes={isOpenSidebar:f.bool,selected:f.bool,card:f.object,onSelectRow:f.func,onOpenDetails:f.func};function ue({isOpenSidebar:t,card:n,selected:o,onSelectRow:a,onOpenDetails:l}){const{id:d,cardUserNumber:s,cardType:r}=n,x=p(j=>j.setCard),h=p(j=>j.card),w=p(j=>j.addInfoCard),i=ae(),y=(i==null?void 0:i.permissions)??[],M=d===(h==null?void 0:h.id)&&h?(h==null?void 0:h.cardON)===!0?"online":"offline":"invisible",R=d===(h==null?void 0:h.id),N=j=>{var E;!((E=j.target)==null?void 0:E.type)&&!R&&(x(n),w({movements:[],expenses:"$0.00",income:"$0.00",balanceMovements:"$0.00"}),l())};return e.jsx(Oe,{title:t?"":s,arrow:!0,placement:"right",children:e.jsx(jt,{sx:{mb:1,padding:0,borderRadius:1,"& :hover":{color:"text.primary"}},secondaryAction:t&&y.includes(le.COMMERCE_CARDS)&&e.jsx(St,{edge:"start",checked:o,onClick:a,inputProps:{"aria-labelledby":d}}),disablePadding:!0,children:e.jsxs(Wt,{onClick:N,sx:{...R&&{bgcolor:"secondary.light",color:"black","& :hover":{color:"text.primary"}},"& :hover":{color:"text.primary"},width:1,py:1,gap:1},children:[e.jsx(bt,{sx:{ml:2,m:0},children:e.jsxs(b,{sx:{position:"relative"},children:[e.jsx(Re,{sx:j=>({width:30,height:30,m:0,color:j.palette.primary.contrastText,backgroundColor:j.palette.primary.main}),children:r==="Carnet"?e.jsx(at,{sx:{width:20},color:"white"}):e.jsx(gt,{sx:{width:20}})}),e.jsx(Ae,{status:M,sx:{right:0,bottom:0,position:"absolute"}})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(u,{sx:{width:1},children:e.jsx(C,{noWrap:!0,variant:"subtitle2",children:s})})})]})})})}const Qt=c.memo(ue);xe.propTypes={cards:f.array,isOpenSidebar:f.bool,onOpenDetails:f.func,isLoading:f.bool,sx:f.object};function xe({cards:t,isOpenSidebar:n,isLoading:o,sx:a,onOpenDetails:l,...d}){const s=p(i=>i.setSelectedCards),r=p(i=>i.selectedCards,It),{selected:x,onSelectRow:h,resetSelected:w}=kt();return c.useEffect(()=>{s(x)},[x]),c.useEffect(()=>{(r==null?void 0:r.length)===0&&w()},[r]),e.jsx(Pe,{disablePadding:!0,sx:a,...d,children:(o?[...Array(12)]:t).map((i,y)=>i!=null&&i.id?e.jsx(Qt,{isOpenSidebar:n,card:i,selected:r==null?void 0:r.some(M=>(M==null?void 0:M.id)===(i==null?void 0:i.id)),onSelectRow:()=>h(i),onOpenDetails:l},i==null?void 0:i.id):e.jsx(yt,{isOpenSideBar:n},y))})}function he({cardTypes:t,isLoading:n,isError:o,refetch:a}){const l=p(r=>r.setCardTypeSelected),d=p(r=>r.cardTypeSelected),s=r=>{l(r==null?void 0:r.id)};return e.jsxs(b,{display:"flex",children:[n&&e.jsx(ie,{}),o&&!n&&e.jsx($,{errorMessage:"No existen tipos de tarjetas para este comercio",handleButton:a}),!n&&!o&&(t==null?void 0:t.map(r=>{const x=d===(r==null?void 0:r.id);return e.jsx(L.div,{onClick:()=>s(r),whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsx(Mt,{variant:x?"ghost":"filled",color:ke((r==null?void 0:r.name)||"inherit"),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:x?3:0,borderColor:x?h=>h.palette.primary.main:"inherit"},children:r==null?void 0:r.name})},r==null?void 0:r.id)}))]})}he.propTypes={cardTypes:f.array,isError:f.any,isLoading:f.any,refetch:f.any};const Gt=(t={})=>{const[n,o]=c.useState(null),a=p(s=>s.setCardTypeSelected),l=p(s=>s.cardTypeSelected);return{...T([D.PAYMENT_PROCESSORS],Ze,{staleTime:6e4,refetchOnMount:"always",onError:s=>{const r=P(s,"No se puede obtener la lista de los tipos de tarjetas. Intente nuevamente o reporte a sistemas");o(r)},onSuccess:s=>{const r=(s==null?void 0:s.find(x=>(x==null?void 0:x.id)==="2"))||Array.isArray(s)&&(s==null?void 0:s.length)>0&&s[0]||null;r&&!l&&a(r==null?void 0:r.id)},...t}),error:n||null}},$t=(t,n={})=>{const[o,a]=c.useState(null),l=p(s=>s.setMainCard);return{...T([D.MAIN_CARD],({signal:s})=>Ue(t,s),{staleTime:6e4,refetchOnWindowFocus:!1,onError:s=>{const r=P(s,"No se puede obtener la informacion de la tarjeta principal");a(r),l(null),Fe.error(r,{type:ne(s)})},onSuccess:s=>{l(s)},...n}),error:o||null}};function qt(){const t=p(v=>{var I;return(I=v.card)==null?void 0:I.id}),n=p(v=>v.cardTypeSelected),{data:o,isLoading:a,isError:l,refetch:d}=Gt(),{data:s,isLoading:r,isRefetching:x,isError:h,error:w,refetch:i,isSuccess:y}=Tt(n,{enabled:!1}),{data:M,refetch:R,isLoading:N}=$t(n,{enabled:!1}),j=ae(),B=(j==null?void 0:j.permissions)??[],E=r||x,q=Le(),[m,g]=c.useState(!0),[S,Y]=c.useState(""),[k,F]=c.useState(s||[]),[me,H]=c.useState(!1),A=Te("up","md"),fe=S&&me,X=A&&!m;c.useEffect(()=>{n&&i(),n&&B.includes(le.COMMERCE_CARDS)&&R()},[n]),c.useEffect(()=>{if(!A)return _()},[A,t]),c.useEffect(()=>{if(!m)return H(!1)},[m]),c.useEffect(()=>{s&&F(s)},[s]);const _=()=>{g(!1)},K=()=>{g(v=>(v&&(Y(""),F(s)),!v))},pe=()=>{H(!1)},Ce=async v=>{try{const{value:I}=v.target;if(Y(I),I){const ge=Dt(s,I)||[];F(ge)}else F(s)}catch(I){console.error(I)}},je=()=>{H(!0)},J=e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[m&&e.jsx(he,{cardTypes:o,isLoading:a,isError:l,refetch:d}),!n&&m&&!a&&e.jsx(U,{pt:2.5,message:"Seleccione un tipo de tarjeta para obtener la lista de tarjetas"})]}),n&&!a&&!l&&e.jsxs(e.Fragment,{children:[e.jsx(b,{sx:{p:2,px:0},children:e.jsxs(u,{direction:"row",justifyContent:m?"flex-end":"center",alignItems:"center",spacing:2,children:[!X&&e.jsx(Pt,{onClickAway:pe,children:e.jsx(Et,{fullWidth:!0,size:"small",value:S,onFocus:je,onChange:Ce,placeholder:"Buscar Tarjetas...",InputProps:{startAdornment:e.jsx(Ot,{position:"start",children:e.jsx(Rt,{sx:{color:"text.disabled",width:20,height:20}})})}})}),e.jsx(u,{direction:"row",alignItems:"center",justifyContent:"center",children:e.jsx(wt,{size:"small",sx:{...!m&&{transform:"rotate(180deg)"}},onClick:K,children:Ne})})]})}),h&&m&&!s&&!E&&e.jsx($,{errorMessage:w,handleButton:i}),s&&m&&(s==null?void 0:s.length)===0&&!E&&e.jsx(U,{pt:2.5,message:"No hay tarjetas activas en este tipo de tarjeta"}),e.jsx(Be,{sx:{height:.98},children:e.jsxs(e.Fragment,{children:[e.jsx(xe,{isOpenSidebar:m,cards:k||[],isLoading:E,onOpenDetails:_}),fe&&(k==null?void 0:k.length)===0&&(s==null?void 0:s.length)>0&&e.jsx(He,{sx:{p:1,display:"flex",flexDirection:"column",alignItems:"center"},searchQuery:S})]})})]})]});return e.jsxs(e.Fragment,{children:[!A&&!m&&e.jsx(vt,{onClick:K,children:e.jsx(At,{sx:{width:16,height:16}})}),A?e.jsx(ee,{open:m,variant:"persistent",PaperProps:{sx:{height:1,borderRightStyle:"none",bgcolor:"background.default"}},sx:{height:1,width:V,transition:q.transitions.create("width"),"& .MuiDrawer-paper":{position:"static",backgroundColor:"transparent!important",width:V},...X&&{width:Z,"& .MuiDrawer-paper":{width:Z,backgroundColor:"transparent!important",position:"static",transform:"none !important",visibility:"visible !important"}}},children:J}):e.jsx(ee,{ModalProps:{keepMounted:!0},open:m,onClose:_,sx:{height:1,"& .MuiDrawer-paper":{width:V,p:2}},children:J})]})}function Yt(){const[t,n]=c.useState(!1),[o,a]=c.useState(!1),l=p(r=>r.mainCard),d=p(r=>r.setSelectedCards),s=()=>{d([])};return e.jsxs(e.Fragment,{children:[e.jsx(oe,{sx:r=>({position:"sticky",borderRadius:1,py:4,top:0,boxShadow:r.customShadows.z8,backgroundColor:r.palette.info.lighter,color:"white"}),children:e.jsxs(u,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[e.jsxs(u,{flexDirection:"row",alignItems:"center",gap:1,children:[e.jsx(W,{"aria-label":"close",size:"small",onClick:s,children:e.jsx(Ft,{width:20,height:20,fontSize:"inherit",color:"primary"})}),e.jsx(C,{variant:"subtitle2",color:"info.main",children:"Acciones:"})]}),e.jsxs(u,{flexDirection:"row",gap:2,justifyContent:"space-between",children:[e.jsx(O,{startIcon:e.jsx(Lt,{}),variant:"outlined",color:"info",onClick:()=>{n(!0),a(!1)},children:"Mensaje"}),l&&e.jsx(O,{startIcon:e.jsx(et,{}),variant:"outlined",color:"info",onClick:()=>{a(!0),n(!1)},children:"Fondear"})]})]})}),e.jsx(tt,{isOpenCompose:t,onCloseCompose:()=>n(!1)}),e.jsx(st,{open:o,setOpen:a,isFundingCard:!0})]})}function _s(){const t=p(o=>o==null?void 0:o.selectedCards),n=se();return c.useEffect(()=>()=>{const o=Object.values(D);n.cancelQueries(o)},[]),e.jsx(_e,{title:"Lista de Tarjetas",children:e.jsxs(lt,{children:[e.jsxs(b,{display:"flex",overflow:"hidden",sx:{height:"100vH",maxHeight:"100%",flexDirection:"column"},children:[e.jsx(b,{px:1,children:e.jsx(ct,{name:"Lista de Tarjetas",links:[{name:"Inicio",href:ze.root},{name:"Viabo Card",href:Ve.cards},{name:We.cards.name}]})}),e.jsx(u,{flexDirection:"row",sx:{display:"flex"},children:e.jsx(u,{sx:o=>({overflow:"hidden",flexDirection:"column",flexGrow:1,pb:2}),children:(t==null?void 0:t.length)>0&&e.jsx(Yt,{})})}),e.jsxs(b,{display:"flex",overflow:"hidden",sx:{flex:"1 1 0%"},children:[e.jsx(b,{display:"block",width:1,position:"absolute"}),e.jsx(qt,{}),e.jsx(Vt,{})]})]}),e.jsx(nt,{})]})})}export{_s as default};
