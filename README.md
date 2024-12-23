# vue-streamline

Vue library for streamlining laravel backend services with @iankibet/streamline composer package

## Installation

```sh
npm install @iankibetsh/vue-streamline
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


const {getActionUrl, service:tasksService, props} = useStreamline('tasks')

```

## Calling an action/method in the service

You can call an action/method in the service by calling the method on the service object
```js
const res = await tasksService.getTasks()

// or

tasksService.getTasks().then(response => {
    console.log(response)
})
```


## Getting url to an action/method in the service

You can get the url to an action/method in the service by calling the getActionUrl method on the service object passing the action name and any parameters
```js
getActionUrl('getTasks', 'active')
 ```

## Accessing class properties
In your template just access the props object to get the class properties
```html
<template>
    <div>
        <h1>{{props.title}}</h1>
    </div>
</template>
```
