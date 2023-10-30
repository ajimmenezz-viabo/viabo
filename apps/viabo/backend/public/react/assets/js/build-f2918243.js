import{k as S,a as b,Y as A,g as I,b as M,r as T,j as e,a2 as q,S as l,N as R,T as u,L as F,C as y}from"./index-66cb75df.js";import{u as L}from"./build-bd32fad9.js";import{a as P}from"./build-72adeabc.js";import{c as _,a as g}from"./build-66bff701.js";import{a as k}from"./build-6d8fb990.js";import{A as N}from"./build-73979575.js";import{a as O}from"./build-9f4568ae.js";import{C as V}from"./build-2e8706bc.js";import{F as w,M as B}from"./build-8a357111.js";import{R as v}from"./build-f0053943.js";import{I as E}from"./build-27a4b8f9.js";import{E as D}from"./build-b61c5e4f.js";import{V as Q}from"./build-4b5934de.js";import{A as W}from"./build-6b36fdd7.js";import"./build-b463c8f6.js";import"./build-9d3fe41c.js";import"./build-f58640b5.js";import"./build-7b5d6586.js";import"./build-1f27af78.js";import"./build-48fe95c1.js";import"./build-cb9d33cb.js";import"./build-6421e956.js";import"./build-bee6630b.js";import"./build-1340cc8b.js";import"./build-ac9daf3f.js";import"./build-3eb05f86.js";import"./build-83d17a75.js";import"./build-899176f2.js";import"./build-708407b9.js";import"./build-1ee72508.js";import"./build-8fb582f0.js";import"./build-7226c475.js";import"./build-722d29d2.js";import"./build-c0c056ef.js";import"./build-33d27e57.js";const K=(r,o,a)=>{var s;const{phone:h,email:i,name:c}=r,p={name:c,phone:h,email:i,cards:a?[{id:(s=o[0])==null?void 0:s.id,cvv:r==null?void 0:r.cvv}]:(o==null?void 0:o.map(t=>({id:t==null?void 0:t.id,cvv:t==null?void 0:t.cvv})))||[]};return k(p)},Y=(r={})=>{const o=S(),a=b(O,r);return{...a,mutate:async(i,c)=>{const{onSuccess:p,onError:s,mutationOptions:t}=c;try{await A.promise(a.mutateAsync(i,t),{pending:"Asignando Tarjetas ...",success:{render({data:m}){return o.invalidateQueries([N.LIST]),o.invalidateQueries([V.CARDS_COMMERCE_LIST]),p(),"Se asignaron las tarjetas con éxito"}}})}catch(m){const d=I(m,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");s(d),A.error(d,{type:M(m)})}}}};function U({cards:r,onSuccess:o}){const{mutate:a,isLoading:h}=Y(),i=T.useMemo(()=>(r==null?void 0:r.length)>0&&r[0].cvv==="",[r]),c=_({name:g().required("El nombre es requerido"),email:g().email("Ingresa un correo valido").required("El correo es requerido"),phone:g().test("longitud","El telefono es muy corto",n=>!(n&&n.replace(/[\s+]/g,"").length<10)),...i&&{cvv:g().min(3,"Debe contener 3 digitos").required("El CVV es requerido")}}),p=L({initialValues:{name:"",phone:"",email:"",...i&&{cvv:""}},validationSchema:c,onSubmit:n=>{const C=K(n,r,i);a(C,{onSuccess:()=>{j(!1),o()},onError:()=>{j(!1)}})}}),{errors:s,touched:t,isSubmitting:m,setFieldValue:d,values:f,setSubmitting:j}=p,x=m||h;return e.jsx(q,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(w,{formik:p,children:e.jsxs(l,{spacing:3,sx:{p:3},children:[i&&e.jsx(R,{sx:{textAlign:"center",width:"100%",justifyContent:"center",display:"flex"},severity:"warning",children:e.jsx(u,{variant:"caption",fontWeight:"bold",children:"En caso de no capturar los datos correctos de la tarjeta, la información de la misma podrá ser erronea."})}),e.jsxs(l,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre"}),e.jsx(v,{name:"name",required:!0,placeholder:"Usuario",disabled:x})]}),e.jsxs(l,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico"}),e.jsx(v,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:x,InputProps:{startAdornment:e.jsx(E,{position:"start",children:e.jsx(D,{})})}})]}),e.jsxs(l,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(P,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:f.phone||"+52",disabled:x,onChange:(n,C)=>{d("phone",n)},error:t.phone&&!!s.phone,helperText:t.phone&&s.phone})]}),i&&e.jsxs(l,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(v,{name:"cvv",fullWidth:!0,required:!0,placeholder:"123",InputProps:{startAdornment:e.jsx(E,{position:"start",children:e.jsx(Q,{})}),inputComponent:B,inputProps:{mask:"000",onAccept:n=>{d("cvv",n)},value:f.cvv}},disabled:x})]}),e.jsx(l,{sx:{pt:3},children:e.jsx(F,{loading:m,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(W,{}),children:"Asociar"})})]})})})}U.propTypes={cards:y.array,onSuccess:y.func};export{U as default};