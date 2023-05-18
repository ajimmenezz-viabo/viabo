import{q as P,j as e,a as pe,s as Y,e as L,r as x,c as i,B as g,S as h,Q as me,R as re,T as n,u as xe,b as ge,g as ue,U as be,V as ye,W as A,X as ae,Y as oe,I as ve,Z as Ce,$ as _,a0 as j,a1 as q,D as ie,z as fe,a2 as we,F as k,a3 as Se,a4 as Te,d as Ie,a5 as Ee,P as Ne,a6 as Me,a7 as Pe,a8 as Re}from"./build-dd390203.js";import{f as te,u as ke,s as Q,S as De,P as Ae,E as ne,C as Le,A as ze,v as D,a as Be,H as He}from"./build-e10cc88e.js";import"./build-fb2c75ee.js";import{L as se}from"./build-8ba7f733.js";import{c as We,d as Fe}from"./build-cfcad3e6.js";import{a as _e,s as K}from"./build-695b9228.js";import{C as z}from"./build-508141d0.js";import{T as je}from"./build-619c64c9.js";import{I as qe}from"./build-96eab253.js";import{G as c}from"./build-65bc45f8.js";import{V as Ve,a as Ge}from"./build-84878585.js";import{L as Oe}from"./build-3951c9e9.js";import{S as Ue}from"./build-ccd544f3.js";import"./build-97648e49.js";const $e=P(e("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}),"CheckTwoTone"),Qe=P(e("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"ClearTwoTone"),Ye=P(e("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile"),Ke=P([e("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",opacity:".3"},"0"),e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"1"),e("circle",{cx:"7",cy:"12",r:"1.5"},"2"),e("circle",{cx:"12",cy:"12",r:"1.5"},"3"),e("circle",{cx:"17",cy:"12",r:"1.5"},"4")],"PendingTwoTone"),Xe=P(e("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),Ze=P([e("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z",opacity:".3"},"0"),e("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"QueryBuilderTwoTone"),Je=(r,a)=>({commerce:null,setCommerce:s=>{r(t=>({commerce:s}))}}),F=We(Fe(Je)),er={COMMERCE_LIST:"commerceList"},rr=r=>{const a=r==null?void 0:r.find(s=>(s==null?void 0:s.type)==="2");return a?{id:a==null?void 0:a.id,type:a==null?void 0:a.type,name:a==null?void 0:a.name,cardNumbers:a==null?void 0:a.cardNumbers,cardUse:a==null?void 0:a.cardUse,customCardsRequired:(a==null?void 0:a.personalized)==="1"}:null},ar=r=>(r==null?void 0:r.map(a=>{const{Id:s,Name:t,storePath:l}=a;return{id:s,name:t,path:l}}))??[],ir=r=>r.map((a,s)=>{var W;const{id:t,legalRepresentative:l,legalRepresentativeName:p,legalRepresentativePhone:o,legalRepresentativeLastSession:y,legalRepresentativeEmail:v,taxName:C,fiscalPersonType:T,tradeName:u,rfc:f,employees:G,branchOffices:b,pointSaleTerminal:R,paymentApi:O,register:B,statusId:I,registerStep:U,statusName:H,services:E,documents:$}=a;return{id:t,name:u,account:{id:l,name:p,email:v,phone:o,status:"Activo",lastLogged:y===""?"No ha iniciado sesión":te(y),register:te(B)??""},information:{available:C!=="",fiscalName:C,commercialName:u,fiscalTypePerson:T==="1"?"Moral":"Física",rfc:f,employeesNumber:G,branchesNumber:b},services:{available:R!=="0",viaboCard:rr(E),tpvsNumber:R,apiRequired:O==="1"},status:{id:I,name:H,step:((W=_e.find(w=>w.step.toString()===U))==null?void 0:W.name)??""},documents:ar($)}}),tr=async()=>{const{data:r}=await pe.get("/api/new-commerces");return ir(r)},nr=[{id:1,name:"Registro",color:"info"},{id:2,name:"Validacion",color:"warning"},{id:3,name:"Afiliacion",color:"primary"},{id:4,name:"Cancelado",color:"error"}],de=r=>{var a;return((a=nr.find(s=>s.id.toString()===r.toString()))==null?void 0:a.color)||"info"};Y("div")(({theme:r})=>({display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:r.palette.primary.main,backgroundColor:L(r.palette.primary.main,.08)}));function lr({commerce:r}){const{commerce:a}=F(o=>o,K),{account:s,information:t,status:l}=r,p=(a==null?void 0:a.id)===r.id;return i(z,{sx:o=>({backgroundColor:p?o.palette.secondary.lighter:o.palette.background.paper,color:p?o.palette.primary[o.palette.mode==="light"?"dark":"light"]:o.palette.text.primary,"&:hover":{border:2,borderColor:y=>y.palette.primary.main}}),children:[e(g,{sx:{p:1,position:"relative"},children:e(se,{variant:"filled",color:de(l==null?void 0:l.id),sx:{right:16,zIndex:9,top:16,bottom:0,position:"absolute",textTransform:"capitalize"},children:l==null?void 0:l.name})}),i(h,{spacing:2.5,children:[t!=null&&t.commercialName?i(h,{direction:"row",alignItems:"center",spacing:2,sx:{p:3,pb:2.5},children:[e(me,{src:(t==null?void 0:t.avatar)!==""?t==null?void 0:t.avatar:"",alt:t==null?void 0:t.commercialName,color:re(t==null?void 0:t.commercialName).color,children:re(t==null?void 0:t.commercialName).name}),i("div",{children:[e(n,{variant:"subtitle2",children:t==null?void 0:t.commercialName}),e(n,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:t==null?void 0:t.fiscalName})]})]}):i(h,{direction:"row",alignItems:"center",spacing:2,sx:{px:3,pb:0,pt:4},children:[e(Ke,{sx:{width:30,height:30,color:"info.main"}}),i("div",{children:[e(n,{variant:"subtitle2",children:"No Disponible"}),i(n,{variant:"body2",sx:{color:"text.info",mt:.5,display:"block"},children:["Se encuentra en el paso: ",l==null?void 0:l.step]})]})]}),i(h,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:3,sx:o=>({backgroundColor:p?o.palette.secondary.main:o.palette.background.neutral,color:p?o.palette.primary[o.palette.mode==="light"?"dark":"light"]:o.palette.text.primary,p:3,pb:2.5}),children:[i(h,{direction:"row",alignItems:"center",spacing:1,children:[e(Xe,{sx:{width:16,height:16}}),e(n,{variant:"caption",children:s==null?void 0:s.name})]}),i(h,{direction:"row",alignItems:"center",spacing:1,children:[e(Ze,{sx:{width:16,height:16}}),i(n,{variant:"caption",children:[s!=null&&s.register?s==null?void 0:s.register:"-"," "]})]})]})]})]})}const or=x.memo(lr),sr=(r={})=>{const{enqueueSnackbar:a}=xe(),[s,t]=x.useState(null);return{...ge([er.COMMERCE_LIST],tr,{staleTime:60*5e3,onError:p=>{const o=ue(p,"No se puede obtener la lista de comercios");t(o),a(o,{variant:"error",autoHideDuration:5e3})},...r}),error:s||null}};function dr({minHeight:r}){var J,ee;const{data:a,isLoading:s,isError:t,error:l,refetch:p,isSuccess:o}=sr(),y=F(d=>d.setCommerce),{commerce:v}=F(d=>d,K),C=x.useMemo(()=>{const d=(a==null?void 0:a.map(S=>S==null?void 0:S.status))||[],m={},N=[];return d.forEach(S=>{S&&!m[S.id]&&(m[S.id]=!0,N.push(S))}),N},[a]),[T,u]=x.useState(1),[f,G]=x.useState(""),[b,R]=x.useState(""),[O,B]=x.useState([]),[I,U]=x.useState([]),H=4,E=f?O:b?I:a,$=(E==null?void 0:E.length)||0,W=Math.ceil($/H),w=ke(E||[],H),ce=(d,m)=>{u(m),w.jump(m)};if(x.useEffect(()=>{if(f.trim()!==""&&I&&b){const d=Q(I,f);B(d)}else if(f&&a&&!b){const d=Q(a,f);B(d)}},[f,a,b,I]),x.useEffect(()=>{if(a&&v){const d=a==null?void 0:a.find(m=>(m==null?void 0:m.id)===(v==null?void 0:v.id));d&&y(d)}},[a,v]),t)return e(h,{sx:{pr:{sm:2}},children:e(be,{errorMessage:l,handleButton:p})});const he=d=>{let m="";d===b?R(""):(R(d),m=(d==null?void 0:d.name)||"");const N=Q(a,m);U(N)};return i(h,{sx:{pr:{sm:2}},children:[s&&e(ye,{}),(a==null?void 0:a.length)>0&&i(A,{children:[e(g,{display:"flex",children:C==null?void 0:C.map(d=>{const m=(b==null?void 0:b.id)===(d==null?void 0:d.id);return e(ae.div,{onClick:()=>he(d),whileHover:{scale:1.03},whileTap:{scale:.8},children:e(se,{variant:m?"ghost":"filled",color:de(d==null?void 0:d.id),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:m?3:0,borderColor:m?N=>N.palette.primary.main:"inherit"},children:d==null?void 0:d.name})},d==null?void 0:d.id)})}),i(g,{display:"flex",mb:3,flexDirection:"column",alignItems:{xs:"center"},children:[e(je,{fullWidth:!0,size:"small",placeholder:"Buscar ...",value:f,onChange:d=>G(d.target.value),InputProps:{startAdornment:e(qe,{position:"start",children:e(g,{sx:{color:"text.disabled"},children:e(De,{sx:{marginTop:1}})})})}}),e(g,{sx:{flex:"1 1 auto",mb:{xs:3}}}),e(Ae,{count:W,page:T,onChange:ce})]}),e(g,{sx:{maxHeight:1,minHeight:"100%",overflow:"auto"},children:e(oe,{sx:{},children:i(h,{direction:"column",spacing:2,sx:{p:2,cursor:"pointer"},children:[((J=w==null?void 0:w.currentData())==null?void 0:J.length)===0&&e(ne,{pt:2.5,message:"Sin resultados "}),(ee=w==null?void 0:w.currentData())==null?void 0:ee.map((d,m)=>e(ae.div,{onClick:()=>{y(d)},whileHover:{scale:1.03},whileTap:{scale:.8},children:e(or,{commerce:d,selected:m===0})},m))]})})})]}),a&&(a==null?void 0:a.length)===0&&e(ne,{pt:2.5,message:"No hay comercios Registrados"})]})}const V=Y(r=>{const{expand:a,...s}=r;return e(ve,{...s})})(({theme:r,expand:a})=>({transform:a?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})})),X=Y("div")(({theme:r})=>({width:30,height:30,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:r.palette.primary.main,backgroundColor:L(r.palette.primary.main,.08)})),M=({widthWrapper:r=30,heightWrapper:a=30,opacity:s=.08,...t})=>e(X,{sx:{color:"success.main",bgcolor:l=>L(l.palette.success.main,s),width:r,height:a},children:e($e,{sx:{width:15,height:15},...t})}),le=()=>e(X,{sx:{color:"error.main",bgcolor:r=>L(r.palette.error.main,.08)},children:e(Qe,{sx:{width:15,height:15}})}),Z=()=>e(X,{sx:{color:"warning.main",width:25,height:25,bgcolor:r=>L(r.palette.warning.main,.2)},children:e(Ce,{sx:{width:13,height:13}})});function cr({account:r,expanded:a,handleChange:s}){const t=a==="account-info";return i(z,{sx:{p:t?5:3,border:t?3:0,borderColor:t?l=>l.palette.mode==="dark"?l.palette.secondary.main:l.palette.primary.main:"inherit"},children:[i(h,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",children:[i(h,{direction:"row",spacing:1.5,alignItems:"center",children:[e(M,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}),e(n,{variant:"subtitle1",color:"textPrimary",children:"Cuenta"})]}),e(g,{sx:{flex:"1 1 auto"}}),e(V,{expand:t,onClick:()=>{s("account-info")},"aria-expanded":t,"aria-label":"show more",children:e(_,{})})]}),e(j,{in:t,timeout:"auto",children:i(c,{container:!0,spacing:5,sx:{mt:0},children:[i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre"}),e(n,{variant:"body2",children:r==null?void 0:r.name})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electronico"}),e(n,{variant:"body2",children:(r==null?void 0:r.email)??"-"})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e(n,{variant:"body2",children:(r==null?void 0:r.phone)??"-"})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha Registro"}),e(n,{variant:"body2",children:(r==null?void 0:r.register)??"-"})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Estado"}),e(n,{variant:"body2",children:(r==null?void 0:r.status)??"-"})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Último Inicio de Sesión"}),e(n,{variant:"body2",children:(r==null?void 0:r.lastLogged)??"-"})]})]})})]})}function hr({info:r,expanded:a,handleChange:s,status:t}){const l=a==="general-info",p=!!(r!=null&&r.available);return i(z,{sx:{p:l?5:3,border:l?3:0,borderColor:l?o=>o.palette.mode==="dark"?o.palette.secondary.main:o.palette.primary.main:"inherit"},children:[i(h,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",children:[i(h,{direction:"row",spacing:1.5,alignItems:"center",children:[p?e(M,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}):e(Z,{}),e(n,{variant:"subtitle1",color:"textPrimary",children:"Comercio"})]}),e(g,{sx:{flex:"1 1 auto"}}),e(V,{expand:l,onClick:()=>{s("general-info")},"aria-expanded":l,"aria-label":"show more",children:e(_,{})})]}),e(j,{in:l,timeout:"auto",children:p?i(c,{container:!0,spacing:5,sx:{mt:0},children:[i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Comercial"}),e(n,{variant:"body2",children:r==null?void 0:r.commercialName})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Fiscal"}),e(n,{variant:"body2",children:r==null?void 0:r.fiscalName})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"RFC"}),e(n,{variant:"body2",children:r==null?void 0:r.rfc})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Persona"}),e(n,{variant:"body2",children:r==null?void 0:r.fiscalTypePerson})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Numero de Empleados"}),e(n,{variant:"body2",children:r==null?void 0:r.employeesNumber})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Numero de Sucursales"}),e(n,{variant:"body2",children:r==null?void 0:r.branchesNumber})]})]}):i(q,{sx:{mt:3},severity:"warning",variant:"filled",children:[e(n,{variant:"body2",children:"No se ha registrado la información para este comercio!"}),i(n,{variant:"caption",children:["Etapa de registro: ",e("b",{children:t==null?void 0:t.step})]})]})})]})}function pr({services:r,expanded:a,handleChange:s,status:t}){var C,T;const l=a==="services-info",p=!!(r!=null&&r.available),o=x.useMemo(()=>!!(r!=null&&r.viaboCard),[r]),y=x.useMemo(()=>!!(r!=null&&r.apiRequired),[r]),v=x.useMemo(()=>{var u;return!!((u=r==null?void 0:r.viaboCard)!=null&&u.customCardsRequired)},[r]);return i(z,{sx:{p:l?5:3,border:l?3:0,borderColor:l?u=>u.palette.mode==="dark"?u.palette.secondary.main:u.palette.primary.main:"inherit"},children:[i(h,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",children:[i(h,{direction:"row",spacing:1.5,alignItems:"center",children:[p?e(M,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}):e(Z,{}),e(n,{variant:"subtitle1",color:"textPrimary",children:"Servicios"})]}),e(g,{sx:{flex:"1 1 auto"}}),e(V,{expand:l,onClick:()=>{s("services-info")},"aria-expanded":l,"aria-label":"show more",children:e(_,{})})]}),e(j,{in:l,timeout:"auto",children:p?e(A,{children:i(c,{container:!0,spacing:5,sx:{mt:0},children:[e(c,{item:!0,xs:12,children:i(h,{spacing:2,direction:"row",children:[e(ie,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:Ve,sx:{maxWidth:150}}),o&&e(ie,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:Ge,sx:{maxWidth:150}})]})}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"No. Terminales TPV's"}),e(n,{variant:"body2",children:r==null?void 0:r.tpvsNumber})]}),o&&i(A,{children:[i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"No. de Tarjetas"}),e(n,{variant:"body2",children:(C=r==null?void 0:r.viaboCard)==null?void 0:C.cardNumbers})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Uso de las tarjetas viabo"}),e(n,{variant:"body2",children:(T=r==null?void 0:r.viaboCard)==null?void 0:T.cardUse})]})]}),i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"API para ligas de cobro"}),y?e(M,{}):e(le,{})]}),o&&i(c,{item:!0,xs:12,sm:6,children:[e(n,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tarjetas fisicas personalizadas"}),v?e(M,{}):e(le,{})]})]})}):i(q,{sx:{mt:3},severity:"warning",variant:"filled",children:[e(n,{variant:"body2",children:"No se han seleccionado servicios para este comercio!"}),i(n,{variant:"caption",children:["Etapa de registro: ",e("b",{children:t==null?void 0:t.step})]})]})})]})}function mr({documents:r,expanded:a,handleChange:s,status:t}){fe();const l=a==="documents",p=(r==null?void 0:r.length)>0;return i(z,{sx:{p:l?5:3,border:l?3:0,borderColor:l?o=>o.palette.mode==="dark"?o.palette.secondary.main:o.palette.primary.main:"inherit"},children:[i(h,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",children:[i(h,{direction:"row",spacing:1.5,alignItems:"center",children:[p?e(M,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}):e(Z,{}),e(n,{variant:"subtitle1",color:"textPrimary",children:"Documentos"})]}),e(g,{sx:{flex:"1 1 auto"}}),e(V,{expand:l,onClick:()=>{s("documents")},"aria-expanded":l,"aria-label":"show more",children:e(_,{})})]}),e(j,{in:l,timeout:"auto",children:p?i(A,{children:[e(Le,{title:"",subheader:`${r==null?void 0:r.length} archivos`,sx:{p:0,my:3,"& .MuiCardHeader-action":{alignSelf:"center"}}}),e(we,{disablePadding:!0,sx:{my:3},children:e(ze,{children:r==null?void 0:r.map(o=>e(xr,{file:o},o==null?void 0:o.id))})})]}):i(q,{sx:{mt:3},severity:"warning",variant:"filled",children:[e(n,{variant:"body2",children:"No se han cargado documentos legales del comercio!"}),i(n,{variant:"caption",children:["Etapa de registro: ",e("b",{children:t==null?void 0:t.step})]})]})})]})}function xr({file:r}){return i(Oe,{component:k.div,...D().inRight,sx:{my:2,px:2,py:.75,borderRadius:.75,border:a=>`solid 1px ${a.palette.divider}`},children:[e(Ye,{sx:{width:28,height:28,color:"text.secondary",mr:2}}),e(h,{children:i(n,{variant:"subtitle2",children:[" ",e(Se,{href:r==null?void 0:r.path,target:"_blank",children:r==null?void 0:r.name})]})})]})}function gr(){var p;const{commerce:r}=F(o=>o,K),[a,s]=x.useState(""),t=o=>{s(a===o?"":o)},l=700;return i(A,{children:[e(Te,{sx:{position:"sticky",top:0,zIndex:1},children:i(h,{spacing:3,direction:"row",justifyContent:"space-between",sx:{width:1},alignItems:{sm:"center"},children:[e(h,{direction:"row",spacing:1,children:e(n,{variant:"h5",children:"Detalles"})}),r&&((p=r==null?void 0:r.status)==null?void 0:p.id)==="2"&&e(Ie,{variant:"contained",children:"Afiliación"})]})}),r?e(g,{sx:{maxHeight:l,minHeight:"100vh",overflow:"auto"},children:e(oe,{sx:{},children:i(c,{container:!0,sx:{p:2},spacing:3,children:[e(c,{item:!0,xs:12,xl:6,children:e(k.div,{...D().in,children:e(cr,{account:r==null?void 0:r.account,expanded:a,handleChange:t,status:r==null?void 0:r.status})})}),e(c,{item:!0,xs:12,xl:6,children:e(k.div,{...D().in,children:e(hr,{info:r==null?void 0:r.information,expanded:a,handleChange:t,status:r==null?void 0:r.status})})}),e(c,{item:!0,xs:12,xl:6,children:e(k.div,{...D().in,children:e(pr,{services:r==null?void 0:r.services,expanded:a,handleChange:t,status:r==null?void 0:r.status})})}),e(c,{item:!0,xs:12,xl:6,children:e(k.div,{...D().in,children:e(mr,{documents:r==null?void 0:r.documents,expanded:a,handleChange:t,status:r==null?void 0:r.status})})})]})})}):i(h,{px:2,spacing:3,sx:{height:"100%",width:"100%"},children:[e(q,{variant:"filled",severity:"info",children:"Debe seleccionar un comercio para ver sus detalles!"}),e(h,{alignItems:"center",children:e(Ue,{sx:{width:"30%"}})})]})]})}const ur=()=>{const{isCollapse:r}=Ee();return i(c,{container:!0,sx:{height:"100vH"},children:[e(c,{item:!0,xs:12,md:6,sm:6,lg:r?4:5,xl:3,sx:a=>({borderRight:{sm:`1px solid ${a.palette.divider}`},borderRightStyle:{xs:"none",sm:"dashed!important"}}),children:e(g,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:e(dr,{})})}),e(c,{item:!0,xs:!1,sm:6,md:6,lg:r?8:7,xl:9,sx:{px:2,flexGrow:1,display:{xs:"none",sm:"block"}},children:e(g,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:e(gr,{})})})]})};function kr(){return e(Ne,{title:"Administracion Comercios",children:i(Be,{children:[e(He,{name:"Comercios",links:[{name:"Inicio",href:Me.root},{name:"Administracion",href:Pe.commerces},{name:Re.commerces.name}]}),e(ur,{})]})})}export{kr as default};
