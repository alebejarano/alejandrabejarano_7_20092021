<template>
  <main-layout>
    <h1 class="account_info_heading content_heading">Mes contenus</h1>
    <post-card v-for="post in posts" :key="post.id" :post="post" />
  </main-layout>
</template>

<script>
import axios from 'axios'
import MainLayout from '../components/MainLayout.vue'
import PostCard from '../components/PostCard.vue'
export default {
  data () {
    return {
      posts: []
    }
  },
  components: { MainLayout, PostCard },
  created() {
    axios
      .get('http://localhost:3000/posts/user')
      .then(response => {
        this.posts = response.data
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

</style>
