<template>
  <main-layout>
    <h1 class="create-post_heading">Modifier une publication</h1>
    <form class="create-post" @submit.prevent="modifyPost">
      <QuillEditor v-if="post"
        v-model:content="postContent"
        contentType="html"
        :modules="modules"
        @textChange="updateFiles"
        ref="quill"
        theme="snow"
        :toolbar="['bold', 'italic', 'underline', 'link', 'image']"
        placeholder="De quoi voulez vous parler ?" />
      <div class="btn-div createpost-btn-div">
        <button type="submit"
          class="btn createpost-btn">Modifier</button>
      </div>
    </form>
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
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ImageUploader from 'quill-image-uploader'
export default {
  setup() {
    const modules = {
      name: 'imageUploader',
      module: ImageUploader,
      options: {
        upload: file => {
          return new Promise((resolve, reject) => {
            console.log(file)
            const formData = new FormData()
            formData.append('file', file)
            axios
              .post('http://localhost:3000/posts/images', formData)
              .then(response => {
                resolve(response.data.url)
              })
              .catch(error => {
                reject('Upload failed')
                console.error('Error:', error)
              })
          })
        }
      }
    }
    return { modules }
  },
  data() {
    return {
      post: null,
      files: [],
      succesufullyUpdated: false
    }
  },
  components: { MainLayout, QuillEditor },
  computed: {
    postContent: {
      get() {
        return this.post ? this.post.content : ''
      },
      set(newValue) {
        return this.post.content = newValue
      }
    }
  },
  created() {
    this.getPostById()
  },
  methods: {
    getPostById() {
      axios
        .get(`http://localhost:3000/posts/${this.$route.params.postId}`)
        .then(response => {
          this.post = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    modifyPost() {
      console.log(this.post.content);
      axios
        .patch(`http://localhost:3000/posts/${this.$route.params.postId}`, {
          content: this.$refs.quill.getHTML(),
          files: this.files
        })
        .then(() => {
          this.succesufullyUpdated = true
          setTimeout(() => (this.succesufullyUpdated = false), 2000)
          this.$router.push('/usercontent')
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateFiles(event) {
      console.log(event)
      const inserted = this.getImgUrls(event.delta)
      const deleted = this.getImgUrls(
      this.$refs.quill?.getContents().diff(event.oldContents)
      )
      if (inserted.length && inserted[0].match(/^http/)) {
        console.log('inserted', inserted[0])
        this.files.push(inserted[0])
      }
      if (deleted.length && deleted[0].match(/^http/)) {
        console.log('deleted', deleted[0])
        const index = this.files.indexOf(deleted[0])
        if (index != -1) {
          this.files.splice(index, 1)
        }
      }
    },
    getImgUrls(delta) {
      return delta.ops
        .filter(i => i.insert && i.insert.image)
        .map(i => i.insert.image)
    }
  }
}
</script>

