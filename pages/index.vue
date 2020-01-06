<template>
<div>
    <nuxt-child :stories="stories"/>
</div>
</template>

<script>
import GithubLink from '@/components/GithubLink.vue'
import LeagueLink from '@/components/LeagueLink.vue'

export default {
  middleware: 'redirect',
  data() {
    return {
      stories: [

      ]
    }
  },
  asyncData(context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API
        return context.app.$storyapi.get(`cdn/stories/`, {
            version: version
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
  },
  components : {
    GithubLink,
    LeagueLink
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
  },
  methods : {
    selectStory : function(index) {
      this.index = index
    }
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
