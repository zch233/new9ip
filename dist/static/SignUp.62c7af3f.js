import{a4 as a,d as e,_ as s,u as t,a as n,x as o,r,$ as i,a$ as p,e as l,p as c,f as d,h as u,i as m,j as f,k as I,n as h,q as v}from"./index.32e949db.js";import{_ as U}from"./UIInput.6c1e6c7d.js";import{_ as g,a as b}from"./UITabPane.75293b53.js";import{_ as y}from"./UIButton.2925dc64.js";import{_,a as j}from"./UIFormItem.3cc23331.js";import{_ as x,u as B}from"./index.a99e5cf4.js";import{a as k}from"./signIn.3366889d.js";import"./vendor.5c0531cb.js";import"./index.ae689225.js";import"./SearchOutlined.76f31862.js";import"./index.5d272740.js";import"./debounce.b6942387.js";import"./isSymbol.7f3ca03b.js";import"./toNumber.54b8305b.js";import"./LeftOutlined.aa0e0274.js";import"./identity.ef49ac93.js";import"./toString.7454a68f.js";import"./Col.130b09ac.js";import"./_commonjsHelpers.97801848.js";import"./_baseProperty.095d19c2.js";import"./UICountdown.697b3554.js";import"./_baseSlice.87986fb0.js";import"./omit.9df19e61.js";var w=e({name:"AuthSignUp",components:{UITabs:g,UITabPane:b,UIInput:U,Icon:s,UIButton:y,UIForm:_,UIFormItem:j,Captcha:x},setup(){const e=t(),s=n(),c=o(),d=r(!1),u=i({phone:"",password:"",captcha:"",referrer:p(e.query.code)||""}),m=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!0,message:""},{len:6,message:""}]}),{validate:f,validateInfos:I}=B(u,m);return{route:e,signUpInfo:u,validateInfos:I,submitLoading:d,signUp:()=>{f().then((()=>{return t=this,n=null,o=function*(){var t;d.value=!0,yield(t=u,a({url:"/pub/api/v1/authc/regByMobile",method:"post",data:t})).finally((()=>d.value=!1)),l.success("注册成功!");const n=l.loading("正在为您自动登录...");d.value=!0,yield k(u);const o=yield c.dispatch("setUser");yield c.dispatch("setOneDayConsumePoints"),yield c.dispatch("setUserPoints").finally((()=>n())),yield s.push(p(e.query.redirect)||"/"),l.success(`欢迎回来，${o.nickname}`)},new Promise(((a,e)=>{var s=a=>{try{i(o.next(a))}catch(s){e(s)}},r=a=>{try{i(o.throw(a))}catch(s){e(s)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,r);i((o=o.apply(t,n)).next())}));var t,n,o}),(()=>l.error("表单输入有误")))}}}});const P=h("data-v-6057abc9");c("data-v-6057abc9");const q={class:"signUp"},C=I("b",null,"新用户注册",-1),S={class:"shrinkBar accountBar"},F={class:"shrinkBar captchaBar"},L={class:"shrinkBar passwordBar"},T={class:"referrerBar"},A={class:"buttonBar"},O=v("注册"),$={class:"infoBar"},D=v("点击注册代表已同意 "),H=v("《用户服务协议》"),M=v("返回登录");d();const N=P(((a,e,s,t,n,o)=>{const r=u("Icon"),i=u("UIInput"),p=u("UIFormItem"),l=u("Captcha"),c=u("UITabPane"),d=u("UITabs"),h=u("UIButton"),v=u("RouterLink"),U=u("UIForm");return m(),f("div",q,[I(U,{layout:"vertical"},{default:P((()=>[I(d,{animated:!1},{default:P((()=>[I(c,{key:"signUp"},{tab:P((()=>[C])),default:P((()=>[I(p,a.validateInfos.phone,{default:P((()=>[I("div",S,[I(i,{value:a.signUpInfo.phone,"onUpdate:value":e[1]||(e[1]=e=>a.signUpInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:P((()=>[I(r,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),I(p,a.validateInfos.captcha,{default:P((()=>[I("div",F,[I(i,{value:a.signUpInfo.captcha,"onUpdate:value":e[2]||(e[2]=e=>a.signUpInfo.captcha=e),class:"captcha",placeholder:"验证码",maxlength:6},{prefix:P((()=>[I(r,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:P((()=>[I(l,{info:a.signUpInfo},null,8,["info"])])),_:1},8,["value"])])])),_:1},16),I(p,a.validateInfos.password,{default:P((()=>[I("div",L,[I(i,{value:a.signUpInfo.password,"onUpdate:value":e[3]||(e[3]=e=>a.signUpInfo.password=e),type:"password",placeholder:"请输入密码"},{prefix:P((()=>[I(r,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value"])])])),_:1},16),I(p,a.validateInfos.referrer,{default:P((()=>[I("div",T,[I(i,{readonly:!!a.route.query.code,value:a.signUpInfo.referrer,"onUpdate:value":e[4]||(e[4]=e=>a.signUpInfo.referrer=e),placeholder:"推荐人手机号或者工号（选填）",maxlength:11},{prefix:P((()=>[I(r,{class:"inputIcon",icon:"inputAgent"})])),_:1},8,["readonly","value"])])])),_:1},16)])),_:1})])),_:1}),I("div",A,[I(h,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signUp},{default:P((()=>[O])),_:1},8,["loading","onClick"])]),I("div",$,[I("p",null,[D,I(v,{class:"toSignUp",to:"/others/helper?aq=1-2"},{default:P((()=>[H])),_:1})]),I(v,{class:"darkLink",to:"/auth/sign_in"},{default:P((()=>[M])),_:1})])])),_:1})])}));w.render=N,w.__scopeId="data-v-6057abc9";export default w;