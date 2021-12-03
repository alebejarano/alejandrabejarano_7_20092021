<template>
  <main-layout>
    <h1 class="create-post_heading">Modifier une publication</h1>
    <post-form :post="post" v-if="post" />
    <div aria-live="polite"
      v-if="succesufullyUpdated"
      class="success post-created">
      <p class="success-p">Votre contenu a été modifié</p>
    </div>
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
      succesufullyUpdated: false,
      files: [],
    }
  },
  components: { MainLayout, PostForm },
  created() {
     axios
      .get(`http://localhost:3000/posts/${this.$route.params.postId}`)
      .then(response => {
        this.post = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
