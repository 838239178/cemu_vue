import{_ as v,a as g}from"./index.8fa58a7e.js";import{r as m,o as i,c as u,b as l,d as x,n as b,g as R,t as f,a as c,F as k,f as w,h as S,w as C,u as z,m as D,x as $}from"./vendor.3b2a839d.js";import{P as j}from"./Pagination.21a03042.js";const B={emits:["click-btn"],props:{name:{default:()=>"\u4E0A\u53E4\u5377\u8F745\uFF1A\u5929\u9645"},index:{default:()=>1},tags:{default:()=>["\u5267\u60C5","\u7ECF\u5178","\u5F00\u653E\u4E16\u754C"]},score:{default:()=>8.5},icon:{default:()=>"https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180529/1527578329_606706.jpg"},iconSize:{default:()=>12},indexSize:{default:()=>"lg"}}},P={class:"text-left text-s2b font-semibold hidden-wrap"},T={class:"flex justify-between items-baseline w-full"},V={class:"bg-primary-red px-2 text-sm text-white text-center rounded-xl"};function I(a,e,t,y,n,r){const d=m("el-col"),p=m("el-image"),_=m("el-row");return i(),u("div",{class:"px-2 py-3 cursor-pointer rounded",onClick:e[0]||(e[0]=s=>a.$emit("click-item",t.index))},[l(_,{align:"middle",justify:"space-around"},{default:x(()=>[l(d,{span:2,class:b([`text-${t.indexSize}`,"font-bold primary-gray-color"])},{default:x(()=>[R(f(t.index+1),1)]),_:1},8,["class"]),l(d,{span:6,offset:0},{default:x(()=>[l(p,{class:b([`w-${t.iconSize} h-${t.iconSize}`,"rounded-lg shadow-inner"]),src:t.icon,fit:"fill",lazy:!0},null,8,["class","src"])]),_:1}),l(d,{span:16,class:"space-y-2 px-2"},{default:x(()=>[c("div",P,f(t.name),1),c("div",T,[c("div",V,f(t.score),1),(i(!0),u(k,null,w(t.tags,s=>(i(),u("div",{key:s,class:"underline text-xs text-primary-black"},f(s),1))),128))])]),_:1})]),_:1})])}var G=v(B,[["render",I]]);const N={emits:["click-title"],props:{title:String,data:Array},methods:{delayto(a){setTimeout(()=>{this.$router.push(a)},150)}},components:{RankItem:G}},L={class:"rounded-lg bg-dark-white h-fit space-y-4 pb-4"},U={class:"flex justify-between items-center text-base font-bold text-white rounded-t-lg bg-primary-red py-2 px-3"},F={class:"space-y-8 px-5"};function A(a,e,t,y,n,r){const d=m("font-awesome-icon"),p=m("RankItem"),_=S("wave");return i(),u("div",L,[c("div",U,[R(f(t.title)+" ",1),l(d,{class:"cursor-pointer active:text-sm",icon:"chevron-right",onClick:e[0]||(e[0]=s=>a.$emit("click-title"))})]),c("div",F,[(i(!0),u(k,null,w(t.data,(s,o)=>C((i(),z(p,D({icon:12,class:"mx-auto shadow-lg",key:o},s,{score:s.publicScore,index:o,onClick:h=>r.delayto(`/gamedetail?id=${s.id}`)}),null,16,["score","index","onClick"])),[[_]])),128))])])}var E=v(N,[["render",A]]);const M={components:{SmallRankCard:E,RankItem:G,Pagination:j},data(){return{hotGameRank:[],hightScoreRank:[],bigRankData:[],page:{cur:1,size:12}}},mounted(){this.hotGameRank=g.getGameData(100),this.hightScoreRank=g.getGameData(100).sort((a,e)=>e.publicScore-a.publicScore),this.bigRankData=[...g.getGameData(100),...g.getGameData(100),...g.getGameData(100),...g.getGameData(100)]},methods:{pageUpBound(){return this.page.cur*this.page.size},pageLowBound(){return(this.page.cur-1)*this.page.size},changeTo(a){this.bigRankData=a},delayto(a){setTimeout(()=>{this.$router.push(a)},150)}}},q={class:"my-10 mx-auto w-8/12 flex justify-around items-start"},H={style:{width:"300px"},class:"space-y-8"},J={style:{width:"640px"},class:"bg-dark-white rounded-lg"},K=c("div",{class:"bg-primary-red font-bold text-white py-2 rounded-t-lg"}," \u6392\u884C\u699C ",-1),O={class:"grid grid-flow-col grid-rows-6 gap-x-2 gap-y-5 p-4"};function Q(a,e,t,y,n,r){const d=m("SmallRankCard"),p=m("RankItem"),_=m("Pagination"),s=S("wave");return i(),u("div",q,[c("div",H,[l(d,{class:"w-full",title:"\u70ED\u73A9\u6392\u884C",data:n.hotGameRank.slice(0,3),onClickTitle:e[0]||(e[0]=o=>r.changeTo(n.hotGameRank))},null,8,["data"]),l(d,{class:"w-full",title:"\u9AD8\u5206\u6392\u884C",data:n.hightScoreRank.slice(0,3),onClickTitle:e[1]||(e[1]=o=>r.changeTo(n.hightScoreRank))},null,8,["data"])]),c("div",J,[K,c("div",O,[(i(!0),u(k,null,w(n.bigRankData,(o,h)=>(i(),u(k,{key:h},[h>=r.pageLowBound()&&h<r.pageUpBound()?C((i(),z(p,D({key:0,class:"max-w-xs",iconSize:16,indexSize:"xl",index:h,score:o.publicScore},o,{onClick:W=>r.delayto(`/gamedetail?id=${o.id}`)}),null,16,["index","score","onClick"])),[[s]]):$("",!0)],64))),128))]),l(_,{modelValue:n.page.cur,"onUpdate:modelValue":e[2]||(e[2]=o=>n.page.cur=o),class:"w-full mb-2",maxNum:4,fontSize:"sm",totalPage:Math.ceil(n.bigRankData.length/n.page.size)},null,8,["modelValue","totalPage"])])])}var ee=v(M,[["render",Q]]);export{ee as default};
