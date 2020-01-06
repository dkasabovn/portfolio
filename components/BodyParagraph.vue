<template>
    <div class="body-paragraph" v-editable="blok">
        <div v-html="richtext" class="md"></div>
    </div>
</template>

<script>
export default {
    props: ['blok'],
    computed : {
        richtext() {
            return this.blok.Main ? this.$storyapi.richTextResolver.render(this.blok.Main) : ''
        }
    }
}
</script>

<style scoped>
.body-paragraph {
    width: 40%;
}
.md {
    font-size: 1.1em;
    font-weight: 300;
    font-family: 'Work Sans', sans-serif;
    color: black;
}
.md >>> * {
    line-height: 2em;
}
.md >>> h1, .md >>> h3 {
    line-height: 2em;
    vertical-align: text-top;
}
.md >>> p {
    margin-bottom: 3vh;
    text-align: justify;
}
</style>