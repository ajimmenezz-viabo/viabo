import{P as a,r as s,aM as t,aw as o,i as e,V as c,I as w,bt as O,bu as v,B as y,O as f,aL as B,Y as k,Z as F,_ as I,$ as P,X as T}from"./vendor-VdGvLetj.js";import{D as E}from"./index.es-0GaMr3jB.js";import{g as S}from"./formatTime-26vjoVpy.js";import{j as W}from"./index-W5_PJt9d.js";const q=({startDate:n,endDate:i,onChangeDateRange:u,loading:r,onOpenBalance:m,hideBalance:h=!1})=>{const g=s.useMemo(()=>S(),[]),M=s.useRef(null),j=W("down","md"),[l,p]=s.useState(!1),[b,x]=s.useState(l),d=()=>{p(!l),l||x(!0)},C=s.useMemo(()=>n?t(n,"dd MMMM yyyy",{locale:o}):t(new Date,"dd MMMM yyyy",{locale:o}),[n]),D=s.useMemo(()=>i?t(i,"dd MMMM yyyy",{locale:o}):t(new Date,"dd MMMM yyyy",{locale:o}),[i]),R=`${C} - ${D}`;return e.jsxs(e.Fragment,{children:[e.jsxs(c,{py:2,px:1,flexDirection:{lg:"row"},justifyContent:"space-between",alignItems:"center",gap:1,children:[e.jsxs(c,{flex:1,width:1,direction:"row",spacing:.5,children:[e.jsx(w,{disabled:!!r,onClick:d,size:"small",children:e.jsx(O,{})}),e.jsx(c,{flex:1,children:e.jsx(v,{placeholder:"Fecha inicial - Fecha final",value:R,fullWidth:!0,type:"text",variant:"outlined",size:"small",disabled:!!r,onClick:d,InputProps:{readOnly:!0}})})]}),e.jsx(y,{display:"flex",flexGrow:1}),e.jsx(y,{display:"flex",flexGrow:1,justifyContent:"flex-end",children:!h&&e.jsx(f,{variant:"contained",color:"secondary",disabled:!!r,startIcon:e.jsx(B,{}),sx:{color:"text.primary",fontWeight:"bolder"},onClick:m,children:"Ver Balance del Periodo"})}),e.jsxs(k,{open:b,ref:M,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",maxWidth:"md",children:[e.jsx(F,{variant:"subtitle1",fontWeight:"bolder",sx:{mb:2},id:"scroll-dialog-title",children:"Confirma las fechas seleccionadas"}),e.jsx(I,{id:"scroll-dialog-description",dividers:!0,children:e.jsx(E,{open:l,onChange:u,verticalOrientation:j,toggle:d,locale:o,definedRanges:g,closeOnClickOutside:!1,wrapperClassName:"simple-date-range"})}),e.jsx(P,{children:e.jsx(f,{variant:"contained",color:"primary",onClick:()=>{x(!1),setTimeout(()=>{p(!1)},200)},children:"Hecho"})})]})]}),e.jsx(T,{sx:{borderStyle:"dashed"}})]})};q.propTypes={endDate:a.any.isRequired,loading:a.any,onChangeDateRange:a.func.isRequired,onOpenBalance:a.func,startDate:a.any.isRequired,hideBalance:a.bool};export{q as C};
//# sourceMappingURL=CardMovementsHeader-id-ohlEZ.js.map