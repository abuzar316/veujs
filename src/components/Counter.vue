<template>
    <div>
        <h2>{{ count }}</h2>
        <button v-on:click="incre">add</button>
    </div>
</template>
<script>
import store from '../store/index';
console.log(store.state.count)

export default {
    name: "Counter",
    data() {
        return {
            count: store.state.count
        }
    },
    methods: {
        async incre() {
            const data = await store.dispatch('increment')
            console.log("first")
            store.commit('increment')
            console.log(data)
        }
    },
}

</script>