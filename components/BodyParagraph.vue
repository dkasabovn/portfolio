<template>
    <div class="body-paragraph col-sm-12 col-lg-8" v-editable="blok">
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
    margin-bottom: 50px;
    text-align: justify;
}
.md >>> .r-u {
    text-decoration: #db3056 underline;
}
.md >>> .red {
    color: #db3056;
}
.md >>> blockquote {
    font-family: 'Work Sans', serif;
    font-size: 2em;
    color: rgba(0, 0, 0, .8);
    font-style: italic;
}
</style>