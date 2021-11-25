<template>
  <h1 class="account_info_heading password-heading">Modifier vos mot de passe</h1>
  <div class="changepassword-div">
    <label for="new-password">Nouveau Mot de passe</label>
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
      id="password-error">Minimum 8 caractères,
      au moins une majuscule et au moins un numéro
    </small>
  </div>
  <div class="btn-div">
    <button @click="updatePassword()" class="btn account_info_button">Sauvegarder</button>
  </div>
  <div aria-live="polite" v-if="succesufullyUpdated" class="success">
    <p class="success-p">Mot de pass mis à jour</p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

//regex: min 8 character, min 1 uppercase letter and 1 number
const alpha = helpers.regex(
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
)

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      showPassword: false,
      succesufullyUpdated: false,
      form: {
        password: ''
      }
    }
  },
  validations() {
    return {
      form: {
        password: {
          required,
          alpha,
          minLength: minLength(8)
        } //Matches this.password
      }
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    user () {
      return this.getUser
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    updatePassword () {
      if (!this.v$.form.$invalid) {
        axios
          .patch(`http://localhost:3000/users/${this.user.id}`, {
            password: this.form.password
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

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.password-heading {
  @media (max-width: $small-breakpoint) {
    letter-spacing: 0.1em;
  }
}
.changepassword-div {
  width: 100%;
  @media (max-width: $large-breakpoint) {
    margin: auto;
    width: 50%;
  }
  @media (max-width: $small-breakpoint) {
    width: 65%;
  }
  @media (max-width: $xsmall-breakpoint) {
    width: 90%;
  }
}
</style>