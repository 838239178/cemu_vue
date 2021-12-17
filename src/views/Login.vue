<template>
  <div class="mx-auto w-fit">
    <el-image :src="logoSrc" class="bounce-top"/>
    <el-form :model="user" ref="loginForm" label-width="60px" label-position="top" :inline="false" size="normal">
      <el-form-item label="用户名" prop="name">
        <input v-model="user.username" autocomplete class="my-input" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <input v-model="user.password" autocomplete="current-password" type="password" class="my-input" />
      </el-form-item>
      <el-form-item class="my-10">
        <button type="button" class="base-btn rounded mx-10">注册</button>
        <button type="button" class="base-btn rounded mx-10" @click="login">登录</button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import logo from "@/assets/logo_xl.png";
import "@/assets/css/animation/bounce-t.css"

export default {
  data() {
    return {
      logoSrc: logo,
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      this.$store.commit('setUser', {...this.user, auth: true, avatar: "https://avatars.githubusercontent.com/u/55338151?v=4"});
      this.$router.push('/index');
    }
  }
}
</script>

<style scoped>
.my-input {
  @apply border-primary-black focus:outline-none focus:ring-4 focus:ring-primary-red transition-all px-4 py-2 text-base w-full rounded;
}
</style>