import{t as Y,j as e,a as de,c as ve,r as b,B as S,S as x,aW as fe,aX as re,T as s,u as Se,b as Ie,g as pe,E as Te,n as Me,Q as ae,o as we,a6 as Pe,U as Ne,ag as te,Z as A,I as Ee,e as W,aY as Ae,P as l,aZ as Re,ay as Le,a8 as xe,D as ne,af as De,W as P,N as Oe,a4 as ke,L as Fe,d as ze,a5 as Be,f as qe,al as _e,a_ as Ge,a$ as We}from"./build-de786878.js";import{s as Z}from"./build-9563ddbe.js";import{u as Ue}from"./build-32dc6f9b.js";import{L as ce,F as Ve}from"./build-76de0576.js";import{C as he}from"./build-3ef2e595.js";import{P as He}from"./build-ad762a34.js";import{f as se,E as ie,C as Qe,H as $e}from"./build-48cd85df.js";import{C as Xe}from"./build-b7ee5aff.js";import{G as c}from"./build-dd25d9e2.js";import{V as Ye}from"./build-83d17a75.js";import{V as Ze}from"./build-899176f2.js";import{A as Ke,L as Je,v as N,I as er}from"./build-035a2ea4.js";import{a as rr,C as ar}from"./build-7390e30e.js";import{d as tr,c as nr}from"./build-aaf0c156.js";import{a as sr}from"./build-61d5e77c.js";import{R as L}from"./build-164dffeb.js";import{M as ir}from"./build-9bb40bad.js";import{I as E}from"./build-0d6223af.js";import{S as lr}from"./build-296ce60b.js";import{u as or,s as $,P as dr}from"./build-effa7dc5.js";import{T as pr}from"./build-8e48d587.js";import{S as xr}from"./build-fa012817.js";import"./build-43eff46a.js";import"./build-bee6630b.js";const cr=Y(e.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}),"CheckTwoTone"),hr=Y([e.jsx("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",opacity:".3"},"0"),e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"1"),e.jsx("circle",{cx:"7",cy:"12",r:"1.5"},"2"),e.jsx("circle",{cx:"12",cy:"12",r:"1.5"},"3"),e.jsx("circle",{cx:"17",cy:"12",r:"1.5"},"4")],"PendingTwoTone"),ur=Y([e.jsx("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z",opacity:".3"},"0"),e.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"QueryBuilderTwoTone"),mr=(r,t)=>({commerceId:t,speiInCarnet:r==null?void 0:r.speiInCarnet,speiOutCarnet:r==null?void 0:r.speiOutCarnet,speiInMasterCard:r==null?void 0:r.speiInMasterCard,speiOutMasterCard:r==null?void 0:r.speiOutMasterCard,pay:r==null?void 0:r.viaboPay}),jr=r=>{const t=r==null?void 0:r.find(n=>(n==null?void 0:n.type)==="2");return t?{id:t==null?void 0:t.id,type:t==null?void 0:t.type,name:t==null?void 0:t.name,cardNumbers:t==null?void 0:t.cardNumbers,cardUse:t==null?void 0:t.cardUse,customCardsRequired:(t==null?void 0:t.personalized)==="1"}:null},gr=r=>(r==null?void 0:r.map(t=>{const{Id:n,Name:a,storePath:d}=t;return{id:n,name:a,path:d}}))??[],br=r=>({available:!!r,speiInCarnet:parseFloat((r==null?void 0:r.SpeiInCarnet)??"0.0"),speiOutCarnet:parseFloat((r==null?void 0:r.SpeiOutCarnet)??"0.0"),speiInMasterCard:parseFloat((r==null?void 0:r.SpeiInMasterCard)??"0.0"),speiOutMasterCard:parseFloat((r==null?void 0:r.SpeiOutMasterCard)??"0.0"),viaboPay:parseFloat((r==null?void 0:r.Pay)??"0.0")}),yr=r=>r.map((t,n)=>{var _;const{id:a,legalRepresentative:d,legalRepresentativeName:p,legalRepresentativePhone:o,legalRepresentativeLastSession:j,legalRepresentativeEmail:g,taxName:h,fiscalPersonType:u,tradeName:y,rfc:I,employees:C,branchOffices:F,pointSaleTerminal:z,paymentApi:B,register:T,statusId:U,registerStep:q,statusName:M,services:V,documents:H,commissions:v}=t;return{id:a,name:y,account:{id:d,name:p,email:g,phone:o,status:"Activo",lastLogged:j===""?"No ha iniciado sesión":se(j),register:se(T)??""},information:{available:h!=="",fiscalName:h,commercialName:y,fiscalTypePerson:u==="1"?"Moral":"Física",rfc:I,employeesNumber:C,branchesNumber:F},services:{available:z!=="0",viaboCard:jr(V),tpvsNumber:z,apiRequired:B==="1"},status:{id:U,name:M,step:((_=sr.find(Q=>Q.step.toString()===q))==null?void 0:_.name)??""},documents:gr(H),commissions:br(v)}}),ue={COMMERCE_LIST:"commerceList"},Cr=async()=>{const{data:r}=await de.get("/api/commerces");return yr(r)},vr=async r=>{const{data:t}=await de.post("/api/commerce/commissions/register",r);return t},fr=[{id:1,name:"Registro",color:"info"},{id:2,name:"Validacion",color:"warning"},{id:3,name:"Afiliacion",color:"primary"},{id:4,name:"Cancelado",color:"error"}],me=r=>{var t;return((t=fr.find(n=>n.id.toString()===r.toString()))==null?void 0:t.color)||"info"},Sr={commerce:null},Ir=(r,t)=>({...Sr,setCommerce:n=>{r(a=>({commerce:n}))}}),G=ve(Ir);function Tr({commerce:r}){const{commerce:t}=G(o=>o,Z),{account:n,information:a,status:d}=r,p=(t==null?void 0:t.id)===r.id;return e.jsxs(he,{sx:o=>({backgroundColor:p?o.palette.secondary.lighter:o.palette.background.paper,color:p?o.palette.primary[o.palette.mode==="light"?"dark":"light"]:o.palette.text.primary,"&:hover":{border:2,borderColor:j=>j.palette.primary.main}}),children:[e.jsx(S,{sx:{p:1,position:"relative"},children:e.jsx(ce,{variant:"filled",color:me(d==null?void 0:d.id),sx:{right:16,zIndex:9,top:16,bottom:0,position:"absolute",textTransform:"capitalize"},children:d==null?void 0:d.name})}),e.jsxs(x,{spacing:2.5,children:[a!=null&&a.commercialName?e.jsxs(x,{direction:"row",alignItems:"center",spacing:2,sx:{p:3,pb:2.5},children:[e.jsx(fe,{src:(a==null?void 0:a.avatar)!==""?a==null?void 0:a.avatar:"",alt:a==null?void 0:a.commercialName,color:re(a==null?void 0:a.commercialName).color,children:re(a==null?void 0:a.commercialName).name}),e.jsxs("div",{children:[e.jsx(s,{variant:"subtitle2",children:a==null?void 0:a.commercialName}),e.jsx(s,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:a==null?void 0:a.fiscalName})]})]}):e.jsxs(x,{direction:"row",alignItems:"center",spacing:2,sx:{px:3,pb:0,pt:4},children:[e.jsx(hr,{sx:{width:30,height:30,color:"info.main"}}),e.jsxs("div",{children:[e.jsx(s,{variant:"subtitle2",children:"No Disponible"}),e.jsxs(s,{variant:"body2",sx:{color:"text.info",mt:.5,display:"block"},children:["Se encuentra en el paso: ",d==null?void 0:d.step]})]})]}),e.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:3,sx:o=>({backgroundColor:p?o.palette.secondary.main:o.palette.background.neutral,color:p?o.palette.primary[o.palette.mode==="light"?"dark":"light"]:o.palette.text.primary,p:3,pb:2.5}),children:[e.jsxs(x,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(He,{sx:{width:16,height:16}}),e.jsx(s,{variant:"caption",children:n==null?void 0:n.name})]}),e.jsxs(x,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(ur,{sx:{width:16,height:16}}),e.jsxs(s,{variant:"caption",children:[n!=null&&n.register?n==null?void 0:n.register:"-"," "]})]})]})]})]})}const Mr=b.memo(Tr),wr=(r={})=>{const{enqueueSnackbar:t}=Se(),[n,a]=b.useState(null);return{...Ie([ue.COMMERCE_LIST],Cr,{staleTime:60*5e3,onError:p=>{const o=pe(p,"No se puede obtener la lista de comercios");a(o),t(o,{variant:"error",autoHideDuration:5e3})},...r}),error:n||null}},Pr=(r={})=>{const t=Te(),n=Me(vr,r);return{...n,mutate:async(d,p)=>{const{onSuccess:o,onError:j,mutationOptions:g}=p;try{await ae.promise(n.mutateAsync(d,g),{pending:"Actualizando Comisiones ...",success:{render({data:h}){return t.invalidateQueries([ue.COMMERCE_LIST]),o(h),"Se actualizaron las comisiones con éxito"}}})}catch(h){const u=pe(h,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");j(u),ae.error(u,{type:we(h)})}}}};function Nr(){var J,ee;const{data:r,isLoading:t,isError:n,error:a,refetch:d,isSuccess:p}=wr(),o=G(i=>i.setCommerce),{commerce:j}=G(i=>i,Z),g=b.useMemo(()=>{const i=(r==null?void 0:r.map(f=>f==null?void 0:f.status))||[],m={},w=[];return i.forEach(f=>{f&&!m[f.id]&&(m[f.id]=!0,w.push(f))}),w},[r]),[h,u]=b.useState(1),[y,I]=b.useState(""),[C,F]=b.useState(""),[z,B]=b.useState([]),[T,U]=b.useState([]),q=4,M=y?z:C?T:r,V=(M==null?void 0:M.length)||0,H=Math.ceil(V/q),v=or(M||[],q),_=(i,m)=>{u(m),v.jump(m)};if(b.useEffect(()=>{if(y.trim()!==""&&T&&C){const i=$(T,y);B(i)}else if(y&&r&&!C){const i=$(r,y);B(i)}},[y,r,C,T]),b.useEffect(()=>{if(r&&j){const i=r==null?void 0:r.find(m=>(m==null?void 0:m.id)===(j==null?void 0:j.id));i&&o(i)}},[r,j]),n)return e.jsx(x,{sx:{pr:{sm:2}},children:e.jsx(Pe,{errorMessage:a,handleButton:d})});const Q=i=>{let m="";i===C?F(""):(F(i),m=(i==null?void 0:i.name)||"");const w=$(r,m);U(w)};return e.jsxs(e.Fragment,{children:[t&&e.jsx(Ne,{}),(r==null?void 0:r.length)>0&&e.jsxs(e.Fragment,{children:[e.jsx(S,{display:"flex",children:g==null?void 0:g.map(i=>{const m=(C==null?void 0:C.id)===(i==null?void 0:i.id);return e.jsx(te.div,{onClick:()=>Q(i),whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsx(ce,{variant:m?"ghost":"filled",color:me(i==null?void 0:i.id),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:m?3:0,borderColor:m?w=>w.palette.primary.main:"inherit"},children:i==null?void 0:i.name})},i==null?void 0:i.id)})}),e.jsxs(S,{display:"flex",mb:3,flexDirection:"column",alignItems:{xs:"center"},children:[e.jsx(pr,{fullWidth:!0,size:"small",placeholder:"Buscar ...",value:y,onChange:i=>I(i.target.value),InputProps:{startAdornment:e.jsx(E,{position:"start",children:e.jsx(S,{sx:{color:"text.disabled"},children:e.jsx(xr,{sx:{marginTop:1}})})})}}),e.jsx(S,{sx:{flex:"1 1 auto",mb:{xs:3}}}),e.jsx(dr,{count:H,page:h,onChange:_})]}),e.jsxs(x,{direction:"column",spacing:2,children:[((J=v==null?void 0:v.currentData())==null?void 0:J.length)===0&&e.jsx(ie,{pt:2.5,message:"Sin resultados "}),(ee=v==null?void 0:v.currentData())==null?void 0:ee.map((i,m)=>e.jsx(te.div,{onClick:()=>{o(i)},whileHover:{scale:1.03},whileTap:{scale:.8},style:{cursor:"pointer"},children:e.jsx(Mr,{commerce:i,selected:m===0})},m))]})]}),r&&(r==null?void 0:r.length)===0&&e.jsx(ie,{pt:2.5,message:"No hay comercios Registrados"})]})}const Er=A(r=>{const{expand:t,...n}=r;return e.jsx(Ee,{...n})})(({theme:r,expand:t})=>({transform:t?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})})),K=A("div")(({theme:r})=>({width:30,height:30,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:r.palette.primary.main,backgroundColor:W(r.palette.primary.main,.08)})),X=({widthWrapper:r=30,heightWrapper:t=30,opacity:n=.08,...a})=>e.jsx(K,{sx:{color:"success.main",bgcolor:d=>W(d.palette.success.main,n),width:r,height:t},children:e.jsx(cr,{sx:{width:15,height:15},...a})}),le=()=>e.jsx(K,{sx:{color:"error.main",bgcolor:r=>W(r.palette.error.main,.08)},children:e.jsx(Xe,{sx:{width:15,height:15}})}),Ar=()=>e.jsx(K,{sx:{color:"warning.main",width:25,height:25,bgcolor:r=>W(r.palette.warning.main,.2)},children:e.jsx(Ae,{sx:{width:13,height:13}})});R.propTypes={alertText:l.string,available:l.bool,children:l.node,expanded:l.string,expandedText:l.string,handleChange:l.func,headerText:l.string,step:l.string,showIfNotAvailable:l.bool};function R({children:r,expandedText:t,expanded:n,handleChange:a,headerText:d,alertText:p,available:o=!0,step:j,showIfNotAvailable:g=!1}){const h=n===t;return e.jsxs(he,{sx:u=>({p:3,border:h?3:0,borderColor:h?u.palette.mode==="dark"?u.palette.secondary.main:u.palette.primary.main:"inherit"}),children:[e.jsxs(x,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsxs(x,{direction:"row",spacing:1.5,alignItems:"center",children:[o?e.jsx(X,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}):e.jsx(Ar,{}),e.jsx(s,{variant:"subtitle1",color:"textPrimary",children:d})]}),e.jsx(S,{sx:{flex:"1 1 auto"}}),e.jsx(Er,{expand:h,onClick:()=>{a(t)},"aria-expanded":h,"aria-label":"show more",children:e.jsx(Re,{})})]}),e.jsx(Le,{in:h,timeout:"auto",children:!o&&!g?e.jsxs(xe,{sx:{mt:3},severity:"warning",variant:"filled",children:[e.jsx(s,{variant:"body2",children:p}),e.jsxs(s,{variant:"caption",children:["Etapa de registro: ",e.jsx("b",{children:j??"Registro"})]})]}):r})]})}je.propTypes={account:l.object,expanded:l.string.isRequired,handleChange:l.func.isRequired};function je({account:r,expanded:t,handleChange:n}){return e.jsx(R,{headerText:"Cuenta",handleChange:n,expanded:t,expandedText:"account-info",children:e.jsxs(c,{container:!0,spacing:5,sx:{mt:0},children:[e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre"}),e.jsx(s,{variant:"body2",children:r==null?void 0:r.name})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electronico"}),e.jsx(s,{variant:"body2",children:(r==null?void 0:r.email)??"-"})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(s,{variant:"body2",children:(r==null?void 0:r.phone)??"-"})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha Registro"}),e.jsx(s,{variant:"body2",children:(r==null?void 0:r.register)??"-"})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Estado"}),e.jsx(s,{variant:"body2",children:(r==null?void 0:r.status)??"-"})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Último Inicio de Sesión"}),e.jsx(s,{variant:"body2",children:(r==null?void 0:r.lastLogged)??"-"})]})]})})}ge.propTypes={expanded:l.any,handleChange:l.any,info:l.shape({available:l.any,branchesNumber:l.any,commercialName:l.any,employeesNumber:l.any,fiscalName:l.any,fiscalTypePerson:l.any,rfc:l.any}),status:l.shape({step:l.any})};function ge({info:r,expanded:t,handleChange:n,status:a}){const d=!!(r!=null&&r.available);return e.jsx(R,{headerText:"Comercio",handleChange:n,step:a==null?void 0:a.step,available:d,expanded:t,expandedText:"general-info",alertText:"No se ha registrado la información para este comercio!",children:e.jsxs(c,{container:!0,spacing:5,sx:{mt:0},children:[e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Comercial"}),e.jsx(s,{variant:"body2",children:r==null?void 0:r.commercialName})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Fiscal"}),e.jsx(s,{variant:"body2",children:r==null?void 0:r.fiscalName})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"RFC"}),e.jsx(s,{variant:"body2",children:r==null?void 0:r.rfc})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Persona"}),e.jsx(s,{variant:"body2",children:r==null?void 0:r.fiscalTypePerson})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Numero de Empleados"}),e.jsx(s,{variant:"body2",children:r==null?void 0:r.employeesNumber})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Numero de Sucursales"}),e.jsx(s,{variant:"body2",children:r==null?void 0:r.branchesNumber})]})]})})}function Rr({services:r,expanded:t,handleChange:n,status:a}){var g,h;const d=!!(r!=null&&r.available),p=b.useMemo(()=>!!(r!=null&&r.viaboCard),[r]),o=b.useMemo(()=>!!(r!=null&&r.apiRequired),[r]),j=b.useMemo(()=>{var u;return!!((u=r==null?void 0:r.viaboCard)!=null&&u.customCardsRequired)},[r]);return e.jsx(R,{step:a==null?void 0:a.step,headerText:"Servicios",available:d,handleChange:n,expandedText:"services-info",expanded:t,alertText:"No se han seleccionado servicios para este comercio!",children:e.jsxs(c,{container:!0,spacing:5,sx:{mt:0},children:[e.jsx(c,{item:!0,xs:12,children:e.jsxs(x,{spacing:2,direction:"row",children:[e.jsx(ne,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:Ze,sx:{maxWidth:150}}),p&&e.jsx(ne,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:Ye,sx:{maxWidth:150}})]})}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"No. Terminales TPV's"}),e.jsx(s,{variant:"body2",children:r==null?void 0:r.tpvsNumber})]}),p&&e.jsxs(e.Fragment,{children:[e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"No. de Tarjetas"}),e.jsx(s,{variant:"body2",children:(g=r==null?void 0:r.viaboCard)==null?void 0:g.cardNumbers})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Uso de las tarjetas viabo"}),e.jsx(s,{variant:"body2",children:(h=r==null?void 0:r.viaboCard)==null?void 0:h.cardUse})]})]}),e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"API para ligas de cobro"}),o?e.jsx(X,{}):e.jsx(le,{})]}),p&&e.jsxs(c,{item:!0,xs:12,sm:6,children:[e.jsx(s,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tarjetas fisicas personalizadas"}),j?e.jsx(X,{}):e.jsx(le,{})]})]})})}be.propTypes={documents:l.array,expanded:l.string,handleChange:l.func,status:l.shape({step:l.string})};function be({documents:r,expanded:t,handleChange:n,status:a}){const d=(r==null?void 0:r.length)>0;return e.jsx(R,{step:a==null?void 0:a.step,headerText:"Documentos",available:d,handleChange:n,expandedText:"documents",expanded:t,alertText:"No se han cargado documentos legales del comercio!",children:e.jsxs(e.Fragment,{children:[e.jsx(rr,{title:"",subheader:`${r==null?void 0:r.length} archivos`,sx:{p:0,my:3,"& .MuiCardHeader-action":{alignSelf:"center"}}}),e.jsx(De,{disablePadding:!0,sx:{my:3},children:e.jsx(Ke,{children:r==null?void 0:r.map(p=>e.jsx(ye,{file:p},p==null?void 0:p.id))})})]})})}ye.propTypes={file:l.shape({name:l.string,path:l.string})};function ye({file:r}){return e.jsxs(Je,{component:P.div,...N().inRight,sx:{my:2,px:2,py:.75,borderRadius:.75,border:t=>`solid 1px ${t.palette.divider}`},children:[e.jsx(er,{sx:{width:28,height:28,color:"text.secondary",mr:2}}),e.jsx(x,{children:e.jsxs(s,{variant:"subtitle2",children:[" ",e.jsx(Oe,{href:r==null?void 0:r.path,target:"_blank",children:r==null?void 0:r.name})]})})]})}Ce.propTypes={handleChange:l.func.isRequired,expanded:l.string.isRequired,commerce:l.object.isRequired};const D=0,O=100,k=.1;function Ce({handleChange:r,expanded:t,commerce:n}){const{commissions:a}=n,{mutate:d,isLoading:p}=Pr(),o=tr().min(0,"El valor minimo es 0").max(100,"El valor maximo es 100").required("El valor es requerido"),j=nr({speiInCarnet:o,speiOutCarnet:o,speiInMasterCard:o,speiOutMasterCard:o,viaboPay:o}),g=Ue({initialValues:{speiInCarnet:(a==null?void 0:a.speiInCarnet)||0,speiOutCarnet:(a==null?void 0:a.speiOutCarnet)||0,speiInMasterCard:(a==null?void 0:a.speiInMasterCard)||0,speiOutMasterCard:(a==null?void 0:a.speiOutMasterCard)||0,viaboPay:(a==null?void 0:a.viaboPay)||0},validationSchema:j,enableReinitialize:!0,onSubmit:(y,{setSubmitting:I})=>{const C=mr(y,n==null?void 0:n.id);d(C,{onSuccess:()=>{I(!1)},onError:()=>{I(!1)}})}}),{isSubmitting:h}=g,u=h||p;return e.jsx(R,{headerText:"Comisiones",handleChange:r,expanded:t,expandedText:"commissions",available:!!(a!=null&&a.available),showIfNotAvailable:!0,children:e.jsx(Ve,{formik:g,children:e.jsxs(x,{mt:2,gap:3,flexDirection:"column",children:[e.jsxs(x,{gap:2,children:[e.jsx(s,{variant:"subtitle2",children:"SPEI"}),e.jsxs(x,{gap:3,flexDirection:"row",flexWrap:"wrap",alignItems:"center",width:1,children:[e.jsx(ar,{}),e.jsxs(x,{spacing:1,flexGrow:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Entrantes:"}),e.jsx(L,{name:"speiInCarnet",placeholder:"0.0",autoFocus:!0,focused:!0,size:"small",type:"number",required:!0,disabled:u,InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(E,{position:"start",children:"%"})},inputProps:{inputMode:"numeric",min:D,max:O,step:k}})]}),e.jsxs(x,{spacing:1,flexGrow:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Salientes:"}),e.jsx(L,{name:"speiOutCarnet",placeholder:"0",type:"number",required:!0,size:"small",disabled:u,InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(E,{position:"start",children:"%"})},inputProps:{inputMode:"numeric",min:D,max:O,step:k}})]})]}),e.jsxs(x,{gap:3,flexDirection:"row",flexWrap:"wrap",alignItems:"center",width:1,children:[e.jsx(ir,{}),e.jsxs(x,{spacing:1,flexGrow:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Entrantes:"}),e.jsx(L,{name:"speiInMasterCard",placeholder:"0",required:!0,size:"small",type:"number",disabled:u,InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(E,{position:"start",children:"%"})},inputProps:{inputMode:"numeric",min:D,max:O,step:k}})]}),e.jsxs(x,{spacing:1,flexGrow:1,children:[e.jsx(s,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Salientes:"}),e.jsx(L,{name:"speiOutMasterCard",placeholder:"0",required:!0,type:"number",size:"small",disabled:u,InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(E,{position:"start",children:"%"})},inputProps:{inputMode:"numeric",min:D,max:O,step:k}})]})]})]}),e.jsx(ke,{flexItem:!0,sx:{borderStyle:"dashed"}}),e.jsxs(x,{gap:2,flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{variant:"subtitle2",children:"Viabo Pay"}),e.jsx(L,{name:"viaboPay",placeholder:"0",size:"small",type:"number",required:!0,disabled:u,InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(E,{position:"start",children:"%"})},inputProps:{inputMode:"numeric",min:D,max:O,step:k}})]}),e.jsx(S,{display:"flex",justifyContent:"center",children:e.jsx(Fe,{loading:u,variant:"contained",type:"submit",children:"Guardar"})})]})})})}function Lr(){var d;const{commerce:r}=G(p=>p,Z),[t,n]=b.useState(""),a=p=>{n(t===p?"":p)};return e.jsxs(e.Fragment,{children:[e.jsxs(x,{spacing:3,direction:"row",justifyContent:"space-between",sx:{width:1,mb:2},alignItems:{sm:"center"},children:[e.jsx(x,{direction:"row",spacing:1,children:e.jsx(s,{variant:"h5",children:"Detalles"})}),r&&((d=r==null?void 0:r.status)==null?void 0:d.id)==="2"&&e.jsx(ze,{variant:"contained",children:"Afiliación"})]}),r?e.jsx(x,{children:e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{item:!0,xs:12,xl:6,children:e.jsx(P.div,{...N().in,children:e.jsx(je,{account:r==null?void 0:r.account,expanded:t,handleChange:a,status:r==null?void 0:r.status})})}),e.jsx(c,{item:!0,xs:12,xl:6,children:e.jsx(P.div,{...N().in,children:e.jsx(ge,{info:r==null?void 0:r.information,expanded:t,handleChange:a,status:r==null?void 0:r.status})})}),e.jsx(c,{item:!0,xs:12,xl:6,children:e.jsx(P.div,{...N().in,children:e.jsx(Rr,{services:r==null?void 0:r.services,expanded:t,handleChange:a,status:r==null?void 0:r.status})})}),e.jsx(c,{item:!0,xs:12,xl:6,children:e.jsx(P.div,{...N().in,children:e.jsx(be,{documents:r==null?void 0:r.documents,expanded:t,handleChange:a,status:r==null?void 0:r.status})})}),e.jsx(c,{item:!0,xs:12,xl:6,children:e.jsx(P.div,{...N().in,children:e.jsx(Ce,{expanded:t,handleChange:a,commerce:r})})})]})}):e.jsxs(x,{spacing:3,sx:{height:"100%",width:"100%"},children:[e.jsx(xe,{variant:"filled",severity:"info",children:"Debe seleccionar un comercio para ver sus detalles!"}),e.jsx(x,{alignItems:"center",children:e.jsx(lr,{sx:{width:"30%"}})})]})]})}const Dr=A("div")({display:"flex",height:"100vh"}),Or=A(S)({flex:"1",height:"100%",overflow:"auto",scrollSnapType:"x mandatory",display:"flex"}),kr=A("div")({display:"flex",flex:"1"}),oe=A(r=>e.jsx(x,{...r}))(({theme:r})=>({height:"100%",overflow:"auto",scrollSnapAlign:"start",padding:r.spacing(2)})),Fr=()=>(Be(),e.jsx(Dr,{children:e.jsx(Or,{children:e.jsxs(kr,{children:[e.jsx(oe,{sx:{minWidth:{xs:350,md:400}},children:e.jsx(Nr,{})}),e.jsx(oe,{sx:{flexGrow:1,minWidth:{xs:350,md:400}},children:e.jsx(Lr,{})})]})})}));function oa(){return e.jsx(qe,{title:"Administracion Comercios",children:e.jsxs(Qe,{children:[e.jsx($e,{name:"Comercios",links:[{name:"Inicio",href:_e.root},{name:"Administracion",href:Ge.commerces},{name:We.commerces.name}]}),e.jsx(Fr,{})]})})}export{oa as default};
