# Streamline Vue Plugin

A powerful Vue 3 plugin for seamless integration with Streamline backend services, providing reactive state management, caching, and dynamic action calling.

## Installation

```bash
npm install @iankibetsh/streamline
```

## Setup

### 1. Register the Plugin

```javascript
import { createApp } from 'vue'
import streamlinePlugin from './plugins/streamline'
import App from './App.vue'

const app = createApp(App)

app.use(streamlinePlugin, {
  streamlineUrl: 'https://your-api.com/streamline',
  enableCache: true // Optional: Enable local storage caching
})

app.mount('#app')
```

### 2. Use in Components

```vue
<script setup>
import { useStreamline } from './composables/useStreamline'

const { service, loading, props, getActionUrl } = useStreamline('users', 1)
</script>
```

## API Reference

### `useStreamline(stream, ...initialArgs)`

The main composable for interacting with Streamline services.

#### Parameters

- **`stream`** (String): The name of the stream/service to connect to
- **`...initialArgs`** (Any): Optional initial arguments passed to the stream's `onMounted` action

#### Returns

An object containing:

- **`service`**: A reactive proxy object for calling stream actions
- **`loading`**: A reactive ref indicating loading state
- **`props`**: A reactive proxy object containing properties fetched from the stream
- **`getActionUrl`**: A function to generate URLs for stream actions
- **`confirmAction`**: A function to show confirmation dialogs before executing actions

---

## Features

### 1. Dynamic Action Calling

Call any backend action dynamically through the `service` proxy:

```javascript
const { service, loading } = useStreamline('users')

// Call actions dynamically
await service.fetchAll()
await service.create({ name: 'John', email: 'john@example.com' })
await service.update(1, { name: 'Jane' })
await service.delete(5)

// Pass multiple arguments
await service.customAction(arg1, arg2, arg3)
```

### 2. Reactive Properties

Access stream properties that are automatically fetched on mount:

```javascript
const { props, loading } = useStreamline('dashboard', userId)

// Access properties (will auto-fetch if not loaded)
console.log(props.statistics)
console.log(props.userInfo)
console.log(props.settings)
```

Properties are fetched automatically when:
- The component mounts (if `initialArgs` are provided)
- You access any property on the `props` object

### 3. Loading States

Track loading state for all operations:

```vue
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <button @click="service.fetchData()">Fetch Data</button>
    </div>
  </div>
</template>

<script setup>
const { service, loading } = useStreamline('myStream')
</script>
```

### 4. Local Storage Caching

Enable caching to store and retrieve properties from local storage:

```javascript
// In plugin setup
app.use(streamlinePlugin, {
  streamlineUrl: 'https://your-api.com/streamline',
  enableCache: true
})
```

When enabled:
- Properties are cached in local storage with a unique key
- Cached data is loaded instantly on mount
- Cache is updated after each successful fetch
- Cache key includes stream name and initial arguments

### 5. Manual Refresh

Refresh stream properties manually:

```javascript
const { service } = useStreamline('products', categoryId)

// Force refresh properties
await service.refresh()
// or
await service.reload()
```

### 6. Confirmation Dialogs

Show confirmation dialogs before executing actions:

```javascript
const { service } = useStreamline('users')

// Show confirmation with default message
await service.confirm().delete(userId)

// Show confirmation with custom message
await service.confirm('Are you sure you want to delete this user?').delete(userId)
```

The confirmation uses `shRepo.runPlainRequest` from the SH Framework to display a native confirmation dialog.

### 7. Action URLs

Generate URLs for stream actions (useful for links, downloads, or external integrations):

```javascript
const { getActionUrl } = useStreamline('reports')

// Generate URL for an action
const downloadUrl = getActionUrl('download', reportId, 'pdf')
// Result: https://your-api.com/streamline?action=download&stream=reports&params=reportId,pdf

// Cross-stream actions using colon notation
const otherStreamUrl = getActionUrl('otherStream:action', arg1, arg2)
// This will call 'action' on 'otherStream' instead of the current stream
```

### 8. Cross-Stream Actions

Call actions on different streams using colon notation:

```javascript
const { service } = useStreamline('users')

// Call an action on a different stream
await service['analytics:trackEvent'](eventName, eventData)
// This calls 'trackEvent' on the 'analytics' stream
```

## Advanced Usage

### Accessing Properties Immediately

Properties can be accessed before they're loaded - the fetch happens automatically:

