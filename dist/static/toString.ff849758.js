import{a8 as r}from"./index.245536e6.js";import{a as t}from"./isSymbol.be5f5bc7.js";function n(r,t){for(var n=-1,i=null==r?0:r.length,a=Array(i);++n<i;)a[n]=t(r[n],n,r);return a}var i=Array.isArray,a=r?r.prototype:void 0,o=a?a.toString:void 0;function e(r){if("string"==typeof r)return r;if(i(r))return n(r,e)+"";if(t(r))return o?o.call(r):"";var a=r+"";return"0"==a&&1/r==-Infinity?"-0":a}function f(r){return null==r?"":e(r)}export{n as a,e as b,i,f as t};
