import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

// Initialize dark mode from localStorage before mount
const saved = localStorage.getItem('scout-theme')
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
}

const app = createApp(App)
app.use(router)
app.mount('#app')
