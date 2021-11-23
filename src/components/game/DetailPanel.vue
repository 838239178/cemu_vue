<template>
  <div class="text-left text-gray-200">
    <div class="text-sm font-bold">游戏简介:</div>
    <div class="wrap-text text-sm text-primary-gray leading-6 mt-2 mb-5 m" style="min-height: 5rem;">
      {{data.desc}}
    </div>
    <el-descriptions
      :column="1"
      direction="horizontal"
    >
    <el-descriptions-item
        :span="2"
        label="发行日期:"
        label-class-name="font-bold text-gray-200"
        class-name="text-primary-gray underline">
          {{data.date}}
      </el-descriptions-item >
      <el-descriptions-item
        label="出版商:"
        :span="2"
        label-class-name="font-bold text-gray-200"
        class-name="text-primary-gray underline">
          {{data.deployer}}
      </el-descriptions-item >
      <el-descriptions-item
        label="发行商:"
        :span="2"
        label-class-name="font-bold text-gray-200"
        class-name="text-primary-gray underline">
        {{data.publisher}}
      </el-descriptions-item>
      <el-descriptions-item
        label="游戏标签:"
        :span="2"
        label-class-name="font-bold text-gray-200 "
        class-name="space-x-2" >
        <el-tag v-for="t in data.tags" :key="t" color="#BF1313" class="text-gray-200  border-red-700" size="mini">
          {{t}}
        </el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {
  props:['data']
};
</script>
<style lang="css">
.el-descriptions__body {
    background: none !important;
}
</style>