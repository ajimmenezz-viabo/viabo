import{dr as e}from"./index-4598388a.js";const s="ee7d04ee525edf82277cbec0c1084788",E=r=>{const A=JSON.stringify(r),t=e.enc.Utf8.parse(s),c=e.lib.WordArray.random(16),n=e.AES.encrypt(A,t,{iv:c}).toString(),o=e.enc.Base64.stringify(c);return{ciphertext:n,iv:o}},a=(r,A)=>{try{const t=e.enc.Utf8.parse(s),c=e.enc.Base64.parse(A),n=e.enc.Base64.parse(r),_=e.AES.decrypt({ciphertext:n},t,{iv:c}).toString(e.enc.Utf8);return JSON.parse(_)??null}catch{return null}};export{E as a,a as g};
