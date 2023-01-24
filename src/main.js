import { createApp } from 'vue'
import { createHead } from "@vueuse/head";
import Toaster from "@meforma/vue-toaster";
import router from './router'
import App from './App.vue'

import './css/style.scss'

const app = createApp(App)
const head = createHead();
app.use(head)
app.use(Toaster)
app.use(router)
app.mount('#app')
