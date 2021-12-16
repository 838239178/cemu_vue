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
        class="bg-gray-100 px-3 pt-3 rounded-md space-y-2 mt-4 mb-2 overflow-y-hidden relative transition-all duration-200" 
        :class="isOpenReply ? 'max-h-48 pb-10' : 'max-h-32 pb-6'"
      >
      <!-- comment -->
        <div
          v-for="(c, i) in currentComment"
          :key="i"
          class="text-xs text-left"
          :class="isOpenReply ? 'wrap-text' : 'hidden-wrap'"
        >
          <span>
            <span class="font-semibold ml-1"> {{ c.username }}: </span>
            {{ c.content }}
          </span>
        </div>
        <div class="absolute bottom-0 left-0 w-full px-3 py-1">
          <div v-if="!isOpenReply" class="reply-switch" @click="openReply">
            共{{ comment.children.length }}条回复>
          </div>
          <div v-else class="flex justify-between items-center w-full">
            <div class="reply-switch" @click="closeReply">折叠评论</div>
            <Pagination :maxNum="0" v-model="page.start" :totalPage="totalPage" />
          </div>
        </div>
      </div>
      <div class="text-xs text-left space-x-4 mt-3 text-gray-400">
        <span class="cursor-pointer select-none hover:underline"
          ><font-awesome-icon
            icon="exclamation-circle"
            class="text-s2b text-primary-red mx-1"
          />举报</span
        >
        <span class="cursor-pointer select-none hover:underline" @click="showReply = !showReply">
          <font-awesome-icon
            icon="comment-dots"
            class="text-s2b text-primary-red mx-1"
          />评论</span
        >
        <span class="cursor-pointer select-none" @click="comment.thumbsUp++">
          <font-awesome-icon
            icon="thumbs-up"
            class="text-s2b text-primary-red mx-1 thumbs"
          />
          {{ comment.thumbsUp }}
        </span>
      </div>
      <ReplySender 
        class="my-1 transition-all ease-linear duration-300" 
        :class="showReply ? 'max-h-20' : 'max-h-0 overflow-y-hidden'" 
        @send="sendReply"/>
    </div>
  </div>
</template>

<script>
import Pagination from "../Pagination.vue";
import ReplySender from "./ReplySender.vue";
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
  data() {
    return {
      isOpenReply: false,
      showReply: false,
      page: {
        start: 1,
        size: 3,
      },
    };
  },
  computed: {
    currentComment() {
      let start = (this.page.start - 1) * this.page.size;
      let end = start + this.page.size;
      return this.comment.children.slice(start, end);
    },
    totalPage() {
      return Math.ceil(this.comment.children.length / this.page.size)
    }
  },
  methods: {
    openReply() {
      this.isOpenReply = true;
      this.page.size = 4;
    },
    closeReply() {
      this.isOpenReply = false;
      this.page.size = 3;
    },
    sendReply(content, user) {
      this.showReply = false;
      this.comment.children.splice(0,0,{
        content: content,
        username: user.username
      })
    }
  },
  components: { Pagination, ReplySender },
};
</script>

<style scoped>
.thumbs {
  @apply cursor-pointer hover:scale-110 transform duration-100 active:scale-100;
}
.reply-switch {
  @apply text-primary-red text-left text-xs select-none cursor-pointer hover:underline;
}
</style>