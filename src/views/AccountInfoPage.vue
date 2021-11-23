<template>
  <h1 class="account_info_heading">Informations personelles</h1>
  <form @submit.prevent="updateInfo"
    class="personal-info-form"
    name="form"
    id="form">
    <div class="form_group account_info_form-item profile-pic">
      <div class="form_group_input-div profile-pic_container">
        <img src="../assets/blank-profile.svg"
          alt="photo de profil"
          class="profile-pic_img">
        <div class="inputfile-container">
          <input type="file"
            @change="handleFileUpload($event)"
            id="profile-file"
            class="inputfile">
          <label for="profile-file">Modifiez votre photo de profil</label>
          <button type="button"
            @click="submitFile()"
            class="delete-pic">Supprimer vos photo</button>
        </div>
      </div>
    </div>
    <div class="form_group account_info_form-item">
      <label for="name">Nom complet</label>
      <div class="form_group_input-div">
        <input type="text"
          v-model="form.name"
          @blur="v$.form.name.$touch"
          :class="{error: v$.form.name.$error, valid: !v$.form.name.$invalid}"
          placeholder="Ecrivez vos prenom et nom"
          id="fullName"
          name="fullName"
          aria-describedby="fullName-error"
          required>
      </div>
      <small v-if="v$.form.name.$error"
        class="error-msg"
        id="fullName-error">Ecrivez vos prenom et nom
      </small><!-- $error === $invalid && $dirty -->
    </div>
    <div class="form_group account_info_form-item">
      <label for="email">Email</label>
      <div class="form_group_input-div">
        <input type="email"
          v-model="form.email"
          @blur="v$.form.email.$touch"
          :class="{error: v$.form.email.$error, valid: !v$.form.email.$invalid}"
          placeholder="email"
          id="email"
          name="email"
          aria-describedby="email-error"
          autocomplete="username"
          required>
      </div>
      <small v-if="v$.form.email.$error"
        class="error-msg"
        id="email-error">L'adresse email n'est pas valide. Ex:juan@example.com
      </small>
    </div>
    <div class="account-btn-div">
      <button class="btn account_info_button">Sauvegarder</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
//import { mapMutations } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      file: ''
    }
  },
  validations() {
    return {
      form: {
        name: { required }, //Matches this.name
        email: { required, email } //Matches this.email
      }
    }
  },
  methods: {
    //Handles a change on the file upload
    handleFileUpload(event) {
      this.file = event.target.files[0]
    },
    //Submits the file to the server
    submitFile() {
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
        .then(() => {
          console.log('Funcionooo')
        })
        .catch(() => {
          console.log('NOOOOOO')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.personal-info-form {
  width: 100%;
  @media (max-width: $large-breakpoint) {
    width: 50%;
    margin: auto;
  }
  @media (max-width: $small-breakpoint) {
    width: 65%;
  }
  @media (max-width: $xsmall-breakpoint) {
    width: 90%;
  }
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
}
</style>