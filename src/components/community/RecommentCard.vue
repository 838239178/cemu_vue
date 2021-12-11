<template>
  <div class="recomment-card">
    <div class="title">{{title}}</div>
    <div class="text-sm space-y-3 mt-3">
      <div
        v-for="(p, i) in posts.slice(0, 4)"
        :key="i"
        class="hidden-wrap text-left hover:underline cursor-pointer"
        @click="$router.push('/postdetail?id=2')"
      >
        <font-awesome-icon class="text-xs" icon="circle" /> {{ p.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "posts"]
};
</script>

<style scoped>
.recomment-card {
  @apply bg-dark-white rounded-lg w-full p-4;
}
.recomment-card .title {
  @apply font-bold text-primary-black text-left mx-2 text-lg;
}
</style>