import{r as c,j as r,S as a,T as o,V as d,I as m,dR as h,Y as j,Z as f,L as g}from"./build-fdd13b39.js";import{o as S,R as b}from"./build-07e553f8.js";import{R}from"./build-ab35f0f9.js";import{u as F}from"./build-775620b9.js";import{F as y,R as I}from"./build-5b9ebb46.js";import{S as w}from"./build-accac9d4.js";import"./build-e396f403.js";import"./build-8f07a84a.js";import"./build-bee6630b.js";import"./build-880085cf.js";import"./build-ec27f491.js";import"./build-ecaf0d13.js";import"./build-dd769c84.js";import"./build-15d04469.js";import"./build-4c7a154f.js";import"./build-9d6dab17.js";import"./build-1977a01a.js";import"./build-3ae8d215.js";import"./build-73d9737b.js";import"./build-a8992a6d.js";import"./build-d614a661.js";function C({open:p,setOpen:e,selectedMovement:i}){const t=(i==null?void 0:i.type)==="ingreso",[s,n]=c.useState(!0),x=()=>{e(!1)},u=F({initialValues:{description:"",category:null,files:[]},onSubmit:l=>{}});return r.jsxs(S,{open:p,handleClose:x,title:"Incidencia",children:[r.jsxs(a,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,p:5,children:[r.jsx(o,{variant:"subtitle1",children:"Movimiento "}),r.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[r.jsx(o,{variant:"h3",color:t?"success.main":"error",children:`${t?`+ ${i==null?void 0:i.amount}`:`- ${i==null?void 0:i.amount}`}`}),r.jsx(o,{variant:"caption",color:t?"success.main":"error",children:"MXN"})]}),r.jsxs(o,{variant:"caption",color:"text.disabled",children:[i==null?void 0:i.fullDate," "]})]}),r.jsx(d,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:r.jsx(y,{formik:u,children:r.jsxs(a,{spacing:2,sx:{p:3},children:[r.jsxs(a,{children:[r.jsx(o,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Categoria:"}),r.jsx(b,{name:"category",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:[{label:"Fraude",value:"1"},{label:"Contracargo",value:"2"}]})]}),r.jsxs(a,{children:[r.jsx(o,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Descripcion:"}),r.jsx(R,{name:"description",required:!0,multiline:!0,rows:2,placeholder:"Motivo del cargo desconocido .."})]}),r.jsxs(a,{spacing:3,children:[r.jsxs(a,{flexDirection:"row",alignItems:"center",width:1,sx:{cursor:"pointer"},onClick:()=>n(l=>!s),children:[r.jsx(o,{variant:"overline",sx:{color:"text.disabled",width:1},children:"Evidencias:"}),r.jsx(m,{onClick:()=>n(l=>!s),children:s?r.jsx(h,{}):r.jsx(j,{})})]}),r.jsx(f,{in:s,timeout:"auto",children:r.jsx(I,{name:"files",maxSize:3145728,accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]}})})]}),r.jsx(a,{sx:{pt:3},children:r.jsx(g,{variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:r.jsx(w,{}),children:"Enviar"})})]})})})]})}const A=c.memo(C);export{A as default};
