import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

// Dark mode class is applied by the inline script in index.html before this bundle loads.
const app = createApp(App)
app.use(router)
app.mount('#app')
