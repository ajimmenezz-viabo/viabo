import{j as e,S as l,T as s,D as m,O as t}from"./index-e73cf17b.js";import{a as c}from"./build-4a40c88d.js";import"./build-02458b41.js";import{q as j}from"./build-8193b4a1.js";import{T as d,k as g,l as b,m as r,n,o as u}from"./build-dba47033.js";import"./build-c6c15f5a.js";import"./build-542501a4.js";import"./build-605ae648.js";import"./build-89d6f61d.js";import"./build-5033c3a7.js";import"./build-de5e9f77.js";import"./build-a2715f08.js";import"./build-0c8c73a4.js";import"./build-08243790.js";import"./build-7101bc47.js";import"./build-34e19a43.js";import"./build-ac55763c.js";import"./build-7c7c485c.js";const v=({open:h,onClose:p,card:i,dateRange:a})=>{var x;return e.jsx(c,{open:h,handleClose:p,titleElement:e.jsxs(l,{spacing:.5,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Balance del periodo seleccionado"}),a&&e.jsx(s,{variant:"subtitle2",gutterBottom:!0,textTransform:"capitalize",children:a})]}),children:e.jsx(m,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:e.jsxs(l,{spacing:1,pt:2,children:[e.jsxs(l,{alignItems:"center",children:[e.jsxs(l,{direction:"row",spacing:1,children:[e.jsx(s,{variant:"h2",color:(x=i==null?void 0:i.balanceMovements)!=null&&x.includes("-")?"error":"success.main",children:i==null?void 0:i.balanceMovements}),e.jsx(s,{variant:"caption",children:"MXN"})]}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(s,{variant:"h6",color:"success.main",children:i==null?void 0:i.income}),e.jsx(j,{sx:{fontSize:24},children:" / "}),e.jsxs(s,{variant:"h6",color:"error",children:["-",i==null?void 0:i.expenses]})]})]}),e.jsxs(l,{children:[e.jsx(l,{flex:1,sx:{backgroundColor:o=>o.palette.background.neutral}}),e.jsx(d,{sx:{minWidth:200},children:e.jsxs(g,{children:[e.jsx(b,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:e.jsxs(r,{children:[e.jsx(n,{align:"left",children:e.jsx(s,{variant:"h6",children:"Gastos"})}),e.jsx(n,{align:"right"})]})}),e.jsxs(u,{children:[e.jsxs(r,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[e.jsx(n,{align:"left",children:e.jsx(s,{variant:"subtitle2",children:"Comprobado con Factura"})}),e.jsx(n,{align:"right",children:i==null?void 0:i.expensesWithInvoice})]}),e.jsxs(r,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[e.jsx(n,{align:"left",children:e.jsx(s,{variant:"subtitle2",children:"Comprobado sin Factura"})}),e.jsx(n,{align:"right",children:i==null?void 0:i.expensesWithoutInvoice})]}),e.jsxs(r,{sx:{borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[e.jsx(n,{align:"left",children:e.jsx(s,{variant:"subtitle2",children:"Sin comprobar"})}),e.jsx(n,{align:"right",children:i==null?void 0:i.expensesWithoutChecked})]}),e.jsxs(r,{children:[e.jsx(n,{colSpan:1}),e.jsx(n,{align:"right",width:120,children:e.jsx(s,{variant:"subtitle1",children:i==null?void 0:i.totalExpensesOtherCharges})})]})]})]})})]})]})})})};v.propTypes={card:t.shape({balanceMovements:t.any,expenses:t.any,expensesWithInvoice:t.any,expensesWithoutChecked:t.any,expensesWithoutInvoice:t.any,income:t.any,totalExpensesOtherCharges:t.any}),dateRange:t.string,onClose:t.func,open:t.bool};export{v as default};
