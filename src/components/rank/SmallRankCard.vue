<template>
  <div class="rounded-lg bg-dark-white h-fit space-y-4 pb-4">
    <!-- title -->
    <div
      class="
        flex
        justify-between
        items-center
        text-base
        font-bold
        text-white
        rounded-t-lg
        bg-primary-red
        py-2
        px-3
      "
    >
      {{ title }}
      <font-awesome-icon
        class="cursor-pointer active:text-sm"
        icon="chevron-right"
        @click="$emit('click-title')"
      />
    </div>
    <!-- items -->
    <div class="space-y-8 px-5">
      <RankItem
        v-wave
        :icon="12"
        class="mx-auto shadow-lg"
        v-for="(i, idx) in data"
        :key="idx"
        v-bind="i"
        :score="i.publicScore"
        :index="idx"
        @click="delayto(`/gamedetail?id=${i.id}`)"
      />
    </div>
  </div>
</template>

<script>
import RankItem from "./RankItem.vue";
export default {
  emits: ["click-title"],
  props: {
    title: String,
    data: Array,
  },
  methods: {
    delayto(path) {
      setTimeout(() => {
        this.$router.push(path);
      }, 150);
    },
  },
  components: { RankItem },
};
</script>

<style>
</style>