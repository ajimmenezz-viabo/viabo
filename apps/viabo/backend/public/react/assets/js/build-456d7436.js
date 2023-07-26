import{t as D,j as e,c as ne,a as le,r as j,B as C,S as h,Q as oe,R as $,T as t,u as de,b as ce,g as xe,U as he,V as pe,X as Y,W as N,I as me,e as k,Y as je,Z as ge,$ as ue,a0 as re,D as K,a1 as be,F as E,a2 as ye,d as ve,a3 as Ce,f as Se,a4 as Te,a5 as fe,a6 as we}from"./build-9dc23fd9.js";import{f as X,E as Z,C as Ne,a as Ee,H as Ie}from"./build-64074d19.js";import"./build-d9d6fc9b.js";import{L as ae}from"./build-c86a048d.js";import{s as O}from"./build-9563ddbe.js";import{C as se}from"./build-dea445ee.js";import{u as Me,s as q,P as Re}from"./build-ba7988c0.js";import{a as Pe}from"./build-61d5e77c.js";import{T as Ae}from"./build-25455e46.js";import{I as Le}from"./build-c3cf2243.js";import{S as De}from"./build-e232e522.js";import{C as ke}from"./build-c8b3c979.js";import{G as d}from"./build-041f94ad.js";import{V as Be,a as ze}from"./build-84878585.js";import{A as Fe,L as _e,v as I,I as He}from"./build-f50814e2.js";import{S as We}from"./build-c4cb7ab2.js";import"./build-b8eff164.js";import"./build-bee6630b.js";const qe=D(e.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}),"CheckTwoTone"),Ge=D([e.jsx("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",opacity:".3"},"0"),e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"1"),e.jsx("circle",{cx:"7",cy:"12",r:"1.5"},"2"),e.jsx("circle",{cx:"12",cy:"12",r:"1.5"},"3"),e.jsx("circle",{cx:"17",cy:"12",r:"1.5"},"4")],"PendingTwoTone"),Oe=D(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),Ue=D([e.jsx("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z",opacity:".3"},"0"),e.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"QueryBuilderTwoTone"),Ve={commerce:null},Qe=(r,a)=>({...Ve,setCommerce:i=>{r(s=>({commerce:i}))}}),L=ne(Qe),$e={COMMERCE_LIST:"commerceList"},Ye=r=>{const a=r==null?void 0:r.find(i=>(i==null?void 0:i.type)==="2");return a?{id:a==null?void 0:a.id,type:a==null?void 0:a.type,name:a==null?void 0:a.name,cardNumbers:a==null?void 0:a.cardNumbers,cardUse:a==null?void 0:a.cardUse,customCardsRequired:(a==null?void 0:a.personalized)==="1"}:null},Ke=r=>(r==null?void 0:r.map(a=>{const{Id:i,Name:s,storePath:l}=a;return{id:i,name:s,path:l}}))??[],Xe=r=>r.map((a,i)=>{var y;const{id:s,legalRepresentative:l,legalRepresentativeName:c,legalRepresentativePhone:o,legalRepresentativeLastSession:m,legalRepresentativeEmail:p,taxName:g,fiscalPersonType:S,tradeName:u,rfc:z,employees:b,branchOffices:M,pointSaleTerminal:R,paymentApi:P,register:T,statusId:F,registerStep:A,statusName:f,services:_,documents:H}=a;return{id:s,name:u,account:{id:l,name:c,email:p,phone:o,status:"Activo",lastLogged:m===""?"No ha iniciado sesión":X(m),register:X(T)??""},information:{available:g!=="",fiscalName:g,commercialName:u,fiscalTypePerson:S==="1"?"Moral":"Física",rfc:z,employeesNumber:b,branchesNumber:M},services:{available:R!=="0",viaboCard:Ye(_),tpvsNumber:R,apiRequired:P==="1"},status:{id:F,name:f,step:((y=Pe.find(W=>W.step.toString()===A))==null?void 0:y.name)??""},documents:Ke(H)}}),Ze=async()=>{const{data:r}=await le.get("/api/new-commerces");return Xe(r)},Je=[{id:1,name:"Registro",color:"info"},{id:2,name:"Validacion",color:"warning"},{id:3,name:"Afiliacion",color:"primary"},{id:4,name:"Cancelado",color:"error"}],te=r=>{var a;return((a=Je.find(i=>i.id.toString()===r.toString()))==null?void 0:a.color)||"info"};function er({commerce:r}){const{commerce:a}=L(o=>o,O),{account:i,information:s,status:l}=r,c=(a==null?void 0:a.id)===r.id;return e.jsxs(se,{sx:o=>({backgroundColor:c?o.palette.secondary.lighter:o.palette.background.paper,color:c?o.palette.primary[o.palette.mode==="light"?"dark":"light"]:o.palette.text.primary,"&:hover":{border:2,borderColor:m=>m.palette.primary.main}}),children:[e.jsx(C,{sx:{p:1,position:"relative"},children:e.jsx(ae,{variant:"filled",color:te(l==null?void 0:l.id),sx:{right:16,zIndex:9,top:16,bottom:0,position:"absolute",textTransform:"capitalize"},children:l==null?void 0:l.name})}),e.jsxs(h,{spacing:2.5,children:[s!=null&&s.commercialName?e.jsxs(h,{direction:"row",alignItems:"center",spacing:2,sx:{p:3,pb:2.5},children:[e.jsx(oe,{src:(s==null?void 0:s.avatar)!==""?s==null?void 0:s.avatar:"",alt:s==null?void 0:s.commercialName,color:$(s==null?void 0:s.commercialName).color,children:$(s==null?void 0:s.commercialName).name}),e.jsxs("div",{children:[e.jsx(t,{variant:"subtitle2",children:s==null?void 0:s.commercialName}),e.jsx(t,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:s==null?void 0:s.fiscalName})]})]}):e.jsxs(h,{direction:"row",alignItems:"center",spacing:2,sx:{px:3,pb:0,pt:4},children:[e.jsx(Ge,{sx:{width:30,height:30,color:"info.main"}}),e.jsxs("div",{children:[e.jsx(t,{variant:"subtitle2",children:"No Disponible"}),e.jsxs(t,{variant:"body2",sx:{color:"text.info",mt:.5,display:"block"},children:["Se encuentra en el paso: ",l==null?void 0:l.step]})]})]}),e.jsxs(h,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:3,sx:o=>({backgroundColor:c?o.palette.secondary.main:o.palette.background.neutral,color:c?o.palette.primary[o.palette.mode==="light"?"dark":"light"]:o.palette.text.primary,p:3,pb:2.5}),children:[e.jsxs(h,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Oe,{sx:{width:16,height:16}}),e.jsx(t,{variant:"caption",children:i==null?void 0:i.name})]}),e.jsxs(h,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Ue,{sx:{width:16,height:16}}),e.jsxs(t,{variant:"caption",children:[i!=null&&i.register?i==null?void 0:i.register:"-"," "]})]})]})]})]})}const rr=j.memo(er),ar=(r={})=>{const{enqueueSnackbar:a}=de(),[i,s]=j.useState(null);return{...ce([$e.COMMERCE_LIST],Ze,{staleTime:60*5e3,onError:c=>{const o=xe(c,"No se puede obtener la lista de comercios");s(o),a(o,{variant:"error",autoHideDuration:5e3})},...r}),error:i||null}};function sr(){var V,Q;const{data:r,isLoading:a,isError:i,error:s,refetch:l,isSuccess:c}=ar(),o=L(n=>n.setCommerce),{commerce:m}=L(n=>n,O),p=j.useMemo(()=>{const n=(r==null?void 0:r.map(v=>v==null?void 0:v.status))||[],x={},w=[];return n.forEach(v=>{v&&!x[v.id]&&(x[v.id]=!0,w.push(v))}),w},[r]),[g,S]=j.useState(1),[u,z]=j.useState(""),[b,M]=j.useState(""),[R,P]=j.useState([]),[T,F]=j.useState([]),A=4,f=u?R:b?T:r,_=(f==null?void 0:f.length)||0,H=Math.ceil(_/A),y=Me(f||[],A),W=(n,x)=>{S(x),y.jump(x)};if(j.useEffect(()=>{if(u.trim()!==""&&T&&b){const n=q(T,u);P(n)}else if(u&&r&&!b){const n=q(r,u);P(n)}},[u,r,b,T]),j.useEffect(()=>{if(r&&m){const n=r==null?void 0:r.find(x=>(x==null?void 0:x.id)===(m==null?void 0:m.id));n&&o(n)}},[r,m]),i)return e.jsx(h,{sx:{pr:{sm:2}},children:e.jsx(he,{errorMessage:s,handleButton:l})});const ie=n=>{let x="";n===b?M(""):(M(n),x=(n==null?void 0:n.name)||"");const w=q(r,x);F(w)};return e.jsxs(e.Fragment,{children:[a&&e.jsx(pe,{}),(r==null?void 0:r.length)>0&&e.jsxs(e.Fragment,{children:[e.jsx(C,{display:"flex",children:p==null?void 0:p.map(n=>{const x=(b==null?void 0:b.id)===(n==null?void 0:n.id);return e.jsx(Y.div,{onClick:()=>ie(n),whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsx(ae,{variant:x?"ghost":"filled",color:te(n==null?void 0:n.id),sx:{textTransform:"uppercase",marginRight:1,marginBottom:2,cursor:"pointer",border:x?3:0,borderColor:x?w=>w.palette.primary.main:"inherit"},children:n==null?void 0:n.name})},n==null?void 0:n.id)})}),e.jsxs(C,{display:"flex",mb:3,flexDirection:"column",alignItems:{xs:"center"},children:[e.jsx(Ae,{fullWidth:!0,size:"small",placeholder:"Buscar ...",value:u,onChange:n=>z(n.target.value),InputProps:{startAdornment:e.jsx(Le,{position:"start",children:e.jsx(C,{sx:{color:"text.disabled"},children:e.jsx(De,{sx:{marginTop:1}})})})}}),e.jsx(C,{sx:{flex:"1 1 auto",mb:{xs:3}}}),e.jsx(Re,{count:H,page:g,onChange:W})]}),e.jsxs(h,{direction:"column",spacing:2,children:[((V=y==null?void 0:y.currentData())==null?void 0:V.length)===0&&e.jsx(Z,{pt:2.5,message:"Sin resultados "}),(Q=y==null?void 0:y.currentData())==null?void 0:Q.map((n,x)=>e.jsx(Y.div,{onClick:()=>{o(n)},whileHover:{scale:1.03},whileTap:{scale:.8},style:{cursor:"pointer"},children:e.jsx(rr,{commerce:n,selected:x===0})},x))]})]}),r&&(r==null?void 0:r.length)===0&&e.jsx(Z,{pt:2.5,message:"No hay comercios Registrados"})]})}const tr=N(r=>{const{expand:a,...i}=r;return e.jsx(me,{...i})})(({theme:r,expand:a})=>({transform:a?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})})),U=N("div")(({theme:r})=>({width:30,height:30,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:r.palette.primary.main,backgroundColor:k(r.palette.primary.main,.08)})),G=({widthWrapper:r=30,heightWrapper:a=30,opacity:i=.08,...s})=>e.jsx(U,{sx:{color:"success.main",bgcolor:l=>k(l.palette.success.main,i),width:r,height:a},children:e.jsx(qe,{sx:{width:15,height:15},...s})}),J=()=>e.jsx(U,{sx:{color:"error.main",bgcolor:r=>k(r.palette.error.main,.08)},children:e.jsx(ke,{sx:{width:15,height:15}})}),ir=()=>e.jsx(U,{sx:{color:"warning.main",width:25,height:25,bgcolor:r=>k(r.palette.warning.main,.2)},children:e.jsx(je,{sx:{width:13,height:13}})});function B({children:r,expandedText:a,expanded:i,handleChange:s,headerText:l,alertText:c,available:o=!0,step:m}){const p=i===a;return e.jsxs(se,{sx:g=>({p:p?5:3,border:p?3:0,borderColor:p?g.palette.mode==="dark"?g.palette.secondary.main:g.palette.primary.main:"inherit"}),children:[e.jsxs(h,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsxs(h,{direction:"row",spacing:1.5,alignItems:"center",children:[o?e.jsx(G,{widthWrapper:25,heightWrapper:25,opacity:.2,sx:{width:15,height:15}}):e.jsx(ir,{}),e.jsx(t,{variant:"subtitle1",color:"textPrimary",children:l})]}),e.jsx(C,{sx:{flex:"1 1 auto"}}),e.jsx(tr,{expand:p,onClick:()=>{s(a)},"aria-expanded":p,"aria-label":"show more",children:e.jsx(ge,{})})]}),e.jsx(ue,{in:p,timeout:"auto",children:o?r:e.jsxs(re,{sx:{mt:3},severity:"warning",variant:"filled",children:[e.jsx(t,{variant:"body2",children:c}),e.jsxs(t,{variant:"caption",children:["Etapa de registro: ",e.jsx("b",{children:m??"Registro"})]})]})})]})}function nr({account:r,expanded:a,handleChange:i}){return e.jsx(B,{headerText:"Cuenta",handleChange:i,expanded:a,expandedText:"account-info",children:e.jsxs(d,{container:!0,spacing:5,sx:{mt:0},children:[e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre"}),e.jsx(t,{variant:"body2",children:r==null?void 0:r.name})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electronico"}),e.jsx(t,{variant:"body2",children:(r==null?void 0:r.email)??"-"})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(t,{variant:"body2",children:(r==null?void 0:r.phone)??"-"})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Fecha Registro"}),e.jsx(t,{variant:"body2",children:(r==null?void 0:r.register)??"-"})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Estado"}),e.jsx(t,{variant:"body2",children:(r==null?void 0:r.status)??"-"})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Último Inicio de Sesión"}),e.jsx(t,{variant:"body2",children:(r==null?void 0:r.lastLogged)??"-"})]})]})})}function lr({info:r,expanded:a,handleChange:i,status:s}){const l=!!(r!=null&&r.available);return e.jsx(B,{headerText:"Comercio",handleChange:i,step:s==null?void 0:s.step,available:l,expanded:a,expandedText:"general-info",alertText:"No se ha registrado la información para este comercio!",children:e.jsxs(d,{container:!0,spacing:5,sx:{mt:0},children:[e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Comercial"}),e.jsx(t,{variant:"body2",children:r==null?void 0:r.commercialName})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre Fiscal"}),e.jsx(t,{variant:"body2",children:r==null?void 0:r.fiscalName})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"RFC"}),e.jsx(t,{variant:"body2",children:r==null?void 0:r.rfc})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Persona"}),e.jsx(t,{variant:"body2",children:r==null?void 0:r.fiscalTypePerson})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Numero de Empleados"}),e.jsx(t,{variant:"body2",children:r==null?void 0:r.employeesNumber})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Numero de Sucursales"}),e.jsx(t,{variant:"body2",children:r==null?void 0:r.branchesNumber})]})]})})}function or({services:r,expanded:a,handleChange:i,status:s}){var p,g;const l=!!(r!=null&&r.available),c=j.useMemo(()=>!!(r!=null&&r.viaboCard),[r]),o=j.useMemo(()=>!!(r!=null&&r.apiRequired),[r]),m=j.useMemo(()=>{var S;return!!((S=r==null?void 0:r.viaboCard)!=null&&S.customCardsRequired)},[r]);return e.jsx(B,{step:s==null?void 0:s.step,headerText:"Servicios",available:l,handleChange:i,expandedText:"services-info",expanded:a,alertText:"No se han seleccionado servicios para este comercio!",children:e.jsxs(d,{container:!0,spacing:5,sx:{mt:0},children:[e.jsx(d,{item:!0,xs:12,children:e.jsxs(h,{spacing:2,direction:"row",children:[e.jsx(K,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:Be,sx:{maxWidth:150}}),c&&e.jsx(K,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:ze,sx:{maxWidth:150}})]})}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"No. Terminales TPV's"}),e.jsx(t,{variant:"body2",children:r==null?void 0:r.tpvsNumber})]}),c&&e.jsxs(e.Fragment,{children:[e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"No. de Tarjetas"}),e.jsx(t,{variant:"body2",children:(p=r==null?void 0:r.viaboCard)==null?void 0:p.cardNumbers})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Uso de las tarjetas viabo"}),e.jsx(t,{variant:"body2",children:(g=r==null?void 0:r.viaboCard)==null?void 0:g.cardUse})]})]}),e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"API para ligas de cobro"}),o?e.jsx(G,{}):e.jsx(J,{})]}),c&&e.jsxs(d,{item:!0,xs:12,sm:6,children:[e.jsx(t,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Tarjetas fisicas personalizadas"}),m?e.jsx(G,{}):e.jsx(J,{})]})]})})}function dr({documents:r,expanded:a,handleChange:i,status:s}){const l=(r==null?void 0:r.length)>0;return e.jsx(B,{step:s==null?void 0:s.step,headerText:"Documentos",available:l,handleChange:i,expandedText:"documents",expanded:a,alertText:"No se han cargado documentos legales del comercio!",children:e.jsxs(e.Fragment,{children:[e.jsx(Ne,{title:"",subheader:`${r==null?void 0:r.length} archivos`,sx:{p:0,my:3,"& .MuiCardHeader-action":{alignSelf:"center"}}}),e.jsx(be,{disablePadding:!0,sx:{my:3},children:e.jsx(Fe,{children:r==null?void 0:r.map(c=>e.jsx(cr,{file:c},c==null?void 0:c.id))})})]})})}function cr({file:r}){return e.jsxs(_e,{component:E.div,...I().inRight,sx:{my:2,px:2,py:.75,borderRadius:.75,border:a=>`solid 1px ${a.palette.divider}`},children:[e.jsx(He,{sx:{width:28,height:28,color:"text.secondary",mr:2}}),e.jsx(h,{children:e.jsxs(t,{variant:"subtitle2",children:[" ",e.jsx(ye,{href:r==null?void 0:r.path,target:"_blank",children:r==null?void 0:r.name})]})})]})}function xr(){var l;const{commerce:r}=L(c=>c,O),[a,i]=j.useState(""),s=c=>{i(a===c?"":c)};return e.jsxs(e.Fragment,{children:[e.jsxs(h,{spacing:3,direction:"row",justifyContent:"space-between",sx:{width:1,mb:2},alignItems:{sm:"center"},children:[e.jsx(h,{direction:"row",spacing:1,children:e.jsx(t,{variant:"h5",children:"Detalles"})}),r&&((l=r==null?void 0:r.status)==null?void 0:l.id)==="2"&&e.jsx(ve,{variant:"contained",children:"Afiliación"})]}),r?e.jsx(h,{children:e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{item:!0,xs:12,xl:6,children:e.jsx(E.div,{...I().in,children:e.jsx(nr,{account:r==null?void 0:r.account,expanded:a,handleChange:s,status:r==null?void 0:r.status})})}),e.jsx(d,{item:!0,xs:12,xl:6,children:e.jsx(E.div,{...I().in,children:e.jsx(lr,{info:r==null?void 0:r.information,expanded:a,handleChange:s,status:r==null?void 0:r.status})})}),e.jsx(d,{item:!0,xs:12,xl:6,children:e.jsx(E.div,{...I().in,children:e.jsx(or,{services:r==null?void 0:r.services,expanded:a,handleChange:s,status:r==null?void 0:r.status})})}),e.jsx(d,{item:!0,xs:12,xl:6,children:e.jsx(E.div,{...I().in,children:e.jsx(dr,{documents:r==null?void 0:r.documents,expanded:a,handleChange:s,status:r==null?void 0:r.status})})})]})}):e.jsxs(h,{spacing:3,sx:{height:"100%",width:"100%"},children:[e.jsx(re,{variant:"filled",severity:"info",children:"Debe seleccionar un comercio para ver sus detalles!"}),e.jsx(h,{alignItems:"center",children:e.jsx(We,{sx:{width:"30%"}})})]})]})}const hr=N("div")({display:"flex",height:"100vh"}),pr=N(C)({flex:"1",height:"100%",overflow:"auto",scrollSnapType:"x mandatory",display:"flex"}),mr=N("div")({display:"flex",flex:"1"}),ee=N(r=>e.jsx(h,{...r}))(({theme:r})=>({height:"100%",overflow:"auto",scrollSnapAlign:"start",padding:r.spacing(2)})),jr=()=>(Ce(),e.jsx(hr,{children:e.jsx(pr,{children:e.jsxs(mr,{children:[e.jsx(ee,{sx:{minWidth:{xs:350,md:400}},children:e.jsx(sr,{})}),e.jsx(ee,{sx:{flexGrow:1,minWidth:{xs:350,md:400}},children:e.jsx(xr,{})})]})})}));function Dr(){return e.jsx(Se,{title:"Administracion Comercios",children:e.jsxs(Ee,{children:[e.jsx(Ie,{name:"Comercios",links:[{name:"Inicio",href:Te.root},{name:"Administracion",href:fe.commerces},{name:we.commerces.name}]}),e.jsx(jr,{})]})})}export{Dr as default};
