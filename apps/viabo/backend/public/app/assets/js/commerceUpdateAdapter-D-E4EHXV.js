import{bM as f,c as C,f as b}from"./vendor-B39b6gT1.js";import{u as S,C as E}from"./CommerceRegister-DjA6bKwc.js";import{g as N}from"./index-Kl2QvVyT.js";const U=(a={})=>{const{enqueueSnackbar:s}=f(),r=C();return b({mutationFn:S,onSuccess:()=>{r.invalidateQueries([E.COMMERCE_PROCESS]),s("Se actualizo la información del proceso!",{variant:"success"})},onError:e=>{const c=N(e,"No se puede agregar la información al proceso");s(c,{variant:(e==null?void 0:e.status)===500?"error":"warning",autoHideDuration:5e3})},...a})},q=(a,s)=>{const{id:r,idUser:e,services:c,fiscalTypePerson:t,fiscalName:o,rfc:i,commercialName:n,employeesNumber:m,branchesNumber:u,tpvsNumber:p,apiRequired:d,cardsNumber:g,cardsUse:y,customCardsRequired:M,files:P,step:l}=a;return{commerceId:r,fiscalPersonType:t,fiscalName:o,tradeName:n,rfc:i,employees:m,branchOffices:u,pointSaleTerminal:p,paymentApi:d?1:0,registerStep:s??l,services:c}};export{q as C,U as u};
//# sourceMappingURL=commerceUpdateAdapter-D-E4EHXV.js.map