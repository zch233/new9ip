import{a8 as r}from"./index.2fd7dcd5.js";import{a as t}from"./isSymbol.8cc5df83.js";function n(r,t){for(var n=-1,i=null==r?0:r.length,a=Array(i);++n<i;)a[n]=t(r[n],n,r);return a}var i=Array.isArray,a=r?r.prototype:void 0,o=a?a.toString:void 0;function f(r){if("string"==typeof r)return r;if(i(r))return n(r,f)+"";if(t(r))return o?o.call(r):"";var a=r+"";return"0"==a&&1/r==-Infinity?"-0":a}function e(r){return null==r?"":f(r)}export{n as a,f as b,i,e as t};
