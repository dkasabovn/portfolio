<template>
    <div ref="preview" class="preview-container">
         <img id="preview-image" :src="$storyblokImage(blok.content.Preview.filename, '')" :alt="blok.content.Preview.alt"/>
         <p id="preview-date">
             {{blok.created_at}}
         </p>
         <p id="preview-title">
             <nuxt-link :to="'projects/' + blok.name" tag="span" class="link-underline">{{blok.content.Title}} <span style="color:#db3056;">&#8594;</span></nuxt-link>
         </p>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            dimensions: '/1000x500',
        }
    },
    props:['blok', 'params'],
    computed: {
        imageParams : function() {
            return `/fit-in/${this.dimensions}/filters:fill(transparent):format(png)`
        }
    },
    mounted() {
        let width = this.$refs.preview.clientWidth;
        this.dimensions = `${width}x250`
    }
}
</script>

<style scoped>
p {
    margin: 0;
}
.preview-container {
    width: inherit;
}
#preview-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: black;
    text-align: left;
}
#preview-date {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 15px;
    padding: 5px 0;
    color: rgba(0, 0, 0, .5);
}
#preview-image {
    max-width: 100%;
    height: auto;
}
.link-underline:hover {
    text-decoration: underline;
}
</style>