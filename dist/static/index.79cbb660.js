import{d as a,aD as t,aB as s,p as e,f as n,h as p,i as r,j as d,k as o,t as T,n as c}from"./index.c6d5b52f.js";import{s as S}from"./index.b6525d78.js";var i=a({name:"PatentCard",components:{PatentImage:S},props:{patent:{type:Object,default:()=>({})}},setup:()=>({PATENT_STOCK_STATUS:t,PATENT_CERT_STATUS:s})});const l=c("data-v-0b3194d8");e("data-v-0b3194d8");const _={class:"patentCard"},C={class:"patentCard-image"},m={class:"patentCard-title"},u={class:"patentCard-info"},v={class:"patentCard-info-price"},A={class:"patentCard-info-certStatus"};n();const b=l(((a,t,s,e,n,c)=>{const S=p("PatentImage"),i=p("RouterLink");return r(),d(i,{class:a.patent.stockStatus===a.PATENT_STOCK_STATUS.SOLD_OUT||a.patent.stockStatus===a.PATENT_STOCK_STATUS.USED_SELL?"disabled":"normal",to:`/patent/${a.patent.number}`},{default:l((()=>[o("div",_,[o("div",C,[o(S,{cover:a.patent.categoryCover},null,8,["cover"])]),o("p",m,T(a.patent.name),1),o("div",u,[o("span",v,"￥"+T(a.patent.price),1),o("span",A,T(a.PATENT_CERT_STATUS.label[a.patent.certStatus]),1)])])])),_:1},8,["class","to"])}));i.render=b,i.__scopeId="data-v-0b3194d8";export{i as s};
