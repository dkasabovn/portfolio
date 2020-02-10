<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-5" v-for="story in get" :key="story.uuid">
            <Preview :blok="story"/>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    components : {
        Preview : () => import('@/components/Preview.vue')
    },
    computed: mapGetters([
        'get',
        'getStory'
    ])
}
</script>

<style>
/* list styling */
ul {
    list-style: none;
}
</style>