<template>
  <article class="card">
    <div class="card_post">
      <div class="card_post_profile">
        <img :src="profilePicUrl"
          alt="photo de profil"
          class="card_post_profile_pic">
        <p>{{ post.user.name }}</p>
      </div>
      <!--Icon button to display the post options-->
      <button @click="toggleOptionsMenu"
        class="open-btn"
        :class="{ 'hidden': !displayEditButton }"
        aria-haspopup="true"
        :aria-expanded="isExpanded.toString()"
        aria-controls="post-options">
        <svg aria-hidden="true"
          focusable="false"
          width="18"
          height="18"
          version="1.1"
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 32 32"
          style="enable-background:new 0 0 32 32;"
          xml:space="preserve">
          <circle class="st0"
            cx="23"
            cy="7"
            r="3" />
          <line class="st0"
            x1="3"
            y1="7"
            x2="20"
            y2="7" />
          <line class="st0"
            x1="29"
            y1="7"
            x2="26"
            y2="7" />
          <circle class="st0"
            cx="12"
            cy="16"
            r="3" />
          <line class="st0"
            x1="3"
            y1="16"
            x2="9"
            y2="16" />
          <line class="st0"
            x1="29"
            y1="16"
            x2="15"
            y2="16" />
          <circle class="st0"
            cx="23"
            cy="25"
            r="3" />
          <line class="st0"
            x1="3"
            y1="25"
            x2="20"
            y2="25" />
          <line class="st0"
            x1="29"
            y1="25"
            x2="26"
            y2="25" />
        </svg>
      </button>
      <!--Post option menu-->
      <div v-if="isOpen"
        class="options-menu"
        id="post-options"
        role="menu">
        <button role="menuitem"
          class="modifier-post"
          @click="modifyPost">Modifier le post</button>
        <button role="menuitem"
          @click="deletePost"
          class="delete-post">Supprimer le post</button>
      </div>
      <!--my posts are return as strings, so we tell to interpret it as html-->
      <div v-html="post.content"
        class="card_post_content">
      </div>
    </div>
    <!--Like post button-->
    <button class="like-btn">
      <svg aria-hidden="true"
        focusable="false"
        width="18"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <title>J'aime</title>
        <path class="a"
          d="M20,15.659h0a1.5,1.5,0,1,1,0,3H19a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,1-1.5,1H12.5c-2.851,0-3.5-.5-7-1v-8.5c2.45,0,6.5-4.5,6.5-8.5,0-1.581,2.189-2.17,3,.719.5,1.781-1,5.281-1,5.281h8a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,2-1.5,2H21a1.5,1.5,0,0,1,0,3H20" />
        <rect class="a"
          x="0.5"
          y="10.159"
          width="5"
          height="12" />
        <path d="M3.25,19.159a.75.75,0,1,0,.75.75.75.75,0,0,0-.75-.75Z" />
      </svg>
      <span>J'aime</span>
    </button>
  </article>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isOpen: false,
      isExpanded: false
    }
  },
  emits: ['deleted'],
  props: ['post'],
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser
    },
    profilePicUrl() {
      if (this.post.user.profilePic) {
        return `http://localhost:3000/file/${this.post.user.profilePic}`
      } else {
        return '/user-placeholder.svg'
      }
    },
    displayEditButton() {
      return this.user.id === this.post.user.id || this.user.isAdmin
    }
  },
  methods: {
    toggleOptionsMenu() {
      this.isOpen = !this.isOpen
      this.isExpanded = !this.isExpanded
    },
    modifyPost() {
      this.$router.push({
        name: 'modifypost',
        params: { postId: this.post.id }
      })
    },
    deletePost() {
      axios
        .delete(`http://localhost:3000/posts/${this.post.id}`)
        .then(() => {
          this.$emit('deleted')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.hidden {
  visibility: hidden;
}
.open-btn {
  transform: translateY(-45px);
  position: absolute;
  right: 40px;
  margin: 0;
  color: $text-color;
  @include reset-btn;
  &:hover {
    font-weight: map-get($font-weights, bold);
  }
  &:active {
    background-color: gray;
  }
  svg {
    stroke: black;
  }
}
.overlay {
  position: fixed;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: none;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  @media (max-width: $small-breakpoint) {
    display: block;
  }
}
.options-menu {
  display: flex;
  flex-direction: column;
  width: 200px;
  position: absolute;
  right: 40px;
  background: $secondary-color;
  top: 46px;
  border: 1px solid $medium-light-background;
  box-shadow: 1px 2px 10px 2px gray;
}
.card {
  box-shadow: 0px 1px 12px 1px grey;
  width: 60%;
  margin: 3rem auto;
  @media (max-width: $large-breakpoint) {
    width: 90%;
  }
  &_post {
    padding: 0.5rem;
    border: 1px solid grey;
    position: relative;
    &_profile {
      display: flex;
      grid-gap: 1rem;
      &_pic {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: block;
        object-fit: cover;
      }
      &_pic + p {
        color: $text-color;
        font-weight: map-get($font-weights, bold);
      }
    }
    .modifier-post {
      //transform: translateY(-45px);
      right: 40px;
      padding: 0.5rem;
      color: $text-color;
      cursor: pointer;
      border: none;
      background-color: transparent;
      &:hover {
        font-weight: map-get($font-weights, bold);
        background-color: $medium-light-background;
      }
    }
    .delete-post {
      //transform: translateY(-45px);
      right: 15px;
      margin: 0;
      padding: 0.5rem;
      color: $primary-color;
      cursor: pointer;
      border: none;
      background-color: transparent;
      &:hover {
        font-weight: map-get($font-weights, bold);
        background-color: $medium-light-background;
      }
    }
  }
}
.card_post_content > p {
  text-align: justify;
}
.card_post_content img {
  width: 100%;
  max-height: 30rem;
  object-fit: contain;
}
.like-btn {
  width: 100%;
  background: transparent;
  border: 1px solid $text-color;
  cursor: pointer;
  padding: 0.3rem;
  &:hover {
    background: $secondary-color;
  }
  svg {
    fill: none;
    stroke: black;
  }
  span {
    margin-left: 0.5rem;
  }
}
</style>