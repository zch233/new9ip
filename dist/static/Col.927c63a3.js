import{y as t,d as n,$ as e,a8 as r,o,aq as c,r as a,E as i,K as s,z as u,j as l,P as f}from"./index.c6205360.js";function p(){return(p=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var d=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},y=new Map,b=-1,x={},v={matchHandlers:{},dispatch:function(t){return x=t,y.forEach((function(t){return t(x)})),y.size>=1},subscribe:function(t){return y.size||this.register(),b+=1,y.set(b,t),t(x),b},unsubscribe:function(t){y.delete(t),y.size||this.unregister()},unregister:function(){var t=this;Object.keys(m).forEach((function(n){var e=m[n],r=t.matchHandlers[e];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),y.clear()},register:function(){var t=this;Object.keys(m).forEach((function(n){var e=m[n],r=function(e){var r,o,c,a=e.matches;t.dispatch(p(p({},x),(c=a,(o=n)in(r={})?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,r)))},o=window.matchMedia(e);o.addListener(r),t.matchHandlers[e]={mql:o,listener:r},r(o)}))}};function g(){return(g=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var w=t("top","middle","bottom","stretch"),O=t("start","end","center","space-around","space-between"),P=n({name:"ARow",setup:function(t,n){var f,p=n.slots,m=e({gutter:void 0});r("rowContext",m),o((function(){f=v.subscribe((function(n){var e=t.gutter||0;(!Array.isArray(e)&&"object"===j(e)||Array.isArray(e)&&("object"===j(e[0])||"object"===j(e[1])))&&(y.value=n)}))})),c((function(){v.unsubscribe(f)}));var y=a({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),b=i("configProvider",s).getPrefixCls;return function(){var n,e,r=t.prefixCls,o=t.justify,c=t.align,a=b("row",r),i=function(){var n=[0,0],e=t.gutter,r=void 0===e?0:e;return(Array.isArray(r)?r:[r,0]).forEach((function(t,e){if("object"===j(t))for(var r=0;r<d.length;r++){var o=d[r];if(y.value[o]&&void 0!==t[o]){n[e]=t[o];break}}else n[e]=t||0})),n}(),s=u(a,(h(n={},"".concat(a,"-").concat(o),o),h(n,"".concat(a,"-").concat(c),c),n)),f=g(g({},i[0]>0?{marginLeft:"".concat(i[0]/-2,"px"),marginRight:"".concat(i[0]/-2,"px")}:{}),i[1]>0?{marginTop:"".concat(i[1]/-2,"px"),marginBottom:"".concat(i[1]/-2,"px")}:{});return m.gutter=i,l("div",{class:s,style:f},[null===(e=p.default)||void 0===e?void 0:e.call(p)])}}});function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function A(){return(A=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}P.props={type:f.oneOf(["flex"]),align:f.oneOf(w),justify:f.oneOf(O),prefixCls:f.string,gutter:f.oneOfType([f.object,f.number,f.array]).def(0)};var E=n({name:"ACol",setup:function(t,n){var e=n.slots,r=i("configProvider",s),o=i("rowContext",{});return function(){var n,c,a=o.gutter,i=t.prefixCls,s=t.span,f=t.order,p=t.offset,d=t.push,m=t.pull,y=t.flex,b=r.getPrefixCls("col",i),x={};["xs","sm","md","lg","xl","xxl"].forEach((function(n){var e,r={},o=t[n];"number"==typeof o?r.span=o:"object"===C(o)&&(r=o||{}),x=A(A({},x),(S(e={},"".concat(b,"-").concat(n,"-").concat(r.span),void 0!==r.span),S(e,"".concat(b,"-").concat(n,"-order-").concat(r.order),r.order||0===r.order),S(e,"".concat(b,"-").concat(n,"-offset-").concat(r.offset),r.offset||0===r.offset),S(e,"".concat(b,"-").concat(n,"-push-").concat(r.push),r.push||0===r.push),S(e,"".concat(b,"-").concat(n,"-pull-").concat(r.pull),r.pull||0===r.pull),e))}));var v=u(b,(S(n={},"".concat(b,"-").concat(s),void 0!==s),S(n,"".concat(b,"-order-").concat(f),f),S(n,"".concat(b,"-offset-").concat(p),p),S(n,"".concat(b,"-push-").concat(d),d),S(n,"".concat(b,"-pull-").concat(m),m),n),x),g={};return a&&(g=A(A(A({},a[0]>0?{paddingLeft:"".concat(a[0]/2,"px"),paddingRight:"".concat(a[0]/2,"px")}:{}),a[1]>0?{paddingTop:"".concat(a[1]/2,"px"),paddingBottom:"".concat(a[1]/2,"px")}:{}),g)),y&&(g.flex=function(t){return"number"==typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(y)),l("div",{class:v,style:g},[null===(c=e.default)||void 0===c?void 0:c.call(e)])}}}),T=f.oneOfType([f.string,f.number]),z=f.shape({span:T,order:T,offset:T,push:T,pull:T}).loose,L=f.oneOfType([f.string,f.number,z]);E.props={span:T,order:T,offset:T,push:T,pull:T,xs:L,sm:L,md:L,lg:L,xl:L,xxl:L,prefixCls:f.string,flex:T};export{E as A,P as a};
