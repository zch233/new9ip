import{d as e,_ as t,u as s,p as r,f as u,h as a,i as o,j as l,k as c,t as n,m as d,n as y,F as i,q as f}from"./index.2b4c3c62.js";import{_ as m}from"./UIButton.6c205888.js";import"./vendor.5c0531cb.js";var p=e({name:"Result",components:{Icon:t,UIButton:m},setup:()=>({routeQuery:s().query})});const _=f("data-v-3238c128");r("data-v-3238c128");const v={class:"result"},Q={key:0},I=c("label",null,"订单号：",-1),k={key:1},B=c("label",null,"交易流水号：",-1),b=d("会员主页"),j=d("返回首页"),N=d("我的订单"),x=d("继续购买");u();const U=_(((e,t,s,r,u,f)=>{const m=a("Icon"),p=a("UIButton"),U=a("RouterLink");return o(),l("div",v,[c(m,{class:"0"===e.routeQuery.status?"error":"success",icon:"0"===e.routeQuery.status?"error":"success"},null,8,["class","icon"]),c("h2",null,"订单支付"+n("0"===e.routeQuery.status?"失败":"成功")+"！",1),e.routeQuery.orderNo?(o(),l("p",Q,[I,d(n(e.routeQuery.orderNo),1)])):y("v-if",!0),e.routeQuery.tradeNo?(o(),l("p",k,[B,d(n(e.routeQuery.tradeNo),1)])):y("v-if",!0),c("div",null,["VIP"===e.routeQuery.type?(o(),l(i,{key:0},[c(U,{to:"/user/index"},{default:_((()=>[c(p,{"customer-class":"mainButton",type:"primary"},{default:_((()=>[b])),_:1})])),_:1}),c(U,{to:"/"},{default:_((()=>[c(p,{"customer-class":"default"},{default:_((()=>[j])),_:1})])),_:1})],64)):(o(),l(i,{key:1},[c(U,{to:"/user/order"},{default:_((()=>[c(p,{"customer-class":"mainButton",type:"primary"},{default:_((()=>[N])),_:1})])),_:1}),c(U,{to:"/patent"},{default:_((()=>[c(p,{"customer-class":"default"},{default:_((()=>[x])),_:1})])),_:1})],64))])])}));p.render=U,p.__scopeId="data-v-3238c128";export default p;