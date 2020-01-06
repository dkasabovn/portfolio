<template>
    <div class="container">
        <div class="row">

        </div>
        <div id="contact" class="section">
            <Contact/>
        </div>
    </div>
</template>

<script>
export default {
    components : {
        Contact : () => import('@/components/ContactForm.vue')
    }
}
</script>

<style scoped>
</style>