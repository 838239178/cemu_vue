<template>
  <div class="mx-auto w-3/5">
    <div>
      <SearchBar
        class="
          my-12
          mx-auto
          h-16
          text-sm
          bg-primary-black
          text-primary-gray
          border-primary-gray border-2
          rounded-3xl
        "
        style="width: 600px"
        v-model="keyword"
        :getHints="searchHint"
        placeholder="战地2042首发口碑崩坏 多半差评"
        iptClass="focus:text-white text-lg"
        @on-search="searchResource"
      />
    </div>
    <div class="subtitle">相关游戏</div>
    <!-- game -->
    <div
      class="
        min-h-1/3
        bg-dark-white
        py-3
        my-8
        rounded-lg
        shadow-inner
        slide-enter-active
      "
    >
      <el-row justify="space-between" align="middle">
        <el-col :span="8" :offset="0">
          <el-image
            :src="game.pics[0]"
            style="width: 360px; height: 202px"
            fit="fill"
          />
        </el-col>
        <el-col :span="8" :offset="0" class="text-left text-sm">
          <div class="font-bold text-base mb-8">《{{ game.name }}》</div>
          <div>游戏简介:</div>
          <div class="wrap-text">{{ game.desc }}</div>
        </el-col>
        <el-col :span="6" :offset="0">
          <el-descriptions
            class="bg-dark-white"
            :column="1"
            direction="horizontal"
          >
            <el-descriptions-item
              :span="2"
              label="发行日期:"
              label-class-name="font-bold text-primary-black"
              class-name="text-light-dark underline"
            >
              {{ game.date }}
            </el-descriptions-item>
            <el-descriptions-item
              label="出版商:"
              :span="2"
              label-class-name="font-bold text-primary-black"
              class-name="text-light-dark underline"
            >
              {{ game.deployer }}
            </el-descriptions-item>
            <el-descriptions-item
              label="发行商:"
              :span="2"
              label-class-name="font-bold text-primary-black"
              class-name="text-light-dark underline"
            >
              {{ game.publisher }}
            </el-descriptions-item>
          </el-descriptions>
          <div class="flex justify-between items-center w-4/5 my-4 mx-3">
            <button
              class="
                bg-primary-red
                text-white
                font-bold
                px-3
                py-2
                text-sm
                rounded
                active:scale-95
                transition-transform
                transform
              "
              @click="$router.push(`/gamedetail?id=${game.id}`)"
            >
              游戏详情
            </button>
            <button
              class="
                bg-primary-red
                text-white
                font-bold
                px-3
                py-2
                text-sm
                rounded
                active:scale-95
                transition-transform
                transform
              "
              @click="$router.push(`/community?id=${game.id}`)"
            >
              游戏论坛
            </button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="subtitle">相关文章</div>
    <!-- posts -->
    <div
      class="
        grid grid-cols-3 grid-flow-row
        gap-x-6 gap-y-5
        w-full
        mt-8
        mb-16
        px-4
      "
    >
      <div
        v-for="(p, i) in posts"
        :key="i"
        class="
          underline
          hidden-wrap
          text-left text-primary-gray
          hover:text-dark-white
          transition-colors
          duration-200
          cursor-pointer
        "
      >
        <font-awesome-icon class="text-sm" icon="circle" /> {{ p.title }}
      </div>
    </div>
    <Pagination
      v-model="page.cur"
      class="w-full mb-2"
      :maxNum="5"
      fontSize="sm"
      :totalPage="Math.ceil(posts.length / page.size)"
    />
  </div>
</template>
<script>
import api from "../../api";
import Pagination from "../../components/Pagination.vue";
import SearchBar from "../../components/SearchBar.vue";

import "@/assets/css/animation/slide-anim.css";

export default {
  components: { SearchBar, Pagination },
  data() {
    return {
      keyword: "",
      game: api.getGameData(1)[0],
      posts: api.getGameEvals(9),
      page: {
        cur: 1,
        size: 9,
      },
    };
  },
  mounted() {
    this.keyword = this.$route.query.kw;
    this.searchResource(this.keyword);
  },
  methods: {
    searchResource(kw) {},
    searchHint(text) {
      let res = api
        .getGameData(100)
        .filter((i) => {
          let r = new RegExp(`.*${text}.*`);
          return r.test(i.name) || r.test(i.desc);
        })
        .map((i) => i.name);
      return res;
    },
  },
};
</script>
<style lang="css">
.el-descriptions__body {
  background: none !important;
}
</style>