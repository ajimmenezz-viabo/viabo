import{l as W}from"./preact.module.CkmrGwYL.js";var v,i,d,V,p=0,C=[],m=[],u=W,F=u.__b,q=u.__r,A=u.diffed,g=u.__c,k=u.unmount,U=u.__;function H(_,t){u.__h&&u.__h(i,_,p||t),p=0;var r=i.__H||(i.__H={__:[],__h:[]});return _>=r.__.length&&r.__.push({__V:m}),r.__[_]}function S(_){return p=1,j(x,_)}function j(_,t,r){var o=H(v++,2);if(o.t=_,!o.__c&&(o.__=[r?r(t):x(void 0,t),function(c){var e=o.__N?o.__N[0]:o.__[0],f=o.t(e,c);e!==f&&(o.__N=[f,o.__[1]],o.__c.setState({}))}],o.__c=i,!i.u)){var a=function(c,e,f){if(!o.__c.__H)return!0;var l=o.__c.__H.__.filter(function(n){return!!n.__c});if(l.every(function(n){return!n.__N}))return!h||h.call(this,c,e,f);var y=!1;return l.forEach(function(n){if(n.__N){var P=n.__[0];n.__=n.__N,n.__N=void 0,P!==n.__[0]&&(y=!0)}}),!(!y&&o.__c.props===c)&&(!h||h.call(this,c,e,f))};i.u=!0;var h=i.shouldComponentUpdate,E=i.componentWillUpdate;i.componentWillUpdate=function(c,e,f){if(this.__e){var l=h;h=void 0,a(c,e,f),h=l}E&&E.call(this,c,e,f)},i.shouldComponentUpdate=a}return o.__N||o.__}function $(_,t){var r=H(v++,3);!u.__s&&T(r.__H,t)&&(r.__=_,r.i=t,i.__H.__h.push(r))}function G(_){return p=5,w(function(){return{current:_}},[])}function w(_,t){var r=H(v++,7);return T(r.__H,t)?(r.__V=_(),r.i=t,r.__h=_,r.__V):r.__}function I(_){var t=i.context[_.__c],r=H(v++,9);return r.c=_,t?(r.__==null&&(r.__=!0,t.sub(i)),t.props.value):_.__}function z(){for(var _;_=C.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(s),_.__H.__h.forEach(N),_.__H.__h=[]}catch(t){_.__H.__h=[],u.__e(t,_.__v)}}u.__b=function(_){i=null,F&&F(_)},u.__=function(_,t){_&&t.__k&&t.__k.__m&&(_.__m=t.__k.__m),U&&U(_,t)},u.__r=function(_){q&&q(_),v=0;var t=(i=_.__c).__H;t&&(d===i?(t.__h=[],i.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=m,r.__N=r.i=void 0})):(t.__h.forEach(s),t.__h.forEach(N),t.__h=[],v=0)),d=i},u.diffed=function(_){A&&A(_);var t=_.__c;t&&t.__H&&(t.__H.__h.length&&(C.push(t)!==1&&V===u.requestAnimationFrame||((V=u.requestAnimationFrame)||B)(z)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==m&&(r.__=r.__V),r.i=void 0,r.__V=m})),d=i=null},u.__c=function(_,t){t.some(function(r){try{r.__h.forEach(s),r.__h=r.__h.filter(function(o){return!o.__||N(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],u.__e(o,r.__v)}}),g&&g(_,t)},u.unmount=function(_){k&&k(_);var t,r=_.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{s(o)}catch(a){t=a}}),r.__H=void 0,t&&u.__e(t,r.__v))};var b=typeof requestAnimationFrame=="function";function B(_){var t,r=function(){clearTimeout(o),b&&cancelAnimationFrame(t),setTimeout(_)},o=setTimeout(r,100);b&&(t=requestAnimationFrame(r))}function s(_){var t=i,r=_.__c;typeof r=="function"&&(_.__c=void 0,r()),i=t}function N(_){var t=i;_.__c=_.__(),i=t}function T(_,t){return!_||_.length!==t.length||t.some(function(r,o){return r!==_[o]})}function x(_,t){return typeof t=="function"?t(_):t}export{G as F,I as P,$ as _,S as p,w as q};
