export const state = () => ({
    stories: []
})

export const mutations = {
    push (state, list) {
        state.stories = list
    }
}

export const getters = {
    get (state) {
        return state.stories
    },
    getStory (state) {
        return word => state.stories.find(x => x.name == word)
    }
}