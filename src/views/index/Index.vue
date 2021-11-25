<template>
  <div>
    <!-- event -->
    <div
      class="h-32 w-full relative shadow-inner"
      style="
        background-image: url('https://cdn.jsdelivr.net/gh/838239178/PicgoBed@main/img/eb288b449e0b23c2e5559ee59668648cd7459b33.png');
      "
    >
      <div
        v-show="!welcome"
        class="
          absolute
          left-44
          bottom-2
          z-10
          text-6xl text-white
          subpixel-antialiased
          font-extrabold
        "
        style="text-shadow: 5px 5px 5px #000000"
      >
        C E M U
      </div>
    </div>
    <div class="flex justify-center items-center my-5 mx-auto">
      <!-- hotGame -->
      <div class="h812px space-y-9 rounded-sm">
        <el-carousel height="236px" style="width: 505px;">
          <el-carousel-item v-for="item in hotGame" :key="item.id">
            <el-image fit="fill" :src="item.pics[0]" @click="linkto(`/gamedetail?id=${item.id}`)" class="w420px h236" />
          </el-carousel-item>
        </el-carousel>
        <!-- game reports -->
        <div
          class="
            bg-dark-white
            w400px
            h538
            mx-auto
            space-y-4
            rounded-lg
            card-shadow
          "
        >
          <!-- tab -->
          <CardTabs class="text-xs h-10" tabClass="w-20 h-7-5" :tabs="['热门资讯','最新资讯']" @tab-click="switchReport"/>
          <template v-for="i in curReports" :key="i.id">
            <PostCardItem
              :postData="i"
              class="mx-auto"
              style="width: 352px; height: 100px"
            ></PostCardItem>
          </template>
        </div>
      </div>
      <!-- game evaluation -->
      <div
        class="
          bg-dark-white
          w620px
          h812px
          ml-1
          mr-12
          space-y-6
          rounded-xl
          card-shadow
        ">
        <CardTabs class="text-sm h-14" tabClass="w-32 h-10" :tabs="['最新评测','热门评测']" @tab-click="switchEval"/>
        <template v-for="p,idx in curEvals" :key="idx">
          <PostCardItem
            :score="true"
            :showDate="true"
            :postData="p"
            class="mx-auto"
            style="width: 582px; height: 120px"
          />
        </template>
      </div>
      <div class="w400px h812px space-y-7">
        <!-- AD -->
        <div class="mx-auto rounded-sm" style="width: 360px; height: 202px">
          <el-carousel height="202px" indicator-position="none" :interval="6000">
            <el-carousel-item v-for="item in adImgs" :key="item">
              <el-image :src="item" style="width: 360px; height: 202px" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- rank by score-->
        <div
          class="bg-dark-white w400px mx-auto rounded-md card-shadow"
          style="height: 580px"
        >
          <div class="font-black flex justify-between items-center px-6 pb-4 pt-9 text-2xl">
            高分排行
            <font-awesome-icon class="cursor-pointer hover:text-primary-red transition duration-200 active:text-xl" @click="linkto('/rank')" icon="chevron-right"/>
          </div>
          <div class="space-y-3 divide-y divide-primary-gray divide-opacity-30">
            <rank-card-item
              v-for="i,idx in ranks"
              :key="idx"
              @click-btn="linkto(`/gamedetail?id=${i.id}`)"
              v-bind="i"
              :index="idx"
              :score="i.publicScore"
              class="py-3 mx-auto"
              style="width: 372px; height: 104px"
            />
          </div>
        </div>
      </div>
    </div>
    <div style="min-height: 25px" />
  </div>
</template>
<script>
import PostCardItem from "../../components/index/PostCardItem.vue";
import RankCardItem from "../../components/index/RankCardItem.vue";
import api from '../../api';
import CardTabs from '../../components/index/CardTabs.vue';

export default {
  components: { PostCardItem, RankCardItem, CardTabs },
  props: {
    welcome: {
      type: Boolean,
      default: ()=>{return false}
    }
  },
  data() {
    return {
      curReports: null,
      curEvals: null,
      hotGame: [],
      hotReportPosts:[],
      hotEvalPosts:[],
      newestReportPosts:[],
      newestEvalPosts:[],
      adImgs:[],
      ranks:[],
      cardTab:
        "bg-primary-black text-primary-gray rounded-t border-primary-black border focus:bg-primary-red focus:text-white focus:font-bold",
    };
  },
  mounted() {
    this.ranks = api.getGameData(4).sort((a,b) => b.publicScore - a.publicScore);

    this.hotEvalPosts = api.getGameEvals(12).sort((a,b)=> b.hotPoint - a.hotPoint).slice(0,5);
    this.newestEvalPosts = api.getGameEvals(5);

    this.hotReportPosts = api.getGameReports(12).sort((a,b)=> b.hotPoint - a.hotPoint).slice(0,4);
    this.newestReportPosts = api.getGameReports(4);

    this.hotGame = api.getGameData(4).sort((a,b) => b.hotPoint - a.hotPoint);
    this.adImgs = api.getAd()

    this.curReports = this.hotReportPosts;
    this.curEvals = this.newestEvalPosts;
  },
  methods: {
    switchEval(s,i) {
      console.log("eval:" + s);
      if (this.curEvals == this.newestEvalPosts) {
        this.curEvals = this.hotEvalPosts
      } else {
        this.curEvals = this.newestEvalPosts;
      }
    },
    switchReport(s,i) {
      console.log("report:" + s);
      if (this.curReports == this.newestReportPosts) {
        this.curReports = this.hotReportPosts
      } else {
        this.curReports = this.newestReportPosts
      }
    },
    linkto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style scope>
.card-shadow {
  /* box-shadow: 2px 2px 15px #797979; */
  @apply shadow-inner;
}
.h812px {
  height: 812px;
}
.h236 {
  height: 236px;
}
.h538 {
  height: 538px;
}
.w400px {
  width: 400px;
}
.w420px {
  width: 420px;
}
.w620px {
  width: 620px;
}
</style>