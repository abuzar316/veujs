<template>
    <div>
        <h1>Todos</h1>

        <form @submit="addTodos">
            <p>{{ msg }}</p>
            <input type="text" placeholder="Add Todo..." v-model="title">
            <input type="submit" placeholder="Submit">
        </form>


        <div v-for="todo in allTodos" v-bind:key="todo.id" class="todos">
            {{ todo.title }}
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'


export default {
    name: "Todos",
    computed: mapGetters(['allTodos']),
    methods: {
        // ...mapActions(['fetchTodos']),
        ...mapActions(['addTodo']),
        addTodos(e) {
            e.preventDefault();
            if (this.title === '' || this.title === null) {
                return this.msg = "Please Enter the Value"
            }
            this.msg = null
            this.addTodo(this.title)
            this.title = ''
            // console.log(this.title)
        }
    },
    data() {
        return {
            title: null,
            msg: null
        }
    },
    created() {
        // this.fetchTodos();
        // console.log(this.$store.getters.allTodos)
        // console.log(this.$store.state)

    }
}

</script>