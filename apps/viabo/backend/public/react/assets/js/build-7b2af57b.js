import{r as c,j as r,S as a,T as o,a7 as d,I as h,d0 as j,aU as m,aB as f,L as g}from"./build-5885a497.js";import{u as S}from"./build-984b3412.js";import{R as b}from"./build-6e151cd8.js";import"./build-a3405297.js";import{F,R,a as y}from"./build-ebd5bc51.js";import{R as I}from"./build-85d049c1.js";import{S as w}from"./build-bf320aec.js";import"./build-9f964f93.js";import"./build-4ec2ea70.js";import"./build-bee6630b.js";import"./build-ecaf0d13.js";import"./build-009a24e3.js";import"./build-4c4ba0aa.js";import"./build-8254f016.js";import"./build-e08f604e.js";import"./build-23e0dc4d.js";import"./build-90d696a1.js";function C({open:p,setOpen:e,selectedMovement:i}){const n=(i==null?void 0:i.type)==="ingreso",[s,t]=c.useState(!0),x=()=>{e(!1)},u=S({initialValues:{description:"",category:null,files:[]},onSubmit:l=>{}});return r.jsxs(b,{open:p,handleClose:x,title:"Incidencia",children:[r.jsxs(a,{flexDirection:"column",alignItems:"center",justifyContent:"space-between",spacing:0,p:5,children:[r.jsx(o,{variant:"subtitle1",children:"Movimiento "}),r.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[r.jsx(o,{variant:"h3",color:n?"success.main":"error",children:`${n?`+ ${i==null?void 0:i.amount}`:`- ${i==null?void 0:i.amount}`}`}),r.jsx(o,{variant:"caption",color:n?"success.main":"error",children:"MXN"})]}),r.jsxs(o,{variant:"caption",color:"text.disabled",children:[i==null?void 0:i.fullDate," "]})]}),r.jsx(d,{containerProps:{sx:{flexGrow:0,height:"auto"}},children:r.jsx(F,{formik:u,children:r.jsxs(a,{spacing:2,sx:{p:3},children:[r.jsxs(a,{children:[r.jsx(o,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Categoria:"}),r.jsx(I,{name:"category",textFieldParams:{placeholder:"Seleccionar ...",required:!0},options:[{label:"Fraude",value:"1"},{label:"Contracargo",value:"2"}]})]}),r.jsxs(a,{children:[r.jsx(o,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Descripcion:"}),r.jsx(R,{name:"description",required:!0,multiline:!0,rows:2,placeholder:"Motivo del cargo desconocido .."})]}),r.jsxs(a,{spacing:3,children:[r.jsxs(a,{flexDirection:"row",alignItems:"center",width:1,sx:{cursor:"pointer"},onClick:()=>t(l=>!s),children:[r.jsx(o,{variant:"overline",sx:{color:"text.disabled",width:1},children:"Evidencias:"}),r.jsx(h,{onClick:()=>t(l=>!s),children:s?r.jsx(j,{}):r.jsx(m,{})})]}),r.jsx(f,{in:s,timeout:"auto",children:r.jsx(y,{name:"files",maxSize:3145728,accept:{"image/*":[".jpeg",".png"],"application/pdf":[".pdf"]}})})]}),r.jsx(a,{sx:{pt:3},children:r.jsx(g,{variant:"contained",color:"primary",fullWidth:!0,type:"submit",startIcon:r.jsx(w,{}),children:"Enviar"})})]})})})]})}const W=c.memo(C);export{W as default};
