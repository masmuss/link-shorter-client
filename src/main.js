import { createApp } from 'vue'
import './style.css'
import 'tw-elements'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'
createApp(App).use(router).mount('#app')
