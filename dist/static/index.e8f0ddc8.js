import{d as e,_ as a,r as s,o as l,p as n,f as t,h as o,i as r,j as i,k as c,n as d,F as p,l as u,t as v,q as m,m as y}from"./index.2d412ebf.js";import{_ as f}from"./UIEmpty.e310e019.js";import{a as R}from"./vip.82d22632.js";import"./vendor.5c0531cb.js";var b=e({name:"VipRecord",components:{Icon:a,UIEmpty:f},setup(){const e=s(!1),a=s([]),n=()=>{return s=this,l=null,n=function*(){e.value=!0;const{data:s}=yield R({size:100}).finally((()=>e.value=!1));a.value=s.list||[]},new Promise(((e,a)=>{var t=e=>{try{r(n.next(e))}catch(s){a(s)}},o=e=>{try{r(n.throw(e))}catch(s){a(s)}},r=a=>a.done?e(a.value):Promise.resolve(a.value).then(t,o);r((n=n.apply(s,l)).next())}));var s,l,n};return l((()=>{n()})),{loading:e,vipRecords:a}}});const h=m("data-v-6eae66b2");n("data-v-6eae66b2");const k={class:"vipRecord"},I=y("返回"),j={key:0,class:"emptyWrapper"},x=c("div",{class:"vipRecord-title"},[c("em",null,"付款时间"),c("em",null,"订单号"),c("em",null,"类型"),c("em",null,"金额"),c("em",null,"状态")],-1),_={class:"vipRecord-list"},g=c("span",null,"已付款",-1);t();const E=h(((e,a,s,l,n,t)=>{const m=o("Icon"),y=o("RouterLink"),f=o("UIEmpty");return r(),i("div",k,[c(y,{to:"/user/index"},{default:h((()=>[c(m,{icon:"left"}),I])),_:1}),0===e.vipRecords.length?(r(),i("div",j,[e.loading?d("v-if",!0):(r(),i(f,{key:0,image:"vip",description:"暂无开通记录"}))])):(r(),i(p,{key:1},[x,c("ul",_,[(r(!0),i(p,null,u(e.vipRecords,(e=>(r(),i("li",{class:"vipRecord-list-item",key:e.orderNo},[c("span",null,v(e.paymentTime),1),c("span",null,v(e.orderNo),1),c("b",null,v(e.days/365)+"年会员",1),c("b",null,v(e.price),1),g])))),128))])],64))])}));b.render=E,b.__scopeId="data-v-6eae66b2";export default b;
