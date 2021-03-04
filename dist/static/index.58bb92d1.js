import{a9 as t,d as e,r,b2 as n,e as a,p as o,f as i,h as u,i as c,j as l,q as s,m as f,$ as v,I as d,aL as h}from"./index.c379e03f.js";import{_ as g}from"./UIButton.86267bd7.js";import{_ as p}from"./UICountdown.d92421cc.js";import{b as m,S as b,c as y,d as j,v as w,e as O,f as k,i as I}from"./UIFormItem.b1295172.js";import{a as C}from"./toString.455deab0.js";import{n as P,o as S,u as A}from"./identity.24032014.js";import{s as V,a as q,o as U}from"./omit.c093bc68.js";import{d as E}from"./debounce.11087f68.js";function F(t){return t!=t}function L(t,e){return!!(null==t?0:t.length)&&function(t,e,r){return e==e?function(t,e,r){for(var n=r-1,a=t.length;++n<a;)if(t[n]===e)return n;return-1}(t,e,r):m(t,F,r)}(t,e,0)>-1}function _(t,e,r){for(var n=-1,a=null==t?0:t.length;++n<a;)if(r(e,t[n]))return!0;return!1}var x=Math.min;function B(e){return function(e){return t(e)&&S(e)}(e)?e:[]}var M,D,R=V(q(M=function(t){var e=C(t,B);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?_:L,a=t[0].length,o=t.length,i=o,u=Array(o),c=1/0,l=[];i--;){var s=t[i];i&&e&&(s=C(s,A(e))),c=x(s.length,c),u[i]=!r&&(e||a>=120&&s.length>=120)?new b(i&&s):void 0}s=t[0];var f=-1,v=u[0];t:for(;++f<a&&l.length<c;){var d=s[f],h=e?e(d):d;if(d=r||0!==d?d:0,!(v?y(v,h):n(l,h,r))){for(i=o;--i;){var g=u[i];if(!(g?y(g,h):n(t[i],h,r)))continue t}v&&v.push(h),l.push(d)}}return l}(e):[]},D,P),M+""),$=e({name:"Captcha",components:{UIButton:g,UICountdown:p},props:{info:Object,member:Boolean},setup({info:t,member:e}){const o=r(!1),i=r(!1);return{captchaLoading:i,countdownVisible:o,getCaptcha:()=>{return r=this,u=null,c=function*(){i.value=!0,yield n[e?"getMemberCaptcha":"getCaptcha"](t).finally((()=>i.value=!1)),o.value=!o.value,a.success("获取验证码成功")},new Promise(((t,e)=>{var n=t=>{try{o(c.next(t))}catch(r){e(r)}},a=t=>{try{o(c.throw(t))}catch(r){e(r)}},o=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,a);o((c=c.apply(r,u)).next())}));var r,u,c}}}});const z=s("data-v-63966a7d");o("data-v-63966a7d");const G=f("获取");i();const H=z(((t,e,r,n,a,o)=>{const i=u("UIButton"),s=u("UICountdown");return t.countdownVisible?(c(),l(s,{key:1,onFinish:e[1]||(e[1]=e=>t.countdownVisible=!t.countdownVisible),value:Date.now()+6e4,suffix:"s",format:"ss"},null,8,["value"])):(c(),l(i,{key:0,class:"captchaButton",loading:t.captchaLoading,block:"",onClick:t.getCaptcha},{default:z((()=>[G])),_:1},8,["loading","onClick"]))}));function J(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){K(t,e,r[e])}))}return t}function K(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function Q(t){var e=!1;return t&&t.length&&t.every((function(t){return!t.required||(e=!0,!1)})),e}function T(t){return null==t?[]:Array.isArray(t)?t:[t]}function W(t,e,r){for(var n=t,a=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,i=a.length;o<i-1&&(n||r);++o){var u=a[o];if(!(u in n)){if(r)throw new Error("please transfer a valid name path to validate!");break}n=n[u]}return{o:n,k:a[o],v:n?n[a[o]]:null,isValid:n&&a[o]in n}}function X(t,e,r){var n=j(t),a={};Object.keys(e).forEach((function(t){a[t]={autoLink:!1,required:Q(e[t])}})),a=v(a);var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return e.length?t.filter((function(t){var r=T(t.trigger||"change");return R(r,e).length})):t},i=null,u=function(t,e,r,n){var o=w([t],e,r,J({validateMessages:O},n),!!n.validateFirst);return a[t].validateStatus="validating",o.catch((function(t){return t})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"validating"===a[t].validateStatus&&(a[t].validateStatus=e.length?"error":"success",a[t].help=e[0])})),o},c=function(r,n){var a=[],c=!0;r?a=Array.isArray(r)?r:[r]:(c=!1,a=Object.keys(e));var l=function(r){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,c=[],l={},s=function(i){var s=r[i],f=W(t,s,a);if(!f.isValid)return"continue";l[s]=f.v;var v=o(e[s],T(n&&n.trigger));v.length&&c.push(u(s,f.v,v,n||{}).then((function(){return{name:s,errors:[]}})).catch((function(t){return Promise.reject({name:s,errors:t})})))},f=0;f<r.length;f++)s(f);var v=k(c);i=v;var d=v.then((function(){return i===v?Promise.resolve(l):Promise.reject([])})).catch((function(t){var e=t.filter((function(t){return t&&t.errors.length}));return Promise.reject({values:l,errorFields:e,outOfDate:i!==v})}));return d.catch((function(t){return t})),d}(a,n||{},c);return l.catch((function(t){return t})),l},l=n,s=function(t){var r=[];Object.keys(e).forEach((function(e){var n=W(t,e,!1),a=W(l,e,!1);I(n.v,a.v)||r.push(e)})),c(r,{trigger:"change"}),l=j(t)},f=null==r?void 0:r.debounce;return h(t,f&&f.wait?E(s,f.wait,U(f,["wait"])):s,{immediate:r&&!!r.immediate,deep:!0}),h(e,(function(){r&&r.validateOnRuleChange&&c()}),{deep:!0}),{modelRef:t,rulesRef:e,initialModel:n,validateInfos:a,resetFields:function(r){N(t,J({},j(n),r)),d((function(){Object.keys(a).forEach((function(t){a[t]={autoLink:!1,required:Q(e[t])}}))}))},validate:c,validateField:u,mergeValidateInfo:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={autoLink:!1},r=[],n=Array.isArray(t)?t:[t],a=0;a<n.length;a++){var o=n[a];"error"===(null==o?void 0:o.validateStatus)&&(e.validateStatus="error",o.help&&r.push(o.help)),e.required=e.required||(null==o?void 0:o.required)}return e.help=r.join("\n"),e},clearValidate:function(t){(t?Array.isArray(t)?t:[t]:Object.keys(e)).forEach((function(t){a[t]&&N(a[t],{validateStatus:"",help:""})}))}}}$.render=H,$.__scopeId="data-v-63966a7d";export{$ as _,X as u};
