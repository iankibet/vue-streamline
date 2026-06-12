import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import streamline from './plugins/streamline.js'
import { ShCore } from '@iankibetsh/sh-core'

const streamlineUrl = 'http://2022-sharasms.test/api/streamline'
const app = createApp(App)
app.use(createPinia())
app.use(ShCore, {
    baseApiUrl: 'http://2022-sharasms.test/api'
})
app.use(streamline, {
    streamlineUrl,
    enableCache: true
})

app.mount('#app')
