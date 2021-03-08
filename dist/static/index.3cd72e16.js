var e=Object.assign,t=(e,t,a)=>new Promise(((o,n)=>{var i=e=>{try{s(a.next(e))}catch(t){n(t)}},r=e=>{try{s(a.throw(e))}catch(t){n(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,r);s((a=a.apply(e,t)).next())}));import{a4 as a,d as o,_ as n,u as i,a as r,r as s,$ as l,aE as d,o as p,bd as u,a7 as c,e as m,b9 as y,a6 as f,p as g,f as v,h as T,i as h,j as b,k as S,F as P,l as k,t as I,m as O,n as C,q as R}from"./index.245536e6.js";import{a as U,_}from"./UITabPane.99c2018c.js";import{_ as j}from"./UIButton.e515563a.js";import{_ as w,a as E}from"./index.ef1fe008.js";import{_ as N}from"./UIEmpty.dd4ff908.js";import{_ as z}from"./UIPagination.6106e547.js";import{_ as D}from"./UISpin.114459f3.js";import{_ as A}from"./UICountdown.42c5b656.js";import{_ as q}from"./index.a0cb7711.js";import{_ as x}from"./index.20c5992d.js";import{s as M}from"./index.7cee58f1.js";import{o as $}from"./orderConfirm.5dced95f.js";import{_ as B}from"./UIInputSearch.62d58139.js";import"./vendor.5c0531cb.js";import"./index.fff1db95.js";import"./debounce.8f70df46.js";import"./isSymbol.be5f5bc7.js";import"./toNumber.0a2ba35a.js";import"./LeftOutlined.a9528165.js";import"./SearchOutlined.eb9253cc.js";import"./omit.9fe5b9d6.js";import"./toString.ff849758.js";import"./identity.eb5b98ec.js";import"./_baseSlice.87986fb0.js";import"./CheckOutlined.f6522b9a.js";import"./_baseProperty.bd9f2d72.js";import"./UIModal.93673b3f.js";import"./index.ef803b47.js";const L=[{title:"全部",key:"all"},{title:"近三个月订单",key:"threeMonth"},{title:"近一个月订单",key:"oneMonth"},{title:"最近七天订单",key:"week"}],Y={all:[],threeMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]})(),oneMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]})(),week:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]})()},K=e=>JSON.parse(JSON.stringify({dateRange:e,startDate:Y[e][0]&&y(Y[e][0]),endDate:Y[e][1]&&y(Y[e][1])}));var W=o({name:"OrderTabPane",components:{UITabPane:U,UIButton:j,UIDropdown:w,Icon:n,UIPagination:z,UIEmpty:N,UISpin:D,UICountdown:A,PayRoutesPopover:E,PatentImage:q,PrePatentCountdown:x},props:{status:Number},setup({status:o}){const n=i(),y=r(),g=s(!1),v=s([]),T=s(!1),h=s(null),b=s(n.query),S=s(n.query.dateRange?L.find((e=>e.key===n.query.dateRange)):L[1]),P=l({total:0,current:1,pageSize:10,pageSizeOptions:["10","30","50","100"],showSizeChange:(t,a)=>{window.scrollTo(0,0),y.push({path:"/user/preorder",query:e(e({},b.value),{size:a,no:1})})},change:t=>{window.scrollTo(0,0),y.push({path:"/user/preorder",query:e(e({},b.value),{no:t})})}}),k=n=>t(this,null,(function*(){if(g.value||(b.value.status||"999")!==(null==o?void 0:o.toString()))return;g.value=!0;const{data:t}=yield(i=e(e(e({size:P.pageSize},K(S.value.key)),n),{status:999===o?void 0:o}),a({url:"/api/v1/reserve",method:"get",params:i})).finally((()=>g.value=!1));var i;v.value=(null==t?void 0:t.list)||[],P.total=null==t?void 0:t.totalCount,P.current=null==t?void 0:t.no,P.pageSize=null==t?void 0:t.size}));d((e=>{b.value=e.query,k(e.query)})),p((()=>{k(b.value)}));return{loading:g,submitLoading:T,paginationOptions:P,payRoutesPopoverRef:h,preorders:v,routeQuery:b,payOrder:(e,a)=>t(this,[e,a],(function*({payRoute:e,tradeType:t},a){T.value=!1,h.value.visible=!1;const{data:o}=yield $({commodityId:a.productId,commodityType:"PATENT",payRoute:e,tradeType:t}).finally((()=>T.value=!1)),{orderNo:n,tradeNo:i}=o,r=`/order/pay/${"UMS_PAY"===e?"code":"WXPAY"===e?"wechat":"form"}?orderNo=${n}&tradeNo=${i}&type=PATENT&payRoute=${e}&tradeType=${t}`;"UMS_PAY"===e||"WXPAY"===e?yield y.push(r):(M({tradeNo:i,orderNo:n,type:"PATENT",getContainer:"preorderTabPane"}),f(r))})),PREORDER_STATUS:u,optionOrder:e=>t(this,null,(function*(){c.confirm({centered:!0,class:"warningModal",title:"确定要取消该预留吗？",okType:"danger",content:"若取消预留今日将不能再次预留且积分不再返还",onOk:()=>t(this,null,(function*(){const t=m.loading("正在取消预留，请稍候...",0);var o;yield(o=e.id,a({url:`/api/v1/reserve/cancel/${o}`,method:"put"})).finally((()=>t())),m.success("取消成功！"),yield k(b.value)}))})})),changeOrderStatus:e=>{v.value.find((t=>t.orderNo===e.orderNo)).status=u.CANCEL,v.value=[...v.value]},changeOrderTimeRange:e=>{S.value=L.find((t=>t.key===e)),y.push({path:"/user/preorder",query:K(e)})},orderTimeRange:L,currentOrderTimeRange:S}}});const J=R("data-v-2dbc2169");g("data-v-2dbc2169");const X={class:"listWrapper"},F={class:"listTitle"},Q={class:"listTitle-item colTime"},V={class:"orderTimeRangeSelect"},G=S("li",{class:"listTitle-item colInfo"},"订单详情",-1),H=S("li",{class:"listTitle-item colPrice"},"金额",-1),Z=S("li",{class:"listTitle-item colStatus"},"全部状态",-1),ee=S("li",{class:"listTitle-item colOptions"},"操作",-1),te={key:0,class:"emptyWrapper"},ae={class:"listContent"},oe={class:"listContent-item-top"},ne={class:"time"},ie={key:0},re={class:"listContent-item-content"},se={class:"listContent-item-content-image colTime"},le={class:"listContent-item-content-info colInfo"},de={class:"listContent-item-content-price colPrice"},pe=S("label",null,"价格：",-1),ue=S("label",null,"VIP会员：",-1),ce={class:"listContent-item-content-status colStatus"},me={class:"listContent-item-content-options colOptions"},ye=O("去下单"),fe=O("取消预留"),ge={class:"paginationBar"};v();const ve=J(((e,t,a,o,n,i)=>{const r=T("Icon"),s=T("UIDropdown"),l=T("UIEmpty"),d=T("PatentImage"),p=T("RouterLink"),u=T("PrePatentCountdown");T("PayRoutesPopover");const c=T("UIButton"),m=T("UIPagination"),y=T("UISpin"),f=T("UITabPane");return h(),b(f,{id:"preorderTabPane"},{default:J((()=>[S("div",X,[S("ul",F,[S("li",Q,[S(s,null,{overlay:J((()=>[S("ul",V,[(h(!0),b(P,null,k(e.orderTimeRange,(t=>(h(),b("li",{class:[e.currentOrderTimeRange.key===t.key&&"active"],key:t.key,onClick:a=>e.changeOrderTimeRange(t.key)},I(t.title),11,["onClick"])))),128))])])),default:J((()=>[S("span",null,[O(I(e.currentOrderTimeRange.title)+" ",1),S(r,{icon:"down"})])])),_:1})]),G,H,Z,ee]),0===e.preorders.length?(h(),b("div",te,[e.loading?C("v-if",!0):(h(),b(l,{key:0,image:"order",description:"暂无相关预留"}))])):(h(),b(y,{key:1,spinning:e.loading},{default:J((()=>[S("ul",ae,[(h(!0),b(P,null,k(e.preorders,(t=>(h(),b("li",{class:"listContent-item colTime",key:t.productId},[S("div",oe,[S("time",ne,I(t.createTime),1),t.orderNo?(h(),b("span",ie,"订单号："+I(t.orderNo),1)):C("v-if",!0),S("span",null,"卖家："+I(t.sellerShopName),1)]),S("div",re,[S("div",se,[S(d,{cover:t.productCover},null,8,["cover"])]),S("div",le,[S(p,{to:`/patent/${t.productNumber}`},{default:J((()=>[S("b",null,I(t.productName),1)])),_:2},1032,["to"]),S("p",null,"专利号："+I(t.productNumber),1)]),S("div",de,[S("p",null,[pe,O("￥"+I(t.productPrice),1)]),S("p",null,[ue,O("￥"+I(t.vipPrice),1)])]),S("div",ce,I(e.PREORDER_STATUS.label[t.status]),1),S("div",me,[t.status===e.PREORDER_STATUS.CREATED?(h(),b(P,{key:0},[S(u,{patent:t},null,8,["patent"]),C("v-if",!0),S("div",null,[S(p,{to:{path:"/order/confirm",query:{commodityId:t.productId}}},{default:J((()=>[S(c,{type:"primary","customer-class":"mainButton"},{default:J((()=>[ye])),_:1})])),_:2},1032,["to"])]),S(c,{type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t)},{default:J((()=>[fe])),_:2},1032,["onClick"])],64)):C("v-if",!0)])])])))),128))]),S("section",ge,[S(m,{size:"small",total:e.paginationOptions.total,pageSize:e.paginationOptions.pageSize,"onUpdate:pageSize":t[1]||(t[1]=t=>e.paginationOptions.pageSize=t),current:e.paginationOptions.current,"onUpdate:current":t[2]||(t[2]=t=>e.paginationOptions.current=t),"page-size-options":e.paginationOptions.pageSizeOptions,"show-total":e=>`共 ${e} 条`,onChange:e.paginationOptions.change,onShowSizeChange:e.paginationOptions.showSizeChange,"show-size-changer":"","show-quick-jumper":""},null,8,["total","pageSize","current","page-size-options","show-total","onChange","onShowSizeChange"])])])),_:1},8,["spinning"]))])])),_:1})}));W.render=ve,W.__scopeId="data-v-2dbc2169";const Te=[{title:"全部",key:999},{title:"预留中",key:u.CREATED},{title:"已下单",key:u.ORDER},{title:"已付款",key:u.PAYED},{title:"已取消",key:u.CANCEL}];var he=o({name:"Order",components:{UITabs:_,OrderTabPane:W,UIInputSearch:B},setup(){const e=i(),t=r(),a=s(e.query.status);return{PREORDER_STATUS:u,activeKey:a,orderMap:Te,changeTab:e=>{t.push({path:"/user/preorder",query:{status:999===e?void 0:e}})}}}});const be=R("data-v-1f19bfe8");g("data-v-1f19bfe8");const Se={class:"order"};v();const Pe=be(((e,t,a,o,n,i)=>{const r=T("OrderTabPane"),s=T("UITabs");return h(),b("div",Se,[S(s,{animated:!1,activeKey:e.activeKey,onChange:e.changeTab},{default:be((()=>[(h(!0),b(P,null,k(e.orderMap,(e=>(h(),b(r,{key:e.key,status:e.key},{tab:be((()=>[S("b",null,I(e.title),1)])),_:2},1032,["status"])))),128))])),_:1},8,["activeKey","onChange"])])}));he.render=Pe,he.__scopeId="data-v-1f19bfe8";export default he;