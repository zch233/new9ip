import{_ as t}from"./index.95556664.js";import{_ as e}from"./index.6861ec4e.js";import{aX as n,d as a,S as o,P as r,z as i,G as l,M as s,E as c,bg as d,k as u,R as f,N as p,B as m,h as v,i as g,j as b,y as C,n as y,_ as h,u as T,a as A,a$ as P,r as I,o as _,ay as x,a5 as k,a6 as j,p as N,f as R,t as S,q as U,F as B,l as E}from"./index.32e949db.js";import{T as O}from"./index.5d272740.js";import{a as w,A as $}from"./Col.130b09ac.js";import{I as L}from"./index.ae689225.js";import{_ as V}from"./UIButton.2925dc64.js";import{_ as Y}from"./UISkeleton.c771be86.js";import{_ as G}from"./index.3976f1be.js";import{g as K,o as M}from"./orderConfirm.59b5be22.js";import{s as D}from"./index.064a1afb.js";import"./debounce.b6942387.js";import"./isSymbol.7f3ca03b.js";import"./toNumber.54b8305b.js";import"./CheckOutlined.a7dff8fe.js";import"./vendor.5c0531cb.js";import"./LeftOutlined.aa0e0274.js";import"./SearchOutlined.76f31862.js";import"./UIModal.32fbdd9e.js";var W=n(w),z=n($);function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!c(t)}var F=O.TabPane,H=a({name:"ACard",mixins:[o],props:{prefixCls:r.string,title:r.VNodeChild,extra:r.VNodeChild,bordered:r.looseBool.def(!0),bodyStyle:r.style,headStyle:r.style,loading:r.looseBool.def(!1),hoverable:r.looseBool.def(!1),type:r.string,size:r.oneOf(i("default","small")),actions:r.VNodeChild,tabList:{type:Array},tabBarExtraContent:r.VNodeChild,activeTabKey:r.string,defaultActiveTabKey:r.string,cover:r.VNodeChild,onTabChange:{type:Function}},setup:function(){return{configProvider:l("configProvider",s)}},data:function(){return{widerPadding:!1}},methods:{getAction:function(t){return t.map((function(e,n){return c(e)&&!d(e)||!c(e)?u("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(n)},[u("span",null,q(e)?e:{default:function(){return[e]}})]):null}))},triggerTabChange:function(t){this.$emit("tabChange",t)},isContainGrid:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.forEach((function(e){e&&f(e.type)&&e.type.__ANT_CARD_GRID&&(t=!0)})),t}},render:function(){var t,e,n,a,o,r,i,l,s,c,d,f,v,g,b,C=this.$props,y=C.prefixCls,h=C.headStyle,T=void 0===h?{}:h,A=C.bodyStyle,P=void 0===A?{}:A,I=C.loading,_=C.bordered,x=void 0===_||_,k=C.size,j=void 0===k?"default":k,N=C.type,R=C.tabList,S=C.hoverable,U=C.activeTabKey,B=C.defaultActiveTabKey,E=this.$slots,w=p(this),$=(0,this.configProvider.getPrefixCls)("card",y),L=m(this,"tabBarExtraContent"),V=(X(v={},"".concat($),!0),X(v,"".concat($,"-loading"),I),X(v,"".concat($,"-bordered"),x),X(v,"".concat($,"-hoverable"),!!S),X(v,"".concat($,"-contain-grid"),this.isContainGrid(w)),X(v,"".concat($,"-contain-tabs"),R&&R.length),X(v,"".concat($,"-").concat(j),"default"!==j),X(v,"".concat($,"-type-").concat(N),!!N),v),Y=0===P.padding||"0px"===P.padding?{padding:24}:void 0,G=u("div",{class:"".concat($,"-loading-content"),style:Y},[u(W,{gutter:8},q(e=u(z,{span:22},q(t=u("div",{class:"".concat($,"-loading-block")},null))?t:{default:function(){return[t]}}))?e:{default:function(){return[e]}}),u(W,{gutter:8},{default:function(){return[u(z,{span:8},q(n=u("div",{class:"".concat($,"-loading-block")},null))?n:{default:function(){return[n]}}),u(z,{span:15},q(a=u("div",{class:"".concat($,"-loading-block")},null))?a:{default:function(){return[a]}})]}}),u(W,{gutter:8},{default:function(){return[u(z,{span:6},q(o=u("div",{class:"".concat($,"-loading-block")},null))?o:{default:function(){return[o]}}),u(z,{span:18},q(r=u("div",{class:"".concat($,"-loading-block")},null))?r:{default:function(){return[r]}})]}}),u(W,{gutter:8},{default:function(){return[u(z,{span:13},q(i=u("div",{class:"".concat($,"-loading-block")},null))?i:{default:function(){return[i]}}),u(z,{span:9},q(l=u("div",{class:"".concat($,"-loading-block")},null))?l:{default:function(){return[l]}})]}}),u(W,{gutter:8},{default:function(){return[u(z,{span:4},q(s=u("div",{class:"".concat($,"-loading-block")},null))?s:{default:function(){return[s]}}),u(z,{span:3},q(c=u("div",{class:"".concat($,"-loading-block")},null))?c:{default:function(){return[c]}}),u(z,{span:16},q(d=u("div",{class:"".concat($,"-loading-block")},null))?d:{default:function(){return[d]}})]}})]),K=void 0!==U,M=(X(g={size:"large"},K?"activeKey":"defaultActiveKey",K?U:B),X(g,"tabBarExtraContent",L),X(g,"onChange",this.triggerTabChange),X(g,"class","".concat($,"-head-tabs")),g),D=R&&R.length?u(O,M,q(f=R.map((function(t){var e=t.tab,n=t.slots,a=null==n?void 0:n.tab,o=void 0!==e?e:E[a]?E[a](t):null;return u(F,{tab:o,key:t.key,disabled:t.disabled},null)})))?f:{default:function(){return[f]}}):null,H=m(this,"title"),J=m(this,"extra");(H||J||D)&&(b=u("div",{class:"".concat($,"-head"),style:T},[u("div",{class:"".concat($,"-head-wrapper")},[H&&u("div",{class:"".concat($,"-head-title")},q(H)?H:{default:function(){return[H]}}),J&&u("div",{class:"".concat($,"-extra")},q(J)?J:{default:function(){return[J]}})]),D]));var Q=m(this,"cover"),Z=Q?u("div",{class:"".concat($,"-cover")},q(Q)?Q:{default:function(){return[Q]}}):null,tt=u("div",{class:"".concat($,"-body"),style:P},[I?G:w]),et=m(this,"actions"),nt=et&&et.length?u("ul",{class:"".concat($,"-actions")},[this.getAction(et)]):null;return u("div",{class:V,ref:"cardContainerRef"},[b,Z,w?tt:null,nt])}});function J(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!c(t)}var Q=a({name:"ACardMeta",props:{prefixCls:r.string,title:r.VNodeChild,description:r.VNodeChild,avatar:r.VNodeChild},setup:function(){return{configProvider:l("configProvider",s)}},render:function(){var t,e,n,a=this.$props.prefixCls,o=(0,this.configProvider.getPrefixCls)("card",a),r=(t={},e="".concat(o,"-meta"),n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t),i=m(this,"avatar"),l=m(this,"title"),s=m(this,"description"),c=i?u("div",{class:"".concat(o,"-meta-avatar")},J(i)?i:{default:function(){return[i]}}):null,d=l?u("div",{class:"".concat(o,"-meta-title")},J(l)?l:{default:function(){return[l]}}):null,f=s?u("div",{class:"".concat(o,"-meta-description")},J(s)?s:{default:function(){return[s]}}):null,p=d||f?u("div",{class:"".concat(o,"-meta-detail")},[d,f]):null;return u("div",{class:r},[c,p])}});function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var tt=a({name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:r.string,hoverable:r.looseBool},setup:function(){return{configProvider:l("configProvider",s)}},render:function(){var t,e=this.$props,n=e.prefixCls,a=e.hoverable,o=void 0===a||a,r=(0,this.configProvider.getPrefixCls)("card",n),i=(Z(t={},"".concat(r,"-grid"),!0),Z(t,"".concat(r,"-grid-hoverable"),o),t);return u("div",{class:i},[p(this)])}});H.Meta=Q,H.Grid=tt,H.install=function(t){return t.component(H.name,H),t.component(Q.name,Q),t.component(tt.name,tt),t};var et=a({name:"UICard",components:{AntCard:H}});const nt=y("data-v-06781f4f"),at=nt(((t,e,n,a,o,r)=>{const i=v("AntCard");return g(),b(i,null,{default:nt((()=>[C(t.$slots,"default")])),_:3})}));et.render=at,et.__scopeId="data-v-06781f4f";var ot=a({name:"UIInputTextArea",components:{AntInputTextArea:L.TextArea}});const rt=y("data-v-7267e24a"),it=rt(((t,e,n,a,o,r)=>{const i=v("AntInputTextArea");return g(),b(i,null,{default:rt((()=>[C(t.$slots,"default")])),_:3})}));ot.render=it,ot.__scopeId="data-v-7267e24a";var lt=a({name:"OrderConfirm",components:{AppTitleBar:t,OrderSteps:e,UIInputTextArea:ot,UICard:et,Icon:h,UISkeleton:Y,UIButton:V,PatentImage:G},setup(){const t=T(),e=A(),n=P(t.query.commodityId),a=I(!1),o=I(!1),r=I(""),i=I(k[0]),l=I({});return _((()=>{a.value=!0,K({commodityId:n,commodityType:"PATENT"}).then((({data:t})=>{l.value=t})).catch((t=>{3200===t.code&&e.push("/order/pay/result?status=0&type=PATENT")})).finally((()=>a.value=!1))})),{PATENT_TYPE:x,PAY_ROUTES:k,remark:r,pageLoading:a,submitLoading:o,currentPayRoute:i,handleBuyClick:()=>{return t=this,a=null,l=function*(){const{payRoute:t,tradeType:a}=i.value;o.value=!0;const{data:l}=yield M({commodityId:n,commodityType:"PATENT",payRoute:t,tradeType:a,remark:r.value}).finally((()=>o.value=!1)),{orderNo:s,tradeNo:c}=l,d=`/order/pay/${"UMS_PAY"===t?"code":"WXPAY"===t?"wechat":"form"}?orderNo=${s}&tradeNo=${c}&type=PATENT&payRoute=${t}&tradeType=${a}`;"UMS_PAY"===t||"WXPAY"===t?yield e.push(d):(D({tradeNo:c,orderNo:s,type:"PATENT",getContainer:"orderConfirm"}),j(d))},new Promise(((e,n)=>{var o=t=>{try{i(l.next(t))}catch(e){n(e)}},r=t=>{try{i(l.throw(t))}catch(e){n(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,r);i((l=l.apply(t,a)).next())}));var t,a,l},orderConfirmation:l}}});const st=y("data-v-69ae923d");N("data-v-69ae923d");const ct={id:"orderConfirm",class:"orderConfirm"},dt={class:"pageWidthWithCenter orderConfirmWrapper"},ut={class:"orderConfirm-left"},ft={class:"orderConfirm-left-patent"},pt={class:"patentContent"},mt={class:"patentContent-image"},vt={class:"patentContent-info"},gt={class:"patentContent-info-title"},bt={class:"patentContent-info-col"},Ct=u("label",null,"专利类型",-1),yt=u("label",null,"发明人",-1),ht={class:"patentContent-info-col"},Tt=u("label",null,"专利号",-1),At=u("label",null,"标签",-1),Pt={class:"patentContent-info-col"},It=u("label",null,"法律状态",-1),_t=u("label",null,"价格",-1),xt={class:"patentContent-info-col"},kt=u("label",null,"缴费截止",-1),jt=u("span",null,[u("label",null,"数量"),U("1")],-1),Nt={class:"orderConfirm-left-remark"},Rt={class:"orderConfirm-right"},St={class:"orderConfirm-right-priceItem"},Ut=u("label",null,"原价",-1),Bt=u("label",null,"VIP会员",-1),Et={class:"orderConfirm-right-priceItem totalAmount"},Ot=u("label",null,"实付款",-1),wt={class:"orderConfirm-right-payRoutes"},$t={class:"orderConfirm-right-payRoutes-item-info"},Lt=U("确认付款");R();const Vt=st(((t,e,n,a,o,r)=>{const i=v("OrderSteps"),l=v("AppTitleBar"),s=v("PatentImage"),c=v("UISkeleton"),d=v("UICard"),f=v("UIInputTextArea"),p=v("Icon"),m=v("UIButton");return g(),b("div",ct,[u(l,{title:"确认订单"},{default:st((()=>[u(i)])),_:1}),u("div",dt,[u("section",ut,[u("div",ft,[u(d,{title:"商品信息"},{default:st((()=>[u(c,{active:"",paragraph:{rows:5},loading:t.pageLoading},{default:st((()=>[u("div",pt,[u("div",mt,[u(s,{cover:t.orderConfirmation.categoryCover},null,8,["cover"])]),u("div",vt,[u("h2",gt,S(t.orderConfirmation.name),1),u("p",bt,[u("span",null,[Ct,U(S(t.orderConfirmation.number),1)]),u("span",null,[yt,U(S(t.orderConfirmation.inventorExplain),1)])]),u("p",ht,[u("span",null,[Tt,U(S(t.PATENT_TYPE.label[t.orderConfirmation.type]),1)]),u("span",null,[At,U(S(t.orderConfirmation.tags),1)])]),u("p",Pt,[u("span",null,[It,U(S(t.orderConfirmation.legalStatus),1)]),u("span",null,[_t,U("￥"+S(t.orderConfirmation.price),1)])]),u("p",xt,[u("span",null,[kt,U(S(t.orderConfirmation.paymentDeadline||"暂无"),1)]),jt])])])])),_:1},8,["loading"])])),_:1})]),u("div",Nt,[u(d,{title:"订单备注"},{default:st((()=>[u(c,{active:"",paragraph:{rows:3},loading:t.pageLoading},{default:st((()=>[u(f,{value:t.remark,"onUpdate:value":e[1]||(e[1]=e=>t.remark=e),"html-type":"textarea",placeholder:"请输入订单备注（选填）",rows:6},null,8,["value"])])),_:1},8,["loading"])])),_:1})])]),u("section",Rt,[u(d,{title:"订单金额"},{default:st((()=>[u(c,{active:"",paragraph:{rows:13},loading:t.pageLoading},{default:st((()=>[u("p",St,[Ut,u("span",null,"￥"+S(t.orderConfirmation.price),1)]),(g(!0),b(B,null,E(t.orderConfirmation.discounts||[],(t=>(g(),b("p",{class:"orderConfirm-right-priceItem",key:t.price},[Bt,u("span",null,"-￥"+S(t.price),1)])))),128)),u("p",Et,[Ot,u("b",null,"￥"+S(t.orderConfirmation.totalAmount),1)]),u("ul",wt,[(g(!0),b(B,null,E(t.PAY_ROUTES,(e=>(g(),b("li",{key:e.icon,onClick:n=>t.currentPayRoute=e,class:"orderConfirm-right-payRoutes-item"},[u(p,{class:"orderConfirm-right-payRoutes-item-payIcon",icon:e.icon},null,8,["icon"]),u("div",$t,[u("b",null,S(e.label),1),u("p",null,S(e.description),1)]),u("div",{class:["orderConfirm-right-payRoutes-item-radio",[t.currentPayRoute.payRoute===e.payRoute&&"active"]]},[u(p,{icon:"tick"})],2)],8,["onClick"])))),128))]),u(m,{loading:t.submitLoading,class:"orderConfirm-right-payButton",onClick:t.handleBuyClick,"customer-class":"dangerButton",type:"primary",block:""},{default:st((()=>[Lt])),_:1},8,["loading","onClick"])])),_:1},8,["loading"])])),_:1})])])])}));lt.render=Vt,lt.__scopeId="data-v-69ae923d";export default lt;