import{A as h}from"./AnimNum.9a76a141.js";import{r as n,o as i,c as u,a as s,b as d,n as p,t as x,F as v,f,p as _}from"./vendor.434dc5a9.js";import{_ as g}from"./index.2bf976b0.js";const w={emits:["changed","click-post","update:modelValue"],props:{games:{type:Array,default:()=>[]},modelValue:Number,interval:{default:()=>4e4}},watch:{games(r){this.switchPoster(r[0].pics[0])},modelValue(r){this.curIdx=r,this.switchPoster(this.curItem().pics[0])}},data(){return{curIdx:this.modelValue||0,curPoster:"",timer:null,isswitch:!1,pause:!1}},mounted(){this.start()},unmounted(){this.release()},methods:{start(){this.timer=setInterval(()=>{this.pause||this.curIdx+1<this.games.length&&(this.curIdx++,this.$emit("update:modelValue",this.curIdx,this.curIdx-1))},this.interval)},release(){clearInterval(this.timer),this.timer=null},onHover(){this.pause=!0},onOutHover(){this.pause=!1},switchPoster(r){this.isswitch=!0,setTimeout(()=>{this.curPoster=r,this.isswitch=!1},100)},curItem(){return this.games[this.curIdx]||{name:"",pics:[""]}}},components:{AnimNum:h}},y={style:{"box-shadow":"5px 0px 15px #000",height:"353px"}},I={style:{"max-width":"33%"},class:"space-y-4"},b={class:"text-left text-xl text-dark-white px-3 py-2"},V={class:"grid grid-rows-2 grid-flow-col gap-3"},k={class:"text-dark-white space-x-2"},N=s("span",{class:"text-base"},"\u5A92\u4F53\u8BC4\u5206:",-1),P=s("button",{class:"bg-primary-red text-white px-5 rounded-3xl text-sm py-2 shadow hover:opacity-80 active:scale-95 transform transition-all"}," \u7ACB\u5373\u67E5\u770B ",-1);function A(r,a,H,j,o,e){const c=n("el-image"),m=n("AnimNum");return i(),u("div",{class:"flex justify-center items-center bg-light-dark bg-opacity-50 pr-4",onMouseover:a[0]||(a[0]=(...t)=>e.onHover&&e.onHover(...t)),onMouseout:a[1]||(a[1]=(...t)=>e.onOutHover&&e.onOutHover(...t))},[s("div",y,[d(c,{class:p([o.isswitch?"opacity-0":"opacity-100","duration-150 transition-opacity ease-out"]),style:{width:"616px",height:"353px"},fit:"fill",src:o.curPoster},null,8,["class","src"])]),s("div",I,[s("div",b,x(e.curItem().name),1),s("div",V,[(i(!0),u(v,null,f(e.curItem().pics,(t,l)=>(i(),_(c,{class:"opacity-50 hover:opacity-100 shadow-inner",key:l,src:t,onMouseover:B=>e.switchPoster(t,l)},null,8,["src","onMouseover"]))),128))]),s("div",k,[N,d(m,{class:"font-semibold text-xl antialiased",value:e.curItem().mediaScore,duration:300,formatValue:t=>t.toFixed(1)},null,8,["value","formatValue"])]),P])],32)}var O=g(w,[["render",A]]);export{O as G};
