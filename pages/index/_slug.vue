<template>
    <div>
        <section class="restrict-width">
            <component v-if="story.content" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
        </section>
        <div id="social-media-links">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            story : null
        }
    },
    props : {
        stories: Array,
    },
    asyncData({params}) {
        return {
            name : params.slug
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
    },
    created () {
        this.story = this.stories.find(s => s.name == this.name)
    }
}
</script>

<style scoped>
.restrict-width {
    display: flex;
    width: inherit;
    justify-content: center;
}
</style>