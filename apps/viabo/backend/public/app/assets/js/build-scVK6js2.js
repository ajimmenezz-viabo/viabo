import{k as S,a as b,Q as A,g as I,b as M,r as T,j as e,D as q,S as m,a0 as R,T as u,L as F,O as y}from"./index-ixKXqnJp.js";import{u as L}from"./build-etstWp0g.js";import{l as O}from"./build-lcgLXkTN.js";import{c as P,a as g}from"./build-FTXeMWpc.js";import{a as _}from"./build-FAvjNavH.js";import{A as k,C as V}from"./build-ziaGZLXR.js";import{a as D}from"./build-hzvKIp97.js";import{F as N,R as v,M as w}from"./build-VQrlUuND.js";import{I as E}from"./build-lj6x1nL8.js";import{E as B}from"./build-Vt6IWd7y.js";import{V as Q}from"./build-aQwmK1Um.js";import{A as W}from"./build-kGeWkpmF.js";import"./build-0U7rJSAM.js";import"./build-KbTEeZ86.js";import"./build-_JHXRbD6.js";import"./build-6YIPcFHU.js";import"./build-dm4yWFPt.js";import"./build-oHIjvIrR.js";import"./build-dEqz9zUm.js";import"./build-OnzdUfjQ.js";import"./build-01KfIDYg.js";import"./build-aUYrQuCN.js";import"./build-N8x3nlwn.js";import"./build-zH8OCAbq.js";import"./build-zEF68lUW.js";import"./build-LwbiozbY.js";import"./build-ZOc5AsDV.js";import"./build-YOvIjgAO.js";import"./build-M__DqRBL.js";import"./build-QRts0fGp.js";import"./build-GywV9psu.js";import"./build-LPvWp5h1.js";import"./build-pdsvphlv.js";import"./build-LAyEB08K.js";import"./build-GjlXFwqt.js";import"./build-Vrx0FahE.js";import"./build-3mvdD2lh.js";import"./build-Uc7vb3zK.js";const K=(r,o,a)=>{var s;const{phone:h,email:i,name:c}=r,p={name:c,phone:h,email:i,cards:a?[{id:(s=o[0])==null?void 0:s.id,cvv:r==null?void 0:r.cvv}]:(o==null?void 0:o.map(t=>({id:t==null?void 0:t.id,cvv:t==null?void 0:t.cvv})))||[]};return _(p)},U=(r={})=>{const o=S(),a=b(D,r);return{...a,mutate:async(i,c)=>{const{onSuccess:p,onError:s,mutationOptions:t}=c;try{await A.promise(a.mutateAsync(i,t),{pending:"Asignando Tarjetas ...",success:{render({data:l}){return o.invalidateQueries([k.LIST]),o.invalidateQueries([V.CARDS_COMMERCE_LIST]),p(),"Se asignaron las tarjetas con éxito"}}})}catch(l){const d=I(l,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");s(d),A.error(d,{type:M(l)})}}}};function Y({cards:r,onSuccess:o}){const{mutate:a,isLoading:h}=U(),i=T.useMemo(()=>(r==null?void 0:r.length)>0&&r[0].cvv==="",[r]),c=P({name:g().required("El nombre es requerido"),email:g().email("Ingresa un correo valido").required("El correo es requerido"),phone:g().test("longitud","El telefono es muy corto",n=>!(n&&n.replace(/[\s+]/g,"").length<10)),...i&&{cvv:g().min(3,"Debe contener 3 digitos").required("El CVV es requerido")}}),p=L({initialValues:{name:"",phone:"",email:"",...i&&{cvv:""}},validationSchema:c,onSubmit:n=>{const C=K(n,r,i);a(C,{onSuccess:()=>{f(!1),o()},onError:()=>{f(!1)}})}}),{errors:s,touched:t,isSubmitting:l,setFieldValue:d,values:j,setSubmitting:f}=p,x=l||h;return e.jsx(q,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsx(N,{formik:p,children:e.jsxs(m,{spacing:3,sx:{p:3},children:[i&&e.jsx(R,{sx:{textAlign:"center",width:"100%",justifyContent:"center",display:"flex"},severity:"warning",children:e.jsx(u,{variant:"caption",fontWeight:"bold",children:"En caso de no capturar los datos correctos de la tarjeta, la información de la misma podrá ser erronea."})}),e.jsxs(m,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Nombre"}),e.jsx(v,{name:"name",required:!0,placeholder:"Usuario",disabled:x})]}),e.jsxs(m,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Correo Electrónico"}),e.jsx(v,{name:"email",required:!0,placeholder:"usuario@dominio.com",disabled:x,InputProps:{startAdornment:e.jsx(E,{position:"start",children:e.jsx(B,{})})}})]}),e.jsxs(m,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Telefono"}),e.jsx(O,{name:"phone",fullWidth:!0,langOfCountryName:"es",preferredCountries:["MX","US"],continents:["NA","SA"],value:j.phone||"+52",disabled:x,onChange:(n,C)=>{d("phone",n)},error:t.phone&&!!s.phone,helperText:t.phone&&s.phone})]}),i&&e.jsxs(m,{children:[e.jsx(u,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"CVV"}),e.jsx(v,{name:"cvv",fullWidth:!0,required:!0,placeholder:"123",InputProps:{startAdornment:e.jsx(E,{position:"start",children:e.jsx(Q,{})}),inputComponent:w,inputProps:{mask:"000",onAccept:n=>{d("cvv",n)},value:j.cvv}},disabled:x})]}),e.jsx(m,{sx:{pt:3},children:e.jsx(F,{loading:l,variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:e.jsx(W,{}),children:"Asociar"})})]})})})}Y.propTypes={cards:y.array,onSuccess:y.func};export{Y as default};
