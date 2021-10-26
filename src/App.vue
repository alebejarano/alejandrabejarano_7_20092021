<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
body {
  margin: 0;
}
#app {
  font-family: 'Rubik', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
</style>
