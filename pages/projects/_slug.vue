<template>
    <div class="container">
        <section>
            <component v-if="story" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            story : null
        }
    },
    mounted () {
        
        let storycontent = this.getStory(this.$route.params.slug)
        if (storycontent != null) {
            this.story = storycontent
        } else {
            this.$nuxt.error({statusCode: 404, message: "Page could not be found"})
        }
        this.$store.dispatch('refresh')
    },
    computed: mapGetters(['getStory'])
}
</script>

<style scoped>
</style>