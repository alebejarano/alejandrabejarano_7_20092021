<template>
    <h1 class="account_info_heading password-heading">Modifier vos mot de passe</h1>
    <div class="changepassword-div">
      <label for="current-password">Nouveau Mot de passe</label>
      <div class="form_group_input-div">
        <input type="password"
          id="current-password"
          name="password"
          aria-describedby="password-error"
          autocomplete="current-password"
          required>
        <!--show-hide password icon-->
        <button type="button"
          aria-pressed="false"
          aria-label="Show password as plain text. Warning: this will display your password on the screen."
          id="toggle-password"
          class="show-password">
          <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            width="18px"
            height="18px"
            style="enable-background:new 0 0 50 50;"
            xml:space="preserve">
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
        </button>
      </div>
      <small id="password-error">* Password error</small>
    </div>
    <div class="account-btn-div">
      <button class="btn account_info_button">Sauvegarder</button>
    </div>
</template>

<script>
export default {
  components: { }
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
.account-btn-div {
  text-align: center;
}
</style>