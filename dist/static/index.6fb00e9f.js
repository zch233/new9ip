import{d as e,_ as t,r as a,am as o,an as n,o as r,b as l,ao as s,ap as i,p as d,f as c,h as u,i as p,j as v,k as m,q as y,aq as g,ar as b}from"./index.2b4c3c62.js";import{_ as f}from"./UIModal.931b6d77.js";var C=e({name:"PollGetPayRequestModal",components:{UIModal:f,Icon:t},props:{orderNo:String,tradeNo:String,type:String,visible:Boolean,getContainer:String},emits:["update:visible"],setup(e,t){const d=a(!1),{tradeNo:c,orderNo:u,type:p}=o(e),{clearPollGetPayResult:v,startPollGetPayResult:m}=n();return r((()=>{m({tradeNo:c.value,orderNo:u.value,commodityType:p.value})})),l((()=>{v()})),{loading:d,getContainerFn:()=>e.getContainer?document.getElementById(e.getContainer):document.body,handleOk:()=>{return e=this,a=null,o=function*(){d.value=!0,(yield s(c.value).finally((()=>d.value=!1)))&&(t.emit("update:visible",!1),yield i.push(`/order/pay/result?orderNo=${u.value}&tradeNo=${c.value}&status=1&type=${p.value}`))},new Promise(((t,n)=>{var r=e=>{try{s(o.next(e))}catch(t){n(t)}},l=e=>{try{s(o.throw(e))}catch(t){n(t)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,l);s((o=o.apply(e,a)).next())}));var e,a,o},clearPollGetPayResult:v}}});const P=y("data-v-51bf8802");d("data-v-51bf8802");const N={class:"wrapper"},h=m("div",{class:"description"},[m("h4",{class:"description-title"},"请您在新打开的页面上完成付款！"),m("p",null,"完成付款前请不要关闭此窗口。"),m("p",null,"完成付款后请根据实际情况点击下面的按钮。")],-1);c();const k=P(((e,t,a,o,n,r)=>{const l=u("Icon"),s=u("UIModal");return p(),v(s,{title:"我要付款",visible:e.visible,"onUpdate:visible":t[1]||(t[1]=t=>e.$emit("update:visible",t)),onAfterClose:e.clearPollGetPayResult,maskClosable:!1,onOk:e.handleOk,cancelText:"选择其他方式",okText:"已完成支付",confirmLoading:e.loading,getContainer:e.getContainerFn,okButtonProps:{type:"danger"}},{default:P((()=>[m("div",N,[m(l,{class:"icon",icon:"warning"}),h])])),_:1},8,["visible","onAfterClose","onOk","confirmLoading","getContainer"])}));C.render=k,C.__scopeId="data-v-51bf8802";const I=({orderNo:e,tradeNo:t,type:a,getContainer:o})=>{const n=document.createElement("div");document.body.appendChild(n);const r=g({render:()=>b(C,{visible:!0,"onUpdate:visible":e=>{e||(r.unmount(n),n.remove())},orderNo:e,tradeNo:t,type:a,getContainer:o})});r.mount(n)};export{I as s};
