import Axios from 'axios';
import { inject, onMounted, reactive, ref } from 'vue';

const useStreamline = (stream, ...initialArgs) => {
    let formData = {};
    const loading = ref(false);
    const propertiesFetched = ref(false);
    const fetching = ref(false);
    // cache key for local storage, include initialArgs in the key
    const cacheKey = `streamline_${stream}_${initialArgs.join('_')}`;

    // Inject headers and API endpoint
    const streamlineUrl = inject('streamlineUrl');
    const streamlineHeaders = inject('streamlineHeaders');
    const enableCache = inject('enableCache');

    const axios = Axios.create({
        headers: {
            ...streamlineHeaders,
        },
    });

    const fetchServiceProperties = async () => {
        if (loading.value || fetching.value || propertiesFetched.value) return;
        fetching.value = true;

        try {
            loading.value = true;
            const response = await axios.post(streamlineUrl, {
                action: 'onMounted',
                stream,
                params: initialArgs,
            });
            assignPropertiesAndMethods(response.data);
            enableCache && localStorage.setItem(cacheKey, JSON.stringify(response.data));
        } catch (error) {
            console.error(`Error fetching properties for stream ${stream}`, error);
            throw error;
        } finally {
            propertiesFetched.value = true;
            fetching.value = false;
            loading.value = false;
        }
    };

    const assignPropertiesAndMethods = (data) => {
        Object.assign(service, data.properties); // Assign the properties to the reactive service object
        for (const method of data.methods) {
            const fn = async (...args) => {
                loading.value = true;
                try {
                    const response = await axios.post(streamlineUrl, {
                        action: method,
                        stream,
                        ...formData,
                        params: args,
                    });
                    return response.data;
                } catch (error) {
                    console.error(`Error calling ${method} on stream ${stream}`, error);
                    throw error;
                } finally {
                    loading.value = false;
                }
            };
            service[method] = fn;
        }
    };

    const handler = {
        get(target, prop, receiver) {
            // Fetch properties if not already fetched
            if (!propertiesFetched.value && !loading.value) {
                fetchServiceProperties().then(() => target[prop]);
            }

            // Handle existing properties
            if (prop in target) {
                return target[prop];
            }
            // Handle nonexistent properties or dynamic methods
            return (...args) => {
                loading.value = true;
                return axios
                    .post(streamlineUrl, {
                        action: prop,
                        stream,
                        ...formData,
                        params: args,
                    })
                    .then((response) => {
                        loading.value = false;
                        return response.data;
                    })
                    .catch((error) => {
                        loading.value = false;
                        console.error(`Error calling ${prop} on stream ${stream}`, error);
                        throw error;
                    });
            };
        },
    };

    const getActionUrl = (action, ...args) => {
        console.log('getActionUrl called with:', action, args);
        const post = {
            action,
            stream,
            params: args,
        };
        return `${streamlineUrl}?${new URLSearchParams(post).toString()}`;
    };

    const service = reactive({}); // Make the service object reactive

    onMounted(() => {
        if (initialArgs.length > 0) {
            fetchServiceProperties();
        }
        if (!enableCache) return;
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
            assignPropertiesAndMethods(JSON.parse(cachedData));
        }

    });

    return {
        loading,
        service: new Proxy(service, handler),
        getActionUrl,
    };
};

export default useStreamline;
