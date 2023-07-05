import{r as j,i as O,at as K,am as X,j as e,ar as v,b1 as Y,b2 as J,b3 as R,a as N,b as ee,g as P,a8 as te,m as se,a9 as _,n as ne,a3 as re,S as u,T as h,c as oe,V as ie,X as k,L as ae,B as le,ak as ce,e as de,a5 as me,aS as ue,aT as pe}from"./build-6c5dae0f.js";import{a as xe,H as he}from"./build-5d626980.js";import{C as ge,f as fe,e as Ce,R as je,D as Ee,a as Se,M as be}from"./build-eb767c08.js";import{c as Ae,d as Te}from"./build-94326983.js";import{C as F}from"./build-7281b9ba.js";import{b as ye,c as we,C as ve,A as Ie,F as Re,a as _e}from"./build-2bae9ee5.js";import{u as Le}from"./build-96295231.js";import{F as De}from"./build-09d0df69.js";import{c as Oe,a as I}from"./build-70ada0c8.js";import{s as Ne}from"./build-9563ddbe.js";import{C as Pe}from"./build-41eb739d.js";import{R as L}from"./build-b7c47381.js";import{M as ke}from"./build-7970e33e.js";import{g as Fe,b as Be,C as Me}from"./build-25059781.js";import{C as Ue}from"./build-f1e4bfd2.js";import{I as Ve}from"./build-25c8c0bf.js";import{E as He}from"./build-52553418.js";import{A as qe}from"./build-7490e6ed.js";import{T as We,a as D}from"./build-5cfb35c2.js";import"./build-cca55233.js";import"./build-ecaf0d13.js";import"./build-2d5e173d.js";import"./build-bee6630b.js";import"./build-99f341f1.js";import"./build-769ad25e.js";import"./build-7293aa8f.js";import"./build-02266991.js";const $e=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Ge={entering:{transform:"none"},entered:{transform:"none"}},Qe=j.forwardRef(function(r,n){const o=O(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:s,appear:d=!0,children:l,easing:a,in:c,onEnter:x,onEntered:S,onEntering:C,onExit:g,onExited:A,onExiting:M,style:y,timeout:w=i,TransitionComponent:U=Y}=r,V=K(r,$e),T=j.useRef(null),H=X(T,l.ref,n),E=m=>f=>{if(m){const b=T.current;f===void 0?m(b):m(b,f)}},q=E(C),W=E((m,f)=>{J(m);const b=R({style:y,timeout:w,easing:a},{mode:"enter"});m.style.webkitTransition=o.transitions.create("transform",b),m.style.transition=o.transitions.create("transform",b),x&&x(m,f)}),$=E(S),G=E(M),Q=E(m=>{const f=R({style:y,timeout:w,easing:a},{mode:"exit"});m.style.webkitTransition=o.transitions.create("transform",f),m.style.transition=o.transitions.create("transform",f),g&&g(m)}),z=E(A),Z=m=>{s&&s(T.current,m)};return e.jsx(U,v({appear:d,in:c,nodeRef:T,onEnter:W,onEntered:$,onEntering:q,onExit:Q,onExited:z,onExiting:G,addEndListener:Z,timeout:w},V,{children:(m,f)=>j.cloneElement(l,v({style:v({transform:"scale(0)",visibility:m==="exited"&&!c?"hidden":void 0},Ge[m],y,l.props.style),ref:H},f))}))}),ze=Qe,B={LIST:"unassignedCardsCommerce"},Ze=(t,r)=>{const{phone:n,email:o,name:i}=t,s={name:i,phone:n,email:o,cards:(r==null?void 0:r.map(d=>d==null?void 0:d.id))||[]};return Fe(s)},Ke=async()=>{const{data:t}=await N.get("/api/disabled-cards/commerce");return ge(t)},Xe=async t=>(await N.put("/api/assign/commerce-card/to/user",t),t),Ye=(t={})=>{const[r,n]=j.useState(null);return{...ee([B.LIST],Ke,{staleTime:6e4,onError:i=>{const s=P(i,"No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas");n(s)},...t}),error:r||null}},Je=(t={})=>{const r=te(),n=se(Xe,t);return{...n,mutate:async(i,s)=>{const{onSuccess:d,onError:l,mutationOptions:a}=s;try{await _.promise(n.mutateAsync(i,a),{pending:"Asignando Tarjetas ...",success:{render({data:c}){return r.invalidateQueries([B.LIST]),r.invalidateQueries([Ue.CARDS_COMMERCE_LIST]),d(),"Se asignaron las tarjetas con éxito"}}})}catch(c){const x=P(c,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");l(x),_.error(x,{type:ne(c)})}}}},et=(t,r)=>({cards:[],rows:[],openAssign:!1,setSelectedCard:n=>{const{cards:o}=r(),i=o.indexOf(n);let s=[];i===-1?s=s.concat(o,n):i===0?s=s.concat(o.slice(1)):i===o.length-1?s=s.concat(o.slice(0,-1)):i>0&&(s=s.concat(o.slice(0,i),o.slice(i+1))),t(d=>({cards:s}),!1,"SET_SELECTED_INACTIVE_CARDS")},setAllCards:n=>{t(o=>({cards:n}),!1,"SET_SELECTED_ALL_INACTIVE_CARDS")},setIndexCards:n=>{t(o=>({rows:n}),!1,"SET_SELECTED_ALL_INACTIVE_ROWS")},setOpenAssign:n=>{t(o=>({openAssign:n}),!1,"SET_OPEN_ASSIGN_SIDEBAR")},resetCards:()=>{t(n=>({cards:[],rows:[]}),!1,"RESET_SELECTED_INACTIVE_CARDS")}}),p=Ae(Te(et));function tt({cards:t}){const r=p(a=>a.cards),n=p(a=>a.setAllCards),o=p(a=>a.resetCards),i=p(a=>a.setOpenAssign),s=(r==null?void 0:r.length)||0,d=(t==null?void 0:t.length)||0,l=a=>{if(a){n(t);return}o()};return e.jsx(e.Fragment,{children:e.jsx(re,{sx:a=>({position:"sticky",borderRadius:1,py:4,top:0,boxShadow:a.customShadows.z8,backgroundColor:a.palette.info.lighter,color:"white"}),children:e.jsxs(u,{flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",sx:{width:1},gap:2,alignItems:"center",children:[e.jsxs(u,{flexDirection:"row",gap:1,alignItems:"center",children:[e.jsx(F,{indeterminate:s>0&&s<d,checked:d>0&&s===d,onChange:a=>l(a.target.checked),color:"success"}),e.jsx(h,{color:"success.main",variant:"subtitle1",children:s===1?`${s} Tarjeta`:`${s} Tarjetas`})]}),e.jsx(u,{flexDirection:"row",gap:2,justifyContent:"space-between",children:e.jsx(oe,{startIcon:e.jsx(ye,{}),variant:"outlined",color:"info",onClick:()=>i(!0),children:"Asignar"})})]})})})}function st({card:t}){const r=p(s=>s.setSelectedCard),n=p(s=>s.cards),o=n==null?void 0:n.some(s=>(s==null?void 0:s.id)===(t==null?void 0:t.id)),i=s=>{s.stopPropagation(),r(t)};return e.jsx(ie.div,{onClick:i,whileHover:{scale:1.03},whileTap:{scale:.8},children:e.jsxs(fe,{sx:{m:1,cursor:"pointer"},children:[e.jsxs(u,{flexDirection:"row",gap:1,children:[e.jsx(F,{onClick:i,edge:"start",checked:o,inputProps:{"aria-labelledby":t==null?void 0:t.id},color:"success"}),e.jsxs(u,{children:[e.jsx(h,{variant:"subtitle2",sx:{opacity:.72},children:"Viabo Card"}),e.jsx(h,{variant:"caption",color:"text.secondary",children:t==null?void 0:t.register})]})]}),e.jsx(Ce,{card:t,disableShow:!0}),e.jsxs(u,{direction:"row",spacing:5,children:[e.jsxs(u,{children:[e.jsx(h,{sx:{mb:1,typography:"caption",opacity:.48},children:"Vencimiento"}),e.jsx(h,{sx:{typography:"subtitle1"},children:t==null?void 0:t.expiration})]}),e.jsx(we,{card:t,disableShow:!0})]})]})})}function nt({cards:t,onSuccess:r}){const{mutate:n,isLoading:o}=Je(),i=Oe({name:I().required("El nombre es requerido"),email:I().email("Ingresa un correo valido").required("El correo es requerido"),phone:I().test("longitud","El telefono es muy corto",g=>!(g&&g.replace(/[\s+]/g,"").length<10))}),s=Le({initialValues:{name:"",phone:"",email:""},validationSchema:i,onSubmit:g=>{const A=Ze(g,t);n(A,{onSuccess:()=>{S(!1),r()},onError:()=>{S(!1)}})}}),{errors:d,touched:l,isSubmitting:a,setFieldValue:c,values:x,setSubmitting:S}=s,C=a||o;return e.jsx(k,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(De,{formik:s,children:e.jsxs(u,{spacing:3,sx:{p:3},children:[e.jsxs(u,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre"}),e.jsx(L,{name:"name",required:!0,placeholder:"Usuario",disabled:C})]}),e.jsxs(u,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico"}),e.jsx(L,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:C,InputProps:{startAdornment:e.jsx(Ve,{position:"start",children:e.jsx(He,{})})}})]}),e.jsxs(u,{children:[e.jsx(h,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(ke,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:x.phone||"+52",disabled:C,onChange:(g,A)=>{c("phone",g)},error:l.phone&&!!d.phone,helperText:l.phone&&d.phone})]}),e.jsx(u,{sx:{pt:3},children:e.jsx(ae,{loading:a,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(qe,{}),children:"Asignar"})})]})})})}function rt({open:t,handleClose:r,handleSuccess:n}){const o=p(i=>i.cards);return e.jsxs(je,{open:t,handleClose:r,title:"Asignar Tarjetas",children:[e.jsx(u,{flexDirection:"row",gap:2,flexWrap:"wrap",justifyContent:"center",alignItems:"center",p:3,children:o==null?void 0:o.map(i=>e.jsx(Be,{icon:e.jsx(Me,{}),label:i==null?void 0:i.cardNumberHidden},i==null?void 0:i.id))}),e.jsx(nt,{cards:o,onSuccess:n})]})}function ot({unassignedCards:t}){const r=t==null?void 0:t.data,n=p(l=>l.cards),o=p(l=>l.setIndexCards,Ne),i=O(),s=j.useMemo(()=>(n==null?void 0:n.map(l=>r.findIndex(a=>a.id===l.id)))||[],[n,r]);j.useEffect(()=>{o(s)},[s]);const d={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen};return e.jsx(u,{flexDirection:"row",sx:{height:"100vh",display:"flex"},children:e.jsxs(u,{sx:l=>({overflow:"hidden",flexDirection:"column",flexGrow:1}),children:[e.jsx(ze,{in:(n==null?void 0:n.length)>0,timeout:d,style:{transitionDelay:`${(n==null?void 0:n.length)>0?d.exit:0}ms`},unmountOnExit:!0,children:e.jsx(le,{children:e.jsx(tt,{cards:t==null?void 0:t.data})})}),e.jsx(k,{children:e.jsx(ve,{cards:t,emptyMessage:"No hay tarjetas sin asignar",cardComponent:st,my:3})})]})})}function it({isLoading:t,cards:r=[],rows:n=[]}){const o=p(l=>l.setAllCards),i=p(l=>l.setOpenAssign),s=p(l=>l.setIndexCards),d=[{name:"cardNumberHidden",label:"Tarjeta",options:{customBodyRenderLite:(l,a)=>{const c=r[l];return e.jsx(h,{variant:"subtitle2",fontWeight:"bold",children:c==null?void 0:c.cardNumberHidden})}}},{name:"cardType",label:"Tipo",options:{customBodyRenderLite:(l,a)=>{const c=r[l];return e.jsxs(u,{flexDirection:"row",alignItems:"center",gap:1,children:[e.jsx(ce,{sx:x=>({width:45,height:45,color:x.palette.primary.contrastText,backgroundColor:x.palette.primary.light}),children:(c==null?void 0:c.cardType)==="Carnet"?e.jsx(Se,{sx:{width:30},color:"white"}):e.jsx(be,{sx:{width:30}})}),e.jsx(h,{variant:"subtitle2",children:c==null?void 0:c.cardType})]})}}},{name:"expiration",label:"Vence",options:{filterType:"textField"}},{name:"register",label:"Fecha",options:{filterType:"textField",customBodyRenderLite:(l,a)=>{const c=r[l];return e.jsxs(u,{children:[e.jsx(h,{variant:"subtitle2",children:c==null?void 0:c.registerDate}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:c==null?void 0:c.registerTime})]})}}}];return e.jsx(Pe,{children:e.jsx(Ee,{isLoading:t,data:r||[],columns:d,options:{responsive:"simple",rowsSelected:n,rowHover:!0,selectableRows:"multiple",selectableRowsOnClick:!0,selectToolbarPlacement:"replace",sortOrder:{name:"register",direction:"desc"},downloadOptions:{filename:"tarjetas_sin_asignar.csv",filterOptions:{useDisplayedColumnsOnly:!1}},onRowSelectionChange:(l,a,c)=>{const x=r==null?void 0:r.filter((S,C)=>c.includes(C));o(x),s(c)},customToolbarSelect:l=>e.jsx(Ie,{handleAssign:()=>{i(!0)}})}})})}function Nt(){const t=Ye(),[r,n]=j.useState("1"),o=(a,c)=>{n(c)},i=p(a=>a.rows),s=p(a=>a.openAssign),d=p(a=>a.setOpenAssign),l=p(a=>a.resetCards);return e.jsx(e.Fragment,{children:e.jsx(de,{title:"Tarjetas Sin Asignar del Comercio",children:e.jsxs(xe,{sx:{height:"100%"},children:[e.jsx(he,{name:"Tarjetas Sin Asignar",links:[{name:"Inicio",href:me.root},{name:"Administracion",href:ue.cards},{name:pe.unassignedCards.name}],buttons:e.jsxs(We,{size:"small",color:"primary",value:r,exclusive:!0,onChange:o,"aria-label":"Platform",children:[e.jsx(D,{value:"1",children:e.jsx(Re,{})}),e.jsx(D,{value:"2",children:e.jsx(_e,{})})]})}),r==="2"&&e.jsx(ot,{unassignedCards:t}),r==="1"&&e.jsx(it,{cards:t.data,isLoading:t.isLoading,rows:i}),e.jsx(rt,{open:s,handleClose:()=>{d(!1)},handleSuccess:()=>{d(!1),l()}})]})})})}export{Nt as default};
