import{d as e,_ as t,x as s,o as a,p as u,f as r,h as o,i as l,j as n,k as d,t as c,q as f,m as y,F as p,n as i}from"./index.8ac37e48.js";import{_ as m}from"./UIButton.41061aff.js";import"./vendor.5c0531cb.js";var _=e({name:"Result",components:{Icon:t,UIButton:m},setup(){const e=s();return a((()=>{e.dispatch("setUserPoints")})),{}}});const q=i("data-v-ed8fff0e");u("data-v-ed8fff0e");const $={class:"result"},I={key:0},k=d("label",null,"订单号：",-1),v={key:1},B=d("label",null,"交易流水号：",-1),x=f("会员主页"),j=f("返回首页"),N=f("会员主页"),U=f("去挑专利"),b=f("我的订单"),h=f("继续购买");r();const R=q(((e,t,s,a,u,r)=>{const i=o("Icon"),m=o("UIButton"),_=o("RouterLink");return l(),n("div",$,[d(i,{class:"0"===e.$route.query.status?"error":"success",icon:"0"===e.$route.query.status?"error":"success"},null,8,["class","icon"]),d("h2",null,"订单支付"+c("0"===e.$route.query.status?"失败":"成功")+"！",1),e.$route.query.orderNo?(l(),n("p",I,[k,f(c(e.$route.query.orderNo),1)])):y("",!0),e.$route.query.tradeNo?(l(),n("p",v,[B,f(c(e.$route.query.tradeNo),1)])):y("",!0),d("div",null,["VIP"===e.$route.query.type?(l(),n(p,{key:0},[d(_,{to:"/user/index"},{default:q((()=>[d(m,{"customer-class":"mainButton",type:"primary"},{default:q((()=>[x])),_:1})])),_:1}),d(_,{to:"/"},{default:q((()=>[d(m,{"customer-class":"default"},{default:q((()=>[j])),_:1})])),_:1})],64)):"CREDIT"===e.$route.query.type?(l(),n(p,{key:1},[d(_,{to:"/user/index"},{default:q((()=>[d(m,{"customer-class":"mainButton",type:"primary"},{default:q((()=>[N])),_:1})])),_:1}),d(_,{to:"/patent"},{default:q((()=>[d(m,{"customer-class":"default"},{default:q((()=>[U])),_:1})])),_:1})],64)):(l(),n(p,{key:2},[d(_,{to:"/user/order"},{default:q((()=>[d(m,{"customer-class":"mainButton",type:"primary"},{default:q((()=>[b])),_:1})])),_:1}),d(_,{to:"/patent"},{default:q((()=>[d(m,{"customer-class":"default"},{default:q((()=>[h])),_:1})])),_:1})],64))])])}));_.render=R,_.__scopeId="data-v-ed8fff0e";export default _;
