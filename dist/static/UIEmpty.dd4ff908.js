import{d as t,a2 as e,h as s,i as a,j as i,a3 as m,y as p,m as n,t as r}from"./index.245536e6.js";var o=t({name:"UIEmpty",components:{AntEmpty:e},props:{image:String,description:{type:String,default:"暂无数据"}},setup:()=>({simpleImage:e.PRESENTED_IMAGE_SIMPLE})});o.render=function(t,e,o,g,d,c){const E=s("AntEmpty");return a(),i(E,{class:"myEmpty",image:t.image?`https://market.img.9ip.com/empty-${t.image}.png`:t.simpleImage},{description:m((()=>[p(t.$slots,"description",{},(()=>[n(r(t.description),1)]))])),default:m((()=>[p(t.$slots,"default")])),_:3},8,["image"])};export{o as _};
