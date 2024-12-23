import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import streamline from './plugins/streamline.js'

const streamlineHeaders = {
    Authorization: 'Bearer ' + localStorage.getItem('access_token')
}
const streamlineUrl = 'http://2022-sharasms.test/api/streamline'
const app = createApp(App)
app.use(streamline,{
    streamlineHeaders,
    streamlineUrl,
    enableCache: false
})

app.mount('#app')
