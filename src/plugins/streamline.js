// v2: thin compat shim. The streamline implementation now lives in
// @iankibetsh/sh-core; this plugin only maps the old options onto the
// injection keys / window globals the core composable reads.
const streamline = {
    install (app, options = {}) {
        const streamlineUrl = options.streamlineUrl ?? '/api/streamline'
        const enableCache = options.enableCache ?? true

        app.provide('streamlineUrl', streamlineUrl)
        app.provide('enableCache', enableCache)

        window.streamlineUrl = streamlineUrl
        window.enableCache = enableCache

        if (options.streamlineHeaders) {
            console.warn('[vue-streamline] `streamlineHeaders` is deprecated and ignored: requests are authenticated by the @iankibetsh/sh-core API client (bearer or cookie strategy).')
        }
    }
}

export default streamline
