import{r as y,i as e,V as s,T as o,B as l,X as A,C as E,aI as I,O as V}from"./vendor-StReGf79.js";import{h as b}from"./mui-one-time-password-input.es-QSNmYJgP.js";import{a6 as k,ab as B,q as m}from"./index-mKe_odg3.js";import{u as D}from"./useValidateCode-7OGdrwDG.js";import{m as L}from"./matchTypes-VzXr5CmM.js";import{u as n,C as h}from"./RegisterCards-4ZP4_i7G.js";import"./iconBase-cjdMeG85.js";function G(){const t=n(r=>r.setStepAssignRegister),a=n(r=>r.user),i=n(r=>r.token),[x,d]=y.useState(""),{mutate:p,isLoading:u}=k(),{mutate:g,isLoading:C,isError:c,reset:j}=D(),v=r=>{d(r),j()},S=(r,T)=>L(r),f=r=>{m.defaults.headers.common.Authorization=`Bearer ${i}`,g({verificationCode:r,token:i},{onSuccess:()=>{t(h.CARD_REGISTER)},onError:()=>{d("")}})},R=()=>{m.defaults.headers.common.Authorization=`Bearer ${i}`,p()};return e.jsxs(s,{children:[e.jsx(B,{}),e.jsx(o,{variant:"h4",color:"textPrimary",align:"center",children:"Estamos a un paso de validar tu identidad"}),e.jsxs(o,{paragraph:!0,sx:{mb:4},align:"center",variant:"body2",color:"text.secondary",whiteSpace:"pre-line",children:["Revisa tu correo electrónico ",(a==null?void 0:a.email)||"-"," e ingresa el código de verificación."]}),e.jsx(b,{length:6,value:x,onComplete:f,onChange:v,validateChar:S,sx:{gap:{xs:1.5,sm:2,md:3}},TextFieldsProps:{placeholder:"-",error:c,disabled:C}}),!!c&&e.jsx(l,{mt:1,children:e.jsx(o,{variant:"caption",color:"error",children:"Código incorrecto"})}),e.jsx(l,{children:e.jsx(A,{sx:{my:4},children:e.jsx(s,{direction:"row",spacing:1,justifyContent:"center",children:u?e.jsx(E,{wid:!0,sx:{mx:3}}):e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"body2",children:"¿No tengo un código?"}),e.jsx(I,{underline:"hover",sx:{cursor:"pointer"},onClick:R,children:e.jsx(o,{variant:"body2",color:"primary",children:"Reenviar código"})})]})})})}),e.jsx(s,{px:5,children:e.jsx(V,{size:"large",variant:"outlined",color:"inherit",onClick:()=>{t(h.CARD_VALIDATION)},children:"Cancelar"})})]})}export{G as default};
//# sourceMappingURL=FormDemoUserValidation-en4frFku.js.map