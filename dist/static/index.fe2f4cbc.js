var e=Object.assign,t=(e,t,a)=>new Promise(((o,n)=>{var i=e=>{try{s(a.next(e))}catch(t){n(t)}},r=e=>{try{s(a.throw(e))}catch(t){n(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,r);s((a=a.apply(e,t)).next())}));import{ai as a,d as o,_ as n,u as i,q as r,r as s,ad as l,aM as d,y as p,bi as c,al as u,A as m,be as y,ak as g,D as v,F as f,G as T,H as b,J as h,b as S,K as P,L as k,N as I,M as O,O as C,Q as R}from"./index.316aaba3.js";import{a as U,_}from"./UITabPane.5a035cd4.js";import{_ as w}from"./UIButton.8a854855.js";import{_ as j,a as N}from"./index.b4179c08.js";import{_ as z}from"./UIEmpty.446b0720.js";import{_ as E}from"./UIPagination.77eabfb2.js";import{_ as D}from"./UISpin.78cb9dbd.js";import{_ as A}from"./UICountdown.95107cfb.js";import{_ as q}from"./index.d56117aa.js";import{_ as M}from"./index.4d61d932.js";import{s as x}from"./index.d3abfd82.js";import{o as $}from"./orderConfirm.8ae3c6ab.js";import{_ as B}from"./UIInputSearch.293930a1.js";import"./vendor.5c0531cb.js";import"./index.376fa03c.js";import"./debounce.e95b6904.js";import"./isSymbol.db7c5c18.js";import"./toNumber.23891726.js";import"./LeftOutlined.11fa718f.js";import"./SearchOutlined.5fb1617c.js";import"./omit.f65df6ac.js";import"./toString.d7ff6646.js";import"./identity.dfdc695f.js";import"./_baseSlice.87986fb0.js";import"./CheckOutlined.65ba843b.js";import"./_baseProperty.d2cb7c95.js";import"./UIModal.266e5229.js";import"./index.b31f51ca.js";const L=[{title:"全部",key:"all"},{title:"近三个月订单",key:"threeMonth"},{title:"近一个月订单",key:"oneMonth"},{title:"最近七天订单",key:"week"}],K={all:[],threeMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]})(),oneMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]})(),week:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]})()},Y=e=>JSON.parse(JSON.stringify({dateRange:e,startDate:K[e][0]&&y(K[e][0]),endDate:K[e][1]&&y(K[e][1])}));var W=o({name:"OrderTabPane",components:{UITabPane:U,UIButton:w,UIDropdown:j,Icon:n,UIPagination:E,UIEmpty:z,UISpin:D,UICountdown:A,PayRoutesPopover:N,PatentImage:q,PrePatentCountdown:M},props:{status:Number},setup({status:o}){const n=i(),y=r(),v=s(!1),f=s([]),T=s(!1),b=s(null),h=s(n.query),S=s(n.query.dateRange?L.find((e=>e.key===n.query.dateRange)):L[1]),P=l({total:0,current:1,pageSize:10,pageSizeOptions:["10","30","50","100"],showSizeChange:(t,a)=>{window.scrollTo(0,0),y.push({path:"/user/preorder",query:e(e({},h.value),{size:a,no:1})})},change:t=>{window.scrollTo(0,0),y.push({path:"/user/preorder",query:e(e({},h.value),{no:t})})}}),k=n=>t(this,null,(function*(){if(v.value||(h.value.status||"999")!==(null==o?void 0:o.toString()))return;v.value=!0;const{data:t}=yield(i=e(e(e({size:P.pageSize},Y(S.value.key)),n),{status:999===o?void 0:o}),a({url:"/api/v1/reserve",method:"get",params:i})).finally((()=>v.value=!1));var i;f.value=(null==t?void 0:t.list)||[],P.total=null==t?void 0:t.totalCount,P.current=null==t?void 0:t.no,P.pageSize=null==t?void 0:t.size}));d((e=>{h.value=e.query,k(e.query)})),p((()=>{k(h.value)}));return{loading:v,submitLoading:T,paginationOptions:P,payRoutesPopoverRef:b,preorders:f,routeQuery:h,payOrder:(e,a)=>t(this,[e,a],(function*({payRoute:e,tradeType:t},a){T.value=!1,b.value.visible=!1;const{data:o}=yield $({commodityId:a.productId,commodityType:"PATENT",payRoute:e,tradeType:t}).finally((()=>T.value=!1)),{orderNo:n,tradeNo:i}=o,r=`/order/pay/${"UMS_PAY"===e?"code":"WXPAY"===e?"wechat":"form"}?orderNo=${n}&tradeNo=${i}&type=PATENT&payRoute=${e}&tradeType=${t}`;"UMS_PAY"===e||"WXPAY"===e?yield y.push(r):(x({tradeNo:i,orderNo:n,type:"PATENT",getContainer:"preorderTabPane"}),g(r))})),PREORDER_STATUS:c,optionOrder:e=>t(this,null,(function*(){u.confirm({centered:!0,class:"warningModal",title:"确定要取消该预留吗？",okType:"danger",content:"若取消预留今日将不能再次预留且积分不再返还",onOk:()=>t(this,null,(function*(){const t=m.loading("正在取消预留，请稍候...",0);var o;yield(o=e.id,a({url:`/api/v1/reserve/cancel/${o}`,method:"put"})).finally((()=>t())),m.success("取消成功！"),yield k(h.value)}))})})),changeOrderStatus:e=>{f.value.find((t=>t.orderNo===e.orderNo)).status=c.CANCEL,f.value=[...f.value]},changeOrderTimeRange:e=>{S.value=L.find((t=>t.key===e)),y.push({path:"/user/preorder",query:Y(e)})},orderTimeRange:L,currentOrderTimeRange:S}}});const J=R("data-v-2dbc2169");v("data-v-2dbc2169");const Q={class:"listWrapper"},X={class:"listTitle"},F={class:"listTitle-item colTime"},G={class:"orderTimeRangeSelect"},H=S("li",{class:"listTitle-item colInfo"},"订单详情",-1),V=S("li",{class:"listTitle-item colPrice"},"金额",-1),Z=S("li",{class:"listTitle-item colStatus"},"全部状态",-1),ee=S("li",{class:"listTitle-item colOptions"},"操作",-1),te={key:0,class:"emptyWrapper"},ae={class:"listContent"},oe={class:"listContent-item-top"},ne={class:"time"},ie={key:0},re={class:"listContent-item-content"},se={class:"listContent-item-content-image colTime"},le={class:"listContent-item-content-info colInfo"},de={class:"listContent-item-content-price colPrice"},pe=S("label",null,"价格：",-1),ce=S("label",null,"VIP会员：",-1),ue={class:"listContent-item-content-status colStatus"},me={class:"listContent-item-content-options colOptions"},ye=O("去下单"),ge=O("取消预留"),ve={class:"paginationBar"};f();const fe=J(((e,t,a,o,n,i)=>{const r=T("Icon"),s=T("UIDropdown"),l=T("UIEmpty"),d=T("PatentImage"),p=T("RouterLink"),c=T("PrePatentCountdown");T("PayRoutesPopover");const u=T("UIButton"),m=T("UIPagination"),y=T("UISpin"),g=T("UITabPane");return b(),h(g,{id:"preorderTabPane"},{default:J((()=>[S("div",Q,[S("ul",X,[S("li",F,[S(s,null,{overlay:J((()=>[S("ul",G,[(b(!0),h(P,null,k(e.orderTimeRange,(t=>(b(),h("li",{class:[e.currentOrderTimeRange.key===t.key&&"active"],key:t.key,onClick:a=>e.changeOrderTimeRange(t.key)},I(t.title),11,["onClick"])))),128))])])),default:J((()=>[S("span",null,[O(I(e.currentOrderTimeRange.title)+" ",1),S(r,{icon:"down"})])])),_:1})]),H,V,Z,ee]),0===e.preorders.length?(b(),h("div",te,[e.loading?C("v-if",!0):(b(),h(l,{key:0,image:"order",description:"暂无相关预留"}))])):(b(),h(y,{key:1,spinning:e.loading},{default:J((()=>[S("ul",ae,[(b(!0),h(P,null,k(e.preorders,(t=>(b(),h("li",{class:"listContent-item colTime",key:t.productId},[S("div",oe,[S("time",ne,I(t.createTime),1),t.orderNo?(b(),h("span",ie,"订单号："+I(t.orderNo),1)):C("v-if",!0),S("span",null,"卖家："+I(t.sellerShopName),1)]),S("div",re,[S("div",se,[S(d,{cover:t.productCover},null,8,["cover"])]),S("div",le,[S(p,{to:`/patent/${t.productNumber}`},{default:J((()=>[S("b",null,I(t.productName),1)])),_:2},1032,["to"]),S("p",null,"专利号："+I(t.productNumber),1)]),S("div",de,[S("p",null,[pe,O("￥"+I(t.productPrice),1)]),S("p",null,[ce,O("￥"+I(t.vipPrice),1)])]),S("div",ue,I(e.PREORDER_STATUS.label[t.status]),1),S("div",me,[t.status===e.PREORDER_STATUS.CREATED?(b(),h(P,{key:0},[S(c,{patent:t},null,8,["patent"]),C("v-if",!0),S("div",null,[S(p,{to:{path:"/order/confirm",query:{commodityId:t.productId}}},{default:J((()=>[S(u,{type:"primary","customer-class":"mainButton"},{default:J((()=>[ye])),_:1})])),_:2},1032,["to"])]),S(u,{type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t)},{default:J((()=>[ge])),_:2},1032,["onClick"])],64)):C("v-if",!0)])])])))),128))]),S("section",ve,[S(m,{size:"small",total:e.paginationOptions.total,pageSize:e.paginationOptions.pageSize,"onUpdate:pageSize":t[1]||(t[1]=t=>e.paginationOptions.pageSize=t),current:e.paginationOptions.current,"onUpdate:current":t[2]||(t[2]=t=>e.paginationOptions.current=t),"page-size-options":e.paginationOptions.pageSizeOptions,"show-total":e=>`共 ${e} 条`,onChange:e.paginationOptions.change,onShowSizeChange:e.paginationOptions.showSizeChange,"show-size-changer":"","show-quick-jumper":""},null,8,["total","pageSize","current","page-size-options","show-total","onChange","onShowSizeChange"])])])),_:1},8,["spinning"]))])])),_:1})}));W.render=fe,W.__scopeId="data-v-2dbc2169";const Te=[{title:"全部",key:999},{title:"预留中",key:c.CREATED},{title:"已下单",key:c.ORDER},{title:"已付款",key:c.PAYED},{title:"已取消",key:c.CANCEL}];var be=o({name:"Order",components:{UITabs:_,OrderTabPane:W,UIInputSearch:B},setup(){const e=i(),t=r(),a=s(e.query.status);return{PREORDER_STATUS:c,activeKey:a,orderMap:Te,changeTab:e=>{t.push({path:"/user/preorder",query:{status:999===e?void 0:e}})}}}});const he=R("data-v-1f19bfe8");v("data-v-1f19bfe8");const Se={class:"order"};f();const Pe=he(((e,t,a,o,n,i)=>{const r=T("OrderTabPane"),s=T("UITabs");return b(),h("div",Se,[S(s,{animated:!1,activeKey:e.activeKey,onChange:e.changeTab},{default:he((()=>[(b(!0),h(P,null,k(e.orderMap,(e=>(b(),h(r,{key:e.key,status:e.key},{tab:he((()=>[S("b",null,I(e.title),1)])),_:2},1032,["status"])))),128))])),_:1},8,["activeKey","onChange"])])}));be.render=Pe,be.__scopeId="data-v-1f19bfe8";export default be;
