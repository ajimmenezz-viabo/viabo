import{a as Q,r as d,b as W,g as X,j as e,B as c,aV as Z,c as i,T as a,S as l,Y as J,Z as ee,$ as L,a0 as P,a1 as _,s as te,a8 as re,a5 as ne,a9 as ie,P as oe,aa as se,b8 as ae,b9 as le}from"./build-46cd7d18.js";import{C as ce,u as de,s as R,S as me,P as he,E as j,a as pe,H as ue}from"./build-c6174048.js";import"./build-0598f50a.js";import{L as N}from"./build-d32b73ab.js";import{c as ge,C as xe,a as fe,b as Ce}from"./build-63f2a11a.js";import{c as Se,d as ye}from"./build-7e9da9c4.js";import{T as be}from"./build-94f2d634.js";import{I as ve}from"./build-866367d6.js";import{S as Ee}from"./build-c18e551a.js";import{f as T}from"./build-7ac1f7b5.js";import{C as Ae}from"./build-e747707c.js";import{G as y}from"./build-85021bb5.js";import"./build-e0482dac.js";import"./build-e854ff17.js";const Re={CARDS_COMMERCE_LIST:"cardsCommerce"},Te=async()=>{const{data:t}=await Q.get("/api/cards/commerce");return ge(t)},Ie=(t={})=>{const[o,s]=d.useState(null);return{...W([Re.CARDS_COMMERCE_LIST],Te,{staleTime:6e4,onError:f=>{const C=X(f,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");s(C)},...t}),error:o||null}},we=(t,o)=>({card:null,setCard:s=>{t(x=>({card:s}))}}),E=Se(ye(we)),De=[{id:4,name:"Sin Asignar",color:"info"},{id:5,name:"Asignado",color:"primary"}],k=t=>{var o;return((o=De.find(s=>s.id.toString()===t.toString()))==null?void 0:o.color)||"info"};function Be({card:t}){var x,f;const o=E(C=>C.card),s=(o==null?void 0:o.id)===t.id;return e(c,{sx:C=>({p:.5,...s&&{borderRadius:2,...Z(C).bgGradient({startColor:"#A100FFFF",endColor:"#71C4FFFF"})}}),children:i(xe,{children:[e(ce,{title:e(a,{sx:{typography:"subtitle2",opacity:.72},children:"Viabo Card"}),subheader:t==null?void 0:t.register,sx:{p:0}}),e(c,{sx:{p:1,position:"relative"},children:e(N,{variant:"filled",color:k((x=t==null?void 0:t.status)==null?void 0:x.id),sx:{right:0,zIndex:9,top:-50,bottom:0,position:"absolute",textTransform:"capitalize"},children:(f=t==null?void 0:t.status)==null?void 0:f.name})}),e("div",{children:e(fe,{card:t})}),i(l,{direction:"row",spacing:5,children:[i(l,{children:[e(a,{sx:{mb:1,typography:"caption",opacity:.48},children:"Vencimiento"}),e(a,{sx:{typography:"subtitle1"},children:t==null?void 0:t.expiration})]}),e(Ce,{card:t})]})]})})}function He(){var H,M;const{data:t,isLoading:o,isError:s,error:x,refetch:f,isSuccess:C}=Ie(),I=E(r=>r.setCard),S=E(r=>r.card),A=d.useMemo(()=>{const r=(t==null?void 0:t.map(h=>h==null?void 0:h.status))||[],n={},g=[];return r.forEach(h=>{h&&!n[h.id]&&(n[h.id]=!0,g.push(h))}),g},[t]),[G,O]=d.useState(1),[p,U]=d.useState(""),[m,w]=d.useState(""),[V,D]=d.useState([]),[b,z]=d.useState([]),B=4,v=p?V:m?b:t,q=(v==null?void 0:v.length)||0,Y=Math.ceil(q/B),u=de(v||[],B),$=(r,n)=>{O(n),u.jump(n)};if(d.useEffect(()=>{if(p.trim()!==""&&b&&m){const r=R(b,p);D(r)}else if(p&&t&&!m){const r=R(t,p);D(r)}},[p,t,m,b]),d.useEffect(()=>{if(t&&S){const r=t==null?void 0:t.find(n=>(n==null?void 0:n.id)===(S==null?void 0:S.id));r&&I(r)}},[t,S]),s)return e(l,{sx:{pr:{sm:2}},children:e(J,{errorMessage:x,handleButton:f})});const K=r=>{let n="";r===m?w(""):(w(r),n=(r==null?void 0:r.name)||"");const g=R(t,n);z(g)};return i(l,{sx:{pr:{sm:2}},children:[o&&e(ee,{}),(t==null?void 0:t.length)>0&&i(L,{children:[e(c,{display:"flex",children:A==null?void 0:A.map(r=>{const n=(m==null?void 0:m.id)===(r==null?void 0:r.id);return e(P.div,{onClick:()=>K(r),whileHover:{scale:1.03},whileTap:{scale:.8},children:e(N,{variant:n?"ghost":"filled",color:k(r==null?void 0:r.id),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:n?3:0,borderColor:n?g=>g.palette.primary.main:"inherit"},children:r==null?void 0:r.name})},r==null?void 0:r.id)})}),i(c,{display:"flex",mb:3,flexDirection:"column",alignItems:{xs:"center"},children:[e(be,{fullWidth:!0,size:"small",placeholder:"Buscar ...",value:p,onChange:r=>U(r.target.value),InputProps:{startAdornment:e(ve,{position:"start",children:e(c,{sx:{color:"text.disabled"},children:e(me,{sx:{marginTop:1}})})})}}),e(c,{sx:{flex:"1 1 auto",mb:{xs:3}}}),e(he,{count:Y,page:G,onChange:$})]}),e(c,{sx:{maxHeight:1,minHeight:"100%",overflow:"auto"},children:e(_,{children:i(l,{direction:"column",spacing:2,sx:{p:2,cursor:"pointer"},children:[((H=u==null?void 0:u.currentData())==null?void 0:H.length)===0&&e(j,{pt:2.5,message:"Sin resultados "}),(M=u==null?void 0:u.currentData())==null?void 0:M.map((r,n)=>e(P.div,{onClick:g=>{I(r)},whileHover:{scale:1.03},whileTap:{scale:.8},children:e(Be,{card:r})},n))]})})})]}),t&&(t==null?void 0:t.length)===0&&e(j,{pt:2.5,message:"No hay tarjetas asignadas a este comercio"})]})}const F=te("div")({display:"flex",justifyContent:"space-between"});function Me(){return i(Ae,{sx:{p:3},children:[e(a,{variant:"subtitle2",gutterBottom:!0,children:"Saldo Disponible"}),i(l,{spacing:2,children:[i(l,{direction:"row",spacing:2,alignItems:"center",children:[e(a,{variant:"h3",children:T(162150)}),e(a,{variant:"caption",children:"MXN"})]}),i(F,{children:[e(a,{variant:"body2",sx:{color:"text.secondary"},children:"Ingresos"}),e(a,{variant:"body2",children:T(187650)})]}),i(F,{children:[e(a,{variant:"body2",sx:{color:"text.secondary"},children:"Egresos"}),i(a,{variant:"body2",children:["- ",T(25500)]})]})]})]})}function Pe(){const o=E(s=>s.card);return i(L,{children:[e(re,{sx:{position:"sticky",top:0,zIndex:1},children:e(l,{spacing:3,direction:"row",justifyContent:"space-between",sx:{width:1},alignItems:{sm:"center"},children:e(l,{direction:"row",spacing:1,children:e(a,{variant:"h5",children:"Detalles"})})})}),o?e(c,{sx:{maxHeight:700,minHeight:"100vh",overflow:"auto"},children:e(_,{children:e(y,{container:!0,sx:{p:2},spacing:3,children:e(y,{item:!0,xs:12,sm:12,md:12,lg:7,xl:5,children:e(Me,{})})})})}):i(l,{px:2,spacing:3,sx:{height:"100%",width:"100%"},children:[e(ne,{variant:"filled",severity:"info",children:"Debe seleccionar una tarjeta para ver sus detalles!"}),e(l,{alignItems:"center",children:e(Ee,{sx:{width:"30%"}})})]})]})}function je(){const{isCollapse:t}=ie();return i(y,{container:!0,sx:{height:"100vH"},children:[e(y,{item:!0,xs:12,md:6,sm:6,lg:t?4:5,xl:3,sx:o=>({borderRight:{sm:`1px solid ${o.palette.divider}`},borderRightStyle:{xs:"none",sm:"dashed!important"}}),children:e(c,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:e(He,{})})}),e(y,{item:!0,xs:!1,sm:6,md:6,lg:t?8:7,xl:9,sx:{px:2,flexGrow:1,display:{xs:"none",sm:"block"}},children:e(c,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:e(Pe,{})})})]})}function Qe(){return e(oe,{title:"Tarjetas del Comercio",children:i(pe,{children:[e(ue,{name:"Tarjetas del Comercio",links:[{name:"Inicio",href:se.root},{name:"Administracion",href:ae.cards},{name:le.cards.name}]}),e(je,{})]})})}export{Qe as default};
