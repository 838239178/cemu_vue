<template>
  <div>
    <div
      ref="bg"
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
        opacity-80
        kenburns-bottom
      "
      style="
        background-image: url('https://pic1.zhimg.com/v2-4bd879d9876f90c1db0bd98ffdee17f0_r.jpg?source=1940ef5c');
      "

    ></div>
    <div
      class="
        z-20
        absolute
        bottom-80
        text-center text-9xl
        font-extrabold
        text-white
        select-none
        subpixel-antialiased
        txt-shadow
        tracking-in-expand
        trans-to
        font-mono
      "
      :class="trans ? 'trans-to-active ' : ''"
    >
      CEMU <span class="text-primary-red text-8xl text-flicker-in-glow" ref="games">Games</span>
    </div>
    <div
      class="
        z-20
        absolute
        bottom-60
        text-2xl
        w-full
        font-light
        select-none
        subpixel-antialiased
        transition-opacity duration-200
        flex
        justify-center
      "
      :class="trans ? 'opacity-0' : ''"
    >
      <div class="type-anim text-primary-black" style="text-shadow: 0 0 5px rgb(114, 114, 114);">我们是致力于发现好游戏的游戏社区</div>
    </div>
    <div class="z-20 absolute bottom-20 text-center w-full">
      <button
        class="
          text-dark-white text-5xl
          animate-bounce
          duration-1000
          transition-opacity
        "
        :class="trans ? 'opacity-0' : ''"
        @click="startTrans"
      >
        <font-awesome-icon  icon="chevron-up" />
      </button>
    </div>
    <Index v-if="trans" class="z-0 h-full" :welcome="true" />
  </div>
</template>

<script>
import Index from "@/views/index/Index.vue";
import "@/assets/css/animation/tracking-in.css";
import "@/assets/css/animation/kenburns-b.css";
import "@/assets/css/animation/type-anim.css";
import "@/assets/css/animation/text-flicker.css";

export default {
  data() {
    return {
      trans: false,
    };
  },
  components: { Index },
  mounted() {
    document.body.style.overflow = "hidden";
    window.addEventListener("mousewheel", this.startTrans);
  },
  unmounted() {
    window.removeEventListener("mousewheel", this.startTrans);
  },
  watch: {
    $route() {
      document.body.style.overflow = "auto";
    },
  },
  methods: {
    startTrans() {
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 700);
      let bg = this.$refs.bg
      bg.classList.remove("kenburns-bottom")
      setTimeout(() => {
        bg.classList.add("-translate-y-full")
        this.trans = true
      }, 0);
    },
  },
};
</script>

<style scoped>
.trans-to {
  @apply transition-all duration-1000 transform;
  width: 720px;
  left: calc(50% - 360px);
}
.games {
  text-shadow: 0 0 5px ;
}

.trans-to-active {
  --tw-translate-y: -46.6vh;
  @apply text-6xl left-44 w-fit;
}
.txt-shadow {
  text-shadow: 5px 5px 10px rgb(0 0 0 / 65%);
}
</style>