let t=document.createElement("style");t.innerHTML=".result[data-v-4fc35f80]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;min-height:-webkit-calc(((100vh - 40px) - 300px) - 40px);min-height:calc(((100vh - 40px) - 300px) - 40px)}.result svg[data-v-4fc35f80]{font-size:50px;margin-bottom:10px}.result svg.success[data-v-4fc35f80]{color:#52c419}.result svg.error[data-v-4fc35f80]{color:#ff5858}.result h2[data-v-4fc35f80]{font-size:18px;font-weight:700}.result p[data-v-4fc35f80]{text-align:left;font-size:12px;color:#999}.result label[data-v-4fc35f80]{display:inline-block;width:7em;text-align:right}.result .mainButton[data-v-4fc35f80]{margin-right:1em}",document.head.appendChild(t);import{d as e,s as a,u as r,p as s,f as o,g as l,h as u,i as n,j as c,t as i,n as d,l as f,F as p,m}from"./index.c6205360.js";import"./raf.8a2adf49.js";import"./wave.ead9a13d.js";import"./index.7b25accd.js";import{s as y}from"./UIButton.9f4311b3.js";var x=e({name:"Result",components:{Icon:a,UIButton:y},setup:()=>({routeQuery:r().query})});const b=m("data-v-4fc35f80");s("data-v-4fc35f80");const v={class:"result"},k={key:0},g=c("label",null,"订单号：",-1),h={key:1},w=c("label",null,"交易流水号：",-1),_=d("会员主页"),Q=d("返回首页"),j=d("我的订单"),I=d("继续购买");o();const B=b(((t,e,a,r,s,o)=>{const m=l("Icon"),y=l("UIButton"),x=l("RouterLink");return u(),n("div",v,[c(m,{class:"0"===t.routeQuery.status?"error":"success",icon:"0"===t.routeQuery.status?"error":"success"},null,8,["class","icon"]),c("h2",null,"订单支付"+i("0"===t.routeQuery.status?"失败":"成功")+"！",1),t.routeQuery.orderNo?(u(),n("p",k,[g,d(i(t.routeQuery.orderNo),1)])):f("",!0),t.routeQuery.tradeNo?(u(),n("p",h,[w,d(i(t.routeQuery.tradeNo),1)])):f("",!0),c("div",null,["VIP"===t.routeQuery.type?(u(),n(p,{key:0},[c(x,{to:"/user/index"},{default:b((()=>[c(y,{"customer-class":"mainButton",type:"primary"},{default:b((()=>[_])),_:1})])),_:1}),c(x,{to:"/"},{default:b((()=>[c(y,{"customer-class":"default"},{default:b((()=>[Q])),_:1})])),_:1})],64)):(u(),n(p,{key:1},[c(x,{to:"/user/order"},{default:b((()=>[c(y,{"customer-class":"mainButton",type:"primary"},{default:b((()=>[j])),_:1})])),_:1}),c(x,{to:"/patent"},{default:b((()=>[c(y,{"customer-class":"default"},{default:b((()=>[I])),_:1})])),_:1})],64))])])}));x.render=B,x.__scopeId="data-v-4fc35f80";export default x;
