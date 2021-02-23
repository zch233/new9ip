import{ai as a,d as e,_ as s,u as t,q as o,V as n,r,ad as i,b5 as p,A as c,D as l,F as d,G as u,H as m,J as f,b as I,N as h,O as v}from"./index.ac0cd7df.js";import{_ as U}from"./UIInput.4f962475.js";import{_ as b,a as g}from"./UITabPane.a7ce4ba9.js";import{_ as y}from"./UIButton.91505643.js";import{_,a as j}from"./UIFormItem.9a20b54b.js";import{_ as x,u as B}from"./index.1741109b.js";import{a as k}from"./signIn.e2c50856.js";import"./vendor.5c0531cb.js";import"./index.41572ccc.js";import"./SearchOutlined.d4e172dc.js";import"./index.fec7b509.js";import"./debounce.60279af9.js";import"./isSymbol.6f20698f.js";import"./toNumber.e3d0ade3.js";import"./LeftOutlined.934369ba.js";import"./identity.efe4c793.js";import"./toString.ebffae51.js";import"./Col.b5a83815.js";import"./_commonjsHelpers.97801848.js";import"./_baseProperty.a6cc78ed.js";import"./UICountdown.60f9b08c.js";import"./_baseSlice.87986fb0.js";import"./omit.82f12eec.js";var w=e({name:"AuthSignUp",components:{UITabs:b,UITabPane:g,UIInput:U,Icon:s,UIButton:y,UIForm:_,UIFormItem:j,Captcha:x},setup(){const e=t(),s=o(),l=n(),d=r(!1),u=i({phone:"",password:"",captcha:"",referrer:p(e.query.code)||""}),m=i({phone:[{required:!0,message:""},{len:11,message:""}],password:[{required:!0,message:""}],captcha:[{required:!0,message:""},{len:6,message:""}]}),{validate:f,validateInfos:I}=B(u,m);return{route:e,signUpInfo:u,validateInfos:I,submitLoading:d,signUp:()=>{f().then((()=>{return t=this,o=null,n=function*(){var t;d.value=!0,yield(t=u,a({url:"/pub/api/v1/authc/regByMobile",method:"post",data:t})).finally((()=>d.value=!1)),c.success("注册成功!");const o=c.loading("正在为您自动登录...");d.value=!0,yield k(u);const n=yield l.dispatch("setUser");yield l.dispatch("setOneDayConsumePoints"),yield l.dispatch("setUserPoints").finally((()=>o())),yield s.push(p(e.query.redirect)||"/"),c.success(`欢迎回来，${n.nickname}`)},new Promise(((a,e)=>{var s=a=>{try{i(n.next(a))}catch(s){e(s)}},r=a=>{try{i(n.throw(a))}catch(s){e(s)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,r);i((n=n.apply(t,o)).next())}));var t,o,n}),(()=>c.error("表单输入有误")))}}}});const P=h("data-v-6057abc9");l("data-v-6057abc9");const q={class:"signUp"},C=I("b",null,"新用户注册",-1),F={class:"shrinkBar accountBar"},S={class:"shrinkBar captchaBar"},L={class:"shrinkBar passwordBar"},T={class:"referrerBar"},A={class:"buttonBar"},O=v("注册"),D={class:"infoBar"},H=v("点击注册代表已同意 "),N=v("《用户服务协议》"),G=v("返回登录");d();const J=P(((a,e,s,t,o,n)=>{const r=u("Icon"),i=u("UIInput"),p=u("UIFormItem"),c=u("Captcha"),l=u("UITabPane"),d=u("UITabs"),h=u("UIButton"),v=u("RouterLink"),U=u("UIForm");return m(),f("div",q,[I(U,{layout:"vertical"},{default:P((()=>[I(d,{animated:!1},{default:P((()=>[I(l,{key:"signUp"},{tab:P((()=>[C])),default:P((()=>[I(p,a.validateInfos.phone,{default:P((()=>[I("div",F,[I(i,{value:a.signUpInfo.phone,"onUpdate:value":e[1]||(e[1]=e=>a.signUpInfo.phone=e),placeholder:"请输入手机号",maxlength:11},{prefix:P((()=>[I(r,{class:"inputIcon",icon:"inputPhone"})])),_:1},8,["value"])])])),_:1},16),I(p,a.validateInfos.captcha,{default:P((()=>[I("div",S,[I(i,{value:a.signUpInfo.captcha,"onUpdate:value":e[2]||(e[2]=e=>a.signUpInfo.captcha=e),class:"captcha",placeholder:"验证码",maxlength:6},{prefix:P((()=>[I(r,{class:"inputIcon",icon:"inputCaptcha"})])),addonAfter:P((()=>[I(c,{info:a.signUpInfo},null,8,["info"])])),_:1},8,["value"])])])),_:1},16),I(p,a.validateInfos.password,{default:P((()=>[I("div",L,[I(i,{value:a.signUpInfo.password,"onUpdate:value":e[3]||(e[3]=e=>a.signUpInfo.password=e),type:"password",placeholder:"请输入密码"},{prefix:P((()=>[I(r,{class:"inputIcon",icon:"inputPassword"})])),_:1},8,["value"])])])),_:1},16),I(p,a.validateInfos.referrer,{default:P((()=>[I("div",T,[I(i,{readonly:!!a.route.query.code,value:a.signUpInfo.referrer,"onUpdate:value":e[4]||(e[4]=e=>a.signUpInfo.referrer=e),placeholder:"推荐人手机号或者工号（选填）",maxlength:11},{prefix:P((()=>[I(r,{class:"inputIcon",icon:"inputAgent"})])),_:1},8,["readonly","value"])])])),_:1},16)])),_:1})])),_:1}),I("div",A,[I(h,{loading:a.submitLoading,type:"primary",block:"","customer-class":"mainButton",onClick:a.signUp},{default:P((()=>[O])),_:1},8,["loading","onClick"])]),I("div",D,[I("p",null,[H,I(v,{class:"toSignUp",to:"/others/helper?aq=1-2"},{default:P((()=>[N])),_:1})]),I(v,{class:"darkLink",to:"/auth/sign_in"},{default:P((()=>[G])),_:1})])])),_:1})])}));w.render=J,w.__scopeId="data-v-6057abc9";export default w;
