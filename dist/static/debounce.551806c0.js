import{ap as t}from"./index.d3df99f3.js";import{i}from"./isSymbol.2969ae6d.js";import{t as n}from"./toNumber.eb47767a.js";var r=function(){return t.Date.now()},o=Math.max,e=Math.min;function u(t,u,a){var f,c,m,d,v,s,p=0,l=!1,T=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(i){var n=f,r=c;return f=c=void 0,p=i,d=t.apply(r,n)}function y(t){return p=t,v=setTimeout(g,u),l?h(t):d}function b(t){var i=t-s;return void 0===s||i>=u||i<0||T&&t-p>=m}function g(){var t=r();if(b(t))return j(t);v=setTimeout(g,function(t){var i=u-(t-s);return T?e(i,m-(t-p)):i}(t))}function j(t){return v=void 0,x&&f?h(t):(f=c=void 0,d)}function w(){var t=r(),i=b(t);if(f=arguments,c=this,s=t,i){if(void 0===v)return y(s);if(T)return clearTimeout(v),v=setTimeout(g,u),h(s)}return void 0===v&&(v=setTimeout(g,u)),d}return u=n(u)||0,i(a)&&(l=!!a.leading,m=(T="maxWait"in a)?o(n(a.maxWait)||0,u):m,x="trailing"in a?!!a.trailing:x),w.cancel=function(){void 0!==v&&clearTimeout(v),p=0,f=s=c=v=void 0},w.flush=function(){return void 0===v?d:j(r())},w}export{u as d};
