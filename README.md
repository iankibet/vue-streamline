# Streamline Vue Plugin

A robust Vue 3 plugin designed for seamless integration with Streamline backend services. It delivers reactive state management, intelligent caching, and dynamic action invocation.

## Installation

```bash
npm install @iankibetsh/vue-streamline
```

## Setup

### 1. Register the Plugin

```javascript
import { createApp } from 'vue';
import { streamline } from '@iankibetsh/vue-streamline';
import App from './App.vue';

const app = createApp(App);

// Define authentication headers
const streamlineHeaders = {
  Authorization: `Bearer ${localStorage.getItem('access_token')}`
};

// Construct the Streamline endpoint URL
const streamlineUrl = `${import.meta.env.VITE_APP_API_URL}streamline`;

app.use(streamline, {
  streamlineHeaders,
  streamlineUrl,
  enableCache: true // Optional: enables local storage caching
});

app.mount('#app');
```

### 2. Use in Components

```vue
<script setup>
import { useStreamline } from '@iankibetsh/vue-streamline';

const { service, loading, props, getActionUrl } = useStreamline('users', 1);
</script>
```

## API Reference

### `useStreamline(stream, ...initialArgs)`

Primary composable for interfacing with Streamline services.

#### Parameters

- **`stream`** (`string`): Name of the target stream or service.
- **`...initialArgs`** (`any`): Optional arguments passed to the stream’s `onMounted` action.

#### Returns

An object with the following reactive properties and utilities:

| Property         | Type                  | Description |
|------------------|-----------------------|-------------|
| `service`        | Reactive Proxy        | Proxy for invoking stream actions dynamically. |
| `loading`        | `ref<boolean>`        | Indicates ongoing operations. |
| `props`          | Reactive Proxy        | Holds properties fetched from the stream. |
| `getActionUrl`   | `Function`            | Generates URLs for specific actions. |
| `confirmAction`  | `Function`            | Displays confirmation dialogs before actions. |

---

## Features

### 1. Dynamic Action Calling

Invoke backend actions via the `service` proxy:

```javascript
const { service, loading } = useStreamline('users');

// Standard CRUD operations
await service.fetchAll();
await service.create({ name: 'John', email: 'john@example.com' });
await service.update(1, { name: 'Jane' });
await service.delete(5);

// Custom actions with multiple arguments
await service.customAction(arg1, arg2, arg3);
```

### 2. Reactive Properties

Properties are fetched automatically upon component mount or first access:

```javascript
const { props, loading } = useStreamline('dashboard', userId);

// Properties trigger fetch on access if not yet loaded
console.log(props.statistics);
console.log(props.userInfo);
console.log(props.settings);
```

**Auto-fetch triggers:**
- Component `onMounted` (when `initialArgs` are provided)
- First property access on the `props` proxy

### 3. Loading States

Monitor operation status reactively:

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
import { useStreamline } from '@iankibetsh/vue-streamline';

const { service, loading } = useStreamline('data');
</script>
```

### 4. Local Storage Caching

Enable persistent caching across sessions:

```javascript
app.use(streamline, {
  streamlineUrl: 'https://your-api.com/streamline',
  enableCache: true
});
```

**Behavior when enabled:**
- Data is stored in `localStorage` using a unique key (stream + arguments).
- Cached data loads instantly on mount.
- Cache updates after successful fetch operations.
- Keys are deterministic and scoped per stream and arguments.

### 5. Manual Refresh

Force reload of stream properties:

```javascript
const { service } = useStreamline('products', categoryId);

// Refresh properties
await service.refresh(); // or service.reload()
```

### 6. Confirmation Dialogs

Prompt users before destructive actions:

```javascript
const { service } = useStreamline('users');

// Default confirmation message
await service.confirm().delete(userId);

// Custom message
await service.confirm('Are you sure you want to delete this user?').delete(userId);
```

> Uses `shRepo.runPlainRequest` from the SH Framework for native confirmation dialogs.

### 7. Action URLs

Generate fully qualified action URLs:

```javascript
const { getActionUrl } = useStreamline('reports');

const downloadUrl = getActionUrl('download', reportId, 'pdf');
// → https://your-api.com/streamline?action=download&stream=reports&params=reportId,pdf

// Cross-stream actions
const analyticsUrl = getActionUrl('analytics:trackEvent', eventName, eventData);
```

### 8. Cross-Stream Actions

Execute actions on different streams using colon notation:

```javascript
const { service } = useStreamline('users');

await service['analytics:trackEvent'](eventName, eventData);
```

## Advanced Usage

### Immediate Property Access

Access properties before loading — fetch triggers automatically:

```javascript
const { props } = useStreamline('dashboard', userId);

watchEffect(() => {
  console.log(props.stats); // Triggers fetch if needed
});
```

### Error Handling

All action calls return promises:

```javascript
const { service } = useStreamline('users');

try {
  const result = await service.create(userData);
  console.log('User created:', result);
} catch (error) {
  console.error('Creation failed:', error);
}
```

### Form Data Integration

Pass structured data to actions:

```javascript
const { service } = useStreamline('posts');

const formData = {
  title: 'My Post',
  content: 'Post content',
  tags: ['vue', 'javascript']
};

await service.create(formData);
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
          
          <a :href="getActionUrl('exportUser', user.id)" target="_blank" rel="noopener">
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
import { useStreamline } from '@iankibetsh/vue-streamline';

const { service, loading, props, getActionUrl } = useStreamline('users', 'active');

const editUser = async (user) => {
  try {
    const result = await service.update(user.id, {
      name: user.name,
      email: user.email
    });
    console.log('User updated:', result);
  } catch (error) {
    console.error('Update failed:', error);
  }
};

const deleteUser = async (userId) => {
  try {
    await service.confirm('Delete this user permanently?').delete(userId);
    await service.refresh();
  } catch (error) {
    console.error('Delete failed:', error);
  }
};

const refreshData = () => service.refresh();

const addNewUser = async () => {
  const newUser = { name: 'New User', email: 'newuser@example.com' };
  await service.create(newUser);
  await service.refresh();
};
</script>
```

## Best Practices

1. **Use descriptive stream names** aligned with backend services.
2. **Enable caching** for infrequently updated data.
3. **Handle errors gracefully** in component logic.
4. **Display loading states** for better user experience.
5. **Use confirmation dialogs** for irreversible actions.
6. **Leverage `getActionUrl`** for links and downloads.
7. **Call `refresh()`** after mutations to synchronize UI.

## `getActionUrl` Function Details

```javascript
const getActionUrl = (action, ...args) => {
  let targetStream = stream;
  let targetAction = action;

  if (action.includes(':')) {
    [targetStream, targetAction] = action.split(':');
  }

  const payload = {
    action: targetAction,
    stream: targetStream,
    params: args
  };

  return `${streamlineUrl}?${new URLSearchParams(payload).toString()}`;
};
```

**Key Capabilities:**
- Serializes arguments into query parameters.
- Supports cross-stream routing via `stream:action`.
- Produces ready-to-use, fully qualified URLs.

## Dependencies

- **Vue 3**: `reactive`, `ref`, `inject`, `onMounted`
- **@iankibetsh/shframework**: `shApis`, `shRepo`

## License

MIT