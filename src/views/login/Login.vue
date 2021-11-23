<template>
  <div>
    <h1>This is Index</h1>
    <font-awesome-icon icon="user-secret" class="
        transition
        text-5xl text-blue-600
        hover:text-red-500
        transform
        hover:rotate-45
      " />
    <div class="mx-auto bg-gray-100 w-96 h-52 overflow-hidden flex justify-center items-center">
      <transition-group name="slide" mode="out-in">
        <template v-for="(path,index) in imgSrc" :key="'image'+index">
          <img class="w-20 h-20" v-show="index >=currentIndex && index<currentIndex+3" :src="path" >
        </template>
      </transition-group>
    </div>
    <el-button @click="changeImage">Change Image</el-button>
  </div>
</template>
<script>
  import '@/assets/css/animation/slide-anim.css'
  export default {
    data() {
      return {
        currentIndex: 0,
        imgSrc: [
          "https://avatars.githubusercontent.com/ml/497?s=82&v=4",
          "https://avatars.githubusercontent.com/u/55338151?v=4",
          "https://avatars.githubusercontent.com/u/61657380?v=4",
          "https://avatars.githubusercontent.com/u/55338151?v=4",
          "https://avatars.githubusercontent.com/ml/497?s=82&v=4",
          "https://avatars.githubusercontent.com/u/61657380?v=4",
        ]
      };
    },
    methods: {
      changeImage() {
        this.currentIndex+=3;
      },
    },
  };
</script>
<style lang="css">
</style>