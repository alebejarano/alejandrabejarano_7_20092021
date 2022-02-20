<template>
  <form @submit.prevent="updatePicture"
    class="personal-info-form"
    name="form"
    id="form">
    <div class="form_group account_info_form-item profile-pic">
      <div class="form_group_input-div profile-pic_container">
        <img :src="profilePicUrl"
          alt="photo de profil"
          class="profile-pic_img">
        <div class="inputfile-container">
          <input type="file"
            accept="image/*"
            @change="uploadImage($event)"
            id="profile-file"
            class="inputfile">
          <label for="profile-file">Edit profile picture</label>
          <button type="button"
            @click="deletePicture()"
            class="delete-pic">Delete picture</button>
        </div>
      </div>
      <div class="account-btn-div">
        <button @click="updatePicture()"
          type="submit"
          class="btn account_info_button">Save</button>
      </div>
    </div>
  </form>
  <transition name="fade">
  <toast-success
    v-if="succesufullyUpdated" type="success">
    <template #icon>
      <svg version="1.1"
      class="smile-icon"
      aria-hidden="true"
      focusable="false"
      width="24px"
      height="24px"
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
        cx="21.7"
        cy="25.3"
        r="3.5" />
      <path class="st4"
        d="M37.9,35.3c0,3.8-3.1,6.8-6.8,6.8s-6.8-3.1-6.8-6.8" />
      <line class="st5"
        x1="42.5"
        y1="24.2"
        x2="36.9"
        y2="24.2" />
    </svg>
    </template>
    <template #default>
      Your profile picture has been updated!
    </template>  
  </toast-success>
  </transition>
 <!---if the pic is successfully deleted-->
  <toast-success v-if="succesufullyDeletedPic" type="success">
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
      You have deleted your picture
    </template>
  </toast-success>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'
import ToastSuccess from '../components/ToastSuccess.vue'
export default {
  data() {
    return {
      succesufullyUpdated: false,
      succesufullyDeletedPic: false,
      file: '',
      previewImage: null
    }
  },
  components: { ToastSuccess },
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser
    },
    profilePicUrl() {
      if (this.previewImage) {
        return this.previewImage
      } else if (this.user.profilePic) {
        return `https://grupomania.alejandrabejarano.dev/file/${this.user.profilePic}`
      } else {
        return '/user-placeholder.svg'
      }
    }
  },
  methods: {
    ...mapMutations(['setUserProfilePic', 'setUser']),
    //Handles a change on the file upload
    uploadImage(event) {
      this.file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        this.previewImage = event.target.result
      }
      reader.readAsDataURL(this.file)
    },
    updatePicture() {
      if (this.file) {
        //Submits the file to the server
        //to have our file
        //Initialize the form data
        let formData = new FormData()
        //append the file variable that we have our data stored in
        //Add the form data we need to submit
        formData.append('file', this.file)
        //Make the request
        axios
          //first parameter is the URL,
          //second parameter is a key-value store of the data we are passing.
          //third parameter is adding the multipart/form-data header we need to send the file to the server.
          .post('/users/pic', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response) => {
            this.succesufullyUpdated = true
            setTimeout(() => (this.succesufullyUpdated = false), 2000)
            this.setUserProfilePic(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        console.log('No picture selected')
      }
    },
    deletePicture() {
      axios
        .delete('/users/pic')
        .then(() => {
          this.previewImage = null
          this.succesufullyDeletedPic = true
          setTimeout(() => (this.succesufullyDeletedPic = false), 2000)
          this.setUserProfilePic(null)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.fade-enter-active, .fade-leave-active {
  transition: all 0.8s ease-in-out;
}
.fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.fade-enter-to, .fade-leave-from  {
  transform: translateX(0);
  opacity: 1;
}
.fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.surprise-icon {
  .st0 {
    fill: #fdca47;
    stroke: #231f20;
    stroke-width: 4;
    stroke-miterlimit: 10;
  }
  .st1 {
    fill: #20201e;
  }
  .st2 {
    fill: #d05f58;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
  .st3 {
    fill: #ffffff;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
  .st4 {
    fill: none;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
  .st5 {
    fill: #ffffff;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
  .st6 {
    fill: #d05f58;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
  .st7 {
    fill: none;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
}
.smile-icon {
  .st0 {
    fill: #fdca47;
    stroke: #231f20;
    stroke-width: 4;
    stroke-miterlimit: 10;
  }

  .st1 {
    fill: #20201e;
  }

  .st2 {
    fill: #d05f58;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  .st3 {
    fill: #ffffff;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  .st4 {
    fill: none;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }

  .st5 {
    fill: #ffffff;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }

  .st6 {
    fill: #d05f58;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }

  .st7 {
    fill: none;
    stroke: #231f20;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
}
.profile-pic {
  text-align: center;
  &_container {
    margin-top: 1rem;
  }
  &_img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    @media (max-width: $small-breakpoint) {
      height: 150px;
      width: 150px;
    }
  }
  .inputfile-container {
    margin-top: 1rem;
  }
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    padding: 0;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .inputfile + label {
    font-size: 1em;
    @include options-btn;
    //font-weight: map-get($font-weights, bold);
    color: $second-text-color;
    display: inline-block;
  }
  .inputfile:focus + label,
  .inputfile + label:hover {
    background-color: $terciary-color;
  }
  .inputfile:focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
  .delete-pic {
    @include options-btn;
    background: transparent;
    margin-left: 1rem;
    margin-top: 1rem;
    color: #9d1b01;
    //font-weight: map-get($font-weights, bold);
    &:hover {
      background: rgba(248, 156, 137, 0.2);
    }
    &:focus {
      outline: solid 2px blue;
    }
  }
}
</style>
