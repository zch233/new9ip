var e=(e,t,a)=>new Promise(((s,n)=>{var o=e=>{try{r(a.next(e))}catch(t){n(t)}},l=e=>{try{r(a.throw(e))}catch(t){n(t)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,l);r((a=a.apply(e,t)).next())}));import{d as t,_ as a,r as s,am as n,w as o,e as l,p as r,f as i,h as c,i as u,j as d,m as p,k as v,n as m,x as f,a as b,u as P,c as y,a7 as h,t as I,F as _,q as C}from"./index.8ac37e48.js";import{s as g}from"./collect.f2a54fea.js";import{_ as k}from"./UIButton.41061aff.js";import{_ as w}from"./UIModal.9b9104e2.js";import{p as x}from"./patent.308606c1.js";var B=t({name:"starIcon",components:{Icon:a},props:{complex:Boolean,patent:{type:Object,default:()=>({})}},setup(t,a){const r=s(!1),{patent:i}=n(t),c=s(!1);return o((()=>{c.value=i.value.collected})),{patent:i,collected:c,optionPatent:()=>e(this,null,(function*(){r.value||(r.value=!0,yield g(i.value.id).finally((()=>r.value=!1)),l.success(c.value?"已从我的收藏移除":"已加入我的收藏"),c.value=!c.value,a.emit("star",c.value))}))}}});const j=m("data-v-661df504");r("data-v-661df504");const M={key:0};i();const U=j(((e,t,a,s,n,o)=>{const l=c("Icon");return u(),d("div",{class:"starIcon",onClick:t[1]||(t[1]=(...t)=>e.optionPatent&&e.optionPatent(...t))},[e.complex?(u(),d("label",M,"收藏")):p("",!0),v(l,{icon:"star"+(e.collected?"_fill":"")},null,8,["icon"])])}));B.render=U,B.__scopeId="data-v-661df504";var O=t({name:"PreorderButton",components:{UIButton:k,UIModal:w,Icon:a},props:{patent:{type:Object,default:()=>({})},big:Boolean,disabled:Boolean,size:String,buttonClass:String},setup(t){const a=f(),n=b(),o=P(),r=s(!1);return{userPoints:y((()=>a.getters.userPoints)),oneDayConsumePoints:y((()=>a.getters.oneDayConsumePoints)),preorderPatent:()=>e(this,null,(function*(){yield x({days:1,productId:t.patent.id}).finally((()=>r.value=!1)),l.success("预留成功"),yield n.push("/user/preorder"),a.commit("COMMIT_consumePointsByPreorder")})),visible:r,showModal:()=>{if(!a.state.user.account)return l.error("您尚未登录"),void n.push({path:"/auth/sign_in",query:{redirect:o.fullPath}});a.state.oneDayConsumePoints>a.state.userPoints?h.confirm({title:"积分不足",content:"抱歉，您的剩余积分不足",okText:"立即充值",cancelText:"继续逛逛",onOk(){n.push("/user/orderPoints")}}):r.value=!0}}}});const z=m("data-v-0c1d861e");r("data-v-0c1d861e");const D=C("预留"),T={class:"wrapper"},q=C("将消耗 "),S=C(" 个积分，是否继续？"),F=C("当前剩余："),A=C(" 积分");i();const E=z(((e,t,a,s,n,o)=>{const l=c("UIButton"),r=c("Icon"),i=c("UIModal");return u(),d(_,null,[v(l,{size:e.size,class:["preorderButton",[e.big&&"big",e.buttonClass]],disabled:e.disabled,"customer-class":"default",onClick:e.showModal},{default:z((()=>[D])),_:1},8,["size","class","disabled","onClick"]),v(i,{width:416,visible:e.visible,"onUpdate:visible":t[1]||(t[1]=t=>e.visible=t),maskClosable:!1,title:"预留专利",onOk:e.preorderPatent},{default:z((()=>[v("div",T,[v(r,{class:"warning",icon:"warning"}),v("div",null,[v("p",null,[v("b",null,"预留专利："+I(e.patent.name),1)]),v("p",null,[q,v("b",null,I(e.oneDayConsumePoints),1),S]),v("span",null,[F,v("b",null,I(e.userPoints),1),A])])])])),_:1},8,["visible","onOk"])],64)}));O.render=E,O.__scopeId="data-v-0c1d861e";export{B as _,O as a};
