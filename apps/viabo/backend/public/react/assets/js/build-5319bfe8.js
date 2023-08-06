import{u as T,Q as F,n as y,g as z,j as o,r as G,S as f,T as g,B as Q,ay as q,a0 as H,L as $,P as K}from"./build-7f26f9ca.js";import{u as W}from"./build-1442fb25.js";import{u as Y,C as J}from"./build-dda2fc72.js";import{U as X}from"./build-fb36d713.js";import{P as O}from"./build-61d5e77c.js";import{u as Z,C as b,d as ee,p as oe}from"./build-2e95c33e.js";import{T as te,a as j}from"./build-2b954bbe.js";import{G as h}from"./build-3c5effeb.js";import{C as ne}from"./build-c6051750.js";import"./build-bee6630b.js";import"./build-9563ddbe.js";import"./build-e603dc94.js";const ae=(a,t,l)=>{let r=a;l==="2"&&(r={...a,ACTA_CONSTITUTIVA:null,DOCUMENTO_PODER:null,CEDULA_FISCAL_EMPRESA:null});const s=new FormData,p=new FormData;for(const[d,m]of Object.entries(r))if(m!==null)s.append(d,m);else{const D="",A=new File([D],`${d}.txt`,{type:"text/plain"});p.append(d,A)}return s.append("commerceId",t),p.append("commerceId",t),{uploadDocumentsForm:s,deleteDocumentsForm:p}},I={ACTA_CONSTITUTIVA:"Acta Constitutiva",DOCUMENTO_PODER:"Documento Poder",IDENTIFICACION:"Identificación",CEDULA_FISCAL_EMPRESA:"Cédula Fiscal de la Empresa",CEDULA_FISCAL_APODERADO:"Cédula Fiscal del Apoderado",COMPROBANTE_DOMICILIO:"Comprobante de Domicilio"},u={ACTA_CONSTITUTIVA:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:null,moralPerson:!0},DOCUMENTO_PODER:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:null,moralPerson:!0},IDENTIFICACION:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:null,moralPerson:"all"},CEDULA_FISCAL_EMPRESA:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:"No Mayor a 2 meses",moralPerson:!0},CEDULA_FISCAL_APODERADO:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:"No Mayor a 2 meses",moralPerson:"all"},COMPROBANTE_DOMICILIO:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:"No Mayor a 2 meses",moralPerson:"all"}},re=(a={})=>{const{enqueueSnackbar:t}=T(),l=F();return y({mutationFn:Z,onSuccess:()=>{l.invalidateQueries([b.COMMERCE_PROCESS]),t("Se agregaron los documentos al proceso!",{variant:"success"})},onError:r=>{const s=z(r,"No se puede agregar los doumentos al proceso");t(s,{variant:(r==null?void 0:r.status)===500?"error":"warning",autoHideDuration:5e3})},...a})},se=(a={})=>{const t=F();return y({mutationFn:ee,onSuccess:()=>{t.invalidateQueries([b.COMMERCE_PROCESS])},...a})},ie=({name:a,accept:t,setFieldValue:l,file:r})=>{const s=d=>{const m=d[0];m&&l(a,Object.assign(m,{preview:URL.createObjectURL(m)}))},p=()=>{l(a,null)};return o.jsx(o.Fragment,{children:o.jsx(X,{file:r,accept:t,onDrop:s,onRemove:p,maxSize:3145728})})},ce=ie;le.propTypes={store:K.shape(oe)};function le({store:a}){const{resume:t,setActualProcess:l,setLastProcess:r}=a,{files:s,fiscalTypePerson:p}=t,{enqueueSnackbar:d}=T(),{mutate:m,isLoading:D}=re(),{mutate:A,isLoading:R}=se(),{mutate:M,isLoading:_}=Y(),L=W({initialValues:Object.keys(I).reduce((e,i)=>{var x;return e[i]=((x=s==null?void 0:s.find(C=>(C==null?void 0:C.Name)===i))==null?void 0:x.storePath)||null,e},{moralPerson:p===""?"1":p}),enableReinitialize:!0,onSubmit:e=>{const{moralPerson:i,...x}=e;if(c==null?void 0:c.some(P=>e[P]!==null)){const{deleteDocumentsForm:P,uploadDocumentsForm:w}=ae(x,t==null?void 0:t.id,i);m(w,{onSuccess:()=>{const S=c==null?void 0:c.every(V=>e[V]!==null),B={...J(t,S?4:3),fiscalPersonType:i};M(B,{onSuccess:()=>{S&&(l(O.FINISHED_PROCESS),r({info:null,name:O.COMMERCE_DOCUMENTATION}))}})}}),A(P)}else d("Se debe subir al menos un archivo!",{variant:"warning"});v(!1)}}),{handleSubmit:U,values:n,setSubmitting:v,isSubmitting:N,setFieldValue:E}=L,c=G.useMemo(()=>Object.keys(u).filter(e=>n.moralPerson==="1"?e:u[e].moralPerson===!1||u[e].moralPerson==="all"),[n.moralPerson]),k=D||N||_||R;return o.jsxs(o.Fragment,{children:[o.jsxs(f,{direction:"column",width:1,spacing:1,children:[o.jsx(g,{variant:"h4",color:"textPrimary",align:"center",children:"Documentación del Comercio"}),o.jsx(g,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese los documentos necesarios del comercio para continuar con el proceso"})]}),o.jsx(Q,{width:1,py:4,component:"form",onSubmit:U,children:o.jsxs(f,{spacing:4,justifyContent:"center",alignItems:"center",children:[o.jsxs(te,{color:"primary",value:n==null?void 0:n.moralPerson,exclusive:!0,onChange:(e,i)=>{E("moralPerson",i)},"aria-label":"Platform",children:[o.jsx(j,{value:"1",children:"Persona Moral"}),o.jsx(j,{value:"2",children:"Persona Física"})]}),o.jsx(h,{container:!0,spacing:2,children:c==null?void 0:c.map(e=>{var i;return o.jsx(h,{item:!0,xs:12,md:6,lg:4,xl:4,children:o.jsxs(ne,{sx:{p:0,borderRadius:1},children:[o.jsx(g,{pt:2,variant:"subtitle2",color:"textPrimary",align:"center",children:I[e]}),n[e]&&typeof n[e]=="object"&&o.jsx(f,{sx:{textAlign:"center",align:"center"},children:o.jsx(g,{variant:"caption",color:"textPrimary",align:"center",children:(i=n[e])==null?void 0:i.path})}),n[e]&&typeof n[e]!="object"&&o.jsx(f,{sx:{textAlign:"center",align:"center"},children:o.jsx(q,{href:n[e],target:"_blank",children:"Ver | Descargar"})}),u[e].expiration&&o.jsx(H,{sx:{borderRadius:0,textAlign:"center",width:"100%",justifyContent:"center",display:"flex"},variant:"standard",icon:!1,color:"warning",children:o.jsx(g,{variant:"caption",color:"textSecondary",align:"center",children:u[e].expiration})}),o.jsx(ce,{name:e,accept:u[e].accept,setFieldValue:E,file:n[e]})]})},e)})}),o.jsx($,{loading:k,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Guardar"})]})})]})}export{le as default};
