import{a4 as r}from"./index.245536e6.js";const o=o=>r({url:"/api/v1/order",method:"get",params:o}),a=({orderNo:o})=>r({url:`/api/v1/order?orderNo=${o}`,method:"delete"}),e=({orderNo:o})=>r({url:`/api/v1/order/cancel?orderNo=${o}`,method:"put"}),d=o=>r({url:"/api/v1/pay/order",method:"post",data:o}),p=o=>r({url:"/api/v1/pay/vip/order",method:"post",data:o});export{d as a,e as c,a as d,o as g,p};