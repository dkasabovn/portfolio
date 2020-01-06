<template>
  <div class="project" v-editable="blok">
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
.project {
  padding-top: 20vh;
  width: inherit;
  align-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#title {
  font-family: 'Playfair Display', serif;
  font-size: 4em;
  text-align: center;
  padding-bottom: 3vh;
}

#hook-image {
  margin-bottom: 5vh;
}
</style>