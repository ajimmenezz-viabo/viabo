import{f as c,p as n,h as g,j as i}from"./index-9221899b.js";import{a as u,b as y}from"./formik.esm-602dbdf2.js";const f=c("span")(({theme:o,ownerState:r})=>{const l=o.palette.mode==="light",{color:a,variant:e}=r,p=t=>({color:o.palette[t].contrastText,backgroundColor:o.palette[t].main}),s=t=>({color:o.palette[t].main,backgroundColor:"transparent",border:`1px solid ${o.palette[t].main}`}),d=t=>({color:o.palette[t][l?"dark":"light"],backgroundColor:g(o.palette[t].main,.16)});return{height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:o.spacing(0,1),color:o.palette.grey[800],fontSize:o.typography.pxToRem(12),fontFamily:o.typography.fontFamily,backgroundColor:o.palette.grey[300],fontWeight:o.typography.fontWeightBold,...a!=="default"?{...e==="filled"&&{...p(a)},...e==="outlined"&&{...s(a)},...e==="ghost"&&{...d(a)}}:{...e==="outlined"&&{backgroundColor:"transparent",color:o.palette.text.primary,border:`1px solid ${o.palette.grey[50032]}`},...e==="ghost"&&{color:l?o.palette.text.secondary:o.palette.common.white,backgroundColor:o.palette.grey[50016]}}}});b.propTypes={children:n.node,color:n.oneOf(["default","primary","secondary","info","success","warning","error"]),variant:n.oneOf(["filled","outlined","ghost"])};function b({color:o="default",variant:r="ghost",children:l,...a}){return i(f,{ownerState:{color:o,variant:r},...a,children:l})}x.propTypes={children:n.node.isRequired,formik:n.object.isRequired};function x({children:o,formik:r}){return i(u,{value:r,children:i(y,{onSubmit:r.handleSubmit,children:o})})}export{x as F,b as L};
