import{a4 as a}from"./index.2b4c3c62.js";const t=t=>a({url:"/pub/api/v1/patent",method:"get",params:t}),e=t=>a({url:"/pub/api/v1/recommend/patent",method:"get",params:t}),p=t=>a({url:"/api/v1/reserve",method:"post",data:t}),r=t=>a({url:"/api/v1/patent/patent-export",method:"get",params:t,responseType:"blob"}),s=()=>a({url:"/pub/api/v1/tag/patent",method:"get"}),o=t=>a({url:`/pub/api/v1/patent/${t}`,method:"get"});export{s as a,o as b,e as c,r as e,t as g,p};
