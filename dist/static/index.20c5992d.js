import{d as e,_ as n,am as a,r as s,aL as t,p as o,f as i,h as r,i as u,j as d,F as p,k as c,n as l,q as v}from"./index.245536e6.js";import{_ as m}from"./UIButton.e515563a.js";import{_ as b}from"./UICountdown.42c5b656.js";var f=e({name:"PrePatentCountdown",components:{UIButton:m,UICountdown:b,Icon:n},props:{patent:{type:Object,default:()=>({})}},setup(e,n){const{patent:o}=a(e),i=s(!1),r=s(0);return t(o,(e=>{r.value=e.reserveExpireTime,i.value=!!e.reserveExpireTime}),{immediate:!0}),{reserveExpireTime:r,countdownVisible:i,handleFinish:()=>{i.value=!i.value,n.emit("finish")}}}});const h=v("data-v-63b059b9");o("data-v-63b059b9");const I={class:"prePatentCountdown"};i();const w=h(((e,n,a,s,t,o)=>{const i=r("Icon"),v=r("UICountdown");return u(),d("div",I,[e.countdownVisible?(u(),d(p,{key:0},[c(i,{icon:"clock"}),c(v,{onFinish:e.handleFinish,value:e.reserveExpireTime,valueStyle:"font-size: 12px;"},null,8,["onFinish","value"])],64)):l("v-if",!0)])}));f.render=w,f.__scopeId="data-v-63b059b9";export{f as _};