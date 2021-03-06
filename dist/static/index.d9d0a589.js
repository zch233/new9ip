var t=(t,e,s)=>new Promise(((n,r)=>{var o=t=>{try{i(s.next(t))}catch(e){r(e)}},a=t=>{try{i(s.throw(t))}catch(e){r(e)}},i=t=>t.done?n(t.value):Promise.resolve(t.value).then(o,a);i((s=s.apply(t,e)).next())}));import{_ as e}from"./index.7c84c0b9.js";import{_ as s}from"./index.6473ffdb.js";import{d as n,S as r,G as o,k as a,A as i,E as u,D as c,J as l,P as d,M as f,ak as p,B as h,aG as m,K as y,N as g,ae as b,af as v,z as C,b6 as S,aX as N,h as x,i as P,j as O,y as j,n as w,_ as B,x as T,r as k,o as _,c as D,b7 as I,p as A,f as $,q as U,t as V,m as E,F as Z,l as M}from"./index.8ac37e48.js";import{_ as W}from"./UIButton.41061aff.js";import{d as z}from"./patent.308606c1.js";import{g as H}from"./order.93077da3.js";import"./index.658771aa.js";import"./vendor.5c0531cb.js";function F(){return(F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}function L(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!u(t)}function R(t){return t?t.toString().split("").reverse().map((function(t){var e=Number(t);return isNaN(e)?t:e})):[]}var Y=n({name:"ScrollNumber",mixins:[r],inheritAttrs:!1,props:{prefixCls:d.string,count:d.any,component:d.string,title:d.oneOfType([d.number,d.string,null]),displayComponent:d.any,onAnimated:d.func},emits:["animated"],setup:function(){return{configProvider:o("configProvider",f),lastCount:void 0,timeout:void 0}},data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(){this.lastCount=this.sCount,this.setState({animateStarted:!0})}},updated:function(){var t=this,e=this.animateStarted,s=this.count;e&&(this.clearTimeout(),this.timeout=setTimeout((function(){t.setState({animateStarted:!1,sCount:s},t.handleAnimated)})))},beforeUnmount:function(){this.clearTimeout()},methods:{clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)})),getPositionByNum:function(t,e){var s=this.sCount,n=Math.abs(Number(s)),r=Math.abs(Number(this.lastCount)),o=Math.abs(R(s)[e]),a=Math.abs(R(this.lastCount)[e]);return this.animateStarted?10+t:n>r?o>=a?10+t:20+t:o<=a?10+t:t},handleAnimated:function(){this.$emit("animated")},renderNumberList:function(t,e){for(var s=[],n=0;n<30;n++)s.push(a("p",{key:n.toString(),class:i(e,{current:t===n})},[n%10]));return s},renderCurrentNumber:function(t,e,s){if("number"==typeof e){var n=this.getPositionByNum(e,s),r={transition:this.animateStarted||void 0===R(this.lastCount)[s]?"none":void 0,msTransform:"translateY(".concat(100*-n,"%)"),WebkitTransform:"translateY(".concat(100*-n,"%)"),transform:"translateY(".concat(100*-n,"%)")};return a("span",{class:"".concat(t,"-only"),style:r,key:s},[this.renderNumberList(n,"".concat(t,"-only-unit"))])}return a("span",{key:"symbol",class:"".concat(t,"-symbol")},L(e)?e:{default:function(){return[e]}})},renderNumberElement:function(t){var e=this,s=this.sCount;return s&&Number(s)%1==0?R(s).map((function(s,n){return e.renderCurrentNumber(t,s,n)})).reverse():s}},render:function(){var t,e=this.prefixCls,s=this.title,n=this.component,r=void 0===n?"sup":n,o=this.displayComponent,u=(0,this.configProvider.getPrefixCls)("scroll-number",e),d=this.$attrs,f=d.class,p=d.style,h=void 0===p?{}:p;if(o)return c(o,{class:i("".concat(u,"-custom-component"),o.props&&o.props.class)});var m=l(F(F({},this.$props),this.$attrs),["count","onAnimated","component","prefixCls","displayComponent"]),y=F({},h),g=F(F({},m),{title:s,style:y,class:i(u,f)});return h&&h.borderColor&&(g.style.boxShadow="0 0 0 1px ".concat(h.borderColor," inset")),a(r,g,L(t=this.renderNumberElement(u))?t:{default:function(){return[t]}})}});function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function J(){return(J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}function K(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!u(t)}function X(t){return-1!==m.indexOf(t)}var Q=n({name:"ABadge",props:p({count:d.VNodeChild,showZero:d.looseBool,overflowCount:d.number,dot:d.looseBool,prefixCls:d.string,scrollNumberPrefixCls:d.string,status:d.oneOf(C("success","processing","default","error","warning")),color:d.string,text:d.VNodeChild,offset:d.arrayOf(d.oneOfType([String,Number])),numberStyle:d.style,title:d.string},{showZero:!1,dot:!1,overflowCount:99}),setup:function(){return{configProvider:o("configProvider",f),badgeCount:void 0}},methods:{getNumberedDispayCount:function(){var t=this.$props.overflowCount,e=this.badgeCount;return e>t?"".concat(t,"+"):e},getDispayCount:function(){return this.isDot()?"":this.getNumberedDispayCount()},getScrollNumberTitle:function(){var t=this.$props.title,e=this.badgeCount;return t||("string"==typeof e||"number"==typeof e?e:void 0)},getStyleWithOffset:function(){var t,e=this.$props,s=e.offset,n=e.numberStyle;return J(s?{right:"".concat(-parseInt(s[0],10),"px"),marginTop:(t=s[1],!isNaN(parseFloat(t))&&isFinite(t)?"".concat(s[1],"px"):s[1])}:{},n)},getBadgeClassName:function(t,e){var s,n=this.hasStatus();return i(t,(q(s={},"".concat(t,"-status"),n),q(s,"".concat(t,"-dot-status"),n&&this.dot&&!this.isZero()),q(s,"".concat(t,"-not-a-wrapper"),!e.length),s))},hasStatus:function(){var t=this.$props,e=t.status,s=t.color;return!!e||!!s},isZero:function(){var t=this.getNumberedDispayCount();return"0"===t||0===t},isDot:function(){var t=this.$props.dot,e=this.isZero();return t&&!e||this.hasStatus()},isHidden:function(){var t=this.$props.showZero,e=this.getDispayCount(),s=this.isZero(),n=this.isDot();return(null==e||""===e||s&&!t)&&!n},renderStatusText:function(t){var e=h(this,"text");return this.isHidden()||!e?null:a("span",{class:"".concat(t,"-status-text")},K(e)?e:{default:function(){return[e]}})},renderDispayComponent:function(){var t=this.badgeCount;if(t&&"object"===G(t))return c(t,{style:this.getStyleWithOffset()},!1)},renderBadgeNumber:function(t,e){var s,n=this.$props,r=n.status,o=n.color,i=this.badgeCount,u=this.getDispayCount(),c=this.isDot(),l=this.isHidden(),d=(q(s={},"".concat(t,"-dot"),c),q(s,"".concat(t,"-count"),!c),q(s,"".concat(t,"-multiple-words"),!c&&i&&i.toString&&i.toString().length>1),q(s,"".concat(t,"-status-").concat(r),!!r),q(s,"".concat(t,"-status-").concat(o),X(o)),s),f=this.getStyleWithOffset();return o&&!X(o)&&((f=f||{}).background=o),l?null:y(a(Y,{prefixCls:e,"data-show":!l,class:d,count:u,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:f,key:"scrollNumber"},null),[[S,!l]])}},render:function(){var t,e=this.prefixCls,s=this.scrollNumberPrefixCls,n=this.status,r=this.color,o=h(this,"text"),u=this.configProvider.getPrefixCls,c=u("badge",e),l=u("scroll-number",s),d=g(this),f=h(this,"count");Array.isArray(f)&&(f=f[0]),this.badgeCount=f;var p=this.renderBadgeNumber(c,l),m=this.renderStatusText(c),y=i((q(t={},"".concat(c,"-status-dot"),this.hasStatus()),q(t,"".concat(c,"-status-").concat(n),!!n),q(t,"".concat(c,"-status-").concat(r),X(r)),t)),C={};if(r&&!X(r)&&(C.background=r),!d.length&&this.hasStatus()){var S=this.getStyleWithOffset(),N=S&&S.color;return a("span",{class:this.getBadgeClassName(c,d),style:S},[a("span",{class:y,style:C},null),a("span",{style:{color:N},class:"".concat(c,"-status-text")},K(o)?o:{default:function(){return[o]}})])}var x=b(d.length?"".concat(c,"-zoom"):"");return a("span",{class:this.getBadgeClassName(c,d)},[d,a(v,x,K(p)?p:{default:function(){return[p]}}),m])}}),tt=n({name:"UIBadge",components:{AntBadge:N(Q)}});const et=w("data-v-d47cd5e4"),st=et(((t,e,s,n,r,o)=>{const a=x("AntBadge");return P(),O(a,null,{default:et((()=>[j(t.$slots,"default")])),_:3})}));tt.render=st,tt.__scopeId="data-v-d47cd5e4";var nt=n({name:"User",components:{VIPBrand:e,UIButton:W,Icon:B,PatentCard:s,UIBadge:tt},setup(){const e=T(),s=k([]),n=k(0),r=()=>t(this,null,(function*(){const{data:t}=yield z({size:8});s.value=t.list})),o=()=>t(this,null,(function*(){const{data:t}=yield H({status:I.CREATED.toString(),size:1});n.value=t.totalCount}));return _((()=>{r(),o(),e.dispatch("setUser")})),{user:D((()=>e.getters.user)),userPoints:D((()=>e.getters.userPoints)),recommendPatents:s,waitOrderNumber:n}}});const rt=w("data-v-5c95bda2");A("data-v-5c95bda2");const ot={class:"user"},at={class:"user-head"},it={class:"user-head-left"},ut={class:"user-head-left-headImage"},ct={class:"user-head-left-info"},lt={class:"user-head-left-info-account"},dt={key:1,class:"userTag"},ft={key:0,class:"user-head-left-info-vipExpireTime"},pt={class:"user-head-left-info-point"},ht={class:"user-head-right"},mt={class:"darkButton"},yt=U("开通记录"),gt={class:"user-orders"},bt=a("p",{class:"cardTitle"},[a("em",null,"我的订单")],-1),vt={class:"orderViews"},Ct=a("p",null,"待付款",-1),St=a("p",null,"已付款",-1),Nt=a("p",null,"全部订单",-1),xt={class:"user-recommend"},Pt={class:"cardTitle"},Ot=a("em",null,"猜你喜欢",-1),jt=U("查看更多 "),wt={class:"recommendPatents"};$();const Bt=rt(((t,e,s,n,r,o)=>{const i=x("Icon"),u=x("VIPBrand"),c=x("RouterLink"),l=x("UIBadge"),d=x("PatentCard");return P(),O("div",ot,[a("section",at,[a("div",it,[a("div",ut,[t.user.avatar?(P(),O("img",{key:0,src:t.user.avatar,alt:""},null,8,["src"])):(P(),O(i,{key:1,icon:"defaultHeadImage"}))]),a("div",ct,[a("p",lt,[U(V(t.user.nickname),1),t.user.hasVip?(P(),O(u,{key:0})):(P(),O("span",dt,"普通会员"))]),t.user.hasVip?(P(),O("p",ft,"到期时间："+V(t.user.vipExpireDate),1)):E("",!0),a("span",pt,[a(c,{to:"/user/point"},{default:rt((()=>[a(i,{icon:"point"}),U(V(t.userPoints)+" 积分",1)])),_:1})])])]),a("div",ht,[a(c,{to:"/vip"},{default:rt((()=>[a("button",mt,[U("立即"+V(t.user.hasVip?"续费":"开通"),1),a(i,{icon:"right_fill"})])])),_:1}),a(c,{to:"/user/vipRecord"},{default:rt((()=>[yt])),_:1})])]),a("section",gt,[bt,a("div",vt,[a(c,{to:"/user/order?status=0"},{default:rt((()=>[a(l,{count:t.waitOrderNumber},{default:rt((()=>[a(i,{icon:"waitPay"})])),_:1},8,["count"]),Ct])),_:1}),a(c,{to:"/user/order?status=1"},{default:rt((()=>[a(i,{icon:"hadPay"}),St])),_:1}),a(c,{to:"/user/order"},{default:rt((()=>[a(i,{icon:"finishPay"}),Nt])),_:1})])]),a("section",xt,[a("p",Pt,[Ot,a(c,{to:"/patent"},{default:rt((()=>[jt,a(i,{icon:"right"})])),_:1})]),a("div",wt,[(P(!0),O(Z,null,M(t.recommendPatents,(t=>(P(),O("div",{class:"recommendPatents-item",key:t.id},[a(d,{patent:t},null,8,["patent"])])))),128))])])])}));nt.render=Bt,nt.__scopeId="data-v-5c95bda2";export default nt;
