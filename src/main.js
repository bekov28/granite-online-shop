import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router/routes'
import { auth } from './utility/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

let app
//Mount the app only after Firebase confirms the user's login state
onAuthStateChanged(auth, async (user) => {
  //if the app is not initialized
  if (!app) {
    app = createApp(App)
    app.use(createPinia())
    app.use(router)

    app.mount('#app')
  }
})
