import{Q as ne,R as re,W as R,U as M,r as d,V as ae,X as ie,Y as be,j as t,Z as le,$ as ce,a0 as L,e as Z,a1 as we,a2 as ve,t as G,b as Q,g as T,u as ye,a3 as de,n as Ie,o as ke,T as j,S as x,a4 as ue,a5 as Me,a6 as Re,d as z,B as k,C as Ee,a7 as De,a8 as U,a9 as he,aa as xe,ab as Ae,ac as Pe,P as I,ad as Oe,ae as Le,af as $e,ag as Be,ah as Ne,ai as ze,aj as Te,ak as Fe,I as q,k as He,l as _e,al as Ve,am as We,an as J,f as Ge,ao as Qe,ap as Ue,aq as qe}from"./build-a4286722.js";import{C as $}from"./build-c7ce8ef2.js";import{g as Xe,a as Ye,c as Ke,u as p,C as Ze,b as Je,d as et,e as tt,f as st,G as ot,h as nt,P as rt,M as at,F as it}from"./build-18959bba.js";import{C as lt}from"./build-00e619ad.js";import{C as ct,S as _}from"./build-1ac380b1.js";import"./build-1fe8520e.js";import{S as dt,C as ut}from"./build-eaf5f815.js";import{u as ht}from"./build-70609880.js";import{S as xt}from"./build-679fa74f.js";import{G as V}from"./build-960b2b78.js";import{C as pt,M as mt,E as ee,a as gt,H as ft}from"./build-e98b8eba.js";import{L as Ct}from"./build-6545b459.js";import{s as jt}from"./build-9563ddbe.js";import"./build-c9fe264a.js";import{L as St,I as bt}from"./build-227a49f0.js";import{I as wt}from"./build-4a55cb46.js";import{S as vt}from"./build-bcc20dc7.js";import{C as yt}from"./build-04156900.js";import It from"./build-465c53b0.js";import"./build-5f4b6afe.js";import"./build-7167ab3a.js";import"./build-1bf2919f.js";import"./build-c8ff689e.js";import"./build-4794144f.js";import"./build-2cb47c61.js";import"./build-ecaf0d13.js";import"./build-1edc0bc7.js";import"./build-bee6630b.js";import"./build-eca9935f.js";import"./build-984b3814.js";import"./build-53f22b1a.js";function kt(e){return ne("MuiListItemAvatar",e)}re("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Mt=["className"],Rt=e=>{const{alignItems:s,classes:r}=e;return ce({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},kt,r)},Et=R("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:e})=>M({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),Dt=d.forwardRef(function(s,r){const i=ae({props:s,name:"MuiListItemAvatar"}),{className:c}=i,a=ie(i,Mt),o=d.useContext(be),n=M({},i,{alignItems:o.alignItems}),u=Rt(n);return t.jsx(Et,M({className:le(u.root,c),ownerState:n,ref:r},a))}),At=Dt;function Pt(e){return ne("MuiSwitch",e)}const Ot=re("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),C=Ot,Lt=["className","color","edge","size","sx"],$t=e=>{const{classes:s,edge:r,size:i,color:c,checked:a,disabled:o}=e,n={root:["root",r&&`edge${L(r)}`,`size${L(i)}`],switchBase:["switchBase",`color${L(c)}`,a&&"checked",o&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=ce(n,Pt,s);return M({},s,u)},Bt=R("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.edge&&s[`edge${L(r.edge)}`],s[`size${L(r.size)}`]]}})(({ownerState:e})=>M({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${C.thumb}`]:{width:16,height:16},[`& .${C.switchBase}`]:{padding:4,[`&.${C.checked}`]:{transform:"translateX(16px)"}}})),Nt=R(dt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.switchBase,{[`& .${C.input}`]:s.input},r.color!=="default"&&s[`color${L(r.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${C.checked}`]:{transform:"translateX(20px)"},[`&.${C.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${C.checked} + .${C.track}`]:{opacity:.5},[`&.${C.disabled} + .${C.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${C.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:s})=>M({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Z(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${C.checked}`]:{color:(e.vars||e).palette[s.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[s.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Z(e.palette[s.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${s.color}DisabledColor`]:`${e.palette.mode==="light"?we(e.palette[s.color].main,.62):ve(e.palette[s.color].main,.55)}`}},[`&.${C.checked} + .${C.track}`]:{backgroundColor:(e.vars||e).palette[s.color].main}})),zt=R("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,s)=>s.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),Tt=R("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,s)=>s.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Ft=d.forwardRef(function(s,r){const i=ae({props:s,name:"MuiSwitch"}),{className:c,color:a="primary",edge:o=!1,size:n="medium",sx:u}=i,h=ie(i,Lt),S=M({},i,{color:a,edge:o,size:n}),l=$t(S),b=t.jsx(Tt,{className:l.thumb,ownerState:S});return t.jsxs(Bt,{className:le(l.root,c),sx:u,ownerState:S,children:[t.jsx(Nt,M({type:"checkbox",icon:b,checkedIcon:b,ref:r,ownerState:S},h,{classes:M({},l,{root:l.switchBase})})),t.jsx(zt,{className:l.track,ownerState:S})]})}),Ht=Ft;function _t(e){const[s,r]=d.useState((e==null?void 0:e.defaultDense)||!1),[i,c]=d.useState((e==null?void 0:e.defaultOrderBy)||"name"),[a,o]=d.useState((e==null?void 0:e.defaultOrder)||"asc"),[n,u]=d.useState((e==null?void 0:e.defaultCurrentPage)||0),[h,S]=d.useState((e==null?void 0:e.defaultRowsPerPage)||5),[l,b]=d.useState((e==null?void 0:e.defaultSelected)||[]);return{dense:s,order:a,page:n,setPage:u,orderBy:i,rowsPerPage:h,selected:l,setSelected:b,resetSelected:()=>{b((e==null?void 0:e.defaultSelected)||[])},onSelectRow:m=>{const w=l.indexOf(m);let v=[];w===-1?v=v.concat(l,m):w===0?v=v.concat(l.slice(1)):w===l.length-1?v=v.concat(l.slice(0,-1)):w>0&&(v=v.concat(l.slice(0,w),l.slice(w+1))),b(v)},onSelectAllRows:(m,w)=>{if(m){b(w);return}b([])},onSort:m=>{m!==""&&(o(i===m&&a==="asc"?"desc":"asc"),c(m))},onChangePage:(m,w)=>{u(w)},onChangeDense:m=>{r(m.target.checked)},onChangeRowsPerPage:m=>{S(parseInt(m.target.value,10)),u(0)}}}const Vt=G(t.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),Wt=G(t.jsx("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message"),te=G(t.jsx("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"PasswordTwoTone"),Gt=(e,s={})=>{const[r,i]=d.useState(null);return{...Q([$.CARDS_COMMERCE_LIST],()=>Xe(e),{staleTime:6e4,refetchOnMount:"always",onError:a=>{const o=T(a,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");i(o)},...s}),error:r||null}},Qt=(e,s={})=>{const[r,i]=d.useState(null);return{...Q([$.CARD_INFO,e],({signal:a})=>Ye(e,a),{staleTime:6e4,onError:a=>{const o=T(a,"No se puede obtener la informacion de la tarjeta. Intente nuevamente o reporte a sistemas");i(o)},refetchOnWindowFocus:!1,...s}),error:r||null}},Ut=(e={})=>{const{enqueueSnackbar:s}=ye(),[r,i]=d.useState(null),c=de();return{...Ie(Ke,{onSuccess:o=>{i(null),c.refetchQueries([$.CARD_INFO,o==null?void 0:o.id]),s(o!=null&&o.cardON?"Se encendió la tarjeta con éxito":"Se apagó la tarjeta con éxito",{variant:"success",autoHideDuration:5e3})},onError:o=>{const n=T(o,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");s(n,{variant:ke(o),autoHideDuration:5e3}),i(n)},...e}),error:r||null}};function qt(){const e=p(r=>r.card),{assignUser:s}=e;return t.jsxs(lt,{sx:{p:3},children:[t.jsx(j,{variant:"h6",gutterBottom:!0,children:"Asignado a:"}),t.jsxs(x,{spacing:3,children:[t.jsxs(x,{justifyContent:"space-between",gap:1,children:[t.jsx(j,{variant:"subtitle2",sx:{color:"text.secondary"},textTransform:"capitalize",children:"Nombre"}),t.jsx(j,{variant:"body2",children:s==null?void 0:s.name})]}),(s==null?void 0:s.phone)&&t.jsxs(x,{justifyContent:"space-between",gap:1,children:[t.jsx(j,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Telefono"}),t.jsx(j,{variant:"body2",children:(s==null?void 0:s.phone)||"-"})]}),t.jsxs(x,{justifyContent:"space-between",gap:1,children:[t.jsx(j,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Correo"}),t.jsx(j,{variant:"body2",children:s==null?void 0:s.email})]})]})]})}const Xt=R(e=>t.jsx(Ht,{focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,...e}))(({theme:e})=>({width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:e.palette.mode==="dark"?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:e.palette.mode==="light"?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:26/2,backgroundColor:e.palette.error.main,opacity:1,transition:e.transitions.create(["background-color"],{duration:500})}}));function Yt({card:e}){const[s,r]=d.useState(!1),[i,c]=d.useState(!1),{mutate:a,isLoading:o}=Ut(),n=ht([$.CARD_INFO,e==null?void 0:e.id])===1;d.useEffect(()=>{r(!1),c(!1)},[e==null?void 0:e.id]);const u=h=>{a({...e,cardON:!(e!=null&&e.cardON)})};return t.jsx(ue,{sx:h=>({borderRadius:1,position:"relative",zIndex:1,backgroundColor:h.palette.primary.light,color:"white",minHeight:"auto!important",height:{xs:1,sm:"auto"},py:{xs:0,sm:2}}),children:t.jsxs(x,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[t.jsxs(x,{flexDirection:"column",spacing:0,alignItems:{xs:"center",md:"start"},children:[t.jsxs(x,{flexDirection:"row",gap:1,alignItems:"center",children:[t.jsx(j,{variant:"subtitle2",children:"Disponible"}),o||n?t.jsx(Me,{size:30,containerProps:{display:"flex",ml:1}}):t.jsx(Xt,{disabled:o,color:e!=null&&e.cardON?"success":"error",checked:(e==null?void 0:e.cardON)||!1,onChange:u,sx:{m:1},inputProps:{"aria-label":"controlled"}})]}),t.jsxs(x,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(j,{variant:"h3",children:e==null?void 0:e.balanceFormatted}),t.jsx(j,{variant:"caption",children:"MXN"})]})]}),t.jsxs(x,{justifyContent:"flex-end",spacing:1,alignItems:{xs:"center",md:"end"},children:[t.jsx(ct,{card:e,color:"#fff"}),t.jsxs(x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",gap:1,divider:t.jsx(Re,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[t.jsx(j,{color:"#fff",variant:"subtitle2",children:e==null?void 0:e.expiration}),t.jsx(z,{startIcon:s?t.jsx(se,{handleFinish:()=>r(!1)}):t.jsx(te,{}),color:"inherit",onClick:()=>r(h=>!h),children:s?`${e==null?void 0:e.cvv}`:"CVV"}),t.jsx(z,{startIcon:i?t.jsx(se,{handleFinish:()=>c(!1)}):t.jsx(te,{}),color:"inherit",onClick:()=>c(h=>!h),children:i?e==null?void 0:e.nip:"NIP"})]})]})]})})}function se({handleFinish:e,duration:s=10}){const[r,i]=d.useState(100);return d.useEffect(()=>{let c;return r>0?c=setInterval(()=>{i(a=>a-100/s)},1e3):e(),()=>clearInterval(c)},[r,s]),t.jsxs(k,{sx:{position:"relative",display:"inline-flex",minWidth:60},children:[t.jsx(Ee,{variant:"determinate",value:r}),t.jsx(k,{sx:{top:0,left:0,bottom:0,right:20,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(j,{variant:"caption",component:"div",color:"text.primary",children:`${Math.ceil(s*r/100)} `})})]})}function Kt(){const e=p(u=>u.card),s=p(u=>u.addInfoCard),{data:r,isLoading:i,isError:c,error:a,refetch:o}=Qt(e==null?void 0:e.id,{enabled:!!(e!=null&&e.id)}),{isCollapse:n}=De();return d.useEffect(()=>{r&&s(r)},[r]),t.jsxs(x,{sx:u=>({pl:{xs:0,lg:2},overflow:"hidden",flexDirection:"column",flexGrow:1}),children:[c&&!r&&!i&&t.jsx(U,{sx:{justifyContent:"flex-start"},errorMessage:a,handleButton:o}),e&&i&&t.jsx(he,{}),e&&r&&t.jsxs(t.Fragment,{children:[t.jsx(Yt,{card:e}),t.jsx(Ze,{}),t.jsx(xe,{children:t.jsx(x,{pt:2,pb:4,px:2,children:t.jsxs(V,{container:!0,spacing:3,sx:{p:0,pb:3},children:[t.jsx(V,{item:!0,xs:12,sm:12,md:12,lg:n?4:12,xl:4,children:t.jsxs(x,{spacing:3,children:[t.jsx(Je,{}),t.jsx(et,{}),t.jsx(qt,{})]})}),t.jsx(V,{item:!0,xs:12,sm:12,md:12,lg:n?8:12,xl:8,children:t.jsx(tt,{})})]})})})]}),!e&&t.jsxs(x,{spacing:3,sx:{height:"100%",width:"100%"},children:[t.jsx(Ae,{variant:"filled",severity:"info",children:"Debe seleccionar una tarjeta para ver sus detalles!"}),t.jsx(x,{alignItems:"center",children:t.jsx(xt,{sx:{width:"30%"}})})]})]})}const Zt=R(Pe)(({theme:e})=>({borderRadius:"8px!important",width:1,justifyContent:"center",display:"flex",alignItems:"center",mb:1}));pe.propTypes={isOpenSidebar:I.bool,selected:I.bool,card:I.object,onSelectRow:I.func,onOpenDetails:I.func};function pe({isOpenSidebar:e,card:s,selected:r,onSelectRow:i,onOpenDetails:c}){const{id:a,cardUserNumber:o,cardType:n}=s,u=p(g=>g.setCard),h=p(g=>g.card),S=p(g=>g.addInfoCard),l=p(g=>g.setSelectedMainCard),b=p(g=>g.isMainCardSelected),y=Oe(),N=(y==null?void 0:y.permissions)??[],f=a===(h==null?void 0:h.id)&&h?(h==null?void 0:h.cardON)===!0?"online":"offline":"invisible",A=a===(h==null?void 0:h.id),P=g=>{var m;!((m=g.target)==null?void 0:m.type)&&!A&&(u(s),b&&l(!1),S({movements:[],expenses:"$0.00",income:"$0.00",balanceMovements:"$0.00"}),c())};return t.jsx(Le,{title:e?"":o,arrow:!0,placement:"right",children:t.jsx(Ct,{sx:{mb:1,padding:0,borderRadius:1,"& :hover":{color:"text.primary"}},secondaryAction:e&&N.includes($e.COMMERCE_CARDS)&&t.jsx(ut,{edge:"start",checked:r,onClick:i,inputProps:{"aria-labelledby":a}}),disablePadding:!0,children:t.jsxs(Zt,{onClick:P,sx:{...A&&{bgcolor:"secondary.light",color:"black","& :hover":{color:"text.primary"}},"& :hover":{color:"text.primary"},width:1,py:1,gap:1},children:[t.jsx(At,{sx:{ml:2,m:0},children:t.jsxs(k,{sx:{position:"relative"},children:[t.jsx(Be,{sx:g=>({width:30,height:30,m:0,color:g.palette.primary.contrastText,backgroundColor:g.palette.primary.main}),children:n==="Carnet"?t.jsx(pt,{sx:{width:20},color:"white"}):t.jsx(mt,{sx:{width:20}})}),t.jsx(Ne,{status:f,sx:{right:0,bottom:0,position:"absolute"}})]})}),e&&t.jsx(t.Fragment,{children:t.jsx(x,{sx:{width:1},children:t.jsx(j,{noWrap:!0,variant:"subtitle2",children:o})})})]})})})}const Jt=d.memo(pe);function es({isOpenSideBar:e}){return t.jsxs(x,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1.5},children:[t.jsx(_,{variant:"circular",width:48,height:48}),e&&t.jsxs(x,{spacing:.5,sx:{flexGrow:1},children:[t.jsx(_,{variant:"text",sx:{width:.5,height:16}}),t.jsx(_,{variant:"text",sx:{width:.25,height:12}})]})]})}me.propTypes={cards:I.array,isOpenSidebar:I.bool,onOpenDetails:I.func,isLoading:I.bool,sx:I.object};function me({cards:e,isOpenSidebar:s,isLoading:r,sx:i,onOpenDetails:c,...a}){const o=p(l=>l.setSelectedCards),n=p(l=>l.selectedCards,jt),{selected:u,onSelectRow:h,resetSelected:S}=_t();return d.useEffect(()=>{o(u)},[u]),d.useEffect(()=>{(n==null?void 0:n.length)===0&&S()},[n]),t.jsx(ze,{disablePadding:!0,sx:i,...a,children:(r?[...Array(12)]:e).map((l,b)=>l!=null&&l.id?t.jsx(Jt,{isOpenSidebar:s,card:l,selected:n==null?void 0:n.some(y=>(y==null?void 0:y.id)===(l==null?void 0:l.id)),onSelectRow:()=>h(l),onOpenDetails:c},l==null?void 0:l.id):t.jsx(es,{isOpenSideBar:s},b))})}function ts({cardTypes:e,isLoading:s,isError:r,refetch:i}){const c=p(n=>n.setCardTypeSelected),a=p(n=>n.cardTypeSelected),o=n=>{c(n==null?void 0:n.id)};return t.jsxs(k,{display:"flex",children:[s&&t.jsx(he,{}),r&&!s&&t.jsx(U,{errorMessage:"No existen tipos de tarjetas para este comercio",handleButton:i}),!s&&(e==null?void 0:e.map(n=>{const u=a===(n==null?void 0:n.id);return t.jsx(Te.div,{onClick:()=>o(n),whileHover:{scale:1.03},whileTap:{scale:.8},children:t.jsx(St,{variant:u?"ghost":"filled",color:Fe((n==null?void 0:n.name)||"inherit"),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:u?3:0,borderColor:u?h=>h.palette.primary.main:"inherit"},children:n==null?void 0:n.name})},n==null?void 0:n.id)}))]})}const ss=R(e=>t.jsx(q,{disableRipple:!0,...e}))(({theme:e})=>({left:0,zIndex:9,width:32,height:32,position:"absolute",top:e.spacing(21),borderRadius:"0 12px 12px 0",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,boxShadow:e.customShadows.primary,"&:hover":{backgroundColor:e.palette.primary.darker}})),os=R(e=>t.jsx(q,{disableRipple:!0,...e}))(({theme:e})=>({alignItems:"center",justifyContent:"center",boxSizing:"boder-box",display:"inline-flex",outline:"0px",margin:"0px",cursor:"pointer",userSelect:"none",textDecoration:"none",textAlign:"center",borderRadius:"50%",overflow:"visible",color:"rgb(145, 158, 171)",fontSize:"1.125rem",padding:"4px",zIndex:"1500",border:"1px dashed rgba(145, 158, 171, 0.24)",backdropFilter:"blur(6px)",lineHeight:0})),W=320,oe=96,ns=(e={})=>{const[s,r]=d.useState(null),i=p(o=>o.setCardTypeSelected),c=p(o=>o.cardTypeSelected);return{...Q([$.PAYMENT_PROCESSORS],st,{staleTime:6e4,refetchOnMount:"always",onError:o=>{const n=T(o,"No se puede obtener la lista de los tipos de tarjetas. Intente nuevamente o reporte a sistemas");r(n)},onSuccess:o=>{const n=(o==null?void 0:o.find(u=>(u==null?void 0:u.id)==="2"))||Array.isArray(o)&&(o==null?void 0:o.length)>0&&o[0]||null;n&&!c&&i(n==null?void 0:n.id)},...e}),error:s||null}};function rs(){const e=p(E=>{var D;return(D=E.card)==null?void 0:D.id}),s=p(E=>E.cardTypeSelected),{data:r,isLoading:i,isError:c,refetch:a}=ns(),{data:o,isLoading:n,isRefetching:u,isError:h,error:S,refetch:l,isSuccess:b}=Gt(s,{enabled:!1}),y=n||u,N=He(),[f,A]=d.useState(!0),[P,g]=d.useState(""),[O,m]=d.useState(o||[]),[w,v]=d.useState(!1),B=_e("up","md"),ge=P&&w,X=B&&!f;d.useEffect(()=>{s&&l()},[s]),d.useEffect(()=>{if(!B)return F()},[B,e]),d.useEffect(()=>{if(!f)return v(!1)},[f]),d.useEffect(()=>{o&&m(o)},[o]);const F=()=>{A(!1)},Y=()=>{A(E=>(E&&(g(""),m(o)),!E))},fe=()=>{v(!1)},Ce=async E=>{try{const{value:D}=E.target;if(g(D),D){const Se=(o==null?void 0:o.filter(H=>(H==null?void 0:H.cardNumber.toLowerCase().indexOf(D.toLowerCase()))!==-1))||[];m(Se)}else m(o)}catch(D){console.error(D)}},je=()=>{v(!0)},K=t.jsx(xe,{sx:{height:.98},children:t.jsxs(x,{px:f?1:0,children:[f&&t.jsx(ts,{cardTypes:r,isLoading:i,isError:c,refetch:a}),!s&&f&&!i&&t.jsx(ee,{pt:2.5,message:"Seleccione un tipo de tarjeta para obtener la lista de tarjetas"}),s&&!i&&t.jsxs(t.Fragment,{children:[t.jsx(ot,{openSidebar:f}),t.jsx(k,{sx:{p:2,px:0},children:t.jsxs(x,{direction:"row",justifyContent:f?"flex-end":"center",alignItems:"center",spacing:2,children:[!X&&t.jsx(nt,{onClickAway:fe,children:t.jsx(bt,{fullWidth:!0,size:"small",value:P,onFocus:je,onChange:Ce,placeholder:"Buscar Tarjetas...",InputProps:{startAdornment:t.jsx(wt,{position:"start",children:t.jsx(vt,{sx:{color:"text.disabled",width:20,height:20}})})}})}),t.jsx(x,{direction:"row",alignItems:"center",justifyContent:"center",children:t.jsx(os,{size:"small",sx:{...!f&&{transform:"rotate(180deg)"}},onClick:Y,children:Ve})})]})}),h&&f&&!o&&!y&&t.jsx(U,{errorMessage:S,handleButton:l}),o&&f&&(o==null?void 0:o.length)===0&&!y&&t.jsx(ee,{pt:2.5,message:"No hay tarjetas activas en este tipo de tarjeta"}),t.jsx(me,{isOpenSidebar:f,cards:O||[],isLoading:y,onOpenDetails:F}),ge&&(O==null?void 0:O.length)===0&&(o==null?void 0:o.length)>0&&t.jsx(We,{sx:{p:1,display:"flex",flexDirection:"column",alignItems:"center"},searchQuery:P})]})]})});return t.jsxs(t.Fragment,{children:[!B&&t.jsx(ss,{onClick:Y,children:t.jsx(yt,{sx:{width:16,height:16}})}),B?t.jsx(J,{open:f,variant:"persistent",PaperProps:{sx:{height:1,borderRightStyle:"none",bgcolor:"background.default"}},sx:{height:1,width:W,transition:N.transitions.create("width"),"& .MuiDrawer-paper":{position:"static",backgroundColor:"transparent!important",width:W},...X&&{width:oe,"& .MuiDrawer-paper":{width:oe,backgroundColor:"transparent!important",position:"static",transform:"none !important",visibility:"visible !important"}}},children:K}):t.jsx(J,{ModalProps:{keepMounted:!0},open:f,onClose:F,sx:{height:1,"& .MuiDrawer-paper":{width:W,p:2}},children:K})]})}function as(){const[e,s]=d.useState(!1),[r,i]=d.useState(!1),c=p(n=>n.mainCard),a=p(n=>n.setSelectedCards),o=()=>{a([])};return t.jsxs(t.Fragment,{children:[t.jsx(ue,{sx:n=>({position:"sticky",borderRadius:1,py:4,top:0,boxShadow:n.customShadows.z8,backgroundColor:n.palette.info.lighter,color:"white"}),children:t.jsxs(x,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[t.jsxs(x,{flexDirection:"row",alignItems:"center",gap:1,children:[t.jsx(q,{"aria-label":"close",size:"small",onClick:o,children:t.jsx(Vt,{width:20,height:20,fontSize:"inherit",color:"primary"})}),t.jsx(j,{variant:"subtitle2",color:"info.main",children:"Acciones:"})]}),t.jsxs(x,{flexDirection:"row",gap:2,justifyContent:"space-between",children:[t.jsx(z,{startIcon:t.jsx(Wt,{}),variant:"outlined",color:"info",onClick:()=>{s(!0),i(!1)},children:"Mensaje"}),c&&t.jsx(z,{startIcon:t.jsx(rt,{}),variant:"outlined",color:"info",onClick:()=>{i(!0),s(!1)},children:"Fondear"})]})]})}),t.jsx(at,{isOpenCompose:e,onCloseCompose:()=>s(!1)}),t.jsx(It,{open:r,setOpen:i,isFundingCard:!0})]})}function zs(){const e=p(a=>a==null?void 0:a.selectedCards),s=p(a=>a.isMainCardSelected),r=p(a=>a.setSelectedMainCard),i=p(a=>a.resetCard),c=de();return d.useEffect(()=>()=>{const a=Object.values($);c.cancelQueries(a)},[]),d.useEffect(()=>{s&&(i(),r(!1))},[s]),t.jsx(Ge,{title:"Lista de Tarjetas",children:t.jsxs(gt,{children:[t.jsxs(k,{display:"flex",overflow:"hidden",sx:{height:"100vH",maxHeight:"100%",flexDirection:"column"},children:[t.jsx(k,{px:1,children:t.jsx(ft,{name:"Lista de Tarjetas",links:[{name:"Inicio",href:Qe.root},{name:"Administracion",href:Ue.cards},{name:qe.cards.name}]})}),t.jsx(x,{flexDirection:"row",sx:{display:"flex"},children:t.jsx(x,{sx:a=>({overflow:"hidden",flexDirection:"column",flexGrow:1,pb:2}),children:(e==null?void 0:e.length)>0&&t.jsx(as,{})})}),t.jsxs(k,{display:"flex",overflow:"hidden",sx:{flex:"1 1 0%"},children:[t.jsx(k,{display:"block",width:1,position:"absolute"}),t.jsx(rs,{}),t.jsx(Kt,{})]})]}),t.jsx(it,{})]})})}export{zs as default};
