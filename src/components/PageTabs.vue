<template>
  <div class="grid grid-flow-col grid-rows-1">
    <button
      class="antialiased"
      :class="[tab, selectedIndex == i ? 'text-white font-semibold':'']"
      v-for="(s, i) in opts"
      :key="i"
      @click="linktoEvent(s,i)"
    >
      <span><font-awesome-icon :icon="s.icon"/>&nbsp;&thinsp;{{ s.text }}</span>
    </button>
  </div>
</template>
<script>
export default {
  emits: ['linkto','update:modelValue'],
  props: {
    opts: {
      default: () => [],
    },
    modelValue: {
      default: () => 0,
    }
  },
  watch: {
    modelValue(nval) {
      this.selectedIndex = nval;
    }
  },
  data() {
    return {
      tab: "hover:text-white transition duration-300",
      selectedIndex: this.modelValue,
    };
  },
  methods: {
    linktoEvent(s,i) {
      this.selectedIndex = i;
      this.$emit('linkto', s, i)
      this.$emit('update:modelValue', i);
    }
  }
};
</script>
<style scoped>
</style>