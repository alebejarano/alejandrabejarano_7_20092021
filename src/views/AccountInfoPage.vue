<template>
        <h1 class="account_info_heading">Informations personelles</h1>
        <form action="PATCH"
          class="personal-info-form"
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
          <div class="account-btn-div">
            <button class="btn account_info_button">Sauvegarder</button>
          </div>
        </form>  
</template>

<script>
export default {
  
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
}
</style>