const streamline = {
    install(app, options) {
        app.provide('streamlineUrl', options.streamlineUrl)
        app.provide('streamlineHeaders', options.streamlineHeaders)
    }
}

export default streamline