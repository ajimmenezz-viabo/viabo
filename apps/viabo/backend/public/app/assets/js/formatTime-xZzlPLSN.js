import{ce as s,cf as n,aw as a,cg as o,ch as t,b5 as r,b6 as l,c9 as D,ci as c,cj as i,c8 as b,aM as O,ca as d,du as M}from"./vendor-pMbAJ2vN.js";function g(e){return O(new Date(e),"dd MMM yyyy HH:mm",{locale:a})}function j(e){const m=d(e),f=new Date().getTimezoneOffset();return M(m,f)}const h=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],p=(e=new Date)=>[{label:"Hoy",startDate:e,endDate:e},{label:"Ayer",startDate:s(e,-1),endDate:s(e,-1)},{label:"Esta Semana",startDate:n(e,{locale:a}),endDate:o(e,{locale:a})},{label:"Última Semana",startDate:n(t(e,-1),{locale:a}),endDate:o(t(e,-1),{locale:a})},{label:"Últimos 7 Días",startDate:t(e,-1),endDate:e},{label:"Este Mes",startDate:r(e),endDate:l(e)},{label:"Último Mes",startDate:r(D(e,-1)),endDate:l(D(e,-1))},{label:"Este Año",startDate:c(e),endDate:i(e)},{label:"Último Año",startDate:c(b(e,-1)),endDate:i(b(e,-1))}];export{g as f,p as g,h as m,j as n};
//# sourceMappingURL=formatTime-xZzlPLSN.js.map