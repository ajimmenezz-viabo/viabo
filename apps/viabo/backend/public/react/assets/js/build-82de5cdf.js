import{aN as I,aO as S,Z as n,aq as i,r as c,aP as b,ao as h,aQ as f,j as e,aR as v,aS as L,S as x,I as p}from"./build-ff249ccd.js";import{e as o}from"./build-d3854add.js";function w(t){return I("MuiListItemAvatar",t)}S("MuiListItemAvatar",["root","alignItemsFlexStart"]);const A=["className"],j=t=>{const{alignItems:s,classes:a}=t;return L({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},w,a)},y=n("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,a.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>i({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),C=c.forwardRef(function(s,a){const r=b({props:s,name:"MuiListItemAvatar"}),{className:d}=r,m=h(r,A),u=c.useContext(f),l=i({},r,{alignItems:u.alignItems}),g=j(l);return e.jsx(y,i({className:v(g.root,d),ownerState:l,ref:a},m))}),_=C;function B({isOpenSideBar:t}){return e.jsxs(x,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1.5},children:[e.jsx(o,{variant:"circular",width:48,height:48}),t&&e.jsxs(x,{spacing:.5,sx:{flexGrow:1},children:[e.jsx(o,{variant:"text",sx:{width:.5,height:16}}),e.jsx(o,{variant:"text",sx:{width:.25,height:12}})]})]})}const D=n(t=>e.jsx(p,{disableRipple:!0,...t}))(({theme:t})=>({left:0,zIndex:12e3,width:32,height:32,position:"absolute",top:t.spacing(21),borderRadius:"0 12px 12px 0",color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main,boxShadow:t.customShadows.primary,"&:hover":{backgroundColor:t.palette.primary.darker}})),E=n(t=>e.jsx(p,{disableRipple:!0,...t}))(({theme:t})=>({alignItems:"center",justifyContent:"center",boxSizing:"boder-box",display:"inline-flex",outline:"0px",margin:"0px",cursor:"pointer",userSelect:"none",textDecoration:"none",textAlign:"center",borderRadius:"50%",overflow:"visible",color:"rgb(145, 158, 171)",fontSize:"1.125rem",padding:"4px",zIndex:"1500",border:"1px dashed rgba(145, 158, 171, 0.24)",backdropFilter:"blur(6px)",lineHeight:0})),M=320,T=96;export{_ as L,B as S,E as a,D as b,M as c,T as d};