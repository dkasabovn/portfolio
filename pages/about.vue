<template>
    <div class="container">
        <div class="row h-100">
            <div class="col-lg-9 col-sm-12">
                <div id="bg-img"></div>
            </div>
            <div class="col-lg-3 my-auto">
                <h1 id="h1" class="text-center text-lg-left">About Me</h1>
                <p class="about-text text-justify text-lg-left">
                    I'm a student developer based in Austin, Tx. I specialize in C++, Kotlin, and Javascript.
                    I am looking for a summer 2020 internship in or around the Austin area.
                    Feel free to <nuxt-link :to="'contact'" tag="span" class="red-link">Contact Me.</nuxt-link> 
                </p>
            </div>
        </div>
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
    height: 50vh;
    background-clip: content-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
#h1 {
    font-family: 'Playfair Display', serif;
    margin-top: 3vh;
}

@media (min-width: 992px) {
    #bg-img {
        height: 90vh;
    }
    #h1 {
        margin-top: 0;
    }
}
</style>