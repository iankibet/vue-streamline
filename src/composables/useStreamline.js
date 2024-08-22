import Axios from 'axios'
import { inject, reactive, ref, toRefs } from 'vue'

const useStreamline = (stream, ...initialArgs) => {
    let formData = {}
    const loading = ref(false) // Create a reactive object to hold the loading state

    // Inject headers and apiEndpoint
    const streamlineUrl = inject('streamlineUrl')
    const streamlineHeaders = inject('streamlineHeaders')

    const axios = Axios.create({
        headers: {
            ...streamlineHeaders
        }
    })

    const service = reactive({}) // Make the service object reactive

    // Fetch the public properties of the service class
    const fetchServiceProperties = async () => {
        try {
            loading.value = true
            const response = await axios.post(streamlineUrl, {
                action: 'onMounted',
                stream,
                params: initialArgs
            })
            Object.assign(service, response.data) // Assign the properties to the reactive service object
            loading.value = false
        } catch (error) {
            console.error(`Error fetching properties for stream ${stream}`, error)
            loading.value = false
            throw error
        }
    }

    const proxyService = new Proxy(service, {
        get(target, action) {
            if (action in target) {
                return target[action] // Return the reactive property if it exists
            }

            return (...args) => {
                const setDataActions = ['setFormData', 'setData']
                if (setDataActions.includes(action)) {
                    formData = args[0]
                    return proxyService
                }

                const postBody = {
                    action,
                    stream,
                    ...formData,
                }

                const getUrlMethods = ['getUrl', 'getFullUrl', 'getActionUrl']
                if (getUrlMethods.includes(action)) {
                    postBody.action = args[0]
                    const params = args.slice(1)
                    if (params.length > 0) {
                        postBody.params = params
                    }
                    return streamlineUrl + '?' + new URLSearchParams(postBody).toString()
                }
                postBody.params = args
                return axios.post(streamlineUrl, postBody)
            }
        }
    })

    // Fetch and set the properties on initialization
    fetchServiceProperties()

    return {
        ...toRefs(service), // Spread the reactive service properties and return as refs for reactivity
        service: proxyService, // Return the proxy service for method calls
        loading
    }
}

export default useStreamline