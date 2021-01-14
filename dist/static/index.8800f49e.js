import{d as t,p as a,f as e,g as s,h as n,i as p,j as r,t as d,m as c}from"./index.06d186fe.js";import{a as o,d as T}from"./dict.c2403ec5.js";import{s as S}from"./index.4fc7dff6.js";var i=t({name:"PatentCard",components:{PatentImage:S},props:{patent:{type:Object,default:()=>({})}},setup:()=>({PATENT_STOCK_STATUS:o,PATENT_CERT_STATUS:T})});const l=c("data-v-0b3194d8");a("data-v-0b3194d8");const m={class:"patentCard"},_={class:"patentCard-image"},f={class:"patentCard-title"},C={class:"patentCard-info"},u={class:"patentCard-info-price"},v={class:"patentCard-info-certStatus"};e();const A=l(((t,a,e,c,o,T)=>{const S=s("PatentImage"),i=s("RouterLink");return n(),p(i,{class:t.patent.stockStatus===t.PATENT_STOCK_STATUS.SOLD_OUT||t.patent.stockStatus===t.PATENT_STOCK_STATUS.USED_SELL?"disabled":"normal",to:`/patent/${t.patent.number}`},{default:l((()=>[r("div",m,[r("div",_,[r(S,{cover:t.patent.categoryCover},null,8,["cover"])]),r("p",f,d(t.patent.name),1),r("div",C,[r("span",u,"￥"+d(t.patent.price),1),r("span",v,d(t.PATENT_CERT_STATUS.label[t.patent.certStatus]),1)])])])),_:1},8,["class","to"])}));i.render=A,i.__scopeId="data-v-0b3194d8";export{i as s};