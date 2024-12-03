const streamline = {
    install(app, options) {
        app.provide('streamlineUrl', options.streamlineUrl)
        app.provide('streamlineHeaders', options.streamlineHeaders)
        app.provide('enableCache', options.enableCache)
    }
}

export default streamline