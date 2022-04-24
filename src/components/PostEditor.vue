<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="postText" name="" id="" cols="30" rows="10" class="form-input" />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postText: ''
    }
  },
  methods: {
    save() {
      const postId = "ggqq" + Math.random();
      const post = {
        id: postId,
        text: this.postText,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: "rpbB8C6ifrYmNDufMERWfQUoa202",
      };
      this.$emit('save', {post})
      // this.posts.push(post);
      // this.thread.posts.push(postId);
      this.postText = "";
    },
  },
};
</script>

<style>
</style>