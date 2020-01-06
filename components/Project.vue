<template>
  <div class="d-flex flex-column align-items-center" v-editable="blok">
    <client-only>
      <p id="title">{{blok.Title}}</p>
      <img id="hook-image" :src="$storyblokImage(blok.Preview, '')" :alt="blok.title"/>
      <component :key="blok._uid" v-for="blok in blok.Body" :blok="blok" :is="blok.component"></component>
    </client-only>

  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
#title {
  font-family: 'Playfair Display', serif;
  font-size: 4em;
  text-align: center;
  padding-bottom: 3vh;
  max-width: 15em;
}
#hook-image {
  margin-bottom: 5vh;
}
</style>