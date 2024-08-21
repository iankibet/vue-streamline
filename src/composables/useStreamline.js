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
                    headers: {
                        ...config.headers
                    }
                })
                window.streamlineAxios = axios
                const postBody = {
                    action,
                    stream,
                    ...formData,
                    params: {
                        ...args
                    }
                }
                const getUrlMethods = ['getUrl','getFullUrl','getActionUrl']
                if(getUrlMethods.includes(action)) {
                   // return string url with postBody as query params
                     return streamlineUrl + '?' + new URLSearchParams(postBody).toString()
                }
                return axios.post(streamlineUrl, postBody)
            }
        }
    })

    return {
        service
    }
}

export default useStreamline