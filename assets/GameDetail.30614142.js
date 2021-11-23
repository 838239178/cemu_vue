import{_ as S,a}from"./index.f59a642c.js";import{D as k,S as G,G as M}from"./GameComment.3842686f.js";import{r as i,c as r,a as e,t as m,b as n,d as u,n as j,g as d,F as p,f as _,x as P,y as I,o as l,p as v}from"./vendor.e241ceec.js";const B={components:{DetailPanel:k,ScorePanel:G,GameComment:M},data(){return{game:{pics:[]},eval:{},evalContent:{},devMsg:{},devMsgContent:{},newestComments:[],hotComments:[],devOpen:!1}},mounted(){this.$route.query.id&&this.getGame(this.$route.query.id),this.eval=a.getGameEvalByGame(2),this.evalContent=a.getPostContent(this.eval.postId),this.devMsg=a.getDeveloperMessage(2),this.devMsgContent=a.getPostContent(this.devMsg.postId),this.newestComments=a.getGameComments(2).slice(4),this.hotComments=a.getGameComments(2).sort((o,g)=>g.thumbsUp-o.thumbsUp).slice(0,4)},methods:{getGame(o){this.game=a.getGameDateById(o),console.log(this.game)},onCarouselChange(o){this.$refs.gVideo.pause()},openDevMsg(){this.devOpen=!this.devOpen}}},c=o=>(P("data-v-d079f090"),o=o(),I(),o),O={class:"mx-auto pt-8 mb-10 w-7/10"},V={class:"flex justify-between items-baseline w-full"},U={class:"text-left text-3xl text-gray-200 font-bold leading-10 my-8",style:{"text-shadow":"10px 10px 20px black"}},N={class:"text-s2b font-semibold active:text-sm text-dark-white cursor-pointer hover:text-primary-red transition duration-200",style:{"text-shadow":"2px 2xp 10px #171717"}},q=d(" \u8FDB\u5165\u8BBA\u575B "),z={class:"flex justify-between items-center w-full"},E={style:{height:"337px",width:"600px"}},F=["src","poster"],A={style:{height:"337px",width:"674px"},class:"flex justify-around items-center space-x-6"},L={class:"flex justify-between items-center w-full"},T={style:{width:"600px"},class:"space-y-8"},H=c(()=>e("div",{class:"subtitle"},"\u5173\u4E8E\u8FD9\u6B3E\u6E38\u620F",-1)),J={class:"absolute left-0 bottom-0 w-full text-center bg-gradient-to-t from-primary-black to-transparent"},K={style:{width:"674px"},class:"space-y-8"},Q=c(()=>e("div",{class:"subtitle"},"\u5A92\u4F53\u8BC4\u4EF7",-1)),R={class:"flex justify-start items-center space-x-4"},W={class:"text-sm text-dark-white"},X={class:"relative text-primary-gray w-full mt-4 wrap-text text-left",style:{"max-height":"6rem"}},Y=c(()=>e("div",{class:"absolute left-0 bottom-0 w-full text-center bg-gradient-to-t from-primary-black to-transparent h-3"},null,-1)),Z={class:"w-full text-right text-sm text-primary-gray mt-1 hover:text-white transition duration-200 cursor-pointer"},$=d(" \u9605\u8BFB\u66F4\u591A.. "),ee={class:"flex justify-between items-start w-full mt-6"},te={class:"space-y-8",style:{width:"759px"}},se=c(()=>e("div",{class:"subtitle"},"\u6700\u6709\u4EF7\u503C\u7684\u8BC4\u8BBA",-1)),oe={class:"space-y-8",style:{width:"520px"}},ne=c(()=>e("div",{class:"subtitle"},"\u6700\u65B0\u8BC4\u8BBA",-1));function ae(o,g,ie,le,s,x){const h=i("font-awesome-icon"),f=i("el-carousel-item"),y=i("el-image"),b=i("el-carousel"),C=i("ScorePanel"),D=i("DetailPanel"),w=i("GameComment");return l(),r("div",O,[e("div",V,[e("div",U,m(s.game.name),1),e("div",N,[q,n(h,{class:"text-primary-red",icon:"chevron-right"})])]),e("div",z,[e("div",E,[n(b,{class:"shadow-lg","indicator-position":"outside",interval:15e3,onChange:x.onCarouselChange},{default:u(()=>[n(f,null,{default:u(()=>[e("video",{class:"w-full h-full",ref:"gVideo",controls:"",muted:"",src:s.game.media,poster:s.game.pics[0]},null,8,F)]),_:1}),(l(!0),r(p,null,_(s.game.pics.slice(1),t=>(l(),v(f,{key:t},{default:u(()=>[n(y,{src:t,fit:"contain",lazy:!1},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["onChange"])]),e("div",A,[n(C,{mediaScore:s.game.mediaScore,publicScore:s.game.publicScore},null,8,["mediaScore","publicScore"]),n(D,{data:s.game},null,8,["data"])])]),e("div",L,[e("div",T,[H,e("div",{class:j([s.devOpen?"devOpen":"devClose","relative w-full wrap-text text-primary-gray text-left transition-all duration-700"]),style:{"min-height":"10rem"},ref:"devMsgDiv"},[d(m(s.devMsgContent.content)+" ",1),e("div",J,[n(h,{class:"text-white text-lg cursor-pointer hover:text-primary-gray active:text-base transition duration-150",onClick:x.openDevMsg,icon:s.devOpen?"chevron-up":"chevron-down"},null,8,["onClick","icon"])])],2)]),e("div",K,[Q,e("div",null,[e("div",R,[n(y,{class:"rounded-full h-8 w-8",src:s.eval.authorAvatar},null,8,["src"]),e("div",W,m(s.eval.author),1)]),e("div",X,[d(m(s.evalContent.content)+" ",1),Y]),e("div",Z,[$,n(h,{icon:"chevron-right"})])])])]),e("div",ee,[e("div",te,[se,(l(!0),r(p,null,_(s.hotComments,t=>(l(),v(w,{key:t.id,username:t.username,content:t.content,commentDate:t.date,imgSrc:t.avatar,"enable-min-h":!0,thumbs:{up:t.thumbsUp,down:t.thumbsDown,state:0},style:{width:"756px",height:"320px"},class:"text-primary-gray bg-light-dark bg-opacity-70 shadow-inner"},null,8,["username","content","commentDate","imgSrc","thumbs"]))),128))]),e("div",oe,[ne,(l(!0),r(p,null,_(s.newestComments,t=>(l(),v(w,{key:t.id,username:t.username,content:t.content,"img-unit":12,commentDate:t.date,"enable-min-h":!1,imgSrc:t.avatar,thumbs:{up:t.thumbsUp,down:t.thumbsDown,state:0},style:{width:"520px"},class:"bg-light-dark text-primary-gray bg-opacity-70 shadow-inner"},null,8,["username","content","commentDate","imgSrc","thumbs"]))),128))])])])}var de=S(B,[["render",ae],["__scopeId","data-v-d079f090"]]);export{de as default};
