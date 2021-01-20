import{P as r,z as e,d as t,al as n,A as o,k as a,E as i,aY as s,V as l,am as c,G as u,H as f,J as p,h as d,i as y,j as h,y as v,q as b}from"./index.a7520e27.js";function g(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var m={prefixCls:r.string,size:r.oneOfType([r.oneOf(e("large","small","default")),r.number]),shape:r.oneOf(e("circle","square"))},w=r.shape(m).loose,O=t({props:n(m,{size:"large"}),render:function(){var r,e,t=this.$props,n=t.prefixCls,i=t.size,s=t.shape,l=o((g(r={},"".concat(n,"-lg"),"large"===i),g(r,"".concat(n,"-sm"),"small"===i),r)),c=o((g(e={},"".concat(n,"-circle"),"circle"===s),g(e,"".concat(n,"-square"),"square"===s),e)),u="number"==typeof i?{width:"".concat(i,"px"),height:"".concat(i,"px"),lineHeight:"".concat(i,"px")}:{};return a("span",{class:o(n,l,c),style:u},null)}}),x={prefixCls:r.string,width:r.oneOfType([r.number,r.string])},S=r.shape(x),j=t({props:x,render:function(){var r=this.$props,e=r.prefixCls,t=r.width,n="number"==typeof t?"".concat(t,"px"):t;return a("h3",{class:e,style:{width:n}},null)}});function A(r){return function(r){if(Array.isArray(r))return C(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,e){if(!r)return;if("string"==typeof r)return C(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(r,e)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var P=r.oneOfType([r.number,r.string]),T={prefixCls:r.string,width:r.oneOfType([P,r.arrayOf(P)]),rows:r.number},k=r.shape(T),$=t({props:T,methods:{getWidth:function(r){var e=this.width,t=this.rows,n=void 0===t?2:t;return Array.isArray(e)?e[r]:n-1===r?e:void 0}},render:function(){var r,e=this,t=this.$props,n=t.prefixCls,o=t.rows,s=A(Array(o)).map((function(r,t){var n=e.getWidth(t);return a("li",{key:t,style:{width:"number"==typeof n?"".concat(n,"px"):n}},null)}));return a("ul",{class:n},"function"==typeof(r=s)||"[object Object]"===Object.prototype.toString.call(r)&&!i(r)?s:{default:function(){return[s]}})}});function q(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function B(){return(B=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function I(r){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function z(r){return r&&"object"===I(r)?r:{}}var _=t({name:"ASkeleton",props:c({active:r.looseBool,loading:r.looseBool,prefixCls:r.string,children:r.any,avatar:l(r.oneOfType([r.string,w,r.looseBool])),title:l(r.oneOfType([r.looseBool,r.string,S])),paragraph:l(r.oneOfType([r.looseBool,r.string,k]))},{avatar:!1,title:!0,paragraph:!0}),setup:function(){return{configProvider:u("configProvider",f)}},render:function(){var r,e,t=this.$props,n=t.prefixCls,i=t.loading,s=t.avatar,l=t.title,c=t.paragraph,u=t.active,f=(0,this.configProvider.getPrefixCls)("skeleton",n);if(i||!p(this,"loading")){var d,y,h,v=!!s||""===s,b=!!l,g=!!c;if(v){var m=B(B({prefixCls:"".concat(f,"-avatar")},function(r,e){return r&&!e?{shape:"square"}:{shape:"circle"}}(b,g)),z(s));y=a("div",{class:"".concat(f,"-header")},[a(O,m,null)])}if(b||g){var w,x;if(b){var S=B(B({prefixCls:"".concat(f,"-title")},function(r,e){return!r&&e?{width:"38%"}:r&&e?{width:"50%"}:{}}(v,g)),z(l));w=a(j,S,null)}if(g){var A=B(B({prefixCls:"".concat(f,"-paragraph")},function(r,e){var t={};return r&&e||(t.width="61%"),t.rows=!r&&e?3:2,t}(v,b)),z(c));x=a($,A,null)}h=a("div",{class:"".concat(f,"-content")},[w,x])}var C=o(f,(q(d={},"".concat(f,"-with-avatar"),v),q(d,"".concat(f,"-active"),u),d));return a("div",{class:C},[y,h])}return null===(e=(r=this.$slots).default)||void 0===e?void 0:e.call(r)}}),E=t({name:"UISkeleton",components:{AntSkeleton:s(_)}});const H=b("data-v-fedbe4e0"),U=H(((r,e,t,n,o,a)=>{const i=d("AntSkeleton");return y(),h(i,null,{default:H((()=>[v(r.$slots,"default")])),_:3})}));E.render=U,E.__scopeId="data-v-fedbe4e0";export{E as s};