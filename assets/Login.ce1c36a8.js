import{r,c as s,b as n,a,d as c,u as l,o,F as d,f as _,w as v,e as g,g as p}from"./vendor.e241ceec.js";import{_ as f}from"./index.f59a642c.js";const x={data(){return{currentIndex:0,imgSrc:["https://avatars.githubusercontent.com/ml/497?s=82&v=4","https://avatars.githubusercontent.com/u/55338151?v=4","https://avatars.githubusercontent.com/u/61657380?v=4","https://avatars.githubusercontent.com/u/55338151?v=4","https://avatars.githubusercontent.com/ml/497?s=82&v=4","https://avatars.githubusercontent.com/u/61657380?v=4"]}},methods:{changeImage(){this.currentIndex+=3}}},b=a("h1",null,"This is Index",-1),w={class:"mx-auto bg-gray-100 w-96 h-52 overflow-hidden flex justify-center items-center"},I=["src"],k=p("Change Image");function C(j,y,B,N,e,i){const u=r("font-awesome-icon"),m=r("el-button");return o(),s("div",null,[b,n(u,{icon:"user-secret",class:"transition text-5xl text-blue-600 hover:text-red-500 transform hover:rotate-45"}),a("div",w,[n(l,{name:"slide",mode:"out-in"},{default:c(()=>[(o(!0),s(d,null,_(e.imgSrc,(h,t)=>v((o(),s("img",{key:"image"+t,class:"w-20 h-20",src:h},null,8,I)),[[g,t>=e.currentIndex&&t<e.currentIndex+3]])),128))]),_:1})]),n(m,{onClick:i.changeImage},{default:c(()=>[k]),_:1},8,["onClick"])])}var V=f(x,[["render",C]]);export{V as default};
