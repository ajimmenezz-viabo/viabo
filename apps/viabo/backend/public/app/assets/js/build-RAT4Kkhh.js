import{j as e,S as l,T as i,D as c,O as t}from"./index-uf0rlXc3.js";import{a as m}from"./build--Hpn1XPp.js";import"./build-0n9aYzfv.js";import{q as j}from"./build-gzzdWRH-.js";import{T as d,s as g,t as b,u as r,v as n,w as u}from"./build-b1ST9i6W.js";import"./build-TQSbHIda.js";import"./build-cbZN2ucd.js";import"./build-DaLTkvGJ.js";import"./build-Om2RpeG4.js";import"./build-OGvlSQZv.js";import"./build-YMH39fBE.js";import"./build-38HIMMdA.js";import"./build-WVKOg0-x.js";import"./build-5q97hjQz.js";import"./build-3AyMUiN8.js";import"./build-972ZQj3z.js";const v=({open:h,onClose:p,card:s,dateRange:a})=>{var x;return e.jsx(m,{open:h,handleClose:p,titleElement:e.jsxs(l,{spacing:.5,children:[e.jsx(i,{variant:"h6",gutterBottom:!0,children:"Balance del periodo seleccionado"}),a&&e.jsx(i,{variant:"subtitle2",gutterBottom:!0,textTransform:"capitalize",children:a})]}),children:e.jsx(c,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsxs(l,{spacing:1,pt:2,children:[e.jsxs(l,{alignItems:"center",children:[e.jsxs(l,{direction:"row",spacing:1,children:[e.jsx(i,{variant:"h2",color:(x=s==null?void 0:s.balanceMovements)!=null&&x.includes("-")?"error":"success.main",children:s==null?void 0:s.balanceMovements}),e.jsx(i,{variant:"caption",children:"MXN"})]}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{variant:"h6",color:"success.main",children:s==null?void 0:s.income}),e.jsx(j,{sx:{fontSize:24},children:" / "}),e.jsxs(i,{variant:"h6",color:"error",children:["-",s==null?void 0:s.expenses]})]})]}),e.jsxs(l,{children:[e.jsx(l,{flex:1,sx:{backgroundColor:o=>o.palette.background.neutral}}),e.jsx(d,{sx:{minWidth:200},children:e.jsxs(g,{children:[e.jsx(b,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:e.jsxs(r,{children:[e.jsx(n,{align:"left",children:e.jsx(i,{variant:"h6",children:"Gastos"})}),e.jsx(n,{align:"right"})]})}),e.jsxs(u,{children:[e.jsxs(r,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[e.jsx(n,{align:"left",children:e.jsx(i,{variant:"subtitle2",children:"Comprobado con Factura"})}),e.jsx(n,{align:"right",children:s==null?void 0:s.expensesWithInvoice})]}),e.jsxs(r,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[e.jsx(n,{align:"left",children:e.jsx(i,{variant:"subtitle2",children:"Comprobado sin Factura"})}),e.jsx(n,{align:"right",children:s==null?void 0:s.expensesWithoutInvoice})]}),e.jsxs(r,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[e.jsx(n,{align:"left",children:e.jsx(i,{variant:"subtitle2",children:"Sin comprobar"})}),e.jsx(n,{align:"right",children:s==null?void 0:s.expensesWithoutChecked})]}),e.jsxs(r,{children:[e.jsx(n,{colSpan:1}),e.jsx(n,{align:"right",width:120,children:e.jsx(i,{variant:"subtitle1",children:s==null?void 0:s.totalExpensesOtherCharges})})]})]})]})})]})]})})})};v.propTypes={card:t.shape({balanceMovements:t.any,expenses:t.any,expensesWithInvoice:t.any,expensesWithoutChecked:t.any,expensesWithoutInvoice:t.any,income:t.any,totalExpensesOtherCharges:t.any}),dateRange:t.string,onClose:t.func,open:t.bool};export{v as default};
