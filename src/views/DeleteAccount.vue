<template>
  <div class="delete-account">
    <h1>Supprimer votre compte</h1>
    <p>Voulez vous vraiment supprimer votre compte ?</p>
    <button @click="deleteAccount" class="btn">Confirmer la suppression</button>
  </div>
  
</template>

<script>
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUser']),
    user () {
      return this.$getUser
    }
  },
  methods: {
    ...mapMutations(['logout']),
    deleteAccount () {
      axios
        .delete(`http://localhost:3000/users/${this.user.id}`)
        .then(this.logout()).catch(error => (console.log(error)))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.delete-account {
  text-align: center;
  margin-top: 5rem;
  p {
    color: $primary-color;
    font-weight: map-get($font-weights , bold);
    font-size: 1.1em;
  }
}
</style>