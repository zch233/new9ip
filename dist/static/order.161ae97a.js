import{a2 as r}from"./index.c6205360.js";const o=o=>r({url:"/api/v1/order",method:"get",params:o}),a=({orderNo:o})=>r({url:`/api/v1/order?orderNo=${o}`,method:"delete"}),e=({orderNo:o})=>r({url:`/api/v1/order/cancel?orderNo=${o}`,method:"put"}),d=o=>r({url:"/api/v1/pay/order",method:"post",data:o}),p=o=>r({url:"/api/v1/pay/vip/order",method:"post",data:o});export{p as a,e as c,a as d,o as g,d as p};
