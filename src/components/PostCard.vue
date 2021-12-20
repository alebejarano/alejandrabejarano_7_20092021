<template>
  <!--Template to display the posts-->
  <article class="card">
    <div class="card_post"
      @keyup.esc="isOpen = false">
      <div class="card_post_profile">
        <img :src="profilePicUrl"
          :alt="altText"
          class="card_post_profile_pic">
        <p>{{ post.user.name }}</p>
      </div>
      <!--Icon button to display the post options-->
      <button @click="toggleOptionsMenu"
        class="open-btn"
        :class="{ 'hidden': !displayEditButton }"
        aria-haspopup="true"
        :aria-expanded="isExpanded.toString()"
        aria-controls="post-options"
        aria-label="post options menu">
        <svg aria-hidden="true"
          focusable="false"
          width="18"
          height="18"
          version="1.1"
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
        role="menu"
        v-click-away="hideDropdown">
        <button role="menuitem"
          class="modifier-post"
          v-if="canEdit"
          @click="modifyPostButton">Modifier le post</button>
        <button role="menuitem"
          @click="deletePost"
          v-if="canDelete"
          class="delete-post">Supprimer le post</button>
      </div>
      <!--my posts are return as strings, so we tell to interpret it as html-->
      <div v-html="post.content"
        class="card_post_content">
      </div>
    </div>
    <div class="post-btn">
      <!--Like post button-->
      <button class="like-btn"
        @click="likePost"
        :class="{ 'hasliked': hasLiked }">
        <span class="like-number">{{ nbLikes }}</span>
        <svg aria-hidden="true"
          focusable="false"
          width="25"
          height="25"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 32 32"
          style="enable-background:new 0 0 32 32;"
          xml:space="preserve">
          <path class="st0"
            d="M11,24V14H5v12h6v-2.4l0,0c1.5,1.6,4.1,2.4,6.2,2.4h6.5c1.1,0,2.1-0.8,2.3-2l1.5-8.6c0.3-1.5-0.9-2.4-2.3-2.4
          H20V6.4C20,5.1,18.7,4,17.4,4h0C16.1,4,15,5.1,15,6.4v0c0,1.6-0.5,3.1-1.4,4.4L11,13.8" />
        </svg>
        <span class="like-text">J'aime</span>
      </button>
      <!--Comments button-->
      <button class="comments-btn"
        @click="showCommentForm = !showCommentForm">
        <svg aria-hidden="true"
          focusable="false"
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -2 46 46">
          <title>Comments</title>
          <path class="a"
            d="M21,0A21,21,0,0,0,3.21,32.12l-3,7.09a2,2,0,0,0,2.62,2.62l7.09-3A21,21,0,1,0,21,0Z" />
        </svg>
        <span class="comments-btn_text">Ajouter un commentaire</span>
      </button>
    </div>
    <div class="wrapper"
      v-if="showCommentForm">
      <div class="comment-wrapper">
        <input @keyup.enter="submitComment"
          v-model="newComment"
          type="text"
          name="comments"
          placeholder="Ajouter votre commentaire..."
          autocomplete="off" />
      </div>
    </div>
    <div class="wrapper">
      <div class="comment-wrapper show-content"
        v-for="comment in comments"
        :key="comment.id">
        <div class="display-comments-profile">
          <div class="comments-profile">
            <img :src="profilePicComment(comment)"
              :alt="altText"
              class="comments-profile-pic">
            <p>{{ comment.user.name }}</p>
          </div>
          <p class="show-comment">{{ comment.content }}</p>
        </div>
        <button class="delete-comment-btn"
          @click="deleteComment(comment.id)"
          v-if="canDeleteComment(comment)">
          <svg aria-hidden="true"
            focusable="false"
            width="18"
            height="18"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 78.667 78.67"
            xml:space="preserve">
            <g>
              <path style="fill:#231F20;"
                d="M55.182,24.972c-1.219-1.218-3.191-1.217-4.408,0L39.335,36.411L27.9,24.972
                c-1.218-1.217-3.19-1.218-4.408,0c-1.217,1.217-1.217,3.19,0,4.408l11.436,11.439L23.492,52.253c-1.217,1.218-1.217,3.19,0,4.408
                c0.608,0.608,1.406,0.912,2.204,0.912c0.797,0,1.595-0.304,2.204-0.912l11.435-11.435l11.431,11.434
                c0.608,0.609,1.406,0.913,2.204,0.913s1.595-0.304,2.203-0.912c1.218-1.217,1.218-3.19,0.001-4.407L43.742,40.819l11.44-11.44
                C56.399,28.163,56.399,26.189,55.182,24.972z" />
              <path style="fill:#231F20;"
                d="M39.34,0C17.648,0,0,17.648,0,39.34C0,61.027,17.648,78.67,39.34,78.67
                c21.685,0,39.327-17.644,39.327-39.331C78.667,17.648,61.025,0,39.34,0z M39.34,72.438c-18.255,0-33.106-14.848-33.106-33.098
                c0-18.255,14.852-33.106,33.106-33.106c18.249,0,33.094,14.852,33.094,33.106C72.434,57.59,57.588,72.438,39.34,72.438z" />
            </g>
          </svg>
          <span class="visually-hidden">Supprimer Commentaire</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { mixin as VueClickAway } from 'vue3-click-away'
