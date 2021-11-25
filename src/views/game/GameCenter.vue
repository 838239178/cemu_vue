<template>
  <div class="w-7/10 mx-auto my-10 space-y-10">
    <!-- carsoule -->
    <div class="flex justify-center items-center w-full">
      <SwitchButton direc="left" @click="switchGame(-1)" />
      <GamesGuide
        v-model="gameIdx"
        style="width: 940px; height: 353px"
        class="shadow-sm"
        :games="hotGames"
      />
      <SwitchButton direc="right" @click="switchGame(1)" />
    </div>
    <!-- parts -->
    <div v-for="(p, i) in panels" :key="i" class="space-y-8 mx-auto" style="width: 82%;">
      <div class="subtitle">
        {{ p.title }}
      </div>
      <div class="flex justify-around items-center">
        <SwitchButton direc="left" @click="swithPanel(i, -1)" />
        <GameCardPanel :ref="`gp-${i}`" :games="p.games" />
        <SwitchButton direc="right" @click="swithPanel(i, 1)" />
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../api";
import GamesGuide from "../../components/game/GamesGuide.vue";
import GameCardPanel from "../../components/game/GameCardPanel.vue";
import SwitchButton from "../../components/game/SwitchButton.vue";

export default {
  components: { GamesGuide, GameCardPanel, SwitchButton },
  data() {
    return {
      hotGames: [],
      gameIdx: 0,
      panels: [
        {
          title: "",
          games: [],
        },
      ],
    };
  },
  mounted() {
    this.hotGames = api.getGameDataAll();
    let temp = {}
    temp.title = '独立游戏推荐';
    temp.games = [...this.hotGames,...this.hotGames,...this.hotGames].slice(0,10);
    this.panels[0] = {...temp};
    temp.title = "人气游玩推荐"
    this.panels[1] = temp;
  },
  methods: {
    switchGame(i) {
      if (i > 0 && this.gameIdx + i < this.hotGames.length) {
        this.gameIdx += i;
      } else if (i < 0 && this.gameIdx + i >= 0) {
        this.gameIdx += i;
      }
    },
    swithPanel(idx, type) {
      let target = this.$refs["gp-" + idx];
      if (type > 0) {
        target.next();
      } else {
        target.pre();
      }
    },
  },
};
</script>

<style lang="css" scoped>
</style>