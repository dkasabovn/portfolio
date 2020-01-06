<template>
  <div class="dropdown">
    <select v-model="selectedOption" @input="event => {$emit('input', event.target.value)}">
      <option v-for="(option, name) in options" :key="option" :value="option">{{name}}</option>
    </select>
  </div>
</template>

<script>

export default {
    data() {
        return {     
            selectedOption: null
        }
    },
    props : {
        value: null,
        options: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.selectedOption = this.value
    },
    watch: {
        value: function(newValue) {
            this.selectedOption = newValue
        }
    }
}

</script>

<style scoped>
.dropdown {
    display: inline-block;
}
select {
    background-color: white;
    border: none;
    border-bottom: 1px solid #ff6961;
    font-family: 'Fira Code',courier,serif;
    min-width: 5vw;
    font-size: 2em;
    margin: 0 .5em 0 .5em;
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
}
select * {
    font-size: 1em;
}
option {
    text-align: center;
}
</style>