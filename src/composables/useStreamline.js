import Axios from 'axios'
import { inject } from 'vue'

const useStreamline = stream => {
    let formData = {}

    // inject headers and apiEndpoint
    const streamlineUrl = inject('streamlineUrl')
    const streamlineHeaders = inject('streamlineHeaders')

    const service = new Proxy({}, {
        get(target, action) {
            if (target[action]) {
                return target[action]
            }
            return (...args) => {
                const setDataActions = ['setFormData', 'setData']
                if (setDataActions.includes(action)) {
                    formData = args[0]
                    return service
                }
                const config = {
                    headers: {
                        ...streamlineHeaders
                    }
                }
                const axios =  Axios.create({
                    baseURL: streamlineUrl,
                    headers: {
                        ...config.headers
                    }
                })
                window.streamlineAxios = axios
                return axios.post('/', {
                    action,
                    stream,
                    ...formData,
                    params: {
                        ...args
                    }
                })
            }
        }
    })

    return {
        service
    }
}

export default useStreamline