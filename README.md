# vue-streamline

Vue library for streamlining laravel backend services with @iankibet/streamline composer package

## Installation

```sh
npm install @iankibet/vue-streamline
```

## Usage

In your main.js file, import the library and register it as a plugin:

```js
import {streamline} from '@iankibetsh/vue-streamline'
```

```js
Vue.use(streamline, {
    streamlineHeaders: {
        // Add any headers you want to send with the request
    },
    streamlineUrl: 'http://localhost:8000/api/streamline' // The url to the streamline route
})
```


## usage in vue component

```js
import { useStreamline } from '@iankibet/vue-streamline'


const {service:tasksService} = useStreamline('tasks')

// call the service methods

tasksServices.getTasks().then(response => {
    console.log(response)
})
```