import{aN as I,aO as b,Z as i,aq as n,r as c,aP as S,ao as h,aQ as f,j as e,aR as v,aS as C,S as x,I as p}from"./build-66521f42.js";import{e as o}from"./build-765dfa32.js";function k(t){return I("MuiListItemAvatar",t)}b("MuiListItemAvatar",["root","alignItemsFlexStart"]);const w=["className"],L=t=>{const{alignItems:s,classes:a}=t;return C({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},k,a)},A=i("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,a.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>n({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),j=c.forwardRef(function(s,a){const r=S({props:s,name:"MuiListItemAvatar"}),{className:d}=r,u=h(r,w),m=c.useContext(f),l=n({},r,{alignItems:m.alignItems}),g=L(l);return e.jsx(A,n({className:v(g.root,d),ownerState:l,ref:a},u))}),_=j;function z({isOpenSideBar:t}){return e.jsxs(x,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1.5},children:[e.jsx(o,{sx:{backgroundColor:"background.paper"},variant:"circular",width:48,height:48}),t&&e.jsxs(x,{spacing:.5,sx:{flexGrow:1},children:[e.jsx(o,{variant:"text",sx:{width:.5,height:16,backgroundColor:"background.paper"}}),e.jsx(o,{variant:"text",sx:{width:.25,height:12,backgroundColor:"background.paper"}})]})]})}const B=i(t=>e.jsx(p,{disableRipple:!0,...t}))(({theme:t})=>({left:0,zIndex:12e3,width:32,height:32,position:"absolute",top:t.spacing(21),borderRadius:"0 12px 12px 0",color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main,boxShadow:t.customShadows.primary,"&:hover":{backgroundColor:t.palette.primary.darker}})),D=i(t=>e.jsx(p,{disableRipple:!0,...t}))(({theme:t})=>({alignItems:"center",justifyContent:"center",boxSizing:"boder-box",display:"inline-flex",outline:"0px",margin:"0px",cursor:"pointer",userSelect:"none",textDecoration:"none",textAlign:"center",borderRadius:"50%",overflow:"visible",color:"rgb(145, 158, 171)",fontSize:"1.125rem",padding:"4px",zIndex:t.zIndex.drawer-1,border:"1px dashed rgba(145, 158, 171, 0.24)",backdropFilter:"blur(6px)",lineHeight:0})),E=320,M=96;export{_ as L,z as S,D as a,B as b,E as c,M as d};
