<template>
  <div class="d-flex flex-column align-items-center" v-editable="blok" ref="project">
    <div class="col-sm-12 col-lg-10">
      <client-only>
        <h1 class="title">{{blok.Title}}</h1>
        <component :key="blok._uid" v-for="blok in blok.Body" :blok="blok" :is="blok.component"></component>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {

  props: ['blok'],

}
</script>

<style scoped>
.title {
  font-family: 'Lato', sans-serif;
  font-size: 27px;
  color: black;
  text-align: left;
  max-width: 15em;
}
</style>