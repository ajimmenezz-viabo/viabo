import{r as n,b5 as C,ay as T,az as h,j as x}from"./index-4598388a.js";function v(s){return s.substring(2).toLowerCase()}function y(s,o){return o.documentElement.clientWidth<s.clientX||o.documentElement.clientHeight<s.clientY}function g(s){const{children:o,disableReactTree:R=!1,mouseEvent:u="onClick",onClickAway:L,touchEvent:i="onTouchEnd"}=s,f=n.useRef(!1),c=n.useRef(null),l=n.useRef(!1),d=n.useRef(!1);n.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const k=C(o.ref,c),a=T(e=>{const t=d.current;d.current=!1;const r=h(c.current);if(!l.current||!c.current||"clientX"in e&&y(e,r))return;if(f.current){f.current=!1;return}let E;e.composedPath?E=e.composedPath().indexOf(c.current)>-1:E=!r.documentElement.contains(e.target)||c.current.contains(e.target),!E&&(R||!t)&&L(e)}),p=e=>t=>{d.current=!0;const r=o.props[e];r&&r(t)},m={ref:k};return i!==!1&&(m[i]=p(i)),n.useEffect(()=>{if(i!==!1){const e=v(i),t=h(c.current),r=()=>{f.current=!0};return t.addEventListener(e,a),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,a),t.removeEventListener("touchmove",r)}}},[a,i]),u!==!1&&(m[u]=p(u)),n.useEffect(()=>{if(u!==!1){const e=v(u),t=h(c.current);return t.addEventListener(e,a),()=>{t.removeEventListener(e,a)}}},[a,u]),x.jsx(n.Fragment,{children:n.cloneElement(o,m)})}export{g as C};
