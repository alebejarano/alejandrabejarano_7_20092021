<template>
  <app-layout>
    <account-layout>
      <h1 class="account_info_heading">Vos contenus</h1>
    </account-layout>
  </app-layout>
</template>

<script>
import AccountLayout from '../components/AccountLayout.vue'
import AppLayout from '../components/AppLayout.vue'
export default {
  components: { AppLayout, AccountLayout }
}
</script>
