import{d as a,s as e,u as n,a as s,x as t,r as o,a1 as i,b0 as r,e as c,p as d,f as l,h as p,i as u,j as I,k as f,bj as m,q as h,m as v}from"./index.60f7b1a1.js";import"./SearchOutlined.be4649b4.js";import"./toString.e7b5a9f1.js";import"./identity.2c2bce42.js";import"./isSymbol.09a3be11.js";import"./omit.a65240d7.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.39e3694e.js";import"./index.eb39d4fe.js";import"./toNumber.5dd24452.js";import"./_baseProperty.271c30ba.js";import{s as g,a as b}from"./UIFormItem.84fbcd57.js";import{s as y,u as U}from"./index.f6b3706e.js";import"./UICountdown.709fed8f.js";import"./debounce.abf8c29a.js";import"./index.405fd6f4.js";import"./Col.0293f031.js";import{s as j}from"./UIButton.33c8aa27.js";import{s as w}from"./UIInput.f3e61f57.js";import{a as _,s as x}from"./UITabPane.dc7b3976.js";import{s as P}from"./signIn.6e91d45f.js";var k=a({name:"AuthSignIn",components:{UITabs:_,UITabPane:x,UIInput:w,Icon:e,UIButton:j,UIForm:g,UIFormItem:b,Captcha:y},setup(){const a=n(),e=s(),d=t(),l=o("signInWithPassword"),p=i({phone:"",password:"",captcha:""}),u=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!1,message:""},{len:6,message:""}]}),{validate:I,validateInfos:f}=U(p,u),m=o(!1);return{activeTabKey:l,submitLoading:m,changeTag:a=>{u.captcha[0].required="signInWithCaptcha"===a,u.password[0].required="signInWithPassword"===a},signIn:()=>{I().then((()=>{return n=this,s=null,t=function*(){m.value=!0,yield P[l.value](p).finally((()=>m.value=!1));const n=yield d.dispatch("setUser");yield d.dispatch("setOneDayConsumePoints"),yield d.dispatch("setUserPoints"),yield e.push(r(a.query.redirect)||"/"),c.success(`欢迎回来，${n.nickname}`)},new Promise(((a,e)=>{var o=a=>{try{r(t.next(a))}catch(a){e(a)}},i=a=>{try{r(t.throw(a))}catch(a){e(a)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,i);r((t=t.apply(n,s)).next())}));var n,s,t}),(()=>c.error("表单输入有误")))},signInInfo:p,validateInfos:f}}});const B=h("data-v-5cab7922");d("data-v-5cab7922");const C={class:"signIn"},K=f("b",null,"帐号密码登录",-1),T={class:"shrinkBar accountBar"},q={class:"passwordBar"},S=f("b",null,"手机动态登录",-1),F={class:"shrinkBar accountBar"},L={class:"captchaBar"},W={class:"buttonBar"},O=v("登录"),A={class:"infoBar"},D=v("还没有帐号，"),N=v("立即注册"),R=v("忘记密码");l();const $=B(((a,e,n,s,t,o)=>{const i=p("Icon"),r=p("UIInput"),c=p("UIFormItem"),d=p("UITabPane"),l=p("Captcha"),h=p("UITabs"),v=p("UIButton"),g=p("RouterLink"),b=p("UIForm");return u(),I("div",C,[f(b,{layout:"vertical"},{default:B((()=>[f(h,{animated:!1,activeKey:a.activeTabKey,"onUpdate:activeKey":e[5]||(e[5]=e=>a.activeTabKey=e),onChange:a.changeTag},{default:B((()=>[f(d,{key:"signInWithPassword"},{tab:B((()=>[K])),default:B((()=>[f(c,a.validateInfos.phone,{default:B((()=>[f("div",T,[f(r,{value:a.signInInfo.phone,"onUpdate:value":e[1]||(e[1]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[f(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),f(c,a.validateInfos.password,{default:B((()=>[f("div",q,[f(r,{value:a.signInInfo.password,"onUpdate:value":e[2]||(e[2]=e=>a.signInInfo.password=e),type:"password",placeholder:"请输入密码",onKeydown:m(a.signIn,["enter"])},{prefix:B((()=>[f(i,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1}),f(d,{key:"signInWithCaptcha"},{tab:B((()=>[S])),default:B((()=>[f(c,a.validateInfos.phone,{default:B((()=>[f("div",F,[f(r,{value:a.signInInfo.phone,"onUpdate:value":e[3]||(e[3]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[f(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),f(c,a.validateInfos.captcha,{default:B((()=>[f("div",L,[f(r,{value:a.signInInfo.captcha,"onUpdate:value":e[4]||(e[4]=e=>a.signInInfo.captcha=e),class:"captcha",placeholder:"验证码",maxlength:6,onKeydown:m(a.signIn,["enter"])},{prefix:B((()=>[f(i,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:B((()=>[f(l,{info:a.signInInfo},null,8,["info"])])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1})])),_:1},8,["activeKey","onChange"]),f("div",W,[f(v,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signIn},{default:B((()=>[O])),_:1},8,["loading","onClick"])]),f("div",A,[f("p",null,[D,f(g,{class:"toSignUp",to:"/auth/sign_up"},{default:B((()=>[N])),_:1})]),f(g,{class:"darkLink",to:"/auth/password"},{default:B((()=>[R])),_:1})])])),_:1})])}));k.render=$,k.__scopeId="data-v-5cab7922";export default k;
