<template>
  <div class="bg-dark-white w-full rounded-xl py-10">
    <el-row justify="space-around">
      <el-col :span="5" class="">
        <!-- user -->
        <el-image
          :src="user.avatar"
          fit="fill"
          class="rounded-full w-32 h-32"
        ></el-image>
        <div class="text-sm mt-6">{{user.username}}</div>
        <button class="base-btn rounded-3xl mt-9">FOLLOW</button>
      </el-col>
      <el-col :span="15">
        <!-- content -->
        <div class="p-5 bg-white rounded-xl min-h-4/5" v-html="content"></div>
        <div class="mt-8 flex justify-between items-center">
          <div class="text-sm font-semibold">发表于 {{ post.date }}</div>
          <!-- tool bar -->
          <div>
            <span class="mx-2 group cursor-pointer" @click="$emit('click-edit', post)">
              <font-awesome-icon
                class="text-2xl text-primary-red group-hover:animate-bounce"
                icon="edit"
              />
              <span class="group-hover:underline mx-1 text-xs">编辑</span>
            </span>
            <span class="mx-2 group cursor-pointer" @click="$emit('click-reply', post)">
              <font-awesome-icon
                class="text-2xl text-primary-red group-hover:animate-bounce"
                icon="pen-square"
              />
              <span class="group-hover:underline mx-1 text-xs">回复</span>
            </span>
            <span class="mx-2 group cursor-pointer" @click="$emit('click-share', post)">
              <font-awesome-icon
                class="text-2xl text-primary-red group-hover:animate-bounce"
                icon="paper-plane"
              />
              <span class="group-hover:underline mx-1 text-xs">分享</span>
            </span>
          </div>
        </div>
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  emits: ['click-reply','click-edit','click-share'],
  props: {
    user: {
      default: ()=> {return {username: "LikeGhost", avatar: "https://avatars.githubusercontent.com/u/55338151?v=4"}}
    },
    post: Object,
    content: String
  },
};
</script>

<style>
</style>