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
    ustreamlineHeaders: {
        // Add any headers you want to send with the request
    },
    streamlineUrl: 'http://localhost:8000/api/streamline' // The url to the streamline route
})
```