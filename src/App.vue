<template>
  <!--<a href="#main" ref="skipLink" class="skip-link">Skip to main content</a>-->
  <router-view />
</template>

<script>

export default {
  name: 'App',
  /*watch: {
    $route() {
      this.$refs.skipLink.focus()
    }
  },*/
}
</script>

<style lang="scss">
@import "@/scss/app.scss";
</style>
