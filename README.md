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
A swal popup asking the user to confirm the action will be shown before the action is called

## Pre Confirm Calling a action/method 

You can pre confirm calling an action/method in the service by calling the method on the service object
```js
const res = await tasksService.confirm('Are you sure you want to delete this task?').deleteTask(1)
```


## Getting url to an action/method in the service

You can get the url to an action/method in the service by calling the getActionUrl method on the service object passing the action name and any parameters
```js
getActionUrl('getTasks', 'active')
 ```

## Accessing class properties
You can access the class properties defined in the service class using the props object returned by the useStreamline function
### In your script
Access the props object to get the class properties, use computed to make it reactive
```js
const title = computed(() => props.title)
```
Then use it in your template
```html
<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>
```
### Directly in your template
In your template just access the props object to get the class properties. Prefer using computed to make it reactive
```html
<template>
    <div>
        <h1>{{props.title}}</h1>
    </div>
</template>
```
