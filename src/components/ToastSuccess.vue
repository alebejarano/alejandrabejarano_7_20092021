<template>
    <div aria-live="polite"
    class="success">
    <slot name="icon"></slot>
    <p :class="type+'-p'">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ['type'],

}
</script>