import{_ as g,a as h}from"./index.c5f46141.js";import{C as k}from"./CardTabs.531e1622.js";import{P as $}from"./Pagination.a4ad5294.js";import{r as d,o as s,c as a,a as t,t as r,F as p,f as v,b as n,g as j,n as T,u as P,x as B}from"./vendor.3b2a839d.js";const D={props:["title","posts"]},N={class:"recomment-card"},R={class:"title"},A={class:"text-sm space-y-3 mt-3"};function V(c,i,u,x,o,y){const l=d("font-awesome-icon");return s(),a("div",N,[t("div",R,r(u.title),1),t("div",A,[(s(!0),a(p,null,v(u.posts.slice(0,4),(_,m)=>(s(),a("div",{key:m,class:"hidden-wrap text-left hover:underline cursor-pointer",onClick:i[0]||(i[0]=b=>c.$router.push("/postdetail?id=2"))},[n(l,{class:"text-xs",icon:"circle"}),j(" "+r(_.title),1)]))),128))])])}var G=g(D,[["render",V],["__scopeId","data-v-499b2715"]]);const I={props:["tags"],data(){return{color:{\u63A8\u8350:"from-red-400 to-red-500",AD:"from-yellow-400 to-yellow-500",\u5F00\u53D1\u8005:"from-green-400 to-green-500"}}}};function E(c,i,u,x,o,y){return s(),a("div",null,[(s(!0),a(p,null,v(u.tags,l=>(s(),a("span",{class:T(["text-white text-xxs px-1.5 py-0.7 mr-1 rounded-2xl bg-gradient-to-r",o.color[l]]),key:l},r(l),3))),128))])}var F=g(I,[["render",E]]);const H={data(){return{game:{},reports:[],eval:[]}},mounted(){let c=this.$route.query.id;this.game=h.getGameDateById(c),this.reports=h.getGameReports(10),this.eval=h.getGameEvals(10)},components:{CardTabs:k,Pagination:$,RecommentCard:G,Tags:F}},q={class:"w-full relative h-72 overflow-hidden"},z={class:"absolute left-56 bottom-14 flex items-end"},L={class:"text-3xl text-white font-black mx-10 my-1 name-shadow"},S={class:"flex justify-around w-5/6 mx-auto mt-12"},J={class:"space-y-10 mt-12 w-1/5"},K={class:"w-2/5"},M={class:"w-full bg-dark-white rounded-b-lg rounded-r-lg divide-y space-y-2"},O={class:"mr-2"},Q={class:"text-xs text-gray-400 mt-1"},U={class:"w-7/10 text-left"},W={class:"hidden-wrap mb-3 mt-2 font-semibold"},X={class:"text-sm wrap-text p-2"},Y={class:"text-xs text-gray-400 my-5"},Z={class:"w-1/5"},tt={class:"w-full bg-dark-white rounded-b-lg rounded-r-lg py-4 space-y-5"},et={class:"flex justify-start items-center space-x-5 mb-4"},st={class:"text-xs"},ot={class:"bg-gray-100 text-left text-sm rounded-lg p-2 h-2/4 wrap-text"};function at(c,i,u,x,o,y){const l=d("el-image"),_=d("RecommentCard"),m=d("CardTabs"),b=d("Tags"),w=d("Pagination");return s(),a("div",null,[t("div",q,[n(l,{class:"absolute w-full -top-124 left-0 filter blur-sm opacity-75",fit:"contain",src:"https://cdn.jsdelivr.net/gh/838239178/PicgoBed@main/img/96607131e924b89968fa9f2c33061d950b7bf6bf.jpg"}),t("div",z,[n(l,{class:"w-32 h-32 rounded-lg",src:o.game.icon},null,8,["src"]),t("span",L,r(o.game.name),1)])]),t("div",S,[t("div",J,[n(_,{title:"\u6E38\u620F\u8D44\u8BAF",posts:o.reports},null,8,["posts"]),n(_,{title:"\u6E38\u620F\u8BC4\u6D4B",posts:o.reports},null,8,["posts"]),n(_,{title:"\u6E38\u620F\u653B\u7565",posts:o.reports},null,8,["posts"])]),t("div",K,[n(m,{justify:"start",class:"text-base",tabClass:"w-24 h-10",tabs:["\u5168\u90E8","\u8BC4\u6D4B","\u8D44\u8BAF","\u653B\u7565"]}),t("div",M,[(s(!0),a(p,null,v([...o.reports,...o.eval].slice(0,5),(e,f)=>(s(),a("div",{key:f,class:"px-6 py-4 flex justify-around items-center"},[t("div",O,[n(l,{class:"w-16 h-16 rounded",src:e.authorAvatar},null,8,["src"]),t("div",Q,r(e.author),1)]),t("div",U,[e.tags&&e.tags.length>0?(s(),P(b,{key:0,tags:e.tags},null,8,["tags"])):B("",!0),t("div",W,r(e.title),1),t("div",X,r(e.desc),1)]),t("div",null,[t("div",Y,r(new Date().getHours()-new Date(e.date.replaceAll("/","-")).getHours())+"\u5C0F\u65F6\u524D",1),t("button",{class:"base-btn rounded-2xl mt-1",onClick:i[0]||(i[0]=C=>c.$router.push("/postdetail?id=2"))},"\u67E5\u770B")])]))),128))]),n(w,{class:"my-10",totalPage:10,maxNum:5})]),t("div",Z,[n(m,{justify:"start",class:"text-base",tabClass:"w-24 h-10",tabs:["\u7F6E\u9876"]}),t("div",tt,[(s(!0),a(p,null,v(o.reports.slice(0,4),(e,f)=>(s(),a("div",{key:f,class:"px-5 py-1 space-y-4 mb-2"},[t("div",et,[n(l,{class:"rounded-full h-9 w-9",src:e.authorAvatar},null,8,["src"]),t("div",st,r(e.author),1)]),t("div",{onClick:i[1]||(i[1]=C=>c.$router.push("/postdetail?id=2")),class:"text-left text-sm font-semibold hidden-wrap cursor-pointer hover:underline"},r(e.title),1),t("div",ot,r(e.desc),1)]))),128))])])])])}var ct=g(H,[["render",at],["__scopeId","data-v-f3cd13f8"]]);export{ct as default};