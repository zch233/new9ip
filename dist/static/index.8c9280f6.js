var e=Object.assign,t=(e,t,a)=>new Promise(((i,n)=>{var o=e=>{try{r(a.next(e))}catch(e){n(e)}},s=e=>{try{r(a.throw(e))}catch(e){n(e)}},r=e=>e.done?i(e.value):Promise.resolve(e.value).then(o,s);r((a=a.apply(e,t)).next())}));let a=document.createElement("style");a.innerHTML=".orderItemCountDown .ant-statistic-content{font-size:14px}.orderTimeRangeSelect[data-v-0689c668]{background-color:#fff;font-size:12px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.orderTimeRangeSelect li[data-v-0689c668]{padding:8px 16px;border-bottom:1px solid #f5f5f5;cursor:pointer}.orderTimeRangeSelect li.active[data-v-0689c668],.orderTimeRangeSelect li[data-v-0689c668]:hover{color:#333}.orderTimeRangeSelect li[data-v-0689c668]:last-child{border-bottom:none}.listWrapper[data-v-0689c668]{padding:10px 20px}.listWrapper .listTitle[data-v-0689c668]{background-color:#e8e8e8;display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;color:#666;font-size:12px;padding:0 20px;border:1px solid #e8e8e8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.listWrapper .listTitle-item[data-v-0689c668]{padding:16px 0;cursor:default}.listWrapper .listTitle-item.colTime[data-v-0689c668]{cursor:pointer}.listWrapper .colTime[data-v-0689c668]{-webkit-box-flex:.9;-webkit-flex:.9;flex:.9}.listWrapper .colInfo[data-v-0689c668]{-webkit-box-flex:2;-webkit-flex:2;flex:2;padding-right:70px;padding-left:20px}.listWrapper .colPrice[data-v-0689c668],.listWrapper .colStatus[data-v-0689c668]{-webkit-box-flex:2;-webkit-flex:2;flex:2}.listWrapper .colOptions[data-v-0689c668]{-webkit-box-flex:1.4;-webkit-flex:1.4;flex:1.4}.listWrapper .listContent-item[data-v-0689c668]{margin-top:10px}.listWrapper .listContent-item-top[data-v-0689c668]{color:#666;font-size:12px;background-color:#f7f7f7;padding:8px 30px;border:1px solid #dedede;border-bottom:none}.listWrapper .listContent-item-top>[data-v-0689c668]{margin-right:2em}.listWrapper .listContent-item-top .time[data-v-0689c668]{color:#333}.listWrapper .listContent-item-content[data-v-0689c668]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:20px;color:#666;border:1px solid #dedede;border-top:none}.listWrapper .listContent-item-content-image[data-v-0689c668]{width:90px}.listWrapper .listContent-item-content-image img[data-v-0689c668]{width:100%}.listWrapper .listContent-item-content-info b[data-v-0689c668]{display:inline-block;height:2.8em}.listWrapper .listContent-item-content-info p[data-v-0689c668]{margin:4px 0 0;color:#999}.listWrapper .listContent-item-content-price>p[data-v-0689c668]{margin-bottom:2px}.listWrapper .listContent-item-content-price label[data-v-0689c668]{color:#999;font-size:12px}.listWrapper .listContent-item-content-price .totalPrice[data-v-0689c668]{color:#ff5858}.listWrapper .listContent-item-content-price .totalPrice b[data-v-0689c668]{font-size:24px}.listWrapper .listContent-item-content-status[data-v-0689c668]{text-align:center}.listWrapper .listContent-item-content-options[data-v-0689c668]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.listWrapper .listContent-item-content-options-optionsWrapper[data-v-0689c668]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:20%}.listWrapper .listContent-item-content-options-optionsWrapper>[data-v-0689c668]{margin:2px 0}.listWrapper .emptyWrapper[data-v-0689c668]{padding:5em 0}",document.head.appendChild(a);import{d as i,s as n,u as o,a as s,r,a1 as l,aG as p,o as c,b8 as d,a9 as m,e as u,ba as g,a8 as b,p as f,f as v,h as y,i as k,j as h,k as T,F as x,l as C,t as w,m as S,n as O,q as I}from"./index.a3107ae1.js";import"./SearchOutlined.592e22ae.js";import{s as U}from"./UIPagination.3eb2a064.js";import"./toString.270a5685.js";import"./identity.f673152e.js";import"./isSymbol.84a3081d.js";import"./omit.82041e75.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.7b94d789.js";import"./CheckOutlined.580acd9d.js";import"./index.2bb3368d.js";import{s as P,a as W}from"./index.3991dce4.js";import"./toNumber.a5b20f7f.js";import"./_baseProperty.5cff5776.js";import{s as z}from"./UICountdown.c5c87626.js";import"./debounce.6467aa6f.js";import"./index.668b85d4.js";import{s as R}from"./UISpin.7815646a.js";import{s as j}from"./UIInputSearch.8d109ab5.js";import{s as _}from"./UIEmpty.cd7d478a.js";import{s as D}from"./UIButton.361e4994.js";import{s as N}from"./index.8e7ce03c.js";import"./UIModal.65203c35.js";import{s as A}from"./index.e3513665.js";import{s as E}from"./UITooltip.e8707adf.js";import{s as q,a as M}from"./UITabPane.aeb5dd6d.js";import{g as $,d as B,c as K}from"./order.a14b517b.js";const L=[{title:"全部",key:"all"},{title:"近三个月订单",key:"threeMonth"},{title:"近一个月订单",key:"oneMonth"},{title:"最近七天订单",key:"week"}],Y={all:[],threeMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]})(),oneMonth:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]})(),week:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]})()},F=e=>JSON.parse(JSON.stringify({dateRange:e,startDate:Y[e][0]&&g(Y[e][0]),endDate:Y[e][1]&&g(Y[e][1])}));var J=i({name:"OrderTabPane",components:{UITabPane:q,UIButton:D,UIDropdown:P,Icon:n,UIPagination:U,UIEmpty:_,UISpin:R,UICountdown:z,PayRoutesPopover:W,PatentImage:N,UITooltip:E},props:{status:Number},setup({status:a}){const i=o(),n=s(),g=r(!1),f=r([]),v=r(i.query),y=r(i.query.dateRange?L.find((e=>e.key===i.query.dateRange)):L[1]),k=l({total:0,current:1,pageSize:10,pageSizeOptions:["10","30","50","100"],showSizeChange:(t,a)=>{window.scrollTo(0,0),n.push({path:"/user/order",query:e(e({},v.value),{size:a,no:1})})},change:t=>{window.scrollTo(0,0),n.push({path:"/user/order",query:e(e({},v.value),{no:t})})}}),h=i=>t(this,null,(function*(){if(g.value||(v.value.status||"999")!==(null==a?void 0:a.toString()))return;g.value=!0;const{data:t}=yield $(e(e(e({size:k.pageSize},F(y.value.key)),i),{status:999===a?void 0:a})).finally((()=>g.value=!1));f.value=(null==t?void 0:t.list)||[],k.total=null==t?void 0:t.totalCount,k.current=null==t?void 0:t.no,k.pageSize=null==t?void 0:t.size}));p((e=>{v.value=e.query,h(e.query)})),c((()=>{h(v.value)}));return{loading:g,paginationOptions:k,orders:f,routeQuery:v,payOrder:(e,a)=>t(this,[e,a],(function*({payRoute:e,tradeType:t},a){const{orderNo:i,tradeNo:o}=a,s=`/order/pay/${"UMS_PAY"===e?"code":"WXPAY"===e?"wechat":"form"}?orderNo=${i}&tradeNo=${o}&type=PATENT&payRoute=${e}&tradeType=${t}`;"UMS_PAY"===e||"WXPAY"===e?yield n.push(s):(A({tradeNo:o,orderNo:i,type:"PATENT",getContainer:"orderTabPane"}),b(s))})),ORDER_STATUS:d,optionOrder:(e,a)=>t(this,null,(function*(){const i={delete:{label:"删除",requestApi:B},cancel:{label:"取消",requestApi:K}},{label:n,requestApi:o}=i[a];m.confirm({centered:!0,class:"warningModal",title:`确定要${n}该订单吗？`,okType:"danger",content:`若${n}订单将无法恢复`,onOk:()=>t(this,null,(function*(){const t=u.loading(`正在${n}订单，请稍候...`,0);yield o(e).finally((()=>t())),u.success(`${n}成功！`),yield h(v.value)}))})})),changeOrderStatus:e=>{f.value.find((t=>t.orderNo===e.orderNo)).status=d.CLOSED,f.value=[...f.value]},changeOrderTimeRange:e=>{y.value=L.find((t=>t.key===e)),n.push({path:"/user/order",query:F(e)})},orderTimeRange:L,currentOrderTimeRange:y}}});const X=I("data-v-0689c668");f("data-v-0689c668");const G={class:"listWrapper"},H={class:"listTitle"},Q={class:"listTitle-item colTime"},V={class:"orderTimeRangeSelect"},Z=T("li",{class:"listTitle-item colInfo"},"订单详情",-1),ee=T("li",{class:"listTitle-item colPrice"},"金额",-1),te=T("li",{class:"listTitle-item colStatus"},"全部状态",-1),ae=T("li",{class:"listTitle-item colOptions"},"操作",-1),ie={key:0,class:"emptyWrapper"},ne=S("去下单"),oe={class:"listContent"},se={class:"listContent-item-top"},re={class:"time"},le={class:"listContent-item-content"},pe={class:"listContent-item-content-image colTime"},ce={class:"listContent-item-content-info colInfo"},de={class:"listContent-item-content-price colPrice"},me=T("label",null,"原价：",-1),ue=T("label",null,"VIP会员：",-1),ge={class:"totalPrice"},be=T("label",null,"应付款：",-1),fe=S("￥"),ve={class:"listContent-item-content-status colStatus"},ye={class:"listContent-item-content-options colOptions"},ke={class:"listContent-item-content-options-optionsWrapper"},he=S("取消订单"),Te=S("删除订单"),xe={class:"paginationBar"};v();const Ce=X(((e,t,a,i,n,o)=>{const s=y("Icon"),r=y("UIDropdown"),l=y("UIButton"),p=y("RouterLink"),c=y("UIEmpty"),d=y("PatentImage"),m=y("UICountdown"),u=y("PayRoutesPopover"),g=y("UITooltip"),b=y("UIPagination"),f=y("UISpin"),v=y("UITabPane");return k(),h(v,{id:"orderTabPane"},{default:X((()=>[T("div",G,[T("ul",H,[T("li",Q,[T(r,null,{overlay:X((()=>[T("ul",V,[(k(!0),h(x,null,C(e.orderTimeRange,(t=>(k(),h("li",{class:[e.currentOrderTimeRange.key===t.key&&"active"],key:t.key,onClick:a=>e.changeOrderTimeRange(t.key)},w(t.title),11,["onClick"])))),128))])])),default:X((()=>[T("span",null,[S(w(e.currentOrderTimeRange.title)+" ",1),T(s,{icon:"down"})])])),_:1})]),Z,ee,te,ae]),0===e.orders.length?(k(),h("div",ie,[e.loading?O("",!0):(k(),h(c,{key:0,image:"order",description:"暂无相关订单"},{default:X((()=>[T(p,{to:"/patent"},{default:X((()=>[T(l,{"customer-class":"mainButton",type:"primary"},{default:X((()=>[ne])),_:1})])),_:1})])),_:1}))])):(k(),h(f,{key:1,spinning:e.loading},{default:X((()=>[T("ul",oe,[(k(!0),h(x,null,C(e.orders,(t=>(k(),h("li",{class:"listContent-item colTime",key:t.orderNo},[T("div",se,[T("time",re,w(t.createTime),1),T("span",null,"订单号："+w(t.orderNo),1),T("span",null,"卖家："+w(t.sellerShopName),1)]),T("div",le,[T("div",pe,[T(d,{cover:t.commodityCover},null,8,["cover"])]),T("div",ce,[T(p,{to:`/patent/${t.commodityNumber}`},{default:X((()=>[T("b",null,w(t.commodityName),1)])),_:2},1032,["to"]),T("p",null,"专利号："+w(t.commodityNumber),1)]),T("div",de,[T("p",null,[me,S("￥"+w(t.commodityPrice),1)]),(k(!0),h(x,null,C(t.discounts||[],(e=>(k(),h("p",{key:e.price},[ue,S("-￥"+w(e.price),1)])))),128)),T("p",ge,[be,fe,T("b",null,w(t.totalAmount),1)])]),T("div",ve,w(e.ORDER_STATUS.label[t.status]),1),T("div",ye,[T("div",ke,[t.status===e.ORDER_STATUS.CREATED?(k(),h(x,{key:0},[T(m,{class:"orderItemCountDown",onFinish:a=>e.changeOrderStatus(t),value:t.expireTime,format:"剩余m分s秒"},null,8,["onFinish","value"]),T("div",null,[T(u,{onChoose:a=>e.payOrder(a,t)},null,8,["onChoose"])]),T(l,{type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t,"cancel")},{default:X((()=>[he])),_:2},1032,["onClick"])],64)):(k(),h(l,{key:1,type:"link",size:"small","customer-class":"linkButton",onClick:a=>e.optionOrder(t,"delete")},{default:X((()=>[Te])),_:2},1032,["onClick"]))]),T(g,{title:t.remark},{default:X((()=>[t.remark?(k(),h(s,{key:0,icon:"remark"})):O("",!0)])),_:2},1032,["title"])])])])))),128))]),T("section",xe,[T(b,{size:"small",total:e.paginationOptions.total,pageSize:e.paginationOptions.pageSize,"onUpdate:pageSize":t[1]||(t[1]=t=>e.paginationOptions.pageSize=t),current:e.paginationOptions.current,"onUpdate:current":t[2]||(t[2]=t=>e.paginationOptions.current=t),"page-size-options":e.paginationOptions.pageSizeOptions,"show-total":e=>`共 ${e} 条`,onChange:e.paginationOptions.change,onShowSizeChange:e.paginationOptions.showSizeChange,"show-size-changer":"","show-quick-jumper":""},null,8,["total","pageSize","current","page-size-options","show-total","onChange","onShowSizeChange"])])])),_:1},8,["spinning"]))])])),_:1})}));J.render=Ce,J.__scopeId="data-v-0689c668";const we=[{title:"全部订单",key:999},{title:"待付款",key:d.CREATED},{title:"已付款",key:d.PAYED},{title:"已关闭",key:d.CLOSED}];var Se=i({name:"Order",components:{UITabs:M,OrderTabPane:J,UIInputSearch:j},setup(){const e=o(),t=s(),a=r(Number(e.query.status||999));return{changeTab:e=>{t.push({path:"/user/order",query:{status:999===e?void 0:e}})},ORDER_STATUS:d,activeKey:a,orderMap:we}}});const Oe=I("data-v-70d7fb7b");f("data-v-70d7fb7b");const Ie={class:"order"};v();const Ue=Oe(((e,t,a,i,n,o)=>{const s=y("OrderTabPane"),r=y("UITabs");return k(),h("div",Ie,[T(r,{animated:!1,activeKey:e.activeKey,"onUpdate:activeKey":t[1]||(t[1]=t=>e.activeKey=t),onChange:e.changeTab},{default:Oe((()=>[(k(!0),h(x,null,C(e.orderMap,(e=>(k(),h(s,{key:e.key,status:e.key},{tab:Oe((()=>[T("b",null,w(e.title),1)])),_:2},1032,["status"])))),128))])),_:1},8,["activeKey","onChange"])])}));Se.render=Ue,Se.__scopeId="data-v-70d7fb7b";export default Se;