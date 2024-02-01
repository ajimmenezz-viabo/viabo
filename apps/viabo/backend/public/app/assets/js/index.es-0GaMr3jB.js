import{a_ as xe,a$ as De,i as Ee,c3 as t,B as _,cb as N,r as T,cc as k,cd as ye,bT as Me,ce as oe,cf as ie,cg as $,ch as F,ci as W,cj as V,ck as Y,b5 as L,b6 as q,cl as X,cm as Q,cn as be,R as le,bK as m,X as A,T as j,aM as z,co as ke,cp as I,bU as Z,cq as Se,cr as J,cs as Re,aV as Oe,aT as we,a7 as Ce,ct as S,I as B,cu as Te,b7 as ee,b8 as te,cv as Ie,a4 as ae,cw as _e,cx as Ne,cy as je,cz as Pe}from"./vendor-VdGvLetj.js";var G={},He=De;Object.defineProperty(G,"__esModule",{value:!0});var ce=G.default=void 0,Ye=He(xe()),Ae=Ee,Fe=(0,Ye.default)((0,Ae.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");ce=G.default=Fe;const We=(e,a)=>Array.from({length:Math.ceil(e.length/a)},(n,r)=>e.slice(r*a,r*a+a)),Ve=(e,a)=>{const n=W(L(e),{locale:a}),r=V(q(e),{locale:a}),s=[];for(let o=n;I(o,r);)s.push(o),o=F(o,1);return s},Le=({startDate:e},a)=>e&&S(a,e),qe=({endDate:e},a)=>e&&S(a,e),ze=({startDate:e,endDate:a},n)=>e&&a&&(J(n,{start:e,end:a})||S(n,e)||S(n,a)),Be=({startDate:e,endDate:a})=>e&&a?S(e,a):!1,ne=(e,a)=>{if(e){const n=e instanceof Date?e:ye(e);if(Me(n))return n}return a},Ke=(e,a,n)=>{const{startDate:r,endDate:s}=e;if(r&&s){const o=oe([r,a]),d=ie([s,n]);return[o,$(o,d)?k(o,1):d]}return[r,s]},$e=(e,a)=>[{label:"Today",startDate:e,endDate:e},{label:"Yesterday",startDate:F(e,-1),endDate:F(e,-1)},{label:"This Week",startDate:W(e,{locale:a}),endDate:V(e,{locale:a})},{label:"Last Week",startDate:W(Y(e,-1),{locale:a}),endDate:V(Y(e,-1),{locale:a})},{label:"Last 7 Days",startDate:Y(e,-1),endDate:e},{label:"This Month",startDate:L(e),endDate:q(e)},{label:"Last Month",startDate:L(k(e,-1)),endDate:q(k(e,-1))},{label:"This Year",startDate:X(e),endDate:Q(e)},{label:"Last Year",startDate:X(N(e,-1)),endDate:Q(N(e,-1))}],Je=(e,a)=>{const n=Math.floor(a/2);return Array(a).fill(0).map((r,s)=>e.getFullYear()-n+s)},Ge=({date:e,setDate:a,nextDisabled:n,prevDisabled:r,onClickNext:s,onClickPrevious:o,locale:d})=>{const h=typeof d<"u"?[...Array(12).keys()].map(i=>{var f;return(f=d.localize)===null||f===void 0?void 0:f.month(i,{width:"abbreviated",context:"standalone"})}):["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],y=i=>{a(je(e,parseInt(i.target.value,10)))},c=i=>{a(Pe(e,parseInt(i.target.value,10)))};return t.createElement(m,{container:!0,justifyContent:"space-between",alignItems:"center"},t.createElement(m,{item:!0,sx:{padding:"5px"}},t.createElement(B,{sx:{padding:"10px","&:hover":{background:"none"}},disabled:r,onClick:o},t.createElement(Te,{color:r?"disabled":"action"}))),t.createElement(m,{item:!0},t.createElement(ee,{variant:"standard"},t.createElement(te,{value:Ie(e),onChange:y,MenuProps:{disablePortal:!0}},h.map((i,f)=>t.createElement(ae,{key:i,value:f},i))))),t.createElement(m,{item:!0},t.createElement(ee,{variant:"standard"},t.createElement(te,{value:_e(e),onChange:c,MenuProps:{disablePortal:!0}},Je(e,30).map(i=>t.createElement(ae,{key:i,value:i},i))))),t.createElement(m,{item:!0,sx:{padding:"5px"}},t.createElement(B,{sx:{padding:"10px","&:hover":{background:"none"}},disabled:n,onClick:s},t.createElement(Ne,{color:n?"disabled":"action"}))))},Ue=({startOfRange:e,endOfRange:a,disabled:n,highlighted:r,outlined:s,filled:o,onClick:d,onHover:h,value:y})=>t.createElement(_,{sx:{display:"flex",borderRadius:e?"50% 0 0 50%":a?"0 50% 50% 0":void 0,backgroundColor:c=>!n&&r?c.palette.primary.light:void 0}},t.createElement(B,{sx:Object.assign({height:"36px",width:"36px",padding:0,border:c=>!n&&s?`1px solid ${c.palette.primary.dark}`:void 0},!n&&o?{"&:hover":{backgroundColor:c=>c.palette.primary.dark},backgroundColor:c=>c.palette.primary.dark}:{}),disabled:n,onClick:d,onMouseOver:h},t.createElement(j,{sx:{lineHeight:1.6,color:c=>n?c.palette.text.secondary:o?c.palette.primary.contrastText:c.palette.text.primary},variant:"body2"},y)));var P;(function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"})(P||(P={}));const re=e=>{var a;const{helpers:n,handlers:r,value:s,dateRange:o,marker:d,setValue:h,minDate:y,maxDate:c,locale:i}=e,f=((a=i==null?void 0:i.options)===null||a===void 0?void 0:a.weekStartsOn)||0,M=typeof i<"u"?[...Array(7).keys()].map(v=>{var p;return(p=i.localize)===null||p===void 0?void 0:p.day((v+f)%7,{width:"short",context:"standalone"})}):["Su","Mo","Tu","We","Th","Fr","Sa"],[g,R]=e.navState;return t.createElement(le,{square:!0,elevation:0,sx:{width:290}},t.createElement(m,{container:!0},t.createElement(Ge,{date:s,setDate:h,nextDisabled:!R,prevDisabled:!g,onClickPrevious:()=>r.onMonthNavigate(d,P.Previous),onClickNext:()=>r.onMonthNavigate(d,P.Next),locale:i}),t.createElement(m,{item:!0,container:!0,direction:"row",justifyContent:"space-between",sx:{marginTop:"10px",paddingLeft:"30px",paddingRight:"30px"}},M.map((v,p)=>t.createElement(j,{color:"textSecondary",key:p,variant:"caption"},v))),t.createElement(m,{item:!0,container:!0,direction:"column",justifyContent:"space-between",sx:{paddingLeft:"15px",paddingRight:"15px",marginTop:"15px",marginBottom:"20px"}},We(Ve(s,i),7).map((v,p)=>t.createElement(m,{key:p,container:!0,direction:"row",justifyContent:"center"},v.map(u=>{const x=Le(o,u),O=qe(o,u),b=Be(o),C=ze(o,u)||n.inHoverRange(u);return t.createElement(Ue,{key:z(u,"dd-MM-yyyy"),filled:x||O,outlined:Se(u),highlighted:C&&!b,disabled:!$(s,u)||!J(u,{start:y,end:c}),startOfRange:x&&!b,endOfRange:O&&!b,onClick:()=>r.onDayClick(u),onHover:()=>r.onDayHover(u),value:Re(u)})}))))))},se=(e,a)=>{const{startDate:n,endDate:r}=e,{startDate:s,endDate:o}=a;return n&&s&&r&&o?S(n,s)&&S(r,o):!1},Xe=({ranges:e,setRange:a,selectedRange:n,verticalOrientation:r})=>t.createElement(Oe,{sx:{flexDirection:r?"row":"column",display:"flex",overflowY:"scroll"}},e.map((s,o)=>t.createElement(we,{button:!0,key:o,onClick:()=>a(s),sx:[se(s,n)&&{backgroundColor:d=>d.palette.primary.dark,color:"primary.contrastText","&:hover":{color:"inherit"}}]},t.createElement(Ce,{primaryTypographyProps:{variant:"body2",sx:{fontWeight:se(s,n)?"bold":"normal"}}},s.label)))),K={FIRST_MONTH:Symbol("firstMonth"),SECOND_MONTH:Symbol("secondMonth")},Qe={writingMode:"vertical-lr",transform:"rotate(180deg)"},Ze=e=>{const{ranges:a,dateRange:n,minDate:r,maxDate:s,firstMonth:o,setFirstMonth:d,secondMonth:h,setSecondMonth:y,setDateRange:c,helpers:i,handlers:f,locale:M,verticalOrientation:g}=e,{startDate:R,endDate:v}=n,p=be(h,o)>=2,u={dateRange:n,minDate:r,maxDate:s,helpers:i,handlers:f},x=Object.assign({flex:1,textAlign:"center"},g?Qe:{});return t.createElement(le,{elevation:5,square:!0},t.createElement(m,{container:!0,direction:g?"column":"row",wrap:"nowrap"},t.createElement(m,null,t.createElement(Xe,{selectedRange:n,ranges:a,setRange:c,verticalOrientation:g})),t.createElement(A,{orientation:g?"horizontal":"vertical",flexItem:!0}),t.createElement(m,{display:"flex",flexDirection:g?"row":"column"},t.createElement(m,{container:!0,direction:g?"column":"row",sx:g?{}:{padding:"20px 70px"},alignItems:"center"},t.createElement(m,{item:!0,sx:x},t.createElement(j,{variant:"subtitle1"},R?z(R,"dd MMMM yyyy",{locale:M}):"Start Date")),t.createElement(m,{item:!0,sx:{flex:g?.5:1,display:"flex",justifyContent:"center",alignItems:"center"}},g?t.createElement(ke,{color:"action"}):t.createElement(ce,{color:"action"})),t.createElement(m,{item:!0,sx:x},t.createElement(j,{variant:"subtitle1"},v?z(v,"dd MMMM yyyy",{locale:M}):"End Date"))),t.createElement(A,null),t.createElement(m,{container:!0,direction:g?"column":"row",justifyContent:"center",wrap:"nowrap"},t.createElement(re,Object.assign({},u,{value:o,setValue:d,navState:[!0,p],marker:K.FIRST_MONTH,locale:M})),t.createElement(A,{orientation:g?"horizontal":"vertical",flexItem:!0}),t.createElement(re,Object.assign({},u,{value:h,setValue:y,navState:[p,!0],marker:K.SECOND_MONTH,locale:M}))))))},et=e=>{const a=new Date,{open:n,onChange:r,initialDateRange:s,minDate:o,maxDate:d,definedRanges:h=$e(new Date,e.locale),locale:y,verticalOrientation:c}=e,i=ne(o,N(a,-10)),f=ne(d,N(a,10)),[M,g]=Ke(s||{},i,f),[R,v]=T.useState(Object.assign({},s)),[p,u]=T.useState(),[x,O]=T.useState(M||a),[b,C]=T.useState(g||k(x,1)),{startDate:w,endDate:H}=R,de=l=>{I(l,b)&&O(l)},ue=l=>{Z(l,x)&&C(l)},me=l=>{let{startDate:D,endDate:E}=l;if(D&&E)l.startDate=D=oe([D,i]),l.endDate=E=ie([E,f]),v(l),r(l),O(D),C($(D,E)?k(D,1):E);else{const U={};v(U),r(U),O(a),C(k(x,1))}},pe=l=>{if(w&&!H&&!I(l,w)){const D={startDate:w,endDate:l};r(D),v(D)}else v({startDate:l,endDate:void 0});u(l)},ge=(l,D)=>{if(l===K.FIRST_MONTH){const E=k(x,D);I(E,b)&&O(E)}else{const E=k(b,D);I(x,E)&&C(E)}},he=l=>{w&&!H&&(!p||!S(l,p))&&u(l)},fe={inHoverRange:l=>w&&!H&&p&&Z(p,w)&&J(l,{start:w,end:p})},ve={onDayClick:pe,onDayHover:he,onMonthNavigate:ge};return n?T.createElement(Ze,{dateRange:R,minDate:i,maxDate:f,ranges:h,firstMonth:x,secondMonth:b,setFirstMonth:de,setSecondMonth:ue,setDateRange:me,helpers:fe,handlers:ve,locale:y,verticalOrientation:!!c}):null},tt=e=>{const{closeOnClickOutside:a,wrapperClassName:n,toggle:r,open:s}=e,o=()=>{a!==!1&&r()},d=h=>(h==null?void 0:h.key)==="Escape"&&o();return t.createElement(_,{sx:{position:"relative"}},s&&t.createElement(_,{sx:{position:"fixed",height:"100vh",width:"100vw",bottom:0,zIndex:0,right:0,left:0,top:0},onKeyPress:d,onClick:o}),t.createElement(_,{sx:{position:"relative",zIndex:1},className:n},t.createElement(et,Object.assign({},e))))},rt=e=>t.createElement(tt,Object.assign({},e));export{rt as D};
//# sourceMappingURL=index.es-0GaMr3jB.js.map