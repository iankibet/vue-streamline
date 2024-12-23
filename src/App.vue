<script setup>
import useStreamline from './composables/useStreamline.js'
import { onMounted, ref, toRefs } from 'vue'

const {loading, service:paybillService, getActionUrl,props} = useStreamline('mpesa/paybill')


const foundPaybill = ref(null)

onMounted(()=>{
  // paybillService.getPaybill(32).then(res=>{
  //   foundPaybill.value = res
  // })
})
const findPaybill = async ()=>{
  foundPaybill.value = await paybillService.getPaybill(32)
  console.log(getActionUrl('getPaybill',32))
}
</script>

<template>
  <div>
    <hr/>
    <h3>Destructed: {{ testKey }}</h3>
    <h3>Original: {{ props.testKey }}</h3>
    <h3>Original: {{ props.testKey }}</h3>
    <h3>Original: {{ props.testKey }}</h3>
    <h3>Original: {{ props.testKey }}</h3>
    <h3 class="text-success" >Loading : {{ loading }}</h3>
    <h1 @click="findPaybill">Get Paybill</h1>
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
