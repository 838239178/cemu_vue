<template>
  <div class="text-white">
    {{post.id}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      comments: [],
    }
  },
  mounted() {
    let id = this.$route.query.id;
    this.loadPost(id);
  },
  methods: {
    loadPost(id) {
      this.post.id = id;
    },
  },
};
</script>

<style>
</style>