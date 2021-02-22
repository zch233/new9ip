import{d as a,_ as n,u as e,q as s,V as t,r as o,ad as i,b5 as r,A as c,D as d,F as l,G as p,H as u,J as I,b as m,b7 as f,Q as h,M as v}from"./index.316aaba3.js";import{_ as g}from"./UIInput.b1f2d724.js";import{_ as b,a as y}from"./UITabPane.5a035cd4.js";import{_}from"./UIButton.8a854855.js";import{_ as U,a as j}from"./UIFormItem.dc8c53d4.js";import{_ as w,u as x}from"./index.04e4b430.js";import{s as P}from"./signIn.df39d42a.js";import"./vendor.5c0531cb.js";import"./index.b31f51ca.js";import"./SearchOutlined.5fb1617c.js";import"./index.376fa03c.js";import"./debounce.e95b6904.js";import"./isSymbol.db7c5c18.js";import"./toNumber.23891726.js";import"./LeftOutlined.11fa718f.js";import"./identity.dfdc695f.js";import"./toString.d7ff6646.js";import"./Col.ef992c89.js";import"./_commonjsHelpers.97801848.js";import"./_baseProperty.d2cb7c95.js";import"./UICountdown.95107cfb.js";import"./_baseSlice.87986fb0.js";import"./omit.f65df6ac.js";var B=a({name:"AuthSignIn",components:{UITabs:b,UITabPane:y,UIInput:g,Icon:n,UIButton:_,UIForm:U,UIFormItem:j,Captcha:w},setup(){const a=e(),n=s(),d=t(),l=o("signInWithPassword"),p=i({phone:"",password:"",captcha:""}),u=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!1,message:""},{len:6,message:""}]}),{validate:I,validateInfos:m}=x(p,u),f=o(!1);return{activeTabKey:l,submitLoading:f,changeTag:a=>{u.captcha[0].required="signInWithCaptcha"===a,u.password[0].required="signInWithPassword"===a},signIn:()=>{I().then((()=>{return e=this,s=null,t=function*(){f.value=!0,yield P[l.value](p).finally((()=>f.value=!1));const e=yield d.dispatch("setUser");yield d.dispatch("setOneDayConsumePoints"),yield d.dispatch("setUserPoints"),yield n.push(r(a.query.redirect)||"/"),c.success(`欢迎回来，${e.nickname}`)},new Promise(((a,n)=>{var o=a=>{try{r(t.next(a))}catch(e){n(e)}},i=a=>{try{r(t.throw(a))}catch(e){n(e)}},r=n=>n.done?a(n.value):Promise.resolve(n.value).then(o,i);r((t=t.apply(e,s)).next())}));var e,s,t}),(()=>c.error("表单输入有误")))},signInInfo:p,validateInfos:m}}});const C=h("data-v-2829ed42");d("data-v-2829ed42");const k={class:"signIn"},K=m("b",null,"帐号密码登录",-1),T={class:"shrinkBar accountBar"},q={class:"passwordBar"},F=m("b",null,"手机动态登录",-1),S={class:"shrinkBar accountBar"},L={class:"captchaBar"},W={class:"buttonBar"},A=v("登录"),O={class:"infoBar"},D=v("还没有帐号，"),H=v("立即注册"),G=v("忘记密码");l();const J=C(((a,n,e,s,t,o)=>{const i=p("Icon"),r=p("UIInput"),c=p("UIFormItem"),d=p("UITabPane"),l=p("Captcha"),h=p("UITabs"),v=p("UIButton"),g=p("RouterLink"),b=p("UIForm");return u(),I("div",k,[m(b,{layout:"vertical"},{default:C((()=>[m(h,{animated:!1,activeKey:a.activeTabKey,"onUpdate:activeKey":n[5]||(n[5]=n=>a.activeTabKey=n),onChange:a.changeTag},{default:C((()=>[m(d,{key:"signInWithPassword"},{tab:C((()=>[K])),default:C((()=>[m(c,a.validateInfos.phone,{default:C((()=>[m("div",T,[m(r,{value:a.signInInfo.phone,"onUpdate:value":n[1]||(n[1]=n=>a.signInInfo.phone=n),placeholder:"请输入手机号",maxlength:11},{prefix:C((()=>[m(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),m(c,a.validateInfos.password,{default:C((()=>[m("div",q,[m(r,{value:a.signInInfo.password,"onUpdate:value":n[2]||(n[2]=n=>a.signInInfo.password=n),type:"password",placeholder:"请输入密码",onKeydown:f(a.signIn,["enter"])},{prefix:C((()=>[m(i,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1}),m(d,{key:"signInWithCaptcha"},{tab:C((()=>[F])),default:C((()=>[m(c,a.validateInfos.phone,{default:C((()=>[m("div",S,[m(r,{value:a.signInInfo.phone,"onUpdate:value":n[3]||(n[3]=n=>a.signInInfo.phone=n),placeholder:"请输入手机号",maxlength:11},{prefix:C((()=>[m(i,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),m(c,a.validateInfos.captcha,{default:C((()=>[m("div",L,[m(r,{value:a.signInInfo.captcha,"onUpdate:value":n[4]||(n[4]=n=>a.signInInfo.captcha=n),class:"captcha",placeholder:"验证码",maxlength:6,onKeydown:f(a.signIn,["enter"])},{prefix:C((()=>[m(i,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:C((()=>[m(l,{info:a.signInInfo},null,8,["info"])])),_:1},8,["value","onKeydown"])])])),_:1},16)])),_:1})])),_:1},8,["activeKey","onChange"]),m("div",W,[m(v,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signIn},{default:C((()=>[A])),_:1},8,["loading","onClick"])]),m("div",O,[m("p",null,[D,m(g,{class:"toSignUp",to:"/auth/sign_up"},{default:C((()=>[H])),_:1})]),m(g,{class:"darkLink",to:"/auth/password"},{default:C((()=>[G])),_:1})])])),_:1})])}));B.render=J,B.__scopeId="data-v-2829ed42";export default B;
