import{aa as r}from"./index.a7520e27.js";import{a as t}from"./isSymbol.2c981b4e.js";function n(r,t){for(var n=-1,a=null==r?0:r.length,i=Array(a);++n<a;)i[n]=t(r[n],n,r);return i}var a=Array.isArray,i=r?r.prototype:void 0,o=i?i.toString:void 0;function e(r){if("string"==typeof r)return r;if(a(r))return n(r,e)+"";if(t(r))return o?o.call(r):"";var i=r+"";return"0"==i&&1/r==-Infinity?"-0":i}function f(r){return null==r?"":e(r)}export{n as a,e as b,a as i,f as t};
