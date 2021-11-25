<template>
  <div class="mx-auto pt-8 mb-10 w-7/10">
    <!-- title -->
    <div class="flex justify-between items-baseline w-full">
      <div
        class="text-left text-3xl text-gray-200 font-bold leading-10 my-8"
        style="text-shadow: 10px 10px 20px black"
      >
        {{ game.name }}
      </div>
      <div class="text-s2b font-semibold active:text-sm text-dark-white cursor-pointer hover:text-primary-red transition duration-200" style="text-shadow: 2px 2xp 10px #171717;">
        进入论坛
        <font-awesome-icon class="text-primary-red" icon="chevron-right"/>
      </div>
    </div>
    <!-- top -->
    <div class="flex justify-between items-center w-full">
      <!-- media and images -->
      <div style="height: 337px; width: 600px">
        <el-carousel
          class="shadow-lg"
          indicator-position="outside"
          :interval="15000"
          @change="onCarouselChange"
        >
          <el-carousel-item>
            <video
              class="w-full h-full"
              ref="gVideo"
              controls
              muted
              :src="game.media"
              :poster="game.pics[0]"
            />
          </el-carousel-item>
          <el-carousel-item v-for="i in game.pics.slice(1)" :key="i">
            <el-image :src="i" fit="contain" :lazy="false"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- score and detail -->
      <div
        style="height: 337px; width: 674px"
        class="flex justify-around items-center space-x-6"
      >
        <ScorePanel
          :mediaScore="game.mediaScore"
          :publicScore="game.publicScore"
        />
        <DetailPanel :data="game" />
      </div>
    </div>
    <!-- middle -->
    <div class="flex justify-between items-center w-full">
      <div style="width: 600px" class="space-y-8">
        <div class="subtitle">关于这款游戏</div>
        <div
          :class="devOpen ? 'devOpen' : 'devClose'"
          class="relative w-full wrap-text text-primary-gray text-left transition-all duration-700"
          style="min-height: 10rem;"
          ref="devMsgDiv"
        >
          {{ devMsgContent.content }}
          <div
            class="
              absolute
              left-0
              bottom-0
              w-full
              text-center
              bg-gradient-to-t
              from-primary-black
              to-transparent
            "
          >
            <font-awesome-icon
              class="
                text-white text-lg
                cursor-pointer
                hover:text-primary-gray
                active:text-base
                transition
                duration-150
              "
              @click="openDevMsg"
              :icon="devOpen ? 'chevron-up' : 'chevron-down'"
            />
          </div>
        </div>
      </div>
      <div style="width: 674px" class="space-y-8">
        <div class="subtitle">媒体评价</div>
        <div>
          <div class="flex justify-start items-center space-x-4">
            <el-image
              class="rounded-full h-8 w-8"
              :src="eval.authorAvatar"
            ></el-image>
            <div class="text-sm text-dark-white">{{ eval.author }}</div>
          </div>
          <div
            class="relative text-primary-gray w-full mt-4 wrap-text text-left"
            style="max-height: 6rem"
          >
            {{ evalContent.content }}
            <div
              class="
                absolute
                left-0
                bottom-0
                w-full
                text-center
                bg-gradient-to-t
                from-primary-black
                to-transparent
                h-3
              "
            ></div>
          </div>
          <div class="w-full text-right text-sm text-primary-gray mt-1 hover:text-white transition duration-200 cursor-pointer">
            阅读更多.. <font-awesome-icon icon="chevron-right" />
          </div>
        </div>
      </div>
    </div>
    <!-- comment -->
    <div class="flex justify-between items-start w-full mt-6">
      <div class="space-y-8" style="width: 759px">
        <div class="subtitle">最有价值的评论</div>
        <GameComment
          v-for="i in hotComments"
          :key="i.id"
          :username="i.username"
          :content="i.content"
          :commentDate="i.date"
          :imgSrc="i.avatar"
          :enable-min-h="true"
          :thumbs="{ up: i.thumbsUp, down: i.thumbsDown, state: 0 }"
          style="width: 756px; height: 320px"
          class="text-primary-gray bg-light-dark bg-opacity-70 shadow-inner"
        ></GameComment>
      </div>
      <div class="space-y-8" style="width: 520px">
        <div class="subtitle">最新评论</div>
        <GameComment
          v-for="i in newestComments"
          :key="i.id"
          :username="i.username"
          :content="i.content"
          :img-unit="12"
          :commentDate="i.date"
          :enable-min-h="false"
          :imgSrc="i.avatar"
          :thumbs="{ up: i.thumbsUp, down: i.thumbsDown, state: 0 }"
          style="width: 520px;"
          class="bg-light-dark text-primary-gray bg-opacity-70 shadow-inner"
        ></GameComment>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../api";
import DetailPanel from "../../components/game/DetailPanel.vue";
import ScorePanel from "../../components/game/ScorePanel.vue";
import GameComment from "../../components/game/GameComment.vue";

export default {
  components: {
    DetailPanel,
    ScorePanel,
    GameComment,
  },
  data() {
    return {
      game: {
        pics: [],
      },
      eval: {},
      evalContent: {},
      devMsg: {},
      devMsgContent: {},
      newestComments: [],
      hotComments: [],
      devOpen: false,
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.getGame(this.$route.query.id);
    }
    this.eval = api.getGameEvalByGame(2);
    this.evalContent = api.getPostContent(this.eval.postId);
    this.devMsg = api.getDeveloperMessage(2);
    this.devMsgContent = api.getPostContent(this.devMsg.postId);

    this.newestComments = api.getGameComments(2).slice(4);
    this.hotComments = api
      .getGameComments(2)
      .sort((a, b) => b.thumbsUp - a.thumbsUp)
      .slice(0, 4);
  },
  methods: {
    getGame(id) {
      this.game = api.getGameDateById(id);
      console.log(this.game);
    },
    onCarouselChange(i) {
      this.$refs['gVideo'].pause();
    },
    openDevMsg() {
      this.devOpen = !this.devOpen;
    }
  },
};
</script>

<style scoped>
.devOpen {
  max-height: 20rem;
}
.devClose {
  max-height: 10rem;
}
</style>