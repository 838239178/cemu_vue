<template>
   <div
      class="
        w-full
        px-10
        pt-10
        pb-3
        flex
        justify-around
        items-start
        my-10
        rounded-2xl
        bg-gradient-to-r
        from-light-dark
        to-primary-black
        bg-opacity-60
        shadow-inner
      "
    >
      <div class="rounded">
        <el-image class="w-32 h-32 rounded" style="box-shadow: 2px 2px 5px #171a21" fit="fill" :src="user.avatar"></el-image>
        <div class="mt-5 text-primary-gray font-semibold">{{user.username}}</div>
      </div>
      <div class="w-7/10">
        <div class="text-xs text-gray-500 mb-2 text-left">
          {{disable ? `您在 ${comment.date} 评价了这款游戏` : '请您描述您对这款游戏的看法，您的发言需要遵循社区规范，请注意礼貌用语'}}
        </div>
        <el-input
          type="textarea"
          :disabled="disable"
          v-model="comment.content"
          class="comment-sender"
          :autosize="{ minRows: 6, maxRows: 8 }"
        />
        <div class="flex justify-between items-end mt-5">
          <div>
            <div class="text-left text-xs text-gray-500 my-2">
              您对这款游戏的评分是?
            </div>
            <el-rate
              class="comment-rate"
              v-model="comment.score"
              :disabled="disable"
              allow-half
              :colors="['#BF1313', '#BF1313', '#BF1313']"
            ></el-rate>
          </div>
          <button v-show="!disable" class="base-btn rounded-md my-3 h-fit" @click="$emit('send', this.comment)">发表评价</button>
        </div>
      </div>
    </div>  
</template>

<script>
export default {
  emits:['send', 'update:modelValue'],
  props: {
    modelValue: Object,
    disable: {
      type: Boolean,
      default: ()=> false
    },  
    user: {
      default: ()=> {return {username: "LikeGhost", avatar: "https://avatars.githubusercontent.com/u/55338151?v=4"}}
    },
  },
  watch: {
    modelValue(nval) {
      this.comment = nval;
      this.comment.score /= 2;
    }
  },
  data() {
    return {
      comment: this.modelValue || {},
    }
  }
}
</script>

<style>
.comment-rate {
  @apply text-left my-2;
  --el-rate-height: 38px;
  --el-rate-icon-size: 32px;
  --el-rate-icon-margin: 6px;
  --el-rate-font-size: 14px;
  --el-rate-icon-color: #fff;
}
.comment-sender {
  --el-disabled-bg-color: #303237;
  --el-disabled-text-color: #fff;
  --el-input-bg-color: #303237;
  --el-input-border-color: #b8b6b4;
  --el-input-text-color: #fff;
  --el-input-focus-border: #fff;
}
</style>