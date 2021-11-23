<template>
  <div class="px-2">
    <el-row align="middle" justify="space-around">
      <el-col :span="2" :offset="0" class="text-2xl font-bold primary-gray-color">
        {{ index }}.
      </el-col>
      <el-col :span="6" :offset="0">
        <el-image
          class="w-20 h-20 rounded-sm"
          style="box-shadow: 5px 5px 10px #bbb;"
          :src="imgSrc"
          fit="fill"
          :lazy="true"
        ></el-image>
      </el-col>
      <el-col :span="11" class="space-y-4 px-2">
        <div class="text-left text-lg font-extrabold hidden-wrap">{{ title }}</div>
        <div class="flex justify-between items-center">
          <div
            class="
              bg-primary-red
              px-2
              text-sm text-white text-center
              rounded-xl
            "
          >
            {{ score }}
          </div>
          <template v-for="(t, i) in tags" :key="i">
            <div class="underline text-xs text-primary-gray">{{ t }}</div>
          </template>
        </div>
      </el-col>
      <el-col :span="5">
        <button
          @click="$emit('click-btn', index)"
          class="
            py-1
            hover:scale-105
            active:ring-red-500
            transform
            duration-200
            active:ring-2
            rounded-xl
            px-3
            text-sm
            bg-primary-red
            text-white text-center
          "
        >
          详情
        </button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  emits: ['click-btn'],
  props: {
    title: {
      default: () => "上古卷轴5：天际",
    },
    index: {
      default: () => 1,
    },
    tags: {
      default: () => ["剧情", "经典", "开放世界"],
    },
    score: {
      default: () => 8.5,
    },
    imgSrc: {
      default: () =>
        "https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180529/1527578329_606706.jpg",
    },
  },
};
</script>
<style lang="css">
</style>