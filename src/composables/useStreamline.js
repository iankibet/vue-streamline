import Axios from 'axios'
import { inject, onMounted, reactive, ref, toRefs } from 'vue'

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
    const handler = {
        get(target, prop, receiver) {
            if (prop in target) {
                return target[prop]
            }
            return async (...args) => {
                loading.value = true
                try {
                    const response = await axios.post(streamlineUrl, {
                        action: prop,
                        stream,
                        ...formData,
                        params: args
                    })
                    return response.data
                } catch (error) {
                    console.error(`Error calling ${prop} on stream ${stream}`, error)
                    throw error
                } finally {
                    loading.value = false
                }
            }
        }
    }

    const service = reactive({
    }) // Make the service object reactive

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
        for (const method of data.methods) {
            const fn = async (...args) => {
                loading.value = true
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
                } finally {
                    loading.value = false
                }
            }
            service[method] = fn
        }
    }

    const getActionUrl = (action, ...args) => {
       // console log all arguments to this

        const post = {
            action,
            stream,
            params: args
        }
        return streamlineUrl + '?' + new URLSearchParams(post).toString()

    }
    onMounted(()=>{
        fetchServiceProperties()
    })

    return {
        loading,
        service: new Proxy(service, handler),
        getActionUrl
    }
}

export default useStreamline
