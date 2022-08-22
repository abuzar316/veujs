import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'

import Todos from './modules/Todos';
import user from './modules/user';
// console.log(Todos)

const store = createStore({
    modules: {
        Todos,
        user
    },
    plugins: [
        new VuexPersistence().plugin
    ]
})

export default store;