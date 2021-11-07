<template>
  <div class="guest">
    <div class="guest_block">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.guest {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: $secondary-color;
  @media (max-width: $xsmall-breakpoint) {
    background-color: $light-background;
  }
  &_block {
    background-color: $light-background;
    border-radius: 3rem;
    padding: 1rem 1.5rem;
    width: 55%;
    max-width: 60%;
    min-width: 250px;
    .icon-svg {
      display: block;
      margin: auto;
      @media (max-width: $medium-breakpoint) {
        width: 70%;
      }
    }
    &_container {
      .line-break {
        width: 90%;
        text-align: left;
        margin-left: 0;
      }
      &_heading {
        margin-bottom: 0.2rem;
        @media (max-width: $medium-breakpoint) {
          font-size: map-get($font-sizes, heading2 )
        }
      }
      @media (max-width: $xsmall-breakpoint) {
        margin: 1rem;
      }

    }
  }
}
</style>