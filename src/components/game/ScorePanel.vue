<template>
  <div class="w-fit space-y-1">
    <div class="flex justify-between items-center w-80 h-32">
      <div class="bg-pub-score score">{{ mediaScore }}</div>
      <el-divider
        direction="vertical"
        content-position="center"
        class="h-36 bg-primary-gray"
      ></el-divider>
      <div class="bg-media-score score">{{ publicScore }}</div>
    </div>
    <div class="flex justify-between items-center">
      <span class="score-title">媒体总评</span>
      <span class="score-title">玩家总评</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["mediaScore", "publicScore"],
};
</script>
<style scoped>
.score-title {
  @apply text-sm w-32 text-center text-primary-gray;
}
.score {
  @apply bg-no-repeat bg-contain font-extrabold text-5xl text-center text-white w-32 h-32 hover:-translate-y-4 transform transition-transform duration-500 cursor-default;
  line-height: 8rem;
}
</style>