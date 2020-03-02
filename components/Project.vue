<template>
  <div class="d-flex flex-column align-items-center" v-editable="blok" ref="project">
    <client-only>
      <p id="title">{{blok.Title}}</p>
      <img id="hook-image" :src="$storyblokImage(blok.Preview, imageParams)" :alt="blok.title"/>
      <component :key="blok._uid" v-for="blok in blok.Body" :blok="blok" :is="blok.component"></component>
    </client-only>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dimensions: '/1000x1000'
    }
  },
  props: ['blok'],
  computed: {
    imageParams : function() {
        return `/fit-in/${this.dimensions}`
    }
  },
  mounted() {
    let width = this.$refs.project.clientWidth;
    this.dimensions = `${width}x300`
  }
}
</script>

<style scoped>
#title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5em;
  text-align: center;
  padding-bottom: 3vh;
  max-width: 15em;
}
#hook-image {
  margin-bottom: 5vh;
}
@media (min-width: 992px) {
    #title {
      font-size: 4em;
    }
}
</style>