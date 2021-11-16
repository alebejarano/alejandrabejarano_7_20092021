<template>
  <h1 class="account_info_heading">Informations personelles</h1>
  <form action="PATCH"
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
          id="profile-file"
          name="profile-file"
          class="inputfile">
          <label for="profile-file">Modifiez vos photo de profil</label>
          <button type="button" class="delete-pic">Supprimer vos photo</button>
        </div>
      </div>
    </div>
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
export default {}
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
  .profile-pic{
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
      color: #9D1B01;
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