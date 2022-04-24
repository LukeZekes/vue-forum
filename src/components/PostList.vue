<template>
    <div class="post-list">

        <div v-for="post in posts" :key="post.id" class="post">

            <div class="user-info">
                <a href="#" class="user-name">{{userById(post.userId).name}}</a>

                <a href="#">
                    <img class="avatar-large" :src="userById(post.userId).avatar" alt="">
                </a>

                <p class="desktop-only text-small">107 posts</p>

            </div>

            <div class="post-content">
                <div>
                  <p>
                    {{post.text}}
                  </p>
                </div>
            </div>

            <AppDate class="post-date text-faded" :timestamp="post.publishedAt" />

        </div>
    </div>
</template>

<script>


export default {
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      users: this.$store.state.users
    }
  },
  methods: {
    userById (userId) {
      return this.users.find(p => p.id === userId)
    }
  }
}
</script>

<style>

</style>