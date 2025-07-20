import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router/routes'
import { auth } from './utility/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useThemeStore } from './stores/themeStore'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)

const themeStore = useThemeStore()
if (themeStore.theme) {
  const bodyElement = document.body;
  bodyElement.setAttribute('data-bs-theme', themeStore.theme)
}

let isMounted = false

//Mount the app only after Firebase confirms the user's login state
onAuthStateChanged(auth, async (user) => {
  //if the app is not initialized
  if (!isMounted) {
    app.mount('#app')
    isMounted = true
  }
})
