import{a8 as r}from"./index.fa7a2cf1.js";import{a as t}from"./isSymbol.5a43a1e3.js";function a(r,t){for(var a=-1,n=null==r?0:r.length,i=Array(n);++a<n;)i[a]=t(r[a],a,r);return i}var n=Array.isArray,i=r?r.prototype:void 0,o=i?i.toString:void 0;function f(r){if("string"==typeof r)return r;if(n(r))return a(r,f)+"";if(t(r))return o?o.call(r):"";var i=r+"";return"0"==i&&1/r==-Infinity?"-0":i}function e(r){return null==r?"":f(r)}export{a,f as b,n as i,e as t};
