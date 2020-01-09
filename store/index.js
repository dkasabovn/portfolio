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

export const actions = {
    nuxtServerInit ({commit}) {
        return this.$storyapi.get(`cdn/stories/`, {
            version: 'draft'
          }).then((res) => {
            commit('push', res.data.stories)
          })
    },
    refresh ({commit}) {
        return this.$storyapi.get(`cdn/stories/`, {
            version: 'draft'
          }).then((res) => {
            commit('push', res.data.stories)
          })
    }
}

export const strict = false