<template>
  <div
    v-wave
    class="shadow-lg bg-white"
    :class="showDate ? 'rounded-2xl' : 'rounded-lg'"
    @click="$emit('click-post', postData)"
  >
    <el-row
      :gutter="10"
      align="middle"
      justify="space-around"
      class="h-full w-full"
      style="margin: 0px"
    >
      <el-col :span="showDate ? 8 : 11" :offset="0">
        <div class="relative">
          <el-image
            class="rounded-md"
            :class="showDate ? 'bigImg' : 'smallImg'"
            lazy
            :src="postData.pic"
          ></el-image>
          <div
            v-if="score"
            class="
              select-none
              transform
              duration-150
              hover:rotate-12
              absolute
              left-0
              bottom-1
              bg-primary-red
              text-white
              font-bold
              text-center
              rounded-md
              w-11
              h-6
            "
          >
            {{ postData.score }}
          </div>
        </div>
      </el-col>
      <el-col :span="showDate ? 16 : 13" :offset="0" class="h-full">
        <div
          class="text-left py-2 px-1"
          :class="showDate ? 'space-y-3' : 'space-y-2'"
        >
          <div
            class="
              w-full
              text-sm text-primary-gray
              flex
              justify-between
              items-center
            "
            v-if="showDate"
          >
            <div>
              <font-awesome-icon icon="clock" />
              {{ postData.date }}
            </div>
            <div class="text-xs px-2">
              {{ postData.author }}
            </div>
          </div>
          <div
            :class="[showDate ? 'text-base' : 'mb-1 text-sm']"
            class="
              font-bold
              overflow-ellipsis
              whitespace-nowrap
              overflow-hidden
            "
          >
            {{ postData.title }}
          </div>
          <div class="text-xs text-wrap">
            {{ postData.desc }}
          </div>
          <div
            class="text-xs px-2 text-right w-full text-primary-red"
            v-if="!showDate"
          >
            {{ postData.author }}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  emits: ["click-post"],
  props: {
    postData: {
      default: () => {
        return {
          title: "《暗黑地牢2》抢先评测：人类，在希望的绝路上狂奔",
          desc: "希望所有人都不必再成为孤高的英雄",
          date: new Date().toLocaleString("chinese", { hour12: false }),
          author: "IGN中国",
          pic: "https://www.ign.com.cn/sm/t/ign_cn/screenshot/default/2021111702405800-9e32ac640f095d6cacba21f3cd092595_vrpp.280.jpg",
          score: 8.5,
        };
      },
    },
    score: {
      default: () => false,
    },
    showDate: {
      default: () => false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.bigImg {
  height: 96px;
  width: 172px;
}
.smallImg {
  height: 80px;
  width: 142px;
}
</style>