import{ai as i,r as u,k as c,a as l,g as m,b as S}from"./index-3809032b.js";import{C}from"./build-c7ce8ef2.js";import{e as E}from"./build-78fd7f79.js";const p={LIST:"commerce-all-cards"},D=(s={})=>{const{enqueueSnackbar:t}=i(),[n,r]=u.useState(null),o=c();return{...l(E,{onSuccess:e=>{r(null),o.refetchQueries([C.CARD_INFO,e==null?void 0:e.id]),o.invalidateQueries([p.LIST]),t(e!=null&&e.cardON?"Se encendió la tarjeta con éxito":"Se apagó la tarjeta con éxito",{variant:"success",autoHideDuration:5e3})},onError:e=>{const a=m(e,"No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas");t(a,{variant:S(e),autoHideDuration:5e3}),r(a)},...s}),error:n||null}};export{p as A,D as u};
