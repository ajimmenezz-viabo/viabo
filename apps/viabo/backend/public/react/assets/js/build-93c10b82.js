import{z as r,a as s,g as i,b as n}from"./index-0c89b1fb.js";import{v as u}from"./build-e43594ba.js";const m=(e={})=>{const{enqueueSnackbar:o}=r();return s({mutationFn:u,onError:a=>{const t=i(a,"No se puede validar el código");o(t,{variant:n(a),autoHideDuration:5e3})},...e})};export{m as u};