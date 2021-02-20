var e=Object.assign,t=(e,t,a)=>new Promise(((n,o)=>{var i=e=>{try{r(a.next(e))}catch(t){o(t)}},s=e=>{try{r(a.throw(e))}catch(t){o(t)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,s);r((a=a.apply(e,t)).next())}));import{d as a,_ as n,u as o,a as i,r as s,$ as r,aE as l,o as c,b7 as u,a7 as p,e as d,b9 as m,a6 as y,p as g,f as v,h as b,i as f,j as h,k as T,F as k,l as S,t as I,m as O,n as C,q as U}from"./index.2b4c3c62.js";import{a as _,_ as P}from"./UITabPane.5f76bdb7.js";import{_ as j}from"./UIButton.6c205888.js";import{_ as w,a as R}from"./index.3db973a6.js";import{_ as z}from"./UIEmpty.02888c74.js";import{_ as N}from"./UIPagination.a38b3470.js";import{_ as D}from"./UISpin.1fa6b793.js";import{_ as E}from"./UICountdown.a7bbf830.js";import{_ as A}from"./index.256f4dba.js";import{_ as q}from"./UITooltip.0a1da2e7.js";import{s as x}from"./index.6fb00e9f.js";import{g as $,d as M,c as B}from"./order.3a8229ab.js";import{_ as K}from"./UIInputSearch.9ec2a3aa.js";import"./vendor.5c0531cb.js";import"./index.20ab722f.js";import"./debounce.cf8aee8a.js";import"./isSymbol.2848539a.js";import"./toNumber.2f3bc0ea.js";import"./LeftOutlined.cb8b914f.js";import"./SearchOutlined.7b9aeadd.js";import"./omit.adf1eeb8.js";import"./toString.624e5c0b.js";import"./identity.5a383216.js";import"./_baseSlice.87986fb0.js";import"./CheckOutlined.9192ab42.js";import"./_baseProperty.96f29642.js";import"./UIModal.931b6d77.js";import"./index.0aa57565.js";const W=[{title:"全部",key:"all"},{title:"近三个月订单",key:"threeMonth"},{title:"近一个月订单",key:"oneMonth"},{title:"最近七天订单",key:"week"}],Y={all:[],threeMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]})(),oneMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]})(),week:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]})()},L=e=>JSON.parse(JSON.stringify({dateRange:e,startDate:Y[e][0]&&m(Y[e][0]),endDate:Y[e][1]&&m(Y[e][1])}));var F=a({name:"OrderTabPane",components:{UITabPane:_,UIButton:j,UIDropdown:w,Icon:n,UIPagination:N,UIEmpty:z,UISpin:D,UICountdown:E,PayRoutesPopover:R,PatentImage:A,UITooltip:q},props:{status:Number},setup({status:a}){const n=o(),m=i(),g=s(!1),v=s([]),b=s(n.query),f=s(n.query.dateRange?W.find((e=>e.key===n.query.dateRange)):W[1]),h=r({total:0,current:1,pageSize:10,pageSizeOptions:["10","30","50","100"],showSizeChange:(t,a)=>{window.scrollTo(0,0),m.push({path:"/user/order",query:e(e({},b.value),{size:a,no:1})})},change:t=>{window.scrollTo(0,0),m.push({path:"/user/order",query:e(e({},b.value),{no:t})})}}),T=n=>t(this,null,(function*(){if(g.value||(b.value.status||"999")!==(null==a?void 0:a.toString()))return;g.value=!0;const{data:t}=yield $(e(e(e({size:h.pageSize},L(f.value.key)),n),{status:999===a?void 0:a})).finally((()=>g.value=!1));v.value=(null==t?void 0:t.list)||[],h.total=null==t?void 0:t.totalCount,h.current=null==t?void 0:t.no,h.pageSize=null==t?void 0:t.size}));l((e=>{b.value=e.query,T(e.query)})),c((()=>{T(b.value)}));return{loading:g,paginationOptions:h,orders:v,routeQuery:b,payOrder:(e,a)=>t(this,[e,a],(function*({payRoute:e,tradeType:t},a){const{orderNo:n,tradeNo:o}=a,i=`/order/pay/${"UMS_PAY"===e?"code":"WXPAY"===e?"wechat":"form"}?orderNo=${n}&tradeNo=${o}&type=PATENT&payRoute=${e}&tradeType=${t}`;"UMS_PAY"===e||"WXPAY"===e?yield m.push(i):(x({tradeNo:o,orderNo:n,type:"PATENT",getContainer:"orderTabPane"}),y(i))})),ORDER_STATUS:u,optionOrder:(e,a)=>t(this,null,(function*(){const n={delete:{label:"删除",requestApi:M},cancel:{label:"取消",requestApi:B}},{label:o,requestApi:i}=n[a];p.confirm({centered:!0,class:"warningModal",title:`确定要${o}该订单吗？`,okType:"danger",content:`若${o}订单将无法恢复`,onOk:()=>t(this,null,(function*(){const t=d.loading(`正在${o}订单，请稍候...`,0);yield i(e).finally((()=>t())),d.success(`${o}成功！`),yield T(b.value)}))})})),changeOrderStatus:e=>{v.value.find((t=>t.orderNo===e.orderNo)).status=u.CLOSED,v.value=[...v.value]},changeOrderTimeRange:e=>{f.value=W.find((t=>t.key===e)),m.push({path:"/user/order",query:L(e)})},orderTimeRange:W,currentOrderTimeRange:f}}});const J=U("data-v-bc3e7f6c");g("data-v-bc3e7f6c");const X={class:"listWrapper"},Q={class:"listTitle"},V={class:"listTitle-item colTime"},G={class:"orderTimeRangeSelect"},H=T("li",{class:"listTitle-item colInfo"},"订单详情",-1),Z=T("li",{class:"listTitle-item colPrice"},"金额",-1),ee=T("li",{class:"listTitle-item colStatus"},"全部状态",-1),te=T("li",{class:"listTitle-item colOptions"},"操作",-1),ae={key:0,class:"emptyWrapper"},ne=O("去下单"),oe={class:"listContent"},ie={class:"listContent-item-top"},se={class:"time"},re={class:"listContent-item-content"},le={class:"listContent-item-content-image colTime"},ce={class:"listContent-item-content-info colInfo"},ue={class:"listContent-item-content-price colPrice"},pe=T("label",null,"原价：",-1),de=T("label",null,"VIP会员：",-1),me={class:"totalPrice"},ye=T("label",null,"应付款：",-1),ge=O("￥"),ve={class:"listContent-item-content-status colStatus"},be={class:"listContent-item-content-options colOptions"},fe={class:"listContent-item-content-options-optionsWrapper"},he=O("取消订单"),Te=O("删除订单"),ke={class:"paginationBar"};v();const Se=J(((e,t,a,n,o,i)=>{const s=b("Icon"),r=b("UIDropdown"),l=b("UIButton"),c=b("RouterLink"),u=b("UIEmpty"),p=b("PatentImage"),d=b("UICountdown"),m=b("PayRoutesPopover"),y=b("UITooltip"),g=b("UIPagination"),v=b("UISpin"),U=b("UITabPane");return f(),h(U,{id:"orderTabPane"},{default:J((()=>[T("div",X,[T("ul",Q,[T("li",V,[T(r,null,{overlay:J((()=>[T("ul",G,[(f(!0),h(k,null,S(e.orderTimeRange,(t=>(f(),h("li",{class:[e.currentOrderTimeRange.key===t.key&&"active"],key:t.key,onClick:a=>e.changeOrderTimeRange(t.key)},I(t.title),11,["onClick"])))),128))])])),default:J((()=>[T("span",null,[O(I(e.currentOrderTimeRange.title)+" ",1),T(s,{icon:"down"})])])),_:1})]),H,Z,ee,te]),0===e.orders.length?(f(),h("div",ae,[e.loading?C("v-if",!0):(f(),h(u,{key:0,image:"order",description:"暂无相关订单"},{default:J((()=>[T(c,{to:"/patent"},{default:J((()=>[T(l,{"customer-class":"mainButton",type:"primary"},{default:J((()=>[ne])),_:1})])),_:1})])),_:1}))])):(f(),h(v,{key:1,spinning:e.loading},{default:J((()=>[T("ul",oe,[(f(!0),h(k,null,S(e.orders,(t=>(f(),h("li",{class:"listContent-item colTime",key:t.orderNo},[T("div",ie,[T("time",se,I(t.createTime),1),T("span",null,"订单号："+I(t.orderNo),1),T("span",null,"卖家："+I(t.sellerShopName),1)]),T("div",re,[T("div",le,[T(p,{cover:t.commodityCover},null,8,["cover"])]),T("div",ce,[T(c,{to:`/patent/${t.commodityNumber}`},{default:J((()=>[T("b",null,I(t.commodityName),1)])),_:2},1032,["to"]),T("p",null,"专利号："+I(t.commodityNumber),1)]),T("div",ue,[T("p",null,[pe,O("￥"+I(t.commodityPrice),1)]),(f(!0),h(k,null,S(t.discounts||[],(e=>(f(),h("p",{key:e.price},[de,O("-￥"+I(e.price),1)])))),128)),T("p",me,[ye,ge,T("b",null,I(t.totalAmount),1)])]),T("div",ve,I(e.ORDER_STATUS.label[t.status]),1),T("div",be,[T("div",fe,[t.status===e.ORDER_STATUS.CREATED?(f(),h(k,{key:0},[T(d,{class:"orderItemCountDown",onFinish:a=>e.changeOrderStatus(t),value:t.expireTime,format:"剩余m分s秒"},null,8,["onFinish","value"]),T("div",null,[T(m,{onChoose:a=>e.payOrder(a,t)},null,8,["onChoose"])]),T(l,{type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t,"cancel")},{default:J((()=>[he])),_:2},1032,["onClick"])],64)):(f(),h(l,{key:1,type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t,"delete")},{default:J((()=>[Te])),_:2},1032,["onClick"]))]),T(y,{title:t.remark},{default:J((()=>[t.remark?(f(),h(s,{key:0,icon:"remark"})):C("v-if",!0)])),_:2},1032,["title"])])])])))),128))]),T("section",ke,[T(g,{size:"small",total:e.paginationOptions.total,pageSize:e.paginationOptions.pageSize,"onUpdate:pageSize":t[1]||(t[1]=t=>e.paginationOptions.pageSize=t),current:e.paginationOptions.current,"onUpdate:current":t[2]||(t[2]=t=>e.paginationOptions.current=t),"page-size-options":e.paginationOptions.pageSizeOptions,"show-total":e=>`共 ${e} 条`,onChange:e.paginationOptions.change,onShowSizeChange:e.paginationOptions.showSizeChange,"show-size-changer":"","show-quick-jumper":""},null,8,["total","pageSize","current","page-size-options","show-total","onChange","onShowSizeChange"])])])),_:1},8,["spinning"]))])])),_:1})}));F.render=Se,F.__scopeId="data-v-bc3e7f6c";const Ie=[{title:"全部订单",key:999},{title:"待付款",key:u.CREATED},{title:"已付款",key:u.PAYED},{title:"已关闭",key:u.CLOSED}];var Oe=a({name:"Order",components:{UITabs:P,OrderTabPane:F,UIInputSearch:K},setup(){const e=o(),t=i(),a=s(Number(e.query.status||999));return{changeTab:e=>{t.push({path:"/user/order",query:{status:999===e?void 0:e}})},ORDER_STATUS:u,activeKey:a,orderMap:Ie}}});const Ce=U("data-v-e144a7b2");g("data-v-e144a7b2");const Ue={class:"order"};v();const _e=Ce(((e,t,a,n,o,i)=>{const s=b("OrderTabPane"),r=b("UITabs");return f(),h("div",Ue,[T(r,{animated:!1,activeKey:e.activeKey,"onUpdate:activeKey":t[1]||(t[1]=t=>e.activeKey=t),onChange:e.changeTab},{default:Ce((()=>[C('      <template #tabBarExtraContent><div style="padding: 0 20px;">'),C('        <UIInputSearch placeholder="搜索订单号/订单名称" />'),C("      </div></template>"),(f(!0),h(k,null,S(e.orderMap,(e=>(f(),h(s,{key:e.key,status:e.key},{tab:Ce((()=>[T("b",null,I(e.title),1)])),_:2},1032,["status"])))),128))])),_:1},8,["activeKey","onChange"])])}));Oe.render=_e,Oe.__scopeId="data-v-e144a7b2";export default Oe;