export default {
  data() {
    return {
      altText: 'photo de profil',
      isOpen: false,
      isExpanded: false,
      likes: this.post.likes,
      comments: [],
      showCommentForm: false,
      newComment: ''
    }
  },
  emits: ['deleted'],
  props: ['post'],
  mixins: [VueClickAway],
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
    },
    canEdit() {
      return this.user.id === this.post.user.id
    },
    canDelete() {
      return this.user.id === this.post.user.id || this.user.isAdmin
    },
    nbLikes() {
      return this.likes.length
    },
    hasLiked() {
      return !!this.likes.find((like) => like == this.user.id)
    }
  },
  created() {
    this.comments = this.post.comments
  },
  methods: {
    toggleOptionsMenu() {
      this.isOpen = !this.isOpen
      this.isExpanded = !this.isExpanded
    },
    hideDropdown() {
      this.isOpen = false
      this.isExpanded = false
    },
    modifyPostButton() {
      this.$router.push({
        name: 'modifypost',
        params: { postId: this.post.id }
      })
    },
    likePost() {
      axios
        .post(`http://localhost:3000/posts/${this.post.id}/like`)
        .then((response) => {
          this.likes = response.data.likes
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deletePost() {
      axios
        .delete(`http://localhost:3000/posts/${this.post.id}`)
        .then(() => {
          this.$emit('deleted')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    submitComment() {
      axios
        .post(`http://localhost:3000/posts/${this.post.id}/comment`, {
          content: this.newComment
        })
        .then((response) => {
          const newComment = Object.assign(response.data, { user: this.user })
          this.comments.push(newComment)
          this.showCommentForm = false
          this.newComment = ''
        })
        .catch((error) => {
          console.log(error)
          alert('Une erreur est survenue')
        })
    },
    deleteComment(commentId) {
      axios
        .delete(`http://localhost:3000/posts/comments/${commentId}`)
        .then(() => {
          this.comments = this.comments.filter((comment) => {
            return comment.id !== commentId
          })
        })
    },
    canDeleteComment(comment) {
      return this.user.id === comment.userId || this.user.isAdmin
    },
    profilePicComment(comment) {
      if (comment.user.profilePic) {
        return `http://localhost:3000/file/${comment.user.profilePic}`
      } else {
        return '/user-placeholder.svg'
      }
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
  background: $secondary-color;
  border: none;
  //border: 1px solid $text-color;
  cursor: pointer;
  padding: 0.3rem 0.3rem 0.5rem;
  &:hover {
    background: transparent;
  }
  .like-number {
    margin-right: 0.5rem;
  }
  svg {
    fill: none;
    stroke: black;
    transform: translateY(5px);
  }
  .like-text {
    margin-left: 0.5rem;
  }
}
.hasliked {
  svg {
    stroke: darken($primary-color, 10%);
    stroke-width: 2;
  }
  .like-text,
  .like-number {
    color: darken($primary-color, 10%);
    font-weight: map-get($font-weights, bold);
  }
}
.post-btn {
  display: flex;
}
.comments-btn {
  width: 100%;
  background: $secondary-color;
  border: none;
  //border: 1px solid $text-color;
  cursor: pointer;
  padding: 0.3rem 0.3rem 0.5rem;
  &:hover {
    background: transparent;
  }
  svg {
    fill: $terciary-color;
    stroke: $text-color;
    stroke-width: 0.2em;
    transform: translateY(3px);
  }
  &_text {
    margin-left: 0.5rem;
  }
}
.wrapper {
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  background-color: $secondary-color;
  input {
    width: 100%;
    border: none;
    padding: 0.4rem 0 0.4rem 0.2rem;
  }
  .show-comment {
    background: white;
    padding: 0.5rem;
    margin-top: 0;
  }
}
.show-content {
  position: relative;
}
.delete-comment-btn {
  position: absolute;
  top: 17px;
  right: 10px;
  @include reset-btn;
}
.display-comments-profile {
  background-color: white;
  padding: 0.5rem 0.4rem 0 0.4rem;
}
.comments-profile {
  display: flex;
  grid-gap: 0.5rem;
  p {
    transform: translateY(10px);
    margin: 0;
  }
}
.comments-profile-pic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
.visually-hidden {
  @include visually-hidden;
}
</style>