# Streamline Vue Plugin

A robust Vue 3 plugin designed for seamless integration with Streamline backend services. It delivers reactive state management, intelligent caching, and dynamic action invocation.

## 🚀 Key Features

- **Zero-Config Actions**: Invoke backend methods directly via a JavaScript Proxy.
- **Stateful Streams**: Initial arguments are persisted across all subsequent action calls.
- **Object Argument Mapping**: Pass objects that automatically populate backend `request()` data and map to method parameters.
- **Reactive State**: Automatically syncs public properties from your backend Stream classes.
- **Smart Caching**: Optional local storage caching for instant data availability.
- **Security & Privacy**: Automatically filters out internal methods and properties from the response payload.

## 📦 Installation

```bash
npm install @iankibetsh/vue-streamline
```

## ⚙️ Setup

### 1. Register the Plugin

```javascript
import { createApp } from "vue";
import { streamline } from "@iankibetsh/vue-streamline";
import App from "./App.vue";

const app = createApp(App);

app.use(streamline, {
  streamlineUrl: "https://your-api.com/api/streamline",
  enableCache: true, // Optional
});

app.mount("#app");
```

### 2. Use in Components

```vue
<script setup>
import { useStreamline } from "@iankibetsh/vue-streamline";

// Pass initial arguments (e.g., ID 42)
// These are PERSISTED for all future actions on this service
const { service, loading, props } = useStreamline("project", 42);

const update = async () => {
  // Backend receives taskId=42 in constructor automatically
  await service.updateStatus("active");
};
</script>
```

## 📖 API Reference

### `useStreamline(stream, ...initialArgs)`

Primary composable for interfacing with Streamline services.

#### Parameters

- **`stream`** (`string`): Name of the target stream class on the backend.
- **`...initialArgs`** (`any`): Arguments passed to the backend constructor. **These are persisted for every subsequent action call.**

#### Returns

| Property        | Type           | Description                                                    |
| --------------- | -------------- | -------------------------------------------------------------- |
| `service`       | Reactive Proxy | Proxy for invoking backend methods.                            |
| `loading`       | `ref<boolean>` | `true` when a request is in flight.                            |
| `props`         | Reactive Proxy | Holds public properties fetched from the backend.              |
| `getActionUrl`  | `Function`     | Generates URLs for actions (downloads, exports).               |
| `confirmAction` | `Function`     | Wrapper for triggering a confirmation dialog before an action. |

---

## 🧙 Advanced Features

### 1. Persistent State

Unlike traditional APIs where you send the ID every time, Streamline remembers:

```javascript
const { service } = useStreamline("user", 123);

// Backend runs: new UserStream(123)->changePassword('secret')
await service.changePassword("secret");

// Backend still runs: new UserStream(123)->getLogs()
await service.getLogs();
```

### 2. Method Object Mapping

You can pass objects to methods. Streamline will:

1. Merge the object into the backend `request()` data.
2. Automatically map object keys to specific method parameters if they match by name.

```javascript
// Frontend
service.updateProfile(123, { bio: 'New bio', age: 30 });

// Backend
public function updateProfile($userId, $bio) {
    // $userId = 123
    // $bio = 'New bio' (auto-mapped from object)
    // request('age') = 30
}
```

### 3. Confirmation Dialogs

Prompt users before destructive actions:

```javascript
await service.confirm("Delete this user?").delete();
```

### 4. Cross-Stream Actions

Execute actions on different streams using colon notation:

```javascript
await service["logs:clear"]();
```

### 5. Manual Refresh

Force reload of stream properties:

```javascript
await service.refresh(); // or service.reload()
```

## 📄 License

MIT
