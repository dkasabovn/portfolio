<template>
<div>
    <nuxt-child/>
</div>
</template>

<script>

export default {
  middleware: 'redirect',
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  },
  fetch ({store}) {
    store.dispatch('refresh')
  }
}
</script>

<style scoped>
  .project-container {
    width: inherit;
  }
  #top {
    display: flex;
    flex-direction: row;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid rgba(0,0,0, .15);
    margin-bottom: 20px;
  }
  #top * {
    align-self: center;
  }
  #top p {
    font-size: 2.5em;
    font-family: 'Cormorant Garamond', serif;
  }
</style>
