import{bx as T,c as F,f as y,i as o,r as z,S as D,T as g,B as Q,bK as G,bL as h,bm as O,aM as q,aC as H,V as K,Q as $,P as W}from"./vendor-5lkxkETF.js";import{u as Y}from"./formik.esm-CTTSENmf.js";import{u as J,C as X}from"./commerceUpdateAdapter-WEAKpTRa.js";import{U as Z}from"./UploadSingleFile-WHmSFia6.js";import{g as ee}from"./index-DBYLOnQL.js";import{P as j}from"./processList-CzVvLx1j.js";import{a as oe,C as b,d as te,p as ne}from"./CommerceRegister-DKm-dB78.js";import"./fade-CViozI82.js";import"./transition-anLY3gj9.js";import"./formatNumber-dGNhWwxT.js";const ae=(a,t,l)=>{let r=a;l==="2"&&(r={...a,ACTA_CONSTITUTIVA:null,DOCUMENTO_PODER:null,CEDULA_FISCAL_EMPRESA:null});const s=new FormData,p=new FormData;for(const[m,d]of Object.entries(r))if(d!==null)s.append(m,d);else{const f="",A=new File([f],`${m}.txt`,{type:"text/plain"});p.append(m,A)}return s.append("commerceId",t),p.append("commerceId",t),{uploadDocumentsForm:s,deleteDocumentsForm:p}},I={ACTA_CONSTITUTIVA:"Acta Constitutiva",DOCUMENTO_PODER:"Documento Poder",IDENTIFICACION:"Identificación",CEDULA_FISCAL_EMPRESA:"Cédula Fiscal de la Empresa",CEDULA_FISCAL_APODERADO:"Cédula Fiscal del Apoderado",COMPROBANTE_DOMICILIO:"Comprobante de Domicilio"},u={ACTA_CONSTITUTIVA:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:null,moralPerson:!0},DOCUMENTO_PODER:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:null,moralPerson:!0},IDENTIFICACION:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:null,moralPerson:"all"},CEDULA_FISCAL_EMPRESA:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:"No Mayor a 2 meses",moralPerson:!0},CEDULA_FISCAL_APODERADO:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:"No Mayor a 2 meses",moralPerson:"all"},COMPROBANTE_DOMICILIO:{accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]},maxFiles:1,expiration:"No Mayor a 2 meses",moralPerson:"all"}},re=(a={})=>{const{enqueueSnackbar:t}=T(),l=F();return y({mutationFn:oe,onSuccess:()=>{l.invalidateQueries([b.COMMERCE_PROCESS]),t("Se agregaron los documentos al proceso!",{variant:"success"})},onError:r=>{const s=ee(r,"No se puede agregar los doumentos al proceso");t(s,{variant:(r==null?void 0:r.status)===500?"error":"warning",autoHideDuration:5e3})},...a})},se=(a={})=>{const t=F();return y({mutationFn:te,onSuccess:()=>{t.invalidateQueries([b.COMMERCE_PROCESS])},...a})},ie=({name:a,accept:t,setFieldValue:l,file:r})=>{const s=m=>{const d=m[0];d&&l(a,Object.assign(d,{preview:URL.createObjectURL(d)}))},p=()=>{l(a,null)};return o.jsx(o.Fragment,{children:o.jsx(Z,{file:r,accept:t,onDrop:s,onRemove:p,maxSize:3145728,height:40})})},ce=ie;le.propTypes={store:W.shape(ne)};function le({store:a}){const{resume:t,setActualProcess:l,setLastProcess:r}=a,{files:s,fiscalTypePerson:p}=t,{enqueueSnackbar:m}=T(),{mutate:d,isLoading:f}=re(),{mutate:A,isLoading:M}=se(),{mutate:R,isLoading:_}=J(),L=Y({initialValues:Object.keys(I).reduce((e,i)=>{var x;return e[i]=((x=s==null?void 0:s.find(C=>(C==null?void 0:C.Name)===i))==null?void 0:x.storePath)||null,e},{moralPerson:p===""?"1":p}),enableReinitialize:!0,onSubmit:e=>{const{moralPerson:i,...x}=e;if(c==null?void 0:c.some(P=>e[P]!==null)){const{deleteDocumentsForm:P,uploadDocumentsForm:w}=ae(x,t==null?void 0:t.id,i);d(w,{onSuccess:()=>{const S=c==null?void 0:c.every(V=>e[V]!==null),B={...X(t,S?4:3),fiscalPersonType:i};R(B,{onSuccess:()=>{S&&(l(j.FINISHED_PROCESS),r({info:null,name:j.COMMERCE_DOCUMENTATION}))}})}}),A(P)}else m("Se debe subir al menos un archivo!",{variant:"warning"});v(!1)}}),{handleSubmit:U,values:n,setSubmitting:v,isSubmitting:N,setFieldValue:E}=L,c=z.useMemo(()=>Object.keys(u).filter(e=>n.moralPerson==="1"?e:u[e].moralPerson===!1||u[e].moralPerson==="all"),[n.moralPerson]),k=f||N||_||M;return o.jsxs(o.Fragment,{children:[o.jsxs(D,{direction:"column",width:1,spacing:1,children:[o.jsx(g,{variant:"h4",color:"textPrimary",align:"center",children:"Documentación del Comercio"}),o.jsx(g,{paragraph:!0,align:"center",variant:"body1",color:"text.secondary",whiteSpace:"pre-line",children:"Ingrese los documentos necesarios del comercio para continuar con el proceso"})]}),o.jsx(Q,{width:1,py:4,component:"form",onSubmit:U,children:o.jsxs(D,{spacing:4,justifyContent:"center",alignItems:"center",children:[o.jsxs(G,{color:"primary",value:n==null?void 0:n.moralPerson,exclusive:!0,onChange:(e,i)=>{E("moralPerson",i)},"aria-label":"Platform",children:[o.jsx(h,{value:"1",children:"Persona Moral"}),o.jsx(h,{value:"2",children:"Persona Física"})]}),o.jsx(O,{container:!0,spacing:2,children:c==null?void 0:c.map(e=>{var i;return o.jsx(O,{item:!0,xs:12,md:6,lg:4,xl:4,children:o.jsxs(q,{sx:{p:0,borderRadius:1},children:[o.jsx(g,{pt:2,variant:"subtitle2",color:"textPrimary",align:"center",children:I[e]}),n[e]&&typeof n[e]=="object"&&o.jsx(D,{sx:{textAlign:"center",align:"center"},children:o.jsx(g,{variant:"caption",color:"textPrimary",align:"center",children:(i=n[e])==null?void 0:i.path})}),n[e]&&typeof n[e]!="object"&&o.jsx(D,{sx:{textAlign:"center",align:"center"},children:o.jsx(H,{href:n[e],target:"_blank",children:"Ver | Descargar"})}),u[e].expiration&&o.jsx(K,{sx:{borderRadius:0,textAlign:"center",width:"100%",justifyContent:"center",display:"flex"},variant:"standard",icon:!1,color:"warning",children:o.jsx(g,{variant:"caption",color:"textSecondary",align:"center",children:u[e].expiration})}),o.jsx(ce,{name:e,accept:u[e].accept,setFieldValue:E,file:n[e]})]})},e)})}),o.jsx($,{loading:k,color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{textTransform:"uppercase"},children:"Guardar"})]})})]})}export{le as default};
//# sourceMappingURL=CommerceDocumentation-D60TrRuJ.js.map