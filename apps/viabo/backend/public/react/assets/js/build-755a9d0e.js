import{r as l,t as _,j as e,b as V,g as B,u as de,E as Z,n as ue,o as he,T as j,S as u,Z as J,P as m,a2 as U,a3 as xe,O as me,d as N,B as v,C as fe,a4 as pe,U as ee,a5 as G,a6 as L,a7 as ge,a8 as Ce,a9 as je,aa as Se,ab as be,ac as ye,ad as we,ae as ve,af as Ie,k as Me,l as Ee,ag as De,ah as Pe,ai as ke,aj as q,I as Oe,f as Re,ak as Ae,al as Le,am as Ne}from"./index-23ec28e1.js";import{C as O}from"./build-c7ce8ef2.js";import{g as Be,a as Fe,c as Te,u as f,C as He,b as ze,d as _e,e as Ve,f as Ge,G as Qe,P as We,M as $e,T as qe,F as Ye}from"./build-67f300a3.js";import{C as Xe}from"./build-73909af0.js";import{S as Ke}from"./build-8fd84771.js";import{C as Ze}from"./build-0f832405.js";import"./build-bcba88f3.js";import{u as Je}from"./build-a4f4c964.js";import{S as Ue}from"./build-803898d7.js";import{A as et,L as tt}from"./build-8ab16f05.js";import{G as T}from"./build-f728c994.js";import{C as st,E as Y,a as nt,H as ot}from"./build-a67802f5.js";import{M as it}from"./build-60193303.js";import{C as rt}from"./build-cd43da46.js";import{L as at,S as lt,a as ct,b as dt,c as H,d as X}from"./build-25569222.js";import{s as ut}from"./build-9563ddbe.js";import{L as ht,I as xt}from"./build-c616c612.js";import"./build-5f2543fb.js";import{s as mt}from"./build-f8fc243b.js";import{C as ft}from"./build-bc2c5e34.js";import{I as pt}from"./build-79fb9ca8.js";import{S as gt}from"./build-addf1bbe.js";import{C as Ct}from"./build-12f241c7.js";import"./build-23530379.js";import"./build-4e68fd35.js";import"./build-0b08f637.js";import"./build-488f3cd2.js";import"./build-ece7c255.js";import"./build-9b570ae1.js";import"./build-f4b9149c.js";import"./build-6d706cbe.js";import"./build-ba4202b0.js";import"./build-c780bbfe.js";import"./build-a2464a27.js";import"./build-ecaf0d13.js";import"./build-bee6630b.js";import"./build-4572f792.js";function jt(t){const[o,r]=l.useState((t==null?void 0:t.defaultDense)||!1),[a,c]=l.useState((t==null?void 0:t.defaultOrderBy)||"name"),[i,s]=l.useState((t==null?void 0:t.defaultOrder)||"asc"),[n,h]=l.useState((t==null?void 0:t.defaultCurrentPage)||0),[x,E]=l.useState((t==null?void 0:t.defaultRowsPerPage)||5),[d,w]=l.useState((t==null?void 0:t.defaultSelected)||[]);return{dense:o,order:i,page:n,setPage:h,orderBy:a,rowsPerPage:x,selected:d,setSelected:w,resetSelected:()=>{w((t==null?void 0:t.defaultSelected)||[])},onSelectRow:p=>{const S=d.indexOf(p);let b=[];S===-1?b=b.concat(d,p):S===0?b=b.concat(d.slice(1)):S===d.length-1?b=b.concat(d.slice(0,-1)):S>0&&(b=b.concat(d.slice(0,S),d.slice(S+1))),w(b)},onSelectAllRows:(p,S)=>{if(p){w(S);return}w([])},onSort:p=>{p!==""&&(s(a===p&&i==="asc"?"desc":"asc"),c(p))},onChangePage:(p,S)=>{h(S)},onChangeDense:p=>{r(p.target.checked)},onChangeRowsPerPage:p=>{E(parseInt(p.target.value,10)),h(0)}}}const St=_(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),bt=_(e.jsx("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message"),K=_(e.jsx("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"PasswordTwoTone"),yt=(t,o={})=>{const[r,a]=l.useState(null);return{...V([O.CARDS_COMMERCE_LIST],()=>Be(t),{staleTime:6e4,refetchOnMount:"always",onError:i=>{const s=B(i,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");a(s)},...o}),error:r||null}},wt=(t,o={})=>{const[r,a]=l.useState(null);return{...V([O.CARD_INFO,t],({signal:i})=>Fe(t,i),{staleTime:6e4,onError:i=>{const s=B(i,"No se puede obtener la informacion de la tarjeta. Intente nuevamente o reporte a sistemas");a(s)},refetchOnWindowFocus:!1,...o}),error:r||null}},vt=(t={})=>{const{enqueueSnackbar:o}=de(),[r,a]=l.useState(null),c=Z();return{...ue(Te,{onSuccess:s=>{a(null),c.refetchQueries([O.CARD_INFO,s==null?void 0:s.id]),o(s!=null&&s.cardON?"Se encendió la tarjeta con éxito":"Se apagó la tarjeta con éxito",{variant:"success",autoHideDuration:5e3})},onError:s=>{const n=B(s,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");o(n,{variant:he(s),autoHideDuration:5e3}),a(n)},...t}),error:r||null}};function It(){const t=f(r=>r.card),{assignUser:o}=t;return e.jsxs(Xe,{sx:{p:3},children:[e.jsx(j,{variant:"h6",gutterBottom:!0,children:"Asignado a:"}),e.jsxs(u,{spacing:3,children:[e.jsxs(u,{justifyContent:"space-between",gap:1,children:[e.jsx(j,{variant:"subtitle2",sx:{color:"text.secondary"},textTransform:"capitalize",children:"Nombre"}),e.jsx(j,{variant:"body2",children:o==null?void 0:o.name})]}),(o==null?void 0:o.phone)&&e.jsxs(u,{justifyContent:"space-between",gap:1,children:[e.jsx(j,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Telefono"}),e.jsx(j,{variant:"body2",children:(o==null?void 0:o.phone)||"-"})]}),e.jsxs(u,{justifyContent:"space-between",gap:1,children:[e.jsx(j,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Correo"}),e.jsx(j,{variant:"body2",children:o==null?void 0:o.email})]})]})]})}const Mt=J(t=>e.jsx(Ke,{focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,...t}))(({theme:t})=>({width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:t.palette.mode==="dark"?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:t.palette.mode==="light"?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:26/2,backgroundColor:t.palette.error.main,opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}));function te({card:t}){const[o,r]=l.useState(!1),[a,c]=l.useState(!1),{mutate:i,isLoading:s}=vt(),n=Je([O.CARD_INFO,t==null?void 0:t.id])===1;l.useEffect(()=>{r(!1),c(!1)},[t==null?void 0:t.id]);const h=x=>{i({...t,cardON:!(t!=null&&t.cardON)})};return e.jsx(U,{sx:x=>({borderRadius:1,position:"relative",zIndex:1,backgroundColor:x.palette.primary.light,color:"white",minHeight:"auto!important",height:{xs:1,sm:"auto"},py:{xs:0,sm:2}}),children:e.jsxs(u,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[e.jsxs(u,{flexDirection:"column",spacing:0,alignItems:{xs:"center",md:"start"},children:[e.jsxs(u,{flexDirection:"row",gap:1,alignItems:"center",children:[e.jsx(j,{variant:"subtitle2",children:"Disponible"}),s||n?e.jsx(xe,{size:30,containerProps:{display:"flex",ml:1}}):e.jsx(Mt,{disabled:s,color:t!=null&&t.cardON?"success":"error",checked:(t==null?void 0:t.cardON)||!1,onChange:h,sx:{m:1},inputProps:{"aria-label":"controlled"}})]}),e.jsxs(u,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(j,{variant:"h3",children:t==null?void 0:t.balanceFormatted}),e.jsx(j,{variant:"caption",children:"MXN"})]})]}),e.jsxs(u,{justifyContent:"flex-end",spacing:1,alignItems:{xs:"center",md:"end"},children:[e.jsx(Ze,{card:t,color:"#fff"}),e.jsxs(u,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",gap:1,divider:e.jsx(me,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsx(j,{color:"#fff",variant:"subtitle2",children:t==null?void 0:t.expiration}),e.jsx(N,{startIcon:o?e.jsx(z,{handleFinish:()=>r(!1)}):e.jsx(K,{}),color:"inherit",onClick:()=>r(x=>!x),sx:{px:0,mx:0},children:o?e.jsx(u,{px:1,children:t==null?void 0:t.cvv}):"CVV"}),e.jsx(N,{startIcon:a?e.jsx(z,{handleFinish:()=>c(!1)}):e.jsx(K,{}),color:"inherit",onClick:()=>c(x=>!x),children:a?e.jsx(u,{px:1,children:t==null?void 0:t.nip}):"NIP"})]})]})]})})}te.propTypes={card:m.shape({balanceFormatted:m.any,cardON:m.bool,cvv:m.any,expiration:m.any,id:m.any,nip:m.any})};function z({handleFinish:t,duration:o=10}){const[r,a]=l.useState(100);return l.useEffect(()=>{let c;return r>0?c=setInterval(()=>{a(i=>i-100/o)},1e3):t(),()=>clearInterval(c)},[r,o]),e.jsxs(v,{sx:{position:"relative",display:"inline-flex"},children:[e.jsx(fe,{variant:"determinate",value:r}),e.jsx(v,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(j,{variant:"caption",component:"div",color:"text.primary",children:`${Math.ceil(o*r/100)} `})})]})}z.propTypes={duration:m.number,handleFinish:m.func};function Et(){const t=f(h=>h.card),o=f(h=>h.addInfoCard),{data:r,isLoading:a,isError:c,error:i,refetch:s}=wt(t==null?void 0:t.id,{enabled:!!(t!=null&&t.id)}),{isCollapse:n}=pe();return l.useEffect(()=>{r&&o(r)},[r]),e.jsx(u,{sx:h=>({pl:{xs:0,sm:2,lg:2},overflow:"hidden",flexDirection:"column",flexGrow:1}),children:e.jsxs(et,{children:[a&&t&&e.jsx(ee,{}),c&&!r&&!a&&e.jsx(G,{sx:{justifyContent:"flex-start"},errorMessage:i,handleButton:s}),t&&!a&&!c&&r&&e.jsxs(e.Fragment,{children:[e.jsx(L.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:e.jsxs(u,{sx:h=>({overflow:"hidden",flexDirection:"column",flexGrow:1}),children:[e.jsx(te,{card:t}),e.jsx(He,{})]})}),e.jsx(v,{sx:{overflowY:"auto"},children:e.jsx(L.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:e.jsx(u,{pt:2,pb:4,px:2,children:e.jsxs(T,{container:!0,spacing:3,sx:{p:0,pb:3},children:[e.jsx(T,{item:!0,xs:12,sm:12,md:12,lg:n?4:12,xl:4,children:e.jsxs(u,{spacing:3,children:[e.jsx(ze,{}),e.jsx(_e,{}),e.jsx(It,{})]})}),e.jsx(T,{item:!0,xs:12,sm:12,md:12,lg:n?8:12,xl:8,children:e.jsx(Ve,{})})]})})})})]}),!t&&e.jsx(L.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:e.jsxs(u,{spacing:3,sx:{height:"100%",width:"100%"},children:[e.jsx(ge,{variant:"filled",severity:"info",children:"Debe seleccionar una tarjeta para ver sus detalles!"}),e.jsx(u,{alignItems:"center",children:e.jsx(Ue,{sx:{width:"30%"}})})]})})]})})}const Dt=J(Ce)(({theme:t})=>({borderRadius:"8px!important",width:1,justifyContent:"center",display:"flex",alignItems:"center",mb:1}));se.propTypes={isOpenSidebar:m.bool,selected:m.bool,card:m.object,onSelectRow:m.func,onOpenDetails:m.func};function se({isOpenSidebar:t,card:o,selected:r,onSelectRow:a,onOpenDetails:c}){const{id:i,cardUserNumber:s,cardType:n}=o,h=f(g=>g.setCard),x=f(g=>g.card),E=f(g=>g.addInfoCard),d=f(g=>g.setSelectedMainCard),w=f(g=>g.isMainCardSelected),y=je(),A=(y==null?void 0:y.permissions)??[],C=i===(x==null?void 0:x.id)&&x?(x==null?void 0:x.cardON)===!0?"online":"offline":"invisible",D=i===(x==null?void 0:x.id),P=g=>{var p;!((p=g.target)==null?void 0:p.type)&&!D&&(h(o),w&&d(!1),E({movements:[],expenses:"$0.00",income:"$0.00",balanceMovements:"$0.00"}),c())};return e.jsx(Se,{title:t?"":s,arrow:!0,placement:"right",children:e.jsx(tt,{sx:{mb:1,padding:0,borderRadius:1,"& :hover":{color:"text.primary"}},secondaryAction:t&&A.includes(be.COMMERCE_CARDS)&&e.jsx(rt,{edge:"start",checked:r,onClick:a,inputProps:{"aria-labelledby":i}}),disablePadding:!0,children:e.jsxs(Dt,{onClick:P,sx:{...D&&{bgcolor:"secondary.light",color:"black","& :hover":{color:"text.primary"}},"& :hover":{color:"text.primary"},width:1,py:1,gap:1},children:[e.jsx(at,{sx:{ml:2,m:0},children:e.jsxs(v,{sx:{position:"relative"},children:[e.jsx(ye,{sx:g=>({width:30,height:30,m:0,color:g.palette.primary.contrastText,backgroundColor:g.palette.primary.main}),children:n==="Carnet"?e.jsx(st,{sx:{width:20},color:"white"}):e.jsx(it,{sx:{width:20}})}),e.jsx(we,{status:C,sx:{right:0,bottom:0,position:"absolute"}})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(u,{sx:{width:1},children:e.jsx(j,{noWrap:!0,variant:"subtitle2",children:s})})})]})})})}const Pt=l.memo(se);ne.propTypes={cards:m.array,isOpenSidebar:m.bool,onOpenDetails:m.func,isLoading:m.bool,sx:m.object};function ne({cards:t,isOpenSidebar:o,isLoading:r,sx:a,onOpenDetails:c,...i}){const s=f(d=>d.setSelectedCards),n=f(d=>d.selectedCards,ut),{selected:h,onSelectRow:x,resetSelected:E}=jt();return l.useEffect(()=>{s(h)},[h]),l.useEffect(()=>{(n==null?void 0:n.length)===0&&E()},[n]),e.jsx(ve,{disablePadding:!0,sx:a,...i,children:(r?[...Array(12)]:t).map((d,w)=>d!=null&&d.id?e.jsx(Pt,{isOpenSidebar:o,card:d,selected:n==null?void 0:n.some(y=>(y==null?void 0:y.id)===(d==null?void 0:d.id)),onSelectRow:()=>x(d),onOpenDetails:c},d==null?void 0:d.id):e.jsx(lt,{isOpenSideBar:o},w))})}function oe({cardTypes:t,isLoading:o,isError:r,refetch:a}){const c=f(n=>n.setCardTypeSelected),i=f(n=>n.cardTypeSelected),s=n=>{c(n==null?void 0:n.id)};return e.jsxs(v,{display:"flex",children:[o&&e.jsx(ee,{}),r&&!o&&e.jsx(G,{errorMessage:"No existen tipos de tarjetas para este comercio",handleButton:a}),!o&&!r&&(t==null?void 0:t.map(n=>{const h=i===(n==null?void 0:n.id);return e.jsx(L.div,{onClick:()=>s(n),whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsx(ht,{variant:h?"ghost":"filled",color:Ie((n==null?void 0:n.name)||"inherit"),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:h?3:0,borderColor:h?x=>x.palette.primary.main:"inherit"},children:n==null?void 0:n.name})},n==null?void 0:n.id)}))]})}oe.propTypes={cardTypes:m.array,isError:m.any,isLoading:m.any,refetch:m.any};const kt=(t={})=>{const[o,r]=l.useState(null),a=f(s=>s.setCardTypeSelected),c=f(s=>s.cardTypeSelected);return{...V([O.PAYMENT_PROCESSORS],Ge,{staleTime:6e4,refetchOnMount:"always",onError:s=>{const n=B(s,"No se puede obtener la lista de los tipos de tarjetas. Intente nuevamente o reporte a sistemas");r(n)},onSuccess:s=>{const n=(s==null?void 0:s.find(h=>(h==null?void 0:h.id)==="2"))||Array.isArray(s)&&(s==null?void 0:s.length)>0&&s[0]||null;n&&!c&&a(n==null?void 0:n.id)},...t}),error:o||null}};function Ot(){const t=f(I=>{var M;return(M=I.card)==null?void 0:M.id}),o=f(I=>I.cardTypeSelected),{data:r,isLoading:a,isError:c,refetch:i}=kt(),{data:s,isLoading:n,isRefetching:h,isError:x,error:E,refetch:d,isSuccess:w}=yt(o,{enabled:!1}),y=n||h,A=Me(),[C,D]=l.useState(!0),[P,g]=l.useState(""),[k,p]=l.useState(s||[]),[S,b]=l.useState(!1),R=Ee("up","md"),ie=P&&S,Q=R&&!C;l.useEffect(()=>{o&&d()},[o]),l.useEffect(()=>{if(!R)return F()},[R,t]),l.useEffect(()=>{if(!C)return b(!1)},[C]),l.useEffect(()=>{s&&p(s)},[s]);const F=()=>{D(!1)},W=()=>{D(I=>(I&&(g(""),p(s)),!I))},re=()=>{b(!1)},ae=async I=>{try{const{value:M}=I.target;if(g(M),M){const ce=mt(s,M)||[];p(ce)}else p(s)}catch(M){console.error(M)}},le=()=>{b(!0)},$=e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[C&&e.jsx(oe,{cardTypes:r,isLoading:a,isError:c,refetch:i}),!o&&C&&!a&&e.jsx(Y,{pt:2.5,message:"Seleccione un tipo de tarjeta para obtener la lista de tarjetas"})]}),o&&!a&&!c&&e.jsxs(e.Fragment,{children:[e.jsx(Qe,{openSidebar:C}),e.jsx(v,{sx:{p:2,px:0},children:e.jsxs(u,{direction:"row",justifyContent:C?"flex-end":"center",alignItems:"center",spacing:2,children:[!Q&&e.jsx(ft,{onClickAway:re,children:e.jsx(xt,{fullWidth:!0,size:"small",value:P,onFocus:le,onChange:ae,placeholder:"Buscar Tarjetas...",InputProps:{startAdornment:e.jsx(pt,{position:"start",children:e.jsx(gt,{sx:{color:"text.disabled",width:20,height:20}})})}})}),e.jsx(u,{direction:"row",alignItems:"center",justifyContent:"center",children:e.jsx(ct,{size:"small",sx:{...!C&&{transform:"rotate(180deg)"}},onClick:W,children:De})})]})}),x&&C&&!s&&!y&&e.jsx(G,{errorMessage:E,handleButton:d}),s&&C&&(s==null?void 0:s.length)===0&&!y&&e.jsx(Y,{pt:2.5,message:"No hay tarjetas activas en este tipo de tarjeta"}),e.jsx(Pe,{sx:{height:.98},children:e.jsxs(e.Fragment,{children:[e.jsx(ne,{isOpenSidebar:C,cards:k||[],isLoading:y,onOpenDetails:F}),ie&&(k==null?void 0:k.length)===0&&(s==null?void 0:s.length)>0&&e.jsx(ke,{sx:{p:1,display:"flex",flexDirection:"column",alignItems:"center"},searchQuery:P})]})})]})]});return e.jsxs(e.Fragment,{children:[!R&&!C&&e.jsx(dt,{onClick:W,children:e.jsx(Ct,{sx:{width:16,height:16}})}),R?e.jsx(q,{open:C,variant:"persistent",PaperProps:{sx:{height:1,borderRightStyle:"none",bgcolor:"background.default"}},sx:{height:1,width:H,transition:A.transitions.create("width"),"& .MuiDrawer-paper":{position:"static",backgroundColor:"transparent!important",width:H},...Q&&{width:X,"& .MuiDrawer-paper":{width:X,backgroundColor:"transparent!important",position:"static",transform:"none !important",visibility:"visible !important"}}},children:$}):e.jsx(q,{ModalProps:{keepMounted:!0},open:C,onClose:F,sx:{height:1,"& .MuiDrawer-paper":{width:H,p:2}},children:$})]})}function Rt(){const[t,o]=l.useState(!1),[r,a]=l.useState(!1),c=f(n=>n.mainCard),i=f(n=>n.setSelectedCards),s=()=>{i([])};return e.jsxs(e.Fragment,{children:[e.jsx(U,{sx:n=>({position:"sticky",borderRadius:1,py:4,top:0,boxShadow:n.customShadows.z8,backgroundColor:n.palette.info.lighter,color:"white"}),children:e.jsxs(u,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[e.jsxs(u,{flexDirection:"row",alignItems:"center",gap:1,children:[e.jsx(Oe,{"aria-label":"close",size:"small",onClick:s,children:e.jsx(St,{width:20,height:20,fontSize:"inherit",color:"primary"})}),e.jsx(j,{variant:"subtitle2",color:"info.main",children:"Acciones:"})]}),e.jsxs(u,{flexDirection:"row",gap:2,justifyContent:"space-between",children:[e.jsx(N,{startIcon:e.jsx(bt,{}),variant:"outlined",color:"info",onClick:()=>{o(!0),a(!1)},children:"Mensaje"}),c&&e.jsx(N,{startIcon:e.jsx(We,{}),variant:"outlined",color:"info",onClick:()=>{a(!0),o(!1)},children:"Fondear"})]})]})}),e.jsx($e,{isOpenCompose:t,onCloseCompose:()=>o(!1)}),e.jsx(qe,{open:r,setOpen:a,isFundingCard:!0})]})}function ps(){const t=f(i=>i==null?void 0:i.selectedCards),o=f(i=>i.isMainCardSelected),r=f(i=>i.setSelectedMainCard),a=f(i=>i.resetCard),c=Z();return l.useEffect(()=>()=>{const i=Object.values(O);c.cancelQueries(i)},[]),l.useEffect(()=>{o&&(a(),r(!1))},[o]),e.jsx(Re,{title:"Lista de Tarjetas",children:e.jsxs(nt,{children:[e.jsxs(v,{display:"flex",overflow:"hidden",sx:{height:"100vH",maxHeight:"100%",flexDirection:"column"},children:[e.jsx(v,{px:1,children:e.jsx(ot,{name:"Lista de Tarjetas",links:[{name:"Inicio",href:Ae.root},{name:"Administracion",href:Le.cards},{name:Ne.cards.name}]})}),e.jsx(u,{flexDirection:"row",sx:{display:"flex"},children:e.jsx(u,{sx:i=>({overflow:"hidden",flexDirection:"column",flexGrow:1,pb:2}),children:(t==null?void 0:t.length)>0&&e.jsx(Rt,{})})}),e.jsxs(v,{display:"flex",overflow:"hidden",sx:{flex:"1 1 0%"},children:[e.jsx(v,{display:"block",width:1,position:"absolute"}),e.jsx(Ot,{}),e.jsx(Et,{})]})]}),e.jsx(Ye,{})]})})}export{ps as default};