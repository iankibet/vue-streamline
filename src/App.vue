<script setup>
import useStreamline from './composables/useStreamline.js'
import { ref } from 'vue'

const {loading, service:paybillService} = useStreamline('mpesa/paybill',28)


const foundPaybill = ref(null)

const findPaybill = async ()=>{
  foundPaybill.value = await paybillService.getPaybill(28)
}
</script>

<template>
  <div>
    {{ paybillService.getMethods() }}
    <input type="text">
    {{ paybillService.paybill }}
    <h1 @click="findPaybill(28)">Try Find</h1>
    {{ paybillService.getActionUrl('addPaybill') }}
<h3 class="text-success" v-if="loading">Loading...</h3>
    {{ foundPaybill }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
