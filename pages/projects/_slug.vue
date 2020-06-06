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
    async asyncData({ store, params, error }) {
        let storycontent = store.getters.getStory(params.slug)
        if (storycontent != null) {
            return {
                story: storycontent,
                meta: storycontent.content.meta_field
            }
        } else {
            error({statusCode: 404, message: "Page could not be found"})
        }
        store.dispatch('refresh')
    },
    computed: mapGetters(['getStory']),
    head() {
        return {
            title: this.meta.title,
            meta:  [
                {hid: 'og:title', property: 'og:title', name: 'og:title',content: this.meta.title},
                {hid: 'og:description', property: 'og:description', name: 'og:description', content: this.meta.description},
                {hid: 'description', name: 'description', property: 'description', content: this.meta.description}
            ]
        }
    }
}
</script>

<style scoped>
</style>