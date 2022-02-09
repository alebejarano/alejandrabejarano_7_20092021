<template>
  <h1 class="account_info_heading">Profile</h1>
  <form @submit.prevent="updateInfo"
    class="personal-info-form"
    name="form"
    id="form">
    <div class="form_group account_info_form-item">
      <label for="fullName">Full Name</label>
      <div class="form_group_input-div">
        <input type="text"
          v-model="form.name"
          @blur="v$.form.name.$touch"
          :class="{error: v$.form.name.$error, valid: !v$.form.name.$invalid}"
          placeholder="First name and lastname"
          id="fullName"
          name="fullName"
          aria-describedby="fullName"
          required>
      </div>
      <small v-if="v$.form.name.$error"
        class="error-msg"
        id="fullName">Write your first and last name
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
          aria-describedby="email"
          autocomplete="email"
          required>
      </div>
      <small v-if="v$.form.email.$error"
        class="error-msg"
        id="email">Invalid email address. Ex:juan@example.com
      </small>
    </div>
    <div class="account-btn-div">
      <button @click="updateInfo()" class="btn account_info_button">Sauvegarder</button>
    </div>
  </form>
  <div aria-live="polite" v-if="succesufullyUpdated" class="success">
    <p class="success-p">Profile updated!</p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      succesufullyUpdated: false,
      form: {
        name: '',
        email: '',
      }
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
  computed: {
    ...mapGetters(['getUser']),
    user () {
      return this.getUser
    }
  },
  //once created it has acces to the store
  created () {
    this.form.name = this.user.name
    this.form.email = this.user.email
  },
  methods: {
    ...mapMutations(['setUser']),
    updateInfo() {
      if (!this.v$.form.$invalid) {
        axios
          .patch(`/users/${this.user.id}`,{
            name: this.form.name,
            email: this.form.email,
          })
          .then(response => {
            this.succesufullyUpdated = true
          setTimeout(() => (this.succesufullyUpdated = false), 2000)
            this.setUser(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      }
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