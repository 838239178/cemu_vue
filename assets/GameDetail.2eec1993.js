var I=Object.defineProperty,O=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var V=(t,s,l)=>s in t?I(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,G=(t,s)=>{for(var l in s||(s={}))N.call(s,l)&&V(t,l,s[l]);if(D)for(var l of D(s))q.call(s,l)&&V(t,l,s[l]);return t},j=(t,s)=>O(t,F(s));import{_ as U,a as d}from"./index.cb77e3ee.js";import{D as z,S as A,G as L}from"./GameComment.3304b6a6.js";import{r as i,o as m,c as _,a as e,b as a,t as h,w as E,e as R,d as y,n as H,g as f,F as w,f as C,y as J,A as K,q as S}from"./vendor.084c55b8.js";import"./AnimNum.9f02a97a.js";const Q={emits:["send","update:modelValue"],props:{modelValue:Object,disable:{type:Boolean,default:()=>!1},user:{default:()=>({username:"LikeGhost",avatar:"https://avatars.githubusercontent.com/u/55338151?v=4"})}},watch:{modelValue(t){this.comment=t,this.comment.score/=2}},data(){return{comment:this.modelValue||{}}}},W={class:"w-full px-10 pt-10 pb-3 flex justify-around items-start my-10 rounded-2xl bg-gradient-to-r from-light-dark to-primary-black bg-opacity-60 shadow-inner"},X={class:"rounded"},Y={class:"mt-5 text-primary-gray font-semibold"},Z={class:"w-7/10"},$={class:"text-xs text-gray-500 mb-2 text-left"},ee={class:"flex justify-between items-end mt-5"},te=e("div",{class:"text-left text-xs text-gray-500 my-2"}," \u60A8\u5BF9\u8FD9\u6B3E\u6E38\u620F\u7684\u8BC4\u5206\u662F? ",-1);function se(t,s,l,B,o,g){const p=i("el-image"),x=i("el-input"),b=i("el-rate");return m(),_("div",W,[e("div",X,[a(p,{class:"w-32 h-32 rounded",style:{"box-shadow":"2px 2px 5px #171a21"},fit:"fill",src:l.user.avatar},null,8,["src"]),e("div",Y,h(l.user.username),1)]),e("div",Z,[e("div",$,h(l.disable?`\u60A8\u5728 ${o.comment.date} \u8BC4\u4EF7\u4E86\u8FD9\u6B3E\u6E38\u620F`:"\u8BF7\u60A8\u63CF\u8FF0\u60A8\u5BF9\u8FD9\u6B3E\u6E38\u620F\u7684\u770B\u6CD5\uFF0C\u60A8\u7684\u53D1\u8A00\u9700\u8981\u9075\u5FAA\u793E\u533A\u89C4\u8303\uFF0C\u8BF7\u6CE8\u610F\u793C\u8C8C\u7528\u8BED"),1),a(x,{type:"textarea",disabled:l.disable,modelValue:o.comment.content,"onUpdate:modelValue":s[0]||(s[0]=u=>o.comment.content=u),class:"comment-sender",autosize:{minRows:6,maxRows:8}},null,8,["disabled","modelValue"]),e("div",ee,[e("div",null,[te,a(b,{class:"comment-rate",modelValue:o.comment.score,"onUpdate:modelValue":s[1]||(s[1]=u=>o.comment.score=u),disabled:l.disable,"allow-half":"",colors:["#BF1313","#BF1313","#BF1313"]},null,8,["modelValue","disabled"])]),E(e("button",{class:"base-btn rounded-md my-3 h-fit",onClick:s[2]||(s[2]=u=>t.$emit("send",this.comment))},"\u53D1\u8868\u8BC4\u4EF7",512),[[R,!l.disable]])])])])}var oe=U(Q,[["render",se]]);const ne={components:{DetailPanel:z,ScorePanel:A,GameComment:L,CommentSender:oe},data(){return{game:{pics:[]},eval:{},evalContent:{},devMsg:{},devMsgContent:{},newestComments:[],hotComments:[],devOpen:!1,comment:{},commentState:!1}},mounted(){this.$route.query.id&&this.getGame(this.$route.query.id),this.eval=d.getGameEvalByGame(2),this.evalContent=d.getPostContent(this.eval.postId),this.devMsg=d.getDeveloperMessage(2),this.devMsgContent=d.getPostContent(this.devMsg.postId),this.newestComments=d.getGameComments(2).slice(4),this.hotComments=d.getGameComments(2).sort((t,s)=>s.thumbsUp-t.thumbsUp).slice(0,4)},methods:{getGame(t){this.game=d.getGameDateById(t),console.log(this.game)},onCarouselChange(t){this.$refs.gVideo.pause()},openDevMsg(){this.devOpen=!this.devOpen},sendComment(t){this.commentState=!0,t.score*=2,console.log(t.score),this.comment=j(G({},t),{thumbsUp:0,thumbsDown:0,username:"LikeGhost",avatar:"https://avatars.githubusercontent.com/u/55338151?v=4",date:"2021/12/06"}),this.newestComments.splice(0,0,this.comment),this.newestComments.pop()}}},v=t=>(J("data-v-69e4880d"),t=t(),K(),t),le={class:"mx-auto pt-8 mb-10 w-7/10"},ae={class:"flex justify-between items-baseline w-full"},ie={class:"text-left text-3xl text-gray-200 font-bold leading-10 my-8",style:{"text-shadow":"10px 10px 20px black"}},me=f(" \u8FDB\u5165\u8BBA\u575B "),re={class:"flex justify-between items-center w-full"},ce={style:{height:"337px",width:"600px"}},de=["src","poster"],ue={style:{height:"337px",width:"674px"},class:"flex justify-around items-center space-x-6"},he={class:"flex justify-between items-center w-full"},pe={style:{width:"600px"},class:"space-y-8"},_e=v(()=>e("div",{class:"subtitle"},"\u5173\u4E8E\u8FD9\u6B3E\u6E38\u620F",-1)),ve={class:"absolute left-0 bottom-0 w-full text-center bg-gradient-to-t from-primary-black to-transparent"},ge={style:{width:"674px"},class:"space-y-8"},xe=v(()=>e("div",{class:"subtitle"},"\u5A92\u4F53\u8BC4\u4EF7",-1)),be={class:"flex justify-start items-center space-x-4"},fe={class:"text-sm text-dark-white"},ye={class:"relative text-primary-gray w-full mt-4 wrap-text text-left",style:{"max-height":"6rem"}},we=v(()=>e("div",{class:"absolute left-0 bottom-0 w-full text-center bg-gradient-to-t from-primary-black to-transparent h-3"},null,-1)),Ce={class:"w-full text-right text-sm text-primary-gray mt-1 hover:text-white transition duration-200 cursor-pointer"},Se=f(" \u9605\u8BFB\u66F4\u591A.. "),ke={class:"flex justify-between items-start w-full mt-6"},De={class:"space-y-8",style:{width:"759px"}},Ve=v(()=>e("div",{class:"subtitle"},"\u6700\u6709\u4EF7\u503C\u7684\u8BC4\u8BBA",-1)),Ge={class:"space-y-8",style:{width:"520px"}},je=v(()=>e("div",{class:"subtitle"},"\u6700\u65B0\u8BC4\u8BBA",-1));function Ue(t,s,l,B,o,g){const p=i("font-awesome-icon"),x=i("el-carousel-item"),b=i("el-image"),u=i("el-carousel"),M=i("ScorePanel"),T=i("DetailPanel"),P=i("CommentSender"),k=i("GameComment");return m(),_("div",le,[e("div",ae,[e("div",ie,h(o.game.name),1),e("div",{class:"text-s2b font-semibold active:text-sm text-dark-white cursor-pointer hover:text-primary-red transition duration-200",style:{"text-shadow":"2px 2xp 10px #171717"},onClick:s[0]||(s[0]=n=>t.$router.push(`/community?id=${o.game.id}`))},[me,a(p,{class:"text-primary-red",icon:"chevron-right"})])]),e("div",re,[e("div",ce,[a(u,{class:"shadow-lg","indicator-position":"outside",interval:15e3,onChange:g.onCarouselChange},{default:y(()=>[a(x,null,{default:y(()=>[e("video",{class:"w-full h-full",ref:"gVideo",controls:"",muted:"",src:o.game.media,poster:o.game.pics[0]},null,8,de)]),_:1}),(m(!0),_(w,null,C(o.game.pics.slice(1),n=>(m(),S(x,{key:n},{default:y(()=>[a(b,{src:n,fit:"contain",lazy:!1},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["onChange"])]),e("div",ue,[a(M,{mediaScore:o.game.mediaScore,publicScore:o.game.publicScore},null,8,["mediaScore","publicScore"]),a(T,{data:o.game},null,8,["data"])])]),e("div",he,[e("div",pe,[_e,e("div",{class:H([o.devOpen?"devOpen":"devClose","relative w-full wrap-text text-primary-gray text-left transition-all duration-700"]),style:{"min-height":"10rem"},ref:"devMsgDiv"},[f(h(o.devMsgContent.content)+" ",1),e("div",ve,[a(p,{class:"text-white text-lg cursor-pointer hover:text-primary-gray active:text-base transition duration-150",onClick:g.openDevMsg,icon:o.devOpen?"chevron-up":"chevron-down"},null,8,["onClick","icon"])])],2)]),e("div",ge,[xe,e("div",null,[e("div",be,[a(b,{class:"rounded-full h-8 w-8",src:o.eval.authorAvatar},null,8,["src"]),e("div",fe,h(o.eval.author),1)]),e("div",ye,[f(h(o.evalContent.content)+" ",1),we]),e("div",Ce,[Se,a(p,{icon:"chevron-right"})])])])]),a(P,{onSend:g.sendComment,modelValue:o.comment,"onUpdate:modelValue":s[1]||(s[1]=n=>o.comment=n),disable:o.commentState},null,8,["onSend","modelValue","disable"]),e("div",ke,[e("div",De,[Ve,(m(!0),_(w,null,C(o.hotComments,n=>(m(),S(k,{key:n.id,comment:n,"enable-min-h":!0,style:{width:"756px",height:"320px"},class:"text-primary-gray bg-light-dark bg-opacity-70 shadow-inner",onThumbsDown:(r,c)=>{n.thumbsDown=r,n.state=c},onThumbsUp:(r,c)=>{n.thumbsUp=r,n.state=c}},null,8,["comment","onThumbsDown","onThumbsUp"]))),128))]),e("div",Ge,[je,(m(!0),_(w,null,C(o.newestComments,n=>(m(),S(k,{key:n.id,comment:n,"img-unit":12,"enable-min-h":!1,onThumbsDown:(r,c)=>{n.thumbsDown=r,n.state=c},onThumbsUp:(r,c)=>{n.thumbsUp=r,n.state=c},style:{width:"520px"},class:"bg-light-dark text-primary-gray bg-opacity-70 shadow-inner"},null,8,["comment","onThumbsDown","onThumbsUp"]))),128))])])])}var Oe=U(ne,[["render",Ue],["__scopeId","data-v-69e4880d"]]);export{Oe as default};
