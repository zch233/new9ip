import{P as r,z as t,d as e,aj as n,A as o,k as a,E as i,aX as s,V as l,ak as c,G as u,H as f,J as p,h as y,i as d,j as h,y as v,q as b}from"./index.d4733c31.js";function g(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var m={prefixCls:r.string,size:r.oneOfType([r.oneOf(t("large","small","default")),r.number]),shape:r.oneOf(t("circle","square"))},w=r.shape(m).loose,O=e({props:n(m,{size:"large"}),render:function(){var r,t,e=this.$props,n=e.prefixCls,i=e.size,s=e.shape,l=o((g(r={},"".concat(n,"-lg"),"large"===i),g(r,"".concat(n,"-sm"),"small"===i),r)),c=o((g(t={},"".concat(n,"-circle"),"circle"===s),g(t,"".concat(n,"-square"),"square"===s),t)),u="number"==typeof i?{width:"".concat(i,"px"),height:"".concat(i,"px"),lineHeight:"".concat(i,"px")}:{};return a("span",{class:o(n,l,c),style:u},null)}}),x={prefixCls:r.string,width:r.oneOfType([r.number,r.string])},j=r.shape(x),S=e({props:x,render:function(){var r=this.$props,t=r.prefixCls,e=r.width,n="number"==typeof e?"".concat(e,"px"):e;return a("h3",{class:t,style:{width:n}},null)}});function A(r){return function(r){if(Array.isArray(r))return C(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"==typeof r)return C(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var k=r.oneOfType([r.number,r.string]),P={prefixCls:r.string,width:r.oneOfType([k,r.arrayOf(k)]),rows:r.number},T=r.shape(P),$=e({props:P,methods:{getWidth:function(r){var t=this.width,e=this.rows,n=void 0===e?2:e;return Array.isArray(t)?t[r]:n-1===r?t:void 0}},render:function(){var r,t=this,e=this.$props,n=e.prefixCls,o=e.rows,s=A(Array(o)).map((function(r,e){var n=t.getWidth(e);return a("li",{key:e,style:{width:"number"==typeof n?"".concat(n,"px"):n}},null)}));return a("ul",{class:n},"function"==typeof(r=s)||"[object Object]"===Object.prototype.toString.call(r)&&!i(r)?s:{default:function(){return[s]}})}});function q(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function B(){return(B=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r}).apply(this,arguments)}function I(r){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function z(r){return r&&"object"===I(r)?r:{}}var _=e({name:"ASkeleton",props:c({active:r.looseBool,loading:r.looseBool,prefixCls:r.string,children:r.any,avatar:l(r.oneOfType([r.string,w,r.looseBool])),title:l(r.oneOfType([r.looseBool,r.string,j])),paragraph:l(r.oneOfType([r.looseBool,r.string,T]))},{avatar:!1,title:!0,paragraph:!0}),setup:function(){return{configProvider:u("configProvider",f)}},render:function(){var r,t,e=this.$props,n=e.prefixCls,i=e.loading,s=e.avatar,l=e.title,c=e.paragraph,u=e.active,f=(0,this.configProvider.getPrefixCls)("skeleton",n);if(i||!p(this,"loading")){var y,d,h,v=!!s||""===s,b=!!l,g=!!c;if(v){var m=B(B({prefixCls:"".concat(f,"-avatar")},function(r,t){return r&&!t?{shape:"square"}:{shape:"circle"}}(b,g)),z(s));d=a("div",{class:"".concat(f,"-header")},[a(O,m,null)])}if(b||g){var w,x;if(b){var j=B(B({prefixCls:"".concat(f,"-title")},function(r,t){return!r&&t?{width:"38%"}:r&&t?{width:"50%"}:{}}(v,g)),z(l));w=a(S,j,null)}if(g){var A=B(B({prefixCls:"".concat(f,"-paragraph")},function(r,t){var e={};return r&&t||(e.width="61%"),e.rows=!r&&t?3:2,e}(v,b)),z(c));x=a($,A,null)}h=a("div",{class:"".concat(f,"-content")},[w,x])}var C=o(f,(q(y={},"".concat(f,"-with-avatar"),v),q(y,"".concat(f,"-active"),u),y));return a("div",{class:C},[d,h])}return null===(t=(r=this.$slots).default)||void 0===t?void 0:t.call(r)}}),E=e({name:"UISkeleton",components:{AntSkeleton:s(_)}});const H=b("data-v-9cc12908"),U=H(((r,t,e,n,o,a)=>{const i=y("AntSkeleton");return d(),h(i,null,{default:H((()=>[v(r.$slots,"default")])),_:3})}));E.render=U,E.__scopeId="data-v-9cc12908";export{E as _};