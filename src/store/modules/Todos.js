import axios from "axios";


const state = {
    todos: []
};


const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        commit('setTodos', response.data)
        console.log(response.data)
    },
    addTodo({ commit }, title) {
        commit('newTodo', { id: state.todos.length + 1, title })
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todos) => state.todos.push(todos),
};

export default {
    state,

    getters,
    actions,
    mutations
}