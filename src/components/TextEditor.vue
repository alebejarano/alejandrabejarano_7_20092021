<template>
  <QuillEditor
        :modules="modules"
        @textChange="updateFiles"
        ref="quill"
        theme="snow"
        :toolbar="['bold', 'italic', 'underline', 'link', 'image']"
        placeholder="De quoi voulez vous parler ?" />
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
      files: [],
      inserted: [],
      deleted: [],
    }
  },
  components: { QuillEditor },
  methods: {
    updateFiles(event) {
      console.log(event)
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
