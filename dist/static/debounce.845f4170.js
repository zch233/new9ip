import{i as t}from"./isSymbol.eb973816.js";import{as as i}from"./index.41cae262.js";import{t as n}from"./toNumber.6fcb4a95.js";var r=function(){return i.Date.now()},o=Math.max,e=Math.min;function u(i,u,a){var f,c,m,v,s,d,l=0,p=!1,T=!1,x=!0;if("function"!=typeof i)throw new TypeError("Expected a function");function h(t){var n=f,r=c;return f=c=void 0,l=t,v=i.apply(r,n)}function b(t){return l=t,s=setTimeout(g,u),p?h(t):v}function y(t){var i=t-d;return void 0===d||i>=u||i<0||T&&t-l>=m}function g(){var t=r();if(y(t))return j(t);s=setTimeout(g,function(t){var i=u-(t-d);return T?e(i,m-(t-l)):i}(t))}function j(t){return s=void 0,x&&f?h(t):(f=c=void 0,v)}function w(){var t=r(),i=y(t);if(f=arguments,c=this,d=t,i){if(void 0===s)return b(d);if(T)return clearTimeout(s),s=setTimeout(g,u),h(d)}return void 0===s&&(s=setTimeout(g,u)),v}return u=n(u)||0,t(a)&&(p=!!a.leading,m=(T="maxWait"in a)?o(n(a.maxWait)||0,u):m,x="trailing"in a?!!a.trailing:x),w.cancel=function(){void 0!==s&&clearTimeout(s),l=0,f=d=c=s=void 0},w.flush=function(){return void 0===s?v:j(r())},w}export{u as d};