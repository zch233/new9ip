import{d as a,aB as t,az as e,p as s,f as n,h as c,i as p,j as r,k as o,t as T,q as d}from"./index.60d2ede9.js";import{_ as S}from"./index.c95bebb0.js";var i=a({name:"PatentCard",components:{PatentImage:S},props:{patent:{type:Object,default:()=>({})}},setup:()=>({PATENT_STOCK_STATUS:t,PATENT_CERT_STATUS:e})});const l=d("data-v-6cc74b4b");s("data-v-6cc74b4b");const _={class:"patentCard"},b={class:"patentCard-image"},C={class:"patentCard-title"},m={class:"patentCard-info"},u={class:"patentCard-info-price"},v={class:"patentCard-info-certStatus"};n();const A=l(((a,t,e,s,n,d)=>{const S=c("PatentImage"),i=c("RouterLink");return p(),r(i,{class:a.patent.stockStatus===a.PATENT_STOCK_STATUS.SOLD_OUT||a.patent.stockStatus===a.PATENT_STOCK_STATUS.USED_SELL?"disabled":"normal",to:`/patent/${a.patent.number}`},{default:l((()=>[o("div",_,[o("div",b,[o(S,{cover:a.patent.categoryCover},null,8,["cover"])]),o("p",C,T(a.patent.name),1),o("div",m,[o("span",u,"￥"+T(a.patent.price),1),o("span",v,T(a.PATENT_CERT_STATUS.label[a.patent.certStatus]),1)])])])),_:1},8,["class","to"])}));i.render=A,i.__scopeId="data-v-6cc74b4b";export{i as _};
