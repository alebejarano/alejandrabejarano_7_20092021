<template>
  <div class="loader">
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.loader {
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin: auto 1rem;
  border-radius: 50%;
}
.loader:before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  z-index: 10;
  background: linear-gradient(90deg, #aec5eb, #b4c6f0, #bbc6f5, #c3c6f9, #ccc5fc, #d6c5fe, #e0c4ff, #ebc3ff);
  border-radius: 50%;
}
.circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(90deg, #a3a2a4, #aaa9ab, #b2b1b2, #b9b8ba, #c0c0c1, #c8c8c8, #cfcfd0, #d7d7d7);
  animation: rotate 900ms linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg); 
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>