import{a4 as t,$ as e,E as n,aA as r,d as a,r as o,aU as i,e as u,p as c,f as s,g as l,h as f,i as v,m as d,n as h}from"./index.e0d03852.js";import{a as g}from"./toString.7ea59509.js";import{n as p,o as m,u as b}from"./identity.16017226.js";import{d as y}from"./debounce.b5f9dfa3.js";import{s as j,a as w,o as O}from"./omit.ba35c8f5.js";import{b as k,S as C,c as I,d as P,v as S,e as A,f as U,i as V}from"./UIFormItem.cb9fbe8d.js";import{s as q}from"./UICountdown.98708d11.js";import{s as E}from"./UIButton.5e81bc30.js";function F(t){return t!=t}function B(t,e){return!!(null==t?0:t.length)&&function(t,e,n){return e==e?function(t,e,n){for(var r=n-1,a=t.length;++r<a;)if(t[r]===e)return r;return-1}(t,e,n):k(t,F,n)}(t,e,0)>-1}function L(t,e,n){for(var r=-1,a=null==t?0:t.length;++r<a;)if(n(e,t[r]))return!0;return!1}var M=Math.min;function x(e){return function(e){return t(e)&&m(e)}(e)?e:[]}var D,R,_=j(w(D=function(t){var e=g(t,x);return e.length&&e[0]===t[0]?function(t,e,n){for(var r=n?L:B,a=t[0].length,o=t.length,i=o,u=Array(o),c=1/0,s=[];i--;){var l=t[i];i&&e&&(l=g(l,b(e))),c=M(l.length,c),u[i]=!n&&(e||a>=120&&l.length>=120)?new C(i&&l):void 0}l=t[0];var f=-1,v=u[0];t:for(;++f<a&&s.length<c;){var d=l[f],h=e?e(d):d;if(d=n||0!==d?d:0,!(v?I(v,h):r(s,h,n))){for(i=o;--i;){var p=u[i];if(!(p?I(p,h):r(t[i],h,n)))continue t}v&&v.push(h),s.push(d)}}return s}(e):[]},R,p),D+"");function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){z(t,e,n[e])}))}return t}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G(){return(G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function H(t){var e=!1;return t&&t.length&&t.every((function(t){return!t.required||(e=!0,!1)})),e}function J(t){return null==t?[]:Array.isArray(t)?t:[t]}function K(t,e,n){for(var r=t,a=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,i=a.length;o<i-1&&(r||n);++o){var u=a[o];if(!(u in r)){if(n)throw new Error("please transfer a valid name path to validate!");break}r=r[u]}return{o:r,k:a[o],v:r?r[a[o]]:null,isValid:r&&a[o]in r}}function N(t,a,o){var i=P(t),u={};Object.keys(a).forEach((function(t){u[t]={autoLink:!1,required:H(a[t])}})),u=e(u);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return e.length?t.filter((function(t){var n=J(t.trigger||"change");return _(n,e).length})):t},s=null,l=function(t,e,n,r){var a=S([t],e,n,$({validateMessages:A},r),!!r.validateFirst);return u[t].validateStatus="validating",a.catch((function(t){return t})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"validating"===u[t].validateStatus&&(u[t].validateStatus=e.length?"error":"success",u[t].help=e[0])})),a},f=function(e,n){var r=[],o=!0;e?r=Array.isArray(e)?e:[e]:(o=!1,r=Object.keys(a));var i=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=[],i={},u=function(u){var s=e[u],f=K(t,s,r);if(!f.isValid)return"continue";i[s]=f.v;var v=c(a[s],J(n&&n.trigger));v.length&&o.push(l(s,f.v,v,n||{}).then((function(){return{name:s,errors:[]}})).catch((function(t){return Promise.reject({name:s,errors:t})})))},f=0;f<e.length;f++)u(f);var v=U(o);s=v;var d=v.then((function(){return s===v?Promise.resolve(i):Promise.reject([])})).catch((function(t){var e=t.filter((function(t){return t&&t.errors.length}));return Promise.reject({values:i,errorFields:e,outOfDate:s!==v})}));return d.catch((function(t){return t})),d}(r,n||{},o);return i.catch((function(t){return t})),i},v=i,d=function(t){var e=[];Object.keys(a).forEach((function(n){var r=K(t,n,!1),a=K(v,n,!1);V(r.v,a.v)||e.push(n)})),f(e,{trigger:"change"}),v=P(t)},h=null==o?void 0:o.debounce;return r(t,h&&h.wait?y(d,h.wait,O(h,["wait"])):d,{immediate:o&&!!o.immediate,deep:!0}),r(a,(function(){o&&o.validateOnRuleChange&&f()}),{deep:!0}),{modelRef:t,rulesRef:a,initialModel:i,validateInfos:u,resetFields:function(e){G(t,$({},P(i),e)),n((function(){Object.keys(u).forEach((function(t){u[t]={autoLink:!1,required:H(a[t])}}))}))},validate:f,validateField:l,mergeValidateInfo:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={autoLink:!1},n=[],r=Array.isArray(t)?t:[t],a=0;a<r.length;a++){var o=r[a];"error"===(null==o?void 0:o.validateStatus)&&(e.validateStatus="error",o.help&&n.push(o.help)),e.required=e.required||(null==o?void 0:o.required)}return e.help=n.join("\n"),e}}}var Q=a({name:"Captcha",components:{UIButton:E,UICountdown:q},props:{info:Object,member:Boolean},setup({info:t,member:e}){const n=o(!1),r=o(!1);return{captchaLoading:r,countdownVisible:n,getCaptcha:async()=>{r.value=!0,await i[e?"getMemberCaptcha":"getCaptcha"](t).finally((()=>r.value=!1)),n.value=!n.value,u.success("获取验证码成功")}}}});const T=d("data-v-f71d6872");c("data-v-f71d6872");const W=h("获取");s();const X=T(((t,e,n,r,a,o)=>{const i=l("UIButton"),u=l("UICountdown");return t.countdownVisible?(f(),v(u,{key:1,onFinish:e[1]||(e[1]=e=>t.countdownVisible=!t.countdownVisible),value:Date.now()+6e4,suffix:"s",format:"ss"},null,8,["value"])):(f(),v(i,{key:0,class:"captchaButton",loading:t.captchaLoading,block:"",onClick:t.getCaptcha},{default:T((()=>[W])),_:1},8,["loading","onClick"]))}));Q.render=X,Q.__scopeId="data-v-f71d6872";export{Q as s,N as u};
