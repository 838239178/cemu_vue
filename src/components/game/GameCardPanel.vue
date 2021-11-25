<template>
  <div
    class="w-full mx-auto overflow-hidden space-x-4 whitespace-nowrap"
    ref="container"
  >
    <template v-for="(g, index) in gameArr" :key="'image' + index">
      <div
        class="
          rounded-lg
          relative
          pt-2
          px-1
          inline-block
          transition-transform
          duration-300
          ease-in
        "
        style="max-width: 32%; height: 360px"
      >
        <el-image class="h-full rounded-lg opacity-80" fit="cover" :src="g.pics[0]" style="box-shadow: 3px 5px 10px #000;"/>
        <div
          class="
            rounded-b-lg
            absolute
            left-0
            bottom-0
            w-full
            bg-gradient-to-t
            from-primary-black
            via-light-dark
            flex
            justify-between
            items-center
          "
        >
          <div class="m-2 text-left space-y-2" style="max-width: 70%">
            <div
              class="hidden-wrap text-dark-white font-semibold text-s2b"
              style="text-shadow: 2px 2px 5px #000"
            >
              {{ g.name }}
            </div>
            <div class="hidden-wrap text-xs text-primary-gray">
              {{ g.desc }}
            </div>
          </div>
          <div
            class="
              text-lg
              font-semibold
              text-white
              bg-primary-red
              px-2
              rounded-3xl
              mr-4
            "
          >
            {{ g.mediaScore }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import "@/assets/css/animation/slide-anim.css";

export default {
  emits: ["update:modelValue"],
  props: {
    games: {
      default: () => [],
    },
    maxNum: {
      default: () => 3,
    },
    modelValue: Number,
  },
  watch: {
    games(nval) {
      this.gameArr = nval;
      this.gamesInit();
    },
    modelValue(nval, oval) {
      this.setCurrentIndex(nval,oval)
    },
  },
  data() {
    return {
      currentIndex: this.modelValue || 0,
      gameArr: this.games,
      exArr: [],
    };
  },
  mounted() {
    this.gamesInit();
  },
  methods: {
    gamesInit() {
      let exNum = this.gameArr.length % this.maxNum
      this.exArr = this.gameArr.splice(this.gameArr.length - exNum, exNum);
    },
    switchGames(next, pre) {
      let rate = next / this.maxNum;
      let width = this.$refs["container"].clientWidth + 10;
      let go = width * rate;
      console.log(`next=${next},rate=${rate},width=${width},go=${go}`);
      [...this.$refs["container"].children].forEach((element, i) => {
        if (next > pre) {
          element.style.transform = `translateX(-${go}px)`;
        } else {
          element.style.transform = `translateX(-${go}px)`;
        }
      });
    },
    setCurrentIndex(nval, oval) {
      this.currentIndex = nval;
      this.switchGames(nval, oval);
    },
    pre() {
      if (this.currentIndex >= this.maxNum) {
        this.setCurrentIndex(this.currentIndex - this.maxNum, this.currentIndex);
      }
      console.log(this.currentIndex)
    },
    next() {
      if(this.currentIndex < this.gameArr.length - this.maxNum) {
        this.setCurrentIndex(this.currentIndex + this.maxNum, this.currentIndex);
      }
      console.log(this.currentIndex)
    },
  },
};
</script>

<style scoped>
</style>