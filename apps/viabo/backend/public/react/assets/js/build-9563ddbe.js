function s(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,f]of t)if(!Object.is(f,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(e,n[r])||!Object.is(t[n[r]],e[n[r]]))return!1;return!0}export{s};