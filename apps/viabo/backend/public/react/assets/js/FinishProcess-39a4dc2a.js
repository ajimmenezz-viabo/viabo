import{p as a,c as o,S as n,j as s,B as i,T as p,d as c}from"./index-68e3b10c.js";import{p as l}from"./CommerceRegister-f6800c3f.js";import{P as m}from"./processList-695b9228.js";import"./middleware-5838e949.js";import"./integracion-tecnologica-11ba68ca.js";import"./Grid-701ea119.js";const u="/react/assets/img/support-09d20c93.svg";d.propTypes={store:a.shape(l)};function d({store:t}){const{setActualProcess:r,setLastProcess:e}=t;return o(n,{spacing:5,children:[s(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:s("img",{className:"animate__animated animate__pulse",src:u,width:"50%",alt:"Support Assistant"})}),s(p,{variant:"h3",color:"textPrimary",align:"center",children:"Un asesor de Viabo se contactará para brindarle un mejor seguimiento a su proceso"}),s(c,{color:"primary",variant:"outlined",onClick:()=>{r(m.REGISTER),e()},fullWidth:!0,sx:{textTransform:"uppercase"},children:"Entendido"})]})}export{d as default};
