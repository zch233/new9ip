var e=Object.assign,t=(e,t,a)=>new Promise(((i,o)=>{var n=e=>{try{r(a.next(e))}catch(e){o(e)}},s=e=>{try{r(a.throw(e))}catch(e){o(e)}},r=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,s);r((a=a.apply(e,t)).next())}));let a=document.createElement("style");a.innerHTML=".orderItemCountDown .ant-statistic-content{font-size:14px}.orderTimeRangeSelect[data-v-644c2254]{background-color:#fff;font-size:12px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.orderTimeRangeSelect li[data-v-644c2254]{padding:8px 16px;border-bottom:1px solid #f5f5f5;cursor:pointer}.orderTimeRangeSelect li.active[data-v-644c2254],.orderTimeRangeSelect li[data-v-644c2254]:hover{color:#333}.orderTimeRangeSelect li[data-v-644c2254]:last-child{border-bottom:none}.listWrapper[data-v-644c2254]{padding:10px 20px}.listWrapper .listTitle[data-v-644c2254]{background-color:#e8e8e8;display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;color:#666;font-size:12px;padding:0 20px;border:1px solid #e8e8e8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.listWrapper .listTitle-item[data-v-644c2254]{padding:16px 0;cursor:default}.listWrapper .listTitle-item.colTime[data-v-644c2254]{cursor:pointer}.listWrapper .colTime[data-v-644c2254]{-webkit-box-flex:.9;-webkit-flex:.9;flex:.9}.listWrapper .colInfo[data-v-644c2254]{-webkit-box-flex:2;-webkit-flex:2;flex:2;padding-right:70px;padding-left:20px}.listWrapper .colPrice[data-v-644c2254],.listWrapper .colStatus[data-v-644c2254]{-webkit-box-flex:2;-webkit-flex:2;flex:2}.listWrapper .colOptions[data-v-644c2254]{-webkit-box-flex:1.4;-webkit-flex:1.4;flex:1.4}.listWrapper .listContent-item[data-v-644c2254]{margin-top:10px}.listWrapper .listContent-item-top[data-v-644c2254]{color:#666;font-size:12px;background-color:#f7f7f7;padding:8px 30px;border:1px solid #dedede;border-bottom:none}.listWrapper .listContent-item-top>[data-v-644c2254]{margin-right:2em}.listWrapper .listContent-item-top .time[data-v-644c2254]{color:#333}.listWrapper .listContent-item-content[data-v-644c2254]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:20px;color:#666;border:1px solid #dedede;border-top:none}.listWrapper .listContent-item-content-image[data-v-644c2254]{width:90px}.listWrapper .listContent-item-content-image img[data-v-644c2254]{width:100%}.listWrapper .listContent-item-content-info b[data-v-644c2254]{display:inline-block;height:2.8em}.listWrapper .listContent-item-content-info p[data-v-644c2254]{margin:4px 0 0;color:#999}.listWrapper .listContent-item-content-price>p[data-v-644c2254]{margin-bottom:2px}.listWrapper .listContent-item-content-price label[data-v-644c2254]{color:#999;font-size:12px}.listWrapper .listContent-item-content-price .totalPrice[data-v-644c2254]{color:#ff5858}.listWrapper .listContent-item-content-price .totalPrice b[data-v-644c2254]{font-size:24px}.listWrapper .listContent-item-content-status[data-v-644c2254]{text-align:center}.listWrapper .listContent-item-content-options[data-v-644c2254]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.listWrapper .listContent-item-content-options-optionsWrapper[data-v-644c2254]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:20%}.listWrapper .listContent-item-content-options-optionsWrapper>[data-v-644c2254]{margin:2px 0}",document.head.appendChild(a);import{d as i,s as o,u as n,a as s,r,$ as l,aw as p,o as c,e as d,p as m,f as u,g,h as b,i as f,j as v,F as y,k,n as x,t as h,m as T,l as w}from"./index.603913dd.js";import"./index.2a5bb8c2.js";import"./SearchOutlined.ef47ae1c.js";import{s as C}from"./UIPagination.6664be72.js";import"./CloseOutlined.111684e9.js";import"./raf.8a2adf49.js";import"./toString.9cbc0960.js";import"./identity.6f82208f.js";import"./isSymbol.42f2d019.js";import"./omit.01f1aa30.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.d5d87ae0.js";import"./CheckOutlined.b896a2c1.js";import"./index.a24ee42c.js";import"./wave.7f62fc22.js";import"./index.0befdd09.js";import{M as S,d as O,o as I}from"./index.057e1197.js";import{s as j,a as U}from"./index.a33f2e74.js";import"./toNumber.1f774113.js";import"./_baseProperty.657ef36c.js";import{s as P}from"./UICountdown.1cb46ea1.js";import"./debounce.6b815f20.js";import"./index.edb99d48.js";import{s as W}from"./UISpin.20c5d267.js";import{s as z}from"./UIInputSearch.26bba2ad.js";import{f as R}from"./dict.c2403ec5.js";import{s as D}from"./UIEmpty.820cce32.js";import{s as N}from"./index.60078c41.js";import{s as _}from"./UIButton.31b21a7a.js";import"./UIModal.8997aab9.js";import{s as A}from"./index.b8645ad8.js";import{s as E}from"./UITooltip.99d47bea.js";import{s as q,a as M}from"./UITabPane.8480fdd3.js";import{g as $,d as B,c as K}from"./order.0477e87b.js";const L=[{title:"全部",key:"all"},{title:"近三个月订单",key:"threeMonth"},{title:"近一个月订单",key:"oneMonth"},{title:"最近七天订单",key:"week"}],Y={all:[],threeMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]})(),oneMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]})(),week:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]})()},F=e=>JSON.parse(JSON.stringify({dateRange:e,startDate:Y[e][0]&&O(Y[e][0]),endDate:Y[e][1]&&O(Y[e][1])}));var J=i({name:"OrderTabPane",components:{UITabPane:q,UIButton:_,UIDropdown:j,Icon:o,UIPagination:C,UIEmpty:D,UISpin:W,UICountdown:P,PayRoutesPopover:U,PatentImage:N,UITooltip:E},props:{status:Number},setup({status:a}){const i=n(),o=s(),m=r(!1),u=r([]),g=r(i.query),b=r(i.query.dateRange?L.find((e=>e.key===i.query.dateRange)):L[1]),f=l({total:0,current:1,pageSize:10,pageSizeOptions:["10","30","50","100"],showSizeChange:(t,a)=>{window.scrollTo(0,0),o.push({path:"/user/order",query:e(e({},g.value),{size:a,no:1})})},change:t=>{window.scrollTo(0,0),o.push({path:"/user/order",query:e(e({},g.value),{no:t})})}}),v=i=>t(this,null,(function*(){if(m.value||(g.value.status||"999")!==(null==a?void 0:a.toString()))return;m.value=!0;const{data:t}=yield $(e(e(e({size:f.pageSize},F(b.value.key)),i),{status:999===a?void 0:a})).finally((()=>m.value=!1));u.value=(null==t?void 0:t.list)||[],f.total=null==t?void 0:t.totalCount,f.current=null==t?void 0:t.no,f.pageSize=null==t?void 0:t.size}));p((e=>{g.value=e.query,v(e.query)})),c((()=>{v(g.value)}));return{loading:m,paginationOptions:f,orders:u,routeQuery:g,payOrder:(e,a)=>t(this,[e,a],(function*({payRoute:e,tradeType:t},a){const{orderNo:i,tradeNo:n}=a,s=`/order/pay/${"UMS_PAY"===e?"code":"WXPAY"===e?"wechat":"form"}?orderNo=${i}&tradeNo=${n}&type=PATENT&payRoute=${e}&tradeType=${t}`;"UMS_PAY"===e||"WXPAY"===e?yield o.push(s):(A({tradeNo:n,orderNo:i,type:"PATENT",getContainer:"orderTabPane"}),I(s))})),ORDER_STATUS:R,optionOrder:(e,a)=>t(this,null,(function*(){const i={delete:{label:"删除",requestApi:B},cancel:{label:"取消",requestApi:K}},{label:o,requestApi:n}=i[a];S.confirm({centered:!0,class:"warningModal",title:`确定要${o}该订单吗？`,okType:"danger",content:`若${o}订单将无法恢复`,onOk:()=>t(this,null,(function*(){const t=d.loading(`正在${o}订单，请稍候...`,0);yield n(e).finally((()=>t())),d.success(`${o}成功！`),yield v(g.value)}))})})),changeOrderStatus:e=>{u.value.find((t=>t.orderNo===e.orderNo)).status=R.CLOSED,u.value=[...u.value]},changeOrderTimeRange:e=>{b.value=L.find((t=>t.key===e)),o.push({path:"/user/order",query:F(e)})},orderTimeRange:L,currentOrderTimeRange:b}}});const X=T("data-v-644c2254");m("data-v-644c2254");const H={class:"listWrapper"},Q={class:"listTitle"},V={class:"listTitle-item colTime"},G={class:"orderTimeRangeSelect"},Z=v("li",{class:"listTitle-item colInfo"},"订单详情",-1),ee=v("li",{class:"listTitle-item colPrice"},"金额",-1),te=v("li",{class:"listTitle-item colStatus"},"全部状态",-1),ae=v("li",{class:"listTitle-item colOptions"},"操作",-1),ie={key:0,class:"emptyWrapper"},oe={class:"listContent"},ne={class:"listContent-item-top"},se={class:"time"},re={class:"listContent-item-content"},le={class:"listContent-item-content-image colTime"},pe={class:"listContent-item-content-info colInfo"},ce={class:"listContent-item-content-price colPrice"},de=v("label",null,"原价：",-1),me=v("label",null,"VIP会员：",-1),ue={class:"totalPrice"},ge=v("label",null,"应付款：",-1),be=x("￥"),fe={class:"listContent-item-content-status colStatus"},ve={class:"listContent-item-content-options colOptions"},ye={class:"listContent-item-content-options-optionsWrapper"},ke=x("取消订单"),xe=x("删除订单"),he={class:"paginationBar"};u();const Te=X(((e,t,a,i,o,n)=>{const s=g("Icon"),r=g("UIDropdown"),l=g("UIEmpty"),p=g("PatentImage"),c=g("RouterLink"),d=g("UICountdown"),m=g("PayRoutesPopover"),u=g("UIButton"),T=g("UITooltip"),C=g("UIPagination"),S=g("UISpin"),O=g("UITabPane");return b(),f(O,{id:"orderTabPane"},{default:X((()=>[v("div",H,[v("ul",Q,[v("li",V,[v(r,null,{overlay:X((()=>[v("ul",G,[(b(!0),f(y,null,k(e.orderTimeRange,(t=>(b(),f("li",{class:[e.currentOrderTimeRange.key===t.key&&"active"],key:t.key,onClick:a=>e.changeOrderTimeRange(t.key)},h(t.title),11,["onClick"])))),128))])])),default:X((()=>[v("span",null,[x(h(e.currentOrderTimeRange.title)+" ",1),v(s,{icon:"down"})])])),_:1})]),Z,ee,te,ae]),0===e.orders.length?(b(),f("div",ie,[v(l)])):(b(),f(S,{key:1,spinning:e.loading},{default:X((()=>[v("ul",oe,[(b(!0),f(y,null,k(e.orders,(t=>(b(),f("li",{class:"listContent-item colTime",key:t.orderNo},[v("div",ne,[v("time",se,h(t.createTime),1),v("span",null,"订单号："+h(t.orderNo),1),v("span",null,"卖家："+h(t.sellerShopName),1)]),v("div",re,[v("div",le,[v(p,{cover:t.commodityCover},null,8,["cover"])]),v("div",pe,[v(c,{to:`/patent/${t.commodityNumber}`},{default:X((()=>[v("b",null,h(t.commodityName),1)])),_:2},1032,["to"]),v("p",null,"专利号："+h(t.commodityNumber),1)]),v("div",ce,[v("p",null,[de,x("￥"+h(t.commodityPrice),1)]),(b(!0),f(y,null,k(t.discounts||[],(e=>(b(),f("p",{key:e.price},[me,x("-￥"+h(e.price),1)])))),128)),v("p",ue,[ge,be,v("b",null,h(t.totalAmount),1)])]),v("div",fe,h(e.ORDER_STATUS.label[t.status]),1),v("div",ve,[v("div",ye,[t.status===e.ORDER_STATUS.CREATED?(b(),f(y,{key:0},[v(d,{class:"orderItemCountDown",onFinish:a=>e.changeOrderStatus(t),value:t.expireTime,format:"剩余m分s秒"},null,8,["onFinish","value"]),v("div",null,[v(m,{onChoose:a=>e.payOrder(a,t)},null,8,["onChoose"])]),v(u,{type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t,"cancel")},{default:X((()=>[ke])),_:2},1032,["onClick"])],64)):(b(),f(u,{key:1,type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t,"delete")},{default:X((()=>[xe])),_:2},1032,["onClick"]))]),v(T,{title:t.remark},{default:X((()=>[t.remark?(b(),f(s,{key:0,icon:"remark"})):w("",!0)])),_:2},1032,["title"])])])])))),128))]),v("section",he,[v(C,{size:"small",total:e.paginationOptions.total,pageSize:e.paginationOptions.pageSize,"onUpdate:pageSize":t[1]||(t[1]=t=>e.paginationOptions.pageSize=t),current:e.paginationOptions.current,"onUpdate:current":t[2]||(t[2]=t=>e.paginationOptions.current=t),"page-size-options":e.paginationOptions.pageSizeOptions,"show-total":e=>`共 ${e} 条`,onChange:e.paginationOptions.change,onShowSizeChange:e.paginationOptions.showSizeChange,"show-size-changer":"","show-quick-jumper":""},null,8,["total","pageSize","current","page-size-options","show-total","onChange","onShowSizeChange"])])])),_:1},8,["spinning"]))])])),_:1})}));J.render=Te,J.__scopeId="data-v-644c2254";const we=[{title:"全部订单",key:999},{title:"待付款",key:R.CREATED},{title:"已付款",key:R.PAYED},{title:"已关闭",key:R.CLOSED}];var Ce=i({name:"Order",components:{UITabs:M,OrderTabPane:J,UIInputSearch:z},setup(){const e=n(),t=s(),a=r(Number(e.query.status||999));return{changeTab:e=>{t.push({path:"/user/order",query:{status:999===e?void 0:e}})},ORDER_STATUS:R,activeKey:a,orderMap:we}}});const Se=T("data-v-70d7fb7b");m("data-v-70d7fb7b");const Oe={class:"order"};u();const Ie=Se(((e,t,a,i,o,n)=>{const s=g("OrderTabPane"),r=g("UITabs");return b(),f("div",Oe,[v(r,{animated:!1,activeKey:e.activeKey,"onUpdate:activeKey":t[1]||(t[1]=t=>e.activeKey=t),onChange:e.changeTab},{default:Se((()=>[(b(!0),f(y,null,k(e.orderMap,(e=>(b(),f(s,{key:e.key,status:e.key},{tab:Se((()=>[v("b",null,h(e.title),1)])),_:2},1032,["status"])))),128))])),_:1},8,["activeKey","onChange"])])}));Ce.render=Ie,Ce.__scopeId="data-v-70d7fb7b";export default Ce;
