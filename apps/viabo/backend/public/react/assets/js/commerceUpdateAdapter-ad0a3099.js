import{k as f,u as C,l as N}from"./index-a5b9a34e.js";import{e as S,C as b}from"./CommerceRegister-0ebd4dc3.js";import{u as E}from"./useMutation-46b372a0.js";const U=(s={})=>{const{enqueueSnackbar:a}=f(),r=C();return E({mutationFn:S,onSuccess:()=>{r.invalidateQueries([b.COMMERCE_PROCESS]),a("Se actualizo la información del proceso!",{variant:"success"})},onError:e=>{const t=N(e,"No se puede agregar la información al proceso");a(t,{variant:(e==null?void 0:e.status)===500?"error":"warning",autoHideDuration:5e3})},...s})},k=(s,a)=>{const{id:r,idUser:e,services:t,fiscalTypePerson:c,fiscalName:o,rfc:i,commercialName:n,employeesNumber:m,branchesNumber:u,tpvsNumber:p,apiRequired:l,cardsNumber:g,cardsUse:y,customCardsRequired:P,files:v,step:d}=s;return{commerceId:r,fiscalPersonType:c,taxName:o,tradeName:n,rfc:i,employees:m,branchOffices:u,pointSaleTerminal:p,paymentApi:l?1:0,registerStep:a??d,services:t}};export{k as C,U as u};
