import { inject, onMounted, reactive, ref } from 'vue'
import { shApis, shRepo } from '@iankibetsh/shframework'

const useStreamline = (stream, ...initialArgs) => {
    let formData = {}
    const loading = ref(false)
    const propertiesFetched = ref(false)
    const confirmationMessage = ref(null)

    // Cache key for local storage, include initialArgs in the key
    const cacheKey = `streamline_${stream}_${initialArgs.join('_')}`

    // Inject headers and API endpoint
    const streamlineUrl = inject('streamlineUrl',window.streamlineUrl)
    const enableCache = inject('enableCache',window.enableCache)

    const originalProps = reactive({})

    // Proxy to intercept access
    const props = new Proxy(originalProps, {
        get(target, property, receiver) {
            if (!propertiesFetched.value) {
                fetchServiceProperties().then(() => target[property])
            }
            return Reflect.get(target, property, receiver) // Return the actual value
        },
        set(target, property, value, receiver) {
            return Reflect.set(target, property, value, receiver) // Update the value
        }
    })

    const fetchServiceProperties = async (force) => {
        if(!force){
            if (loading.value || propertiesFetched.value) return
        }

        try {
            loading.value = true
            const response = await shApis.doPost(streamlineUrl, {
                action: 'onMounted',
                stream,
                params: initialArgs
            })
            assignProperties(response.data)
            enableCache && localStorage.setItem(cacheKey, JSON.stringify(response.data))
        } catch (error) {
            console.error(`Error fetching properties for stream ${stream}`, error)
            throw error
        } finally {
            propertiesFetched.value = true
            loading.value = false
        }
    }

    const assignProperties = (data) => {
        Object.assign(service, data.properties)
        Object.assign(originalProps, data.properties)
    }

    const handler = {
        get(target, prop, receiver) {
            if (prop in target) {
                return target[prop]
            }

            return (...args) => {
                if(prop === 'refresh' || prop === 'reload'){
                    return fetchServiceProperties(true)
                }
                if(prop === 'confirm'){
                    return confirmAction(args[0] ?? 'Are you sure?')
                }
                let repo = null
                const data = {
                    action: prop,
                    stream,
                    ...formData,
                    params: args,
                    initialParams: initialArgs
                }
                args.forEach(arg => {
                    if (arg && typeof arg === 'object' && !Array.isArray(arg)) {
                        Object.assign(data, arg)
                    }
                })
                if (confirmationMessage.value) {
                  repo = shRepo.runPlainRequest(streamlineUrl,null, confirmationMessage.value,data)
                } else {
                    repo = shApis
                        .doPost(streamlineUrl, data);
                }

                loading.value = true
                return repo.then((response) => {
                    loading.value = false
                    if(confirmationMessage.value){
                        confirmationMessage.value = null

                        if(!response.isConfirmed){
                            return
                        }
                        if(response.value?.success){
                            return response.value.response
                        } else {
                            // throw error
                            throw response.value.error
                        }

                    }

                        return response.data
                    })
                    .catch((error) => {
                        loading.value = false
                        console.error(`Error calling ${prop} on stream ${stream}`, error)
                        throw error
                    })
            }
        }
    }
    const getActionUrl = (action, ...args) => {
        let newStream = stream
        if(action.includes(':')){
            [newStream, action] = action.split(':')
        }
        const post = {
            action,
            stream:newStream,
            params: args
        }
        return `${streamlineUrl}?${new URLSearchParams(post).toString()}`

        // // Add each arg as a separate param
        // args.forEach((arg, index) => {
        //     let value = arg;
        //     if (typeof arg === 'object' && !(arg instanceof Date)) {
        //         value = JSON.stringify(arg);
        //     } else if (arg instanceof Date) {
        //         value = arg.toISOString();
        //     }
        //     params.append(`params[${index}]`, value);
        // })

        // return `${streamlineUrl}?${params.toString()}`
    }

    const service = reactive({})

    // Confirmation wrapper
    const confirmAction = (message) => {
        confirmationMessage.value = message
        return new Proxy(service, handler)
    }

    onMounted(() => {
        if (initialArgs.length > 0) {
            fetchServiceProperties()
        }
        if (!enableCache) return
        const cachedData = localStorage.getItem(cacheKey)
        if (cachedData) {
            assignProperties(JSON.parse(cachedData))
        }
    })

    return {
        loading,
        service: new Proxy(service, handler),
        getActionUrl,
        confirmAction,
        props
    }
}

export default useStreamline
