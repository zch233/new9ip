import{d as e,_ as t,u as s,D as r,F as u,G as a,H as o,J as c,b as l,Q as n,O as d,M as y,K as m,N as p}from"./index.bbe6afb2.js";import{_ as f}from"./UIButton.0224ce21.js";import"./vendor.5c0531cb.js";var i=e({name:"Result",components:{Icon:t,UIButton:f},setup:()=>({routeQuery:s().query})});const _=p("data-v-6bc7c838");r("data-v-6bc7c838");const b={class:"result"},Q={key:0},v=l("label",null,"订单号：",-1),I={key:1},k=l("label",null,"交易流水号：",-1),B=d("会员主页"),N=d("返回首页"),j=d("我的订单"),x=d("继续购买");u();const U=_(((e,t,s,r,u,p)=>{const f=a("Icon"),i=a("UIButton"),U=a("RouterLink");return o(),c("div",b,[l(f,{class:"0"===e.routeQuery.status?"error":"success",icon:"0"===e.routeQuery.status?"error":"success"},null,8,["class","icon"]),l("h2",null,"订单支付"+n("0"===e.routeQuery.status?"失败":"成功")+"！",1),e.routeQuery.orderNo?(o(),c("p",Q,[v,d(n(e.routeQuery.orderNo),1)])):y("",!0),e.routeQuery.tradeNo?(o(),c("p",I,[k,d(n(e.routeQuery.tradeNo),1)])):y("",!0),l("div",null,["VIP"===e.routeQuery.type?(o(),c(m,{key:0},[l(U,{to:"/user/index"},{default:_((()=>[l(i,{"customer-class":"mainButton",type:"primary"},{default:_((()=>[B])),_:1})])),_:1}),l(U,{to:"/"},{default:_((()=>[l(i,{"customer-class":"default"},{default:_((()=>[N])),_:1})])),_:1})],64)):(o(),c(m,{key:1},[l(U,{to:"/user/order"},{default:_((()=>[l(i,{"customer-class":"mainButton",type:"primary"},{default:_((()=>[j])),_:1})])),_:1}),l(U,{to:"/patent"},{default:_((()=>[l(i,{"customer-class":"default"},{default:_((()=>[x])),_:1})])),_:1})],64))])])}));i.render=U,i.__scopeId="data-v-6bc7c838";export default i;
