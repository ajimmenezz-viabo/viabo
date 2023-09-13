import{z as S,r as D,a as I,g as V,b as E,aP as F,aQ as v,aR as k,j as e,S as s,T as c,B as M,O as P,az as R,L as w,p as T,ah as q}from"./index-19ac9065.js";import{u as z}from"./build-a9f577cd.js";import{c as B,a as y}from"./build-c378a4a2.js";import{g as L}from"./build-164920fb.js";import{u as h,C as j}from"./build-81f49221.js";import{a as N}from"./build-23f7de4c.js";import{F as _,M as U}from"./build-9f26bed1.js";import{R as $}from"./build-d4e659d3.js";import{I as O}from"./build-274cc473.js";import{V as W}from"./build-a0adc4b2.js";import{A as G}from"./build-145d3e75.js";import{D as H}from"./build-342e654e.js";import"./build-682e09b6.js";import"./build-967d6685.js";import"./build-25858733.js";import"./build-bee6630b.js";import"./build-40496b3d.js";import"./build-c5fda4ef.js";import"./build-deb59a34.js";import"./build-0d7dcd2b.js";import"./build-f29b6452.js";const K=r=>{var d,a;const p=(d=r==null?void 0:r.expiration)==null?void 0:d.slice(-2),n={expiration:((a=r==null?void 0:r.expiration)==null?void 0:a.slice(0,3))+p,cvv:r==null?void 0:r.cvv};return L(n)},Q=(r={})=>{const{enqueueSnackbar:p}=S(),[o,n]=D.useState(null);return{...I(N,{onSuccess:()=>{n(null)},onError:a=>{const i=V(a,"No se puede asignar la tarjeta. Intente nuevamente o reporte a sistemas");n(i),p(i,{variant:E(a),autoHideDuration:5e3})},...r}),error:o||null}};function je(){const r=h(t=>t.setStepAssignRegister),p=h(t=>t.token),o=h(t=>t.card),{mutate:n,isLoading:d}=Q(),a=B().shape({cvv:y().min(3,"Debe contener 3 digitos").required("El CVV es requerido"),expiration:y().required("La fecha de vencimiento es requerida").test("is-future-date","La fecha  debe ser mayor que la fecha actual",function(t){const l=F(`01/${t}`,"dd/MM/yyyy",new Date),x=new Date;return v(l)&&k(l,x)})}),i=z({initialValues:{expiration:"",cvv:""},validationSchema:a,onSubmit:(t,{setSubmitting:l})=>{const x=K(t);q.defaults.headers.common.Authorization=`Bearer ${p}`,n(x,{onSuccess:()=>{l(!1),r(j.CARD_ASSIGNED)},onError:()=>{l(!1)}})}}),{isSubmitting:C,values:g,setFieldValue:A,errors:u,handleSubmit:b,touched:f,resetForm:Y,setSubmitting:J}=i,m=C||d;return e.jsxs(s,{sx:{mb:3},children:[e.jsxs(s,{direction:"column",width:1,spacing:1,pb:2,children:[e.jsx(c,{variant:"h4",color:"textPrimary",align:"center",children:"Estamos a un paso de completar su registro"}),e.jsx(c,{paragraph:!0,align:"center",variant:"body1",color:"text.primary",whiteSpace:"pre-line",children:"Ingrese la información faltante de la tarjeta para asociarla a su cuenta."})]}),e.jsx(_,{formik:i,children:e.jsxs(s,{px:5,children:[e.jsx(M,{sx:{pb:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2},children:e.jsx(c,{variant:"overline",color:"primary.main",children:o==null?void 0:o.cardNumberHidden})}),e.jsx(P,{sx:{textAlign:"center",width:"100%",justifyContent:"center",display:"flex",mb:2},severity:"warning",children:e.jsx(c,{variant:"caption",fontWeight:"bold",children:"En caso de no capturar los datos correctos de la tarjeta, la información de la misma podrá ser erronea."})}),e.jsxs(s,{direction:{xs:"column",lg:"row"},spacing:3,display:"flex",children:[e.jsxs(s,{sx:{width:{xs:"100%",lg:"40%"}},children:[e.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx($,{name:"cvv",required:!0,placeholder:"123",size:"small",InputProps:{startAdornment:e.jsx(O,{position:"start",children:e.jsx(W,{})}),inputComponent:U,inputProps:{mask:"000",onAccept:t=>{A("cvv",t)},value:g.cvv}},disabled:m})]}),e.jsxs(s,{children:[e.jsx(c,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Vence"}),e.jsx(H,{disabled:m,views:["year","month"],size:"small",name:"expiration",value:new Date(g.expiration)??null,onChange:t=>v(t)?i.setFieldValue("expiration",R(t,"MM/yyyy")):i.setFieldValue("expiration",""),slotProps:{textField:{fullWidth:!0,size:"small",error:!!(f.expiration&&u.expiration),required:!0,helperText:f.expiration&&u.expiration?u.expiration:""}},disablePast:!0,format:"MM/yy"})]})]})]})}),e.jsxs(s,{spacing:3,px:5,py:4,children:[e.jsx(w,{size:"large",loading:m,variant:"contained",color:"primary",fullWidth:!0,type:"submit",onClick:b,disabled:m,startIcon:e.jsx(G,{}),children:"Asociar"}),e.jsx(T,{size:"large",variant:"outlined",color:"inherit",onClick:()=>{r(j.CARD_VALIDATION)},children:"Cancelar"})]})]})}export{je as default};
