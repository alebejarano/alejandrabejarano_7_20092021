<template>
  <h1 class="create-post_heading">Create Post</h1>
  <article class="create-post">
    <form @submit.prevent="createPost">
      <QuillEditor :modules="modules"
        toolbar="#my-toolbar"
        @textChange="updateFiles"
        ref="quill"
        theme="snow"
        placeholder="De quoi voulez vous parler ?">
        <template #toolbar>
          <div id="my-toolbar">
            <button class="ql-bold"
              aria-label="bold font"></button>
            <button class="ql-italic"
              aria-label="italic font"></button>
            <button class="ql-link"
              aria-label="add a link"></button>
            <button class="ql-image"
              aria-label="upload an image"></button>
            <button class="ql-list"
              value="ordered"
              type="button"
              aria-label="ordered list"></button>
            <button class="ql-list"
              value="bullet"
              type="button"
              aria-label="unordered list"></button>
            <select class="ql-size">
              <option value="small"></option>
              <!-- Note a missing, thus falsy value, is used to reset to default -->
              <option selected></option>
              <option value="large"></option>
              <option value="huge"></option>
            </select>
          </div>
        </template>
      </QuillEditor>
      <div class="btn-div createpost-btn-div">
        <button type="submit"
          class="btn createpost-btn">Post</button>
      </div>
    </form>
    <div aria-live="polite"
      v-if="succesufullyUpdated"
      class="success post-created">
      <p class="success-p">Your post has been created</p>
    </div>
  </article>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ImageUploader from 'quill-image-uploader'
import axios from 'axios'

export default {
  setup() {
    const modules = {
      name: 'imageUploader',
      module: ImageUploader,
      options: {
        upload: file => {
          return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('file', file)
            axios
              .post('/posts/images', formData)
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
      files: [],
      succesufullyUpdated: false
    }
  },
  components: { QuillEditor },
  methods: {
    createPost() {
      axios
        .post('/posts', {
          content: this.$refs.quill.getHTML(),
          files: this.files
        })
        .then(() => {
          this.succesufullyUpdated = true
          setTimeout(() => (this.succesufullyUpdated = false), 2000)
          //redirect to my post page
          this.$router.push('/usercontent')
        })
    },
    updateFiles(event) {
      const inserted = this.getImgUrls(event.delta)
      const deleted = this.getImgUrls(
        this.$refs.quill.getContents().diff(event.oldContents)
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

<!--STYLE IS IN APP.SCSS-->
