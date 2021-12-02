<template>
    <article class="create-post">
      <h1 class="create-post_heading">Créer une publication</h1>
      <form @submit.prevent="createPost">
        <QuillEditor :modules="modules"
        @textChange="updateFiles"
        ref="quill"
        theme="snow"
        :toolbar="['bold', 'italic', 'underline', 'link', 'image']"
        placeholder="De quoi voulez vous parler ?" />
      <div class="btn-div createpost-btn-div">
        <button type="submit"
          class="btn createpost-btn">Créer</button>
      </div>
      </form>
      <div aria-live="polite"
        v-if="succesufullyUpdated"
        class="success post-created">
        <p class="success-p">Votre contenu a été créé</p>
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
            console.log(file);
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
      succesufullyUpdated: false,
    }
  },
  components: { QuillEditor },
  methods: {
    createPost() {
      axios
        .post('http://localhost:3000/posts', {
          content: this.$refs.quill.getHTML(),
          files: this.files
        })
        .then(response => {
          this.succesufullyUpdated = true
          setTimeout(() => (this.succesufullyUpdated = false), 2000)
          //redirect to my post page
          this.$router.push('/usercontent')
          console.log(response, 'YESSSSS');
        })
    },
    updateFiles(event) {
      console.log(event);
      const inserted = this.getImgUrls(event.delta);
      const deleted = this.getImgUrls(this.$refs.quill.getContents().diff(event.oldContents));
      if (inserted.length && inserted[0].match(/^http/)) {
        console.log('inserted', inserted[0]);
        this.files.push(inserted[0])
      }
      if (deleted.length && deleted[0].match(/^http/)) {
        console.log('deleted', deleted[0]);
        const index = this.files.indexOf(deleted[0])
        if (index != -1) {
          this.files.splice(index, 1)
        }
      }
    },
    getImgUrls(delta) {
      return delta.ops.filter(i => i.insert && i.insert.image).map(i => i.insert.image);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.create-post {
  margin: 3rem auto;
  width: 100%;
  @media (max-width: $large-breakpoint) {
    width: 90%;
  }
  @media (max-width: $small-breakpoint) {
    padding: 2rem;
    margin: 0;
  }
  @media (max-width: $xsmall-breakpoint) {
    width: auto;
    padding: 2rem 0;
  }
  &_heading {
    font-size: map-get($font-sizes, heading2);
    text-align: center;
  }
  &_container {
    background-color: $light-background;
    width: 100%;
  }
  &_content {
    width: 100%;
    margin: auto;
    textarea {
      resize: vertical;
      border: 1px solid transparent;
      border-radius: 6px;
      outline-color: $text-color;
      width: 99%;
    }
  }
  &_img-links {
    display: flex;
  }
  .add-img-link-btn {
    @include reset-btn;
    border-right: 1px solid lightgray;
    border-top: 1px solid lightgray;
    padding: 1rem;
    width: 40%;
    color: $second-text-color;
    flex: 1;
    &:hover {
      background-color: $secondary-color;
      font-weight: map-get($font-weights, bold);
    }
    &:active {
      content: ' ';
      border-bottom: 3px solid $second-text-color;
    }
  }
  .createpost-btn-div {
    margin: 2rem 0 0;
    @media (max-width: $xsmall-breakpoint) {
      margin: 2rem 0 1rem;
    }
  }
  .createpost-btn {
    width: 40%;
  }
}
.post-created {
  margin-top: 1rem;
}
</style>