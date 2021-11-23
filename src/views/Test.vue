<template>
  <div class="p-5 mx-auto w-fit space-y-8">
    <GameComment
      style="width: 759px; height: 320px"
      class="bg-dark-white"
    ></GameComment>
    <GameComment
      style="width: 520px; height: 320px"
      class="bg-dark-white"
    ></GameComment>
    <PostComment></PostComment>
    <RankItem></RankItem>
    <div style="height: 337px; width: 674px;" class="flex justify-around items-center space-x-6">
      <ScorePanel mediaScore="8.5" publicScore="9.0"/>
      <DetailPanel :data="game"/>
    </div>
  </div>
</template>
<script>
import GameComment from "../components/game/GameComment.vue";
import PostComment from "../components/PostComment.vue";
import RankItem from "../components/RankItem.vue";
import PostCardItem from "../components/index/PostCardItem.vue";
import RankCardItem from "../components/index/RankCardItem.vue";
import ScorePanel from "../components/game/ScorePanel.vue";
import DetailPanel from "../components/game/DetailPanel.vue";

export default {
  components: {
    GameComment,
    PostComment,
    RankItem,
    PostCardItem,
    RankCardItem,
    ScorePanel,
    DetailPanel
},
  data() {
    return {
      game: {
            "id": 2,
            "name": "极限竞速：地平线 5",
            "desc": "您的终极地平线冒险正等着您展开！探索墨西哥充满活力且不断变化的开放世界景色，驾驶百辆世界级好车，享受无拘无束又有趣的驾驶体验。立即展开您的地平线冒险并将本游戏添加到您的愿望列表吧！",
            "date": "2021/11/09",
            "deployer": "Playground Gamest",
            "tags":["竞速","汽车","开放世界"],
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
    };
  },
};
</script>
<style>
</style>