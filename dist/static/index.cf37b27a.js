import{a9 as e,d as t,r,b2 as n,e as a,p as o,f as i,h as u,i as c,j as l,q as s,m as f,$ as v,I as d,aL as h}from"./index.2b4c3c62.js";import{_ as g}from"./UIButton.6c205888.js";import{_ as p}from"./UICountdown.a7bbf830.js";import{b as m,S as b,c as y,d as j,v as w,e as O,f as k,i as I}from"./UIFormItem.c014768c.js";import{a as C}from"./toString.624e5c0b.js";import{n as P,o as S,u as A}from"./identity.5a383216.js";import{s as V,a as q,o as U}from"./omit.adf1eeb8.js";import{d as E}from"./debounce.cf8aee8a.js";function F(e){return e!=e}function L(e,t){return!!(null==e?0:e.length)&&function(e,t,r){return t==t?function(e,t,r){for(var n=r-1,a=e.length;++n<a;)if(e[n]===t)return n;return-1}(e,t,r):m(e,F,r)}(e,t,0)>-1}function _(e,t,r){for(var n=-1,a=null==e?0:e.length;++n<a;)if(r(t,e[n]))return!0;return!1}var x=Math.min;function B(t){return function(t){return e(t)&&S(t)}(t)?t:[]}var M,D,R=V(q(M=function(e){var t=C(e,B);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?_:L,a=e[0].length,o=e.length,i=o,u=Array(o),c=1/0,l=[];i--;){var s=e[i];i&&t&&(s=C(s,A(t))),c=x(s.length,c),u[i]=!r&&(t||a>=120&&s.length>=120)?new b(i&&s):void 0}s=e[0];var f=-1,v=u[0];e:for(;++f<a&&l.length<c;){var d=s[f],h=t?t(d):d;if(d=r||0!==d?d:0,!(v?y(v,h):n(l,h,r))){for(i=o;--i;){var g=u[i];if(!(g?y(g,h):n(e[i],h,r)))continue e}v&&v.push(h),l.push(d)}}return l}(t):[]},D,P),M+""),$=t({name:"Captcha",components:{UIButton:g,UICountdown:p},props:{info:Object,member:Boolean},setup({info:e,member:t}){const o=r(!1),i=r(!1);return{captchaLoading:i,countdownVisible:o,getCaptcha:()=>{return r=this,u=null,c=function*(){i.value=!0,yield n[t?"getMemberCaptcha":"getCaptcha"](e).finally((()=>i.value=!1)),o.value=!o.value,a.success("获取验证码成功")},new Promise(((e,t)=>{var n=e=>{try{o(c.next(e))}catch(r){t(r)}},a=e=>{try{o(c.throw(e))}catch(r){t(r)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,a);o((c=c.apply(r,u)).next())}));var r,u,c}}}});const z=s("data-v-63966a7d");o("data-v-63966a7d");const G=f("获取");i();const H=z(((e,t,r,n,a,o)=>{const i=u("UIButton"),s=u("UICountdown");return e.countdownVisible?(c(),l(s,{key:1,onFinish:t[1]||(t[1]=t=>e.countdownVisible=!e.countdownVisible),value:Date.now()+6e4,suffix:"s",format:"ss"},null,8,["value"])):(c(),l(i,{key:0,class:"captchaButton",loading:e.captchaLoading,block:"",onClick:e.getCaptcha},{default:z((()=>[G])),_:1},8,["loading","onClick"]))}));function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){K(e,t,r[t])}))}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e){var t=!1;return e&&e.length&&e.every((function(e){return!e.required||(t=!0,!1)})),t}function T(e){return null==e?[]:Array.isArray(e)?e:[e]}function W(e,t,r){for(var n=e,a=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,i=a.length;o<i-1&&(n||r);++o){var u=a[o];if(!(u in n)){if(r)throw new Error("please transfer a valid name path to validate!");break}n=n[u]}return{o:n,k:a[o],v:n?n[a[o]]:null,isValid:n&&a[o]in n}}function X(e,t,r){var n=j(e),a={};Object.keys(t).forEach((function(e){a[e]={autoLink:!1,required:Q(t[e])}})),a=v(a);var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.length?e.filter((function(e){var r=T(e.trigger||"change");return R(r,t).length})):e},i=null,u=function(e,t,r,n){var o=w([e],t,r,J({validateMessages:O},n),!!n.validateFirst);return a[e].validateStatus="validating",o.catch((function(e){return e})).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"validating"===a[e].validateStatus&&(a[e].validateStatus=t.length?"error":"success",a[e].help=t[0])})),o},c=function(r,n){var a=[],c=!0;r?a=Array.isArray(r)?r:[r]:(c=!1,a=Object.keys(t));var l=function(r){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,c=[],l={},s=function(i){var s=r[i],f=W(e,s,a);if(!f.isValid)return"continue";l[s]=f.v;var v=o(t[s],T(n&&n.trigger));v.length&&c.push(u(s,f.v,v,n||{}).then((function(){return{name:s,errors:[]}})).catch((function(e){return Promise.reject({name:s,errors:e})})))},f=0;f<r.length;f++)s(f);var v=k(c);i=v;var d=v.then((function(){return i===v?Promise.resolve(l):Promise.reject([])})).catch((function(e){var t=e.filter((function(e){return e&&e.errors.length}));return Promise.reject({values:l,errorFields:t,outOfDate:i!==v})}));return d.catch((function(e){return e})),d}(a,n||{},c);return l.catch((function(e){return e})),l},l=n,s=function(e){var r=[];Object.keys(t).forEach((function(t){var n=W(e,t,!1),a=W(l,t,!1);I(n.v,a.v)||r.push(t)})),c(r,{trigger:"change"}),l=j(e)},f=null==r?void 0:r.debounce;return h(e,f&&f.wait?E(s,f.wait,U(f,["wait"])):s,{immediate:r&&!!r.immediate,deep:!0}),h(t,(function(){r&&r.validateOnRuleChange&&c()}),{deep:!0}),{modelRef:e,rulesRef:t,initialModel:n,validateInfos:a,resetFields:function(r){N(e,J({},j(n),r)),d((function(){Object.keys(a).forEach((function(e){a[e]={autoLink:!1,required:Q(t[e])}}))}))},validate:c,validateField:u,mergeValidateInfo:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={autoLink:!1},r=[],n=Array.isArray(e)?e:[e],a=0;a<n.length;a++){var o=n[a];"error"===(null==o?void 0:o.validateStatus)&&(t.validateStatus="error",o.help&&r.push(o.help)),t.required=t.required||(null==o?void 0:o.required)}return t.help=r.join("\n"),t},clearValidate:function(e){(e?Array.isArray(e)?e:[e]:Object.keys(t)).forEach((function(e){a[e]&&N(a[e],{validateStatus:"",help:""})}))}}}$.render=H,$.__scopeId="data-v-63966a7d";export{$ as _,X as u};