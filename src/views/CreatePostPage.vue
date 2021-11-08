<template>
  <app-layout>
    <section class="create-post">
      <h1 class="create-post_heading">Créer une publication</h1>
      <div class="create-post_container">
        <div class="create-post_content">
          <textarea type="textbox"
            name="post"
            id="createpost"
            cols="60"
            rows="15"
            placeholder="De quoi voulez vous parler ?"></textarea>
        </div>
        <div class="create-post_img-links">
          <button class="add-img-link-btn">
            <svg width="21px"
              height="21px"
              viewBox="0 0 21 21"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
              <g id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd">
                <g id="Outlined"
                  transform="translate(-850.000000, -2681.000000)">
                  <g id="Image"
                    transform="translate(100.000000, 2626.000000)">
                    <g id="Outlined-/-Image-/-add_photo_alternate"
                      transform="translate(748.000000, 54.000000)">
                      <g>
                        <polygon id="Path"
                          points="0 0 24 0 24 24 0 24"></polygon>
                        <path d="M18,20 L4,20 L4,6 L13,6 L13,4 L4,4 C2.9,4 2,4.9 2,6 L2,20 C2,21.1 2.9,22 4,22 L18,22 C19.1,22 20,21.1 20,20 L20,11 L18,11 L18,20 Z M10.21,16.83 L8.25,14.47 L5.5,18 L16.5,18 L12.96,13.29 L10.21,16.83 Z M20,4 L20,1 L18,1 L18,4 L15,4 C15.01,4.01 15,6 15,6 L18,6 L18,8.99 C18.01,9 20,8.99 20,8.99 L20,6 L23,6 L23,4 L20,4 Z"
                          id="🔹-Icon-Color"
                          fill="#1D1D1D"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Images
          </button>
          <button class="add-img-link-btn">
            <svg width="21px"
              height="21px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-link">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            Liens
          </button>
        </div>
      </div>
      <div class="btn-div createpost-btn-div">
        <button type="button"
          class="btn createpost-btn">Créer</button>
      </div>
    </section>
  </app-layout>
</template>

<script>
import AppLayout from '../components/AppLayout.vue'
export default {
  components: { AppLayout }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.create-post {
  margin: 3rem auto;
  width: 50%;
  background: $medium-light-background;
  padding: 3rem;
  border-radius: 1em;
  @media (max-width: $medium-breakpoint) {
    width: 70%;
  }
  @media (max-width: $small-breakpoint) {
    padding: 2rem;
    width: 88%;
    margin: 0;
    border-radius: revert;
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
</style>