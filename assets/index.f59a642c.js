import{r as d,o as p,c as m,w as P,v as C,a as f,n as x,b as r,d as u,e as R,F as k,f as I,t as _,T as V,g as G,h as A,i as O,j as U,z as F,l as $,_ as z,k as J,m as B}from"./vendor.e241ceec.js";const H=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};H();var q="/assets/logo.ee28b94b.png";class M{constructor(){this.isLock=!1,this.lockList=[]}async getLock(){let e=this;function n(){let s=e.lockList.shift();s?s.resolve(n):e.isLock=!1}return this.isLock?new Promise((s,o)=>{this.lockList.push({resolve:s,reject:o})}):(this.isLock=!0,n)}}var b=(t,e)=>{for(const[n,s]of e)t[n]=s;return t};const W={props:{iptClass:{default:()=>""},placeholder:{default:()=>""},getHints:{type:Function},throttle:{default:()=>200},maxRes:{default:()=>5}},data(){return{showList:!1,hintList:[],value:"",keywordStack:[],throttleTimer:null,preshow:0,lock:new M}},methods:{doThrottle(){let t=new Date().getTime(),e=t-this.preshow;return this.preshow=t,e<=this.throttle},async onInput(t){let e=await this.lock.getLock();this.keywordStack.push(this.value),e(),!this.doThrottle()&&this.doSearch(this.value)},doSearch(t){this.showList=!0,this.hintList=this.getHints(t).slice(0,this.maxRes)},onFocusout(t){setTimeout(()=>{this.showList=!1},150),clearInterval(this.throttleTimer),this.throttleTimer=null,this.keywordStack=[]},onFocusin(t){this.throttleTimer=setInterval(async()=>{let e=await this.lock.getLock();if(this.keywordStack.length==0||this.doThrottle()){e();return}let n=this.keywordStack.pop();this.keywordStack=[],e(),this.doSearch(n)},this.throttle)},clickSearch(t){this.value=t,console.log(this.value)}}},K={class:"relative"},Q=["placeholder"],X={class:"mt-1 px-3 border-b border-l border-r rounded w-11/12 ml-2 h-fit grid grid-cols-1 divide-y divide-primary-gray",style:{"background-color":"inherit",color:"inherit","border-color":"inherit","box-shadow":"3px 5px 15px #333333"}},Y=["onClick"];function Z(t,e,n,s,o,a){const i=d("font-awesome-icon");return p(),m("div",K,[P(f("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>o.value=c),type:"text",class:x(["bg-none border-none p-0 m-0 w-full h-full s-input px-4",n.iptClass]),placeholder:n.placeholder,onChange:e[1]||(e[1]=c=>a.doSearch(o.value)),onFocusin:e[2]||(e[2]=(...c)=>a.onFocusin&&a.onFocusin(...c)),onInput:e[3]||(e[3]=(...c)=>a.onInput&&a.onInput(...c)),onFocusout:e[4]||(e[4]=(...c)=>a.onFocusout&&a.onFocusout(...c))},null,42,Q),[[C,o.value]]),r(i,{class:"absolute right-4 top-1 hover:text-primary-red transition hover:scale-105 duration-200",icon:"search"}),r(V,{name:"el-zoom-in-top"},{default:u(()=>[P(f("div",X,[(p(!0),m(k,null,I(o.hintList,(c,l)=>(p(),m("button",{onClick:h=>a.clickSearch(c),key:l,style:{"font-size":"inherit"},class:"px-4 py-4 w-full text-left"},_(c),9,Y))),128))],512),[[R,o.showList]])]),_:1})])}var ee=b(W,[["render",Z],["__scopeId","data-v-41d8a87a"]]);const te={emits:["linkto","update:modelValue"],props:{opts:{default:()=>[]},modelValue:{default:()=>0}},watch:{modelValue(t){this.selectedIndex=t}},data(){return{tab:"hover:text-white transition duration-300",selectedIndex:this.modelValue}},methods:{linktoEvent(t,e){this.selectedIndex=e,this.$emit("linkto",t,e),this.$emit("update:modelValue",e)}}},ne=["onClick"];function oe(t,e,n,s,o,a){const i=d("font-awesome-icon");return p(),m("div",{class:x(["grid",`grid-cols-${n.opts.length}`])},[(p(!0),m(k,null,I(n.opts,(c,l)=>(p(),m("button",{class:x(["antialiased",[o.tab,o.selectedIndex==l?"text-white font-semibold":""]]),key:l,onClick:h=>a.linktoEvent(c,l)},[f("span",null,[r(i,{icon:c.icon},null,8,["icon"]),G("\xA0\u2009"+_(c.text),1)])],10,ne))),128))],2)}var ae=b(te,[["render",oe]]);const se={emits:["quit-login"],props:{username:{default:()=>"LikeGhost"},avatar:{default:()=>"https://avatars.githubusercontent.com/u/55338151?v=4"}},data(){return{opts:[{text:"\u4E2A\u4EBA\u4E2D\u5FC3",icon:"user"},{text:"\u6536\u85CF\u5939",icon:"heart"},{text:"\u6D88\u606F\u901A\u77E5",icon:"envelope"}]}}},ie={class:"flex justify-between items-center mx-auto"},ce={class:"grid grid-cols-1 divide-y divide-primary-gray"},re={class:"text-primary-gray cursor-pointer"};function de(t,e,n,s,o,a){const i=d("el-image"),c=d("font-awesome-icon"),l=d("el-popover");return p(),m("div",ie,[r(l,{placement:"bottom",width:"150px",trigger:"hover"},{reference:u(()=>[r(i,{class:"rounded-full w-8 h-8",src:n.avatar},null,8,["src"])]),default:u(()=>[f("div",ce,[(p(!0),m(k,null,I(o.opts,h=>(p(),m("button",{key:h,class:"text-left px-4 py-4 active:bg-white flex justify-between items-center ripple"},[r(c,{class:"text-primary-red",icon:h.icon},null,8,["icon"]),G(" "+_(h.text),1)]))),128))])]),_:1}),f("div",re,_(n.username),1),r(c,{onClick:e[0]||(e[0]=h=>t.$emit("quit-login")),class:"text-primary-gray text-lg hover:text-white transition duration-200",icon:"sign-out-alt"})])}var le=b(se,[["render",de]]),pe=`{
    "data": [
        {
            "id": 0,
            "type": "eval",
            "title": "\u300A\u7B3C\u4E2D\u7AA5\u68A6\u300BIGN CN \u8BC4\u6D4B\uFF1A 9 \u5206",
            "desc": "\u7B80\u77ED\u4F46\u7CBE\u5F69\u7684\u89C6\u89C9\u5947\u65C5",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/z-6166534c8ae0d_sevq.280.jpg",
            "date": "2021/11/09 09:12:34",
            "score": "9.0",
            "hotPoint": 156
        },
        {
            "id": 1,
            "type": "eval",
            "title": "\u300AUnpacking\u300BIGN \u8BC4\u6D4B 8 \u5206\uFF1A\u4E0D\u8D39\u4E00\u8A00\u8BB2\u8FF0\u4E00\u6BB5\u4EBA\u751F",
            "desc": "\u4EE4\u4EBA\u5FC3\u6EE1\u610F\u8DB3\u7684\u7985\u610F\u4F53\u9A8C",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/tou-tu-6_pjd5.280.jpg",
            "date": "2021/11/09 09:12:34",
            "score": "8.5",
            "hotPoint": 69
        },
        {
            "id": 2,
            "type": "eval",
            "title": "\u300A\u9010\u5149\u4E4B\u65C5\u300BIGN \u8BC4\u6D4B 6 \u5206\uFF1A\u88AB\u5931\u63A7\u7684\u96BE\u5EA6\u6240\u7D2F",
            "desc": "\u89C9\u5F97\u4E00\u6B3E\u6E38\u620F\u96BE\u5EA6\u9AD8\u5230\u73A9\u4E0D\u4E0B\u53BB\uFF0C\u662F\u6211\u7684\u95EE\u9898\u8FD8\u662F\u6E38\u620F\u7684\u95EE\u9898\uFF1F\u3002",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/20211013145922-1_pkay.280.jpg",
            "date": "2021/11/09 09:12:34",
            "score": "6.0",
            "hotPoint": 42
        },
        {
            "id": 3,
            "type": "eval",
            "title": "\u300A\u5B64\u5C9B\u60CA\u9B42 6\u300BIGN \u8BC4\u6D4B 8 \u5206\uFF1A\u8BE5\u7CFB\u5217\u8FD1\u5341\u5E74\u6765\u6700\u4F73\u4F5C\u54C1",
            "desc": "\u5185\u5BB9\u4E30\u5BCC\uFF0C\u7CBE\u5F69\u7EB7\u5448",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/tou-tu_jgjt.280.jpg",
            "date": "2021/11/09 09:12:34",
            "score": "8.0",
            "hotPoint": 198
        },
        {
            "id": 4,
            "type": "eval",
            "title": "\u300ALone Echo 2\u300BIGN \u8BC4\u6D4B 6 \u5206\uFF1AVR \u89C2\u5149\u529B\u4F5C",
            "desc": "\u60CA\u4EBA\u7684 VR \u666F\u81F4\uFF0C\u6B64\u5916\u522B\u65E0\u4EAE\u70B9",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/tou-tu_j5u8.280.jpg",
            "date": "2021/11/09 09:12:34",
            "score": "6.5",
            "hotPoint": 580
        },
        {
            "id": 5,
            "type": "eval",
            "title": "\u300A\u94F6\u7FFC\u6740\u624B\uFF1A\u9ED1\u83B2\u82B1\u300B\u524D\u4E24\u96C6 IGN \u8BC4\u6D4B 6 \u5206\uFF1A\u6C14\u6C1B\u5230\u4F4D\uFF0C\u7EC6\u8282\u4E0D\u8DB3",
            "desc": "\u4EE5\u5973\u6027\u590D\u5236\u4EBA\u89C6\u89D2\u5EF6\u7EED\u5B98\u65B9\u8BBE\u5B9A\u3002",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/tou-tu-19_kunw.280.jpg",
            "date": "2021/11/09 09:12:34",
            "score": "6.0",
            "hotPoint": 234
        },
        {
            "id": 6,
            "type": "report",
            "title": "\u300A\u4FA0\u76D7\u730E\u8F66\u624B\uFF1A\u4E09\u90E8\u66F2 \u6700\u7EC8\u7248\u300B\u5373\u5C06\u63A8\u51FA\u8865\u4E01",
            "desc": "\u300C\u8FD9\u4E9B\u7ECF\u5178\u6E38\u620F\u66F4\u65B0\u7248\u63A8\u51FA\u65F6\u5E76\u6CA1\u6709\u8FBE\u5230\u6211\u4EEC\u54C1\u8D28\u7684\u6807\u51C6\u300D",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/e8m-w6dwyaufgmc_77a5.280.jpg",
            "date": "2021/11/09 09:12:34",
            "hotPoint": 554
        },
        {
            "id": 7,
            "type": "report",
            "title": "\u300A\u8BE1\u91CE\u897F\u90E8\u300BIGN \u4E0A\u624B\u524D\u77BB\uFF1A\u671F\u76FC\u5DF2\u4E45\u7684\u9634\u6697\u795E\u79D8\u897F\u90E8\u6076\u571F",
            "desc": "\u8FD9\u4EFD\u7B49\u5F85\u503C\u5F97\u5417\uFF1F",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/tou-tu-8_wckf.280.jpg",
            "date": "2021/11/09 09:12:34",
            "hotPoint": 145
        },
        {
            "id": 8,
            "type": "report",
            "title": "\u300A\u4EBA\u7C7B\uFF08HUMANKIND\uFF09\u300B\u4F53\u9A8C\u7248\u4E0A\u7EBF\u9884\u544A",
            "desc": "\u91CD\u65B0\u4E66\u5199\u4EBA\u7C7B\u7684\u6574\u4E2A\u6545\u4E8B\u3002",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/humankindthumb-1611591485982_px7p.280.jpg",
            "date": "2021/11/09 09:12:34",
            "hotPoint": 89
        },
        {
            "id": 9,
            "type": "report",
            "title": "\u300A\u827E\u5C14\u767B\u6CD5\u73AF\u300BIGN JP \u8BD5\u73A9\u62A5\u544A\uFF1A\u300A\u9ED1\u6697\u4E4B\u9B42\u300B\u7CFB\u5217\u7684\u6B63\u7EDF\u8FDB\u5316\u4E4B\u4F5C",
            "desc": "\u5BF9\u4E8E From Software \u65B0\u4F5C\u7684\u4E00\u6B21\u5168\u65B9\u4F4D\u4F53\u9A8C",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/14tou-tu_k78p.280.jpg",
            "date": "2021/11/09 09:12:34",
            "hotPoint": 101
        },
        {
            "id": 10,
            "type": "report",
            "title": "\u8D81\u70ED\u6253\u94C1\u7684\u300A\u7834\u8D25\u738B\u8005\uFF1A\u82F1\u96C4\u8054\u76DF\u4F20\u5947\u300B\u80FD\u5426\u8FDB\u4E00\u6B65\u63A8\u9AD8 IP \u77E5\u540D\u5EA6\uFF1F",
            "desc": "\u300A\u82F1\u96C4\u8054\u76DF\u300B\u6765\u5230\u4E3B\u5355\u673A\u4E16\u754C",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/ruined-king-1920x10801-waf7_r83h.280.jpg",
            "date": "2021/11/09 09:12:34",
            "hotPoint": 190
        },
        {
            "id": 11,
            "type": "report",
            "title": "IGN \u72EC\u5BB6\u4E28\u300A\u5149\u73AF\uFF1A\u65E0\u9650\u300B\u6218\u5F79\u6A21\u5F0F\u4E0A\u624B\u524D\u77BB",
            "desc": "4 \u5C0F\u65F6\u8BD5\u73A9\u4E00\u626B\u6240\u6709\u62C5\u5FE7\u3002",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/halo-infinite-1630192349113_2tq3.280.jpg",
            "date": "2021/11/09 09:12:34",
            "hotPoint": 156
        },
        {
            "id": 12,
            "type": "report",
            "title": "\u300A\u5B9D\u53EF\u68A6 \u6676\u707F\u94BB\u77F3\uFF0F\u660E\u4EAE\u73CD\u73E0\u300B\u524D\u77BB\uFF1A\u6211\u5FC3\u5FC3\u5FF5\u5FF5\u7684\u8001\u6D3E\u300A\u5B9D\u53EF\u68A6\u300B",
            "desc": "\u60F3\u77E5\u9053\u79D8\u4F20\u62DB\u5F0F\u6539\u6210\u4EC0\u4E48\u6837\u4E86\u5417\uFF1F",
            "author": "IGN\u4E2D\u56FD",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/tou-tu_gdqm.280.jpg",
            "date": "2021/11/09 09:12:34",
            "hotPoint": 888
        },
        {
            "id": 13,
            "type": "eval",
            "title": "\u6781\u9650\u7ADE\u901F\uFF1A\u5730\u5E73\u7EBF 5 - \u8BC4\u6D4B",
            "desc": "\u65B0\u610F\u4E0D\u8DB3\uFF0C\u4F46\u91CF\u5927\u7BA1\u9971",
            "author": "IGN\u4E2D\u56FD",
            "authorAvatar": "https://www.ign.com.cn/s/ign/logo_ign.png",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/forza-horizon-5-1628536441457_ue43.640.jpg",
            "date": "2021/11/09 09:12:34",
            "gameId": 2,
            "postId": 0,
            "score": "9.5",
            "hotPoint": 580
        },
        {
            "id": 14,
            "type": "devmsg",
            "postId": 1,
            "gameId": 2,
            "title": "\u300ALone Echo 2\u300BIGN \u8BC4\u6D4B 6 \u5206\uFF1AVR \u89C2\u5149\u529B\u4F5C",
            "desc": "\u60CA\u4EBA\u7684 VR \u666F\u81F4\uFF0C\u6B64\u5916\u522B\u65E0\u4EAE\u70B9",
            "author": "IGN\u4E2D\u56FD",
            "authorAvatar": "",
            "pic": "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/tou-tu_j5u8.280.jpg",
            "date": "2021/11/09 09:12:34",
            "hotPoint": 580
        }
    ]
}`,me=`{
    "data": [
        {
            "id": 0,
            "name": "\u7FFC\u661F\u6C42\u751FICARUS",
            "desc": "\u300A\u7FFC\u661F\u6C42\u751FICARUS\u300B\u662F\u4E00\u6B3E\u4E0E\u65F6\u95F4\u8D5B\u8DD1\u7684PvE\u751F\u5B58\u6E38\u620F\uFF0C\u53EF\u652F\u6301\u591A\u8FBE\u516B\u540D\u73A9\u5BB6\u6216\u8FDB\u884C\u5355\u4EBA\u6E38\u620F\u3002\u63A2\u7D22\u5730\u7403\u5316\u6539\u9020\u51FA\u9519\u540E\u86EE\u8352\u7684\u5916\u661F\u8352\u91CE\u3002\u5C3D\u53EF\u80FD\u5730\u751F\u5B58\u6765\u5F00\u91C7\u5916\u6765\u7269\u8D28\uFF0C\u7136\u540E\u8FD4\u56DE\u8F68\u9053\u53BB\u7814\u53D1\u66F4\u5148\u8FDB\u7684\u79D1\u6280\u3002",
            "date": "2021/12/05",
            "deployer": "RocketWerkz",
            "tags":["\u5F00\u653E\u4E16\u754C","\u751F\u5B58","\u5408\u4F5C"],
            "publisher": "RocketWerkz,Yooreka Studio",
            "icon": "https://imgo.hackhome.com/img2021/10/15/8/445611708_APP.png",
            "media": "https://media.st.dl.pinyuncloud.com/steam/apps/256849255/movie480_vp9.webm?t=1634249033",
            "pics": [
                "https://media.st.dl.pinyuncloud.com/steam/apps/1149460/header_alt_assets_5.jpg?t=1637410881",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1149460/ss_bc851d8fd4cec772d67e85971290a3defba0834d.600x338.jpg?t=1637410881",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1149460/ss_71f43de935c84c807b1f53806228452edce37e2f.600x338.jpg?t=1637410881",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1149460/ss_6850fcdc61539f9d05a30be0401fa629b9af0974.600x338.jpg?t=1637410881"
            ],
            "hotPoint": 50,
            "publicScore": "8.5",
            "mediaScore": "7.5"
        },
        {
            "id": 1,
            "name": "\u6C38\u52AB\u65E0\u95F4",
            "desc": "\u6325\u821E\u5229\u5203\uFF0C\u65A9\u6740\uFF01\u7AEF\u8D77\u706B\u67AA\uFF0C\u7206\u5934\uFF01\u4EAB\u53D7\u8FDC\u8FD1\u7ED3\u5408\u7684\u534E\u4E3D\u6218\u6597\uFF01 \u5728\u623F\u9876\u8DD1\u9177\uFF0C\u5728\u6811\u6797\u4E2D\u98DE\u7D22\u7A7F\u68AD\uFF0C\u5E7F\u5927\u7684\u5730\u56FE\u4EFB\u541B\u9AD8\u901F\u524D\u884C\uFF01 \u6D3B\u7528\u82F1\u96C4\u80FD\u529B\uFF0C\u7528\u98CE\u6C99\u3001\u9690\u8EAB\uFF0C\u751A\u81F3\u5316\u8EAB\u91D1\u521A\u5927\u4F5B\u78BE\u788E\u654C\u4EBA\uFF01 \u72EC\u4E00\u65E0\u4E8C\u768460\u4EBA\u751F\u5B58\u7ADE\u6280\uFF0C\u6210\u4E3A\u6700\u540E\u7684\u8D62\u5BB6\uFF01",
            "date": "2021/08/12",
            "deployer": "24 Entertainment",
            "tags":["\u5927\u9003\u6740","\u591A\u4EBA","\u6B66\u4FA0"],
            "publisher": "NetEase Games Montr\xE9al",
            "icon": "https://t8.baidu.com/it/u=3065768867,2125629258&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=7ef24ae16b2eb6dfd6b709ec06082d46",
            "media": "https://media.st.dl.pinyuncloud.com/steam/apps/256859786/movie480_vp9.webm?t=1636599639",
            "pics": [
                "https://media.st.dl.pinyuncloud.com/steam/apps/1203220/header_schinese.jpg?t=1637325041",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1203220/ss_1878270e385ae4041e5cfdf8786133e60e95ee1b.600x338.jpg?t=1637325041",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1203220/ss_c20028a6679d85c5cd837d0e3875e679357a6235.600x338.jpg?t=1637325041",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1203220/ss_aaed2cb09d1d44af3f9afd47ebf86efa1a56b8c8.600x338.jpg?t=1637325041"
            ],
            "hotPoint": 199,
            "publicScore": "9.5",
            "mediaScore": "9.0"
        },
        {
            "id": 2,
            "name": "\u6781\u9650\u7ADE\u901F\uFF1A\u5730\u5E73\u7EBF 5",
            "desc": "\u60A8\u7684\u7EC8\u6781\u5730\u5E73\u7EBF\u5192\u9669\u6B63\u7B49\u7740\u60A8\u5C55\u5F00\uFF01\u63A2\u7D22\u58A8\u897F\u54E5\u5145\u6EE1\u6D3B\u529B\u4E14\u4E0D\u65AD\u53D8\u5316\u7684\u5F00\u653E\u4E16\u754C\u666F\u8272\uFF0C\u9A7E\u9A76\u767E\u8F86\u4E16\u754C\u7EA7\u597D\u8F66\uFF0C\u4EAB\u53D7\u65E0\u62D8\u65E0\u675F\u53C8\u6709\u8DA3\u7684\u9A7E\u9A76\u4F53\u9A8C\u3002\u7ACB\u5373\u5C55\u5F00\u60A8\u7684\u5730\u5E73\u7EBF\u5192\u9669\u5E76\u5C06\u672C\u6E38\u620F\u6DFB\u52A0\u5230\u60A8\u7684\u613F\u671B\u5217\u8868\u5427\uFF01",
            "date": "2021/11/09",
            "deployer": "Playground Gamest",
            "tags":["\u7ADE\u901F","\u6C7D\u8F66","\u5F00\u653E\u4E16\u754C"],
            "publisher": "Xbox Game Studios",
            "icon": "http://i-1.onegreen.net/2021/0828/4e695815a1bb46299f79991e2d63025c.jpg",
            "media": "https://media.st.dl.pinyuncloud.com/steam/apps/256859757/movie480_vp9.webm?t=1636489104",
            "pics": [
                "https://media.st.dl.pinyuncloud.com/steam/apps/1551360/header.jpg?t=1636489113",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1551360/ss_b65236b365315ebb6da6114ce42cd74b59cab3c8.600x338.jpg?t=1636489113",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1551360/ss_0a13a7ccd38e7c3e6a5f1720050732833b53b6a8.600x338.jpg?t=1636489113",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1551360/ss_733100a0e305025cfea4797c14cb55a9e2673521.600x338.jpg?t=1636489113"
            ],
            "hotPoint": 52,
            "publicScore": "9.0",
            "mediaScore": "8.5"
        },
        {
            "id": 3,
            "name": "\u6218\u5730\u98CE\u4E91\u2122 2042",
            "desc": "\u300A\u6218\u5730\u98CE\u4E91\u2122 2042\u300B\u662F\u4E00\u6B3E\u7B2C\u4E00\u4EBA\u79F0\u5C04\u51FB\u6E38\u620F\uFF0C\u672C\u4F5C\u5C06\u5E26\u9886\u73A9\u5BB6\u91CD\u8FD4\u8BE5\u7CFB\u5217\u6807\u5FD7\u6027\u7684\u5168\u9762\u6218\u4E89\u3002\u8D70\u8FDB\u56E0\u5931\u5E8F\u800C\u9762\u76EE\u5168\u975E\u7684\u8FD1\u672A\u6765\u4E16\u754C\uFF0C\u5728\u5C0F\u961F\u961F\u53CB\u548C\u5C16\u7AEF\u6B66\u5668\u7684\u5E2E\u52A9\u4E0B\uFF0C\u9002\u5E94\u5E76\u5F81\u670D\u77AC\u606F\u4E07\u53D8\u7684\u6218\u573A\u3002",
            "date": "2021/11/19",
            "deployer": "DICE",
            "tags":["\u5C04\u51FB","\u7B2C\u4E00\u4EBA\u79F0","\u591A\u4EBA"],
            "publisher": "Electronic Arts",
            "icon": "https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/homepage/images/2021/11/bf-2042-hero-large-accolades-16x9-xl.jpg.adapt.crop1x1.767w.jpg",
            "media": "https://media.st.dl.pinyuncloud.com/steam/apps/256856452/movie480_vp9.webm?t=1634653465",
            "pics": [
                "https://media.st.dl.pinyuncloud.com/steam/apps/1517290/header_schinese.jpg?t=1637392604",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1517290/ss_731b9a3f02ab15c517b9c42c3cbe9a71866be4d4.600x338.jpg?t=1637392604",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1517290/ss_359ba55164486c529df9e9b2c0eee6bd3967baf7.600x338.jpg?t=1637392604",
                "https://media.st.dl.pinyuncloud.com/steam/apps/1517290/ss_266fb5de64cdffb8e3261a771d32ba8edd5d5259.600x338.jpg?t=1637392604"
            ],
            "hotPoint": 120,
            "publicScore": "3.0",
            "mediaScore": "7.0"
        }
    ]
}`,ue=`{
    "data": [
        {
            "id": 0,
            "gameId": 2,
            "username": "\u5367\u69FD\u6211\u5012\u4E86",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/97/97caee00eb9e2fd9f78eaf034b7f9f4d2fd9210d.jpg",
            "content": "\u633A\u597D\u73A9\u7684",
            "thumbsUp": 1,
            "thumbsDown": 0,
            "date": "2021/11/09 13:01"
        },
        {
            "id": 1,
            "gameId": 2,
            "username": "HygRogen",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/2b/2b11e47aadf6b69a87545be7ca35a00e00161580.jpg",
            "content": "\u6B22\u8FCE\u6765\u5230\u72B7\u91CE\u4E4B\u5730\u2014\u2014\u58A8\u897F\u54E5\u300A\u6781\u9650\u7ADE\u901F\uFF1A\u5730\u5E73\u7EBF\u300B\uFF0C\u4ECE\u7F8E\u56FD\u51FA\u53D1\uFF0C\u8D70\u8FC7\u4E86\u6CD5\u56FD\u548C\u610F\u5927\u5229\uFF0C\u5230\u8BBF\u4E86\u5F7C\u5CB8\u7684\u6FB3\u5927\u5229\u4E9A\uFF0C\u7A7F\u8FC7\u4E86\u5927\u4E0D\u5217\u98A0\uFF0C\u73B0\u5728\u53C8\u5E26\u9886\u73A9\u5BB6\u4EEC\uFF0C\u6765\u5230\u4E86\u5954\u653E\u4E0D\u7F81\u7684\u58A8\u897F\u54E5\u3002\u4F5C\u4E3A\u5730\u8868\u6700\u5F3A\u8D5B\u8F66\u6E38\u620F\uFF0C\u300A\u6781\u9650\u7ADE\u901F\uFF1A\u5730\u5E73\u7EBF5\u300B\u518D\u4E00\u6B21\u5411\u73A9\u5BB6\u4EEC\u5C55\u793A\u4E86\u60CA\u8273\u7684\u753B\u9762\u4E0E\u6E38\u620F\u4F53\u9A8C\u3002",
            "thumbsUp": 101,
            "thumbsDown": 1,
            "date": "2021/11/09 13:01"
        },
        {
            "id": 2,
            "gameId": 2,
            "username": "\u4E00\u53EA\u53E4\u96F6",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/36/362150cd57b9d4d15beb9c71b4e7be6e245e33f5.jpg",
            "content": "\u201C\u4E3A\u4EC0\u4E48\u559C\u6B22\u5730\u5E73\u7EBF\u7CFB\u5217\uFF1F\u201D \u201C\u8FD9\u662F\u4E00\u4E2A\u201C\u4E0D\u8BBE\u9650\u201D\u7684\u8D5B\u8F66\u6E38\u620F\u3002\u201D\u672C\u6765\u60F3\u9488\u5BF9\u300A\u5730\u5E73\u7EBF5\u300B\u505A\u4E00\u4E2A\u8BBE\u95EE\uFF0C\u4F46\u662F\u60F3\u4E86\u5F88\u4E45\u786E\u5B9E\u6709\u70B9\u96BE\u2014\u2014\u6BD5\u7ADF\u300A\u5730\u5E73\u7EBF5\u300B\u6709\u7684\u4F18\u70B9\u300A\u5730\u5E73\u7EBF4\u300B\u90FD\u6709\u3002",
            "thumbsUp": 49,
            "thumbsDown": 2,
            "date": "2021/11/09 13:01"
        },
        {
            "id": 3,
            "gameId": 2,
            "username": "\u5C0F\u5C0F\u6625",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/c4/c43ca8764f050adc3d12425a50c2f6a4a8da837f.jpg",
            "content": "12\u4E2A\u5B57\u603B\u7ED3\u5730\u5E73\u7EBF5\uFF1A\u6211\u4E00\u8DEF\u5411\u5317 \u79BB\u5F00\u6709\u4F60\u7684\u5B63\u8282",
            "thumbsUp": 19,
            "thumbsDown": 0,
            "date": "2021/11/09 13:01"
        },
        {
            "id": 4,
            "gameId": 2,
            "username": "\u6211\u505A\u8F66\u624B",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/97/97caee00eb9e2fd9f78eaf034b7f9f4d2fd9210d.jpg",
            "content": "2021\u5E7411\u67083\u65E5\u6DF1\u591C12\u70B9\u300A\u6218\u57302042\u300B\u4E0E\u300A\u6781\u9650\u7ADE\u901F\uFF1A\u5730\u5E73\u7EBF5\u300B\uFF0C\u5728\u601D\u60F3\u6597\u4E89\u4E0B\uFF0C\u6700\u7EC8\u9009\u62E9\u4E86\u540E\u8005\u3002\u6211\u662F\u806A\u660E\u903C",
            "thumbsUp": 22,
            "thumbsDown": 1,
            "date": "2021/11/09 13:01"
        },
        {
            "id": 5,
            "gameId": 2,
            "username": "AlexHerly",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/44/44a465e9f7ef61fa2d279fd0cc41c329a0883d10.jpg",
            "content": "\u6BCF\u4E00\u4F5C\u90FD\u652F\u6301\u3002\u7ADE\u901F\u5927\u4F5C\u7684\u5DC5\u5CF0\u4EAB\u53D7\u3002",
            "thumbsUp": 1,
            "thumbsDown": 0,
            "date": "2021/11/09 13:01"
        },
        {
            "id": 6,
            "gameId": 2,
            "username": "\u57CE\u5317\u5F90\u516C",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/44/44a465e9f7ef61fa2d279fd0cc41c329a0883d10.jpg",
            "content": "\u5C3C\u739B\u7684 \u52B3\u8D44\u73A9\u4E2A\u6E38\u620F\u8FD8\u5F97\u770B\u6E38\u620F\u8138\u8272 \u95EA\u9000\u582A\u6BD4\u50BB\u903C\u602A\u730E\u7269\u8BED \u8981\u4E48\u4E0D\u95EA\u9000 \u8981\u4E48\u73A9\u4E00\u4F1A\u5C31\u95EA\u9000 \u975E\u5F97\u8DEA\u4E0B\u7ED9\u7535\u8111\u78D5\u4E09\u5934\u662F\u5427 \u50BB\u903C",
            "thumbsUp": 44,
            "thumbsDown": 20,
            "date": "2021/11/09 13:01"
        },
        {
            "id": 7,
            "gameId": 2,
            "username": "\u5976\u53FD",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/e9/e93528f9920cda04fdd1c858fc7121d162445d22.jpg",
            "content": "\u5E8F\u7AE0\u4E00\u5230\u4E1B\u6797\u5C31\u95EA\u9000\uFF0C\u4F18\u5316\u771F\u5783\u573E",
            "thumbsUp": 14,
            "thumbsDown": 9,
            "date": "2021/11/09 13:01"
        },
        {
            "id": 8,
            "gameId": 2,
            "username": "Qin",
            "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/9b/9b0d4b5213c802759546e82adf1d5fa8d9d2f6a8.jpg",
            "content": "\u5982\u679C\u4F60\u60F3\u73A9\u7684\u591F\u723D\uFF0C\u9009\u5730\u5E73\u7EBF\u3002\u5982\u679C\u4F60\u60F3\u82B1\u91CC\u80E1\u54E8\uFF0C\u9009\u5730\u5E73\u7EBF\u3002\u5982\u679C\u4F60\u60F3\u6539\u88C5\u8C03\u6821\uFF0C\u9009\u5730\u5E73\u7EBF\u3002\u5982\u679C\u4F60\u60F3\u95EA\u9000\u6389\u7EBF\uFF0C\u9009\u5730\u5E73\u7EBF",
            "thumbsUp": 25,
            "thumbsDown": 1,
            "date": "2021/11/09 13:01"
        }
    ]
}`,he=`{
    "data":[
        {
            "id": 0,
            "content": "\u65F6\u9694\u4E09\u5E74\u591A\uFF0C\u5DF2\u7ECF\u9010\u6E10\u6210\u957F\u4E3A\u5F00\u653E\u4E16\u754C\u7ADE\u901F\u6E38\u620F\u625B\u628A\u5B50\u7684\u300A\u6781\u9650\u7ADE\u901F\uFF1A\u5730\u5E73\u7EBF\u300B\u7CFB\u5217\u8FCE\u6765\u7B2C\u4E94\u90E8\u4F5C\u54C1\u3002\u8FD9\u4E00\u6B21\u6E38\u620F\u821E\u53F0\u662F\u5145\u6EE1\u62C9\u4E01\u98CE\u60C5\u7684\u58A8\u897F\u54E5\uFF0C\u5305\u542B\u706B\u5C71\u3001\u70ED\u5E26\u96E8\u6797\u3001\u6D77\u6EE9\u3001\u4FDD\u7559\u4E86\u897F\u73ED\u7259\u6B96\u6C11\u65F6\u4EE3\u98CE\u683C\u5EFA\u7B51\u7684\u5C0F\u9547\u7B49\u591A\u79CD\u72EC\u7279\u7684\u5730\u5F62\u5730\u8C8C\uFF0C\u6B64\u5916\u97F3\u4E50\u4E0E\u7ED8\u753B\u4E5F\u5F88\u6709\u8FA8\u8BC6\u5EA6\uFF0C\u8FD9\u4E00\u70B9\u5728\u4E4B\u524D\u516C\u5E03\u7684\u5E8F\u7AE0\u5185\u5BB9\u90FD\u6709\u5C55\u793A\u3002\u56E0\u6B64\u4ECE\u8FDB\u5165\u6E38\u620F\u7684\u90A3\u4E00\u523B\u5F00\u59CB\uFF0C\u73A9\u5BB6\u5C31\u80FD\u660E\u663E\u611F\u89C9\u5230\u8FD9\u91CC\u8DDF\u300A\u5730\u5E73\u7EBF 4\u300B\u82F1\u56FD\u573A\u666F\u7684\u4E0D\u540C\u4E4B\u5904\uFF0C\u91CE\u5916\u573A\u666F\u7684\u89C6\u91CE\u66F4\u5F00\u9614\uFF0C\u690D\u88AB\u79CD\u7C7B\u4E0D\u540C\u4E14\u5BC6\u5EA6\u660E\u663E\u53D8\u4F4E\uFF0C\u4F46\u5730\u5F62\u8D77\u4F0F\u66F4\u5927\uFF0C\u4E0D\u65F6\u80FD\u591F\u770B\u5230\u4E00\u4E9B\u5E9F\u5F03\u5EFA\u7B51\u4E0E\u8D5B\u573A\u666F\u89C2\uFF0C\u7ED9\u4EBA\u4E00\u79CD\u5728\u8352\u539F\u5E9F\u571F\u5192\u9669\u7684\u611F\u89C9\u3002\u6E38\u620F\u7684\u8F66\u8F86\u9635\u5BB9\u5728\u524D\u4F5C\u57FA\u7840\u4E0A\u53C8\u589E\u52A0\u4E86\u4E0D\u5C11\uFF0C\u6E38\u620F\u5185\u7684\u6570\u636E\u663E\u793A\u521D\u59CB\u7248\u672C\u5C31\u8FBE\u5230\u4E86 538 \u8F86\uFF0C\u540E\u671F\u8FD8\u4F1A\u968F\u7740\u8D5B\u5B63\u66F4\u8FED\u3001\u4E8B\u4EF6\u4EFB\u52A1\u4E0D\u65AD\u6709\u65B0\u8F66\u52A0\u5165\uFF0C\u518D\u7ED3\u5408\u6210\u719F\u4E14\u786C\u6838\u7684\u4E2A\u6027\u5316\u914D\u4EF6\u4EE5\u53CA\u8F66\u8F86\u672C\u8EAB\u7684\u6539\u88C5\u529F\u80FD\uFF0C\u4ECE\u5185\u5BB9\u91CF\u6765\u8BB2\u5B9E\u5728\u826F\u5FC3\u3002"
        },
        {
            "id": 1,
            "content": "\u60A8\u7684\u7EC8\u6781\u5730\u5E73\u7EBF\u5192\u9669\u6B63\u7B49\u7740\u60A8\u5C55\u5F00\uFF01\u63A2\u7D22\u58A8\u897F\u54E5\u5145\u6EE1\u6D3B\u529B\u4E14\u4E0D\u65AD\u53D8\u5316\u7684\u5F00\u653E\u4E16\u754C\u666F\u8272\uFF0C\u9A7E\u9A76\u767E\u8F86\u4E16\u754C\u7EA7\u597D\u8F66\uFF0C\u4EAB\u53D7\u65E0\u62D8\u65E0\u675F\u53C8\u6709\u8DA3\u7684\u9A7E\u9A76\u4F53\u9A8C\u3002\u8FD9\u662F\u60A8\u7684\u5730\u5E73\u7EBF\u5192\u9669\u5728\u58A8\u897F\u54E5\u5145\u6EE1\u6D3B\u529B\u5E76\u4E0D\u65AD\u53D8\u5316\u7684\u5F00\u653E\u4E16\u754C\u666F\u8272\u4E2D\uFF0C\u9A7E\u9A76\u767E\u8F86\u4E16\u754C\u7EA7\u597D\u8F66\uFF0C\u4EAB\u53D7\u65E0\u62D8\u65E0\u675F\u53C8\u6709\u8DA3\u7684\u9A7E\u9A76\u4F53\u9A8C\uFF0C\u5E76\u5F00\u59CB\u4EE4\u4EBA\u5C4F\u606F\u7684\u63A2\u9669\u3002\u8FD9\u662F\u591A\u5143\u5316\u7684\u5F00\u653E\u4E16\u754C\u63A2\u7D22\u666F\u8272\u53CD\u5DEE\u60AC\u6B8A\u3001\u7F8E\u4E3D\u65E0\u6BD4\u7684\u4E16\u754C\u3002\u53D1\u6398\u5145\u6EE1\u751F\u6C14\u7684\u6C99\u6F20\u3001\u8302\u5BC6\u7684\u4E1B\u6797\u3001\u5145\u6EE1\u5386\u53F2\u7684\u57CE\u5E02\u3001\u9690\u85CF\u7684\u5E9F\u589F\u3001\u539F\u59CB\u7684\u6D77\u6EE9\u3001\u5E7F\u5927\u7684\u5CE1\u8C37\u548C\u7EC8\u5E74\u79EF\u96EA\u7684\u9AD8\u8038\u706B\u5C71\u3002\u8FD9\u662F\u5145\u6EE1\u5192\u9669\u7684\u5F00\u653E\u4E16\u754C\u3002\u8BA9\u81EA\u5DF1\u6C89\u6D78\u5728\u5145\u6EE1\u767E\u79CD\u6311\u6218\u7684\u6DF1\u5EA6\u5267\u60C5\uFF0C\u5E76\u4EE5\u4ECE\u4E8B\u81EA\u5DF1\u559C\u7231\u7684\u6D3B\u52A8\u4F5C\u4E3A\u5956\u52B1\u3002\u8BA4\u8BC6\u5168\u65B0\u7684\u89D2\u8272\uFF0C\u5E76\u4E3A\u8FD9\u4E9B\u89D2\u8272\u7684\u5730\u5E73\u7EBF\u6545\u4E8B\u4EFB\u52A1\u9009\u62E9\u7ED3\u5C40\u3002\u8FD9\u662F\u4E0D\u65AD\u53D8\u5316\u7684\u5F00\u653E\u4E16\u754C\u3002\u6311\u6218\u58A8\u897F\u54E5\u72EC\u4E00\u65E0\u4E8C\u3001\u4EE4\u4EBA\u60CA\u8273\u4E0D\u5DF2\u7684\u6C14\u5019\u8D5B\u4E8B\uFF0C\u4ECE\u9AD8\u8038\u7684\u6C99\u5C18\u66B4\u5230\u5267\u70C8\u7684\u70ED\u5E26\u98CE\u66B4\u8D5B\u4E8B\uFF0C\u4E0D\u65AD\u53D8\u5316\u7684\u5B63\u8282\u6BCF\u5468\u90FD\u5C06\u6539\u53D8\u8FD9\u4E2A\u4E16\u754C\u3002\u6301\u7EED\u56DE\u6765\u6E38\u620F\uFF0C\u4EE5\u4EAB\u53D7\u5168\u65B0\u8D5B\u4E8B\u3001\u6311\u6218\u3001\u6536\u85CF\u54C1\u3001\u5956\u52B1\uFF0C\u4EE5\u53CA\u53EF\u4F9B\u63A2\u9669\u7684\u5168\u65B0\u533A\u57DF\u3002\u6BCF\u4E2A\u5B63\u8282\u90FD\u6709\u7740\u81EA\u5DF1\u72EC\u7279\u7684\u7F8E\u3002\u7ACB\u5373\u5C55\u5F00\u60A8\u7684\u5730\u5E73\u7EBF\u5192\u9669\u5427"
        }
    ]
}`,ge=`{
    "data": [
        "https://syimg.3dmgame.com/uploadimg/ico/2021/0816/1629112611148632.jpg",
        "https://syimg.3dmgame.com/uploadimg/ico/2021/1110/1636506610444224.jpg"
    ]
}`;let v=JSON.parse(pe),y=JSON.parse(me),fe=JSON.parse(ue),_e=JSON.parse(he),be=JSON.parse(ge);var ve={getGameReports(t,e=0){return v.data.filter(n=>n.type=="report").slice(e,t)},getGameEvalByGame(t){return v.data.find(e=>e.gameId==t&&e.type=="eval")},getDeveloperMessage(t){return v.data.find(e=>e.gameId==t&&e.type=="devmsg")},getGameEvals(t,e=0){return v.data.filter(n=>n.type=="eval").slice(e,t)},getGameRanks(t,e=0){return y.data.sort((n,s)=>s.publicScore-n.publicScore).slice(e,t)},getGameData(t=null,e=0){return y.data.slice(e,t)},getGameDateById(t){return y.data.find(e=>e.id==t)},getHotGames(t){return y.data.sort((e,n)=>n.hotPoint-e.hotPoint).slice(0,t)},getAd(){return be.data},getPostContent(t){return _e.data.find(e=>e.id==t)},getGameComments(t){return fe.data.filter(e=>e.gameId==t)}};const ye={data(){return{logoSrc:q,routeTable:new Map([["/index",{text:"\u9996\u9875",icon:"home"}],["/gamecenter",{text:"\u6E38\u620F\u4E2D\u5FC3",icon:"gamepad"}],["/rank",{text:"\u6392\u884C\u699C",icon:"crown"}]]),routeIndex:0}},watch:{$route(t,e){this.routeIndex=[...this.routeTable.keys()].findIndex(n=>n==t.path)}},methods:{routeTo(t,e){let n=[...this.routeTable.keys()];this.$router.push(n[e])},search(t){return ve.getGameData(5).filter(n=>{let s=new RegExp(`.*${t}.*`);return s.test(n.name)||s.test(n.desc)}).map(n=>n.name)}},components:{SearchBar:ee,PageTabs:ae,UserPanel:le}},we={class:"bg-fixed bg-background min-h-full"},xe=f("div",{style:{"min-height":"60px"},class:"bg-none"},"cemu.com",-1),ke={class:"p-0 h-full w-full"};function Ie(t,e,n,s,o,a){const i=d("el-col"),c=d("el-image"),l=d("PageTabs"),h=d("SearchBar"),L=d("UserPanel"),N=d("el-row"),E=d("el-header"),T=d("router-view"),D=d("el-container");return p(),m("div",we,[r(D,{direction:"vertical",class:"h-full"},{default:u(()=>[xe,r(E,{height:"60px",class:"bg-primary-black text-primary-gray fixed w-full z-50"},{default:u(()=>[r(N,{gutter:0,class:"h-16",align:"middle",justify:"space-between"},{default:u(()=>[r(i,{span:4}),r(i,{span:2,offset:0},{default:u(()=>[r(c,{class:"w-12 h-12 cursor-pointer",onClick:e[0]||(e[0]=j=>a.routeTo("/index")),src:o.logoSrc},null,8,["src"])]),_:1}),r(i,{span:6,offset:0},{default:u(()=>[r(l,{class:"w-80 h-6 text-sm divide-x divide-primary-gray",onLinkto:a.routeTo,opts:[...o.routeTable.values()],modelValue:o.routeIndex,"onUpdate:modelValue":e[1]||(e[1]=j=>o.routeIndex=j),icons:["home","gamepad","crown"]},null,8,["onLinkto","opts","modelValue"])]),_:1}),r(i,{span:7,offset:0},{default:u(()=>[r(h,{class:"w480 h-7 text-sm bg-primary-black text-primary-gray border-primary-gray border-2 rounded-3xl",getHints:a.search,placeholder:"\u6218\u57302042\u9996\u53D1\u53E3\u7891\u5D29\u574F \u591A\u534A\u5DEE\u8BC4",iptClass:"focus:text-white"},null,8,["getHints"])]),_:1}),r(i,{span:3,offset:0},{default:u(()=>[r(L,{class:"bg-none w-48 h-8"})]),_:1}),r(i,{span:2})]),_:1})]),_:1}),f("div",ke,[r(T)])]),_:1})])}var je=b(ye,[["render",Ie]]);const Pe="modulepreload",S={},Ge="/",g=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${Ge}${s}`,s in S)return;S[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Pe,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",l)})})).then(()=>e())},Se=[{path:"/",redirect:"/index"},{path:"/index",component:()=>g(()=>import("./Index.74aba9af.js"),["assets/Index.74aba9af.js","assets/Index.6650512b.css","assets/RankCardItem.918f0dae.js","assets/RankCardItem.fed1caed.css","assets/vendor.e241ceec.js"])},{path:"/login",component:()=>g(()=>import("./Login.ce1c36a8.js"),["assets/Login.ce1c36a8.js","assets/Login.4cba939f.css","assets/vendor.e241ceec.js"])},{path:"/community",component:()=>g(()=>import("./Community.62d555da.js"),[])},{path:"/compost",component:()=>g(()=>import("./Post.44a0ada6.js"),[])},{path:"/gamecenter",component:()=>g(()=>import("./GameCenter.541e0de2.js"),["assets/GameCenter.541e0de2.js","assets/vendor.e241ceec.js"])},{path:"/gamedetail",component:()=>g(()=>import("./GameDetail.30614142.js"),["assets/GameDetail.30614142.js","assets/GameDetail.a95ec2b4.css","assets/GameComment.3842686f.js","assets/GameComment.8a518675.css","assets/vendor.e241ceec.js"])},{path:"/rank",component:()=>g(()=>import("./GameRank.34354161.js"),["assets/GameRank.34354161.js","assets/Pagination.9945eec2.js","assets/Pagination.44826ad1.css","assets/vendor.e241ceec.js"])},{path:"/test",component:()=>g(()=>import("./Test.ba947a66.js"),["assets/Test.ba947a66.js","assets/GameComment.3842686f.js","assets/GameComment.8a518675.css","assets/vendor.e241ceec.js","assets/Pagination.9945eec2.js","assets/Pagination.44826ad1.css","assets/RankCardItem.918f0dae.js","assets/RankCardItem.fed1caed.css"])}],Le=A({history:O(),routes:Se});function Ne(t){t.use(U,{locale:F})}$.add(z);var Ee=t=>{t.component("font-awesome-icon",J)};const w=B(je);Ne(w);Ee(w);w.use(Le);w.mount("#app");export{b as _,ve as a};
