import{k as j,a as V,Q as E,g as b,b as A,r as C,j as n,S,E as I,B as M,U as B,O as e}from"./index-y5qwZYHa.js";import{u as O}from"./build-PJPIYBgW.js";import{c as P,M as T}from"./build-rl1puqFr.js";import{g as z}from"./build-_PAbdHB1.js";import{F,a as N}from"./build-SDHWuAcQ.js";import{i as k}from"./build-BezCRUW3.js";import"./build-fZ1OI_r5.js";import"./build-rOWLAZOn.js";import"./build-Yn4D2ea6.js";import"./build-A0pkRIS4.js";import"./build-lxkDiRmu.js";import"./build-opCDIkM4.js";import"./build-QtGFkQWE.js";import"./build-1tNQEUgO.js";import"./build-EPVZwbdT.js";import"./build-JW4Zm_e-.js";import"./build-yK9xw9pv.js";import"./build-fxHra5tZ.js";import"./build-Rz0-vvWC.js";import"./build-iz_J-lP_.js";import"./build-yf-Tt6eY.js";import"./build-Mfr-2waq.js";import"./build-zH8OCAbq.js";import"./build-zEF68lUW.js";import"./build-SRt7phYD.js";import"./build-Uc7vb3zK.js";const w=(a={})=>{const f=j(),s=V(P,a);return{...s,mutate:async(i,o)=>{const{onSuccess:r,onError:m,mutationOptions:u}=o;try{await E.promise(s.mutateAsync(i,u),{pending:"Actualizando Servicio ...",success:{render({data:l}){return f.invalidateQueries([T.COMMERCE_LIST]),k(r)&&r(l),"Se actualizo el servicio del comercio con éxito"}}})}catch(l){const d=b(l,"No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas");k(m)&&m(d),E.error(d,{type:A(l)})}}}},y=[{name:"VIABO CARD",type:"2",formikValue:"viaboCard"},{name:"VIABO PAY",type:"1",formikValue:"viaboPay"},{name:"NUBE",type:"3",formikValue:"cloud"}],R=({commerce:a})=>{var g;const{mutate:f,isLoading:s}=w(),[x,i]=C.useState(null),o=(g=a==null?void 0:a.services)==null?void 0:g.catalog,r=C.useMemo(()=>y==null?void 0:y.map(t=>{const p=z(t==null?void 0:t.name);return{...t,logo:p==null?void 0:p.component}}),[y]),m=O({initialValues:{viaboPay:(o==null?void 0:o.some(t=>(t==null?void 0:t.type)==="1"))||!1,viaboCard:(o==null?void 0:o.some(t=>(t==null?void 0:t.type)==="2"))||!1,cloud:(o==null?void 0:o.some(t=>(t==null?void 0:t.type)==="3"))||!1},enableReinitialize:!0}),{values:u,setFieldValue:l}=m,d=t=>p=>{i(t==null?void 0:t.type);const h=!u[t==null?void 0:t.formikValue];f({commerceId:a==null?void 0:a.id,type:t==null?void 0:t.type,active:h?"1":"0"},{onSuccess:()=>{l(t==null?void 0:t.formikValue,h),i(null)},onError:()=>{i(null)}})};return n.jsx(F,{formik:m,children:n.jsx(S,{spacing:2,p:5,divider:n.jsx(I,{orientation:"horizontal",flexItem:!0,sx:{borderStyle:"dashed"}}),children:r==null?void 0:r.map(t=>{const p=t.logo;return n.jsxs(S,{justifyContent:"space-between",flexDirection:"row",alignItems:"center",children:[p&&n.jsx(M,{py:1,children:n.jsx(p,{sx:{width:35,height:35}})}),x===(t==null?void 0:t.type)?n.jsx(B,{size:30,containerProps:{display:"flex",ml:1}}):n.jsx(N,{disabled:s,size:"md",color:u[t==null?void 0:t.formikValue]?"success":"error",checked:!!u[t==null?void 0:t.formikValue]||!1,inputProps:{"aria-label":"controlled"},onChange:d(t)})]},t==null?void 0:t.name)})})})};R.propTypes={commerce:e.shape({id:e.any,services:e.shape({catalog:e.array})})};export{R as default};
