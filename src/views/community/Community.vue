<template>
  <div>
    <div class="w-full relative h-72 overflow-hidden">
      <!-- big pic -->
      <el-image
        class="absolute w-full -top-124 left-0 filter blur-sm opacity-75"
        fit="contain"
        src="https://cdn.jsdelivr.net/gh/838239178/PicgoBed@main/img/96607131e924b89968fa9f2c33061d950b7bf6bf.jpg"
      ></el-image>
      <!-- icon title -->
      <div class="absolute left-56 bottom-14 flex items-end">
        <el-image class="w-32 h-32 rounded-lg" :src="game.icon" />
        <span class="text-3xl text-white font-black mx-10 my-1 name-shadow">{{
          game.name
        }}</span>
      </div>
    </div>
    <!-- main posts -->
    <div class="flex justify-around w-5/6 mx-auto mt-12">
      <!-- left recomment -->
      <div class="space-y-10 mt-12 w-1/5">
        <RecommentCard title="游戏资讯" :posts="reports"/>
        <RecommentCard title="游戏评测" :posts="reports"/>
        <RecommentCard title="游戏攻略" :posts="reports"/>
      </div>
      <!-- middle tab layout -->
      <div class="w-2/5">
        <CardTabs
          justify="start"
          class="text-base"
          tabClass="w-24 h-10"
          :tabs="['全部', '评测', '资讯', '攻略']"
        />
        <div class="w-full bg-dark-white rounded-b-lg rounded-r-lg divide-y space-y-2">
          <template v-for="(p, i) in [...reports, ...eval].slice(0,5)" :key="i">
            <div class="px-6 py-4 flex justify-around items-center">
              <div class="mr-2">
                <el-image class="w-16 h-16 rounded" :src="p.authorAvatar"></el-image>
                <div class="text-xs text-gray-400 mt-1">{{p.author}}</div>
              </div>
              <div class="w-7/10 text-left">
                <Tags v-if="p.tags && p.tags.length > 0" :tags="p.tags" />
                <div class="hidden-wrap mb-3 mt-2 font-semibold">{{p.title}}</div>
                <div class="text-sm wrap-text p-2">{{p.desc}}</div>
              </div>
              <div>
                <div class="text-xs text-gray-400 my-5">{{new Date().getHours() - new Date(p.date.replaceAll("/","-")).getHours()}}小时前</div>
                <button class="base-btn rounded-2xl mt-1" @click="$router.push('/postdetail?id=2')">查看</button>
              </div>
            </div>
          </template>
        </div>
        <Pagination class="my-10" :totalPage="10" :maxNum="5" />
      </div>
      <!-- right top post -->
      <div class="w-1/5">
        <CardTabs
          justify="start"
          class="text-base"
          tabClass="w-24 h-10"
          :tabs="['置顶']"
        />
        <div class="w-full bg-dark-white rounded-b-lg rounded-r-lg py-4 space-y-5">
          <template v-for="(p, i) in reports.slice(0,4)" :key="i">
            <div class="px-5 py-1 space-y-4 mb-2">
              <div class="flex justify-start items-center space-x-5 mb-4">
                <el-image class="rounded-full h-9 w-9" :src="p.authorAvatar"/>
                <div class="text-xs">{{p.author}}</div>
              </div>
              <div @click="$router.push('/postdetail?id=2')" class="text-left text-sm font-semibold hidden-wrap cursor-pointer hover:underline">{{p.title}}</div>
              <div class="bg-gray-100 text-left text-sm rounded-lg p-2 h-2/4 wrap-text">{{p.desc}}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api";
import CardTabs from "../../components/index/CardTabs.vue";
import Pagination from "../../components/Pagination.vue";
import RecommentCard from "../../components/community/RecommentCard.vue";
import Tags from "../../components/community/Tags.vue";
export default {
  data() {
    return {
      game: {},
      reports: [],
      eval: [],
    };
  },
  mounted() {
    let id = this.$route.query.id;
    this.game = api.getGameDateById(id);
    this.reports = api.getGameReports(10);
    this.eval = api.getGameEvals(10);
  },
  components: { CardTabs, Pagination, RecommentCard, Tags },
};
</script>

<style scoped>
.name-shadow {
  text-shadow: 5px 5px 10px rgb(0 0 0 / 65%);
}

</style>