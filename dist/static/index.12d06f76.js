import{d as e,s,af as n,r as a,az as t,p as o,f as i,g as r,h as d,i as u,F as p,j as l,l as c,m}from"./index.06d186fe.js";import{s as v}from"./UICountdown.037159f0.js";import{s as f}from"./UIButton.3f87abad.js";var h=e({name:"PrePatentCountdown",components:{UIButton:f,UICountdown:v,Icon:s},props:{patent:{type:Object,default:()=>({})}},setup(e,s){const{patent:o}=n(e),i=a(!1),r=a(0);return t(o,(e=>{r.value=e.reserveExpireTime,i.value=!!e.reserveExpireTime}),{immediate:!0}),{reserveExpireTime:r,countdownVisible:i,handleFinish:()=>{i.value=!i.value,s.emit("finish")}}}});const I=m("data-v-4e849764");o("data-v-4e849764");const w={class:"prePatentCountdown"};i();const x=I(((e,s,n,a,t,o)=>{const i=r("Icon"),m=r("UICountdown");return d(),u("div",w,[e.countdownVisible?(d(),u(p,{key:0},[l(i,{icon:"clock"}),l(m,{onFinish:e.handleFinish,value:e.reserveExpireTime,valueStyle:"font-size: 12px;"},null,8,["onFinish","value"])],64)):c("",!0)])}));h.render=x,h.__scopeId="data-v-4e849764";export{h as s};