import{d as a,aD as t,aB as e,p as s,f as n,h as p,i as r,j as d,k as c,t as o,q as T}from"./index.a7520e27.js";import{s as S}from"./index.dfc1ac9d.js";var i=a({name:"PatentCard",components:{PatentImage:S},props:{patent:{type:Object,default:()=>({})}},setup:()=>({PATENT_STOCK_STATUS:t,PATENT_CERT_STATUS:e})});const l=T("data-v-0b3194d8");s("data-v-0b3194d8");const _={class:"patentCard"},C={class:"patentCard-image"},m={class:"patentCard-title"},u={class:"patentCard-info"},v={class:"patentCard-info-price"},A={class:"patentCard-info-certStatus"};n();const f=l(((a,t,e,s,n,T)=>{const S=p("PatentImage"),i=p("RouterLink");return r(),d(i,{class:a.patent.stockStatus===a.PATENT_STOCK_STATUS.SOLD_OUT||a.patent.stockStatus===a.PATENT_STOCK_STATUS.USED_SELL?"disabled":"normal",to:`/patent/${a.patent.number}`},{default:l((()=>[c("div",_,[c("div",C,[c(S,{cover:a.patent.categoryCover},null,8,["cover"])]),c("p",m,o(a.patent.name),1),c("div",u,[c("span",v,"￥"+o(a.patent.price),1),c("span",A,o(a.PATENT_CERT_STATUS.label[a.patent.certStatus]),1)])])])),_:1},8,["class","to"])}));i.render=f,i.__scopeId="data-v-0b3194d8";export{i as s};