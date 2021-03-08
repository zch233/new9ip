import{k as t,W as e,X as n,P as r,aM as a,N as i,E as o,d as s,S as c,$ as l,w as f,ad as u,D as p,b3 as b,G as d,B as h,b4 as v,Z as y,z as g,V as m,H as O,Y as P,M as x,al as w,aJ as j}from"./index.245536e6.js";import{d as T}from"./debounce.8f70df46.js";import{L as B,D as C,R as S}from"./LeftOutlined.a9528165.js";var k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=function(r,a){var i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){$(t,e,n[e])}))}return t}({},r,a.attrs);return t(n,e(i,{icon:k}),null)};R.displayName="PlusOutlined",R.inheritAttrs=!1;var E=37,K=38,A=39,N=40,W={width:0,height:0,overflow:"hidden",position:"absolute"},D={name:"Sentinel",props:{setRef:r.func,prevElement:r.any,nextElement:r.any},methods:{onKeyDown:function(t){var e=t.target,n=t.which,r=t.shiftKey,i=this.$props,o=i.nextElement,s=i.prevElement;n===a.TAB&&document.activeElement===e&&(!r&&o&&o.focus(),r&&s&&s.focus())}},render:function(){var e=this.$props.setRef;return t("div",{tabindex:0,ref:e,style:W,onKeydown:this.onKeyDown,role:"presentation"},[i(this)])}};function _(t,e){for(var n=function(t){var e=[];return t.forEach((function(t){o(t)&&e.push(t)})),e}(t),r=0;r<n.length;r++)if(n[r].key===e)return r;return-1}function I(t,e){t.transform=e,t.webkitTransform=e,t.mozTransform=e}function z(t){return("transform"in t||"webkitTransform"in t||"MozTransform"in t)&&window.atob}function H(t){return"left"===t||"right"===t}function q(t,e){var n,r,a,i=H(e)?"marginTop":"marginLeft";return n={},r=i,a="".concat(100*-t,"%"),r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n}function F(t,e){return+window.getComputedStyle(t).getPropertyValue(e).replace("px","")}function L(t){return Object.keys(t).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=t[n]),e}),{})}function M(t,e){return+t.getPropertyValue(e).replace("px","")}function G(t,e,n,r,a){var i=F(a,"padding-".concat(t));if(!r||!r.parentNode)return i;var o=r.parentNode.childNodes;return Array.prototype.some.call(o,(function(a){if(!a.tagName)return!1;var o=window.getComputedStyle(a);return a!==r?(i+=M(o,"margin-".concat(t)),i+=a[e],i+=M(o,"margin-".concat(n)),"content-box"===o.boxSizing&&(i+=M(o,"border-".concat(t,"-width"))+M(o,"border-".concat(n,"-width"))),!1):(i+=M(o,"margin-".concat(t)),!0)})),i}function U(){return(U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(t){var e;return t.children.forEach((function(t){!t||b(e)||t.disabled||(e=t.key)})),e}var X=s({name:"Tabs",mixins:[c],inheritAttrs:!1,props:{destroyInactiveTabPane:r.looseBool,renderTabBar:r.func.isRequired,renderTabContent:r.func.isRequired,navWrapper:r.func.def((function(t){return t})),children:r.any.def([]),prefixCls:r.string.def("ant-tabs"),tabBarPosition:r.string.def("top"),activeKey:r.oneOfType([r.string,r.number]),defaultActiveKey:r.oneOfType([r.string,r.number]),direction:r.string.def("ltr"),tabBarGutter:r.number},setup:function(t){var e;e=void 0!==t.activeKey?t.activeKey:void 0!==t.defaultActiveKey?t.defaultActiveKey:Z(t);var n=l({_activeKey:e});return f((function(){void 0!==t.activeKey?n._activeKey=t.activeKey:function(t,e){return t.children.map((function(t){return t&&t.key})).indexOf(e)>=0}(t,n._activeKey)||(n._activeKey=Z(t))}),{flush:"sync"}),{state:n}},created:function(){this.panelSentinelStart=void 0,this.panelSentinelEnd=void 0,this.sentinelStart=void 0,this.sentinelEnd=void 0,u("sentinelContext",this)},beforeUnmount:function(){this.destroy=!0,cancelAnimationFrame(this.sentinelId)},methods:{onTabClick:function(t,e){this.tabBar.props&&this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(t,e),this.setActiveKey(t)},onNavKeyDown:function(t){var e=t.keyCode;if(e===A||e===N){t.preventDefault();var n=this.getNextActiveKey(!0);this.onTabClick(n)}else if(e===E||e===K){t.preventDefault();var r=this.getNextActiveKey(!1);this.onTabClick(r)}},onScroll:function(t){var e=t.target;e===t.currentTarget&&e.scrollLeft>0&&(e.scrollLeft=0)},setSentinelStart:function(t){this.sentinelStart=t},setSentinelEnd:function(t){this.sentinelEnd=t},setPanelSentinelStart:function(t){t!==this.panelSentinelStart&&this.updateSentinelContext(),this.panelSentinelStart=t},setPanelSentinelEnd:function(t){t!==this.panelSentinelEnd&&this.updateSentinelContext(),this.panelSentinelEnd=t},setActiveKey:function(t){this.state._activeKey!==t&&(void 0===this.$props.activeKey&&(this.state._activeKey=t),this.__emit("update:activeKey",t),this.__emit("change",t))},getNextActiveKey:function(t){var e=this.state._activeKey,n=[];this.$props.children.forEach((function(e){var r,a;e&&!(null===(r=e.props)||void 0===r?void 0:r.disabled)&&""!==(null===(a=e.props)||void 0===a?void 0:a.disabled)&&(t?n.push(e):n.unshift(e))}));var r=n.length,a=r&&n[0].key;return n.forEach((function(t,i){t.key===e&&(a=i===r-1?n[0].key:n[i+1].key)})),a},updateSentinelContext:function(){var t=this;this.destroy||(cancelAnimationFrame(this.sentinelId),this.sentinelId=requestAnimationFrame((function(){t.destroy||t.$forceUpdate()})))}},render:function(){var e,n=this.$props,r=n.prefixCls,a=n.navWrapper,i=n.tabBarPosition,s=n.renderTabContent,c=n.renderTabBar,l=n.destroyInactiveTabPane,f=n.direction,u=n.tabBarGutter,b=this.$attrs,d=b.class;b.onChange;var h=b.style,v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(b,["class","onChange","style"]),y=(V(e={},d,d),V(e,r,1),V(e,"".concat(r,"-").concat(i),1),V(e,"".concat(r,"-rtl"),"rtl"===f),e);this.tabBar=c();var g=p(this.tabBar,{prefixCls:r,navWrapper:a,tabBarPosition:i,panels:n.children,activeKey:this.state._activeKey,direction:f,tabBarGutter:u,onKeydown:this.onNavKeyDown,onTabClick:this.onTabClick,key:"tabBar"}),m=p(s(),{prefixCls:r,tabBarPosition:i,activeKey:this.state._activeKey,destroyInactiveTabPane:l,direction:f,onChange:this.setActiveKey,children:n.children,key:"tabContent"}),O=t(D,{key:"sentinelStart",setRef:this.setSentinelStart,nextElement:this.panelSentinelStart},null),P=t(D,{key:"sentinelEnd",setRef:this.setSentinelEnd,prevElement:this.panelSentinelEnd},null),x=[];"bottom"===i?x.push(O,m,P,g):x.push(g,O,m,P);var w,j=U(U({},L(v)),{style:h,onScroll:this.onScroll,class:y});return t("div",j,"function"==typeof(w=x)||"[object Object]"===Object.prototype.toString.call(w)&&!o(w)?x:{default:function(){return[x]}})}});function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var J=s({name:"TabPane",props:{active:r.looseBool,destroyInactiveTabPane:r.looseBool,forceRender:r.looseBool,placeholder:r.any,rootPrefixCls:r.string,tab:r.any,closable:r.looseBool,disabled:r.looseBool},setup:function(){return{isActived:void 0,sentinelContext:d("sentinelContext",{})}},render:function(){var e,n=this.$props,r=n.destroyInactiveTabPane,a=n.active,o=n.forceRender,s=n.rootPrefixCls,c=i(this),l=h(this,"placeholder");this.isActived=this.isActived||a;var f,u,p="".concat(s,"-tabpane"),b=(Y(e={},p,1),Y(e,"".concat(p,"-inactive"),!a),Y(e,"".concat(p,"-active"),a),e),d=(r?a:this.isActived)||o,v=this.sentinelContext,y=v.sentinelStart,g=v.sentinelEnd,m=v.setPanelSentinelStart,O=v.setPanelSentinelEnd;return a&&d&&(f=t(D,{setRef:m,prevElement:y},null),u=t(D,{setRef:O,nextElement:g},null)),t("div",{class:b,role:"tabpanel","aria-hidden":a?"false":"true"},[f,d?c:l,u])}});function Q(){return(Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et=s({name:"TabContent",inheritAttrs:!1,props:{animated:r.looseBool.def(!0),animatedWithMargin:r.looseBool.def(!0),prefixCls:r.string.def("ant-tabs"),activeKey:r.oneOfType([r.string,r.number]),tabBarPosition:r.string,direction:r.string,destroyInactiveTabPane:r.looseBool,children:r.any},computed:{classes:function(){var t,e=this.animated,n=this.prefixCls,r=this.$attrs.class;return tt(t={},r,!!r),tt(t,"".concat(n,"-content"),!0),tt(t,"".concat(n,e?"-content-animated":"-content-no-animated"),!0),t}},methods:{getTabPanes:function(t){var e=this.$props,n=e.activeKey,r=[];return t.forEach((function(t){if(t){var a=t.key,i=n===a;r.push(p(t,{active:i,destroyInactiveTabPane:e.destroyInactiveTabPane,rootPrefixCls:e.prefixCls}))}})),r}},render:function(){var e,n=this.activeKey,r=this.tabBarPosition,a=this.animated,i=this.animatedWithMargin,o=this.direction,s=this.classes,c=this.children,l={};if(a&&c){var f=_(c,n);if(-1!==f){var u=i?q(f,r):{transform:e=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",r=H(e)?"translateY":"translateX";return H(e)||"rtl"!==n?"".concat(r,"(").concat(100*-t,"%) translateZ(0)"):"".concat(r,"(").concat(100*t,"%) translateZ(0)")}(f,r,o),WebkitTransform:e,MozTransform:e};l=Q(Q({},this.$attrs.style),u)}else l=Q(Q({},this.$attrs.style),{display:"none"})}return t("div",{class:s,style:l},[this.getTabPanes(c||[])])}}),nt=function(t){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=Array.isArray(t)?t:[t],n=window.document.documentElement;return e.some((function(t){return t in n.style}))}return!1}(["flex","webkitFlex","Flex","msFlex"]),rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var it=function(r,a){var i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){at(t,e,n[e])}))}return t}({},r,a.attrs);return t(n,e(i,{icon:rt}),null)};function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function st(t,e){var n=t.$props,r=n.styles,a=void 0===r?{}:r,i=n.panels,o=n.activeKey,s=n.direction,c=t.getRef("root"),l=t.getRef("nav")||c,f=t.getRef("inkBar"),u=t.getRef("activeTab"),p=f.style,b=t.$props.tabBarPosition,d=_(i,o);if(e&&(p.display="none"),u){var h=u,v=z(p);if(I(p,""),p.width="",p.height="",p.left="",p.top="",p.bottom="",p.right="","top"===b||"bottom"===b){var y=function(t,e){return G("left","offsetWidth","right",t,e)}(h,l),g=h.offsetWidth;g===c.offsetWidth?g=0:a.inkBar&&void 0!==a.inkBar.width&&(g=parseFloat(a.inkBar.width,10))&&(y+=(h.offsetWidth-g)/2),"rtl"===s&&(y=F(h,"margin-left")-y),v?I(p,"translate3d(".concat(y,"px,0,0)")):p.left="".concat(y,"px"),p.width="".concat(g,"px")}else{var m=function(t,e){return G("top","offsetHeight","bottom",t,e)}(h,l),O=h.offsetHeight;a.inkBar&&void 0!==a.inkBar.height&&(O=parseFloat(a.inkBar.height,10))&&(m+=(h.offsetHeight-O)/2),v?(I(p,"translate3d(0,".concat(m,"px,0)")),p.top="0"):p.top="".concat(m,"px"),p.height="".concat(O,"px")}}p.display=-1!==d?"block":"none"}it.displayName="UpOutlined",it.inheritAttrs=!1;var ct={name:"InkTabBarNode",mixins:[c],inheritAttrs:!1,props:{inkBarAnimated:{type:Boolean,default:!0},direction:r.string,prefixCls:String,styles:Object,tabBarPosition:String,saveRef:r.func.def((function(){})),getRef:r.func.def((function(){})),panels:r.array,activeKey:r.oneOfType([r.string,r.number])},updated:function(){var t=this;this.$nextTick((function(){st(t)}))},mounted:function(){var t=this;this.$nextTick((function(){st(t,!0)}))},render:function(){var e,n=this.prefixCls,r=this.styles,a=void 0===r?{}:r,i=this.inkBarAnimated,o="".concat(n,"-ink-bar"),s=(ot(e={},o,!0),ot(e,"".concat(o,i?"-animated":"-no-animated"),!0),e);return t("div",{style:a.inkBar,class:s,key:"inkBar",ref:this.saveRef("inkBar")},null)}},lt=function(t,e){var n=arguments.length;e=new Array(n>1?n-1:0);for(var r=1;r<n;r++)e[r-1]=arguments[r];var a=0,i="Warning: "+t.replace(/%s/g,(function(){return e[a++]}));"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(o){}},ft=function(t,e,n){var r=arguments.length;n=new Array(r>2?r-2:0);for(var a=2;a<r;a++)n[a-2]=arguments[a];if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");t||lt.apply(null,[e].concat(n))};function ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(n),!0).forEach((function(e){bt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dt(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!o(t)}function ht(){}var vt={name:"TabBarTabsNode",mixins:[c],inheritAttrs:!1,props:{activeKey:r.oneOfType([r.string,r.number]),panels:r.any.def([]),prefixCls:r.string.def(""),tabBarGutter:r.any.def(null),onTabClick:r.func,saveRef:r.func.def(ht),getRef:r.func.def(ht),renderTabBarNode:r.func,tabBarPosition:r.string,direction:r.string},render:function(){var e=this,n=this.$props,r=n.panels,a=n.activeKey,i=n.prefixCls,o=n.tabBarGutter,s=n.saveRef,c=n.tabBarPosition,l=n.direction,f=[],u=this.renderTabBarNode||this.$slots.renderTabBarNode;return r.forEach((function(n,p){if(n){var b=v(n),d=n.key,y=a===d?"".concat(i,"-tab-active"):"";y+=" ".concat(i,"-tab");var g={},m=b.disabled;m?y+=" ".concat(i,"-tab-disabled"):g.onClick=function(){e.__emit("tabClick",d)};var O=h(n,"tab"),P=o&&p===r.length-1?0:o;P="number"==typeof P?"".concat(P,"px"):P;var x="rtl"===l?"marginLeft":"marginRight",w=bt({},H(c)?"marginBottom":x,P);ft(void 0!==O,"There must be `tab` property or slot on children of Tabs.");var j=t("div",pt(pt({role:"tab","aria-disabled":m?"true":"false","aria-selected":a===d?"true":"false"},g),{},{class:y.trim(),key:d,style:w,ref:a===d?s("activeTab"):ht}),dt(O)?O:{default:function(){return[O]}});u&&(j=u(j)),f.push(j)}})),t("div",{ref:this.saveRef("navTabsContainer")},dt(f)?f:{default:function(){return[f]}})}};function yt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function gt(){return(gt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ot(){}var Pt={name:"TabBarRootNode",mixins:[c],inheritAttrs:!1,props:{saveRef:r.func.def(Ot),getRef:r.func.def(Ot),prefixCls:r.string.def(""),tabBarPosition:r.string.def("top"),extraContent:r.any},methods:{onKeyDown:function(t){this.__emit("keydown",t)}},render:function(){var e,n=this.prefixCls,r=this.onKeyDown,a=this.tabBarPosition,s=this.extraContent,c=this.$attrs,l=c.class,f=c.style;c.onKeydown;var u,b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(c,["class","style","onKeydown"]),d=(mt(e={},"".concat(n,"-bar"),!0),mt(e,l,!!l),e),h="top"===a||"bottom"===a,v=h?{float:"right"}:{},y=i(this),g=y;return s&&(g=[p(s,{key:"extra",style:gt({},v)}),p(y,{key:"content"})],g=h?g:g.reverse()),t("div",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?yt(Object(n),!0).forEach((function(e){mt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({role:"tablist",class:d,tabindex:"0",onKeydown:r,style:f,ref:this.saveRef("root")},L(b)),"function"==typeof(u=g)||"[object Object]"===Object.prototype.toString.call(u)&&!o(u)?g:{default:function(){return[g]}})}};function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wt(){return(wt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var jt={name:"ScrollableTabBarNode",mixins:[c],inheritAttrs:!1,props:{activeKey:r.any,getRef:r.func.def((function(){})),saveRef:r.func.def((function(){})),tabBarPosition:r.oneOf(["left","right","top","bottom"]).def("left"),prefixCls:r.string.def(""),scrollAnimated:r.looseBool.def(!0),navWrapper:r.func.def((function(t){return t})),prevIcon:r.any,nextIcon:r.any,direction:r.string},data:function(){return this.offset=0,this.prevProps=wt({},this.$props),{next:!1,prev:!1}},watch:{tabBarPosition:function(){var t=this;this.tabBarPositionChange=!0,this.$nextTick((function(){t.setOffset(0)}))}},mounted:function(){var t=this;this.$nextTick((function(){t.updatedCal(),t.debouncedResize=T((function(){t.setNextPrev(),t.scrollToActiveTab()}),200),t.resizeObserver=new y(t.debouncedResize),t.resizeObserver.observe(t.$props.getRef("container"))}))},updated:function(){var t=this;this.$nextTick((function(){t.updatedCal(t.prevProps),t.prevProps=wt({},t.$props)}))},beforeUnmount:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.debouncedResize&&this.debouncedResize.cancel&&this.debouncedResize.cancel()},methods:{updatedCal:function(t){var e=this,n=this.$props;t&&t.tabBarPosition!==n.tabBarPosition?this.setOffset(0):this.isNextPrevShown(this.$data)!==this.isNextPrevShown(this.setNextPrev())?(this.$forceUpdate(),this.$nextTick((function(){e.scrollToActiveTab()}))):t&&n.activeKey===t.activeKey||this.scrollToActiveTab()},setNextPrev:function(){var t=this.$props.getRef("nav"),e=this.$props.getRef("navTabsContainer"),n=this.getScrollWH(e||t),r=this.getOffsetWH(this.$props.getRef("container"))+1,a=this.getOffsetWH(this.$props.getRef("navWrap")),i=this.offset,o=r-n,s=this.next,c=this.prev;if(o>=0)s=!1,this.setOffset(0,!1),i=0;else if(o<i)s=!0;else{s=!1;var l=a-n;this.setOffset(l,!1),i=l}return c=i<0,this.setNext(s),this.setPrev(c),{next:s,prev:c}},getOffsetWH:function(t){var e=this.$props.tabBarPosition,n="offsetWidth";return"left"!==e&&"right"!==e||(n="offsetHeight"),t[n]},getScrollWH:function(t){var e=this.tabBarPosition,n="scrollWidth";return"left"!==e&&"right"!==e||(n="scrollHeight"),t[n]},getOffsetLT:function(t){var e=this.$props.tabBarPosition,n="left";return"left"!==e&&"right"!==e||(n="top"),t.getBoundingClientRect()[n]},setOffset:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Math.min(0,t);if(this.offset!==n){this.offset=n;var r={},a=this.$props.tabBarPosition,i=this.$props.getRef("nav").style,o=z(i);"left"===a||"right"===a?r=o?{value:"translate3d(0,".concat(n,"px,0)")}:{name:"top",value:"".concat(n,"px")}:o?("rtl"===this.$props.direction&&(n=-n),r={value:"translate3d(".concat(n,"px,0,0)")}):r={name:"left",value:"".concat(n,"px")},o?I(i,r.value):i[r.name]=r.value,e&&this.setNextPrev()}},setPrev:function(t){this.prev!==t&&(this.prev=t)},setNext:function(t){this.next!==t&&(this.next=t)},isNextPrevShown:function(t){return t?t.next||t.prev:this.next||this.prev},prevTransitionEnd:function(t){if("opacity"===t.propertyName){var e=this.$props.getRef("container");this.scrollToActiveTab({target:e,currentTarget:e})}},scrollToActiveTab:function(t){var e=this.$props.getRef("activeTab"),n=this.$props.getRef("navWrap");if((!t||t.target===t.currentTarget)&&e){var r=this.isNextPrevShown()&&this.lastNextPrevShown;if(this.lastNextPrevShown=this.isNextPrevShown(),r){var a=this.getScrollWH(e),i=this.getOffsetWH(n),o=this.offset,s=this.getOffsetLT(n),c=this.getOffsetLT(e);s>c?(o+=s-c,this.setOffset(o)):s+i<c+a&&(o-=c+a-(s+i),this.setOffset(o))}}},prevClick:function(t){this.__emit("prevClick",t);var e=this.$props.getRef("navWrap"),n=this.getOffsetWH(e),r=this.offset;this.setOffset(r+n)},nextClick:function(t){this.__emit("nextClick",t);var e=this.$props.getRef("navWrap"),n=this.getOffsetWH(e),r=this.offset;this.setOffset(r-n)}},render:function(){var e,n,r,a,o=this.next,s=this.prev,c=this.$props,l=c.prefixCls,f=c.scrollAnimated,u=c.navWrapper,p=h(this,"prevIcon"),b=h(this,"nextIcon"),d=s||o,v=t("span",{onClick:s&&this.prevClick,unselectable:"unselectable",class:(e={},xt(e,"".concat(l,"-tab-prev"),1),xt(e,"".concat(l,"-tab-btn-disabled"),!s),xt(e,"".concat(l,"-tab-arrow-show"),d),e),onTransitionend:this.prevTransitionEnd},[p||t("span",{class:"".concat(l,"-tab-prev-icon")},null)]),y=t("span",{onClick:o&&this.nextClick,unselectable:"unselectable",class:(n={},xt(n,"".concat(l,"-tab-next"),1),xt(n,"".concat(l,"-tab-btn-disabled"),!o),xt(n,"".concat(l,"-tab-arrow-show"),d),n)},[b||t("span",{class:"".concat(l,"-tab-next-icon")},null)]),g="".concat(l,"-nav"),m=(xt(r={},g,!0),xt(r,"".concat(g,f?"-animated":"-no-animated"),!0),r);return t("div",{class:(a={},xt(a,"".concat(l,"-nav-container"),1),xt(a,"".concat(l,"-nav-container-scrolling"),d),a),key:"container",ref:this.saveRef("container")},[v,y,t("div",{class:"".concat(l,"-nav-wrap"),ref:this.saveRef("navWrap")},[t("div",{class:"".concat(l,"-nav-scroll")},[t("div",{class:m,ref:this.saveRef("nav")},[u(i(this))])])])])}},Tt={props:{children:r.func.def((function(){return null}))},methods:{getRef:function(t){return this[t]},saveRef:function(t){var e=this;return function(n){n&&(e[t]=n)}}},render:function(){var t=this;return this.children((function(e){return t.saveRef(e)}),(function(e){return t.getRef(e)}))}};function Bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Bt(Object(n),!0).forEach((function(e){St(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function St(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kt(){return(kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var $t=s({name:"ScrollableInkTabBar",inheritAttrs:!1,render:function(){var e=this,n=this.$attrs.children;return t(Tt,{children:function(r,a){var i,s;return t(Pt,Ct({saveRef:r},e.$attrs),"function"==typeof(s=i=t(jt,Ct({saveRef:r,getRef:a},e.$attrs),{default:function(){return[t(vt,Ct({saveRef:r},kt(kt({},e.$attrs),{renderTabBarNode:n})),null),t(ct,Ct({saveRef:r,getRef:a},e.$attrs),null)]}}))||"[object Object]"===Object.prototype.toString.call(s)&&!o(s)?i:{default:function(){return[i]}})}},null)}});function Rt(){return(Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Kt(t){return(Kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var At=s({name:"TabBar",inheritAttrs:!1,props:{prefixCls:r.string,centered:r.looseBool.def(!1),tabBarStyle:r.style,tabBarExtraContent:r.VNodeChild,type:r.oneOf(g("line","card","editable-card")),tabPosition:r.oneOf(g("top","right","bottom","left")).def("top"),tabBarPosition:r.oneOf(g("top","right","bottom","left")),size:r.oneOf(g("default","small","large")),animated:{type:[Boolean,Object],default:void 0},renderTabBar:r.func,panels:r.array.def([]),activeKey:r.oneOfType([r.string,r.number]),tabBarGutter:r.number},render:function(){var e,n=this.$props,r=n.centered,a=n.tabBarStyle,i=n.animated,o=void 0===i||i,s=n.renderTabBar,c=n.tabBarExtraContent,l=n.tabPosition,f=n.prefixCls,u=n.type,p=void 0===u?"line":u,b=n.size,d="object"===Kt(o)?o.inkBar:o,h="left"===l||"right"===l,v=t("span",{class:"".concat(f,"-tab-prev-icon")},[t(h?it:B,{class:"".concat(f,"-tab-prev-icon-target")},null)]),y=t("span",{class:"".concat(f,"-tab-next-icon")},[t(h?C:S,{class:"".concat(f,"-tab-next-icon-target")},null)]),g=(Et(e={},this.$attrs.class,this.$attrs.class),Et(e,"".concat(f,"-centered-bar"),r),Et(e,"".concat(f,"-").concat(l,"-bar"),!0),Et(e,"".concat(f,"-").concat(b,"-bar"),!!b),Et(e,"".concat(f,"-card-bar"),p&&p.indexOf("card")>=0),e),m=Rt(Rt(Rt({},this.$props),this.$attrs),{children:null,inkBarAnimated:d,extraContent:c,prevIcon:v,nextIcon:y,style:a,class:g});return s?s(Rt(Rt({},m),{DefaultTabBar:$t})):t($t,m,null)}});function Nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Wt(){return(Wt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _t(t){return(_t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var It=s({TabPane:J,name:"ATabs",inheritAttrs:!1,props:{prefixCls:r.string,activeKey:r.oneOfType([r.string,r.number]),defaultActiveKey:r.oneOfType([r.string,r.number]),hideAdd:r.looseBool.def(!1),centered:r.looseBool.def(!1),tabBarStyle:r.object,tabBarExtraContent:r.any,destroyInactiveTabPane:r.looseBool.def(!1),type:r.oneOf(g("line","card","editable-card")),tabPosition:r.oneOf(["top","right","bottom","left"]).def("top"),size:r.oneOf(["default","small","large"]),animated:m(r.oneOfType([r.looseBool,r.object])),tabBarGutter:r.number,renderTabBar:r.func,onChange:{type:Function},onTabClick:r.func,onPrevClick:{type:Function},onNextClick:{type:Function},onEdit:{type:Function}},emits:["update:activeKey","edit","change"],setup:function(){return{configProvider:d("configProvider",O)}},mounted:function(){var t=" no-flex",e=P(this);e&&!nt&&-1===e.className.indexOf(t)&&(e.className+=t)},methods:{removeTab:function(t,e){e.stopPropagation(),b(t)&&this.$emit("edit",t,"remove")},handleChange:function(t){this.$emit("update:activeKey",t),this.$emit("change",t)},createNewTab:function(t){this.$emit("edit",t,"add")}},render:function(){var e,n,r=this,a=x(this),s=a.prefixCls,c=a.size,l=a.type,f=void 0===l?"line":l,u=a.tabPosition,b=a.animated,d=void 0===b||b,y=a.hideAdd,g=a.renderTabBar,m=this.$attrs,O=m.class,P=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(m,["class"]),T=(0,this.configProvider.getPrefixCls)("tabs",s),B=w(i(this)),C=h(this,"tabBarExtraContent"),S="object"===_t(d)?d.tabPane:d;"line"!==f&&(S="animated"in a&&S);var k,$=(Dt(e={},O,O),Dt(e,"".concat(T,"-vertical"),"left"===u||"right"===u),Dt(e,"".concat(T,"-").concat(c),!!c),Dt(e,"".concat(T,"-card"),f.indexOf("card")>=0),Dt(e,"".concat(T,"-").concat(f),!0),Dt(e,"".concat(T,"-no-animation"),!S),e),E=[];"editable-card"===f&&(E=[],B.forEach((function(e,n){var a=v(e).closable,i=(a=void 0===a||a)?t(j,{class:"".concat(T,"-close-x"),onClick:function(t){return r.removeTab(e.key,t)}},null):null;E.push(p(e,{tab:t("div",{class:a?void 0:"".concat(T,"-tab-unclosable")},[h(e,"tab"),i]),key:e.key||n}))})),y||(C=t("span",null,[t(R,{class:"".concat(T,"-new-tab"),onClick:this.createNewTab},null),C]))),C=C?t("div",{class:"".concat(T,"-extra-content")},"function"==typeof(k=C)||"[object Object]"===Object.prototype.toString.call(k)&&!o(k)?C:{default:function(){return[C]}}):null;var K=g||this.$slots.renderTabBar,A=Wt(Wt(Wt(Wt({},a),{prefixCls:T,tabBarExtraContent:C,renderTabBar:K}),P),{children:B}),N=(Dt(n={},"".concat(T,"-").concat(u,"-content"),!0),Dt(n,"".concat(T,"-card-content"),f.indexOf("card")>=0),n),W=Wt(Wt(Wt(Wt({},a),{prefixCls:T,tabBarPosition:u,renderTabBar:function(){return t(At,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Nt(Object(n),!0).forEach((function(e){Dt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({key:"tabBar"},A),null)},renderTabContent:function(){return t(et,{class:N,animated:S,animatedWithMargin:!0},null)},children:E.length>0?E:B}),P),{onChange:this.handleChange,class:$});return t(X,W,null)}});function zt(){return(zt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}It.TabPane=zt(zt({},J),{name:"ATabPane",__ANT_TAB_PANE:!0}),It.TabContent=zt(zt({},et),{name:"ATabContent"}),It.install=function(t){return t.component(It.name,It),t.component(It.TabPane.name,It.TabPane),t.component(It.TabContent.name,It.TabContent),t};export{It as T};