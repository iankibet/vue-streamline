<script setup>
import getActionUrl from './composables/getActionUrl.js'
</script>

<template>
<h3>Sample Action Url: {{ getActionUrl('users:listUsers','admin','active') }}</h3>
</template>

<style scoped>

</style>