<template>
<main-layout>
  <h1 class="content_heading">Derniers contenus</h1>
  <div aria-live="polite"
      v-if="successfullyDeleted"
      class="success-deleted post-deleted">
      <p class="delete-p">Post supprimé</p>
    </div>
  <post-card v-for="post in posts" :key="post.id" :post="post" @deleted="postDeleted" />
</main-layout>  
</template>

<script>
import axios from 'axios'
import MainLayout from '../components/MainLayout.vue'
import PostCard from '../components/PostCard.vue'
export default {
  data() {
    return {
      posts: [],
      successfullyDeleted: false
    }
  },
  components: {MainLayout, PostCard},
  created() {
    this.getAllPosts()
  },
  methods: {
    getAllPosts() {
    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        this.posts = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    postDeleted() {
      this.successfullyDeleted = true
      setTimeout(() => (this.successfullyDeleted = false), 2000)
      this.getAllPosts();
    }
  }
}
</script>

<style lang="scss" scoped>
.post-deleted {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 10
}
</style>
