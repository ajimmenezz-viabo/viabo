import{bd as _,be as Z,bf as fe,bg as R,bh as W,bi as S,bj as C,z as pe,j as u,b5 as n,B as V,bk as Y,r as w,bl as Re,aX as Oe,bm as ee,bn as K,bo as J,bp as G,aD as X,aE as Q,bq as re,br as se,bs as je,aG as ge,E as z,T as B,G as T,bt as P,aY as oe,bu as te,bv as Ne,a5 as Te,aF as He,V as L,bw as Ie,K as le,bx as Ve,by as _e,bz as Fe,O as I,a8 as Pe,J as F,S as $,p as ie,bA as ze,bB as We,bC as Ye,bD as Be}from"./index-mplo7Cy0.js";import{r as Le,i as qe,h as Ae,j as Ge,k as $e,l as Ke}from"./build-oGgHkT3Q.js";import{G as v}from"./build-Qg3JQUP_.js";import{L as Je}from"./build-9Efc2eo3.js";import{F as ce,S as de,T as Xe}from"./build-nSdaxBfa.js";function ve(e){_(1,arguments);var t;if(e&&typeof e.forEach=="function")t=e;else if(Z(e)==="object"&&e!==null)t=Array.prototype.slice.call(e);else return new Date(NaN);var a;return t.forEach(function(s){var r=fe(s);(a===void 0||a<r||isNaN(Number(r)))&&(a=r)}),a||new Date(NaN)}function xe(e){_(1,arguments);var t;if(e&&typeof e.forEach=="function")t=e;else if(Z(e)==="object"&&e!==null)t=Array.prototype.slice.call(e);else return new Date(NaN);var a;return t.forEach(function(s){var r=fe(s);(a===void 0||a>r||isNaN(r.getDate()))&&(a=r)}),a||new Date(NaN)}function Qe(e){return _(1,arguments),R(e,Date.now())}function Ue(e,t){_(2,arguments);var a=S(t);return W(e,-a)}function Ze(e,t){_(2,arguments);var a=S(t);return C(e,-a)}function jt(e,t){if(_(2,arguments),!t||Z(t)!=="object")return new Date(NaN);var a=t.years?S(t.years):0,s=t.months?S(t.months):0,r=t.weeks?S(t.weeks):0,o=t.days?S(t.days):0,d=t.hours?S(t.hours):0,h=t.minutes?S(t.minutes):0,b=t.seconds?S(t.seconds):0,i=Ze(e,s+a*12),l=Ue(i,o+r*7),p=h+d*60,y=b+p*60,m=y*1e3,E=new Date(l.getTime()-m);return E}const et=pe(u.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth"),tt=pe(u.jsx("path",{d:"M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44zM3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67V21zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9H1z"}),"CurrencyExchangeOutlined");var ae={},at=qe;Object.defineProperty(ae,"__esModule",{value:!0});var be=ae.default=void 0,nt=at(Le()),rt=u,st=(0,nt.default)((0,rt.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");be=ae.default=st;const ot=(e,t)=>Array.from({length:Math.ceil(e.length/t)},(a,s)=>e.slice(s*t,s*t+t)),lt=(e,t)=>{const a=K(X(e),{locale:t}),s=J(Q(e),{locale:t}),r=[];for(let o=a;P(o,s);)r.push(o),o=W(o,1);return r},it=({startDate:e},t)=>e&&R(t,e),ct=({endDate:e},t)=>e&&R(t,e),dt=({startDate:e,endDate:t},a)=>e&&t&&(te(a,{start:e,end:t})||R(a,e)||R(a,t)),ut=({startDate:e,endDate:t})=>e&&t?R(e,t):!1,ue=(e,t)=>{if(e){const a=e instanceof Date?e:Re(e);if(Oe(a))return a}return t},mt=(e,t,a)=>{const{startDate:s,endDate:r}=e;if(s&&r){const o=ve([s,t]),d=xe([r,a]);return[o,ee(o,d)?C(o,1):d]}return[s,r]},ht=(e,t)=>[{label:"Today",startDate:e,endDate:e},{label:"Yesterday",startDate:W(e,-1),endDate:W(e,-1)},{label:"This Week",startDate:K(e,{locale:t}),endDate:J(e,{locale:t})},{label:"Last Week",startDate:K(G(e,-1),{locale:t}),endDate:J(G(e,-1),{locale:t})},{label:"Last 7 Days",startDate:G(e,-1),endDate:e},{label:"This Month",startDate:X(e),endDate:Q(e)},{label:"Last Month",startDate:X(C(e,-1)),endDate:Q(C(e,-1))},{label:"This Year",startDate:re(e),endDate:se(e)},{label:"Last Year",startDate:re(Y(e,-1)),endDate:se(Y(e,-1))}],ft=(e,t)=>{const a=Math.floor(t/2);return Array(t).fill(0).map((s,r)=>e.getFullYear()-a+r)},pt=({date:e,setDate:t,nextDisabled:a,prevDisabled:s,onClickNext:r,onClickPrevious:o,locale:d})=>{const h=typeof d<"u"?[...Array(12).keys()].map(l=>{var p;return(p=d.localize)===null||p===void 0?void 0:p.month(l,{width:"abbreviated",context:"standalone"})}):["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],b=l=>{t(_e(e,parseInt(l.target.value,10)))},i=l=>{t(Fe(e,parseInt(l.target.value,10)))};return n.createElement(v,{container:!0,justifyContent:"space-between",alignItems:"center"},n.createElement(v,{item:!0,sx:{padding:"5px"}},n.createElement(L,{sx:{padding:"10px","&:hover":{background:"none"}},disabled:s,onClick:o},n.createElement(Ge,{color:s?"disabled":"action"}))),n.createElement(v,{item:!0},n.createElement(ce,{variant:"standard"},n.createElement(de,{value:Ie(e),onChange:b,MenuProps:{disablePortal:!0}},h.map((l,p)=>n.createElement(le,{key:l,value:p},l))))),n.createElement(v,{item:!0},n.createElement(ce,{variant:"standard"},n.createElement(de,{value:Ve(e),onChange:i,MenuProps:{disablePortal:!0}},ft(e,30).map(l=>n.createElement(le,{key:l,value:l},l))))),n.createElement(v,{item:!0,sx:{padding:"5px"}},n.createElement(L,{sx:{padding:"10px","&:hover":{background:"none"}},disabled:a,onClick:r},n.createElement($e,{color:a?"disabled":"action"}))))},gt=({startOfRange:e,endOfRange:t,disabled:a,highlighted:s,outlined:r,filled:o,onClick:d,onHover:h,value:b})=>n.createElement(V,{sx:{display:"flex",borderRadius:e?"50% 0 0 50%":t?"0 50% 50% 0":void 0,backgroundColor:i=>!a&&s?i.palette.primary.light:void 0}},n.createElement(L,{sx:Object.assign({height:"36px",width:"36px",padding:0,border:i=>!a&&r?`1px solid ${i.palette.primary.dark}`:void 0},!a&&o?{"&:hover":{backgroundColor:i=>i.palette.primary.dark},backgroundColor:i=>i.palette.primary.dark}:{}),disabled:a,onClick:d,onMouseOver:h},n.createElement(B,{sx:{lineHeight:1.6,color:i=>a?i.palette.text.secondary:o?i.palette.primary.contrastText:i.palette.text.primary},variant:"body2"},b)));var q;(function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"})(q||(q={}));const me=e=>{var t;const{helpers:a,handlers:s,value:r,dateRange:o,marker:d,setValue:h,minDate:b,maxDate:i,locale:l}=e,p=((t=l==null?void 0:l.options)===null||t===void 0?void 0:t.weekStartsOn)||0,y=typeof l<"u"?[...Array(7).keys()].map(x=>{var f;return(f=l.localize)===null||f===void 0?void 0:f.day((x+p)%7,{width:"short",context:"standalone"})}):["Su","Mo","Tu","We","Th","Fr","Sa"],[m,E]=e.navState;return n.createElement(ge,{square:!0,elevation:0,sx:{width:290}},n.createElement(v,{container:!0},n.createElement(pt,{date:r,setDate:h,nextDisabled:!E,prevDisabled:!m,onClickPrevious:()=>s.onMonthNavigate(d,q.Previous),onClickNext:()=>s.onMonthNavigate(d,q.Next),locale:l}),n.createElement(v,{item:!0,container:!0,direction:"row",justifyContent:"space-between",sx:{marginTop:"10px",paddingLeft:"30px",paddingRight:"30px"}},y.map((x,f)=>n.createElement(B,{color:"textSecondary",key:f,variant:"caption"},x))),n.createElement(v,{item:!0,container:!0,direction:"column",justifyContent:"space-between",sx:{paddingLeft:"15px",paddingRight:"15px",marginTop:"15px",marginBottom:"20px"}},ot(lt(r,l),7).map((x,f)=>n.createElement(v,{key:f,container:!0,direction:"row",justifyContent:"center"},x.map(g=>{const D=it(o,g),j=ct(o,g),O=ut(o),H=dt(o,g)||a.inHoverRange(g);return n.createElement(gt,{key:T(g,"dd-MM-yyyy"),filled:D||j,outlined:Qe(g),highlighted:H&&!O,disabled:!ee(r,g)||!te(g,{start:b,end:i}),startOfRange:D&&!O,endOfRange:j&&!O,onClick:()=>s.onDayClick(g),onHover:()=>s.onDayHover(g),value:Ne(g)})}))))))},he=(e,t)=>{const{startDate:a,endDate:s}=e,{startDate:r,endDate:o}=t;return a&&r&&s&&o?R(a,r)&&R(s,o):!1},vt=({ranges:e,setRange:t,selectedRange:a,verticalOrientation:s})=>n.createElement(Te,{sx:{flexDirection:s?"row":"column",display:"flex",overflowY:"scroll"}},e.map((r,o)=>n.createElement(Je,{button:!0,key:o,onClick:()=>t(r),sx:[he(r,a)&&{backgroundColor:d=>d.palette.primary.dark,color:"primary.contrastText","&:hover":{color:"inherit"}}]},n.createElement(He,{primaryTypographyProps:{variant:"body2",sx:{fontWeight:he(r,a)?"bold":"normal"}}},r.label)))),U={FIRST_MONTH:Symbol("firstMonth"),SECOND_MONTH:Symbol("secondMonth")},xt={writingMode:"vertical-lr",transform:"rotate(180deg)"},bt=e=>{const{ranges:t,dateRange:a,minDate:s,maxDate:r,firstMonth:o,setFirstMonth:d,secondMonth:h,setSecondMonth:b,setDateRange:i,helpers:l,handlers:p,locale:y,verticalOrientation:m}=e,{startDate:E,endDate:x}=a,f=je(h,o)>=2,g={dateRange:a,minDate:s,maxDate:r,helpers:l,handlers:p},D=Object.assign({flex:1,textAlign:"center"},m?xt:{});return n.createElement(ge,{elevation:5,square:!0},n.createElement(v,{container:!0,direction:m?"column":"row",wrap:"nowrap"},n.createElement(v,null,n.createElement(vt,{selectedRange:a,ranges:t,setRange:i,verticalOrientation:m})),n.createElement(z,{orientation:m?"horizontal":"vertical",flexItem:!0}),n.createElement(v,{display:"flex",flexDirection:m?"row":"column"},n.createElement(v,{container:!0,direction:m?"column":"row",sx:m?{}:{padding:"20px 70px"},alignItems:"center"},n.createElement(v,{item:!0,sx:D},n.createElement(B,{variant:"subtitle1"},E?T(E,"dd MMMM yyyy",{locale:y}):"Start Date")),n.createElement(v,{item:!0,sx:{flex:m?.5:1,display:"flex",justifyContent:"center",alignItems:"center"}},m?n.createElement(Ae,{color:"action"}):n.createElement(be,{color:"action"})),n.createElement(v,{item:!0,sx:D},n.createElement(B,{variant:"subtitle1"},x?T(x,"dd MMMM yyyy",{locale:y}):"End Date"))),n.createElement(z,null),n.createElement(v,{container:!0,direction:m?"column":"row",justifyContent:"center",wrap:"nowrap"},n.createElement(me,Object.assign({},g,{value:o,setValue:d,navState:[!0,f],marker:U.FIRST_MONTH,locale:y})),n.createElement(z,{orientation:m?"horizontal":"vertical",flexItem:!0}),n.createElement(me,Object.assign({},g,{value:h,setValue:b,navState:[f,!0],marker:U.SECOND_MONTH,locale:y}))))))},yt=e=>{const t=new Date,{open:a,onChange:s,initialDateRange:r,minDate:o,maxDate:d,definedRanges:h=ht(new Date,e.locale),locale:b,verticalOrientation:i}=e,l=ue(o,Y(t,-10)),p=ue(d,Y(t,10)),[y,m]=mt(r||{},l,p),[E,x]=w.useState(Object.assign({},r)),[f,g]=w.useState(),[D,j]=w.useState(y||t),[O,H]=w.useState(m||C(D,1)),{startDate:N,endDate:A}=E,ye=c=>{P(c,O)&&j(c)},De=c=>{oe(c,D)&&H(c)},Me=c=>{let{startDate:M,endDate:k}=c;if(M&&k)c.startDate=M=ve([M,l]),c.endDate=k=xe([k,p]),x(c),s(c),j(M),H(ee(M,k)?C(M,1):k);else{const ne={};x(ne),s(ne),j(t),H(C(D,1))}},Ee=c=>{if(N&&!A&&!P(c,N)){const M={startDate:N,endDate:c};s(M),x(M)}else x({startDate:c,endDate:void 0});g(c)},ke=(c,M)=>{if(c===U.FIRST_MONTH){const k=C(D,M);P(k,O)&&j(k)}else{const k=C(O,M);P(D,k)&&H(k)}},we=c=>{N&&!A&&(!f||!R(c,f))&&g(c)},Se={inHoverRange:c=>N&&!A&&f&&oe(f,N)&&te(c,{start:N,end:f})},Ce={onDayClick:Ee,onDayHover:we,onMonthNavigate:ke};return a?w.createElement(bt,{dateRange:E,minDate:l,maxDate:p,ranges:h,firstMonth:D,secondMonth:O,setFirstMonth:ye,setSecondMonth:De,setDateRange:Me,helpers:Se,handlers:Ce,locale:b,verticalOrientation:!!i}):null},Dt=e=>{const{closeOnClickOutside:t,wrapperClassName:a,toggle:s,open:r}=e,o=()=>{t!==!1&&s()},d=h=>(h==null?void 0:h.key)==="Escape"&&o();return n.createElement(V,{sx:{position:"relative"}},r&&n.createElement(V,{sx:{position:"fixed",height:"100vh",width:"100vw",bottom:0,zIndex:0,right:0,left:0,top:0},onKeyPress:d,onClick:o}),n.createElement(V,{sx:{position:"relative",zIndex:1},className:a},n.createElement(yt,Object.assign({},e))))},Mt=e=>n.createElement(Dt,Object.assign({},e)),Et=({startDate:e,endDate:t,onChangeDateRange:a,loading:s,onOpenBalance:r,hideBalance:o=!1})=>{const d=w.useMemo(()=>Ke(),[]),h=w.useRef(null),b=Pe("down","md"),[i,l]=w.useState(!1),[p,y]=w.useState(i),m=()=>{l(!i),i||y(!0)},E=w.useMemo(()=>e?T(e,"dd MMMM yyyy",{locale:F}):T(new Date,"dd MMMM yyyy",{locale:F}),[e]),x=w.useMemo(()=>t?T(t,"dd MMMM yyyy",{locale:F}):T(new Date,"dd MMMM yyyy",{locale:F}),[t]),f=`${E} - ${x}`;return u.jsxs(u.Fragment,{children:[u.jsxs($,{py:2,px:1,flexDirection:{lg:"row"},justifyContent:"space-between",alignItems:"center",gap:1,children:[u.jsxs($,{flex:1,width:1,direction:"row",spacing:.5,children:[u.jsx(L,{disabled:!!s,onClick:m,size:"small",children:u.jsx(et,{})}),u.jsx($,{flex:1,children:u.jsx(Xe,{placeholder:"Fecha inicial - Fecha final",value:f,fullWidth:!0,type:"text",variant:"outlined",size:"small",disabled:!!s,onClick:m,InputProps:{readOnly:!0}})})]}),u.jsx(V,{display:"flex",flexGrow:1}),u.jsx(V,{display:"flex",flexGrow:1,justifyContent:"flex-end",children:!o&&u.jsx(ie,{variant:"contained",color:"secondary",disabled:!!s,startIcon:u.jsx(tt,{}),sx:{color:"text.primary",fontWeight:"bolder"},onClick:r,children:"Ver Balance del Periodo"})}),u.jsxs(ze,{open:p,ref:h,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",maxWidth:"md",children:[u.jsx(We,{variant:"subtitle1",fontWeight:"bolder",sx:{mb:2},id:"scroll-dialog-title",children:"Confirma las fechas seleccionadas"}),u.jsx(Ye,{id:"scroll-dialog-description",dividers:!0,children:u.jsx(Mt,{open:i,onChange:a,verticalOrientation:b,toggle:m,locale:F,definedRanges:d,closeOnClickOutside:!1,wrapperClassName:"simple-date-range"})}),u.jsx(Be,{children:u.jsx(ie,{variant:"contained",color:"primary",onClick:()=>{y(!1),setTimeout(()=>{l(!1)},200)},children:"Hecho"})})]})]}),u.jsx(z,{sx:{borderStyle:"dashed"}})]})};Et.propTypes={endDate:I.any.isRequired,loading:I.any,onChangeDateRange:I.func.isRequired,onOpenBalance:I.func,startDate:I.any.isRequired,hideBalance:I.bool};export{tt as C,Et as a,jt as s};
