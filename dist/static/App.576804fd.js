import{w as e,t,d as a,P as n,i as o,a as s,r as c,c as r,b as l,e as i,C as u,f as p,g as d,h as f,j as v,v as h,T as m,k as b,I as g,l as y,E as w,m as j,n as O,o as A,p as I,_ as x,u as C,q as P,s as _,x as M,y as H,z as S,A as k,B as N,D as T,F as L,G as R,H as U,J as V,K as D,L as E,M as W,N as q,O as B,Q as K,R as F}from"./index.316aaba3.js";import{_ as z,a as G}from"./index.0c7004c0.js";import{_ as J}from"./UIInputSearch.293930a1.js";import"./vendor.5c0531cb.js";import"./index.b171cb0c.js";import"./index.b31f51ca.js";import"./SearchOutlined.5fb1617c.js";function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){X(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function X(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Y(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!i(e)}function Z(){}function ee(e,t,a){var n,o;return null!==(o=null===(n=e[a])||void 0===n?void 0:n.call(e))&&void 0!==o?o:t[a]}var te={success:b,info:g,error:y,warning:w},ae={success:j,info:O,error:A,warning:I},ne=t("success","info","warning","error"),oe=e(a({name:"AAlert",inheritAttrs:!1,props:{type:n.oneOf(ne),closable:n.looseBool,closeText:n.VNodeChild,message:n.VNodeChild,description:n.VNodeChild,afterClose:n.func.def(Z),showIcon:n.looseBool,prefixCls:n.string,banner:n.looseBool,icon:n.VNodeChild,onClose:n.VNodeChild},emits:["close"],setup:function(e,t){var a=t.slots,n=t.emit,i=t.attrs,b=t.expose,g=o("configProvider",s),y=c(!1),w=c(!1),j=c(),O=function(e){e.preventDefault();var t=j.value;t.style.height="".concat(t.offsetHeight,"px"),t.style.height="".concat(t.offsetHeight,"px"),y.value=!0,n("close",e)},A=function(){var t;y.value=!1,w.value=!0,null===(t=e.afterClose)||void 0===t||t.call(e)};return b({animationEnd:A}),function(){var t,n,o=e.prefixCls,s=e.banner,c=(0,g.getPrefixCls)("alert",o),b=e.closable,I=e.type,x=e.showIcon,C=ee(a,e,"closeText"),P=ee(a,e,"description"),_=ee(a,e,"message"),M=ee(a,e,"icon");x=!(!s||void 0!==x)||x;var H=(P?ae:te)[I=s&&void 0===I?"warning":I||"info"]||null;C&&(b=!0);var S=r(c,(X(n={},"".concat(c,"-").concat(I),!0),X(n,"".concat(c,"-closing"),y.value),X(n,"".concat(c,"-with-description"),!!P),X(n,"".concat(c,"-no-icon"),!x),X(n,"".concat(c,"-banner"),!!s),X(n,"".concat(c,"-closable"),b),n)),k=b?l("button",{type:"button",onClick:O,class:"".concat(c,"-close-icon"),tabindex:0},[C?l("span",{class:"".concat(c,"-close-text")},Y(C)?C:{default:function(){return[C]}}):l(u,null,null)]):null,N=M&&(p(M)?d(M,{class:"".concat(c,"-icon")}):l("span",{class:"".concat(c,"-icon")},Y(M)?M:{default:function(){return[M]}}))||l(H,{class:"".concat(c,"-icon")},null),T=f("".concat(c,"-slide-up"),{appear:!1,onAfterLeave:A});return w.value?null:l(m,T,Y(t=v(l("div",$($({},i),{},{class:[i.class,S],"data-show":!y.value,ref:j}),[x?N:null,l("span",{class:"".concat(c,"-message")},Y(_)?_:{default:function(){return[_]}}),l("span",{class:"".concat(c,"-description")},Y(P)?P:{default:function(){return[P]}}),k]),[[h,!y.value]]))?t:{default:function(){return[t]}})}}})),se=a({name:"appMenu",components:{UIInputSearch:J,Icon:x},setup(){const e=C(),t=P(),a=c(""),n=c(0),o=_((()=>"Home"===e.name));M((()=>{a.value=e.query.word}));const s=()=>n.value=N();return H((()=>window.addEventListener("scroll",s))),S((()=>window.removeEventListener("scroll",s))),{route:e,isHomeRoute:o,menuList:[{title:"首页",path:"/"},{title:"专利市场",path:"/patent"}],scrollTop:n,searchKeyword:a,searchPatent:a=>{t.push({path:"/patent",query:{word:a.trim(),listMode:e.query.listMode}})},handlePlasticMenuClick:()=>{k.info("敬请期待")}}}});const ce=K("data-v-3e12dba3");T("data-v-3e12dba3");const re={class:"pageWidthWithCenter menuWrapper"},le={class:"leftMenu"},ie={class:"logoTextWrapper"},ue={class:"menuList"},pe={key:0,class:"rightSearch"};L();const de=ce(((e,t,a,n,o,s)=>{const c=R("Icon"),r=R("RouterLink"),i=R("UIInputSearch");return U(),V("div",{class:["appMenu",e.isHomeRoute&&0===e.scrollTop&&"brief"]},[l("div",re,[l("div",le,[l(r,{to:"/"},{default:ce((()=>[l("div",ie,[l(c,{class:"logoText",icon:"logoText"+(e.isHomeRoute&&0===e.scrollTop?"_brief":"")},null,8,["icon"])])])),_:1}),l("nav",ue,[(U(!0),V(D,null,E(e.menuList,(t=>(U(),V("div",{key:t.path},[l(r,{class:["menuItem",[(e.isHomeRoute?e.route.fullPath:e.route.path)===t.path&&"active"]],to:t.path},{default:ce((()=>[W(q(t.title),1)])),_:2},1032,["class","to"])])))),128)),l("div",null,[l("span",{class:"plasticMenuItem",onClick:t[1]||(t[1]=(...t)=>e.handlePlasticMenuClick&&e.handlePlasticMenuClick(...t))},"免费找专利")])])]),e.isHomeRoute&&e.scrollTop<300?B("v-if",!0):(U(),V("div",pe,[l(i,{value:e.searchKeyword,"onUpdate:value":t[2]||(t[2]=t=>e.searchKeyword=t),class:"inputMenuSearch",placeholder:"请搜索专利号 / 名称","enter-button":"搜索",onSearch:e.searchPatent},null,8,["value","onSearch"])]))])],2)}));se.render=de,se.__scopeId="data-v-3e12dba3";var fe=a({name:"UIAlert",components:{AntAlert:oe}});const ve=K("data-v-d4aaa386"),he=ve(((e,t,a,n,o,s)=>{const c=R("AntAlert");return U(),V(c,null,{message:ve((()=>[F(e.$slots,"message")])),_:1})}));fe.render=he,fe.__scopeId="data-v-d4aaa386";var me=a({name:"AppNotice",components:{UIAlert:fe}});const be=K("data-v-6c87c39c");T("data-v-6c87c39c");const ge={class:"appNotice"},ye=l("span",{class:"messageContent"},"尊敬的第九区用户您好：本站将于近日对部分专利进行调价，具体以实际调价为准，敬请关注。",-1);L();const we=be(((e,t,a,n,o,s)=>{const c=R("UIAlert");return U(),V("div",ge,[l(c,{closable:"",banner:""},{message:be((()=>[ye])),_:1})])}));me.render=we,me.__scopeId="data-v-6c87c39c";var je=a({name:"LayoutApp",components:{AppFooter:z,AppHeader:G,AppMenu:se,AppNotice:me}});const Oe=K("data-v-38a0b956");T("data-v-38a0b956");const Ae={class:"routerViewWrapper"};L();const Ie=Oe(((e,t,a,n,o,s)=>{const c=R("AppNotice"),r=R("AppHeader"),i=R("AppMenu"),u=R("RouterView"),p=R("AppFooter");return U(),V(D,null,[l(c),l(r),l(i),l("div",Ae,[l(u)]),l(p)],64)}));je.render=Ie,je.__scopeId="data-v-38a0b956";export default je;
