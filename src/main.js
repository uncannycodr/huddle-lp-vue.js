import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import BaseContainer from './components/UI/BaseContainer.vue'

const app = createApp(App)
app.component('base-container', BaseContainer)
app.mount('#app')
