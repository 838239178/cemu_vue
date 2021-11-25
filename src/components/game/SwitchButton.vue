<template>
  <button class="switch-guide" :class="btnClass">
    <font-awesome-icon :icon="`chevron-${direc}`" />
  </button>
</template>

<script>
export default {
  props: {
    direc: {
      default: ()=> 'left'
    }
  },
  computed: {
    btnClass() {
      return this.direc == 'left' ? "bg-gradient-to-r trans-l" : "bg-gradient-to-l trans-r"
    }
  }
};
</script>

<style scoped>
.switch-guide {
  @apply text-2xl from-light-dark to-transparent px-4 text-white mx-4;
  line-height: 80px;
}
.trans-l {
  @apply transform duration-75 transition-transform active:-translate-x-1;
}
.trans-r {
  @apply transform duration-75 transition-transform active:translate-x-1;
}
</style>