import{bQ as j,r as p,s as L,T as I,P as s,bd as R,i as r,e9 as O,S as d,B as u,l as W,V as U,bj as D,A as z,x as $,dY as M,ea as C}from"./vendor-5lkxkETF.js";import{Z as P,a8 as q}from"./index-DkbAsBWZ.js";import{g as V}from"./getFileFormat-1mdVNW85.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var _=function(e,i){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])},_(e,i)};function Q(e,i){_(e,i);function n(){this.constructor=e}e.prototype=i===null?Object.create(i):(n.prototype=i.prototype,new n)}var S=function(){return S=Object.assign||function(i){for(var n,t=1,o=arguments.length;t<o;t++){n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(i[l]=n[l])}return i},S.apply(this,arguments)};function Z(e,i,n,t){var o,l=!1,a=0;function f(){o&&clearTimeout(o)}function h(){f(),l=!0}typeof i!="boolean"&&(t=n,n=i,i=void 0);function c(){var x=this,m=Date.now()-a,b=arguments;if(l)return;function v(){a=Date.now(),n.apply(x,b)}function y(){o=void 0}t&&!o&&v(),f(),t===void 0&&m>e?v():i!==!0&&(o=setTimeout(t?y:v,t===void 0?e-m:e))}return c.cancel=h,c}var g={Pixel:"Pixel",Percent:"Percent"},Y={unit:g.Percent,value:.8};function k(e){return typeof e=="number"?{unit:g.Percent,value:e*100}:typeof e=="string"?e.match(/^(\d*(\.\d+)?)px$/)?{unit:g.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:g.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),Y):(console.warn("scrollThreshold should be string or number"),Y)}var G=function(e){Q(i,e);function i(n){var t=e.call(this,n)||this;return t.lastScrollTop=0,t.actionTriggered=!1,t.startY=0,t.currentY=0,t.dragging=!1,t.maxPullDownDistance=0,t.getScrollableTarget=function(){return t.props.scrollableTarget instanceof HTMLElement?t.props.scrollableTarget:typeof t.props.scrollableTarget=="string"?document.getElementById(t.props.scrollableTarget):(t.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},t.onStart=function(o){t.lastScrollTop||(t.dragging=!0,o instanceof MouseEvent?t.startY=o.pageY:o instanceof TouchEvent&&(t.startY=o.touches[0].pageY),t.currentY=t.startY,t._infScroll&&(t._infScroll.style.willChange="transform",t._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},t.onMove=function(o){t.dragging&&(o instanceof MouseEvent?t.currentY=o.pageY:o instanceof TouchEvent&&(t.currentY=o.touches[0].pageY),!(t.currentY<t.startY)&&(t.currentY-t.startY>=Number(t.props.pullDownToRefreshThreshold)&&t.setState({pullToRefreshThresholdBreached:!0}),!(t.currentY-t.startY>t.maxPullDownDistance*1.5)&&t._infScroll&&(t._infScroll.style.overflow="visible",t._infScroll.style.transform="translate3d(0px, "+(t.currentY-t.startY)+"px, 0px)")))},t.onEnd=function(){t.startY=0,t.currentY=0,t.dragging=!1,t.state.pullToRefreshThresholdBreached&&(t.props.refreshFunction&&t.props.refreshFunction(),t.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){t._infScroll&&(t._infScroll.style.overflow="auto",t._infScroll.style.transform="none",t._infScroll.style.willChange="unset")})},t.onScrollListener=function(o){typeof t.props.onScroll=="function"&&setTimeout(function(){return t.props.onScroll&&t.props.onScroll(o)},0);var l=t.props.height||t._scrollableNode?o.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!t.actionTriggered){var a=t.props.inverse?t.isElementAtTop(l,t.props.scrollThreshold):t.isElementAtBottom(l,t.props.scrollThreshold);a&&t.props.hasMore&&(t.actionTriggered=!0,t.setState({showLoader:!0}),t.props.next&&t.props.next()),t.lastScrollTop=l.scrollTop}},t.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:n.dataLength},t.throttledOnScrollListener=Z(150,t.onScrollListener).bind(t),t.onStart=t.onStart.bind(t),t.onMove=t.onMove.bind(t),t.onEnd=t.onEnd.bind(t),t}return i.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},i.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},i.prototype.componentDidUpdate=function(n){this.props.dataLength!==n.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},i.getDerivedStateFromProps=function(n,t){var o=n.dataLength!==t.prevDataLength;return o?S(S({},t),{prevDataLength:n.dataLength}):null},i.prototype.isElementAtTop=function(n,t){t===void 0&&(t=.8);var o=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,l=k(t);return l.unit===g.Pixel?n.scrollTop<=l.value+o-n.scrollHeight+1:n.scrollTop<=l.value/100+o-n.scrollHeight+1},i.prototype.isElementAtBottom=function(n,t){t===void 0&&(t=.8);var o=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,l=k(t);return l.unit===g.Pixel?n.scrollTop+o>=n.scrollHeight-l.value:n.scrollTop+o>=l.value/100*n.scrollHeight},i.prototype.render=function(){var n=this,t=S({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),l=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return j.createElement("div",{style:l,className:"infinite-scroll-component__outerdiv"},j.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(a){return n._infScroll=a},style:t},this.props.pullDownToRefresh&&j.createElement("div",{style:{position:"relative"},ref:function(a){return n._pullDown=a}},j.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},i}(p.Component);const J=L("div")(({theme:e})=>({width:"100%",[e.breakpoints.up("lg")]:{maxWidth:400},[e.breakpoints.up("xl")]:{maxWidth:500},padding:e.spacing(1.5),marginTop:e.spacing(.5),borderRadius:e.shape.borderRadius,backgroundColor:e.palette.mode==="dark"?e.palette.info.main:e.palette.info.lighter,position:"relative","&:before":{bottom:"100%",left:"0%",border:"10px solid transparent",content:'" "',height:0,width:0,position:"absolute",pointerEvents:"none",borderBottomColor:e.palette.mode==="dark"?e.palette.info.main:e.palette.info.lighter,borderWidth:"7px",marginLeft:"15px"}})),K=L("div")(({theme:e})=>({width:100,height:100,flexShrink:0,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",cursor:"pointer",color:e.palette.text.secondary,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[50016],"&:hover":{opacity:.8}})),X=L(I)(({theme:e})=>({display:"flex",marginBottom:e.spacing(.75),color:e.palette.text.secondary})),B=({file:e,isURL:i=!0})=>{const n=p.useMemo(()=>V(e,i),[e]),t=p.useMemo(()=>R.isString(e)?e:URL.createObjectURL(e),[e]),o=p.useMemo(()=>R.isString(e)?e:e.name,[e]),l={width:60,height:60};return r.jsxs(K,{onClick:a=>{a.stopPropagation(),window.open(e,"_blank")},children:[n==="image"&&r.jsx(P,{src:t,alt:o,sx:{height:1},ratio:"1/1"}),n&&n!=="image"&&r.jsx(P,{src:n,alt:e,sx:l}),!n&&r.jsx(O,{sx:l})]})};B.propTypes={file:s.any,isURL:s.bool};const F=({queryTicketConversation:e,scroll:i,setScroll:n})=>{var b,v;const{data:t,isLoading:o,fetchNextPage:l,hasNextPage:a,refetch:f}=e,h=((b=t==null?void 0:t.pages)==null?void 0:b.reduce((y,E)=>{var w,T;return y+(((T=(w=E.results)==null?void 0:w.messages)==null?void 0:T.length)||0)},0))??0,c=p.useRef(null),x=()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)};p.useEffect(()=>{x()},[]),p.useEffect(()=>{i&&(x(),n(!1))},[i]);const m=p.useMemo(()=>h===0?"column":"column-reverse",[h]);return r.jsx(d,{ref:c,gap:2,p:3,sx:{overflow:"auto"},id:"scrollbar-target",flexDirection:m,children:r.jsx(u,{component:G,dataLength:h,next:l,hasMore:!!a,inverse:!0,sx:{display:"flex",flexDirection:m,overflow:"none"},loader:r.jsx(u,{sx:{display:"flex",justifyContent:"center",pt:1},children:r.jsx(W,{})}),scrollableTarget:"scrollbar-target",endMessage:!o&&r.jsx(U,{variant:"outlined",severity:"info",sx:{justifyContent:"center",m:2},children:"Este es el principio del chat"}),refreshFunction:f,pullDownToRefresh:!0,pullDownToRefreshThreshold:50,children:(v=o?[...Array(12)]:t==null?void 0:t.pages)==null?void 0:v.map((y,E)=>{var w,T;return y?r.jsx(p.Fragment,{children:(T=(w=y.results)==null?void 0:w.messages)==null?void 0:T.map((H,N)=>r.jsx(A,{message:H},N))},E):r.jsx(tt,{},E)})})})};F.propTypes={queryTicketConversation:s.shape({data:s.shape({pages:s.array}),fetchNextPage:s.any,hasNextPage:s.any,isFetching:s.any,isLoading:s.any,refetch:s.any}),scroll:s.any,setScroll:s.func};const it=p.memo(F);function tt(){return r.jsxs(d,{direction:"row",spacing:1,p:3,children:[r.jsx(D,{variant:"circular",width:40,height:40}),r.jsxs(d,{spacing:1,children:[r.jsx(D,{variant:"text",width:100}),r.jsx(D,{animation:"wave",variant:"rounded",width:300,height:60})]})]})}const et=L("div")(({theme:e})=>({display:"flex",paddingTop:e.spacing(1.5)}));function A({message:e}){var l,a,f,h;const i=!!(e!=null&&e.my),n=((l=e==null?void 0:e.attachment)==null?void 0:l.length)>0,t=(e==null?void 0:e.attachment)||[],{color:o}=q(e==null?void 0:e.name);return r.jsx(et,{children:r.jsxs(u,{sx:{display:"flex",...i&&{ml:"auto"}},children:[!i&&r.jsx(z,{alt:e==null?void 0:e.name,src:e==null?void 0:e.avatar,sx:c=>({width:32,height:32,fontSize:"inherit",mr:2,color:c.palette[o].contrastText,backgroundColor:c.palette[o].main}),children:e==null?void 0:e.initials}),r.jsxs("div",{children:[r.jsxs(X,{variant:"caption",sx:{...i&&{justifyContent:"flex-end"}},children:[!i&&`${e==null?void 0:e.name}`," ",r.jsx($,{title:((a=e==null?void 0:e.createDate)==null?void 0:a.original)||"",followCursor:!0,children:r.jsxs(u,{component:"span",color:"text.disabled",children:[!i&&r.jsxs(r.Fragment,{children:["• ",(f=e==null?void 0:e.createDate)==null?void 0:f.fToNow]}),i&&((h=e==null?void 0:e.createDate)==null?void 0:h.fToNow)]})})]}),r.jsx(d,{gap:1,children:r.jsx(J,{sx:{...i&&{color:"grey.800",bgcolor:"success.lighter","&:before":{bottom:"100%",left:"100%",border:"10px solid transparent",content:'" "',height:0,width:0,position:"absolute",pointerEvents:"none",borderBottomColor:"success.lighter",borderWidth:"7px",marginLeft:"-30px"}}},children:n?r.jsxs(d,{flexDirection:"row",justifyContent:"space-between",gap:1,children:[r.jsxs(d,{spacing:2,children:[r.jsx(u,{sx:{wordWrap:"break-word",textWrap:"pretty",fontSize:"small"},dangerouslySetInnerHTML:{__html:`<p style='font-size: small'>${e==null?void 0:e.message}</p>`}}),r.jsx(d,{flexDirection:"row",flexWrap:"wrap",justifyContent:"start",alignItems:"end",gap:2,sx:{overflow:"auto",pb:2},children:t==null?void 0:t.map((c,x)=>r.jsx(B,{file:c,isURL:!!(e!=null&&e.isSent)},x))})]}),i&&r.jsx(u,{component:"span",sx:{display:"flex",alignItems:"flex-end"},children:e!=null&&e.isSent?r.jsx(M,{sx:{color:"info.main",fontSize:16}}):r.jsx(C,{sx:{color:"info.main",fontSize:16}})})]}):r.jsxs(d,{flexDirection:"row",justifyContent:"space-between",gap:1,children:[r.jsx(u,{sx:{wordWrap:"break-word",textWrap:"pretty"},dangerouslySetInnerHTML:{__html:`<p style='font-size: small'>${e==null?void 0:e.message}</p>`}}),i&&r.jsx(u,{component:"span",sx:{display:"flex",alignItems:"flex-end"},children:e!=null&&e.isSent?r.jsx(M,{sx:{color:"info.main",fontSize:16}}):r.jsx(C,{sx:{color:"info.main",fontSize:16}})})]})})})]})]})})}A.propTypes={message:s.shape({attachment:s.array,avatar:s.any,createDate:s.shape({fToNow:s.any,original:s.string}),initials:s.any,message:s.any,my:s.any,name:s.any})};export{it as default};
//# sourceMappingURL=TicketMessages-F8lSYUiK.js.map