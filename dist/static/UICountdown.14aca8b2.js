import{j as t,D as e,d as r,E as n,A as o,P as u,K as i,aM as a,aN as f,g as c,h as s,i as l,m as d}from"./index.c6205360.js";import{i as p}from"./CloseOutlined.c59b861f.js";import{b as v,t as m}from"./toString.952967e1.js";import{b}from"./_baseSlice.1123a25b.js";import{b as y,t as h}from"./_baseProperty.aeaa2c40.js";var g=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function O(t){return g.test(t)}var j="[\\ud800-\\udfff]",w="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",S="\\ud83c[\\udffb-\\udfff]",P="[^\\ud800-\\udfff]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",C="[\\ud800-\\udbff][\\udc00-\\udfff]",I="(?:"+w+"|"+S+")"+"?",D="[\\ufe0e\\ufe0f]?"+I+("(?:\\u200d(?:"+[P,x,C].join("|")+")[\\ufe0e\\ufe0f]?"+I+")*"),A="(?:"+[P+w+"?",w,x,C,j].join("|")+")",$=RegExp(S+"(?="+S+")|"+A+D,"g");function E(t){return O(t)?function(t){return t.match($)||[]}(t):function(t){return t.split("")}(t)}var T=Math.floor;function R(t,e){var r="";if(!t||e<1||e>9007199254740991)return r;do{e%2&&(r+=t),(e=T(e/2))&&(t+=t)}while(e);return r}var M=y("length"),N="[\\ud800-\\udfff]",H="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",k="\\ud83c[\\udffb-\\udfff]",U="[^\\ud800-\\udfff]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",V="[\\ud800-\\udbff][\\udc00-\\udfff]",B="(?:"+H+"|"+k+")"+"?",F="[\\ufe0e\\ufe0f]?"+B+("(?:\\u200d(?:"+[U,_,V].join("|")+")[\\ufe0e\\ufe0f]?"+B+")*"),K="(?:"+[U+H+"?",H,_,V,N].join("|")+")",Y=RegExp(k+"(?="+k+")|"+K+F,"g");function q(t){return O(t)?function(t){for(var e=Y.lastIndex=0;Y.test(t);)++e;return e}(t):M(t)}var z=Math.ceil;function G(t,e){var r=(e=void 0===e?" ":v(e)).length;if(r<2)return r?R(e,t):e;var n=R(e,z(t/q(e)));return O(e)?function(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:b(t,e,r)}(E(n),0,t).join(""):n.slice(0,t)}function J(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!e(t)}var L=function(e){var r,n=e.value,o=e.formatter,u=e.precision,i=e.decimalSeparator,a=e.groupSeparator,f=void 0===a?"":a,c=e.prefixCls;if("function"==typeof o)r=o({value:n});else{var s=String(n),l=s.match(/^(-?)(\d*)(\.(\d+))?$/);if(l){var d=l[1],p=l[2]||"0",v=l[4]||"";p=p.replace(/\B(?=(\d{3})+(?!\d))/g,f),"number"==typeof u&&(v=function(t,e,r){t=m(t);var n=(e=h(e))?q(t):0;return e&&n<e?t+G(e-n,r):t}(v,u,"0").slice(0,u)),v&&(v="".concat(i).concat(v)),r=[t("span",{key:"int",class:"".concat(c,"-content-value-int")},[d,p]),v&&t("span",{key:"decimal",class:"".concat(c,"-content-value-decimal")},J(v)?v:{default:function(){return[v]}})]}else r=s}return t("span",{class:"".concat(c,"-content-value")},J(r)?r:{default:function(){return[r]}})};function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function X(){return(X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function Z(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!e(t)}L.displayName="StatisticNumber";var tt={prefixCls:u.string,decimalSeparator:u.string,groupSeparator:u.string,format:u.string,value:{type:[String,Number,Object]},valueStyle:u.style,valueRender:u.any,formatter:u.any,precision:u.number,prefix:u.VNodeChild,suffix:u.VNodeChild,title:u.VNodeChild,onFinish:u.func},et=r({name:"AStatistic",props:p(tt,{decimalSeparator:".",groupSeparator:","}),setup:function(){return{configProvider:n("configProvider",i)}},render:function(){var e=this.$props,r=e.prefixCls,n=e.value,u=void 0===n?0:n,i=e.valueStyle,a=e.valueRender,f=(0,this.configProvider.getPrefixCls)("statistic",r),c=o(this,"title"),s=o(this,"prefix"),l=o(this,"suffix"),d=o(this,"formatter",{},!1),p=X(X({},this.$props),{prefixCls:f,value:u,formatter:d}),v=t(L,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(r),!0).forEach((function(e){W(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"data-for-update":Date.now()},p),null);return a&&(v=a(v)),t("div",{class:f},[c&&t("div",{class:"".concat(f,"-title")},Z(c)?c:{default:function(){return[c]}}),t("div",{style:i,class:"".concat(f,"-content")},[s&&t("span",{class:"".concat(f,"-content-prefix")},Z(s)?s:{default:function(){return[s]}}),v,l&&t("span",{class:"".concat(f,"-content-suffix")},Z(l)?l:{default:function(){return[l]}})])])}});function rt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return nt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return nt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var ot=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function ut(t,e){var r=t,n=/\[[^\]]*\]/g,o=(e.match(n)||[]).map((function(t){return t.slice(1,-1)})),u=e.replace(n,"[]"),i=ot.reduce((function(t,e){var n=rt(e,2),o=n[0],u=n[1];if(-1!==t.indexOf(o)){var i=Math.floor(r/u);return r-=i*u,t.replace(new RegExp("".concat(o,"+"),"g"),(function(t){var e=t.length;return function(t,e,r){t=m(t);var n=(e=h(e))?q(t):0;return e&&n<e?G(e-n,r)+t:t}(i.toString(),e,"0")}))}return t}),u),a=0;return i.replace(n,(function(){var t=o[a];return a+=1,t}))}function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function at(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ft(){return(ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function ct(t){return a(f)(t).valueOf()}var st=r({name:"AStatisticCountdown",props:p(tt,{format:"HH:mm:ss"}),setup:function(){return{countdownId:void 0}},mounted:function(){this.syncTimer()},updated:function(){this.syncTimer()},beforeUnmount:function(){this.stopTimer()},methods:{syncTimer:function(){ct(this.$props.value)>=Date.now()?this.startTimer():this.stopTimer()},startTimer:function(){var t=this;this.countdownId||(this.countdownId=window.setInterval((function(){t.$refs.statistic.$forceUpdate(),t.syncTimer()}),33.333333333333336))},stopTimer:function(){var t=this.$props.value;this.countdownId&&(clearInterval(this.countdownId),this.countdownId=void 0,ct(t)<Date.now()&&this.$emit("finish"))},formatCountdown:function(t){var e=t.value,r=t.config,n=this.$props.format;return function(t,e){var r=e.format,n=void 0===r?"":r,o=a(f)(t).valueOf(),u=a(f)().valueOf();return ut(Math.max(o-u,0),n)}(e,ft(ft({},r),{format:n}))},valueRenderHtml:function(t){return t}},render:function(){return t(et,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){at(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:"statistic"},ft(ft({},this.$props),{valueRender:this.valueRenderHtml,formatter:this.formatCountdown})),null)}});et.Countdown=st,et.install=function(t){return t.component(et.name,et),t.component(et.Countdown.name,et.Countdown),t};var lt=r({name:"UICountdown",components:{AntCountdown:et.Countdown}});const dt=d("data-v-0605eab2")(((t,e,r,n,o,u)=>{const i=c("AntCountdown");return s(),l(i)}));lt.render=dt,lt.__scopeId="data-v-0605eab2";export{lt as s};
