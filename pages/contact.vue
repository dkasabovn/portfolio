<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2 col-sm-12 offset-lg-2">
                <div id="contact"><p>Contact Me</p></div>
                <Contact/>
            </div>
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
#contact {
    font-family: 'Playfair Display', sans-serif;
    font-size: 2rem;
}
</style>
