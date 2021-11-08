<template>
  <h1 class="account_info_heading content_heading">Vos contenus</h1>  
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.content_heading {
  @media (max-width: $large-breakpoint) {
    text-align: center;
  } 
}
</style>
