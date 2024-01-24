import{f as q,a9 as C,i as e,V as a,M as A,Q as F,B as j,T as t,dv as S,a0 as N,P as L}from"./vendor-_TWOdD6q.js";import{u as T}from"./formik.esm-x3Ufw1qH.js";import{h as E}from"./mui-one-time-password-input.es-Y4GFcdVB.js";import{c as I,a as m,e as R}from"./index.esm-wEzUF-or.js";import{a as B}from"./crypto-4w0xa2KF.js";import{a1 as k,g as V,a as $,i as W,a2 as M,I as O}from"./index-E9ArhrQG.js";import{i as v,m as Q}from"./matchTypes--uN0rjmL.js";import{F as _}from"./TextMaxLine-zzikwzKJ.js";import{R as w}from"./RFPasswordField-PzUPOqpl.js";import"./UploadSingleFile-euJ03TmY.js";import"./fade-FopuCQlG.js";import"./transition-Uc7vb3zK.js";import"./index.esm-5gj1HfC4.js";import"./iconBase-l64xCUfC.js";const G=r=>{const s={code:r==null?void 0:r.authCode,currentPassword:r==null?void 0:r.currentPassword,newPassword:r==null?void 0:r.newPassword,confirmationPassword:r==null?void 0:r.verifyNewPassword};return B(s)},U=(r={})=>{const s=q(k,r);return{...s,mutate:async(p,h)=>{const{onSuccess:c,onError:d,mutationOptions:l}=h;try{await C.promise(s.mutateAsync(p,l),{pending:"Actualizando Contraseña ...",success:{render({data:o}){return v(c)&&c(o),"Se actualizo la contraseña con éxito"}}})}catch(o){const u=V(o,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");v(d)&&d(u),C.error(u,{type:$(o)})}}}},Z=({onSuccess:r})=>{const s=W(),{mutate:g,isLoading:p}=U(),{mutate:h,isLoading:c}=M(),d=I().shape({currentPassword:m().trim().required("La contraseña actual es requerida"),newPassword:m().trim().required("La contraseña nueva es requerida").matches("^(?=(?:.*\\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[_\\-.\\@])\\S{8,16}$","La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula , un número y un carácter especial [ - _ . @]"),verifyNewPassword:m().trim().oneOf([R("newPassword"),null],"Las contraseñas no coinciden").required("La confirmación de la contraseña es requerida"),authCode:m().required("El código de autorización es requerido")}),l=T({initialValues:{currentPassword:"",newPassword:"",verifyNewPassword:"",authCode:""},enableReinitialize:!0,validationSchema:d,onSubmit:(i,{setSubmitting:f,setFieldTouched:D})=>{const z=G(i);g(z,{onSuccess:()=>{f(!1),r()},onError:()=>{f(!1)}})}}),{isSubmitting:o,setFieldValue:u,values:P,errors:x}=l,n=o||p,y=i=>{u("authCode",i)},b=i=>Q(i);return e.jsx(_,{formik:l,children:e.jsxs(a,{spacing:2,p:3,children:[e.jsxs(A,{severity:"info",children:[e.jsx(F,{children:"Código de Autorización"}),"Enviamos un correo electrónico a"," ",e.jsxs(j,{component:"span",fontWeight:"bold",children:[s==null?void 0:s.email," "]}),"con el código de autorización."]}),e.jsxs(a,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Contraseña Actual *"}),e.jsx(w,{size:"small",name:"currentPassword",disabled:n,required:!0,placeholder:"********"})]}),e.jsxs(a,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Contraseña Nueva *"}),e.jsx(w,{size:"small",name:"newPassword",placeholder:"********",disabled:n,required:!0})]}),e.jsxs(a,{spacing:1,children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Repetir Contraseña Nueva *"}),e.jsx(w,{size:"small",placeholder:"********",name:"verifyNewPassword",disabled:n,required:!0})]}),e.jsxs(a,{spacing:1,children:[e.jsxs(a,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(t,{m:0,paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Código de Autorización *"}),e.jsx(O,{size:"small",onClick:h,color:"info",disabled:c,"aria-haspopup":"true",title:"Reenviar",children:e.jsx(S,{width:20,height:20})})]}),e.jsxs(a,{children:[e.jsx(E,{length:6,value:P.authCode,onChange:y,validateChar:b,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:!!x.authCode,disabled:n,size:"small"}}),!!x.authCode&&e.jsx(j,{mt:1,children:e.jsx(t,{variant:"caption",color:"error",children:x.authCode})})]})]}),e.jsx(a,{pt:2,children:e.jsx(N,{loading:n,variant:"contained",color:"primary",fullWidth:!0,type:"submit",sx:{fontWeight:"bold"},children:"Guardar"})})]})})};Z.propTypes={onSuccess:L.func};export{Z as default};
//# sourceMappingURL=ChangePasswordForm-QCKaSN1k.js.map