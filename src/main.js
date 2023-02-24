import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './axios.config'
import './assets/main.css'

const app = createApp(App)
const pania = createPinia()

pania.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(pania)
app.use(router)

app.mount('#app')
