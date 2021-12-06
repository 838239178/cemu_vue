var N=Object.defineProperty,P=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var V=(t,s,n)=>s in t?N(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,G=(t,s)=>{for(var n in s||(s={}))F.call(s,n)&&V(t,n,s[n]);if(k)for(var n of k(s))A.call(s,n)&&V(t,n,s[n]);return t},j=(t,s)=>P(t,I(s));import{_ as U,a as d}from"./index.9992dae6.js";import{D as z,S as q,G as E}from"./GameComment.f7018b2e.js";import{r as i,o as m,c as p,a as e,b as a,t as h,w as R,e as L,d as y,n as H,g as b,F as w,f as C,x as J,y as K,p as S}from"./vendor.2c245ada.js";import"./AnimNum.d318e52a.js";const Q={emits:["send","update:modelValue"],props:{modelValue:Object,disable:{type:Boolean,default:()=>!1},user:{default:()=>({username:"ANON"})}},watch:{modelValue(t){this.comment=t}},data(){return{comment:this.modelValue||{}}}},W={class:"w-full px-10 pt-10 pb-3 flex justify-around items-start my-10 rounded-2xl bg-gradient-to-r from-light-dark to-primary-black bg-opacity-60"},X={class:"mt-5 text-primary-gray font-semibold"},Y={class:"w-7/10"},Z={class:"text-xs text-gray-500 mb-2 text-left"},$={class:"flex justify-between items-end mt-5"},ee=e("div",{class:"text-left text-xs text-gray-500 my-2"}," \u60A8\u5BF9\u8FD9\u6B3E\u6E38\u620F\u7684\u8BC4\u5206\u662F? ",-1);function te(t,s,n,B,o,x){const _=i("el-image"),g=i("el-input"),f=i("el-rate");return m(),p("div",W,[e("div",null,[a(_,{class:"w-32 h-32",fit:"fill",src:n.user.avatar},null,8,["src"]),e("div",X,h(n.user.username),1)]),e("div",Y,[e("div",Z,h(n.disable?`\u60A8\u5728 ${o.comment.date} \u8BC4\u4EF7\u4E86\u8FD9\u6B3E\u6E38\u620F`:"\u8BF7\u60A8\u63CF\u8FF0\u60A8\u5BF9\u8FD9\u6B3E\u6E38\u620F\u7684\u770B\u6CD5\uFF0C\u60A8\u7684\u53D1\u8A00\u9700\u8981\u9075\u5FAA\u793E\u533A\u89C4\u8303\uFF0C\u8BF7\u6CE8\u610F\u793C\u8C8C\u7528\u8BED"),1),a(g,{type:"textarea",disabled:n.disable,modelValue:o.comment.content,"onUpdate:modelValue":s[0]||(s[0]=u=>o.comment.content=u),class:"comment-sender",autosize:{minRows:6,maxRows:8}},null,8,["disabled","modelValue"]),e("div",$,[e("div",null,[ee,a(f,{class:"comment-rate",modelValue:o.comment.score,"onUpdate:modelValue":s[1]||(s[1]=u=>o.comment.score=u),disabled:n.disable,"allow-half":"",colors:["#BF1313","#BF1313","#BF1313"]},null,8,["modelValue","disabled"])]),R(e("button",{class:"base-btn rounded-md my-3 h-fit",onClick:s[2]||(s[2]=u=>t.$emit("send",this.comment))},"\u53D1\u8868\u8BC4\u4EF7",512),[[L,!n.disable]])])])])}var se=U(Q,[["render",te]]);const oe={components:{DetailPanel:z,ScorePanel:q,GameComment:E,CommentSender:se},data(){return{game:{pics:[]},eval:{},evalContent:{},devMsg:{},devMsgContent:{},newestComments:[],hotComments:[],devOpen:!1,comment:{},commentState:!1}},mounted(){this.$route.query.id&&this.getGame(this.$route.query.id),this.eval=d.getGameEvalByGame(2),this.evalContent=d.getPostContent(this.eval.postId),this.devMsg=d.getDeveloperMessage(2),this.devMsgContent=d.getPostContent(this.devMsg.postId),this.newestComments=d.getGameComments(2).slice(4),this.hotComments=d.getGameComments(2).sort((t,s)=>s.thumbsUp-t.thumbsUp).slice(0,4)},methods:{getGame(t){this.game=d.getGameDateById(t),console.log(this.game)},onCarouselChange(t){this.$refs.gVideo.pause()},openDevMsg(){this.devOpen=!this.devOpen},sendComment(t){this.commentState=!0,t.score*=2,this.comment=j(G({},t),{thumbsUp:0,thumbsDown:0,username:"ANON",avatar:"",date:"2021/12/06"}),this.newestComments.splice(0,0,this.comment),this.newestComments.pop()}}},v=t=>(J("data-v-d948898c"),t=t(),K(),t),ne={class:"mx-auto pt-8 mb-10 w-7/10"},le={class:"flex justify-between items-baseline w-full"},ae={class:"text-left text-3xl text-gray-200 font-bold leading-10 my-8",style:{"text-shadow":"10px 10px 20px black"}},ie={class:"text-s2b font-semibold active:text-sm text-dark-white cursor-pointer hover:text-primary-red transition duration-200",style:{"text-shadow":"2px 2xp 10px #171717"}},me=b(" \u8FDB\u5165\u8BBA\u575B "),re={class:"flex justify-between items-center w-full"},ce={style:{height:"337px",width:"600px"}},de=["src","poster"],ue={style:{height:"337px",width:"674px"},class:"flex justify-around items-center space-x-6"},he={class:"flex justify-between items-center w-full"},_e={style:{width:"600px"},class:"space-y-8"},pe=v(()=>e("div",{class:"subtitle"},"\u5173\u4E8E\u8FD9\u6B3E\u6E38\u620F",-1)),ve={class:"absolute left-0 bottom-0 w-full text-center bg-gradient-to-t from-primary-black to-transparent"},xe={style:{width:"674px"},class:"space-y-8"},ge=v(()=>e("div",{class:"subtitle"},"\u5A92\u4F53\u8BC4\u4EF7",-1)),fe={class:"flex justify-start items-center space-x-4"},be={class:"text-sm text-dark-white"},ye={class:"relative text-primary-gray w-full mt-4 wrap-text text-left",style:{"max-height":"6rem"}},we=v(()=>e("div",{class:"absolute left-0 bottom-0 w-full text-center bg-gradient-to-t from-primary-black to-transparent h-3"},null,-1)),Ce={class:"w-full text-right text-sm text-primary-gray mt-1 hover:text-white transition duration-200 cursor-pointer"},Se=b(" \u9605\u8BFB\u66F4\u591A.. "),De={class:"flex justify-between items-start w-full mt-6"},ke={class:"space-y-8",style:{width:"759px"}},Ve=v(()=>e("div",{class:"subtitle"},"\u6700\u6709\u4EF7\u503C\u7684\u8BC4\u8BBA",-1)),Ge={class:"space-y-8",style:{width:"520px"}},je=v(()=>e("div",{class:"subtitle"},"\u6700\u65B0\u8BC4\u8BBA",-1));function Ue(t,s,n,B,o,x){const _=i("font-awesome-icon"),g=i("el-carousel-item"),f=i("el-image"),u=i("el-carousel"),M=i("ScorePanel"),O=i("DetailPanel"),T=i("CommentSender"),D=i("GameComment");return m(),p("div",ne,[e("div",le,[e("div",ae,h(o.game.name),1),e("div",ie,[me,a(_,{class:"text-primary-red",icon:"chevron-right"})])]),e("div",re,[e("div",ce,[a(u,{class:"shadow-lg","indicator-position":"outside",interval:15e3,onChange:x.onCarouselChange},{default:y(()=>[a(g,null,{default:y(()=>[e("video",{class:"w-full h-full",ref:"gVideo",controls:"",muted:"",src:o.game.media,poster:o.game.pics[0]},null,8,de)]),_:1}),(m(!0),p(w,null,C(o.game.pics.slice(1),l=>(m(),S(g,{key:l},{default:y(()=>[a(f,{src:l,fit:"contain",lazy:!1},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["onChange"])]),e("div",ue,[a(M,{mediaScore:o.game.mediaScore,publicScore:o.game.publicScore},null,8,["mediaScore","publicScore"]),a(O,{data:o.game},null,8,["data"])])]),e("div",he,[e("div",_e,[pe,e("div",{class:H([o.devOpen?"devOpen":"devClose","relative w-full wrap-text text-primary-gray text-left transition-all duration-700"]),style:{"min-height":"10rem"},ref:"devMsgDiv"},[b(h(o.devMsgContent.content)+" ",1),e("div",ve,[a(_,{class:"text-white text-lg cursor-pointer hover:text-primary-gray active:text-base transition duration-150",onClick:x.openDevMsg,icon:o.devOpen?"chevron-up":"chevron-down"},null,8,["onClick","icon"])])],2)]),e("div",xe,[ge,e("div",null,[e("div",fe,[a(f,{class:"rounded-full h-8 w-8",src:o.eval.authorAvatar},null,8,["src"]),e("div",be,h(o.eval.author),1)]),e("div",ye,[b(h(o.evalContent.content)+" ",1),we]),e("div",Ce,[Se,a(_,{icon:"chevron-right"})])])])]),a(T,{onSend:x.sendComment,modelValue:o.comment,"onUpdate:modelValue":s[0]||(s[0]=l=>o.comment=l),disable:o.commentState},null,8,["onSend","modelValue","disable"]),e("div",De,[e("div",ke,[Ve,(m(!0),p(w,null,C(o.hotComments,l=>(m(),S(D,{key:l.id,comment:l,"enable-min-h":!0,style:{width:"756px",height:"320px"},class:"text-primary-gray bg-light-dark bg-opacity-70 shadow-inner",onThumbsDown:(r,c)=>{l.thumbsDown=r,l.state=c},onThumbsUp:(r,c)=>{l.thumbsUp=r,l.state=c}},null,8,["comment","onThumbsDown","onThumbsUp"]))),128))]),e("div",Ge,[je,(m(!0),p(w,null,C(o.newestComments,l=>(m(),S(D,{key:l.id,comment:l,"img-unit":12,"enable-min-h":!1,onThumbsDown:(r,c)=>{l.thumbsDown=r,l.state=c},onThumbsUp:(r,c)=>{l.thumbsUp=r,l.state=c},style:{width:"520px"},class:"bg-light-dark text-primary-gray bg-opacity-70 shadow-inner"},null,8,["comment","onThumbsDown","onThumbsUp"]))),128))])])])}var Pe=U(oe,[["render",Ue],["__scopeId","data-v-d948898c"]]);export{Pe as default};
