import{W as t,X as e,Y as n,Z as r,P as a,aM as i,k as o,N as s,E as c,d as l,S as f,a1 as u,w as p,af as d,D as b,b4 as h,G as v,B as y,b3 as g,a0 as O,z as m,V as P,H as j,$ as w,M as x,an as T,aJ as B}from"./index.2406af76.js";import{L as C,D as S,R as k}from"./LeftOutlined.6052c543.js";import{d as $}from"./debounce.df29b46b.js";var R=t((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});e.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}})),E=t((function(t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var i=r?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n),i=s(R),o=s(e);function s(t){return t&&t.__esModule?t:{default:t}}function c(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}({},t,e.attrs);return a.createVNode(o.default,a.mergeProps(n,{icon:i.default}),null)};f.displayName="PlusOutlined",f.inheritAttrs=!1;var u=f;r.default=u})),K=r(t((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=(n=E)&&n.__esModule?n:{default:n};var a=r.default||r;e.default=a,t.exports=a}))),A=37,_=38,N=39,W=40,D={width:0,height:0,overflow:"hidden",position:"absolute"},M={name:"Sentinel",props:{setRef:a.func,prevElement:a.any,nextElement:a.any},methods:{onKeyDown:function(t){var e=t.target,n=t.which,r=t.shiftKey,a=this.$props,o=a.nextElement,s=a.prevElement;n===i.TAB&&document.activeElement===e&&(!r&&o&&o.focus(),r&&s&&s.focus())}},render:function(){var t=this.$props.setRef;return o("div",{tabindex:0,ref:t,style:D,onKeydown:this.onKeyDown,role:"presentation"},[s(this)])}};function I(t,e){for(var n=function(t){var e=[];return t.forEach((function(t){c(t)&&e.push(t)})),e}(t),r=0;r<n.length;r++)if(n[r].key===e)return r;return-1}function z(t,e){t.transform=e,t.webkitTransform=e,t.mozTransform=e}function H(t){return("transform"in t||"webkitTransform"in t||"MozTransform"in t)&&window.atob}function q(t){return"left"===t||"right"===t}function F(t,e){var n,r,a,i=q(e)?"marginTop":"marginLeft";return n={},r=i,a="".concat(100*-t,"%"),r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n}function L(t,e){return+window.getComputedStyle(t).getPropertyValue(e).replace("px","")}function G(t){return Object.keys(t).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=t[n]),e}),{})}function V(t,e){return+t.getPropertyValue(e).replace("px","")}function U(t,e,n,r,a){var i=L(a,"padding-".concat(t));if(!r||!r.parentNode)return i;var o=r.parentNode.childNodes;return Array.prototype.some.call(o,(function(a){if(!a.tagName)return!1;var o=window.getComputedStyle(a);return a!==r?(i+=V(o,"margin-".concat(t)),i+=a[e],i+=V(o,"margin-".concat(n)),"content-box"===o.boxSizing&&(i+=V(o,"border-".concat(t,"-width"))+V(o,"border-".concat(n,"-width"))),!1):(i+=V(o,"margin-".concat(t)),!0)})),i}function Z(){return(Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y(t){var e;return t.children.forEach((function(t){!t||h(e)||t.disabled||(e=t.key)})),e}var J=l({name:"Tabs",mixins:[f],inheritAttrs:!1,props:{destroyInactiveTabPane:a.looseBool,renderTabBar:a.func.isRequired,renderTabContent:a.func.isRequired,navWrapper:a.func.def((function(t){return t})),children:a.any.def([]),prefixCls:a.string.def("ant-tabs"),tabBarPosition:a.string.def("top"),activeKey:a.oneOfType([a.string,a.number]),defaultActiveKey:a.oneOfType([a.string,a.number]),direction:a.string.def("ltr"),tabBarGutter:a.number},setup:function(t){var e;e=void 0!==t.activeKey?t.activeKey:void 0!==t.defaultActiveKey?t.defaultActiveKey:Y(t);var n=u({_activeKey:e});return p((function(){void 0!==t.activeKey?n._activeKey=t.activeKey:function(t,e){return t.children.map((function(t){return t&&t.key})).indexOf(e)>=0}(t,n._activeKey)||(n._activeKey=Y(t))}),{flush:"sync"}),{state:n}},created:function(){this.panelSentinelStart=void 0,this.panelSentinelEnd=void 0,this.sentinelStart=void 0,this.sentinelEnd=void 0,d("sentinelContext",this)},beforeUnmount:function(){this.destroy=!0,cancelAnimationFrame(this.sentinelId)},methods:{onTabClick:function(t,e){this.tabBar.props&&this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(t,e),this.setActiveKey(t)},onNavKeyDown:function(t){var e=t.keyCode;if(e===N||e===W){t.preventDefault();var n=this.getNextActiveKey(!0);this.onTabClick(n)}else if(e===A||e===_){t.preventDefault();var r=this.getNextActiveKey(!1);this.onTabClick(r)}},onScroll:function(t){var e=t.target;e===t.currentTarget&&e.scrollLeft>0&&(e.scrollLeft=0)},setSentinelStart:function(t){this.sentinelStart=t},setSentinelEnd:function(t){this.sentinelEnd=t},setPanelSentinelStart:function(t){t!==this.panelSentinelStart&&this.updateSentinelContext(),this.panelSentinelStart=t},setPanelSentinelEnd:function(t){t!==this.panelSentinelEnd&&this.updateSentinelContext(),this.panelSentinelEnd=t},setActiveKey:function(t){this.state._activeKey!==t&&(void 0===this.$props.activeKey&&(this.state._activeKey=t),this.__emit("update:activeKey",t),this.__emit("change",t))},getNextActiveKey:function(t){var e=this.state._activeKey,n=[];this.$props.children.forEach((function(e){e&&!e.disabled&&""!==e.disabled&&(t?n.push(e):n.unshift(e))}));var r=n.length,a=r&&n[0].key;return n.forEach((function(t,i){t.key===e&&(a=i===r-1?n[0].key:n[i+1].key)})),a},updateSentinelContext:function(){var t=this;this.destroy||(cancelAnimationFrame(this.sentinelId),this.sentinelId=requestAnimationFrame((function(){t.destroy||t.$forceUpdate()})))}},render:function(){var t,e=this.$props,n=e.prefixCls,r=e.navWrapper,a=e.tabBarPosition,i=e.renderTabContent,s=e.renderTabBar,l=e.destroyInactiveTabPane,f=e.direction,u=e.tabBarGutter,p=this.$attrs,d=p.class,h=(p.onChange,p.style),v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(p,["class","onChange","style"]),y=(X(t={},d,d),X(t,n,1),X(t,"".concat(n,"-").concat(a),1),X(t,"".concat(n,"-rtl"),"rtl"===f),t);this.tabBar=s();var g=b(this.tabBar,{prefixCls:n,navWrapper:r,tabBarPosition:a,panels:e.children,activeKey:this.state._activeKey,direction:f,tabBarGutter:u,onKeydown:this.onNavKeyDown,onTabClick:this.onTabClick,key:"tabBar"}),O=b(i(),{prefixCls:n,tabBarPosition:a,activeKey:this.state._activeKey,destroyInactiveTabPane:l,direction:f,onChange:this.setActiveKey,children:e.children,key:"tabContent"}),m=o(M,{key:"sentinelStart",setRef:this.setSentinelStart,nextElement:this.panelSentinelStart},null),P=o(M,{key:"sentinelEnd",setRef:this.setSentinelEnd,prevElement:this.panelSentinelEnd},null),j=[];"bottom"===a?j.push(m,O,P,g):j.push(g,m,O,P);var w,x=Z(Z({},G(v)),{style:h,onScroll:this.onScroll,class:y});return o("div",x,"function"==typeof(w=j)||"[object Object]"===Object.prototype.toString.call(w)&&!c(w)?j:{default:function(){return[j]}})}});function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var tt=l({name:"TabPane",props:{active:a.looseBool,destroyInactiveTabPane:a.looseBool,forceRender:a.looseBool,placeholder:a.any,rootPrefixCls:a.string,tab:a.any,closable:a.looseBool,disabled:a.looseBool},setup:function(){return{isActived:void 0,sentinelContext:v("sentinelContext",{})}},render:function(){var t,e=this.$props,n=e.destroyInactiveTabPane,r=e.active,a=e.forceRender,i=e.rootPrefixCls,c=s(this),l=y(this,"placeholder");this.isActived=this.isActived||r;var f,u,p="".concat(i,"-tabpane"),d=(Q(t={},p,1),Q(t,"".concat(p,"-inactive"),!r),Q(t,"".concat(p,"-active"),r),t),b=(n?r:this.isActived)||a,h=this.sentinelContext,v=h.sentinelStart,g=h.sentinelEnd,O=h.setPanelSentinelStart,m=h.setPanelSentinelEnd;return r&&b&&(f=o(M,{setRef:O,prevElement:v},null),u=o(M,{setRef:m,nextElement:g},null)),o("div",{class:d,role:"tabpanel","aria-hidden":r?"false":"true"},[f,b?c:l,u])}});function et(){return(et=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var rt=l({name:"TabContent",inheritAttrs:!1,props:{animated:a.looseBool.def(!0),animatedWithMargin:a.looseBool.def(!0),prefixCls:a.string.def("ant-tabs"),activeKey:a.oneOfType([a.string,a.number]),tabBarPosition:a.string,direction:a.string,destroyInactiveTabPane:a.looseBool,children:a.any},computed:{classes:function(){var t,e=this.animated,n=this.prefixCls,r=this.$attrs.class;return nt(t={},r,!!r),nt(t,"".concat(n,"-content"),!0),nt(t,"".concat(n,e?"-content-animated":"-content-no-animated"),!0),t}},methods:{getTabPanes:function(t){var e=this.$props,n=e.activeKey,r=[];return t.forEach((function(t){if(t){var a=t.key,i=n===a;r.push(b(t,{active:i,destroyInactiveTabPane:e.destroyInactiveTabPane,rootPrefixCls:e.prefixCls}))}})),r}},render:function(){var t,e=this.activeKey,n=this.tabBarPosition,r=this.animated,a=this.animatedWithMargin,i=this.direction,s=this.classes,c=this.children,l={};if(r&&c){var f=I(c,e);if(-1!==f){var u=a?F(f,n):{transform:t=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",r=q(e)?"translateY":"translateX";return q(e)||"rtl"!==n?"".concat(r,"(").concat(100*-t,"%) translateZ(0)"):"".concat(r,"(").concat(100*t,"%) translateZ(0)")}(f,n,i),WebkitTransform:t,MozTransform:t};l=et(et({},this.$attrs.style),u)}else l=et(et({},this.$attrs.style),{display:"none"})}return o("div",{class:s,style:l},[this.getTabPanes(c||[])])}}),at=function(t){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=Array.isArray(t)?t:[t],n=window.document.documentElement;return e.some((function(t){return t in n.style}))}return!1}(["flex","webkitFlex","Flex","msFlex"]),it=t((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});e.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}})),ot=t((function(t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var i=r?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n),i=s(it),o=s(e);function s(t){return t&&t.__esModule?t:{default:t}}function c(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}({},t,e.attrs);return a.createVNode(o.default,a.mergeProps(n,{icon:i.default}),null)};f.displayName="UpOutlined",f.inheritAttrs=!1;var u=f;r.default=u})),st=r(t((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=(n=ot)&&n.__esModule?n:{default:n};var a=r.default||r;e.default=a,t.exports=a})));function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t,e){var n=t.$props,r=n.styles,a=void 0===r?{}:r,i=n.panels,o=n.activeKey,s=n.direction,c=t.getRef("root"),l=t.getRef("nav")||c,f=t.getRef("inkBar"),u=t.getRef("activeTab"),p=f.style,d=t.$props.tabBarPosition,b=I(i,o);if(e&&(p.display="none"),u){var h=u,v=H(p);if(z(p,""),p.width="",p.height="",p.left="",p.top="",p.bottom="",p.right="","top"===d||"bottom"===d){var y=function(t,e){return U("left","offsetWidth","right",t,e)}(h,l),g=h.offsetWidth;g===c.offsetWidth?g=0:a.inkBar&&void 0!==a.inkBar.width&&(g=parseFloat(a.inkBar.width,10))&&(y+=(h.offsetWidth-g)/2),"rtl"===s&&(y=L(h,"margin-left")-y),v?z(p,"translate3d(".concat(y,"px,0,0)")):p.left="".concat(y,"px"),p.width="".concat(g,"px")}else{var O=function(t,e){return U("top","offsetHeight","bottom",t,e)}(h,l),m=h.offsetHeight;a.inkBar&&void 0!==a.inkBar.height&&(m=parseFloat(a.inkBar.height,10))&&(O+=(h.offsetHeight-m)/2),v?(z(p,"translate3d(0,".concat(O,"px,0)")),p.top="0"):p.top="".concat(O,"px"),p.height="".concat(m,"px")}}p.display=-1!==b?"block":"none"}var ft={name:"InkTabBarNode",mixins:[f],inheritAttrs:!1,props:{inkBarAnimated:{type:Boolean,default:!0},direction:a.string,prefixCls:String,styles:Object,tabBarPosition:String,saveRef:a.func.def((function(){})),getRef:a.func.def((function(){})),panels:a.array,activeKey:a.oneOfType([a.string,a.number])},updated:function(){var t=this;this.$nextTick((function(){lt(t)}))},mounted:function(){var t=this;this.$nextTick((function(){lt(t,!0)}))},render:function(){var t,e=this.prefixCls,n=this.styles,r=void 0===n?{}:n,a=this.inkBarAnimated,i="".concat(e,"-ink-bar"),s=(ct(t={},i,!0),ct(t,"".concat(i,a?"-animated":"-no-animated"),!0),t);return o("div",{style:r.inkBar,class:s,key:"inkBar",ref:this.saveRef("inkBar")},null)}},ut=function(t,e){var n=arguments.length;e=new Array(n>1?n-1:0);for(var r=1;r<n;r++)e[r-1]=arguments[r];var a=0,i="Warning: "+t.replace(/%s/g,(function(){return e[a++]}));"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(t){}},pt=function(t,e,n){var r=arguments.length;n=new Array(r>2?r-2:0);for(var a=2;a<r;a++)n[a-2]=arguments[a];if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");t||ut.apply(null,[e].concat(n))};function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(n),!0).forEach((function(e){ht(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vt(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!c(t)}function yt(){}var gt={name:"TabBarTabsNode",mixins:[f],inheritAttrs:!1,props:{activeKey:a.oneOfType([a.string,a.number]),panels:a.any.def([]),prefixCls:a.string.def(""),tabBarGutter:a.any.def(null),onTabClick:a.func,saveRef:a.func.def(yt),getRef:a.func.def(yt),renderTabBarNode:a.func,tabBarPosition:a.string,direction:a.string},render:function(){var t=this,e=this.$props,n=e.panels,r=e.activeKey,a=e.prefixCls,i=e.tabBarGutter,s=e.saveRef,c=e.tabBarPosition,l=e.direction,f=[],u=this.renderTabBarNode||this.$slots.renderTabBarNode;return n.forEach((function(e,p){if(e){var d=g(e),b=e.key,h=r===b?"".concat(a,"-tab-active"):"";h+=" ".concat(a,"-tab");var v={},O=d.disabled;O?h+=" ".concat(a,"-tab-disabled"):v.onClick=function(){t.__emit("tabClick",b)};var m=y(e,"tab"),P=i&&p===n.length-1?0:i;P="number"==typeof P?"".concat(P,"px"):P;var j="rtl"===l?"marginLeft":"marginRight",w=ht({},q(c)?"marginBottom":j,P);pt(void 0!==m,"There must be `tab` property or slot on children of Tabs.");var x=o("div",bt(bt({role:"tab","aria-disabled":O?"true":"false","aria-selected":r===b?"true":"false"},v),{},{class:h.trim(),key:b,style:w,ref:r===b?s("activeTab"):yt}),vt(m)?m:{default:function(){return[m]}});u&&(x=u(x)),f.push(x)}})),o("div",{ref:this.saveRef("navTabsContainer")},vt(f)?f:{default:function(){return[f]}})}};function Ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function mt(){return(mt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jt(){}var wt={name:"TabBarRootNode",mixins:[f],inheritAttrs:!1,props:{saveRef:a.func.def(jt),getRef:a.func.def(jt),prefixCls:a.string.def(""),tabBarPosition:a.string.def("top"),extraContent:a.any},methods:{onKeyDown:function(t){this.__emit("keydown",t)}},render:function(){var t,e,n=this.prefixCls,r=this.onKeyDown,a=this.tabBarPosition,i=this.extraContent,l=this.$attrs,f=l.class,u=l.style,p=(l.onKeydown,function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(l,["class","style","onKeydown"])),d=(Pt(t={},"".concat(n,"-bar"),!0),Pt(t,f,!!f),t),h="top"===a||"bottom"===a,v=h?{float:"right"}:{},y=s(this),g=y;return i&&(g=[b(i,{key:"extra",style:mt({},v)}),b(y,{key:"content"})],g=h?g:g.reverse()),o("div",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ot(Object(n),!0).forEach((function(e){Pt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({role:"tablist",class:d,tabindex:"0",onKeydown:r,style:u,ref:this.saveRef("root")},G(p)),"function"==typeof(e=g)||"[object Object]"===Object.prototype.toString.call(e)&&!c(e)?g:{default:function(){return[g]}})}};function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tt(){return(Tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Bt={name:"ScrollableTabBarNode",mixins:[f],inheritAttrs:!1,props:{activeKey:a.any,getRef:a.func.def((function(){})),saveRef:a.func.def((function(){})),tabBarPosition:a.oneOf(["left","right","top","bottom"]).def("left"),prefixCls:a.string.def(""),scrollAnimated:a.looseBool.def(!0),navWrapper:a.func.def((function(t){return t})),prevIcon:a.any,nextIcon:a.any,direction:a.string},data:function(){return this.offset=0,this.prevProps=Tt({},this.$props),{next:!1,prev:!1}},watch:{tabBarPosition:function(){var t=this;this.tabBarPositionChange=!0,this.$nextTick((function(){t.setOffset(0)}))}},mounted:function(){var t=this;this.$nextTick((function(){t.updatedCal(),t.debouncedResize=$((function(){t.setNextPrev(),t.scrollToActiveTab()}),200),t.resizeObserver=new O(t.debouncedResize),t.resizeObserver.observe(t.$props.getRef("container"))}))},updated:function(){var t=this;this.$nextTick((function(){t.updatedCal(t.prevProps),t.prevProps=Tt({},t.$props)}))},beforeUnmount:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.debouncedResize&&this.debouncedResize.cancel&&this.debouncedResize.cancel()},methods:{updatedCal:function(t){var e=this,n=this.$props;t&&t.tabBarPosition!==n.tabBarPosition?this.setOffset(0):this.isNextPrevShown(this.$data)!==this.isNextPrevShown(this.setNextPrev())?(this.$forceUpdate(),this.$nextTick((function(){e.scrollToActiveTab()}))):t&&n.activeKey===t.activeKey||this.scrollToActiveTab()},setNextPrev:function(){var t=this.$props.getRef("nav"),e=this.$props.getRef("navTabsContainer"),n=this.getScrollWH(e||t),r=this.getOffsetWH(this.$props.getRef("container"))+1,a=this.getOffsetWH(this.$props.getRef("navWrap")),i=this.offset,o=r-n,s=this.next,c=this.prev;if(o>=0)s=!1,this.setOffset(0,!1),i=0;else if(o<i)s=!0;else{s=!1;var l=a-n;this.setOffset(l,!1),i=l}return c=i<0,this.setNext(s),this.setPrev(c),{next:s,prev:c}},getOffsetWH:function(t){var e=this.$props.tabBarPosition,n="offsetWidth";return"left"!==e&&"right"!==e||(n="offsetHeight"),t[n]},getScrollWH:function(t){var e=this.tabBarPosition,n="scrollWidth";return"left"!==e&&"right"!==e||(n="scrollHeight"),t[n]},getOffsetLT:function(t){var e=this.$props.tabBarPosition,n="left";return"left"!==e&&"right"!==e||(n="top"),t.getBoundingClientRect()[n]},setOffset:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Math.min(0,t);if(this.offset!==n){this.offset=n;var r={},a=this.$props.tabBarPosition,i=this.$props.getRef("nav").style,o=H(i);"left"===a||"right"===a?r=o?{value:"translate3d(0,".concat(n,"px,0)")}:{name:"top",value:"".concat(n,"px")}:o?("rtl"===this.$props.direction&&(n=-n),r={value:"translate3d(".concat(n,"px,0,0)")}):r={name:"left",value:"".concat(n,"px")},o?z(i,r.value):i[r.name]=r.value,e&&this.setNextPrev()}},setPrev:function(t){this.prev!==t&&(this.prev=t)},setNext:function(t){this.next!==t&&(this.next=t)},isNextPrevShown:function(t){return t?t.next||t.prev:this.next||this.prev},prevTransitionEnd:function(t){if("opacity"===t.propertyName){var e=this.$props.getRef("container");this.scrollToActiveTab({target:e,currentTarget:e})}},scrollToActiveTab:function(t){var e=this.$props.getRef("activeTab"),n=this.$props.getRef("navWrap");if((!t||t.target===t.currentTarget)&&e){var r=this.isNextPrevShown()&&this.lastNextPrevShown;if(this.lastNextPrevShown=this.isNextPrevShown(),r){var a=this.getScrollWH(e),i=this.getOffsetWH(n),o=this.offset,s=this.getOffsetLT(n),c=this.getOffsetLT(e);s>c?(o+=s-c,this.setOffset(o)):s+i<c+a&&(o-=c+a-(s+i),this.setOffset(o))}}},prevClick:function(t){this.__emit("prevClick",t);var e=this.$props.getRef("navWrap"),n=this.getOffsetWH(e),r=this.offset;this.setOffset(r+n)},nextClick:function(t){this.__emit("nextClick",t);var e=this.$props.getRef("navWrap"),n=this.getOffsetWH(e),r=this.offset;this.setOffset(r-n)}},render:function(){var t,e,n,r,a=this.next,i=this.prev,c=this.$props,l=c.prefixCls,f=c.scrollAnimated,u=c.navWrapper,p=y(this,"prevIcon"),d=y(this,"nextIcon"),b=i||a,h=o("span",{onClick:i&&this.prevClick,unselectable:"unselectable",class:(t={},xt(t,"".concat(l,"-tab-prev"),1),xt(t,"".concat(l,"-tab-btn-disabled"),!i),xt(t,"".concat(l,"-tab-arrow-show"),b),t),onTransitionend:this.prevTransitionEnd},[p||o("span",{class:"".concat(l,"-tab-prev-icon")},null)]),v=o("span",{onClick:a&&this.nextClick,unselectable:"unselectable",class:(e={},xt(e,"".concat(l,"-tab-next"),1),xt(e,"".concat(l,"-tab-btn-disabled"),!a),xt(e,"".concat(l,"-tab-arrow-show"),b),e)},[d||o("span",{class:"".concat(l,"-tab-next-icon")},null)]),g="".concat(l,"-nav"),O=(xt(n={},g,!0),xt(n,"".concat(g,f?"-animated":"-no-animated"),!0),n);return o("div",{class:(r={},xt(r,"".concat(l,"-nav-container"),1),xt(r,"".concat(l,"-nav-container-scrolling"),b),r),key:"container",ref:this.saveRef("container")},[h,v,o("div",{class:"".concat(l,"-nav-wrap"),ref:this.saveRef("navWrap")},[o("div",{class:"".concat(l,"-nav-scroll")},[o("div",{class:O,ref:this.saveRef("nav")},[u(s(this))])])])])}},Ct={props:{children:a.func.def((function(){return null}))},methods:{getRef:function(t){return this[t]},saveRef:function(t){var e=this;return function(n){n&&(e[t]=n)}}},render:function(){var t=this;return this.children((function(e){return t.saveRef(e)}),(function(e){return t.getRef(e)}))}};function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function kt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(Object(n),!0).forEach((function(e){$t(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function $t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rt(){return(Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Et=l({name:"ScrollableInkTabBar",inheritAttrs:!1,render:function(){var t=this,e=this.$attrs.children;return o(Ct,{children:function(n,r){var a,i;return o(wt,kt({saveRef:n},t.$attrs),"function"==typeof(i=a=o(Bt,kt({saveRef:n,getRef:r},t.$attrs),{default:function(){return[o(gt,kt({saveRef:n},Rt(Rt({},t.$attrs),{renderTabBarNode:e})),null),o(ft,kt({saveRef:n,getRef:r},t.$attrs),null)]}}))||"[object Object]"===Object.prototype.toString.call(i)&&!c(i)?a:{default:function(){return[a]}})}},null)}});function Kt(){return(Kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function At(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _t(t){return(_t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Nt=l({name:"TabBar",inheritAttrs:!1,props:{prefixCls:a.string,tabBarStyle:a.style,tabBarExtraContent:a.VNodeChild,type:a.oneOf(m("line","card","editable-card")),tabPosition:a.oneOf(m("top","right","bottom","left")).def("top"),tabBarPosition:a.oneOf(m("top","right","bottom","left")),size:a.oneOf(m("default","small","large")),animated:{type:[Boolean,Object],default:void 0},renderTabBar:a.func,panels:a.array.def([]),activeKey:a.oneOfType([a.string,a.number]),tabBarGutter:a.number},render:function(){var t,e=this.$props,n=e.tabBarStyle,r=e.animated,a=void 0===r||r,i=e.renderTabBar,s=e.tabBarExtraContent,c=e.tabPosition,l=e.prefixCls,f=e.type,u=void 0===f?"line":f,p=e.size,d="object"===_t(a)?a.inkBar:a,b="left"===c||"right"===c,h=o("span",{class:"".concat(l,"-tab-prev-icon")},[o(b?st:C,{class:"".concat(l,"-tab-prev-icon-target")},null)]),v=o("span",{class:"".concat(l,"-tab-next-icon")},[o(b?S:k,{class:"".concat(l,"-tab-next-icon-target")},null)]),y=(At(t={},this.$attrs.class,this.$attrs.class),At(t,"".concat(l,"-").concat(c,"-bar"),!0),At(t,"".concat(l,"-").concat(p,"-bar"),!!p),At(t,"".concat(l,"-card-bar"),u&&u.indexOf("card")>=0),t),g=Kt(Kt(Kt({},this.$props),this.$attrs),{children:null,inkBarAnimated:d,extraContent:s,prevIcon:h,nextIcon:v,style:n,class:y});return i?i(Kt(Kt({},g),{DefaultTabBar:Et})):o(Et,g,null)}});function Wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Dt(){return(Dt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function It(t){return(It="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var zt=l({TabPane:tt,name:"ATabs",inheritAttrs:!1,props:{prefixCls:a.string,activeKey:a.oneOfType([a.string,a.number]),defaultActiveKey:a.oneOfType([a.string,a.number]),hideAdd:a.looseBool.def(!1),tabBarStyle:a.object,tabBarExtraContent:a.any,destroyInactiveTabPane:a.looseBool.def(!1),type:a.oneOf(m("line","card","editable-card")),tabPosition:a.oneOf(["top","right","bottom","left"]).def("top"),size:a.oneOf(["default","small","large"]),animated:P(a.oneOfType([a.looseBool,a.object])),tabBarGutter:a.number,renderTabBar:a.func,onChange:{type:Function},onTabClick:a.func,onPrevClick:{type:Function},onNextClick:{type:Function},onEdit:{type:Function}},emits:["update:activeKey","edit","change"],setup:function(){return{configProvider:v("configProvider",j)}},mounted:function(){var t=" no-flex",e=w(this);e&&!at&&-1===e.className.indexOf(t)&&(e.className+=t)},methods:{removeTab:function(t,e){e.stopPropagation(),h(t)&&this.$emit("edit",t,"remove")},handleChange:function(t){this.$emit("update:activeKey",t),this.$emit("change",t)},createNewTab:function(t){this.$emit("edit",t,"add")}},render:function(){var t,e,n=this,r=x(this),a=r.prefixCls,i=r.size,l=r.type,f=void 0===l?"line":l,u=r.tabPosition,p=r.animated,d=void 0===p||p,h=r.hideAdd,v=r.renderTabBar,O=this.$attrs,m=O.class,P=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(O,["class"]),j=(0,this.configProvider.getPrefixCls)("tabs",a),w=T(s(this)),C=y(this,"tabBarExtraContent"),S="object"===It(d)?d.tabPane:d;"line"!==f&&(S="animated"in r&&S);var k,$=(Mt(t={},m,m),Mt(t,"".concat(j,"-vertical"),"left"===u||"right"===u),Mt(t,"".concat(j,"-").concat(i),!!i),Mt(t,"".concat(j,"-card"),f.indexOf("card")>=0),Mt(t,"".concat(j,"-").concat(f),!0),Mt(t,"".concat(j,"-no-animation"),!S),t),R=[];"editable-card"===f&&(R=[],w.forEach((function(t,e){var r=g(t).closable,a=(r=void 0===r||r)?o(B,{class:"".concat(j,"-close-x"),onClick:function(e){return n.removeTab(t.key,e)}},null):null;R.push(b(t,{tab:o("div",{class:r?void 0:"".concat(j,"-tab-unclosable")},[y(t,"tab"),a]),key:t.key||e}))})),h||(C=o("span",null,[o(K,{class:"".concat(j,"-new-tab"),onClick:this.createNewTab},null),C]))),C=C?o("div",{class:"".concat(j,"-extra-content")},"function"==typeof(k=C)||"[object Object]"===Object.prototype.toString.call(k)&&!c(k)?C:{default:function(){return[C]}}):null;var E=v||this.$slots.renderTabBar,A=Dt(Dt(Dt(Dt({},r),{prefixCls:j,tabBarExtraContent:C,renderTabBar:E}),P),{children:w}),_=(Mt(e={},"".concat(j,"-").concat(u,"-content"),!0),Mt(e,"".concat(j,"-card-content"),f.indexOf("card")>=0),e),N=Dt(Dt(Dt(Dt({},r),{prefixCls:j,tabBarPosition:u,renderTabBar:function(){return o(Nt,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Wt(Object(n),!0).forEach((function(e){Mt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({key:"tabBar"},A),null)},renderTabContent:function(){return o(rt,{class:_,animated:S,animatedWithMargin:!0},null)},children:R.length>0?R:w}),P),{onChange:this.handleChange,class:$});return o(J,N,null)}});function Ht(){return(Ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}zt.TabPane=Ht(Ht({},tt),{name:"ATabPane",__ANT_TAB_PANE:!0}),zt.TabContent=Ht(Ht({},rt),{name:"ATabContent"}),zt.install=function(t){return t.component(zt.name,zt),t.component(zt.TabPane.name,zt.TabPane),t.component(zt.TabContent.name,zt.TabContent),t};export{zt as T};
