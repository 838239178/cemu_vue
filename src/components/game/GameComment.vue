<template>
  <div class="h-full px-2 rounded-md">
    <el-row align="top" justify="space-between">
      <el-col :span="4" :offset="0">
        <el-image
          :class="[`w-${imgUnit}`, `h-${imgUnit}`]"
          class="mx-auto my-10"
          style="box-shadow: 2px 2px 5px #171a21"
          :src="imgSrc"
        />
      </el-col>
      <el-col :span="3">
        <div class="my-11 font-bold text-left text-sm">{{ username }}</div>
      </el-col>
      <el-col :span="17" class="space-y-3 text-left px-4 py-6">
        <el-rate class="text-base" v-model="rate" disabled allow-half></el-rate>
        <div class="font-bold text-sm">发布于 {{ commentDate }}</div>
        <div
          :class="enableMinH ? 'min-h-1/2' : ''"
          class="border-b-2 border-primary-gray"
        >
          <div class="px-1 pb-2 wrap-text text-sm">
            {{ content }}
          </div>
        </div>
        <div class="text-sm font-bold">你觉得这篇评论有价值吗?</div>
        <div class="float-left space-x-8 text-2xl mx-2">
          <span>
            <button
              class="border-none bg-none p-0 m-0"
              :class="{ 'text-primary-red': thumbsDate.state == 1 }"
              @click="() => setThumbs(1)"
            >
              <font-awesome-icon
                class="thumbs"
                icon="thumbs-up"
              ></font-awesome-icon>
            </button>
            <anim-num
              class="text-sm mx-1"
              :value="thumbsDate.up"
              :round="1"
              :formatValue="formatThumbs"
              :duration="300"
              :delay="30"
            />
          </span>
          <span>
            <button
              class="border-none bg-none p-0 m-0"
              :class="{ 'text-primary-red': thumbsDate.state == -1 }"
              @click="() => setThumbs(-1)"
            >
              <font-awesome-icon
                class="thumbs"
                icon="thumbs-down"
              ></font-awesome-icon>
            </button>
            <anim-num
              class="text-sm mx-1"
              :value="thumbsDate.down"
              :round="1"
              :formatValue="formatThumbs"
              :duration="300"
              :delay="30"
            />
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AnimNum from "../AnimNum.vue";
export default {
  components: {
    AnimNum,
  },
  props: {
    username: {
      default: () => "ABCDEF",
    },
    content: {
      default: () =>
        "abcaslkdjf;laksdjgaldksfja;lskdjflaskjdflaksdjf;oierupqoeijfa;lskdjf;alsdkfja;lsefj",
    },
    imgSrc: {
      default: () => "https://avatars.githubusercontent.com/u/55338151?v=4",
    },
    score: {
      default: () => 7,
    },
    commentDate: {
      default: () => new Date().toLocaleString("chinese", { hour12: false }),
    },
    imgUnit: {
      default: () => 16,
    },
    thumbs: {
      default: () => {
        return {
          up: 101,
          down: 12,
          state: 0,
        };
      },
    },
    enableMinH: {
      default: () => true,
    },
  },
  data() {
    return {
      rate: this.score / 2,
      thumbsDate: this.thumbs,
    };
  },
  methods: {
    setThumbs(state) {
      if (state == -1) {
        this.thumbsDate.down += 1;
      } else {
        this.thumbsDate.up += 1;
      }
      this.thumbsDate.state = state;
    },
    formatThumbs(num) {
      return `(${num})`;
    },
  },
};
</script>
<style scoped>
.el-rate {
  --el-rate-height: 38px;
  --el-rate-icon-size: 32px;
  --el-rate-icon-margin: 6px;
}
.thumbs {
  @apply cursor-pointer hover:scale-110 transform duration-100 active:scale-100;
}
</style>