import{ao as S,r as D,a as I,g as V,b as E,aX as F,aY as v,aZ as k,j as e,S as s,T as c,B as M,a0 as w,G as P,L as R,p as T,am as q}from"./index-zZLQf85F.js";import{u as B}from"./build-vea5MoeN.js";import{c as L,a as y}from"./build-rPYTnZ0P.js";import{a as z}from"./build-NjJ5ZdqY.js";import{u as h,C as j}from"./build-DdXX27yg.js";import{a as N}from"./build-s8ML6bFe.js";import{F as _,R as U,M as $}from"./build-xvftTHFY.js";import{I as G}from"./build-lGOk465E.js";import{V as W}from"./build-XqO7kEiS.js";import{A as H}from"./build-JXD7LCLx.js";import{D as O}from"./build-zm_xBd2R.js";import"./build-BiFUCUez.js";import"./build-nrvKdWYL.js";import"./build-BC3f-duO.js";import"./build-oAUg0xyq.js";import"./build-zIcY1Gcs.js";import"./build-FIAgVl-Q.js";import"./build-gPmZEdkF.js";import"./build-K3n06G8N.js";import"./build-Uc7vb3zK.js";const Y=r=>{var p,a;const d=(p=r==null?void 0:r.expiration)==null?void 0:p.slice(-2),n={expiration:((a=r==null?void 0:r.expiration)==null?void 0:a.slice(0,3))+d,cvv:r==null?void 0:r.cvv};return z(n)},K=(r={})=>{const{enqueueSnackbar:d}=S(),[o,n]=D.useState(null);return{...I(N,{onSuccess:()=>{n(null)},onError:a=>{const i=V(a,"No se puede asignar la tarjeta. Intente nuevamente o reporte a sistemas");n(i),d(i,{variant:E(a),autoHideDuration:5e3})},...r}),error:o||null}};function ye(){const r=h(t=>t.setStepAssignRegister),d=h(t=>t.token),o=h(t=>t.card),{mutate:n,isLoading:p}=K(),a=L().shape({cvv:y().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),expiration:y().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(t){const l=F(`01/${t}`,"dd/MM/yyyy",new Date),x=new Date;return v(l)&&k(l,x)})}),i=B({initialValues:{expiration:"",cvv:""},validationSchema:a,onSubmit:(t,{setSubmitting:l})=>{const x=Y(t);q.defaults.headers.common.Authorization=`Bearer ${d}`,n(x,{onSuccess:()=>{l(!1),r(j.CARD_ASSIGNED)},onError:()=>{l(!1)}})}}),{isSubmitting:C,values:g,setFieldValue:A,errors:u,handleSubmit:b,touched:f,resetForm:X,setSubmitting:Z}=i,m=C||p;return e.jsxs(s,{sx:{mb:3},children:[e.jsxs(s,{direction:"column",width:1,spacing:1,pb:2,children:[e.jsx(c,{variant:"h4",color:"textPrimary",align:"center",children:"Estamos a un paso de completar su registro"}),e.jsx(c,{paragraph:!0,align:"center",variant:"body1",color:"text.primary",whiteSpace:"pre-line",children:"Ingrese la información faltante de la tarjeta para asociarla a su cuenta."})]}),e.jsx(_,{formik:i,children:e.jsxs(s,{px:5,children:[e.jsx(M,{sx:{pb:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2},children:e.jsx(c,{variant:"overline",color:"primary.main",children:o==null?void 0:o.cardNumberHidden})}),e.jsx(w,{sx:{textAlign:"center",width:"100%",justifyContent:"center",display:"flex",mb:2},severity:"warning",children:e.jsx(c,{variant:"caption",fontWeight:"bold",children:"En caso de no capturar los datos correctos de la tarjeta, la información de la misma podrá ser erronea."})}),e.jsxs(s,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(s,{sx:{width:{xs:"100%",lg:"40%"}},children:[e.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(U,{name:"cvv",required:!0,placeholder:"123",size:"small",InputProps:{startAdornment:e.jsx(G,{position:"start",children:e.jsx(W,{})}),inputComponent:$,inputProps:{mask:"000",onAccept:t=>{A("cvv",t)},value:g.cvv}},disabled:m})]}),e.jsxs(s,{children:[e.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence"}),e.jsx(O,{disabled:m,views:["year","month"],size:"small",name:"expiration",value:new Date(g.expiration)??null,onChange:t=>v(t)?i.setFieldValue("expiration",P(t,"MM/yyyy")):i.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,size:"small",error:!!(f.expiration&&u.expiration),required:!0,helperText:f.expiration&&u.expiration?u.expiration:""}},disablePast:!0,format:"MM/yy"})]})]})]})}),e.jsxs(s,{spacing:3,px:5,py:4,children:[e.jsx(R,{size:"large",loading:m,variant:"contained",color:"primary",fullWidth:!0,type:"submit",onClick:b,disabled:m,startIcon:e.jsx(H,{}),children:"Asociar"}),e.jsx(T,{size:"large",variant:"outlined",color:"inherit",onClick:()=>{r(j.CARD_VALIDATION)},children:"Cancelar"})]})]})}export{ye as default};
