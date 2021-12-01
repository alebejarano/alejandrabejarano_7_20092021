<template>
  <article class="card">
    <div class="card_post">
      <div class="card_post_profile">
        <img :src="profilePicUrl"
          alt="photo de profil"
          class="card_post_profile_pic">
        <p>{{ post.user.name }}</p>
      </div>
      <button class="delete-post" aria-label="supprimer post">X</button>
      <!--my posts are return as strings, so we tell to interpret it as html-->
      <div v-html="post.content"
        class="card_post_content">
      </div>
    </div>
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
import { mapGetters } from 'vuex'
export default {
  props: ['post'],
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser
    },
    profilePicUrl() {
      if (this.user.profilePic) {
        return `http://localhost:3000/file/${this.user.profilePic}`
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
    .delete-post {
      transform: translateY(-45px);
      position: absolute;
      right: 15px;
      margin: 0;
      color: $primary-color;
      @include reset-btn;
    }
  }
}
.card_post_content > p {
  text-align: justify;
}
.card_post_content img {
  width: 100%;
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