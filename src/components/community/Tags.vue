<template>
  <div>
    <span
      class="
        text-white text-xxs
        px-1.5
        py-0.7
        mr-1
        rounded-2xl
        bg-gradient-to-r
      "
      v-for="t in tags"
      :key="t"
      :class="color[t]"
    >
      {{ t }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["tags"],
  data() {
    return {
      color: {
        推荐: "from-red-400 to-red-500",
        AD: "from-yellow-400 to-yellow-500",
        开发者: "from-green-400 to-green-500",
      },
    };
  },
};
</script>

<style scoped>
</style>