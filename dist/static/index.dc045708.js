import{_ as t}from"./index.7c7d5c99.js";import{_ as e}from"./index.620a2805.js";import{aX as n,d as a,S as o,P as r,z as i,G as l,M as c,E as s,bg as d,k as u,R as f,N as p,B as m,h as v,i as g,j as b,y as C,n as y,_ as h,u as T,a as A,a$ as P,r as _,o as I,ay as x,a5 as k,az as j,a6 as N,p as R,f as S,t as E,q as U,F as B,l as O}from"./index.2fd7dcd5.js";import{T as w}from"./index.7865abcb.js";import{a as $,A as L}from"./Col.dd0544b7.js";import{I as V}from"./index.2dabfd9c.js";import{_ as Y}from"./UIButton.7c2b0188.js";import{_ as G}from"./UISkeleton.55f3bb32.js";import{_ as K}from"./index.d75f557f.js";import{g as M,o as z}from"./orderConfirm.17f4acc1.js";import{s as D}from"./index.f0990662.js";import"./debounce.4b24ad11.js";import"./isSymbol.8cc5df83.js";import"./toNumber.72972096.js";import"./CheckOutlined.5782a841.js";import"./vendor.5c0531cb.js";import"./LeftOutlined.9871930f.js";import"./SearchOutlined.8dc03704.js";import"./UIModal.7853ad9a.js";var W=n($),X=n(L);function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!s(t)}var H=w.TabPane,J=a({name:"ACard",mixins:[o],props:{prefixCls:r.string,title:r.VNodeChild,extra:r.VNodeChild,bordered:r.looseBool.def(!0),bodyStyle:r.style,headStyle:r.style,loading:r.looseBool.def(!1),hoverable:r.looseBool.def(!1),type:r.string,size:r.oneOf(i("default","small")),actions:r.VNodeChild,tabList:{type:Array},tabBarExtraContent:r.VNodeChild,activeTabKey:r.string,defaultActiveTabKey:r.string,cover:r.VNodeChild,onTabChange:{type:Function}},setup:function(){return{configProvider:l("configProvider",c)}},data:function(){return{widerPadding:!1}},methods:{getAction:function(t){return t.map((function(e,n){return s(e)&&!d(e)||!s(e)?u("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(n)},[u("span",null,F(e)?e:{default:function(){return[e]}})]):null}))},triggerTabChange:function(t){this.$emit("tabChange",t)},isContainGrid:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.forEach((function(e){e&&f(e.type)&&e.type.__ANT_CARD_GRID&&(t=!0)})),t}},render:function(){var t,e,n,a,o,r,i,l,c,s,d,f,v,g,b,C=this.$props,y=C.prefixCls,h=C.headStyle,T=void 0===h?{}:h,A=C.bodyStyle,P=void 0===A?{}:A,_=C.loading,I=C.bordered,x=void 0===I||I,k=C.size,j=void 0===k?"default":k,N=C.type,R=C.tabList,S=C.hoverable,E=C.activeTabKey,U=C.defaultActiveTabKey,B=this.$slots,O=p(this),$=(0,this.configProvider.getPrefixCls)("card",y),L=m(this,"tabBarExtraContent"),V=(q(v={},"".concat($),!0),q(v,"".concat($,"-loading"),_),q(v,"".concat($,"-bordered"),x),q(v,"".concat($,"-hoverable"),!!S),q(v,"".concat($,"-contain-grid"),this.isContainGrid(O)),q(v,"".concat($,"-contain-tabs"),R&&R.length),q(v,"".concat($,"-").concat(j),"default"!==j),q(v,"".concat($,"-type-").concat(N),!!N),v),Y=0===P.padding||"0px"===P.padding?{padding:24}:void 0,G=u("div",{class:"".concat($,"-loading-content"),style:Y},[u(W,{gutter:8},F(e=u(X,{span:22},F(t=u("div",{class:"".concat($,"-loading-block")},null))?t:{default:function(){return[t]}}))?e:{default:function(){return[e]}}),u(W,{gutter:8},{default:function(){return[u(X,{span:8},F(n=u("div",{class:"".concat($,"-loading-block")},null))?n:{default:function(){return[n]}}),u(X,{span:15},F(a=u("div",{class:"".concat($,"-loading-block")},null))?a:{default:function(){return[a]}})]}}),u(W,{gutter:8},{default:function(){return[u(X,{span:6},F(o=u("div",{class:"".concat($,"-loading-block")},null))?o:{default:function(){return[o]}}),u(X,{span:18},F(r=u("div",{class:"".concat($,"-loading-block")},null))?r:{default:function(){return[r]}})]}}),u(W,{gutter:8},{default:function(){return[u(X,{span:13},F(i=u("div",{class:"".concat($,"-loading-block")},null))?i:{default:function(){return[i]}}),u(X,{span:9},F(l=u("div",{class:"".concat($,"-loading-block")},null))?l:{default:function(){return[l]}})]}}),u(W,{gutter:8},{default:function(){return[u(X,{span:4},F(c=u("div",{class:"".concat($,"-loading-block")},null))?c:{default:function(){return[c]}}),u(X,{span:3},F(s=u("div",{class:"".concat($,"-loading-block")},null))?s:{default:function(){return[s]}}),u(X,{span:16},F(d=u("div",{class:"".concat($,"-loading-block")},null))?d:{default:function(){return[d]}})]}})]),K=void 0!==E,M=(q(g={size:"large"},K?"activeKey":"defaultActiveKey",K?E:U),q(g,"tabBarExtraContent",L),q(g,"onChange",this.triggerTabChange),q(g,"class","".concat($,"-head-tabs")),g),z=R&&R.length?u(w,M,F(f=R.map((function(t){var e=t.tab,n=t.slots,a=null==n?void 0:n.tab,o=void 0!==e?e:B[a]?B[a](t):null;return u(H,{tab:o,key:t.key,disabled:t.disabled},null)})))?f:{default:function(){return[f]}}):null,D=m(this,"title"),J=m(this,"extra");(D||J||z)&&(b=u("div",{class:"".concat($,"-head"),style:T},[u("div",{class:"".concat($,"-head-wrapper")},[D&&u("div",{class:"".concat($,"-head-title")},F(D)?D:{default:function(){return[D]}}),J&&u("div",{class:"".concat($,"-extra")},F(J)?J:{default:function(){return[J]}})]),z]));var Q=m(this,"cover"),Z=Q?u("div",{class:"".concat($,"-cover")},F(Q)?Q:{default:function(){return[Q]}}):null,tt=u("div",{class:"".concat($,"-body"),style:P},[_?G:O]),et=m(this,"actions"),nt=et&&et.length?u("ul",{class:"".concat($,"-actions")},[this.getAction(et)]):null;return u("div",{class:V,ref:"cardContainerRef"},[b,Z,O?tt:null,nt])}});function Q(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!s(t)}var Z=a({name:"ACardMeta",props:{prefixCls:r.string,title:r.VNodeChild,description:r.VNodeChild,avatar:r.VNodeChild},setup:function(){return{configProvider:l("configProvider",c)}},render:function(){var t,e,n,a=this.$props.prefixCls,o=(0,this.configProvider.getPrefixCls)("card",a),r=(t={},e="".concat(o,"-meta"),n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t),i=m(this,"avatar"),l=m(this,"title"),c=m(this,"description"),s=i?u("div",{class:"".concat(o,"-meta-avatar")},Q(i)?i:{default:function(){return[i]}}):null,d=l?u("div",{class:"".concat(o,"-meta-title")},Q(l)?l:{default:function(){return[l]}}):null,f=c?u("div",{class:"".concat(o,"-meta-description")},Q(c)?c:{default:function(){return[c]}}):null,p=d||f?u("div",{class:"".concat(o,"-meta-detail")},[d,f]):null;return u("div",{class:r},[s,p])}});function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et=a({name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:r.string,hoverable:r.looseBool},setup:function(){return{configProvider:l("configProvider",c)}},render:function(){var t,e=this.$props,n=e.prefixCls,a=e.hoverable,o=void 0===a||a,r=(0,this.configProvider.getPrefixCls)("card",n),i=(tt(t={},"".concat(r,"-grid"),!0),tt(t,"".concat(r,"-grid-hoverable"),o),t);return u("div",{class:i},[p(this)])}});J.Meta=Z,J.Grid=et,J.install=function(t){return t.component(J.name,J),t.component(Z.name,Z),t.component(et.name,et),t};var nt=a({name:"UICard",components:{AntCard:J}});const at=y("data-v-06781f4f"),ot=at(((t,e,n,a,o,r)=>{const i=v("AntCard");return g(),b(i,null,{default:at((()=>[C(t.$slots,"default")])),_:3})}));nt.render=ot,nt.__scopeId="data-v-06781f4f";var rt=a({name:"UIInputTextArea",components:{AntInputTextArea:V.TextArea}});const it=y("data-v-7267e24a"),lt=it(((t,e,n,a,o,r)=>{const i=v("AntInputTextArea");return g(),b(i,null,{default:it((()=>[C(t.$slots,"default")])),_:3})}));rt.render=lt,rt.__scopeId="data-v-7267e24a";var ct=a({name:"OrderConfirm",components:{AppTitleBar:t,OrderSteps:e,UIInputTextArea:rt,UICard:nt,Icon:h,UISkeleton:G,UIButton:Y,PatentImage:K},setup(){const t=T(),e=A(),n=P(t.query.commodityId),a=_(!1),o=_(!1),r=_(""),i=_(k[0]),l=_({});return I((()=>{a.value=!0,M({commodityId:n,commodityType:"PATENT"}).then((({data:t})=>{l.value=t})).catch((t=>{3200===t.code&&e.push("/order/pay/result?status=0&type=PATENT")})).finally((()=>a.value=!1))})),{PATENT_TYPE:x,PAY_ROUTES:k,PATENT_CERT_STATUS:j,remark:r,pageLoading:a,submitLoading:o,currentPayRoute:i,handleBuyClick:()=>{return t=this,a=null,l=function*(){const{payRoute:t,tradeType:a}=i.value;o.value=!0;const{data:l}=yield z({commodityId:n,commodityType:"PATENT",payRoute:t,tradeType:a,remark:r.value}).finally((()=>o.value=!1)),{orderNo:c,tradeNo:s}=l,d=`/order/pay/${"UMS_PAY"===t?"code":"WXPAY"===t?"wechat":"form"}?orderNo=${c}&tradeNo=${s}&type=PATENT&payRoute=${t}&tradeType=${a}`;"UMS_PAY"===t||"WXPAY"===t?yield e.push(d):(D({tradeNo:s,orderNo:c,type:"PATENT",getContainer:"orderConfirm"}),N(d))},new Promise(((e,n)=>{var o=t=>{try{i(l.next(t))}catch(e){n(e)}},r=t=>{try{i(l.throw(t))}catch(e){n(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,r);i((l=l.apply(t,a)).next())}));var t,a,l},orderConfirmation:l}}});const st=y("data-v-449e3772");R("data-v-449e3772");const dt={id:"orderConfirm",class:"orderConfirm"},ut={class:"pageWidthWithCenter orderConfirmWrapper"},ft={class:"orderConfirm-left"},pt={class:"orderConfirm-left-patent"},mt={class:"patentContent"},vt={class:"patentContent-image"},gt={class:"patentContent-info"},bt={class:"patentContent-info-title"},Ct={class:"patentContent-info-col"},yt=u("label",null,"专利类型",-1),ht=u("label",null,"发明人",-1),Tt={class:"patentContent-info-col"},At=u("label",null,"专利号",-1),Pt=u("label",null,"标签",-1),_t={class:"patentContent-info-col"},It=u("label",null,"法律状态",-1),xt=u("label",null,"价格",-1),kt={class:"patentContent-info-col"},jt=u("label",null,"缴费截止",-1),Nt=u("span",null,[u("label",null,"数量"),U("1")],-1),Rt={class:"orderConfirm-left-remark"},St={class:"orderConfirm-right"},Et={class:"orderConfirm-right-priceItem"},Ut=u("label",null,"原价",-1),Bt=u("label",null,"VIP会员",-1),Ot={class:"orderConfirm-right-priceItem totalAmount"},wt=u("label",null,"实付款",-1),$t={class:"orderConfirm-right-payRoutes"},Lt={class:"orderConfirm-right-payRoutes-item-info"},Vt=U("确认付款");S();const Yt=st(((t,e,n,a,o,r)=>{const i=v("OrderSteps"),l=v("AppTitleBar"),c=v("PatentImage"),s=v("UISkeleton"),d=v("UICard"),f=v("UIInputTextArea"),p=v("Icon"),m=v("UIButton");return g(),b("div",dt,[u(l,{title:"确认预购订单"},{default:st((()=>[u(i)])),_:1}),u("div",ut,[u("section",ft,[u("div",pt,[u(d,{title:"商品信息"},{default:st((()=>[u(s,{active:"",paragraph:{rows:5},loading:t.pageLoading},{default:st((()=>[u("div",mt,[u("div",vt,[u(c,{cover:t.orderConfirmation.categoryCover},null,8,["cover"])]),u("div",gt,[u("h2",bt,E(t.orderConfirmation.name),1),u("p",Ct,[u("span",null,[yt,U(E(t.orderConfirmation.number),1)]),u("span",null,[ht,U(E(t.orderConfirmation.inventorExplain),1)])]),u("p",Tt,[u("span",null,[At,U(E(t.PATENT_TYPE.label[t.orderConfirmation.type]),1)]),u("span",null,[Pt,U(E(t.orderConfirmation.tags),1)])]),u("p",_t,[u("span",null,[It,U(E(t.PATENT_CERT_STATUS.label[t.orderConfirmation.certStatus]),1)]),u("span",null,[xt,U("￥"+E(t.orderConfirmation.price),1)])]),u("p",kt,[u("span",null,[jt,U(E(t.orderConfirmation.paymentDeadline||"暂无"),1)]),Nt])])])])),_:1},8,["loading"])])),_:1})]),u("div",Rt,[u(d,{title:"预购订单备注"},{default:st((()=>[u(s,{active:"",paragraph:{rows:3},loading:t.pageLoading},{default:st((()=>[u(f,{value:t.remark,"onUpdate:value":e[1]||(e[1]=e=>t.remark=e),"html-type":"textarea",placeholder:"请输入预购订单备注（选填）",rows:6},null,8,["value"])])),_:1},8,["loading"])])),_:1})])]),u("section",St,[u(d,{title:"预购订单金额"},{default:st((()=>[u(s,{active:"",paragraph:{rows:13},loading:t.pageLoading},{default:st((()=>[u("p",Et,[Ut,u("span",null,"￥"+E(t.orderConfirmation.price),1)]),(g(!0),b(B,null,O(t.orderConfirmation.discounts||[],(t=>(g(),b("p",{class:"orderConfirm-right-priceItem",key:t.price},[Bt,u("span",null,"-￥"+E(t.price),1)])))),128)),u("p",Ot,[wt,u("b",null,"￥"+E(t.orderConfirmation.totalAmount),1)]),u("ul",$t,[(g(!0),b(B,null,O(t.PAY_ROUTES,(e=>(g(),b("li",{key:e.icon,onClick:n=>t.currentPayRoute=e,class:"orderConfirm-right-payRoutes-item"},[u(p,{class:"orderConfirm-right-payRoutes-item-payIcon",icon:e.icon},null,8,["icon"]),u("div",Lt,[u("b",null,E(e.label),1),u("p",null,E(e.description),1)]),u("div",{class:["orderConfirm-right-payRoutes-item-radio",[t.currentPayRoute.payRoute===e.payRoute&&"active"]]},[u(p,{icon:"tick"})],2)],8,["onClick"])))),128))]),u(m,{loading:t.submitLoading,class:"orderConfirm-right-payButton",onClick:t.handleBuyClick,"customer-class":"dangerButton",type:"primary",block:""},{default:st((()=>[Vt])),_:1},8,["loading","onClick"])])),_:1},8,["loading"])])),_:1})])])])}));ct.render=Yt,ct.__scopeId="data-v-449e3772";export default ct;