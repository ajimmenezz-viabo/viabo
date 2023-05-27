import{o as P,j as e,a as ce,W as $,d as k,r as p,B as m,S as c,N as xe,O as J,T as i,u as he,b as pe,g as me,Q as je,R as ge,U as ee,V as te,I as ue,X as be,Y as H,Z as W,$ as F,y as re,x as ye,a0 as ve,D as M,a1 as Ce,a2 as fe,c as we,a3 as Se,e as Te,a4 as Ie,a5 as Ee,a6 as Ne}from"./build-fdd13b39.js";import{f as ae,S as Me,E as se,C as Re,H as Pe}from"./build-dd769c84.js";import"./build-775620b9.js";import{L as ne}from"./build-5b9ebb46.js";import{c as ke,d as De}from"./build-9d6dab17.js";import{a as Ae,s as Q}from"./build-695b9228.js";import{C as D}from"./build-ec27f491.js";import{u as Le,s as V,P as Be,C as ze}from"./build-2e0e7503.js";import{T as He}from"./build-e396f403.js";import{I as We}from"./build-a8992a6d.js";import{G as d}from"./build-73d9737b.js";import{V as Fe,a as _e}from"./build-84878585.js";import{A as Oe,L as qe,v as R,I as Ge}from"./build-8f07a84a.js";import{S as Ue}from"./build-4c7a154f.js";import"./build-15d04469.js";import"./build-bee6630b.js";const Ve=P(e.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}),"CheckTwoTone"),$e=P(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"ClearTwoTone"),Qe=P([e.jsx("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",opacity:".3"},"0"),e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"1"),e.jsx("circle",{cx:"7",cy:"12",r:"1.5"},"2"),e.jsx("circle",{cx:"12",cy:"12",r:"1.5"},"3"),e.jsx("circle",{cx:"17",cy:"12",r:"1.5"},"4")],"PendingTwoTone"),Ye=P(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),Ke=P([e.jsx("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z",opacity:".3"},"0"),e.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"QueryBuilderTwoTone"),Xe=(r,a)=>({commerce:null,setCommerce:l=>{r(s=>({commerce:l}))}}),z=ke(De(Xe)),Ze={COMMERCE_LIST:"commerceList"},Je=r=>{const a=r==null?void 0:r.find(l=>(l==null?void 0:l.type)==="2");return a?{id:a==null?void 0:a.id,type:a==null?void 0:a.type,name:a==null?void 0:a.name,cardNumbers:a==null?void 0:a.cardNumbers,cardUse:a==null?void 0:a.cardUse,customCardsRequired:(a==null?void 0:a.personalized)==="1"}:null},er=r=>(r==null?void 0:r.map(a=>{const{Id:l,Name:s,storePath:t}=a;return{id:l,name:s,path:t}}))??[],rr=r=>r.map((a,l)=>{var B;const{id:s,legalRepresentative:t,legalRepresentativeName:x,legalRepresentativePhone:n,legalRepresentativeLastSession:u,legalRepresentativeEmail:b,taxName:y,fiscalPersonType:w,tradeName:j,rfc:v,employees:O,branchOffices:g,pointSaleTerminal:N,paymentApi:q,register:A,statusId:S,registerStep:G,statusName:L,services:T,documents:U}=a;return{id:s,name:j,account:{id:t,name:x,email:b,phone:n,status:"Activo",lastLogged:u===""?"No ha iniciado sesión":ae(u),register:ae(A)??""},information:{available:y!=="",fiscalName:y,commercialName:j,fiscalTypePerson:w==="1"?"Moral":"Física",rfc:v,employeesNumber:O,branchesNumber:g},services:{available:N!=="0",viaboCard:Je(T),tpvsNumber:N,apiRequired:q==="1"},status:{id:S,name:L,step:((B=Ae.find(C=>C.step.toString()===G))==null?void 0:B.name)??""},documents:er(U)}}),ar=async()=>{const{data:r}=await ce.get("/api/new-commerces");return rr(r)},sr=[{id:1,name:"Registro",color:"info"},{id:2,name:"Validacion",color:"warning"},{id:3,name:"Afiliacion",color:"primary"},{id:4,name:"Cancelado",color:"error"}],le=r=>{var a;return((a=sr.find(l=>l.id.toString()===r.toString()))==null?void 0:a.color)||"info"};$("div")(({theme:r})=>({display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:r.palette.primary.main,backgroundColor:k(r.palette.primary.main,.08)}));function ir({commerce:r}){const{commerce:a}=z(n=>n,Q),{account:l,information:s,status:t}=r,x=(a==null?void 0:a.id)===r.id;return e.jsxs(D,{sx:n=>({backgroundColor:x?n.palette.secondary.lighter:n.palette.background.paper,color:x?n.palette.primary[n.palette.mode==="light"?"dark":"light"]:n.palette.text.primary,"&:hover":{border:2,borderColor:u=>u.palette.primary.main}}),children:[e.jsx(m,{sx:{p:1,position:"relative"},children:e.jsx(ne,{variant:"filled",color:le(t==null?void 0:t.id),sx:{right:16,zIndex:9,top:16,bottom:0,position:"absolute",textTransform:"capitalize"},children:t==null?void 0:t.name})}),e.jsxs(c,{spacing:2.5,children:[s!=null&&s.commercialName?e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,sx:{p:3,pb:2.5},children:[e.jsx(xe,{src:(s==null?void 0:s.avatar)!==""?s==null?void 0:s.avatar:"",alt:s==null?void 0:s.commercialName,color:J(s==null?void 0:s.commercialName).color,children:J(s==null?void 0:s.commercialName).name}),e.jsxs("div",{children:[e.jsx(i,{variant:"subtitle2",children:s==null?void 0:s.commercialName}),e.jsx(i,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:s==null?void 0:s.fiscalName})]})]}):e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,sx:{px:3,pb:0,pt:4},children:[e.jsx(Qe,{sx:{width:30,height:30,color:"info.main"}}),e.jsxs("div",{children:[e.jsx(i,{variant:"subtitle2",children:"No Disponible"}),e.jsxs(i,{variant:"body2",sx:{color:"text.info",mt:.5,display:"block"},children:["Se encuentra en el paso: ",t==null?void 0:t.step]})]})]}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:3,sx:n=>({backgroundColor:x?n.palette.secondary.main:n.palette.background.neutral,color:x?n.palette.primary[n.palette.mode==="light"?"dark":"light"]:n.palette.text.primary,p:3,pb:2.5}),children:[e.jsxs(c,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Ye,{sx:{width:16,height:16}}),e.jsx(i,{variant:"caption",children:l==null?void 0:l.name})]}),e.jsxs(c,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Ke,{sx:{width:16,height:16}}),e.jsxs(i,{variant:"caption",children:[l!=null&&l.register?l==null?void 0:l.register:"-"," "]})]})]})]})]})}const tr=p.memo(ir),nr=(r={})=>{const{enqueueSnackbar:a}=he(),[l,s]=p.useState(null);return{...pe([Ze.COMMERCE_LIST],ar,{staleTime:60*5e3,onError:x=>{const n=me(x,"No se puede obtener la lista de comercios");s(n),a(n,{variant:"error",autoHideDuration:5e3})},...r}),error:l||null}};function lr({minHeight:r}){var X,Z;const{data:a,isLoading:l,isError:s,error:t,refetch:x,isSuccess:n}=nr(),u=z(o=>o.setCommerce),{commerce:b}=z(o=>o,Q),y=p.useMemo(()=>{const o=(a==null?void 0:a.map(f=>f==null?void 0:f.status))||[],h={},I=[];return o.forEach(f=>{f&&!h[f.id]&&(h[f.id]=!0,I.push(f))}),I},[a]),[w,j]=p.useState(1),[v,O]=p.useState(""),[g,N]=p.useState(""),[q,A]=p.useState([]),[S,G]=p.useState([]),L=4,T=v?q:g?S:a,U=(T==null?void 0:T.length)||0,B=Math.ceil(U/L),C=Le(T||[],L),oe=(o,h)=>{j(h),C.jump(h)};if(p.useEffect(()=>{if(v.trim()!==""&&S&&g){const o=V(S,v);A(o)}else if(v&&a&&!g){const o=V(a,v);A(o)}},[v,a,g,S]),p.useEffect(()=>{if(a&&b){const o=a==null?void 0:a.find(h=>(h==null?void 0:h.id)===(b==null?void 0:b.id));o&&u(o)}},[a,b]),s)return e.jsx(c,{sx:{pr:{sm:2}},children:e.jsx(je,{errorMessage:t,handleButton:x})});const de=o=>{let h="";o===g?N(""):(N(o),h=(o==null?void 0:o.name)||"");const I=V(a,h);G(I)};return e.jsxs(c,{sx:{pr:{sm:2}},children:[l&&e.jsx(ge,{}),(a==null?void 0:a.length)>0&&e.jsxs(e.Fragment,{children:[e.jsx(m,{display:"flex",children:y==null?void 0:y.map(o=>{const h=(g==null?void 0:g.id)===(o==null?void 0:o.id);return e.jsx(ee.div,{onClick:()=>de(o),whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsx(ne,{variant:h?"ghost":"filled",color:le(o==null?void 0:o.id),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:h?3:0,borderColor:h?I=>I.palette.primary.main:"inherit"},children:o==null?void 0:o.name})},o==null?void 0:o.id)})}),e.jsxs(m,{display:"flex",mb:3,flexDirection:"column",alignItems:{xs:"center"},children:[e.jsx(He,{fullWidth:!0,size:"small",placeholder:"Buscar ...",value:v,onChange:o=>O(o.target.value),InputProps:{startAdornment:e.jsx(We,{position:"start",children:e.jsx(m,{sx:{color:"text.disabled"},children:e.jsx(Me,{sx:{marginTop:1}})})})}}),e.jsx(m,{sx:{flex:"1 1 auto",mb:{xs:3}}}),e.jsx(Be,{count:B,page:w,onChange:oe})]}),e.jsx(m,{sx:{maxHeight:1,minHeight:"100%",overflow:"auto"},children:e.jsx(te,{sx:{},children:e.jsxs(c,{direction:"column",spacing:2,sx:{p:2,cursor:"pointer"},children:[((X=C==null?void 0:C.currentData())==null?void 0:X.length)===0&&e.jsx(se,{pt:2.5,message:"Sin resultados "}),(Z=C==null?void 0:C.currentData())==null?void 0:Z.map((o,h)=>e.jsx(ee.div,{onClick:()=>{u(o)},whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsx(tr,{commerce:o,selected:h===0})},h))]})})})]}),a&&(a==null?void 0:a.length)===0&&e.jsx(se,{pt:2.5,message:"No hay comercios Registrados"})]})}const _=$(r=>{const{expand:a,...l}=r;return e.jsx(ue,{...l})})(({theme:r,expand:a})=>({transform:a?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})})),Y=$("div")(({theme:r})=>({width:30,height:30,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:r.palette.primary.main,backgroundColor:k(r.palette.primary.main,.08)})),E=({widthWrapper:r=30,heightWrapper:a=30,opacity:l=.08,...s})=>e.jsx(Y,{sx:{color:"success.main",bgcolor:t=>k(t.palette.success.main,l),width:r,height:a},children:e.jsx(Ve,{sx:{width:15,height:15},...s})}),ie=()=>e.jsx(Y,{sx:{color:"error.main",bgcolor:r=>k(r.palette.error.main,.08)},children:e.jsx($e,{sx:{width:15,height:15}})}),K=()=>e.jsx(Y,{sx:{color:"warning.main",width:25,height:25,bgcolor:r=>k(r.palette.warning.main,.2)},children:e.jsx(be,{sx:{width:13,height:13}})});function or({account:r,expanded:a,handleChange:l}){const s=a==="account-info";return e.jsxs(D,{sx:{p:s?5:3,border:s?3:0,borderColor:s?t=>t.palette.mode==="dark"?t.palette.secondary.main:t.palette.primary.main:"inherit"},children:[e.jsxs(c,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",children:[e.jsxs(c,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(E,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}),e.jsx(i,{variant:"subtitle1",color:"textPrimary",children:"Cuenta"})]}),e.jsx(m,{sx:{flex:"1 1 auto"}}),e.jsx(_,{expand:s,onClick:()=>{l("account-info")},"aria-expanded":s,"aria-label":"show more",children:e.jsx(H,{})})]}),e.jsx(W,{in:s,timeout:"auto",children:e.jsxs(d,{container:!0,spacing:5,sx:{mt:0},children:[e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre"}),e.jsx(i,{variant:"body2",children:r==null?void 0:r.name})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electronico"}),e.jsx(i,{variant:"body2",children:(r==null?void 0:r.email)??"-"})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(i,{variant:"body2",children:(r==null?void 0:r.phone)??"-"})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha Registro"}),e.jsx(i,{variant:"body2",children:(r==null?void 0:r.register)??"-"})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Estado"}),e.jsx(i,{variant:"body2",children:(r==null?void 0:r.status)??"-"})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Último Inicio de Sesión"}),e.jsx(i,{variant:"body2",children:(r==null?void 0:r.lastLogged)??"-"})]})]})})]})}function dr({info:r,expanded:a,handleChange:l,status:s}){const t=a==="general-info",x=!!(r!=null&&r.available);return e.jsxs(D,{sx:{p:t?5:3,border:t?3:0,borderColor:t?n=>n.palette.mode==="dark"?n.palette.secondary.main:n.palette.primary.main:"inherit"},children:[e.jsxs(c,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",children:[e.jsxs(c,{direction:"row",spacing:1.5,alignItems:"center",children:[x?e.jsx(E,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}):e.jsx(K,{}),e.jsx(i,{variant:"subtitle1",color:"textPrimary",children:"Comercio"})]}),e.jsx(m,{sx:{flex:"1 1 auto"}}),e.jsx(_,{expand:t,onClick:()=>{l("general-info")},"aria-expanded":t,"aria-label":"show more",children:e.jsx(H,{})})]}),e.jsx(W,{in:t,timeout:"auto",children:x?e.jsxs(d,{container:!0,spacing:5,sx:{mt:0},children:[e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Comercial"}),e.jsx(i,{variant:"body2",children:r==null?void 0:r.commercialName})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Fiscal"}),e.jsx(i,{variant:"body2",children:r==null?void 0:r.fiscalName})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"RFC"}),e.jsx(i,{variant:"body2",children:r==null?void 0:r.rfc})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Persona"}),e.jsx(i,{variant:"body2",children:r==null?void 0:r.fiscalTypePerson})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Numero de Empleados"}),e.jsx(i,{variant:"body2",children:r==null?void 0:r.employeesNumber})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Numero de Sucursales"}),e.jsx(i,{variant:"body2",children:r==null?void 0:r.branchesNumber})]})]}):e.jsxs(F,{sx:{mt:3},severity:"warning",variant:"filled",children:[e.jsx(i,{variant:"body2",children:"No se ha registrado la información para este comercio!"}),e.jsxs(i,{variant:"caption",children:["Etapa de registro: ",e.jsx("b",{children:s==null?void 0:s.step})]})]})})]})}function cr({services:r,expanded:a,handleChange:l,status:s}){var y,w;const t=a==="services-info",x=!!(r!=null&&r.available),n=p.useMemo(()=>!!(r!=null&&r.viaboCard),[r]),u=p.useMemo(()=>!!(r!=null&&r.apiRequired),[r]),b=p.useMemo(()=>{var j;return!!((j=r==null?void 0:r.viaboCard)!=null&&j.customCardsRequired)},[r]);return e.jsxs(D,{sx:{p:t?5:3,border:t?3:0,borderColor:t?j=>j.palette.mode==="dark"?j.palette.secondary.main:j.palette.primary.main:"inherit"},children:[e.jsxs(c,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",children:[e.jsxs(c,{direction:"row",spacing:1.5,alignItems:"center",children:[x?e.jsx(E,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}):e.jsx(K,{}),e.jsx(i,{variant:"subtitle1",color:"textPrimary",children:"Servicios"})]}),e.jsx(m,{sx:{flex:"1 1 auto"}}),e.jsx(_,{expand:t,onClick:()=>{l("services-info")},"aria-expanded":t,"aria-label":"show more",children:e.jsx(H,{})})]}),e.jsx(W,{in:t,timeout:"auto",children:x?e.jsx(e.Fragment,{children:e.jsxs(d,{container:!0,spacing:5,sx:{mt:0},children:[e.jsx(d,{item:!0,xs:12,children:e.jsxs(c,{spacing:2,direction:"row",children:[e.jsx(re,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:Fe,sx:{maxWidth:150}}),n&&e.jsx(re,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:_e,sx:{maxWidth:150}})]})}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"No. Terminales TPV's"}),e.jsx(i,{variant:"body2",children:r==null?void 0:r.tpvsNumber})]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"No. de Tarjetas"}),e.jsx(i,{variant:"body2",children:(y=r==null?void 0:r.viaboCard)==null?void 0:y.cardNumbers})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Uso de las tarjetas viabo"}),e.jsx(i,{variant:"body2",children:(w=r==null?void 0:r.viaboCard)==null?void 0:w.cardUse})]})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"API para ligas de cobro"}),u?e.jsx(E,{}):e.jsx(ie,{})]}),n&&e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(i,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tarjetas fisicas personalizadas"}),b?e.jsx(E,{}):e.jsx(ie,{})]})]})}):e.jsxs(F,{sx:{mt:3},severity:"warning",variant:"filled",children:[e.jsx(i,{variant:"body2",children:"No se han seleccionado servicios para este comercio!"}),e.jsxs(i,{variant:"caption",children:["Etapa de registro: ",e.jsx("b",{children:s==null?void 0:s.step})]})]})})]})}function xr({documents:r,expanded:a,handleChange:l,status:s}){ye();const t=a==="documents",x=(r==null?void 0:r.length)>0;return e.jsxs(D,{sx:{p:t?5:3,border:t?3:0,borderColor:t?n=>n.palette.mode==="dark"?n.palette.secondary.main:n.palette.primary.main:"inherit"},children:[e.jsxs(c,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",children:[e.jsxs(c,{direction:"row",spacing:1.5,alignItems:"center",children:[x?e.jsx(E,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}):e.jsx(K,{}),e.jsx(i,{variant:"subtitle1",color:"textPrimary",children:"Documentos"})]}),e.jsx(m,{sx:{flex:"1 1 auto"}}),e.jsx(_,{expand:t,onClick:()=>{l("documents")},"aria-expanded":t,"aria-label":"show more",children:e.jsx(H,{})})]}),e.jsx(W,{in:t,timeout:"auto",children:x?e.jsxs(e.Fragment,{children:[e.jsx(ze,{title:"",subheader:`${r==null?void 0:r.length} archivos`,sx:{p:0,my:3,"& .MuiCardHeader-action":{alignSelf:"center"}}}),e.jsx(ve,{disablePadding:!0,sx:{my:3},children:e.jsx(Oe,{children:r==null?void 0:r.map(n=>e.jsx(hr,{file:n},n==null?void 0:n.id))})})]}):e.jsxs(F,{sx:{mt:3},severity:"warning",variant:"filled",children:[e.jsx(i,{variant:"body2",children:"No se han cargado documentos legales del comercio!"}),e.jsxs(i,{variant:"caption",children:["Etapa de registro: ",e.jsx("b",{children:s==null?void 0:s.step})]})]})})]})}function hr({file:r}){return e.jsxs(qe,{component:M.div,...R().inRight,sx:{my:2,px:2,py:.75,borderRadius:.75,border:a=>`solid 1px ${a.palette.divider}`},children:[e.jsx(Ge,{sx:{width:28,height:28,color:"text.secondary",mr:2}}),e.jsx(c,{children:e.jsxs(i,{variant:"subtitle2",children:[" ",e.jsx(Ce,{href:r==null?void 0:r.path,target:"_blank",children:r==null?void 0:r.name})]})})]})}function pr(){var x;const{commerce:r}=z(n=>n,Q),[a,l]=p.useState(""),s=n=>{l(a===n?"":n)},t=700;return e.jsxs(e.Fragment,{children:[e.jsx(fe,{sx:{position:"sticky",top:0,zIndex:1},children:e.jsxs(c,{spacing:3,direction:"row",justifyContent:"space-between",sx:{width:1},alignItems:{sm:"center"},children:[e.jsx(c,{direction:"row",spacing:1,children:e.jsx(i,{variant:"h5",children:"Detalles"})}),r&&((x=r==null?void 0:r.status)==null?void 0:x.id)==="2"&&e.jsx(we,{variant:"contained",children:"Afiliación"})]})}),r?e.jsx(m,{sx:{maxHeight:t,minHeight:"100vh",overflow:"auto"},children:e.jsx(te,{sx:{},children:e.jsxs(d,{container:!0,sx:{p:2},spacing:3,children:[e.jsx(d,{item:!0,xs:12,xl:6,children:e.jsx(M.div,{...R().in,children:e.jsx(or,{account:r==null?void 0:r.account,expanded:a,handleChange:s,status:r==null?void 0:r.status})})}),e.jsx(d,{item:!0,xs:12,xl:6,children:e.jsx(M.div,{...R().in,children:e.jsx(dr,{info:r==null?void 0:r.information,expanded:a,handleChange:s,status:r==null?void 0:r.status})})}),e.jsx(d,{item:!0,xs:12,xl:6,children:e.jsx(M.div,{...R().in,children:e.jsx(cr,{services:r==null?void 0:r.services,expanded:a,handleChange:s,status:r==null?void 0:r.status})})}),e.jsx(d,{item:!0,xs:12,xl:6,children:e.jsx(M.div,{...R().in,children:e.jsx(xr,{documents:r==null?void 0:r.documents,expanded:a,handleChange:s,status:r==null?void 0:r.status})})})]})})}):e.jsxs(c,{px:2,spacing:3,sx:{height:"100%",width:"100%"},children:[e.jsx(F,{variant:"filled",severity:"info",children:"Debe seleccionar un comercio para ver sus detalles!"}),e.jsx(c,{alignItems:"center",children:e.jsx(Ue,{sx:{width:"30%"}})})]})]})}const mr=()=>{const{isCollapse:r}=Se();return e.jsxs(d,{container:!0,sx:{height:"100vH"},children:[e.jsx(d,{item:!0,xs:12,md:6,sm:6,lg:r?4:5,xl:3,sx:a=>({borderRight:{sm:`1px solid ${a.palette.divider}`},borderRightStyle:{xs:"none",sm:"dashed!important"}}),children:e.jsx(m,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:e.jsx(lr,{})})}),e.jsx(d,{item:!0,xs:!1,sm:6,md:6,lg:r?8:7,xl:9,sx:{px:2,flexGrow:1,display:{xs:"none",sm:"block"}},children:e.jsx(m,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:e.jsx(pr,{})})})]})};function Pr(){return e.jsx(Te,{title:"Administracion Comercios",children:e.jsxs(Re,{children:[e.jsx(Pe,{name:"Comercios",links:[{name:"Inicio",href:Ie.root},{name:"Administracion",href:Ee.commerces},{name:Ne.commerces.name}]}),e.jsx(mr,{})]})})}export{Pr as default};
