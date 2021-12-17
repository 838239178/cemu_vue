<template>
  <div class="h-full px-2 rounded-md">
    <el-row align="top" justify="space-between">
      <el-col :span="4" :offset="0">
        <el-image
          :class="[`w-${imgUnit}`, `h-${imgUnit}`]"
          class="mx-auto my-10"
          style="box-shadow: 2px 2px 5px #171a21"
          :src="comment.avatar"
        />
      </el-col>
      <el-col :span="3">
        <div class="my-11 font-bold text-left text-sm">{{ comment.username }}</div>
      </el-col>
      <el-col :span="17" class="space-y-3 text-left px-4 py-6">
        <el-rate class="text-base comment-rate" v-model="rate" disabled allow-half></el-rate>
        <div class="font-bold text-sm">发布于 {{ comment.date }}</div>
        <div
          :class="enableMinH ? 'min-h-1/2' : ''"
          class="border-b-2 border-primary-gray"
        >
          <div class="px-1 pb-2 wrap-text text-dark-white text-sm">
            {{ comment.content }}
          </div>
        </div>
        <div class="text-sm font-bold">你觉得这篇评论有价值吗?</div>
        <div class="float-left space-x-8 text-2xl mx-2">
          <span>
            <button
              class="border-none bg-none p-0 m-0"
              :class="{ 'text-primary-red': comment.state == 1 }"
              @click="() => setThumbs(1)"
            >
              <font-awesome-icon
                class="thumbs"
                icon="thumbs-up"
              ></font-awesome-icon>
            </button>
            <anim-num
              class="text-sm mx-1"
              :value="comment.thumbsUp"
              :round="1"
              :formatValue="formatThumbs"
              :duration="300"
              :delay="30"
            />
          </span>
          <span>
            <button
              class="border-none bg-none p-0 m-0"
              :class="{ 'text-primary-red': comment.state == -1 }"
              @click="() => setThumbs(-1)"
            >
              <font-awesome-icon
                class="thumbs"
                icon="thumbs-down"
              ></font-awesome-icon>
            </button>
            <anim-num
              class="text-sm mx-1"
              :value="comment.thumbsDown"
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
  emits: ['thumbs-up', 'thumbs-down'],
  props: {
    comment: {
      default: ()=> {
        return {
          "id": 8,
          "gameId": 2,
          "score": 6.0,
          "username": "Qin",
          "avatar": "https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/9b/9b0d4b5213c802759546e82adf1d5fa8d9d2f6a8.jpg",
          "content": "如果你想玩的够爽，选地平线。如果你想花里胡哨，选地平线。如果你想改装调校，选地平线。如果你想闪退掉线，选地平线",
          "thumbsUp": 25,
          "thumbsDown": 1,
          "date": "2021/11/09 13:01",
          state: 0,
        }
      }
    },
    imgUnit: {
      default: () => 16,
    },
    enableMinH: {
      default: () => true,
    },
  },
  computed: {
    rate() {
      let temp = (this.comment.score / 2).toFixed(1);
      console.log(this.comment.score)
      console.log(temp)
      return temp;
    }
  },
  methods: {
    setThumbs(state) {
      if (state == -1) {
        this.$emit('thumbs-down', this.comment.thumbsDown + 1, state)
      } else {
        this.$emit('thumbs-up', this.comment.thumbsUp + 1, state)
      }
    },
    formatThumbs(num) {
      return `(${num})`;
    },
  },
};
</script>
<style scoped>
.comment-rate {
  --el-rate-height: 38px;
  --el-rate-icon-size: 32px;
  --el-rate-icon-margin: 6px;
}
.thumbs {
  @apply cursor-pointer hover:scale-110 transform duration-100 active:scale-100;
}
</style>