import{d as a,s as e,u as s,a as n,v as t,r as o,$ as i,e as r,p as c,f as d,g as p,h as l,i as u,j as I,aW as m,n as h,l as f}from"./index.cfe7b146.js";import"./index.2a5bb8c2.js";import"./SearchOutlined.53b0ecd4.js";import"./CloseOutlined.ef5d8536.js";import"./raf.8a2adf49.js";import"./toString.1139bac2.js";import"./identity.118dc479.js";import"./isSymbol.6babaae2.js";import"./omit.9edc7c16.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.c4294808.js";import"./index.d5d11aea.js";import"./wave.d77867a7.js";import"./index.0a846e70.js";import{g as v}from"./index.949368d9.js";import"./toNumber.7221422e.js";import"./_baseProperty.04345bb9.js";import{s as g,a as b}from"./UIFormItem.2a127261.js";import{s as y,u as j}from"./index.e4ca170c.js";import"./UICountdown.a99f22a6.js";import"./debounce.ea4d25ea.js";import"./index.2377de1d.js";import"./Col.993598bb.js";import"./dict.c2403ec5.js";import{s as U}from"./UIInput.8fc07367.js";import{s as w}from"./UIButton.413e7c4e.js";import{a as _,s as x}from"./UITabPane.7ae4e387.js";import{s as P}from"./signIn.42b277c3.js";var C=a({name:"AuthSignIn",components:{UITabs:_,UITabPane:x,UIInput:U,Icon:e,UIButton:w,UIForm:g,UIFormItem:b,Captcha:y},setup(){const a=s(),e=n(),c=t(),d=o("signInWithPassword"),p=i({phone:"",password:"",captcha:""}),l=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!1,message:""},{len:6,message:""}]}),{validate:u,validateInfos:I}=j(p,l),m=o(!1);return{activeTabKey:d,submitLoading:m,changeTag:a=>{l.captcha[0].required="signInWithCaptcha"===a,l.password[0].required="signInWithPassword"===a},signIn:()=>{u().then((()=>{return s=this,n=null,t=function*(){m.value=!0,yield P[d.value](p).finally((()=>m.value=!1));const s=yield c.dispatch("setUser");yield c.dispatch("setOneDayConsumePoints"),yield c.dispatch("setUserPoints"),yield e.push(v(a.query.redirect)||"/"),r.success(`欢迎回来，${s.nickname}`)},new Promise(((a,e)=>{var o=a=>{try{r(t.next(a))}catch(a){e(a)}},i=a=>{try{r(t.throw(a))}catch(a){e(a)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,i);r((t=t.apply(s,n)).next())}));var s,n,t}),(()=>r.error("表单输入有误")))},signInInfo:p,validateInfos:I}}});const B=h("data-v-5cab7922");c("data-v-5cab7922");const k={class:"signIn"},K=I("b",null,"帐号密码登录",-1),T={class:"shrinkBar accountBar"},q={class:"passwordBar"},S=I("b",null,"手机动态登录",-1),W={class:"shrinkBar accountBar"},F={class:"captchaBar"},L={class:"buttonBar"},O=f("登录"),A={class:"infoBar"},$=f("还没有帐号，"),D=f("立即注册"),N=f("忘记密码");d();const R=B(((a,e,s,n,t,o)=>{const i=p("Icon"),r=p("UIInput"),c=p("UIFormItem"),d=p("UITabPane"),h=p("Captcha"),f=p("UITabs"),v=p("UIButton"),g=p("RouterLink"),b=p("UIForm");return l(),u("div",k,[I(b,{layout:"vertical"},{default:B((()=>[I(f,{animated:!1,activeKey:a.activeTabKey,"onUpdate:activeKey":e[5]||(e[5]=e=>a.activeTabKey=e),onChange:a.changeTag},{default:B((()=>[I(d,{key:"signInWithPassword"},{tab:B((()=>[K])),default:B((()=>[I(c,a.validateInfos.phone,{default:B((()=>[I("div",T,[I(r,{value:a.signInInfo.phone,"onUpdate:value":e[1]||(e[1]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[I(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),I(c,a.validateInfos.password,{default:B((()=>[I("div",q,[I(r,{value:a.signInInfo.password,"onUpdate:value":e[2]||(e[2]=e=>a.signInInfo.password=e),type:"password",placeholder:"请输入密码",onKeydown:m(a.signIn,["enter"])},{prefix:B((()=>[I(i,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1}),I(d,{key:"signInWithCaptcha"},{tab:B((()=>[S])),default:B((()=>[I(c,a.validateInfos.phone,{default:B((()=>[I("div",W,[I(r,{value:a.signInInfo.phone,"onUpdate:value":e[3]||(e[3]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[I(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),I(c,a.validateInfos.captcha,{default:B((()=>[I("div",F,[I(r,{value:a.signInInfo.captcha,"onUpdate:value":e[4]||(e[4]=e=>a.signInInfo.captcha=e),class:"captcha",placeholder:"验证码",maxlength:6,onKeydown:m(a.signIn,["enter"])},{prefix:B((()=>[I(i,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:B((()=>[I(h,{info:a.signInInfo},null,8,["info"])])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1})])),_:1},8,["activeKey","onChange"]),I("div",L,[I(v,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signIn},{default:B((()=>[O])),_:1},8,["loading","onClick"])]),I("div",A,[I("p",null,[$,I(g,{class:"toSignUp",to:"/auth/sign_up"},{default:B((()=>[D])),_:1})]),I(g,{class:"darkLink",to:"/auth/password"},{default:B((()=>[N])),_:1})])])),_:1})])}));C.render=R,C.__scopeId="data-v-5cab7922";export default C;
