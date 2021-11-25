<template>
  <div class="my-10 mx-auto w-8/12 flex justify-around items-start">
    <!-- small rank -->
    <div style="width: 300px" class="space-y-8">
      <SmallRankCard class="w-full" title="热玩排行" :data="hotGameRank.slice(0,3)" @click-title="changeTo(hotGameRank)"/>
      <SmallRankCard class="w-full" title="高分排行" :data="hightScoreRank.slice(0,3)" @click-title="changeTo(hightScoreRank)"/>
    </div>
    <!-- big rank -->
    <div style="width: 640px" class="bg-dark-white rounded-lg">
      <div class="bg-primary-red font-bold text-white py-2 rounded-t-lg">
        排行榜
      </div>
      <div class="grid grid-flow-col grid-rows-6 gap-x-2 gap-y-5 p-4">
        <template v-for="g,i in bigRankData" :key="i">
          <RankItem
            class="max-w-xs"
            :iconSize="16"
            indexSize="xl"
            v-if="i >= pageLowBound() && i < pageUpBound()"
            :index="i" :score="g.publicScore"
            v-bind="g"
          />
        </template>
      </div>
      <Pagination v-model="page.cur" class="w-full mb-2" :maxNum="4" fontSize="sm" :totalPage="Math.ceil(bigRankData.length / page.size)" />
    </div>
  </div>
</template>
<script>
import api from "../../api";
import SmallRankCard from "../../components/rank/SmallRankCard.vue";
import RankItem from "../../components/rank/RankItem.vue";
import Pagination from "../../components/Pagination.vue";
export default {
  components: { SmallRankCard, RankItem, Pagination },
  data() {
    return {
      hotGameRank: [],
      hightScoreRank: [],
      bigRankData: [],
      page: {
        cur: 1,
        size: 12
      }
    };
  },
  mounted() {
    this.hotGameRank = api.getGameData(100);
    this.hightScoreRank = api.getGameData(100).sort((a,b)=> b.publicScore - a.publicScore);
    this.bigRankData = [...api.getGameData(100),...api.getGameData(100),...api.getGameData(100),...api.getGameData(100)];
  },
  methods: {
    pageUpBound() {
      return this.page.cur * this.page.size
    },
    pageLowBound() {
      return (this.page.cur-1) * this.page.size
    },
    changeTo(arr) {
      this.bigRankData = arr;
    }
  }
};
</script>
<style lang="css">
</style>