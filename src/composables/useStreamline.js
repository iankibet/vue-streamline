import Axios from 'axios'
import { inject, reactive, ref, toRefs } from 'vue'

const useStreamline = (stream, ...initialArgs) => {
    let formData = {}
    const loading = ref(false)

    // Inject headers and apiEndpoint
    const streamlineUrl = inject('streamlineUrl')
    const streamlineHeaders = inject('streamlineHeaders')

    const axios = Axios.create({
        headers: {
            ...streamlineHeaders
        }
    })

    const service = reactive({}) // Make the service object reactive

    // Function to fetch the public properties of the service class
    const fetchServiceProperties = async () => {
        try {
            loading.value = true
            const response = await axios.post(streamlineUrl, {
                action: 'onMounted',
                stream,
                params: initialArgs
            })
            assignPropertiesAndMethods(response.data)
        } catch (error) {
            console.error(`Error fetching properties for stream ${stream}`, error)
            throw error
        } finally {
            loading.value = false
        }
    }

    // Function to assign properties and methods to the service object
    const assignPropertiesAndMethods = (data) => {
        Object.assign(service, data.properties) // Assign the properties to the reactive service object
        const methods = data.methods
        for (const method of methods) {
            service[method] = async (...args) => {
                try {
                    const response = await axios.post(streamlineUrl, {
                        action: method,
                        stream,
                        ...formData,
                        params: args
                    })
                    return response.data
                } catch (error) {
                    console.error(`Error calling ${method} on stream ${stream}`, error)
                    throw error
                }
            }
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
                const getMethodsActions = ['getMethods','getActions','getFunctions','getServiceMethods']
                if(getMethodsActions.includes(action)) {
                    return Object.keys(proxyService).filter(key=>{
                        if(typeof proxyService[key] === 'function') {
                            return key
                        }
                    })
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
                return axios.post(streamlineUrl, postBody).then(response => response.data).catch(error => {
                    console.error(`Error calling ${action} on stream ${stream}`, error)
                    throw error
                })
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
