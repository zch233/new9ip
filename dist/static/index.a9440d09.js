var e=(e,a,t)=>new Promise(((s,n)=>{var o=e=>{try{r(t.next(e))}catch(e){n(e)}},l=e=>{try{r(t.throw(e))}catch(e){n(e)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,l);r((t=t.apply(e,a)).next())}));import{d as a,s as t,r as s,af as n,w as o,e as l,p as r,f as i,g as c,h as u,i as d,l as p,j as v,m,v as f,a as b,u as I,c as h,t as y,F as P,n as g}from"./index.b31cac7c.js";import{p as w}from"./patent.08779d4e.js";import{s as B}from"./UIButton.a8b3563e.js";import{s as _}from"./UIModal.26850915.js";import{s as j}from"./collect.33d4afe9.js";var k=a({name:"starIcon",components:{Icon:t},props:{complex:Boolean,patent:{type:Object,default:()=>({})}},setup(a,t){const r=s(!1),{patent:i}=n(a),c=s(!1);return o((()=>{c.value=i.value.collected})),{patent:i,collected:c,optionPatent:()=>e(this,null,(function*(){r.value||(r.value=!0,yield j(i.value.id).finally((()=>r.value=!1)),l.success(c.value?"已从我的收藏移除":"已加入我的收藏"),c.value=!c.value,t.emit("star",c.value))}))}}});const M=m("data-v-32bf95f6");r("data-v-32bf95f6");const U={key:0};i();const x=M(((e,a,t,s,n,o)=>{const l=c("Icon");return u(),d("div",{class:"starIcon",onClick:a[1]||(a[1]=(...a)=>e.optionPatent&&e.optionPatent(...a))},[e.complex?(u(),d("label",U,"收藏")):p("",!0),v(l,{icon:"star"+(e.collected?"_fill":"")},null,8,["icon"])])}));k.render=x,k.__scopeId="data-v-32bf95f6";var C=a({name:"PreorderButton",components:{UIButton:B,UIModal:_,Icon:t},props:{patent:{type:Object,default:()=>({})},big:Boolean,disabled:Boolean,size:String},setup(a){const t=f(),n=b(),o=I(),r=s(!1);return{userPoints:h((()=>t.getters.userPoints)),preorderPatent:()=>e(this,null,(function*(){yield w({days:1,productId:a.patent.id}).finally((()=>r.value=!1)),l.success("预留成功"),yield n.push("/user/preorder"),t.commit("COMMIT_consumePointsByPreorder")})),visible:r,showModal:()=>{if(!t.state.user.account)return l.error("您尚未登录"),void n.push({path:"/auth/sign_in",query:{redirect:o.fullPath}});r.value=!0}}}});const O=m("data-v-64aac5a6");r("data-v-64aac5a6");const z=g("预留"),q={class:"wrapper"},D=g("将消耗 "),F=g(" 个积分，是否继续？"),S=g("当前剩余："),T=g(" 积分");i();const $=O(((e,a,t,s,n,o)=>{const l=c("UIButton"),r=c("Icon"),i=c("UIModal");return u(),d(P,null,[v(l,{size:e.size,class:["preorderButton",e.big&&"big"],disabled:e.disabled,"customer-class":"default",onClick:e.showModal},{default:O((()=>[z])),_:1},8,["size","class","disabled","onClick"]),v(i,{width:416,visible:e.visible,"onUpdate:visible":a[1]||(a[1]=a=>e.visible=a),maskClosable:!1,title:"预留专利",onOk:e.preorderPatent},{default:O((()=>[v("div",q,[v(r,{class:"warning",icon:"warning"}),v("div",null,[v("p",null,[v("b",null,"预留专利："+y(e.patent.name),1)]),v("p",null,[D,v("b",null,y(e.$store.state.oneDayConsumePoints),1),F]),v("span",null,[S,v("b",null,y(e.userPoints),1),T])])])])),_:1},8,["visible","onOk"])],64)}));C.render=$,C.__scopeId="data-v-64aac5a6";export{C as a,k as s};
