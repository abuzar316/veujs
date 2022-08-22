import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import './assets/main.css'

const app = createApp(App)


app.use(router)

app.use(store)



// console.log(store.commit('increment'))
// console.log(store.state.count)


app.mount('#app')
