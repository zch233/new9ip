import{d as n,S as t,al as e,P as i,G as r,H as a,I as s,B as o,E as c,ad as l,k as p,N as u,z as f,h as d,i as g,j as y,y as b,q as h}from"./index.7ce34f36.js";import{d as m}from"./debounce.1756e563.js";function v(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function O(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?v(Object(e),!0).forEach((function(t){S(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function S(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function j(n){return"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!c(n)}var P=i.oneOf(f("small","default","large")),w=null;var x=n({name:"ASpin",mixins:[t],inheritAttrs:!1,props:e({prefixCls:i.string,spinning:i.looseBool,size:P,wrapperClassName:i.string,tip:i.string,delay:i.number,indicator:i.any},{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:r("configProvider",a)}},data:function(){var n=this.spinning,t=function(n,t){return!!n&&!!t&&!isNaN(Number(t))}(n,this.delay);return{sSpinning:n&&!t}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;s((function(){n.debouncifyUpdateSpinning(),n.updateSpinning()}))},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var t=(n||this.$props).delay;t&&(this.cancelExistingSpin(),this.updateSpinning=m(this.originalUpdateSpinning,t))},updateSpinning:function(){var n=this.spinning;this.sSpinning!==n&&this.setState({sSpinning:n})},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var t="".concat(n,"-dot"),e=o(this,"indicator");return null===e?null:(Array.isArray(e)&&(e=1===e.length?e[0]:e),c(e)?l(e,{class:t}):w&&c(w())?l(w(),{class:t}):p("span",{class:"".concat(t," ").concat(n,"-dot-spin")},[p("i",{class:"".concat(n,"-dot-item")},null),p("i",{class:"".concat(n,"-dot-item")},null),p("i",{class:"".concat(n,"-dot-item")},null),p("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,t=this.$props,e=t.size,i=t.prefixCls,r=t.tip,a=t.wrapperClassName,s=this.$attrs,o=s.class,c=s.style,l=function(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(e[i[r]]=n[i[r]])}return e}(s,["class","style"]),f=(0,this.configProvider.getPrefixCls)("spin",i),d=this.sSpinning,g=(S(n={},f,!0),S(n,"".concat(f,"-sm"),"small"===e),S(n,"".concat(f,"-lg"),"large"===e),S(n,"".concat(f,"-spinning"),d),S(n,"".concat(f,"-show-text"),!!r),S(n,o,!!o),n),y=p("div",O(O({},l),{},{style:c,class:g}),[this.renderIndicator(f),r?p("div",{class:"".concat(f,"-text")},j(r)?r:{default:function(){return[r]}}):null]),b=u(this);if(b&&b.length){var h,m=(S(h={},"".concat(f,"-container"),!0),S(h,"".concat(f,"-blur"),d),h);return p("div",{class:["".concat(f,"-nested-loading"),a]},[d&&p("div",{key:"loading"},j(y)?y:{default:function(){return[y]}}),p("div",{class:m,key:"container"},j(b)?b:{default:function(){return[b]}})])}return y}});x.setDefaultIndicator=function(n){var t=n.indicator;w="function"==typeof t?t:function(){return p(t,null,null)}},x.install=function(n){return n.component(x.name,x),n};var U=n({name:"UISpin",components:{AntSpin:x}});const E=h("data-v-7ef87e22"),I=E(((n,t,e,i,r,a)=>{const s=d("AntSpin");return g(),y(s,null,{default:E((()=>[b(n.$slots,"default")])),_:3})}));U.render=I,U.__scopeId="data-v-7ef87e22";export{U as s};
