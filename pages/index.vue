<template>
<div>
    <nuxt-child/>
</div>
</template>

<script>

export default {
  middleware: 'redirect',
  data() {
    return {
      stories: [

      ]
    }
  },
  async fetch(context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API
        return context.app.$storyapi.get(`cdn/stories/`, {
          version: version
        }).then((res) => {
          context.store.commit('push', res.data.stories)
        }).catch((res) => {
          context.error({ statusCode: res.response.status, message: res.response.data })
        })
  },
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
