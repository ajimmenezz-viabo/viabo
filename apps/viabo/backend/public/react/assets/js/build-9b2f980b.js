import{r as l,t as z,j as e,b as _,g as N,u as ce,a0 as Z,n as de,o as ue,T as C,S as x,Z as J,a1 as U,a2 as he,a3 as xe,d as L,B as v,C as me,a4 as fe,R as ee,O as V,a5 as te,a6 as ge,a7 as pe,P as y,a8 as Ce,a9 as je,aa as Se,ab as be,ac as we,ad as ye,ae as ve,af as Ie,k as Me,l as Ee,ag as De,ah as ke,ai as $,I as Pe,f as Re,aj as Oe,ak as Ae,al as Le}from"./build-64a25fd4.js";import{C as R}from"./build-c7ce8ef2.js";import{g as Ne,a as Be,c as Fe,u as m,C as He,b as Te,d as ze,e as _e,f as Ve,G as Ge,P as Qe,M as We,F as $e}from"./build-48df7956.js";import{C as qe}from"./build-77003c42.js";import"./build-88ac29fe.js";import{C as Xe}from"./build-5b8d9a62.js";import{S as Ye}from"./build-6b17aba2.js";import{u as Ke}from"./build-2fc48161.js";import{S as Ze}from"./build-66e8ef2d.js";import{G as H}from"./build-e303152c.js";import{C as Je}from"./build-26f7b6e5.js";import{M as Ue}from"./build-bf78b615.js";import{L as et}from"./build-977b7120.js";import{C as tt}from"./build-7d9da98f.js";import{L as st,S as nt,a as ot,b as rt,c as T,d as q}from"./build-78598d2c.js";import{s as it}from"./build-9563ddbe.js";import"./build-0a1457f9.js";import{L as at,I as lt}from"./build-81b4defd.js";import{E as X,C as ct,H as dt}from"./build-d41b3d80.js";import{C as ut}from"./build-fc19efb2.js";import{I as ht}from"./build-8fe9665e.js";import{S as xt}from"./build-4a3935ac.js";import{C as mt}from"./build-92464c69.js";import ft from"./build-e40bc404.js";import"./build-43ec3615.js";import"./build-7b77a3a8.js";import"./build-5f25590a.js";import"./build-ab3ce0c4.js";import"./build-57b6771e.js";import"./build-6c823b45.js";import"./build-9cd5ca94.js";import"./build-d44fd29d.js";import"./build-ecaf0d13.js";import"./build-6e98428f.js";import"./build-bee6630b.js";import"./build-8a62fdc4.js";import"./build-9b3e0013.js";import"./build-cba895c7.js";import"./build-cd110c87.js";function gt(t){const[o,i]=l.useState((t==null?void 0:t.defaultDense)||!1),[a,d]=l.useState((t==null?void 0:t.defaultOrderBy)||"name"),[r,s]=l.useState((t==null?void 0:t.defaultOrder)||"asc"),[n,u]=l.useState((t==null?void 0:t.defaultCurrentPage)||0),[h,E]=l.useState((t==null?void 0:t.defaultRowsPerPage)||5),[c,w]=l.useState((t==null?void 0:t.defaultSelected)||[]);return{dense:o,order:r,page:n,setPage:u,orderBy:a,rowsPerPage:h,selected:c,setSelected:w,resetSelected:()=>{w((t==null?void 0:t.defaultSelected)||[])},onSelectRow:f=>{const j=c.indexOf(f);let S=[];j===-1?S=S.concat(c,f):j===0?S=S.concat(c.slice(1)):j===c.length-1?S=S.concat(c.slice(0,-1)):j>0&&(S=S.concat(c.slice(0,j),c.slice(j+1))),w(S)},onSelectAllRows:(f,j)=>{if(f){w(j);return}w([])},onSort:f=>{f!==""&&(s(a===f&&r==="asc"?"desc":"asc"),d(f))},onChangePage:(f,j)=>{u(j)},onChangeDense:f=>{i(f.target.checked)},onChangeRowsPerPage:f=>{E(parseInt(f.target.value,10)),u(0)}}}const pt=z(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),Ct=z(e.jsx("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message"),Y=z(e.jsx("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"PasswordTwoTone"),jt=(t,o={})=>{const[i,a]=l.useState(null);return{..._([R.CARDS_COMMERCE_LIST],()=>Ne(t),{staleTime:6e4,refetchOnMount:"always",onError:r=>{const s=N(r,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");a(s)},...o}),error:i||null}},St=(t,o={})=>{const[i,a]=l.useState(null);return{..._([R.CARD_INFO,t],({signal:r})=>Be(t,r),{staleTime:6e4,onError:r=>{const s=N(r,"No se puede obtener la informacion de la tarjeta. Intente nuevamente o reporte a sistemas");a(s)},refetchOnWindowFocus:!1,...o}),error:i||null}},bt=(t={})=>{const{enqueueSnackbar:o}=ce(),[i,a]=l.useState(null),d=Z();return{...de(Fe,{onSuccess:s=>{a(null),d.refetchQueries([R.CARD_INFO,s==null?void 0:s.id]),o(s!=null&&s.cardON?"Se encendió la tarjeta con éxito":"Se apagó la tarjeta con éxito",{variant:"success",autoHideDuration:5e3})},onError:s=>{const n=N(s,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");o(n,{variant:ue(s),autoHideDuration:5e3}),a(n)},...t}),error:i||null}};function wt(){const t=m(i=>i.card),{assignUser:o}=t;return e.jsxs(qe,{sx:{p:3},children:[e.jsx(C,{variant:"h6",gutterBottom:!0,children:"Asignado a:"}),e.jsxs(x,{spacing:3,children:[e.jsxs(x,{justifyContent:"space-between",gap:1,children:[e.jsx(C,{variant:"subtitle2",sx:{color:"text.secondary"},textTransform:"capitalize",children:"Nombre"}),e.jsx(C,{variant:"body2",children:o==null?void 0:o.name})]}),(o==null?void 0:o.phone)&&e.jsxs(x,{justifyContent:"space-between",gap:1,children:[e.jsx(C,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Telefono"}),e.jsx(C,{variant:"body2",children:(o==null?void 0:o.phone)||"-"})]}),e.jsxs(x,{justifyContent:"space-between",gap:1,children:[e.jsx(C,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Correo"}),e.jsx(C,{variant:"body2",children:o==null?void 0:o.email})]})]})]})}const yt=J(t=>e.jsx(Ye,{focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,...t}))(({theme:t})=>({width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:t.palette.mode==="dark"?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:t.palette.mode==="light"?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:26/2,backgroundColor:t.palette.error.main,opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}));function vt({card:t}){const[o,i]=l.useState(!1),[a,d]=l.useState(!1),{mutate:r,isLoading:s}=bt(),n=Ke([R.CARD_INFO,t==null?void 0:t.id])===1;l.useEffect(()=>{i(!1),d(!1)},[t==null?void 0:t.id]);const u=h=>{r({...t,cardON:!(t!=null&&t.cardON)})};return e.jsx(U,{sx:h=>({borderRadius:1,position:"relative",zIndex:1,backgroundColor:h.palette.primary.light,color:"white",minHeight:"auto!important",height:{xs:1,sm:"auto"},py:{xs:0,sm:2}}),children:e.jsxs(x,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[e.jsxs(x,{flexDirection:"column",spacing:0,alignItems:{xs:"center",md:"start"},children:[e.jsxs(x,{flexDirection:"row",gap:1,alignItems:"center",children:[e.jsx(C,{variant:"subtitle2",children:"Disponible"}),s||n?e.jsx(he,{size:30,containerProps:{display:"flex",ml:1}}):e.jsx(yt,{disabled:s,color:t!=null&&t.cardON?"success":"error",checked:(t==null?void 0:t.cardON)||!1,onChange:u,sx:{m:1},inputProps:{"aria-label":"controlled"}})]}),e.jsxs(x,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(C,{variant:"h3",children:t==null?void 0:t.balanceFormatted}),e.jsx(C,{variant:"caption",children:"MXN"})]})]}),e.jsxs(x,{justifyContent:"flex-end",spacing:1,alignItems:{xs:"center",md:"end"},children:[e.jsx(Xe,{card:t,color:"#fff"}),e.jsxs(x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",gap:1,divider:e.jsx(xe,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsx(C,{color:"#fff",variant:"subtitle2",children:t==null?void 0:t.expiration}),e.jsx(L,{startIcon:o?e.jsx(K,{handleFinish:()=>i(!1)}):e.jsx(Y,{}),color:"inherit",onClick:()=>i(h=>!h),children:o?`${t==null?void 0:t.cvv}`:"CVV"}),e.jsx(L,{startIcon:a?e.jsx(K,{handleFinish:()=>d(!1)}):e.jsx(Y,{}),color:"inherit",onClick:()=>d(h=>!h),children:a?t==null?void 0:t.nip:"NIP"})]})]})]})})}function K({handleFinish:t,duration:o=10}){const[i,a]=l.useState(100);return l.useEffect(()=>{let d;return i>0?d=setInterval(()=>{a(r=>r-100/o)},1e3):t(),()=>clearInterval(d)},[i,o]),e.jsxs(v,{sx:{position:"relative",display:"inline-flex",minWidth:60},children:[e.jsx(me,{variant:"determinate",value:i}),e.jsx(v,{sx:{top:0,left:0,bottom:0,right:20,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(C,{variant:"caption",component:"div",color:"text.primary",children:`${Math.ceil(o*i/100)} `})})]})}function It(){const t=m(u=>u.card),o=m(u=>u.addInfoCard),{data:i,isLoading:a,isError:d,error:r,refetch:s}=St(t==null?void 0:t.id,{enabled:!!(t!=null&&t.id)}),{isCollapse:n}=fe();return l.useEffect(()=>{i&&o(i)},[i]),e.jsxs(e.Fragment,{children:[a&&t&&e.jsx(ee,{}),e.jsxs(x,{sx:u=>({pl:{xs:0,lg:2},overflow:"hidden",flexDirection:"column",flexGrow:1}),children:[d&&!i&&!a&&e.jsx(V,{sx:{justifyContent:"flex-start"},errorMessage:r,handleButton:s}),t&&!a&&i&&e.jsxs(e.Fragment,{children:[e.jsx(vt,{card:t}),e.jsx(He,{}),e.jsx(te,{children:e.jsx(x,{pt:2,pb:4,px:2,children:e.jsxs(H,{container:!0,spacing:3,sx:{p:0,pb:3},children:[e.jsx(H,{item:!0,xs:12,sm:12,md:12,lg:n?4:12,xl:4,children:e.jsxs(x,{spacing:3,children:[e.jsx(Te,{}),e.jsx(ze,{}),e.jsx(wt,{})]})}),e.jsx(H,{item:!0,xs:12,sm:12,md:12,lg:n?8:12,xl:8,children:e.jsx(_e,{})})]})})})]}),!t&&e.jsxs(x,{spacing:3,sx:{height:"100%",width:"100%"},children:[e.jsx(ge,{variant:"filled",severity:"info",children:"Debe seleccionar una tarjeta para ver sus detalles!"}),e.jsx(x,{alignItems:"center",children:e.jsx(Ze,{sx:{width:"30%"}})})]})]})]})}const Mt=J(pe)(({theme:t})=>({borderRadius:"8px!important",width:1,justifyContent:"center",display:"flex",alignItems:"center",mb:1}));se.propTypes={isOpenSidebar:y.bool,selected:y.bool,card:y.object,onSelectRow:y.func,onOpenDetails:y.func};function se({isOpenSidebar:t,card:o,selected:i,onSelectRow:a,onOpenDetails:d}){const{id:r,cardUserNumber:s,cardType:n}=o,u=m(p=>p.setCard),h=m(p=>p.card),E=m(p=>p.addInfoCard),c=m(p=>p.setSelectedMainCard),w=m(p=>p.isMainCardSelected),b=Ce(),A=(b==null?void 0:b.permissions)??[],g=r===(h==null?void 0:h.id)&&h?(h==null?void 0:h.cardON)===!0?"online":"offline":"invisible",D=r===(h==null?void 0:h.id),k=p=>{var f;!((f=p.target)==null?void 0:f.type)&&!D&&(u(o),w&&c(!1),E({movements:[],expenses:"$0.00",income:"$0.00",balanceMovements:"$0.00"}),d())};return e.jsx(je,{title:t?"":s,arrow:!0,placement:"right",children:e.jsx(et,{sx:{mb:1,padding:0,borderRadius:1,"& :hover":{color:"text.primary"}},secondaryAction:t&&A.includes(Se.COMMERCE_CARDS)&&e.jsx(tt,{edge:"start",checked:i,onClick:a,inputProps:{"aria-labelledby":r}}),disablePadding:!0,children:e.jsxs(Mt,{onClick:k,sx:{...D&&{bgcolor:"secondary.light",color:"black","& :hover":{color:"text.primary"}},"& :hover":{color:"text.primary"},width:1,py:1,gap:1},children:[e.jsx(st,{sx:{ml:2,m:0},children:e.jsxs(v,{sx:{position:"relative"},children:[e.jsx(be,{sx:p=>({width:30,height:30,m:0,color:p.palette.primary.contrastText,backgroundColor:p.palette.primary.main}),children:n==="Carnet"?e.jsx(Je,{sx:{width:20},color:"white"}):e.jsx(Ue,{sx:{width:20}})}),e.jsx(we,{status:g,sx:{right:0,bottom:0,position:"absolute"}})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(x,{sx:{width:1},children:e.jsx(C,{noWrap:!0,variant:"subtitle2",children:s})})})]})})})}const Et=l.memo(se);ne.propTypes={cards:y.array,isOpenSidebar:y.bool,onOpenDetails:y.func,isLoading:y.bool,sx:y.object};function ne({cards:t,isOpenSidebar:o,isLoading:i,sx:a,onOpenDetails:d,...r}){const s=m(c=>c.setSelectedCards),n=m(c=>c.selectedCards,it),{selected:u,onSelectRow:h,resetSelected:E}=gt();return l.useEffect(()=>{s(u)},[u]),l.useEffect(()=>{(n==null?void 0:n.length)===0&&E()},[n]),e.jsx(ye,{disablePadding:!0,sx:a,...r,children:(i?[...Array(12)]:t).map((c,w)=>c!=null&&c.id?e.jsx(Et,{isOpenSidebar:o,card:c,selected:n==null?void 0:n.some(b=>(b==null?void 0:b.id)===(c==null?void 0:c.id)),onSelectRow:()=>h(c),onOpenDetails:d},c==null?void 0:c.id):e.jsx(nt,{isOpenSideBar:o},w))})}function Dt({cardTypes:t,isLoading:o,isError:i,refetch:a}){const d=m(n=>n.setCardTypeSelected),r=m(n=>n.cardTypeSelected),s=n=>{d(n==null?void 0:n.id)};return e.jsxs(v,{display:"flex",children:[o&&e.jsx(ee,{}),i&&!o&&e.jsx(V,{errorMessage:"No existen tipos de tarjetas para este comercio",handleButton:a}),!o&&(t==null?void 0:t.map(n=>{const u=r===(n==null?void 0:n.id);return e.jsx(ve.div,{onClick:()=>s(n),whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsx(at,{variant:u?"ghost":"filled",color:Ie((n==null?void 0:n.name)||"inherit"),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:u?3:0,borderColor:u?h=>h.palette.primary.main:"inherit"},children:n==null?void 0:n.name})},n==null?void 0:n.id)}))]})}const kt=(t={})=>{const[o,i]=l.useState(null),a=m(s=>s.setCardTypeSelected),d=m(s=>s.cardTypeSelected);return{..._([R.PAYMENT_PROCESSORS],Ve,{staleTime:6e4,refetchOnMount:"always",onError:s=>{const n=N(s,"No se puede obtener la lista de los tipos de tarjetas. Intente nuevamente o reporte a sistemas");i(n)},onSuccess:s=>{const n=(s==null?void 0:s.find(u=>(u==null?void 0:u.id)==="2"))||Array.isArray(s)&&(s==null?void 0:s.length)>0&&s[0]||null;n&&!d&&a(n==null?void 0:n.id)},...t}),error:o||null}};function Pt(){const t=m(I=>{var M;return(M=I.card)==null?void 0:M.id}),o=m(I=>I.cardTypeSelected),{data:i,isLoading:a,isError:d,refetch:r}=kt(),{data:s,isLoading:n,isRefetching:u,isError:h,error:E,refetch:c,isSuccess:w}=jt(o,{enabled:!1}),b=n||u,A=Me(),[g,D]=l.useState(!0),[k,p]=l.useState(""),[P,f]=l.useState(s||[]),[j,S]=l.useState(!1),O=Ee("up","md"),oe=k&&j,G=O&&!g;l.useEffect(()=>{o&&c()},[o]),l.useEffect(()=>{if(!O)return B()},[O,t]),l.useEffect(()=>{if(!g)return S(!1)},[g]),l.useEffect(()=>{s&&f(s)},[s]);const B=()=>{D(!1)},Q=()=>{D(I=>(I&&(p(""),f(s)),!I))},re=()=>{S(!1)},ie=async I=>{try{const{value:M}=I.target;if(p(M),M){const le=(s==null?void 0:s.filter(F=>(F==null?void 0:F.cardNumber.toLowerCase().indexOf(M.toLowerCase()))!==-1))||[];f(le)}else f(s)}catch(M){console.error(M)}},ae=()=>{S(!0)},W=e.jsx(te,{sx:{height:.98},children:e.jsxs(x,{px:g?1:0,children:[g&&e.jsx(Dt,{cardTypes:i,isLoading:a,isError:d,refetch:r}),!o&&g&&!a&&e.jsx(X,{pt:2.5,message:"Seleccione un tipo de tarjeta para obtener la lista de tarjetas"}),o&&!a&&e.jsxs(e.Fragment,{children:[e.jsx(Ge,{openSidebar:g}),e.jsx(v,{sx:{p:2,px:0},children:e.jsxs(x,{direction:"row",justifyContent:g?"flex-end":"center",alignItems:"center",spacing:2,children:[!G&&e.jsx(ut,{onClickAway:re,children:e.jsx(lt,{fullWidth:!0,size:"small",value:k,onFocus:ae,onChange:ie,placeholder:"Buscar Tarjetas...",InputProps:{startAdornment:e.jsx(ht,{position:"start",children:e.jsx(xt,{sx:{color:"text.disabled",width:20,height:20}})})}})}),e.jsx(x,{direction:"row",alignItems:"center",justifyContent:"center",children:e.jsx(ot,{size:"small",sx:{...!g&&{transform:"rotate(180deg)"}},onClick:Q,children:De})})]})}),h&&g&&!s&&!b&&e.jsx(V,{errorMessage:E,handleButton:c}),s&&g&&(s==null?void 0:s.length)===0&&!b&&e.jsx(X,{pt:2.5,message:"No hay tarjetas activas en este tipo de tarjeta"}),e.jsx(ne,{isOpenSidebar:g,cards:P||[],isLoading:b,onOpenDetails:B}),oe&&(P==null?void 0:P.length)===0&&(s==null?void 0:s.length)>0&&e.jsx(ke,{sx:{p:1,display:"flex",flexDirection:"column",alignItems:"center"},searchQuery:k})]})]})});return e.jsxs(e.Fragment,{children:[!O&&!g&&e.jsx(rt,{onClick:Q,children:e.jsx(mt,{sx:{width:16,height:16}})}),O?e.jsx($,{open:g,variant:"persistent",PaperProps:{sx:{height:1,borderRightStyle:"none",bgcolor:"background.default"}},sx:{height:1,width:T,transition:A.transitions.create("width"),"& .MuiDrawer-paper":{position:"static",backgroundColor:"transparent!important",width:T},...G&&{width:q,"& .MuiDrawer-paper":{width:q,backgroundColor:"transparent!important",position:"static",transform:"none !important",visibility:"visible !important"}}},children:W}):e.jsx($,{ModalProps:{keepMounted:!0},open:g,onClose:B,sx:{height:1,"& .MuiDrawer-paper":{width:T,p:2}},children:W})]})}function Rt(){const[t,o]=l.useState(!1),[i,a]=l.useState(!1),d=m(n=>n.mainCard),r=m(n=>n.setSelectedCards),s=()=>{r([])};return e.jsxs(e.Fragment,{children:[e.jsx(U,{sx:n=>({position:"sticky",borderRadius:1,py:4,top:0,boxShadow:n.customShadows.z8,backgroundColor:n.palette.info.lighter,color:"white"}),children:e.jsxs(x,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[e.jsxs(x,{flexDirection:"row",alignItems:"center",gap:1,children:[e.jsx(Pe,{"aria-label":"close",size:"small",onClick:s,children:e.jsx(pt,{width:20,height:20,fontSize:"inherit",color:"primary"})}),e.jsx(C,{variant:"subtitle2",color:"info.main",children:"Acciones:"})]}),e.jsxs(x,{flexDirection:"row",gap:2,justifyContent:"space-between",children:[e.jsx(L,{startIcon:e.jsx(Ct,{}),variant:"outlined",color:"info",onClick:()=>{o(!0),a(!1)},children:"Mensaje"}),d&&e.jsx(L,{startIcon:e.jsx(Qe,{}),variant:"outlined",color:"info",onClick:()=>{a(!0),o(!1)},children:"Fondear"})]})]})}),e.jsx(We,{isOpenCompose:t,onCloseCompose:()=>o(!1)}),e.jsx(ft,{open:i,setOpen:a,isFundingCard:!0})]})}function ps(){const t=m(r=>r==null?void 0:r.selectedCards),o=m(r=>r.isMainCardSelected),i=m(r=>r.setSelectedMainCard),a=m(r=>r.resetCard),d=Z();return l.useEffect(()=>()=>{const r=Object.values(R);d.cancelQueries(r)},[]),l.useEffect(()=>{o&&(a(),i(!1))},[o]),e.jsx(Re,{title:"Lista de Tarjetas",children:e.jsxs(ct,{children:[e.jsxs(v,{display:"flex",overflow:"hidden",sx:{height:"100vH",maxHeight:"100%",flexDirection:"column"},children:[e.jsx(v,{px:1,children:e.jsx(dt,{name:"Lista de Tarjetas",links:[{name:"Inicio",href:Oe.root},{name:"Administracion",href:Ae.cards},{name:Le.cards.name}]})}),e.jsx(x,{flexDirection:"row",sx:{display:"flex"},children:e.jsx(x,{sx:r=>({overflow:"hidden",flexDirection:"column",flexGrow:1,pb:2}),children:(t==null?void 0:t.length)>0&&e.jsx(Rt,{})})}),e.jsxs(v,{display:"flex",overflow:"hidden",sx:{flex:"1 1 0%"},children:[e.jsx(v,{display:"block",width:1,position:"absolute"}),e.jsx(Pt,{}),e.jsx(It,{})]})]}),e.jsx($e,{})]})})}export{ps as default};
