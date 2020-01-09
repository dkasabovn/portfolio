<template>
    <div class="container">
        <section>
            <component v-if="story" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            story : null
        }
    },
    async fetch({params, error, store}) {
        let storycontent = store.getStory(params.slug)
        if (storycontent) {
            return {
                story: storycontent
            }
        } else {
            error({statusCode: 404, message: "pogchamp"})
        }
    },
    mounted () {
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
</style>