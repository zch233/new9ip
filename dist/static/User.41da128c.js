import{d as e,b5 as s,p as t,f as a,h as r,i as n,j as o,k as i,F as p,l as u,m as l,t as d,q as c}from"./index.d4733c31.js";import{_ as m,a as f}from"./index.049de330.js";import{_ as v}from"./index.4f886622.js";import"./vendor.5c0531cb.js";import"./index.d0908018.js";var h=e({name:"LayoutUser",components:{AppFooter:m,AppHeader:f,AppTitleBar:v},setup:()=>({userMenu:s})});const _=c("data-v-eece4134");t("data-v-eece4134");const j=l("回专利市场"),A={class:"routerViewWrapper"},M={class:"pageWidthWithCenter userCenterWrapper"},x={class:"userMenu"},W={class:"userMenu-list"},k={class:"userContent"};a();const C=_(((e,s,t,a,c,m)=>{const f=r("AppHeader"),v=r("RouterLink"),h=r("AppTitleBar"),C=r("RouterView"),F=r("AppFooter");return n(),o(p,null,[i(f),i(h,{title:"会员中心"},{default:_((()=>[i(v,{class:"returnHome",to:"/patent"},{default:_((()=>[j])),_:1})])),_:1}),i("div",A,[i("div",M,[i("nav",x,[i("ul",W,[(n(!0),o(p,null,u(e.userMenu.children.filter((e=>"VipRecord"!==e.name&&"OrderPoints"!==e.name)),(s=>(n(),o("li",{class:"userMenu-list-item",key:s.path},[i(v,{"active-class":"active",to:`${e.userMenu.path}/${s.path}`},{default:_((()=>[l(d(s.meta.title),1)])),_:2},1032,["to"])])))),128))])]),i("section",k,[i(C)])])]),i(F)],64)}));h.render=C,h.__scopeId="data-v-eece4134";export default h;