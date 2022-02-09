<template>
  <main-layout>
    <h1 class="account_info_heading content_heading">My content</h1>
    <div aria-live="polite"
      v-if="successfullyDeleted"
      class="success-deleted post-deleted">
      <p class="delete-p">Deleted Post</p>
    </div>
    <post-card v-for="post in posts" :key="post.id" :post="post" @deleted="postDeleted"/>
  </main-layout>
</template>

<script>
import axios from 'axios'
import MainLayout from '../components/MainLayout.vue'
import PostCard from '../components/PostCard.vue'
export default {
  data () {
    return {
      posts: [],
      successfullyDeleted: false
    }
  },
  components: { MainLayout, PostCard },
  created() {
    this.getPostsByUser()
  },
  methods: {
    getPostsByUser() {
      axios
      .get('/posts/user')
      .then(response => {
        this.posts = response.data
      })
    },
    postDeleted() {
      this.successfullyDeleted = true
      setTimeout(() => (this.successfullyDeleted = false), 2000)
      this.getPostsByUser();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.post-deleted {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 10
}
</style>
