import{r as f}from"./index-e73cf17b.js";function p(c,t){const[u,e]=f.useState(1),r=Math.ceil(c.length/t);function o(){const n=(u-1)*t,a=n+t;return c.slice(n,a)}function i(){e(n=>Math.min(n+1,r))}function s(){e(n=>Math.max(n-1,1))}function m(n){const a=Math.max(1,n);e(g=>Math.min(a,r))}return{next:i,prev:s,jump:m,currentData:o,currentPage:u,maxPage:r}}export{p as u};
