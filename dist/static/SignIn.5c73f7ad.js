import{d as a,s as e,u as n,a as s,x as t,r as o,a1 as i,b0 as r,e as c,p as d,f as l,h as p,i as u,j as I,k as m,bj as f,q as h,m as v}from"./index.bbb49ce1.js";import"./SearchOutlined.075254d3.js";import"./toString.169a6b8a.js";import"./identity.7bed75cd.js";import"./isSymbol.e1f13a23.js";import"./omit.345cbca5.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.a5bae9ce.js";import"./index.3020f164.js";import"./toNumber.20c061c4.js";import"./_baseProperty.7c17d158.js";import{s as g,a as b}from"./UIFormItem.b5d65f36.js";import{s as y,u as U}from"./index.dc12e71f.js";import"./UICountdown.f65516fa.js";import"./debounce.b546389a.js";import"./index.01c4344b.js";import"./Col.43723ee3.js";import{s as j}from"./UIButton.acbd0656.js";import{s as w}from"./UIInput.6552964d.js";import{a as _,s as x}from"./UITabPane.ff2467ef.js";import{s as P}from"./signIn.193b0f05.js";var k=a({name:"AuthSignIn",components:{UITabs:_,UITabPane:x,UIInput:w,Icon:e,UIButton:j,UIForm:g,UIFormItem:b,Captcha:y},setup(){const a=n(),e=s(),d=t(),l=o("signInWithPassword"),p=i({phone:"",password:"",captcha:""}),u=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!1,message:""},{len:6,message:""}]}),{validate:I,validateInfos:m}=U(p,u),f=o(!1);return{activeTabKey:l,submitLoading:f,changeTag:a=>{u.captcha[0].required="signInWithCaptcha"===a,u.password[0].required="signInWithPassword"===a},signIn:()=>{I().then((()=>{return n=this,s=null,t=function*(){f.value=!0,yield P[l.value](p).finally((()=>f.value=!1));const n=yield d.dispatch("setUser");yield d.dispatch("setOneDayConsumePoints"),yield d.dispatch("setUserPoints"),yield e.push(r(a.query.redirect)||"/"),c.success(`欢迎回来，${n.nickname}`)},new Promise(((a,e)=>{var o=a=>{try{r(t.next(a))}catch(a){e(a)}},i=a=>{try{r(t.throw(a))}catch(a){e(a)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,i);r((t=t.apply(n,s)).next())}));var n,s,t}),(()=>c.error("表单输入有误")))},signInInfo:p,validateInfos:m}}});const B=h("data-v-5cab7922");d("data-v-5cab7922");const C={class:"signIn"},K=m("b",null,"帐号密码登录",-1),T={class:"shrinkBar accountBar"},q={class:"passwordBar"},S=m("b",null,"手机动态登录",-1),F={class:"shrinkBar accountBar"},L={class:"captchaBar"},W={class:"buttonBar"},O=v("登录"),A={class:"infoBar"},D=v("还没有帐号，"),N=v("立即注册"),R=v("忘记密码");l();const $=B(((a,e,n,s,t,o)=>{const i=p("Icon"),r=p("UIInput"),c=p("UIFormItem"),d=p("UITabPane"),l=p("Captcha"),h=p("UITabs"),v=p("UIButton"),g=p("RouterLink"),b=p("UIForm");return u(),I("div",C,[m(b,{layout:"vertical"},{default:B((()=>[m(h,{animated:!1,activeKey:a.activeTabKey,"onUpdate:activeKey":e[5]||(e[5]=e=>a.activeTabKey=e),onChange:a.changeTag},{default:B((()=>[m(d,{key:"signInWithPassword"},{tab:B((()=>[K])),default:B((()=>[m(c,a.validateInfos.phone,{default:B((()=>[m("div",T,[m(r,{value:a.signInInfo.phone,"onUpdate:value":e[1]||(e[1]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),m(c,a.validateInfos.password,{default:B((()=>[m("div",q,[m(r,{value:a.signInInfo.password,"onUpdate:value":e[2]||(e[2]=e=>a.signInInfo.password=e),type:"password",placeholder:"请输入密码",onKeydown:f(a.signIn,["enter"])},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1}),m(d,{key:"signInWithCaptcha"},{tab:B((()=>[S])),default:B((()=>[m(c,a.validateInfos.phone,{default:B((()=>[m("div",F,[m(r,{value:a.signInInfo.phone,"onUpdate:value":e[3]||(e[3]=e=>a.signInInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),m(c,a.validateInfos.captcha,{default:B((()=>[m("div",L,[m(r,{value:a.signInInfo.captcha,"onUpdate:value":e[4]||(e[4]=e=>a.signInInfo.captcha=e),class:"captcha",placeholder:"验证码",maxlength:6,onKeydown:f(a.signIn,["enter"])},{prefix:B((()=>[m(i,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:B((()=>[m(l,{info:a.signInInfo},null,8,["info"])])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1})])),_:1},8,["activeKey","onChange"]),m("div",W,[m(v,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signIn},{default:B((()=>[O])),_:1},8,["loading","onClick"])]),m("div",A,[m("p",null,[D,m(g,{class:"toSignUp",to:"/auth/sign_up"},{default:B((()=>[N])),_:1})]),m(g,{class:"darkLink",to:"/auth/password"},{default:B((()=>[R])),_:1})])])),_:1})])}));k.render=$,k.__scopeId="data-v-5cab7922";export default k;
