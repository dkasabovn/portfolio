<template>
    <div class="body-paragraph col-sm-12 col-lg-9" v-editable="blok">
        <div v-html="richtext" class="md text-"></div>
    </div>
</template>

<script>

export default {
    props: ['blok'],
    computed : {
        richtext() {
            return this.blok.Main ? this.$storyapi.richTextResolver.render(this.blok.Main) : ''
        }
    },
    mounted() {
        Prism.highlightAll()
    }
}
</script>

<style scoped>
.md {
    font-size: .7em;
    font-weight: 400;
    font-family: 'Work Sans', sans-serif;
}
.md >>> p, .md >>> h1, .md >>> h3 {
    line-height: 2em;
}
.md >>> h1, .md >>> h3 {
    line-height: 2em;
    vertical-align: text-top;
}
.md >>> p {
    color: rgba(70, 70, 70, 1.0);
    margin: 16px 0;
    text-align: left;
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

@media (min-width: 992px) {
    .md {
        font-size: 1.1em;
    }
}
</style>