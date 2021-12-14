<template>
  <div class="flex justify-between items-center mx-auto">   
    <template v-if="auth">
      <el-popover
        placement="bottom"
        width="150px"
        trigger="hover">
        <template #reference>
          <el-image class="rounded-full w-8 h-8" :src="avatar"></el-image>
        </template>
        <div class="grid grid-cols-1 divide-y divide-primary-gray">
          <button v-wave v-for="i in opts" :key="i" class="text-left px-4 py-3 active:bg-white flex justify-between items-center">
            <font-awesome-icon class="text-primary-red" :icon="i.icon"/>
            {{i.text}}
          </button>
        </div>
      </el-popover>
      
      <div class=" text-primary-gray cursor-pointer">{{ username }}</div>
      <font-awesome-icon
        @click="$emit('quit-login')"
        class="text-primary-gray text-lg hover:text-white transition duration-200"
        icon="sign-out-alt"
      ></font-awesome-icon>
    </template>
    <div v-else class="text-sm text-primary-gray cursor-pointer hover:underline hover:text-white" @click="$router.push('/login')">
      请登录您的账号 <font-awesome-icon icon="hand-point-right" class="text-lg"/>
    </div>
  </div>
</template>
<script>
export default {
  emits: ['quit-login'],
  props: {
    username: {
      default: () => "LikeGhost",
    },
    avatar: {
      default: () => "https://avatars.githubusercontent.com/u/55338151?v=4",
    },
    auth: {
      default: ()=> false
    }
  },
  data() {
    return {
      opts: [{
        text:"个人中心",
        icon:"user"
      },{
        text: "收藏夹",
        icon: "heart"
      },{
        text: "消息通知",
        icon: "envelope"
      }]
    }
  }
};
</script>
<style scoped>
</style>