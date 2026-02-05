import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import streamline from './plugins/streamline.js'
import { ShFrontend } from '@iankibetsh/shframework'

const streamlineHeaders = {
    Authorization: 'Bearer ' + localStorage.getItem('access_token')
}
const streamlineUrl = 'http://2022-sharasms.test/api/streamline'
const app = createApp(App)
app.use(ShFrontend, {
    baseApiUrl: 'http://2022-sharasms.test/api'
})
app.use(streamline,{
    streamlineHeaders,
    streamlineUrl,
    enableCache: true
})

app.mount('#app')
