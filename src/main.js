import { createApp } from 'vue'
import App from './App.vue'
import route from './routes'
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
app.mount('#app')