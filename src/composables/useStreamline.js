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
                const axios =  Axios.create({
                    headers: {
                        ...streamlineHeaders
                    }
                })

                window.streamlineAxios = axios
                const postBody = {
                    action,
                    stream,
                    ...formData,
                }
                const getUrlMethods = ['getUrl','getFullUrl','getActionUrl']
                if(getUrlMethods.includes(action)) {
                   // return string url with postBody as query params
                    // flatten params object
                    // params are from args 1, unset the first arg
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

    return {
        service
    }
}

export default useStreamline