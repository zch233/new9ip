var e=(e,t,s)=>new Promise(((a,n)=>{var o=e=>{try{r(s.next(e))}catch(t){n(t)}},l=e=>{try{r(s.throw(e))}catch(t){n(t)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,l);r((s=s.apply(e,t)).next())}));import{d as t,_ as s,r as a,am as n,w as o,e as l,p as r,f as i,h as c,i as u,j as d,m as p,k as v,n as m,x as b,a as f,u as P,c as y,a7 as h,t as I,F as _,q as C}from"./index.8208952b.js";import{s as g}from"./collect.2984254a.js";import{_ as k}from"./UIButton.62cd0611.js";import{_ as w}from"./UIModal.87dcfd99.js";import{p as x}from"./patent.774b302a.js";var B=t({name:"starIcon",components:{Icon:s},props:{complex:Boolean,patent:{type:Object,default:()=>({})}},setup(t,s){const r=a(!1),{patent:i}=n(t),c=a(!1);return o((()=>{c.value=i.value.collected})),{patent:i,collected:c,optionPatent:()=>e(this,null,(function*(){r.value||(r.value=!0,yield g(i.value.id).finally((()=>r.value=!1)),l.success(c.value?"已从我的收藏移除":"已加入我的收藏"),c.value=!c.value,s.emit("star",c.value))}))}}});const j=m("data-v-661df504");r("data-v-661df504");const M={key:0};i();const U=j(((e,t,s,a,n,o)=>{const l=c("Icon");return u(),d("div",{class:"starIcon",onClick:t[1]||(t[1]=(...t)=>e.optionPatent&&e.optionPatent(...t))},[e.complex?(u(),d("label",M,"收藏")):p("",!0),v(l,{icon:"star"+(e.collected?"_fill":"")},null,8,["icon"])])}));B.render=U,B.__scopeId="data-v-661df504";var O=t({name:"PreorderButton",components:{UIButton:k,UIModal:w,Icon:s},props:{patent:{type:Object,default:()=>({})},big:Boolean,disabled:Boolean,size:String,buttonClass:String},setup(t){const s=b(),n=f(),o=P(),r=a(!1);return{userPoints:y((()=>s.getters.userPoints)),oneDayConsumePoints:y((()=>s.getters.oneDayConsumePoints)),preorderPatent:()=>e(this,null,(function*(){yield x({days:1,productId:t.patent.id}).finally((()=>r.value=!1)),l.success("预留成功"),yield n.push("/user/preorder"),s.commit("COMMIT_consumePointsByPreorder")})),visible:r,showModal:()=>{if(!s.state.user.account)return l.error("您尚未登录"),void n.push({path:"/auth/sign_in",query:{redirect:o.fullPath}});s.state.oneDayConsumePoints>s.state.userPoints?h.confirm({title:"积分不足",content:"抱歉，您的剩余积分不足",okText:"立即充值",cancelText:"继续逛逛",onOk(){n.push("/user/orderPoints")}}):r.value=!0}}}});const z=m("data-v-0c1d861e");r("data-v-0c1d861e");const D=C("预留"),T={class:"wrapper"},q=C("将消耗 "),S=C(" 个积分，是否继续？"),F=C("当前剩余："),A=C(" 积分");i();const E=z(((e,t,s,a,n,o)=>{const l=c("UIButton"),r=c("Icon"),i=c("UIModal");return u(),d(_,null,[v(l,{size:e.size,class:["preorderButton",[e.big&&"big",e.buttonClass]],disabled:e.disabled,"customer-class":"default",onClick:e.showModal},{default:z((()=>[D])),_:1},8,["size","class","disabled","onClick"]),v(i,{width:416,visible:e.visible,"onUpdate:visible":t[1]||(t[1]=t=>e.visible=t),maskClosable:!1,title:"预留专利",onOk:e.preorderPatent},{default:z((()=>[v("div",T,[v(r,{class:"warning",icon:"warning"}),v("div",null,[v("p",null,[v("b",null,"预留专利："+I(e.patent.name),1)]),v("p",null,[q,v("b",null,I(e.oneDayConsumePoints),1),S]),v("span",null,[F,v("b",null,I(e.userPoints),1),A])])])])),_:1},8,["visible","onOk"])],64)}));O.render=E,O.__scopeId="data-v-0c1d861e";export{B as _,O as a};
