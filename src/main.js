import { createApp } from 'vue'
import App from './App.vue'
import route from './routes'
import { createStore } from 'vuex'
//wave
import VWave from 'v-wave'
//element ui
import installElement from './plugins/element'
//font awesome
import installFontAwesome from './plugins/font-awesome'
//tailwindcss
import './index.css'

const app = createApp(App)

installElement(app)
installFontAwesome(app)

app.use(route)
  .use(VWave)
  .use(createStore({
    state() {
      return {
        user: {
          username: "",
          password: "",
          avatar: "",
          auth: false
        }
      }
    },
    mutations: {
      setUser(state, user) {
        state.user = user
      },
      setAuth(state, val) {
        state.user.auth = val
      }
    },
    actions: {
      logout(context) {
        context.commit('setAuth', false)
      }
    }
  }))

app.mount('#app')