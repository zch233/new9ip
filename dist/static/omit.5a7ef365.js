import{M as r,a3 as n}from"./index.2d5fe4a0.js";import{i as t,a}from"./toString.89c3b3ed.js";import{b as e,t as u,f as i,l as o,p as l,q as s,n as c,r as f,s as v,a as d}from"./identity.ebd63cad.js";import{b as g}from"./_baseSlice.1123a25b.js";function h(r,n){return null==(r=function(r,n){return n.length<2?r:e(r,g(n,0,-1))}(r,n=i(n,r)))||delete r[u((t=n,a=null==t?0:t.length,a?t[a-1]:void 0))];var t,a}function p(n){return r(n)?void 0:n}var b=n?n.isConcatSpreadable:void 0;function m(r){return t(r)||o(r)||!!(b&&r&&r[b])}function y(r,n,t,a,e){var u=-1,i=r.length;for(t||(t=m),e||(e=[]);++u<i;){var o=r[u];n>0&&t(o)?n>1?y(o,n-1,t,a,e):l(e,o):a||(e[e.length]=o)}return e}function j(r){return(null==r?0:r.length)?y(r,1):[]}function S(r,n,t){switch(t.length){case 0:return r.call(n);case 1:return r.call(n,t[0]);case 2:return r.call(n,t[0],t[1]);case 3:return r.call(n,t[0],t[1],t[2])}return r.apply(n,t)}var w=Math.max;function x(r,n,t){return n=w(void 0===n?r.length-1:n,0),function(){for(var a=arguments,e=-1,u=w(a.length-n,0),i=Array(u);++e<u;)i[e]=a[n+e];e=-1;for(var o=Array(n+1);++e<n;)o[e]=a[e];return o[n]=t(i),S(r,this,o)}}var A=s?function(r,n){return s(r,"toString",{configurable:!0,enumerable:!1,value:(t=n,function(){return t}),writable:!0});var t}:c,M=Date.now;var q,C,D,_=(q=A,C=0,D=0,function(){var r=M(),n=16-(r-D);if(D=r,n>0){if(++C>=800)return arguments[0]}else C=0;return q.apply(void 0,arguments)});var k=function(r){return _(x(r,void 0,j),r+"")}((function(r,n){var t={};if(null==r)return t;var e=!1;n=a(n,(function(n){return n=i(n,r),e||(e=n.length>1),n})),f(r,v(r),t),e&&(t=d(t,7,p));for(var u=n.length;u--;)h(t,n[u]);return t}));export{x as a,k as o,_ as s};