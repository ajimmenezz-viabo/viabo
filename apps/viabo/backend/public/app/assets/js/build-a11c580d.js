import{j as r,r as p,S as a,T as o,D as h,I as j,L as f}from"./index-e73cf17b.js";import{r as g,i as v,d as S,b}from"./build-de5e9f77.js";import{u as R}from"./build-5fb868c5.js";import{a as F}from"./build-4a40c88d.js";import"./build-02458b41.js";import{F as I,R as y}from"./build-c9934e06.js";import{R as E}from"./build-82ca0050.js";import{R as C}from"./build-125e0389.js";import{S as _}from"./build-92fce651.js";import"./build-605ae648.js";import"./build-a2715f08.js";import"./build-0c8c73a4.js";import"./build-c6c15f5a.js";import"./build-542501a4.js";import"./build-7c7c485c.js";import"./build-5033c3a7.js";import"./build-8193b4a1.js";import"./build-178dbaa7.js";import"./build-bee6630b.js";import"./build-ac55763c.js";import"./build-dba47033.js";import"./build-89d6f61d.js";import"./build-08243790.js";import"./build-7101bc47.js";import"./build-34e19a43.js";var e={},w=v;Object.defineProperty(e,"__esModule",{value:!0});var c=e.default=void 0,D=w(g()),L=r,k=(0,D.default)((0,L.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");c=e.default=k;function q({open:u,setOpen:x,selectedMovement:i}){const s=(i==null?void 0:i.type)==="ingreso",[t,n]=p.useState(!1),d=()=>{x(!1),n(!1)},m=R({initialValues:{description:"",category:null,files:[]},onSubmit:l=>{}});return r.jsxs(F,{open:u,handleClose:d,title:"Incidencia",children:[r.jsxs(a,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,p:5,children:[r.jsx(o,{variant:"subtitle1",children:"Movimiento "}),r.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[r.jsx(o,{variant:"h3",color:s?"success.main":"error",children:`${s?`+ ${i==null?void 0:i.amountFormat}`:`- ${i==null?void 0:i.amountFormat}`}`}),r.jsx(o,{variant:"caption",color:s?"success.main":"error",children:"MXN"})]}),r.jsxs(o,{variant:"caption",color:"text.disabled",children:[i==null?void 0:i.fullDate," "]})]}),r.jsx(h,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:r.jsx(I,{formik:m,children:r.jsxs(a,{spacing:2,sx:{p:3},children:[r.jsxs(a,{children:[r.jsx(o,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Categoria:"}),r.jsx(E,{name:"category",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:[{label:"Fraude",value:"1"},{label:"Contracargo",value:"2"}]})]}),r.jsxs(a,{children:[r.jsx(o,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Descripcion:"}),r.jsx(C,{name:"description",required:!0,multiline:!0,rows:2,placeholder:"Motivo del cargo desconocido .."})]}),r.jsxs(a,{spacing:3,children:[r.jsxs(a,{flexDirection:"row",alignItems:"center",width:1,sx:{cursor:"pointer"},onClick:()=>n(l=>!t),children:[r.jsx(o,{variant:"overline",sx:{color:"text.disabled",width:1},children:"Evidencias:"}),r.jsx(j,{onClick:()=>n(l=>!t),children:t?r.jsx(c,{}):r.jsx(S,{})})]}),r.jsx(b,{in:t,timeout:"auto",children:r.jsx(y,{name:"files",maxSize:3145728,accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]}})})]}),r.jsx(a,{sx:{pt:3},children:r.jsx(f,{variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:r.jsx(_,{}),children:"Enviar"})})]})})})]})}const sr=p.memo(q);export{sr as default};
