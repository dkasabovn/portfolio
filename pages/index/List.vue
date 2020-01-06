<template>
<div class="container-fluid">
    <div class="row">
        <div class="row col-lg-9 offset-lg-1">
            <div class="col-sm-12 col-md-6 col-lg-4 mb-5" v-for="story in filteredStories" :key="story.uuid">
                <Preview :blok="story"/>
            </div>
        </div>
        <div class="col">
            <p>Categories</p>
            <p>Topics</p>
            <p>Search</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            category: 'a',
            categories: {
                'Projects' : 'p',
                'Articles' : 'r',
                'Opinions' : 'o',
                'All Posts' : 'a'
            },
            topic: 'a',
            topics: {
                'Robotics' : 'r',
                'Frontend' : 'f',
                'Data Science' : 'd',
                'Software' : 's',
                'Educations' : 'e',
                'Anything' : 'a'
            } 
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
            for (let i = 0; i < 5; i++) {
                stories2.push(this.stories[0])
            }
            return stories2
        }
    }
}
</script>

<style scoped>
/* list styling */
ul {
    list-style: none;
}
/* Overall Layout */
</style>