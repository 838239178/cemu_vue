<template>
  <div class="flex justify-around items-center py-4 bg-white rounded-xl">
    <div class="w-1/5">
      <el-image
        :src="comment.avatar"
        fit="fill"
        class="rounded-full w-1/2 h-1/2"
      ></el-image>
      <div class="mt-7 text-sm">{{ comment.username }}</div>
    </div>
    <div class="w-7/12 mr-10">
      <div class="text-xs text-left font-medium my-2">
        评论于 {{ comment.date }}
      </div>
      <div
        class="
          text-sm text-left
          leading-5
          wrap-text
          py-4
          min-h-28
          border-t border-b border-primary-black
        "
      >
        {{ comment.content }}
      </div>
      <!-- children -->
      <div
        v-if="comment.children && comment.children.length > 0"
        class="bg-gray-100 p-3 rounded-md space-y-2 mt-4"
      >
        <div
          v-for="(c, i) in comment.children.slice(0,3)"
          :key="i"
          class="text-xs text-left hidden-wrap"
        >
          <span>
            <span class="font-semibold ml-1">
              {{ c.username }}:
            </span>
              {{ c.content }}
            </span>
        </div>
        <div class="text-primary-red text-left text-xs select-none cursor-pointer hover:underline">共{{comment.children.length}}条回复></div>
      </div>
      <div class="text-xs text-left space-x-4 my-2 text-gray-400">
        <span class="cursor-pointer select-none hover:underline"><font-awesome-icon icon="exclamation-circle" class="text-s2b text-primary-red mx-1"/>举报</span>
        <span class="cursor-pointer select-none hover:underline"><font-awesome-icon icon="comment-dots" class="text-s2b text-primary-red mx-1"/>评论</span>
        <span class="cursor-pointer select-none hover:underline">
          <font-awesome-icon icon="thumbs-up" class="text-s2b text-primary-red mx-1"/>
          {{comment.thumbsUp}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      default: () => {
        return {
          children: [],
        };
      },
    },
  },
};
</script>

<style>
</style>