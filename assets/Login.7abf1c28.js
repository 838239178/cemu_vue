var x=Object.defineProperty,w=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var m=(o,e,s)=>e in o?x(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,c=(o,e)=>{for(var s in e||(e={}))y.call(e,s)&&m(o,s,e[s]);if(i)for(var s of i(e))S.call(e,s)&&m(o,s,e[s]);return o},_=(o,e)=>w(o,h(e));import{r as p,c as I,b as n,d as a,o as V,w as f,v as b,a as l,y as k,A as B}from"./vendor.3b2a839d.js";import{_ as C}from"./index.43bf9f0d.js";var U="/cemu_vue/assets/logo_xl.35534c15.png";const j={data(){return{logoSrc:U,user:{username:"",password:""}}},methods:{login(){this.$store.commit("setUser",_(c({},this.user),{auth:!0,avatar:"https://avatars.githubusercontent.com/u/55338151?v=4"})),this.$router.push("/index")}}},L=o=>(k("data-v-fffbf392"),o=o(),B(),o),N={class:"mx-auto w-fit"},T=L(()=>l("button",{type:"button",class:"base-btn rounded mx-10"},"\u6CE8\u518C",-1));function z(o,e,s,A,t,d){const v=p("el-image"),u=p("el-form-item"),g=p("el-form");return V(),I("div",N,[n(v,{src:t.logoSrc,class:"bounce-top"},null,8,["src"]),n(g,{model:t.user,ref:"loginForm","label-width":"60px","label-position":"top",inline:!1,size:"normal"},{default:a(()=>[n(u,{label:"\u7528\u6237\u540D",prop:"name"},{default:a(()=>[f(l("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>t.user.username=r),autocomplete:"",class:"my-input"},null,512),[[b,t.user.username]])]),_:1}),n(u,{label:"\u5BC6\u7801",prop:"pwd"},{default:a(()=>[f(l("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>t.user.password=r),autocomplete:"current-password",type:"password",class:"my-input"},null,512),[[b,t.user.password]])]),_:1}),n(u,{class:"my-10"},{default:a(()=>[T,l("button",{type:"button",class:"base-btn rounded mx-10",onClick:e[2]||(e[2]=(...r)=>d.login&&d.login(...r))},"\u767B\u5F55")]),_:1})]),_:1},8,["model"])])}var M=C(j,[["render",z],["__scopeId","data-v-fffbf392"]]);export{M as default};
