import{d as a,s as e,u as n,a as s,v as t,r as o,$ as i,e as r,p as d,f as c,g as p,h as l,i as u,j as m,aW as I,m as f,n as h}from"./index.06d186fe.js";import"./index.2a5bb8c2.js";import"./SearchOutlined.925bb3e8.js";import"./CloseOutlined.d28c7007.js";import"./raf.8a2adf49.js";import"./toString.8e5aacce.js";import"./identity.302114d6.js";import"./isSymbol.f89a732a.js";import"./omit.aa41f273.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.a090b68b.js";import"./index.afd965b2.js";import"./wave.86ee9275.js";import"./index.c8cdada4.js";import{g as v}from"./index.f106cf09.js";import"./toNumber.a9197752.js";import"./_baseProperty.b5b09fda.js";import{s as g,a as b}from"./UIFormItem.14d9b20c.js";import{s as j,u as y}from"./index.6d65c932.js";import"./UICountdown.037159f0.js";import"./debounce.e0ee2c86.js";import"./index.6bc419fe.js";import"./Col.41d7be0a.js";import"./dict.c2403ec5.js";import{s as U}from"./UIInput.bae08533.js";import{s as w}from"./UIButton.3f87abad.js";import{a as _,s as x}from"./UITabPane.ac3f65b6.js";import{s as C}from"./signIn.57dac3fa.js";var P=a({name:"AuthSignIn",components:{UITabs:_,UITabPane:x,UIInput:U,Icon:e,UIButton:w,UIForm:g,UIFormItem:b,Captcha:j},setup(){const a=n(),e=s(),d=t(),c=o("signInWithPassword"),p=i({phone:"",password:"",captcha:""}),l=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!1,message:""},{len:6,message:""}]}),{validate:u,validateInfos:m}=y(p,l),I=o(!1);return{activeTabKey:c,submitLoading:I,changeTag:a=>{l.captcha[0].required="signInWithCaptcha"===a,l.password[0].required="signInWithPassword"===a},signIn:()=>{u().then((()=>{return n=this,s=null,t=function*(){I.value=!0,yield C[c.value](p).finally((()=>I.value=!1));const n=yield d.dispatch("setUser");yield d.dispatch("setOneDayConsumePoints"),yield e.push(v(a.query.redirect)||"/"),r.success(`欢迎回来，${n.nickname}`)},new Promise(((a,e)=>{var o=a=>{try{r(t.next(a))}catch(a){e(a)}},i=a=>{try{r(t.throw(a))}catch(a){e(a)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,i);r((t=t.apply(n,s)).next())}));var n,s,t}),(()=>r.error("表单输入有误")))},signInInfo:p,validateInfos:m}}});const B=f("data-v-fbb8994e");d("data-v-fbb8994e");const k={class:"signIn"},K=m("b",null,"帐号密码登录",-1),T={class:"shrinkBar accountBar"},q={class:"passwordBar"},S=m("b",null,"手机动态登录",-1),W={class:"shrinkBar accountBar"},F={class:"captchaBar"},L={class:"buttonBar"},O=h("登录"),A={class:"infoBar"},$=h("还没有帐号，"),D=h("立即注册"),N=h("忘记密码");c();const R=B(((a,e,n,s,t,o)=>{const i=p("Icon"),r=p("UIInput"),d=p("UIFormItem"),c=p("UITabPane"),f=p("Captcha"),h=p("UITabs"),v=p("UIButton"),g=p("RouterLink"),b=p("UIForm");return l(),u("div",k,[m(b,{layout:"vertical"},{default:B((()=>[m(h,{animated:!1,activeKey:a.activeTabKey,"onUpdate:activeKey":e[5]||(e[5]=e=>a.activeTabKey=e),onChange:a.changeTag},{default:B((()=>[m(c,{key:"signInWithPassword"},{tab:B((()=>[K])),default:B((()=>[m(d,a.validateInfos.phone,{default:B((()=>[m("div",T,[m(r,{value:a.signInInfo.phone,"onUpdate:value":e[1]||(e[1]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),m(d,a.validateInfos.password,{default:B((()=>[m("div",q,[m(r,{value:a.signInInfo.password,"onUpdate:value":e[2]||(e[2]=e=>a.signInInfo.password=e),type:"password",placeholder:"请输入密码",onKeydown:I(a.signIn,["enter"])},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1}),m(c,{key:"signInWithCaptcha"},{tab:B((()=>[S])),default:B((()=>[m(d,a.validateInfos.phone,{default:B((()=>[m("div",W,[m(r,{value:a.signInInfo.phone,"onUpdate:value":e[3]||(e[3]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),m(d,a.validateInfos.captcha,{default:B((()=>[m("div",F,[m(r,{value:a.signInInfo.captcha,"onUpdate:value":e[4]||(e[4]=e=>a.signInInfo.captcha=e),class:"captcha",placeholder:"验证码",maxlength:6,onKeydown:I(a.signIn,["enter"])},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:B((()=>[m(f,{info:a.signInInfo},null,8,["info"])])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1})])),_:1},8,["activeKey","onChange"]),m("div",L,[m(v,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signIn},{default:B((()=>[O])),_:1},8,["loading","onClick"])]),m("div",A,[m("p",null,[$,m(g,{class:"toSignUp",to:"/auth/sign_up"},{default:B((()=>[D])),_:1})]),m(g,{class:"darkLink",to:"/auth/password"},{default:B((()=>[N])),_:1})])])),_:1})])}));P.render=R,P.__scopeId="data-v-fbb8994e";export default P;