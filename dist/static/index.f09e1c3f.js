import{d as t,p as a,f as s,g as e,h as n,i as p,j as r,t as d,m as c}from"./index.603913dd.js";import{a as o,d as T}from"./dict.c2403ec5.js";import{s as S}from"./index.60078c41.js";var i=t({name:"PatentCard",components:{PatentImage:S},props:{patent:{type:Object,default:()=>({})}},setup:()=>({PATENT_STOCK_STATUS:o,PATENT_CERT_STATUS:T})});const l=c("data-v-0b3194d8");a("data-v-0b3194d8");const m={class:"patentCard"},_={class:"patentCard-image"},C={class:"patentCard-title"},u={class:"patentCard-info"},v={class:"patentCard-info-price"},A={class:"patentCard-info-certStatus"};s();const f=l(((t,a,s,c,o,T)=>{const S=e("PatentImage"),i=e("RouterLink");return n(),p(i,{class:t.patent.stockStatus===t.PATENT_STOCK_STATUS.SOLD_OUT||t.patent.stockStatus===t.PATENT_STOCK_STATUS.USED_SELL?"disabled":"normal",to:`/patent/${t.patent.number}`},{default:l((()=>[r("div",m,[r("div",_,[r(S,{cover:t.patent.categoryCover},null,8,["cover"])]),r("p",C,d(t.patent.name),1),r("div",u,[r("span",v,"￥"+d(t.patent.price),1),r("span",A,d(t.PATENT_CERT_STATUS.label[t.patent.certStatus]),1)])])])),_:1},8,["class","to"])}));i.render=f,i.__scopeId="data-v-0b3194d8";export{i as s};
