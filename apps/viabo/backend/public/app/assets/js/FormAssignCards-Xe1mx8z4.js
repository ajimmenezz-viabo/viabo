import{c as S,f as b,a9 as A,r as M,i as e,V as c,M as I,T as u,aY as y,dp as T,bX as q,a0 as R,bZ as F,P as E}from"./vendor-StReGf79.js";import{u as P}from"./formik.esm-ayHIcoJR.js";import{l as _}from"./mui-tel-input.es-R2Q1tWm9.js";import{c as L,a as g}from"./index.esm-cYP9oANf.js";import{a as O}from"./crypto-DOZFMzid.js";import{g as V,a as k,S as N}from"./index-mKe_odg3.js";import{A as w,C as B}from"./useToggleStatusCard-8EoOgZIp.js";import{a as D}from"./AllCommerceCards-PISyX29V.js";import{F as Q,R as v,M as W}from"./TextMaxLine-Nybdgfc_.js";import"./cardsAdapter-uJf5b3nF.js";import"./formatNumber-D2wM-uoj.js";import"./formatTime-j4oUQxO9.js";import"./matchTypes-VzXr5CmM.js";import"./cardMovementsAdapter-fRoPhU7M.js";import"./csv-Hsnd01P9.js";import"./CarnetLogo-9N730tjt.js";import"./MasterCardLogo-31QJgBVq.js";import"./operationTypes-4-tdTgKX.js";import"./viabo-card-zH8OCAbq.js";import"./viabo-pay-zEF68lUW.js";import"./HeaderPage-fCD0eWYY.js";import"./fade-HpdRXKiE.js";import"./transition-Uc7vb3zK.js";import"./useMaterialTable-3iMRnh5c.js";import"./UploadSingleFile-NVjHNA2_.js";const K=(r,o,a)=>{var s;const{phone:h,email:n,name:d}=r,l={name:d,phone:h,email:n,cards:a?[{id:(s=o[0])==null?void 0:s.id,cvv:r==null?void 0:r.cvv}]:(o==null?void 0:o.map(t=>({id:t==null?void 0:t.id,cvv:t==null?void 0:t.cvv})))||[]};return O(l)},Y=(r={})=>{const o=S(),a=b(D,r);return{...a,mutate:async(n,d)=>{const{onSuccess:l,onError:s,mutationOptions:t}=d;try{await A.promise(a.mutateAsync(n,t),{pending:"Asignando Tarjetas ...",success:{render({data:p}){return o.invalidateQueries([w.LIST]),o.invalidateQueries([B.CARDS_COMMERCE_LIST]),l(),"Se asignaron las tarjetas con éxito"}}})}catch(p){const m=V(p,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");s(m),A.error(m,{type:k(p)})}}}};function U({cards:r,onSuccess:o}){const{mutate:a,isLoading:h}=Y(),n=M.useMemo(()=>(r==null?void 0:r.length)>0&&r[0].cvv==="",[r]),d=L({name:g().required("El nombre es requerido"),email:g().email("Ingresa un correo valido").required("El correo es requerido"),phone:g().test("longitud","El telefono es muy corto",i=>!(i&&i.replace(/[\s+]/g,"").length<10)),...n&&{cvv:g().min(3,"Debe contener 3 digitos").required("El CVV es requerido")}}),l=P({initialValues:{name:"",phone:"",email:"",...n&&{cvv:""}},validationSchema:d,onSubmit:i=>{const f=K(i,r,n);a(f,{onSuccess:()=>{C(!1),o()},onError:()=>{C(!1)}})}}),{errors:s,touched:t,isSubmitting:p,setFieldValue:m,values:j,setSubmitting:C}=l,x=p||h;return e.jsx(N,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(Q,{formik:l,children:e.jsxs(c,{spacing:3,sx:{p:3},children:[n&&e.jsx(I,{sx:{textAlign:"center",width:"100%",justifyContent:"center",display:"flex"},severity:"warning",children:e.jsx(u,{variant:"caption",fontWeight:"bold",children:"En caso de no capturar los datos correctos de la tarjeta, la información de la misma podrá ser erronea."})}),e.jsxs(c,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre"}),e.jsx(v,{name:"name",required:!0,placeholder:"Usuario",disabled:x})]}),e.jsxs(c,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico"}),e.jsx(v,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:x,InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(T,{})})}})]}),e.jsxs(c,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(_,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:j.phone||"+52",disabled:x,onChange:(i,f)=>{m("phone",i)},error:t.phone&&!!s.phone,helperText:t.phone&&s.phone})]}),n&&e.jsxs(c,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(v,{name:"cvv",fullWidth:!0,required:!0,placeholder:"123",InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(q,{})}),inputComponent:W,inputProps:{mask:"000",onAccept:i=>{m("cvv",i)},value:j.cvv}},disabled:x})]}),e.jsx(c,{sx:{pt:3},children:e.jsx(R,{loading:p,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(F,{}),children:"Asociar"})})]})})})}U.propTypes={cards:E.array,onSuccess:E.func};export{U as default};
//# sourceMappingURL=FormAssignCards-Xe1mx8z4.js.map