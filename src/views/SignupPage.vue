<template>
  <p class="go-to-login">Already have an account?
    <router-link to="/guest/login">Log In</router-link>
  </p>
 <!---Logo Coffee Office-->
  <img src="../assets/coffee-logo.svg" alt="" class="icon-svg">
<!--Create an account section-->
  <section class="guest_block_container">
    <h1 class="guest_block_container_heading">Create an account</h1>
    <hr>
    <p class="isregistered" v-if="isRegistered">Seems like you already have an account
        <router-link to="/guest/login">Log In</router-link>
      </p>
    <form @submit.prevent="signup"
      class="form"
      name="form"
      id="form">
      <div class="form_group">
        <label for="name">Full name</label>
        <div class="form_group_input-div">
          <input type="text"
            v-model="form.name"
            @blur="v$.form.name.$touch"
            :class="{error: v$.form.name.$error, valid: !v$.form.name.$invalid}"
            placeholder="Write your first name and last name"
            id="fullName"
            name="fullName"
            aria-describedby="fullName-error"
            required>
        </div>
        <small v-if="v$.form.name.$error"
          class="error-msg"
          id="fullName-error">Write your first and last name
        </small><!-- $error === $invalid && $dirty -->
      </div>
      <div class="form_group">
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
          id="email-error">Invalid email address. Ex:juan@example.com</small>
      </div>
      <div class="form_group">
        <label for="new-password">Password</label>
        <div class="form_group_input-div">
          <input :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            @blur="v$.form.password.$touch"
            :class="{error: v$.form.password.$error, valid: !v$.form.password.$invalid}"
            id="new-password"
            name="password"
            aria-describedby="password-error"
            autocomplete="new-password"
            required>
          <!--show-hide password icon-->
          <button @click="showPassword = !showPassword"
            type="button"
            aria-pressed="false"
            :aria-label="showPassword ? 'hide password' : 'show password as plain text. Warning: this will display your password on the screen.'"
            id="toggle-password"
            class="show-password">
            <svg v-if="!showPassword"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
              width="18px"
              height="18px"
              style="enable-background:new 0 0 50 50;"
              xml:space="preserve">
              <title>show password</title>
              <g id="Layer_1">
                <path d="M25,39c13.036,0,23.352-12.833,23.784-13.379L49.275,25l-0.491-0.621C48.352,23.833,38.036,11,25,11
                    S1.648,23.833,1.216,24.379L0.725,25l0.491,0.621C1.648,26.167,11.964,39,25,39z M25,13c10.494,0,19.47,9.46,21.69,12
                    C44.473,27.542,35.509,37,25,37C14.506,37,5.53,27.54,3.31,25C5.527,22.458,14.491,13,25,13z" />
                <path d="M25,34c4.963,0,9-4.038,9-9s-4.037-9-9-9s-9,4.038-9,9S20.037,34,25,34z M25,18c3.859,0,7,3.14,7,7s-3.141,7-7,7
                    s-7-3.14-7-7S21.141,18,25,18z" />
              </g>
              <g>
              </g>
            </svg>
            <svg v-else
              width="18px"
              height="18px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
              <title>hide password</title>
              <g id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage">
                <g id="icon-21-eye-hidden"
                  sketch:type="MSArtboardGroup"
                  fill="#000000">
                  <path d="M8.10869891,20.8913011 C4.61720816,18.8301147 3,16 3,16 C3,16 7,9 16,9 C17.3045107,9 18.5039752,9.14706466 19.6014388,9.39856122 L18.7519017,10.2480983 C17.8971484,10.0900546 16.9800929,10 16,10 C8,10 4.19995117,16 4.19995117,16 C4.19995117,16 5.71472808,18.3917225 8.84492713,20.1550729 L8.10869891,20.8913011 L8.10869891,20.8913011 L8.10869891,20.8913011 Z M12.398561,22.601439 C13.4960246,22.8529356 14.6954892,23.0000001 16,23 C25,22.999999 29,16 29,16 C29,16 27.3827918,13.1698856 23.8913008,11.1086992 L23.1550727,11.8449273 C26.2852719,13.6082776 27.8000488,16 27.8000488,16 C27.8000488,16 24,21.999999 16,22 C15.019907,22.0000001 14.1028515,21.9099455 13.2480981,21.7519019 L12.398561,22.601439 L12.398561,22.601439 L12.398561,22.601439 Z M19.8986531,15.1013469 C19.9649658,15.3902115 20,15.6910144 20,16 C20,18.2091391 18.2091391,20 16,20 C15.6910144,20 15.3902115,19.9649658 15.1013469,19.8986531 L16,19 C16.7677669,19.0000001 17.5355339,18.7071068 18.1213203,18.1213203 C18.7071068,17.5355339 19.0000001,16.7677669 19,16 L19.8986531,15.1013469 L19.8986531,15.1013469 L19.8986531,15.1013469 Z M16.8986531,12.1013469 C16.6097885,12.0350342 16.3089856,12 16,12 C13.7908609,12 12,13.7908609 12,16 C12,16.3089856 12.0350342,16.6097885 12.1013469,16.8986531 L13,16 C12.9999999,15.2322331 13.2928932,14.4644661 13.8786797,13.8786797 C14.4644661,13.2928932 15.2322331,12.9999999 16,13 L16.8986531,12.1013469 L16.8986531,12.1013469 L16.8986531,12.1013469 Z M24,7 L7,24 L8,25 L25,8 L24,7 L24,7 Z"
                    id="eye-hidden"
                    sketch:type="MSShapeGroup"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <small v-if="v$.form.password.$error"
          class="error-msg"
          id="password-error">At least 8 characters, 
          one uppercase letter and one number
        </small>
      </div>
      <button class="log-sign btn">
        <spinning-loader v-if="showLoader"></spinning-loader>
        <span v-if="notLoading">Create Account</span>
      </button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import SpinningLoader from '../components/SpinningLoader.vue'


//regex: min 8 character, min 1 uppercase letter and 1 number
const alpha = helpers.regex(
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
)

export default {
  components: { SpinningLoader },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      showPassword: false,
      form: {
        name: '',
        email: '',
        password: ''
      },
      isRegistered: false,
      showLoader: false,
      notLoading: true
    }
  },
  validations() {
    return {
      form: {
        name: { required }, //Matches this.name
        email: { required, email }, //Matches this.email
        password: {
          required,
          alpha,
          minLength: minLength(8)
        } //Matches this.password
      }
    }
  },
  methods: {
    ...mapMutations(['setToken', 'setUser']),
    signup() {
      if (!this.v$.form.$invalid) {
        this.showLoader = true
        this.notLoading = false
        //first param is the url and second param is the data
        axios
          .post('/users', {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password
          })
          .then(response => {
            this.setToken(response.data.access_token)
            this.setUser({
              //access the properties of the object returned in createUser(backend)
              id: response.data.id,
              name: response.data.name,
              email: response.data.email,
              profilePic: null
            })
            //redirect to homepage once is loged in
            this.$router.push('/')
          })
          .catch(error => {
            console.log(error)
            this.isRegistered = true
          }).then(() => {
            this.showLoader = false
            this.notLoading = true
          })
      } else {
        console.log('Form is invalid')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.go-to-login {
  text-align: right;
  a {
    @include link-style(bold);
    &:hover {
      text-decoration: $hover-classic-link;
      color: $primary-color;
    }
  }
}
.isregistered {
  a {
    font-weight: map-get($font-weights, bold);
    &:hover {
      @include link-hover;
    }
  }
}
</style>