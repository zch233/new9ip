import{d as t,a4 as s,h as a,i as e,j as i,a5 as m,y as p,m as n,t as r}from"./index.a1c5a6cf.js";var o=t({name:"UIEmpty",components:{AntEmpty:s},props:{image:String,description:{type:String,default:"暂无数据"}},setup:()=>({simpleImage:s.PRESENTED_IMAGE_SIMPLE})});o.render=function(t,s,o,c,g,d){const E=a("AntEmpty");return e(),i(E,{class:"myEmpty",image:t.image?`https://market.img.9ip.com/empty-${t.image}.png`:t.simpleImage},{description:m((()=>[p(t.$slots,"description",{},(()=>[n(r(t.description),1)]))])),default:m((()=>[p(t.$slots,"default")])),_:3},8,["image"])};export{o as s};
