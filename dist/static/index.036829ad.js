import{d as t,N as e,P as n,Q as i,K as s,j as r,aN as o,B as c,I as a,A as l,y as f,D as p,J as u,g as d,h,i as m,x as g,m as v,aw as b}from"./index.2d5fe4a0.js";import{i as S,C as O}from"./CloseOutlined.337001ad.js";import{d as y}from"./debounce.4a39be88.js";import{C as x}from"./CheckOutlined.75abf2fa.js";function C(){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var t=window.document.documentElement;return"flex"in t.style||"webkitFlex"in t.style||"Flex"in t.style||"msFlex"in t.style}return!1}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=t({name:"Steps",mixins:[e],props:{type:n.string.def("default"),prefixCls:n.string.def("rc-steps"),iconPrefix:n.string.def("rc"),direction:n.string.def("horizontal"),labelPlacement:n.string.def("horizontal"),status:n.string.def("process"),size:n.string.def(""),progressDot:i(n.oneOfType([n.looseBool,n.func])),initial:n.number.def(0),current:n.number.def(0),icons:n.shape({finish:n.any,error:n.any}).loose,canClick:n.looseBool},data:function(){return this.calcStepOffsetWidth=y(this.calcStepOffsetWidth,150),{flexSupported:!0,lastStepOffsetWidth:0}},mounted:function(){var t=this;this.$nextTick((function(){t.calcStepOffsetWidth(),C()||t.setState({flexSupported:!1})}))},updated:function(){var t=this;this.$nextTick((function(){t.calcStepOffsetWidth()}))},beforeUnmount:function(){this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcStepOffsetWidth&&this.calcStepOffsetWidth.cancel&&this.calcStepOffsetWidth.cancel()},methods:{onStepClick:function(t){this.$props.current!==t&&this.__emit("change",t)},calcStepOffsetWidth:function(){var t=this;if(!C()){var e=this.$data.lastStepOffsetWidth,n=this.$refs.vcStepsRef;n.children.length>0&&(this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcTimeout=setTimeout((function(){var i=(n.lastChild.offsetWidth||0)+1;e===i||Math.abs(e-i)<=3||t.setState({lastStepOffsetWidth:i})})))}}},render:function(){var t,e=this,n=this.prefixCls,i=this.direction,a=this.type,l=this.labelPlacement,f=this.iconPrefix,p=this.status,u=this.size,d=this.current,h=this.progressDot,m=this.initial,g=this.icons,v=this.canClick,b="navigation"===a,S=this.lastStepOffsetWidth,O=this.flexSupported,y=s(this),x=y.length-1,C=h?"vertical":l,w=(j(t={},n,!0),j(t,"".concat(n,"-").concat(i),!0),j(t,"".concat(n,"-").concat(u),u),j(t,"".concat(n,"-label-").concat(C),"horizontal"===i),j(t,"".concat(n,"-dot"),!!h),j(t,"".concat(n,"-navigation"),b),j(t,"".concat(n,"-flex-not-supported"),!O),t);return r("div",{class:w,ref:"vcStepsRef"},[y.map((function(t,s){var r=o(t),a=m+s,l=P({stepNumber:"".concat(a+1),stepIndex:a,prefixCls:n,iconPrefix:f,progressDot:h,icons:g},r);return v&&(l.onStepClick=e.onStepClick),O||"vertical"===i||(b?(l.itemWidth="".concat(100/(x+1),"%"),l.adjustMarginRight=0):s!==x&&(l.itemWidth="".concat(100/x,"%"),l.adjustMarginRight="".concat(-Math.round(S/x+1),"px"))),"error"===p&&s===d-1&&(l.class="".concat(n,"-next-error")),r.status||(l.status=a===d?p:a<d?"finish":"wait"),l.active=a===d,c(t,l)}))])}});function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){return"string"==typeof t}function D(){}var _=t({name:"Step",mixins:[e],props:{prefixCls:n.string,wrapperStyle:n.object,itemWidth:n.string,active:n.looseBool,disabled:n.looseBool,status:n.string,iconPrefix:n.string,icon:n.any,adjustMarginRight:n.string,stepNumber:n.string,stepIndex:n.number,description:n.any,title:n.any,subTitle:n.any,progressDot:i(n.oneOfType([n.looseBool,n.func])),tailContent:n.any,icons:n.shape({finish:n.any,error:n.any}).loose,onClick:n.func,onStepClick:n.func},methods:{onItemClick:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.__emit.apply(this,["click"].concat(e)),this.__emit("stepClick",this.stepIndex)},renderIconNode:function(){var t,e=a(this),n=e.prefixCls,i=e.stepNumber,s=e.status,o=e.iconPrefix,c=e.icons,f=e.progressDot,p=l(this,"icon"),u=l(this,"title"),d=l(this,"description"),h=(I(t={},"".concat(n,"-icon"),!0),I(t,"".concat(o,"icon"),!0),I(t,"".concat(o,"icon-").concat(p),p&&T(p)),I(t,"".concat(o,"icon-check"),!p&&"finish"===s&&c&&!c.finish),I(t,"".concat(o,"icon-close"),!p&&"error"===s&&c&&!c.error),t),m=r("span",{class:"".concat(n,"-icon-dot")},null);return f?r("span",{class:"".concat(n,"-icon")},"function"==typeof f?[f({index:i-1,status:s,title:u,description:d,prefixCls:n})]:[m]):p&&!T(p)?r("span",{class:"".concat(n,"-icon")},[p]):c&&c.finish&&"finish"===s?r("span",{class:"".concat(n,"-icon")},[c.finish]):c&&c.error&&"error"===s?r("span",{class:"".concat(n,"-icon")},[c.error]):p||"finish"===s||"error"===s?r("span",{class:h},null):r("span",{class:"".concat(n,"-icon")},[i])}},render:function(){var t,e=a(this),n=e.prefixCls,i=e.itemWidth,s=e.active,o=e.status,c=void 0===o?"wait":o,f=e.tailContent,p=e.adjustMarginRight,u=e.disabled,d=e.onClick,h=e.onStepClick,m=l(this,"title"),g=l(this,"subTitle"),v=l(this,"description"),b={class:(I(t={},"".concat(n,"-item"),!0),I(t,"".concat(n,"-item-").concat(c),!0),I(t,"".concat(n,"-item-custom"),l(this,"icon")),I(t,"".concat(n,"-item-active"),s),I(t,"".concat(n,"-item-disabled"),!0===u),t)},S={};i&&(S.width=i),p&&(S.marginRight=p);var O={onClick:d||D};return h&&!u&&(O.role="button",O.tabindex=0,O.onClick=this.onItemClick),r("div",W(W({},b),{},{style:S}),[r("div",W(W({},O),{},{class:"".concat(n,"-item-container")}),[r("div",{class:"".concat(n,"-item-tail")},[f]),r("div",{class:"".concat(n,"-item-icon")},[this.renderIconNode()]),r("div",{class:"".concat(n,"-item-content")},[r("div",{class:"".concat(n,"-item-title")},[m,g&&r("div",{title:g,class:"".concat(n,"-item-subtitle")},[g])]),v&&r("div",{class:"".concat(n,"-item-description")},[v])])])])}});function z(){return(z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}w.Step=_;var $=t({name:"ASteps",inheritAttrs:!1,props:S({prefixCls:n.string,iconPrefix:n.string,current:n.number,initial:n.number,labelPlacement:n.oneOf(f("horizontal","vertical")).def("horizontal"),status:n.oneOf(f("wait","process","finish","error")),size:n.oneOf(f("default","small")),direction:n.oneOf(f("horizontal","vertical")),progressDot:i(n.oneOfType([n.looseBool,n.func])),type:n.oneOf(f("default","navigation")),onChange:n.func,"onUpdate:current":n.func},{current:0}),emits:["update:current","change"],setup:function(){return{configProvider:p("configProvider",u)}},Step:z(z({},w.Step),{name:"AStep"}),methods:{handleChange:function(t){this.$emit("update:current",t),this.$emit("change",t)}},render:function(){var t=this,e=z(z({},a(this)),this.$attrs),n=e.prefixCls,i=e.iconPrefix,o=this.configProvider.getPrefixCls,c=o("steps",n),f=o("",i),p=l(this,"progressDot",this,!1),u=z(z({icons:{finish:r(x,{class:"".concat(c,"-finish-icon")},null),error:r(O,{class:"".concat(c,"-error-icon")},null)},iconPrefix:f,prefixCls:c,progressDot:p},e),{canClick:!(!this.onChange&&!this["onUpdate:current"]),onChange:this.handleChange});return r(w,u,{default:function(){return[s(t)]}})}});$.install=function(t){return t.component($.name,$),t.component($.Step.name,$.Step),t};var A=t({name:"UISteps",components:{AntSteps:$}});const U=v("data-v-19e8b378"),N=U(((t,e,n,i,s,r)=>{const o=d("AntSteps");return h(),m(o,null,{default:U((()=>[g(t.$slots,"default")])),_:3})}));A.render=N,A.__scopeId="data-v-19e8b378";var B=t({name:"UIStep",components:{AntStep:$.Step}});const R=v("data-v-3338f1fd"),M=R(((t,e,n,i,s,r)=>{const o=d("AntStep");return h(),m(o,null,{default:R((()=>[g(t.$slots,"default")])),_:3})}));B.render=M,B.__scopeId="data-v-3338f1fd";var E=t({name:"OrderSteps",components:{UISteps:A,UIStep:B},props:{current:{type:Number,default:0}}});const F={class:"orderSteps"};E.render=function(t,e,n,i,s,o){const c=d("UIStep"),a=d("UISteps");return h(),m("div",F,[r(a,{current:t.current,size:"small"},{default:b((()=>[r(c,{title:"确认信息"}),r(c,{title:"付款到平台"}),r(c,{title:"订单完成"})])),_:1},8,["current"])])};export{E as s};
