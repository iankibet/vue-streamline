const streamline = {
    install(app, options) {
        app.provide('streamlineUrl', options.streamlineUrl ?? '/api/streamline')
        // app.provide('streamlineHeaders', options.streamlineHeaders)
        app.provide('enableCache', options.enableCache)

        // put them on window
        window.streamlineUrl = options.streamlineUrl ?? '/api/streamline'
        window.enableCache = options.enableCache ?? false
    }
}

export default streamline