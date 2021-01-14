import{a2 as a,d as e,s,u as t,a as o,v as n,r,$ as i,e as p,p as l,f as c,g as d,h as u,i as m,j as f,m as I,n as v}from"./index.c6205360.js";import"./index.2a5bb8c2.js";import"./SearchOutlined.97d4ec8f.js";import"./CloseOutlined.c59b861f.js";import"./raf.8a2adf49.js";import"./toString.952967e1.js";import"./identity.16cb2f4a.js";import"./isSymbol.391746cd.js";import"./omit.ff3940d1.js";import"./_baseSlice.1123a25b.js";import"./LeftOutlined.ca4a1484.js";import"./index.42594293.js";import"./wave.ead9a13d.js";import"./index.7b25accd.js";import{g as h}from"./index.2c475e1b.js";import"./toNumber.666709f0.js";import"./_baseProperty.aeaa2c40.js";import{s as U,a as g}from"./UIFormItem.91aaed58.js";import{s as j,u as b}from"./index.719d67d4.js";import"./UICountdown.14aca8b2.js";import"./debounce.cc96765e.js";import"./index.d7856568.js";import"./Col.927c63a3.js";import"./dict.c2403ec5.js";import{s as y}from"./UIInput.f148ec33.js";import{s as _}from"./UIButton.9f4311b3.js";import{a as x,s as B}from"./UITabPane.1698d3e4.js";import{a as w}from"./signIn.44900a15.js";var k=e({name:"AuthSignUp",components:{UITabs:x,UITabPane:B,UIInput:y,Icon:s,UIButton:_,UIForm:U,UIFormItem:g,Captcha:j},setup(){const e=t(),s=o(),l=n(),c=r(!1),d=i({phone:"",password:"",captcha:"",referrer:h(e.query.code)||""}),u=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!0,message:""},{len:6,message:""}]}),{validate:m,validateInfos:f}=b(d,u);return{route:e,signUpInfo:d,validateInfos:f,submitLoading:c,signUp:()=>{m().then((()=>{return t=this,o=null,n=function*(){var t;c.value=!0,yield(t=d,a({url:"/pub/api/v1/authc/regByMobile",method:"post",data:t})).finally((()=>c.value=!1)),p.success("注册成功!");const o=p.loading("正在为您自动登录...");c.value=!0,yield w(d);const n=yield l.dispatch("setUser").finally((()=>o()));yield s.push(h(e.query.redirect)||"/"),p.success(`欢迎回来，${n.nickname}`)},new Promise(((a,e)=>{var s=a=>{try{i(n.next(a))}catch(a){e(a)}},r=a=>{try{i(n.throw(a))}catch(a){e(a)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,r);i((n=n.apply(t,o)).next())}));var t,o,n}),(()=>p.error("表单输入有误")))}}}});const C=I("data-v-35062749");l("data-v-35062749");const P={class:"signUp"},q=f("b",null,"新用户注册",-1),S={class:"shrinkBar accountBar"},F={class:"shrinkBar captchaBar"},L={class:"shrinkBar passwordBar"},T={class:"referrerBar"},A={class:"buttonBar"},O=v("注册"),$={class:"infoBar"},M=v("点击注册代表已同意 "),N=v("《用户服务协议》"),R=v("返回登录");c();const z=C(((a,e,s,t,o,n)=>{const r=d("Icon"),i=d("UIInput"),p=d("UIFormItem"),l=d("Captcha"),c=d("UITabPane"),I=d("UITabs"),v=d("UIButton"),h=d("RouterLink"),U=d("UIForm");return u(),m("div",P,[f(U,{layout:"vertical"},{default:C((()=>[f(I,{animated:!1},{default:C((()=>[f(c,{key:"signUp"},{tab:C((()=>[q])),default:C((()=>[f(p,a.validateInfos.phone,{default:C((()=>[f("div",S,[f(i,{value:a.signUpInfo.phone,"onUpdate:value":e[1]||(e[1]=e=>a.signUpInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:C((()=>[f(r,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),f(p,a.validateInfos.captcha,{default:C((()=>[f("div",F,[f(i,{value:a.signUpInfo.captcha,"onUpdate:value":e[2]||(e[2]=e=>a.signUpInfo.captcha=e),class:"captcha",placeholder:"验证码",maxlength:6},{prefix:C((()=>[f(r,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:C((()=>[f(l,{info:a.signUpInfo},null,8,["info"])])),_:1},8,["value"])])])),_:1},16),f(p,a.validateInfos.password,{default:C((()=>[f("div",L,[f(i,{value:a.signUpInfo.password,"onUpdate:value":e[3]||(e[3]=e=>a.signUpInfo.password=e),type:"password",placeholder:"请输入密码"},{prefix:C((()=>[f(r,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value"])])])),_:1},16),f(p,a.validateInfos.referrer,{default:C((()=>[f("div",T,[f(i,{readonly:!!a.route.query.code,value:a.signUpInfo.referrer,"onUpdate:value":e[4]||(e[4]=e=>a.signUpInfo.referrer=e),placeholder:"推荐人手机号或者工号（选填）",maxlength:11},{prefix:C((()=>[f(r,{class:"inputIcon",icon:"inputAgent"})])),_:1},8,["readonly","value"])])])),_:1},16)])),_:1})])),_:1}),f("div",A,[f(v,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signUp},{default:C((()=>[O])),_:1},8,["loading","onClick"])]),f("div",$,[f("p",null,[M,f(h,{class:"toSignUp",to:"/others/helper?aq=1-2"},{default:C((()=>[N])),_:1})]),f(h,{class:"darkLink",to:"/auth/sign_in"},{default:C((()=>[R])),_:1})])])),_:1})])}));k.render=z,k.__scopeId="data-v-35062749";export default k;
