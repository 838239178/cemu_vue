var O=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var V=(t,s,n)=>s in t?O(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,G=(t,s)=>{for(var n in s||(s={}))q.call(s,n)&&V(t,n,s[n]);if(D)for(var n of D(s))z.call(s,n)&&V(t,n,s[n]);return t},j=(t,s)=>F(t,N(s));import{_ as U,a as d}from"./index.7f831b4b.js";import{D as L,S as A,G as E}from"./GameComment.40db8737.js";import{r as i,o as m,c as _,a as e,b as a,t as h,w as R,e as H,n as B,d as y,g as f,F as w,f as C,u as J,x as K,q as S}from"./vendor.8394f990.js";import"./AnimNum.c8235072.js";const Q={emits:["send","update:modelValue"],props:{modelValue:Object,disable:{type:Boolean,default:()=>!1},bgClass:{default:()=>"bg-gradient-to-r from-light-dark to-primary-black bg-opacity-60"},user:{default:()=>({username:"LikeGhost",avatar:"https://avatars.githubusercontent.com/u/55338151?v=4"})}},watch:{modelValue(t){this.comment=t,this.comment.score/=2}},data(){return{comment:this.modelValue||{}}}},W={class:"rounded"},X={class:"mt-5 text-primary-gray font-semibold"},Y={class:"w-7/10"},Z={class:"text-xs text-gray-500 mb-2 text-left"},$={class:"flex justify-between items-end mt-5"},ee=e("div",{class:"text-left text-xs text-gray-500 my-2"}," \u60A8\u5BF9\u8FD9\u6B3E\u6E38\u620F\u7684\u8BC4\u5206\u662F? ",-1);function te(t,s,n,M,o,g){const p=i("el-image"),x=i("el-input"),b=i("el-rate");return m(),_("div",{class:B(["w-full px-10 pt-10 pb-3 flex justify-around items-start my-10 rounded-2xl shadow-inner",n.bgClass])},[e("div",W,[a(p,{class:"w-32 h-32 rounded",style:{"box-shadow":"2px 2px 5px #171a21"},fit:"fill",src:n.user.avatar},null,8,["src"]),e("div",X,h(n.user.username),1)]),e("div",Y,[e("div",Z,h(n.disable?`\u60A8\u5728 ${o.comment.date} \u8BC4\u4EF7\u4E86\u8FD9\u6B3E\u6E38\u620F`:"\u8BF7\u60A8\u63CF\u8FF0\u60A8\u5BF9\u8FD9\u6B3E\u6E38\u620F\u7684\u770B\u6CD5\uFF0C\u60A8\u7684\u53D1\u8A00\u9700\u8981\u9075\u5FAA\u793E\u533A\u89C4\u8303\uFF0C\u8BF7\u6CE8\u610F\u793C\u8C8C\u7528\u8BED"),1),a(x,{type:"textarea",disabled:n.disable,modelValue:o.comment.content,"onUpdate:modelValue":s[0]||(s[0]=u=>o.comment.content=u),class:"comment-sender",autosize:{minRows:6,maxRows:8}},null,8,["disabled","modelValue"]),e("div",$,[e("div",null,[ee,a(b,{class:"comment-rate",modelValue:o.comment.score,"onUpdate:modelValue":s[1]||(s[1]=u=>o.comment.score=u),disabled:n.disable,"allow-half":"",colors:["#BF1313","#BF1313","#BF1313"]},null,8,["modelValue","disabled"])]),R(e("button",{class:"base-btn rounded-md my-3 h-fit",onClick:s[2]||(s[2]=u=>t.$emit("send",this.comment))},"\u53D1\u8868\u8BC4\u4EF7",512),[[H,!n.disable]])])])],2)}var se=U(Q,[["render",te]]);const oe={components:{DetailPanel:L,ScorePanel:A,GameComment:E,CommentSender:se},data(){return{game:{pics:[]},eval:{},evalContent:{},devMsg:{},devMsgContent:{},newestComments:[],hotComments:[],devOpen:!1,comment:{},commentState:!1}},mounted(){this.$route.query.id&&this.getGame(this.$route.query.id),this.eval=d.getGameEvalByGame(2),this.evalContent=d.getPostContent(this.eval.postId),this.devMsg=d.getDeveloperMessage(2),this.devMsgContent=d.getPostContent(this.devMsg.postId),this.newestComments=d.getGameComments(2).slice(4),this.hotComments=d.getGameComments(2).sort((t,s)=>s.thumbsUp-t.thumbsUp).slice(0,4)},methods:{getGame(t){this.game=d.getGameDateById(t),console.log(this.game)},onCarouselChange(t){this.$refs.gVideo.pause()},openDevMsg(){this.devOpen=!this.devOpen},sendComment(t){this.commentState=!0,t.score*=2,console.log(t.score),this.comment=j(G({},t),{thumbsUp:0,thumbsDown:0,username:"LikeGhost",avatar:"https://avatars.githubusercontent.com/u/55338151?v=4",date:"2021/12/06"}),this.newestComments.splice(0,0,this.comment),this.newestComments.pop()}}},v=t=>(J("data-v-44c5f382"),t=t(),K(),t),ne={class:"mx-auto pt-8 mb-10 w-7/10"},le={class:"flex justify-between items-baseline w-full"},ae={class:"text-left text-3xl text-gray-200 font-bold leading-10 my-8",style:{"text-shadow":"10px 10px 20px black"}},ie=f(" \u8FDB\u5165\u8BBA\u575B "),me={class:"flex justify-between items-center w-full"},re={style:{height:"337px",width:"600px"}},ce=["src","poster"],de={style:{height:"337px",width:"674px"},class:"flex justify-around items-center space-x-6"},ue={class:"flex justify-between items-center w-full"},he={style:{width:"600px"},class:"space-y-8"},pe=v(()=>e("div",{class:"subtitle"},"\u5173\u4E8E\u8FD9\u6B3E\u6E38\u620F",-1)),_e={class:"absolute left-0 bottom-0 w-full text-center bg-gradient-to-t from-primary-black to-transparent"},ve={style:{width:"674px"},class:"space-y-8"},ge=v(()=>e("div",{class:"subtitle"},"\u5A92\u4F53\u8BC4\u4EF7",-1)),xe={class:"flex justify-start items-center space-x-4"},be={class:"text-sm text-dark-white"},fe={class:"relative text-primary-gray w-full mt-4 wrap-text text-left",style:{"max-height":"6rem"}},ye=v(()=>e("div",{class:"absolute left-0 bottom-0 w-full text-center bg-gradient-to-t from-primary-black to-transparent h-3"},null,-1)),we={class:"w-full text-right text-sm text-primary-gray mt-1 hover:text-white transition duration-200 cursor-pointer"},Ce=f(" \u9605\u8BFB\u66F4\u591A.. "),Se={class:"flex justify-between items-start w-full mt-6"},ke={class:"space-y-8",style:{width:"759px"}},De=v(()=>e("div",{class:"subtitle"},"\u6700\u6709\u4EF7\u503C\u7684\u8BC4\u8BBA",-1)),Ve={class:"space-y-8",style:{width:"520px"}},Ge=v(()=>e("div",{class:"subtitle"},"\u6700\u65B0\u8BC4\u8BBA",-1));function je(t,s,n,M,o,g){const p=i("font-awesome-icon"),x=i("el-carousel-item"),b=i("el-image"),u=i("el-carousel"),T=i("ScorePanel"),P=i("DetailPanel"),I=i("CommentSender"),k=i("GameComment");return m(),_("div",ne,[e("div",le,[e("div",ae,h(o.game.name),1),e("div",{class:"text-s2b font-semibold active:text-sm text-dark-white cursor-pointer hover:text-primary-red transition duration-200 bg-light-dark bg-opacity-40 px-4 py-2 rounded-2xl",onClick:s[0]||(s[0]=l=>t.$router.push(`/community?id=${o.game.id}`))},[ie,a(p,{class:"text-primary-red",icon:"chevron-right"})])]),e("div",me,[e("div",re,[a(u,{class:"shadow-lg","indicator-position":"outside",interval:15e3,onChange:g.onCarouselChange},{default:y(()=>[a(x,null,{default:y(()=>[e("video",{class:"w-full h-full",ref:"gVideo",controls:"",muted:"",src:o.game.media,poster:o.game.pics[0]},null,8,ce)]),_:1}),(m(!0),_(w,null,C(o.game.pics.slice(1),l=>(m(),S(x,{key:l},{default:y(()=>[a(b,{src:l,fit:"contain",lazy:!1},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["onChange"])]),e("div",de,[a(T,{mediaScore:o.game.mediaScore,publicScore:o.game.publicScore},null,8,["mediaScore","publicScore"]),a(P,{data:o.game},null,8,["data"])])]),e("div",ue,[e("div",he,[pe,e("div",{class:B([o.devOpen?"devOpen":"devClose","relative w-full wrap-text text-primary-gray text-left transition-all duration-700"]),style:{"min-height":"10rem"},ref:"devMsgDiv"},[f(h(o.devMsgContent.content)+" ",1),e("div",_e,[a(p,{class:"text-white text-lg cursor-pointer hover:text-primary-gray active:text-base transition duration-150",onClick:g.openDevMsg,icon:o.devOpen?"chevron-up":"chevron-down"},null,8,["onClick","icon"])])],2)]),e("div",ve,[ge,e("div",null,[e("div",xe,[a(b,{class:"rounded-full h-8 w-8",src:o.eval.authorAvatar},null,8,["src"]),e("div",be,h(o.eval.author),1)]),e("div",fe,[f(h(o.evalContent.content)+" ",1),ye]),e("div",we,[Ce,a(p,{icon:"chevron-right"})])])])]),a(I,{onSend:g.sendComment,modelValue:o.comment,"onUpdate:modelValue":s[1]||(s[1]=l=>o.comment=l),disable:o.commentState},null,8,["onSend","modelValue","disable"]),e("div",Se,[e("div",ke,[De,(m(!0),_(w,null,C(o.hotComments,l=>(m(),S(k,{key:l.id,comment:l,"enable-min-h":!0,style:{width:"756px",height:"320px"},class:"text-primary-gray bg-light-dark bg-opacity-70 shadow-inner",onThumbsDown:(r,c)=>{l.thumbsDown=r,l.state=c},onThumbsUp:(r,c)=>{l.thumbsUp=r,l.state=c}},null,8,["comment","onThumbsDown","onThumbsUp"]))),128))]),e("div",Ve,[Ge,(m(!0),_(w,null,C(o.newestComments,l=>(m(),S(k,{key:l.id,comment:l,"img-unit":12,"enable-min-h":!1,onThumbsDown:(r,c)=>{l.thumbsDown=r,l.state=c},onThumbsUp:(r,c)=>{l.thumbsUp=r,l.state=c},style:{width:"520px"},class:"bg-light-dark text-primary-gray bg-opacity-70 shadow-inner"},null,8,["comment","onThumbsDown","onThumbsUp"]))),128))])])])}var Ie=U(oe,[["render",je],["__scopeId","data-v-44c5f382"]]);export{Ie as default};
