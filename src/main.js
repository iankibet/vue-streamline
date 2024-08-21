import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import streamline from './plugins/streamline.js'

const streamlineHeaders = {
    Authorization: 'Bearer '
}
const streamlineUrl = 'streamline'
const app = createApp(App)
app.use(streamline,{
    streamlineHeaders,
    streamlineUrl
})

app.mount('#app')
