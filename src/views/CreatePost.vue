<template>
    <div class="create-post-div">
      <h1 class="create-post-div_heading">Créer une publication</h1>
      <div class="create-post-div_content">
        <textarea name="post" id="createpost" cols="40" rows="10"
          placeholder="De quoi voulez vous parler ?"></textarea>
      </div>
    </div> 
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.create-post-div {
  margin: auto;
  width: 50%;
  &_heading {
    font-size: map-get($font-sizes , heading2);
    text-align: center;
    margin: 2rem 0;
  }
  &_content {
    width: 50%;
    margin: auto;
    textarea {
      resize: vertical;
      border-color: $second-text-color;
    }
  }
}
</style>