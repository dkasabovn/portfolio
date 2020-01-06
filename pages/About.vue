<template>
    <div class="container">
        <div class="row h-100">
            <div class="col-lg-9">
                <div id="bg-img"></div>
            </div>
            <div class="col-lg-3 my-auto">
                <h1 id="h1">About Me</h1>
                <p class="about-text">
                    I'm a developer based in Austin, Tx. I specialize in C++, Kotlin, and Javascript.
                    I am looking for a summer 2020 internship in or around the Austin area.
                    Feel free to <nuxt-link :to="'contact'" tag="span" class="red-link">Contact Me.</nuxt-link> 
                </p>
            </div>
        </div>
        <!-- <div id="contact" class="section">
            <Contact/>
        </div> -->
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.about-text {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
}
#bg-img {
    background-image: url('~assets/827633.jpg');
    width: 100%;
    height: 90vh;
    background-clip: content-box;
    background-repeat: no-repeat;
    background-size: cover;
}
#h1 {
    font-family: 'Playfair Display', serif;
}
</style>