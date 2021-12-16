<template>
  <div class="flex justify-around items-center">
    <el-avatar shape="circle" size="large" fit="cover" :src="user.avatar"/>
    <el-input class="comment-sender" v-model="comment"/>
    <button class="base-btn rounded-2xl" @click="$emit('send', comment, user)">评论</button>
  </div>
</template>

<script>
export default {
  emits:['send'],
  props: {
    user: {
      default: ()=>{ return {
        username: "LikeGhost",
        avatar: "https://avatars.githubusercontent.com/u/55338151?v=4"
      }}
    },
    modelValue: String,
  },
  watch: {
    modelValue(nval) {
      this.comment = nval;
    }
  },
  data() {
    return {
      comment: this.modelValue || ""
    }
  },
}
</script>

<style scoped>
.comment-sender {
  @apply w-9/12;
  --el-input-border-color: #333;
  --el-input-focus-border: #bf1313;
}
</style>