import{i as t}from"./isSymbol.13a1df50.js";import{as as i}from"./index.d4733c31.js";import{t as n}from"./toNumber.0f3b5fa4.js";var r=function(){return i.Date.now()},o=Math.max,e=Math.min;function u(i,u,a){var f,c,m,v,d,s,l=0,p=!1,T=!1,x=!0;if("function"!=typeof i)throw new TypeError("Expected a function");function h(t){var n=f,r=c;return f=c=void 0,l=t,v=i.apply(r,n)}function y(t){return l=t,d=setTimeout(g,u),p?h(t):v}function b(t){var i=t-s;return void 0===s||i>=u||i<0||T&&t-l>=m}function g(){var t=r();if(b(t))return j(t);d=setTimeout(g,function(t){var i=u-(t-s);return T?e(i,m-(t-l)):i}(t))}function j(t){return d=void 0,x&&f?h(t):(f=c=void 0,v)}function w(){var t=r(),i=b(t);if(f=arguments,c=this,s=t,i){if(void 0===d)return y(s);if(T)return clearTimeout(d),d=setTimeout(g,u),h(s)}return void 0===d&&(d=setTimeout(g,u)),v}return u=n(u)||0,t(a)&&(p=!!a.leading,m=(T="maxWait"in a)?o(n(a.maxWait)||0,u):m,x="trailing"in a?!!a.trailing:x),w.cancel=function(){void 0!==d&&clearTimeout(d),l=0,f=s=c=d=void 0},w.flush=function(){return void 0===d?v:j(r())},w}export{u as d};