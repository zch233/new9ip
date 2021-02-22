import{_ as e}from"./UIModal.33778fbe.js";import{d as t,_ as a,r as o,au as n,av as r,y as l,z as s,aw as i,ax as d,D as c,F as u,G as p,H as v,J as m,b as y,N as g,ay as b,az as f}from"./index.cd225e74.js";var C=t({name:"PollGetPayRequestModal",components:{UIModal:e,Icon:a},props:{orderNo:String,tradeNo:String,type:String,visible:Boolean,getContainer:String},emits:["update:visible"],setup(e,t){const a=o(!1),{tradeNo:c,orderNo:u,type:p}=n(e),{clearPollGetPayResult:v,startPollGetPayResult:m}=r();return l((()=>{m({tradeNo:c.value,orderNo:u.value,commodityType:p.value})})),s((()=>{v()})),{loading:a,getContainerFn:()=>e.getContainer?document.getElementById(e.getContainer):document.body,handleOk:()=>{return e=this,o=null,n=function*(){a.value=!0,(yield i(c.value).finally((()=>a.value=!1)))&&(t.emit("update:visible",!1),yield d.push(`/order/pay/result?orderNo=${u.value}&tradeNo=${c.value}&status=1&type=${p.value}`))},new Promise(((t,a)=>{var r=e=>{try{s(n.next(e))}catch(t){a(t)}},l=e=>{try{s(n.throw(e))}catch(t){a(t)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,l);s((n=n.apply(e,o)).next())}));var e,o,n},clearPollGetPayResult:v}}});const N=g("data-v-fc951e88");c("data-v-fc951e88");const P={class:"wrapper"},h=y("div",{class:"description"},[y("h4",{class:"description-title"},"请您在新打开的页面上完成付款！"),y("p",null,"完成付款前请不要关闭此窗口。"),y("p",null,"完成付款后请根据实际情况点击下面的按钮。")],-1);u();const k=N(((e,t,a,o,n,r)=>{const l=p("Icon"),s=p("UIModal");return v(),m(s,{title:"我要付款",visible:e.visible,"onUpdate:visible":t[1]||(t[1]=t=>e.$emit("update:visible",t)),onAfterClose:e.clearPollGetPayResult,maskClosable:!1,onOk:e.handleOk,cancelText:"选择其他方式",okText:"已完成支付",confirmLoading:e.loading,getContainer:e.getContainerFn,okButtonProps:{type:"danger"}},{default:N((()=>[y("div",P,[y(l,{class:"icon",icon:"warning"}),h])])),_:1},8,["visible","onAfterClose","onOk","confirmLoading","getContainer"])}));C.render=k,C.__scopeId="data-v-fc951e88";const x=({orderNo:e,tradeNo:t,type:a,getContainer:o})=>{const n=document.createElement("div");document.body.appendChild(n);const r=b({render:()=>f(C,{visible:!0,"onUpdate:visible":e=>{e||(r.unmount(n),n.remove())},orderNo:e,tradeNo:t,type:a,getContainer:o})});r.mount(n)};export{x as s};
