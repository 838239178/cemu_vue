<template>
  <div>
    <div
      class="
        z-10
        absolute
        left-0
        top-2
        w-full
        h-full
        filter
        blur-sm
        duration-700
        transform
        transition-transform
      "
      style="
        background-image: url('http://pic1.win4000.com/wallpaper/2018-05-11/5af503e43ffde.jpg');
      "
      :class="trans ? '-translate-y-full' : ''"
    ></div>
    <div
      class="
        z-20
        absolute
        bottom-60
        text-center text-9xl
        font-extrabold
        text-white
        select-none
        subpixel-antialiased
        tracking-in-expand
        trans-to
      "
      :class="trans ? 'trans-to-active txt-shadow' : ''"
    >
      C E M U
    </div>
    <button
      class="
        text-dark-white text-5xl
        animate-bounce
        absolute
        bottom-20
        duration-1000
        transition-opacity
        z-20
      "
      :class="trans ? 'opacity-0' : ''"
      type="text"
      @click="startTrans"
    >
      <font-awesome-icon icon="chevron-up" />
    </button>
    <Index v-if="trans" class="z-0 h-full" :welcome="true" />
  </div>
</template>

<script>
import Index from "@/views/index/Index.vue";
import '@/assets/css/animation/tracking-in.css';

export default {
  data() {
    return {
      trans: false,
    };
  },
  components: { Index },
  mounted(){
    document.body.style.overflow = 'hidden';
  },
  methods: {
    startTrans() {
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 700);
      this.trans = true;
    }
  }
};
</script>

<style scoped>
.txt-shadow {
  text-shadow: 5px 5px 5px #000000;
}
.trans-to {
  @apply transition-all duration-1000 transform;
  width: 548px;
  left: calc(50% - 274px);
}
.trans-to-active {
  --tw-translate-y: -32.5rem;
  @apply text-6xl left-44 w-fit;
}
</style>