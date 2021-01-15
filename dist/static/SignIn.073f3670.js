import{d as a,s as e,u as s,a as n,v as t,r as o,$ as i,e as r,p as d,f as c,g as p,h as l,i as u,j as m,aW as I,m as f,n as h}from"./index.603913dd.js";import"./index.2a5bb8c2.js";import"./SearchOutlined.ef47ae1c.js";import"./CloseOutlined.111684e9.js";import"./raf.8a2adf49.js";import"./toString.9cbc0960.js";import"./identity.6f82208f.js";import"./isSymbol.42f2d019.js";import"./omit.01f1aa30.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.d5d87ae0.js";import"./index.a24ee42c.js";import"./wave.7f62fc22.js";import"./index.0befdd09.js";import{g as v}from"./index.057e1197.js";import"./toNumber.1f774113.js";import"./_baseProperty.657ef36c.js";import{s as g,a as b}from"./UIFormItem.67a3b9ca.js";import{s as y,u as j}from"./index.d8d02dc6.js";import"./UICountdown.1cb46ea1.js";import"./debounce.6b815f20.js";import"./index.edb99d48.js";import"./Col.388e4146.js";import"./dict.c2403ec5.js";import{s as U}from"./UIInput.db880242.js";import{s as w}from"./UIButton.31b21a7a.js";import{a as _,s as x}from"./UITabPane.8480fdd3.js";import{s as P}from"./signIn.defaccc4.js";var C=a({name:"AuthSignIn",components:{UITabs:_,UITabPane:x,UIInput:U,Icon:e,UIButton:w,UIForm:g,UIFormItem:b,Captcha:y},setup(){const a=s(),e=n(),d=t(),c=o("signInWithPassword"),p=i({phone:"",password:"",captcha:""}),l=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!1,message:""},{len:6,message:""}]}),{validate:u,validateInfos:m}=j(p,l),I=o(!1);return{activeTabKey:c,submitLoading:I,changeTag:a=>{l.captcha[0].required="signInWithCaptcha"===a,l.password[0].required="signInWithPassword"===a},signIn:()=>{u().then((()=>{return s=this,n=null,t=function*(){I.value=!0,yield P[c.value](p).finally((()=>I.value=!1));const s=yield d.dispatch("setUser");yield d.dispatch("setOneDayConsumePoints"),yield d.dispatch("setUserPoints"),yield e.push(v(a.query.redirect)||"/"),r.success(`欢迎回来，${s.nickname}`)},new Promise(((a,e)=>{var o=a=>{try{r(t.next(a))}catch(a){e(a)}},i=a=>{try{r(t.throw(a))}catch(a){e(a)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,i);r((t=t.apply(s,n)).next())}));var s,n,t}),(()=>r.error("表单输入有误")))},signInInfo:p,validateInfos:m}}});const B=f("data-v-5cab7922");d("data-v-5cab7922");const k={class:"signIn"},K=m("b",null,"帐号密码登录",-1),T={class:"shrinkBar accountBar"},q={class:"passwordBar"},S=m("b",null,"手机动态登录",-1),W={class:"shrinkBar accountBar"},F={class:"captchaBar"},L={class:"buttonBar"},O=h("登录"),A={class:"infoBar"},$=h("还没有帐号，"),D=h("立即注册"),N=h("忘记密码");c();const R=B(((a,e,s,n,t,o)=>{const i=p("Icon"),r=p("UIInput"),d=p("UIFormItem"),c=p("UITabPane"),f=p("Captcha"),h=p("UITabs"),v=p("UIButton"),g=p("RouterLink"),b=p("UIForm");return l(),u("div",k,[m(b,{layout:"vertical"},{default:B((()=>[m(h,{animated:!1,activeKey:a.activeTabKey,"onUpdate:activeKey":e[5]||(e[5]=e=>a.activeTabKey=e),onChange:a.changeTag},{default:B((()=>[m(c,{key:"signInWithPassword"},{tab:B((()=>[K])),default:B((()=>[m(d,a.validateInfos.phone,{default:B((()=>[m("div",T,[m(r,{value:a.signInInfo.phone,"onUpdate:value":e[1]||(e[1]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),m(d,a.validateInfos.password,{default:B((()=>[m("div",q,[m(r,{value:a.signInInfo.password,"onUpdate:value":e[2]||(e[2]=e=>a.signInInfo.password=e),type:"password",placeholder:"请输入密码",onKeydown:I(a.signIn,["enter"])},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1}),m(c,{key:"signInWithCaptcha"},{tab:B((()=>[S])),default:B((()=>[m(d,a.validateInfos.phone,{default:B((()=>[m("div",W,[m(r,{value:a.signInInfo.phone,"onUpdate:value":e[3]||(e[3]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),m(d,a.validateInfos.captcha,{default:B((()=>[m("div",F,[m(r,{value:a.signInInfo.captcha,"onUpdate:value":e[4]||(e[4]=e=>a.signInInfo.captcha=e),class:"captcha",placeholder:"验证码",maxlength:6,onKeydown:I(a.signIn,["enter"])},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:B((()=>[m(f,{info:a.signInInfo},null,8,["info"])])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1})])),_:1},8,["activeKey","onChange"]),m("div",L,[m(v,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signIn},{default:B((()=>[O])),_:1},8,["loading","onClick"])]),m("div",A,[m("p",null,[$,m(g,{class:"toSignUp",to:"/auth/sign_up"},{default:B((()=>[D])),_:1})]),m(g,{class:"darkLink",to:"/auth/password"},{default:B((()=>[N])),_:1})])])),_:1})])}));C.render=R,C.__scopeId="data-v-5cab7922";export default C;
