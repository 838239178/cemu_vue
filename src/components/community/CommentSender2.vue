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
        bg-white
        shadow-inner
      "
    >
      <div class="rounded">
        <el-image class="w-32 h-32 rounded-full" fit="fill" :src="user.avatar"></el-image>
        <div class="mt-5 text-primary-gray font-semibold">{{user.username}}</div>
      </div>
      <div class="w-7/10">
        <div class="text-xs text-gray-500 mb-2 text-left">
         您的发言需要遵循社区规范，请注意礼貌用语
        </div>
        <el-input
          type="textarea"
          :disabled="disable"
          v-model="comment.content"
          class="comment-sender"
          :autosize="{ minRows: 6, maxRows: 8 }"
        />
        <div>
          <button v-show="!disable" class="base-btn rounded-md my-3 h-fit float-right" @click="$emit('send', this.comment)">评论</button>
        </div>
      </div>
    </div>  
</template>

<script>
export default {
  emits:['send', 'update:modelValue'],
  props: {
    modelValue: Object,
    user: {
      default: ()=> {return {username: "LikeGhost", avatar: "https://avatars.githubusercontent.com/u/55338151?v=4"}}
    },
  },
  watch: {
    modelValue(nval) {
      this.comment = nval;
    }
  },
  data() {
    return {
      comment: this.modelValue || {},
    }
  }
}
</script>

<style scoped>
.comment-sender {
  --el-input-border-color: #333;
  --el-input-focus-border: #bf1313
}
</style>