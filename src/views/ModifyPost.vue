<template>
  <main-layout>
    <h1 class="create-post_heading">Edit Post</h1>
    <post-form :post="post" v-if="post" />
  </main-layout>
</template>

<script>
import axios from 'axios'
import MainLayout from '../components/MainLayout.vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import PostForm from '../components/PostForm.vue'
export default {
  data() {
    return {
      post: null,
      files: [],
    }
  },
  components: { MainLayout, PostForm },
  created() {
     axios
      .get(`/posts/${this.$route.params.postId}`)
      .then(response => {
        this.post = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
