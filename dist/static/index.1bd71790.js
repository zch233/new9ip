import{d as e,s as t,r as a,ao as o,ap as n,o as r,b as s,aq as l,ar as i,p as d,f as c,h as u,i as p,j as v,k as m,q as y,as as g,at as b}from"./index.a7520e27.js";import{s as f}from"./UIModal.fc55d33e.js";var C=e({name:"PollGetPayRequestModal",components:{UIModal:f,Icon:t},props:{orderNo:String,tradeNo:String,type:String,visible:Boolean,getContainer:String},emits:["update:visible"],setup(e,t){const d=a(!1),{tradeNo:c,orderNo:u,type:p}=o(e),{clearPollGetPayResult:v,startPollGetPayResult:m}=n();return r((()=>{m({tradeNo:c.value,orderNo:u.value,commodityType:p.value})})),s((()=>{v()})),{loading:d,getContainerFn:()=>e.getContainer?document.getElementById(e.getContainer):document.body,handleOk:()=>{return e=this,a=null,o=function*(){d.value=!0,(yield l(c.value).finally((()=>d.value=!1)))&&(t.emit("update:visible",!1),yield i.push(`/order/pay/result?orderNo=${u.value}&tradeNo=${c.value}&status=1&type=${p.value}`))},new Promise(((t,n)=>{var r=e=>{try{l(o.next(e))}catch(e){n(e)}},s=e=>{try{l(o.throw(e))}catch(e){n(e)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,s);l((o=o.apply(e,a)).next())}));var e,a,o},clearPollGetPayResult:v}}});const P=y("data-v-c1eaf7e2");d("data-v-c1eaf7e2");const N={class:"wrapper"},h=m("div",{class:"description"},[m("h4",{class:"description-title"},"请您在新打开的页面上完成付款！"),m("p",null,"完成付款前请不要关闭此窗口。"),m("p",null,"完成付款后请根据实际情况点击下面的按钮。")],-1);c();const k=P(((e,t,a,o,n,r)=>{const s=u("Icon"),l=u("UIModal");return p(),v(l,{title:"我要付款",visible:e.visible,"onUpdate:visible":t[1]||(t[1]=t=>e.$emit("update:visible",t)),onAfterClose:e.clearPollGetPayResult,maskClosable:!1,onOk:e.handleOk,cancelText:"选择其他方式",okText:"已完成支付",confirmLoading:e.loading,getContainer:e.getContainerFn,okButtonProps:{type:"danger"}},{default:P((()=>[m("div",N,[m(s,{class:"icon",icon:"warning"}),h])])),_:1},8,["visible","onAfterClose","onOk","confirmLoading","getContainer"])}));C.render=k,C.__scopeId="data-v-c1eaf7e2";const I=({orderNo:e,tradeNo:t,type:a,getContainer:o})=>{const n=document.createElement("div");document.body.appendChild(n);const r=g({render:()=>b(C,{visible:!0,"onUpdate:visible":e=>{e||(r.unmount(n),n.remove())},orderNo:e,tradeNo:t,type:a,getContainer:o})});r.mount(n)};export{I as s};