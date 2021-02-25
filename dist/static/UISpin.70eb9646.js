import{d as n,S as t,aj as i,P as e,G as r,H as a,I as s,B as o,E as c,ab as l,k as p,N as u,z as d,h as f,i as g,j as b,y,q as h}from"./index.99b5cbf9.js";import{d as m}from"./debounce.9901331d.js";function v(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.push.apply(i,e)}return i}function O(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){S(n,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))}))}return n}function S(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function j(n){return"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!c(n)}var P=e.oneOf(d("small","default","large")),w=null;var x=n({name:"ASpin",mixins:[t],inheritAttrs:!1,props:i({prefixCls:e.string,spinning:e.looseBool,size:P,wrapperClassName:e.string,tip:e.string,delay:e.number,indicator:e.any},{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:r("configProvider",a)}},data:function(){var n=this.spinning,t=function(n,t){return!!n&&!!t&&!isNaN(Number(t))}(n,this.delay);return{sSpinning:n&&!t}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;s((function(){n.debouncifyUpdateSpinning(),n.updateSpinning()}))},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var t=(n||this.$props).delay;t&&(this.cancelExistingSpin(),this.updateSpinning=m(this.originalUpdateSpinning,t))},updateSpinning:function(){var n=this.spinning;this.sSpinning!==n&&this.setState({sSpinning:n})},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var t="".concat(n,"-dot"),i=o(this,"indicator");return null===i?null:(Array.isArray(i)&&(i=1===i.length?i[0]:i),c(i)?l(i,{class:t}):w&&c(w())?l(w(),{class:t}):p("span",{class:"".concat(t," ").concat(n,"-dot-spin")},[p("i",{class:"".concat(n,"-dot-item")},null),p("i",{class:"".concat(n,"-dot-item")},null),p("i",{class:"".concat(n,"-dot-item")},null),p("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,t=this.$props,i=t.size,e=t.prefixCls,r=t.tip,a=t.wrapperClassName,s=this.$attrs,o=s.class,c=s.style,l=function(n,t){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(i[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(i[e[r]]=n[e[r]])}return i}(s,["class","style"]),d=(0,this.configProvider.getPrefixCls)("spin",e),f=this.sSpinning,g=(S(n={},d,!0),S(n,"".concat(d,"-sm"),"small"===i),S(n,"".concat(d,"-lg"),"large"===i),S(n,"".concat(d,"-spinning"),f),S(n,"".concat(d,"-show-text"),!!r),S(n,o,!!o),n),b=p("div",O(O({},l),{},{style:c,class:g}),[this.renderIndicator(d),r?p("div",{class:"".concat(d,"-text")},j(r)?r:{default:function(){return[r]}}):null]),y=u(this);if(y&&y.length){var h,m=(S(h={},"".concat(d,"-container"),!0),S(h,"".concat(d,"-blur"),f),h);return p("div",{class:["".concat(d,"-nested-loading"),a]},[f&&p("div",{key:"loading"},j(b)?b:{default:function(){return[b]}}),p("div",{class:m,key:"container"},j(y)?y:{default:function(){return[y]}})])}return b}});x.setDefaultIndicator=function(n){var t=n.indicator;w="function"==typeof t?t:function(){return p(t,null,null)}},x.install=function(n){return n.component(x.name,x),n};var U=n({name:"UISpin",components:{AntSpin:x}});const E=h("data-v-4dc68c71"),I=E(((n,t,i,e,r,a)=>{const s=f("AntSpin");return g(),b(s,null,{default:E((()=>[y(n.$slots,"default")])),_:3})}));U.render=I,U.__scopeId="data-v-4dc68c71";export{U as _};
