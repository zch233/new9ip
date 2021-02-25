var t=Object.assign,e=(t,e,a)=>new Promise(((s,l)=>{var n=t=>{try{r(a.next(t))}catch(e){l(e)}},i=t=>{try{r(a.throw(t))}catch(e){l(e)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(n,i);r((a=a.apply(t,e)).next())}));import{d as a,_ as s,ay as l,az as n,aA as i,aB as r,aC as o,p as c,f as u,h as p,i as d,j as m,F as v,l as y,k as T,n as f,m as g,t as S,q as b,aD as h,x as _,u as I,a as k,r as P,$ as C,aE as B,o as L,b as E,c as A,aF as F,e as U,g as w}from"./index.99b5cbf9.js";import{_ as x}from"./UITag.1c079494.js";import{_ as N}from"./UIButton.42a08439.js";import{_ as j}from"./UIPagination.8fe2f77d.js";import{_ as Q}from"./UISpin.70eb9646.js";import{_ as H}from"./UIEmpty.576f2f7e.js";import{_ as M}from"./UITooltip.360ff998.js";import{g as O,e as K,a as R}from"./patent.6d899c9d.js";import{_ as q}from"./index.3b606668.js";import{_ as z}from"./index.1e6aafef.js";import{_ as G}from"./index.047e017d.js";import{_ as $}from"./index.d42588f1.js";import{_ as Y}from"./index.22d001e9.js";import"./vendor.5c0531cb.js";import"./SearchOutlined.0ae6286c.js";import"./omit.91661634.js";import"./toString.1fbe2590.js";import"./isSymbol.12392a00.js";import"./identity.631c0a23.js";import"./_baseSlice.87986fb0.js";import"./CheckOutlined.4985bb8b.js";import"./LeftOutlined.b4237e31.js";import"./debounce.9901331d.js";import"./toNumber.0273d1f5.js";import"./collect.3d37bc5c.js";import"./UIModal.c821572f.js";import"./UICountdown.1d7a8be8.js";import"./_baseProperty.53aacf4d.js";var V=a({name:"ImageList",components:{UITag:x,Icon:s,UIButton:N,VIPBrand:G,StarIcon:q,PreorderButton:z,PatentImage:$,PrePatentCountdown:Y},props:{patents:{type:Object,default:()=>[]},startIndex:Number},setup:()=>({PATENT_TYPE:l,PATENT_CERT_STATUS:n,PATENT_ORIGIN_STATUS:i,PATENT_STOCK_STATUS:r,notActivePatent:o})});const W=b("data-v-078313cc");c("data-v-078313cc");const D={key:0,class:"patentListBar-list-item"},J={class:"patentListBar-list-item-content"},Z={class:"patentListBar-list-item-content-firstFloor"},X={class:"patentListBar-list-item-content-firstFloor-info"},tt={key:0},et={class:"patentListBar-list-item-content-secondFloor"},at={class:"patentListBar-list-item-content-secondFloor-des"},st=g("专利号："),lt={class:"patentListBar-list-item-content-secondFloor-des-tags"},nt=g("领域："),it={class:"patentListBar-list-item-content-secondFloor-des"},rt={class:"patentListBar-list-item-content-thirdFloor"},ot={class:"patentListBar-list-item-content-thirdFloor-status"},ct={class:"patentListBar-list-item-content-thirdFloor-price"},ut=g("零售价："),pt={class:"vipPrice"},dt=g("￥"),mt=g("立即购买");u();const vt=W(((t,e,a,s,l,n)=>{const i=p("PatentImage"),r=p("PrePatentCountdown"),o=p("StarIcon"),c=p("RouterLink"),u=p("VIPBrand"),b=p("UIButton"),h=p("PreorderButton");return d(),m("ul",{class:"patentListBar-list",style:{paddingTop:145*t.startIndex+"px"}},[(d(!0),m(v,null,y(t.patents,((e,a)=>(d(),m(v,{key:e.number},[a>=t.startIndex&&a<=t.startIndex+30?(d(),m("li",D,[T("a",{target:"_blank",href:`/patent/${e.number}`},[T("div",{class:["patentListBar-list-item-image patentLabel",e.newest?"new":e.hot?"hot":e.price<2e3?"sale":e.price>2e3?"rare":""]},[T(i,{cover:e.categoryCover},null,8,["cover"])],2)],8,["href"]),T("div",J,[T("div",Z,[T("a",{target:"_blank",href:`/patent/${e.number}`},[T("b",{class:"patentListBar-list-item-content-firstFloor-title searchKeyword",innerHTML:e.nameHighlightKey||e.name},null,8,["innerHTML"])],8,["href"]),T("p",X,[e.stockStatus===t.PATENT_STOCK_STATUS.RESERVING?(d(),m("label",tt,[T(r,{patent:e},null,8,["patent"])])):f("v-if",!0),T(o,{patent:e},null,8,["patent"])])]),T("div",et,[T("p",at,[T("label",null,[st,T("span",{class:"searchKeyword",innerHTML:e.numberHighlightKey||e.number},null,8,["innerHTML"])]),T("label",lt,[nt,(d(!0),m(v,null,y((e.tagsHighlightKey||e.tags).split(","),((t,a)=>{var s;return d(),m("span",{class:"searchKeyword",key:t},[T(c,{to:`/patent?word=${encodeURIComponent(null==(s=e.tags)?void 0:s.split(",")[a])}`,innerHTML:t},null,8,["to","innerHTML"]),g(S(a===(e.tagsHighlightKey||e.tags).split(",").length-1?"":"，"),1)])})),128))]),T("label",null,"发明人："+S(e.inventorExplain),1)]),T("p",it,[T("label",null,"专利类型："+S(t.PATENT_TYPE.label[e.type]),1),T("label",null,"法律状态："+S(e.legalStatus),1)])]),T("div",rt,[T("div",ot,[T("span",{class:["patentListBar-list-item-content-thirdFloor-status-tag",e.certStatus===t.PATENT_CERT_STATUS.YIZHENG?"success":e.certStatus===t.PATENT_CERT_STATUS.WEIZHENG?"primary":"disabled"]},S(t.PATENT_CERT_STATUS.label[e.certStatus]),3),T("span",{class:["patentListBar-list-item-content-thirdFloor-status-tag",e.stockStatus===t.PATENT_STOCK_STATUS.CAN_SELL?"success":e.stockStatus===t.PATENT_STOCK_STATUS.PRE_SELL?"primary":"disabled"]},S(t.PATENT_STOCK_STATUS.label[e.stockStatus]),3)]),T("div",ct,[T("label",null,[ut,T("b",null,"￥"+S(e.price),1)]),T(u,{class:"vipBrand"}),T("b",pt,[dt,T("em",null,S(e.vipPrice),1)]),T(c,{class:"buyButton",to:{path:"/order/confirm",query:{commodityId:e.id}}},{default:W((()=>[T(b,{disabled:t.notActivePatent(e.stockStatus),type:"primary","customer-class":"dangerButton"},{default:W((()=>[mt])),_:2},1032,["disabled"])])),_:2},1032,["to"]),T(h,{buttonClass:"preorderButton_imageMode",disabled:e.price<2e4||t.notActivePatent(e.stockStatus),patent:e},null,8,["disabled","patent"])])])])])):f("v-if",!0)],64)))),128))],4)}));V.render=vt,V.__scopeId="data-v-078313cc";var yt=a({name:"TableList",components:{UITag:x,Icon:s,UIButton:N,VIPBrand:G,StarIcon:q,PreorderButton:z,PatentImage:$,PrePatentCountdown:Y},props:{patents:{type:Object,default:()=>[]},startIndex:Number},setup:()=>({PATENT_STOCK_STATUS:r,notActivePatent:o})});const Tt=b("data-v-4524833f");c("data-v-4524833f");const ft=h('<section class="patentList-title" data-v-4524833f><span class="col-order" data-v-4524833f>序号</span><span class="col-name" data-v-4524833f>专利名称</span><span class="col-number" data-v-4524833f>专利号</span><span class="col-legalStatus" data-v-4524833f>法律状态</span><span class="col-tag" data-v-4524833f>领域</span><span class="col-inventorExplain" data-v-4524833f>发明人</span><span class="col-status" data-v-4524833f>状态</span><span class="col-price" data-v-4524833f>零售价</span><span class="col-vipPrice" data-v-4524833f>VIP价</span><span class="col-options" data-v-4524833f>操作</span></section>',1),gt={key:0,class:"patentList-content-item"},St={class:"col-order"},bt={class:"col-name searchKeyword"},ht={class:"col-legalStatus"},_t={class:"col-tag"},It={class:"col-inventorExplain"},kt={class:"col-status"},Pt={class:"col-price"},Ct={class:"col-vipPrice"},Bt={class:"col-options"},Lt=g("立即购买"),Et={key:1,class:"preStatus"};u();const At=Tt(((t,e,a,s,l,n)=>{const i=p("RouterLink"),r=p("UIButton"),o=p("PreorderButton"),c=p("PrePatentCountdown"),u=p("StarIcon");return d(),m(v,null,[ft,T("section",{class:"patentList-content",style:{paddingTop:45*t.startIndex+"px"}},[(d(!0),m(v,null,y(t.patents,((e,a)=>(d(),m(v,{key:e.number},[a>=t.startIndex&&a<=t.startIndex+30?(d(),m("div",gt,[T("span",St,S(a+1),1),T("label",bt,[T("a",{class:["patentLabel",e.newest?"new":e.hot?"hot":e.price<2e3?"sale":e.price>2e3?"rare":""],href:`/patent/${e.number}`,target:"_blank"},[T("b",{innerHTML:e.nameHighlightKey||e.name},null,8,["innerHTML"])],10,["href"])]),T("span",{class:"col-number searchKeyword",innerHTML:e.numberHighlightKey||e.number},null,8,["innerHTML"]),T("span",ht,S(e.legalStatus),1),T("span",_t,[(d(!0),m(v,null,y((e.tagsHighlightKey||e.tags).split(","),((t,a)=>{var s;return d(),m("span",{class:"searchKeyword",key:t},[T(i,{to:`/patent?word=${encodeURIComponent(null==(s=e.tags)?void 0:s.split(",")[a])}`,innerHTML:t},null,8,["to","innerHTML"]),g(S(a===(e.tagsHighlightKey||e.tags).split(",").length-1?"":","),1)])})),128))]),T("span",It,S(e.inventorExplain),1),T("span",kt,S(t.PATENT_STOCK_STATUS.label[e.stockStatus]),1),T("span",Pt,"￥"+S(e.price),1),T("span",Ct,"￥"+S(e.vipPrice),1),T("div",Bt,[T(i,{class:"buyButton",to:{path:"/order/confirm",query:{commodityId:e.id}}},{default:Tt((()=>[T(r,{size:"small",disabled:t.notActivePatent(e.stockStatus),type:"primary","customer-class":"dangerButton"},{default:Tt((()=>[Lt])),_:2},1032,["disabled"])])),_:2},1032,["to"]),t.notActivePatent(e.stockStatus)?f("v-if",!0):(d(),m(o,{key:0,buttonClass:"preorderButton_noGap",size:"small",disabled:e.price<2e4,patent:e},null,8,["disabled","patent"])),e.stockStatus===t.PATENT_STOCK_STATUS.RESERVING?(d(),m("div",Et,[T(c,{patent:e},null,8,["patent"])])):f("v-if",!0),T(u,{class:"starIcon_noGap",patent:e},null,8,["patent"])])])):f("v-if",!0)],64)))),128))],4)],64)}));yt.render=At,yt.__scopeId="data-v-4524833f";var Ft=a({name:"Patent",components:{UITag:x,Icon:s,UIButton:N,UIPagination:j,UISpin:Q,UIEmpty:H,UITooltip:M,ImageList:V,TableList:yt},setup(){const a=_(),s=I(),r=k(),c=P(null),u=P(0),p=P(!1),d=P(!1),m=P("imageList"),v=P(s.query),y=P([]),T=C({total:0,current:1,pageSize:30,totalPages:0}),f=P([]),g=P({visible:!0,text:"收起筛选",icon:"top"}),S=(a,s)=>e(this,null,(function*(){if(p.value)return;p.value=!0,s&&(T.current=1);const{data:e}=yield O(t({size:T.pageSize,no:T.current,psort:0},a)).finally((()=>p.value=!1));s&&(y.value=[]),y.value=y.value.concat((null==e?void 0:e.list)||[]),T.total=null==e?void 0:e.totalCount,T.current=(null==e?void 0:e.no)+1,T.pageSize=null==e?void 0:e.size,T.totalPages=e.totalPages})),b=()=>e(this,null,(function*(){const{data:t}=yield R();f.value=t||[]})),h=()=>{const t=w(),e=window.innerHeight||Math.min(document.documentElement.clientHeight,document.body.clientHeight),a=c.value.offsetTop,s="tableList"===m.value?45:145,l=y.value.length*s,n=4*s,i=a+n;if(u.value=t>i?parseInt((t-i)/s):0,l+a-n<e+t){if(T.current>T.totalPages)return;S(v.value)}},x=()=>e(this,null,(function*(){d.value=!0,yield S(v.value).finally((()=>d.value=!1)),v.value.listMode&&(m.value=v.value.listMode),window.addEventListener("scroll",h),yield b()}));return B((t=>e(this,null,(function*(){d.value=!0,v.value=t.query,t.query.listMode&&(m.value=t.query.listMode),yield S(t.query,!0).finally((()=>d.value=!1))})))),L((()=>x())),E((()=>window.removeEventListener("scroll",h))),{PATENT_TYPE:l,PATENT_CERT_STATUS:n,PATENT_ORIGIN_STATUS:i,patentListBarRef:c,filterControl:g,handleFilterControl:()=>{g.value=g.value.visible?{visible:!1,text:"显示筛选",icon:"down"}:{visible:!0,text:"收起筛选",icon:"top"}},getPatents:S,refreshList:()=>e(this,null,(function*(){d.value=!0,window.scroll(0,0),yield S(v.value,!0).finally((()=>d.value=!1))})),exportPatent:a=>e(this,null,(function*(){const e={all:{size:-1},result:t({size:T.pageSize},v.value)},s=yield K(e[a]),l=new Date;F(s,`${l.getFullYear()}年${l.getMonth()+1}月${l.getDate()}日--第九区专利清单`),U.success("导出成功！")})),paginationOptions:T,patentsTags:f,patents:y,routeQuery:v,loading:p,listLoading:d,router:r,listMode:m,startIndex:u,handleFilterClick:e=>{const{type:a,inventor:s,certStatus:l,word:n}=v.value;r.push({path:"/patent",query:JSON.parse(JSON.stringify(t({word:n,type:a,inventor:s,certStatus:l},e)))})},loginStatus:A((()=>a.getters.loginStatus)),notActivePatent:o}}});const Ut=b("data-v-674b7525");c("data-v-674b7525");const wt={class:"pageWidthWithCenter patent"},xt={class:"userFilterBar"},Nt={class:"userFilterBar-left"},jt={key:0,class:"filterTitle"},Qt={class:"systemFilterBar-list-wrapper"},Ht=T("label",{class:"filterTitle"},"专利类型：",-1),Mt={class:"systemFilterBar-list"},Ot={class:"systemFilterBar-list-wrapper"},Kt=T("label",{class:"filterTitle"},"技术领域：",-1),Rt={class:"systemFilterBar-list"},qt={class:"systemFilterBar-list-wrapper"},zt=T("label",{class:"filterTitle"},"法律状态：",-1),Gt={class:"systemFilterBar-list"},$t={class:"systemFilterBar-list-wrapper"},Yt=T("label",{class:"filterTitle"},"　发明人：",-1),Vt={class:"systemFilterBar-list"},Wt={class:"patentListBar-options"},Dt={class:"patentListBar-options-order"},Jt={class:"patentListBar-options-extra"},Zt=g("导出全部"),Xt=g("导出结果"),te={key:3,class:"listBottom"},ee={key:1,class:"emptyWrapper"};u();const ae=Ut(((e,a,s,l,n,i)=>{const r=p("UITag"),o=p("Icon"),c=p("UIButton"),u=p("UITooltip"),b=p("ImageList"),h=p("TableList"),_=p("UISpin"),I=p("UIEmpty");return d(),m("div",wt,[T("section",xt,[T("div",Nt,[e.routeQuery.type||e.routeQuery.certStatus||e.routeQuery.inventor?(d(),m("label",jt,"已选条件：")):f("v-if",!0),e.routeQuery.type?(d(),m(r,{key:1,class:"filterTag",closable:"",onClose:a[1]||(a[1]=t=>e.handleFilterClick({type:void 0}))},{default:Ut((()=>[g(S(e.PATENT_TYPE.label[e.routeQuery.type]),1)])),_:1})):f("v-if",!0),e.routeQuery.certStatus?(d(),m(r,{key:2,class:"filterTag",closable:"",onClose:a[2]||(a[2]=t=>e.handleFilterClick({certStatus:void 0}))},{default:Ut((()=>[g(S(e.PATENT_CERT_STATUS.label[e.routeQuery.certStatus]),1)])),_:1})):f("v-if",!0),e.routeQuery.inventor?(d(),m(r,{key:3,class:"filterTag",closable:"",onClose:a[3]||(a[3]=t=>e.handleFilterClick({inventor:void 0}))},{default:Ut((()=>[g(S(e.PATENT_ORIGIN_STATUS.label[e.routeQuery.inventor]),1)])),_:1})):f("v-if",!0)]),T("div",{class:"userFilterBar-right",onClick:a[4]||(a[4]=(...t)=>e.handleFilterControl&&e.handleFilterControl(...t))},[g(S(e.filterControl.text)+" ",1),T(o,{icon:e.filterControl.icon},null,8,["icon"])])]),T("section",{class:["systemFilterBar",e.filterControl.visible?"":"hide"]},[T("div",Qt,[Ht,T("ul",Mt,[T("li",{class:["systemFilterBar-list-item",[void 0===e.routeQuery.type&&"active"]],onClick:a[5]||(a[5]=t=>e.handleFilterClick({type:void 0}))},"不限",2),(d(!0),m(v,null,y(e.PATENT_TYPE.label,((t,a)=>(d(),m("li",{key:t,class:["systemFilterBar-list-item",[e.routeQuery.type===a&&"active"]],onClick:t=>e.handleFilterClick({type:a})},S(t),11,["onClick"])))),128))])]),T("div",Ot,[Kt,T("ul",Rt,[T("li",{class:["systemFilterBar-list-item",[void 0===e.routeQuery.word&&"active"]],onClick:a[6]||(a[6]=t=>e.handleFilterClick({word:void 0}))},"不限",2),(d(!0),m(v,null,y(e.patentsTags,(t=>(d(),m("li",{key:t.tag,class:["systemFilterBar-list-item",[e.routeQuery.word===t.tag&&"active"]],onClick:a=>e.handleFilterClick({word:t.tag})},S(t.tag),11,["onClick"])))),128))])]),T("div",qt,[zt,T("ul",Gt,[T("li",{class:["systemFilterBar-list-item",[void 0===e.routeQuery.certStatus&&"active"]],onClick:a[7]||(a[7]=t=>e.handleFilterClick({certStatus:void 0}))},"不限",2),(d(!0),m(v,null,y(e.PATENT_CERT_STATUS.label,((t,a)=>(d(),m("li",{key:t,class:["systemFilterBar-list-item",[e.routeQuery.certStatus===a&&"active"]],onClick:t=>e.handleFilterClick({certStatus:a})},S(t),11,["onClick"])))),128))])]),T("div",$t,[Yt,T("ul",Vt,[T("li",{class:["systemFilterBar-list-item",[void 0===e.routeQuery.inventor&&"active"]],onClick:a[8]||(a[8]=t=>e.handleFilterClick({inventor:void 0}))},"不限",2),(d(!0),m(v,null,y(e.PATENT_ORIGIN_STATUS.label,((t,a)=>(d(),m("li",{key:t,class:["systemFilterBar-list-item",[e.routeQuery.inventor===a&&"active"]],onClick:t=>e.handleFilterClick({inventor:a})},S(t),11,["onClick"])))),128))])])],2),T("section",{ref:"patentListBarRef",class:["patentListBar",!e.loginStatus&&"notSignIn"]},[T("div",Wt,[T("div",Dt,[T("span",{class:[("0"===e.routeQuery.psort||void 0===e.routeQuery.psort)&&"active"],onClick:a[9]||(a[9]=a=>e.router.push({path:"/patent",query:t(t({},e.routeQuery),{psort:0})}))},"综合排序",2),T("span",{class:["1"===e.routeQuery.psort&&"active"],onClick:a[10]||(a[10]=a=>e.router.push({path:"/patent",query:t(t({},e.routeQuery),{psort:1})}))},"发布时间",2)]),T("div",Jt,[e.loginStatus?(d(),m(v,{key:0},[T(c,{onClick:a[11]||(a[11]=t=>e.exportPatent("all")),"customer-class":"default"},{default:Ut((()=>[Zt])),_:1}),T(c,{onClick:a[12]||(a[12]=t=>e.exportPatent("result")),"customer-class":"default"},{default:Ut((()=>[Xt])),_:1})],64)):f("v-if",!0),T(u,{title:"刷新页面"},{default:Ut((()=>[T(o,{onClick:e.refreshList,icon:"refresh"},null,8,["onClick"])])),_:1}),T(u,{title:"切换视图"},{default:Ut((()=>["imageList"===e.listMode?(d(),m(o,{key:0,onClick:a[13]||(a[13]=a=>e.router.push({path:"/patent",query:t(t({},e.routeQuery),{listMode:"tableList"})})),icon:"tableList"})):(d(),m(o,{key:1,onClick:a[14]||(a[14]=a=>e.router.push({path:"/patent",query:t(t({},e.routeQuery),{listMode:"imageList"})})),icon:"imageList"}))])),_:1})])]),T(_,{spinning:e.listLoading},{default:Ut((()=>[e.patents.length>0?(d(),m(v,{key:0},["imageList"===e.listMode?(d(),m(b,{key:0,startIndex:e.startIndex,patents:e.patents},null,8,["startIndex","patents"])):(d(),m(h,{key:1,startIndex:e.startIndex,patents:e.patents},null,8,["startIndex","patents"])),e.paginationOptions.current<=e.paginationOptions.totalPages?(d(),m(_,{key:2,spinning:e.loading},{default:Ut((()=>[T("p",{class:"listBottom",onClick:a[15]||(a[15]=t=>e.getPatents(e.routeQuery))},"点击加载更多")])),_:1},8,["spinning"])):(d(),m("p",te,"-------- 我们是有底线的 --------"))],64)):(d(),m("div",ee,[e.loading?f("v-if",!0):(d(),m(I,{key:0,image:"patent",description:"暂无搜索结果"}))]))])),_:1},8,["spinning"])],2)])}));Ft.render=ae,Ft.__scopeId="data-v-674b7525";export default Ft;
