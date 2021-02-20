import{d as e,p as t,f as a,h as l,i as s,j as o,k as n,F as r,l as i,t as c,m as p,q as u,s as d,_ as f,v as h,x as m,u as v,a as g,r as y,c as k,e as I,n as _}from"./index.2b4c3c62.js";import{_ as b}from"./index.1c68a52d.js";var P=e({name:"AppFooter",setup:()=>({footerInfoList:[{title:"服务内容",content:[{label:"专利交易"},{label:"商标交易"},{label:"企业服务"},{label:"专利增值服务"},{label:"商标增值服务"}]},{title:"交易保障",content:[{label:"支付方式",key:"1-0"},{label:"转让资料及流程",key:"1-1"},{label:"服务协议",key:"1-2"},{label:"积分规则",key:"2-0"}]},{title:"常见问题",content:[{label:"专利申请",key:"0-0"},{label:"发明专利",key:"0-1"},{label:"实用新型专利",key:"0-2"},{label:"外观设计专利",key:"0-3"}]}]})});const H=u("data-v-5574eac2");t("data-v-5574eac2");const V={class:"appFooter"},x={class:"pageWidthWithCenter footerList"},q={class:"footerItem-title"},C={class:"footerItem-content"},L={key:1},W=n("li",{class:"footerItem"},[n("p",{class:"footerItem-title"},"微信公众号"),n("img",{src:d,alt:""})],-1);a();const w=H(((e,t,a,u,d,f)=>{const h=l("RouterLink");return s(),o("footer",V,[n("ul",x,[(s(!0),o(r,null,i(e.footerInfoList,(e=>(s(),o("li",{key:e.title,class:"footerItem"},[n("p",q,c(e.title),1),(s(!0),o(r,null,i(e.content,(e=>(s(),o("p",C,[e.key?(s(),o(h,{key:0,to:`/others/helper?aq=${e.key}`},{default:H((()=>[p(c(e.label),1)])),_:2},1032,["to"])):(s(),o("span",L,c(e.label),1))])))),256))])))),128)),W])])}));P.render=w,P.__scopeId="data-v-5574eac2";var S=e({name:"AppHeader",components:{Icon:f,UIPopover:h,VIPBrand:b},setup(){const e=m(),t=v(),a=g(),l=y(!1);return{logout:()=>{return t=this,s=null,o=function*(){l.value||(l.value=!0,yield e.dispatch("logout").finally((()=>l.value=!1)),I.success("退出成功"),yield a.push("/"))},new Promise(((e,a)=>{var l=e=>{try{r(o.next(e))}catch(t){a(t)}},n=e=>{try{r(o.throw(e))}catch(t){a(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,n);r((o=o.apply(t,s)).next())}));var t,s,o},route:t,user:k((()=>e.getters.user)),isVIP:k((()=>e.getters.hasVip)),loginStatus:k((()=>e.getters.loginStatus))}}});const j=u("data-v-58f49dde");t("data-v-58f49dde");const B={class:"appHeader"},F={class:"pageWidthWithCenter appHeaderWrapper"},A={class:"appHeader-left"},R=n("em",null,"最真实的一手知产服务平台",-1),U=p("关注第九区"),$=n("div",{class:"qrcodePopoverContent"},[n("img",{src:d,alt:""}),n("span",null,[n("b",null,"扫描二维码"),n("br"),p(" 关注我们 ")])],-1),z={class:"appHeader-right"},D={class:"appHeader-right-item"},E=p("我的订单"),G={class:"appHeader-right-item"},J=p("客户服务 "),K={class:"orderPopoverContent"},M=p("常见问题"),N=p("支付方式"),O=p("预留规则"),Q={class:"appHeader-right-item"},T=p("会员中心 "),X={class:"vipPopoverContent"},Y=p("我的收藏"),Z=p("会员主页"),ee=p("开通VIP会员"),te=p("登录 / 注册");a();const ae=j(((e,t,a,i,u,d)=>{const f=l("Icon"),h=l("UIPopover"),m=l("RouterLink"),v=l("VIPBrand");return s(),o("header",B,[n("div",F,[n("div",A,[R,n(h,null,{content:j((()=>[$])),default:j((()=>[n("span",null,[n(f,{icon:"scan"}),U])])),_:1})]),n("div",z,[n("span",D,[n(m,{to:"/user/order"},{default:j((()=>[E])),_:1})]),n(h,{placement:"bottom"},{content:j((()=>[n("ul",K,[n("li",null,[n(m,{to:"/others/helper"},{default:j((()=>[M])),_:1})]),n("li",null,[n(m,{to:"/others/helper?aq=1-0"},{default:j((()=>[N])),_:1})]),n("li",null,[n(m,{to:"/others/helper?aq=2-1"},{default:j((()=>[O])),_:1})])])])),default:j((()=>[n("span",G,[J,n(f,{icon:"down"})])])),_:1}),n(h,{placement:"bottom"},{content:j((()=>[n("ul",X,[n("li",null,[n(m,{to:"/user/collect"},{default:j((()=>[Y])),_:1})]),n("li",null,[n(m,{to:"/user/index"},{default:j((()=>[Z])),_:1})]),n("li",null,[n(m,{to:"/vip"},{default:j((()=>[ee])),_:1})])])])),default:j((()=>[n("span",Q,[T,n(f,{icon:"down"})])])),_:1}),e.loginStatus?(s(),o(r,{key:0},[n(m,{to:"/user/index",class:["appHeader-right-item username",[e.isVIP&&"isVIP"]]},{default:j((()=>[e.isVIP?(s(),o(v,{key:0,class:"VIPBrand"})):_("v-if",!0),p(c(e.user.nickname),1)])),_:1},8,["class"]),n("span",{class:"appHeader-right-item logout",onClick:t[1]||(t[1]=(...t)=>e.logout&&e.logout(...t))},"退出")],64)):(s(),o(m,{key:1,to:{path:"/auth/sign_in",query:{redirect:e.route.fullPath}},class:"appHeader-right-item loginSection"},{default:j((()=>[te])),_:1},8,["to"]))])])])}));S.render=ae,S.__scopeId="data-v-58f49dde";export{P as _,S as a};
