import { createApp } from 'vue'
import './assets/css/tailwind.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import mdiVue from 'mdi-vue/v3.js'
import * as mdijs from '@mdi/js'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)
app.use(mdiVue, {
    icons: mdijs
})

app.mount('#app')
