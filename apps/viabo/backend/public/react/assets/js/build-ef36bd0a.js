import{aj as I,ai as b,Z as i,aa as n,r as c,am as S,a8 as f,aG as h,j as e,an as v,ao as C,S as x,I as p}from"./index-0c89b1fb.js";import{f as o}from"./build-564bfe9d.js";function k(t){return I("MuiListItemAvatar",t)}b("MuiListItemAvatar",["root","alignItemsFlexStart"]);const w=["className"],L=t=>{const{alignItems:a,classes:s}=t;return C({root:["root",a==="flex-start"&&"alignItemsFlexStart"]},k,s)},j=i("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.root,s.alignItems==="flex-start"&&a.alignItemsFlexStart]}})(({ownerState:t})=>n({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),A=c.forwardRef(function(a,s){const r=S({props:a,name:"MuiListItemAvatar"}),{className:d}=r,u=f(r,w),m=c.useContext(h),l=n({},r,{alignItems:m.alignItems}),g=L(l);return e.jsx(j,n({className:v(g.root,d),ownerState:l,ref:s},u))}),z=A;function B({isOpenSideBar:t}){return e.jsxs(x,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1.5},children:[e.jsx(o,{sx:{backgroundColor:"background.paper"},variant:"circular",width:48,height:48}),t&&e.jsxs(x,{spacing:.5,sx:{flexGrow:1},children:[e.jsx(o,{variant:"text",sx:{width:.5,height:16,backgroundColor:"background.paper"}}),e.jsx(o,{variant:"text",sx:{width:.25,height:12,backgroundColor:"background.paper"}})]})]})}const _=i(t=>e.jsx(p,{disableRipple:!0,...t}))(({theme:t})=>({left:0,zIndex:t.zIndex.drawer-1,width:32,height:32,position:"absolute",top:t.spacing(21),borderRadius:"0 12px 12px 0",color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main,boxShadow:t.customShadows.primary,"&:hover":{backgroundColor:t.palette.primary.darker}})),D=i(t=>e.jsx(p,{disableRipple:!0,...t}))(({theme:t})=>({alignItems:"center",justifyContent:"center",boxSizing:"boder-box",display:"inline-flex",outline:"0px",margin:"0px",cursor:"pointer",userSelect:"none",textDecoration:"none",textAlign:"center",borderRadius:"50%",overflow:"visible",color:"rgb(145, 158, 171)",fontSize:"1.125rem",padding:"4px",zIndex:t.zIndex.appBar-1,border:"1px dashed rgba(145, 158, 171, 0.24)",backdropFilter:"blur(6px)",lineHeight:0})),E=320,M=96;export{z as L,B as S,D as a,_ as b,E as c,M as d};