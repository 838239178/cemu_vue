<template>
  <div class="px-2 py-3 cursor-pointer rounded" @click="$emit('click-item', index)">
    <el-row align="middle" justify="space-around">
      <el-col
        :span="2"
        :class="`text-${indexSize}`"
        class="font-bold primary-gray-color"
      >
        {{ index + 1 }}
      </el-col>
      <el-col :span="6" :offset="0">
        <el-image
          :class="`w-${iconSize} h-${iconSize}`"
          class="rounded-lg shadow-inner"
          :src="icon"
          fit="fill"
          :lazy="true"
        ></el-image>
      </el-col>
      <el-col :span="16" class="space-y-2 px-2">
        <div class="text-left text-s2b font-semibold hidden-wrap">
          {{ name }}
        </div>
        <div class="flex justify-between items-baseline w-full">
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
          <div v-for="t in tags" :key="t" class="underline text-xs text-primary-black">
            {{ t }}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  emits: ["click-btn"],
  props: {
    name: {
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
    icon: {
      default: () =>
        "https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180529/1527578329_606706.jpg",
    },
    iconSize: {
      default: () => 12
    },
    indexSize: {
      default: () => 'lg'
    }
  },
};
</script>
<style lang="css">
</style>