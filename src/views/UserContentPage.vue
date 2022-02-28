<template>
  <main-layout>
    <h1 class="account_info_heading content_heading">My content</h1>
    <!---<div aria-live="polite"
      v-if="successfullyDeleted"
      class="success-deleted post-deleted">
      <p class="delete-p">Deleted Post</p>
    </div>-->
    <transition name="fade">
      <toast-success v-if="successfullyDeleted"
        type="success">
        <template #icon>
          <svg version="1.1"
            aria-hidden="true"
            focusable="false"
            width="24px"
            height="24px"
            class="surprise-icon"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 62.4 62.4"
            style="enable-background:new 0 0 62.4 62.4;"
            xml:space="preserve">
            <circle class="st0"
              cx="31.2"
              cy="31.2"
              r="28.3" />
            <circle class="st1"
              cx="20.7"
              cy="23.3"
              r="3.5" />
            <circle class="st1"
              cx="41.4"
              cy="23.3"
              r="3.5" />
            <g>
              <path class="st5"
                d="M17.6,16.1c0,0-4.6-0.1-5.4,5.4" />
              <path class="st5"
                d="M44.8,16.1c0,0,4.6-0.1,5.4,5.4" />
            </g>
            <ellipse class="st6"
              cx="31.2"
              cy="37.2"
              rx="4.3"
              ry="5.6" />
          </svg>
        </template>
        <template #default>
          Your post has been deleted
        </template>
      </toast-success>
    </transition>
    <post-card v-for="post in posts"
      :key="post.id"
      :post="post"
      @deleted="postDeleted" />
  </main-layout>
</template>

<script>
import axios from 'axios'
import MainLayout from '../components/MainLayout.vue'
import PostCard from '../components/PostCard.vue'
import ToastSuccess from '../components/ToastSuccess.vue'
export default {
  data() {
    return {
      posts: [],
      successfullyDeleted: false
    }
  },
  components: { MainLayout, PostCard, ToastSuccess },
  created() {
    this.getPostsByUser()
  },
  methods: {
    getPostsByUser() {
      axios.get('/posts/user').then((response) => {
        this.posts = response.data
      })
    },
    postDeleted() {
      this.successfullyDeleted = true
      setTimeout(() => (this.successfullyDeleted = false), 2000)
      this.getPostsByUser()
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
  z-index: 10;
}
</style>
