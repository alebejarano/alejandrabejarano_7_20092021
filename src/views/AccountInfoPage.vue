<template>
  <account-layout>
        <h1 class="account_info_heading">Informations personelles</h1>
        <form action="PATCH"
          class="form"
          name="form"
          id="form">
          <div class="form_group account_info_form-item">
            <label for="name">Nom complet</label>
            <div class="form_group_input-div">
              <input type="text"
                placeholder="Ecrivez vos prenom et nom"
                id="fullName"
                name="fullName"
                aria-describedby="fullName-error"
                required>
            </div>
            <small id="fullName-error">* Ecrivez vos prenom et nom</small>
          </div>
          <div class="form_group account_info_form-item">
            <label for="email">Email</label>
            <div class="form_group_input-div">
              <input type="email"
                placeholder="email"
                id="email"
                name="email"
                aria-describedby="email-error"
                required>
            </div>
            <small id="email-error">* Email wrong</small>
          </div>
          <button class="btn account_info_button">Sauvegarder</button>
        </form>
  </account-layout>      
</template>

<script>
import AccountLayout from '../components/AccountLayout.vue'
export default {
  components: { AccountLayout },
}
</script>

<style lang="scss" scoped>
</style>