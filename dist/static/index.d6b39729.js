var e=Object.assign,t=(e,t,a)=>new Promise(((o,i)=>{var n=e=>{try{s(a.next(e))}catch(e){i(e)}},r=e=>{try{s(a.throw(e))}catch(e){i(e)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,r);s((a=a.apply(e,t)).next())}));let a=document.createElement("style");a.innerHTML=".orderItemCountDown .ant-statistic-content{font-size:14px}.orderTimeRangeSelect[data-v-f48afdde]{background-color:#fff;font-size:12px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.orderTimeRangeSelect li[data-v-f48afdde]{padding:8px 16px;border-bottom:1px solid #f5f5f5;cursor:pointer}.orderTimeRangeSelect li.active[data-v-f48afdde],.orderTimeRangeSelect li[data-v-f48afdde]:hover{color:#333}.orderTimeRangeSelect li[data-v-f48afdde]:last-child{border-bottom:none}.listWrapper[data-v-f48afdde]{padding:10px 20px}.listWrapper .listTitle[data-v-f48afdde]{background-color:#e8e8e8;display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;color:#666;font-size:12px;padding:0 20px;border:1px solid #e8e8e8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.listWrapper .listTitle-item[data-v-f48afdde]{padding:16px 0;cursor:default}.listWrapper .listTitle-item.colTime[data-v-f48afdde]{cursor:pointer}.listWrapper .colTime[data-v-f48afdde]{-webkit-box-flex:.9;-webkit-flex:.9;flex:.9}.listWrapper .colInfo[data-v-f48afdde]{-webkit-box-flex:2;-webkit-flex:2;flex:2;padding-right:70px;padding-left:20px}.listWrapper .colPrice[data-v-f48afdde],.listWrapper .colStatus[data-v-f48afdde]{-webkit-box-flex:2;-webkit-flex:2;flex:2}.listWrapper .colOptions[data-v-f48afdde]{-webkit-box-flex:1.4;-webkit-flex:1.4;flex:1.4}.listWrapper .listContent-item[data-v-f48afdde]{margin-top:10px}.listWrapper .listContent-item-top[data-v-f48afdde]{color:#666;font-size:12px;background-color:#f7f7f7;padding:8px 30px;border:1px solid #dedede;border-bottom:none}.listWrapper .listContent-item-top>[data-v-f48afdde]{margin-right:2em}.listWrapper .listContent-item-top .time[data-v-f48afdde]{color:#333}.listWrapper .listContent-item-content[data-v-f48afdde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:20px;color:#666;border:1px solid #dedede;border-top:none}.listWrapper .listContent-item-content-image[data-v-f48afdde]{width:90px}.listWrapper .listContent-item-content-image img[data-v-f48afdde]{width:100%}.listWrapper .listContent-item-content-info b[data-v-f48afdde]{display:inline-block;height:2.8em}.listWrapper .listContent-item-content-info p[data-v-f48afdde]{margin:4px 0 0;color:#999}.listWrapper .listContent-item-content-price>p[data-v-f48afdde]{margin-bottom:2px}.listWrapper .listContent-item-content-price label[data-v-f48afdde]{color:#999;font-size:12px}.listWrapper .listContent-item-content-price .totalPrice[data-v-f48afdde]{color:#ff5858}.listWrapper .listContent-item-content-price .totalPrice b[data-v-f48afdde]{font-size:24px}.listWrapper .listContent-item-content-options[data-v-f48afdde],.listWrapper .listContent-item-content-status[data-v-f48afdde]{text-align:center}.listWrapper .listContent-item-content-options>[data-v-f48afdde]{margin:2px 0}",document.head.appendChild(a);import{a2 as o,d as i,s as n,u as r,a as s,r as l,$ as d,aw as p,o as c,e as u,p as f,f as m,g,h as v,i as y,j as b,F as T,k as h,n as x,t as k,m as C,l as w}from"./index.c6205360.js";import"./index.2a5bb8c2.js";import"./SearchOutlined.97d4ec8f.js";import{s as S}from"./UIPagination.555d8fcb.js";import"./CloseOutlined.c59b861f.js";import"./raf.8a2adf49.js";import"./toString.952967e1.js";import"./identity.16cb2f4a.js";import"./isSymbol.391746cd.js";import"./omit.ff3940d1.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.ca4a1484.js";import"./CheckOutlined.cf8bff28.js";import"./index.42594293.js";import"./wave.ead9a13d.js";import"./index.7b25accd.js";import{M as P,d as I,o as O}from"./index.2c475e1b.js";import{s as R,a as j}from"./index.aed19f24.js";import"./toNumber.666709f0.js";import"./_baseProperty.aeaa2c40.js";import{s as U}from"./UICountdown.14aca8b2.js";import"./debounce.cc96765e.js";import"./index.d7856568.js";import{s as z}from"./UISpin.97ae975f.js";import{s as W}from"./UIInputSearch.507e8305.js";import{g as E}from"./dict.c2403ec5.js";import{s as N}from"./UIEmpty.6cff67fb.js";import{s as _}from"./index.d5203855.js";import{s as D}from"./UIButton.9f4311b3.js";import"./UIModal.81f674b1.js";import{s as A}from"./index.a86433ec.js";import{s as q}from"./index.a661f6f6.js";import{s as M,a as $}from"./UITabPane.1698d3e4.js";import{o as B}from"./orderConfirm.9ab7d121.js";const L=[{title:"全部",key:"all"},{title:"近三个月订单",key:"threeMonth"},{title:"近一个月订单",key:"oneMonth"},{title:"最近七天订单",key:"week"}],Y={all:[],threeMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]})(),oneMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]})(),week:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]})()},K=e=>JSON.parse(JSON.stringify({dateRange:e,startDate:Y[e][0]&&I(Y[e][0]),endDate:Y[e][1]&&I(Y[e][1])}));var J=i({name:"OrderTabPane",components:{UITabPane:M,UIButton:D,UIDropdown:R,Icon:n,UIPagination:S,UIEmpty:N,UISpin:z,UICountdown:U,PayRoutesPopover:j,PatentImage:_,PrePatentCountdown:q},props:{status:Number},setup({status:a}){const i=r(),n=s(),f=l(!1),m=l([]),g=l(!1),v=l(null),y=l(i.query),b=l(i.query.dateRange?L.find((e=>e.key===i.query.dateRange)):L[1]),T=d({total:0,current:1,pageSize:10,pageSizeOptions:["10","30","50","100"],showSizeChange:(t,a)=>{window.scrollTo(0,0),n.push({path:"/user/preorder",query:e(e({},y.value),{size:a,no:1})})},change:t=>{window.scrollTo(0,0),n.push({path:"/user/preorder",query:e(e({},y.value),{no:t})})}}),h=i=>t(this,null,(function*(){if(f.value||(y.value.status||"999")!==(null==a?void 0:a.toString()))return;f.value=!0;const{data:t}=yield(n=e(e(e({size:T.pageSize},K(b.value.key)),i),{status:999===a?void 0:a}),o({url:"/api/v1/reserve",method:"get",params:n})).finally((()=>f.value=!1));var n;m.value=(null==t?void 0:t.list)||[],T.total=null==t?void 0:t.totalCount,T.current=null==t?void 0:t.no,T.pageSize=null==t?void 0:t.size}));p((e=>{y.value=e.query,h(e.query)})),c((()=>{h(y.value)}));return{loading:f,submitLoading:g,paginationOptions:T,payRoutesPopoverRef:v,preorders:m,routeQuery:y,payOrder:(e,a)=>t(this,[e,a],(function*({payRoute:e,tradeType:t},a){g.value=!1,v.value.visible=!1;const{data:o}=yield B({commodityId:a.productId,commodityType:"PATENT",payRoute:e,tradeType:t}).finally((()=>g.value=!1)),{orderNo:i,tradeNo:r}=o,s=`/order/pay/${"UMS_PAY"===e?"code":"WXPAY"===e?"wechat":"form"}?orderNo=${i}&tradeNo=${r}&type=PATENT&payRoute=${e}&tradeType=${t}`;"UMS_PAY"===e||"WXPAY"===e?yield n.push(s):(A({tradeNo:r,orderNo:i,type:"PATENT",getContainer:"preorderTabPane"}),O(s))})),PREORDER_STATUS:E,optionOrder:e=>t(this,null,(function*(){P.confirm({centered:!0,class:"warningModal",title:"确定要取消该预留吗？",okType:"danger",content:"若取消预留今日将不能再次预留且积分不再返还",onOk:()=>t(this,null,(function*(){const t=u.loading("正在取消预留，请稍候...",0);var a;yield(a=e.id,o({url:`/api/v1/reserve/cancel/${a}`,method:"put"})).finally((()=>t())),u.success("取消成功！"),yield h(y.value)}))})})),changeOrderStatus:e=>{m.value.find((t=>t.orderNo===e.orderNo)).status=E.CANCEL,m.value=[...m.value]},changeOrderTimeRange:e=>{b.value=L.find((t=>t.key===e)),n.push({path:"/user/preorder",query:K(e)})},orderTimeRange:L,currentOrderTimeRange:b}}});const X=C("data-v-f48afdde");f("data-v-f48afdde");const F={class:"listWrapper"},H={class:"listTitle"},Q={class:"listTitle-item colTime"},V={class:"orderTimeRangeSelect"},G=b("li",{class:"listTitle-item colInfo"},"订单详情",-1),Z=b("li",{class:"listTitle-item colPrice"},"金额",-1),ee=b("li",{class:"listTitle-item colStatus"},"全部状态",-1),te=b("li",{class:"listTitle-item colOptions"},"操作",-1),ae={key:0,class:"emptyWrapper"},oe={class:"listContent"},ie={class:"listContent-item-top"},ne={class:"time"},re={key:0},se={class:"listContent-item-content"},le={class:"listContent-item-content-image colTime"},de={class:"listContent-item-content-info colInfo"},pe={class:"listContent-item-content-price colPrice"},ce=b("label",null,"价格：",-1),ue=b("label",null,"VIP会员：",-1),fe={class:"listContent-item-content-status colStatus"},me={class:"listContent-item-content-options colOptions"},ge=x("去下单"),ve=x("取消预留"),ye={class:"paginationBar"};m();const be=X(((e,t,a,o,i,n)=>{const r=g("Icon"),s=g("UIDropdown"),l=g("UIEmpty"),d=g("PatentImage"),p=g("RouterLink"),c=g("PrePatentCountdown"),u=(g("PayRoutesPopover"),g("UIButton")),f=g("UIPagination"),m=g("UISpin"),C=g("UITabPane");return v(),y(C,{id:"preorderTabPane"},{default:X((()=>[b("div",F,[b("ul",H,[b("li",Q,[b(s,null,{overlay:X((()=>[b("ul",V,[(v(!0),y(T,null,h(e.orderTimeRange,(t=>(v(),y("li",{class:[e.currentOrderTimeRange.key===t.key&&"active"],key:t.key,onClick:a=>e.changeOrderTimeRange(t.key)},k(t.title),11,["onClick"])))),128))])])),default:X((()=>[b("span",null,[x(k(e.currentOrderTimeRange.title)+" ",1),b(r,{icon:"down"})])])),_:1})]),G,Z,ee,te]),0===e.preorders.length?(v(),y("div",ae,[b(l)])):(v(),y(m,{key:1,spinning:e.loading},{default:X((()=>[b("ul",oe,[(v(!0),y(T,null,h(e.preorders,(t=>(v(),y("li",{class:"listContent-item colTime",key:t.productId},[b("div",ie,[b("time",ne,k(t.createTime),1),t.orderNo?(v(),y("span",re,"订单号："+k(t.orderNo),1)):w("",!0),b("span",null,"卖家："+k(t.sellerShopName),1)]),b("div",se,[b("div",le,[b(d,{cover:t.productCover},null,8,["cover"])]),b("div",de,[b(p,{to:`/patent/${t.productNumber}`},{default:X((()=>[b("b",null,k(t.productName),1)])),_:2},1032,["to"]),b("p",null,"专利号："+k(t.productNumber),1)]),b("div",pe,[b("p",null,[ce,x("￥"+k(t.productPrice),1)]),b("p",null,[ue,x("￥"+k(t.vipPrice),1)])]),b("div",fe,k(e.PREORDER_STATUS.label[t.status]),1),b("div",me,[t.status===e.PREORDER_STATUS.CREATED?(v(),y(T,{key:0},[b(c,{patent:t},null,8,["patent"]),w("",!0),b("div",null,[b(p,{to:{path:"/order/confirm",query:{commodityId:t.productId}}},{default:X((()=>[b(u,{type:"primary","customer-class":"mainButton"},{default:X((()=>[ge])),_:1})])),_:2},1032,["to"])]),b(u,{type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t)},{default:X((()=>[ve])),_:2},1032,["onClick"])],64)):w("",!0)])])])))),128))]),b("section",ye,[b(f,{size:"small",total:e.paginationOptions.total,pageSize:e.paginationOptions.pageSize,"onUpdate:pageSize":t[1]||(t[1]=t=>e.paginationOptions.pageSize=t),current:e.paginationOptions.current,"onUpdate:current":t[2]||(t[2]=t=>e.paginationOptions.current=t),"page-size-options":e.paginationOptions.pageSizeOptions,"show-total":e=>`共 ${e} 条`,onChange:e.paginationOptions.change,onShowSizeChange:e.paginationOptions.showSizeChange,"show-size-changer":"","show-quick-jumper":""},null,8,["total","pageSize","current","page-size-options","show-total","onChange","onShowSizeChange"])])])),_:1},8,["spinning"]))])])),_:1})}));J.render=be,J.__scopeId="data-v-f48afdde";const Te=[{title:"全部",key:999},{title:"预留中",key:E.CREATED},{title:"已下单",key:E.ORDER},{title:"已付款",key:E.PAYED},{title:"已取消",key:E.CANCEL}];var he=i({name:"Order",components:{UITabs:$,OrderTabPane:J,UIInputSearch:W},setup(){const e=r(),t=s(),a=l(e.query.status);return{PREORDER_STATUS:E,activeKey:a,orderMap:Te,changeTab:e=>{t.push({path:"/user/preorder",query:{status:999===e?void 0:e}})}}}});const xe=C("data-v-f83f3c9e");f("data-v-f83f3c9e");const ke={class:"order"};m();const Ce=xe(((e,t,a,o,i,n)=>{const r=g("OrderTabPane"),s=g("UITabs");return v(),y("div",ke,[b(s,{animated:!1,activeKey:e.activeKey,onChange:e.changeTab},{default:xe((()=>[(v(!0),y(T,null,h(e.orderMap,(e=>(v(),y(r,{key:e.key,status:e.key},{tab:xe((()=>[b("b",null,k(e.title),1)])),_:2},1032,["status"])))),128))])),_:1},8,["activeKey","onChange"])])}));he.render=Ce,he.__scopeId="data-v-f83f3c9e";export default he;
