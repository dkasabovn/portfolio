<template>
<div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 mb-5" v-for="story in filteredStories" :key="story.uuid">
                <Preview :blok="story"/>
            </div>
        </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            "categories": [
                { text: "Everything", value: 'a' },
                { text: "Projects", value: 'p' },
                { text: "Guides", value: 'g' },
                { text: "Experiences", value: 'e' }
            ],
            "category": 'a',
            "topics": [
                { text: "Everything", value: 'a' },
                { text: "Robotics", value: 'r' },
                { text: "Frontend", value: 'f' },
                { text: "A.I. & M.L.", value: 'x' },
                { text: "Cloud", value: 'c' },
                { text: "Misc.", value: 'm' }
            ],
            "topic": 'a'
        }
    },
    props: {
        stories: Array
    },
    components : {
        Preview : () => import('@/components/Preview.vue')
    },
    computed: {
        filteredStories : function() {
            let stories2 = []
            for (let i = 0; i < 20; i++) {
                stories2.push(this.stories[0])
            }
            return stories2
        }
    }
}
</script>

<style>
/* list styling */
ul {
    list-style: none;
}
</style>