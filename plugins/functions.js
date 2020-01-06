import Vue from 'vue'


Vue.prototype.$storyblokImage = (imageURL, option) => {
    var imageService = '//img2.storyblok.com'
    var path = imageURL.replace('//a.storyblok.com', '')
    return imageService + option + path
}