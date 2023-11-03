import{j as i,S as n,T as s,D as m,N as e}from"./index-3809032b.js";import{a as c}from"./build-02647ec5.js";import"./build-d59f6763.js";import{F as j}from"./build-4389c83a.js";import{k as a,l as g,m as u,T as d,n as t,o as v}from"./build-1adb5778.js";import"./build-9f005fe0.js";import"./build-ff91dbf2.js";import"./build-53b11780.js";import"./build-b0677c31.js";import"./build-46916aa3.js";import"./build-2b227f05.js";import"./build-c6f78c0d.js";import"./build-6fc59234.js";import"./build-381d8d7c.js";import"./build-7637d2c3.js";import"./build-4d4aa58d.js";import"./build-566d20b3.js";import"./build-f831d8b4.js";const f=({open:l,onClose:p,balance:r,dateRange:x})=>{var h;return i.jsx(c,{open:l,handleClose:p,titleElement:i.jsxs(n,{spacing:.5,children:[i.jsx(s,{variant:"h6",gutterBottom:!0,children:"Balance del periodo seleccionado"}),x&&i.jsx(s,{variant:"subtitle2",gutterBottom:!0,textTransform:"capitalize",children:x})]}),children:i.jsx(m,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:i.jsxs(n,{spacing:1,pt:2,children:[i.jsxs(n,{alignItems:"center",children:[i.jsxs(n,{direction:"row",spacing:1,children:[i.jsx(s,{variant:"h2",color:(h=r==null?void 0:r.balanceMovements)!=null&&h.includes("-")?"error":"success.main",children:r==null?void 0:r.balanceMovements}),i.jsx(s,{variant:"caption",children:"MXN"})]}),i.jsxs(n,{direction:"row",alignItems:"center",spacing:1,children:[i.jsx(s,{variant:"h6",color:"success.main",children:r==null?void 0:r.income}),i.jsx(j,{sx:{fontSize:24},children:" / "}),i.jsxs(s,{variant:"h6",color:"error",children:["-",r==null?void 0:r.expenses]})]})]}),i.jsxs(n,{children:[i.jsx(n,{flex:1,sx:{backgroundColor:o=>o.palette.background.neutral}}),i.jsx(a,{sx:{minWidth:200},children:i.jsxs(g,{children:[i.jsx(u,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:i.jsxs(d,{children:[i.jsx(t,{align:"left",children:i.jsx(s,{variant:"h6",children:"Gastos"})}),i.jsx(t,{align:"right"})]})}),i.jsxs(v,{children:[i.jsxs(d,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[i.jsx(t,{align:"left",children:i.jsx(s,{variant:"subtitle2",children:"Comprobado con Factura"})}),i.jsx(t,{align:"right",children:r==null?void 0:r.expensesWithInvoice})]}),i.jsxs(d,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[i.jsx(t,{align:"left",children:i.jsx(s,{variant:"subtitle2",children:"Comprobado sin Factura"})}),i.jsx(t,{align:"right",children:r==null?void 0:r.expensesWithoutInvoice})]}),i.jsxs(d,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[i.jsx(t,{align:"left",children:i.jsx(s,{variant:"subtitle2",children:"Sin comprobar"})}),i.jsx(t,{align:"right",children:r==null?void 0:r.expensesWithoutChecked})]}),i.jsxs(d,{children:[i.jsx(t,{colSpan:1}),i.jsx(t,{align:"right",width:120,children:i.jsx(s,{variant:"subtitle1",children:r==null?void 0:r.totalExpensesOtherCharges})})]})]})]})})]})]})})})};f.propTypes={balance:e.shape({balanceMovements:e.any,expenses:e.any,expensesWithInvoice:e.any,expensesWithoutChecked:e.any,expensesWithoutInvoice:e.any,income:e.any,totalExpensesOtherCharges:e.any}),dateRange:e.string,onClose:e.func,open:e.bool};export{f as default};
