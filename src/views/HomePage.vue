<template>
<main-layout>
  <h1 class="content_heading">Derniers contenus</h1>
  <post-card v-for="post in posts" :key="post.id" :post="post" />
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
