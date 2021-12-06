import "normalize.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'
import axios from 'axios'
import { FocusTrap } from 'focus-trap-vue'


// set auth header
if (store.getters['getToken']) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${store.getters['getToken']}`;
}


//Create and mount the root instance.
const app = createApp(App)
.component('FocusTrap', FocusTrap)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.use(store)

app.mount('#app')
