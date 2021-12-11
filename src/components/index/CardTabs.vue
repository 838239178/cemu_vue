<template>
  <div
    class="
      flex
      items-end
      border-b border-primary-black
    "
    :class="justify"
  >
    <button
      v-for="(s, i) in tabs"
      :key="i"
      :class="[cardTab, tabClass, selectedIndex == i ? focusTab : normalTab]"
      @click="tabClickEvent(s,i)"
    >
      {{ s }}
    </button>
  </div>
</template>
<script>
export default {
  emits: ["tab-click"],
  props: {
    tabs: Array,
    tabClass: String,
    justify: {
      default: ()=> "around"
    }
  },
  computed: {
    justify() {
      return {
        'justify-around': this.justify === "around",
        'justify-start': this.justify === "start",
      }
    }
  },
  data() {
    return {
      normalTab: "bg-primary-black text-primary-gray",
      focusTab: "bg-primary-red text-white font-bold",
      cardTab:
        "rounded-t border-primary-black border transition duration-150 border-b-0",
      selectedIndex: 0,
    };
  },
  methods: {
    tabClickEvent(s, i) {
      this.selectedIndex = i;
      this.$emit("tab-click", s, i);
    },
  },
};
</script>
<style scoped>
</style>