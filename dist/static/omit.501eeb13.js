import{i as r,a as n}from"./toString.293450ed.js";import{b as t,t as a,f as e,l as u,p as i,q as o,n as l,r as s,s as f,a as c}from"./identity.39f42811.js";import{b as v}from"./_baseSlice.87986fb0.js";import{a4 as g,am as h}from"./index.2d7601a5.js";function d(r,n){return null==(r=function(r,n){return n.length<2?r:t(r,v(n,0,-1))}(r,n=e(n,r)))||delete r[a((u=n,i=null==u?0:u.length,i?u[i-1]:void 0))];var u,i}function m(r){return g(r)?void 0:r}var p=h?h.isConcatSpreadable:void 0;function b(n){return r(n)||u(n)||!!(p&&n&&n[p])}function y(r,n,t,a,e){var u=-1,o=r.length;for(t||(t=b),e||(e=[]);++u<o;){var l=r[u];n>0&&t(l)?n>1?y(l,n-1,t,a,e):i(e,l):a||(e[e.length]=l)}return e}function j(r){return(null==r?0:r.length)?y(r,1):[]}function S(r,n,t){switch(t.length){case 0:return r.call(n);case 1:return r.call(n,t[0]);case 2:return r.call(n,t[0],t[1]);case 3:return r.call(n,t[0],t[1],t[2])}return r.apply(n,t)}var w=Math.max;function x(r,n,t){return n=w(void 0===n?r.length-1:n,0),function(){for(var a=arguments,e=-1,u=w(a.length-n,0),i=Array(u);++e<u;)i[e]=a[n+e];e=-1;for(var o=Array(n+1);++e<n;)o[e]=a[e];return o[n]=t(i),S(r,this,o)}}var A=o?function(r,n){return o(r,"toString",{configurable:!0,enumerable:!1,value:(t=n,function(){return t}),writable:!0});var t}:l,q=Date.now;var C,D,M,_=(C=A,D=0,M=0,function(){var r=q(),n=16-(r-M);if(M=r,n>0){if(++D>=800)return arguments[0]}else D=0;return C.apply(void 0,arguments)});var k=function(r){return _(x(r,void 0,j),r+"")}((function(r,t){var a={};if(null==r)return a;var u=!1;t=n(t,(function(n){return n=e(n,r),u||(u=n.length>1),n})),s(r,f(r),a),u&&(a=c(a,7,m));for(var i=t.length;i--;)d(a,t[i]);return a}));export{x as a,k as o,_ as s};
