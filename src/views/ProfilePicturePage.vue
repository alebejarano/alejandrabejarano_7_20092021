<template>
  <form @submit.prevent="updatePicture" class="personal-info-form"
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
          <label for="profile-file">Modifiez votre photo de profil</label>
          <button type="button"
            @click="deletePicture()"
            class="delete-pic">Supprimer votre photo</button>
        </div>
      </div>
      <div class="account-btn-div">
        <button @click="updatePicture()"
          type="submit"
          class="btn account_info_button">Sauvegarder</button>
      </div>
    </div>
  </form>
    <div aria-live="polite"
      v-if="succesufullyUpdated"
      class="success">
      <p class="success-p">Profil mis à jour</p>
    </div>
    <div aria-live="polite"
      v-if="succesufullyDeletedPic"
      class="success-deleted">
      <p class="delete-p">Photo supprimé</p>
    </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      succesufullyUpdated: false,
      succesufullyDeletedPic: false,
      file: '',
      previewImage: null
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser
    },
    profilePicUrl() {
      if (this.previewImage) {
        return this.previewImage
      } else if (this.user.profilePic) {
        return `http://localhost:3000/file/${this.user.profilePic}`
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
      reader.onload = event => {
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
        .post('http://localhost:3000/users/pic', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          this.succesufullyUpdated = true
          setTimeout(() => (this.succesufullyUpdated = false), 2000)
          this.setUserProfilePic(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      } else {
        console.log('No picture selected')
      }
    },
    deletePicture() {
      axios
        .delete('http://localhost:3000/users/pic')
        .then(() => {
          this.previewImage = null
          this.succesufullyDeletedPic = true
          setTimeout(() => (this.succesufullyDeletedPic = false), 2000)
          this.setUserProfilePic(null)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.profile-pic {
  text-align: center;
  &_container {
    margin-top: 1rem;
  }
  &_img {
    width: 40%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
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
    letter-spacing: 0.6px;
    font-weight: map-get($font-weights, bold);
    color: $second-text-color;
    display: inline-block;
    cursor: pointer;
    padding: 0.3rem;
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
    @include reset-btn;
    margin-left: 1rem;
    margin-top: 1rem;
    color: #9d1b01;
    font-weight: map-get($font-weights, bold);
    &:hover {
      background: rgba(248, 156, 137, 0.2);
      padding: 0.3rem;
    }
    &:focus {
      outline: solid 2px blue;
    }
  }
}
</style>
