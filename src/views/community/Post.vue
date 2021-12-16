<template>
  <div class="w-7/10 mx-auto">
    <div
      class="
        text-left text-xl
        my-10
        text-white
        select-none
        cursor-pointer
        hover:text-primary-red
        active:text-lg
        transition-all
        duration-150
      "
      @click="$router.push(`/community?id=${post.gameId}`)"
    >
      <font-awesome-icon icon="chevron-left" />
      返回论坛
    </div>
    <!-- title -->
    <div
      class="
        rounded-3xl
        w-full
        text-center
        bg-white
        my-5
        flex
        justify-start
        items-center
        overflow-hidden
      "
    >
      <div
        class="
          w-fit
          min-w-44
          py-2
          font-semibold
          px-8
          text-sm
          bg-primary-red
          text-white
          border-2 border-primary-red
        "
      >
        查看: {{ post.views }} | 回复: {{ comments.length + 1 }}
      </div>
      <div class="font-bold w-8/12 text-center">
        {{ post.title }}
      </div>
    </div>
    <!-- main post -->
    <PostMain
      :content="content"
      :post="post"
      class="my-10"
      @click-reply="scrollToBottom"
    />
    <!-- comments bar -->
    <div
      ref="toolBar"
      class="
        mb-5
        flex
        justify-between
        items-center
        bg-white
        rounded-3xl
        px-10
        mx-auto
      "
      style="width: 95%"
    >
      <el-checkbox
        v-model="page.only"
        class="custom-cb"
        label="true"
        :indeterminate="false"
        >只看楼主</el-checkbox
      >
      <Pagination
        :total-page="parseInt(comments.length / page.size)"
        v-model="page.start"
        :maxNum="0"
      />
      <button
        class="text-sm text-primary-red cursor-pointer select-none"
        @click="changeCommentSort"
      >
        {{ sort === "hotest" ? "热门评论" : "最新评论" }}
        <font-awesome-icon
          icon="caret-down"
          class="mx-1 text-lg transition-transform duration-300 transform"
          :class="sort == 'newest' ? 'rotate-180' : ''"
        />
      </button>
    </div>
    <!-- comments -->
    <div class="space-y-8 w-11/12 mx-auto">
      <PostComment
        v-for="(com, i) in currentComment"
        v-show="com.userId == post.userId || !page.only"
        :key="i"
        :comment="com"
      />
      <Pagination
        :total-page="Math.ceil(comments.length / page.size)"
        v-model="page.start"
        :maxNum="5"
      />
    </div>
    <!-- reply editor -->
    <CommentSender2 ref="commentSender" @send="sendComment" />
  </div>
</template>

<script>
import api from "../../api";
import PostMain from "../../components/community/PostMain.vue";
import PostComment from "../../components/community/PostComment.vue";

import rich from "../../mock/richText.txt?raw";
import Pagination from "../../components/Pagination.vue";
import CommentSender2 from "../../components/community/CommentSender2.vue";

export default {
  data() {
    return {
      post: api.getGameEvalByGame(2),
      comments: [...api.getGameComments(2), ...api.getGameComments(2)],
      content: rich,
      sort: "newest",
      page: {
        start: 1,
        size: 5,
        only: false,
      },
    };
  },
  mounted() {
    let id = this.$route.query.id;
    this.loadPost(id);
  },
  computed: {
    currentComment() {
      let start = (this.page.start - 1) * this.page.size;
      let end = start + this.page.size;
      return this.comments.slice(start, end);
    }
  },
  methods: {
    loadPost(id) {
      this.post.id = id;
    },
    sortByDate() {
      this.comments.sort((a, b) => {
        let bt = b.date.replaceAll("/", "-");
        let at = a.date.replaceAll("/", "-");
        return new Date(bt).getTime() - new Date(at).getTime();
      });
    },
    changeCommentSort() {
      if (this.sort == "hotest") {
        this.sort = "newest";
        this.sortByDate();
      } else {
        this.sort = "hotest";
        this.comments.sort((a, b) => b.thumbsUp - a.thumbsUp);
      }
    },
    sendComment(content, user) {
      this.comments.push({
        content: content,
        username: user.username,
        avatar: user.avatar,
        date: "2022/12/16 11:06",
        gameId: this.post.gameId,
        thumbsUp: 0,
      });
      this.sortByDate();
      this.scrollToRef("toolBar");
      this.$refs.commentSender.clear();
    },
    scrollToRef(ref) {
      this.$refs[ref].scrollIntoView({ 
        block: "center", 
        inline: "nearest",
        behavior: "smooth"
      });
    },
    scrollToBottom() {
      window.scrollTo({
        top: document.documentElement.scrollHeight, //滚动到底部
        behavior: "smooth", // 平滑滚动
      });
    },
  },
  components: { PostMain, PostComment, Pagination, CommentSender2 },
};
</script>

<style scoped>
.custom-cb {
  --el-checkbox-font-size: 14px;
  --el-checkbox-checked-text-color: #bf1313;
  --el-checkbox-input-border-color-hover: #bf1313;
  --el-checkbox-checked-bg-color: #bf1313;
}
</style>