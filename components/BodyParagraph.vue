<template>
    <div class="body-paragraph" v-editable="blok">
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
    font-size: 16px;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
}
.md >>> code {
    margin-bottom: 40px;
}
.md >>> .imagec {
    text-align: center;
}
.md >>> p {
    line-height: 1.8;
}
.md >>> h3 {
    vertical-align: text-top;
    font-size: 25px;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, .5);
}
.md >>> p img {
    display: block;
    margin: 20px auto;
    max-width: 90%;
}
.md >>> p {
    color: rgba(0, 0, 0, .7);
    text-align: left;
    margin-block-end:30px;
    margin-block-start:0px;
    margin-bottom:30px;
    margin-inline-end:0px;
    margin-inline-start:0px;
    margin-left:0px;
    margin-right:0px;
    margin-top:0px;
    text-align:left;
    text-size-adjust:100%;
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
.md >>> ol {
    padding-left: 40px!important;
}
</style>