```javascript
const { props } = useStreamline('dashboard', userId)

// Access will trigger fetch if not already loaded
watchEffect(() => {
  console.log(props.stats) // Triggers fetchServiceProperties if needed
})
```

### Handling Errors

All service calls return promises that can be caught:

```javascript
const { service } = useStreamline('users')

try {
  const result = await service.create(userData)
  console.log('User created:', result)
} catch (error) {
  console.error('Failed to create user:', error)
}
```

### Form Data Integration

Pass form data to actions:

```javascript
const { service } = useStreamline('posts')

const formData = {
  title: 'My Post',
  content: 'Post content',
  tags: ['vue', 'javascript']
}

await service.create(formData)
```

## Complete Example

```vue
<template>
  <div class="user-management">
    <div v-if="loading" class="loading">Loading...</div>
    
    <div v-else>
      <h1>Total Users: {{ props.totalUsers }}</h1>
      
      <div class="users-list">
        <div v-for="user in props.users" :key="user.id" class="user-card">
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
          
          <button @click="editUser(user)">Edit</button>
          <button @click="deleteUser(user.id)">Delete</button>
          
          <a :href="getActionUrl('exportUser', user.id)" target="_blank">
            Export Profile
          </a>
        </div>
      </div>
      
      <button @click="refreshData">Refresh</button>
      <button @click="addNewUser">Add User</button>
    </div>
  </div>
</template>

<script setup>
import { useStreamline } from './composables/useStreamline'

const { service, loading, props, getActionUrl } = useStreamline('users', 'active')

const editUser = async (user) => {
  try {
    const result = await service.update(user.id, {
      name: user.name,
      email: user.email
    })
    console.log('User updated:', result)
  } catch (error) {
    console.error('Update failed:', error)
  }
}

const deleteUser = async (userId) => {
  try {
    await service.confirm('Delete this user permanently?').delete(userId)
    await service.refresh() // Refresh the list
  } catch (error) {
    console.error('Delete failed:', error)
  }
}

const refreshData = () => {
  service.refresh()
}

const addNewUser = async () => {
  const newUser = {
    name: 'New User',
    email: 'newuser@example.com'
  }
  
  await service.create(newUser)
  await service.refresh()
}
</script>
```

## Backend Integration

Your Streamline backend should respond to these actions:

- **`onMounted`**: Called automatically when component mounts (if initialArgs provided)
  - Should return: `{ properties: { /* your data */ } }`
  
- **Custom Actions**: Any action name you call on `service`
  - Receives: `{ action, stream, params: [...args] }`
  - Should return: `{ data: /* result */ }` or appropriate response

Example backend response for `onMounted`:

```json
{
  "properties": {
    "users": [...],
    "totalUsers": 150,
    "statistics": {...},
    "permissions": {...}
  }
}
```

## Configuration Options

### Plugin Options

```javascript
app.use(streamlinePlugin, {
  streamlineUrl: 'https://api.example.com/streamline', // Required
  enableCache: true, // Optional, default: false
  headers: { // Optional, custom headers
    'Authorization': 'Bearer token',
    'X-Custom-Header': 'value'
  }
})
```

## Best Practices

1. **Use descriptive stream names** that match your backend services
2. **Enable caching** for data that doesn't change frequently
3. **Handle errors** appropriately in your components
4. **Use loading states** to provide user feedback
5. **Leverage confirmation dialogs** for destructive actions
6. **Use `getActionUrl`** for downloadable resources or external links
7. **Call `refresh()`** after mutations to update the UI

## About the `getActionUrl` Function

The `getActionUrl` function generates properly formatted URLs for stream actions:

```javascript
const getActionUrl = (action, ...args) => {
  // Supports cross-stream actions with colon notation
  let newStream = stream
  if(action.includes(':')){
    [newStream, action] = action.split(':')
  }
  
  const post = {
    action,
    stream: newStream,
    params: args
  }
  
  return `${streamlineUrl}?${new URLSearchParams(post).toString()}`
}
```

**Key Features:**
- Generates GET URLs with query parameters
- Supports cross-stream actions (e.g., `'otherStream:action'`)
- Accepts multiple arguments that are serialized as params
- Returns a fully qualified URL ready for use in links, downloads, or API calls

## Dependencies

- Vue 3 (reactive, ref, inject, onMounted)
- @iankibetsh/shframework (shApis, shRepo)

## License

MIT

