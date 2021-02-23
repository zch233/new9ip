import{w as t,d as e,a5 as a,P as n,t as o,i as r,a as i,e as l,bl as c,b as s,a4 as d,a1 as u,W as f,G as p,H as m,J as v,R as g,Q as b,_ as C,u as y,q as h,b5 as T,r as A,y as P,aG as I,aj as _,ak as x,D as k,F as j,N,M as R,K as S,L as U}from"./index.2d7601a5.js";import{_ as B}from"./index.ab09d011.js";import{_ as E}from"./index.25089112.js";import{T as O}from"./index.ef1aa118.js";import{a as w,A as $}from"./Col.e26c4c05.js";import{I as L}from"./index.36d0a077.js";import{_ as V}from"./UIButton.e4b8e703.js";import{_ as G}from"./UISkeleton.fcb6fa00.js";import{_ as Y}from"./index.9db1e072.js";import{g as K,o as D}from"./orderConfirm.cfb85724.js";import{s as M}from"./index.0b62bbca.js";import"./vendor.5c0531cb.js";import"./debounce.186c27a2.js";import"./isSymbol.a66ee7bc.js";import"./toNumber.dbb5be89.js";import"./CheckOutlined.46adef77.js";import"./LeftOutlined.e7e94a75.js";import"./SearchOutlined.1bda7904.js";import"./UIModal.fb2d0d86.js";var W=t(w),z=t($);function q(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function F(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!l(t)}var X=O.TabPane,H=e({name:"ACard",mixins:[a],props:{prefixCls:n.string,title:n.VNodeChild,extra:n.VNodeChild,bordered:n.looseBool.def(!0),bodyStyle:n.style,headStyle:n.style,loading:n.looseBool.def(!1),hoverable:n.looseBool.def(!1),type:n.string,size:n.oneOf(o("default","small")),actions:n.VNodeChild,tabList:{type:Array},tabBarExtraContent:n.VNodeChild,activeTabKey:n.string,defaultActiveTabKey:n.string,cover:n.VNodeChild,onTabChange:{type:Function}},setup:function(){return{configProvider:r("configProvider",i)}},data:function(){return{widerPadding:!1}},methods:{getAction:function(t){return t.map((function(e,a){return l(e)&&!c(e)||!l(e)?s("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(a)},[s("span",null,F(e)?e:{default:function(){return[e]}})]):null}))},triggerTabChange:function(t){this.$emit("tabChange",t)},isContainGrid:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.forEach((function(e){e&&d(e.type)&&e.type.__ANT_CARD_GRID&&(t=!0)})),t}},render:function(){var t,e,a,n,o,r,i,l,c,d,p,m,v,g,b,C=this.$props,y=C.prefixCls,h=C.headStyle,T=void 0===h?{}:h,A=C.bodyStyle,P=void 0===A?{}:A,I=C.loading,_=C.bordered,x=void 0===_||_,k=C.size,j=void 0===k?"default":k,N=C.type,R=C.tabList,S=C.hoverable,U=C.activeTabKey,B=C.defaultActiveTabKey,E=this.$slots,w=u(this),$=(0,this.configProvider.getPrefixCls)("card",y),L=f(this,"tabBarExtraContent"),V=(q(v={},"".concat($),!0),q(v,"".concat($,"-loading"),I),q(v,"".concat($,"-bordered"),x),q(v,"".concat($,"-hoverable"),!!S),q(v,"".concat($,"-contain-grid"),this.isContainGrid(w)),q(v,"".concat($,"-contain-tabs"),R&&R.length),q(v,"".concat($,"-").concat(j),"default"!==j),q(v,"".concat($,"-type-").concat(N),!!N),v),G=0===P.padding||"0px"===P.padding?{padding:24}:void 0,Y=s("div",{class:"".concat($,"-loading-content"),style:G},[s(W,{gutter:8},F(e=s(z,{span:22},F(t=s("div",{class:"".concat($,"-loading-block")},null))?t:{default:function(){return[t]}}))?e:{default:function(){return[e]}}),s(W,{gutter:8},{default:function(){return[s(z,{span:8},F(a=s("div",{class:"".concat($,"-loading-block")},null))?a:{default:function(){return[a]}}),s(z,{span:15},F(n=s("div",{class:"".concat($,"-loading-block")},null))?n:{default:function(){return[n]}})]}}),s(W,{gutter:8},{default:function(){return[s(z,{span:6},F(o=s("div",{class:"".concat($,"-loading-block")},null))?o:{default:function(){return[o]}}),s(z,{span:18},F(r=s("div",{class:"".concat($,"-loading-block")},null))?r:{default:function(){return[r]}})]}}),s(W,{gutter:8},{default:function(){return[s(z,{span:13},F(i=s("div",{class:"".concat($,"-loading-block")},null))?i:{default:function(){return[i]}}),s(z,{span:9},F(l=s("div",{class:"".concat($,"-loading-block")},null))?l:{default:function(){return[l]}})]}}),s(W,{gutter:8},{default:function(){return[s(z,{span:4},F(c=s("div",{class:"".concat($,"-loading-block")},null))?c:{default:function(){return[c]}}),s(z,{span:3},F(d=s("div",{class:"".concat($,"-loading-block")},null))?d:{default:function(){return[d]}}),s(z,{span:16},F(p=s("div",{class:"".concat($,"-loading-block")},null))?p:{default:function(){return[p]}})]}})]),K=void 0!==U,D=(q(g={size:"large"},K?"activeKey":"defaultActiveKey",K?U:B),q(g,"tabBarExtraContent",L),q(g,"onChange",this.triggerTabChange),q(g,"class","".concat($,"-head-tabs")),g),M=R&&R.length?s(O,D,F(m=R.map((function(t){var e=t.tab,a=t.slots,n=null==a?void 0:a.tab,o=void 0!==e?e:E[n]?E[n](t):null;return s(X,{tab:o,key:t.key,disabled:t.disabled},null)})))?m:{default:function(){return[m]}}):null,H=f(this,"title"),J=f(this,"extra");(H||J||M)&&(b=s("div",{class:"".concat($,"-head"),style:T},[s("div",{class:"".concat($,"-head-wrapper")},[H&&s("div",{class:"".concat($,"-head-title")},F(H)?H:{default:function(){return[H]}}),J&&s("div",{class:"".concat($,"-extra")},F(J)?J:{default:function(){return[J]}})]),M]));var Q=f(this,"cover"),Z=Q?s("div",{class:"".concat($,"-cover")},F(Q)?Q:{default:function(){return[Q]}}):null,tt=s("div",{class:"".concat($,"-body"),style:P},[I?Y:w]),et=f(this,"actions"),at=et&&et.length?s("ul",{class:"".concat($,"-actions")},[this.getAction(et)]):null;return s("div",{class:V,ref:"cardContainerRef"},[b,Z,w?tt:null,at])}});function J(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!l(t)}var Q=e({name:"ACardMeta",props:{prefixCls:n.string,title:n.VNodeChild,description:n.VNodeChild,avatar:n.VNodeChild},setup:function(){return{configProvider:r("configProvider",i)}},render:function(){var t,e,a,n=this.$props.prefixCls,o=(0,this.configProvider.getPrefixCls)("card",n),r=(t={},e="".concat(o,"-meta"),a=!0,e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t),i=f(this,"avatar"),l=f(this,"title"),c=f(this,"description"),d=i?s("div",{class:"".concat(o,"-meta-avatar")},J(i)?i:{default:function(){return[i]}}):null,u=l?s("div",{class:"".concat(o,"-meta-title")},J(l)?l:{default:function(){return[l]}}):null,p=c?s("div",{class:"".concat(o,"-meta-description")},J(c)?c:{default:function(){return[c]}}):null,m=u||p?s("div",{class:"".concat(o,"-meta-detail")},[u,p]):null;return s("div",{class:r},[d,m])}});function Z(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var tt=e({name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:n.string,hoverable:n.looseBool},setup:function(){return{configProvider:r("configProvider",i)}},render:function(){var t,e=this.$props,a=e.prefixCls,n=e.hoverable,o=void 0===n||n,r=(0,this.configProvider.getPrefixCls)("card",a),i=(Z(t={},"".concat(r,"-grid"),!0),Z(t,"".concat(r,"-grid-hoverable"),o),t);return s("div",{class:i},[u(this)])}});H.Meta=Q,H.Grid=tt,H.install=function(t){return t.component(H.name,H),t.component(Q.name,Q),t.component(tt.name,tt),t};var et=e({name:"UICard",components:{AntCard:H}});const at=b("data-v-75f60f82"),nt=at(((t,e,a,n,o,r)=>{const i=p("AntCard");return m(),v(i,null,{default:at((()=>[g(t.$slots,"default")])),_:3})}));et.render=nt,et.__scopeId="data-v-75f60f82";var ot=e({name:"UIInputTextArea",components:{AntInputTextArea:L.TextArea}});const rt=b("data-v-5c6c1525"),it=rt(((t,e,a,n,o,r)=>{const i=p("AntInputTextArea");return m(),v(i,null,{default:rt((()=>[g(t.$slots,"default")])),_:3})}));ot.render=it,ot.__scopeId="data-v-5c6c1525";var lt=e({name:"OrderConfirm",components:{AppTitleBar:B,OrderSteps:E,UIInputTextArea:ot,UICard:et,Icon:C,UISkeleton:G,UIButton:V,PatentImage:Y},setup(){const t=y(),e=h(),a=T(t.query.commodityId),n=A(!1),o=A(!1),r=A(""),i=A(_[0]),l=A({});return P((()=>{n.value=!0,K({commodityId:a,commodityType:"PATENT"}).then((({data:t})=>{l.value=t})).catch((t=>{3200===t.code&&e.push("/order/pay/result?status=0&type=PATENT")})).finally((()=>n.value=!1))})),{PATENT_TYPE:I,PAY_ROUTES:_,remark:r,pageLoading:n,submitLoading:o,currentPayRoute:i,handleBuyClick:()=>{return t=this,n=null,l=function*(){const{payRoute:t,tradeType:n}=i.value;o.value=!0;const{data:l}=yield D({commodityId:a,commodityType:"PATENT",payRoute:t,tradeType:n,remark:r.value}).finally((()=>o.value=!1)),{orderNo:c,tradeNo:s}=l,d=`/order/pay/${"UMS_PAY"===t?"code":"WXPAY"===t?"wechat":"form"}?orderNo=${c}&tradeNo=${s}&type=PATENT&payRoute=${t}&tradeType=${n}`;"UMS_PAY"===t||"WXPAY"===t?yield e.push(d):(M({tradeNo:s,orderNo:c,type:"PATENT",getContainer:"orderConfirm"}),x(d))},new Promise(((e,a)=>{var o=t=>{try{i(l.next(t))}catch(e){a(e)}},r=t=>{try{i(l.throw(t))}catch(e){a(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,r);i((l=l.apply(t,n)).next())}));var t,n,l},orderConfirmation:l}}});const ct=b("data-v-abe1cd62");k("data-v-abe1cd62");const st={id:"orderConfirm",class:"orderConfirm"},dt={class:"pageWidthWithCenter orderConfirmWrapper"},ut={class:"orderConfirm-left"},ft={class:"orderConfirm-left-patent"},pt={class:"patentContent"},mt={class:"patentContent-image"},vt={class:"patentContent-info"},gt={class:"patentContent-info-title"},bt={class:"patentContent-info-col"},Ct=s("label",null,"专利类型",-1),yt=s("label",null,"发明人",-1),ht={class:"patentContent-info-col"},Tt=s("label",null,"专利号",-1),At=s("label",null,"标签",-1),Pt={class:"patentContent-info-col"},It=s("label",null,"法律状态",-1),_t=s("label",null,"价格",-1),xt={class:"patentContent-info-col"},kt=s("label",null,"缴费截止",-1),jt=s("span",null,[s("label",null,"数量"),R("1")],-1),Nt={class:"orderConfirm-left-remark"},Rt={class:"orderConfirm-right"},St={class:"orderConfirm-right-priceItem"},Ut=s("label",null,"原价",-1),Bt=s("label",null,"VIP会员",-1),Et={class:"orderConfirm-right-priceItem totalAmount"},Ot=s("label",null,"实付款",-1),wt={class:"orderConfirm-right-payRoutes"},$t={class:"orderConfirm-right-payRoutes-item-info"},Lt=R("确认付款");j();const Vt=ct(((t,e,a,n,o,r)=>{const i=p("OrderSteps"),l=p("AppTitleBar"),c=p("PatentImage"),d=p("UISkeleton"),u=p("UICard"),f=p("UIInputTextArea"),g=p("Icon"),b=p("UIButton");return m(),v("div",st,[s(l,{title:"确认订单"},{default:ct((()=>[s(i)])),_:1}),s("div",dt,[s("section",ut,[s("div",ft,[s(u,{title:"商品信息"},{default:ct((()=>[s(d,{active:"",paragraph:{rows:5},loading:t.pageLoading},{default:ct((()=>[s("div",pt,[s("div",mt,[s(c,{cover:t.orderConfirmation.categoryCover},null,8,["cover"])]),s("div",vt,[s("h2",gt,N(t.orderConfirmation.name),1),s("p",bt,[s("span",null,[Ct,R(N(t.orderConfirmation.number),1)]),s("span",null,[yt,R(N(t.orderConfirmation.inventorExplain),1)])]),s("p",ht,[s("span",null,[Tt,R(N(t.PATENT_TYPE.label[t.orderConfirmation.type]),1)]),s("span",null,[At,R(N(t.orderConfirmation.tags),1)])]),s("p",Pt,[s("span",null,[It,R(N(t.orderConfirmation.legalStatus),1)]),s("span",null,[_t,R("￥"+N(t.orderConfirmation.price),1)])]),s("p",xt,[s("span",null,[kt,R(N(t.orderConfirmation.paymentDeadline||"暂无"),1)]),jt])])])])),_:1},8,["loading"])])),_:1})]),s("div",Nt,[s(u,{title:"订单备注"},{default:ct((()=>[s(d,{active:"",paragraph:{rows:3},loading:t.pageLoading},{default:ct((()=>[s(f,{value:t.remark,"onUpdate:value":e[1]||(e[1]=e=>t.remark=e),"html-type":"textarea",placeholder:"请输入订单备注（选填）",rows:6},null,8,["value"])])),_:1},8,["loading"])])),_:1})])]),s("section",Rt,[s(u,{title:"订单金额"},{default:ct((()=>[s(d,{active:"",paragraph:{rows:13},loading:t.pageLoading},{default:ct((()=>[s("p",St,[Ut,s("span",null,"￥"+N(t.orderConfirmation.price),1)]),(m(!0),v(S,null,U(t.orderConfirmation.discounts||[],(t=>(m(),v("p",{class:"orderConfirm-right-priceItem",key:t.price},[Bt,s("span",null,"-￥"+N(t.price),1)])))),128)),s("p",Et,[Ot,s("b",null,"￥"+N(t.orderConfirmation.totalAmount),1)]),s("ul",wt,[(m(!0),v(S,null,U(t.PAY_ROUTES,(e=>(m(),v("li",{key:e.icon,onClick:a=>t.currentPayRoute=e,class:"orderConfirm-right-payRoutes-item"},[s(g,{class:"orderConfirm-right-payRoutes-item-payIcon",icon:e.icon},null,8,["icon"]),s("div",$t,[s("b",null,N(e.label),1),s("p",null,N(e.description),1)]),s("div",{class:["orderConfirm-right-payRoutes-item-radio",[t.currentPayRoute.payRoute===e.payRoute&&"active"]]},[s(g,{icon:"tick"})],2)],8,["onClick"])))),128))]),s(b,{loading:t.submitLoading,class:"orderConfirm-right-payButton",onClick:t.handleBuyClick,"customer-class":"dangerButton",type:"primary",block:""},{default:ct((()=>[Lt])),_:1},8,["loading","onClick"])])),_:1},8,["loading"])])),_:1})])])])}));lt.render=Vt,lt.__scopeId="data-v-abe1cd62";export default lt;
